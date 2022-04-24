/**
 * 页面会自动注入jQuery.js，直接使用即可，请勿自行引入
 */
$(function() {
  var query = GameTool.parseQuery(); // GameTool是内置的工具函数集，文档：https://bytedance.feishu.cn/docs/doccntMkQZ5l5dtX8xn0LOh1lse
  console.log('当前页面query:', query);
});