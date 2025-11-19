export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-zinc-900 dark:text-white">
            CodeHub
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#frontend" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              前端
            </a>
            <a href="#backend" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              后端
            </a>
            <a href="#ai" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              AI
            </a>
            <a href="/demo" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              演示
            </a>
            <button className="px-6 py-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors">
              开始学习
            </button>
          </div>
        </div>
      </nav>

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              掌握编程
              <br />
              <span className="text-zinc-400 dark:text-zinc-600">从这里开始</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
              系统化学习前端、后端和 AI 技术，构建完整的技术栈知识体系
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-colors text-lg font-medium">
                立即开始
              </button>
              <button className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-lg hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-colors text-lg font-medium">
                浏览课程
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 核心模块 */}
      <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-16 text-center">
            三大核心模块
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* 前端模块 */}
            <div id="frontend" className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-6 flex items-center justify-center text-3xl group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                前端开发
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                从基础到进阶，掌握现代前端技术栈，包括 React、Vue、TypeScript 等
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  HTML/CSS/JavaScript
                </li>
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  React & Vue 框架
                </li>
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  工程化与性能优化
                </li>
              </ul>
              <a href="/frontend" className="inline-flex items-center text-zinc-900 dark:text-white font-medium group-hover:gap-2 transition-all">
                开始学习
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
              </a>
            </div>

            {/* 后端模块 */}
            <div id="backend" className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-6 flex items-center justify-center text-3xl group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">⚙️</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                后端开发
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                构建高性能服务端应用，学习数据库、API 设计和系统架构
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  Node.js & Python
                </li>
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  数据库与缓存
                </li>
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  微服务架构
                </li>
              </ul>
              <a href="#" className="inline-flex items-center text-zinc-900 dark:text-white font-medium group-hover:gap-2 transition-all">
                开始学习
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
              </a>
            </div>

            {/* AI 模块 */}
            <div id="ai" className="group bg-white dark:bg-zinc-950 p-8 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300">
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-900 rounded-xl mb-6 flex items-center justify-center text-3xl group-hover:bg-zinc-900 dark:group-hover:bg-white transition-colors duration-300">
                <span className="group-hover:scale-110 transition-transform duration-300">🤖</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
                人工智能
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                探索 AI 技术前沿，掌握机器学习和深度学习核心算法
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  机器学习基础
                </li>
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  深度学习框架
                </li>
                <li className="flex items-center text-zinc-600 dark:text-zinc-400">
                  <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                  LLM 应用开发
                </li>
              </ul>
              <a href="#" className="inline-flex items-center text-zinc-900 dark:text-white font-medium group-hover:gap-2 transition-all">
                开始学习
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 特色功能 */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-white mb-16 text-center">
            为什么选择我们
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">
                📚
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                系统化课程
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                从零基础到进阶，循序渐进的学习路径
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">
                💡
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                实战项目
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                真实项目案例，边学边练提升能力
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                持续更新
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                紧跟技术趋势，内容不断迭代优化
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-900 rounded-xl mx-auto mb-4 flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                社区支持
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                活跃的学习社区，共同成长进步
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20 px-6 bg-zinc-900 dark:bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-zinc-900 mb-6">
            准备好开始学习了吗？
          </h2>
          <p className="text-xl text-zinc-400 dark:text-zinc-600 mb-10">
            加入我们，开启你的编程之旅
          </p>
          <button className="px-10 py-4 bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-lg font-medium">
            免费开始学习
          </button>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-12 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
                CodeHub
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                专注于编程教育，助力开发者成长
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">学习路径</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="#frontend" className="hover:text-zinc-900 dark:hover:text-white transition-colors">前端开发</a></li>
                <li><a href="#backend" className="hover:text-zinc-900 dark:hover:text-white transition-colors">后端开发</a></li>
                <li><a href="#ai" className="hover:text-zinc-900 dark:hover:text-white transition-colors">人工智能</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">资源</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">文档</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">博客</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">社区</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-4">关于</h4>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">联系方式</a></li>
                <li><a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">隐私政策</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-600 dark:text-zinc-400">
            © 2025 CodeHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
