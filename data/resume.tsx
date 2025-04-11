import { Icons } from "../components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Amit Pandit",
  initials: "AP",
  url: "https://amit0693.github.io",
  location: "Atlanta, GA",
  locationLink: "https://www.google.com/maps/place/atlanta",
  description:
    "Software Engineer with over 5 years of full-stack experience designing scalable APIs and applications.",
  summary:
    "Software Engineer with over 5 years of full-stack experience designing scalable APIs and applications using Node.js, React, and Python. Demonstrated expertise in integrating RESTful services, containerization with Docker and Kubernetes, and cross-functional collaboration. Adept at streamlining deployments and optimizing system performance, with a keen interest in leveraging AI/ML advancements to enhance customer outcomes and operational efficiency.",
  avatarUrl: "/Amit.jpg",
  skills: [
    "TypeScript",
    "JavaScript",
    "SQL",
    "Python",
    "HTML5",
    "CSS3",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "NestJS",
    "Express",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "amit.pandit@example.com",
    tel: "+16072970885",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amit0693",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/amitpandit3",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amit.pandit@example.com",
        icon: Icons.email,
        navbar: false,
      },
      X: {
        name: "Twitter",
        url: "https://twitter.com/amit_pandit",
        icon: Icons.x,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Bizinc.io",
      href: "https://bizinc.io",
      badges: [],
      location: "Atlanta, GA",
      title: "Software Engineer - Full Stack",
      logoUrl: "/logos/bizinc.png",
      start: "Aug 2023",
      end: "Present",
      description: [
        "Designed, developed, and deployed scalable RESTful APIs and full-stack applications using React, Node.js, and Go, setting the foundation for potential integration with AI-powered analytical modules to enhance customer ROI.",
        "Conducted comprehensive code reviews and frontend optimizations on Angular and Vue.js applications, collaborating with cross-functional teams to drive operational efficiency and align solutions with modern authentication protocols such as OIDC and Okta.",
        "Engineered controllers, UI components, and automation tools for enterprise shared services within the Kubernetes ecosystem, thereby improving scalability, observability, and readiness for future AI/ML enhancements.",
        "Implemented containerization best practices for frontend and backend services with Docker, Kubernetes, and CI/CD pipelines, facilitating seamless updates and creating an environment conducive to rapid deployment of advanced AI-driven systems."
      ],
    },
    {
      company: "Bristlecone India",
      badges: [],
      href: "https://www.bristlecone.com",
      location: "Mumbai, MH, IND",
      title: "Software Engineer - Full Stack Development",
      logoUrl: "/logos/bristlecone.png",
      start: "Feb 2017",
      end: "Jul 2021",
      description: [
        "Collaborated with cross-functional teams to design scalable frontend applications using React, AngularJS, and Vue.js, integrating REST APIs, WebSockets, and GraphQL services to support smoother product adoption and data analytics integration.",
        "Developed automation tools and UI workflows for dynamic web applications, streamlining processes to enhance usability, operational efficiency, and facilitate easier incorporation of AI-driven analytical features.",
        "Built and deployed full-stack web applications using Go, Python, and Java for backend APIs, leveraging these technologies to secure robust performance and support integration with AI/ML modules on AWS to boost customer ROI.",
        "Coordinated with a distributed engineering team to containerize services in Kubernetes, improving deployment efficiency and operational scalability critical for integrating advanced AI solutions."
      ],
    },
  ],
  education: [
    {
      school: "Binghamton University",
      href: "https://www.binghamton.edu",
      degree: "Master's of Science, Computer Science",
      logoUrl: "/logos/binghamton.jpeg",
      start: "Aug 2021",
      end: "May 2023",
    },
    {
      school: "Pune University",
      href: "http://www.unipune.ac.in",
      degree: "Bachelor's of Engineering, Computer Science",
      logoUrl: "/logos/pune.png",
      start: "Aug 2012",
      end: "May 2016",
    },
  ],
  projects: [
    {
      title: "Fotu.io",
      href: "https://fotu.netlify.app/",
      dates: "Jan 2023 - Mar 2023",
      active: true,
      description:
        "Developed a photo-sharing app with React and Tailwind CSS, integrating Sanity.io for content management and Google Auth for secure logins. Containerized with Docker, Kubernetes and deployed using CI/CD pipelines.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Sanity.io",
        "Google Auth",
        "Docker",
        "Kubernetes",
        "CI/CD"
      ],
      links: [
        {
          type: "Source",
          href: "https://fotu.netlify.app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Real-Estate Web App",
      href: "https://github.com/amit0693/real-estate-app",
      dates: "Sep 2022 - Dec 2022",
      active: true,
      description:
        "Built a real estate platform with Bayut-API for property listings, an intuitive React UI, and Azure Kubernetes Service (AKS) for deployment. Automated infrastructure with Terraform and used SQL for data storage.",
      technologies: [
        "React",
        "Node.js",
        "Bayut-API",
        "Azure Kubernetes Service",
        "Terraform",
        "SQL",
        "Docker"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amit0693/real-estate-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Secure Blockchain Transaction App",
      href: "https://github.com/amit0693/CryptSwap",
      dates: "May 2022 - Aug 2022",
      active: true,
      description:
        "Developed a decentralized finance (DeFi) app enabling secure Ethereum transactions, integrating Metamask for authentication. Backend APIs built in Go, containerized with Docker, Kubernetes, and monitored via Prometheus and Grafana.",
      technologies: [
        "React",
        "Go",
        "Ethereum",
        "Metamask",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Grafana"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amit0693/CryptSwap",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "FitCal",
      href: "https://github.com/amit0693/fitcal",
      dates: "Jan 2022 - Apr 2022",
      active: true,
      description:
        "Created a fitness and calorie tracking application with React Native for cross-platform mobile support. Implemented user authentication, workout tracking, meal planning, and calorie counting features. Integrated with health APIs for comprehensive fitness monitoring.",
      technologies: [
        "React Native",
        "Firebase",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Health APIs",
        "Jest"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amit0693/fitcal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
} as const;
