/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Agar optimasi gambar Next.js tetap bekerja di hosting biasa (static export)
  },
};

module.exports = nextConfig;