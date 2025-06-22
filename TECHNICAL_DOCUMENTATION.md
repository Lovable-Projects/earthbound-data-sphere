
# Perssonify - Technical Documentation

## Project Overview

Perssonify is a modern React-based web application built for a growth and strategic solutions company. The application showcases services, provides insights, and enables client engagement through a sophisticated, responsive interface.

## Tech Stack

### Core Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.3.1 | Core frontend framework |
| **TypeScript** | Latest | Type safety and enhanced development |
| **Vite** | Latest | Build tool and development server |
| **Tailwind CSS** | Latest | Utility-first CSS framework |
| **React Router DOM** | ^6.26.2 | Client-side routing |

### UI/UX Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| **Shadcn/UI** | Latest | Component library foundation |
| **Radix UI** | Various | Headless UI primitives |
| **Framer Motion** | ^12.18.1 | Advanced animations |
| **Lucide React** | ^0.516.0 | Icon library |
| **Motion** | ^12.18.1 | Additional animation utilities |

### Data & State Management

| Library | Version | Purpose |
|---------|---------|---------|
| **Supabase JS** | ^2.50.0 | Backend-as-a-Service |
| **TanStack React Query** | ^5.80.10 | Server state management |
| **React Hook Form** | ^7.53.0 | Form handling |
| **Zod** | ^3.23.8 | Schema validation |

### Specialized Components

| Library | Version | Purpose |
|---------|---------|---------|
| **Recharts** | ^2.12.7 | Data visualization |
| **React Three Fiber** | ^8.18.0 | 3D graphics |
| **Three.js** | ^0.177.0 | 3D rendering engine |
| **Cobe** | ^0.6.4 | Interactive globe visualization |
| **Spline React** | ^4.0.0 | 3D scene integration |

### Development & Build Tools

