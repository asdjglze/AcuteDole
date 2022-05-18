(function() {
  var keywd = "" + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
  if (!keywd) keywd = prompt("\u8BF7\u8F93\u5165\u641C\u7D22\u7684\u5173\u952E\u8BCD:", "");
  var keyword = encodeURI(keywd);
  window.location.href = "https://cn.bing.com/search?q=\"" + keyword + "\"+(site:hi-fire.cn+site:mp3bst.com+site:www.51ape.com+site:www.in2s.net+site:www.52wusun.com+site:www.ddrfans.com+site:www.lszmy.com+site:www.czape.com)";
  window.open("https://www.goflac.com/search?query="+keyword);
  window.open("http://tool.liumingye.cn/music/?page=audioPage&type=migu&name="+keyword);
  window.open("http://tool.liumingye.cn/music/?page=audioPage&type=YQB&name="+keyword);
  window.open("http://tool.liumingye.cn/music/?page=audioPage&type=YQD&name="+keyword);
})();
