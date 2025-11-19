'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';

// 导入 Prism 主题
import 'prismjs/themes/prism-tomorrow.css';

// 导入常用语言支持
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';

// 导入插件
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  code,
  language = 'javascript',
  showLineNumbers = true,
  className = '',
}: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className={`relative ${className}`}>
      <pre className={showLineNumbers ? 'line-numbers' : ''}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
