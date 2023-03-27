"use strict";(self.webpackChunkaalmarhabi=self.webpackChunkaalmarhabi||[]).push([[1176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,h=p["".concat(s,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5110:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"greetings",title:"Greetings, Frist Post!",authors:[{name:"Alhussain Almarhabi",title:"Main author",url:"https://github.com/aalmarhabi",image_url:"https://github.com/aalmarhabi.png"}],tags:["greetings"]},i=void 0,l={permalink:"/blog/greetings",editUrl:"https://github.com/aalmarhabi/blog/2022-02-11--greetings.md",source:"@site/blog/2022-02-11--greetings.md",title:"Greetings, Frist Post!",description:"This is my first post on blog using Docusaurus.",date:"2022-02-11T00:00:00.000Z",formattedDate:"February 11, 2022",tags:[{label:"greetings",permalink:"/blog/tags/greetings"}],readingTime:1.19,hasTruncateMarker:!1,authors:[{name:"Alhussain Almarhabi",title:"Main author",url:"https://github.com/aalmarhabi",image_url:"https://github.com/aalmarhabi.png",imageURL:"https://github.com/aalmarhabi.png"}],frontMatter:{slug:"greetings",title:"Greetings, Frist Post!",authors:[{name:"Alhussain Almarhabi",title:"Main author",url:"https://github.com/aalmarhabi",image_url:"https://github.com/aalmarhabi.png",imageURL:"https://github.com/aalmarhabi.png"}],tags:["greetings"]},prevItem:{title:"Emacs, Taking Over Your Life!",permalink:"/blog/emacs"}},s={authorsImageUrls:[void 0]},c=[{value:"Front Matter",id:"front-matter",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],u=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},p={toc:c,Highlight:u},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is my first post on blog using Docusaurus."),(0,a.kt)("p",null,"Why Docusaurus? Made by Meta for a fast way to create documentation for a new project. Using it for my website is also helpful to be familiar with it in the future."),(0,a.kt)("h1",{id:"markdown-features"},"Markdown Features:"),(0,a.kt)("p",null,"Since this is the frist post. I will include some mardown features to use with Docusaurus."),(0,a.kt)("h2",{id:"front-matter"},"Front Matter"),(0,a.kt)("p",null,"Metadata at the top."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"---\nid: my-doc-id\ntitle: My document title\ndescription: My document description is here\nslug; /my-custom-url\n---\n")),(0,a.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/hello.rs"',title:'"src/hello.rs"'},'fn main(){\n    println!("Hello, Friends!");\n}\n\n')),(0,a.kt)("h2",{id:"admonitions"},"Admonitions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,a.kt)("admonition",{title:"Take care",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Thank you!")),(0,a.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,a.kt)("p",null,"MDX can make your allows using any React components inside Markdown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n\nThis is <Highlight color=\"#1877F2\">Facebook blue</Highlight> !\n")),(0,a.kt)("p",null,"This is ",(0,a.kt)(u,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,a.kt)("p",null,"This is ",(0,a.kt)(u,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"))}g.isMDXComponent=!0}}]);