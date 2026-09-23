import { prisma } from "./client";

async function main() {
  await prisma.major.create({
    data: {
      title: "رشته ریاضی فیزیک",
      description:
        "رشته ریاضی فیزیک یکی از رشته‌های اصلی دوره متوسطه دوم است.",
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

  await prisma.major.create({
    data: {
      title: "رشته علوم تجربی",
      description:
        "رشته علوم تجربی با تمرکز بر زیست‌شناسی و شیمی است.",
      students: 150,
      images: {
        create: [
          {
            url: "https://example.com/experimental.jpg",
            key: "majors/experimental.jpg",
          },
        ],
      },
    },
  });

  await prisma.gallery.createMany({
    data: [
      {
        url: "https://example.com/gallery-1.jpg",
        key: "gallery/gallery-1.jpg",
      },
      {
        url: "https://example.com/gallery-2.jpg",
        key: "gallery/gallery-2.jpg",
      },
    ],
  });

  await prisma.news.create({
    data: {
      title: "برگزاری مراسم آغاز سال تحصیلی",
      description:
        "مراسم آغاز سال تحصیلی با حضور مدیر، معلمان و دانش‌آموزان برگزار شد.",
      images: {
        create: [
          {
            url: "https://example.com/news-1.jpg",
            key: "news/news-1.jpg",
          },
        ],
      },
    },
  });

  await prisma.passed.create({
    data: {
      name: "علی رضایی",
      univercity: "دانشگاه تهران",
      images: {
        create: [
          {
            url: "https://example.com/students/ali.jpg",
            key: "students/ali.jpg",
          },
        ],
      },
    },
  });

  await prisma.question.createMany({
    data: [
      {
        title: "شرایط ثبت نام در مدرسه چیست؟",
        anwser:
          "برای ثبت نام دانش‌آموزان، ارائه مدارک تحصیلی و مدارک شناسایی مورد نیاز است.",
      },
      {
        title: "چه رشته‌هایی در مدرسه ارائه می‌شود؟",
        anwser:
          "رشته‌های ریاضی فیزیک، علوم تجربی و علوم انسانی ارائه می‌شود.",
      },
    ],
  });

  await prisma.roadmap.createMany({
    data: [
      {
        title: "ثبت نام",
        description: "ثبت نام و تکمیل مدارک دانش‌آموزان",
      },
      {
        title: "شروع سال تحصیلی",
        description: "آغاز کلاس‌ها و برنامه‌های آموزشی",
      },
      {
        title: "ارزیابی و آزمون",
        description: "برگزاری آزمون‌های دوره‌ای",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });