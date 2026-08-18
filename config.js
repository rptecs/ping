window.Config = {

  // [v2.0] 显示标题
  SiteName: '2024EU.ORG',

  // [v2.0] UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur529357-2cc8c195c515468e7e0dc95f',
  ],

  // [v2.0] 日志天数
  // 建议 60 或 90，显示效果比较好
  CountDays: 60,

  // [v2.0] 是否显示检测站点的链接
  ShowLink: true,

  // [v2.0] 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://2024.eu.org/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/rptecs'
    },
    {
      text: '探针',
      url: 'https://guotai.de'
    },
  ],

  // [v2.1] Umami 统计站点的 ID (可选)
  UmamiId: '',

  // [v2.1] Umami 统计站点的服务器地址 (可选)
  UmamiServer: '',

  // [v2.1] SEO 描述 (可选)
  SEO_Description: '一个基于 UptimeRobot API 的在线状态面板',

  // [v2.1] SEO 关键词 (可选)
  SEO_Keywords: 'uptime, status, monitor',

  // [v2.1] 自定义 CSS (可选)
  // 例如: #footer { display: none; }
  CustomCSS: '',

  // [v2.1] 自定义 JS (可选)
  CustomJS: '',
};
