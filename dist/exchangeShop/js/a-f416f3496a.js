~function(s){var i={js:{"mui.min":"js/lib/mui/js/|d168add7",require:"js/base/|d168add7","require-config":"js/module/|d168add7","zepto.min":"js/lib/|03a59277"},css:{"mui.min":"js/lib/mui/js/|d168add7",require:"js/base/|d168add7",style:"dist/css/|d168add7","require-config":"dist/js/|d168add7","zepto.min":"201704/20/|03a59277"}},t=s.__EBT__=s.__EBT__||{};t.CACHE=t.CACHE||{},s.__loadjs=function(s){var t=0,e="",r=i.js;if(s instanceof Array){for(t;t<s.length;t++)!function(i){e+='<script type="text/javascript" src="../'+r[s[t]].split("|")[0]+s[t]+".js?v="+r[s[t]].split("|")[1]+'"></script>'}(t);document.write(e||"")}else document.write('<script type="text/javascript" src="../'+r[s].split("|")[0]+s+".js?v="+r[s].split("|")[1]+'"></script>')},s.__loadcss=function(s){var t=0,e="",r=i.css;if(s instanceof Array){for(t;t<s.length;t++)!function(i){e+='<link rel="stylesheet" href="../'+r[s].split("|")[0]+s+".css?v="+r[s].split("|")[1]+'">'}(t);document.write(script||"")}else document.write('<link rel="stylesheet" href="../'+r[s].split("|")[0]+s+".css?v="+r[s].split("|")[1]+'">')}}(window);