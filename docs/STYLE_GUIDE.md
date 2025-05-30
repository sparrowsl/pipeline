# Design System & Style Guide

This document outlines the design system for our financial dashboard application, providing guidelines for consistent UI development using Tailwind CSS utilities.

## Overview

Our design system is built around a modern, professional financial interface with a dark theme, featuring clean typography, purposeful color usage, and clear visual hierarchy. We follow Tailwind's utility-first philosophy while maintaining consistency through standardized utility combinations.

The color palette centers around two primary accent colors:

- **Purple accent**: `#ad89fd` - Used for primary actions, interactive elements, and brand elements
- **Lime accent**: `#bde35b` - Used for highlights, CTAs, and positive interactions

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
<h1 class="text-display-2xl text-white">$12,890.67</h1>

<!-- Display XL - Section headers, important metrics -->
<h2 class="text-display-xl text-white">Monthly Revenue</h2>

<!-- Display LG - Card titles, primary data -->
<h3 class="text-display-lg text-white">Portfolio Value</h3>

<!-- Display MD - Secondary headings -->
<h4 class="text-display-md text-white">Recent Transactions</h4>

<!-- Display SM - Tertiary headings -->
<h5 class="text-display-sm text-white">Account Summary</h5>
```

#### Headings (Section & Component Headers)

```html
<!-- Heading XL - Main section titles -->
<h2 class="text-heading-xl text-white">Dashboard Overview</h2>

<!-- Heading LG - Card headers, subsection titles -->
<h3 class="text-heading-lg text-gray-300">Investment Performance</h3>

<!-- Heading MD - Component titles -->
<h4 class="text-heading-md text-gray-300">Latest Activity</h4>

<!-- Heading SM - Minor headings -->
<h5 class="text-heading-sm text-gray-300">Quick Actions</h5>
```

#### Body Text (Content & Descriptions)

```html
<!-- Body XL - Important descriptions -->
<p class="text-body-xl text-gray-300">Key financial insights and analysis</p>

<!-- Body LG - Standard body text -->
<p class="text-body-lg text-gray-300">Standard content and descriptions</p>

<!-- Body MD - Secondary text -->
<p class="text-body-md text-gray-400">Additional context and details</p>

<!-- Body SM - Fine print, captions -->
<p class="text-body-sm text-gray-500">Last updated 2 minutes ago</p>
```

#### Labels (UI Elements)

```html
<!-- Label LG - Form labels, button text -->
<label class="text-label-lg font-medium text-gray-300">Account Balance</label>

<!-- Label MD - Small buttons, tags -->
<span class="text-label-md font-medium text-gray-400">Status: Active</span>

<!-- Label SM - Status indicators, badges -->
<span class="text-label-sm font-medium text-gray-500">Updated</span>
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

