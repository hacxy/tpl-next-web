'use client'

import { useAppStore } from '@/stores'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <TechStack />
      <Counter />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-100 flex items-center justify-between px-5 border-b border-border h-[var(--nav-h)] bg-[oklch(99%_0.002_240/0.8)] backdrop-blur-[12px] backdrop-saturate-140">
      <a href="#" className="text-fg no-underline font-display text-[17px] font-semibold tracking-[-0.01em]">
        Next.js Template
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="max-w-[var(--max-w)] mx-auto text-center px-5 pt-14 pb-10">
      <div className="inline-block uppercase border border-border rounded-full text-muted text-[12px] font-semibold tracking-[0.06em] py-1 px-3 mb-6 tabular-nums">
        Next.js 16 · React 19
      </div>
      <h1 className="text-fg font-display text-[clamp(36px,7vw,56px)] font-semibold tracking-[-0.025em] leading-[1.08] mb-4">
        Next.js 项目模板
      </h1>
      <p className="text-muted text-[clamp(16px,2.5vw,19px)] max-w-[540px] mx-auto leading-[1.55]">
        集成 TypeScript、Tailwind CSS、Zustand、Playwright 等最佳实践，开箱即用。
      </p>
    </section>
  );
}

function Counter() {
  const { count, increment, decrement, reset } = useAppStore()

  return (
    <section className="w-full px-5 py-10">
      <div className="max-w-[var(--max-w)] mx-auto">
        <div className="text-accent uppercase text-[12px] font-semibold tracking-[0.08em] mb-3">
          状态管理
        </div>
        <h2 className="text-fg font-display text-[clamp(24px,4vw,32px)] font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
          Zustand 计数器示例
        </h2>
        <p className="text-muted text-base max-w-[480px] leading-[1.55] mb-8">
          使用 Zustand + persist 中间件实现状态持久化，刷新页面后计数值保留。
        </p>
        <div className="flex items-center gap-4 p-6 border border-border rounded-xl bg-surface">
          <button onClick={decrement} className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-[oklch(97%_0.003_250)] transition-colors font-mono text-[18px]" aria-label="减少">-</button>
          <span className="font-mono text-[32px] w-16 text-center tabular-nums font-semibold" data-testid="count">{count}</span>
          <button onClick={increment} className="w-10 h-10 flex items-center justify-center border border-border rounded-lg hover:bg-[oklch(97%_0.003_250)] transition-colors font-mono text-[18px]" aria-label="增加">+</button>
          <button onClick={reset} className="ml-4 px-4 py-2 text-[13px] text-muted hover:text-fg border border-border rounded-lg hover:bg-[oklch(97%_0.003_250)] transition-colors" aria-label="重置">Reset</button>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  const techs = [
    {
      name: "React 19",
      version: "19.2.4",
      desc: "用户界面构建库，组件化开发，虚拟 DOM 高效渲染。",
      href: "https://github.com/facebook/react",
    },
    {
      name: "TypeScript",
      version: "5.x",
      desc: "JavaScript 超集，静态类型检查，提升代码可维护性。",
      href: "https://github.com/microsoft/TypeScript",
    },
    {
      name: "Next.js",
      version: "16.2.10",
      desc: "React 全栈框架，服务端渲染，开箱即用的最佳实践。",
      href: "https://github.com/vercel/next.js",
    },
    {
      name: "Tailwind CSS",
      version: "4.x",
      desc: "原子化 CSS 框架，实用优先，快速构建自定义界面。",
      href: "https://github.com/tailwindlabs/tailwindcss",
    },
    {
      name: "Zustand",
      version: "5.x",
      desc: "轻量级状态管理，简单 API，支持中间件和持久化。",
      href: "https://github.com/pmndrs/zustand",
    },
    {
      name: "ESLint",
      version: "9.x",
      desc: "代码质量检测工具，统一编码规范，自动发现潜在问题。",
      href: "https://github.com/eslint/eslint",
    },
    {
      name: "Playwright",
      version: "1.x",
      desc: "端到端测试框架，跨浏览器自动化，可靠测试保障。",
      href: "https://github.com/microsoft/playwright",
    },
    {
      name: "Husky",
      version: "9.x",
      desc: "Git hooks 管理工具，提交前自动检查，保障代码质量。",
      href: "https://github.com/typicode/husky",
    },
    {
      name: "lint-staged",
      version: "17.x",
      desc: "对暂存文件运行 lint，配合 Husky 实现提交检查。",
      href: "https://github.com/lint-staged/lint-staged",
    },
  ];

  return (
    <section id="tech" className="w-full px-5 py-10">
      <div className="max-w-[var(--max-w)] mx-auto">
        <div className="text-accent uppercase text-[12px] font-semibold tracking-[0.08em] mb-3">
          技术栈
        </div>
        <h2 className="text-fg font-display text-[clamp(24px,4vw,32px)] font-semibold tracking-[-0.02em] leading-[1.15] mb-3">
          经过验证的技术选型
        </h2>
        <p className="text-muted text-base max-w-[480px] leading-[1.55] mb-8">
          每一项技术都经过大规模生产验证，稳定可靠。
        </p>

        <div className="flex flex-col border border-border rounded-xl overflow-hidden">
          {techs.map((t, i) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-surface flex items-baseline gap-4 px-6 py-4 no-underline text-inherit transition-colors duration-150 hover:bg-[oklch(97%_0.003_250)] ${
                i < techs.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="font-mono text-[14px] font-medium tracking-[0.01em] text-fg tabular-nums flex-shrink-0 min-w-[120px]">
                {t.name}
              </span>
              <span className="text-[13px] text-muted leading-[1.5]">
                {t.desc}
              </span>
              <span className="ml-auto text-[12px] text-muted font-mono tabular-nums">
                v{t.version}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full px-5 py-10">
      <div className="max-w-[var(--max-w)] mx-auto border-t border-border pt-10 flex flex-col items-center text-center sm:flex-row sm:justify-center gap-3">
        <p className="text-muted text-[13px]">
          Next.js Template · MIT License · 2024
        </p>
        <p>
          <a
            href="https://github.com/hacxy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg no-underline hover:underline text-[13px] font-medium"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
