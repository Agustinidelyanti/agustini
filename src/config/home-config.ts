import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export interface homeTypes {
  resume: string;
  iconsLink: Array<{
    icon: IconType;
    iconName: string;
    directLink: string;
    title: string;
    color: string;
  }>;
}

export const homeConfig: homeTypes = {
  resume:
    "https://drive.google.com/file/d/1kur2J1g6nO0T2vtXbSsOiqCq0xTZBHqj/view?usp=sharing",

  iconsLink: [
    {
      icon: FiFigma,
      iconName: "FIgma",
      title: "@Agustini",
      color: "text-orange-600",
      directLink: "https://www.figma.com/",
    },
    {
      icon: AiFillGithub,
      iconName: "GitHub",
      title: "Agustinidelyanti",
      color: "text-white",
      directLink: "https://github.com/Agustinidelyanti",
    },
  ],
};
