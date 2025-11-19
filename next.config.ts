import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,

  // GitHub Pages 部署配置
  // 如果部署到 GitHub Pages，取消下面的注释并设置正确的仓库名
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '',

  images: {
    unoptimized: true, // 静态导出需要禁用图片优化
  },
};

export default nextConfig;
