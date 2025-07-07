# Changes Log

## 2025-07-03

### Removed Astro Dev Toolbar
- **What**: Disabled the Astro development toolbar (inspect/audit popup menu)
- **Why**: The floating bottom navigation menu was conflicting with the dev toolbar popup
- **How**: Added `devToolbar: { enabled: false }` to `astro.config.mjs`
- **Impact**: Cleaner development experience without toolbar interference
- **Files Modified**: 
  - `astro-site/astro.config.mjs`

### Previous Changes
- Created floating bottom navigation bar
- Shortened Starlight sidebar to prevent overlap
- Added custom scrolling for sidebar overflow
- Simplified sidebar navigation structure

## Notes
The dev toolbar can be re-enabled by setting `devToolbar.enabled: true` or removing the devToolbar configuration entirely.
