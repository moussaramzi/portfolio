export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  detailsKey?: string;
  technologies?: { src: string;  srcDark?: string; alt: string; labelKey: string }[];
}

export const projects: Project[] = [
  {
    id: "project4",
    titleKey: "project4.title",
    descriptionKey: "project4.description",
    image: "/projects/project4/project4.png",
    link: "/projects/project4",
    technologies: [
      {
        src: "/tech/skill-icons--dotnet.svg",
        alt: "Dot NET",
        labelKey: "tech.dotNEt",
      },
      {
        src: "/tech/skill-icons--javascript.svg",
        alt: "JavaScript",
        labelKey: "tech.javascript",
      },
      {
        src: "/tech/skill-icons--tailwindcss-dark.svg",
        alt: "Tailwind CSS",
        labelKey: "tech.tailwindCSS",
      },
      {
        src: "/tech/skill-icons--github-dark.svg",
        srcDark: "/tech/skill-icons--github.svg",
        alt: "GitHub",
        labelKey: "tech.github",
      },
    ],
  },
  {
    id: "taskflow",
    titleKey: "taskflow.title",
    descriptionKey: "taskflow.description",
    image: "/projects/microservice/recipe-microservice.png",
    link: "/projects/taskflow",
    technologies: [
      {
        src: "/tech/skill-icons--react-dark.svg",
        alt: "React Native",
        labelKey: "tech.reactNative",
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql",
      },
    ],
  },
  {
    id: "eshop",
    titleKey: "eshop.title",
    descriptionKey: "eshop.description",
    image: "/projects/pos/pos.png",
    link: "/projects/eshop",
    technologies: [
      {
        src: "/tech/skill-icons--react-dark.svg",
        alt: "React Native",
        labelKey: "tech.reactNative",
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql",
      },
    ],
  },
];
