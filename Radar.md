
# Radar Component Usage Guide

## Overview
The Radar component creates an animated rotating radar effect with concentric circles. It's designed to be used as a visual centerpiece with surrounding content.

## Core Components

### 1. Radar Component (`src/components/ui/radar.tsx`)
The main radar component with rotating animation:
- Creates 8 concentric circles
- Has a rotating radar line
- Configurable via className prop
- Uses `animate-radar-spin` animation

### 2. RadarPreview Component (`src/components/ui/radar-preview.tsx`)
A complete implementation showing how to use the Radar:
- Includes IconContainer components positioned around the radar
- Shows business-related icons and text
- Demonstrates proper spacing and positioning

## Customization Options

### Changing the Radar Line Color
In `radar.tsx`, modify this line:
```tsx
<div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
```
Change `via-primary` to any color class (e.g., `via-sky-600`, `via-red-500`)

### Adjusting Circle Count
In `radar.tsx`, change the array size:
```tsx
const circles = new Array(8).fill(1); // Change 8 to desired number
```

### Modifying Animation Speed
In `tailwind.config.ts`, adjust the duration:
```tsx
'radar-spin': 'radar-spin 10s linear infinite', // Change 10s to desired speed
```

### Customizing Icons and Text
In `radar-preview.tsx`, modify the IconContainer props:
```tsx
<IconContainer
  text="Your Custom Text"
  delay={0.2}
  icon={<YourIcon className="h-8 w-8 text-slate-600" />}
/>
```

## Usage Examples

### Basic Usage
```tsx
import { Radar } from '@/components/ui/radar';

<Radar className="absolute -bottom-12" />
```

### With Custom Content
```tsx
import { RadarPreview } from '@/components/ui/radar-preview';

<RadarPreview />
```

### Custom Implementation
```tsx
<div className="relative">
  {/* Your content positioned around radar */}
  <Radar className="absolute inset-0" />
</div>
```

## Styling Notes
- The radar uses absolute positioning
- Default size is based on circle multiples (5rem increments)
- Responsive design considerations are built into RadarPreview
- Uses Tailwind CSS for all styling
- Framer Motion for animations

## Animation Requirements
Ensure your `tailwind.config.ts` includes the radar-spin animation:
```tsx
animation: {
  'radar-spin': 'radar-spin 10s linear infinite',
},
keyframes: {
  'radar-spin': {
    from: { transform: 'rotate(20deg)' },
    to: { transform: 'rotate(380deg)' },
  },
},
```
