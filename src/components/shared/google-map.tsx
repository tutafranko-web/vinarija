"use client";

import { GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

export function GoogleMap() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-border">
      <iframe
        src={GOOGLE_MAPS_EMBED_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Luviji lokacija - Hvar"
      />
    </div>
  );
}
