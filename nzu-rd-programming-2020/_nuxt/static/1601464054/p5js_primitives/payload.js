__NUXT_JSONP__("/p5js_primitives", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ){return {data:[{document:{title:"図形を描く",description:"",position:6.3,category:"p5.js",toc:[{id:Z,depth:F,text:Z},{id:_,depth:F,text:_},{id:$,depth:v,text:$},{id:az,depth:v,text:aA},{id:aa,depth:F,text:aa},{id:ab,depth:F,text:ab},{id:ac,depth:v,text:ac},{id:ad,depth:F,text:ad},{id:ae,depth:F,text:ae},{id:af,depth:F,text:af},{id:ag,depth:F,text:ag},{id:aB,depth:v,text:aC},{id:aD,depth:v,text:aE},{id:aF,depth:v,text:aG},{id:ah,depth:v,text:ah},{id:ai,depth:v,text:ai},{id:aj,depth:v,text:aj},{id:K,depth:v,text:K},{id:aH,depth:v,text:K},{id:aI,depth:v,text:aJ},{id:ak,depth:v,text:ak},{id:al,depth:v,text:al}],body:{type:"root",children:[{type:a,value:f},{type:b,tag:G,props:{id:Z},children:[{type:b,tag:h,props:{href:"#%E5%BA%A7%E6%A8%99%E7%B3%BB",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:Z}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"プログラムでグラフィックを描画するにあたって、まず画面の座標系を把握しておく必要があります。\n例えば、点をひとつ描画するにしてもどこのピクセルに点を打つのかを正確に数字で示さないといけません。"}]},{type:a,value:f},{type:b,tag:"static-img",props:{src:"resource\u002Fimage\u002Fp5js_primitives.png"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"数学のグラフを上下逆さまにしたものと思ってください。\n2Dの座標系の場合は"},{type:b,tag:"strong",props:{},children:[{type:a,value:"左上が原点で、右に行くほど x がプラス、下に行くほど y がプラス"}]},{type:a,value:"になります。"}]},{type:a,value:f},{type:b,tag:G,props:{id:_},children:[{type:b,tag:h,props:{href:"#point%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:_}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"中心座標を指定して点を描画します。"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Fpoint",rel:[B,C,D],target:E},children:[{type:a,value:"point() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:w,props:{id:$},children:[{type:b,tag:h,props:{href:"#stroke%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"p5.jsでは点は線扱いなので、点の色を指定するには線の色を指定する "},{type:b,tag:k,props:{},children:[{type:a,value:"stroke"}]},{type:a,value:aK}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:aL},{type:b,tag:k,props:{},children:[{type:a,value:L}]},{type:a,value:aM},{type:b,tag:k,props:{},children:[{type:a,value:ap}]},{type:a,value:aN},{type:b,tag:k,props:{},children:[{type:a,value:aO}]},{type:a,value:aP}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Fstroke",rel:[B,C,D],target:E},children:[{type:a,value:"stroke() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:w,props:{id:az},children:[{type:b,tag:h,props:{href:"#strokeweight%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"p5.jsでは点は線扱いなので、点の大きさを指定するには線の太さを指定する "},{type:b,tag:k,props:{},children:[{type:a,value:"strokeWeight"}]},{type:a,value:aK}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002FstrokeWeight",rel:[B,C,D],target:E},children:[{type:a,value:"strokeWeight() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:G,props:{id:aa},children:[{type:b,tag:h,props:{href:"#line%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"始点、終点の座標を指定して線分を描画します。"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Fline",rel:[B,C,D],target:E},children:[{type:a,value:"line() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:G,props:{id:ab},children:[{type:b,tag:h,props:{href:"#rect%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ab}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:aQ,rel:[B,C,D],target:E},children:[{type:a,value:aR}]}]},{type:a,value:f},{type:b,tag:w,props:{id:ac},children:[{type:b,tag:h,props:{href:"#fill%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ac}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"図形の塗りつぶしの色を指定します。"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:aL},{type:b,tag:k,props:{},children:[{type:a,value:L}]},{type:a,value:aM},{type:b,tag:k,props:{},children:[{type:a,value:ap}]},{type:a,value:aN},{type:b,tag:k,props:{},children:[{type:a,value:aO}]},{type:a,value:aP}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:aQ,rel:[B,C,D],target:E},children:[{type:a,value:aR}]}]},{type:a,value:f},{type:b,tag:G,props:{id:ad},children:[{type:b,tag:h,props:{href:"#circle%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ad}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Fcircle",rel:[B,C,D],target:E},children:[{type:a,value:"circle() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:G,props:{id:ae},children:[{type:b,tag:h,props:{href:"#ellipse%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ae}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Fellipse",rel:[B,C,D],target:E},children:[{type:a,value:"ellipse() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:G,props:{id:af},children:[{type:b,tag:h,props:{href:"#triangle%E9%96%A2%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:af}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Ftriangle",rel:[B,C,D],target:E},children:[{type:a,value:"triangle() reference | p5.js"}]}]},{type:a,value:f},{type:b,tag:aq,props:{type:"success"},children:[{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"上記の描画関数をそれぞれ少なくとも一回以上使って簡単な絵を書いてみましょう！"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\nひとつのスケッチに無理して全ての関数を詰め込む必要はないので、複数のスケッチで合計して上記全ての関数を使っていれば大丈夫です。"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:G,props:{id:ag},children:[{type:b,tag:h,props:{href:"#%E5%A4%89%E6%95%B0",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:" 変数名"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:" 変数名 "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:" 値"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:w,props:{id:aB},children:[{type:b,tag:h,props:{href:"#number%EF%BC%88%E6%95%B0%E5%80%A4%EF%BC%89",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aC}]},{type:a,value:f},{type:b,tag:w,props:{id:aD},children:[{type:b,tag:h,props:{href:"#string%EF%BC%88%E6%96%87%E5%AD%97%E5%88%97%EF%BC%89",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:w,props:{id:aF},children:[{type:b,tag:h,props:{href:"#boolean%EF%BC%88%E7%9C%9F%E5%81%BD%E5%80%A4%EF%BC%89",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aG}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:j}]},{type:a,value:" \u002F "},{type:b,tag:k,props:{},children:[{type:a,value:"false"}]}]},{type:a,value:f},{type:b,tag:w,props:{id:ah},children:[{type:b,tag:h,props:{href:"#%E9%85%8D%E5%88%97",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:w,props:{id:ai},children:[{type:b,tag:h,props:{href:"#%E6%9D%A1%E4%BB%B6%E5%88%86%E5%B2%90",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:w,props:{id:aj},children:[{type:b,tag:h,props:{href:"#%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%EF%BC%9Awhile%E6%96%87",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:U}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"while"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"x "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n    x "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aS}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:am,props:{id:an},children:[{type:b,tag:h,props:{href:"#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%87%E3%83%A2",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:ay,props:{src:"resource\u002Flivedemo\u002Fp5js\u002Floop\u002Fwhile\u002F"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{id:K},children:[{type:b,tag:h,props:{href:"#%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%EF%BC%9Afor%E6%96%87",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:U}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aT}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:aS}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:am,props:{id:"ライブデモ-1"},children:[{type:b,tag:h,props:{href:"#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%87%E3%83%A2-1",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:ay,props:{src:"resource\u002Flivedemo\u002Fp5js\u002Floop\u002Ffor\u002F"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{id:aH},children:[{type:b,tag:h,props:{href:"#%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%EF%BC%9Afor%E6%96%87-1",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:U}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aT}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"7"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:" i"},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"++"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"i "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"*"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"+"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:ax},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:am,props:{id:"ライブデモ-2"},children:[{type:b,tag:h,props:{href:"#%E3%83%A9%E3%82%A4%E3%83%96%E3%83%87%E3%83%A2-2",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:an}]},{type:a,value:f},{type:b,tag:ay,props:{src:"resource\u002Flivedemo\u002Fp5js\u002Floop\u002Ffor-times\u002F"},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:w,props:{id:aI},children:[{type:b,tag:h,props:{href:"#%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF--%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%97--%E3%82%A4%E3%83%B3%E3%83%87%E3%83%B3%E3%83%88",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:b,tag:k,props:{},children:[{type:a,value:z}]},{type:a,value:"と"},{type:b,tag:k,props:{},children:[{type:a,value:A}]},{type:a,value:"で囲まれた中身をブロックといいます。"}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:U}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:" global "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"123"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:H}]},{type:a,value:" scoped "},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"456"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aV},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aW},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:am,props:{id:aX},children:[{type:b,tag:h,props:{href:"#%E3%82%A4%E3%83%B3%E3%83%87%E3%83%B3%E3%83%88%EF%BC%88%E5%AD%97%E4%B8%8B%E3%81%92%EF%BC%89",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:aX}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"JavaScriptにおけるインデントはプログラムを読みやすくするためのものです。"}]},{type:a,value:f},{type:b,tag:M,props:{className:[N]},children:[{type:b,tag:c,props:{className:[T]},children:[{type:a,value:U}]},{type:b,tag:O,props:{className:[P,Q]},children:[{type:b,tag:k,props:{},children:[{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,aY]},children:[{type:a,value:"\u002F\u002F ← スペース2つ"}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"if"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,aY]},children:[{type:a,value:"\u002F\u002F ← スペース4つ"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:A}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"JavaScriptはインデントに厳しくないため記述しなくてもプログラムは動作しますが、インデントがないとどこまでがどのブロックでこの変数はどこまで有効なのかが把握しにくくなってしまいます。"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"メニューバー \u003E Edit \u003E Tidy Code でコード整形をすることができます。\nタブを閉じる前に必ずコード整形をしましょう。"}]},{type:a,value:f},{type:b,tag:w,props:{id:ak},children:[{type:b,tag:h,props:{href:"#%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AE%E3%82%B3%E3%83%84",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"例えば"},{type:b,tag:k,props:{},children:[{type:a,value:"background(255, 200, 200);"}]},{type:a,value:"と書きたい場合、"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"関数名を書く\n"},{type:b,tag:k,props:{},children:[{type:a,value:L}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"先に関数のカッコ"},{type:b,tag:k,props:{},children:[{type:a,value:"()"}]},{type:a,value:"を閉じる\n"},{type:b,tag:k,props:{},children:[{type:a,value:"background()"}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"行末にセミコロンをつける\n"},{type:b,tag:k,props:{},children:[{type:a,value:"background();"}]}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"引数を入れる\n"},{type:b,tag:k,props:{},children:[{type:a,value:"background(255, 255, 255);"}]}]},{type:a,value:f},{type:b,tag:w,props:{id:al},children:[{type:b,tag:h,props:{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AE%E8%AA%AD%E3%81%BF%E6%96%B9",ariaHidden:j,tabIndex:m},children:[{type:b,tag:c,props:{className:[n,o]},children:[]}]},{type:a,value:al}]},{type:a,value:f},{type:b,tag:aq,props:{type:aZ},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"関数\u002F変数名 is not defined (sketch: line 6)"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"スケッチの6行目にある"},{type:b,tag:k,props:{},children:[{type:a,value:"関数\u002F変数名"}]},{type:a,value:"は宣言されていません"}]},{type:a,value:f},{type:b,tag:aq,props:{type:aZ},children:[{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Uncaught SyntaxError: missing ) after argument list (sketch: line 10)"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"構文エラー：スケッチ10行目の引数リストの後ろに"},{type:b,tag:k,props:{},children:[{type:a,value:q}]},{type:a,value:"がありません"}]},{type:a,value:f},{type:b,tag:i,props:{},children:[{type:a,value:"セミコロンを書かなくてもプログラムは動いてしまいます。"}]}]},dir:"\u002Fja",path:"\u002Fja\u002Fp5js_primitives",extension:".md",slug:"p5js_primitives",createdAt:"2020-09-24T16:57:26.878Z",updatedAt:"2020-09-30T11:06:19.344Z",to:"\u002Fp5js_primitives"},prev:{title:"処理の流れ",slug:"p5js_flow",to:"\u002Fp5js_flow"},next:{title:"JavaScriptについて",slug:"js-basic_about",to:"\u002Fjs-basic_about"}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","a","p","true","code","number",-1,"icon","icon-link",";",")","function","(","keyword","operator",3,"h3","\n  ",",","{","}","nofollow","noopener","noreferrer","_blank",2,"h2","let","400","=","繰り返し：for文","background","div","nuxt-content-highlight","pre","language-javascript","line-numbers","220","50","filename","sketch.js","setup","\n\n  "," x ","\n    ","座標系","point関数","stroke関数","line関数","rect関数","fill関数","circle関数","ellipse関数","triangle関数","変数","配列","条件分岐","繰り返し：while文","コーディングのコツ","エラーの読み方","h4","ライブデモ","print","0","alert","\n\n","createCanvas","\u003C","line","x","180"," x","live-demo","strokeweight関数","strokeWeight関数","number（数値）","Number（数値）","string（文字列）","String（文字列）","boolean（真偽値）","Boolean（真偽値）","繰り返し：for文-1","ブロック--スコープ--インデント","ブロック \u002F スコープ \u002F インデント"," 関数を使用します。","色の指定は "," 関数と同じく、"," ~ ","255"," の値で グレースケール か RGB を指定します。","https:\u002F\u002Fp5js.org\u002Freference\u002F#\u002Fp5\u002Frect","rect() reference | p5.js","+=","for"," i ","global","scoped","インデント（字下げ）","comment","danger")));