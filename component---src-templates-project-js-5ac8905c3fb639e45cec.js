(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,S=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=d.default.createElement(V,(0,o.default)({src:t},i,{ariaHidden:n}));return a.length>1?d.default.createElement("picture",null,r(a),s):s},V=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=e.loading,k=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,q=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+v+"ms":"none"},l),x="boolean"==typeof b?"lightgray":b,j={transitionDelay:v+"ms"},N=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&j,{},l,{},f),P={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:S};if(m){var T=m,G=g(m);return d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},d.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),x&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&j)}),G.base64&&d.default.createElement(R,{ariaHidden:!0,src:G.base64,spreadProps:P,imageVariants:T,generateSources:L}),G.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,src:G.tracedSVG,spreadProps:P,imageVariants:T,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,y(T),d.default.createElement(V,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},G,{imageVariants:T}))}}))}if(h){var M=h,W=g(h),H=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete H.display,d.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},x&&d.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:x,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},C&&j)}),W.base64&&d.default.createElement(R,{ariaHidden:!0,src:W.base64,spreadProps:P,imageVariants:M,generateSources:L}),W.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,src:W.tracedSVG,spreadProps:P,imageVariants:M,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,y(M),d.default.createElement(V,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,o.default)({alt:a,title:t,loading:w},W,{imageVariants:M}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var q=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:q,sizes:x,fixed:c.default.oneOfType([q,c.default.arrayOf(q)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=C;t.default=j},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r);t.a=function(e){var t=e.children;return i.a.createElement("div",{class:"site-wrapper"},i.a.createElement("nav",null,i.a.createElement("ul",{class:"wrapper"},i.a.createElement("li",null,i.a.createElement("a",{href:"/#work-container"},"My Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"/#skills-container"},"My Skills")),i.a.createElement("li",null,i.a.createElement("a",{href:"/#about-container"},"About Me")))),i.a.createElement("div",{className:"body-wrapper"},i.a.createElement("header",null,i.a.createElement("div",{class:"wrapper"},i.a.createElement("h1",null,"Amber Suratte"),i.a.createElement("h2",null,"Front-End Developer // Web Designer"))),t),i.a.createElement("footer",null,i.a.createElement("div",{class:"wrapper"},i.a.createElement("p",null,"© 2020 Amber Suratte"),i.a.createElement("p",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/asuratte/",target:"_blank",rel:"noopener noreferrer",class:"social-links",title:"LinkedIn"},i.a.createElement("span",{class:"fab fa-linkedin"})),i.a.createElement("a",{href:"https://github.com/asuratte",target:"_blank",rel:"noopener noreferrer",class:"social-links",title:"Github"},i.a.createElement("span",{class:"fab fa-github"})),i.a.createElement("a",{href:"https://codepen.io/asuratte/collections/public",target:"_blank",rel:"noopener noreferrer",class:"social-links",title:"Codepen"},i.a.createElement("span",{class:"fab fa-codepen"})),i.a.createElement("a",{href:"https://www.instagram.com/amber.suratte/",target:"_blank",rel:"noopener noreferrer",class:"social-links",title:"Instagram"},i.a.createElement("span",{class:"fab fa-instagram"})),i.a.createElement("a",{href:"https://www.strava.com/athletes/7856720",target:"_blank",rel:"noopener noreferrer",class:"social-links",title:"Strava"},i.a.createElement("span",{class:"fab fa-strava"}))))))}},GhMY:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),s=a("Wbzz"),l=a("9eSz"),o=a.n(l),d=function(e){var t=e.imageData,a=e.title,r=e.descriptionLong,n=e.descriptionShort;return i.a.createElement("div",{class:"project-wrapper"},i.a.createElement("h3",null,a),i.a.createElement("p",{class:"project-description"},n),i.a.createElement(o.a,{fluid:t,alt:a}),i.a.createElement("p",{class:"project-description"},r),i.a.createElement("p",null,i.a.createElement(s.a,{to:"/",class:"back-main"},"Back to main page")))};a.d(t,"query",(function(){return c}));var c="848234533";t.default=function(e){var t=e.data.projectsJson,a=t.title,r=t.descriptionLong,s=t.descriptionShort,l=t.image.childImageSharp.fluid;return i.a.createElement(n.a,null,i.a.createElement(d,{title:a,descriptionLong:r,descriptionShort:s,imageData:l}))}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Wbzz:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("+ZDr"),s=a.n(n);a.d(t,"a",(function(){return s.a}));a("lw3w"),a("emEt").default.enqueue,i.a.createContext({})},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),i=a.n(r),n=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-templates-project-js-5ac8905c3fb639e45cec.js.map