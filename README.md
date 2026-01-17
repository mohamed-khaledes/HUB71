# HUB71 Events Platform

A modern, multilingual event management platform built with Next.js 15, featuring a stunning UI with
animations, form validation, and comprehensive SEO optimization.

![HUB71 Platform](./public/images/og-image-en.jpg)

## 🌟 Features

### Core Features

- ✅ **Multi-language Support** - English & Arabic with RTL support
- ✅ **Dark Mode** - Toggle between light and dark themes
- ✅ **Scroll to Top** - Smooth scroll to top button
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Form Validation** - Advanced validation with Zod
- ✅ **API Integration** - RESTful API with Axios and React Query
- ✅ **Animations** - Beautiful Framer Motion animations
- ✅ **SEO Optimized** - Full SEO implementation with structured data

### User Experience

- 🎨 Smooth animations and transitions
- 📱 Fully responsive across all devices
- ♿ Accessibility compliant
- 🚀 Optimized performance
- 🔍 Advanced search functionality
- 📊 Loading skeletons and states

### Technical Features

- 🌐 Server-side rendering (SSR)
- 🎯 Type-safe with TypeScript
- 🔄 Client-side state management
- 🍪 Cookie-based preferences
- 📝 Form state management
- 🎭 Custom UI components

---

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility

### State Management & Data Fetching

