/**
 * PurgeCSS sengaja tidak dipakai: `defaultExtractor` bawaan memecah kelas Tailwind
 * arbitrari (mis. pb-[133.333%], scroll-mt-[100px], max-w-[min(...)]) sehingga di
 * production CSS-nya terhapus → layout rusak (galeri cuma garis abu-abu, dll.).
 * Tailwind v3 JIT sudah memangkas utilitas lewat `content` di tailwind.config.js.
 */
module.exports = {
  plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
};
