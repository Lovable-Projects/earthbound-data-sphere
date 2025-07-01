
# Breadcrumb Component Usage Guide

This project uses a custom `ThemeBreadcrumb` component that automatically generates breadcrumbs based on the current URL path.

## How to Add Breadcrumbs to Your Pages

### Step 1: Import the Component
```typescript
import ThemeBreadcrumb from '@/components/ui/theme-breadcrumb';
```

### Step 2: Add to Your Page Component
```typescript
const YourPageComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <ThemeBreadcrumb />
        
        {/* Your page content here */}
        <section className="py-16">
          <h1>Your Page Title</h1>
          {/* More content */}
        </section>
      </div>
    </div>
  );
};
```

## How It Works

The breadcrumb component automatically:
- Reads the current URL path
- Splits the path into segments
- Converts kebab-case to Title Case (e.g., "strategic-solutions" becomes "Strategic Solutions")
- Creates clickable navigation links for each segment
- Highlights the current page (last segment) as non-clickable

## Example URL Paths and Generated Breadcrumbs

| URL Path | Generated Breadcrumb |
|----------|---------------------|
| `/strategic-solutions` | Home > Strategic Solutions |
| `/strategic-solutions/process-automation` | Home > Strategic Solutions > Process Automation |
| `/growth-solutions/performance-marketing` | Home > Growth Solutions > Performance Marketing |

## Styling

The breadcrumb uses:
- Muted background with border and backdrop blur
- Primary color for active/current page
- Hover effects for clickable links
- Responsive design that works on all screen sizes

## Customization

To customize the appearance, modify the classes in `/src/components/ui/theme-breadcrumb.tsx`:
- Background: `bg-muted/30`
- Border: `border-border/50`
- Text colors: `text-muted-foreground` and `text-primary`
- Hover effects: `hover:text-primary`

The component is fully integrated with your theme system and will automatically adapt to light/dark mode changes.
