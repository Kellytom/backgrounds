# TODO: Project Tasks

## Current Status
- ✅ Basic Astro + Starlight setup complete
- ✅ Multiple demo pages created (backgrounds, bulma, dark-mode, markdown-demo)
- ✅ Navbar component created with search and theme toggle
- ⚠️ Navbar only appears on some pages (inconsistent)

## Priority Tasks

### 1. Fix Navigation Bar Display
**Goal**: Menu bar appears at the top of ALL pages with search and dark/light mode toggle

**Current Issues**:
- Navbar appears on `/backgrounds` page (custom Astro page)
- Navbar does NOT appear on `/` (index.mdx Starlight page)
- Navbar does NOT appear on other Starlight pages
- Header override approach failed

**Solutions to try**:
- [ ] Fix the Header component override in `astro.config.mjs`
- [ ] Add `<Navbar />` to all Starlight pages manually
- [ ] Create a layout component that wraps all pages
- [ ] Use Starlight's built-in customization options

### 2. Make Search Functional
**Goal**: Search works on all pages and searches all content

**Current Status**:
- [ ] Test if Starlight Search component works on custom pages
- [ ] Verify search indexes all content (Starlight + custom pages)
- [ ] Ensure search styling matches navbar design

### 3. Standardize Theme Toggle
**Goal**: Dark/light mode toggle works consistently across all pages

**Tasks**:
- [ ] Test theme toggle functionality
- [ ] Ensure theme persists across page navigation
- [ ] Verify theme applies to both Starlight and custom pages

### 4. Clean Up Page Structure
**Goal**: Organize and improve all demo pages

**Tasks**:
- [ ] Review all created pages for functionality
- [ ] Add proper navigation links between pages
- [ ] Ensure consistent styling across all pages
- [ ] Add proper page titles and descriptions

### 5. Documentation and Finalization
**Goal**: Document the project and prepare for deployment

**Tasks**:
- [ ] Update README.md with project overview
- [ ] Document how to add new pages
- [ ] Document the difference between Astro and Starlight pages
- [ ] Test build process (`npm run build`)
- [ ] Test deployment readiness

## Technical Notes

### Files to Focus On:
- `src/components/Navbar.astro` - Main navigation component
- `src/components/Header.astro` - Starlight header override (currently not working)
- `astro.config.mjs` - Starlight configuration
- `src/content/docs/index.mdx` - Homepage (Starlight)
- `src/pages/*.astro` - Custom pages

### Current Architecture:
```
Custom Pages (src/pages/*.astro)
├── Import Navbar manually
└── Works ✅

Starlight Pages (src/content/docs/*.mdx)
├── Should use Header override
└── Not working ❌
```

### Next Steps:
1. Fix navbar display on ALL pages
2. Test all functionality
3. Clean up and document
4. Deploy

## Questions to Resolve:
- Should we use Header override or manual imports?
- Do we need the sidebar on custom pages?
- Should all pages have the same navigation structure?
