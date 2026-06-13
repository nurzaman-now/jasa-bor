/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // <--- BARIS INI WAJIB ADA agar folder 'out' tercipta
    images: {
        unoptimized: true, // <--- Wajib untuk ekspor statis agar gambar tidak error di hosting biasa
    },
};

export default nextConfig;