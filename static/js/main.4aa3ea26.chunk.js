(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{149:function(e,t,a){e.exports=a.p+"static/media/dog.1afd5e79.jpg"},150:function(e){e.exports={0:"Chihuahua",1:"Japanese Spaniel",2:"Maltese Dog",3:"Pekinese",4:"Shih-Tzu",5:"Blenheim Spaniel",6:"Papillon",7:"Toy Terrier",8:"Rhodesian Ridgeback",9:"Afghan Hound",10:"Basset",11:"Beagle",12:"Bloodhound",13:"Bluetick",14:"Black-And-Tan Coonhound",15:"Walker Hound",16:"English Foxhound",17:"Redbone",18:"Borzoi",19:"Irish Wolfhound",20:"Italian Greyhound",21:"Whippet",22:"Ibizan Hound",23:"Norwegian Elkhound",24:"Otterhound",25:"Saluki",26:"Scottish Deerhound",27:"Weimaraner",28:"Staffordshire Bullterrier",29:"American Staffordshire Terrier",30:"Bedlington Terrier",31:"Border Terrier",32:"Kerry Blue Terrier",33:"Irish Terrier",34:"Norfolk Terrier",35:"Norwich Terrier",36:"Yorkshire Terrier",37:"Wire-Haired Fox Terrier",38:"Lakeland Terrier",39:"Sealyham Terrier",40:"Airedale",41:"Cairn",42:"Australian Terrier",43:"Dandie Dinmont",44:"Boston Bull",45:"Miniature Schnauzer",46:"Giant Schnauzer",47:"Standard Schnauzer",48:"Scotch Terrier",49:"Tibetan Terrier",50:"Silky Terrier",51:"Soft-Coated Wheaten Terrier",52:"West Highland White Terrier",53:"Lhasa",54:"Flat-Coated Retriever",55:"Curly-Coated Retriever",56:"Golden Retriever",57:"Labrador Retriever",58:"Chesapeake Bay Retriever",59:"German Short-Haired Pointer",60:"Vizsla",61:"English Setter",62:"Irish Setter",63:"Gordon Setter",64:"Brittany Spaniel",65:"Clumber",66:"English Springer",67:"Welsh Springer Spaniel",68:"Cocker Spaniel",69:"Sussex Spaniel",70:"Irish Water Spaniel",71:"Kuvasz",72:"Schipperke",73:"Groenendael",74:"Malinois",75:"Briard",76:"Kelpie",77:"Komondor",78:"Old English Sheepdog",79:"Shetland Sheepdog",80:"Collie",81:"Border Collie",82:"Bouvier Des Flandres",83:"Rottweiler",84:"German Shepherd",85:"Doberman",86:"Miniature Pinscher",87:"Greater Swiss Mountain Dog",88:"Bernese Mountain Dog",89:"Appenzeller",90:"Entlebucher",91:"Boxer",92:"Bull Mastiff",93:"Tibetan Mastiff",94:"French Bulldog",95:"Great Dane",96:"Saint Bernard",97:"Eskimo Dog",98:"Malamute",99:"Siberian Husky",100:"Affenpinscher",101:"Basenji",102:"Pug",103:"Leonberg",104:"Newfoundland",105:"Great Pyrenees",106:"Samoyed",107:"Pomeranian",108:"Chow",109:"Keeshond",110:"Brabancon Griffon",111:"Pembroke",112:"Cardigan",113:"Toy Poodle",114:"Miniature Poodle",115:"Standard Poodle",116:"Mexican Hairless",117:"Dingo",118:"Dhole",119:"African Hunting Dog"}},249:function(e,t,a){e.exports=a(434)},254:function(e,t,a){},257:function(e,t,a){},261:function(e,t){},263:function(e,t){},296:function(e,t){},297:function(e,t){},343:function(e,t){},344:function(e,t){},345:function(e,t){},434:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(40),o=a.n(i),s=(a(254),a(35)),c=a.n(s),l=a(64),u=a(18),d=a(19),h=a(21),m=a(20),p=a(22),f=a(8),g=(a(257),a(149)),b=a.n(g),v=a(150),S=a(24),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={currentStream:null},a.startStream=a.startStream.bind(Object(f.a)(Object(f.a)(a))),a.stopStream=a.stopStream.bind(Object(f.a)(Object(f.a)(a))),a.currentStream=null,a.snapShotCanvas=document.createElement("canvas"),a.IMAGE_WIDTH=300,a.IMAGE_HEIGHT=300,a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"startStream",value:function(){var e=this,t=document.querySelector("video");navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(a){return e.currentStream=a,t.srcObject=a,a}).catch(function(e){console.log(e)})}},{key:"stopStream",value:function(){if(this.currentStream){var e=document.querySelector("video");this.snapShotCanvas.height=e.videoWidth,this.snapShotCanvas.width=e.videoHeight,this.snapShotCanvas.height=this.IMAGE_HEIGHT,this.snapShotCanvas.width=this.IMAGE_WIDTH,this.snapShotCanvas.getContext("2d").drawImage(e,0,0,this.snapShotCanvas.width,this.snapShotCanvas.height);var t=this.snapShotCanvas.toDataURL("image/png");this.currentStream.getTracks().forEach(function(e){e.stop()}),this.currentStream=null,this.props.getImage(t)}}},{key:"render",value:function(){var e=this.props.image,t=this.props.camera;return t?this.startStream():this.stopStream(),r.a.createElement("div",{className:"doggo-image-container"},r.a.createElement("video",{alt:"doggo",className:t?"doggo-image":"hidden",autoPlay:!0,playsInline:!0}),r.a.createElement("img",{src:e,alt:"doggo",className:"doggo-image"}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleImage",value:function(e){this.props.getImage(URL.createObjectURL(e.target.files[0]))}},{key:"handlePredict",value:function(){this.props.camera||this.props.predict()}},{key:"render",value:function(){var e=this,t=this.props.camera,a=this.props.modelLoaded;return r.a.createElement("div",{className:"input-container"},function(){var e=window.navigator.userAgent;return!!e.match(/iPad/i)||!!e.match(/iPhone/i)}()&&(!function(){var e=window.navigator.userAgent,t=!!e.match(/iPad/i)||!!e.match(/iPhone/i),a=!!e.match(/WebKit/i);return t&&a&&!e.match(/CriOS/i)}()||"standalone"in window.navigator&&window.navigator.standalone)?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"file",id:"file-input",accept:"image/*",capture:"camera",className:"input-buttons",onChange:function(t){return e.handleImage(t)}}),r.a.createElement("label",{type:"button",htmlFor:"file-input",className:"input-buttons",onClick:function(){return""},onTouchStart:function(){return""}},"Upload File")):r.a.createElement("button",{onClick:function(){return t?e.props.updateCamera(!1):e.props.updateCamera(!0)},className:"input-button",onTouchStart:function(){return""}},"Camera"),r.a.createElement("button",{onClick:function(){return e.handlePredict()},className:"input-button",onTouchStart:function(){return""},disabled:!a},"Predict"))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"createTable",value:function(){}},{key:"render",value:function(){var e=this.props.prediction;return e?r.a.createElement("div",{className:e?"card":"hidden"},r.a.createElement("table",null,r.a.createElement("tbody",null,e.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",{className:"pred-object"},e.className),r.a.createElement("th",{className:"pred-percent"},parseFloat(1e4*e.probability/100).toFixed(2),"%"))})))):""}}]),t}(n.Component),y=a(41),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.state={open:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{open:this.state.open,onClose:this.handleClose},r.a.createElement(y.c,null,"Hello!"),r.a.createElement(y.b,null,r.a.createElement("p",{className:"info-text"},"This is made with tensorflow.js and React. The model is mobilenet retrained only on the dogs of ImageNet."),r.a.createElement("p",{className:"info-text"},"The code for this project can be found ",r.a.createElement("a",{href:"https://github.com/wsbuck/doge-detector"},"here")," and the tensorflow model is ",r.a.createElement("a",{href:"https://github.com/wsbuck/DogeNetTFModel"},"here"),"."))),r.a.createElement("button",{className:"info-button",onClick:this.handleClickOpen},"?"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={image:b.a,camera:!1,modelLoaded:!1,prediction:null},a.updateCamera=a.updateCamera.bind(Object(f.a)(Object(f.a)(a))),a.getImage=a.getImage.bind(Object(f.a)(Object(f.a)(a))),a.predict=a.predict.bind(Object(f.a)(Object(f.a)(a))),a.loadModel=a.loadModel.bind(Object(f.a)(Object(f.a)(a))),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadModel()}},{key:"updateCamera",value:function(e){this.setState({camera:e})}},{key:"loadModel",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.outputClasses=v,e.next=3,S.b("https://s3-us-west-1.amazonaws.com/wsbuck/tfjs/model.json");case 3:return this.model=e.sent,this.setState({modelLoaded:!0}),t=S.d(function(){return a.model.predict(S.e([1,224,224,3]))}),e.next=8,t.data();case 8:t.dispose();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getImage",value:function(e){this.setState({image:e})}},{key:"preprocessImage",value:function(e){var t=S.a.fromPixels(e).resizeNearestNeighbor([224,224]).toFloat(),a=S.c(127.5);return t.sub(a).div(a).expandDims()}},{key:"getTopKClasses",value:function(){var e=Object(l.a)(c.a.mark(function e(t,a){var n,r,i,o,s,l,u,d,h;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.data();case 2:for(n=e.sent,r=[],i=0;i<n.length;i++)r.push({value:n[i],index:i});for(r.sort(function(e,t){return t.value-e.value}),o=new Float32Array(a),s=new Int32Array(a),l=0;l<a;l++)o[l]=r[l].value,s[l]=r[l].index;for(u=[],d=0,h=0;h<s.length;h++)d+=o[h],u.push({className:this.outputClasses[s[h]],probability:o[h]});return u.push({className:"Other",probability:1-d}),e.abrupt("return",u);case 14:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"predict",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a,n,r=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("img"),a=S.d(function(){var e=S.a.fromPixels(t).resizeNearestNeighbor([224,224]).toFloat(),a=S.c(127.5),n=e.sub(a).div(a).reshape([1,224,224,3]);return r.model.predict(n)}),e.next=4,this.getTopKClasses(a,3);case 4:n=e.sent,this.setState({prediction:n});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,{image:this.state.image,camera:this.state.camera,getImage:this.getImage}),r.a.createElement(C,{prediction:this.state.prediction}),r.a.createElement(k,{updateCamera:this.updateCamera,camera:this.state.camera,predict:this.predict,modelLoaded:this.state.modelLoaded,getImage:this.getImage}),r.a.createElement(j,null))}}]),t}(n.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/doge-detector",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/doge-detector","/service-worker.js");E?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):T(t,e)})}}()}},[[249,1,2]]]);
//# sourceMappingURL=main.4aa3ea26.chunk.js.map