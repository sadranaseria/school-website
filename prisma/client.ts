import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
export const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.major.create({
    data: {
      title: "رشته ریاضی فیزیک",
      description: "رشته ریاضی فیزیک یکی از رشته‌های اصلی دوره متوسطه دوم است.",
      students: 120,
      images: {
        create: [
          {
            url: "https://example.com/math.jpg",
            key: "majors/math.jpg",
          },
          {
            url: "https://example.com/math-2.jpg",
            key: "majors/math-2.jpg",
          },
        ],
      },
    },
  });

  console.log("Seed completed!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });