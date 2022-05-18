(function() {
  var keywd = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
  if (!keywd) keywd = prompt("\u8BF7\u8F93\u5165\u641C\u7D22\u7684\u5173\u952E\u8BCD:", "");
  var keyword = encodeURI(keywd);
  window.location.href = "https://cn.bing.com/search?q=\"" + keyword + "\"+(site:hi-fire.cn+OR+site:mp3bst.com+OR+site:www.51ape.com+OR+site:www.in2s.net+OR+site:www.52wusun.com+OR+site:www.ddrfans.com+OR+site:www.lszmy.com+OR+site:www.czape.com+OR+www.automanmusic.com+OR+sacdr.net+OR+http://bbs.yin2s.com+OR+www.hifini.com+OR+www.91tingge.com)";
  window.open("https://www.goflac.com/search?query="+keyword);
  window.open("http://tool.liumingye.cn/music/?page=audioPage&type=migu&name="+keyword);
  window.open("http://tool.liumingye.cn/music/?page=audioPage&type=YQB&name="+keyword);
  window.open("http://tool.liumingye.cn/music/?page=audioPage&type=YQD&name="+keyword);
})();
