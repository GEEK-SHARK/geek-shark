export function onShare(res, nickName, gender, fromId) {
  let genderTxt = 'Ta';
  console.log(gender);
  if(gender == 1) genderTxt = '他';
  if(gender == 2) genderTxt = '她';
  return {
    title: nickName+"邀请您参观"+genderTxt+"的Home",
    path: "/pages/share/main?from=" + encodeURIComponent(fromId),
    success: function(res) {
      console.log(JSON.stringify(res) + "转发成功")
    },
    fail: function(res) {
      console.log(JSON.stringify(res) + "转发失败")
    }
  }
}
