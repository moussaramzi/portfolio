export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  link: string;
  detailsKey?: string;
  technologies?: { src: string; alt: string; labelKey: string }[];
}

export const projects: Project[] = [
  {
    id: "socialapp",
    titleKey: "socialapp.title",
    descriptionKey: "socialapp.description",
    image: "/projects/socialapp.png",
    link: "/projects/socialapp",
    detailsKey: "socialapp.details",
    technologies: [
      {
        src: "/tech/skill-icons--react-dark.svg",
        alt: "React Native",
        labelKey: "tech.reactNative"
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql"
      }
    ]
  },
  {
    id: "taskflow",
    titleKey: "taskflow.title",
    descriptionKey: "taskflow.description",
    image: "/projects/taskflow.png",
    link: "/projects/taskflow",
    detailsKey: "taskflow.details",
    technologies: [
      {
        src: "/tech/skill-icons--react-dark.svg",
        alt: "React Native",
        labelKey: "tech.reactNative"
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql"
      }
    ]
  },
  {
    id: "eshop",
    titleKey: "eshop.title",
    descriptionKey: "eshop.description",
    image: "/projects/eshop.png",
    link: "/projects/eshop",
    detailsKey: "eshop.details",
    technologies: [
      {
        src: "/tech/skill-icons--react-dark.svg",
        alt: "React Native",
        labelKey: "tech.reactNative"
      },
      {
        src: "/tech/skill-icons--mysql-dark.svg",
        alt: "Mysql",
        labelKey: "tech.mysql"
      }
    ]
  }
];