(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(9828)}])},4080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let i=r(8754),n=r(1757),s=r(5893),o=n._(r(7294)),a=i._(r(3935)),l=i._(r(3867)),c=r(5283),d=r(6594),u=r(3945);r(3179);let f=r(1928),m=i._(r(3872)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/parsonslecture/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,n,s,o){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function h(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}let x=(0,o.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:c,className:d,style:u,fetchPriority:f,placeholder:m,loading:p,unoptimized:x,fill:b,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:j,sizesInput:y,onLoad:S,onError:N,...k}=e;return(0,s.jsx)("img",{...k,...h(f),loading:p,width:l,height:a,decoding:c,"data-nimg":b?"fill":"1",className:d,style:u,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&g(e,m,v,_,w,x,y))},[r,m,v,_,w,N,x,y,t]),onLoad:e=>{g(e.currentTarget,m,v,_,w,x,y)},onError:e=>{j(!0),"empty"!==m&&w(!0),N&&N(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(f.RouterContext),i=(0,o.useContext)(u.ImageConfigContext),n=(0,o.useMemo)(()=>{let e=p||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=e,g=(0,o.useRef)(a);(0,o.useEffect)(()=>{g.current=a},[a]);let h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let[v,_]=(0,o.useState)(!1),[w,j]=(0,o.useState)(!1),{props:y,meta:S}=(0,c.getImgProps)(e,{defaultLoader:m.default,imgConf:n,blurComplete:v,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x,{...y,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:y}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5283:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(3179);let i=r(6630),n=r(6594);function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,l,c,{src:d,sizes:u,unoptimized:f=!1,priority:m=!1,loading:p,className:g,quality:h,width:x,height:b,fill:v=!1,style:_,overrideSrc:w,onLoad:j,onLoadingComplete:y,placeholder:S="empty",blurDataURL:N,fetchPriority:k,decoding:C="async",layout:z,objectFit:P,objectPosition:E,lazyBoundary:O,lazyRoot:R,...M}=e,{imgConf:I,showAltText:F,blurComplete:D,defaultLoader:G}=t,A=I||n.imageConfigDefault;if("allSizes"in A)a=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);a={...A,allSizes:e,deviceSizes:t}}if(void 0===G)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=M.loader||G;delete M.loader,delete M.srcSet;let B="__next_img_default"in L;if(B){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...i}=t;return e(i)}}if(z){"fill"===z&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[z];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[z];t&&!u&&(u=t)}let W="",T=o(x),V=o(b);if("object"==typeof(r=d)&&(s(r)||void 0!==r.src)){let e=s(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,N=N||e.blurDataURL,W=e.src,!v){if(T||V){if(T&&!V){let t=T/e.width;V=Math.round(e.height*t)}else if(!T&&V){let t=V/e.height;T=Math.round(e.width*t)}}else T=e.width,V=e.height}}let U=!m&&("lazy"===p||void 0===p);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,U=!1),a.unoptimized&&(f=!0),B&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),m&&(k="high");let q=o(h),J=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:E}:{},F?{}:{color:"transparent"},_),X=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:V,blurWidth:l,blurHeight:c,blurDataURL:N||"",objectFit:J.objectFit})+'")':'url("'+S+'")',Y=X?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},H=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,i)=>a({config:t,src:r,quality:s,width:e})+" "+("w"===c?e:i+1)+c).join(", "),src:a({config:t,src:r,quality:s,width:l[d]})}}({config:a,src:d,unoptimized:f,width:T,quality:q,sizes:u,loader:L});return{props:{...M,loading:U?"lazy":p,fetchPriority:k,width:T,height:V,decoding:C,className:g,style:{...J,...Y},sizes:H.sizes,srcSet:H.srcSet,src:w||H.src},meta:{unoptimized:f,priority:m,placeholder:S,fill:v}}}},6630:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=e,a=i?40*i:t,l=n?40*n:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let i=r(8754),n=r(5283),s=r(4080),o=i._(r(3872));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/parsonslecture/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},3872:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},9828:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var i=r(5893),n=r(7479),s=r.n(n),o=r(3855),a=r.n(o),l=r(5675),c=r.n(l);function d(){return(0,i.jsxs)("div",{className:"".concat(s().variable," ").concat(a().variable," grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"),children:[(0,i.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start",children:[(0,i.jsx)(c(),{className:"dark:invert",src:"https://nextjs.org/icons/next.svg",alt:"Next.js logo",width:180,height:38,priority:!0}),(0,i.jsxs)("ol",{className:"list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]",children:[(0,i.jsxs)("li",{className:"mb-2",children:["Get started by editing"," ",(0,i.jsx)("code",{className:"bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold",children:"pages/index.js"}),"."]}),(0,i.jsx)("li",{children:"Save and see your changes instantly."})]}),(0,i.jsxs)("div",{className:"flex gap-4 items-center flex-col sm:flex-row",children:[(0,i.jsxs)("a",{className:"rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5",href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(c(),{className:"dark:invert",src:"https://nextjs.org/icons/vercel.svg",alt:"Vercel logomark",width:20,height:20}),"Deploy now"]}),(0,i.jsx)("a",{className:"rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44",href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:"Read our docs"})]})]}),(0,i.jsxs)("footer",{className:"row-start-3 flex gap-6 flex-wrap items-center justify-center",children:[(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(c(),{"aria-hidden":!0,src:"https://nextjs.org/icons/file.svg",alt:"File icon",width:16,height:16}),"Learn"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(c(),{"aria-hidden":!0,src:"https://nextjs.org/icons/window.svg",alt:"Window icon",width:16,height:16}),"Examples"]}),(0,i.jsxs)("a",{className:"flex items-center gap-2 hover:underline hover:underline-offset-4",href:"https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:[(0,i.jsx)(c(),{"aria-hidden":!0,src:"https://nextjs.org/icons/globe.svg",alt:"Globe icon",width:16,height:16}),"Go to nextjs.org →"]})]})]})}},3855:function(e){e.exports={style:{fontFamily:"'__geistMono_f5d92d', '__geistMono_Fallback_f5d92d'"},className:"__className_f5d92d",variable:"__variable_f5d92d"}},7479:function(e){e.exports={style:{fontFamily:"'__geistSans_d345b1', '__geistSans_Fallback_d345b1'"},className:"__className_d345b1",variable:"__variable_d345b1"}},5675:function(e,t,r){e.exports=r(6210)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);