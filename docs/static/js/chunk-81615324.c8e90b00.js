(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81615324"],{a30a:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n("b775");function l(){return Object(a["a"])({url:"/enterprises",method:"get"})}},ea02:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"统一社会信用码",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uscc)+" ")]}}])}),n("el-table-column",{attrs:{label:"企业 \\ 机构名称",width:"240",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),n("el-table-column",{attrs:{label:"所在区域",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.area))])]}}])}),n("el-table-column",{attrs:{label:"法人身份证",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.art_cid)+" ")]}}])}),n("el-table-column",{attrs:{prop:"found_date",label:"成立日期",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",[t._v(t._s(e.row.found_date))])]}}])})],1)],1)},l=[],i=(n("d3b7"),n("a30a")),o={data:function(){return{list:null,loading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.loading=!0,Object(i["a"])().then((function(e){var n=e.data,a=(n.status,n.data);t.list=a})).catch((function(t){})).finally((function(){t.loading=!1}))}}},r=o,u=n("2877"),c=Object(u["a"])(r,a,l,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-81615324.c8e90b00.js.map