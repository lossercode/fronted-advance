'use client';

import { useState } from 'react';
import CodeBlock from './CodeBlock';

export default function CodeBlockDemo() {
  const [activeTab, setActiveTab] = useState<'js' | 'ts' | 'python'>('js');

  const codeExamples = {
    js: `// JavaScript 示例
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(\`Fibonacci(10) = \${result}\`);`,

    ts: `// TypeScript 示例
interface User {
  id: number;
  name: string;
  email: string;
}

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com'
};

console.log(greetUser(user));`,

    python: `# Python 示例
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

result = fibonacci(10)
print(f"Fibonacci(10) = {result}")

# 列表推导式
squares = [x**2 for x in range(10)]
print(squares)`,
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6">
        代码高亮演示
      </h2>

      {/* 标签切换 */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab('js')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'js'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
          }`}
        >
          JavaScript
        </button>
        <button
          onClick={() => setActiveTab('ts')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'ts'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
          }`}
        >
          TypeScript
        </button>
        <button
          onClick={() => setActiveTab('python')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'python'
              ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
          }`}
        >
          Python
        </button>
      </div>

      {/* 代码块 */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <CodeBlock
          code={codeExamples[activeTab]}
          language={activeTab === 'python' ? 'python' : activeTab}
          showLineNumbers={true}
        />
      </div>

      {/* 使用说明 */}
      <div className="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">
          使用方法
        </h3>
        <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
          <div>
            <p className="font-medium text-zinc-900 dark:text-white mb-2">
              基础使用：
            </p>
            <code className="block bg-white dark:bg-zinc-950 p-4 rounded-lg text-sm">
              {`<CodeBlock
  code="const hello = 'world';"
  language="javascript"
/>`}
            </code>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-white mb-2">
              支持的语言：
            </p>
            <p className="text-sm">
              JavaScript, TypeScript, JSX, TSX, CSS, Python, Bash, JSON, Markdown 等
            </p>
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-white mb-2">
              可选参数：
            </p>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li><code>showLineNumbers</code> - 是否显示行号（默认 true）</li>
              <li><code>className</code> - 自定义样式类名</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
