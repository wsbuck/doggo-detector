(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,a,t){e.exports=t.p+"static/media/dog.1afd5e79.jpg"},122:function(e){e.exports={0:"Chihuahua",1:"Japanese Spaniel",2:"Maltese Dog",3:"Pekinese",4:"Shih-Tzu",5:"Blenheim Spaniel",6:"Papillon",7:"Toy Terrier",8:"Rhodesian Ridgeback",9:"Afghan Hound",10:"Basset",11:"Beagle",12:"Bloodhound",13:"Bluetick",14:"Black-And-Tan Coonhound",15:"Walker Hound",16:"English Foxhound",17:"Redbone",18:"Borzoi",19:"Irish Wolfhound",20:"Italian Greyhound",21:"Whippet",22:"Ibizan Hound",23:"Norwegian Elkhound",24:"Otterhound",25:"Saluki",26:"Scottish Deerhound",27:"Weimaraner",28:"Staffordshire Bullterrier",29:"American Staffordshire Terrier",30:"Bedlington Terrier",31:"Border Terrier",32:"Kerry Blue Terrier",33:"Irish Terrier",34:"Norfolk Terrier",35:"Norwich Terrier",36:"Yorkshire Terrier",37:"Wire-Haired Fox Terrier",38:"Lakeland Terrier",39:"Sealyham Terrier",40:"Airedale",41:"Cairn",42:"Australian Terrier",43:"Dandie Dinmont",44:"Boston Bull",45:"Miniature Schnauzer",46:"Giant Schnauzer",47:"Standard Schnauzer",48:"Scotch Terrier",49:"Tibetan Terrier",50:"Silky Terrier",51:"Soft-Coated Wheaten Terrier",52:"West Highland White Terrier",53:"Lhasa",54:"Flat-Coated Retriever",55:"Curly-Coated Retriever",56:"Golden Retriever",57:"Labrador Retriever",58:"Chesapeake Bay Retriever",59:"German Short-Haired Pointer",60:"Vizsla",61:"English Setter",62:"Irish Setter",63:"Gordon Setter",64:"Brittany Spaniel",65:"Clumber",66:"English Springer",67:"Welsh Springer Spaniel",68:"Cocker Spaniel",69:"Sussex Spaniel",70:"Irish Water Spaniel",71:"Kuvasz",72:"Schipperke",73:"Groenendael",74:"Malinois",75:"Briard",76:"Kelpie",77:"Komondor",78:"Old English Sheepdog",79:"Shetland Sheepdog",80:"Collie",81:"Border Collie",82:"Bouvier Des Flandres",83:"Rottweiler",84:"German Shepherd",85:"Doberman",86:"Miniature Pinscher",87:"Greater Swiss Mountain Dog",88:"Bernese Mountain Dog",89:"Appenzeller",90:"Entlebucher",91:"Boxer",92:"Bull Mastiff",93:"Tibetan Mastiff",94:"French Bulldog",95:"Great Dane",96:"Saint Bernard",97:"Eskimo Dog",98:"Malamute",99:"Siberian Husky",100:"Affenpinscher",101:"Basenji",102:"Pug",103:"Leonberg",104:"Newfoundland",105:"Great Pyrenees",106:"Samoyed",107:"Pomeranian",108:"Chow",109:"Keeshond",110:"Brabancon Griffon",111:"Pembroke",112:"Cardigan",113:"Toy Poodle",114:"Miniature Poodle",115:"Standard Poodle",116:"Mexican Hairless",117:"Dingo",118:"Dhole",119:"African Hunting Dog"}},140:function(e,a,t){e.exports=t(246)},145:function(e,a,t){},148:function(e,a,t){},152:function(e,a){},154:function(e,a){},187:function(e,a){},188:function(e,a){},234:function(e,a){},235:function(e,a){},236:function(e,a){},246:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(15),i=t.n(o),c=(t(145),t(34)),l=t.n(c),s=t(63),u=t(25),d=(t(148),t(121)),m=t.n(d),h=t(122),p=t(27),f=t(250),g=t(248),b=Object(g.a)(function(e){return{root:{padding:e.spacing(1),marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(1),marginBottom:e.spacing(1),background:"#37474f",maxWidth:"600px"}}});function v(e){var a=document.createElement("canvas"),t=b();var n=e.image,o=e.cameraStatus,i=document.querySelector("video");return o?function(){var e=document.querySelector("video");navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(a){return a,e.srcObject=a,a}).catch(function(e){console.log(e)})}():i&&function(t){if(t.srcObject){var n=t.srcObject;console.log("ok"),a.height=t.videoHeight,a.width=t.videoWidth,a.getContext("2d").drawImage(t,0,0,a.width,a.height);var r=a.toDataURL("image/png");n.getTracks().forEach(function(e){e.stop()}),t.srcObject=null,e.getImage(r)}}(i),r.a.createElement(f.a,{className:t.root,color:"primary"},r.a.createElement("video",{alt:"doggo",className:o?"doggo-images":"hidden",autoPlay:!0,playsInline:!0}),r.a.createElement("img",{src:n,alt:"doggo",className:o?"hidden":"doggo-images"}))}var w=t(270),y=t(271),E=t(272),S=t(127),k=t.n(S),j=t(128),B=t.n(j),O=t(273),T=Object(g.a)(function(e){return{text:{padding:e.spacing(2,2,0)},appBar:{justifyContent:"center",display:"grid",top:"auto",bottom:0,padding:0,height:"6%"},grow:{flexGrow:1},fabButton:{display:"grid",zIndex:1,top:-30,margin:e.spacing(2)}}});function x(e){var a=T(),t=e.modelLoaded,n=e.cameraStatus;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{position:"fixed",color:"primary",className:a.appBar},r.a.createElement(y.a,null,r.a.createElement(E.a,{color:"secondary","aria-label":"add",className:a.fabButton,onClick:function(){e.updateCamera(!n)}},r.a.createElement(k.a,null)),r.a.createElement(E.a,{color:"secondary","aria-label":"add",className:a.fabButton,onClick:function(){n||e.predict()},disabled:!t},t?r.a.createElement(B.a,null):r.a.createElement(O.a,{color:"secondary"})),r.a.createElement("div",{className:a.grow}))))}var C=t(129),N=t(38),W=t(133),D=t(130),A=t(134),I=function(e){function a(e){var t;return Object(C.a)(this,a),(t=Object(W.a)(this,Object(D.a)(a).call(this,e))).state={},t}return Object(A.a)(a,e),Object(N.a)(a,[{key:"createTable",value:function(){}},{key:"render",value:function(){var e=this.props.prediction;return e?r.a.createElement("div",{className:e?"card":"hidden"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.map(function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("th",{className:"pred-object"},e.className),r.a.createElement("th",{className:"pred-percent"},parseFloat(1e4*e.probability/100).toFixed(2),"%"))})))):""}}]),a}(n.Component),M=t(135),P=t(275),R=t(278),G=t(276),F=t(277),z=t(282),L=t(279),H=t(274),K=t(131),U=t.n(K);function q(){var e=r.a.useState(!1),a=Object(u.a)(e,2),t=a[0],n=a[1];function o(){n(!1)}return r.a.createElement("div",null,r.a.createElement(H.a,{color:"secondary","aria-label":"Information",onClick:function(){n(!0)}},r.a.createElement(U.a,null)),r.a.createElement(z.a,{open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(P.a,{id:"alert-dialog-title"},"Hello!"),r.a.createElement(G.a,null,r.a.createElement(F.a,{id:"alert-dialog-description"},"This is made with tensorflow.js and React. The model is mobilenet retrained only on the dogs of ImageNet. The code for this project can be found ",r.a.createElement("a",{href:"https://github.com/wsbuck/doge-detector"},"here")," and the tensorflow model is ",r.a.createElement("a",{href:"https://github.com/wsbuck/DogeNetTFModel"},"here"),".")),r.a.createElement(R.a,null,r.a.createElement(L.a,{onClick:o,color:"primary"},"Close"))))}var J=Object(g.a)(function(e){return{root:{flexGrow:1},appBar:{},title:{flexGrow:1,marginLeft:e.spacing(2)}}});function V(){var e=J();return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{className:e.appBar,position:"static",color:"primary"},r.a.createElement(y.a,null,r.a.createElement(M.a,{variant:"h6",color:"inherit",className:e.title},"Doge Detector"),r.a.createElement(q,null))))}var Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Q=t(280),X=t(281),Z=t(132),_=Object(Z.a)({palette:{primary:{main:"#37474f"},secondary:{main:"#FFAB91"},background:{default:"#102027"},MuiPaper:{color:"#37474f"}},themeName:"Cutty Sark Mona Lisa Ostracod"});i.a.render(r.a.createElement(Q.a,{theme:_},r.a.createElement(X.a,null),r.a.createElement(function(){var e=Object(n.useState)(m.a),a=Object(u.a)(e,2),t=a[0],o=a[1],i=Object(n.useState)(!1),c=Object(u.a)(i,2),d=c[0],f=c[1],g=Object(n.useState)(!1),b=Object(u.a)(g,2),w=b[0],y=b[1],E=Object(n.useState)(null),S=Object(u.a)(E,2),k=S[0],j=S[1],B=Object(n.useState)(null),O=Object(u.a)(B,2),T=O[0],C=O[1];function N(){return(N=Object(s.a)(l.a.mark(function e(){var a,t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,p.b("https://s3-us-west-1.amazonaws.com/wsbuck/tfjs/model.json");case 3:return a=e.sent,t=p.d(function(){return a.predict(p.e([1,224,224,3]))}),e.next=7,t.data();case 7:return t.dispose(),e.abrupt("return",a);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(e){o(e)}function D(e,a){return A.apply(this,arguments)}function A(){return(A=Object(s.a)(l.a.mark(function e(a,t){var n,r,o,i,c,s,u,d,m;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.data();case 2:for(n=e.sent,r=[],o=0;o<n.length;o++)r.push({value:n[o],index:o});for(r.sort(function(e,a){return a.value-e.value}),i=new Float32Array(t),c=new Int32Array(t),s=0;s<t;s++)i[s]=r[s].value,c[s]=r[s].index;for(u=[],d=0,m=0;m<c.length;m++)d+=i[m],u.push({className:h[c[m]],probability:i[m]});return u.push({className:"Other",probability:1-d}),e.abrupt("return",u);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(){return(M=Object(s.a)(l.a.mark(function e(){var a,t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.querySelector("img"),t=p.d(function(){var e=p.a.fromPixels(a).resizeNearestNeighbor([224,224]).toFloat(),t=p.c(127.5),n=e.sub(t).div(t).reshape([1,224,224,3]);return console.log(k),k.predict(n)}),e.next=4,D(t,3);case 4:n=e.sent,C(n);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){(function(){return N.apply(this,arguments)})().then(function(e){j(e),y(!0)})},[]),r.a.createElement("div",{className:"App"},r.a.createElement(V,null),r.a.createElement(v,{image:t,cameraStatus:d,getImage:W}),r.a.createElement(I,{prediction:T}),r.a.createElement(x,{updateCamera:f,cameraStatus:d,predict:function(){return M.apply(this,arguments)},modelLoaded:w,getImage:W}))},null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/doge-detector",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/doge-detector","/service-worker.js");Y?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):$(a,e)})}}()}},[[140,1,2]]]);
//# sourceMappingURL=main.b9624549.chunk.js.map