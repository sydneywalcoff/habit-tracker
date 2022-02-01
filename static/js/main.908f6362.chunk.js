(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);a(19);var n=a(14),c=a.n(n),s=a(1),r=a.n(s),i=a(16),o=a.n(i),l=(a(24),a(25),a(0)),d=function(){return Object(l.jsx)("header",{className:"my-3",children:Object(l.jsx)("h1",{className:"text-center",children:"habit tracker."})})},j=a(7),b=function(){var e,t=j.DateTime.local(),a=t.weekdayLong.toLowerCase();c()("#currentDay").text(a);var n=t.hour;return n<12?e="morning":12<=n&&n<18?e="afternoon":18<=n&&(e="evening"),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h5",{className:"text-center",children:["good ",Object(l.jsx)("span",{id:"greeting",children:e}),", sydney!"]}),Object(l.jsxs)("h6",{className:"text-center",children:["today is ",Object(l.jsx)("span",{id:"currentDay",children:a}),"."]})]})},h=a(9),u=a(6),x=function(e){e.length?localStorage.setItem("habits",JSON.stringify(e)):localStorage.removeItem("habits")},O=j.DateTime.local().weekday,m=j.DateTime.local().month,f=j.DateTime.local().day,g=j.DateTime.local().weekNumber,p=j.DateTime.local().year,v={1:"31",2:"28",3:"31",4:"30",5:"31",6:"30",7:"31",8:"31",9:"30",10:"31",11:"30",12:"31"},y=function(e){return 1===O?"".concat(m,"/").concat(f-e):f-O+1+e===0?"".concat(m-1,"/").concat(v[m-1]):f-O+1+e>v[m]?m+1>12?"1/".concat(f-O+1+e-parseInt(v[12])):"".concat(m+1,"/").concat(f-O+1+e-parseInt(v[m])):"".concat(m,"/").concat(f-O+1+e)},k=a(31),S=a(32),N=function(e){var t=e.buttonState,a=e.setButtonState,n=e.setFormState,c=e.handleChange,s=e.habits,r=e.formValue,i=e.setHabitsState,o=e.saveHabits,d=function(){if("add"===t){var e=Object(h.a)(s),c={habit:r,complete:!1};console.log(c),e.push(r),i(e),o(e)}n(""),a("")};return"add"===t?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k.a,{children:Object(l.jsx)(k.a.Group,{children:Object(l.jsx)(k.a.Control,{as:"textarea",rows:2,onChange:c})})}),Object(l.jsx)(S.a,{variant:"outline-dark",className:"mx-1",id:"save-btn",onClick:d,children:"save."})]}):"edit"===t?Object(l.jsx)(S.a,{variant:"outline-dark",className:"mx-1",id:"save-btn",onClick:d,children:"save."}):"delete"===t?Object(l.jsx)(S.a,{variant:"outline-dark",className:"mx-1",onClick:function(){a(""),n("")},children:"done."}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(S.a,{variant:"outline-dark",className:"mx-1",id:"add-btn",onClick:function(){a("add")},children:"add."}),Object(l.jsx)(S.a,{variant:"outline-dark",className:"btn btn-outline-dark mx-1",id:"edit-btn",onClick:function(){a("edit"),n("edit")},children:"edit."}),Object(l.jsx)(S.a,{variant:"outline-dark",className:"btn btn-outline-dark mx-1",onClick:function(){n("delete"),a("delete")},children:"delete."})]})},C=function(e){var t=e.formState,a=e.handleChange,n=e.habits,c=e.saveHabits,r=e.setHabitsState,i=e.setButtonState,o=e.daysOfTheWeek,d=e.date,j=e.year,b=(e.weekProgress,Object(s.useState)(localStorage.getItem("weekly progress")?JSON.parse(localStorage.getItem("weekly progress")):[])),x=Object(u.a)(b,2);x[0],x[1];if("edit"===t)return Object(l.jsx)("tbody",{children:n.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"row",id:t,children:Object(l.jsx)(k.a,{children:Object(l.jsx)(k.a.Group,{children:Object(l.jsx)(k.a.Control,{type:"text",placeholder:e,onChange:a,habit:e})})})}),o.map((function(e,t){return Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",value:""})},t)}))]},t)}))});var O=function(e){if("delete"===t){return Object(l.jsx)(S.a,{variant:"outline-dark",className:"btn btn-outline-dark",onClick:function(e){var t=parseInt(e.target.attributes.i.textContent),a=Object(h.a)(n);a.splice(t,1),r(a),c(a),0===a.length&&i("add")},i:e,children:"delete."})}};return Object(l.jsx)("tbody",{children:n.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("th",{scope:"row",className:"d-flex justify-content-between",children:[e,":",O(t)]}),o.map((function(e,a){return Object(l.jsx)("td",{className:"text-center",children:Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"".concat(d(t),"/").concat(j),i:t,j:a})},a)}))]},t)}))})},w=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),r=Object(u.a)(c,2),i=r[0],o=r[1],d=Object(s.useState)(""),j=Object(u.a)(d,2),b=j[0],m=j[1],f=["Mon","Tues","Wed","Thu","Fri","Sat","Sun"],v=Object(s.useState)(localStorage.getItem("habits")?JSON.parse(localStorage.getItem("habits")):[]),k=Object(u.a)(v,2),S=k[0],w=k[1],T=Object(s.useState)({}),I=Object(u.a)(T,2),D=(I[0],I[1],{weekNumber:g,dayOfWeek:O,days:[]}),F=Object(h.a)(D.days);f.forEach((function(e){var t=[],a={day:e,habits:t};S.forEach((function(e){var a={habit:e,complete:!1};t.push(a)})),F.push(a)})),D.days=F;var H=function(e){if("add"===a&&o(e.target.value),"edit"===a){var t=e.target.value,n=e.target.attributes.habit.textContent,c=S.findIndex((function(e){return e===n})),s=Object(h.a)(S);s[c]=t,w(s),x(s)}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{scope:"col",children:"Habit:"}),f.map((function(e,t){return Object(l.jsxs)("th",{scope:"col",className:"text-center",children:[e,": ",Object(l.jsx)("span",{id:e,children:y(t)})]},t)}))]})}),Object(l.jsx)(C,{formState:b,handleChange:H,habits:S,saveHabits:x,setHabitsState:w,setButtonState:n,daysOfTheWeek:f,date:y,year:p,weekProgress:D})]}),Object(l.jsxs)("div",{id:"buttonDiv",className:"container justify-content-center w-25",children:[0===S.length&&Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("p",{className:"text-center my-5",children:"You haven't added any habits yet :("})}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)(N,{buttonState:a,setButtonState:n,setFormState:m,handleChange:H,formValue:i,habits:S,saveHabits:x,setHabitsState:w})})]})]})},T=function(){return Object(l.jsx)("footer",{className:"mt-auto p-2",children:Object(l.jsxs)("h6",{className:"text-center",children:["sydney walcoff ",Object(l.jsxs)("span",{id:"copywrite",children:[j.DateTime.local().year,"\xa9"]})]})})};var I=function(){return Object(l.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[Object(l.jsx)(d,{}),Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(b,{}),Object(l.jsx)(w,{})]}),Object(l.jsx)(T,{})]})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root")),D()}},[[29,1,2]]]);
//# sourceMappingURL=main.908f6362.chunk.js.map