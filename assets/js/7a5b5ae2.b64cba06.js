"use strict";(self.webpackChunktest_api=self.webpackChunktest_api||[]).push([[781],{1105:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=n(4848),t=n(8453);const s={title:"Phlame Directory Structure",sidebar_position:6},c=void 0,o={id:"directory-structure",title:"Phlame Directory Structure",description:"Phlame is a microframework that comes with a default directory structure to help developers organize their projects efficiently. Let's explore the default directory structure and guidelines for using Phlame:",source:"@site/docs/directory-structure.md",sourceDirName:".",slug:"/directory-structure",permalink:"/docs/directory-structure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Phlame Directory Structure",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Additional Functions",permalink:"/docs/response-management/additional-functions"}},l={},d=[{value:"Directory Structure",id:"directory-structure",level:3},{value:"Directory Structure Overview:",id:"directory-structure-overview",level:3},{value:"Guidelines for Developers:",id:"guidelines-for-developers",level:3},{value:"Default .htaccess Configuration:",id:"default-htaccess-configuration",level:3}];function a(e){const r={admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Phlame is a microframework that comes with a default directory structure to help developers organize their projects efficiently. Let's explore the default directory structure and guidelines for using Phlame:"}),"\n",(0,i.jsx)(r.h3,{id:"directory-structure",children:"Directory Structure"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-txt",children:"root:.\r\n\u2502   index.php\r\n\u2502\r\n\u251c\u2500\u2500\u2500.config\r\n\u2502       _404.php\r\n\u2502       _init.php\r\n\u2502\r\n\u251c\u2500\u2500\u2500serve\r\n\u2502       Apiconn.php\r\n\u2502       Router.php\r\n\u2502       Source.php\r\n\u2502\r\n\u251c\u2500\u2500\u2500source\r\n\u2502       index.src.php\r\n\u2502\r\n\u2514\u2500\u2500\u2500static\n"})}),"\n",(0,i.jsx)(r.h3,{id:"directory-structure-overview",children:"Directory Structure Overview:"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.strong,{children:["Root Directory (",(0,i.jsx)(r.code,{children:"./"}),")"]}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Contains the main ",(0,i.jsx)(r.code,{children:"index.php"})," file, which serves as the entry point for the application."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:".config"})," Directory"]}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Contains configuration files for the framework."}),"\n",(0,i.jsxs)(r.li,{children:["Includes ",(0,i.jsx)(r.code,{children:"_404.php"})," for handling 404 errors and ",(0,i.jsx)(r.code,{children:"_init.php"})," for initializing the framework."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"serve"})," Directory"]}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Contains essential framework files, including classes and utilities."}),"\n",(0,i.jsxs)(r.li,{children:["Includes ",(0,i.jsx)(r.code,{children:"Apiconn.php"}),", ",(0,i.jsx)(r.code,{children:"Router.php"}),", and ",(0,i.jsx)(r.code,{children:"Source.php"})," for handling API connections, routing, and source management, respectively."]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"danger",children:(0,i.jsxs)(r.p,{children:["Do not edit the codes inside the files present in the ",(0,i.jsx)(r.code,{children:"server"})," directory without clear understanding of them, as it may modify the functionality of the Classes, and may result in unexpected behaviour in the API Server."]})}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"source"})," Directory"]}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Intended for storing source files used by the application."}),"\n",(0,i.jsx)(r.li,{children:"Developers can add their source files here."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsxs)(r.strong,{children:[(0,i.jsx)(r.code,{children:"static"})," Directory"]}),":"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Reserved for storing static files, such as CSS, JavaScript, or images."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"guidelines-for-developers",children:"Guidelines for Developers:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Routing"}),": Developers can define routing rules in ",(0,i.jsx)(r.code,{children:"index.php"})," to manage incoming requests."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Source Files"}),": Store source files (e.g., PHP scripts) in the ",(0,i.jsx)(r.code,{children:"source"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:"Static Files"}),": Place static files (e.g., CSS, JavaScript) in the ",(0,i.jsx)(r.code,{children:"static"})," directory."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.strong,{children:".htaccess File"}),": Phlame provides a ",(0,i.jsx)(r.code,{children:".htaccess"})," file to enable routing and restrict direct access to the ",(0,i.jsx)(r.code,{children:"source"})," directory. For security purposes, developers are advised not to modify the ",(0,i.jsx)(r.code,{children:".htaccess"})," file directly."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"default-htaccess-configuration",children:"Default .htaccess Configuration:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-apache",children:"<IfModule mod_rewrite.c>\r\n    # Enable RewriteEngine\r\n    RewriteEngine On\r\n\r\n    # Set RewriteBase if your application is not in the root directory\r\n    # RewriteBase /\r\n\r\n    # Block direct access to the source directory\r\n    RewriteRule ^source/ - [F]\r\n\r\n    # Route requests to index.php for processing\r\n    RewriteCond %{REQUEST_FILENAME} !-f\r\n    RewriteCond %{REQUEST_FILENAME} !-d\r\n    RewriteRule ^ index.php [L]\r\n</IfModule>\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"caution",children:(0,i.jsx)(r.p,{children:"Without .htaccess many servers will not allow Routing, make sure you have .htaccess, if not, you can use the code provided above."})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>o});var i=n(6540);const t={},s=i.createContext(t);function c(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);