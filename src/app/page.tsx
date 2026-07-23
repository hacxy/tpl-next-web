export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Features />
      <TechStack />
      <QuickStart />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <nav
      className="sticky top-0 z-100 flex items-center justify-between px-5 border-b border-border"
      style={{
        fontFamily: "var(--font-body)",
        height: "var(--nav-h)",
        background: "oklch(99% 0.002 240 / 0.8)",
        backdropFilter: "blur(12px) saturate(1.4)",
        WebkitBackdropFilter: "blur(12px) saturate(1.4)",
      }}
    >
      <a
        href="#"
        className="text-fg no-underline"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 17,
          fontWeight: 600,
          letterSpacing: "-0.01em",
        }}
      >
        Starter
      </a>
      <ul className="nav-links list-none flex" style={{ gap: 24 }}>
        <li>
          <a
            href="#features"
            className="text-muted hover:text-fg transition-colors no-underline"
            style={{ fontSize: 14, fontWeight: 510, letterSpacing: "0.02em" }}
          >
            特性
          </a>
        </li>
        <li>
          <a
            href="#tech"
            className="text-muted hover:text-fg transition-colors no-underline"
            style={{ fontSize: 14, fontWeight: 510, letterSpacing: "0.02em" }}
          >
            技术栈
          </a>
        </li>
        <li>
          <a
            href="#quickstart"
            className="text-muted hover:text-fg transition-colors no-underline"
            style={{ fontSize: 14, fontWeight: 510, letterSpacing: "0.02em" }}
          >
            快速开始
          </a>
        </li>
      </ul>
      <a
        href="#quickstart"
        className="bg-fg text-bg rounded-[7px] no-underline hover:opacity-85 transition-opacity"
        style={{ fontSize: 13, fontWeight: 550, letterSpacing: "0.02em", padding: "7px 16px" }}
      >
        立即使用
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="max-w-[var(--max-w)] mx-auto text-center"
      style={{ padding: "80px 20px 64px" }}
    >
      <div
        className="inline-block uppercase border border-border rounded-full text-muted"
        style={{
          fontSize: 12,
          fontWeight: 550,
          letterSpacing: "0.06em",
          padding: "4px 12px",
          marginBottom: 24,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        v1.0 · MIT 开源
      </div>
      <h1
        className="text-fg"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 7vw, 56px)",
          fontWeight: 600,
          letterSpacing: "-0.025em",
          lineHeight: 1.08,
          marginBottom: 16,
        }}
      >
        构建你的下一个
        <br />
        Web 项目
      </h1>
      <p
        className="text-muted"
        style={{
          fontSize: "clamp(16px, 2.5vw, 19px)",
          maxWidth: 540,
          margin: "0 auto 36px",
          lineHeight: 1.55,
        }}
      >
        一个极简、现代的前端模板。零配置启动，内置最佳实践，让你专注于产品本身。
      </p>
      <div className="flex justify-center flex-wrap" style={{ gap: 12 }}>
        <button
          className="border-none bg-accent cursor-pointer hover:opacity-[0.88] transition-opacity"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 550,
            letterSpacing: "0.02em",
            padding: "11px 28px",
            borderRadius: 9,
            color: "oklch(99% 0.002 240)",
          }}
        >
          开始使用
        </button>
        <a
          href="#features"
          className="border border-border bg-surface text-fg no-underline hover:border-muted cursor-pointer transition-colors"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 510,
            letterSpacing: "0.02em",
            padding: "11px 28px",
            borderRadius: 9,
          }}
        >
          了解更多
        </a>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <CodeIcon />,
      title: "极快的开发体验",
      desc: "基于 Vite 的热更新，毫秒级响应。TypeScript 开箱即用，类型安全贯穿整个项目。",
    },
    {
      icon: <LayoutIcon />,
      title: "组件化架构",
      desc: "清晰的目录结构和组件规范，从原型到生产无需重构，天然适合团队协作。",
    },
    {
      icon: <ZapIcon />,
      title: "生产级性能",
      desc: "自动代码分割、资源优化、Tree Shaking。Lighthouse 评分开箱即达 95+。",
    },
    {
      icon: <ChartIcon />,
      title: "一键部署",
      desc: "内置 CI/CD 配置，支持 Vercel、Netlify、Cloudflare Pages 等主流平台。",
    },
  ];

  return (
    <section id="features" className="max-w-[var(--max-w)] mx-auto" style={{ padding: "64px 20px" }}>
      <div
        className="text-accent uppercase"
        style={{ fontSize: 12, fontWeight: 550, letterSpacing: "0.08em", marginBottom: 12 }}
      >
        核心特性
      </div>
      <h2
        className="text-fg"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        开箱即用，无需折腾
      </h2>
      <p
        className="text-muted"
        style={{ fontSize: 16, maxWidth: 480, lineHeight: 1.55, marginBottom: 48 }}
      >
        我们把工程化最佳实践打包成一个模板，省去重复搭建的时间。
      </p>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 border border-border rounded-xl overflow-hidden"
        style={{ gap: 1, background: "var(--border)" }}
      >
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-surface flex flex-col"
            style={{ padding: "28px 24px", gap: 8 }}
          >
            <div className="text-accent flex-shrink-0" style={{ width: 20, height: 20 }}>
              {f.icon}
            </div>
            <h3
              className="text-fg"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 16,
                fontWeight: 590,
                letterSpacing: "-0.01em",
              }}
            >
              {f.title}
            </h3>
            <p className="text-muted" style={{ fontSize: 14, lineHeight: 1.55 }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechStack() {
  const techs = ["React 19", "TypeScript", "Vite", "Tailwind CSS", "ESLint", "Vitest", "Prettier"];

  return (
    <section id="tech" className="max-w-[var(--max-w)] mx-auto" style={{ padding: "64px 20px" }}>
      <div
        className="text-accent uppercase"
        style={{ fontSize: 12, fontWeight: 550, letterSpacing: "0.08em", marginBottom: 12 }}
      >
        技术栈
      </div>
      <h2
        className="text-fg"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        经过验证的技术选型
      </h2>
      <p
        className="text-muted"
        style={{ fontSize: 16, maxWidth: 480, lineHeight: 1.55, marginBottom: 48 }}
      >
        每一项技术都经过大规模生产验证，稳定可靠。
      </p>

      <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 32 }}>
        {techs.map((t) => (
          <span
            key={t}
            className="border border-border text-fg bg-surface rounded-full"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              fontWeight: 450,
              letterSpacing: "0.01em",
              padding: "6px 14px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section id="quickstart" className="max-w-[var(--max-w)] mx-auto" style={{ padding: "64px 20px" }}>
      <div
        className="text-accent uppercase"
        style={{ fontSize: 12, fontWeight: 550, letterSpacing: "0.08em", marginBottom: 12 }}
      >
        快速开始
      </div>
      <h2
        className="text-fg"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 4vw, 32px)",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        三步启动
      </h2>
      <p
        className="text-muted"
        style={{ fontSize: 16, maxWidth: 480, lineHeight: 1.55, marginBottom: 48 }}
      >
        复制命令，开始构建。
      </p>

      <div className="bg-fg rounded-[10px] overflow-x-auto" style={{ padding: 24 }}>
        <pre
          className="whitespace-pre m-0 text-bg"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            lineHeight: 1.65,
          }}
        >
          <span style={{ color: "oklch(60% 0.01 250)" }}>{"# 创建项目\n"}</span>
          <span style={{ color: "oklch(58% 0.18 255)" }}>{"$ "}</span>
          {"npx create-starter my-app\n\n"}
          <span style={{ color: "oklch(60% 0.01 250)" }}>{"# 进入目录并安装\n"}</span>
          <span style={{ color: "oklch(58% 0.18 255)" }}>{"$ "}</span>
          {"cd my-app && npm install\n\n"}
          <span style={{ color: "oklch(60% 0.01 250)" }}>{"# 启动开发服务器\n"}</span>
          <span style={{ color: "oklch(58% 0.18 255)" }}>{"$ "}</span>
          {"npm run dev"}
        </pre>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="max-w-[var(--max-w)] mx-auto border-t border-border flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left"
      style={{ padding: "40px 20px", gap: 12 }}
    >
      <p className="text-muted" style={{ fontSize: 13 }}>
        Starter · MIT License · 2024
      </p>
      <p>
        <a
          href="#"
          className="text-fg no-underline hover:underline"
          style={{ fontSize: 13, fontWeight: 510 }}
        >
          GitHub
        </a>{" "}
        ·{" "}
        <a
          href="#"
          className="text-fg no-underline hover:underline"
          style={{ fontSize: 13, fontWeight: 510 }}
        >
          文档
        </a>{" "}
        ·{" "}
        <a
          href="#"
          className="text-fg no-underline hover:underline"
          style={{ fontSize: 13, fontWeight: 510 }}
        >
          讨论区
        </a>
      </p>
    </footer>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
