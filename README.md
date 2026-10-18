# Shin Young Jung Portfolio

Portfolio and résumé site built with Next.js App Router and TypeScript. Project content is currently maintained in `lib/projects.ts` and prerendered as static pages, so the site can deploy to Vercel without a database connection.

## Local development

1. Install Node.js 20.9 or later.
2. Copy `.env.example` to `.env.local` when configuring services.
3. Run `pnpm install`, then `pnpm dev`.
4. Open `http://localhost:3000`.

`pnpm build` creates the production build. Each project detail page is generated at build time.

## Service setup

- **Vercel:** Import this Git repository as a Next.js project. Set the environment variables below in the Vercel project settings when the database or media upload features are connected.
- **MongoDB:** `lib/mongodb.ts` exposes a cached server-side MongoDB client. Set `MONGODB_URI` and optionally `MONGODB_DB`.
- **Cloudflare R2:** `lib/r2.ts` provides a server-side S3 client, short-lived presigned upload URL helper, and public object URL helper. Set the R2 account, access key, bucket, and public base URL variables. Keep all R2 secrets server-side; never prefix them with `NEXT_PUBLIC_`.

The portfolio includes a protected editor at `/admin`. Set `MONGODB_URI`, `MONGODB_DB`, and `ADMIN_PASSWORD` in Vercel before using it. The editor updates site contact copy and project text in MongoDB; if MongoDB is unavailable, the public site falls back to the checked-in content.

## Content and assets

- Update project copy and metadata in `lib/projects.ts`.
- Project detail routes are generated from each project's `slug`.
- The portfolio overview is `/`; the standalone résumé is `/resume`.
- The content editor is `/admin`. It supports site copy and project metadata; project images remain in `public/projects/` for now.
- Web-sized reference images and the résumé portrait are in `public/projects/` and `public/profile/`.
- Résumé career, education, skills, lectures, and awards are maintained in `app/page.tsx`.
