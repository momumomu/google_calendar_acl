/*
Googleカレンダーの「特定ユーザーとの共有」を設定する。

■参考URL
  https://qiita.com/utisam/items/5cd79eea101d08a602e6
  https://developers.google.com/calendar/api/v3/reference/acl/update
*/

//共有先のカレンダーID(だいたいがメールアドレス)
const targetCalendarId = "hoge.taro@xxxx.com";

/*
共有先タイプ
*/
const type = "user";
//const type = "group";

/*
共有権限
  freeBusyReader -> 予定の表示(時間枠のみ、詳細は非表示)
  reader         -> 予定の表示(すべての予定の詳細)
  writer         -> 予定の変更
  owner          -> 変更および共有の管理権限
*/
const role  = "reader"; //共有権限

function main() {
  /*-- 
  自身のデフォルトカレンダーを取得。
  --*/
  //const calendar = CalendarApp.getCalendarsByName("xxxx@xx.xx")[0];
  const myCalendar = CalendarApp.getDefaultCalendar();
  const myCalendarId = myCalendar.getId();
  
  /*-- 
  共有権限を定義
  --*/
  const parameterhoge = {
    "role": role,
    "scope": {
      "type": type,
      "value": targetCalendarId,
    },
  };
  
  /*-- 
  共有設定
  --*/
  Calendar.Acl.insert(parameterhoge, myCalendarId); //Calendar APIを利用
}