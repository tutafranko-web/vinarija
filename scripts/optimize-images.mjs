import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = join(__dirname, "..", "public", "images");

const MAX_WIDTH = 1600;
const QUALITY = 82;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

function fmtBytes(n) {
  return (n / 1024).toFixed(1) + " KB";
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for await (const file of walk(IMAGES_DIR)) {
    const ext = extname(file).toLowerCase();
    if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

    const before = (await stat(file)).size;
    totalBefore += before;

    const tmpJpeg = file + ".tmp.jpg";
    const webpPath = file.replace(/\.(jpe?g|png)$/i, ".webp");

    const meta = await sharp(file).metadata();
    const needsResize = meta.width && meta.width > MAX_WIDTH;

    const pipeline = sharp(file).rotate();
    if (needsResize) pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

    await pipeline
      .clone()
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(tmpJpeg);

    await pipeline
      .clone()
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    if (ext === ".png") {
      await unlink(file);
      const newJpeg = file.replace(/\.png$/i, ".jpg");
      await rename(tmpJpeg, newJpeg);
    } else {
      await unlink(file);
      await rename(tmpJpeg, file);
    }

    const finalJpeg = ext === ".png" ? file.replace(/\.png$/i, ".jpg") : file;
    const after = (await stat(finalJpeg)).size;
    const webpSize = (await stat(webpPath)).size;
    totalAfter += after;

    results.push({
      file: basename(file),
      before: fmtBytes(before),
      after: fmtBytes(after),
      webp: fmtBytes(webpSize),
      saved: fmtBytes(before - after),
    });
  }

  console.table(results);
  console.log(`\nTotal: ${fmtBytes(totalBefore)} -> ${fmtBytes(totalAfter)} (saved ${fmtBytes(totalBefore - totalAfter)})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
