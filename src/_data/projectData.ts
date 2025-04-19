export interface ProjectProps {
  key?: any;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  repoLink?: string;
  image: string;
}

export const projects: ProjectProps[] = [
  {
    title: "MykroGrid Client",
    description:
      "This electricity application enables customers to register, purchase kilowatts using paystack, and monitor usage in real time.",
    techStack: ["NextJS", "Chakra UI", "TypeScript", "Paystack", "MySQL DB"],
    liveLink: "https://mykrogrid.com/",
    repoLink: "https://github.com/Gwonderboy/mykrogrid",
    image: "/images/projects/mykrogrid.webp",
  },
  {
    title: "MykroGrid Admin",
    description:
      "This application enables admins to monitor clients' purchases and usage in real time and keep track of customer data.",
    techStack: ["NextJS", "Chakra UI", "TypeScript", "Paystack", "MySQL DB"],
    liveLink: "https://mykrogrid.com/admin",
    repoLink: "https://github.com/Gwonderboy/mykrogrid",
    image: "/images/projects/mykrogridadmin.webp",
  },
  {
    title: "MykroGrid Control Center",
    description:
      "This application enables engineers to monitor solar generation and distribution metrics; smart meter consumption; grids location, status and performance based and weather; faults and fault codes for different grids, etc. ",
    techStack: ["NextJS", "Ant Design", "TypeScript", "MySQL DB"],
    repoLink: "https://github.com/Gwonderboy/mykrogrid",
    image: "/images/projects/mykrogridcc.webp",
  },
  {
    title: "Gloopro",
    description:
      "A leading eProcurement platform empowering large enterprises to streamline indirect spend management, with features like supply chain visibility and multi-location support.",
    techStack: ["React", "Redux", "NodeJS"],
    liveLink: "https://www.gloopro.com/",
    image: "/images/projects/gloopro.webp",
  },
  {
    title: "Edumate",
    description:
      "A comprehensive K-12 education management platform that bridges schools, parents, and students, enabling seamless information sharing and student wellbeing tracking.",
    techStack: ["React", "Flask", "MongoDB"],
    liveLink: "https://www.edumate.com.au/",
    image: "/images/projects/edumate.webp",
  },
  {
    title: "Energy Chleen",
    description:
      "The Energy-C application is a green-tech app thatprovides a platform where users get value for their used/waste non-biodegradable materials.",
    techStack: ["NextJS", "Php", "MySQL DB"],
    liveLink: "https://www.energychleen.ng/",
    image: "/images/projects/energyc.webp",
  },
  {
    title: "Energy Chleen Admin",
    description:
      "The Energy-C application is a green-tech app thatprovides a platform where users get value for their used/waste non-biodegradable materials.",
    techStack: ["NextJS", "Php", "MySQL DB"],
    liveLink: "https://www.energychleen.ng/admin",
    image: "/images/projects/energycadmin.webp",
  },
  {
    title: "Grundtvig Portal",
    description:
      "An educational management platform that offers all academic functions to admins, lecturers and students of Grundtvig Polytechnic Enugu.",
    techStack: ["Php", "MySQL DB"],
    // liveLink: "https://www.energychleen.ng/",
    image: "/images/projects/grundtvig.webp",
  },
  {
    title: "OJP Quiz Cohort",
    description:
      "The OJP Tech Quiz Competition is designed exclusively for individuals with little to no technology background who are eager to start their journey into tech. Individuals participate for a chance to win exciting prizes.",
    image: "/images/projects/quizcohort.webp",
    techStack: ["Php", "MySQL DB"],
    liveLink: "https://quizcohort.ojptechnologiesltd.com/index.php",
  },
  {
    title: "OJP Technologies Web App",
    description:
      "OJP Technologies is a company committed to delivering high-quality services and courses that meet the evolving needs of their clients.",
      image: "/images/projects/ojptech.webp",
    techStack: ["NextJS", "Php", "MySQL DB"],
    liveLink: "https://ojptechnologiesltd.com/",
  },
];
