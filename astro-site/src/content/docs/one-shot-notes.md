### notes in Theia for now

command markdown editor
see codium: start-notes.md

includes editor notes, publish notes, one shot

### one shot notes

this is a rough stream of notes from building a website that communicates with other websites using basic files.

the reason for this it to allow one part of the site to work on a file, save it, and open it with another part of the site.

Reference (see Start-notes):

Here is a project: Using Astrojs, Three.js, D3, bulma, custom CSS backrounds. You begin with a central astro site with satellites. There is one major astro site with similar satellite sites for each category.
For now the categories are Site-Design, Site-Engineering, In-Production, Finished-Work. Finished-Work has several parts including Written, Graphic, and Two-D, Three-D, and Action. The code and look of the action section is more like a game, with animation. The code and look for the Two-D and  Three-D sections is more theoretical, using python code. The Graphic section pulls results from the Two-D and Three-D sections as svg files. The Finished Work section is more like a gallery, pulling in results from Writing and Graphics.

### Editing Mechanics

1. **note 1:** get word wrap working. Done
2. **note 2:** change mdx to md unless can find a way to preview mdx.
3. **note 3:** find a way to edit md files. then transfer to mdx when done.
4. **Theia** has no focus and cannot rename files. the rename works but the list is not updated. going back the folder is not reopened.
5. need a paste from markdown method.
6. currently using google docs and obsidian, move over files.
7. have to move stuff from obsidian or get the vault.
8. either put all the design stuff together in one big site, including old stuff, or even bigger all astro stuff together. or smaller separate sites.
9. possibly use obsidian as the editor of these local files, and let github take care of them. Any personal obsidian files moved over and marked as tranfer. Keep all in github...

need to find out if a central location for files is necessary for several reasons:

1. a memory from session to session.
2. sharing data from one astro site to another.
3. possible non astro side use...
4. use privvate as personal.

**some work to be done getting text out of ai.:**

1. Grok
2. VS Code
3. ??

---

important: consider md files used by multiple sites:

1. one for printing and pdf and reading
2. one for manipulating to make graphic designs
3. one for allowing the user to search? ai!?
4. simplest example would be scripture or divine office.

---

adventure trench is not there

astro baby contains hacker one plan  (index.md: Hacker One Action Plan), Restrictions for Local Development and start nots about getting node running locally impossible
backgrounds is large, includes a subdirectory of astro-site working.

copy the info from google to google docs, then over to here.

vscode marketplace mdx preview

---

#### Implementation Notes for Editors:

theia has no windows close, file close...
Preferences: Open Settings (JSON)

"window.titleBarStyle": "native",
end of night procedure: use github desktop.

vs code markdown editor cmd shift p open with markdown editor

check out obsidian, then check out multi-site memory and file storage.

---

#### Publish Deploy to GitHub Pages:

GitHub Actions:
Create .github/workflows/deploy.yml:
yaml

name: Deploy to GitHub Pages
on:
push:
branches:

- main
  jobs:
  build-and-deploy:
  runs-on: ubuntu-latest
  steps:
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
  with:
  node-version: '20'
- run: npm install
- run: npm run build
- uses: peaceiris/actions-gh-pages@v4
  with:
  github_token: ${{ secrets.GITHUB_TOKEN }}
  publish_dir: ./dist
  Commit:
  bash

git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment"
git push origin main
Manual Deployment:
bash

npm install --save-dev gh-pages
Update package.json:
json

"scripts": {
"deploy": "gh-pages -d dist"
}
Deploy:
bash

npm run deploy
Verify Deployment:
Visit https://Kellytom.github.io/backgrounds.
In GitHub, go to Settings > Pages and set the source to the gh-pages branch.
Alternatives
Settings Access:
Use Preferences: Open Settings (JSON) if the UI fails.
Access settings via VS Code’s web interface if in Codespaces.
Git Workflow:
Use the terminal for Git commands if VS Code fails.
Install GitLens for enhanced Git features.
Deployment:
Vercel:
bash

npm install -g vercel
vercel
Netlify:
bash

npm install -g netlify-cli
netlify deploy
Review and Reflection
Omissions:
Windows vs. Codespaces: Confirm whether you’re in local Windows or Codespaces. Run uname -a in the terminal:
Linux output indicates Codespaces.
Use systeminfo for Windows confirmation.
.gitignore: Ensure:
gitignore

node_modules/
dist/
.env
.astro/
SEO: Add @astrojs/sitemap:
bash

npm install @astrojs/sitemap
Update astro.config.mjs:
javascript

import sitemap from '@astrojs/sitemap';
export default defineConfig({
integrations: [sitemap()],
});
Overlooked Elements:
Keybinding Conflicts: Check all keybindings in VS Code (Preferences: Open Keyboard Shortcuts).
Git Authentication: In Codespaces, refresh the GitHub token:
bash

gh auth refresh
Astro Check:
bash

npm install --save-dev @astrojs/check
npx astro check
Code Quality:
Use ES6+ in scripts.
Add ESLint:
bash

npm install --save-dev eslint @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin
Create .eslintrc.json:
json

{
"env": { "browser": true, "es2021": true },
"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
"parser": "@typescript-eslint/parser",
"parserOptions": { "ecmaVersion": 12, "sourceType": "module" }
}
Next Steps
Resolve the Ctrl+, issue by using the Command Palette or menu to open Settings.
Verify git.path in VS Code Settings.
Test Git functionality (git status, git commit).
Continue developing and deploy your Astro site.
Share details (e.g., where git output, Codespaces vs. Windows confirmation) if issues persist

---
