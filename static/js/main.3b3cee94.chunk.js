(this.webpackJsonpQuizApp=this.webpackJsonpQuizApp||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(0),a=n.n(s),o=n(23),r=n.n(o),c=(n(53),n(25)),l=n(8),u=(n(54),n(12)),h=n(13),d=n(7),m=n(15),p=n(14),b=n(32),j=n(66),O=n(63),x=[{firstname:"Mahesh",lasname:"Ippili",email:"im@gmail.com",password:"cse123"},{firstname:"Santhosh",lasname:"Velamala",email:"vs@gmail.com",password:"banda123"}],g=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(u.a)(this,n),i=t.call(this,e),null!==localStorage.getItem("user")&&i.props.history.push("/QuizApp/home"),i.state={firstname:"",lastname:"",email:"",password:""},i.handleChange=i.handleChange.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,i=t.value;this.setState(Object(b.a)({},n,i))}},{key:"handleSubmit",value:function(e){var t;e.preventDefault(),t=this.state,x.push(t),this.props.history.push("/QuizApp/login")}},{key:"render",value:function(){return Object(i.jsx)("div",{className:"signup",children:Object(i.jsxs)(j.a,{onSubmit:this.handleSubmit,children:[Object(i.jsxs)(j.a.Group,{controlId:"first-name",children:[Object(i.jsx)(j.a.Label,{children:"First Name"}),Object(i.jsx)(j.a.Control,{name:"firstname",type:"text",placeholder:"First Name",onChange:this.handleChange,required:!0})]}),Object(i.jsxs)(j.a.Group,{controlId:"last-name",children:[Object(i.jsx)(j.a.Label,{children:"Last Name"}),Object(i.jsx)(j.a.Control,{name:"lastname",type:"text",placeholder:"Last Name",onChange:this.handleChange,required:!0})]}),Object(i.jsxs)(j.a.Group,{controlId:"email",children:[Object(i.jsx)(j.a.Label,{children:"Email"}),Object(i.jsx)(j.a.Control,{name:"email",type:"email",placeholder:"Enter Email",onChange:this.handleChange,required:!0})]}),Object(i.jsxs)(j.a.Group,{controlId:"password",children:[Object(i.jsx)(j.a.Label,{children:"Password"}),Object(i.jsx)(j.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.handleChange,required:!0})]}),Object(i.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),n}(a.a.Component),y=n(67),f=n(64),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(u.a)(this,n),i=t.call(this,e),null!==localStorage.getItem("user")&&i.props.history.push("/QuizApp/home"),i.state={email:"",password:"",areWrongCreds:!1},i.handleChange=i.handleChange.bind(Object(d.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(d.a)(i)),i}return Object(h.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,i=t.value;this.setState(Object(b.a)({},n,i))}},{key:"handleSubmit",value:function(e){var t,n;e.preventDefault(),!0===(t=this.state.email,n=this.state.password,0!==x.filter((function(e){return e.password===n&&e.email===t})).length)?(localStorage.setItem("user",this.state.email),this.props.history.push("/QuizApp/home")):this.setState({areWrongCreds:!0})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"login",children:[Object(i.jsxs)(j.a,{onSubmit:this.handleSubmit,children:[Object(i.jsxs)(j.a.Group,{controlId:"email",children:[Object(i.jsx)(j.a.Label,{children:"Email"}),Object(i.jsx)(j.a.Control,{name:"email",type:"email",placeholder:"Enter Email",onChange:this.handleChange,required:!0})]}),Object(i.jsxs)(j.a.Group,{controlId:"password",children:[Object(i.jsx)(j.a.Label,{children:"Password"}),Object(i.jsx)(j.a.Control,{name:"password",type:"password",placeholder:"Password",onChange:this.handleChange,required:!0})]}),Object(i.jsx)(O.a,{variant:"primary",type:"submit",children:"Submit"})]}),this.state.areWrongCreds&&Object(i.jsx)(f.a,{className:"alert-message",variant:"danger",children:"Wrong Credintials"})]})}}]),n}(a.a.Component),k=n.p+"static/media/logo.1f29f243.jpg";var v=function(e){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsxs)("div",{className:"logo-name",children:[Object(i.jsx)("div",{className:"logo",children:Object(i.jsx)("img",{src:k,alt:"logo.jpg"})}),Object(i.jsx)("h1",{children:"Quiz App"})]}),null!==localStorage.getItem("user")&&Object(i.jsx)("div",{className:"logout",children:Object(i.jsx)(O.a,{variant:"outline-dark",onClick:function(){e.logout()},children:"Log out"})})]})},T=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var s;Object(u.a)(this,n),(s=t.call(this,e)).some=function(){return"1"===s.state.key?Object(i.jsx)(w,{history:s.props.history}):Object(i.jsx)(g,{history:s.props.history})},"/"===s.props.location.pathname&&s.props.history.push("/QuizApp/login");var a="/QuizApp/login"===s.props.location.pathname?"1":"2";return s.state={key:a},s.handleSelect=s.handleSelect.bind(Object(d.a)(s)),s}return Object(h.a)(n,[{key:"handleSelect",value:function(e){this.setState({key:e})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"login-signup-page",children:[Object(i.jsx)(v,{}),Object(i.jsxs)("div",{className:"login-signup",children:[Object(i.jsxs)(y.a,{justify:!0,variant:"tabs",activeKey:this.state.key,onSelect:this.handleSelect,children:[Object(i.jsx)(y.a.Item,{id:"login",children:Object(i.jsx)(y.a.Link,{as:c.b,eventKey:"1",to:"/QuizApp/login",children:" LogIn "})}),Object(i.jsx)(y.a.Item,{id:"signup",children:Object(i.jsx)(y.a.Link,{as:c.b,eventKey:"2",to:"/QuizApp/signup",children:" SignUp "})})]}),this.some()]})]})}}]),n}(a.a.Component),q=n(68),Q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"quiz",children:Object(i.jsx)(q.a,{style:{width:"18rem"},children:Object(i.jsxs)(q.a.Body,{children:[Object(i.jsx)(q.a.Title,{children:this.props.quiz.title+" Quiz"}),Object(i.jsx)(q.a.Text,{style:{height:"7rem"},children:this.props.quiz.description}),Object(i.jsx)(O.a,{variant:"primary",onClick:function(){e.props.clickFn(e.props.quiz.id)},children:"Go"})]})})})}}]),n}(a.a.Component),S=[{id:1,title:"Data Structures",description:"Qestions on Arrays, LinkedList, Stacks, Queues, Graphs",questions:[{question:"Which of the following methods can be used to find the largest and smallest number in a linked list?",options:["Recursion","Iteration","Both Recursion and iteration","Impossible to find the largest and smallest numbers"],answer:"2"},{question:"Which of the following points is/are true about Linked List data structure when it is compared with array",options:["Arrays have better cache locality that can make them better in terms of performance.","It is easy to insert and delete elements in Linked List","Random access is not allowed in a typical implementation of Linked Lists","All of the above"],answer:"3"},{question:"Which of the following methods can be used to find the largest and smallest number in a linked list?",options:["Recursion","Iteration","Both Recursion and iteration","Impossible to find the largest and smallest numbers"],answer:"2"},{question:"Which of the following points is/are true about Linked List data structure when it is compared with array",options:["Arrays have better cache locality that can make them better in terms of performance.","It is easy to insert and delete elements in Linked List","Random access is not allowed in a typical implementation of Linked Lists","All of the above"],answer:"3"},{question:"Which of the following methods can be used to find the largest and smallest number in a linked list?",options:["Recursion","Iteration","Both Recursion and iteration","Impossible to find the largest and smallest numbers"],answer:"2"},{question:"Which of the following points is/are true about Linked List data structure when it is compared with array",options:["Arrays have better cache locality that can make them better in terms of performance.","It is easy to insert and delete elements in Linked List","Random access is not allowed in a typical implementation of Linked Lists","All of the above"],answer:"3"},{question:"Which of the following methods can be used to find the largest and smallest number in a linked list?",options:["Recursion","Iteration","Both Recursion and iteration","Impossible to find the largest and smallest numbers"],answer:"2"},{question:"Which of the following points is/are true about Linked List data structure when it is compared with array",options:["Arrays have better cache locality that can make them better in terms of performance.","It is easy to insert and delete elements in Linked List","Random access is not allowed in a typical implementation of Linked Lists","All of the above"],answer:"3"},{question:"Which of the following methods can be used to find the largest and smallest number in a linked list?",options:["Recursion","Iteration","Both Recursion and iteration","Impossible to find the largest and smallest numbers"],answer:"2"},{question:"Which of the following points is/are true about Linked List data structure when it is compared with array",options:["Arrays have better cache locality that can make them better in terms of performance.","It is easy to insert and delete elements in Linked List","Random access is not allowed in a typical implementation of Linked Lists","All of the above"],answer:"3"}],time:10},{id:2,title:"Algorithms",description:"Questions on sorting searching algorithms and dynamic programming greedy algorithms",questions:[{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"},{question:"What is recurrence for worst case of QuickSort and what is the time complexity in Worst case?",options:["Recurrence is T(n) = T(n-2) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = T(n-1) + O(n) and time complexity is O(n^2)","Recurrence is T(n) = 2T(n/2) + O(n) and time complexity is O(nLogn)","Recurrence is T(n) = T(n/10) + T(9n/10) + O(n) and time complexity is O(nLogn)"],answer:"1"}],time:10},{id:3,title:"Computer Networks",description:"Questions on Basics of computer networks and client-server programming and encryption and decryption algorithms",questions:[{question:"Physical or logical arrangement of network is __________",options:["Topology","Routing","Networking","Control"],answer:"0"},{question:"Which network topology requires a central controller or hub?",options:["Star","Mesh","Ring","Bus"],answer:"0"},{question:"Physical or logical arrangement of network is __________",options:["Topology","Routing","Networking","Control"],answer:"0"},{question:"Which network topology requires a central controller or hub?",options:["Star","Mesh","Ring","Bus"],answer:"0"},{question:"Physical or logical arrangement of network is __________",options:["Topology","Routing","Networking","Control"],answer:"0"},{question:"Which network topology requires a central controller or hub?",options:["Star","Mesh","Ring","Bus"],answer:"0"},{question:"Physical or logical arrangement of network is __________",options:["Topology","Routing","Networking","Control"],answer:"0"},{question:"Which network topology requires a central controller or hub?",options:["Star","Mesh","Ring","Bus"],answer:"0"},{question:"Physical or logical arrangement of network is __________",options:["Topology","Routing","Networking","Control"],answer:"0"},{question:"Which network topology requires a central controller or hub?",options:["Star","Mesh","Ring","Bus"],answer:"0"}],time:10}],L=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;return Object(u.a)(this,n),(i=t.call(this,e)).handleClick=function(e){i.props.history.push("/QuizApp/quiz/".concat(e))},i.logout=function(){localStorage.clear(),i.props.history.push("/QuizApp/login")},null===localStorage.getItem("user")&&i.props.history.push("/QuizApp/login"),i.state={quizzes:S.map((function(e){return{id:e.id,title:e.title,description:e.description}}))},i.handleClick=i.handleClick.bind(Object(d.a)(i)),i.logout=i.logout.bind(Object(d.a)(i)),i}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"home-page",children:[Object(i.jsx)(v,{logout:this.logout}),Object(i.jsx)("div",{className:"quiz-container",children:this.state.quizzes.map((function(t){return Object(i.jsx)(Q,{quiz:t,clickFn:e.handleClick},t.id)}))})]})}}]),n}(a.a.Component),R=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(u.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{className:"quiz-header",children:[Object(i.jsx)("h1",{children:this.props.detailes.title+" Quiz"}),Object(i.jsxs)("div",{className:"name-timer",children:[Object(i.jsx)("h4",{children:localStorage.getItem("user")}),this.props.detailes.time&&Object(i.jsx)("h3",{className:"timer",children:this.props.detailes.time.hours+" : "+this.props.detailes.time.minutes+" : "+this.props.detailes.time.seconds})]})]})}}]),n}(a.a.Component),C=n(45);var z=function(e){return Object(i.jsxs)("div",{className:"question-options",children:[Object(i.jsxs)("div",{className:"question",children:[parseInt(e.question.id)+1+". ",e.question.question.question]}),Object(i.jsx)("div",{className:"options",children:Object(i.jsx)(j.a.Group,{children:Object(i.jsx)(C.a,{children:e.question.question.options.map((function(t,n){return Object(i.jsx)(j.a.Check,{type:"radio",label:t,value:n,name:"question"+e.question.id,checked:e.question.responses[e.question.id]==n,onChange:e.question.onSelectFn},n)}))})})})]})},I=n(65);var A=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(I.a,{show:e.detailes.show,onHide:e.detailes.handleClose||e.detailes.handleOk,backdrop:"static",keyboard:!1,children:[Object(i.jsx)(I.a.Header,{closeButton:!0,children:Object(i.jsx)(I.a.Title,{children:"Alert"})}),Object(i.jsx)(I.a.Body,{children:e.detailes.text}),e.detailes.handleClose?Object(i.jsxs)(I.a.Footer,{children:[Object(i.jsx)(O.a,{variant:"secondary",onClick:e.detailes.handleClose,children:" Cancel "}),Object(i.jsx)(O.a,{variant:"primary",onClick:e.detailes.handleOk,children:"Submit"})]}):Object(i.jsx)(I.a.Footer,{children:Object(i.jsx)(O.a,{variant:"primary",onClick:e.detailes.handleOk,children:"Ok"})})]})})};var _=function(e){return Object(i.jsx)("div",{className:"question-palettee",children:e.questions.answers.map((function(t,n){return Object(i.jsx)("span",{className:"question-button",children:Object(i.jsx)(O.a,{variant:e.questions.markedQuestions[n]?"primary":-1!==t?"success":"outline-dark",onClick:function(){e.questions.onClickFn(n)},children:n+1<10?"0"+(n+1):n+1})},n)}))})},N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var i;Object(u.a)(this,n),i=t.call(this,e),null===localStorage.getItem("user")&&i.props.history.push("/QuizApp/login");var s,a=(s=parseInt(i.props.match.params.id),S.filter((function(e){return e.id===s})))[0],o=i.convertMinsToTime(a.time);return i.state={quiz:a,timeLeft:o,currentQuestionId:0,currentQuestion:a.questions[0],answers:[],markedQuestions:[],showAlert:!1,isQuizEnded:!1,clickedSubmtQuiz:!1},i.timer=0,i.convertMinsToTime=i.convertMinsToTime.bind(Object(d.a)(i)),i.countDown=i.countDown.bind(Object(d.a)(i)),i.setQuestion=i.setQuestion.bind(Object(d.a)(i)),i.onSelectOption=i.onSelectOption.bind(Object(d.a)(i)),i.clearAnswer=i.clearAnswer.bind(Object(d.a)(i)),i.nextQuestion=i.nextQuestion.bind(Object(d.a)(i)),i.closeAlert=i.closeAlert.bind(Object(d.a)(i)),i.markTheQuestion=i.markTheQuestion.bind(Object(d.a)(i)),i.handleOk=i.handleOk.bind(Object(d.a)(i)),i.submitQuiz=i.submitQuiz.bind(Object(d.a)(i)),i}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this.state.quiz.questions.map((function(e){return-1})),t=this.state.quiz.questions.map((function(e){return!1}));this.setState({answers:e,markedQuestions:t}),this.timer=setInterval(this.countDown,1e3)}},{key:"setQuestion",value:function(e){var t=this.state.quiz.questions[e];this.setState({currentQuestionId:e,currentQuestion:t})}},{key:"convertMinsToTime",value:function(e){var t=0,n=0;return e>=60&&(t=e/60,e=Math.floor(e/60)),e>0&&(n=Math.ceil(e)),{hours:t<10?"0"+t:t,minutes:n<10?"0"+n:n,seconds:"00"}}},{key:"countDown",value:function(){var e=parseInt(this.state.timeLeft.seconds),t=parseInt(this.state.timeLeft.minutes),n=parseInt(this.state.timeLeft.hours);e>0?e-=1:t>0?(e=59,t-=1):n>0?(t=59,n-=1):(clearInterval(this.timer),this.setState({isQuizEnded:!0}));var i={hours:n<10?"0"+n:n,minutes:t<10?"0"+t:t,seconds:e<10?"0"+e:e};this.setState({timeLeft:i})}},{key:"onSelectOption",value:function(e){var t=e.target.value,n=this.state.answers;n[this.state.currentQuestionId]=t,this.setState({answers:n})}},{key:"clearAnswer",value:function(){var e=this.state.answers;e[this.state.currentQuestionId]=-1,this.setState({answers:e})}},{key:"nextQuestion",value:function(){var e=parseInt(this.state.currentQuestionId)+1;if(e<this.state.quiz.questions.length){var t=this.state.quiz.questions[e];this.setState({currentQuestionId:e,currentQuestion:t})}else this.setState({showAlert:!0})}},{key:"markTheQuestion",value:function(){var e=this.state.markedQuestions;e[this.state.currentQuestionId]=!e[this.state.currentQuestionId],this.setState({markedQuestions:e})}},{key:"closeAlert",value:function(){this.setState({showAlert:!1,clickedSubmtQuiz:!1})}},{key:"handleOk",value:function(){this.setState({isQuizEnded:!0})}},{key:"calculateScore",value:function(){var e=this,t=0;return this.state.quiz.questions.map((function(n,i){n.answer===e.state.answers[i]&&(t+=1)})),t}},{key:"submitQuiz",value:function(){this.setState({clickedSubmtQuiz:!0}),clearInterval(this.timer),this.setState({timeLeft:null})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"quiz-test",children:[Object(i.jsx)(R,{detailes:{title:this.state.quiz.title,time:this.state.timeLeft}}),this.state.isQuizEnded?Object(i.jsxs)("div",{className:"quiz-end",children:[Object(i.jsxs)("h1",{children:["Your Score: "," "+this.calculateScore()]}),Object(i.jsx)(c.b,{to:"/QuizApp/home",children:"Go To DashBoard"})]}):Object(i.jsxs)("div",{className:"quiz-body",children:[Object(i.jsxs)("div",{className:"quiz-question",children:[Object(i.jsx)(z,{question:{question:this.state.currentQuestion,id:this.state.currentQuestionId,onSelectFn:this.onSelectOption,responses:this.state.answers}}),Object(i.jsxs)("div",{className:"acion-buttons",children:[Object(i.jsxs)("div",{className:"buttons-move",children:[Object(i.jsx)(O.a,{variant:"primary",onClick:this.markTheQuestion,children:this.state.markedQuestions[this.state.currentQuestionId]?"Un Mark":"Mark"}),Object(i.jsx)(O.a,{variant:"secondary",onClick:this.clearAnswer,children:"Clear Response"}),Object(i.jsx)(O.a,{variant:"outline-primary",onClick:this.nextQuestion,children:"Next "})]}),Object(i.jsx)("div",{className:"buttons-end",children:Object(i.jsx)(O.a,{variant:"danger",onClick:this.submitQuiz,children:"Submit"})})]}),this.state.showAlert&&Object(i.jsx)("div",{className:"alert-box",children:Object(i.jsx)(A,{detailes:{show:this.state.showAlert,handleOk:this.closeAlert,text:"There is no next question"}})}),this.state.clickedSubmtQuiz&&Object(i.jsx)("div",{className:"alert-box",children:Object(i.jsx)(A,{detailes:{show:this.state.clickedSubmtQuiz,handleOk:this.handleOk,handleClose:this.closeAlert,text:"Are you sure?"}})})]}),Object(i.jsx)("div",{className:"question-palette",children:Object(i.jsx)(_,{questions:{answers:this.state.answers,markedQuestions:this.state.markedQuestions,onClickFn:this.setQuestion}})})]})]})}}]),n}(a.a.Component);var W=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(c.a,{children:[Object(i.jsx)(l.a,{path:"/QuizApp",exact:!0,component:T}),Object(i.jsx)(l.a,{path:"/QuizApp/signup",exact:!0,component:T}),Object(i.jsx)(l.a,{path:"/QuizApp/login",exact:!0,component:T}),Object(i.jsx)(l.a,{path:"/QuizApp/home",exact:!0,component:L}),Object(i.jsx)(l.a,{path:"/QuizApp/quiz/:id",exact:!0,component:N})]})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(W,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.3b3cee94.chunk.js.map