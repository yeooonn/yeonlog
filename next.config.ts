import type { NextConfig } from 'next';
import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   typedRoutes: true,
  // },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // 필요한 마크다운 플러그인 추가 가능
  options: {
    remarkPlugins: [remarkGfm], // Markdown 문법 확장(표, 체크박스, 취소선 등) 플러그인
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
