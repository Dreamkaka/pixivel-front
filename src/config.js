export default {
  IMAGE_PROXY_HOSTS: [process.env.VUE_APP_PXIMG_PROXY + "/"],
  API_HOST: process.env.VUE_APP_HIBIAPI_HOST + "/api/pixiv/",
  USER_API: "https://api-user.pixivel.moe/",
  ANNOUNCE_API: "https://api.shugetsu.dev/announce/fetch/pixivel",
  RAND_IMG: "https://www.loliapi.com/acg/",
  DOWNLOAD_DEFAULT: {
    TASK_MESSAGES: [
      "下载这些对我来说还是小菜一碟嘛！",
      "存这些图！你肯定会自己偷偷prpr的！",
      "欸，是我不够好看吗，为什么要去看别的女人",
      "行！包在我身上！",
      // "阁下，你磁盘空间快不够了呀~",
      "任务已添加~",
      "下载这么多，服务器娘会被玩坏的",
    ],
  },
  SHUGETSU_SOFT_API: "https://api.shugetsu.dev/api/",
  SETTINGS_DEFAULT: {
    "download.filename": "{title}-{id}-{page}",
    "sample.sanity_filter": 4,
    "global.sanity_filter": 8,
    "recommend.quality": 3000,
  },
  CAPTCHA_SITEKEY: "0x4AAAAAAABJmE0EBrdePmmR",
  GRAVATAR_PROXY: "https://gravatar.loli.net/avatar/",
  AFDIAN_API: "https://api-user.pixivel.moe/afdian/list",
  SHARE_LINK: "https://akizu.cc/",
};
