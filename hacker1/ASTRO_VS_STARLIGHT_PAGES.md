# Astro Pages vs Starlight Pages: Complete Guide

This document explains the difference between Astro pages and Starlight pages in our project, how they work together, and where they're configured in the codebase.

## Overview

Our project uses **Astro** as the base framework with **Starlight** as an integration for documentation pages. This creates two distinct types of pages:

1. **Astro Pages** - Custom pages built with Astro components
2. **Starlight Pages** - Documentation pages managed by the Starlight integration

## Astro Pages

### What are Astro Pages?
Astro pages are standard Astro components that render as full web pages. They give you complete control over the HTML structure, styling, and behavior.

### Location in Codebase
```
src/pages/
├── backgrounds.astro      ← Custom Astro page
├── bulma.astro           ← Custom Astro page  
├── dark-mode-background.astro ← Custom Astro page
└── markdown-demo.astro   ← Custom Astro page
```

### Characteristics
- **Full Control**: Complete control over HTML structure, head tags, styling
- **Custom Layout**: You design the entire page layout from scratch
- **Manual Navigation**: Must manually import and include navigation components
- **Direct Routing**: File-based routing (`/pages/example.astro` → `/example`)
- **Astro Syntax**: Uses `.astro` file extension with Astro component syntax

### Example Structure
```astro
---
// Component script (runs on server)
import Navbar from '../components/Navbar.astro';
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Custom Page</title>
    <style>
        /* Custom styles */
    </style>
</head>
<body>
    <Navbar />
    <!-- Your custom content -->
</body>
</html>
```

### Referenced in Code
- **File Location**: `src/pages/*.astro`
- **Routing**: Automatic file-based routing
- **Navigation**: Manual import: `import Navbar from '../components/Navbar.astro';`

## Starlight Pages

### What are Starlight Pages?
Starlight pages are documentation pages managed by the Starlight integration. They use Starlight's built-in layout, navigation, and features designed specifically for documentation sites.

### Location in Codebase
```
src/content/docs/
├── index.mdx                 ← Starlight page (homepage)
├── index2.mdx               ← Starlight page
├── daisyui-showcase.mdx     ← Starlight page
├── starlight-css-guide.mdx  ← Starlight page
├── starlight-showcase.mdx   ← Starlight page
└── guides/
    └── example.md           ← Starlight page
```

### Characteristics
- **Starlight Layout**: Uses Starlight's pre-built layout and styling
- **Built-in Features**: Automatic sidebar, search, theme toggle, responsive design
- **Content Focus**: Optimized for documentation with MDX/Markdown syntax
- **Automatic Navigation**: Starlight handles navigation structure
- **Component Overrides**: Can override specific Starlight components

### Example Structure
```mdx
---
title: Page Title
description: Page description
template: splash  # Optional Starlight template
---

import { Card, CardGrid } from '@astrojs/starlight/components';

# Your Content

Regular markdown content with optional Astro/React components.

<Card title="Example">
Content inside a Starlight component
</Card>
```

### Referenced in Code
- **Content Collection**: Defined in `src/content.config.ts`
- **Starlight Integration**: Configured in `astro.config.mjs`
- **Sidebar**: Configured in `astro.config.mjs` under `starlight.sidebar`

## Key Configuration Files

### 1. `astro.config.mjs` - Main Configuration
```javascript
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hacker1',
			components: {
				Header: './src/components/Header.astro', // Component override
			},
			sidebar: [
				// Starlight sidebar configuration
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
			],
		}),
	],
});
```

### 2. `src/content.config.ts` - Content Collections
```typescript
import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ 
		loader: docsLoader(), 
		schema: docsSchema() 
	}),
};
```

## Navigation Architecture

### How Navigation Works Differently

#### Astro Pages
```astro
---
import Navbar from '../components/Navbar.astro';  // Manual import
---
<Navbar />  <!-- Manual inclusion -->
```

#### Starlight Pages
- **Automatic**: Navigation handled by Starlight integration
- **Component Override**: We override the Header component in `astro.config.mjs`
- **Global**: Applied to all Starlight pages automatically

### Our Navigation Setup
```
┌─ Starlight Pages (*.mdx in src/content/docs/)
│  └─ astro.config.mjs (Header component override)
│     └─ src/components/Header.astro  
│        └─ src/components/Navbar.astro ← Single source of truth
│
└─ Astro Pages (*.astro in src/pages/)
   └─ Manual import of src/components/Navbar.astro ← Same component
```

## URL Structure

### Astro Pages
- `src/pages/backgrounds.astro` → `https://site.com/backgrounds`
- `src/pages/bulma.astro` → `https://site.com/bulma`

### Starlight Pages  
- `src/content/docs/index.mdx` → `https://site.com/` (root)
- `src/content/docs/guides/example.md` → `https://site.com/guides/example`

## Styling Differences

### Astro Pages
- **Complete control** over all CSS and styling
- **No built-in styles** - you style everything from scratch
- **Custom layouts** - design your own page structure

### Starlight Pages
- **Starlight theme** applied automatically
- **Built-in responsive design** and accessibility features
- **Theme variables** for customization
- **Dark/light mode** handled automatically

## When to Use Each

### Use Astro Pages When:
- You need complete design control
- Building custom landing pages or demos
- Creating unique layouts that don't fit documentation patterns
- Need custom functionality or complex interactions

### Use Starlight Pages When:
- Writing documentation
- Need built-in search functionality
- Want automatic navigation and sidebar
- Benefit from Starlight's accessibility features
- Content-focused pages with minimal custom styling needed

## Current Project Usage

### Astro Pages in Our Project:
- **`/backgrounds`** - Custom background pattern showcase
- **`/bulma`** - Bulma CSS framework demonstration  
- **`/dark-mode-background`** - Dark mode background examples
- **`/markdown-demo`** - Markdown rendering demo

### Starlight Pages in Our Project:
- **`/`** (Homepage) - Main documentation landing page
- **`/guides/example`** - Example guide documentation
- **Showcase pages** - Documentation for various features

## Component Sharing

Both page types can share the same Astro components:
- **`Navbar.astro`** - Used by both via different methods
- **Custom components** - Can be imported into either page type
- **Layouts** - Astro pages can use custom layouts; Starlight has its own

This architecture gives us the flexibility of custom Astro pages for unique designs while leveraging Starlight's powerful documentation features for content-focused pages.
