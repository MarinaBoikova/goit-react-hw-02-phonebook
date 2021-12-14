(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),s=n(9),o=n(2),u=n(3),l=n(5),b=n(4),j=n(8),h=n(10),d=n(0),m=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.onSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.props.onSubmit({id:Object(h.a)(),name:a,number:c}),e.reset()},e.onChangeInput=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(j.a)({},a,c))},e.reset=function(){e.setState({name:"",number:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(d.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Name:"}),Object(d.jsx)("input",{type:"text",onChange:this.onChangeInput,value:t,name:"name",placeholder:"example: Boykova Marina",required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Number:"}),Object(d.jsx)("input",{type:"tel",onChange:this.onChangeInput,value:n,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"example: 525-17-79",required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Add Contact"})]})}}]),n}(a.Component),p=m,O=function(e){var t=e.children;return Object(d.jsx)("div",{children:t})},f=function(e){var t=e.contacts,n=e.onDelete;return Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(d.jsxs)(O,{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:a}),": ",c]}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},v=function(e){var t=e.value,n=e.onChange;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,placeholder:"example: Ivan"})]})})},x=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[],filter:""},e.onSubmit=function(t){var n=t.id,a=t.name,c=t.number;e.state.contacts.some((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[{id:n,name:a,number:c}])}}))},e.onChangeInput=function(t){e.setState({filter:t.target.value})},e.onFilterChange=function(){var t=e.state.filter;return e.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)("div",{children:Object(d.jsx)(p,{onSubmit:this.onSubmit,contacts:t})}),Object(d.jsx)("h2",{children:"Contacts:"}),Object(d.jsx)(v,{value:n,onChange:this.onChangeInput}),Object(d.jsx)(f,{contacts:this.onFilterChange(),onDelete:this.deleteContact})]})})}}]),n}(a.Component),C=x;i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0584717f.chunk.js.map