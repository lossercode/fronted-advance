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
        <div className="max-w-4xl mx-auto">
          {/* 面包屑 */}
          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-6">
            <Link href="/frontend" className="hover:text-zinc-900 dark:hover:text-white">前端</Link>
            <span>/</span>
            <Link href="/frontend#experiences" className="hover:text-zinc-900 dark:hover:text-white">经验总结</Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-white">React 性能优化</span>
          </div>

          {/* 文章头部 */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              React 性能优化：避免不必要的重渲染
            </h1>

            {/* 元信息 */}
            <div className="flex items-center gap-4 flex-wrap mb-6">
              <span className="text-sm text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                2025-01-15
              </span>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs text-zinc-600 dark:text-zinc-400">
                  React
                </span>
                <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs text-zinc-600 dark:text-zinc-400">
                  性能优化
                </span>
              </div>
            </div>

            {/* 摘要 */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-zinc-700 dark:text-zinc-300">
                在实际开发中，React 组件的不必要重渲染是影响性能的主要原因之一。本文将深入探讨如何使用 React.memo、useMemo 和 useCallback 来优化组件性能。
              </p>
            </div>
          </header>

          {/* 文章内容 */}
          <article className="prose prose-zinc dark:prose-invert max-w-none">
            {/* 问题场景 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                🤔 问题场景
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                在开发一个列表组件时，我发现每次父组件状态更新，所有子组件都会重新渲染，即使它们的 props 没有变化。这导致了明显的性能问题。
              </p>
              <CodeBlock
                code={`// 问题代码
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {items.map(item => (
        <ExpensiveChild key={item} value={item} />
      ))}
    </div>
  );
}

// 每次 count 更新，所有 ExpensiveChild 都会重渲染
function ExpensiveChild({ value }) {
  console.log('ExpensiveChild rendered:', value);
  // 复杂的计算...
  return <div>{value}</div>;
}`}
                language="jsx"
                showLineNumbers={true}
              />
            </section>

            {/* 解决方案 1 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                ✅ 解决方案 1：使用 React.memo
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                React.memo 是一个高阶组件，它会对 props 进行浅比较，只有 props 变化时才重新渲染。
              </p>
              <CodeBlock
                code={`// 优化后的代码
const ExpensiveChild = React.memo(({ value }) => {
  console.log('ExpensiveChild rendered:', value);
  return <div>{value}</div>;
});

// 现在只有 value 变化时才会重渲染`}
                language="jsx"
                showLineNumbers={true}
              />
            </section>

            {/* 解决方案 2 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                ✅ 解决方案 2：使用 useCallback
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">
                当传递函数作为 props 时，使用 useCallback 可以避免每次渲染都创建新的函数引用。
              </p>
              <CodeBlock
                code={`function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3]);

  // 使用 useCallback 缓存函数
  const handleClick = useCallback((item) => {
    console.log('Clicked:', item);
  }, []); // 空依赖数组，函数永远不变

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {items.map(item => (
        <ExpensiveChild
          key={item}
          value={item}
          onClick={handleClick} // 函数引用不变
        />
      ))}
    </div>
  );
}`}
                language="jsx"
                showLineNumbers={true}
              />
            </section>

            {/* 最佳实践 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                💡 最佳实践
              </h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 p-4 rounded-r-xl">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    ✅ 适合使用 React.memo 的场景
                  </h3>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>• 组件渲染开销大（复杂计算、大量 DOM）</li>
                    <li>• props 变化频率低</li>
                    <li>• 列表中的子组件</li>
                  </ul>
                </div>
                <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500 p-4 rounded-r-xl">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">
                    ⚠️ 不建议使用的场景
                  </h3>
                  <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>• 组件本身很简单</li>
                    <li>• props 经常变化</li>
                    <li>• 过度优化反而增加复杂度</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 总结 */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                📝 总结
              </h2>
              <div className="bg-zinc-50 dark:bg-zinc-900 p-6 rounded-xl">
                <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">1.</span>
                    <span>使用 React.memo 包裹纯展示组件，避免不必要的重渲染</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">2.</span>
                    <span>使用 useCallback 缓存传递给子组件的函数</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">3.</span>
                    <span>使用 useMemo 缓存复杂计算结果</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">4.</span>
                    <span>不要过度优化，先测量再优化</span>
                  </li>
                </ul>
              </div>
            </section>
          </article>

          {/* 底部导航 */}
          <div className="flex items-center justify-between pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <Link
              href="/frontend"
              className="px-6 py-3 border-2 border-zinc-900 text-zinc-900 dark:border-white dark:text-white rounded-lg hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors font-medium"
            >
              ← 返回列表
            </Link>
            <Link
              href="/frontend/experience/css-layout-tricks"
              className="px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-lg hover:scale-105 transition-transform font-medium"
            >
              下一篇 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
