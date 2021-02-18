(this["webpackJsonpproject2-frontend"]=this["webpackJsonpproject2-frontend"]||[]).push([[0],{38:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),r=n(32),i=n.n(r),c=(n(38),n(2)),o=n(4),u=n(5),d=n(7),l=n(6),h=n(3),j=n.n(h),b=n(11),p=n(9),O=n(0),f=function(t){return Object(O.jsx)("div",{children:Object(O.jsxs)("nav",{children:[Object(O.jsx)(b.b,{to:"/",children:"Home"}),t.isLoggedIn&&Object(O.jsxs)("span",{children:[Object(O.jsx)(b.b,{to:"/wishlist",children:"Your List"}),Object(O.jsx)(b.b,{to:"/events",children:"Your Events"}),Object(O.jsxs)(b.b,{to:"/logout",children:["Log Out ",t.isLoggedIn.name]})]}),!t.isLoggedIn&&Object(O.jsxs)("span",{children:[Object(O.jsx)(b.b,{to:"/login",children:"Log In"}),Object(O.jsx)(b.b,{to:"/signup",children:"Sign Up"})]})]})})},v=n(16),m={url:{API_URL:"https://agile-tor-91190.herokuapp.com/"}},g=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,s=e.value;a.setState(Object(v.a)({},n,s))},a.handleSubmit=function(t){t.preventDefault();var e=a.state,n={name:e.name,password:e.password};j.a.post("http://localhost:3000/login",n,{withCredentials:!0}).then((function(t){t.data.logged_in?(a.props.handleLogin(t.data),a.redirect()):a.setState({errors:t.data.errors})})).catch((function(t){return console.log("api errors:",t)}))},a.redirect=function(){a.props.history.push("/")},a.handleErrors=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{children:a.state.errors.map((function(t){return Object(O.jsx)("li",{children:t},t)}))})})},a.state={name:"",password:"",errors:""},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=(t.email,t.password);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Log In"}),Object(O.jsx)("p",{children:this.state.errors}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{placeholder:"name",type:"text",name:"name",value:e,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"password",type:"password",name:"password",value:n,onChange:this.handleChange}),Object(O.jsx)("button",{placeholder:"submit",type:"submit",children:"Log In"}),Object(O.jsxs)("div",{children:["or ",Object(O.jsx)(b.b,{to:"/signup",children:"sign up"})]})]})]})}}]),n}(a.Component),x=m.url.API_URL+"users",_=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleChange=function(t){var e=t.target,n=e.name,s=e.value;a.setState(Object(v.a)({},n,s))},a.handleSubmit=function(t){t.preventDefault();var e=a.state,n={name:e.name,email:e.email,password:e.password,password_confirmation:e.password_confirmation};j.a.post(x,{user:n},{withCredentials:!0}).then((function(t){"created"===t.data.status?(a.props.handleLogin(t.data),a.redirect()):(console.log(t.data.errors),a.setState({errors:t.data.errors}))})).catch((function(t){return console.log("api errors:",t)}))},a.redirect=function(){a.props.history.push("/")},a.handleErrors=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{children:a.state.errors.map((function(t){return Object(O.jsx)("li",{children:t},t)}))})})},a.state={name:"",email:"",password:"",password_confirmation:"",errors:[]},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.email,a=t.password,s=t.password_confirmation;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Sign Up"}),this.handleErrors(),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{placeholder:"name",type:"text",name:"name",value:e,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"email",type:"email",name:"email",value:n,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"password",type:"password",name:"password",value:a,onChange:this.handleChange}),Object(O.jsx)("input",{placeholder:"password confirmation",type:"password",name:"password_confirmation",value:s,onChange:this.handleChange}),Object(O.jsx)("button",{placeholder:"submit",type:"submit",children:"Sign Up"})]})]})}}]),n}(a.Component),S=n(8),C=m.url.API_URL+"restaurants.json";function y(t,e,n){console.log("AddToWishList()"),console.log(t);var a={name:t.name,longitude:t.geometry.location.lng,latitude:t.geometry.location.lat,address:t.formatted_address,price_level:t.price_level,rating:t.rating,website:t.website,user_id:e,place_id:t.place_id};j.a.post(C,a).then((function(t){n(t.data.id)}))}var k=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={isSaved:!1},a.getAllRestaurants=a.getAllRestaurants.bind(Object(S.a)(a)),a.isRestaurantSaved=a.isRestaurantSaved.bind(Object(S.a)(a)),a}return Object(u.a)(n,[{key:"getAllRestaurants",value:function(t){var e=this;j.a.get(C).then((function(n){var a=n.data.filter((function(t){return t.user&&t.user.id===e.props.user.id}));t(a)}))}},{key:"isRestaurantSaved",value:function(){var t=this;this.getAllRestaurants((function(e){e!==[]&&(e.find((function(e){return e.place_id===t.props.restaurant.place_id}))?t.setState({isSaved:!0}):t.setState({isSaved:!1}))}))}},{key:"componentDidMount",value:function(){this.isRestaurantSaved()}},{key:"componentDidUpdate",value:function(t){this.props.restaurant!==t.restaurant&&this.isRestaurantSaved()}},{key:"renderContent",value:function(){var t=this;return Object(O.jsx)("div",{children:this.state.isSaved?Object(O.jsx)("button",{children:"SAVED!"}):Object(O.jsx)("button",{onClick:function(){return y(t.props.restaurant,t.props.user.id,(function(){t.setState({isSaved:!0})}))},children:"Add to your Wishlist"})})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:this.renderContent()})}}]),n}(a.Component);var L=function(t){return Object(O.jsx)("button",{children:Object(O.jsx)("a",{href:"/restaurant/"+t.restaurant.id+"/create-event",children:"Create Event"})})},R=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t)).state={restaurant:{}},console.log(t.match.params.id);var s,r=(s=t.match.params.id,m.url.API_URL+"restaurants/".concat(s));console.log(r);return console.log("fetchRestaurant()"),j.a.get(r).then((function(t){a.setState({restaurant:t.data.restaurants})})),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:this.state.restaurant.name}),Object(O.jsxs)("p",{children:["Address: ",this.state.restaurant.address]}),Object(O.jsxs)("p",{children:["Website: ",Object(O.jsx)("a",{href:this.state.restaurant.website,children:this.state.restaurant.website})]}),Object(O.jsxs)("p",{children:["Contact: ",this.state.restaurant.contact]}),Object(O.jsxs)("p",{children:["Rating: ",this.state.restaurant.rating,"/5"]}),Object(O.jsxs)("p",{children:["Price level: ",this.state.restaurant.price_level,"/5"]}),Object(O.jsx)("p",{children:"Restaurant's photo coming soon"}),Object(O.jsx)(L,{restaurant:this.state.restaurant})]})}}]),n}(a.Component),I=R,w=function(t){return Object(O.jsx)("div",{children:t.chats.map((function(t){return Object(O.jsxs)("p",{children:[t.user_id,": ",t.content]},t.id)}))})},A=m.url.API_URL+"chats.json",D=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t)).state={id:a.props.event_id,chats:[]};return function t(){j.a.get(A).then((function(e){var n=e.data.filter((function(t){return t.event_id===a.state.id}));a.setState({chats:n}),setTimeout(t,4e3)}))}(),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Testing"}),Object(O.jsx)(w,{chats:this.state.chats})]})}}]),n}(a.Component),E=m.url.API_URL+"chats",U=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t))._handleSubmit=function(t){t.preventDefault(),a.setState({content:""}),j.a.post(E,{user_id:a.props.user.id,event_id:a.props.event_id,content:a.state.content}).then((function(t){console.log(t)}),(function(t){console.log("CreateChat error",t)}))},a.state={content:""},a._handleChange=a._handleChange.bind(Object(S.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(S.a)(a)),a}return Object(u.a)(n,[{key:"_handleChange",value:function(t){this.setState({content:t.target.value})}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this._handleSubmit,children:[Object(O.jsx)("textarea",{name:"",id:"",cols:"40",rows:"5",onChange:this._handleChange,value:this.state.content}),Object(O.jsx)("input",{type:"submit",value:"Post"})]})})}}]),n}(a.Component),q=function(t){return m.url.API_URL+"events/".concat(t,".json")},T=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;Object(o.a)(this,n),(a=e.call(this,t))._handleToggle=function(t){t.preventDefault(),a.setState({edit:!a.state.edit})},a._handleEdit=function(t){t.preventDefault();var e={title:t.target.title.value,date:t.target.date.value,introduction:t.target.introduction.value},n=q(a.state.id);j.a.put(n,e).then((function(t){console.log(t)})),a.setState({edit:!1,title:e.title,date:e.date,introduction:e.introduction})},a.state={edit:!1,id:a.props.event_id,title:"",introduction:"",date:"",creator:{},restaurant:{},attendants:[]},a._handleToggle=a._handleToggle.bind(Object(S.a)(a)),a._handleEdit=a._handleEdit.bind(Object(S.a)(a)),a._handleDelete=a._handleDelete.bind(Object(S.a)(a)),a.renderRecord=a.renderRecord.bind(Object(S.a)(a)),a.renderForm=a.renderForm.bind(Object(S.a)(a));var s=q(a.props.event_id);return j.a.get(s).then((function(t){var e=t.data.event;a.setState({title:e.title,introduction:e.introduction,date:e.date,creator:e.user,restaurant:e.restaurant,attendants:e.attendants})})),a}return Object(u.a)(n,[{key:"_handleDelete",value:function(){var t=q(this.state.id);j.a.delete(t,{params:{id:this.state.id}}).then((function(t){console.log(t)}))}},{key:"renderRecord",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Event: ",this.state.title]}),Object(O.jsxs)("h3",{children:["Date: ",this.state.date," || Creator: ",this.state.creator.name]}),Object(O.jsxs)("h3",{children:["Venue: ",this.state.restaurant.name]}),Object(O.jsxs)("h4",{children:["Attendants:",this.state.attendants.map((function(t){return t.user.name})).join(", ")]}),Object(O.jsxs)("p",{children:["Summary: ",this.state.introduction]}),Object(O.jsx)("button",{onClick:this._handleToggle,children:" Edit this event"}),Object(O.jsx)("button",{onClick:this._handleDelete,children:" Delete this event"}),Object(O.jsx)(D,{event_id:this.state.id}),Object(O.jsx)(U,Object(c.a)(Object(c.a)({},this.props),{},{event_id:this.state.id}))]})}},{key:"findAttendants",value:function(t,e){return e.filter((function(e){var n=new RegExp(t,"gi");return e.name.match(n)}))}},{key:"renderForm",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Edit Event"}),Object(O.jsxs)("h3",{children:["Venue:",this.state.restaurant.name]}),Object(O.jsxs)("form",{onSubmit:this._handleEdit,children:[Object(O.jsx)("label",{children:"Title"}),Object(O.jsx)("input",{name:"title",defaultValue:this.state.title,required:!0}),Object(O.jsx)("label",{children:"Date"}),Object(O.jsx)("input",{placeholder:"2020-12-31",name:"date",defaultValue:this.state.date,required:!0}),Object(O.jsx)("label",{children:"Summary"}),Object(O.jsx)("textarea",{name:"introduction",defaultValue:this.state.introduction}),Object(O.jsx)("button",{children:"Update"})]})]})}},{key:"render",value:function(){return this.state.edit?this.renderForm():this.renderRecord()}}]),n}(a.Component),P=function(t){var e=Object(p.f)().id;return Object(O.jsx)(T,Object(c.a)(Object(c.a)({},t),{},{event_id:parseInt(e)}))},N=n(23),F="http://localhost:3000/events",M=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t))._handleChange=function(t){var e=t.target,n=e.name,s=e.value;a.setState(Object(v.a)({},n,s))},a._handleSubmit=function(t){t.preventDefault();var e=a.state,n=e.title,s=e.date,r=e.introduction,i=e.user,c=e.restaurant_id,o=e.attendants,u=(e._,{title:n,date:s,introduction:r,user:i,restaurant_id:c});console.log(u),j.a.post(F,u).then((function(t){console.log(t),a.addAttendants(o,u)}))},a._findAttendants=function(t){if(t.preventDefault(),""!==t.target.value){var e=t.target.value;j.a.get("http://localhost:3000/users").then((function(t){var n=t.data.users.filter((function(t){var n=new RegExp(e,"gi");return t.name.match(n)}));a.setState({attendants_search:n})}))}else a.setState({attendants_search:[]})},a._handleCheckbox=function(t){t.preventDefault();var e=Object(N.a)(a.state.attendants_search),n=Object(N.a)(a.state.attendants),s=Number(t.target.id);if(!0===t.target.checked){var r=e.find((function(t){return t.id===s}));n=n.concat(r),a.setState({attendants:n})}else{var i=n.findIndex((function(t){return t.id===s}));-1!==i&&(n.splice(i,1),a.setState({attendants:n}))}},a.state={title:"",date:"",introduction:"",user:a.props.user,restaurant_id:a.props.restaurant_id,attendants:[],attendants_search:[]},a._handleChange=a._handleChange.bind(Object(S.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(S.a)(a)),a._findAttendants=a._findAttendants.bind(Object(S.a)(a)),a._handleCheckbox=a._handleCheckbox.bind(Object(S.a)(a)),a}return Object(u.a)(n,[{key:"addAttendants",value:function(t,e){console.log(t),console.log(this.state.attendants),j.a.get(F+".json").then((function(n){console.log(n.data);var a=n.data.find((function(t){return t.title===e.title}));console.log(a),t.map((function(t){var e={user_id:t.id,event_id:a.id};console.log(e),j.a.post("http://localhost:3000/attendants",e).then((function(t){console.log(t)}))}))}))}},{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Create Event"}),Object(O.jsx)("h3",{children:"Venue:"}),Object(O.jsxs)("form",{onSubmit:this._handleSubmit,children:[Object(O.jsx)("label",{children:"Title"}),Object(O.jsx)("input",{name:"title",onChange:this._handleChange,required:!0}),Object(O.jsx)("label",{children:"Date"}),Object(O.jsx)("input",{placeholder:"2020-12-31",name:"date",onChange:this._handleChange,required:!0}),Object(O.jsx)("label",{children:"Summary"}),Object(O.jsx)("textarea",{name:"introduction",onChange:this._handleChange}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:"Attendants"}),Object(O.jsx)("input",{name:"attendants",onChange:this._findAttendants}),Object(O.jsxs)("ul",{children:[this.state.attendants.map((function(e){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",id:e.id,onChange:t._handleCheckbox,checked:!0},e.id),e.name]})})),this.state.attendants_search.map((function(e){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",id:e.id,onChange:t._handleCheckbox},e.id),e.name]})}))]})]}),Object(O.jsx)("button",{children:"Create Event"})]})]})}}]),n}(a.Component),V=function(t){var e=Object(p.f)().id;return Object(O.jsx)(M,{restaurant_id:parseInt(e),user:t.user})};var B=function(t){return Object(O.jsx)("button",{onClick:function(){y(t.restaurant,t.user.id,(function(e){console.log(e),t.history.push("/restaurant/".concat(e,"/create-event"))}))},children:"Add to list and create Event"})},z=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={restaurant:t.restaurant},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[this.props.restaurant&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:this.props.restaurant.name}),this.props.restaurant.name&&Object(O.jsxs)("div",{children:[Object(O.jsx)(k,Object(c.a)(Object(c.a)({},this.props),{},{restaurant:this.props.restaurant})),Object(O.jsx)(B,Object(c.a)(Object(c.a)({},this.props),{},{restaurant:this.props.restaurant}))]}),Object(O.jsx)("p",{children:this.props.restaurant.formatted_address}),this.props.restaurant.rating&&Object(O.jsxs)("p",{children:["Rating: ",this.props.restaurant.rating]}),this.props.restaurant.user_ratings_total&&Object(O.jsxs)("p",{children:["Total user rating: ",this.props.restaurant.user_ratings_total]})]}),!this.props.restaurant&&this.props.searchButtonClicked&&Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"...No such thing on Earth, dude!"})})]})}}]),n}(a.Component),J=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={query:"",isQueryChanged:!1},t._handleInput=t._handleInput.bind(Object(S.a)(t)),t._handleSubmit=t._handleSubmit.bind(Object(S.a)(t)),t.clearInput=t.clearInput.bind(Object(S.a)(t)),t}return Object(u.a)(n,[{key:"_handleInput",value:function(t){this.setState({query:t.target.value,isQueryChanged:!0})}},{key:"_handleSubmit",value:function(t){t.preventDefault(),this.setState({isQueryChanged:!1}),!0===this.state.isQueryChanged?this.props.onSubmit(this.state.query):this.props.fetchRandomNum()}},{key:"clearInput",value:function(){this.setState({query:""})}},{key:"componentDidUpdate",value:function(t){console.log("My component was just updated"),console.log(this.props.random),this.props.random&&this.props.random!==t.random&&(console.log("SETSTATE"),this.setState({query:""}))}},{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this._handleSubmit,children:[Object(O.jsx)("input",{onInput:this._handleInput,value:this.state.query}),Object(O.jsxs)("button",{children:["Hmm...",this.state.query,"?"]})]})}}]),n}(a.Component),Q=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={restaurants:[],randomNum:0,searchButtonClicked:!1,random:!0},a.fetchRestaurants=a.fetchRestaurants.bind(Object(S.a)(a)),a.fetchRandomNum=a.fetchRandomNum.bind(Object(S.a)(a)),a.fetchRandomRestaurant=a.fetchRandomRestaurant.bind(Object(S.a)(a)),a._handleSubmit=a._handleSubmit.bind(Object(S.a)(a)),a}return Object(u.a)(n,[{key:"fetchRestaurants",value:function(t){var e=this;j.a.get(function(t){return["https://maps.googleapis.com/maps/api/place/textsearch/json?query=",t,"&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA"].join("")}(t)).then((function(t){e.setState({restaurants:t.data.results,searchButtonClicked:!0,isIncluded:!0,random:!1}),e.fetchRandomNum()}))}},{key:"fetchRandomRestaurant",value:function(t){var e=this;j.a.get(function(t){return["https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=",t,"&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,photos,price_level,user_ratings_total,types,place_id,geometry&key=AIzaSyDpF67gcwqJT5Lku1Aj-78unvq0OpKUNpA"].join("")}(t)).then((function(t){e.setState({restaurants:t.data.candidates,searchButtonClicked:!0,isIncluded:!0,random:!0}),e.fetchRandomNum()}))}},{key:"fetchRandomNum",value:function(){var t=Math.floor(Math.random()*this.state.restaurants.length);this.setState({randomNum:t})}},{key:"_handleSubmit",value:function(){var t=["cake","steak","cookies","ice cream","thai food","good pizza","vietnamese","korean","bbq"],e=t[Math.floor(Math.random()*t.length)];console.log(e),this.fetchRandomRestaurant(e)}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:this._handleSubmit,children:"Adventurous!"}),Object(O.jsx)("h3",{children:"or"}),Object(O.jsx)(J,Object(c.a)(Object(c.a)(Object(c.a)({},this.props),this.state),{},{onSubmit:this.fetchRestaurants,fetchRandomNum:this.fetchRandomNum})),Object(O.jsx)(z,Object(c.a)(Object(c.a)(Object(c.a)({},this.props),this.state),{},{restaurant:this.state.restaurants[this.state.randomNum]}))]})}}]),n}(a.Component);var W=function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:" I feel like"}),Object(O.jsx)(Q,Object(c.a)({},t))]})},Y=m.url.API_URL+"restaurants.json";function H(t){function e(e){var n,a=(n=t.restaurant.id,m.url.API_URL+"restaurants/".concat(n,".json"));j.a.delete(a,{id:t.restaurant.id}).then((function(t){e(t)}))}return Object(O.jsx)("button",{onClick:function(){e((function(){t.updateList()}))},children:"Remove from list"})}var K=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={restaurantList:[]},a.updateList=a.updateList.bind(Object(S.a)(a)),a.updateList(),a}return Object(u.a)(n,[{key:"updateList",value:function(){var t=this;j.a.get(Y).then((function(e){var n=e.data.filter((function(e){return e.user&&e.user.id===t.props.user.id}));t.setState({restaurantList:n})}))}},{key:"render",value:function(){var t=this;return Object(O.jsx)("div",{children:this.state.restaurantList.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.name}),Object(O.jsx)(L,{restaurant:e}),Object(O.jsx)(H,{updateList:t.updateList,restaurant:e}),Object(O.jsxs)("p",{children:["Address: ",e.address]}),Object(O.jsxs)("p",{children:["Website: ",Object(O.jsx)("a",{href:e.website,children:e.website})]}),Object(O.jsxs)("p",{children:["Contact: ",e.contact]}),Object(O.jsxs)("p",{children:["Rating: ",e.rating,"/5"]}),Object(O.jsxs)("p",{children:["Price level: ",e.price_level,"/5"]}),Object(O.jsx)("p",{children:"Restaurant's photo coming soon"})]},e.id)}))})}}]),n}(a.Component),G=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Your wishlist"}),Object(O.jsx)(K,Object(c.a)({},this.props))]})}}]),n}(a.Component),X=m.url.API_URL+"events.json",Z=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={eventList:[]},j.a.get(X).then((function(e){console.log(e);var n=e.data.filter((function(e){return e.user&&e.user.id===t.user.id}));console.log(n),a.setState({eventList:n}),console.log(a.state.eventList)})),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Your Events"}),this.state.eventList.map((function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:t.title}),Object(O.jsxs)("p",{children:["Introduction: ",t.introduction]}),Object(O.jsxs)("p",{children:["Date: ",t.date]})]})}))]})}}]),n}(a.Component),$=m.url.API_URL+"logged_in",tt=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).loginStatus=function(){j.a.get($,{withCredentials:!0}).then((function(t){t.data.logged_in?a.handleLogin(t):a.handleLogout()})).catch((function(t){return console.log("api errors:",t)}))},a.handleLogin=function(t){a.setState({isLoggedIn:!0,user:t.data.user})},a.handleLogout=function(){a.setState({isLoggedIn:!1,user:{}})},a.state={isLoggedIn:!1,user:{}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.loginStatus()}},{key:"render",value:function(){var t=this;return Object(O.jsx)("div",{children:Object(O.jsxs)(b.a,{children:[Object(O.jsx)(f,Object(c.a)(Object(c.a)({},this.props),{},{isLoggedIn:this.state.isLoggedIn})),Object(O.jsxs)(p.c,{children:[Object(O.jsx)(p.a,{exact:!0,path:"/",component:function(e){return Object(O.jsx)(W,Object(c.a)(Object(c.a)(Object(c.a)({},e),t.state),{},{isLoggedIn:t.state.isLoggedIn}))}}),Object(O.jsx)(p.a,{exact:!0,path:"/login",component:function(e){return Object(O.jsx)(g,Object(c.a)(Object(c.a)({},e),{},{handleLogin:t.handleLogin}))}}),Object(O.jsx)(p.a,{exact:!0,path:"/signup",component:function(e){return Object(O.jsx)(_,Object(c.a)(Object(c.a)({},e),{},{handleLogin:t.handleLogin}))}}),Object(O.jsx)(p.a,{exact:!0,path:"/event/:id",component:function(){return Object(O.jsx)(P,Object(c.a)({},t.state))}}),Object(O.jsx)(p.a,{exact:!0,path:"/restaurant/:id",component:I}),Object(O.jsx)(p.a,{exact:!0,path:"/wishlist",component:function(){return Object(O.jsx)(G,Object(c.a)({},t.state))}}),Object(O.jsx)(p.a,{exact:!0,path:"/events",component:function(){return Object(O.jsx)(Z,Object(c.a)({},t.state))}}),Object(O.jsx)(p.a,{exact:!0,path:"/restaurant/:id/create-event",component:function(){return Object(O.jsx)(V,Object(c.a)({},t.state))}})]})]})})}}]),n}(a.Component),et=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),r(t),i(t)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(tt,{})}),document.getElementById("root")),et()}},[[66,1,2]]]);
//# sourceMappingURL=main.345d01cd.chunk.js.map