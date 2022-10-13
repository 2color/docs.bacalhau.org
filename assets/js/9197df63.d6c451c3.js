"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4241],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return r?t.createElement(m,i(i({ref:n},c),{},{components:r})):t.createElement(m,i({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9057:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Windows Support",sidebar_position:190},i="Windows support",s={unversionedId:"running-node/windows-support",id:"running-node/windows-support",title:"Windows support",description:"Running a Windows-based node is not officially supported, so your mileage may vary. Some features (like resource limits) are not present in Windows-based nodes.",source:"@site/docs/running-node/windows-support.md",sourceDirName:"running-node",slug:"/running-node/windows-support",permalink:"/running-node/windows-support",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/windows-support.md",tags:[],version:"current",sidebarPosition:190,frontMatter:{sidebar_label:"Windows Support",sidebar_position:190},sidebar:"documentationSidebar",previous:{title:"GPU Support",permalink:"/running-node/gpu"},next:{title:"Examples",permalink:"/examples/"}},p={},u=[],c={toc:u};function l(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"windows-support"},"Windows support"),(0,o.kt)("p",null,"Running a Windows-based node is not officially supported, so your mileage may vary. Some features (like ",(0,o.kt)("a",{parentName:"p",href:"./resource-limits"},"resource limits"),") are not present in Windows-based nodes."),(0,o.kt)("p",null,"Bacalhau currently makes the assumption that all containers are Linux-based. Users of the Docker executor will need to manually ensure that their Docker engine is running and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/install/windows-install/"},"configured appropriately")," to support Linux containers, e.g. using the WSL-based backend."))}l.isMDXComponent=!0}}]);