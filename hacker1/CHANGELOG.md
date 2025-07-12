# Changelog


## [0.07] - 2025-07-08

### Added
- **Conditional Astro Configuration**: Dynamic base path handling for development vs production
- **GitHub Pages Deployment**: Automatic deployment workflow using GitHub Actions

### Changed
- **astro.config.mjs**: Base path now conditional based on NODE_ENV
  - Local dev: No base path, works at `http://localhost:4321`
  - Production: Uses `/backgrounds/` base path for GitHub Pages
- **Site Configuration**: Updated for proper GitHub Pages deployment

### Fixed
- **Local Development 404 Issue**: Base path `/backgrounds/` was breaking local development
- **Development/Production Sync**: Hard reset required to sync local Windows version with GitHub updates

### Technical Notes
- **Hard Reset Required**: Local environments needed `git reset --hard HEAD` to sync with GitHub
- **Base Path Issue**: Production base path `/backgrounds/` was causing 404 errors in local development
- **Solution**: Conditional configuration using `process.env.NODE_ENV` to handle both environments

### Deployment
- **GitHub Pages**: https://kellytom.github.io/backgrounds/
- **Local Dev**: http://localhost:4321

## [0.06] - 2025-07-07

### Added
- **Enhanced Frames**: Pale color variations with sharp mat bevel effects
- **Navbar Overhaul**: Complete CSS Grid single-line layout implementation
- **Responsive Navigation**: Optimized to ensure all elements stay on one row

### Changed
- **Color Palette**: Three types of pale backgrounds implemented
  - Type 1: Lightened existing pastels
  - Type 2: Uniform pale grays and off-whites  
  - Type 3: Barely tinted whites with hints of color
- **Typography**: Compact design with reduced font sizes and better spacing
- **Layout**: CSS Grid maintains single line across all screen sizes

### Technical Improvements
- **Sharp Bevel Effects**: Enhanced visual depth with inset box-shadows
- **Mobile Optimization**: Responsive design maintains functionality on small screens
- **Performance**: Optimized CSS for better rendering

## [0.05] - 2025-07-03

### Added
- **Floating Bottom Navigation**: Custom navigation bar positioned at bottom of viewport
- **Dark Mode Styling**: Fine striped granite patterns throughout the interface
- **Sidebar Navigation**: Compact sidebar with scrolling overflow handling

### Changed
- **Astro Dev Toolbar**: Disabled to prevent conflicts with custom navigation
- **Sidebar Height**: Shortened to prevent overlap with floating navigation
- **Navigation Structure**: Simplified for better mobile experience

### Removed
- **Dev Toolbar Conflicts**: Eliminated interference with floating bottom menu

## [0.04] - Earlier Development

### Added
- **Core Astro Setup**: Basic Astro site structure with TypeScript
- **React Integration**: Full React component support for interactive elements
- **Component Architecture**: Layout components and page templates
- **Content System**: JSON data files for different content categories

### Dependencies
- **Astro**: 5.10.2 with React integration
- **Styling**: Bulma CSS with custom theming
- **3D Graphics**: Three.js for scientific visualization
- **Data Visualization**: D3.js for interactive charts
- **Type Safety**: TypeScript for development

### Philosophy
- **Architecture Principle**: "In the beginning was the Word" - content drives implementation
- **Code Quality**: Colossians 3:23 standard - "work with all your heart, as working for the Lord"
- **Unique Approach**: Combining technical excellence with spiritual/scriptural context

## Upcoming Features

### High Priority
- [ ] Complete Chapter 1 content for all categories (500+ words each)
- [ ] Create actual SVG assets (sacred geometry graphics)
- [ ] Python data processing integration
- [ ] Performance optimization for Three.js scenes

### Medium Priority
- [ ] Search functionality across content
- [ ] Breadcrumb navigation consistency
- [ ] Mobile navigation improvements
- [ ] Error boundaries for React components

### Future Enhancements
- [ ] Light mode with marble patterns (Carrara white, Calacatta gold)
- [ ] Advanced Python integration (Pyodide)
- [ ] Progressive Web App features
- [ ] Analytics and monitoring

## Technical Stack

### Core Technologies
- **Framework**: Astro 5.10.2 with React integration
- **Styling**: Bulma CSS with custom dark granite patterns
- **3D Graphics**: Three.js for scientific visualization
- **Data Viz**: D3.js for interactive charts and graphs
- **Language**: TypeScript for type safety

### Development Tools
- **Build System**: Vite (via Astro)
- **Package Manager**: npm
- **Version Control**: Git with GitHub
- **Deployment**: GitHub Actions → GitHub Pages

### Content Philosophy
Unique project combining:
- Modern web development techniques
- Sacred geometry and biblical principles  
- Interactive data visualization
- 3D modeling and scientific visualization
- Scriptural context for technical concepts

---

All notable changes to the Hacker1 project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).
