# Dark Mode Backgrounds
Files: 
Bulma-test.html
light-dark-v1.1.html

High codespace CPU (100%) utilization detected. Consider stopping some processes for the best experience.

a soft pastel (e.g., #e3fcec for light, #20403a for dark)

A collection of sophisticated dark mode background patterns and textures for web applications.

## Features

- **Fine Striped Patterns**: Anti-aliased diagonal patterns with precise mathematical angles
- **Material Textures**: Granite, marble, fabric, and stained glass effects
- **Experimental Multi-Angle Patterns**: Crosshatch and ripple effects
- **Dark Mode Optimized**: Professional color palettes for dark interfaces
- **CSS-Only Implementation**: No external dependencies

## Files

- **`light-dark-v1.html`** -  **LATEST VERSION** - Complete pattern collection with all improvements
- `dark-mode.html` - Main dark mode interface demo
- `proposed-light-dark.html` - Comprehensive pattern library
- `Fine-Striped-Patterns.html` - Original fine striped patterns
- `failed-design.html` - Patterns with technical issues
- `old-marble-design.html` - Original marble pattern versions
- `suggest-dark.md` - Implementation suggestions
- `senior-dev-handover-spec.md` - Technical specifications
- `code-review-dark.md` - Code review documentation

## Pattern Families

1. **Granite Patterns** - Professional base textures
2. **Fabric Patterns** - Elegant textile effects
3. **Stained Glass** - Accent patterns only
4. **Experimental** - Multi-angle crosshatch effects
5. **Ripple Backgrounds** - Dynamic corner-based patterns

## Color Restrictions

- **Blue, Red, Green**: Reserved for accents and frames only
- **Large Backgrounds**: Use granite/fabric patterns instead
- **Accessibility**: All patterns maintain proper contrast ratios

## Usage

**Start Here:** Open `light-dark-v1.html` in a modern browser to see the complete latest pattern collection.

For comparison and development history:
- Open any HTML file in a modern browser to see the patterns in action.

## Technical Notes

- Patterns use `repeating-linear-gradient` for optimal performance
- Angles calculated using precise mathematical ratios (3:4, 4:3, 1:2, etc.)
- Anti-aliasing optimized to prevent pattern breakdown at fine levels

```css
background: repeating-linear-gradient-d(
  135deg,
  #23272e, /* dark mode base */
  #23272e 10px,
  #2d323b 10px,
  #2d323b 20px
);
```
background: repeating-linear-gradient-l(
  135deg,
  #f5f7fa, /* light mode base */
  #f5f7fa 10px,
  #e3e8ee 10px,
  #e3e8ee 20px
);