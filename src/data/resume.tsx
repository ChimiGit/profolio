import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Chimi Tshering",
  initials: "CT",
  url: "https://dillion.io",
  location: "Thimphu, Bhutan",
  locationLink: "https://www.google.com/maps/place/Thimphu",
  description:
    "I am a software engineer and Freelancer. I love building things. I am very active on Facebook.",
  summary:
    "I am a software engineer and Freelancer. I love building things. I am very active on Facebook.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "React Native",
    "Astro",
    "Typescript",
    "Nest.js",
    "Vercel",
    "Postgres",
    "MySQL",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ctshering208@gmail.com",
    tel: "+975-17568603",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ChimiGit",
        icon: Icons.github,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/chimed.tshering/",
        icon: Icons.facebook,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ctshering208@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/97517568603",
        icon: Icons.whatsapp,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "CloudBhutan",
      href: "https://cloudbhutan.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/cb.png",
      start: "June 2021",
      end: "Present",
      description:
        "CloudBhutan is a cloud computing company that provides cloud computing services to the people of Bhutan. I am a software engineer at CloudBhutan and I am responsible for the development of the Websites and Systems.",
    },
  ],
  education: [
    {
      school: "Gyalpozhing College of Information Technology",
      href: "https://www.gcit.edu.bt/",
      degree: "Bachelor of Computer Application",
      logoUrl: "/gcit.jpg",
      start: "2017",
      end: "2020",
    },
    {
      school: "Kelki Higher Secondary School",
      href: "http://www.kelkischool.com/",
      degree: "Arts",
      logoUrl: "/kelki.png",
      start: "2015",
      end: "2016",
    },
    {
      school: "Trashigang Middle Secondary School",
      href: "https://www.facebook.com/trashigangmss/",
      degree: "Overall subjects",
      logoUrl: "/tgang.jpg",
      start: "2004",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "RSTA",
      href: "https://chatcollect.com",
      dates: "Jan 2021 - Feb 2025",
      active: true,
      description:
        "eRaLIS is Bhutan RSTA’s online portal, streamlining transport and licensing services for efficiency and user convenience.",
      technologies: ["React", "JavaScript", "Nest.js", "MySQL", "Material UI"],
      links: [
        {
          type: "Website",
          href: "https://eralis.rsta.gov.bt/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rsta.png",
    },
    {
      title: "TonChhosKhor System",
      href: "https://mis.tonchhoskhor.org/home",
      dates: "June 2023 - 2024",
      active: true,
      description:
        "A digital system to manage monk records, attendance, and monastery operations efficiently. ",
      technologies: [
        "React",
        "JavaScript",
        "Nest.js",
        "MySQL",
        "Material UI",
        "Local Payment Gateway",
        "Digital Ocean Deployment",
      ],
      links: [
        {
          type: "Website",
          href: "https://mis.tonchhoskhor.org/home",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tonchhoskhor.png",
    },
    {
      title: "BhutanSoul Website",
      href: "https://bhutansoul.com/",
      dates: "April 2024 - June 2024",
      active: true,
      description:
        "Bhutan Soul is a travel company offering personalized cultural, trekking, and wellness experiences in Bhutan.",
      technologies: [
        "Wordpress",
        "Elementor",
        "Elementor Pro",
        "Cpanel Deployment",
        "SEO",
      ],
      links: [
        {
          type: "Website",
          href: "https://bhutansoul.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/bhutansoul.png",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
