(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"settings"}},[a("div",{staticClass:"box"},[a("div",{staticClass:"left mt-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 px-5"},[t._m(0),a("div",{staticClass:"option d-flex"},t._l(t.items,(function(s){return a("div",{key:s.src,staticClass:"col-4 optionradio"},[a("input",{attrs:{id:"work",type:"radio",name:"work"},on:{change:t.selectworkalarm}}),a("div",{staticClass:"colorradio"}),a("label",{staticClass:"txt",attrs:{for:"work"}},[t._v(t._s(s.name))])])})),0),t._m(1)])])])]),a("div",{staticClass:"left mt-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 px-5"},[t._m(2),a("div",{staticClass:"option d-flex"},t._l(t.items,(function(s){return a("div",{key:s.src,staticClass:"col-4 optionradio"},[a("input",{attrs:{id:"break",type:"radio",name:"break"},on:{change:t.selectbreakalarm}}),a("div",{staticClass:"colorradio"}),a("label",{staticClass:"txt",attrs:{for:"break"}},[t._v(t._s(s.name))])])})),0),t._m(3)])])])])])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"py-2 line d-flex"},[e("div",{staticClass:"text"},[e("img",{attrs:{src:a("07d2")}}),t._v(" Work Ringrone")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"additem"},[a("span",{staticStyle:{"font-size":"3rem","font-weight":"bolder"}},[t._v("+")]),a("span",[t._v("Upload")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"py-2 line d-flex"},[e("div",{staticClass:"text"},[e("img",{attrs:{src:a("07d2")}}),t._v(" Break Ringrone")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"additem"},[a("span",{staticStyle:{"font-size":"3rem","font-weight":"bolder"}},[t._v("+")]),a("span",[t._v("Upload")])])}],r={data:function(){return{items:[{name:"alarm",src:"alarm.mp3"},{name:"yay",src:"yay.mp3"}]}},methods:{selectworkalarm:function(t){this.$store.commit("selectworkalarm",this.items[0].src)},selectbreakalarm:function(t){console.log(t),this.$store.commit("selectbreakalarm",this.items[0].src)}}},l=r,n=a("2877"),c=Object(n["a"])(l,e,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=settings.dd5d812a.js.map