# Astro BASE_URL Link Reference

## 📋 **Correct Link Usage with `import.meta.env.BASE_URL`**

This document provides examples of proper link handling in Astro for GitHub Pages deployment with base paths.

### 🔧 **Configuration**
- **astro.config.mjs**: `base: '/backgrounds/'`
- **GitHub Pages URL**: `https://kellytom.github.io/backgrounds/`
- **BASE_URL Environment Variable**: `/backgrounds/`

---

## ✅ **Correct Examples**

### 1. **Home/Root Links**
```astro
<!-- Brand/Logo link to home -->
<a href={import.meta.env.BASE_URL} class="brand-link">Hacker1</a>

<!-- Home navigation item -->
<a href={import.meta.env.BASE_URL} class="nav-item">Home</a>
```

### 2. **Internal Page Links**
```astro
<!-- Single page links -->
<a href={`${import.meta.env.BASE_URL}site-engineering`} class="nav-item">Site Engineering</a>
<a href={`${import.meta.env.BASE_URL}backgrounds`} class="nav-item">Backgrounds</a>
<a href={`${import.meta.env.BASE_URL}bulma`} class="dropdown-item">Bulma Demo</a>
<a href={`${import.meta.env.BASE_URL}markdown-demo`} class="dropdown-item">Markdown Demo</a>
```

### 3. **Nested Page Links**
```astro
<!-- Multi-level paths -->
<a href={`${import.meta.env.BASE_URL}finished-work/written`} class="button">View Written</a>
<a href={`${import.meta.env.BASE_URL}finished-work/graphic`} class="button">View Graphics</a>
<a href={`${import.meta.env.BASE_URL}site-engineering-ch1`} class="button">Chapter 1</a>
```

### 4. **Asset Links (favicon, images, etc.)**
```astro
<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href={`${import.meta.env.BASE_URL}favicon.svg`} />

<!-- Images -->
<img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Logo" />

<!-- Other assets -->
<link rel="stylesheet" href={`${import.meta.env.BASE_URL}styles/custom.css`} />
```

### 5. **Dynamic Links in Components**
```astro
---
const categories = [
  {
    name: 'Site-Design',
    link: `${import.meta.env.BASE_URL}site-design`, // ✅ Correct
  },
  {
    name: 'Site-Engineering', 
    link: `${import.meta.env.BASE_URL}site-engineering`, // ✅ Correct
  }
];
---

<!-- Using dynamic links -->
{categories.map(category => (
  <a href={category.link} class="button is-primary">
    Enter {category.name}
  </a>
))}
```

### 6. **Component Props with BASE_URL**
```astro
<!-- Passing BASE_URL-prefixed links to components -->
<SatelliteSite 
  name="Site-Design" 
  description="Planning and design phase"
  chapterLink={`${import.meta.env.BASE_URL}site-design-ch1`}
/>
```

---

## 🔧 **How It Works**

| Configuration | Development | Production (GitHub Pages) |
|---------------|-------------|----------------------------|
| **BASE_URL** | `/` | `/backgrounds/` |
| **Final URL** | `http://localhost:4321/site-engineering` | `https://kellytom.github.io/backgrounds/site-engineering` |

### **Template Literal Breakdown:**
```astro
`${import.meta.env.BASE_URL}site-engineering`
```
- **Development**: `/` + `site-engineering` = `/site-engineering`
- **Production**: `/backgrounds/` + `site-engineering` = `/backgrounds/site-engineering`

---

## ❌ **Wrong Ways (Avoid These)**

### **Invalid `with-base` Attribute:**
```astro
<!-- ❌ WRONG - Astro doesn't recognize with-base -->
<a href="/site-engineering" with-base>Site Engineering</a>
```

### **Missing Base Path:**
```astro
<!-- ❌ WRONG - Missing base path, causes 404s -->
<a href="/site-engineering">Site Engineering</a>
```

### **Hardcoded Base Path:**
```astro
<!-- ❌ WRONG - Hardcoded, breaks in development -->
<a href="/backgrounds/site-engineering">Site Engineering</a>
```

### **Incorrect Dynamic Usage:**
```astro
<!-- ❌ WRONG - String instead of template literal -->
<a href="{import.meta.env.BASE_URL}site-engineering">Site Engineering</a>
```

---

## 🎯 **Quick Reference Table**

| Link Type | Correct Syntax | Result in Production |
|-----------|----------------|---------------------|
| **Home** | `href={import.meta.env.BASE_URL}` | `/backgrounds/` |
| **Page** | `href={`${import.meta.env.BASE_URL}page-name`}` | `/backgrounds/page-name` |
| **Nested** | `href={`${import.meta.env.BASE_URL}folder/page`}` | `/backgrounds/folder/page` |
| **Assets** | `href={`${import.meta.env.BASE_URL}favicon.svg`}` | `/backgrounds/favicon.svg` |

---

## 🚀 **Benefits**

✅ **Works in both development and production**  
✅ **No hardcoded paths**  
✅ **Automatic GitHub Pages compatibility**  
✅ **No 404 errors on deployment**  
✅ **Easy to maintain and update**  

---

## 📝 **Implementation Checklist**

- [ ] Remove all `with-base` attributes
- [ ] Replace hardcoded `/` links with `import.meta.env.BASE_URL`
- [ ] Use template literals for page paths: `` `${import.meta.env.BASE_URL}page-name` ``
- [ ] Update component props to include BASE_URL
- [ ] Test build output to verify `/backgrounds/` prefix
- [ ] Verify all links work after GitHub Pages deployment

---

**Last Updated:** July 7, 2025  
**Status:** ✅ Implemented and Working  
**Deployment:** GitHub Pages at `https://kellytom.github.io/backgrounds/`
