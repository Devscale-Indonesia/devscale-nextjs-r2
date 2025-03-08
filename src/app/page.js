import { Header } from "@/_components/header";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="text-xl font-semibold">
      <Header />
      <h2 className="text-2xl">Template Project Next.js Devscale Indonesia.</h2>
      <h2 className="text-2xl">
        Ada tambahan setup HeroUI, Prisma ORM, dan AWS S3 untuk Cloudflare R2 🧊
      </h2>
      <Button>Click it! ✨</Button>
    </main>
  );
}
