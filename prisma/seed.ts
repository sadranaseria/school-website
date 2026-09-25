import { prisma } from "./client";

const IMG =
    "https://w0mj5ud6qk.ufs.sh/f/yZDJvNpxwyEknI0VKJq7qChNfmPGS4zukYLIv0yx6pHt1rlD";
const KEY = "yZDJvNpxwyEknI0VKJq7qChNfmPGS4zukYLIv0yx6pHt1rlD";

async function main() {
  // Clean up existing data (children first because of FK constraints)
  await prisma.majorImage.deleteMany();
  await prisma.newsImage.deleteMany();
  await prisma.passedImage.deleteMany();
  await prisma.major.deleteMany();
  await prisma.news.deleteMany();
  await prisma.passed.deleteMany();
  await prisma.admin.deleteMany();
  await prisma.gallery.deleteMany();
  await prisma.question.deleteMany();
  await prisma.roadmap.deleteMany();

  // ---------- Admin ----------
  await prisma.admin.createMany({
    data: [
      { id: "admin_1", name: "Aysel Mammadova", email: "aysel@school.edu" },
      { id: "admin_2", name: "Elvin Huseynov", email: "elvin@school.edu" },
    ],
  });

  // ---------- Major (with nested images) ----------
  const majorsData = [
    {
      title: "Computer Science",
      description:
          "Study algorithms, software engineering, and computer systems to build the technology of tomorrow.",
      students: 240,
    },
    {
      title: "Business Administration",
      description:
          "Learn management, finance, and marketing principles to lead organizations in a global economy.",
      students: 180,
    },
    {
      title: "Mechanical Engineering",
      description:
          "Design, analyze, and manufacture mechanical systems ranging from engines to robotics.",
      students: 150,
    },
    {
      title: "Graphic Design",
      description:
          "Explore visual communication, branding, and digital media through hands-on creative projects.",
      students: 95,
    },
  ];

  for (const major of majorsData) {
    await prisma.major.create({
      data: {
        ...major,
        images: {
          create: [
            { url: IMG, key: KEY },
            { url: IMG, key: KEY },
          ],
        },
      },
    });
  }

  // ---------- Gallery ----------
  await prisma.gallery.createMany({
    data: Array.from({ length: 6 }).map(() => ({ url: IMG, key: KEY })),
  });

  // ---------- News (with nested images) ----------
  const newsData = [
    {
      title: "Enrollment Opens for Fall Semester",
      description:
          "Applications for the upcoming fall semester are now open. Prospective students can apply online through the admissions portal.",
    },
    {
      title: "New Science Lab Inaugurated",
      description:
          "The university unveiled a state-of-the-art science laboratory equipped with modern research facilities for students and faculty.",
    },
    {
      title: "Annual Career Fair Announced",
      description:
          "Top companies will be visiting campus next month to meet students and offer internship and job opportunities.",
    },
  ];

  for (const news of newsData) {
    await prisma.news.create({
      data: {
        ...news,
        images: {
          create: [{ url: IMG, key: KEY }],
        },
      },
    });
  }

  // ---------- Passed (with nested images) ----------
  const passedData = [
    { name: "Nigar Aliyeva", univercity: "Harvard University" },
    { name: "Tural Rzayev", univercity: "MIT" },
    { name: "Leyla Guliyeva", univercity: "Oxford University" },
    { name: "Farid Mammadli", univercity: "Stanford University" },
  ];

  for (const passed of passedData) {
    await prisma.passed.create({
      data: {
        ...passed,
        images: {
          create: [{ url: IMG, key: KEY }],
        },
      },
    });
  }

  // ---------- Question ----------
  await prisma.question.createMany({
    data: [
      {
        title: "What documents do I need to apply?",
        anwser:
            "You will need your high school diploma, transcript, passport copy, and two passport-size photos to complete your application.",
      },
      {
        title: "Is there a scholarship program?",
        anwser:
            "Yes, merit-based and need-based scholarships are available. Details are provided during the admissions process.",
      },
      {
        title: "When does the academic year start?",
        anwser:
            "The academic year typically starts in early September, with a spring intake also available for select majors.",
      },
    ],
  });

  // ---------- Roadmap ----------
  await prisma.roadmap.createMany({
    data: [
      { title: "Submit Application", description: "Fill out and submit the online application form along with required documents." },
      { title: "Entrance Exam", description: "Take the entrance examination or submit standardized test scores, depending on the major." },
      { title: "Interview", description: "Attend an interview with the admissions committee to discuss your goals and fit." },
      { title: "Enrollment", description: "Receive your acceptance letter and complete enrollment formalities to secure your seat." },
    ],
  });

  console.log("Seed data created successfully.");
}

main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });