### notes in Theia for now tier 3 -- unnecessary


https://www.csszengarden.com/pages/alldesigns/

https://bestofjs.org/

use react for:
changing an image source on click.
 React OR D3.js.
Frameworks such as React, Angular, and Vue.js

component libraries are available, including shadcn/ui, Flowbite, daisyUI (built on Tailwind CSS), and the Lucide icon library

 Material components web, Polymer elements, Elix, Vaadin web components, and Wired elements provide reusable web components.
 
  Bootstrap, Tailwind CSS, Foundation, Bulma, and PicoCSS.
  
  formlike behavior:  POST request on a button click.
Examples of updating content beyond target elements, drag and drop functionality with Sortable.js, handling authentication tokens, and implementing custom confirmation dialogs can be found in the HTMX examples.

repositories showcase HTMX usage, including a Twitter clone, a rentals listing app, a GitHub Profile search component, a Todo list, a calendar component, and tabular data examples.

https://htmx.org/examples/

astro Code Examples:

    Astro component structure.
    Handling named slots in Astro components.

    Astro showcase websites

    The official Astro website features a selection of websites built with Astro.
    The Astro Showcase website on Netlify lists numerous websites and includes links to their GitHub repositories. 

GitHub repositories

    The one-aalam/awesome-astro GitHub repository features a wide range of Astro sites, starter kits, and components, along with links to their respective repositories.
    You can explore the withastro/astro GitHub repository itself to find examples and documentation. 

Documentation and tutorials

    The official Astro documentation website includes code examples to help you get started with Astro.
    The Astro documentation's tutorial section also guides you on creating and deploying your first Astro site and storing your repository online. 

Wappalyzer

    Wappalyzer lists websites that use Astro, providing insights into its popularity and use cases.
    Wappalyzer allows you to create custom reports on Astro usage and demographics. 

Reddit discussions

    Reddit communities like r/astrojs offer discussions and examples of Astro sites, often including links to repositories. 

    GitHub Pages, as a static site hosting platform, necessitates the use of Client-Side Rendering (CSR) for any interactive or dynamic features
. This means all rendering of dynamic elements has to happen within the user's browser, using JavaScript and supporting libraries. Here's a look at some of the most relevant and important practices for CSR on GitHub Pages, considering scaling, code clarity, robust libraries, and potential anecdotal successes: 
Best practices for CSR on GitHub Pages
1. Choosing the right framework or library

    React, Vue, Svelte: These are popular choices for building complex and interactive CSR applications. They offer robust solutions for managing state, handling routing, and optimizing rendering.
    Vanilla JavaScript: For simpler, less interactive pages, using plain JavaScript can be a viable and performant option.
    HTMX: If your primary need is adding interactivity to existing HTML without a full JavaScript framework, HTMX provides a lightweight solution. 

2. Scaling your application

    Modular Architecture: Break your application into smaller, reusable components, allowing for easier development, testing, and maintenance.
    Lazy Loading and Code Splitting: Defer the loading of non-essential components until they are needed, reducing the initial load time and improving performance.
    Efficient State Management: Utilize libraries like Redux, Vuex, or Zustand to manage application state efficiently, particularly for complex applications.
    Leverage Browser Capabilities: Utilize features like browser caching and service workers to enhance performance and provide offline capabilities. 

