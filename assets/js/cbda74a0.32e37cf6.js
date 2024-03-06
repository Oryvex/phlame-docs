"use strict";(self.webpackChunktest_api=self.webpackChunktest_api||[]).push([[5071],{6275:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=s(4848),t=s(8453);const r={title:"Request Headers",sidebar_position:3},i=void 0,l={id:"handling-requests/headers-method",title:"Request Headers",description:"In Phlame's API development toolkit, the headers method within the API class provides a convenient way to handle HTTP headers in incoming requests. This method offers flexibility and ease of use, allowing developers to check for specific headers, retrieve all headers, and execute callbacks based on the results. Let's dive into the syntax and usage of the headers method:",source:"@site/docs/handling-requests/headers-method.md",sourceDirName:"handling-requests",slug:"/handling-requests/headers-method",permalink:"/docs/handling-requests/headers-method",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Request Headers",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using the API Class",permalink:"/docs/handling-requests/api-class"},next:{title:"Request Body",permalink:"/docs/handling-requests/body-method"}},d={},h=[{value:"Checking for Headers",id:"checking-for-headers",level:3},{value:"Api::headers():",id:"apiheaders",level:4},{value:"Api::headers(key: &quot;key&quot;):",id:"apiheaderskey-key",level:4},{value:"Api::headers(key: &quot;key&quot;, value: &quot;value&quot;):",id:"apiheaderskey-key-value-value",level:4},{value:"Handling Results with Callbacks",id:"handling-results-with-callbacks",level:3},{value:"Then Callback:",id:"then-callback",level:4},{value:"Orelse Callback:",id:"orelse-callback",level:4},{value:"Example of a Header Method",id:"example-of-a-header-method",level:3}];function o(e){const a={admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"In Phlame's API development toolkit, the headers method within the API class provides a convenient way to handle HTTP headers in incoming requests. This method offers flexibility and ease of use, allowing developers to check for specific headers, retrieve all headers, and execute callbacks based on the results. Let's dive into the syntax and usage of the headers method:"}),"\n",(0,n.jsx)(a.h3,{id:"checking-for-headers",children:"Checking for Headers"}),"\n",(0,n.jsx)(a.p,{children:"The headers method enables developers to check for the presence of headers in incoming requests. Here's how you can use it:"}),"\n",(0,n.jsx)(a.h4,{id:"apiheaders",children:"Api::headers():"}),"\n",(0,n.jsx)(a.p,{children:"Checks if any headers are present in the incoming request and returns status: true if headers are found, along with data containing all headers."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:"Api::headers();\n"})}),"\n",(0,n.jsx)(a.h4,{id:"apiheaderskey-key",children:'Api::headers(key: "key"):'}),"\n",(0,n.jsx)(a.p,{children:"Checks if a header with the specified key is present in the incoming request. If found, it returns status: true along with data containing all headers."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:'Api::headers(key: "key");\n'})}),"\n",(0,n.jsx)(a.h4,{id:"apiheaderskey-key-value-value",children:'Api::headers(key: "key", value: "value"):'}),"\n",(0,n.jsx)(a.p,{children:"Checks if a header with the specified key has a value equal to the provided value. If found, it returns status: true along with data containing all headers."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",children:'Api::headers(key: "key", value:"value");\n'})}),"\n",(0,n.jsx)(a.h3,{id:"handling-results-with-callbacks",children:"Handling Results with Callbacks"}),"\n",(0,n.jsx)(a.p,{children:"The headers method also supports additional parameters then: and orelse:, which are callbacks executed based on the status of the header check:"}),"\n",(0,n.jsx)(a.h4,{id:"then-callback",children:"Then Callback:"}),"\n",(0,n.jsx)(a.p,{children:"This callback runs when the header check returns status: true. It allows developers to execute custom logic based on the presence or values of headers."}),"\n",(0,n.jsx)(a.h4,{id:"orelse-callback",children:"Orelse Callback:"}),"\n",(0,n.jsx)(a.p,{children:"This callback runs when the header check returns status: false. It provides a fallback mechanism for scenarios where the expected headers are not present in the incoming request."}),"\n",(0,n.jsxs)(a.admonition,{type:"tip",children:[(0,n.jsxs)(a.p,{children:["You can use the variable ",(0,n.jsx)(a.code,{children:"$rout"})," inside the callback functions to get the data the ",(0,n.jsx)(a.code,{children:"headers"})," method will return, that includes"]}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Status"}),"\n",(0,n.jsx)(a.li,{children:"Data"}),"\n"]})]}),"\n",(0,n.jsx)(a.h3,{id:"example-of-a-header-method",children:"Example of a Header Method"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-php",metastring:'title="<filename>.src.php"',children:'<?php\r\nApi::headers(\r\n    key: "Test-Header",\r\n    value: "Test Value",\r\n    then: function() {\r\n        // Code to execute\r\n    },\r\n    orelse: function() {\r\n        // Code to execute\r\n    }\r\n);\r\n\r\n?>\n'})})]})}function c(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,a,s)=>{s.d(a,{R:()=>i,x:()=>l});var n=s(6540);const t={},r=n.createContext(t);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);