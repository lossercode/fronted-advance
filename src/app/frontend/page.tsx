import Link from 'next/link';

export default function FrontendPage() {
  const advancedCourses = [
    {
      id: 'react',
      title: 'React',
      icon: '⚛️',
      description: '用于构建用户界面的 JavaScript 库',
      level: '初级到高级',
      lessons: 12,
      time: '8 小时',
    },
    {
      id: 'vue',
      title: 'Vue',
      icon: '💚',
      description: '渐进式 JavaScript 框架',
      level: '初级到高级',
      lessons: 10,
      time: '6 小时',
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      icon: '🔷',
      description: 'JavaScript 的超集，添加了类型系统',
      level: '中级',
      lessons: 8,
      time: '5 小时',
    },
  ];

  const experiences = [
    {
      id: 'react-performance',
      title: 'React 性能优化：避免不必要的重渲染',
      date: '2025-01-15',
      tags: ['React', '性能优化'],
      summary: '深入探讨 React.memo、useMemo 和 useCallback 的使用场景和最佳实践',
    },
    {
      id: 'css-layout-tricks',
      title: 'CSS 布局技巧：Flexbox vs Grid 的选择',
      date: '2025-01-10',
      tags: ['CSS', '布局'],
      summary: '通过实际案例对比 Flexbox 和 Grid 的适用场景，帮助你做出正确选择',
    },
    {
      id: 'typescript-generics',
      title: 'TypeScript 泛型实战：构建类型安全的工具函数',
      date: '2025-01-05',
      tags: ['TypeScript', '进阶'],
      summary: '从基础到进阶，掌握 TypeScript 泛型的使用技巧',
    },
    {
      id: 'react-hooks-pitfalls',
      title: 'React Hooks 常见陷阱与解决方案',
      date: '2024-12-28',
      tags: ['React', 'Hooks'],
      summary: '总结开发中遇到的 Hooks 使用问题，包括闭包陷阱、依赖数组等',
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
            <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      {/* 页面标题 */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            前端开发
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            从基础到进阶，系统学习现代前端技术
          </p>
        </div>
      </section>

      {/* 第一部分：进阶课程 */}
      <section className="pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              📚 进阶课程
            </h2>
            <Link href="/frontend/courses" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors text-sm">
              查看全部 →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedCourses.map((course) => (
              <Link
                key={course.id}
                href={`/frontend/${course.id}`}
                className="group bg-white dark:bg-zinc-950 p-6 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
              >
                {/* 图标 */}
                <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-4 flex items-center justify-center text-3xl group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors duration-300">
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </span>
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  {course.title}
                </h3>

                {/* 描述 */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-4 text-sm">
                  {course.description}
                </p>

                {/* 元信息 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs text-zinc-600 dark:text-zinc-400">
                    {course.level}
                  </span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs text-zinc-600 dark:text-zinc-400">
                    {course.lessons} 课时
                  </span>
                  <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs text-zinc-600 dark:text-zinc-400">
                    {course.time}
                  </span>
                </div>

                {/* 查看详情 */}
                <div className="inline-flex items-center text-zinc-900 dark:text-white font-medium group-hover:gap-2 transition-all">
                  查看课程
                  <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 第二部分：经验总结 */}
      <section className="pb-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              💡 经验总结
            </h2>
            <Link href="/frontend/experiences" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors text-sm">
              查看全部 →
            </Link>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <Link
                key={exp.id}
                href={`/frontend/experience/${exp.id}`}
                className="group block bg-white dark:bg-zinc-950 p-6 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {exp.title}
                    </h3>

                    {/* 摘要 */}
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                      {exp.summary}
                    </p>

                    {/* 底部信息 */}
                    <div className="flex items-center gap-4 flex-wrap">
                      {/* 日期 */}
                      <span className="text-xs text-zinc-500 dark:text-zinc-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.date}
                      </span>

                      {/* 标签 */}
                      <div className="flex items-center gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full text-xs text-zinc-600 dark:text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 箭头图标 */}
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
      </section>
    </div>
  );
}
