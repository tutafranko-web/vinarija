import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { BlogPostContent } from "./blog-post-content";
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-data";
import {
  BreadcrumbJsonLd,
  BlogPostJsonLd,
} from "@/components/shared/json-ld";

export async function generateStaticParams() {
  const locales = ["hr", "en"];
  return locales.flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const isHr = locale === "hr";
  const title = isHr ? post.titleHr : post.titleEn;
  const description = isHr ? post.excerptHr : post.excerptEn;

  return {
    ...buildMetadata(locale, {
      path: `/blog/${slug}`,
      image: post.image,
      hr: { title, description },
      en: { title, description },
    }),
    openGraph: {
      type: "article",
      locale: isHr ? "hr_HR" : "en_US",
      title,
      description,
      url: `https://vinarija-xi.vercel.app/${locale}/blog/${slug}`,
      publishedTime: post.date,
      authors: ["Luviji"],
      siteName: "Luviji",
      images: [{ url: post.image, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const isHr = locale === "hr";
  const title = isHr ? post.titleHr : post.titleEn;
  const description = isHr ? post.excerptHr : post.excerptEn;
  const content = isHr ? post.contentHr : post.contentEn;

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: isHr ? "Pocetna" : "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: title, path: `/blog/${slug}` },
        ]}
      />
      <BlogPostJsonLd
        title={title}
        description={description}
        image={post.image}
        date={post.date}
        url={`https://vinarija-xi.vercel.app/${locale}/blog/${slug}`}
        articleBody={content}
        wordCount={content.split(/\s+/).length}
        inLanguage={isHr ? "hr-HR" : "en-US"}
        category={post.category}
      />
      <BlogPostContent />
    </>
  );
}
