# AGENTS.md – GRALVO


- The entire project must use English (code, comments, UI, documentation)
- Write clean, minimal, production-ready code
- No unnecessary code or duplication
- Keep consistency across the entire project
- Prefer maintainability over complexity

**Font Guideline:**
  - Always use the same font-family as your portfolio (https://haunguyen-portfolio.vercel.app/) for all code, UI, and documentation.
  - The primary font is `Space Grotesk`, with fallback: `Space Grotesk, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`.
  - Always import Space Grotesk from Google Fonts in your global CSS or layout (see portfolio for reference).

**Primary Colors Guideline:**
  - The main color palette for the project is blue (#1976d2, #2196f3) and orange (#ff9800).
  - All UI, branding, and highlight elements should use these colors as the primary theme for consistency.
  - Ensure accessibility and gentle contrast for both light and dark modes.

---

## 2. Backend Rules (NestJS)
- Controller: only handle request/response
- Service: contains all business logic
- No business logic in controllers

---

## 3. Prisma Rule (MANDATORY)
- All database operations MUST use Prisma ORM
- No raw SQL unless absolutely necessary for optimization
- Prisma must only be used inside service layer

---

## 4. API Rules
- Use DTO for all inputs
- Follow REST conventions
- Standard response format:
  {
    success: boolean,
    data: any,
    message: string
  }

---

## 5. Realtime Rules
- WebSocket layer only emits events
- No business logic inside gateways

---

## 6. Frontend Rules (Next.js)
- Must be fully responsive:
  - Desktop
  - Tablet
  - Mobile
- Mobile-first approach
- No fixed layouts for main UI
- UI must be designed for mobile devices, supporting both dark and light modes, with gentle contrast for eye comfort

---

## 7. Auction Rules (Core)
- Validate every bid:
  - auction is active
  - bid > current highest price
  - user is not owner
- Must prevent race conditions (transaction/redis)

---

## 8. Forbidden Practices
- Prisma inside controller
- Business logic inside gateway
- Duplicated service logic
- Non-responsive UI

## 9. Next.js Feature-Driven Project Structure
my-nextjs-app/
├── public/                  # Static assets (images, fonts, favicons)
├── src/
│   ├── app/                 # 🌐 LAYER 1: ROUTING & PAGES (Next.js App Router)
│   │   ├── auth/          # Route Group for authentication (URL ignores this folder name)
│   │   │   ├── login/
│   │   │   │   └── page.tsx # Thin Server Component, imports UI from features/auth
│   │   │   └── register/
│   │   │       └── page.tsx
│   │   ├── dashboard/     # Route Group for authenticated user panel
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx   # Persistent layout for dashboard (Sidebar, Header)
│   │   ├── api/             # Route Handlers (Internal backend API endpoints)
│   │   ├── layout.tsx       # Root Layout (Global Providers, Fonts, Global CSS)
│   │   ├── loading.tsx      # Global loading state (React Suspense fallback)
│   │   └── page.tsx         # Homepage (URL: /)
│   │
│   ├── features/            # 🌟 LAYER 2: FEATURES (Domain-driven business modules)
│   │   ├── auth/            # Authentication Feature Module
│   │   │   ├── components/  # Feature-specific UI (LoginForm.tsx, RegisterForm.tsx)
│   │   │   ├── hooks/       # Feature-specific custom hooks (useAuth.ts)
│   │   │   ├── services/    # Feature-specific API requests (authApi.ts)
│   │   │   ├── types/       # TypeScript types dedicated to this feature
│   │   │
│   │   ├── products/        # Product Management Feature Module
│   │   │   ├── components/  # (ProductCard.tsx, ProductGrid.tsx)
│   │   │   ├── hooks/       # (useFetchProducts.ts)
│   │   │
│   │   └── cart/            # Shopping Cart Feature Module
│   │
│   ├── components/          # ⚙️ LAYER 3: GLOBAL COMPONENTS (Shared UI elements)
│   │   ├── ui/              # Low-level primitive components (shadcn/ui: button, input, dialog)
│   │   └── common/          # Global structural components (header.tsx, footer.tsx)
│   │
│   ├── hooks/               # ⚓ LAYER 4: GLOBAL HOOKS (Reusable browser/utility hooks)
│   │   ├── useDebounce.ts   # For optimizing search inputs
│   │   ├── useClickAway.ts  # Detect clicks outside an element to close dropdowns/modals
│   │   └── useWindowSize.ts # Track viewport dimensions
│   │
│   ├── lib/                 # 📦 LAYER 5: THIRD-PARTY CONFIGS (Library initializations)
│   │   ├── prisma.ts        # Database client setup
│   │   └── axios.ts         # Axios instance setup with interceptors
│   │
│   ├── utils/               # 🧮 LAYER 6: UTILITIES (Pure helper functions)
│   │   ├── format.ts        # Currency and date formatters
│   │   └── cn.ts            # Tailwind class merger helper
│   │
│   ├── store/               # 🏪 LAYER 7: GLOBAL STATE MANAGEMENT (e.g., Zustand, Redux)
│   └── types/               # 📝 LAYER 8: GLOBAL TYPES (Shared TypeScript interfaces)
│
├── .env.local               # Local environment variables
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration