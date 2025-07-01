
# Solution Template System Guide

## Overview

Instead of creating separate files for each solution page (which would result in 20+ similar files), we've implemented a smart template system that allows you to create any solution page using a single reusable component.

## How It Works

### The Template Component
All solution pages now use `SolutionTemplate.tsx` located at `src/components/templates/SolutionTemplate.tsx`.

### Current Implementation
We currently have two example solution pages:
- **SEO Services** (`src/pages/growth-solutions/SEO.tsx`)
- **Social Media Management** (`src/pages/growth-solutions/SocialMedia.tsx`)

## Creating New Solution Pages

### Step 1: Create the Page File
Create a new file in the appropriate folder:
- Growth Solutions: `src/pages/growth-solutions/YourSolution.tsx`
- Strategic Solutions: `src/pages/strategic-solutions/YourSolution.tsx`

### Step 2: Use the Template
Here's the basic structure for any new solution page:

```typescript
import React from 'react';
import { YourIcon } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const YourSolution: React.FC = () => {
  const services = [
    {
      icon: YourIcon,
      title: 'Service 1 Title',
      description: 'Description of what this service provides.'
    },
    {
      icon: YourIcon,
      title: 'Service 2 Title',
      description: 'Description of what this service provides.'
    },
    // Add more services as needed
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions" // or "Strategic Solutions"
      title="Your Solution Name"
      description="Brief description of what this solution offers."
      categoryIcon={YourIcon}
      services={services}
      ctaTitle="Ready to Get Started?"
      ctaDescription="Let's create a strategy that works for your business."
      backLink="/growth-solutions" // or "/strategic-solutions"
      backLinkText="View All Growth Solutions" // or "View All Strategic Solutions"
    />
  );
};

export default YourSolution;
```

### Step 3: Add to Routes
Add the new route to your `App.tsx` file:

```typescript
import YourSolution from './pages/growth-solutions/YourSolution';

// In your routes:
<Route path="/growth-solutions/your-solution" element={<YourSolution />} />
```

### Step 4: Add Navigation Links
Update the main category pages (`GrowthSolutions.tsx` or `StrategicSolutions.tsx`) to include a link to your new solution.

## Template Props Explained

| Prop | Type | Description |
|------|------|-------------|
| `category` | string | "Growth Solutions" or "Strategic Solutions" |
| `title` | string | The main title of the solution |
| `description` | string | Brief description shown in the hero section |
| `categoryIcon` | LucideIcon | Icon representing the solution category |
| `services` | Service[] | Array of services/features offered |
| `ctaTitle` | string | Call-to-action section title |
| `ctaDescription` | string | Call-to-action section description |
| `backLink` | string | Link to go back to the category page |
| `backLinkText` | string | Text for the back link button |

## Service Object Structure

Each service in the `services` array should have:

```typescript
{
  icon: LucideIcon,     // Icon from lucide-react
  title: string,        // Service name
  description: string   // What this service provides
}
```

## Benefits of This Approach

1. **Consistency**: All solution pages have the same structure and styling
2. **Maintainability**: Changes to the template affect all solution pages
3. **Efficiency**: No need to duplicate code across multiple files
4. **Scalability**: Easy to add new solutions without creating new files
5. **Responsive**: All pages automatically inherit mobile-friendly design

## Available Icons

The template uses Lucide React icons. Popular choices for solutions include:
- `Search` (SEO)
- `Users` (Social Media)
- `BarChart` (Analytics)
- `Target` (Marketing)
- `Palette` (Creative)
- `Mail` (Email Marketing)
- `Globe` (Web Solutions)
- `Zap` (Performance)
- `Shield` (Security/Compliance)

## Mobile Responsiveness

The template automatically handles:
- Responsive text sizing
- Mobile-friendly navigation
- Proper spacing on all screen sizes
- Touch-friendly buttons and interactions

## Adding More Solutions

To add all the solutions you need:

1. Create the page file using the template
2. Define your services array
3. Add the route to App.tsx
4. Add navigation links from category pages
5. Test on mobile and desktop

## Example: Adding Email Marketing

```typescript
// src/pages/growth-solutions/EmailMarketing.tsx
import React from 'react';
import { Mail, Target, Users, BarChart } from 'lucide-react';
import SolutionTemplate from '@/components/templates/SolutionTemplate';

const EmailMarketing: React.FC = () => {
  const services = [
    {
      icon: Mail,
      title: 'Email Campaign Design',
      description: 'Beautiful, responsive email templates that drive engagement.'
    },
    {
      icon: Target,
      title: 'Automated Sequences',
      description: 'Set up automated email flows for better conversion.'
    },
    {
      icon: Users,
      title: 'List Segmentation',
      description: 'Target the right audience with personalized messaging.'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track opens, clicks, and conversion rates.'
    }
  ];

  return (
    <SolutionTemplate
      category="Growth Solutions"
      title="Email Marketing"
      description="Build lasting relationships with your audience through strategic email marketing campaigns."
      categoryIcon={Mail}
      services={services}
      ctaTitle="Ready to Boost Your Email ROI?"
      ctaDescription="Let's create email campaigns that your audience actually wants to read."
      backLink="/growth-solutions"
      backLinkText="View All Growth Solutions"
    />
  );
};

export default EmailMarketing;
```

This system makes it incredibly easy to maintain and expand your solution offerings without code duplication!
