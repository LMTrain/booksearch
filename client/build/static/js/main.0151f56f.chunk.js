(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(61)},29:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),c=a(64),i=a(65),s=a(6),u=a(7),m=a(10),h=a(8),d=a(11),b=(a(29),a(4)),f=a.n(b),p={search:function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=40&orderBy=newest&key=AIzaSyD5c7Uuj4hd7FPRO9A9o4zhWaCTsffKrNc")},searchId:function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes/"+e)},getBooks:function(){return f.a.get("/api/books")},getBook:function(e){return f.a.get("/api/books/"+e)},updateBook:function(e){return f.a.put("/api/books/"+e)},deleteBook:function(e){return f.a.delete("/api/books/"+e)},saveBook:function(e){return f.a.post("/api/books",e)}};var E=function(e){return l.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))};var g=function(e){return l.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var v=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return l.a.createElement("div",Object.assign({className:t},e))},k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={book:{}},a.loadBooks=function(){p.getBooks().then(function(e){a.setState({book:e.data,id:"",title:"",authors:"",link:"",thumbnail:"",description:"",publisheddate:"",note:""})}).catch(function(e){return console.log(e)})},a.handleNoteSubmit=function(e){e.preventDefault(),a.addNote(a.state.book.note)},a.addNote=function(e){var t=a.state.book.find(function(t){return t._id===e});a.setState({book:t});var n=String(a.state.book.note);p.updateBook({note:n}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){p.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",{className:"text-center"},"My Favorite Books"),l.a.createElement("div",{className:"result-box"},this.state.book.length?l.a.createElement("ul",{className:"list-group search-results"},this.state.book.map(function(t){return l.a.createElement("li",{key:t._id,className:"list-group-item"},l.a.createElement("span",null,l.a.createElement("form",{className:"note"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"note"}),l.a.createElement("input",{value:e.state.book.note,name:"note",type:"text",className:"form-control",placeholder:"Add a note ",id:"note"}),l.a.createElement("button",{key:t._id,type:"submit",onClick:function(){return e.handleNoteSubmit(t._id)},className:"btn btn-success"},"Add Note")))),l.a.createElement(g,null,l.a.createElement(v,{size:"md-4"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:t.title,width:"150",height:"250",src:t.thumbnail})),l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"Title :")," ",t.title),l.a.createElement("li",null,l.a.createElement("b",null,"Authors :"),t.authors),l.a.createElement("li",null,l.a.createElement("b",null,"Published Date :")," ",t.publisheddate)))),l.a.createElement("span",null,l.a.createElement("button",{key:t._id,type:"submit",onClick:function(){return e.deleteBook(t._id)},className:"btn btn-success"},"Remove"))),l.a.createElement(v,{size:"md-8"},l.a.createElement("div",{className:"detail-card"},l.a.createElement("div",{className:"content"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("b",null,"Details :")," ",t.description)))))))})):l.a.createElement("h4",null,"...Loading")))}}]),t}(n.Component);a(47);var N=function(e){return l.a.createElement("div",{className:"hero text-center",style:{backgroundImage:"url(".concat(e.backgroundImage,")")}},e.children)};var w=function(){return l.a.createElement("div",null,l.a.createElement(N,{backgroundImage:"https://lmtrain.github.io/lm-images/assets/images/books6.jpg"},l.a.createElement("h1",null,"LM Books Search"),l.a.createElement("h2",null,"A Place To Find All Your Books")),l.a.createElement(E,{style:{marginTop:10}},l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement("h3",null,"Welcome!"))),l.a.createElement(g,null,l.a.createElement(v,{size:"md-12"},l.a.createElement("p",null,"LM Books Search uses Google API's for book searching to searches the full text of books and magazines that Google has scanned, converted to text using optical character recognition (OCR), and stored in its digital database. Books are provided either by publishers and authors through the Google Books Partner Program, or by Google's library partners through the Library Project. Additionally, Google has partnered with a number of magazine publishers to digitize their archives."),l.a.createElement("p",null),l.a.createElement("p",null,"The Google Books initiative has been hailed for its potential to offer unprecedented access to what may become the largest online body of human knowledge and promoting the democratization of knowledge. However, it has also been criticized for potential copyright violations, and lack of editing to correct the many errors introduced into the scanned texts by the OCR process."),l.a.createElement("p",null,"As of October 2015, the number of scanned book titles was over 25 million, but the scanning process has slowed down in American academic libraries.")))))},y=a(21);a(48);var B=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,l.a.createElement("form",{className:"search"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"}),l.a.createElement("input",{value:e.search,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Search for Books or type a title",id:"search"}),l.a.createElement("span",null,l.a.createElement("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success"},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-search"}))))))),l.a.createElement("div",null,l.a.createElement("img",{className:"image",alt:"",width:"950",height:"400",src:"https://lmtrain.github.io/lm-images/assets/images/books2.jpg"})))};a(49);var S=function(e){return l.a.createElement("div",{className:"result-box"},l.a.createElement("ul",{className:"list-group search-results"},e.books.map(function(t){return l.a.createElement("li",{key:t.etag,className:"list-group-item"},l.a.createElement("img",{alt:t.volumeInfo.title,width:"180",height:"200",className:"img-fluid",src:null==t.volumeInfo.imageLinks?"https://lmtrain.github.io/lm-images/assets/images/books5.jpg":t.volumeInfo.imageLinks.thumbnail}),l.a.createElement("span",null,"     "),l.a.createElement("span",null,l.a.createElement("button",{id:t.etag,type:"submit",onClick:function(){return e.handleDetailsSubmit(t.id)},className:"btn btn-success"},"Detail")),l.a.createElement("span",null,"  "),l.a.createElement("span",null,l.a.createElement("button",{id:t.etag,type:"submit",onClick:function(){return e.favoriteSubmit(t.id)},className:"btn btn-success"},"Add to Favorite")),l.a.createElement("span",null,"  "),l.a.createElement("p",null,l.a.createElement("b",null,"Title             :")," ",t.volumeInfo.title),l.a.createElement("span",null,l.a.createElement("b",null,"Authors         :")," ",t.volumeInfo.authors," | |"),l.a.createElement("span",null,l.a.createElement("b",null,"Published Date :")," ",t.volumeInfo.publishedDate))})))};a(50);var I=function(e){return l.a.createElement("div",null,l.a.createElement("ul",{className:"list-group search-favBooks"},e.showBook.map(function(e){return l.a.createElement("li",{key:e.id,className:"list-group-item"},l.a.createElement("img",{alt:e.volumeInfo.title,width:"200",height:"220",className:"img-fluid",src:null==e.volumeInfo.imageLinks?"https://lmtrain.github.io/lm-images/assets/images/books5.jpg":e.volumeInfo.imageLinks.thumbnail}),l.a.createElement("span",null),l.a.createElement("span",null,l.a.createElement("a",{href:"/search/"},l.a.createElement("button",{type:"submit",className:"btn btn-success"},"Back To Search"))),l.a.createElement("p",null,l.a.createElement("b",null,"Title             :")," ",e.volumeInfo.title),l.a.createElement("span",null,l.a.createElement("b",null,"Authors         :")," ",e.volumeInfo.authors," | |"),l.a.createElement("p",null,l.a.createElement("b",null,"Published Date :")," ",e.volumeInfo.publishedDate),l.a.createElement("p",null,l.a.createElement("b",null,"Description :")," ",e.volumeInfo.description))})))},j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={search:"",favMessage:"",id:"",books:[],title:"",authors:"",link:"",thumbnail:"",description:"",publisheddate:"",error:"",showBook:[],showBookState:!1},a.searchForBooks=function(e){p.search(e).then(function(e){return a.setState({books:e.data.items})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(y.a)({},t,n))},a.handleDetailsSubmit=function(e){var t=a.state.books.find(function(t){return t.id===e});a.setState({showBook:[t],showBookState:!0})},a.handleFormSubmit=function(e){e.preventDefault(),a.searchForBooks(a.state.search)},a.favoriteSubmit=function(e){var t=a.state.books.find(function(t){return t.id===e});a.setState({showBook:[t],showBookState:!1});var n=String(t.id),l=String(t.volumeInfo.title),o=String(t.volumeInfo.authors),r=String(t.volumeInfo.infoLink),c=String(t.volumeInfo.imageLinks.thumbnail),i=String(t.volumeInfo.description),s=String(t.volumeInfo.publishedDate);p.saveBook({bookid:n,title:l,authors:o,link:r,thumbnail:c,description:i,note:"",publisheddate:s}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.showBookState,a=e.showBook;return l.a.createElement("div",null,l.a.createElement(E,{style:{minHeight:"80%"}},l.a.createElement("h3",{className:"text-center"},"Search For Books"),l.a.createElement(B,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),t?l.a.createElement(I,{showBook:a}):l.a.createElement(S,{books:void 0===this.state.books?[]:this.state.books,favoriteSubmit:this.favoriteSubmit,handleDetailsSubmit:this.handleDetailsSubmit})))}}]),t}(n.Component),O=a(63);a(51);var F=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},l.a.createElement(O.a,{className:"navbar-brand",to:"/"},"LM Books"),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{to:"/",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{to:"/Favorite",className:"/Favorite"===window.location.pathname?"nav-link active":"nav-link"},"Favorite")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(O.a,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link"},"Search")))))};a(54);var x=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("span",null,"Copyright \xa9 LM Systems LLC 2019"))};a(55);var A=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))};a(56).config();var C=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(F,null),l.a.createElement(A,null,l.a.createElement(i.a,{exact:!0,path:"/",component:w}),l.a.createElement(i.a,{exact:!0,path:"/about",component:w}),l.a.createElement(i.a,{exact:!0,path:"/Favorite",component:k}),l.a.createElement(i.a,{exact:!0,path:"/search",component:j})),l.a.createElement(x,null)))};a(60);r.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.0151f56f.chunk.js.map