- `text-dashboard-purple-500` / `bg-dashboard-purple-500` - Primary brand color (#ad89fd)
- `text-dashboard-yellow-500` / `bg-dashboard-yellow-500` - Highlights and CTAs (#bde35b)
- `text-dashboard-success-500` - Positive values
- `text-dashboard-error-500` - Negative values
- `text-dashboard-warning-500` - Warning states

### Color Usage Guidelines

1. **Backgrounds**: Use dashboard gray scales for layered surfaces
2. **Text Hierarchy**: White → gray-300 → gray-400 → gray-500 for importance
3. **Primary Accent**: Purple (#ad89fd) for primary actions, interactive elements, and brand elements
4. **Secondary Accent**: Lime (#bde35b) for highlights, CTAs, and positive interactions
5. **Semantic**: Green for positive, red for negative, yellow for warnings

## Component Patterns

Instead of custom utility classes, use these standardized Tailwind combinations:

### Cards

```html
<!-- Primary Card -->
<div class="rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900 p-6 shadow-card">
  <h3 class="mb-2 text-heading-lg text-gray-300">Monthly Revenue</h3>
  <p class="mb-4 text-display-lg text-white">$12,890.67</p>
  <p class="text-body-md text-gray-400">+4 Jan - 10 Feb, 2025</p>
</div>

<!-- Accent Card (with purple gradient) -->
<div
  class="rounded-2xl bg-gradient-to-br from-dashboard-purple-500 to-dashboard-purple-600 p-6 text-white shadow-card"
>
  <h3 class="mb-2 text-heading-lg">Premium Features</h3>
  <p class="text-body-lg">Unlock advanced analytics and insights</p>
</div>

<!-- Highlight Card (with lime accent) -->
<div class="rounded-2xl bg-dashboard-yellow-500 p-6 text-dashboard-black shadow-card">
  <h3 class="mb-2 text-heading-lg font-semibold">Special Offer</h3>
  <p class="text-body-lg">Limited time promotion available</p>
</div>
```

### Buttons

```html
<!-- Primary Button (Purple) -->
<button
  class="rounded-xl bg-dashboard-purple-500 px-6 py-3 text-label-lg font-medium text-white transition-colors hover:bg-dashboard-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  Primary Action
</button>

<!-- Accent Button (Lime) -->
<button
  class="rounded-xl bg-dashboard-yellow-500 px-6 py-3 text-label-lg font-medium text-dashboard-black transition-colors hover:bg-dashboard-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  Get Started
</button>

<!-- Secondary Button -->
<button
  class="rounded-xl bg-dashboard-gray-800 px-6 py-3 text-label-lg font-medium text-white transition-colors hover:bg-dashboard-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
>
  Secondary Action
</button>
```

### Breadcrumbs

```html
<!-- Standard Breadcrumb with Back Navigation -->
<nav class="mb-6 pt-8">
  <div class="flex items-center gap-2">
    <a
      href="/parent-page"
      class="flex items-center gap-2 text-body-lg font-medium text-gray-300 transition-colors hover:text-white"
    >
      <icon class="h-5 w-5" />
      <!-- Use appropriate back arrow icon -->
      Parent Page
    </a>
    <icon class="h-4 w-4 text-gray-500" />
    <!-- Use chevron-right icon -->
    <span class="text-body-lg text-gray-400">Current Page</span>
  </div>
</nav>

<!-- Multi-level Breadcrumb -->
<nav class="mb-6 pt-8">
  <div class="flex items-center gap-2">
    <a
      href="/dashboard"
      class="text-body-lg font-medium text-gray-300 transition-colors hover:text-white"
    >
      Dashboard
    </a>
    <icon class="h-4 w-4 text-gray-500" />
    <a
      href="/settings"
      class="text-body-lg font-medium text-gray-300 transition-colors hover:text-white"
    >
      Settings
    </a>
    <icon class="h-4 w-4 text-gray-500" />
    <span class="text-body-lg text-gray-400">Profile</span>
  </div>
</nav>

<!-- Simple Breadcrumb (without back arrow) -->
<nav class="mb-6 pt-8">
  <div class="flex items-center gap-2">
    <a
      href="/profile"
      class="text-body-lg font-medium text-gray-300 transition-colors hover:text-white"
    >
      Profile
    </a>
    <icon class="h-4 w-4 text-gray-500" />
    <span class="text-body-lg text-gray-400">Edit Profile</span>
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
  class="flex items-center justify-between rounded-lg p-4 transition-colors hover:bg-dashboard-gray-800"
>
  <div class="flex items-center space-x-3">
    <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-dashboard-yellow-500">
      <icon class="h-5 w-5 text-dashboard-black" />
    </div>
    <div>
      <p class="text-body-lg text-white">Movie Tickets</p>
      <p class="text-body-sm text-gray-400">24 Apr</p>
    </div>
  </div>
  <p class="text-heading-md text-white">$12.5</p>
</div>

<!-- Navigation Link -->
<a
  href="/dashboard"
  class="text-body-lg font-medium text-gray-300 transition-colors hover:text-white"
>
  Dashboard
</a>

<!-- Status Badge -->
<span class="rounded-full bg-dashboard-purple-500 px-3 py-1 text-xs font-medium text-white">
  Active
</span>
```

## Layout & Spacing

### Container & Grid System

```html
<!-- Main container -->
<div class="container mx-auto max-w-7xl px-8">
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

## Accent Color Usage

### Purple (#ad89fd) - Primary Accent

Use for:

- Primary buttons and CTAs
- Interactive states and focus indicators
- Brand elements and logos
- Navigation highlights
- Data visualization (primary data points)
- Links and clickable elements

### Lime (#bde35b) - Secondary Accent

Use for:

- Success states and positive feedback
- Special promotions and highlights
- Secondary CTAs
- Achievement indicators
- Positive metrics and growth indicators
- Action confirmations

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

1. Stick to the dashboard color palette with the two primary accents
2. Use purple (#ad89fd) for primary interactions and brand elements
3. Use lime (#bde35b) for positive actions and highlights
4. Use semantic colors appropriately (success, error, warning)
5. Maintain sufficient contrast ratios
6. Apply accent colors purposefully for maximum impact

## Example Usage

### Complete Card Component

```html
<div
  class="rounded-2xl border border-dashboard-gray-700 bg-dashboard-gray-900 p-6 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-cardHover"
>
  <div class="mb-4 flex items-center justify-between">
    <h3 class="text-heading-lg text-gray-300">Portfolio Overview</h3>
    <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-dashboard-purple-500">
      <icon class="h-4 w-4 text-white" />
    </div>
  </div>
  <p class="mb-2 text-display-lg text-white">$124,567.89</p>
  <div class="flex items-center gap-2">
    <span class="text-body-sm font-medium text-dashboard-success-500">+12.5%</span>
    <span class="text-body-sm text-gray-400">vs last month</span>
  </div>
</div>
```

### Form Example

```html
<form class="space-y-6">
  <div>
    <label class="mb-2 block text-label-lg font-medium text-gray-300"> Account Name </label>
    <input
      type="text"
      class="w-full rounded-lg border border-dashboard-gray-600 bg-dashboard-gray-800 px-4 py-3 text-body-lg text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-dashboard-purple-500"
      placeholder="Enter account name"
    />
  </div>
  <button
    class="w-full rounded-xl bg-dashboard-yellow-500 px-6 py-3 text-label-lg font-medium text-dashboard-black transition-colors hover:bg-dashboard-yellow-600"
  >
    Create Account
  </button>
</form>
```

This utility-first approach maintains consistency while following Tailwind best practices and leveraging our focused two-accent color system for maximum visual impact.
