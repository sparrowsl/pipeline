# Design System & Style Guide

This document outlines the design system for our financial dashboard application, providing guidelines for consistent UI development using Tailwind CSS utilities.

## Overview

Our design system is built around a modern, professional financial interface with a dark theme, featuring clean typography, purposeful color usage, and clear visual hierarchy. We follow Tailwind's utility-first philosophy while maintaining consistency through standardized utility combinations.

## Typography

### Font Family

**Primary Font**: Space Grotesk

- A modern geometric sans-serif font that provides excellent readability
- Used across all text elements in the application
- Configured as the default sans-serif font in Tailwind

### Typography Scale & Usage

#### Display Text (Hero/Main Content)

```html
<!-- Display 2XL - Hero numbers, main financial figures -->
<h1 class="text-white text-display-2xl">$12,890.67</h1>

<!-- Display XL - Section headers, important metrics -->
<h2 class="text-white text-display-xl">Monthly Revenue</h2>

<!-- Display LG - Card titles, primary data -->
<h3 class="text-white text-display-lg">Portfolio Value</h3>

<!-- Display MD - Secondary headings -->
<h4 class="text-white text-display-md">Recent Transactions</h4>

<!-- Display SM - Tertiary headings -->
<h5 class="text-white text-display-sm">Account Summary</h5>
```

#### Headings (Section & Component Headers)

```html
<!-- Heading XL - Main section titles -->
<h2 class="text-white text-heading-xl">Dashboard Overview</h2>

<!-- Heading LG - Card headers, subsection titles -->
<h3 class="text-gray-300 text-heading-lg">Investment Performance</h3>

<!-- Heading MD - Component titles -->
<h4 class="text-gray-300 text-heading-md">Latest Activity</h4>

<!-- Heading SM - Minor headings -->
<h5 class="text-gray-300 text-heading-sm">Quick Actions</h5>
```

#### Body Text (Content & Descriptions)

```html
<!-- Body XL - Important descriptions -->
<p class="text-gray-300 text-body-xl">Key financial insights and analysis</p>

<!-- Body LG - Standard body text -->
<p class="text-gray-300 text-body-lg">Standard content and descriptions</p>

<!-- Body MD - Secondary text -->
<p class="text-gray-400 text-body-md">Additional context and details</p>

<!-- Body SM - Fine print, captions -->
<p class="text-gray-500 text-body-sm">Last updated 2 minutes ago</p>
```

#### Labels (UI Elements)

```html
<!-- Label LG - Form labels, button text -->
<label class="font-medium text-gray-300 text-label-lg">Account Balance</label>

<!-- Label MD - Small buttons, tags -->
<span class="font-medium text-gray-400 text-label-md">Status: Active</span>

<!-- Label SM - Status indicators, badges -->
<span class="font-medium text-gray-500 text-label-sm">Updated</span>
```

## Color System

### Dashboard Color Palette

Our colors are defined in the Tailwind config using the `dashboard` namespace:

#### Background Colors

