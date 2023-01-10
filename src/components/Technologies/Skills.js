import { DiAndroid, DiReact, DiTerminal } from "react-icons/di";
import { SiJava, SiFirebase, SiGit, SiMaterialdesignicons } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";

export const Skills = [
  {
    slug: "uidesign",
    Component: SiMaterialdesignicons,
    title: "Ui design",
    Description: () => <>I made a website display using figma</>,
  },
  {
    slug: "reactjs",
    Component: DiReact,
    title: "React Js",
    Description: () => <>I build website apps using react and NextJs</>,
  },
  {
    slug: "vuejs",
    Component: FaVuejs,
    title: "Vue Js",
    Description: () => <>I build website apps using Vue Js</>,
  },
  {
    slug: "reactnative",
    Component: DiAndroid,
    title: "React Native",
    Description: () => <>I build ios and android apps using react native</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>I use git for team collaboration</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>I integrate with firebase for realtime database and push notifications</>,
  },
];