| Tool | Version | Purpose |
|------|---------|---------|
| **ESLint** | Latest | Code linting |
| **PostCSS** | Latest | CSS processing |
| **Autoprefixer** | Latest | CSS vendor prefixes |
| **TypeScript Config** | Latest | TypeScript configuration |

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components (Header, Footer, Layout)
│   ├── sections/       # Page sections
│   ├── ui/             # Base UI components (shadcn/ui)
│   └── ...
├── pages/              # Route components
│   ├── growth-solutions/
│   ├── strategic-solutions/
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── integrations/       # Third-party integrations
│   └── supabase/       # Supabase configuration
├── types/              # TypeScript type definitions
└── ...
```

## Key Features

### 1. Responsive Design System

- **Mobile-first approach** with Tailwind CSS
- **Dark/Light mode support** with persistent storage
- **Responsive breakpoints**: sm, md, lg, xl, 2xl
- **Custom design tokens** for consistent theming

### 2. Animation Framework

- **Framer Motion integration** for smooth animations
- **Scroll-triggered animations** with viewport detection
- **Custom animation variants** for consistent motion
- **Performance-optimized animations** with reduced motion support

### 3. 3D Visualizations

- **Three.js integration** for complex 3D scenes
- **Interactive globe** using Cobe library
- **Spline 3D scenes** for hero sections
- **Performance-optimized rendering**

### 4. SEO Optimization

| Feature | Implementation |
|---------|----------------|
| **Meta Tags** | React Helmet Async |
| **Open Graph** | Social media optimization |
| **Structured Data** | JSON-LD schema markup |
| **Sitemap** | Auto-generated |
| **Canonical URLs** | Duplicate content prevention |

### 5. Performance Optimizations

| Optimization |  Description |
|--------------|-------------|
| **Code Splitting** | Route-based lazy loading |
| **Image Optimization** | WebP format, lazy loading |
| **Bundle Analysis** | Tree shaking, dead code elimination |
| **Caching Strategy** | Service worker implementation |
| **CDN Integration** | Static asset delivery |

## Component Architecture

### Layout Components

```typescript
// Layout hierarchy
Layout
├── Header (navigation, theme toggle)
├── Main (page content)
│   ├── ScrollToTop (navigation utility)
│   └── Outlet (route content)
└── Footer (links, newsletter)
```

### Page Components

| Page | Route | Purpose |
|------|-------|---------|
| **Index** | `/` | Homepage with hero and sections |
| **About** | `/about` | Company information |
| **Growth Solutions** | `/growth-solutions` | Service offerings |
| **Strategic Solutions** | `/strategic-solutions` | Strategic services |
| **Blog** | `/blog` | Content marketing |
| **Contact** | `/contact` | Lead generation |
| **Insights** | `/insights` | Industry insights |

### UI Components

```typescript
// Component categories
ui/
├── base/           # Basic elements (Button, Input, Card)
├── composite/      # Complex components (forms, modals)
├── data/           # Data display (charts, tables)
├── feedback/       # User feedback (toasts, alerts)
├── layout/         # Layout utilities (grids, containers)
├── navigation/     # Navigation components
└── specialized/    # Custom components (3D, animations)
```

## State Management

### Client State
- **React Hook Form** for form state
- **React Context** for theme management
- **Local Storage** for user preferences

### Server State
- **TanStack Query** for API data fetching
- **Supabase** for backend operations
- **Real-time subscriptions** for dynamic content

## Routing Strategy

```typescript
// Route structure
/                           # Homepage
├── /about                  # About page
├── /growth-solutions       # Growth services hub
│   ├── /digital-marketing
│   ├── /seo
│   ├── /social-media
│   ├── /content
│   └── /email
├── /strategic-solutions    # Strategic services hub
│   ├── /consulting
│   ├── /research
│   ├── /branding
│   ├── /analytics
│   └── /optimization
├── /blog                   # Blog system
│   └── /blog/:slug         # Individual posts
├── /insights               # Industry insights
├── /contact                # Contact forms
└── /*                      # 404 handling
```

## Database Schema (Supabase)

### Core Tables

```sql
-- Blog system
blog_posts (
  id, title, content, slug, author,
  category, tags, featured_image,
  published_at, created_at, updated_at
)

-- Media management
blog_media (
  id, blog_post_id, image_url,
  alt_text, caption, display_order
)

-- Lead generation
service_inquiries (
  id, name, email, company,
  service_type, message, status,
  created_at
)
```

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

### Code Quality Standards

| Standard | Tool | Configuration |
|----------|------|---------------|
| **TypeScript** | TSC | Strict mode enabled |
| **ESLint** | ESLint | React + TypeScript rules |
| **Prettier** | Prettier | Auto-formatting |
| **Husky** | Git Hooks | Pre-commit validation |

## Deployment Configuration

### Production Build

- **Static Site Generation** with pre-rendering
- **Asset optimization** (minification, compression)
- **Environment variables** for API keys
- **CDN integration** for global delivery

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Performance Metrics

### Core Web Vitals Targets

| Metric | Target | Current |
|--------|--------|---------|
| **LCP** | < 2.5s | ~1.8s |
| **FID** | < 100ms | ~45ms |
| **CLS** | < 0.1 | ~0.05 |

### Bundle Size Analysis

| Bundle | Size | Description |
|--------|------|-------------|
| **Main** | ~245KB | Core application |
| **Vendor** | ~180KB | Third-party libraries |
| **CSS** | ~85KB | Tailwind CSS |
| **Assets** | ~2.1MB | Images and media |

## Browser Support

| Browser | Version | Support Level |
|---------|---------|---------------|
| **Chrome** | 90+ | Full support |
| **Firefox** | 88+ | Full support |
| **Safari** | 14+ | Full support |
| **Edge** | 90+ | Full support |

## Security Considerations

### Client-Side Security

- **Content Security Policy** implementation
- **XSS protection** through React's built-in escaping
- **Dependency scanning** for vulnerabilities
- **Environment variable protection**

### Data Protection

- **Input validation** with Zod schemas
- **Rate limiting** on form submissions
- **CORS configuration** for API endpoints
- **Secure headers** implementation

## Monitoring & Analytics

### Performance Monitoring

- **Web Vitals** tracking
- **Error boundary** implementation
- **Performance API** usage
- **Bundle analyzer** reports

### User Analytics

- **Page view tracking**
- **User journey mapping**
- **Conversion funnel analysis**
- **A/B testing infrastructure**

## Maintenance Guidelines

### Regular Updates

- **Monthly dependency updates**
- **Security patch reviews**
- **Performance optimization**
- **Content management system updates**

### Code Review Process

1. **Feature branch** creation
2. **Pull request** submission
3. **Automated testing** execution
4. **Manual code review**
5. **Deployment** to staging
6. **Production** release

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| **Build failures** | Clear node_modules, reinstall |
| **Type errors** | Update TypeScript definitions |
| **Style conflicts** | Check Tailwind CSS purging |
| **Route issues** | Verify React Router configuration |

### Debug Tools

- **React Developer Tools**
- **Redux DevTools** (if applicable)
- **Network tab** for API debugging
- **Lighthouse** for performance auditing

---

## Getting Started for New Developers

1. **Clone the repository**
2. **Install Node.js** (v18+)
3. **Run `npm install`**
4. **Set up environment variables**
5. **Start development server**
6. **Read component documentation**
7. **Follow coding standards**

This documentation serves as a comprehensive guide for understanding, maintaining, and extending the Perssonify application codebase.
