define("#widget/0.9.16/ast-printer-mobile",[],function(a,b){function d(a,b){return c[a.type](a,b)}var c=b;c.print=d,c.program=function(a){var b="",c=a.statements;for(var e=0,f=c.length;e<f;e++)b+=d(c[e]);return b},c.block=function(a){var b="",c=a.mustache;return b+=d(c,!0),b+=d(a.program),b+="{{/"+d(c.id)+"}}",b},c.mustache=function(a,b){var c=d(a.id),e=a.params,f=[];for(var g=0,h=e.length;g<h;g++)f[g]=d(e[g]);e=f.join(" "),e&&(e=" "+e);var i=a.hash?" "+d(a.hash):"",j=b?"#":"";return"{{"+j+c+e+i+"}}"},c.hash=function(a){var b=[];for(var c=0,e=a.pairs,f=e.length;c<f;c++){var g=e[c];b[c]=g[0]+"="+d(g[1])}return b.join(" ")},c.STRING=function(a){return'"'+a.string+'"'},c.INTEGER=function(a){return a.integer},c.BOOLEAN=function(a){return a.bool},c.ID=function(a){return a.original},c.content=function(a){return a.string},c.comment=function(a){return"{{!"+a.comment+"}}"}});