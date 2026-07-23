# Next.js Project Template

A minimal, modern Next.js project template with best practices built-in.

## Tech Stack

- **React 19** v19.2.4 - UI library
- **Next.js** v16.2.10 - React full-stack framework
- **TypeScript** v5.x - Static type checking
- **Tailwind CSS** v4.x - Utility-first CSS framework
- **Zustand** v5.x - Lightweight state management
- **Playwright** v1.x - End-to-end testing
- **ESLint** v9.x - Code quality linting
- **Husky** v9.x + **lint-staged** v17.x - Git hooks management

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Testing

```bash
# Run E2E tests
pnpm test:e2e

# Run tests with UI
pnpm test:e2e:ui

# Run tests in debug mode
pnpm test:e2e:debug
```

## Code Quality

```bash
# ESLint check
pnpm lint

# TypeScript type check
pnpm type-check
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── stores/
    ├── useAppStore.ts  # Zustand store example
    └── index.ts        # Barrel export
tests/
└── e2e/
    └── home.spec.ts    # E2E test cases
```

## License

MIT