- `bg-dashboard-black` - Main app background (#000000)
- `bg-dashboard-gray-900` - Primary card backgrounds (#171717)
- `bg-dashboard-gray-800` - Secondary surfaces (#262626)
- `bg-dashboard-gray-700` - Tertiary surfaces (#404040)
- `bg-dashboard-gray-600` - Border/divider colors (#525252)

#### Text Colors

- `text-white` - Primary text on dark backgrounds
- `text-gray-300` - Secondary text on dark backgrounds
- `text-gray-400` - Tertiary text and descriptions
- `text-gray-500` - Subtle text and captions

#### Accent Colors

- `text-dashboard-purple-500` / `bg-dashboard-purple-500` - Primary brand color
- `text-dashboard-yellow-400` / `bg-dashboard-yellow-400` - Highlights and CTAs
- `text-dashboard-success-500` - Positive values
- `text-dashboard-error-500` - Negative values
- `text-dashboard-warning-500` - Warning states

### Color Usage Guidelines

1. **Backgrounds**: Use dashboard gray scales for layered surfaces
2. **Text Hierarchy**: White → gray-300 → gray-400 → gray-500 for importance
3. **Accents**: Purple for primary actions, yellow for highlights
4. **Semantic**: Green for positive, red for negative, yellow for warnings

## Component Patterns

Instead of custom utility classes, use these standardized Tailwind combinations:

### Cards

```html
<!-- Primary Card -->
<div class="p-6 border rounded-2xl border-dashboard-gray-700 bg-dashboard-gray-900 shadow-card">
  <h3 class="mb-2 text-gray-300 text-heading-lg">Monthly Revenue</h3>
  <p class="mb-4 text-white text-display-lg">$12,890.67</p>
  <p class="text-gray-400 text-body-md">+4 Jan - 10 Feb, 2025</p>
</div>

<!-- Accent Card (with gradient) -->
<div
  class="p-6 text-white rounded-2xl bg-gradient-to-br from-dashboard-purple-500 to-dashboard-purple-600 shadow-card"
>
  <h3 class="mb-2 text-heading-lg">Premium Features</h3>
  <p class="text-body-lg">Unlock advanced analytics and insights</p>
</div>

<!-- Highlight Card -->
<div class="p-6 rounded-2xl bg-dashboard-yellow-400 text-dashboard-black shadow-card">
  <h3 class="mb-2 font-semibold text-heading-lg">Special Offer</h3>
  <p class="text-body-lg">Limited time promotion available</p>
</div>
```

### Buttons

```html
<!-- Primary Button -->
<button
  class="px-6 py-3 font-medium text-white transition-colors rounded-xl bg-dashboard-black text-label-lg hover:bg-dashboard-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  Primary Action
</button>

<!-- Accent Button -->
<button
  class="px-6 py-3 font-medium transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  Get Started
</button>

<!-- Secondary Button -->
<button
  class="px-6 py-3 font-medium text-white transition-colors rounded-xl bg-dashboard-gray-800 text-label-lg hover:bg-dashboard-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  Secondary Action
</button>
```

### Breadcrumbs

```html
<!-- Standard Breadcrumb with Back Navigation -->
<nav class="pt-8 mb-6">
  <div class="flex items-center gap-2">
    <a
      href="/parent-page"
      class="flex items-center gap-2 font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
    >
      <icon class="w-5 h-5" />
      <!-- Use appropriate back arrow icon -->
      Parent Page
    </a>
    <icon class="w-4 h-4 text-gray-500" />
    <!-- Use chevron-right icon -->
    <span class="text-gray-400 text-body-lg">Current Page</span>
  </div>
</nav>

<!-- Multi-level Breadcrumb -->
<nav class="pt-8 mb-6">
  <div class="flex items-center gap-2">
    <a
      href="/dashboard"
      class="font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
    >
      Dashboard
    </a>
    <icon class="w-4 h-4 text-gray-500" />
    <a
      href="/settings"
      class="font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
    >
      Settings
    </a>
    <icon class="w-4 h-4 text-gray-500" />
    <span class="text-gray-400 text-body-lg">Profile</span>
  </div>
</nav>

<!-- Simple Breadcrumb (without back arrow) -->
<nav class="pt-8 mb-6">
  <div class="flex items-center gap-2">
    <a
      href="/profile"
      class="font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
    >
      Profile
    </a>
    <icon class="w-4 h-4 text-gray-500" />
    <span class="text-gray-400 text-body-lg">Edit Profile</span>
  </div>
</nav>
```

#### Breadcrumb Guidelines

1. **Typography**: Use `text-body-lg` for consistent sizing
2. **Color Hierarchy**:
   - `text-gray-300` for clickable links
   - `text-white` on hover for interactive state
   - `text-gray-400` for current page (non-clickable)
   - `text-gray-500` for separators
3. **Icons**:
   - Use `h-5 w-5` for back arrows
   - Use `h-4 w-4` for separators (chevron-right)
4. **Spacing**:
   - `gap-2` between breadcrumb elements
   - `mb-6 pt-8` for container spacing
5. **Accessibility**: Wrap in `<nav>` element for screen readers
6. **Interactive States**: Include hover transitions on links

### Interactive Elements

```html
<!-- Transaction Item -->
<div
  class="flex items-center justify-between p-4 transition-colors rounded-lg hover:bg-dashboard-gray-800"
>
  <div class="flex items-center space-x-3">
    <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-dashboard-yellow-400">
      <icon class="w-5 h-5 text-dashboard-black" />
    </div>
    <div>
      <p class="text-white text-body-lg">Movie Tickets</p>
      <p class="text-gray-400 text-body-sm">24 Apr</p>
    </div>
  </div>
  <p class="text-white text-heading-md">$12.5</p>
</div>

<!-- Navigation Link -->
<a
  href="/dashboard"
  class="font-medium text-gray-300 transition-colors text-body-lg hover:text-white"
>
  Dashboard
</a>
```

## Layout & Spacing

### Container & Grid System

```html
<!-- Main container -->
<div class="container px-8 mx-auto max-w-7xl">
  <!-- Content -->
</div>

<!-- Grid layouts -->
<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  <!-- Grid items -->
</div>

<!-- Flex layouts -->
<div class="flex items-center justify-between gap-4">
  <!-- Flex items -->
</div>
```

### Spacing Scale

- `gap-4` / `space-x-4` - Tight spacing (16px)
- `gap-6` / `space-x-6` - Base spacing (24px)
- `gap-8` / `space-x-8` - Loose spacing (32px)
- `p-6` - Card padding (24px)
- `px-8` - Container padding (32px)

### Border Radius

- `rounded-2xl` - Cards (16px)
- `rounded-xl` - Buttons (12px)
- `rounded-lg` - Small elements (8px)
- `rounded-full` - Circular elements

## Best Practices

### Tailwind Usage

1. **Utility-First**: Use Tailwind utilities directly rather than custom CSS classes
2. **Consistent Combinations**: Use the standardized utility combinations provided in this guide
3. **Responsive Design**: Apply responsive prefixes (`md:`, `lg:`) consistently
4. **State Variants**: Use `hover:`, `focus:`, `active:` for interactive states
5. **Custom Properties**: Use CSS custom properties for complex themes when needed

### Component Patterns

1. **Composition over Inheritance**: Build components by combining utilities
2. **Consistent Spacing**: Stick to the defined spacing scale
3. **Semantic Classes**: Use semantic class names for components when utilities become verbose
4. **Accessibility**: Include focus states and ARIA attributes
5. **Performance**: Use Tailwind's purge feature to remove unused styles

### Typography Hierarchy

1. Use display sizes for financial data and key metrics
2. Use heading sizes for section titles and navigation
3. Use body text for content and descriptions
4. Use labels for UI elements and fine print
5. Maintain consistent text color hierarchy

### Color Consistency

1. Stick to the dashboard color palette
2. Use semantic colors appropriately (success, error, warning)
3. Maintain sufficient contrast ratios
4. Use the defined text color hierarchy
5. Apply accent colors sparingly for emphasis

## Example Usage

### Complete Card Component

```html
<div
  class="rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900 p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cardHover"
>
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-gray-300 text-heading-lg">Portfolio Overview</h3>
    <div class="flex items-center justify-center w-8 h-8 rounded-lg bg-dashboard-purple-500">
      <icon class="w-4 h-4 text-white" />
    </div>
  </div>
  <p class="mb-2 text-white text-display-lg">$124,567.89</p>
  <div class="flex items-center gap-2">
    <span class="font-medium text-body-sm text-dashboard-success-500">+12.5%</span>
    <span class="text-gray-400 text-body-sm">vs last month</span>
  </div>
</div>
```

### Form Example

```html
<form class="space-y-6">
  <div>
    <label class="block mb-2 font-medium text-gray-300 text-label-lg"> Account Name </label>
    <input
      type="text"
      class="w-full px-4 py-3 text-white border rounded-lg border-dashboard-gray-600 bg-dashboard-gray-800 text-body-lg focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
      placeholder="Enter account name"
    />
  </div>
  <button
    class="w-full px-6 py-3 font-medium transition-colors rounded-xl bg-dashboard-yellow-400 text-label-lg text-dashboard-black hover:bg-dashboard-yellow-500"
  >
    Create Account
  </button>
</form>
```

This utility-first approach maintains consistency while following Tailwind best practices and avoiding unnecessary custom CSS classes.
