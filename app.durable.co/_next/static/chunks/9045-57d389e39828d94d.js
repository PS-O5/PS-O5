"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9045],{85750:function(n,e,o){var t=o(85893),r=o(75131),i=o(3732),l=o(91957);e.Z=function(n){var e=n.className,o=n.label,a=n.labelClassName,u=n.helper,c=n.helperClassName,s=n.fullWidth,d=n.disabled,v=n.value,f=n.options,p=n.onChange;return(0,t.jsxs)(r.E,{as:"div",className:(0,i.AK)("flex items-center justify-between gap-3",e),disabled:d,value:v,onChange:p,children:[(o||u)&&(0,t.jsxs)("div",{children:[o&&(0,t.jsx)(r.E.Label,{as:"p",className:(0,i.AK)(a||"text-sm font-medium text-gray-700",u?"mb-2":""),children:o}),u&&(0,t.jsx)(r.E.Description,{as:"p",className:(0,i.AK)(c||"text-sm text-gray-500"),children:u})]}),(0,t.jsx)("div",{className:(0,i.AK)("flex items-center",s&&"w-full"),children:f.map((function(n,e){return(0,t.jsx)(r.E.Option,{value:n.id,className:s?"flex-1 text-center":"",children:function(o){var r=o.checked;return(0,t.jsxs)("div",{className:(0,i.AK)("border-t border-b cursor-pointer transition-all",0===e?"border-l rounded-l-lg":"",e>=0?"border-r":"",e===f.length-1?"border-r rounded-r-lg":"",n.name?"py-2.5 px-4":"p-2.5",r?"bg-indigo-700 border-indigo-700 text-white":"border-gray-300 text-gray-500"),children:[n.icon&&(0,t.jsx)(l.Z,{icon:n.icon,className:"w-5 h-5"}),n.name&&(0,t.jsx)("p",{className:"text-label font-medium text-current",children:n.name})]})}},"radio-group-option-".concat(n.id,"-").concat(e))}))})]})}},61135:function(n,e,o){o.d(e,{Z:function(){return d}});var t=o(47568),r=o(97582),i=o(85893),l=o(67294),a=o(16494),u=o(91957),c=o(3732),s=o(33347);function d(n){var e=n.className,o=n.btnClassName,d=n.source,v=n.queryText,f=n.regenerate,p=n.onChange,g=n.autoSuggest,h=(0,l.useState)((0,c.tl)("business.config")),m=h[0],b=h[1],y=(0,l.useState)(!1),w=y[0],k=y[1],x=(0,l.useState)([]),_=x[0],N=x[1],Z=(0,l.useState)(""),j=Z[0],S=Z[1],L=(0,s.Z)(),P=L.get,F=L.post,C=function(){var n=(0,t.Z)((function(){var n;return(0,r.__generator)(this,(function(e){switch(e.label){case 0:return k(!0),[4,P("/business/get-config")];case 1:return(n=e.sent())&&!0===n.status&&n.content&&((0,c.Fs)("business.config",n.content),b(n.content)),k(!1),[2]}}))}));return function(){return n.apply(this,arguments)}}(),R=function(){var n=(0,t.Z)((function(n){var e,o;return(0,r.__generator)(this,(function(t){switch(t.label){case 0:return k(!0),[4,P("/media/search-from-library",{query:n,total:32})];case 1:return 0===(null===(o=t.sent())||void 0===o||null===(e=o.content)||void 0===e?void 0:e.length)&&c.Z9.warn("No images found. Please try searching for an image manually."),o&&o.status&&o.content&&N(o.content),k(!1),[2]}}))}));return function(e){return n.apply(this,arguments)}}(),I=function(){var n=(0,t.Z)((function(n){var e,o,t,i,l;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return k(!0),[4,F("/media/search-unsplash",{query:n,page:1})];case 1:return t=r.sent(),0===(i=(null===t||void 0===t||null===(e=t.content)||void 0===e||null===(o=e.response)||void 0===o?void 0:o.results)||[]).length&&c.Z9.warn("No images found. Please try a different search term manually."),l=i.map((function(n){var e,o;return{id:n.id,url:n.urls.regular,preview:n.urls.regular,author:null===(e=n.user)||void 0===e?void 0:e.first_name,authorLink:"".concat(n.user.links.html,"?utm_source=Durable.co&utm_medium=referral"),type:"unsplash",download:null===(o=n.links)||void 0===o?void 0:o.download_location,description:n.alt_description}})),S(n),N(l),k(!1),[2]}}))}));return function(e){return n.apply(this,arguments)}}(),A=function(){var n=(0,t.Z)((function(n){var e,o,t,i,l,a;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return[4,P("/media/search-shutterstock",{query:n,page:1,perPage:28})];case 1:return o=r.sent(),0===(t=(null===o||void 0===o||null===(e=o.content)||void 0===e?void 0:e.data)||[]).length&&c.Z9.warn("No images found. Please try a different search term manually."),a=t.map((function(n){var e,t,r,a;return{id:n.id,preview:null!==(l=null!==(i=null===(e=n.assets.preview_1500)||void 0===e?void 0:e.url)&&void 0!==i?i:null===(t=n.assets.preview_1000)||void 0===t?void 0:t.url)&&void 0!==l?l:null===(r=n.assets.preview)||void 0===r?void 0:r.url,url:null,author:null===(a=n.contributor)||void 0===a?void 0:a.id,type:"shutterstock",download:n.id,description:n.description,searchId:o.content.search_id}})),S(n),N(a),k(!1),[2]}}))}));return function(e){return n.apply(this,arguments)}}(),E=function(){var n=(0,t.Z)((function(n){var e,o,t,i;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return k(!0),[4,P("/media/search-icons",{query:n,page:1})];case 1:return o=r.sent(),0===(t=(null===o||void 0===o||null===(e=o.content)||void 0===e?void 0:e.icons)||[]).length&&c.Z9.warn("No icons found. Please try a different search term manually."),i=t.map((function(n){var e;return{id:n.id,url:n.preview_url,author:null===(e=n.uploader)||void 0===e?void 0:e.name,authorLink:"https://thenounproject.com".concat(n.permalink,"?utm_source=Durable.co&utm_medium=referral"),type:"icon",description:n.term}})),S(n),N(i),k(!1),[2]}}))}));return function(e){return n.apply(this,arguments)}}(),M=function(){var n=(0,t.Z)((function(n){var e;return(0,r.__generator)(this,(function(o){switch(o.label){case 0:return k(!0),[4,F("/media/create",{picture:n})];case 1:return(e=o.sent())&&!0===e.status&&e.content?p(e.content):c.Z9.error(e.message),k(!1),[2]}}))}));return function(e){return n.apply(this,arguments)}}(),O=function(){var n=(0,t.Z)((function(){var n,e;return(0,r.__generator)(this,(function(o){switch(o.label){case 0:return n=v||function(){var n,e,o,t,r,i,l,a,u,c;return(null===m||void 0===m||null===(n=m.business)||void 0===n||null===(e=n.type)||void 0===e?void 0:e.Type)&&"Other"!==(null===m||void 0===m||null===(o=m.business)||void 0===o||null===(t=o.type)||void 0===t||null===(r=t.Type)||void 0===r?void 0:r.name)?null===m||void 0===m||null===(i=m.business)||void 0===i||null===(l=i.type)||void 0===l||null===(a=l.Type)||void 0===a?void 0:a.queryTerm:null===m||void 0===m||null===(u=m.business)||void 0===u||null===(c=u.type)||void 0===c?void 0:c.name}(),_.length>0&&n===j?(e=(0,c.kd)(_),[4,M(e)]):[3,2];case 1:return o.sent(),[2];case 2:return"icons"===d?E(n):"shutterstock"===d?A(n):"unsplash"===d?I(n):R(n),[2]}}))}));return function(){return n.apply(this,arguments)}}();return(0,l.useEffect)((function(){if(_.length>0){var n=(0,c.kd)(_);M(n)}}),[_]),(0,l.useEffect)((function(){m||C()}),[]),(0,l.useEffect)((function(){g&&O()}),[g]),(0,i.jsx)("div",{className:(0,c.AK)("text-right",e),children:(0,i.jsx)("button",{disabled:w,onClick:O,className:(0,c.AK)("link inline-flex items-center gap-1 text-sm",o),children:w?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:f?"Regenerating":"Generating"}),(0,i.jsx)(a.Z,{variant:"icon"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{children:f?"Regenerate":"Generate"}),(0,i.jsx)(u.Z,{icon:"BoltIcon",className:"w-4 h-4"})]})})})}},49932:function(n,e,o){var t=o(26042),r=o(69396),i=o(85893),l=o(3732),a=o(67294),u=o(59435),c=(0,a.forwardRef)((function(n,e){var o=n.block,c=n.button,s=n.website,d=n.className,v=n.onClick,f=(0,a.useState)({borderWidth:2,borderStyle:"solid",boxShadow:"none"}),p=f[0],g=f[1];return c||(c=null===o||void 0===o?void 0:o.button),(0,a.useEffect)((function(){if(c&&o&&s){var n,e,i,a=(null===(n=s.colorPalette)||void 0===n||null===(e=n.Palette)||void 0===e?void 0:e.colors)||(null===(i=s.colorPalette)||void 0===i?void 0:i.colors)||[];if(a.length>0&&!s.noPaletteSupport){var d,v,f,p,h,m,b=a[(0,u.dz)(null===(d=o.layers)||void 0===d?void 0:d.palette)]||a[0];if(!c.style){var y=s.button||{background:s.secondaryColor,cornerRadius:8,style:"solid"};y.background||(y.background=s.secondaryColor),c.style={type:y.style,cornerRadius:y.cornerRadius,name:"custom"}}if("custom"===(null===(v=o.layers)||void 0===v?void 0:v.palette))b={color:null===(f=o.layers)||void 0===f||null===(p=f.overlay)||void 0===p?void 0:p.color1,accent:null===(h=o.layers)||void 0===h||null===(m=h.foreground)||void 0===m?void 0:m.accent};if("custom"===c.style.name)g((function(n){return(0,r.Z)((0,t.Z)({},n),{backgroundColor:"outline"===c.style.type?"transparent":b.accent,color:"outline"===c.style.type?(0,l.$O)(b.color):(0,l.$O)(b.accent),borderRadius:c.style.cornerRadius,borderColor:"outline"===c.style.type?(0,l.$O)(b.color):b.accent})}));else{var w=s.buttons&&s.buttons[c.style.name]||{type:"solid",cornerRadius:0};g((function(n){return(0,r.Z)((0,t.Z)({},n),{backgroundColor:"outline"===w.type?"transparent":b.accent,color:"outline"===w.type?(0,l.$O)(b.color):(0,l.$O)(b.accent),borderRadius:w.cornerRadius,borderColor:"outline"===w.type?(0,l.$O)(b.color):b.accent})}))}}else{var k=s.button||{background:s.secondaryColor,cornerRadius:8,style:"solid"};k.background||(k.background=s.secondaryColor),g((function(n){return(0,r.Z)((0,t.Z)({},n),{backgroundColor:"outline"===k.style?"transparent":k.background,color:"outline"===k.style?k.background:(0,l.$O)(k.background),borderRadius:isNaN(k.cornerRadius)?8:k.cornerRadius,borderColor:k.background})}))}}}),[c,o,s]),(0,i.jsx)("button",(0,r.Z)((0,t.Z)({},n),{className:(0,l.AK)("website-button",d),style:(0,t.Z)({},p,(0,l.SV)(s)),onClick:v,ref:e,children:null===c||void 0===c?void 0:c.label}))}));c.displayName="WebsiteButton",e.Z=c},91773:function(n,e,o){o.d(e,{y:function(){return c}});var t=o(26042),r=o(69396),i=o(85893),l=o(67294),a=(o(49932),o(3732)),u=(0,l.forwardRef)((function(n,e){var o,u,c,s=function(){if(y.current){var n=document.createRange(),e=y.current.childNodes[0];y.current.style.width="auto",n.setStartBefore(e),n.setEndAfter(e);var o=n.getBoundingClientRect(),t=Math.min(Math.max(o.width,0),200);y.current.style.width="".concat(t,"px")}},d=n.className,v=n.text,f=n.logo,p=n.color,g=n.font,h=n.location,m=void 0===h?"header":h,b=(0,a.ac)("(max-width: 1023px)"),y=(0,l.useRef)(null);return(0,l.useEffect)((function(){if(y.current){if((null===f||void 0===f?void 0:f.showIcon)&&(null===f||void 0===f?void 0:f.icon))return setTimeout((function(){s()}),100),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)};y.current.style.width="auto"}}),[y,v,f]),(null===f||void 0===f?void 0:f.showIcon)&&(null===f||void 0===f?void 0:f.icon)||(null===f||void 0===f?void 0:f.showText)&&v?(0,i.jsxs)("div",(0,r.Z)((0,t.Z)({"data-tour":"logo"},n),{ref:e,className:(0,a.AK)((null===f||void 0===f?void 0:f.showIcon)&&(null===f||void 0===f||null===(o=f.icon)||void 0===o?void 0:o.url)?"flex items-center gap-3 w-full max-w-[224px] lg:max-w-[260px] text-left":"grid max-w-full",d),children:[(null===f||void 0===f?void 0:f.showIcon)&&(null===f||void 0===f?void 0:f.icon)&&(0,i.jsx)("div",{className:"flex-shrink-0 relative w-9 h-9 md:w-12 md:h-12",children:(0,i.jsx)("div",{className:"absolute w-full h-full",style:{backgroundColor:p,WebkitMaskImage:'url("'.concat(null===f||void 0===f||null===(u=f.icon)||void 0===u?void 0:u.url,'")'),maskImage:'url("'.concat(null===f||void 0===f||null===(c=f.icon)||void 0===c?void 0:c.url,'")'),WebkitMaskPosition:"center",maskPosition:"center",WebkitMaskRepeat:"no-repeat",maskRepeat:"no-repeat",WebkitMaskSize:"contain",maskSize:"contain"}})}),(null===f||void 0===f?void 0:f.showText)&&v&&(0,i.jsx)("h2",{ref:y,className:(0,a.AK)("heading-small lg:heading-medium ",!((null===f||void 0===f?void 0:f.showIcon)&&(null===f||void 0===f?void 0:f.icon))&&"whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full"),style:(0,t.Z)({color:p},function(){var n;if((null===f||void 0===f?void 0:f.showText)&&v&&(null===f||void 0===f?void 0:f.showIcon)&&(null===f||void 0===f||null===(n=f.icon)||void 0===n?void 0:n.url)){var e=(6/(v.length||0)+.66)*(b?18:22),o=Math.min(Math.max(e,16),40);return{fontSize:"".concat(o,"px"),lineHeight:1.2}}return{}}(),{fontFamily:g?(null===g||void 0===g?void 0:g.family)||'"Inter", sans-serif':"var(--".concat("".concat(m,"-"),"logo-fontFamily)"),fontWeight:g?(null===g||void 0===g?void 0:g.weight)||500:"var(--".concat("".concat(m,"-"),"logo-fontWeight)")}),children:v})]})):null}));function c(n){var e=n.className,o=n.src,t=n.text,r=n.height;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{className:(0,a.AK)("hidden lg:block transition-all object-contain",e),src:o,alt:t,style:{height:"".concat((null===r||void 0===r?void 0:r.desktop)||80,"px")}}),(0,i.jsx)("img",{className:(0,a.AK)("lg:hidden transition-all object-contain",e),src:o,alt:t,style:{height:"".concat((null===r||void 0===r?void 0:r.mobile)||40,"px")}})]})}u.displayName="WebsiteButton",e.Z=u},23764:function(n,e,o){var t=o(67294);e.Z=function(n,e){var o=(0,t.useState)(e),r=o[0],i=o[1];return(0,t.useEffect)((function(){var e,o=function(e){var o=Array.isArray(n)?n:[n],t=!0;o.forEach((function(n){null!==n.current&&n.current.contains(e.target)&&(t=!1)})),t&&i(!1)};r&&(window.addEventListener("click",o),window.top.addEventListener("click",o),null===(e=window.preview)||void 0===e||e.addEventListener("click",o));return function(){var n;window.removeEventListener("click",o),window.top.removeEventListener("click",o),null===(n=window.preview)||void 0===n||n.removeEventListener("click",o)}}),[r,n]),[r,i]}},27286:function(n,e,o){o.d(e,{Z:function(){return c}});var t=o(47568),r=o(29815),i=o(97582),l=o(3732),a=o(33347),u=o(74906);function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.pictures,o=(0,a.Z)(),c=o.get,s=o.post,d=(0,u.Z)(),v=d.post,f=function(){var n=(0,t.Z)((function(n,e){var o;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,s("/media/search-unsplash",{query:n,perPage:e||28})];case 1:return(o=t.sent())&&o.status&&o.content&&o.content.response?[2,o.content.response.results.map((function(n){var e,o;return{id:n.id,preview:n.urls.regular,url:n.urls.regular,author:null===(e=n.user)||void 0===e?void 0:e.first_name,authorLink:n.user.links.html+"?utm_source=Durable.co&utm_medium=referral",type:"unsplash",download:null===(o=n.links)||void 0===o?void 0:o.download_location,description:n.alt_description}}))]:[2,[]]}}))}));return function(e,o){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)((function(n,e){var o;return(0,i.__generator)(this,(function(t){switch(t.label){case 0:return[4,c("/media/search-from-library",{query:n,total:!e||e<1?16:e})];case 1:return(o=t.sent())&&o.status&&o.content?[2,o.content.map((function(n){return{id:n.id,preview:n.url,url:n.url,author:n.author,authorLink:n.authorLink,type:n.provider,download:n.download,description:n.description,blocks:n.blocks}}))]:[2,[]]}}))}));return function(e,o){return n.apply(this,arguments)}}(),g=function(){var n=(0,t.Z)((function(n,e){var o,t;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return e||(e=[{id:"20860",url:"https://static.thenounproject.com/png/20860-200.png",author:"Lubo\u0161 Volkov",authorLink:"https://thenounproject.com/term/square/20860?utm_source=Durable.co&utm_medium=referral",type:"icon"},{id:"12249",url:"https://static.thenounproject.com/png/12249-200.png",author:"Laura Castanheira Machado",authorLink:"https://thenounproject.com/term/circle/12249?utm_source=Durable.co&utm_medium=referral",type:"icon"},{id:"3037224",url:"https://static.thenounproject.com/png/3037224-200.png",author:"Adrien Coquet",authorLink:"https://thenounproject.com/term/icon/3037224?utm_source=Durable.co&utm_medium=referral",type:"icon"}]),[4,c("/media/search-icons",{query:n})];case 1:return(t=r.sent())&&t.status&&(null===(o=t.content)||void 0===o?void 0:o.icons)&&t.content.icons.length>2?[2,t.content.icons.slice(0,10).map((function(n){var e;return{id:n.id,url:n.preview_url,author:null===(e=n.uploader)||void 0===e?void 0:e.name,authorLink:"https://thenounproject.com".concat(n.permalink,"?utm_source=Durable.co&utm_medium=referral"),type:"icon",description:n.term,tags:n.tags}}))]:[2,e]}}))}));return function(e,o){return n.apply(this,arguments)}}(),h=function(){var n=(0,t.Z)((function(n,o,t,a){var u,c,s,d;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return u=null,e&&e.length>0?(o((function(n){var o=a?e.filter((function(n){var e;return null===(e=n.blocks)||void 0===e?void 0:e.includes(a)})):e;return 0===o.length&&(o=e),(u=(0,l.kd)(o.filter((function(e){return!n.filter((function(n){return n})).map((function(n){return n.url})).includes(e.url)}))))?(0,r.Z)(n).concat([u]):n})),[4,(0,l._v)(300)]):[3,2];case 1:if(i.sent(),u)return[2,u];i.label=2;case 2:return s=null!==(c=window.fallbackPictures)&&void 0!==c?c:[],t&&0!==(null===t||void 0===t?void 0:t.length)?[3,6]:n?[4,f(n,16)]:[3,4];case 3:return d=i.sent(),[3,5];case 4:d=s,i.label=5;case 5:t=d,i.label=6;case 6:return o((function(n){return(null===n||void 0===n?void 0:n.length)>0&&null!==n[0]&&(t=t.filter((function(e){return!n.filter((function(n){return n})).map((function(n){return n.id})).includes(e.id)}))),t=a?t.filter((function(n){var e,o;return(null===(e=n.blocks)||void 0===e?void 0:e.length)>0&&(null===(o=n.blocks)||void 0===o?void 0:o.includes(a))})):t.filter((function(n){var e;return 0===(null===(e=n.blocks)||void 0===e?void 0:e.length)})),0===t.length&&(t=s),u||(u=(0,l.kd)(t)),u?(0,r.Z)(n).concat([u]):n})),u?[3,8]:[4,(0,l._v)(300)];case 7:i.sent(),i.label=8;case 8:return[2,u]}}))}));return function(e,o,t,r){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)((function(n){var e;return(0,i.__generator)(this,(function(o){switch(o.label){case 0:return[4,p(n)];case 1:return(e=o.sent())&&0!==(null===e||void 0===e?void 0:e.length)?[3,3]:(console.log("No pictures found, using fallback pictures"),[4,f("placeholder")]);case 2:e=o.sent(),o.label=3;case 3:return window.fallbackPictures=e,[2]}}))}));return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,t.Z)((function(n,e,o){var t,r,l,a,u;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:switch(console.log("Generating logo..."),t="",o){case"light":case"dark":t="";break;case"warm":case"happy":case"gentle":t="Make it a little bit fun and playful.";break;case"cool":t="Make it cool and cutting-edge.";break;case"natural":t="Make it organic and natural.";break;case"energetic":t="Make it energetic.";break;case"retro":t="Make it a little bit retro."}return"generate-image-flat-vector",r={subject:"".concat(n," and ").concat(e),moodPhrase:t},[4,v("/ai/generate-public",{body:{prompt:"generate-image-flat-vector",stream:!1,variant:"best",data:r}})];case 1:return l=i.sent().content,(a=(null===l||void 0===l?void 0:l.length)>0?l[0]:null)?(console.log("Logo generated successfully, saving it..."),[4,s("/media/save-ai-logo",{url:a,vertical:n,mood:o})]):[3,3];case 2:return(u=i.sent())&&u.status&&u.content?(console.log("Logo saved successfully!"),[2,u.content]):[2,a];case 3:return[2,null];case 4:return[2]}}))}));return function(e,o,t){return n.apply(this,arguments)}}();return{searchUnsplash:f,searchIcons:g,getFallbackPictures:m,getMatchingPicture:h,generateLogoViaAI:b}}},59435:function(n,e,o){o.d(e,{IF:function(){return f},Oc:function(){return h},S6:function(){return m},St:function(){return y},Vh:function(){return s},Wf:function(){return p},YJ:function(){return b},dW:function(){return d},dz:function(){return u},mQ:function(){return a},n2:function(){return v},ow:function(){return c},uZ:function(){return g}});var t=o(26042),r=o(69396),i=o(10253),l=o(3732),a=[{id:"top-down",value:"180deg",icon:"ArrowDownIcon"},{id:"left-right",value:"90deg",icon:"ArrowRightIcon"},{id:"bottom-left-top-right",value:"45deg",icon:"ArrowUpRightIcon"},{id:"bottom-right-top-left",value:"315deg",icon:"ArrowUpLeftIcon"}];function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"color1";return parseInt((null===n||void 0===n?void 0:n.replace(/[^0-9]/gi,""))||1,10)-1}var c=function(n,e,o){var t,r=u(e);return(null===n||void 0===n?void 0:n.colors)&&!isNaN(r)?null===(t=n.colors[r])||void 0===t?void 0:t[o]:"#FFFFFF"},s=function(n,e){var o=u(e);return(null===n||void 0===n?void 0:n.colors)&&!isNaN(o)?n.colors[o]:{color:"#FFFFFF",accent:"#000000"}},d=function(n){var e=[],o=function(e,o){var t=n.find((function(n){return n.name===o}));return{id:e._id,name:"".concat(e.name," + ").concat(t.name||e.name),head:e,body:t||e}},t=!0,r=!1,l=void 0;try{for(var a,u=function(){var t=(0,i.Z)(a.value,2),r=t[0],l=t[1],u=n.find((function(n){return n.name===r}));if(u)if(Array.isArray(l)){var c=!0,s=!1,d=void 0;try{for(var v,f=l[Symbol.iterator]();!(c=(v=f.next()).done);c=!0){var p=v.value;e.push(o(u,p))}}catch(g){s=!0,d=g}finally{try{c||null==f.return||f.return()}finally{if(s)throw d}}}else e.push(o(u,l))},c=Object.entries({Alegreya:"Open Sans","Archivo Narrow":"Crimson Pro",Arvo:"Lato","Bree Serif":"Nunito Sans",Cabin:"Raleway",Cardo:"Lato",Cormorant:"Proza Libre","Dancing Script":"Quicksand","EB Garamond":"EB Garamond","Exo 2":"Inter",Itim:"Poppins","Josefin Sans":"Libre Baskerville","Libre Franklin":"Libre Baskerville",Lusitana:"Source Sans Pro",Merriweather:"Mulish","Noto Serif":"Rubik",Ovo:"Quattrocento",Oswald:"Quattrocento",Quattrocento:"Quattrocento Sans",Pacifico:"Open Sans","Permanent Marker":"Mukta","PT Sans Narrow":"Nunito Sans",Roboto:"Poppins","Roboto Slab":"Roboto",Rufina:"PT Serif","Slabo 13px":"Lato","Slabo 27px":"Lato",Ubuntu:"Open Sans",Varela:"PT Sans","Varela Round":"PT Sans","Work Sans":["Open Sans","Taviraj"]})[Symbol.iterator]();!(t=(a=c.next()).done);t=!0)u()}catch(s){r=!0,l=s}finally{try{t||null==c.return||c.return()}finally{if(r)throw l}}return e};function v(n){var e;return"instagram"===(null===n||void 0===n||null===(e=n.WebsiteBlock)||void 0===e?void 0:e.type)&&(null===n||void 0===n?void 0:n.native)}function f(n){var e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=(null===n||void 0===n||null===(e=n.WebsiteBlock)||void 0===e?void 0:e.type)||"",i="common-ninja"===n.WebsiteBlock.source?"common-ninja-".concat(r,"-").concat(o):"".concat(r,"-").concat(o);return t?i:n._id||i}function p(n){var e=document.getElementById("iframe-builder-preview");e?e.contentWindow.postMessage(n,"*"):console.warn("No iframe found")}var g=function(n,e){var o,t,r,i,c,s,d,v,f,p,g,m,b,y,w,k=h(n).banner,x=(null===(o=k.layers)||void 0===o||null===(t=o.image)||void 0===t?void 0:t.enabled)&&n.Image?"image":null===(r=k.layers)||void 0===r||null===(i=r.overlay)||void 0===i?void 0:i.type,_={color1:null===(c=k.layers)||void 0===c||null===(s=c.overlay)||void 0===s?void 0:s.color1,color2:null===(d=k.layers)||void 0===d||null===(v=d.overlay)||void 0===v?void 0:v.color2,image:n.Image,positionX:null===(f=k.layers)||void 0===f||null===(p=f.image)||void 0===p?void 0:p.positionX,positionY:null===(g=k.layers)||void 0===g||null===(m=g.image)||void 0===m?void 0:m.positionY,direction:null===(b=k.layers)||void 0===b||null===(y=b.overlay)||void 0===y?void 0:y.direction};if("custom"!==(null===(w=k.layers)||void 0===w?void 0:w.palette)){var N,Z,j,S,L,P=(null===e||void 0===e||null===(N=e.colorPalette)||void 0===N||null===(Z=N.Palette)||void 0===Z?void 0:Z.colors)||(null===e||void 0===e||null===(j=e.colorPalette)||void 0===j?void 0:j.colors)||[],F=P.length>0?u(k.layers.palette):0;if(F>-1)_.color1=null===(S=P[F])||void 0===S?void 0:S.color,_.color2=null===(L=P[F%2===0?F+1:F-1])||void 0===L?void 0:L.color}var C=(0,l.$O)(_.color1||"#FFFFFF");switch(x){case"image":var R,I;return{backgroundImage:"url(".concat((null===(R=_.image)||void 0===R?void 0:R.preview)||(null===(I=_.image)||void 0===I?void 0:I.url)||_.image,")"),backgroundPosition:"".concat(_.positionX||"center"," ").concat(_.positionY||"center"),backgroundSize:"cover",color:C};case"gradient":return{backgroundImage:"linear-gradient(".concat(a.find((function(n){return n.id===(_.direction||"top-down")})).value,", ").concat(_.color1,", ").concat(_.color2,")"),color:C};default:return{backgroundColor:_.color1,color:C}}},h=function(n){var e,o,i,a,u,c,s,d,v,f,p,g,h,m,b;(null===(e=n.banner)||void 0===e||null===(o=e.layers)||void 0===o?void 0:o.palette)||(n.banner=(0,r.Z)((0,t.Z)({},n.banner),{layers:{palette:"custom",image:{enabled:"image"===(null===(i=n.banner)||void 0===i?void 0:i.type)&&!!n.Image,opacity:(null===(a=n.banner)||void 0===a?void 0:a.opacity)||50,positionX:(null===(u=n.banner)||void 0===u?void 0:u.imagePositionX)||"50%",positionY:(null===(c=n.banner)||void 0===c?void 0:c.imagePositionY)||"50%"},overlay:{type:"gradient"===(null===(s=n.banner)||void 0===s?void 0:s.type)?"gradient":"solid",color1:(null===(d=n.banner)||void 0===d?void 0:d.color)||"#000000",color2:"gradient"===(null===(v=n.banner)||void 0===v?void 0:v.type)?null===(f=n.banner)||void 0===f?void 0:f.color2:void 0,direction:"gradient"===(null===(p=n.banner)||void 0===p?void 0:p.type)?null===(g=n.banner)||void 0===g?void 0:g.direction:void 0},foreground:{accent:"gradient"===(null===(h=n.banner)||void 0===h?void 0:h.type)?(0,l.$O)((null===(m=n.banner)||void 0===m?void 0:m.color)||"#000000"):"#FFFFFF"}}}),"image"===(null===(b=n.banner)||void 0===b?void 0:b.type)&&(n.banner.layers.image.media=n.Image));return n},m=function(n){if(n)return n.replace(/[^0-9a-z]/gi,"-").replace(/-+$/g,"").toLowerCase()};function b(n){var e,o,t=(null===n||void 0===n||null===(e=n.settings)||void 0===e||null===(o=e.ai)||void 0===o?void 0:o.language)||(null===n||void 0===n?void 0:n.language)||"en";return"english"===t?"en":t.length>2?t.substring(0,2):t}function y(n){var e,o,t,r,i,l,a="en";(null===n||void 0===n?void 0:n.business)&&(a=(null===n||void 0===n||null===(e=n.business)||void 0===e?void 0:e.outputLanguage)||(null===n||void 0===n||null===(o=n.business)||void 0===o?void 0:o.language));(null===n||void 0===n?void 0:n.Business)&&(a=(null===n||void 0===n||null===(t=n.Business)||void 0===t||null===(r=t.settings)||void 0===r||null===(i=r.ai)||void 0===i?void 0:i.language)||(null===n||void 0===n||null===(l=n.Business)||void 0===l?void 0:l.language));return a||"en"}}}]);