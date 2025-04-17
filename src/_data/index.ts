import { FaCloud, FaDatabase } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { MdHub } from "react-icons/md";
import { FaTools, FaMoneyCheckAlt } from "react-icons/fa";

export const allCategories = [
  {
    icon: GrTechnology,
    title: "Technologies",
    skills: ["TypeScript", "JavaScript", "Python"],
  },
  {
    icon: MdHub,
    title: "Frameworks",
    skills: ["React", "NodeJS", "NextJS", "Web3", "Redux"],
  },
  {
    icon: FaTools,
    title: "APIs & Tools",
    skills: ["Postman", "Swagger", "Github", "Gitlab", "Docker"],
  },
  {
    icon: FaDatabase,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    icon: FaCloud,
    title: "Cloud",
    skills: ["AWS", "Azure", "Google Cloud"],
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Payment Integration",
    skills: ["Paystack"],
  },
];

export const slides = [
  {
    title: "MykroGrid Client",
    description:
      "This electricity application enables customers to register, purchase kilowatts using paystack, and monitor usage in real time.",
    image: "/images/projects/mykrogrid.png",
  },
  {
    title: "MykroGrid Control Center",
    description:
      "This application enables engineers to monitor solar generation and distribution metrics; smart meter consumption; grids location, status and performance based and weather; faults and fault codes for different grids, etc. ",
    image: "/images/projects/mykrogridcc.png",
  },
  {
    title: "Gloopro",
    description:
      "A leading eProcurement platform empowering large enterprises to streamline indirect spend management, with features like supply chain visibility and multi-location support.",
    image: "/images/projects/gloopro.png",
  },
  {
    title: "Edumate",
    description:
      "A comprehensive K-12 education management platform that bridges schools, parents, and students, enabling seamless information sharing and student wellbeing tracking.",
    image: "/images/projects/edumate.png",
  },
  {
    title: "Energy Chleen",
    description:
      "The Energy-C application is a green-tech app thatprovides a platform where users get value for their used/waste non-biodegradable materials.",
    image: "/images/projects/energyc.png",
  },
  {
    title: "OJP Quiz Cohort",
    description:
      "The OJP Tech Quiz Competition is designed exclusively for individuals with little to no technology background who are eager to start their journey into tech. Individuals participate for a chance to win exciting prizes.",
    image: "/images/projects/quizcohort.png",
  },
];

export const company = [
  {
    title: "MykroGrid",
    image: "/images/mykrogrid.png",
  },
  {
    title: "Gloopro",
    image: "/icons/gloopro-logo.svg",
  },
  {
    title: "Edumate",
    image: "/images/edumate.png",
  },
  {
    title: "OJP Technologies",
    image: "/images/OJPLogo.jpg",
  },
];
