
Ti.UI.setBackgroundColor('#000');

var winaaaaaaaa = Ti.UI.createWindow();
var winMain = Ti.UI.createWindow({  
  backgroundColor:'#fff',
  title:'エヴァかめら'
});
var winCam = Titanium.UI.createWindow({
  url:'overlaycamera.js',
  title:'カメラ'
});
var viewWeb = Ti.UI.createWebView();
var winWeb = Ti.UI.createWindow();
winWeb.add(viewWeb);

var nav = Titanium.UI.iPhone.createNavigationGroup({
   window: winMain
});

var b1 = Ti.UI.createButton({
  title:'@fullfoolを見る',
  height:40,
  width:200,
  top:150
});
var b2 = Ti.UI.createButton({
  title:'エヴァカメラ(本家)を見る',
  height:40,
  width:220,
  top:220
});
var b3 = Ti.UI.createButton({
  title:'起動',
  height:40,
  width:80,
  top:290
});

winMain.add(b1);
winMain.add(b2);
winMain.add(b3);

win.add(nav);
win.open();

b1.addEventListener('click', function()
{
  viewWeb.url = 'http://www.twitter.com/fullfool';
  winWeb.title = 'Twitter';
  nav.open(winWeb);
});

b2.addEventListener('click', function()
{
  viewWeb.url = 'http://event.yahoo.co.jp/eva2010/';
  winWeb.title = 'エヴァ公式サイト';
  nav.open(winWeb);
});

b3.addEventListener('click', function()
{
  nav.open(winCam);
});
