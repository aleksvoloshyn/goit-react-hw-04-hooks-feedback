(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{124:function(e,t,n){e.exports={container:"Wrapper_container__GJzoy"}},130:function(e,t,n){},140:function(e,t){},142:function(e,t){},152:function(e,t){},154:function(e,t){},181:function(e,t){},183:function(e,t){},184:function(e,t){},189:function(e,t){},191:function(e,t){},197:function(e,t){},199:function(e,t){},218:function(e,t){},230:function(e,t){},233:function(e,t){},239:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(120),r=n.n(i),o=(n(130),n(11)),s=n(17),j=n.n(s),l=n(241),u=n(240),b=(n(119),n(1));function d(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{children:Object(b.jsx)(l.a,{horizontal:!0,children:t.map((function(e){return Object(b.jsx)("li",{style:{marginLeft:"18px"},children:Object(b.jsx)(u.a,{variant:"outline-info",type:"button",onClick:function(){return n(e)},children:e})},j.a.generate())}))})})})}var f=n(242);function h(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positiveFeedback;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(l.a,{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)(l.a.Item,{children:[Object(b.jsx)(f.a,{variant:"info",now:t,label:"%"}),"Good: ",t]})},j.a.generate()),Object(b.jsx)("li",{children:Object(b.jsxs)(l.a.Item,{children:[Object(b.jsx)(f.a,{now:n,label:"%",variant:"success"}),"Neutral: ",n]})},j.a.generate()),Object(b.jsx)("li",{children:Object(b.jsxs)(l.a.Item,{children:[Object(b.jsx)(f.a,{animated:!0,now:c,label:"%",variant:"danger"}),"Bad: ",c]})},j.a.generate()),Object(b.jsxs)("li",{children:["Total: ",a]},j.a.generate()),Object(b.jsxs)("li",{children:["Positive Feedback: ",i," %"]},j.a.generate())]})})})}var O=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})};function x(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:t}),n]})}function v(e){var t=e.children;return Object(b.jsx)("div",{children:t})}var g=n(124),p=n.n(g);function k(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),r=Object(o.a)(i,2),s=r[0],j=r[1],l=Object(c.useState)(0),u=Object(o.a)(l,2),f=u[0],g=u[1],k=["good","neutral","bad"],m=function(){return n+s+f};return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(v,{children:Object(b.jsxs)("div",{className:p.a.container,children:[Object(b.jsx)(x,{title:"Please leave feedbak",children:Object(b.jsx)(d,{options:k,onLeaveFeedback:function(e){switch(e){case"good":a((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":g((function(e){return e+1}));break;default:throw new Error}}})}),Object.values(k).find((function(e){return 0!==e}))?Object(b.jsx)(x,{title:"Statistics",children:Object(b.jsx)(h,{good:n,neutral:s,bad:f,total:m(),positiveFeedback:Math.round((n+s)/m()*100)})}):Object(b.jsx)(x,{children:Object(b.jsx)(O,{message:"No feedback given"})})]})})})}var m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,243)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),m()}},[[239,1,2]]]);
//# sourceMappingURL=main.cb80c7fa.chunk.js.map