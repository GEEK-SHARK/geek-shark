export function onShare(res, fromId) {
  return {
    title: "自定义转发标题",
    path: "/pages/share/main?from=" + encodeURIComponent(fromId),
    success: function(res) {
      console.log(JSON.stringify(res) + "转发成功")
    },
    fail: function(res) {
      console.log(JSON.stringify(res) + "转发失败")
    }
  }
}
