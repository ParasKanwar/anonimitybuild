(this.webpackJsonpanonimityrecreating=this.webpackJsonpanonimityrecreating||[]).push([[21],{732:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return W}));var n=t(14),r=t(16),l=t.n(r),s=t(33),o=t(82),i=t(51),c=t(52),h=t(287),m=t(119),u=t(0),g=t.n(u),d=t(804),p=t.n(d),f=t(790),y=t(15),E=t(278),v=t(863),b=t(39),C=t(284),w=t(692),N=t(691),j=t(80),F=t(117),k=t(701),S=t(984),x=t(843),T=t(159),B=t(79),Y=t(143),L=t(144),R=t(844),O=t(845),U=t(84),I=t.n(U),P=Object(E.a)({palette:{primary:T.a,secondary:{main:B.a[600]},third:Y.a}}),W=function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={isFetchingEmail:!1,email:"",isEmailRight:"unknown",isUserNameRight:"unknown",firstName:"",LastName:"",password:"",repass:"",gender:"",username:"",dob:I()(new Date("12/30/2005")),yearofjoining:"2017",stage:1,college:"",phone:"",Branch:"",course:"",rollno:"",isLoading:!1,isError:!1,isMobileLoading:!1,phoneValid:"unknown",isUserNameLoading:!1},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleDateChange=n.handleDateChange.bind(Object(c.a)(n)),n.handleYearChange=n.handleYearChange.bind(Object(c.a)(n)),n.onBlur=n.onBlur.bind(Object(c.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n.onBlurUser=n.onBlurUser.bind(Object(c.a)(n)),n.onBlurPhone=n.onBlurPhone.bind(Object(c.a)(n)),n}return Object(i.a)(t,[{key:"handleSubmit",value:function(){var e=this;this.setState({isLoading:!0});var a=new Headers;console.log("hello"),a.append("content-type","application/json");var t=this.state,n=t.email,r=t.firstName,o=t.LastName,i=t.password,c=t.Branch,h=t.course,m=t.phone,u=t.rollno,g=t.college,d=t.yearofjoining,p=t.dob,f=t.username,E=t.gender,v=JSON.stringify({email:n,firstName:r,LastName:o,password:i,Branch:c,course:h,phone:m,rollno:u,college:g,yearofjoining:d,dob:p,username:f,gender:E}),b=new Request("".concat(y.default,"/user/signup"),{method:"POST",body:v,headers:a});fetch(b).then(function(){var a=Object(s.a)(l.a.mark((function a(t){var n,r;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(201!==t.status){a.next=9;break}return a.next=3,t.json();case 3:n=a.sent,r=n.token,localStorage.setItem("AnonymityToken#123",r),e.props.history.push("/anonymity/home"),a.next=10;break;case 9:400===t.status&&e.setState({isError:!0,isLoading:!1});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(a){e.setState({isError:!0,isLoading:!1})}))}},{key:"onBlur",value:function(e){var a=this;if(p.a.default.isEmail(this.state.email)){var t=new Headers;t.append("content-type","application/json");var n=new Request("".concat(y.default,"/user/verifyEmail/").concat(this.state.email),{method:"GET",headers:t});this.setState({isFetchingEmail:!0}),fetch(n).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:n=e.sent,a.setState({isFetchingEmail:!1,isEmailRight:n.isEmailValid}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),a.setState({isFetchingEmail:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){a.setState({isFetchingEmail:!1})}))}else""!==e.target.value&&this.setState({isEmailRight:!1})}},{key:"onBlurUser",value:function(e){var a=this;if((e.target.name="username")&&""!==e.target.value){var t=new Headers;t.append("content-type","application/json");var n=new Request("".concat(y.default,"/user/username/").concat(e.target.value),{method:"GET",headers:t});this.setState({isUserNameLoading:!0}),fetch(n).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,a.setState({isUserNameRight:n.isValid,isUserNameLoading:!1});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){a.setState({isUserNameRight:"unknown",isUserNameLoading:!1})}))}}},{key:"onBlurPhone",value:function(e){var a=this;if(10===e.target.value.length){console.log("hello");var t=new Headers;t.append("content-type","application/json");var n=new Request("".concat(y.default,"/user/phone/").concat(e.target.value),{method:"GET",headers:t});this.setState({isMobileLoading:!0}),fetch(n).then(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t.status),e.next=4,t.json();case 4:if(e.sent,200!==t.status){e.next=7;break}return e.abrupt("return",a.setState({isMobileLoading:!1,phoneValid:!0}));case 7:a.setState({isMobileLoading:!1,phoneValid:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(a){return e.apply(this,arguments)}}()).catch((function(e){console.log(e.message),a.setState({isMobileLoading:!1,phoneValid:"unknown"})}))}}},{key:"handleChange",value:function(e){if(this.setState({isUserNameLoading:!1}),"username"==e.target.name)return this.setState({isUserNameRight:"unknown"}),e.target.value.includes(" ")?void 0:this.setState(Object(n.a)({},e.target.name,e.target.value));if("course"==e.target.name)this.setState({Branch:""});else{if("phone"===e.target.name||"rollno"===e.target.name){if("phone"===e.target.name&&this.setState({phoneValid:"unknown"}),!(p.a.isNumeric(e.target.value)||""===e.target.value))return;return this.setState(Object(n.a)({},e.target.name,e.target.value))}"email"==e.target.name&&this.setState({isEmailRight:"unknown"})}this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleDateChange",value:function(e){this.setState({dob:e})}},{key:"handleYearChange",value:function(e){this.setState({yearofjoining:e.format("YYYY")})}},{key:"render",value:function(){var e=this,a=this.state,t=a.isEmailRight,n=a.password,r=a.repass,l=a.firstName,s=a.LastName,o=a.gender;return g.a.createElement("div",null,g.a.createElement(v.a,{open:this.state.isLoading,style:{zIndex:100}},g.a.createElement(b.a,{style:{color:"white",width:100,height:100}})),g.a.createElement(C.a,{autoHideDuration:3e3,onClose:function(){e.setState({isError:!1})},open:this.state.isError,message:"Error !! Signing Up"}),g.a.createElement(w.a,{maxWidth:"sm"},g.a.createElement(f.default,{heading:"Anonymity SignUp"}),1===this.state.stage?g.a.createElement(x.default,Object.assign({onBlur:this.onBlur,handleChange:this.handleChange},this.state)):"",2===this.state.stage?g.a.createElement(R.default,Object.assign({onChange:this.handleChange,handleDateChange:this.handleDateChange,handleYearChange:this.handleYearChange},this.state,{onBlurUser:this.onBlurUser})):"",3===this.state.stage?g.a.createElement(O.default,Object.assign({onChange:this.handleChange,onBlurPhone:this.onBlurPhone},this.state)):"",g.a.createElement(N.a,{theme:P},3==this.state.stage?g.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:30}},g.a.createElement(j.a,{disabled:!(10==this.state.phone.length&&this.state.rollno&&this.state.course&&this.state.Branch),onClick:this.handleSubmit,variant:"outlined",color:"secondary"},"Sign Up")):"",1===this.state.stage?g.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},g.a.createElement(F.a,{color:"primary",onClick:function(){e.setState((function(e){return{stage:e.stage+1}}))},disabled:!(!0===t&&r===n&&""!==n&&o&&l&&s),style:{marginTop:10}},g.a.createElement(k.a,null))):"",2===this.state.stage?g.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},g.a.createElement(F.a,{color:"primary",disabled:!(!0===this.state.isUserNameRight&&parseInt(this.state.dob.format("YYYY"))<=parseInt((new Date).getFullYear())-17&&parseInt(this.state.yearofjoining)>parseInt((new Date).getFullYear())-4&&this.state.college),onClick:function(){e.setState((function(e){return{stage:e.stage+1}}))},style:{marginTop:10}},g.a.createElement(k.a,null))):"",g.a.createElement(L.a,{horizontal:!0,style:{color:"grey"}},"Or"),1==this.state.stage?g.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},g.a.createElement(j.a,{style:{marginTop:10,textTransform:"lowercase",fontWeight:400},size:"large",onClick:function(){e.props.history.push("/login")}},"Already Have an account ?")):"",this.state.stage>1?g.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},g.a.createElement(F.a,{color:"secondary",style:{marginTop:10},onClick:function(){e.setState((function(e){return{stage:e.stage-1}}))}},g.a.createElement(S.a,null))):"")))}}]),t}(u.Component)},790:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(99),s=t(144);a.default=function(e){return r.a.createElement("div",null,r.a.createElement(l.a,{src:t(432),size:"tiny",centered:!0}),e.h2?r.a.createElement("div",null,r.a.createElement("h2",{style:{color:"grey",textAlign:"center",fontFamily:"poppins"}},e.heading),r.a.createElement("h3",{style:{color:"orange",textAlign:"center",textTransform:"uppercase"}},e.username)):r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"grey",textAlign:"center",fontFamily:"poppins",fontWeight:"bold"}},e.heading),r.a.createElement("h2",{style:{color:"orange",textAlign:"center",textTransform:"uppercase"}},e.username)),e.divider?r.a.createElement(s.a,null):"")}},843:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(278),s=t(691),o=t(1661),i=t(1010),c=t(39),h=t(429),m=t(215),u=t(159),g=t(1219),d=Object(l.a)({palette:{secondary:m.a,primary:u.a}});a.default=function(e){return r.a.createElement(s.a,{theme:d},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{style:{width:"100%",marginRight:10},name:"firstName",value:e.firstName,label:"First Name",placeholder:"Your First Name",className:"comingFromLeft",InputProps:{style:{color:"rgba(0,0,0,0.8)",fontWeight:400}},margin:"normal",onChange:e.handleChange}),r.a.createElement(o.a,{label:"Last Name",fullWidth:!0,onChange:e.handleChange,name:"LastName",value:e.LastName,placeholder:"Your Last Name",className:"comingFromRight",margin:"normal",InputProps:{style:{color:"rgba(0,0,0,0.8)",fontWeight:400}}})),r.a.createElement(o.a,{label:"Email",fullWidth:!0,onChange:e.handleChange,name:"email",value:e.email,placeholder:"Your Email Address",className:"comingFromRight",margin:"normal",onBlur:e.onBlur,error:!e.isEmailRight,FormHelperTextProps:{className:"comingFromRight"},helperText:e.isEmailRight?"":"Email Not Valid",InputProps:{style:{color:"rgba(0,0,0,0.8)",fontWeight:400},endAdornment:r.a.createElement(i.a,null,e.isFetchingEmail?r.a.createElement(c.a,{style:{width:20,height:20}}):"",1==e.isEmailRight?r.a.createElement(g.a,null):"")}}),r.a.createElement(o.a,{style:{width:"100%",marginRight:10},name:"password",onChange:e.handleChange,value:e.password,label:"New Password",type:"password",placeholder:"Greater Than 8 Character",className:"comingFromLeft",error:e.password.length<8&&""!==e.password,helperText:e.password.length<8&&""!==e.password?"Length Must Be Greater Than 8":"",FormHelperTextProps:{className:"comingFromRight"},InputProps:{style:{color:"rgba(0,0,0,0.8)",fontWeight:400},className:"comingFromRight"},margin:"normal"}),r.a.createElement(o.a,{label:"Re-Enter Password",fullWidth:!0,onChange:e.handleChange,name:"repass",type:"password",value:e.repass,error:e.password!==e.repass,placeholder:"You Just Entered",className:"comingFromRight",helperText:e.password!==e.repass?"Password Not Match":"",FormHelperTextProps:{className:"comingFromRight"},margin:"normal",InputProps:{style:{color:"rgba(0,0,0,0.8)",fontWeight:400},className:"comingFromRight"}}),r.a.createElement(o.a,{select:!0,label:"gender",className:"comingFromUp",name:"gender",onChange:e.handleChange,value:e.gender,InputProps:{className:"comingFromRight"},margin:"normal",fullWidth:!0},r.a.createElement(h.a,{key:"male",value:"male"},"Male"),r.a.createElement(h.a,{key:"female",value:"female"},"Female")))}},844:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(926),s=t(278),o=t(691),i=t(1661),c=t(1010),h=t(39),m=t(429),u=t(787),g=t(1646),d=t(159),p=t(215),f=t(1219),y=Object(s.a)({palette:{primary:d.a,secondary:p.a}});a.default=function(e){return r.a.createElement("div",null,r.a.createElement(o.a,{theme:y},r.a.createElement(i.a,{fullWidth:!0,label:"Username",name:"username",error:0==e.isUserNameRight,onChange:e.onChange,onBlur:e.onBlurUser,helperText:0==e.isUserNameRight?"Username is already Taken":"",FormHelperTextProps:{className:"comingFromLeft"},InputProps:{endAdornment:r.a.createElement(c.a,null,e.isUserNameLoading?r.a.createElement(h.a,{style:{width:20,height:20}}):"",!0===e.isUserNameRight?r.a.createElement(f.a,null):"")},value:e.username,className:"comingFromRight",placeholder:"Anything you Like But Make Sure It's Unique"}),r.a.createElement(u.a,{utils:l.a},r.a.createElement(g.a,{label:"Date Of Birth",fullWidth:!0,error:parseInt(e.dob.format("YYYY"))>parseInt((new Date).getFullYear())-17,helperText:parseInt(e.dob.format("YYYY"))>parseInt((new Date).getFullYear())-17?"Must Be Less Than ".concat(parseInt((new Date).getFullYear())-17):"",FormHelperTextProps:{className:"comingFromLeft"},className:"comingFromLeft",style:{marginTop:20},value:e.dob,onChange:e.handleDateChange,format:"MM/DD/YYYY"}),r.a.createElement(i.a,{label:"College",placeholder:"You Study In",select:!0,fullWidth:!0,style:{marginTop:10},className:"comingFromLeft",onChange:e.onChange,value:e.college,name:"college"},r.a.createElement(m.a,{key:"sdiet",value:"Satyug Darshan Institute Of Technology And Management"},"Satyug Darshan Institute Of Technology And Management")),r.a.createElement(g.a,{label:"Year Of Joining #College",fullWidth:!0,helperText:"Must Be Greater Than or Equal To ".concat(parseInt((new Date).getFullYear())-4),views:["year"],style:{marginTop:20},className:"comingFromRight",value:e.yearofjoining,onChange:e.handleYearChange}))))}},845:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(278),s=t(691),o=t(1661),i=t(1010),c=t(39),h=t(429),m=t(159),u=t(215),g=t(1220),d=t(1221),p=Object(l.a)({palette:{primary:m.a,secondary:u.a}}),f=["General","Industry Integrated"],y=["Computer Science","Mechanical","Electrical","Electronics","Civil"];a.default=function(e){return r.a.createElement("div",null,r.a.createElement(s.a,{theme:p},r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(o.a,{label:"Phone",type:"phone",style:{marginRight:10},error:10!==e.phone.length&&""!==e.phone||!1===e.phoneValid,fullWidth:!0,helperText:10!==e.phone.length&&""!==e.phone?"Length Must Be 10":!1===e.phoneValid?"Mobile Already Taken":"",FormHelperTextProps:{className:"comingFromLeft"},InputProps:{className:"comingFromUp",endAdornment:r.a.createElement(i.a,null,e.isMobileLoading?r.a.createElement(c.a,{style:{width:20,height:20}}):r.a.createElement(g.a,{style:{color:"grey"}}))},value:e.phone,placeholder:"+91",onChange:e.onChange,onBlur:e.onBlurPhone,name:"phone"}),r.a.createElement(o.a,{label:"Roll No",fullWidth:!0,InputProps:{className:"comingFromUp",endAdornment:r.a.createElement(i.a,null,r.a.createElement(d.a,null))},value:e.rollno,placeholder:"Of Class",onChange:e.onChange,name:"rollno"})),r.a.createElement(o.a,{label:"Course",select:!0,style:{marginTop:20},fullWidth:!0,InputProps:{className:"comingFromUp"},value:e.course,onChange:e.onChange,name:"course"},r.a.createElement(h.a,{key:"b.tech",value:"b.tech"},"Bachelor of technology"),r.a.createElement(h.a,{key:"bba",value:"bba"},"Bachelor of Business Administration")),r.a.createElement(o.a,{label:"Branch",select:!0,disabled:""===e.course,fullWidth:!0,style:{marginTop:20},InputProps:{className:"comingFromUp"},value:e.Branch,onChange:e.onChange,name:"Branch"},"b.tech"==e.course?y.map((function(e){return r.a.createElement(h.a,{key:e,value:e},e)})):"","bba"==e.course?f.map((function(e){return r.a.createElement(h.a,{key:e,value:e},e)})):"")))}}}]);
//# sourceMappingURL=21.9378293d.chunk.js.map