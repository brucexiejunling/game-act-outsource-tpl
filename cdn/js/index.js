/**
 * 页面会自动注入jQuery.js，直接使用即可，请勿自行引入
 */
$(function() {
  $('#J_btn').click(function() {
    // 上报业务埋点：领奖事件
    var query = GameTool.parseQuery(); // GameTool是内置的工具函数集，文档：https://bytedance.feishu.cn/docs/doccntMkQZ5l5dtX8xn0LOh1lse
    GameTool.collectEvent('event_get_award', {
      from_source: query.from_source, // 从URL参数中获取投放渠道，并且上报
    });

    alert('恭喜您已领取到大奖！');
  });
});