3. Writing clear code

    Meaningful Naming Conventions: Use clear and descriptive names for variables, functions, and components.
    Consistent Coding Style: Adhere to a consistent coding style, utilizing linters and formatters to enforce standards automatically.
    Avoid Code Duplication: Refactor regularly to eliminate redundant code, enhancing maintainability.
    Prioritize Readability: Write code that is easy to understand, reducing the time spent on deciphering it.
    Use Template Literals: Prefer template literals over string concatenation for improved readability and ease of use in JavaScript, [Link: according to GUVI https://www.guvi.in/blog/best-javascript-practices-for-developers/].
    Single Responsibility Principle (SRP): Design each module, class, or function to have a single, well-defined responsibility. 

4. Utilizing robust libraries

    Frameworks for Complexity: React, Vue, and Angular provide robust solutions for managing complex client-side applications, including tools for state management, routing, and optimizing rendering performance.
    Utility Libraries: Employ libraries like Zod or Yup for schema-driven validation, ensuring type safety and providing immediate feedback during development. 
    
        Ultimate Guide to Client-Side Rendering (CSR) in 2024
    Aug 15, 2024 — Ultimate Guide to Client-Side Rendering (CSR) in 2024 * Understanding Client-Side Rendering (CSR) Why Choose Client-Side Rendering? The Evolution of CSR in 2024...
    favicon
    PixelFree Studio

Client Side Rendering (CSR) Explained - Key Concepts & Benefits
Aug 23, 2024 — What is Client Side Rendering? * Client Side Rendering (CSR) is a web development concept that has become increasingly relevant. It represents a website's abili...
favicon
Sanity
Clean Code Principles: Enhancing Software Quality and Maintainability
Apr 2, 2024 — Clean Code Principles: Enhancing Software Quality and Maintainability. ... In the ever-evolving world of software development, the importance of writing clean c...
favicon
Caltech
The Importance of Writing Clean and Clear Code - Shozab
May 26, 2024 — The Importance of Writing Clean and Clear Code: Best Practices for Developers. ... In the world of software development, coding practices are fundamental. Writi...
favicon
www.shozab.com
https://www.reddit.com/r/webdev/comments/a43cjz/are_client_side_frameworks_basically_just/
https://github.com/vmware-tanzu/community-engagement/blob/main/GUIDELINES.md

are React, Vue, Svelte HTMX hyperscript, redux, vuex zustand  all included in a website in the same way? what is the code? is there another way to include these? can they be translated to vanilla js and put in the html directly?

deno or node

need node js to develop:
Babel
webpack
Rollup 
***
a buildless JS setup. ES modules, HTTP imports, and import maps work extremely well for the kind of mid-sized JavaScript projects required for many PHP or Ruby web services.

It’s even possible with many setups that do require bundling as tools like esbuild work both on their own, without wrappers, and with alternative runtimes that are simpler to manage, like deno.

 a library on the client (like say graphql) I'm either forced to use node and a bundler or a cdn 

 How are you forced to use nodejs for a front end library? Just copy it into your directory manualy. 
***


Vanilla JS + i have this insane idea: headless Chrome for server-side rendering.

google-chrome --headless --dump-dom 'https://www.reddit.com'

***


Node does not manage dependencies.

Node allows you to use JavaScript outside of the browser.

NPM, Node Package Manager is a CLI that let's you download JavaScript dependencies like React Angular or Vue.

You need Node to run the NPM CLI. Or to run a JavaScript server. Or to build anything with webpack.


***


Petite Vue is an excellent way to get reactivity in an older stack.

It is actually also possible to use a build of Vue with a runtime compiler included. It's just a lot slower and the bundle is bigger.

AngularJS I believe also uses runtime compilation but I would not recommend using that.


***
Phoenix is a web development framework written in Elixir which implements the server-side Model View Controller (MVC) pattern. Many of its components and concepts will seem familiar to those of us with experience in other web frameworks like Ruby on Rails or Python's Django.

Phoenix provides the best of both worlds - high developer productivity and high application performance. It also has some interesting new twists like channels for implementing realtime features and pre-compiled templates for blazing speed.

If you are already familiar with Elixir, great! If not, there are a number of places to learn. The Elixir guides and the Elixir learning resources page are two great places to start.

The guides that you are currently looking at provide an overview of all parts that make Phoenix. Here is a rundown of what they provide:
***
If you only want to convert JSX/React, then just enable the @babel/preset-react preset.

preact 

compile OR interpret OR transpile OR transform OR swc OR babel OR webpack OR "next compiler" " to OR into javascript OR js" hyperscript OR jsx OR react OR vue OR typescript OR preact OR vite




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
