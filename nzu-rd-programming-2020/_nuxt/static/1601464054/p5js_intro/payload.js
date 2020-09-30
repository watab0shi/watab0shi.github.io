__NUXT_JSONP__("/p5js_intro", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{title:"p5.jsについて",description:"",position:6,category:k,toc:[{id:r,depth:A,text:r},{id:B,depth:v,text:s},{id:C,depth:A,text:k},{id:D,depth:v,text:l},{id:t,depth:v,text:t}],body:{type:"root",children:[{type:b,tag:E,props:{id:r},children:[{type:b,tag:d,props:{href:"#%E6%88%90%E3%82%8A%E7%AB%8B%E3%81%A1",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:w,props:{id:B},children:[{type:b,tag:d,props:{href:"#processing",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:m,props:{src:"resource\u002Fimage\u002Fp5js_intro_logo-p5.png",alt:s,width:x,height:x},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fprocessing.org\u002F",rel:[n,o,p],target:q},children:[{type:a,value:s}]}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Processing（プロセシング）は、キャセイ・レアス（Casey Reas）とベンジャミン・フライ（Benjamin Fry）によるオープンソースプロジェクトであり、かつてはMITメディアラボで開発されていた。"},{type:b,tag:y,props:{},children:[{type:a,value:"電子アートとビジュアルデザインのためのプログラミング言語"}]},{type:a,value:"であり、統合開発環境（IDE）である。"},{type:b,tag:y,props:{},children:[{type:a,value:"アーティストによるコンテンツ制作作業のために、詳細な設定を行う関数を排除している。"}]},{type:a,value:" 視覚的なフィードバックが即座に得られるため、初心者がプログラミングを学習するのに適しており、電子スケッチブックの基盤としても利用できる。Java を単純化し、"},{type:b,tag:y,props:{},children:[{type:a,value:"グラフィック機能に特化した言語"}]},{type:a,value:"といえる。"},{type:b,tag:z,props:{},children:[]},{type:a,value:"\n（"},{type:b,tag:d,props:{href:"https:\u002F\u002Fja.wikipedia.org\u002Fwiki\u002FProcessing",rel:[n,o,p],target:q},children:[{type:a,value:"Wikipedia"}]},{type:a,value:"より引用）"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Processingではプログラムのことをスケッチ（"},{type:b,tag:u,props:{},children:[{type:a,value:"sketch"}]},{type:a,value:"）と呼びます。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"デスクトップアプリケーション（"},{type:b,tag:u,props:{},children:[{type:a,value:".app"}]},{type:a,value:" "},{type:b,tag:u,props:{},children:[{type:a,value:".exe"}]},{type:a,value:"）として書き出しができるため、メディアアートやインタラクティブコンテンツの制作によく用いられます。"}]},{type:a,value:c},{type:b,tag:E,props:{id:C},children:[{type:b,tag:d,props:{href:"#p5js",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:m,props:{src:"resource\u002Fimage\u002Fcommon_logo-p5js.svg",width:x,height:58,alt:k},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"上記のProcessingをWebブラウザ上で動作するようにJavaScriptに移植したものです。"},{type:b,tag:z,props:{},children:[]},{type:a,value:"\np5.jsはJavaScriptライブラリとして公開されています。"}]},{type:a,value:c},{type:b,tag:w,props:{id:D},children:[{type:b,tag:d,props:{href:"#p5js-editor",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"p5.jsには公式のWebエディタが用意されています。"},{type:b,tag:z,props:{},children:[]},{type:a,value:"\np5.js Editor 上で作成したスケッチはログインすることで保存、公開できます。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"今回はこの p5.js Editor を使って授業を進めていきます。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Feditor.p5js.org\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"p5.js Web Editor"}]}]},{type:a,value:c},{type:b,tag:m,props:{src:"resource\u002Fimage\u002Fp5js_intro_editor.png",alt:l},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:t},children:[{type:b,tag:d,props:{href:"#%E3%81%AA%E3%81%AB%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%EF%BC%9F",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:"alert",props:{type:"success"},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"公式のExampleやOpenProcessingのページを見て、"},{type:b,tag:u,props:{},children:[{type:a,value:k}]},{type:a,value:" でどんなことができるのか確認しましょう。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:F,props:{id:"examples"},children:[{type:b,tag:d,props:{href:"#examples",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:"Examples"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fp5js.org\u002Fexamples\u002F",rel:[n,o,p],target:q},children:[{type:a,value:"examples | p5.js"}]}]},{type:a,value:c},{type:b,tag:m,props:{src:"resource\u002Fimage\u002Fp5js_intro_p5js-examples.png",alt:l},children:[{type:a,value:c}]},{type:a,value:c},{type:b,tag:F,props:{id:"openprocessing"},children:[{type:b,tag:d,props:{href:"#openprocessing",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"p5.jsのスケッチを投稿するギャラリーサイトもあります。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.openprocessing.org\u002Fbrowse\u002F#",rel:[n,o,p],target:q},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:m,props:{src:"resource\u002Fimage\u002Fp5js_intro_openprocessing.png",alt:l},children:[{type:a,value:c}]}]},dir:"\u002Fja",path:"\u002Fja\u002Fp5js_intro",extension:".md",slug:"p5js_intro",createdAt:"2020-09-29T13:15:02.991Z",updatedAt:"2020-09-30T10:24:08.396Z",to:"\u002Fp5js_intro"},prev:{title:"使用ソフトウェア等",slug:"requirements",to:"\u002Frequirements"},next:{title:"エディタの使い方",slug:"p5js_editor",to:"\u002Fp5js_editor"}}],fetch:[],mutations:[]}}("text","element","\n","a","p","true",-1,"span","icon","icon-link","p5.js","p5.js Editor","static-img","nofollow","noopener","noreferrer","_blank","成り立ち","Processing","なにができる？","code",3,"h3",128,"strong","br",2,"processing","p5js","p5js-editor","h2","h4","OpenProcessing")));