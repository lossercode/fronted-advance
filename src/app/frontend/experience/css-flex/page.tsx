'use client';

import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';

export default function ReactPerformancePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
            CodeHub
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/frontend" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              返回前端
            </Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="pt-24 pb-20 px-6">
        <div className='w-[360px] inline-block'>
            <div className='h-100 flex flex-row-reverse shrink-0 w-[720px]'>
                <div className='w-[720px] bg-amber-200'>我是内容</div>
            </div>
        </div>
      </div>
    </div>
  );
}
