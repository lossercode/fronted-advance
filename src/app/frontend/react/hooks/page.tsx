'use client';

import Link from 'next/link';
import { useState } from 'react';
import CodeBlock from '@/components/CodeBlock';

export default function HooksPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white">
            CodeHub
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/frontend/react" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              返回 React
            </Link>
          </div>
        </div>
      </nav>

      {/* 页面内容 */}
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* 标题区域 */}
          <div className="mb-12">
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-4">
              <Link href="/frontend" className="hover:text-zinc-900 dark:hover:text-white">前端</Link>
              <span>/</span>
              <Link href="/frontend/react" className="hover:text-zinc-900 dark:hover:text-white">React</Link>
              <span>/</span>
              <span className="text-zinc-900 dark:text-white">Hooks</span>
            </div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              React Hooks
            </h1>
            <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span>难度：⭐⭐</span>
              <span>•</span>
              <span>预计时间：15 分钟</span>
              <span>•</span>
              <span>5 课时</span>
            </div>
          </div>

          {/* 1. 问题驱动 */}
          <section className="mb-12">
            <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <span>❓</span>
                <span>要解决什么问题？</span>
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                在 React 16.8 之前，如果你想在函数组件中使用状态（state）或生命周期方法，你必须将组件改写成类组件。这导致了：
              </p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>代码复杂度增加，类组件的 this 绑定让人困惑</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>逻辑复用困难，需要使用高阶组件或 render props</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-1">•</span>
                  <span>组件难以拆分和测试</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 2. 核心概念 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span>📌</span>
              <span>核心概念</span>
            </h2>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl mb-6">
              <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-4">
                <strong>Hooks</strong> 是 React 16.8 引入的新特性，让你在不编写类组件的情况下使用 state 和其他 React 特性。
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">useState</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">在函数组件中添加状态</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">useEffect</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">处理副作用和生命周期</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">useContext</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">访问 React Context</p>
                </div>
                <div className="p-4 bg-white dark:bg-zinc-950 rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">自定义 Hooks</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">复用组件逻辑</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 代码示例 + 可视化 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span>💻</span>
              <span>代码示例与实时演示</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 左侧：代码 */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  useState 示例
                </h3>
                <CodeBlock
                  code={`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  );
}`}
                  language="jsx"
                  showLineNumbers={true}
                />
              </div>

              {/* 右侧：实时演示 */}
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  实时演示
                </h3>
                <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">
                      点击了 {count} 次
                    </p>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-lg hover:scale-105 transition-transform font-medium"
                    >
                      点击我
                    </button>
                    <button
                      onClick={() => setCount(0)}
                      className="ml-4 px-6 py-3 border-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white rounded-lg hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors font-medium"
                    >
                      重置
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. 实战案例 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span>🎯</span>
              <span>实战案例</span>
            </h2>
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">
                构建一个 Todo List 应用
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                使用 useState 和 useEffect 构建一个完整的待办事项应用，包含添加、删除、标记完成等功能。
              </p>
              <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
                查看完整案例 →
              </button>
            </div>
          </section>

          {/* 5. 进阶技巧 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span>⚡</span>
              <span>进阶技巧</span>
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-zinc-950 rounded-xl border-2 border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  1. 使用函数式更新
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  当新状态依赖于旧状态时，使用函数式更新可以避免闭包陷阱
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-zinc-950 rounded-xl border-2 border-zinc-200 dark:border-zinc-800">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  2. 惰性初始化
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  对于复杂的初始状态计算，使用函数形式可以提高性能
                </p>
              </div>
            </div>
          </section>

          {/* 6. 检查清单 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span>✅</span>
              <span>学习检查清单</span>
            </h2>
            <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-zinc-700 dark:text-zinc-300">理解 Hooks 解决的问题</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-zinc-700 dark:text-zinc-300">掌握 useState 的基本用法</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-zinc-700 dark:text-zinc-300">能够使用 Hooks 构建简单组件</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5 rounded" />
                <span className="text-zinc-700 dark:text-zinc-300">完成实战案例练习</span>
              </label>
            </div>
          </section>

          {/* 导航按钮 */}
          <div className="flex items-center justify-between pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/frontend/react"
              className="px-6 py-3 border-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white rounded-lg hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors font-medium"
            >
              ← 返回课程列表
            </Link>
            <button className="px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-lg hover:scale-105 transition-transform font-medium">
              下一课：useEffect →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
