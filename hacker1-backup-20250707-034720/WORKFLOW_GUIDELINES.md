# Workflow Guidelines to Preserve Finished Work

This document outlines best practices for maintaining and updating the Hacker1 site while preserving finished work and avoiding unintentional regressions.

## Backup Procedure

Before making any significant changes to the site:

1. **Create a timestamped backup**:
   ```bash
   cp -r hacker1 hacker1-backup-$(date +%Y%m%d-%H%M%S)
   ```

2. **Test in development mode** before pushing to production:
   ```bash
   cd hacker1
   npm run dev
   ```

3. **Verify changes locally** by checking all affected pages and navigation.

## File and Link Management

When working with files and links:

1. **Never delete files** referenced by navigation components without:
   - Creating a replacement file
   - OR updating all references to the file

2. **Always check for existing files** before creating new ones:
   ```bash
   find /workspaces/backgrounds -name "filename*" | grep -v "node_modules"
   ```

3. **Use Astro's BASE_URL consistently** for all internal links:
   ```astro
   <a href={`${import.meta.env.BASE_URL}page-name`}>Link Text</a>
   ```

## Component Changes

When modifying components:

1. **Make incremental changes** and test after each modification
2. **Comment your changes** to explain the purpose of modifications
3. **Update all instances** when changing shared design patterns

## Code Review Process

Before committing changes:

1. **Run build process** to catch any errors:
   ```bash
   npm run build
   ```

2. **Test the built output** to ensure proper functioning:
   ```bash
   npm run preview
   ```

3. **Use diff tools** to review changes before committing:
   ```bash
   git diff
   ```

## Documentation

Maintain documentation for:

1. **Site structure** - Keep a current map of all pages and their relationships
2. **Component usage** - Document how and where components are used
3. **Design decisions** - Record why certain approaches were taken

## Recovery Process

If something breaks:

1. **Identify the scope** of the issue (specific component, page, or site-wide)
2. **Restore from backup** if needed:
   ```bash
   rm -rf hacker1
   cp -r hacker1-backup-YYYYMMDD-HHMMSS hacker1
   ```

3. **Make targeted fixes** rather than wholesale replacements

## Best Practices for GitHub Pages Deployment

1. **Always maintain proper BASE_URL usage** for GitHub Pages compatibility
2. **Test builds locally** before pushing to GitHub
3. **Keep backups of working builds** to facilitate quick recovery

## Marking Finished Work

To clearly indicate code that should not be modified:

1. **Add a comment header** to finished files:
   ```astro
   ---
   // FINISHED WORK - DO NOT MODIFY WITHOUT APPROVAL
   // Last updated: YYYY-MM-DD
   // Author: [Name]
   ---
   ```

2. **Create a registry** of finished work in `FINISHED_WORK.md`

3. **Use git attributes** to mark files that should rarely change:
   ```
   # .gitattributes
   /src/pages/finished-work/* linguist-documentation
   ```

Remember that preserving working code is a priority. When in doubt, make a backup before proceeding with changes.
