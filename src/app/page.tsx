"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const href = a.getAttribute("href");
        if (href) {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    const sunIcon = document.querySelector(".icon-sun") as HTMLElement;
    const moonIcon = document.querySelector(".icon-moon") as HTMLElement;
    if (sunIcon) sunIcon.style.display = isDark ? "none" : "block";
    if (moonIcon) moonIcon.style.display = isDark ? "block" : "none";
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-14">
          <a href="#" className="flex items-center gap-2.5 font-bold text-lg tracking-[-0.02em] text-foreground">
            <NextLogo />
            Next.js
          </a>
          <div className="hidden md:flex items-center gap-7">
            <a href="#features" className="text-fg-secondary text-sm font-medium hover:text-foreground transition-colors">功能特性</a>
            <a href="#code" className="text-fg-secondary text-sm font-medium hover:text-foreground transition-colors">开发体验</a>
            <a href="#stats" className="text-fg-secondary text-sm font-medium hover:text-foreground transition-colors">社区</a>
            <a href="https://nextjs.org/docs" target="_blank" className="text-fg-secondary text-sm font-medium hover:text-foreground transition-colors">文档</a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme} className="w-9 h-9 rounded-lg border border-border bg-surface text-fg-secondary cursor-pointer flex items-center justify-center hover:bg-surface-hover hover:text-foreground hover:border-accent transition-all" aria-label="切换主题">
              <svg className="icon-sun w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              <svg className="icon-moon w-[18px] h-[18px] hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            </button>
            <a href="https://vercel.com/new" target="_blank" className="px-[18px] py-2 rounded-lg bg-foreground text-background text-sm font-semibold border-none cursor-pointer hover:opacity-85 transition-all">部署 →</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow"></div>
        <div className="hero-grid"></div>
        <div className="relative text-center max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface text-sm font-medium text-fg-secondary mb-7" style={{ animation: "fade-up .6s ease-out both" }}>
            <span className="w-[7px] h-[7px] rounded-full bg-success" style={{ animation: "dot-pulse 2s ease-in-out infinite" }}></span>
            Next.js 15 — 现已发布
          </div>
          <h1 className="font-display text-[clamp(42px,7vw,80px)] font-extrabold tracking-[-0.035em] leading-[1.05] mb-6" style={{ animation: "fade-up .6s ease-out .1s both" }}>
            用于 <span style={{ background: "linear-gradient(135deg, var(--accent), var(--cyan), var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Web</span> 的<br />React 框架
          </h1>
          <p className="text-[clamp(17px,2.2vw,21px)] text-fg-secondary max-w-[580px] mx-auto mb-10 leading-relaxed" style={{ animation: "fade-up .6s ease-out .2s both" }}>
            基于最新的 React 特性构建。服务端组件、流式 SSR 和零配置优化 — 你快速交付所需的一切。
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap" style={{ animation: "fade-up .6s ease-out .3s both" }}>
            <a href="https://vercel.com/new" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-foreground text-background text-base font-semibold border-none cursor-pointer hover:opacity-88 hover:-translate-y-0.5 transition-all shadow-md">
              <VercelIcon />
              立即部署
            </a>
            <a href="https://nextjs.org/docs" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-surface text-foreground text-base font-semibold border border-border cursor-pointer hover:bg-surface-hover hover:border-accent hover:-translate-y-0.5 transition-all">
              <BookIcon />
              阅读文档
            </a>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-16 px-6 text-center border-b border-border reveal">
        <p className="text-[13px] font-semibold uppercase tracking-widest text-muted mb-7">受顶级团队信赖</p>
        <div className="flex items-center justify-center gap-10 flex-wrap opacity-50">
          {["Vercel", "Netflix", "TikTok", "Notion", "Twitch", "Hulu"].map((name) => (
            <svg key={name} viewBox="0 0 140 30" fill="currentColor" className="h-6 w-auto fill-foreground">
              <text x="0" y="22" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="700">{name}</text>
            </svg>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-25 px-6 max-w-[1200px] mx-auto" id="features">
        <div className="reveal">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-accent mb-3">为什么选择 Next.js</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-4">构建现代 Web 应用<br />所需的一切</h2>
          <p className="text-[17px] text-fg-secondary max-w-[540px] leading-relaxed mb-12">一个功能齐全的框架，处理路由、渲染、数据获取和样式 — 让你专注于构建产品。</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard icon="⚡" iconClass="feature-icon-perf" title="性能优化" desc="自动代码分割、图片优化和字体优化。开箱即用，你的核心 Web 指标即可提升。" />
          <FeatureCard icon="🛠" iconClass="feature-icon-dx" title="开发体验" desc="快速刷新、TypeScript 支持和零配置设置。编写代码，即时看到更改 — 无需手动重建。" />
          <FeatureCard icon="📈" iconClass="feature-icon-scale" title="可扩展性" desc="从单个页面到数千个。服务端组件和流式 SSR 保持应用在任何规模下的速度。" />
          <FeatureCard icon="🔄" iconClass="feature-icon-ssr" title="服务端组件" desc="在服务器上渲染组件，减少客户端 JavaScript，并在更靠近数据源的地方获取数据以加快加载速度。" />
          <FeatureCard icon="🗺" iconClass="feature-icon-route" title="应用路由" desc="基于文件系统的路由，支持嵌套布局、加载状态和错误处理 — 全部内置。" />
          <FeatureCard icon="🔧" iconClass="feature-icon-opt" title="零配置优化" desc="图片、字体和脚本优化自动进行。通过智能打包减少 JavaScript 体积。" />
        </div>
      </section>

      {/* CODE SECTION */}
      <section className="py-25 px-6 bg-bg-alt border-y border-border" id="code">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-accent mb-3">为开发者而生</p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.03em] leading-[1.15] mb-4">编写组件，<br />而非配置</h2>
            <p className="text-[17px] text-fg-secondary max-w-[540px] leading-relaxed mb-7">服务端组件让你直接在 UI 中获取数据。无需 useEffect，无需加载模板代码 — 只需 async/await。</p>
            <ul className="list-none flex flex-col gap-3.5">
              {["异步服务端组件，直接访问数据", "内置流式传输和 Suspense 边界", "TypeScript 类型安全的数据获取", "自动缓存和重新验证"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-fg-secondary">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-[20px] border border-border overflow-hidden shadow-lg" style={{ background: "oklch(10% 0.015 270)" }}>
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border" style={{ background: "oklch(13% 0.015 270)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(60% 0.2 25)" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(75% 0.15 80)" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "oklch(65% 0.2 145)" }}></span>
              <span className="font-mono text-xs text-muted ml-2">app/page.tsx</span>
            </div>
            <div className="p-5 font-mono text-[13.5px] leading-[1.7] overflow-x-auto">
              <pre className="whitespace-pre">
                <CodeLine num="1"><Kw>import</Kw> <Op>{"{"}</Op> <Fn>Suspense</Fn> <Op>{"}"}</Op> <Kw>from</Kw> <Str>&apos;react&apos;</Str></CodeLine>
                <CodeLine num="2"><Kw>import</Kw> <Op>{"{"}</Op> <Fn>fetchPosts</Fn> <Op>{"}"}</Op> <Kw>from</Kw> <Str>&apos;@/lib/data&apos;</Str></CodeLine>
                <CodeLine num="3">{" "}</CodeLine>
                <CodeLine num="4"><Kw>async function</Kw> <Fn>PostList</Fn><Op>()</Op> <Op>{"{"}</Op></CodeLine>
                <CodeLine num="5">  <Kw>const</Kw> posts <Op>=</Op> <Kw>await</Kw> <Fn>fetchPosts</Fn><Op>()</Op></CodeLine>
                <CodeLine num="6">{" "}</CodeLine>
                <CodeLine num="7">  <Kw>return</Kw> <Tag>{"<"}</Tag><Tag>div</Tag> <Attr>className</Attr><Op>=</Op><Str>&quot;grid gap-4&quot;</Str><Tag>{">"}</Tag></CodeLine>
                <CodeLine num="8">    <Op>{"{"}</Op>posts.<Fn>map</Fn><Op>(</Op>post <Op>{"=>"}</Op> <Tag>{"<"}</Tag><Fn>PostCard</Fn> <Attr>key</Attr><Op>{"={"}</Op>post.id<Op>{"}"}</Op> <Attr>post</Attr><Op>{"={"}</Op>post<Op>{"}"}</Op> <Tag>/{">"}</Tag><Op>)</Op></CodeLine>
                <CodeLine num="9">  <Tag>{"</"}</Tag><Tag>div</Tag><Tag>{">"}</Tag></CodeLine>
                <CodeLine num="10"><Op>{"}"}</Op></CodeLine>
                <CodeLine num="11">{" "}</CodeLine>
                <CodeLine num="12"><Kw>export default function</Kw> <Fn>Page</Fn><Op>()</Op> <Op>{"{"}</Op></CodeLine>
                <CodeLine num="13">  <Kw>return</Kw> <Tag>{"<"}</Tag><Fn>Suspense</Fn> <Attr>fallback</Attr><Op>{"={"}</Op><Tag>{"<"}</Tag><Fn>Skeleton</Fn> <Tag>/{">"}</Tag><Op>{"}"}</Op><Tag>{">"}</Tag></CodeLine>
                <CodeLine num="14">    <Tag>{"<"}</Tag><Fn>PostList</Fn> <Tag>/{">"}</Tag></CodeLine>
                <CodeLine num="15">  <Tag>{"</"}</Tag><Fn>Suspense</Fn><Tag>{">"}</Tag></CodeLine>
                <CodeLine num="16"><Op>{"}"}</Op></CodeLine>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-25 px-6 max-w-[1200px] mx-auto" id="stats">
        <div className="reveal text-center">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-accent mb-3">数据说话</p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.03em] leading-[1.15]">全球数百万开发者<br />的信赖之选</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          <StatCard number="6M+" label="每周 npm 下载量" color="text-accent" />
          <StatCard number="128K+" label="GitHub 星标" color="text-cyan" />
          <StatCard number="3,200+" label="贡献者" color="text-violet" />
          <StatCard number="数百万" label="使用 Next.js 构建的网站" color="text-success" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-25 px-6 bg-bg-alt border-y border-border">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-accent mb-3">开发者评价</p>
            <h2 className="font-display text-[clamp(28px,4vw,42px)] font-extrabold tracking-[-0.03em] leading-[1.15]">深受社区喜爱</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            <TestimonialCard text="&ldquo;Next.js 彻底改变了我们构建产品的方式。仅服务端组件就让我们的包体积减少了 40%。&rdquo;" name="Sarah Chen" role="Staff Engineer, Vercel" avatar="S" />
            <TestimonialCard text="&ldquo;应用路由是游戏规则改变者。嵌套布局和流式传输让复杂 UI 变得轻而易举。&rdquo;" name="Marcus Rivera" role="CTO, Startup" avatar="M" />
            <TestimonialCard text="&ldquo;我们一周内从 CRA 迁移到 Next.js。Lighthouse 分数从 60 多分提升到稳定的 95+。&rdquo;" name="Aiko Tanaka" role="前端负责人, 电商平台" avatar="A" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-30 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none blur-[50px]" style={{ background: "radial-gradient(ellipse, oklch(65% 0.22 270 / .12), oklch(75% 0.15 210 / .06), transparent 70%)" }}></div>
        <div className="relative max-w-[620px] mx-auto reveal">
          <h2 className="font-display text-[clamp(32px,5vw,50px)] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4.5">立即开始使用<br /><span style={{ background: "linear-gradient(135deg, var(--accent), var(--cyan), var(--violet))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Next.js</span> 构建</h2>
          <p className="text-lg text-fg-secondary mb-9 leading-relaxed">几秒内部署你的第一个项目。在 Vercel 上免费 — 无需信用卡。</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <a href="https://vercel.com/new" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-foreground text-background text-base font-semibold border-none cursor-pointer hover:opacity-88 hover:-translate-y-0.5 transition-all shadow-md">
              <VercelIcon />
              立即部署
            </a>
            <a href="https://nextjs.org/learn" target="_blank" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-surface text-foreground text-base font-semibold border border-border cursor-pointer hover:bg-surface-hover hover:border-accent hover:-translate-y-0.5 transition-all">
              <PlayIcon />
              开始学习
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-col gap-4 sm:flex-row">
          <span className="text-[13px] text-muted">© 2024 Next.js. 由 Vercel 构建。</span>
          <div className="flex gap-6">
            <a href="https://github.com/vercel/next.js" target="_blank" className="text-[13px] text-muted hover:text-foreground transition-colors">GitHub</a>
            <a href="https://twitter.com/nextjs" target="_blank" className="text-[13px] text-muted hover:text-foreground transition-colors">Twitter</a>
            <a href="https://nextjs.org/docs" target="_blank" className="text-[13px] text-muted hover:text-foreground transition-colors">文档</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({ icon, iconClass, title, desc }: { icon: string; iconClass: string; title: string; desc: string }) {
  return (
    <div className="reveal relative p-8 rounded-[20px] border border-border bg-surface transition-all duration-300 overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-lg group">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 text-2xl ${iconClass}`}>{icon}</div>
      <h3 className="font-display text-[19px] font-bold tracking-[-0.01em] mb-2.5">{title}</h3>
      <p className="text-[15px] text-fg-secondary leading-relaxed">{desc}</p>
    </div>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <div className="reveal text-center py-9 px-5 rounded-[20px] border border-border bg-surface transition-all duration-300 hover:border-accent hover:-translate-y-0.5">
      <div className={`font-display text-[clamp(36px,5vw,52px)] font-extrabold tracking-[-0.03em] leading-none mb-2 ${color}`}>{number}</div>
      <div className="text-[14px] text-fg-secondary font-medium">{label}</div>
    </div>
  );
}

function TestimonialCard({ text, name, role, avatar }: { text: string; name: string; role: string; avatar: string }) {
  return (
    <div className="reveal p-7 rounded-[20px] border border-border bg-surface transition-all duration-300 hover:border-accent hover:-translate-y-0.5">
      <div className="flex gap-0.5 mb-4 text-warning">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <p className="text-[15px] text-fg-secondary leading-relaxed mb-5 italic">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-cyan flex items-center justify-center font-bold text-[15px] text-white">{avatar}</div>
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-[13px] text-muted">{role}</div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({ num, children }: { num: string; children: React.ReactNode }) {
  return <span className="block"><span className="inline-block w-8 text-muted text-right mr-4 select-none text-xs">{num}</span>{children}</span>;
}

function Kw({ children }: { children: React.ReactNode }) { return <span className="text-violet">{children}</span>; }
function Fn({ children }: { children: React.ReactNode }) { return <span className="text-cyan">{children}</span>; }
function Str({ children }: { children: React.ReactNode }) { return <span className="text-success">{children}</span>; }
function Tag({ children }: { children: React.ReactNode }) { return <span className="text-accent">{children}</span>; }
function Attr({ children }: { children: React.ReactNode }) { return <span className="text-cyan-dim">{children}</span>; }
function Op({ children }: { children: React.ReactNode }) { return <span className="text-fg-secondary">{children}</span>; }

function NextLogo() {
  return (
    <svg viewBox="0 0 180 180" fill="none" className="w-7 h-7">
      <mask id="a" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#a)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54v71.97h12.114V69.384l73.885 95.461A90.304 90.304 0 00149.508 157.52z" fill="url(#b)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#c)" />
      </g>
      <defs>
        <linearGradient id="b" x1="109" y1="116.5" x2="144.5" y2="159.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="c" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function VercelIcon() {
  return <svg width="18" height="18" viewBox="0 0 76 65" fill="currentColor"><path d="M37.5274 0L75.0548 65H0L37.5274 0Z" /></svg>;
}

function BookIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
}

function PlayIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>;
}

function CheckIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-success flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12" /></svg>;
}

function StarIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
}
