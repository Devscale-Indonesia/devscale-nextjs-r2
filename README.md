# 🧊 Template Project Next.js (Tailwind CSS v3), Prisma ORM, and AWS S3 for Cloudflare R2

> [!NOTE]
> Template Project Next.js (Tailwind CSS v3), Prisma ORM, and AWS S3 for Cloudflare R2 for Bootcamp devscale.id.

This is an example template, already set up:

- [HeroUI](https://www.heroui.com/)
- [Prisma](https://prisma.io/)
- [Cloudflare R2](https://www.cloudflare.com/developer-platform/r2/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Arctic](https://www.npmjs.com/package/arctic)

## Environment Variables

- DATABASE_URL
- JWT_SECRET

> OAuth Google Cloud Console

- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_REDIRECT_URI

> Cloudflare R2

- R2_CLIENT_ID
- R2_CLIENT_SECRET
- R2_S3_ENDPOINT
- R2_PUBLIC_URL

## How to use it:

1. Clone this repo or use as template:

- Clone the repo.

```bash
git clone https://github.com/Devscale-Indonesia/devscale-nextjs-r2.git <project-name>
# at current directory/folder
git clone https://github.com/Devscale-Indonesia/devscale-nextjs-r2.git .

# using ssh
git clone git@github.com:Devscale-Indonesia/devscale-nextjs-r2.git <project-name>
# at current directory/folder
git clone git@github.com:Devscale-Indonesia/devscale-nextjs-r2.git .
```

- Create project with template.

```bash
npx create-next-app@latest -e https://github.com/Devscale-Indonesia/devscale-nextjs-r2 <project-name>
# at current directory/folder
npx create-next-app@latest -e https://github.com/Devscale-Indonesia/devscale-nextjs-r2 .
```

2. Move to directory

```bash
cd <project-name>
```

3. Install dependencies:

```bash
npm install
```

4. Copy the `.env.example` to `.env`:

```bash
cp .env.example .env
```

5. Setting provider database and create database model in the [schema.prisma](./prisma/schema.prisma) file.

```bash
prisma
    └── schema.prisma
```

6. Do prisma migration:

> [!WARNING]
> This step if the database provider used is `SQLite`, otherwise ignore it and skip this step.

```bash
npm run db:migrate
```

7. Use `db push` to push the initial schema to the database:

```bash
npm run db:push
```

8. Do prisma generate:

```bash
npx prisma generate
```

9.  Run the development server:

```bash
npm run dev
```

10. Open http://localhost:3000 with your browser to see the result.

11. Do prisma studio:

```bash
npm run db:studio
```

12. Open http://localhost:5555 with your browser to see the result.

## Deployment

> [!TIP]
> Don't forget adding `prisma generate` to the existing script build command Vercel.

### Vercel UI's build script field

Another way to configure `prisma generate` to be run on every deployment is to add the command to the build settings via Vercel's UI.

Within your project's dashboard, go to the `Settings` tab and find the `General` section. In that section you will find a box labeled `Build & Development Settings` that contains an input field named `Build Command`:

![build-command-1](public/readme/vercel-ui-build-command.png)

Within that field, prepend `prisma generate` to the existing script:

```bash
prisma generate && next build
```

![build-command-2](public/readme/vercel-ui-build-command-filled.png)

Reference: [Vercel build dependency caching workaround](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/vercel-caching-issue)