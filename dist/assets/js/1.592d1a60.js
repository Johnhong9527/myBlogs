(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{156:function(t,e,r){},170:function(t,e,r){"use strict";var n=r(2),i=r(13),s=r(12),a=r(69),o=r(67),u=r(5),c=r(92).f,l=r(91).f,f=r(7).f,h=r(87).trim,d=n.Number,p=d,v=d.prototype,b="Number"==s(r(68)(v)),N="trim"in String.prototype,m=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var r,n,i,s=(e=N?e.trim():h(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var a,u=e.slice(2),c=0,l=u.length;c<l;c++)if((a=u.charCodeAt(c))<48||a>i)return NaN;return parseInt(u,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(b?u(function(){v.valueOf.call(r)}):"Number"!=s(r))?a(new p(m(e)),r,d):m(e)};for(var I,g=r(6)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;g.length>A;A++)i(p,I=g[A])&&!i(d,I)&&f(d,I,l(p,I));d.prototype=v,v.constructor=d,r(9)(n,"Number",d)}},171:function(t,e,r){var n=r(3),i=r(172);n(n.S+n.F*(Number.parseInt!=i),"Number",{parseInt:i})},172:function(t,e,r){var n=r(2).parseInt,i=r(87).trim,s=r(89),a=/^[-+]?0[xX]/;t.exports=8!==n(s+"08")||22!==n(s+"0x16")?function(t,e){var r=i(String(t),3);return n(r,e>>>0||(a.test(r)?16:10))}:n},173:function(t,e,r){"use strict";var n=r(156);r.n(n).a},179:function(t,e,r){"use strict";r.r(e);r(88),r(170),r(171),r(90);var n={data:function(){return{letter:["A","B","C","D","E","F","G"],digital:{A:0,B:7,C:14,D:21,E:28,F:35,G:42},enter:"",ships:{0:Math.floor(48*Math.random()),1:Math.floor(48*Math.random()),2:Math.floor(48*Math.random())}}},methods:{btn:function(t,e){var r,n,i=new RegExp(/^[a-g][0-6]/i);if(2==t.length)return this.enter=t,void this.setAttribute(e);i.test(this.enter)?(n=this.enter[0].toUpperCase(),r=Number.parseInt(this.digital[n])+Number.parseInt(this.enter[1]),this.setAttribute(r)):alert("请输入正确的坐标;\n如: A6!")},setAttribute:function(t){var e=this.$refs.td[t].getAttribute("class").split(" ");e.length>1?alert("该区域已经".concat(e[0],",请切换其他空白区域!")):this.ships[0]===t||this.ships[1]===t||this.ships[2]===t?this.$refs.td[t].setAttribute("class","ship td"):this.$refs.td[t].setAttribute("class","miss td")},reload:function(){for(var t in this.enter="",this.ships)this.ships[t]=Math.floor(48*Math.random());for(var e in this.$refs.td)this.$refs.td[e].setAttribute("class","td")}}},i=(r(173),r(0)),s=Object(i.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"continuar"},[r("div",{staticClass:"table"},t._l(t.letter,function(e,n){return r("div",{key:n,staticClass:"tr"},t._l([0,1,2,3,4,5,6],function(n){return r("div",{key:n,ref:"td",refInFor:!0,staticClass:"td",on:{click:function(r){t.btn(e+n,t.digital[e]+n)}}})}))})),t._v(" "),r("div",{staticClass:"enter"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.enter,expression:"enter"}],attrs:{type:"text",placeholder:"A0",maxlength:"2",id:"coordinate",value:""},domProps:{value:t.enter},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.btn(e):null},input:function(e){e.target.composing||(t.enter=e.target.value)}}}),t._v(" "),r("div",{staticClass:"btn",on:{click:t.btn}},[t._v("输入")]),t._v(" "),r("div",{staticClass:"btn reload",on:{click:t.reload}},[t._v("重置")])])])},[],!1,null,"52af7078",null);s.options.__file="index.vue";e.default=s.exports}}]);