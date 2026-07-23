import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starter — 现代 Web 前端模板",
  description: "一个极简、现代的前端模板。零配置启动，内置最佳实践，让你专注于产品本身。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
