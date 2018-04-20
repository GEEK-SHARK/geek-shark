export function onShare(res, nickName, fromId) {
  return {
    title: nickName+"邀请您参观Ta的Home",
    path: "/pages/share/main?from=" + encodeURIComponent(fromId),
    success: function(res) {
      console.log(JSON.stringify(res) + "转发成功")
    },
    fail: function(res) {
      console.log(JSON.stringify(res) + "转发失败")
    }
  }
}
