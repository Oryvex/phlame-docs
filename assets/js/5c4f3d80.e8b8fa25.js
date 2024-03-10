"use strict";(self.webpackChunktest_api=self.webpackChunktest_api||[]).push([[8780],{230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(4848),o=t(8453);const r={title:"Setting Source File",sidebar_position:5},s=void 0,a={id:"routing-guide/setting-source",title:"Setting Source File",description:"Simplifying Callback Logic with Source Set Function",source:"@site/docs/routing-guide/setting-source.md",sourceDirName:"routing-guide",slug:"/routing-guide/setting-source",permalink:"/docs/routing-guide/setting-source",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Setting Source File",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Source Type Control",permalink:"/docs/routing-guide/source-type"},next:{title:"Handling Requests",permalink:"/docs/category/handling-requests"}},c={},l=[{value:"Streamlining Content Management with Source Set",id:"streamlining-content-management-with-source-set",level:3},{value:"Creating Source Files",id:"creating-source-files",level:3},{value:"Passing Variables to Source Files",id:"passing-variables-to-source-files",level:3},{value:"Controlling Content Type",id:"controlling-content-type",level:3},{value:"Example of a Phlame Setting Source",id:"example-of-a-phlame-setting-source",level:3}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Simplifying Callback Logic with Source Set Function\r\nIn Phlame, when handling callbacks for routes, lengthy logic can lead to cluttered code. To mitigate this issue and improve code organization, it's recommended to utilize the Source::set() function. This function allows developers to manage the content of their pages effectively while keeping the callback logic concise."}),"\n",(0,i.jsx)(n.h3,{id:"streamlining-content-management-with-source-set",children:"Streamlining Content Management with Source Set"}),"\n",(0,i.jsx)(n.p,{children:"By using the Source::set() function, you can seamlessly manage the content displayed on your web pages. Rather than embedding complex logic directly within the callback functions, you can simply set the appropriate source file using Source::set(). This approach enhances code readability and maintainability, making it easier to manage the application's structure."}),"\n",(0,i.jsx)(n.h3,{id:"creating-source-files",children:"Creating Source Files"}),"\n",(0,i.jsxs)(n.p,{children:["To create a source file, you need to navigate to the ",(0,i.jsx)(n.code,{children:"./source"})," folder and create a file with the following structure: ",(0,i.jsx)(n.code,{children:"<filename>.src.php."})," Once the source file is created, you can use the Source::set() function to specify the file to be used for rendering the page content like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"Source::set('<filename>');\n"})}),"\n",(0,i.jsx)(n.h3,{id:"passing-variables-to-source-files",children:"Passing Variables to Source Files"}),"\n",(0,i.jsx)(n.p,{children:"you can pass variables to source files by using the Source::set() function with an additional parameter. For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"Source::set('filename', ['variablename' => 'variable value', ...]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"This allows for dynamic content rendering based on the provided variables, enhancing the flexibility of the application."}),"\n",(0,i.jsx)(n.h3,{id:"controlling-content-type",children:"Controlling Content Type"}),"\n",(0,i.jsx)(n.p,{children:"By default, the Source::set() function assumes a content type of JSON. However, you can specify other content types by passing the desired type as a parameter. For example:"}),"\n",(0,i.jsx)(n.p,{children:"To specify no content type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"Source::set('filename', format: Source::nulltype());\n"})}),"\n",(0,i.jsx)(n.p,{children:"To specify a different content type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"Source::set('filename', format: 'content/type');\n"})}),"\n",(0,i.jsx)(n.p,{children:"This flexibility enables you to tailor the content type according to their application's requirements, ensuring compatibility with various data formats and rendering methods."}),"\n",(0,i.jsx)(n.h3,{id:"example-of-a-phlame-setting-source",children:"Example of a Phlame Setting Source"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:"title='index.php'",children:"<?php\r\nsession_start();\r\nrequire_once '.config/_init.php'; \r\n\r\n$router = new Router();\r\n\r\n// Add a static route\r\n$router->addRoute('/<name>', function($name) {\r\n  //highlight-next-line\r\n  Source::set('index', ['username' => $name]);\r\n});\r\n\r\n// More routes can be created\r\n\r\n$router->route();\r\n?>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Code in source file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",metastring:"title='source/index.src.php'",children:'<?php\r\necho json_encode(["Result" => $username]);\r\n?>\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is a simple example of source file setting"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["It is essential that the source file is found withing the ",(0,i.jsx)(n.code,{children:"./source"})," folder and follows the format ",(0,i.jsx)(n.code,{children:"<filename>.src.php"}),"."]})]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["You can use the method ",(0,i.jsx)(n.code,{children:"Source::empty()"})," to set value to a variable if it is missing.\r\n",(0,i.jsx)(n.strong,{children:"Example"})]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:'Source::empty($page, "newpage");\n'})}),(0,i.jsxs)(n.p,{children:["will check if the variable ",(0,i.jsx)(n.code,{children:"$page"})," exists, if not it'll create the variable and set its value as ",(0,i.jsx)(n.code,{children:"newpage"}),"."]})]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);