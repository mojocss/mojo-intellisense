---
title: Nuxt
section: Guide
cat: Integrations
catid: 4
level: 2
---

<div class="d-flex a-items-center j-content-between gap-3">
A quick guide to start using Mojo CSS in your Nuxt.js project.
<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="-mt-3 w-12" i-sm="w-16"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.3617 11.9302C17.6403 10.6899 15.8369 10.6899 15.1156 11.9302L7.25388 25.4478C6.53253 26.6881 7.43422 28.2385 8.87694 28.2385H15.0142C14.3977 27.6997 14.1694 26.7677 14.636 25.968L20.59 15.7618L18.3617 11.9302Z" fill="#80EEC0"></path><path d="M23.3433 14.8959C23.9403 13.8811 25.4327 13.8811 26.0297 14.8959L32.5359 25.9557C33.1329 26.9705 32.3867 28.239 31.1927 28.239H18.1803C16.9863 28.239 16.2401 26.9705 16.8371 25.9557L23.3433 14.8959Z" fill="#00DC82"></path></svg>
</div>

## Nuxt Module

<br>

- 👌&nbsp; Zero configuration to start
- ⚡️&nbsp; Hybrid rendering: Static CSS Generation & dynamic styling

1. Add `@mojocss/nuxt` dependency to your Nuxt.js project

<showcode lang="bash">

```
# Using pnpm
pnpm add -D @mojocss/nuxt

# Using yarn
yarn add --dev @mojocss/nuxt

# Using npm
npm install --save-dev @mojocss/nuxt
```

</showcode>

2. Add `@mojocss/nuxt` to the `modules` section of `nuxt.config.ts`

<showcode lang="js">

```
export default defineNuxtConfig({
  modules: ["@mojocss/nuxt"],
});
```

</showcode>

That's it! You can now use Mojo CSS in your Nuxt app ✨

See the <a href="https://github.com/mojocss/mojocss-nuxt-module" target="_blank">GitHub project</a> for more info.
