
 next js router does not work if you use static export!!


called a router instead of multiple html. this is called SPA (single page app). or you use a dedicated service like nextjs instead of vite, there you have file system routes and it is probably very close to what you already have.

Frameworks that employ this:

    Astro
    Eleventy
    Nextjs (with pages)s
    Vue
    Svelte


Directory Based

This is directory based routing

src/
└── app/
    ├── page.js
    ├── about/
    │   └── page.js
    └── contact/
        └── page.js

With this way, there is a defined method of creating new pages i.e a folder with the file name and a special file within it.

When using this way, anything that does not follow this pattern is not regarded a page.

Frameworks that use this

    Nextjs (with app)
    SvleteKit

GitHub Pages

dev vite OR webpack OR babel react build OR deploy OR express OR server OR node OR npm jsx OR js OR esm OR CommonJS OR html OR css OR ts github OR digitalocean OR vercel OR netlify OR google OR aws OR nextjs OR cloudflare cloud remote

Set the correct base in vite.config.js.

If you are deploying to https://<USERNAME>.github.io/, or to a custom domain through GitHub Pages (eg. www.example.com), set base to '/'. Alternatively, you can remove base from the configuration, as it defaults to '/'.

If you are deploying to https://<USERNAME>.github.io/<REPO>/ (eg. your repository is at https://github.com/<USERNAME>/<REPO>), then set base to '/<REPO>/'.

Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as "GitHub Actions", this will lead you to create a workflow that builds and deploys your project, a sample workflow that installs dependencies and builds using npm is provided:

    # Simple workflow for deploying static content to GitHub Pages
    name: Deploy static content to Pages

    on:
      # Runs on pushes targeting the default branch
      push:
        branches: ['main']

      # Allows you to run this workflow manually from the Actions tab
      workflow_dispatch:

    # Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
    permissions:
      contents: read
      pages: write
      id-token: write

    # Allow one concurrent deployment
    concurrency:
      group: 'pages'
      cancel-in-progress: true

    jobs:
      # Single deploy job since we're just deploying
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Set up Node
            uses: actions/setup-node@v4
            with:
              node-version: lts/*
              cache: 'npm'
          - name: Install dependencies
            run: npm ci
          - name: Build
            run: npm run build
          - name: Setup Pages
            uses: actions/configure-pages@v5
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              # Upload dist folder
              path: './dist'
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4

GitLab Pages and GitLab CI

Set the correct base in vite.config.js.

If you are deploying to https://<USERNAME or GROUP>.gitlab.io/, you can omit base as it defaults to '/'.

If you are deploying to https://<USERNAME or GROUP>.gitlab.io/<REPO>/, for example your repository is at https://gitlab.com/<USERNAME>/<REPO>, then set base to '/<REPO>/'.

Create a file called .gitlab-ci.yml in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content:
.gitlab-ci.yml

    image: node:lts
    pages:
      stage: deploy
      cache:
        key:
          files:
            - package-lock.json
          prefix: npm
        paths:
          - node_modules/
      script:
        - npm install
        - npm run build
        - cp -a dist/. public/
      artifacts:
        paths:
          - public
      rules:
        - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH

Netlify
Netlify CLI
[build]

  command = "rm -rf node_modules package-lock.json && npm install --include=dev && npm run build"
  
    Install the Netlify CLI.
    Create a new site using ntl init.
    Deploy using ntl deploy.

# Install the Netlify CLI
$ npm install -g netlify-cli

# Create a new site in Netlify
$ ntl init

# Deploy to a unique preview URL
$ ntl deploy

The Netlify CLI will share with you a preview URL to inspect. When you are ready to go into production, use the prod flag:

# Deploy the site into production
$ ntl deploy --prod

Netlify with Git

    Push your code to a git repository (GitHub, GitLab, BitBucket, Azure DevOps).
    Import the project to Netlify.
    Choose the branch, output directory, and set up environment variables if applicable.
    Click on Deploy.
    Your Vite app is deployed!

After your project has been imported and deployed, all subsequent pushes to branches other than the production branch along with pull requests will generate Preview Deployments, and all changes made to the Production Branch (commonly “main”) will result in a Production Deployment.
Vercel
Vercel CLI

    Install the Vercel CLI and run vercel to deploy.
    Vercel will detect that you are using Vite and will enable the correct settings for your deployment.
    Your application is deployed! (e.g. vite-vue-template.vercel.app)

$ npm i -g vercel
$ vercel init vite
Vercel CLI
> Success! Initialized "vite" example in ~/your-folder.
- To deploy, `cd vite` and run `vercel`.

Vercel for Git

    Push your code to your git repository (GitHub, GitLab, Bitbucket).
    Import your Vite project into Vercel.
    Vercel will detect that you are using Vite and will enable the correct settings for your deployment.
    Your application is deployed! (e.g. vite-vue-template.vercel.app)

After your project has been imported and deployed, all subsequent pushes to branches will generate Preview Deployments, and all changes made to the Production Branch (commonly “main”) will result in a Production Deployment.

Learn more about Vercel’s Git Integration.
Cloudflare Pages
Cloudflare Pages via Wrangler

    Install Wrangler CLI.
    Authenticate Wrangler with your Cloudflare account using wrangler login.
    Run your build command.
    Deploy using npx wrangler pages deploy dist.

# Install Wrangler CLI
$ npm install -g wrangler

# Login to Cloudflare account from CLI
$ wrangler login

# Run your build command
$ npm run build

# Create new deployment
$ npx wrangler pages deploy dist

After your assets are uploaded, Wrangler will give you a preview URL to inspect your site. When you log into the Cloudflare Pages dashboard, you will see your new project.
Cloudflare Pages with Git

    Push your code to your git repository (GitHub, GitLab).
    Log in to the Cloudflare dashboard and select your account in Account Home > Pages.
    Select Create a new Project and the Connect Git option.
    Select the git project you want to deploy and click Begin setup
    Select the corresponding framework preset in the build setting depending on the Vite framework you have selected.
    Then save and deploy!
    Your application is deployed! (e.g https://<PROJECTNAME>.pages.dev/)

After your project has been imported and deployed, all subsequent pushes to branches will generate Preview Deployments unless specified not to in your branch build controls. All changes to the Production Branch (commonly “main”) will result in a Production Deployment.

You can also add custom domains and handle custom build settings on Pages. Learn more about Cloudflare Pages Git Integration.
Google Firebase

Make sure you have firebase-tools installed.

Create firebase.json and .firebaserc at the root of your project with the following content:
firebase.json

{
  "hosting": {
    "public": "dist",
    "ignore": [],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

.firebaserc

    {
      "projects": {
        "default": "<YOUR_FIREBASE_ID>"
      }
    }

    After running npm run build, deploy using the command firebase deploy.

Surge

    First install surge, if you haven’t already.

    Run npm run build.

    Deploy to surge by typing surge dist.

You can also deploy to a custom domain by adding surge dist yourdomain.com.
Azure Static Web Apps

You can quickly deploy your Vite app with Microsoft Azure Static Web Apps service. You need:

    An Azure account and a subscription key. You can create a free Azure account here.
    Your app code pushed to GitHub.
    The SWA Extension in Visual Studio Code.

Install the extension in VS Code and navigate to your app root. Open the Static Web Apps extension, sign in to Azure, and click the '+' sign to create a new Static Web App. You will be prompted to designate which subscription key to use.

Follow the wizard started by the extension to give your app a name, choose a framework preset, and designate the app root (usually /) and built file location /dist. The wizard will run and will create a GitHub action in your repo in a .github folder.

The action will work to deploy your app (watch its progress in your repo's Actions tab) and, when successfully completed, you can view your app in the address provided in the extension's progress window by clicking the 'Browse Website' button that appears when the GitHub action has run.
Render

You can deploy your Vite app as a Static Site on Render.

    Create a Render account.

    In the Dashboard, click the New button and select Static Site.

    Connect your GitHub/GitLab account or use a public repository.

    Specify a project name and branch.
        Build Command: npm install && npm run build
        Publish Directory: dist

    Click Create Static Site.

    Your app should be deployed at https://<PROJECTNAME>.onrender.com/.

By default, any new commit pushed to the specified branch will automatically trigger a new deployment. Auto-Deploy can be configured in the project settings.

You can also add a custom domain to your project.
Flightcontrol

Deploy your static site using Flightcontrol by following these instructions.
Kinsta Static Site Hosting

Deploy your static site using Kinsta by following these instructions.
xmit Static Site Hosting
Deploy your static site using xmit by following this guide.


***


ESM, or ECMAScript Modules, represents the official and standardized module system for JavaScript, offering a native way to organize and reuse code in modern environments like browsers and Node.js.
Key characteristics of ESM:

    Syntax: ESM utilizes import and export keywords for defining and consuming modules, replacing older systems like CommonJS's require() and module.exports.

JavaScript

    // Exporting
    export const myVariable = "Hello";
    export function myFunction() { /* ... */ }

    // Importing
    import { myVariable, myFunction } from './myModule.js';

    Native Support:
    ESM is natively supported in modern web browsers and recent versions of Node.js, reducing the need for bundlers or transpilers for basic module functionality.

Static Analysis & Tree Shaking:
The static nature of import and export allows for static analysis of dependencies, enabling optimizations like tree shaking, where unused code is eliminated from the final bundle, leading to smaller file sizes and faster loading times.
Asynchronous Loading:
ESM supports asynchronous module loading, which is beneficial for performance, especially in browser environments where modules can be fetched and processed in parallel.
Explicit File Extensions:
When using relative imports in Node.js, explicit file extensions (e.g., .mjs, .js, .cjs) are often required to clearly indicate the module system being used.
Interoperability with CommonJS:
Node.js provides mechanisms to work with both ESM and CommonJS modules within the same project, although careful configuration and understanding of the differences are necessary. This can involve using .mjs or .cjs file extensions or configuring the type field in package.json.

***
e Internet Information Services (IIS) as a web server on a Windows computer (including Windows virtual machines on Azure), you need to configure the Python web application to enable IIS to properly process Python code. The configuration is accomplished through settings in the web.config file for the Python web app. This article describes how to configure the necessary settings.
Prerequisites

    Python on Windows installed. To run a web app, first install your required version of Python directly on the Windows host machine as described on Install Python interpreters.
        Identify the location of the python.exe interpreter. For convenience, you can add that location to your PATH environment variable.
