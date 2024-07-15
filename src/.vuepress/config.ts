import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import {noticePlugin} from "@vuepress/plugin-notice";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "变身嫁人小说",
  description: "变身嫁人小说吧的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
