const HOME_URL = process.env.VERCEL ? "https://home-app.vercel.app":"http://home:3000";

const CART_URL = process.env.VERCEL ? "https://cart-app.vercel.app":"http://cart:3000";


/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return[
      {
        source: "/products/:path*",
        destination: `${HOME_URL}/products/:path*`,
      },
      {
        source: "/cart/:path*",
        destination: `${CART_URL}/cart/:path*`,
      },
    ]
  }
};

export default nextConfig;
