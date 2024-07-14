import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "精华",
    icon: "medal",
    prefix: "/posts/",
    children: [

    ],
  },
  {
    text: "时光机",
    icon: "hourglass-half",
    link: "/timeline/"
  },
  {
    text: "小说存档",
    icon: "box-archive",
    link: "https://github.com/TSJR-TB/TSHMF",
  },
]);
