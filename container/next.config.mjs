/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return[
      {
        source: "/products/:path*",
        destination: "http://localhost:3001/products/:path*",
      },

         {
        source: "/cart/:path*",
        destination: "http://localhost:3002/cart/:path*",
      },

    ]
  }
};

export default nextConfig;
