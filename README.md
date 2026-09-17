# Distributed Library Platform

Academic project based on a distributed architecture with **microfrontends**, **microservices**, independent databases, and an application shell that integrates the published interfaces through an `iframe`.

[![Shell](https://img.shields.io/badge/Shell-iframe-8B6F47?style=flat-square)](https://iframe-shell.vercel.app)
[![Vue 3](https://img.shields.io/badge/Vue%203-42B883?style=flat-square&logo=vuedotjs&logoColor=white)](https://book-microfrontend.netlify.app)
[![Alpine.js](https://img.shields.io/badge/Alpine.js-8BC0D0?style=flat-square&logo=alpinedotjs&logoColor=white)](https://AndreaCarrilloOp.github.io/library-microfrontends-microservices/microfrontends/authors)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://book-microfrontend.netlify.app)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://publisher-microfrontend.vercel.app)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://authors-microservice.collection-una.workers.dev)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?style=flat-square&logo=postgresql&logoColor=white)](https://book-microservice.netlify.app)

## Live application
https://iframe-shell.vercel.app

---

## Architecture

| Component | Frontend | Frontend hosting | Backend | Database |
|---|---|---|---|---|
| Books | Vue 3 + Vue Router + Vite | Netlify | Netlify Functions | Neon PostgreSQL |
| Authors | Alpine.js | GitHub Pages | Cloudflare Worker | Cloudflare D1 |
| Publishers | petite-vue | Vercel | Vercel Functions | Turso/libSQL |
| Reviews | Alpine.js | GitHub Pages | Netlify Functions | Neon PostgreSQL |
| Shell | HTML + JavaScript + `iframe` | Vercel | — | — |

```text
Application Shell
       │
       ├── Books microfrontend ──────→ Books microservice ──────→ Neon
       ├── Authors microfrontend ─────→ Cloudflare Worker ──────→ D1
       ├── Publishers microfrontend ──→ Vercel Functions ───────→ Turso
       └── Reviews microfrontend ─────→ Reviews microservice ────→ Neon
```

## Project structure

```text
library-microfrontends-microservices/
├── backends/
│   ├── authors-microservice/
│   ├── books-microservice/
│   ├── publishers-microservice/
│   └── reviews-microservice/
├── microfrontends/
│   ├── authors/
│   ├── books/
│   ├── publishers/
│   └── reviews/
└── shell/
    ├── css/
    ├── home.html
    └── index.html
```

## Published microfrontends

| Microfrontend | URL |
|---|---|
| Books | https://book-microfrontend.netlify.app |
| Authors | https://AndreaCarrilloOp.github.io/library-microfrontends-microservices/microfrontends/authors |
| Publishers | https://publisher-microfrontend.vercel.app |
| Reviews | https://AndreaCarrilloOp.github.io/library-microfrontends-microservices/microfrontends/reviews |

## Published microservices

| Microservice | URL | Test endpoint |
|---|---|---|
| Books | https://book-microservice.netlify.app | `https://book-microservice.netlify.app/api/books` |
| Authors | https://authors-microservice.collection-una.workers.dev | `https://authors-microservice.collection-una.workers.dev/api/authors` |
| Publishers | https://publishers-microservice.vercel.app | `https://publishers-microservice.vercel.app/api/publishers` |
| Reviews | https://review-microservice.netlify.app | `https://review-microservice.netlify.app/api/reviews` |

## Cross-navigation

The detail views connect the independently deployed microfrontends:

- Book detail → Author detail
- Book detail → Publisher detail
- Book detail → Reviews
- Author detail → Books and Reviews
- Publisher detail → Books and Reviews
- Review detail → Book detail

The application shell loads each published microfrontend inside the same `iframe`.

## Interface

The visual design keeps the tutorial structure simple and minimal while using a restrained vintage-library palette and responsive layouts.

### Preview screenshot
![Preview microfrontends home]( preview.png)
---

This repository is an **academic project** developed to demonstrate distributed web architecture using microfrontends and microservices.
