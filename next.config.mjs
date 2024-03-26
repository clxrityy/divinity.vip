/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ADMIN_CREDENTIALS: process.env.ADMIN_CREDENTIALS,
    }
};

export default nextConfig;
