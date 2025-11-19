import Link from 'next/link';

export default function ReactPage() {
  const sections = [
    {
      level: 'beginner',
      title: '🟢 初级（必学）',
      description: '掌握 React 基础概念和核心 API',
      topics: [
        { id: 'hooks', title: 'React Hooks', lessons: 5, completed: false },
        { id: 'components', title: '组件基础', lessons: 4, completed: false },
        { id: 'props-state', title: 'Props 与 State', lessons: 3, completed: false },
      ],
    },
    {
      level: 'intermediate',
      title: '🟡 中级（推荐）',
      description: '深入理解 React 进阶特性',
      topics: [
        { id: 'context', title: 'Context API', lessons: 3, completed: false },
        { id: 'performance', title: '性能优化', lessons: 4, completed: false },
        { id: 'custom-hooks', title: '自定义 Hooks', lessons: 3, completed: false },
      ],
    },
    {
      level: 'advanced',
      title: '🔴 高级（进阶）',
      description: '掌握 React 高级技巧和最佳实践',
      topics: [
        { id: 'patterns', title: '设计模式', lessons: 4, completed: false },
        { id: 'ssr', title: '服务端渲染', lessons: 5, completed: false },
        { id: 'architecture', title: '架构设计', lessons: 4, completed: false },
      ],
    },
  ];

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

      {/* 页面标题 */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-4xl">
              ⚛️
            </div>
            <div>
              <h1 className="text-5xl font-bold text-zinc-900 dark:text-white">
                React
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                用于构建用户界面的 JavaScript 库
              </p>
            </div>
          </div>

          {/* 学习进度 */}
          <div className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-zinc-900 dark:text-white">
                学习进度
              </span>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                0 / 12 课时
              </span>
            </div>
            <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-900 dark:bg-white" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 分层次内容 */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {sections.map((section) => (
            <div key={section.level} className="space-y-4">
              {/* 层级标题 */}
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                {section.description}
              </p>

              {/* 主题列表 */}
              <div className="grid gap-4">
                {section.topics.map((topic) => (
                  <Link
                    key={topic.id}
                    href={`/frontend/react/${topic.id}`}
                    className="group bg-white dark:bg-zinc-950 p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                          {topic.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                          <span>{topic.lessons} 课时</span>
                          <span>•</span>
                          <span>{topic.completed ? '✅ 已完成' : '⏳ 未开始'}</span>
                        </div>
                      </div>
                      <div className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
