# Dropdown Button CSS Analysis

All CSS rules affecting the "Designs" dropdown button in the navbar.

## 1. Base Dropdown Container

```css
/* Dropdown styles for astro-navbar */
.dropdown {
  position: relative;
  display: inline-block;
}
```

## 2. Base Button Styling

```css
.dropdown-toggle {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.85rem;
  white-space: nowrap;
  display: block;
  width: 100%;
  text-align: center;
}
```

## 3. Hover State

```css
.dropdown-toggle:hover {
  color: #fff;
}
```

## 4. Active/Open State

```css
/* astro-navbar dropdown styling */
.navbar-container :global(.dropdown[open] .dropdown-toggle),
.navbar-container :global(.dropdown[aria-expanded="true"] .dropdown-toggle) {
  color: #fff;
}
```

## 5. Grid Layout from Parent

```css
.menu-items-wrapper {
  display: grid;
  grid-template-columns: repeat(6, minmax(60px, auto));
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
}
```

## 6. Responsive Styles - Tablet

```css
@media (max-width: 768px) {
  .nav-item,
  .dropdown-toggle {
    padding: 0.25rem 0.3rem;
    font-size: 0.75rem;
  }
}
```

## 7. Responsive Styles - Mobile

```css
@media (max-width: 480px) {
  .nav-item,
  .dropdown-toggle {
    padding: 0.2rem 0.25rem;
    font-size: 0.7rem;
  }
}
```

## 8. Font Inheritance from Navbar

```css
.custom-navbar {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 0.85rem;
}
```

## 9. Potential Bulma CSS Conflicts (from main.css)

```css
/* From main.css import */
@import 'bulma/css/bulma.min.css';

/* Bulma may have conflicting styles for buttons, dropdowns, etc. */
```

## 10. CSS Override from main.css

```css
/* Override Bulma navbar styles to prevent conflicts with custom navbar */
.custom-navbar .navbar-brand {
  display: flex !important;
  align-items: center !important;
  min-height: auto !important;
  padding: 0 !important;
  flex-shrink: 0 !important;
}

.custom-navbar .navbar-brand .brand-link {
  padding: 0.2rem 0.4rem !important;
  line-height: normal !important;
}

/* Ensure Bulma's navbar styles don't interfere with our custom navbar */
.custom-navbar * {
  box-sizing: border-box !important;
}

.custom-navbar .navbar-container :global(.astronav) {
  display: grid !important;
  grid-template-columns: auto 1fr auto !important;
  align-items: center !important;
  gap: 1rem !important;
  height: 40px !important;
  width: 100% !important;
}
```

---

## The Problem

The button is affected by:
1. **Bulma CSS conflicts** (imported in main.css)
2. **Multiple CSS selectors** with different specificity
3. **Global overrides** with `!important` that may affect the button
4. **astro-navbar's** own CSS behavior
5. **Transition effects** on the `all` property

## Solution

Remove all fancy effects and Bulma conflicts. Make it a simple, standard dropdown button.

---

## Correct Code for Standard Dropdown Button

```css
/* Simple dropdown container */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Standard dropdown button - no fancy effects */
.dropdown-toggle {
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.85rem;
  white-space: nowrap;
  display: block;
  width: 100%;
  text-align: center;
}

/* Simple hover - just color change */
.dropdown-toggle:hover {
  color: #fff;
}

/* Active state - exactly the same as hover */
.navbar-container :global(.dropdown[open] .dropdown-toggle),
.navbar-container :global(.dropdown[aria-expanded="true"] .dropdown-toggle) {
  color: #fff;
}
```
