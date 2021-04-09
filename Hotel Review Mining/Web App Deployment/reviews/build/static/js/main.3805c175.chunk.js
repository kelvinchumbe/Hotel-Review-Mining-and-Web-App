(this.webpackJsonpreviews=this.webpackJsonpreviews||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),r=a(70),n=a.n(r),c=(a(80),a.p,a(81),a(8)),o=a(25),m=a(2),l=a(3),d=a(18),u=a(6),j=a(7),h=a(9),p=a(20),v=a(1),b=function(e){return Object(v.jsx)("div",{children:e.state.comments.map((function(e,t){return Object(v.jsxs)("div",{className:"review",children:[Object(v.jsx)("div",{className:"review-item",children:e.name}),Object(v.jsx)("div",{className:"review-item",children:Object(c.a)(Array(parseInt(e.rating))).map((function(e,t){return Object(v.jsx)("i",{class:"icon-star"},t)}))}),Object(v.jsx)("div",{className:"review-item review-summary",children:e.review_summary}),Object(v.jsx)("div",{className:"review-item",children:e.review}),Object(v.jsxs)("div",{className:"review-item",children:[" ",Object(v.jsx)("b",{children:"Date: "}),e.date]})]})}))})},w=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(m.a)(this,a),(s=t.call(this,e)).state={review:{},comments:[{date:"March 4, 2021",name:"Frederick Jones",rating:"5",review:"Hotel was absolutely great, staff were very friendly and helpful. Loved the food (Chef Jane in the breakfast area was very generous). Room was clean and sanitized. I asked for a car to take me to the airport, they had few options. I paid for a BMW X1 and they upgraded my ride to a BMW X5. Only concern was that the AC in the room was very hot.. I tried to work it out more than once and still same result.",review_summary:"One night layover",trip_type:"Traveled as a couple"},{date:"March 11, 2021",name:"James C.",rating:"2",review:"Regretfully visited Villa Rosa with a paid upgrade to premium room. Unfortunately construction noise which will likely continue for some time was unbearable. Downgraded to standard room at the back but not much assistance and a meager few dollars refund, not commiserate with what was paid. Would highly suggest the property to warn of the issue in advance in all transparency rather than having disappointed and irritated guests.",review_summary:"The Noise",trip_type:"Traveled on business"}]},s.postReview=s.postReview.bind(Object(d.a)(s)),s}return Object(l.a)(a,[{key:"postReview",value:function(e){var t=this;fetch("https://hotel-reviews-rating.herokuapp.com/post-review",{method:"POST",headers:{"Content-Type":"application/json"},cors:"no-cors",credentials:"same-origin",body:JSON.stringify({review:e.review})}).then((function(e){return e.json()})).then((function(a){e=Object(o.a)(Object(o.a)({},e),{},{rating:a.rating}),t.setState({comments:[].concat(Object(c.a)(t.state.comments),[e])})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"review-page",children:[Object(v.jsx)("div",{className:"header",children:Object(v.jsx)("img",{src:"../../assets/hotel_header_1.jpg",alt:"Header-logo",className:"header-image"})}),Object(v.jsxs)("div",{className:"comments-sect",children:[Object(v.jsx)("div",{className:"input-comments",children:Object(v.jsx)(h.d,{initialValues:{name:"",review:"",date:"",review_summary:"",trip_type:""},validationSchema:p.a({name:p.b().required("You must enter your name to post a review"),review:p.b().required("You must enter a review post it"),review_summary:p.b().required("You must enter areview summary to post a review"),trip_type:p.b().required("You must enter thr type of trip you had")}),onSubmit:function(t,a){a.setSubmitting;t=Object(o.a)(Object(o.a)({},t),{},{date:new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}).format(new Date)}),e.postReview(t)},children:Object(v.jsxs)(h.c,{className:"form",children:[Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsx)("label",{htmlFor:"name",className:"input-description-details",children:"Name:"}),Object(v.jsx)(h.b,{type:"text",name:"name",className:"field-input"}),Object(v.jsx)(h.a,{name:"review_summary",className:"form-error-messages"})]}),Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsx)("label",{htmlFor:"review_summary",className:"input-description-details",children:"Review Summary:"}),Object(v.jsx)(h.b,{type:"text",name:"review_summary",className:"field-input"}),Object(v.jsx)(h.a,{name:"review_summary",className:"form-error-messages"})]}),Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsx)("label",{htmlFor:"review",className:"input-description-details",children:"Review:"}),Object(v.jsx)(h.b,{as:"textarea",name:"review",className:"field-input"}),Object(v.jsx)(h.a,{name:"review",className:"form-error-messages"})]}),Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsx)("label",{htmlFor:"trip_type",className:"input-description-details",children:"Trip Type:"}),Object(v.jsx)(h.b,{as:"select",name:"trip_type",className:"field-input",children:["Traveled as a couple","Traveled on business","Traveled with friends","Traveled on vacation"].map((function(e,t){return Object(v.jsxs)("option",{value:e,className:"options",children:[" ",e," "]},t)}))}),Object(v.jsx)(h.a,{name:"trip_type",className:"form-error-messages"})]}),Object(v.jsx)("button",{type:"submit",className:"submit",children:"Comment"})]})})}),Object(v.jsx)("div",{className:"display-comments",children:Object(v.jsx)(b,{state:this.state})})]})]})}}]),a}(s.Component);var O=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(w,{})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),r(e),n(e)}))};n.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(O,{})}),document.getElementById("root")),f()},80:function(e,t,a){},81:function(e,t,a){}},[[183,1,2]]]);
//# sourceMappingURL=main.3805c175.chunk.js.map