- **[TanStack Query (React Query)](https://tanstack.com/query)** - Server state management
- **[Axios](https://axios-http.com/)** - HTTP client
- **[js-cookie](https://github.com/js-cookie/js-cookie)** - Cookie management

### Form & Validation

- **[Zod](https://zod.dev/)** - Schema validation
- **[React Hook Form](https://react-hook-form.com/)** - Form management (implicit)

### Internationalization

- **[next-intl](https://next-intl-docs.vercel.app/)** - i18n for Next.js

### Icons & Assets

- **[Font Awesome](https://fontawesome.com/)** - Icon library
- **[Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)** - Optimized images

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.17 or later
- **npm** or **yarn** or **pnpm**
- **Git**

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mohamed-khaledes/HUB71.git
cd hub71-platform
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# API Keys (if needed)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
hub71-platform/
├── public/                      # Static files
│   ├── assets/                  # Images and assets
│   ├── favicon.ico             # Favicon
│   ├── manifest.json           # PWA manifest
│   └── images/                 # OG images
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # Locale-based routing
│   │   │   ├── layout.tsx     # Root layout
│   │   │   ├── page.tsx       # Home page
│   │   │   └── sessions/      # Sessions page
│   │   ├── sitemap.ts         # Sitemap generation
│   │   └── robots.ts          # Robots.txt generation
│   ├── components/             # React components
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   └── checkbox.tsx
│   │   ├── SEO/               # SEO components
│   │   │   ├── Metadata.tsx
│   │   │   └── StructuredData.tsx
│   │   ├── Header.tsx         # Header component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── ScrollToTop.tsx    # Scroll to top button
│   │   ├── DarkModeToggle.tsx # Dark mode toggle
│   │   └── LanguageContext.tsx # Language provider
│   ├── utils/                    # Utilities and configs
│   │   ├── seo.config.ts      # SEO configuration
│   │   ├── axios.ts           # Axios instance
│   │   └── helpers.ts           # Helper functions
│   ├── hooks/                  # Custom hooks
│   │   └── useSubmitRegistration.ts
│   ├── types/                  # TypeScript types
│   └── messages/               # Translation files
│       ├── en.json            # English translations
│       └── ar.json            # Arabic translations
├── proxy.ts                    # Middleware for i18n
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## 🌍 Multi-Language Support (i18n)

### Available Languages

- 🇬🇧 English (en)
- 🇸🇦 Arabic (ar) - with RTL support

### How It Works

1. **Routing**: URLs are prefixed with locale (`/en/...`, `/ar/...`)
2. **Translation Files**: Located in `src/messages/`
3. **Usage**:

```typescript
import { useTranslations } from 'next-intl'

function Component() {
  const t = useTranslations()
  return <h1>{t('welcome')}</h1>
}
```

### Adding New Translations

1. Add key-value pairs to `src/messages/en.json` and `src/messages/ar.json`
2. Use the translation key with `t('your-key')`

### Switching Languages

Users can switch languages using the language toggle in the header. The selection is stored in
cookies.

---

## 🌓 Dark Mode

### Implementation

Dark mode is implemented using:

- **Cookie-based persistence** with `js-cookie`
- **Tailwind CSS dark mode classes**
- **System preference detection**

### Usage

```typescript
import { useDarkMode } from '@/hooks/useDarkMode'

function Component() {
  const { isDark, toggle } = useDarkMode()
  return (
    <button onClick={toggle}>
      {isDark ? '🌙' : '☀️'}
    </button>
  )
}
```

### Adding Dark Mode to Components

Use Tailwind's `dark:` prefix:

```jsx
<div className='bg-white dark:bg-gray-900 text-black dark:text-white'>Content</div>
```

---

## 📤 Scroll to Top

A floating button appears when scrolling down, allowing users to quickly return to the top.

### Features

- Appears after scrolling 300px
- Smooth scroll animation
- Animated entrance/exit with Framer Motion
- Positioned at bottom-right corner

---

## 🎨 Styling Guide

### Tailwind CSS

The project uses Tailwind CSS with custom configuration:

```javascript
// tailwind.config.ts
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        secondary: '#FF4D4D',
        'secondary-2': '#4ADE80'
      }
    }
  }
}
```

### Using clsx

Combine classes conditionally:

```typescript
import { cn } from '@/lib/utils'

<div className={cn(
  'base-class',
  isActive && 'active-class',
  isDark && 'dark-class'
)} />
```

---

## 📝 Form Validation

### Zod Schemas

Forms are validated using Zod:

```typescript
import { z } from 'zod'

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Name too short')
})
```

### Form Submission

Uses React Query's `useMutation`:

```typescript
const { mutate, isPending, isSuccess } = useMutation({
  mutationFn: async data => api.submit(data),
  onSuccess: () => console.log('Success!')
})
```

---

## 🔌 API Integration

### Axios Configuration

```typescript
// lib/axios.ts
import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add auth token from cookies
axiosInstance.interceptors.request.use(config => {
  const token = Cookies.get('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
```

### React Query Setup

```typescript
// app/[locale]/layout.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

---

## 🎭 Animations

### Framer Motion Examples

**Fade In on Scroll:**

```typescript
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

**Stagger Children:**

```typescript
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map((item) => (
    <motion.div variants={itemVariants} key={item.id}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## 🔍 SEO Implementation

### Features

- ✅ Dynamic meta tags
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alternate language links

### SEO Files

1. **`lib/seo.config.ts`** - SEO configuration
2. **`components/SEO/Metadata.tsx`** - Meta tag generator
3. **`components/SEO/StructuredData.tsx`** - JSON-LD schemas
4. **`app/sitemap.ts`** - Sitemap generator
5. **`app/robots.ts`** - Robots.txt generator

### Usage

```typescript
// In any page
export async function generateMetadata({ params }) {
  const { locale } = await params
  return generateSEOMetadata({
    locale,
    title: 'Custom Page Title',
    description: 'Custom description',
    path: '/custom-path'
  })
}
```

### Structured Data

```typescript
<StructuredData
  locale={locale}
  type="Event"
  data={{
    name: 'Event Name',
    startDate: '2025-07-08T12:00:00+04:00',
    description: 'Event description',
  }}
/>
```

---

## 🔧 Configuration Files

### `next.config.ts`

- Security headers
- Image optimization
- Custom webpack config

### `tailwind.config.ts`

- Custom colors
- Dark mode configuration
- Custom plugins

### `tsconfig.json`

- TypeScript compiler options
- Path aliases

---

## 📚 NPM Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "type-check": "tsc --noEmit",
  "format": "prettier --write .",
  "analyze": "ANALYZE=true next build"
}
```

---

## 🎯 Performance Optimization

### Implemented Optimizations

- ✅ Code splitting
- ✅ Image optimization
- ✅ Font optimization
- ✅ Tree shaking
- ✅ Lazy loading
- ✅ Caching strategies
- ✅ Bundle analysis

### Lighthouse Score Target

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🛡️ Security

### Implemented Security Features

- ✅ HTTPS enforcement
- ✅ CSRF protection
- ✅ XSS prevention
- ✅ Content Security Policy
- ✅ Secure headers
- ✅ Input sanitization
- ✅ Environment variable protection

---

## 👥 Author

- **Mohamed Khaled** - _Initial work_ - [YourGitHub](https://github.com/mohamed-khaledes)

---

## 📞 Support

For support, email mohamedkhaelsayed@gmail.com .

---

---

## 📊 Project Status

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 🔗 Links

- **Live Demo**: [https://hub71.com](https://hub71.com)

---

**Made with ❤️ by the HUB71 Team**
