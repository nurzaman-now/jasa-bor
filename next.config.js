/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
};

if (typeof module !== 'undefined') {
    module.exports = nextConfig;
} else {
    export default nextConfig;
}