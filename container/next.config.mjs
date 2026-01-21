/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return[
      {
        source: "/products/:path*",
        destination: `${process.env.HOME_APP_URL}/products/:path*`,
      },
      {
        source: "/cart/:path*",
        destination: `${process.env.CART_APP_URL}/cart/:path*`,
      },
    ]
  }
};

export default nextConfig;
