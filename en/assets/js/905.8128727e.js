/*! For license information please see 905.8128727e.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[905],{9058:(e,t,n)=>{n.d(t,{Z:()=>E});var a=n(7294),r=n(6010),l=n(3028),o=n(7524),i=n(9960),s=n(5999);const c="sidebar_re4s",u="sidebarItemTitle_pO2u",m="sidebarItemList_Yudw",d="sidebarItem__DBe",f="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function g(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(c,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(u,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,r.Z)(m,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:d},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:h},e.title)))))))}var p=n(3102);function v(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function b(e){return a.createElement(p.Zo,{component:v,props:e})}function k(e){let{sidebar:t}=e;const n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?a.createElement(b,{sidebar:t}):a.createElement(g,{sidebar:t}):null}function E(e){const{sidebar:t,toc:n,children:o,...i}=e,s=t&&t.items.length>0;return a.createElement(l.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(k,{sidebar:t}),a.createElement("main",{className:(0,r.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},7624:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),r=n(6010),l=n(5999),o=n(8824),i=n(9460);const s="container_mt6G";function c(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,o.c)();return t=>{const n=Math.ceil(t);return e(n,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function u(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function m(){return a.createElement(a.Fragment,null," \xb7 ")}function d(e){let{className:t}=e;const{metadata:n}=(0,i.C)(),{date:l,formattedDate:o,readingTime:d}=n;return a.createElement("div",{className:(0,r.Z)(s,"margin-vert--md",t)},a.createElement(u,{date:l,formattedDate:o}),void 0!==d&&a.createElement(a.Fragment,null,a.createElement(m,null),a.createElement(c,{readingTime:d})))}},4714:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(7294),r=n(6010),l=n(9460),o=n(4996);function i(e){var t,n;let{children:r,className:i}=e;const{frontMatter:s,assets:c,metadata:{description:u}}=(0,l.C)(),{withBaseUrl:m}=(0,o.C)(),d=null!=(t=c.image)?t:s.image,f=null!=(n=s.keywords)?n:[];return a.createElement("article",{className:i,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&a.createElement("meta",{itemProp:"description",content:u}),d&&a.createElement("link",{itemProp:"image",href:m(d,{absolute:!0})}),f.length>0&&a.createElement("meta",{itemProp:"keywords",content:f.join(",")}),r)}var s=n(9960);const c="title_f1Hy";function u(e){let{className:t}=e;const{metadata:n,isBlogPostPage:o}=(0,l.C)(),{permalink:i,title:u}=n,m=o?"h1":"h2";return a.createElement(m,{className:(0,r.Z)(c,t),itemProp:"headline"},o?u:a.createElement(s.Z,{itemProp:"url",to:i},u))}var m=n(1324);function d(e){return e.href?a.createElement(s.Z,e):a.createElement(a.Fragment,null,e.children)}function f(e){let{author:t,className:n}=e;const{name:l,title:o,url:i,imageURL:s,email:c}=t,u=i||c&&"mailto:"+c||void 0;return a.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",n)},s&&a.createElement(d,{href:u,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:s,alt:l,itemProp:"image"})),l&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(d,{href:u,itemProp:"url"},a.createElement("span",{itemProp:"name"},l))),o&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const h="authorCol_Hf19",g="imageOnlyAuthorRow_pa_O",p="imageOnlyAuthorCol_G86a";function v(e){let{className:t}=e;const{metadata:{authors:n},assets:o}=(0,l.C)();if(0===n.length)return null;const i=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",i?g:"row",t)},n.map(((e,t)=>{var n;return a.createElement("div",{className:(0,r.Z)(!i&&"col col--6",i?p:h),key:t},a.createElement(f,{author:{...e,imageURL:null!=(n=o.authorsImageUrls[t])?n:e.imageURL}}))})))}function b(){return a.createElement("header",null,a.createElement(u,null),a.createElement(m.Z,null),a.createElement(v,null))}var k=n(8780),E=n(8718);function x(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,l.C)();return a.createElement("div",{id:o?k.blogPostContainerID:void 0,className:(0,r.Z)("markdown",n),itemProp:"articleBody"},a.createElement(E.Z,null,t))}var w=n(4881),y=n(1526),N=n(7462),C=n(5999);function _(){return a.createElement("b",null,a.createElement(C.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function I(e){const{blogPostTitle:t,...n}=e;return a.createElement(s.Z,(0,N.Z)({"aria-label":(0,C.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(_,null))}const j="blogPostFooterDetailsFull_mRVl";function S(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:n,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,u=n.length>0;return u||c||i?a.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",t&&j)},u&&a.createElement("div",{className:(0,r.Z)("col",{"col--9":c})},a.createElement(y.Z,{tags:n})),t&&i&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(w.Z,{editUrl:i})),c&&a.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":u})},a.createElement(I,{blogPostTitle:o,to:e.permalink}))):null}function R(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(i,{className:(0,r.Z)(o,n)},a.createElement(b,null),a.createElement(x,null,t),a.createElement(S,null))}},4881:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294),r=n(5999),l=n(5281),o=n(7462),i=n(6010);const s="iconEdit_Z9Sw";function c(e){let{className:t,...n}=e;return a.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function u(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:l.k.common.editThisPage},a.createElement(c,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2244:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010),l=n(9960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:i}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},3008:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),l=n(9960);const o="tag_zVej",i="tagRegular_sFm0",s="tagWithCount_h2kH";function c(e){let{permalink:t,label:n,count:c}=e;return a.createElement(l.Z,{href:t,className:(0,r.Z)(o,c?s:i)},n,c&&a.createElement("span",null,c))}},1526:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),l=n(5999),o=n(3008);const i="tags_jXut",s="tag_QGVx";function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:s},a.createElement(o.Z,{label:t,permalink:n}))}))))}},9460:(e,t,n)=>{n.d(t,{C:()=>i,n:()=>o});var a=n(7294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,content:n,isBlogPostPage:r=!1}=e;const o=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:r});return a.createElement(l.Provider,{value:o},t)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},8824:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(7294),r=n(2263);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+t.message+"\n"),i}}),[e])}function c(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);const r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}},5251:(e,t,n)=>{var a=n(7294),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,l={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,a)&&!s.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:l,_owner:i.current}}t.Fragment=l,t.jsx=c,t.jsxs=c},5893:(e,t,n)=>{e.exports=n(5251)},4232:(e,t,n)=>{n.d(t,{cn:()=>F,ts:()=>M});var a=n(7294),r=n(5893),l=n(3935);function o(e,t){if(!e||"$auto"===e)return t?.toString()||(typeof window<"u"?window.location.href:"/");if("$path"===e){"string"==typeof t&&(t=new URL(t));let e=t||(typeof window<"u"?window.location:void 0);return e?`${e.origin}${e.pathname}`:"/"}return e}var i="fbs-store";function s(e){return"contentId"in e?e.contentId:`${e.contentSetId}/${o(e.key)}`}var c,u;function m(e){return e??=u||"local",c&&u===e?c:(u=e,c=new class{constructor(e){if(this.feelbacks=void 0,e??="local",typeof window>"u"&&(e="memory"),"local"===e)this.storage=window.localStorage;else if("session"===e)this.storage=window.sessionStorage;else{let e=()=>{};this.storage={getItem:e,setItem:e,removeItem:e,clear:e,key:e,length:0}}this.load()}add(e){let t=s(e.target),n=(this.feelbacks??=[]).findIndex((e=>e.key===t));n>=0&&this.feelbacks.splice(n,1),this.feelbacks.push({key:t,value:e.value,expire:e.expireIn&&e.expireIn>0?Math.floor(Date.now()/1e3)+e.expireIn:void 0,feelbackId:e.feelbackId,revokeToken:e.revokable?.token,revokeExpire:e.revokable?.expireAt&&Math.floor(new Date(e.revokable.expireAt).getTime()/1e3)||void 0}),this.save()}clear(){this.feelbacks?.splice(0,this.feelbacks.length),this.storage.removeItem(i)}remove(e){let t="string"==typeof e?this.feelbacks?.findIndex((t=>t.feelbackId===e)):(e=s(e),this.feelbacks?.findIndex((t=>t.key===e)));void 0!==t&&t>=0&&(this.feelbacks.splice(t,1),this.save())}getValue(e){return this.getFeelback(e)?.value}isRevokable(e){return!!this.getRevocable(e)}getRevocable(e){let t=this.getFeelback(e);if(t&&t.revokeToken&&!(t.revokeExpire&&t.revokeExpire<Date.now()/1e3))return{feelbackId:t.feelbackId,revokeToken:t.revokeToken}}load(e){if(this.feelbacks&&!e)return;let t;try{t=JSON.parse(this.storage.getItem(i))||[]}catch{t=[]}this.feelbacks=t.filter((e=>!e.expire||e.expire>Date.now()/1e3)),t.length!==this.feelbacks.length&&this.save()}save(){try{this.storage.setItem(i,JSON.stringify(this.feelbacks))}catch{}}getFeelback(e){let t="string"==typeof e?this.feelbacks?.find((t=>t.feelbackId===e)):(e=s(e),this.feelbacks?.find((t=>t.key===e)));if(!(t&&t.expire&&t.expire<Date.now()/1e3))return t;this.remove(t.feelbackId)}}(e))}async function d(e){if((e=await e).status>=400)throw new Error("[feelback] API error");if(204!==e.status)return await e.json()}var f={get:async function(e,...t){return t.length>0&&(e=`${e}?$p=${JSON.stringify(t)}`),await d(fetch(e,{method:"GET"}))},post:async function(e,...t){return await d(fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}))}},h="https://api.feelback.dev/v0";var g=(0,a.createContext)(void 0);function p(){return(0,a.useContext)(g)}function v(e=5e3,t,n){(0,a.useEffect)((()=>{if(t)return function(e,t){let n=setTimeout(t,e);return()=>clearTimeout(n)}(e,(()=>n(t)))}),[t])}function b(e=5e3,t=!1){let n=(0,a.useRef)(t),[r,l]=(0,a.useState)(),o=(0,a.useCallback)((()=>i(n.current)),[]),i=(0,a.useCallback)((e=>l(e??!0)),[]);return v(e,r,o),{value:r,set:i,reset:o}}function k(e,t){let n=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(e&&t){let e=e=>{(!e.target||!n.current?.contains(e.target))&&(t(),e.stopPropagation(),e.preventDefault())};return document.addEventListener("click",e,{capture:!0}),()=>document.removeEventListener("click",e,{capture:!0})}}),[e]),n}var E={data:void 0,isLoading:!1,isCompleted:!1,isSuccess:!1,isError:!1,error:void 0};function x(e,t,n){let r=(0,a.useRef)(0),l=(()=>{let e=(0,a.useRef)(!1);return(0,a.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),()=>e.current})(),o=!!n?.paused,i=!!t&&!o,[s,c]=(0,a.useReducer)(w,i,(e=>({...E,isLoading:e})));async function u(...t){let n=++r.current;try{s.isLoading||c({type:"LOADING"});let a=await e(...t);return l()&&n===r.current&&c({type:"SUCCESS",data:a}),w(s,{type:"SUCCESS",data:a})}catch(a){return l()&&n===r.current&&c({type:"ERROR",error:a}),w(s,{type:"ERROR",error:a})}}return(0,a.useEffect)((()=>{!o&&t&&u()}),[o,...t||[]]),{...s,call:u,exec:async(...e)=>{let t=await u(...e);if(t.error)throw t.error;return t.data},reset:()=>{c({type:"RESET"})}}}function w(e,t){switch(t.type){case"LOADING":return{...E,isLoading:!0,data:e.data};case"SUCCESS":return{...E,isCompleted:!0,isSuccess:!0,data:t.data};case"ERROR":return{...E,isCompleted:!0,error:t.error,isError:!0};case"RESET":return{...E};default:throw new Error("unknown action")}}function y(){let e=(0,a.useRef)("");return e.current||(e.current="i"+Math.random().toString().substring(2)),e.current}function N(e){if("function"==typeof e)return(0,a.createElement)(e);if("object"==typeof e&&"text"in e)return(0,a.createElement)(a.Fragment,void 0,[e.text]);if((0,a.isValidElement)(e))return e;throw console.error("Invalid icon",e),new Error("Invalid icon")}function C(e,t){return e&&t?function(){e.apply(this,arguments),t.apply(this,arguments)}:e||t}function _(e){let{count:t=!1,isActive:n=!1,isDisabled:a=!1,label:l,title:o,icon:i,onClick:s}=e;return(0,r.jsxs)("button",{title:o,className:`feelback-btn ${a?"disabled":""} ${n?"active":""}`,onClick:s,children:[i&&(Array.isArray(i)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"feelback-icon inactive",children:N(i[0])}),(0,r.jsx)("span",{className:"feelback-icon active",children:N(i[1])})]}):(0,r.jsx)("span",{className:"feelback-icon",children:N(i)})),l&&(0,r.jsx)("span",{className:"label",children:l}),!1!==t&&(0,r.jsx)("span",{className:"feelback-count",children:t})]})}function I(e){let{active:t,showCount:n=!1,showLabels:a=!1,showTitle:l=!a,hideZero:o=!1,hideZeroCount:i=!0,isDisabled:s=!1,items:c,counts:u,onClick:m}=e;return(0,r.jsx)("div",{className:"feelback-buttons"+(n&&c.length>1?" with-count":""),children:c.map((({value:e,icon:c,title:d},f)=>{let h=u?.[f]||(t===e?1:0);return o&&h<=0?null:(0,r.jsx)(_,{title:l&&d||void 0,label:a&&d||void 0,icon:c,count:n&&h||(i?void 0:0),isDisabled:s,isActive:t===e,onClick:()=>m?.(e)},e)}))})}function j(e){let{group:t,value:n,label:a,description:l,checked:o,onSelected:i}=e,s=`radio-${y()}`;return(0,r.jsxs)("div",{className:"feelback-radio-item",children:[(0,r.jsx)("input",{id:s,name:t,type:"radio",value:n,checked:o,onChange:e=>e.target.checked?i?.():void 0}),(0,r.jsxs)("div",{className:"feelback-radio-side",children:[a&&(0,r.jsx)("label",{htmlFor:s,children:a}),l&&(0,r.jsx)("span",{className:"feelback-text",children:l})]})]})}function S(e){let{active:t,isDisabled:n=!1,items:a,onRenderAddon:l,onSelected:o}=e,i=`rg-${y()}`;return(0,r.jsx)("fieldset",{className:"feelback-radio-group",children:a.map((e=>(0,r.jsxs)("div",{className:"feelback-radio-item-wrap",children:[(0,r.jsx)(j,{group:i,checked:t===e.value,value:e.value,label:e.title,description:e.description,onSelected:()=>o?.(e.value)}),l?.({item:e,isSelected:t===e.value,isDisabled:n})||null]},e.value)))})}function R(e){let{text:t,...n}=e;return(0,r.jsxs)("div",{className:"feelback-q",children:[t&&"string"==typeof t&&(0,r.jsx)("span",{className:"feelback-text",children:t}),t&&(0,a.isValidElement)(t)&&t,(0,r.jsx)(I,{...n})]})}function P(e){let{text:t}=e;return(0,r.jsx)("div",{className:"feelback-a",children:(0,r.jsx)("span",{className:"feelback-text",children:t})})}(0,a.forwardRef)(((e,t)=>{let{className:n,layout:l,label:o="Send feedback",textAnswer:i="Thanks for your feedback",revokable:s=!0,onClose:c,onSuccess:u,children:m,...d}=e,{call:f,isSuccess:h}=O(d),{value:g,set:p}=b(1e3),v=({value:e,metadata:t})=>{p(!0),f(e,{metadata:t,revokable:s}).then((({isSuccess:t})=>{t&&u?.({...d,value:e})}))};return(0,r.jsxs)("div",{ref:t,className:"feelback-container"+(n?" "+n:""),style:{pointerEvents:g?"none":void 0},children:[!h&&(()=>{switch(l){case"button-switch":return(0,r.jsx)(Z,{label:o,behavior:"remove-when-open",children:e=>(0,a.cloneElement)(m,{onSubmit:v,onCancel:e})});case"button-dialog":return(0,r.jsx)(Z,{label:o,behavior:"disable-when-open",children:e=>(0,r.jsx)(T,{onClose:e,children:(0,a.cloneElement)(m,{onSubmit:v,onCancel:e})})});case"radio-group-dialog":return(0,r.jsx)(T,{onClose:c,children:(0,a.cloneElement)(m,{onSubmit:v,onCancel:C(m.props.onCancel,c)})});default:return(0,a.cloneElement)(m,{onSubmit:v})}})(),h&&(0,r.jsx)(P,{text:i})]})}));function Z(e){let{label:t,behavior:n="remove-when-open",children:l}=e,[o,i]=(0,a.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(!o||"remove-when-open"!==n)&&(0,r.jsx)("button",{className:"feelback-btn btn-action trigger-btn",disabled:o,onClick:()=>i(!0),children:t}),o&&l((()=>i(!1)))]})}function T(e){let{onClose:t,children:n}=e,o=k(!0,t);return(0,l.createPortal)((0,r.jsx)("div",{className:"feelback-style",children:(0,r.jsx)("div",{className:"dialog",children:(0,a.cloneElement)(n,{ref:o})})}),document.body)}var L=(0,a.forwardRef)(((e,t)=>{let{title:n="Send feedback",alignButton:a="right",showButton:l=!0,onCancel:o,onSubmit:i,onValidate:s,slots:c,children:u}=e;return(0,r.jsx)("div",{ref:t,className:"feelback-form",children:(0,r.jsxs)("div",{className:"content",children:[n&&(0,r.jsx)("span",{className:"feelback-text form-title",children:n}),u,l&&c?.BeforeFormButtons,l&&(0,r.jsxs)("div",{className:"form-buttons feelback-buttons "+("right"===a?"align-end":""),children:[(0,r.jsx)("button",{className:"feelback-btn btn-action",onClick:()=>{let e=s();void 0!==e&&i?.(e)},children:"Send"}),o&&(0,r.jsx)("button",{className:"feelback-btn btn-cancel",onClick:o,children:"Cancel"})]})]})})}));function F(e){let{showCount:t,preset:n,revokable:a=!0,...l}=e,{value:o,isRevokable:i}=D(l)||{},{data:s}=B(l,{paused:!t}),{call:c}=O(l),{call:u}=$(l),{value:m,set:d}=b(1e3);return n&&0!==n.length?(0,r.jsx)("div",{className:"feelback-container feelback-pulse",style:{pointerEvents:m?"none":void 0},children:(0,r.jsx)(I,{items:n,showCount:t,counts:s,isDisabled:void 0!==o&&!i,active:o,onClick:()=>{"+"===o?i&&(d(!0),u()):(d(!0),c("+",{revokable:a}))}})}):(console.warn("[feelback] Invalid preset or items"),null)}(0,a.forwardRef)(((e,t)=>{let{title:n="Send feedback",placeholder:l="Type your message",minLength:o,maxLength:i,withEmail:s,placeholderEmail:c="your@email.com"+(s&&"required"!==s?" (optional)":""),slots:u,onCancel:m,onSubmit:d}=e,f=(0,a.useRef)(null),h="required"===s,g=(0,a.useRef)(null);return(0,r.jsxs)(L,{slots:u,title:n,onCancel:m,onSubmit:d,ref:t,onValidate:()=>{let e=f.current?.value.trim()||void 0,t=g.current?.value?.trim()||void 0;if(e&&!(o&&o>0&&e.length<o)&&!(t&&!t.match(/^(.+)@(.+)$/)||h))return{value:e,metadata:t?{$user:t}:void 0}},children:[u?.BeforeMessage,(0,r.jsx)("textarea",{ref:f,required:!0,placeholder:l||void 0,minLength:o,maxLength:i}),s&&(0,r.jsxs)(r.Fragment,{children:[u?.BeforeEmail,(0,r.jsx)("input",{ref:g,type:"email",name:"email",required:h,placeholder:c||void 0})]})]})}));(0,a.forwardRef)(((e,t)=>{let{layout:n,title:l="Send feedback",active:o,tags:i,showLabels:s=!0,placeholder:c="Type your message",minLength:u,maxLength:m,withEmail:d,placeholderEmail:f="your@email.com"+(d&&"required"!==d?" (optional)":""),slots:h,onCancel:g,onSubmit:p}=e,v=!!u&&u>0,b=(0,a.useRef)(null),k="required"===d,E=(0,a.useRef)(null),[x,w]=(0,a.useState)("$auto"===o?i[0].value:o),y=(0,r.jsxs)(r.Fragment,{children:[h?.BeforeMessage,(0,r.jsx)("textarea",{ref:b,required:v,placeholder:c||void 0,minLength:u,maxLength:m})]}),N=d&&(0,r.jsxs)(r.Fragment,{children:[h?.BeforeEmail,(0,r.jsx)("input",{ref:E,type:"email",name:"email",required:k,placeholder:f||void 0})]});return(0,r.jsxs)(L,{onCancel:g,onSubmit:p,ref:t,onValidate:()=>{let e=b.current?.value?.trim()||void 0,t=E.current?.value?.trim()||void 0;if(x&&(!v||e&&!(e.length<u))&&!(t&&!t.match(/^(.+)@(.+)$/)||k))return{value:{tag:x,message:e},metadata:t?{$user:t}:void 0}},title:"reveal-message"!==n&&l,showButton:"reveal-message"!==n||!!x,alignButton:"radio-group"===n?"left":"right",slots:h,children:["form"===n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,{items:i,showLabels:s,active:x,onClick:w}),y,N]}),"radio-group"===n&&(0,r.jsx)(S,{items:i,active:x,onSelected:w,onRenderAddon:({isSelected:e})=>e&&(0,r.jsxs)(r.Fragment,{children:[y,N]})}),"reveal-message"===n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(R,{text:l,items:i,showLabels:s,active:x,onClick:w}),x&&(0,r.jsxs)(r.Fragment,{children:[y,N]})]})]})}));function B(e,t){let n=p(),a=A(e);return x((()=>async function(e){let{endpoint:t=h}=e,n="contentId"in e?e.contentId:{contentSetId:e.contentSetId,key:o(e.key)};return await f.get(`${t}/feelbacks/getAggregates`,n)}({endpoint:n?.endpoint,...a})),[a],t)}function O(e){let t=p(),n=A(e);return x(((e,a)=>async function(e){let{endpoint:t=h,store:n="local",revokable:a=!0,value:r,metadata:l,expireIn:i=3600}=e,s="contentId"in e?{contentId:e.contentId}:{contentSetId:e.contentSetId,key:o(e.key)},c=n&&"none"!==n&&m(n)||void 0,u=a&&c?.getRevocable(s)||void 0,d=u?await f.post(`${t}/feelbacks/edit`,{...u,value:r}):await f.post(`${t}/feelbacks/create`,{...s,value:r,context:l,revokable:a});c?.add({...d,target:s,value:r,expireIn:i})}({endpoint:t?.endpoint,store:t?.store,...a,...n,value:e})))}function $(e){let t=p(),n=A(e);return x((async()=>{if("none"===t?.store)return;let e=m(t?.store).getRevocable(n);return e?await async function(e){let{endpoint:t=h,feelbackId:n}=e,a=e.revokeToken,r=m();if(!a){let e=r.getRevocable(n);if(!e)throw new Error("Cannot revoke feelback");a=e.revokeToken}await f.post(`${t}/feelbacks/remove`,{feelbackId:n,revokeToken:a}),r.remove(n)}({endpoint:t?.endpoint,feelbackId:e.feelbackId}):void 0}))}function D(e){let t=p();if("none"===t?.store)return;let n=m(t?.store)||void 0;return{value:n.getValue(e),isRevokable:n.isRevokable(e)}}function A(e){let t=(0,a.useRef)(e);return t.current!==e&&("contentId"in t.current&&"contentId"in e?t.current.contentId!==e.contentId&&t.current:"contentSetId"in t.current&&"contentSetId"in e?(t.current.contentSetId!==e.contentSetId||t.current.key!==e.key)&&(t.current=e):t.current=e),t.current}var M=[{value:"+",icon:[e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"currentColor",width:"1em",height:"1em",...e},a.createElement("path",{d:"M364.5,91.5c6,0,12.3,0.9,18.6,2.7c9.6,2.8,19.8,9.3,27.8,17.9c9.6,10.3,15.7,22.8,18,37.1c4.5,28-5.8,62.5-29.9,99.7 c-16.2,25-38.5,51.2-66.4,77.8c-23.6,22.5-51.3,45.5-82.7,68.5c-31.4-23.1-59.2-46-82.7-68.5c-27.8-26.6-50.2-52.7-66.4-77.8 c-24.1-37.2-34.4-71.7-29.8-99.7c2.3-14.3,8.4-26.8,18-37.1c8-8.6,18.2-15.1,27.9-17.9l0,0l0,0c6.4-1.8,12.5-2.7,18.6-2.7 c36.2,0,63,33.7,65.5,36.9l47.7,71l50.2-71.2C299.3,127.8,327.2,91.5,364.5,91.5 M364.5,31.5C293.8,31.5,250,93.6,250,93.6 s-43.7-62.1-114.4-62.1c-11.1,0-22.8,1.5-35.1,5C9.5,62.4-98.7,231.3,250,468.6C598.7,231.3,490.4,62.4,399.6,36.5 C387.3,33,375.6,31.5,364.5,31.5L364.5,31.5z"})),e=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500 500",fill:"currentColor",width:"1em",height:"1em",...e},a.createElement("path",{d:"M399.6,36.5c-91-26-149.6,57.1-149.6,57.1s-58.5-83.1-149.5-57.1C9.5,62.4-98.7,231.3,250,468.6 C598.7,231.3,490.4,62.4,399.6,36.5z"}))],title:"Love"}]}}]);