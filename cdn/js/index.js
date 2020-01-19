/**
 * PC端页面，会自动注入jQuery.js，请勿自行引用
 * 移动端页面，会自动注入zepto.js，请勿自行引用
 * 在移动端请使用轻量级的zepto.js代替jQuery.js
 */
$.ready(function() {
  $('#J_btn').click(function() {
    // 上报业务埋点：领奖事件
    var query = GUtils.parseQuery(); // Gutils是内置的工具函数集，文档：https://bytedance.feishu.cn/docs/doccntMkQZ5l5dtX8xn0LOh1lse
    GUtils.collectEvent('event_get_award', {
      from_source: query.from_source, // 从URL参数中获取投放渠道，并且上报
    });

    alert('恭喜您已领取到大奖！');
  });

  // 调用jsBridge获取appInfo，仅在游戏内或头条APP内有效
  GUtils.JsBridge.call('appInfo', {}, function(appInfo) {
    console.log(appInfo);
  });
});