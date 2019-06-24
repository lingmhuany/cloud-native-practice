(function(t){function e(e){for(var s,n,i=e[0],l=e[1],d=e[2],m=0,c=[];m<i.length;m++)n=i[m],r[n]&&c.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(c.length)c.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{attrs:{name:"header"}}),a("router-view",{attrs:{name:"main"}})],1)},o=[],n=a("2877"),i={},l=Object(n["a"])(i,r,o,!1,null,null,null),d=l.exports,u=a("5c96"),m=a.n(u);a("0fae");s["default"].use(m.a);var c=a("8c4f"),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"身份"}},[a("el-select",{attrs:{placeholder:"请选择身份"},model:{value:t.form.identity,callback:function(e){t.$set(t.form,"identity",e)},expression:"form.identity"}},[a("el-option",{attrs:{label:"值班员",value:"librarian"}}),a("el-option",{attrs:{label:"管理员",value:"administrator"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("登录")]),a("el-button",{attrs:{type:"text"},on:{click:function(e){return t.retrievePassword()}}},[t._v("找回密码")])],1)],1)],1)},p=[],f={name:"Login",data:function(){return{form:{username:null,password:null,identity:null}}},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/auth/oauth/token",data:{client_id:"android",client_secret:"android",grant_type:"password",username:this.form.username,password:this.form.password},transformRequest:[function(e){return t.qs.stringify(e)}]}).then(function(e){200==e.status&&("librarian"==t.form.identity?t.$router.push({path:"/librarian/attendance"}):t.$router.push({path:"/administrator/shifts"}))}).catch(function(e){"DisabledException"==e.response.data?t.$message.error("账号已被禁用"):"BadCredentialsException"==e.response.data?t.$message.error("用户名或密码错误"):t.$message.error("未知错误")})},retrievePassword:function(){this.$alert("请联系网络管理员找回密码！","找回密码",{confirmButtonText:"确定"})}}},b=f,g=Object(n["a"])(b,h,p,!1,null,null,null),y=g.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"librarian-header"},[a("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal",router:""}},[a("el-menu-item",{attrs:{index:"attendance"}},[t._v("考勤")]),a("el-menu-item",{attrs:{index:"relay"}},[t._v("替班")]),a("el-menu-item",{attrs:{index:"history"}},[t._v("历史")]),a("el-menu-item",{attrs:{index:"settings"}},[t._v("设置")]),a("el-submenu",{staticStyle:{float:"right"}},[a("template",{slot:"title"},[t._v(t._s(t.name))]),a("el-menu-item",{staticStyle:{"text-align":"center"},on:{click:t.logout}},[t._v("退出")])],2)],1)],1)},w=[],R={name:"LibrarianHeader",data:function(){return{activeIndex:"attendance",name:null}},created:function(){var t=this;this.axios({method:"get",url:"/get-name"}).then(function(e){200==e.status&&(t.name=e.data)})},methods:{logout:function(){var t=this;this.axios({method:"get",url:"/logout"}).then(function(e){200==e.status&&t.$router.push({path:"/login"})})}}},F=R,k=Object(n["a"])(F,v,w,!1,null,null,null),x=k.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"attendance"},[a("h4",[t._v("固定班次")]),a("el-table",{attrs:{data:t.shifts,border:""}},[a("el-table-column",{attrs:{prop:"shift.dayOfTheWeek",label:"星期",width:"50"}}),a("el-table-column",{attrs:{prop:"shift.startTime",label:"开始时间",width:"100"}}),a("el-table-column",{attrs:{prop:"shift.endTime",label:"结束时间",width:"100"}}),a("el-table-column",{attrs:{prop:"shift.location",label:"地点",width:"120"}}),a("el-table-column",{attrs:{prop:"shift.hourlyPay",label:"时薪",width:"50"}}),a("el-table-column",{attrs:{prop:"startDate",label:"开始日期",width:"100"}}),a("el-table-column",{attrs:{prop:"endDate",label:"结束日期",width:"100"}})],1),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit-outline"},on:{click:function(e){return t.signIn()}}},[t._v("签到")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-document-checked"},on:{click:function(e){return t.signOut()}}},[t._v("签退")])],1)},_=[],D=["日","一","二","三","四","五","六"],I={name:"Attendance",data:function(){return{shifts:null}},created:function(){var t=this;this.axios({method:"get",url:"/librarian/view-own-regular-shifts"}).then(function(e){if(200==e.status)if(0==e.data.code){t.shifts=e.data.data;for(var a=0;a<t.shifts.length;a++)t.shifts[a].shift.dayOfTheWeek=D[t.shifts[a].shift.dayOfTheWeek-1]}else t.$message.error(e.data.message);else t.$message.error("未知错误")})},methods:{signIn:function(){var t=this;this.axios({method:"get",url:"/librarian/sign-in"}).then(function(e){200==e.status?0==e.data.code?t.$message.success("签到成功"):t.$message.error(e.data.message):t.$message.error("未知错误")})},signOut:function(){var t=this;this.axios({method:"get",url:"/librarian/sign-out"}).then(function(e){200==e.status?0==e.data.code?t.$message.success("签退成功"):t.$message.error(e.data.message):t.$message.error("未知错误")})}}},T=I,S=Object(n["a"])(T,$,_,!1,null,null,null),P=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history"},[a("el-form",{attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"接受者学号"}},[a("el-input",{model:{value:t.form.takerId,callback:function(e){t.$set(t.form,"takerId",e)},expression:"form.takerId"}})],1),a("el-form-item",{attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择日期时间"},model:{value:t.form.dateTime,callback:function(e){t.$set(t.form,"dateTime",e)},expression:"form.dateTime"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit()}}},[t._v("提交")])],1)],1),a("h4",[t._v("替班历史")]),a("el-table",{attrs:{data:t.relayHistory,border:""}},[a("el-table-column",{attrs:{prop:"takes.date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"takes.shift.startTime",label:"开始时间",width:"100"}}),a("el-table-column",{attrs:{prop:"takes.shift.endTime",label:"结束时间",width:"100"}}),a("el-table-column",{attrs:{prop:"takes.shift.location",label:"地点",width:"150"}}),a("el-table-column",{attrs:{prop:"giver.name",label:"申请者",width:"100"}}),a("el-table-column",{attrs:{prop:"taker.name",label:"接受者",width:"100"}}),a("el-table-column",{attrs:{label:"状态",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?a("div",[t._v("已申请")]):t._e(),2==e.row.status?a("div",[t._v("已取消")]):t._e(),3==e.row.status?a("div",[t._v("已接受")]):t._e(),4==e.row.status?a("div",[t._v("已拒绝")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status&&e.row.giver.studentId==t.studentId?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.cancel(e.row.id)}}},[t._v("取消")]):t._e(),1==e.row.status&&e.row.taker.studentId==t.studentId?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.accept(e.row.id)}}},[t._v("接受")]):t._e(),1==e.row.status&&e.row.taker.studentId==t.studentId?a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.refuse(e.row.id)}}},[t._v("拒绝")]):t._e()]}}])})],1)],1)},H=[],A=["01","02","03","04","05","06","07","08","09","10","11","12"],j=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],V={name:"History",data:function(){return{studentId:null,form:{takerId:null,dateTime:null},relayHistory:[{date:"20190106",startTime:"09:00",endTime:"12:00",location:"休闲区二楼",giver:"张三",taker:"李四"},{date:"20190106",startTime:"09:00",endTime:"12:00",location:"休闲区二楼",giver:"张三",taker:"李四"}]}},created:function(){var t=this;this.axios({method:"get",url:"/get-user-information"}).then(function(e){"anonymousUser"!=e.data&&(t.studentId=e.data.username)}),this.getRelays()},methods:{getRelays:function(){var t=this;this.axios({method:"get",url:"/librarian/view-own-relays"}).then(function(e){200==e.status?0==e.data.code?t.relayHistory=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},submit:function(){var t=this;this.axios({method:"post",url:"/librarian/apply-for-relay",data:{takerId:this.form.takerId,dateTime:this.form.dateTime.getFullYear()+"-"+A[this.form.dateTime.getMonth()]+"-"+j[this.form.dateTime.getDate()-1]+" "+this.form.dateTime.toTimeString().substring(0,5)}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("申请成功"),t.getRelays()):t.$message.error(e.data.message):t.$message.error("未知错误")})},cancel:function(t){var e=this;this.axios({method:"post",url:"/librarian/cancel-relay",data:{relayId:t}}).then(function(t){200==t.status?0==t.data.code?(e.$message.success("取消成功"),e.getRelays()):e.$message.error(t.data.message):e.$message.error("未知错误")})},accept:function(t){var e=this;this.axios({method:"post",url:"/librarian/accept-relay",data:{relayId:t}}).then(function(t){200==t.status?0==t.data.code?(e.$message.success("接受成功"),e.getRelays()):e.$message.error(t.data.message):e.$message.error("未知错误")})},refuse:function(t){var e=this;this.axios({method:"post",url:"/librarian/refuse-relay",data:{relayId:t}}).then(function(t){200==t.status?0==t.data.code?(e.$message.success("拒绝成功"),e.getRelays()):e.$message.error(t.data.message):e.$message.error("未知错误")})}}},M=V,W=Object(n["a"])(M,O,H,!1,null,null,null),E=W.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"history"},[a("h4",[t._v("值班历史")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.takesDateRange,callback:function(e){t.takesDateRange=e},expression:"takesDateRange"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchTakesHistory()}}}),a("el-table",{attrs:{data:t.history,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"startTime",label:"开始时间",width:"100"}}),a("el-table-column",{attrs:{prop:"endTime",label:"结束时间",width:"100"}}),a("el-table-column",{attrs:{prop:"shift.location",label:"地点",width:"150"}}),a("el-table-column",{attrs:{prop:"pay",label:"工资",width:"150"}})],1),a("h4",[t._v("积分历史")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.pointRecordsDateRange,callback:function(e){t.pointRecordsDateRange=e},expression:"pointRecordsDateRange"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchPointRecords()}}}),a("el-table",{attrs:{data:t.pointsHistory,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"points",label:"积分",width:"50"}}),a("el-table-column",{attrs:{prop:"reason",label:"原因",width:"150"}})],1),a("h4",[t._v("奖惩历史")]),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.payRecordsDateRange,callback:function(e){t.payRecordsDateRange=e},expression:"payRecordsDateRange"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.searchPayRecords()}}}),a("el-table",{attrs:{data:t.payHistory,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"amount",label:"金额",width:"50"}}),a("el-table-column",{attrs:{prop:"reason",label:"原因",width:"150"}})],1)],1)},Y=[],z=["01","02","03","04","05","06","07","08","09","10","11","12"],L=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],q={name:"History",data:function(){return{takesDateRange:null,pointRecordsDateRange:null,payRecordsDateRange:null,history:null,pointsHistory:null,payHistory:null}},methods:{searchTakesHistory:function(){var t=this;this.axios({method:"post",url:"/librarian/view-takes-history",data:{startDate:this.takesDateRange[0].getFullYear()+"-"+z[this.takesDateRange[0].getMonth()]+"-"+L[this.takesDateRange[0].getDate()-1],endDate:this.takesDateRange[1].getFullYear()+"-"+z[this.takesDateRange[1].getMonth()]+"-"+L[this.takesDateRange[1].getDate()-1]}}).then(function(e){200==e.status?0==e.data.code?t.history=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},searchPointRecords:function(){var t=this;this.axios({method:"post",url:"/librarian/view-point-record",data:{startDate:this.pointRecordsDateRange[0].getFullYear()+"-"+z[this.pointRecordsDateRange[0].getMonth()]+"-"+L[this.pointRecordsDateRange[0].getDate()-1],endDate:this.pointRecordsDateRange[1].getFullYear()+"-"+z[this.pointRecordsDateRange[1].getMonth()]+"-"+L[this.pointRecordsDateRange[1].getDate()-1]}}).then(function(e){200==e.status?0==e.data.code?t.pointsHistory=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},searchPayRecords:function(){var t=this;this.axios({method:"post",url:"/librarian/view-pay-record",data:{startDate:this.payRecordsDateRange[0].getFullYear()+"-"+z[this.payRecordsDateRange[0].getMonth()]+"-"+L[this.payRecordsDateRange[0].getDate()-1],endDate:this.payRecordsDateRange[1].getFullYear()+"-"+z[this.payRecordsDateRange[1].getMonth()]+"-"+L[this.payRecordsDateRange[1].getDate()-1]}}).then(function(e){200==e.status?0==e.data.code?t.payHistory=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})}}},B=q,J=Object(n["a"])(B,C,Y,!1,null,null,null),U=J.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"administrator-header"},[a("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal",router:""}},[a("el-menu-item",{attrs:{index:"shifts"}},[t._v("班次")]),a("el-menu-item",{attrs:{index:"students"}},[t._v("学生")]),a("el-menu-item",{attrs:{index:"export"}},[t._v("导出")]),a("el-menu-item",{attrs:{index:"settings"}},[t._v("设置")]),a("el-submenu",{staticStyle:{float:"right"}},[a("template",{slot:"title"},[t._v(t._s(t.name))]),a("el-menu-item",{staticStyle:{"text-align":"center"},on:{click:t.logout}},[t._v("退出")])],2)],1)],1)},K=[],N={name:"AdministratorHeader",data:function(){return{activeIndex:"shifts",name:null}},created:function(){var t=this;this.axios({method:"get",url:"/get-name"}).then(function(e){200==e.status&&(t.name=e.data)})},methods:{logout:function(){var t=this;this.axios({method:"get",url:"/logout"}).then(function(e){200==e.status&&t.$router.push({path:"/login"})})}}},Q=N,X=Object(n["a"])(Q,G,K,!1,null,null,null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-shift"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"星期"}},[a("el-select",{attrs:{placeholder:"请选择星期"},model:{value:t.form.dayOfTheWeek,callback:function(e){t.$set(t.form,"dayOfTheWeek",e)},expression:"form.dayOfTheWeek"}},t._l(t.daysOfTheWeek,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("el-form-item",{attrs:{label:"时间范围"}},[a("el-time-picker",{attrs:{format:"HH:mm","is-range":"","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",placeholder:"选择时间范围"},model:{value:t.form.timeRange,callback:function(e){t.$set(t.form,"timeRange",e)},expression:"form.timeRange"}})],1),a("el-form-item",{attrs:{label:"地点"}},[a("el-input",{model:{value:t.form.location,callback:function(e){t.$set(t.form,"location",e)},expression:"form.location"}})],1),a("el-form-item",{attrs:{label:"时薪"}},[a("el-input",{model:{value:t.form.hourlyPay,callback:function(e){t.$set(t.form,"hourlyPay",e)},expression:"form.hourlyPay"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("form")}}},[t._v("添加")])],1)],1),a("el-table",{attrs:{data:t.shifts,height:"400",border:""}},[a("el-table-column",{attrs:{prop:"dayOfTheWeek",label:"星期",width:"50"}}),a("el-table-column",{attrs:{prop:"startTime",label:"开始时间",width:"100"}}),a("el-table-column",{attrs:{prop:"endTime",label:"结束时间",width:"100"}}),a("el-table-column",{attrs:{prop:"location",label:"地点",width:"120"}}),a("el-table-column",{attrs:{prop:"hourlyPay",label:"时薪",width:"50"}})],1)],1)},et=[],at={name:"AddShift",data:function(){return{form:{dayOfTheWeek:null,timeRange:null,location:null,hourlyPay:null},shifts:null,daysOfTheWeek:[{value:1,label:"日"},{value:2,label:"一"},{value:3,label:"二"},{value:4,label:"三"},{value:5,label:"四"},{value:6,label:"五"},{value:7,label:"六"}]}},created:function(){this.getShifts()},methods:{submit:function(){var t=this;this.axios({method:"post",url:"/administrator/add-shift",data:{dayOfTheWeek:this.form.dayOfTheWeek,location:this.form.location,startTime:this.form.timeRange[0].toTimeString().substring(0,5),endTime:this.form.timeRange[1].toTimeString().substring(0,5),hourlyPay:this.form.hourlyPay}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("添加成功"),t.getShifts()):t.$message.error(e.data.message):t.$message.error("未知错误")})},getShifts:function(){var t=this;this.axios({method:"get",url:"/administrator/view-shifts"}).then(function(e){200==e.status?0==e.data.code?t.shifts=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})}}},st=at,rt=Object(n["a"])(st,tt,et,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"students"},[a("el-form",{attrs:{model:t.addForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{model:{value:t.addForm.studentId,callback:function(e){t.$set(t.addForm,"studentId",e)},expression:"addForm.studentId"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.addForm.name,callback:function(e){t.$set(t.addForm,"name",e)},expression:"addForm.name"}})],1),a("el-form-item",{attrs:{label:"手机"}},[a("el-input",{model:{value:t.addForm.telephone,callback:function(e){t.$set(t.addForm,"telephone",e)},expression:"addForm.telephone"}})],1),a("el-form-item",[a("el-checkbox",{model:{value:t.addForm.isAdministrator,callback:function(e){t.$set(t.addForm,"isAdministrator",e)},expression:"addForm.isAdministrator"}},[t._v("管理员权限")])],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitAddForm()}}},[t._v("添加")])],1)],1),a("el-table",{attrs:{data:t.students,border:""}},[a("el-table-column",{attrs:{prop:"studentId",label:"学号",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"姓名",width:"100"}}),a("el-table-column",{attrs:{prop:"telephone",label:"手机",width:"100"}}),a("el-table-column",{attrs:{prop:"points",label:"积分",width:"50"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.edit(e.row.studentId)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleShifts(e.row.studentId)}}},[t._v("值班")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handlePointRecords(e.row.studentId)}}},[t._v("积分")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handlePayRecords(e.row.studentId)}}},[t._v("奖惩")])]}}])})],1),a("el-dialog",{attrs:{title:"学生信息",visible:t.modifyFormDialogVisible},on:{"update:visible":function(e){t.modifyFormDialogVisible=e}}},[a("el-form",{attrs:{model:t.modifyForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{attrs:{disabled:""},model:{value:t.modifyForm.studentId,callback:function(e){t.$set(t.modifyForm,"studentId",e)},expression:"modifyForm.studentId"}})],1),a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{model:{value:t.modifyForm.name,callback:function(e){t.$set(t.modifyForm,"name",e)},expression:"modifyForm.name"}})],1),a("el-form-item",{attrs:{label:"手机"}},[a("el-input",{model:{value:t.modifyForm.telephone,callback:function(e){t.$set(t.modifyForm,"telephone",e)},expression:"modifyForm.telephone"}})],1),a("el-form-item",[a("el-checkbox",{model:{value:t.modifyForm.isAdministrator,callback:function(e){t.$set(t.modifyForm,"isAdministrator",e)},expression:"modifyForm.isAdministrator"}},[t._v("管理员权限")])],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.modifyFormDialogVisible=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitModifyForm()}}},[t._v("确定")])],1)],1),a("el-dialog",{attrs:{title:"值班信息",visible:t.shiftsDialogVisible},on:{"update:visible":function(e){t.shiftsDialogVisible=e}}},[a("h4",[t._v("分配班次")]),a("el-form",{attrs:{model:t.assignShiftForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"日期范围"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.assignShiftForm.dateRange,callback:function(e){t.$set(t.assignShiftForm,"dateRange",e)},expression:"assignShiftForm.dateRange"}})],1),a("el-form-item",{attrs:{label:"班次"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择班次"},model:{value:t.assignShiftForm.shiftId,callback:function(e){t.$set(t.assignShiftForm,"shiftId",e)},expression:"assignShiftForm.shiftId"}},t._l(t.allShifts,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitAssignShiftForm()}}},[t._v("分配")])],1)],1),a("h4",[t._v("固定班次")]),a("el-table",{attrs:{data:t.shifts,border:""}},[a("el-table-column",{attrs:{prop:"shift.dayOfTheWeek",label:"星期",width:"50"}}),a("el-table-column",{attrs:{prop:"shift.startTime",label:"开始时间",width:"100"}}),a("el-table-column",{attrs:{prop:"shift.endTime",label:"结束时间",width:"100"}}),a("el-table-column",{attrs:{prop:"shift.location",label:"地点",width:"120"}}),a("el-table-column",{attrs:{prop:"shift.hourlyPay",label:"时薪",width:"50"}}),a("el-table-column",{attrs:{prop:"startDate",label:"开始日期",width:"100"}}),a("el-table-column",{attrs:{prop:"endDate",label:"结束日期",width:"100"}})],1),a("h4",[t._v("值班历史")]),a("el-table",{attrs:{data:t.history,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"startTime",label:"开始时间",width:"100"}}),a("el-table-column",{attrs:{prop:"endTime",label:"结束时间",width:"100"}}),a("el-table-column",{attrs:{prop:"location",label:"地点",width:"150"}}),a("el-table-column",{attrs:{prop:"pay",label:"工资",width:"50"}})],1)],1),a("el-dialog",{attrs:{title:"积分信息",visible:t.pointRecordsDialogVisible},on:{"update:visible":function(e){t.pointRecordsDialogVisible=e}}},[a("h4",[t._v("添加记录")]),a("el-form",{attrs:{model:t.pointRecordsForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"积分"}},[a("el-input",{model:{value:t.pointRecordsForm.points,callback:function(e){t.$set(t.pointRecordsForm,"points",e)},expression:"pointRecordsForm.points"}})],1),a("el-form-item",{attrs:{label:"原因"}},[a("el-input",{model:{value:t.pointRecordsForm.reason,callback:function(e){t.$set(t.pointRecordsForm,"reason",e)},expression:"pointRecordsForm.reason"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitPointRecordsForm()}}},[t._v("添加")])],1)],1),a("h4",[t._v("积分历史")]),a("el-table",{attrs:{data:t.pointsHistory,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"points",label:"积分",width:"50"}}),a("el-table-column",{attrs:{prop:"reason",label:"原因",width:"150"}}),a("el-table-column",{attrs:{prop:"operator.name",label:"操作人",width:"100"}})],1)],1),a("el-dialog",{attrs:{title:"奖惩信息",visible:t.payRecordsDialogVisible},on:{"update:visible":function(e){t.payRecordsDialogVisible=e}}},[a("h4",[t._v("添加记录")]),a("el-form",{attrs:{model:t.payRecordsForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"金额"}},[a("el-input",{model:{value:t.payRecordsForm.amount,callback:function(e){t.$set(t.payRecordsForm,"amount",e)},expression:"payRecordsForm.amount"}})],1),a("el-form-item",{attrs:{label:"原因"}},[a("el-input",{model:{value:t.payRecordsForm.reason,callback:function(e){t.$set(t.payRecordsForm,"reason",e)},expression:"payRecordsForm.reason"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitPayRecordsForm()}}},[t._v("添加")])],1)],1),a("h4",[t._v("奖惩历史")]),a("el-table",{attrs:{data:t.payHistory,border:""}},[a("el-table-column",{attrs:{prop:"date",label:"日期",width:"100"}}),a("el-table-column",{attrs:{prop:"amount",label:"金额",width:"50"}}),a("el-table-column",{attrs:{prop:"reason",label:"原因",width:"150"}}),a("el-table-column",{attrs:{prop:"operator.name",label:"操作人",width:"100"}})],1)],1)],1)},it=[],lt=(a("7f7f"),["01","02","03","04","05","06","07","08","09","10","11","12"]),dt=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],ut=["日","一","二","三","四","五","六"],mt={name:"Students",data:function(){return{addForm:{studentId:null,name:null,telephone:null,isAdministrator:!1},modifyFormDialogVisible:!1,modifyForm:{studentId:null,name:null,telephone:null,isAdministrator:!1},shiftsDialogVisible:!1,assignShiftForm:{studentId:null,dateRange:null,shiftId:null},students:null,shifts:null,allShifts:null,history:[{date:"20190106",startTime:"09:00:00",endTime:"12:00:00",location:"休闲区二楼",pay:32},{date:"20190112",startTime:"09:00:00",endTime:"12:00:00",location:"休闲区三楼",pay:48}],pointRecordsDialogVisible:!1,pointRecordsForm:{studentId:null,points:null,reason:null},pointsHistory:null,payRecordsDialogVisible:!1,payRecordsForm:{studentId:null,amount:null,reason:null},payHistory:null}},created:function(){this.getStudents()},methods:{getStudents:function(){var t=this;this.axios({method:"get",url:"/administrator/view-all-students"}).then(function(e){200==e.status?0==e.data.code?t.students=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},submitAddForm:function(){var t=this;this.axios({method:"post",url:"/administrator/add-student",data:{studentId:this.addForm.studentId,name:this.addForm.name,telephone:this.addForm.telephone,isAdministrator:this.addForm.isAdministrator}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("添加成功"),t.addForm.studentId=null,t.addForm.name=null,t.addForm.telephone=null,t.addForm.isAdministrator=!1,t.getStudents()):t.$message.error(e.data.message):t.$message.error("未知错误")})},edit:function(t){for(var e=0;e<this.students.length;e++)if(this.students[e].studentId==t){this.modifyForm.studentId=this.students[e].studentId,this.modifyForm.name=this.students[e].name,this.modifyForm.telephone=this.students[e].telephone,this.modifyForm.isAdministrator=this.students[e].isAdministrator;break}this.modifyFormDialogVisible=!0},submitModifyForm:function(){var t=this;this.axios({method:"post",url:"/administrator/modify-student",data:{studentId:this.modifyForm.studentId,name:this.modifyForm.name,telephone:this.modifyForm.telephone,isAdministrator:this.modifyForm.isAdministrator}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("修改成功"),t.modifyFormDialogVisible=!1,t.getStudents()):t.$message.error(e.data.message):t.$message.error("未知错误")})},handleShifts:function(t){this.assignShiftForm.studentId=t,this.getRegularShifts(t),this.getHistory(t),this.getAllShifts(),this.shiftsDialogVisible=!0},handlePointRecords:function(t){this.pointRecordsForm.studentId=t,this.getPointRecords(t),this.pointRecordsDialogVisible=!0},handlePayRecords:function(t){this.payRecordsForm.studentId=t,this.getPayRecords(t),this.payRecordsDialogVisible=!0},getAllShifts:function(){var t=this;this.axios({method:"get",url:"/administrator/view-shifts"}).then(function(e){if(200==e.status)if(0==e.data.code){t.allShifts=[];for(var a=0;a<e.data.data.length;a++)t.allShifts.push({value:e.data.data[a].id,label:ut[e.data.data[a].dayOfTheWeek-1]+" "+e.data.data[a].location+" "+e.data.data[a].startTime+"-"+e.data.data[a].endTime+" "+e.data.data[a].hourlyPay})}else t.$message.error(e.data.message);else t.$message.error("未知错误")})},getRegularShifts:function(){var t=this;this.axios({method:"post",url:"/administrator/view-regular-shifts-by-student-id",data:{studentId:this.assignShiftForm.studentId}}).then(function(e){if(200==e.status)if(0==e.data.code){t.shifts=e.data.data;for(var a=0;a<t.shifts.length;a++)t.shifts[a].shift.dayOfTheWeek=ut[t.shifts[a].shift.dayOfTheWeek-1]}else t.$message.error(e.data.message);else t.$message.error("未知错误")})},getHistory:function(){var t=this;this.axios({method:"post",url:"/administrator/view-takes-by-student-id",data:{studentId:this.assignShiftForm.studentId}}).then(function(e){200==e.status?0==e.data.code?t.history=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},submitAssignShiftForm:function(){var t=this;this.axios({method:"post",url:"/administrator/give-shift-by-date-range",data:{studentId:this.assignShiftForm.studentId,shiftId:this.assignShiftForm.shiftId,startDate:this.assignShiftForm.dateRange[0].getFullYear()+"-"+lt[this.assignShiftForm.dateRange[0].getMonth()]+"-"+dt[this.assignShiftForm.dateRange[0].getDate()-1],endDate:this.assignShiftForm.dateRange[1].getFullYear()+"-"+lt[this.assignShiftForm.dateRange[1].getMonth()]+"-"+dt[this.assignShiftForm.dateRange[1].getDate()-1]}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("分配成功"),t.getRegularShifts(t.assignShiftForm.studentId),t.assignShiftForm.shift=null):t.$message.error(e.data.message):t.$message.error("未知错误")})},getPointRecords:function(){var t=this;this.axios({method:"post",url:"/administrator/view-point-records-by-student-id",data:{studentId:this.pointRecordsForm.studentId}}).then(function(e){200==e.status?0==e.data.code?t.pointsHistory=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},submitPointRecordsForm:function(){var t=this;this.axios({method:"post",url:"/administrator/add-point-record",data:{studentId:this.pointRecordsForm.studentId,points:this.pointRecordsForm.points,reason:this.pointRecordsForm.reason}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("添加成功"),t.getPointRecords(t.pointRecordsForm.studentId),t.getStudents(),t.pointRecordsForm.points=null,t.pointRecordsForm.reason=null):t.$message.error(e.data.message):t.$message.error("未知错误")})},getPayRecords:function(){var t=this;this.axios({method:"post",url:"/administrator/view-pay-records-by-student-id",data:{studentId:this.payRecordsForm.studentId}}).then(function(e){200==e.status?0==e.data.code?t.payHistory=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},submitPayRecordsForm:function(){var t=this;this.axios({method:"post",url:"/administrator/add-pay-record",data:{studentId:this.payRecordsForm.studentId,amount:this.payRecordsForm.amount,reason:this.payRecordsForm.reason}}).then(function(e){200==e.status?0==e.data.code?(t.$message.success("添加成功"),t.getPayRecords(t.payRecordsForm.studentId),t.payRecordsForm.amount=null,t.payRecordsForm.reason=null):t.$message.error(e.data.message):t.$message.error("未知错误")})}}},ct=mt,ht=Object(n["a"])(ct,nt,it,!1,null,null,null),pt=ht.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"export"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){return t.exportHistory()}}}),a("el-table",{attrs:{data:t.history,border:""}},[a("el-table-column",{attrs:{prop:"student.studentId",label:"学号",width:"100"}}),a("el-table-column",{attrs:{prop:"student.name",label:"姓名",width:"100"}}),a("el-table-column",{attrs:{prop:"duration",label:"时长",width:"100"}}),a("el-table-column",{attrs:{prop:"amount",label:"工资",width:"150"}}),a("el-table-column",{attrs:{prop:"payRecord",label:"奖惩",width:"150"}}),a("el-table-column",{attrs:{prop:"total",label:"总额",width:"150"}})],1)],1)},bt=[],gt=["01","02","03","04","05","06","07","08","09","10","11","12"],yt=["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"],vt={name:"Export",data:function(){return{dateRange:null,history:null}},methods:{exportHistory:function(){var t=this;this.axios({method:"post",url:"/administrator/export-history",data:{startDate:this.dateRange[0].getFullYear()+"-"+gt[this.dateRange[0].getMonth()]+"-"+yt[this.dateRange[0].getDate()-1],endDate:this.dateRange[1].getFullYear()+"-"+gt[this.dateRange[1].getMonth()]+"-"+yt[this.dateRange[1].getDate()-1]}}).then(function(e){200==e.status?0==e.data.code?t.history=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})}}},wt=vt,Rt=Object(n["a"])(wt,ft,bt,!1,null,null,null),Ft=Rt.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"手机"}},[a("el-input",{model:{value:t.telephone,callback:function(e){t.telephone=e},expression:"telephone"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.modifyTelephone()}}},[t._v("修改手机")])],1)],1),a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"旧密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.oldPassword,callback:function(e){t.oldPassword=e},expression:"oldPassword"}})],1),a("el-form-item",{attrs:{label:"新密码"}},[a("el-input",{attrs:{type:"password"},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.modifyPassword()}}},[t._v("修改密码")])],1)],1)],1)},xt=[],$t={name:"Login",data:function(){return{telephone:null,oldPassword:null,newPassword:null}},created:function(){var t=this;this.axios({method:"get",url:"/settings/view-telephone"}).then(function(e){200==e.status?0==e.data.code?t.telephone=e.data.data:t.$message.error(e.data.message):t.$message.error("未知错误")})},methods:{modifyTelephone:function(){var t=this;this.axios({method:"post",url:"/settings/modify-telephone",data:{telephone:this.telephone}}).then(function(e){200==e.status?0==e.data.code?t.$message.success("修改成功"):t.$message.error(e.data.message):t.$message.error("未知错误")})},modifyPassword:function(){var t=this;this.axios({method:"post",url:"/settings/modify-password",data:{oldPassword:this.oldPassword,newPassword:this.newPassword}}).then(function(e){200==e.status?0==e.data.code?t.$message.success("修改成功"):t.$message.error(e.data.message):t.$message.error("未知错误")})}}},_t=$t,Dt=Object(n["a"])(_t,kt,xt,!1,null,null,null),It=Dt.exports;s["default"].use(c["a"]);var Tt=new c["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",components:{main:y}},{path:"/librarian/attendance",name:"attendence",components:{header:x,main:P}},{path:"/librarian/relay",name:"relay",components:{header:x,main:E}},{path:"/librarian/history",name:"history",components:{header:x,main:U}},{path:"/librarian/settings",name:"librarian_settings",components:{header:x,main:It}},{path:"/administrator/shifts",name:"shifts",components:{header:Z,main:ot}},{path:"/administrator/students",name:"students",components:{header:Z,main:pt}},{path:"/administrator/export",name:"export",components:{header:Z,main:Ft}},{path:"/administrator/settings",name:"administrator_settings",components:{header:Z,main:It}}]}),St=a("bc3a"),Pt=a.n(St),Ot=a("4328"),Ht=a.n(Ot);s["default"].config.productionTip=!1,s["default"].prototype.axios=Pt.a,s["default"].prototype.qs=Ht.a,new s["default"]({router:Tt,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=app.edcf4e7b.js.map