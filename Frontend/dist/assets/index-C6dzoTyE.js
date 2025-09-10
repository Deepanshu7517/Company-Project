(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var wo,se,zh,Qn,Au,qh,Wh,Kh,tl,ya,va,Gh,Oi={},Qh=[],tm=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Gi=Array.isArray;function tn(n,e){for(var t in e)n[t]=e[t];return n}function nl(n){n&&n.parentNode&&n.parentNode.removeChild(n)}function re(n,e,t){var r,i,s,a={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s];if(arguments.length>2&&(a.children=arguments.length>3?wo.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(s in n.defaultProps)a[s]===void 0&&(a[s]=n.defaultProps[s]);return Fs(n,a,r,i,null)}function Fs(n,e,t,r,i){var s={type:n,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++zh,__i:-1,__u:0};return i==null&&se.vnode!=null&&se.vnode(s),s}function Ct(n){return n.children}function jt(n,e){this.props=n,this.context=e}function Mr(n,e){if(e==null)return n.__?Mr(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Mr(n):null}function Yh(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return Yh(n)}}function Ea(n){(!n.__d&&(n.__d=!0)&&Qn.push(n)&&!eo.__r++||Au!=se.debounceRendering)&&((Au=se.debounceRendering)||qh)(eo)}function eo(){for(var n,e,t,r,i,s,a,l=1;Qn.length;)Qn.length>l&&Qn.sort(Wh),n=Qn.shift(),l=Qn.length,n.__d&&(t=void 0,i=(r=(e=n).__v).__e,s=[],a=[],e.__P&&((t=tn({},r)).__v=r.__v+1,se.vnode&&se.vnode(t),rl(e.__P,t,r,e.__n,e.__P.namespaceURI,32&r.__u?[i]:null,s,i??Mr(r),!!(32&r.__u),a),t.__v=r.__v,t.__.__k[t.__i]=t,Zh(s,t,a),t.__e!=i&&Yh(t)));eo.__r=0}function Jh(n,e,t,r,i,s,a,l,u,h,f){var p,g,v,S,V,k,L,O=r&&r.__k||Qh,F=e.length;for(u=nm(t,e,O,u,F),p=0;p<F;p++)(v=t.__k[p])!=null&&(g=v.__i==-1?Oi:O[v.__i]||Oi,v.__i=p,k=rl(n,v,g,i,s,a,l,u,h,f),S=v.__e,v.ref&&g.ref!=v.ref&&(g.ref&&il(g.ref,null,v),f.push(v.ref,v.__c||S,v)),V==null&&S!=null&&(V=S),(L=!!(4&v.__u))||g.__k===v.__k?u=Xh(v,u,n,L):typeof v.type=="function"&&k!==void 0?u=k:S&&(u=S.nextSibling),v.__u&=-7);return t.__e=V,u}function nm(n,e,t,r,i){var s,a,l,u,h,f=t.length,p=f,g=0;for(n.__k=new Array(i),s=0;s<i;s++)(a=e[s])!=null&&typeof a!="boolean"&&typeof a!="function"?(u=s+g,(a=n.__k[s]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?Fs(null,a,null,null,null):Gi(a)?Fs(Ct,{children:a},null,null,null):a.constructor==null&&a.__b>0?Fs(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=n,a.__b=n.__b+1,l=null,(h=a.__i=rm(a,t,u,p))!=-1&&(p--,(l=t[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>f?g--:i<f&&g++),typeof a.type!="function"&&(a.__u|=4)):h!=u&&(h==u-1?g--:h==u+1?g++:(h>u?g--:g++,a.__u|=4))):n.__k[s]=null;if(p)for(s=0;s<f;s++)(l=t[s])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=Mr(l)),td(l,l));return r}function Xh(n,e,t,r){var i,s;if(typeof n.type=="function"){for(i=n.__k,s=0;i&&s<i.length;s++)i[s]&&(i[s].__=n,e=Xh(i[s],e,t,r));return e}n.__e!=e&&(r&&(e&&n.type&&!e.parentNode&&(e=Mr(n)),t.insertBefore(n.__e,e||null)),e=n.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function to(n,e){return e=e||[],n==null||typeof n=="boolean"||(Gi(n)?n.some(function(t){to(t,e)}):e.push(n)),e}function rm(n,e,t,r){var i,s,a,l=n.key,u=n.type,h=e[t],f=h!=null&&(2&h.__u)==0;if(h===null&&n.key==null||f&&l==h.key&&u==h.type)return t;if(r>(f?1:0)){for(i=t-1,s=t+1;i>=0||s<e.length;)if((h=e[a=i>=0?i--:s++])!=null&&(2&h.__u)==0&&l==h.key&&u==h.type)return a}return-1}function bu(n,e,t){e[0]=="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||tm.test(e)?t:t+"px"}function Ss(n,e,t,r,i){var s,a;e:if(e=="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof r=="string"&&(n.style.cssText=r=""),r)for(e in r)t&&e in t||bu(n.style,e,"");if(t)for(e in t)r&&t[e]==r[e]||bu(n.style,e,t[e])}else if(e[0]=="o"&&e[1]=="n")s=e!=(e=e.replace(Kh,"$1")),a=e.toLowerCase(),e=a in n||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),n.l||(n.l={}),n.l[e+s]=t,t?r?t.u=r.u:(t.u=tl,n.addEventListener(e,s?va:ya,s)):n.removeEventListener(e,s?va:ya,s);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!="-"?n.removeAttribute(e):n.setAttribute(e,e=="popover"&&t==1?"":t))}}function Su(n){return function(e){if(this.l){var t=this.l[e.type+n];if(e.t==null)e.t=tl++;else if(e.t<t.u)return;return t(se.event?se.event(e):e)}}}function rl(n,e,t,r,i,s,a,l,u,h){var f,p,g,v,S,V,k,L,O,F,Z,Y,C,I,_,y,T,R=e.type;if(e.constructor!=null)return null;128&t.__u&&(u=!!(32&t.__u),s=[l=e.__e=t.__e]),(f=se.__b)&&f(e);e:if(typeof R=="function")try{if(L=e.props,O="prototype"in R&&R.prototype.render,F=(f=R.contextType)&&r[f.__c],Z=f?F?F.props.value:f.__:r,t.__c?k=(p=e.__c=t.__c).__=p.__E:(O?e.__c=p=new R(L,Z):(e.__c=p=new jt(L,Z),p.constructor=R,p.render=sm),F&&F.sub(p),p.props=L,p.state||(p.state={}),p.context=Z,p.__n=r,g=p.__d=!0,p.__h=[],p._sb=[]),O&&p.__s==null&&(p.__s=p.state),O&&R.getDerivedStateFromProps!=null&&(p.__s==p.state&&(p.__s=tn({},p.__s)),tn(p.__s,R.getDerivedStateFromProps(L,p.__s))),v=p.props,S=p.state,p.__v=e,g)O&&R.getDerivedStateFromProps==null&&p.componentWillMount!=null&&p.componentWillMount(),O&&p.componentDidMount!=null&&p.__h.push(p.componentDidMount);else{if(O&&R.getDerivedStateFromProps==null&&L!==v&&p.componentWillReceiveProps!=null&&p.componentWillReceiveProps(L,Z),!p.__e&&p.shouldComponentUpdate!=null&&p.shouldComponentUpdate(L,p.__s,Z)===!1||e.__v==t.__v){for(e.__v!=t.__v&&(p.props=L,p.state=p.__s,p.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.some(function(A){A&&(A.__=e)}),Y=0;Y<p._sb.length;Y++)p.__h.push(p._sb[Y]);p._sb=[],p.__h.length&&a.push(p);break e}p.componentWillUpdate!=null&&p.componentWillUpdate(L,p.__s,Z),O&&p.componentDidUpdate!=null&&p.__h.push(function(){p.componentDidUpdate(v,S,V)})}if(p.context=Z,p.props=L,p.__P=n,p.__e=!1,C=se.__r,I=0,O){for(p.state=p.__s,p.__d=!1,C&&C(e),f=p.render(p.props,p.state,p.context),_=0;_<p._sb.length;_++)p.__h.push(p._sb[_]);p._sb=[]}else do p.__d=!1,C&&C(e),f=p.render(p.props,p.state,p.context),p.state=p.__s;while(p.__d&&++I<25);p.state=p.__s,p.getChildContext!=null&&(r=tn(tn({},r),p.getChildContext())),O&&!g&&p.getSnapshotBeforeUpdate!=null&&(V=p.getSnapshotBeforeUpdate(v,S)),y=f,f!=null&&f.type===Ct&&f.key==null&&(y=ed(f.props.children)),l=Jh(n,Gi(y)?y:[y],e,t,r,i,s,a,l,u,h),p.base=e.__e,e.__u&=-161,p.__h.length&&a.push(p),k&&(p.__E=p.__=null)}catch(A){if(e.__v=null,u||s!=null)if(A.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;s[s.indexOf(l)]=null,e.__e=l}else{for(T=s.length;T--;)nl(s[T]);wa(e)}else e.__e=t.__e,e.__k=t.__k,A.then||wa(e);se.__e(A,e,t)}else s==null&&e.__v==t.__v?(e.__k=t.__k,e.__e=t.__e):l=e.__e=im(t.__e,e,t,r,i,s,a,u,h);return(f=se.diffed)&&f(e),128&e.__u?void 0:l}function wa(n){n&&n.__c&&(n.__c.__e=!0),n&&n.__k&&n.__k.forEach(wa)}function Zh(n,e,t){for(var r=0;r<t.length;r++)il(t[r],t[++r],t[++r]);se.__c&&se.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(s){s.call(i)})}catch(s){se.__e(s,i.__v)}})}function ed(n){return typeof n!="object"||n==null||n.__b&&n.__b>0?n:Gi(n)?n.map(ed):tn({},n)}function im(n,e,t,r,i,s,a,l,u){var h,f,p,g,v,S,V,k=t.props,L=e.props,O=e.type;if(O=="svg"?i="http://www.w3.org/2000/svg":O=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),s!=null){for(h=0;h<s.length;h++)if((v=s[h])&&"setAttribute"in v==!!O&&(O?v.localName==O:v.nodeType==3)){n=v,s[h]=null;break}}if(n==null){if(O==null)return document.createTextNode(L);n=document.createElementNS(i,O,L.is&&L),l&&(se.__m&&se.__m(e,s),l=!1),s=null}if(O==null)k===L||l&&n.data==L||(n.data=L);else{if(s=s&&wo.call(n.childNodes),k=t.props||Oi,!l&&s!=null)for(k={},h=0;h<n.attributes.length;h++)k[(v=n.attributes[h]).name]=v.value;for(h in k)if(v=k[h],h!="children"){if(h=="dangerouslySetInnerHTML")p=v;else if(!(h in L)){if(h=="value"&&"defaultValue"in L||h=="checked"&&"defaultChecked"in L)continue;Ss(n,h,null,v,i)}}for(h in L)v=L[h],h=="children"?g=v:h=="dangerouslySetInnerHTML"?f=v:h=="value"?S=v:h=="checked"?V=v:l&&typeof v!="function"||k[h]===v||Ss(n,h,v,k[h],i);if(f)l||p&&(f.__html==p.__html||f.__html==n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(p&&(n.innerHTML=""),Jh(e.type=="template"?n.content:n,Gi(g)?g:[g],e,t,r,O=="foreignObject"?"http://www.w3.org/1999/xhtml":i,s,a,s?s[0]:t.__k&&Mr(t,0),l,u),s!=null)for(h=s.length;h--;)nl(s[h]);l||(h="value",O=="progress"&&S==null?n.removeAttribute("value"):S!=null&&(S!==n[h]||O=="progress"&&!S||O=="option"&&S!=k[h])&&Ss(n,h,S,k[h],i),h="checked",V!=null&&V!=n[h]&&Ss(n,h,V,k[h],i))}return n}function il(n,e,t){try{if(typeof n=="function"){var r=typeof n.__u=="function";r&&n.__u(),r&&e==null||(n.__u=n(e))}else n.current=e}catch(i){se.__e(i,t)}}function td(n,e,t){var r,i;if(se.unmount&&se.unmount(n),(r=n.ref)&&(r.current&&r.current!=n.__e||il(r,null,e)),(r=n.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){se.__e(s,e)}r.base=r.__P=null}if(r=n.__k)for(i=0;i<r.length;i++)r[i]&&td(r[i],e,t||typeof n.type!="function");t||nl(n.__e),n.__c=n.__=n.__e=void 0}function sm(n,e,t){return this.constructor(n,t)}function om(n,e,t){var r,i,s,a;e==document&&(e=document.documentElement),se.__&&se.__(n,e),i=(r=!1)?null:e.__k,s=[],a=[],rl(e,n=e.__k=re(Ct,null,[n]),i||Oi,Oi,e.namespaceURI,i?null:e.firstChild?wo.call(e.childNodes):null,s,i?i.__e:e.firstChild,r,a),Zh(s,n,a)}function Et(n){function e(t){var r,i;return this.getChildContext||(r=new Set,(i={})[e.__c]=this,this.getChildContext=function(){return i},this.componentWillUnmount=function(){r=null},this.shouldComponentUpdate=function(s){this.props.value!=s.value&&r.forEach(function(a){a.__e=!0,Ea(a)})},this.sub=function(s){r.add(s);var a=s.componentWillUnmount;s.componentWillUnmount=function(){r&&r.delete(s),a&&a.call(s)}}),t.children}return e.__c="__cC"+Gh++,e.__=n,e.Provider=e.__l=(e.Consumer=function(t,r){return t.children(r)}).contextType=e,e}wo=Qh.slice,se={__e:function(n,e,t,r){for(var i,s,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(n)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,r||{}),a=i.__d),a)return i.__E=i}catch(l){n=l}throw n}},zh=0,jt.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=tn({},this.state),typeof n=="function"&&(n=n(tn({},t),this.props)),n&&tn(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Ea(this))},jt.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Ea(this))},jt.prototype.render=Ct,Qn=[],qh=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Wh=function(n,e){return n.__v.__b-e.__v.__b},eo.__r=0,Kh=/(PointerCapture)$|Capture$/i,tl=0,ya=Su(!1),va=Su(!0),Gh=0;var am=0;function Q(n,e,t,r,i,s){e||(e={});var a,l,u=e;if("ref"in u)for(l in u={},e)l=="ref"?a=e[l]:u[l]=e[l];var h={type:n,props:u,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--am,__i:-1,__u:0,__source:i,__self:s};if(typeof n=="function"&&(a=n.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return se.vnode&&se.vnode(h),h}var er,Se,Xo,Pu,Vi=0,nd=[],Oe=se,Cu=Oe.__b,ku=Oe.__r,Du=Oe.diffed,Nu=Oe.__c,Lu=Oe.unmount,Ou=Oe.__;function Qi(n,e){Oe.__h&&Oe.__h(Se,n,Vi||e),Vi=0;var t=Se.__H||(Se.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({}),t.__[n]}function Be(n){return Vi=1,lm(id,n)}function lm(n,e,t){var r=Qi(er++,2);if(r.t=n,!r.__c&&(r.__=[t?t(e):id(void 0,e),function(l){var u=r.__N?r.__N[0]:r.__[0],h=r.t(u,l);u!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=Se,!Se.__f)){var i=function(l,u,h){if(!r.__c.__H)return!0;var f=r.__c.__H.__.filter(function(g){return!!g.__c});if(f.every(function(g){return!g.__N}))return!s||s.call(this,l,u,h);var p=r.__c.props!==l;return f.forEach(function(g){if(g.__N){var v=g.__[0];g.__=g.__N,g.__N=void 0,v!==g.__[0]&&(p=!0)}}),s&&s.call(this,l,u,h)||p};Se.__f=!0;var s=Se.shouldComponentUpdate,a=Se.componentWillUpdate;Se.componentWillUpdate=function(l,u,h){if(this.__e){var f=s;s=void 0,i(l,u,h),s=f}a&&a.call(this,l,u,h)},Se.shouldComponentUpdate=i}return r.__N||r.__}function mt(n,e){var t=Qi(er++,3);!Oe.__s&&sl(t.__H,e)&&(t.__=n,t.u=e,Se.__H.__h.push(t))}function rd(n,e){var t=Qi(er++,4);!Oe.__s&&sl(t.__H,e)&&(t.__=n,t.u=e,Se.__h.push(t))}function xr(n){return Vi=5,yt(function(){return{current:n}},[])}function yt(n,e){var t=Qi(er++,7);return sl(t.__H,e)&&(t.__=n(),t.__H=e,t.__h=n),t.__}function Fr(n,e){return Vi=8,yt(function(){return n},e)}function _e(n){var e=Se.context[n.__c],t=Qi(er++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(Se)),e.props.value):n.__}function um(){for(var n;n=nd.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Us),n.__H.__h.forEach(Ta),n.__H.__h=[]}catch(e){n.__H.__h=[],Oe.__e(e,n.__v)}}Oe.__b=function(n){Se=null,Cu&&Cu(n)},Oe.__=function(n,e){n&&e.__k&&e.__k.__m&&(n.__m=e.__k.__m),Ou&&Ou(n,e)},Oe.__r=function(n){ku&&ku(n),er=0;var e=(Se=n.__c).__H;e&&(Xo===Se?(e.__h=[],Se.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.u=t.__N=void 0})):(e.__h.forEach(Us),e.__h.forEach(Ta),e.__h=[],er=0)),Xo=Se},Oe.diffed=function(n){Du&&Du(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(nd.push(e)!==1&&Pu===Oe.requestAnimationFrame||((Pu=Oe.requestAnimationFrame)||cm)(um)),e.__H.__.forEach(function(t){t.u&&(t.__H=t.u),t.u=void 0})),Xo=Se=null},Oe.__c=function(n,e){e.some(function(t){try{t.__h.forEach(Us),t.__h=t.__h.filter(function(r){return!r.__||Ta(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],Oe.__e(r,t.__v)}}),Nu&&Nu(n,e)},Oe.unmount=function(n){Lu&&Lu(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{Us(r)}catch(i){e=i}}),t.__H=void 0,e&&Oe.__e(e,t.__v))};var Vu=typeof requestAnimationFrame=="function";function cm(n){var e,t=function(){clearTimeout(r),Vu&&cancelAnimationFrame(e),setTimeout(n)},r=setTimeout(t,35);Vu&&(e=requestAnimationFrame(t))}function Us(n){var e=Se,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),Se=e}function Ta(n){var e=Se;n.__c=n.__(),Se=e}function sl(n,e){return!n||n.length!==e.length||e.some(function(t,r){return t!==n[r]})}function id(n,e){return typeof e=="function"?e(n):e}function sd(n,e){for(var t in e)n[t]=e[t];return n}function Ia(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var r in e)if(r!=="__source"&&n[r]!==e[r])return!0;return!1}function Mu(n){n()}function xu(n,e){this.props=n,this.context=e}function hm(n,e){function t(i){var s=this.props.ref,a=s==i.ref;return!a&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!a:Ia(this.props,i)}function r(i){return this.shouldComponentUpdate=t,re(n,i)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r.type=n,r}(xu.prototype=new jt).isPureReactComponent=!0,xu.prototype.shouldComponentUpdate=function(n,e){return Ia(this.props,n)||Ia(this.state,e)};var Fu=se.__b;se.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Fu&&Fu(n)};var dm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ol(n){function e(t){var r=sd({},t);return delete r.ref,n(r,t.ref||null)}return e.$$typeof=dm,e.render=n,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var fm=se.__e;se.__e=function(n,e,t,r){if(n.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),i.__c(n,e)}fm(n,e,t,r)};var Uu=se.unmount;function od(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),n.__c.__H=null),(n=sd({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c.__e=!0,n.__c=null),n.__k=n.__k&&n.__k.map(function(r){return od(r,e,t)})),n}function ad(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(r){return ad(r,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function Zo(){this.__u=0,this.o=null,this.__b=null}function ld(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function Ps(){this.i=null,this.l=null}se.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),Uu&&Uu(n)},(Zo.prototype=new jt).__c=function(n,e){var t=e.__c,r=this;r.o==null&&(r.o=[]),r.o.push(t);var i=ld(r.__v),s=!1,a=function(){s||(s=!0,t.__R=null,i?i(l):l())};t.__R=a;var l=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=ad(u,u.__c.__P,u.__c.__O)}var h;for(r.setState({__a:r.__b=null});h=r.o.pop();)h.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(a,a)},Zo.prototype.componentWillUnmount=function(){this.o=[]},Zo.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=od(this.__b,t,r.__O=r.__P)}this.__b=null}var i=e.__a&&re(Ct,null,n.fallback);return i&&(i.__u&=-33),[re(Ct,null,e.__a?null:n.children),i]};var $u=function(n,e,t){if(++t[1]===t[0]&&n.l.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.l.size))for(t=n.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.i=t=t[2]}};(Ps.prototype=new jt).__a=function(n){var e=this,t=ld(e.__v),r=e.l.get(n);return r[0]++,function(i){var s=function(){e.props.revealOrder?(r.push(i),$u(e,n,r)):i()};t?t(s):s()}},Ps.prototype.render=function(n){this.i=null,this.l=new Map;var e=to(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.l.set(e[t],this.i=[1,0,this.i]);return n.children},Ps.prototype.componentDidUpdate=Ps.prototype.componentDidMount=function(){var n=this;this.l.forEach(function(e,t){$u(n,t,e)})};var pm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,mm=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gm=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,_m=/[A-Z0-9]/g,ym=typeof document<"u",vm=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};jt.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(jt.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var Bu=se.event;function Em(){}function wm(){return this.cancelBubble}function Tm(){return this.defaultPrevented}se.event=function(n){return Bu&&(n=Bu(n)),n.persist=Em,n.isPropagationStopped=wm,n.isDefaultPrevented=Tm,n.nativeEvent=n};var Im={enumerable:!1,configurable:!0,get:function(){return this.class}},ju=se.vnode;se.vnode=function(n){typeof n.type=="string"&&(function(e){var t=e.props,r=e.type,i={},s=r.indexOf("-")===-1;for(var a in t){var l=t[a];if(!(a==="value"&&"defaultValue"in t&&l==null||ym&&a==="children"&&r==="noscript"||a==="class"||a==="className")){var u=a.toLowerCase();a==="defaultValue"&&"value"in t&&t.value==null?a="value":a==="download"&&l===!0?l="":u==="translate"&&l==="no"?l=!1:u[0]==="o"&&u[1]==="n"?u==="ondoubleclick"?a="ondblclick":u!=="onchange"||r!=="input"&&r!=="textarea"||vm(t.type)?u==="onfocus"?a="onfocusin":u==="onblur"?a="onfocusout":gm.test(a)&&(a=u):u=a="oninput":s&&mm.test(a)?a=a.replace(_m,"-$&").toLowerCase():l===null&&(l=void 0),u==="oninput"&&i[a=u]&&(a="oninputCapture"),i[a]=l}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=to(t.children).forEach(function(h){h.props.selected=i.value.indexOf(h.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=to(t.children).forEach(function(h){h.props.selected=i.multiple?i.defaultValue.indexOf(h.props.value)!=-1:i.defaultValue==h.props.value})),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",Im)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),e.props=i})(n),n.$$typeof=pm,ju&&ju(n)};var Hu=se.__r;se.__r=function(n){Hu&&Hu(n),n.__c};var zu=se.diffed;se.diffed=function(n){zu&&zu(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value)};var Rm=function(n,e){return n(e)};/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ud=n=>{throw TypeError(n)},Am=(n,e,t)=>e.has(n)||ud("Cannot "+t),ea=(n,e,t)=>(Am(n,e,"read from private field"),t?t.call(n):e.get(n)),bm=(n,e,t)=>e.has(n)?ud("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),qu="popstate";function Sm(n={}){function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return Mi("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:Nn(i)}return Cm(e,t,null,n)}function ae(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Me(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Pm(){return Math.random().toString(36).substring(2,10)}function Wu(n,e){return{usr:n.state,key:n.key,idx:e}}function Mi(n,e,t=null,r){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Un(e):e,state:t,key:e&&e.key||r||Pm()}}function Nn({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Un(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substring(r),n=n.substring(0,r)),n&&(e.pathname=n)}return e}function Cm(n,e,t,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l="POP",u=null,h=f();h==null&&(h=0,a.replaceState({...a.state,idx:h},""));function f(){return(a.state||{idx:null}).idx}function p(){l="POP";let k=f(),L=k==null?null:k-h;h=k,u&&u({action:l,location:V.location,delta:L})}function g(k,L){l="PUSH";let O=Mi(V.location,k,L);h=f()+1;let F=Wu(O,h),Z=V.createHref(O);try{a.pushState(F,"",Z)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;i.location.assign(Z)}s&&u&&u({action:l,location:V.location,delta:1})}function v(k,L){l="REPLACE";let O=Mi(V.location,k,L);h=f();let F=Wu(O,h),Z=V.createHref(O);a.replaceState(F,"",Z),s&&u&&u({action:l,location:V.location,delta:0})}function S(k){return cd(k)}let V={get action(){return l},get location(){return n(i,a)},listen(k){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(qu,p),u=k,()=>{i.removeEventListener(qu,p),u=null}},createHref(k){return e(i,k)},createURL:S,encodeLocation(k){let L=S(k);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:g,replace:v,go(k){return a.go(k)}};return V}function cd(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),ae(t,"No window.location.(origin|href) available to create URL");let r=typeof n=="string"?n:Nn(n);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=t+r),new URL(r,t)}var wi,Ku=class{constructor(n){if(bm(this,wi,new Map),n)for(let[e,t]of n)this.set(e,t)}get(n){if(ea(this,wi).has(n))return ea(this,wi).get(n);if(n.defaultValue!==void 0)return n.defaultValue;throw new Error("No value found for context")}set(n,e){ea(this,wi).set(n,e)}};wi=new WeakMap;var km=new Set(["lazy","caseSensitive","path","id","index","children"]);function Dm(n){return km.has(n)}var Nm=new Set(["lazy","caseSensitive","path","id","index","unstable_middleware","children"]);function Lm(n){return Nm.has(n)}function Om(n){return n.index===!0}function xi(n,e,t=[],r={},i=!1){return n.map((s,a)=>{let l=[...t,String(a)],u=typeof s.id=="string"?s.id:l.join("-");if(ae(s.index!==!0||!s.children,"Cannot specify children on an index route"),ae(i||!r[u],`Found a route id collision on id "${u}".  Route id's must be globally unique within Data Router usages`),Om(s)){let h={...s,...e(s),id:u};return r[u]=h,h}else{let h={...s,...e(s),id:u,children:void 0};return r[u]=h,s.children&&(h.children=xi(s.children,e,l,r,i)),h}})}function _n(n,e,t="/"){return $s(n,e,t,!1)}function $s(n,e,t,r){let i=typeof e=="string"?Un(e):e,s=vt(i.pathname||"/",t);if(s==null)return null;let a=hd(n);Mm(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let h=Km(s);l=qm(a[u],h,r)}return l}function Vm(n,e){let{route:t,pathname:r,params:i}=n;return{id:t.id,pathname:r,params:i,data:e[t.id],loaderData:e[t.id],handle:t.handle}}function hd(n,e=[],t=[],r="",i=!1){let s=(a,l,u=i,h)=>{let f={relativePath:h===void 0?a.path||"":h,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;ae(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let p=Ht([r,f.relativePath]),g=t.concat(f);a.children&&a.children.length>0&&(ae(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),hd(a.children,e,g,p,u)),!(a.path==null&&!a.index)&&e.push({path:p,score:Hm(p,a.index),routesMeta:g})};return n.forEach((a,l)=>{if(a.path===""||!a.path?.includes("?"))s(a,l);else for(let u of dd(a.path))s(a,l,!0,u)}),e}function dd(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=dd(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>n.startsWith("/")&&u===""?"/":u)}function Mm(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:zm(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}var xm=/^:[\w-]+$/,Fm=3,Um=2,$m=1,Bm=10,jm=-2,Gu=n=>n==="*";function Hm(n,e){let t=n.split("/"),r=t.length;return t.some(Gu)&&(r+=jm),e&&(r+=Um),t.filter(i=>!Gu(i)).reduce((i,s)=>i+(xm.test(s)?Fm:s===""?$m:Bm),r)}function zm(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function qm(n,e,t=!1){let{routesMeta:r}=n,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=no({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p&&h&&t&&!r[r.length-1].route.index&&(p=no({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Ht([s,p.pathname]),pathnameBase:Jm(Ht([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=Ht([s,p.pathnameBase]))}return a}function no(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Wm(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:p},g)=>{if(f==="*"){let S=l[g]||"";a=s.slice(0,s.length-S.length).replace(/(.)\/+$/,"$1")}const v=l[g];return p&&!v?h[f]=void 0:h[f]=(v||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:n}}function Wm(n,e=!1,t=!0){Me(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Km(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Me(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function vt(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function Gm({basename:n,pathname:e}){return e==="/"?n:Ht([n,e])}function Qm(n,e="/"){let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?Un(n):n;return{pathname:t?t.startsWith("/")?t:Ym(t,e):e,search:Xm(r),hash:Zm(i)}}function Ym(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function ta(n,e,t,r){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fd(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function To(n){let e=fd(n);return e.map((t,r)=>r===e.length-1?t.pathname:t.pathnameBase)}function Io(n,e,t,r=!1){let i;typeof n=="string"?i=Un(n):(i={...n},ae(!i.pathname||!i.pathname.includes("?"),ta("?","pathname","search",i)),ae(!i.pathname||!i.pathname.includes("#"),ta("#","pathname","hash",i)),ae(!i.search||!i.search.includes("#"),ta("#","search","hash",i)));let s=n===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=t;else{let p=e.length-1;if(!r&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=Qm(i,l),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&t.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}var Ht=n=>n.join("/").replace(/\/\/+/g,"/"),Jm=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Xm=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Zm=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,ro=class{constructor(n,e,t,r=!1){this.status=n,this.statusText=e||"",this.internal=r,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Fi(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var pd=["POST","PUT","PATCH","DELETE"],eg=new Set(pd),tg=["GET",...pd],ng=new Set(tg),rg=new Set([301,302,303,307,308]),ig=new Set([307,308]),na={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},sg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},yi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},og=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,al=n=>og.test(n),ag=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),md="remix-router-transitions",gd=Symbol("ResetLoaderData");function lg(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u";ae(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=n.hydrationRouteProperties||[],i=n.mapRouteProperties||ag,s={},a=xi(n.routes,i,void 0,s),l,u=n.basename||"/";u.startsWith("/")||(u=`/${u}`);let h=n.dataStrategy||fg,f={...n.future},p=null,g=new Set,v=null,S=null,V=null,k=n.hydrationData!=null,L=_n(a,n.history.location,u),O=!1,F=null,Z;if(L==null&&!n.patchRoutesOnNavigation){let w=_t(404,{pathname:n.history.location.pathname}),{matches:b,route:D}=Cs(a);Z=!0,L=b,F={[D.id]:w}}else if(L&&!n.hydrationData&&gt(L,a,n.history.location.pathname).active&&(L=null),L)if(L.some(w=>w.route.lazy))Z=!1;else if(!L.some(w=>w.route.loader))Z=!0;else{let w=n.hydrationData?n.hydrationData.loaderData:null,b=n.hydrationData?n.hydrationData.errors:null;if(b){let D=L.findIndex(x=>b[x.route.id]!==void 0);Z=L.slice(0,D+1).every(x=>!Aa(x.route,w,b))}else Z=L.every(D=>!Aa(D.route,w,b))}else{Z=!1,L=[];let w=gt(null,a,n.history.location.pathname);w.active&&w.matches&&(O=!0,L=w.matches)}let Y,C={historyAction:n.history.action,location:n.history.location,matches:L,initialized:Z,navigation:na,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||F,fetchers:new Map,blockers:new Map},I="POP",_=!1,y,T=!1,R=new Map,A=null,E=!1,fe=!1,Ke=new Set,ge=new Map,Ge=0,Fe=-1,ot=new Map,Ye=new Set,ut=new Map,ze=new Map,Ee=new Set,Qt=new Map,Lt,jn=null;function lr(){if(p=n.history.listen(({action:w,location:b,delta:D})=>{if(Lt){Lt(),Lt=void 0;return}Me(Qt.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let x=pr({currentLocation:C.location,nextLocation:b,historyAction:w});if(x&&D!=null){let U=new Promise(H=>{Lt=H});n.history.go(D*-1),fr(x,{state:"blocked",location:b,proceed(){fr(x,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),U.then(()=>n.history.go(D))},reset(){let H=new Map(C.blockers);H.set(x,yi),Le({blockers:H})}});return}return It(w,b)}),t){Pg(e,R);let w=()=>Cg(e,R);e.addEventListener("pagehide",w),A=()=>e.removeEventListener("pagehide",w)}return C.initialized||It("POP",C.location,{initialHydration:!0}),Y}function zo(){p&&p(),A&&A(),g.clear(),y&&y.abort(),C.fetchers.forEach((w,b)=>dr(b)),C.blockers.forEach((w,b)=>fs(b))}function qo(w){return g.add(w),()=>g.delete(w)}function Le(w,b={}){w.matches&&(w.matches=w.matches.map(U=>{let H=s[U.route.id],K=U.route;return K.element!==H.element||K.errorElement!==H.errorElement||K.hydrateFallbackElement!==H.hydrateFallbackElement?{...U,route:H}:U})),C={...C,...w};let D=[],x=[];C.fetchers.forEach((U,H)=>{U.state==="idle"&&(Ee.has(H)?D.push(H):x.push(H))}),Ee.forEach(U=>{!C.fetchers.has(U)&&!ge.has(U)&&D.push(U)}),[...g].forEach(U=>U(C,{deletedFetchers:D,viewTransitionOpts:b.viewTransitionOpts,flushSync:b.flushSync===!0})),D.forEach(U=>dr(U)),x.forEach(U=>C.fetchers.delete(U))}function Tt(w,b,{flushSync:D}={}){let x=C.actionData!=null&&C.navigation.formMethod!=null&&ht(C.navigation.formMethod)&&C.navigation.state==="loading"&&w.state?._isRedirect!==!0,U;b.actionData?Object.keys(b.actionData).length>0?U=b.actionData:U=null:x?U=C.actionData:U=null;let H=b.loaderData?ic(C.loaderData,b.loaderData,b.matches||[],b.errors):C.loaderData,K=C.blockers;K.size>0&&(K=new Map(K),K.forEach((G,W)=>K.set(W,yi)));let z=E?!1:gr(w,b.matches||C.matches),q=_===!0||C.navigation.formMethod!=null&&ht(C.navigation.formMethod)&&w.state?._isRedirect!==!0;l&&(a=l,l=void 0),E||I==="POP"||(I==="PUSH"?n.history.push(w,w.state):I==="REPLACE"&&n.history.replace(w,w.state));let ee;if(I==="POP"){let G=R.get(C.location.pathname);G&&G.has(w.pathname)?ee={currentLocation:C.location,nextLocation:w}:R.has(w.pathname)&&(ee={currentLocation:w,nextLocation:C.location})}else if(T){let G=R.get(C.location.pathname);G?G.add(w.pathname):(G=new Set([w.pathname]),R.set(C.location.pathname,G)),ee={currentLocation:C.location,nextLocation:w}}Le({...b,actionData:U,loaderData:H,historyAction:I,location:w,initialized:!0,navigation:na,revalidation:"idle",restoreScrollPosition:z,preventScrollReset:q,blockers:K},{viewTransitionOpts:ee,flushSync:D===!0}),I="POP",_=!1,T=!1,E=!1,fe=!1,jn?.resolve(),jn=null}async function ur(w,b){if(typeof w=="number"){n.history.go(w);return}let D=Ra(C.location,C.matches,u,w,b?.fromRouteId,b?.relative),{path:x,submission:U,error:H}=Qu(!1,D,b),K=C.location,z=Mi(C.location,x,b&&b.state);z={...z,...n.history.encodeLocation(z)};let q=b&&b.replace!=null?b.replace:void 0,ee="PUSH";q===!0?ee="REPLACE":q===!1||U!=null&&ht(U.formMethod)&&U.formAction===C.location.pathname+C.location.search&&(ee="REPLACE");let G=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,W=(b&&b.flushSync)===!0,le=pr({currentLocation:K,nextLocation:z,historyAction:ee});if(le){fr(le,{state:"blocked",location:z,proceed(){fr(le,{state:"proceeding",proceed:void 0,reset:void 0,location:z}),ur(w,b)},reset(){let ye=new Map(C.blockers);ye.set(le,yi),Le({blockers:ye})}});return}await It(ee,z,{submission:U,pendingError:H,preventScrollReset:G,replace:b&&b.replace,enableViewTransition:b&&b.viewTransition,flushSync:W})}function ni(){jn||(jn=kg()),hr(),Le({revalidation:"loading"});let w=jn.promise;return C.navigation.state==="submitting"?w:C.navigation.state==="idle"?(It(C.historyAction,C.location,{startUninterruptedRevalidation:!0}),w):(It(I||C.historyAction,C.navigation.location,{overrideNavigation:C.navigation,enableViewTransition:T===!0}),w)}async function It(w,b,D){y&&y.abort(),y=null,I=w,E=(D&&D.startUninterruptedRevalidation)===!0,li(C.location,C.matches),_=(D&&D.preventScrollReset)===!0,T=(D&&D.enableViewTransition)===!0;let x=l||a,U=D&&D.overrideNavigation,H=D?.initialHydration&&C.matches&&C.matches.length>0&&!O?C.matches:_n(x,b,u),K=(D&&D.flushSync)===!0;if(H&&C.initialized&&!fe&&wg(C.location,b)&&!(D&&D.submission&&ht(D.submission.formMethod))){Tt(b,{matches:H},{flushSync:K});return}let z=gt(H,x,b.pathname);if(z.active&&z.matches&&(H=z.matches),!H){let{error:be,notFoundMatches:Te,route:ve}=mr(b.pathname);Tt(b,{matches:Te,loaderData:{},errors:{[ve.id]:be}},{flushSync:K});return}y=new AbortController;let q=Tr(n.history,b,y.signal,D&&D.submission),ee=n.unstable_getContext?await n.unstable_getContext():new Ku,G;if(D&&D.pendingError)G=[yn(H).route.id,{type:"error",error:D.pendingError}];else if(D&&D.submission&&ht(D.submission.formMethod)){let be=await ri(q,b,D.submission,H,ee,z.active,D&&D.initialHydration===!0,{replace:D.replace,flushSync:K});if(be.shortCircuited)return;if(be.pendingActionResult){let[Te,ve]=be.pendingActionResult;if(pt(ve)&&Fi(ve.error)&&ve.error.status===404){y=null,Tt(b,{matches:be.matches,loaderData:{},errors:{[Te]:ve.error}});return}}H=be.matches||H,G=be.pendingActionResult,U=ra(b,D.submission),K=!1,z.active=!1,q=Tr(n.history,q.url,q.signal)}let{shortCircuited:W,matches:le,loaderData:ye,errors:Pe}=await ls(q,b,H,ee,z.active,U,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,D&&D.initialHydration===!0,K,G);W||(y=null,Tt(b,{matches:le||H,...sc(G),loaderData:ye,errors:Pe}))}async function ri(w,b,D,x,U,H,K,z={}){hr();let q=bg(b,D);if(Le({navigation:q},{flushSync:z.flushSync===!0}),H){let W=await zn(x,b.pathname,w.signal);if(W.type==="aborted")return{shortCircuited:!0};if(W.type==="error"){if(W.partialMatches.length===0){let{matches:ye,route:Pe}=Cs(a);return{matches:ye,pendingActionResult:[Pe.id,{type:"error",error:W.error}]}}let le=yn(W.partialMatches).route.id;return{matches:W.partialMatches,pendingActionResult:[le,{type:"error",error:W.error}]}}else if(W.matches)x=W.matches;else{let{notFoundMatches:le,error:ye,route:Pe}=mr(b.pathname);return{matches:le,pendingActionResult:[Pe.id,{type:"error",error:ye}]}}}let ee,G=Bs(x,b);if(!G.route.action&&!G.route.lazy)ee={type:"error",error:_t(405,{method:w.method,pathname:b.pathname,routeId:G.route.id})};else{let W=Pr(i,s,w,x,G,K?[]:r,U),le=await Jt(w,W,U,null);if(ee=le[G.route.id],!ee){for(let ye of x)if(le[ye.route.id]){ee=le[ye.route.id];break}}if(w.signal.aborted)return{shortCircuited:!0}}if(Yn(ee)){let W;return z&&z.replace!=null?W=z.replace:W=tc(ee.response.headers.get("Location"),new URL(w.url),u)===C.location.pathname+C.location.search,await Yt(w,ee,!0,{submission:D,replace:W}),{shortCircuited:!0}}if(pt(ee)){let W=yn(x,G.route.id);return(z&&z.replace)!==!0&&(I="PUSH"),{matches:x,pendingActionResult:[W.route.id,ee,G.route.id]}}return{matches:x,pendingActionResult:[G.route.id,ee]}}async function ls(w,b,D,x,U,H,K,z,q,ee,G,W){let le=H||ra(b,K),ye=K||z||ac(le),Pe=!E&&!ee;if(U){if(Pe){let Ue=us(W);Le({navigation:le,...Ue!==void 0?{actionData:Ue}:{}},{flushSync:G})}let oe=await zn(D,b.pathname,w.signal);if(oe.type==="aborted")return{shortCircuited:!0};if(oe.type==="error"){if(oe.partialMatches.length===0){let{matches:dn,route:Ft}=Cs(a);return{matches:dn,loaderData:{},errors:{[Ft.id]:oe.error}}}let Ue=yn(oe.partialMatches).route.id;return{matches:oe.partialMatches,loaderData:{},errors:{[Ue]:oe.error}}}else if(oe.matches)D=oe.matches;else{let{error:Ue,notFoundMatches:dn,route:Ft}=mr(b.pathname);return{matches:dn,loaderData:{},errors:{[Ft.id]:Ue}}}}let be=l||a,{dsMatches:Te,revalidatingFetchers:ve}=Yu(w,x,i,s,n.history,C,D,ye,b,ee?[]:r,ee===!0,fe,Ke,Ee,ut,Ye,be,u,n.patchRoutesOnNavigation!=null,W);if(Fe=++Ge,!n.dataStrategy&&!Te.some(oe=>oe.shouldLoad)&&!Te.some(oe=>oe.route.unstable_middleware)&&ve.length===0){let oe=si();return Tt(b,{matches:D,loaderData:{},errors:W&&pt(W[1])?{[W[0]]:W[1].error}:null,...sc(W),...oe?{fetchers:new Map(C.fetchers)}:{}},{flushSync:G}),{shortCircuited:!0}}if(Pe){let oe={};if(!U){oe.navigation=le;let Ue=us(W);Ue!==void 0&&(oe.actionData=Ue)}ve.length>0&&(oe.fetchers=Wo(ve)),Le(oe,{flushSync:G})}ve.forEach(oe=>{Ot(oe.key),oe.controller&&ge.set(oe.key,oe.controller)});let Rt=()=>ve.forEach(oe=>Ot(oe.key));y&&y.signal.addEventListener("abort",Rt);let{loaderResults:Xt,fetcherResults:At}=await cr(Te,ve,w,x);if(w.signal.aborted)return{shortCircuited:!0};y&&y.signal.removeEventListener("abort",Rt),ve.forEach(oe=>ge.delete(oe.key));let dt=ks(Xt);if(dt)return await Yt(w,dt.result,!0,{replace:q}),{shortCircuited:!0};if(dt=ks(At),dt)return Ye.add(dt.key),await Yt(w,dt.result,!0,{replace:q}),{shortCircuited:!0};let{loaderData:ui,errors:Vt}=rc(C,D,Xt,W,ve,At);ee&&C.errors&&(Vt={...C.errors,...Vt});let Mt=si(),hn=oi(Fe),xt=Mt||hn||ve.length>0;return{matches:D,loaderData:ui,errors:Vt,...xt?{fetchers:new Map(C.fetchers)}:{}}}function us(w){if(w&&!pt(w[1]))return{[w[0]]:w[1].data};if(C.actionData)return Object.keys(C.actionData).length===0?null:C.actionData}function Wo(w){return w.forEach(b=>{let D=C.fetchers.get(b.key),x=vi(void 0,D?D.data:void 0);C.fetchers.set(b.key,x)}),new Map(C.fetchers)}async function cs(w,b,D,x){Ot(w);let U=(x&&x.flushSync)===!0,H=l||a,K=Ra(C.location,C.matches,u,D,b,x?.relative),z=_n(H,K,u),q=gt(z,H,K);if(q.active&&q.matches&&(z=q.matches),!z){Re(w,b,_t(404,{pathname:K}),{flushSync:U});return}let{path:ee,submission:G,error:W}=Qu(!0,K,x);if(W){Re(w,b,W,{flushSync:U});return}let le=n.unstable_getContext?await n.unstable_getContext():new Ku,ye=(x&&x.preventScrollReset)===!0;if(G&&ht(G.formMethod)){await ii(w,b,ee,z,le,q.active,U,ye,G);return}ut.set(w,{routeId:b,path:ee}),await hs(w,b,ee,z,le,q.active,U,ye,G)}async function ii(w,b,D,x,U,H,K,z,q){hr(),ut.delete(w);let ee=C.fetchers.get(w);Ie(w,Sg(q,ee),{flushSync:K});let G=new AbortController,W=Tr(n.history,D,G.signal,q);if(H){let De=await zn(x,new URL(W.url).pathname,W.signal,w);if(De.type==="aborted")return;if(De.type==="error"){Re(w,b,De.error,{flushSync:K});return}else if(De.matches)x=De.matches;else{Re(w,b,_t(404,{pathname:D}),{flushSync:K});return}}let le=Bs(x,D);if(!le.route.action&&!le.route.lazy){let De=_t(405,{method:q.formMethod,pathname:D,routeId:b});Re(w,b,De,{flushSync:K});return}ge.set(w,G);let ye=Ge,Pe=Pr(i,s,W,x,le,r,U),Te=(await Jt(W,Pe,U,w))[le.route.id];if(W.signal.aborted){ge.get(w)===G&&ge.delete(w);return}if(Ee.has(w)){if(Yn(Te)||pt(Te)){Ie(w,gn(void 0));return}}else{if(Yn(Te))if(ge.delete(w),Fe>ye){Ie(w,gn(void 0));return}else return Ye.add(w),Ie(w,vi(q)),Yt(W,Te,!1,{fetcherSubmission:q,preventScrollReset:z});if(pt(Te)){Re(w,b,Te.error);return}}let ve=C.navigation.location||C.location,Rt=Tr(n.history,ve,G.signal),Xt=l||a,At=C.navigation.state!=="idle"?_n(Xt,C.navigation.location,u):C.matches;ae(At,"Didn't find any matches after fetcher action");let dt=++Ge;ot.set(w,dt);let ui=vi(q,Te.data);C.fetchers.set(w,ui);let{dsMatches:Vt,revalidatingFetchers:Mt}=Yu(Rt,U,i,s,n.history,C,At,q,ve,r,!1,fe,Ke,Ee,ut,Ye,Xt,u,n.patchRoutesOnNavigation!=null,[le.route.id,Te]);Mt.filter(De=>De.key!==w).forEach(De=>{let qn=De.key,yr=C.fetchers.get(qn),ci=vi(void 0,yr?yr.data:void 0);C.fetchers.set(qn,ci),Ot(qn),De.controller&&ge.set(qn,De.controller)}),Le({fetchers:new Map(C.fetchers)});let hn=()=>Mt.forEach(De=>Ot(De.key));G.signal.addEventListener("abort",hn);let{loaderResults:xt,fetcherResults:oe}=await cr(Vt,Mt,Rt,U);if(G.signal.aborted)return;if(G.signal.removeEventListener("abort",hn),ot.delete(w),ge.delete(w),Mt.forEach(De=>ge.delete(De.key)),C.fetchers.has(w)){let De=gn(Te.data);C.fetchers.set(w,De)}let Ue=ks(xt);if(Ue)return Yt(Rt,Ue.result,!1,{preventScrollReset:z});if(Ue=ks(oe),Ue)return Ye.add(Ue.key),Yt(Rt,Ue.result,!1,{preventScrollReset:z});let{loaderData:dn,errors:Ft}=rc(C,At,xt,void 0,Mt,oe);oi(dt),C.navigation.state==="loading"&&dt>Fe?(ae(I,"Expected pending action"),y&&y.abort(),Tt(C.navigation.location,{matches:At,loaderData:dn,errors:Ft,fetchers:new Map(C.fetchers)})):(Le({errors:Ft,loaderData:ic(C.loaderData,dn,At,Ft),fetchers:new Map(C.fetchers)}),fe=!1)}async function hs(w,b,D,x,U,H,K,z,q){let ee=C.fetchers.get(w);Ie(w,vi(q,ee?ee.data:void 0),{flushSync:K});let G=new AbortController,W=Tr(n.history,D,G.signal);if(H){let ve=await zn(x,new URL(W.url).pathname,W.signal,w);if(ve.type==="aborted")return;if(ve.type==="error"){Re(w,b,ve.error,{flushSync:K});return}else if(ve.matches)x=ve.matches;else{Re(w,b,_t(404,{pathname:D}),{flushSync:K});return}}let le=Bs(x,D);ge.set(w,G);let ye=Ge,Pe=Pr(i,s,W,x,le,r,U),Te=(await Jt(W,Pe,U,w))[le.route.id];if(ge.get(w)===G&&ge.delete(w),!W.signal.aborted){if(Ee.has(w)){Ie(w,gn(void 0));return}if(Yn(Te))if(Fe>ye){Ie(w,gn(void 0));return}else{Ye.add(w),await Yt(W,Te,!1,{preventScrollReset:z});return}if(pt(Te)){Re(w,b,Te.error);return}Ie(w,gn(Te.data))}}async function Yt(w,b,D,{submission:x,fetcherSubmission:U,preventScrollReset:H,replace:K}={}){b.response.headers.has("X-Remix-Revalidate")&&(fe=!0);let z=b.response.headers.get("Location");ae(z,"Expected a Location header on the redirect Response"),z=tc(z,new URL(w.url),u);let q=Mi(C.location,z,{_isRedirect:!0});if(t){let Pe=!1;if(b.response.headers.has("X-Remix-Reload-Document"))Pe=!0;else if(al(z)){const be=cd(z,!0);Pe=be.origin!==e.location.origin||vt(be.pathname,u)==null}if(Pe){K?e.location.replace(z):e.location.assign(z);return}}y=null;let ee=K===!0||b.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:G,formAction:W,formEncType:le}=C.navigation;!x&&!U&&G&&W&&le&&(x=ac(C.navigation));let ye=x||U;if(ig.has(b.response.status)&&ye&&ht(ye.formMethod))await It(ee,q,{submission:{...ye,formAction:z},preventScrollReset:H||_,enableViewTransition:D?T:void 0});else{let Pe=ra(q,x);await It(ee,q,{overrideNavigation:Pe,fetcherSubmission:U,preventScrollReset:H||_,enableViewTransition:D?T:void 0})}}async function Jt(w,b,D,x){let U,H={};try{U=await mg(h,w,b,x,D,!1)}catch(K){return b.filter(z=>z.shouldLoad).forEach(z=>{H[z.route.id]={type:"error",error:K}}),H}if(w.signal.aborted)return H;for(let[K,z]of Object.entries(U))if(Rg(z)){let q=z.result;H[K]={type:"redirect",response:vg(q,w,K,b,u)}}else H[K]=await yg(z);return H}async function cr(w,b,D,x){let U=Jt(D,w,x,null),H=Promise.all(b.map(async q=>{if(q.matches&&q.match&&q.request&&q.controller){let G=(await Jt(q.request,q.matches,x,q.key))[q.match.route.id];return{[q.key]:G}}else return Promise.resolve({[q.key]:{type:"error",error:_t(404,{pathname:q.path})}})})),K=await U,z=(await H).reduce((q,ee)=>Object.assign(q,ee),{});return{loaderResults:K,fetcherResults:z}}function hr(){fe=!0,ut.forEach((w,b)=>{ge.has(b)&&Ke.add(b),Ot(b)})}function Ie(w,b,D={}){C.fetchers.set(w,b),Le({fetchers:new Map(C.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function Re(w,b,D,x={}){let U=yn(C.matches,b);dr(w),Le({errors:{[U.route.id]:D},fetchers:new Map(C.fetchers)},{flushSync:(x&&x.flushSync)===!0})}function Hn(w){return ze.set(w,(ze.get(w)||0)+1),Ee.has(w)&&Ee.delete(w),C.fetchers.get(w)||sg}function dr(w){let b=C.fetchers.get(w);ge.has(w)&&!(b&&b.state==="loading"&&ot.has(w))&&Ot(w),ut.delete(w),ot.delete(w),Ye.delete(w),Ee.delete(w),Ke.delete(w),C.fetchers.delete(w)}function ds(w){let b=(ze.get(w)||0)-1;b<=0?(ze.delete(w),Ee.add(w)):ze.set(w,b),Le({fetchers:new Map(C.fetchers)})}function Ot(w){let b=ge.get(w);b&&(b.abort(),ge.delete(w))}function un(w){for(let b of w){let D=Hn(b),x=gn(D.data);C.fetchers.set(b,x)}}function si(){let w=[],b=!1;for(let D of Ye){let x=C.fetchers.get(D);ae(x,`Expected fetcher: ${D}`),x.state==="loading"&&(Ye.delete(D),w.push(D),b=!0)}return un(w),b}function oi(w){let b=[];for(let[D,x]of ot)if(x<w){let U=C.fetchers.get(D);ae(U,`Expected fetcher: ${D}`),U.state==="loading"&&(Ot(D),ot.delete(D),b.push(D))}return un(b),b.length>0}function ai(w,b){let D=C.blockers.get(w)||yi;return Qt.get(w)!==b&&Qt.set(w,b),D}function fs(w){C.blockers.delete(w),Qt.delete(w)}function fr(w,b){let D=C.blockers.get(w)||yi;ae(D.state==="unblocked"&&b.state==="blocked"||D.state==="blocked"&&b.state==="blocked"||D.state==="blocked"&&b.state==="proceeding"||D.state==="blocked"&&b.state==="unblocked"||D.state==="proceeding"&&b.state==="unblocked",`Invalid blocker state transition: ${D.state} -> ${b.state}`);let x=new Map(C.blockers);x.set(w,b),Le({blockers:x})}function pr({currentLocation:w,nextLocation:b,historyAction:D}){if(Qt.size===0)return;Qt.size>1&&Me(!1,"A router only supports one blocker at a time");let x=Array.from(Qt.entries()),[U,H]=x[x.length-1],K=C.blockers.get(U);if(!(K&&K.state==="proceeding")&&H({currentLocation:w,nextLocation:b,historyAction:D}))return U}function mr(w){let b=_t(404,{pathname:w}),D=l||a,{matches:x,route:U}=Cs(D);return{notFoundMatches:x,route:U,error:b}}function ps(w,b,D){if(v=w,V=b,S=D||null,!k&&C.navigation===na){k=!0;let x=gr(C.location,C.matches);x!=null&&Le({restoreScrollPosition:x})}return()=>{v=null,V=null,S=null}}function cn(w,b){return S&&S(w,b.map(x=>Vm(x,C.loaderData)))||w.key}function li(w,b){if(v&&V){let D=cn(w,b);v[D]=V()}}function gr(w,b){if(v){let D=cn(w,b),x=v[D];if(typeof x=="number")return x}return null}function gt(w,b,D){if(n.patchRoutesOnNavigation)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:$s(b,D,u,!0)}}else return{active:!0,matches:$s(b,D,u,!0)||[]};return{active:!1,matches:null}}async function zn(w,b,D,x){if(!n.patchRoutesOnNavigation)return{type:"success",matches:w};let U=w;for(;;){let H=l==null,K=l||a,z=s;try{await n.patchRoutesOnNavigation({signal:D,path:b,matches:U,fetcherKey:x,patch:(G,W)=>{D.aborted||Ju(G,W,K,z,i,!1)}})}catch(G){return{type:"error",error:G,partialMatches:U}}finally{H&&!D.aborted&&(a=[...a])}if(D.aborted)return{type:"aborted"};let q=_n(K,b,u);if(q)return{type:"success",matches:q};let ee=$s(K,b,u,!0);if(!ee||U.length===ee.length&&U.every((G,W)=>G.route.id===ee[W].route.id))return{type:"success",matches:null};U=ee}}function _r(w){s={},l=xi(w,i,void 0,s)}function ms(w,b,D=!1){let x=l==null;Ju(w,b,l||a,s,i,D),x&&(a=[...a],Le({}))}return Y={get basename(){return u},get future(){return f},get state(){return C},get routes(){return a},get window(){return e},initialize:lr,subscribe:qo,enableScrollRestoration:ps,navigate:ur,fetch:cs,revalidate:ni,createHref:w=>n.history.createHref(w),encodeLocation:w=>n.history.encodeLocation(w),getFetcher:Hn,deleteFetcher:ds,dispose:zo,getBlocker:ai,deleteBlocker:fs,patchRoutes:ms,_internalFetchControllers:ge,_internalSetRoutes:_r,_internalSetStateDoNotUseOrYouWillBreakYourApp(w){Le(w)}},Y}function ug(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function Ra(n,e,t,r,i,s){let a,l;if(i){a=[];for(let h of e)if(a.push(h),h.route.id===i){l=h;break}}else a=e,l=e[e.length-1];let u=Io(r||".",To(a),vt(n.pathname,t)||n.pathname,s==="path");if(r==null&&(u.search=n.search,u.hash=n.hash),(r==null||r===""||r===".")&&l){let h=ll(u.search);if(l.route.index&&!h)u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index";else if(!l.route.index&&h){let f=new URLSearchParams(u.search),p=f.getAll("index");f.delete("index"),p.filter(v=>v).forEach(v=>f.append("index",v));let g=f.toString();u.search=g?`?${g}`:""}}return t!=="/"&&(u.pathname=Gm({basename:t,pathname:u.pathname})),Nn(u)}function Qu(n,e,t){if(!t||!ug(t))return{path:e};if(t.formMethod&&!Ag(t.formMethod))return{path:e,error:_t(405,{method:t.formMethod})};let r=()=>({path:e,error:_t(400,{type:"invalid-body"})}),s=(t.formMethod||"get").toUpperCase(),a=Td(e);if(t.body!==void 0){if(t.formEncType==="text/plain"){if(!ht(s))return r();let p=typeof t.body=="string"?t.body:t.body instanceof FormData||t.body instanceof URLSearchParams?Array.from(t.body.entries()).reduce((g,[v,S])=>`${g}${v}=${S}
`,""):String(t.body);return{path:e,submission:{formMethod:s,formAction:a,formEncType:t.formEncType,formData:void 0,json:void 0,text:p}}}else if(t.formEncType==="application/json"){if(!ht(s))return r();try{let p=typeof t.body=="string"?JSON.parse(t.body):t.body;return{path:e,submission:{formMethod:s,formAction:a,formEncType:t.formEncType,formData:void 0,json:p,text:void 0}}}catch{return r()}}}ae(typeof FormData=="function","FormData is not available in this environment");let l,u;if(t.formData)l=Sa(t.formData),u=t.formData;else if(t.body instanceof FormData)l=Sa(t.body),u=t.body;else if(t.body instanceof URLSearchParams)l=t.body,u=nc(l);else if(t.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(t.body),u=nc(l)}catch{return r()}let h={formMethod:s,formAction:a,formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(ht(h.formMethod))return{path:e,submission:h};let f=Un(e);return n&&f.search&&ll(f.search)&&l.append("index",""),f.search=`?${l}`,{path:Nn(f),submission:h}}function Yu(n,e,t,r,i,s,a,l,u,h,f,p,g,v,S,V,k,L,O,F){let Z=F?pt(F[1])?F[1].error:F[1].data:void 0,Y=i.createURL(s.location),C=i.createURL(u),I;if(f&&s.errors){let E=Object.keys(s.errors)[0];I=a.findIndex(fe=>fe.route.id===E)}else if(F&&pt(F[1])){let E=F[0];I=a.findIndex(fe=>fe.route.id===E)-1}let _=F?F[1].statusCode:void 0,y=_&&_>=400,T={currentUrl:Y,currentParams:s.matches[0]?.params||{},nextUrl:C,nextParams:a[0].params,...l,actionResult:Z,actionStatus:_},R=a.map((E,fe)=>{let{route:Ke}=E,ge=null;if(I!=null&&fe>I?ge=!1:Ke.lazy?ge=!0:Ke.loader==null?ge=!1:f?ge=Aa(Ke,s.loaderData,s.errors):cg(s.loaderData,s.matches[fe],E)&&(ge=!0),ge!==null)return ba(t,r,n,E,h,e,ge);let Ge=y?!1:p||Y.pathname+Y.search===C.pathname+C.search||Y.search!==C.search||hg(s.matches[fe],E),Fe={...T,defaultShouldRevalidate:Ge},ot=io(E,Fe);return ba(t,r,n,E,h,e,ot,Fe)}),A=[];return S.forEach((E,fe)=>{if(f||!a.some(ze=>ze.route.id===E.routeId)||v.has(fe))return;let Ke=s.fetchers.get(fe),ge=Ke&&Ke.state!=="idle"&&Ke.data===void 0,Ge=_n(k,E.path,L);if(!Ge){if(O&&ge)return;A.push({key:fe,routeId:E.routeId,path:E.path,matches:null,match:null,request:null,controller:null});return}if(V.has(fe))return;let Fe=Bs(Ge,E.path),ot=new AbortController,Ye=Tr(i,E.path,ot.signal),ut=null;if(g.has(fe))g.delete(fe),ut=Pr(t,r,Ye,Ge,Fe,h,e);else if(ge)p&&(ut=Pr(t,r,Ye,Ge,Fe,h,e));else{let ze={...T,defaultShouldRevalidate:y?!1:p};io(Fe,ze)&&(ut=Pr(t,r,Ye,Ge,Fe,h,e,ze))}ut&&A.push({key:fe,routeId:E.routeId,path:E.path,matches:ut,match:Fe,request:Ye,controller:ot})}),{dsMatches:R,revalidatingFetchers:A}}function Aa(n,e,t){if(n.lazy)return!0;if(!n.loader)return!1;let r=e!=null&&n.id in e,i=t!=null&&t[n.id]!==void 0;return!r&&i?!1:typeof n.loader=="function"&&n.loader.hydrate===!0?!0:!r&&!i}function cg(n,e,t){let r=!e||t.route.id!==e.route.id,i=!n.hasOwnProperty(t.route.id);return r||i}function hg(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function io(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}function Ju(n,e,t,r,i,s){let a;if(n){let h=r[n];ae(h,`No route found to patch children into: routeId = ${n}`),h.children||(h.children=[]),a=h.children}else a=t;let l=[],u=[];if(e.forEach(h=>{let f=a.find(p=>_d(h,p));f?u.push({existingRoute:f,newRoute:h}):l.push(h)}),l.length>0){let h=xi(l,i,[n||"_","patch",String(a?.length||"0")],r);a.push(...h)}if(s&&u.length>0)for(let h=0;h<u.length;h++){let{existingRoute:f,newRoute:p}=u[h],g=f,[v]=xi([p],i,[],{},!0);Object.assign(g,{element:v.element?v.element:g.element,errorElement:v.errorElement?v.errorElement:g.errorElement,hydrateFallbackElement:v.hydrateFallbackElement?v.hydrateFallbackElement:g.hydrateFallbackElement})}}function _d(n,e){return"id"in n&&"id"in e&&n.id===e.id?!0:n.index===e.index&&n.path===e.path&&n.caseSensitive===e.caseSensitive?(!n.children||n.children.length===0)&&(!e.children||e.children.length===0)?!0:n.children.every((t,r)=>e.children?.some(i=>_d(t,i))):!1}var Xu=new WeakMap,yd=({key:n,route:e,manifest:t,mapRouteProperties:r})=>{let i=t[e.id];if(ae(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[n];if(!s)return;let a=Xu.get(i);a||(a={},Xu.set(i,a));let l=a[n];if(l)return l;let u=(async()=>{let h=Dm(n),p=i[n]!==void 0&&n!=="hasErrorBoundary";if(h)Me(!h,"Route property "+n+" is not a supported lazy route property. This property will be ignored."),a[n]=Promise.resolve();else if(p)Me(!1,`Route "${i.id}" has a static property "${n}" defined. The lazy property will be ignored.`);else{let g=await s();g!=null&&(Object.assign(i,{[n]:g}),Object.assign(i,r(i)))}typeof i.lazy=="object"&&(i.lazy[n]=void 0,Object.values(i.lazy).every(g=>g===void 0)&&(i.lazy=void 0))})();return a[n]=u,u},Zu=new WeakMap;function dg(n,e,t,r,i){let s=t[n.id];if(ae(s,"No route found in manifest"),!n.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof n.lazy=="function"){let f=Zu.get(s);if(f)return{lazyRoutePromise:f,lazyHandlerPromise:f};let p=(async()=>{ae(typeof n.lazy=="function","No lazy route function found");let g=await n.lazy(),v={};for(let S in g){let V=g[S];if(V===void 0)continue;let k=Lm(S),O=s[S]!==void 0&&S!=="hasErrorBoundary";k?Me(!k,"Route property "+S+" is not a supported property to be returned from a lazy route function. This property will be ignored."):O?Me(!O,`Route "${s.id}" has a static property "${S}" defined but its lazy function is also returning a value for this property. The lazy route property "${S}" will be ignored.`):v[S]=V}Object.assign(s,v),Object.assign(s,{...r(s),lazy:void 0})})();return Zu.set(s,p),p.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:p}}let a=Object.keys(n.lazy),l=[],u;for(let f of a){if(i&&i.includes(f))continue;let p=yd({key:f,route:n,manifest:t,mapRouteProperties:r});p&&(l.push(p),f===e&&(u=p))}let h=l.length>0?Promise.all(l).then(()=>{}):void 0;return h?.catch(()=>{}),u?.catch(()=>{}),{lazyRoutePromise:h,lazyHandlerPromise:u}}async function ec(n){let e=n.matches.filter(i=>i.shouldLoad),t={};return(await Promise.all(e.map(i=>i.resolve()))).forEach((i,s)=>{t[e[s].route.id]=i}),t}async function fg(n){return n.matches.some(e=>e.route.unstable_middleware)?vd(n,()=>ec(n)):ec(n)}function vd(n,e){return pg(n,e,r=>r,Tg,t);function t(r,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:r}}));{let{matches:a}=n,l=Math.min(a.findIndex(h=>h.route.id===i)||0,a.findIndex(h=>h.unstable_shouldCallHandler())||0),u=yn(a,a[l].route.id).route.id;return Promise.resolve({[u]:{type:"error",result:r}})}}}async function pg(n,e,t,r,i){let{matches:s,request:a,params:l,context:u}=n,h=s.flatMap(p=>p.route.unstable_middleware?p.route.unstable_middleware.map(g=>[p.route.id,g]):[]);return await Ed({request:a,params:l,context:u},h,e,t,r,i)}async function Ed(n,e,t,r,i,s,a=0){let{request:l}=n;if(l.signal.aborted)throw l.signal.reason??new Error(`Request aborted: ${l.method} ${l.url}`);let u=e[a];if(!u)return await t();let[h,f]=u,p,g=async()=>{if(p)throw new Error("You may only call `next()` once per middleware");try{return p={value:await Ed(n,e,t,r,i,s,a+1)},p.value}catch(v){return p={value:await s(v,h,p)},p.value}};try{let v=await f(n,g),S=v!=null?r(v):void 0;return i(S)?S:p?S??p.value:(p={value:await g()},p.value)}catch(v){return await s(v,h,p)}}function wd(n,e,t,r,i){let s=yd({key:"unstable_middleware",route:r.route,manifest:e,mapRouteProperties:n}),a=dg(r.route,ht(t.method)?"action":"loader",e,n,i);return{middleware:s,route:a.lazyRoutePromise,handler:a.lazyHandlerPromise}}function ba(n,e,t,r,i,s,a,l=null){let u=!1,h=wd(n,e,t,r,i);return{...r,_lazyPromises:h,shouldLoad:a,unstable_shouldRevalidateArgs:l,unstable_shouldCallHandler(f){return u=!0,l?typeof f=="boolean"?io(r,{...l,defaultShouldRevalidate:f}):io(r,l):a},resolve(f){return u||a||f&&!ht(t.method)&&(r.route.lazy||r.route.loader)?gg({request:t,match:r,lazyHandlerPromise:h?.handler,lazyRoutePromise:h?.route,handlerOverride:f,scopedContext:s}):Promise.resolve({type:"data",result:void 0})}}}function Pr(n,e,t,r,i,s,a,l=null){return r.map(u=>u.route.id!==i.route.id?{...u,shouldLoad:!1,unstable_shouldRevalidateArgs:l,unstable_shouldCallHandler:()=>!1,_lazyPromises:wd(n,e,t,u,s),resolve:()=>Promise.resolve({type:"data",result:void 0})}:ba(n,e,t,u,s,a,!0,l))}async function mg(n,e,t,r,i,s){t.some(h=>h._lazyPromises?.middleware)&&await Promise.all(t.map(h=>h._lazyPromises?.middleware));let a={request:e,params:t[0].params,context:i,matches:t},u=await n({...a,fetcherKey:r,unstable_runClientMiddleware:h=>{let f=a;return vd(f,()=>h({...f,fetcherKey:r,unstable_runClientMiddleware:()=>{throw new Error("Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler")}}))}});try{await Promise.all(t.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return u}async function gg({request:n,match:e,lazyHandlerPromise:t,lazyRoutePromise:r,handlerOverride:i,scopedContext:s}){let a,l,u=ht(n.method),h=u?"action":"loader",f=p=>{let g,v=new Promise((k,L)=>g=L);l=()=>g(),n.signal.addEventListener("abort",l);let S=k=>typeof p!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${h}" [routeId: ${e.route.id}]`)):p({request:n,params:e.params,context:s},...k!==void 0?[k]:[]),V=(async()=>{try{return{type:"data",result:await(i?i(L=>S(L)):S())}}catch(k){return{type:"error",result:k}}})();return Promise.race([V,v])};try{let p=u?e.route.action:e.route.loader;if(t||r)if(p){let g,[v]=await Promise.all([f(p).catch(S=>{g=S}),t,r]);if(g!==void 0)throw g;a=v}else{await t;let g=u?e.route.action:e.route.loader;if(g)[a]=await Promise.all([f(g),r]);else if(h==="action"){let v=new URL(n.url),S=v.pathname+v.search;throw _t(405,{method:n.method,pathname:S,routeId:e.route.id})}else return{type:"data",result:void 0}}else if(p)a=await f(p);else{let g=new URL(n.url),v=g.pathname+g.search;throw _t(404,{pathname:v})}}catch(p){return{type:"error",result:p}}finally{l&&n.signal.removeEventListener("abort",l)}return a}async function _g(n){let e=n.headers.get("Content-Type");return e&&/\bapplication\/json\b/.test(e)?n.body==null?null:n.json():n.text()}async function yg(n){let{result:e,type:t}=n;if(Id(e)){let r;try{r=await _g(e)}catch(i){return{type:"error",error:i}}return t==="error"?{type:"error",error:new ro(e.status,e.statusText,r),statusCode:e.status,headers:e.headers}:{type:"data",data:r,statusCode:e.status,headers:e.headers}}return t==="error"?oc(e)?e.data instanceof Error?{type:"error",error:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:new ro(e.init?.status||500,void 0,e.data),statusCode:Fi(e)?e.status:void 0,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"error",error:e,statusCode:Fi(e)?e.status:void 0}:oc(e)?{type:"data",data:e.data,statusCode:e.init?.status,headers:e.init?.headers?new Headers(e.init.headers):void 0}:{type:"data",data:e}}function vg(n,e,t,r,i){let s=n.headers.get("Location");if(ae(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!al(s)){let a=r.slice(0,r.findIndex(l=>l.route.id===t)+1);s=Ra(new URL(e.url),a,i,s),n.headers.set("Location",s)}return n}function tc(n,e,t){if(al(n)){let r=n,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=vt(i.pathname,t)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return n}function Tr(n,e,t,r){let i=n.createURL(Td(e)).toString(),s={signal:t};if(r&&ht(r.formMethod)){let{formMethod:a,formEncType:l}=r;s.method=a.toUpperCase(),l==="application/json"?(s.headers=new Headers({"Content-Type":l}),s.body=JSON.stringify(r.json)):l==="text/plain"?s.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?s.body=Sa(r.formData):s.body=r.formData}return new Request(i,s)}function Sa(n){let e=new URLSearchParams;for(let[t,r]of n.entries())e.append(t,typeof r=="string"?r:r.name);return e}function nc(n){let e=new FormData;for(let[t,r]of n.entries())e.append(t,r);return e}function Eg(n,e,t,r=!1,i=!1){let s={},a=null,l,u=!1,h={},f=t&&pt(t[1])?t[1].error:void 0;return n.forEach(p=>{if(!(p.route.id in e))return;let g=p.route.id,v=e[g];if(ae(!Yn(v),"Cannot handle redirect results in processLoaderData"),pt(v)){let S=v.error;if(f!==void 0&&(S=f,f=void 0),a=a||{},i)a[g]=S;else{let V=yn(n,g);a[V.route.id]==null&&(a[V.route.id]=S)}r||(s[g]=gd),u||(u=!0,l=Fi(v.error)?v.error.status:500),v.headers&&(h[g]=v.headers)}else s[g]=v.data,v.statusCode&&v.statusCode!==200&&!u&&(l=v.statusCode),v.headers&&(h[g]=v.headers)}),f!==void 0&&t&&(a={[t[0]]:f},t[2]&&(s[t[2]]=void 0)),{loaderData:s,errors:a,statusCode:l||200,loaderHeaders:h}}function rc(n,e,t,r,i,s){let{loaderData:a,errors:l}=Eg(e,t,r);return i.filter(u=>!u.matches||u.matches.some(h=>h.shouldLoad)).forEach(u=>{let{key:h,match:f,controller:p}=u;if(p&&p.signal.aborted)return;let g=s[h];if(ae(g,"Did not find corresponding fetcher result"),pt(g)){let v=yn(n.matches,f?.route.id);l&&l[v.route.id]||(l={...l,[v.route.id]:g.error}),n.fetchers.delete(h)}else if(Yn(g))ae(!1,"Unhandled fetcher revalidation redirect");else{let v=gn(g.data);n.fetchers.set(h,v)}}),{loaderData:a,errors:l}}function ic(n,e,t,r){let i=Object.entries(e).filter(([,s])=>s!==gd).reduce((s,[a,l])=>(s[a]=l,s),{});for(let s of t){let a=s.route.id;if(!e.hasOwnProperty(a)&&n.hasOwnProperty(a)&&s.route.loader&&(i[a]=n[a]),r&&r.hasOwnProperty(a))break}return i}function sc(n){return n?pt(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function yn(n,e){return(e?n.slice(0,n.findIndex(r=>r.route.id===e)+1):[...n]).reverse().find(r=>r.route.hasErrorBoundary===!0)||n[0]}function Cs(n){let e=n.length===1?n[0]:n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function _t(n,{pathname:e,routeId:t,method:r,type:i,message:s}={}){let a="Unknown Server Error",l="Unknown @remix-run/router error";return n===400?(a="Bad Request",r&&e&&t?l=`You made a ${r} request to "${e}" but did not provide a \`loader\` for route "${t}", so there is no way to handle the request.`:i==="invalid-body"&&(l="Unable to encode submission body")):n===403?(a="Forbidden",l=`Route "${t}" does not match URL "${e}"`):n===404?(a="Not Found",l=`No route matches URL "${e}"`):n===405&&(a="Method Not Allowed",r&&e&&t?l=`You made a ${r.toUpperCase()} request to "${e}" but did not provide an \`action\` for route "${t}", so there is no way to handle the request.`:r&&(l=`Invalid request method "${r.toUpperCase()}"`)),new ro(n||500,a,new Error(l),!0)}function ks(n){let e=Object.entries(n);for(let t=e.length-1;t>=0;t--){let[r,i]=e[t];if(Yn(i))return{key:r,result:i}}}function Td(n){let e=typeof n=="string"?Un(n):n;return Nn({...e,hash:""})}function wg(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function Tg(n){return n!=null&&typeof n=="object"&&Object.entries(n).every(([e,t])=>typeof e=="string"&&Ig(t))}function Ig(n){return n!=null&&typeof n=="object"&&"type"in n&&"result"in n&&(n.type==="data"||n.type==="error")}function Rg(n){return Id(n.result)&&rg.has(n.result.status)}function pt(n){return n.type==="error"}function Yn(n){return(n&&n.type)==="redirect"}function oc(n){return typeof n=="object"&&n!=null&&"type"in n&&"data"in n&&"init"in n&&n.type==="DataWithResponseInit"}function Id(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function Ag(n){return ng.has(n.toUpperCase())}function ht(n){return eg.has(n.toUpperCase())}function ll(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function Bs(n,e){let t=typeof e=="string"?Un(e).search:e.search;if(n[n.length-1].route.index&&ll(t||""))return n[n.length-1];let r=fd(n);return r[r.length-1]}function ac(n){let{formMethod:e,formAction:t,formEncType:r,text:i,formData:s,json:a}=n;if(!(!e||!t||!r)){if(i!=null)return{formMethod:e,formAction:t,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:t,formEncType:r,formData:s,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:t,formEncType:r,formData:void 0,json:a,text:void 0}}}function ra(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function bg(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function vi(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Sg(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function gn(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function Pg(n,e){try{let t=n.sessionStorage.getItem(md);if(t){let r=JSON.parse(t);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function Cg(n,e){if(e.size>0){let t={};for(let[r,i]of e)t[r]=[...i];try{n.sessionStorage.setItem(md,JSON.stringify(t))}catch(r){Me(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}function kg(){let n,e,t=new Promise((r,i)=>{n=async s=>{r(s);try{await t}catch{}},e=async s=>{i(s);try{await t}catch{}}});return{promise:t,resolve:n,reject:e}}var sr=Et(null);sr.displayName="DataRouter";var Yi=Et(null);Yi.displayName="DataRouterState";Et(!1);var ul=Et({isTransitioning:!1});ul.displayName="ViewTransition";var Rd=Et(new Map);Rd.displayName="Fetchers";var Dg=Et(null);Dg.displayName="Await";var Dt=Et(null);Dt.displayName="Navigation";var Ro=Et(null);Ro.displayName="Location";var Nt=Et({outlet:null,matches:[],isDataRoute:!1});Nt.displayName="Route";var cl=Et(null);cl.displayName="RouteError";function Ng(n,{relative:e}={}){ae(Gr(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:r}=_e(Dt),{hash:i,pathname:s,search:a}=Ji(n,{relative:e}),l=s;return t!=="/"&&(l=s==="/"?t:Ht([t,s])),r.createHref({pathname:l,search:a,hash:i})}function Gr(){return _e(Ro)!=null}function $n(){return ae(Gr(),"useLocation() may be used only in the context of a <Router> component."),_e(Ro).location}var Ad="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bd(n){_e(Dt).static||rd(n)}function Ao(){let{isDataRoute:n}=_e(Nt);return n?Kg():Lg()}function Lg(){ae(Gr(),"useNavigate() may be used only in the context of a <Router> component.");let n=_e(sr),{basename:e,navigator:t}=_e(Dt),{matches:r}=_e(Nt),{pathname:i}=$n(),s=JSON.stringify(To(r)),a=xr(!1);return bd(()=>{a.current=!0}),Fr((u,h={})=>{if(Me(a.current,Ad),!a.current)return;if(typeof u=="number"){t.go(u);return}let f=Io(u,JSON.parse(s),i,h.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ht([e,f.pathname])),(h.replace?t.replace:t.push)(f,h.state,h)},[e,t,s,i,n])}var Og=Et(null);function Vg(n){let e=_e(Nt).outlet;return e&&re(Og.Provider,{value:n},e)}function Ji(n,{relative:e}={}){let{matches:t}=_e(Nt),{pathname:r}=$n(),i=JSON.stringify(To(t));return yt(()=>Io(n,JSON.parse(i),r,e==="path"),[n,i,r,e])}function Mg(n,e,t,r,i){ae(Gr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=_e(Dt),{matches:a}=_e(Nt),l=a[a.length-1],u=l?l.params:{},h=l?l.pathname:"/",f=l?l.pathnameBase:"/",p=l&&l.route;{let O=p&&p.path||"";Sd(h,!p||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let g=$n(),v;v=g;let S=v.pathname||"/",V=S;if(f!=="/"){let O=f.replace(/^\//,"").split("/");V="/"+S.replace(/^\//,"").split("/").slice(O.length).join("/")}let k=_n(n,{pathname:V});return Me(p||k!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Me(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Bg(k&&k.map(O=>Object.assign({},O,{params:Object.assign({},u,O.params),pathname:Ht([f,s.encodeLocation?s.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?f:Ht([f,s.encodeLocation?s.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),a,t,r,i)}function xg(){let n=Wg(),e=Fi(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},a=null;return console.error("Error handled by React Router default ErrorBoundary:",n),a=re(Ct,null,re("p",null,"💿 Hey developer 👋"),re("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",re("code",{style:s},"ErrorBoundary")," or"," ",re("code",{style:s},"errorElement")," prop on your route.")),re(Ct,null,re("h2",null,"Unexpected Application Error!"),re("h3",{style:{fontStyle:"italic"}},e),t?re("pre",{style:i},t):null,a)}var Fg=re(xg,null),Ug=class extends jt{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.unstable_onError?this.props.unstable_onError(n,e):console.error("React Router caught the following error during render",n)}render(){return this.state.error!==void 0?re(Nt.Provider,{value:this.props.routeContext},re(cl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function $g({routeContext:n,match:e,children:t}){let r=_e(sr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),re(Nt.Provider,{value:n},t)}function Bg(n,e=[],t=null,r=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,a=t?.errors;if(a!=null){let h=s.findIndex(f=>f.route.id&&a?.[f.route.id]!==void 0);ae(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,u=-1;if(t)for(let h=0;h<s.length;h++){let f=s[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:p,errors:g}=t,v=f.route.loader&&!p.hasOwnProperty(f.route.id)&&(!g||g[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,f,p)=>{let g,v=!1,S=null,V=null;t&&(g=a&&f.route.id?a[f.route.id]:void 0,S=f.route.errorElement||Fg,l&&(u<0&&p===0?(Sd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,V=null):u===p&&(v=!0,V=f.route.hydrateFallbackElement||null)));let k=e.concat(s.slice(0,p+1)),L=()=>{let O;return g?O=S:v?O=V:f.route.Component?O=re(f.route.Component,null):f.route.element?O=f.route.element:O=h,re($g,{match:f,routeContext:{outlet:h,matches:k,isDataRoute:t!=null},children:O})};return t&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?re(Ug,{location:t.location,revalidation:t.revalidation,component:S,error:g,children:L(),routeContext:{outlet:null,matches:k,isDataRoute:!0},unstable_onError:r}):L()},null)}function hl(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(n){let e=_e(sr);return ae(e,hl(n)),e}function Hg(n){let e=_e(Yi);return ae(e,hl(n)),e}function zg(n){let e=_e(Nt);return ae(e,hl(n)),e}function dl(n){let e=zg(n),t=e.matches[e.matches.length-1];return ae(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function qg(){return dl("useRouteId")}function Wg(){let n=_e(cl),e=Hg("useRouteError"),t=dl("useRouteError");return n!==void 0?n:e.errors?.[t]}function Kg(){let{router:n}=jg("useNavigate"),e=dl("useNavigate"),t=xr(!1);return bd(()=>{t.current=!0}),Fr(async(i,s={})=>{Me(t.current,Ad),t.current&&(typeof i=="number"?n.navigate(i):await n.navigate(i,{fromRouteId:e,...s}))},[n,e])}var lc={};function Sd(n,e,t){!e&&!lc[n]&&(lc[n]=!0,Me(!1,t))}var uc={};function cc(n,e){!n&&!uc[e]&&(uc[e]=!0,console.warn(e))}function Gg(n){let e={hasErrorBoundary:n.hasErrorBoundary||n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&(n.element&&Me(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(e,{element:re(n.Component),Component:void 0})),n.HydrateFallback&&(n.hydrateFallbackElement&&Me(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(e,{hydrateFallbackElement:re(n.HydrateFallback),HydrateFallback:void 0})),n.ErrorBoundary&&(n.errorElement&&Me(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(e,{errorElement:re(n.ErrorBoundary),ErrorBoundary:void 0})),e}var Qg=["HydrateFallback","hydrateFallbackElement"],Yg=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}};function Jg({router:n,flushSync:e,unstable_onError:t}){let[r,i]=Be(n.state),[s,a]=Be(),[l,u]=Be({isTransitioning:!1}),[h,f]=Be(),[p,g]=Be(),[v,S]=Be(),V=xr(new Map),k=Fr(Y=>{i(C=>(Y.errors&&t&&Object.entries(Y.errors).forEach(([I,_])=>{C.errors?.[I]!==_&&t(_)}),Y))},[t]),L=Fr((Y,{deletedFetchers:C,flushSync:I,viewTransitionOpts:_})=>{Y.fetchers.forEach((T,R)=>{T.data!==void 0&&V.current.set(R,T.data)}),C.forEach(T=>V.current.delete(T)),cc(I===!1||e!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let y=n.window!=null&&n.window.document!=null&&typeof n.window.document.startViewTransition=="function";if(cc(_==null||y,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!_||!y){e&&I?e(()=>k(Y)):Mu(()=>k(Y));return}if(e&&I){e(()=>{p&&(h&&h.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:_.currentLocation,nextLocation:_.nextLocation})});let T=n.window.document.startViewTransition(()=>{e(()=>k(Y))});T.finished.finally(()=>{e(()=>{f(void 0),g(void 0),a(void 0),u({isTransitioning:!1})})}),e(()=>g(T));return}p?(h&&h.resolve(),p.skipTransition(),S({state:Y,currentLocation:_.currentLocation,nextLocation:_.nextLocation})):(a(Y),u({isTransitioning:!0,flushSync:!1,currentLocation:_.currentLocation,nextLocation:_.nextLocation}))},[n.window,e,p,h,k]);rd(()=>n.subscribe(L),[n,L]),mt(()=>{l.isTransitioning&&!l.flushSync&&f(new Yg)},[l]),mt(()=>{if(h&&s&&n.window){let Y=s,C=h.promise,I=n.window.document.startViewTransition(async()=>{Mu(()=>k(Y)),await C});I.finished.finally(()=>{f(void 0),g(void 0),a(void 0),u({isTransitioning:!1})}),g(I)}},[s,h,n.window,k]),mt(()=>{h&&s&&r.location.key===s.location.key&&h.resolve()},[h,p,r.location,s]),mt(()=>{!l.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),S(void 0))},[l.isTransitioning,v]);let O=yt(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:Y=>n.navigate(Y),push:(Y,C,I)=>n.navigate(Y,{state:C,preventScrollReset:I?.preventScrollReset}),replace:(Y,C,I)=>n.navigate(Y,{replace:!0,state:C,preventScrollReset:I?.preventScrollReset})}),[n]),F=n.basename||"/",Z=yt(()=>({router:n,navigator:O,static:!1,basename:F,unstable_onError:t}),[n,O,F,t]);return re(Ct,null,re(sr.Provider,{value:Z},re(Yi.Provider,{value:r},re(Rd.Provider,{value:V.current},re(ul.Provider,{value:l},re(n_,{basename:F,location:r.location,navigationType:r.historyAction,navigator:O},re(Xg,{routes:n.routes,future:n.future,state:r,unstable_onError:t})))))),null)}var Xg=hm(Zg);function Zg({routes:n,future:e,state:t,unstable_onError:r}){return Mg(n,void 0,t,r,e)}function e_({to:n,replace:e,state:t,relative:r}){ae(Gr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=_e(Dt);Me(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=_e(Nt),{pathname:a}=$n(),l=Ao(),u=Io(n,To(s),a,r==="path"),h=JSON.stringify(u);return mt(()=>{l(JSON.parse(h),{replace:e,state:t,relative:r})},[l,h,r,e,t]),null}function t_(n){return Vg(n.context)}function n_({basename:n="/",children:e=null,location:t,navigationType:r="POP",navigator:i,static:s=!1}){ae(!Gr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=n.replace(/^\/*/,"/"),l=yt(()=>({basename:a,navigator:i,static:s,future:{}}),[a,i,s]);typeof t=="string"&&(t=Un(t));let{pathname:u="/",search:h="",hash:f="",state:p=null,key:g="default"}=t,v=yt(()=>{let S=vt(u,a);return S==null?null:{location:{pathname:S,search:h,hash:f,state:p,key:g},navigationType:r}},[a,u,h,f,p,g,r]);return Me(v!=null,`<Router basename="${a}"> is not able to match the URL "${u}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:re(Dt.Provider,{value:l},re(Ro.Provider,{children:e,value:v}))}var js="get",Hs="application/x-www-form-urlencoded";function bo(n){return n!=null&&typeof n.tagName=="string"}function r_(n){return bo(n)&&n.tagName.toLowerCase()==="button"}function i_(n){return bo(n)&&n.tagName.toLowerCase()==="form"}function s_(n){return bo(n)&&n.tagName.toLowerCase()==="input"}function o_(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function a_(n,e){return n.button===0&&(!e||e==="_self")&&!o_(n)}var Ds=null;function l_(){if(Ds===null)try{new FormData(document.createElement("form"),0),Ds=!1}catch{Ds=!0}return Ds}var u_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ia(n){return n!=null&&!u_.has(n)?(Me(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hs}"`),null):n}function c_(n,e){let t,r,i,s,a;if(i_(n)){let l=n.getAttribute("action");r=l?vt(l,e):null,t=n.getAttribute("method")||js,i=ia(n.getAttribute("enctype"))||Hs,s=new FormData(n)}else if(r_(n)||s_(n)&&(n.type==="submit"||n.type==="image")){let l=n.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=n.getAttribute("formaction")||l.getAttribute("action");if(r=u?vt(u,e):null,t=n.getAttribute("formmethod")||l.getAttribute("method")||js,i=ia(n.getAttribute("formenctype"))||ia(l.getAttribute("enctype"))||Hs,s=new FormData(l,n),!l_()){let{name:h,type:f,value:p}=n;if(f==="image"){let g=h?`${h}.`:"";s.append(`${g}x`,"0"),s.append(`${g}y`,"0")}else h&&s.append(h,p)}}else{if(bo(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=js,r=null,i=Hs,a=n}return s&&i==="text/plain"&&(a=s,s=void 0),{action:r,method:t.toLowerCase(),encType:i,formData:s,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fl(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function h_(n,e,t){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname=`_root.${t}`:e&&vt(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${t}`,r}async function d_(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function f_(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function p_(n,e,t){let r=await Promise.all(n.map(async i=>{let s=e.routes[i.route.id];if(s){let a=await d_(s,t);return a.links?a.links():[]}return[]}));return y_(r.flat(1).filter(f_).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function hc(n,e,t,r,i,s){let a=(u,h)=>t[h]?u.route.id!==t[h].route.id:!0,l=(u,h)=>t[h].pathname!==u.pathname||t[h].route.path?.endsWith("*")&&t[h].params["*"]!==u.params["*"];return s==="assets"?e.filter((u,h)=>a(u,h)||l(u,h)):s==="data"?e.filter((u,h)=>{let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(a(u,h)||l(u,h))return!0;if(u.route.shouldRevalidate){let p=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function m_(n,e,{includeHydrateFallback:t}={}){return g_(n.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),t&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function g_(n){return[...new Set(n)]}function __(n){let e={},t=Object.keys(n).sort();for(let r of t)e[r]=n[r];return e}function y_(n,e){let t=new Set;return new Set(e),n.reduce((r,i)=>{let s=JSON.stringify(__(i));return t.has(s)||(t.add(s),r.push({key:s,link:i})),r},[])}function Pd(){let n=_e(sr);return fl(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function v_(){let n=_e(Yi);return fl(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var pl=Et(void 0);pl.displayName="FrameworkContext";function Cd(){let n=_e(pl);return fl(n,"You must render this element inside a <HydratedRouter> element"),n}function E_(n,e){let t=_e(pl),[r,i]=Be(!1),[s,a]=Be(!1),{onFocus:l,onBlur:u,onMouseEnter:h,onMouseLeave:f,onTouchStart:p}=e,g=xr(null);mt(()=>{if(n==="render"&&a(!0),n==="viewport"){let V=L=>{L.forEach(O=>{a(O.isIntersecting)})},k=new IntersectionObserver(V,{threshold:.5});return g.current&&k.observe(g.current),()=>{k.disconnect()}}},[n]),mt(()=>{if(r){let V=setTimeout(()=>{a(!0)},100);return()=>{clearTimeout(V)}}},[r]);let v=()=>{i(!0)},S=()=>{i(!1),a(!1)};return t?n!=="intent"?[s,g,{}]:[s,g,{onFocus:Ei(l,v),onBlur:Ei(u,S),onMouseEnter:Ei(h,v),onMouseLeave:Ei(f,S),onTouchStart:Ei(p,v)}]:[!1,g,{}]}function Ei(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function w_({page:n,...e}){let{router:t}=Pd(),r=yt(()=>_n(t.routes,n,t.basename),[t.routes,n,t.basename]);return r?re(I_,{page:n,matches:r,...e}):null}function T_(n){let{manifest:e,routeModules:t}=Cd(),[r,i]=Be([]);return mt(()=>{let s=!1;return p_(n,e,t).then(a=>{s||i(a)}),()=>{s=!0}},[n,e,t]),r}function I_({page:n,matches:e,...t}){let r=$n(),{manifest:i,routeModules:s}=Cd(),{basename:a}=Pd(),{loaderData:l,matches:u}=v_(),h=yt(()=>hc(n,e,u,i,r,"data"),[n,e,u,i,r]),f=yt(()=>hc(n,e,u,i,r,"assets"),[n,e,u,i,r]),p=yt(()=>{if(n===r.pathname+r.search+r.hash)return[];let S=new Set,V=!1;if(e.forEach(L=>{let O=i.routes[L.route.id];!O||!O.hasLoader||(!h.some(F=>F.route.id===L.route.id)&&L.route.id in l&&s[L.route.id]?.shouldRevalidate||O.hasClientLoader?V=!0:S.add(L.route.id))}),S.size===0)return[];let k=h_(n,a,"data");return V&&S.size>0&&k.searchParams.set("_routes",e.filter(L=>S.has(L.route.id)).map(L=>L.route.id).join(",")),[k.pathname+k.search]},[a,l,r,i,h,e,n,s]),g=yt(()=>m_(f,i),[f,i]),v=T_(f);return re(Ct,null,p.map(S=>re("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),g.map(S=>re("link",{key:S,rel:"modulepreload",href:S,...t})),v.map(({key:S,link:V})=>re("link",{key:S,nonce:t.nonce,...V})))}function R_(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var kd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kd&&(window.__reactRouterVersion="7.8.2")}catch{}function A_(n,e){return lg({basename:e?.basename,unstable_getContext:e?.unstable_getContext,future:e?.future,history:Sm({window:e?.window}),hydrationData:b_(),routes:n,mapRouteProperties:Gg,hydrationRouteProperties:Qg,dataStrategy:e?.dataStrategy,patchRoutesOnNavigation:e?.patchRoutesOnNavigation,window:e?.window}).initialize()}function b_(){let n=window?.__staticRouterHydrationData;return n&&n.errors&&(n={...n,errors:S_(n.errors)}),n}function S_(n){if(!n)return null;let e=Object.entries(n),t={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")t[r]=new ro(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let a=new s(i.message);a.stack="",t[r]=a}catch{}}if(t[r]==null){let s=new Error(i.message);s.stack="",t[r]=s}}else t[r]=i;return t}var Dd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nd=ol(function({onClick:e,discover:t="render",prefetch:r="none",relative:i,reloadDocument:s,replace:a,state:l,target:u,to:h,preventScrollReset:f,viewTransition:p,...g},v){let{basename:S}=_e(Dt),V=typeof h=="string"&&Dd.test(h),k,L=!1;if(typeof h=="string"&&V&&(k=h,kd))try{let y=new URL(window.location.href),T=h.startsWith("//")?new URL(y.protocol+h):new URL(h),R=vt(T.pathname,S);T.origin===y.origin&&R!=null?h=R+T.search+T.hash:L=!0}catch{Me(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=Ng(h,{relative:i}),[F,Z,Y]=E_(r,g),C=D_(h,{replace:a,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function I(y){e&&e(y),y.defaultPrevented||C(y)}let _=re("a",{...g,...Y,href:k||O,onClick:L||s?e:I,ref:R_(v,Z),target:u,"data-discover":!V&&t==="render"?"true":void 0});return F&&!V?re(Ct,null,_,re(w_,{page:O})):_});Nd.displayName="Link";var P_=ol(function({"aria-current":e="page",caseSensitive:t=!1,className:r="",end:i=!1,style:s,to:a,viewTransition:l,children:u,...h},f){let p=Ji(a,{relative:h.relative}),g=$n(),v=_e(Yi),{navigator:S,basename:V}=_e(Dt),k=v!=null&&M_(p)&&l===!0,L=S.encodeLocation?S.encodeLocation(p).pathname:p.pathname,O=g.pathname,F=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;t||(O=O.toLowerCase(),F=F?F.toLowerCase():null,L=L.toLowerCase()),F&&V&&(F=vt(F,V)||F);const Z=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Y=O===L||!i&&O.startsWith(L)&&O.charAt(Z)==="/",C=F!=null&&(F===L||!i&&F.startsWith(L)&&F.charAt(L.length)==="/"),I={isActive:Y,isPending:C,isTransitioning:k},_=Y?e:void 0,y;typeof r=="function"?y=r(I):y=[r,Y?"active":null,C?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let T=typeof s=="function"?s(I):s;return re(Nd,{...h,"aria-current":_,className:y,ref:f,style:T,to:a,viewTransition:l},typeof u=="function"?u(I):u)});P_.displayName="NavLink";var C_=ol(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:r,replace:i,state:s,method:a=js,action:l,onSubmit:u,relative:h,preventScrollReset:f,viewTransition:p,...g},v)=>{let S=O_(),V=V_(l,{relative:h}),k=a.toLowerCase()==="get"?"get":"post",L=typeof l=="string"&&Dd.test(l);return re("form",{ref:v,method:k,action:V,onSubmit:r?u:F=>{if(u&&u(F),F.defaultPrevented)return;F.preventDefault();let Z=F.nativeEvent.submitter,Y=Z?.getAttribute("formmethod")||a;S(Z||F.currentTarget,{fetcherKey:e,method:Y,navigate:t,replace:i,state:s,relative:h,preventScrollReset:f,viewTransition:p})},...g,"data-discover":!L&&n==="render"?"true":void 0})});C_.displayName="Form";function k_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ld(n){let e=_e(sr);return ae(e,k_(n)),e}function D_(n,{target:e,replace:t,state:r,preventScrollReset:i,relative:s,viewTransition:a}={}){let l=Ao(),u=$n(),h=Ji(n,{relative:s});return Fr(f=>{if(a_(f,e)){f.preventDefault();let p=t!==void 0?t:Nn(u)===Nn(h);l(n,{replace:p,state:r,preventScrollReset:i,relative:s,viewTransition:a})}},[u,l,h,t,r,e,n,i,s,a])}var N_=0,L_=()=>`__${String(++N_)}__`;function O_(){let{router:n}=Ld("useSubmit"),{basename:e}=_e(Dt),t=qg();return Fr(async(r,i={})=>{let{action:s,method:a,encType:l,formData:u,body:h}=c_(r,e);if(i.navigate===!1){let f=i.fetcherKey||L_();await n.fetch(f,t,i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:h,formMethod:i.method||a,formEncType:i.encType||l,flushSync:i.flushSync})}else await n.navigate(i.action||s,{preventScrollReset:i.preventScrollReset,formData:u,body:h,formMethod:i.method||a,formEncType:i.encType||l,replace:i.replace,state:i.state,fromRouteId:t,flushSync:i.flushSync,viewTransition:i.viewTransition})},[n,e,t])}function V_(n,{relative:e}={}){let{basename:t}=_e(Dt),r=_e(Nt);ae(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Ji(n||".",{relative:e})},a=$n();if(n==null){s.search=a.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();s.search=f?`?${f}`:""}}return(!n||n===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(s.pathname=s.pathname==="/"?t:Ht([t,s.pathname])),Nn(s)}function M_(n,{relative:e}={}){let t=_e(ul);ae(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ld("useViewTransitionState"),i=Ji(n,{relative:e});if(!t.isTransitioning)return!1;let s=vt(t.currentLocation.pathname,r)||t.currentLocation.pathname,a=vt(t.nextLocation.pathname,r)||t.nextLocation.pathname;return no(i.pathname,a)!=null||no(i.pathname,s)!=null}function x_(n){return re(Jg,{flushSync:Rm,...n})}const F_="/assets/LOGO-CLmBQeHR.png",U_=()=>Q("div",{className:"navbar",children:Q("img",{src:F_,alt:"iotelligence",className:"navbar-logo"})}),$_=()=>{};var dc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},B_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Vd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,h=u?n[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,v=h&63;u||(v=64,a||(g=64)),r.push(t[f],t[p],t[g],t[v])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Od(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):B_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new j_;const g=s<<2|l>>4;if(r.push(g),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class j_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const H_=function(n){const e=Od(n);return Vd.encodeByteArray(e,!0)},so=function(n){return H_(n).replace(/\./g,"")},Md=function(n){try{return Vd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=()=>z_().__FIREBASE_DEFAULTS__,W_=()=>{if(typeof process>"u"||typeof dc>"u")return;const n=dc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},K_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Md(n[1]);return e&&JSON.parse(e)},So=()=>{try{return $_()||q_()||W_()||K_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xd=n=>So()?.emulatorHosts?.[n],G_=n=>{const e=xd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Fd=()=>So()?.config,Ud=n=>So()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $d(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[so(JSON.stringify(t)),so(JSON.stringify(a)),""].join(".")}const Pi={};function J_(){const n={prod:[],emulator:[]};for(const e of Object.keys(Pi))Pi[e]?n.emulator.push(e):n.prod.push(e);return n}function X_(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let fc=!1;function Bd(n,e){if(typeof window>"u"||typeof document>"u"||!Qr(window.location.host)||Pi[n]===e||Pi[n]||fc)return;Pi[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=J_().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,v){g.setAttribute("width","24"),g.setAttribute("id",v),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{fc=!0,a()},g}function f(g,v){g.setAttribute("id",v),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=X_(r),v=t("text"),S=document.getElementById(v)||document.createElement("span"),V=t("learnmore"),k=document.getElementById(V)||document.createElement("a"),L=t("preprendIcon"),O=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const F=g.element;l(F),f(k,V);const Z=h();u(O,L),F.append(O,S,k,Z),document.body.appendChild(F)}s?(S.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Z_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function ey(){const n=So()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ty(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ny(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iy(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sy(){return!ey()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function ay(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="FirebaseError";class ln extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ly,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xi.prototype.create)}}class Xi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?uy(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new ln(i,l,r)}}function uy(n,e){return n.replace(cy,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cy=/\{\$([^}]+)}/g;function hy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(pc(s)&&pc(a)){if(!tr(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function pc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ii(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function dy(n,e){const t=new fy(n,e);return t.subscribe.bind(t)}class fy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");py(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=sa),i.error===void 0&&(i.error=sa),i.complete===void 0&&(i.complete=sa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function py(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n){return n&&n._delegate?n._delegate:n}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Q_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_y(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gy(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gy(n){return n===Gn?void 0:n}function _y(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new my(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ue||(ue={}));const vy={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Ey=ue.INFO,wy={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Ty=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=wy[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=Ey,this._logHandler=Ty,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Iy=(n,e)=>e.some(t=>n instanceof t);let mc,gc;function Ry(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ay(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jd=new WeakMap,Pa=new WeakMap,Hd=new WeakMap,oa=new WeakMap,gl=new WeakMap;function by(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(An(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&jd.set(t,n)}).catch(()=>{}),gl.set(e,n),e}function Sy(n){if(Pa.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Pa.set(n,e)}let Ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Pa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Hd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return An(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Py(n){Ca=n(Ca)}function Cy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(aa(this),e,...t);return Hd.set(r,e.sort?e.sort():[e]),An(r)}:Ay().includes(n)?function(...e){return n.apply(aa(this),e),An(jd.get(this))}:function(...e){return An(n.apply(aa(this),e))}}function ky(n){return typeof n=="function"?Cy(n):(n instanceof IDBTransaction&&Sy(n),Iy(n,Ry())?new Proxy(n,Ca):n)}function An(n){if(n instanceof IDBRequest)return by(n);if(oa.has(n))return oa.get(n);const e=ky(n);return e!==n&&(oa.set(n,e),gl.set(e,n)),e}const aa=n=>gl.get(n);function Dy(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=An(a);return r&&a.addEventListener("upgradeneeded",u=>{r(An(a.result),u.oldVersion,u.newVersion,An(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ny=["get","getKey","getAll","getAllKeys","count"],Ly=["put","add","delete","clear"],la=new Map;function _c(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(la.get(e))return la.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ly.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ny.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&u.done]))[0]};return la.set(e,s),s}Py(n=>({...n,get:(e,t,r)=>_c(e,t)||n.get(e,t,r),has:(e,t)=>!!_c(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Vy(n){return n.getComponent()?.type==="VERSION"}const ka="@firebase/app",yc="0.14.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new ml("@firebase/app"),My="@firebase/app-compat",xy="@firebase/analytics-compat",Fy="@firebase/analytics",Uy="@firebase/app-check-compat",$y="@firebase/app-check",By="@firebase/auth",jy="@firebase/auth-compat",Hy="@firebase/database",zy="@firebase/data-connect",qy="@firebase/database-compat",Wy="@firebase/functions",Ky="@firebase/functions-compat",Gy="@firebase/installations",Qy="@firebase/installations-compat",Yy="@firebase/messaging",Jy="@firebase/messaging-compat",Xy="@firebase/performance",Zy="@firebase/performance-compat",ev="@firebase/remote-config",tv="@firebase/remote-config-compat",nv="@firebase/storage",rv="@firebase/storage-compat",iv="@firebase/firestore",sv="@firebase/ai",ov="@firebase/firestore-compat",av="firebase",lv="12.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Da="[DEFAULT]",uv={[ka]:"fire-core",[My]:"fire-core-compat",[Fy]:"fire-analytics",[xy]:"fire-analytics-compat",[$y]:"fire-app-check",[Uy]:"fire-app-check-compat",[By]:"fire-auth",[jy]:"fire-auth-compat",[Hy]:"fire-rtdb",[zy]:"fire-data-connect",[qy]:"fire-rtdb-compat",[Wy]:"fire-fn",[Ky]:"fire-fn-compat",[Gy]:"fire-iid",[Qy]:"fire-iid-compat",[Yy]:"fire-fcm",[Jy]:"fire-fcm-compat",[Xy]:"fire-perf",[Zy]:"fire-perf-compat",[ev]:"fire-rc",[tv]:"fire-rc-compat",[nv]:"fire-gcs",[rv]:"fire-gcs-compat",[iv]:"fire-fst",[ov]:"fire-fst-compat",[sv]:"fire-vertex","fire-js":"fire-js",[av]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map,cv=new Map,Na=new Map;function vc(n,e){try{n.container.addComponent(e)}catch(t){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ur(n){const e=n.name;if(Na.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;Na.set(e,n);for(const t of oo.values())vc(t,n);for(const t of cv.values())vc(t,n);return!0}function _l(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function St(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new Xi("app","Firebase",hv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=lv;function zd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Da,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(t||(t=Fd()),!t)throw bn.create("no-options");const s=oo.get(i);if(s){if(tr(t,s.options)&&tr(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const a=new yy(i);for(const u of Na.values())a.addComponent(u);const l=new dv(t,r,a);return oo.set(i,l),l}function qd(n=Da){const e=oo.get(n);if(!e&&n===Da&&Fd())return zd();if(!e)throw bn.create("no-app",{appName:n});return e}function Sn(n,e,t){let r=uv[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}Ur(new nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="firebase-heartbeat-database",pv=1,Ui="firebase-heartbeat-store";let ua=null;function Wd(){return ua||(ua=Dy(fv,pv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ui)}catch(t){console.warn(t)}}}}).catch(n=>{throw bn.create("idb-open",{originalErrorMessage:n.message})})),ua}async function mv(n){try{const t=(await Wd()).transaction(Ui),r=await t.objectStore(Ui).get(Kd(n));return await t.done,r}catch(e){if(e instanceof ln)sn.warn(e.message);else{const t=bn.create("idb-get",{originalErrorMessage:e?.message});sn.warn(t.message)}}}async function Ec(n,e){try{const r=(await Wd()).transaction(Ui,"readwrite");await r.objectStore(Ui).put(e,Kd(n)),await r.done}catch(t){if(t instanceof ln)sn.warn(t.message);else{const r=bn.create("idb-set",{originalErrorMessage:t?.message});sn.warn(r.message)}}}function Kd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=1024,_v=30;class yv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ev(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=wc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>_v){const i=wv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){sn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=wc(),{heartbeatsToSend:t,unsentEntries:r}=vv(this._heartbeatsCache.heartbeats),i=so(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return sn.warn(e),""}}}function wc(){return new Date().toISOString().substring(0,10)}function vv(n,e=gv){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Tc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Tc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Ev{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?ay().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await mv(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ec(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ec(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Tc(n){return so(JSON.stringify({version:2,heartbeats:n})).length}function wv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(n){Ur(new nr("platform-logger",e=>new Oy(e),"PRIVATE")),Ur(new nr("heartbeat",e=>new yv(e),"PRIVATE")),Sn(ka,yc,n),Sn(ka,yc,"esm2020"),Sn("fire-js","")}Tv("");function Gd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Iv=Gd,Qd=new Xi("auth","Firebase",Gd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new ml("@firebase/auth");function Rv(n,...e){ao.logLevel<=ue.WARN&&ao.warn(`Auth (${Yr}): ${n}`,...e)}function zs(n,...e){ao.logLevel<=ue.ERROR&&ao.error(`Auth (${Yr}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,...e){throw yl(n,...e)}function zt(n,...e){return yl(n,...e)}function Yd(n,e,t){const r={...Iv(),[e]:t};return new Xi("auth","Firebase",r).create(e,{appName:n.name})}function Pn(n){return Yd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Qd.create(n,...e)}function te(n,e,...t){if(!n)throw yl(e,...t)}function nn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zs(e),new Error(e)}function on(n,e){n||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(){return typeof self<"u"&&self.location?.href||""}function Av(){return Ic()==="http:"||Ic()==="https:"}function Ic(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Av()||ny()||"connection"in navigator)?navigator.onLine:!0}function Sv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=Z_()||ry()}get(){return bv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kv=new es(3e4,6e4);function or(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Bn(n,e,t,r,i={}){return Xd(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Zi({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:u,...s};return ty()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Qr(n.emulatorConfig.host)&&(h.credentials="include"),Jd.fetch()(await Zd(n,n.config.apiHost,t,l),h)})}async function Xd(n,e,t){n._canInitEmulator=!1;const r={...Pv,...e};try{const i=new Nv(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ns(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ns(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ns(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ns(n,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Yd(n,f,h);kt(n,f)}}catch(i){if(i instanceof ln)throw i;kt(n,"network-request-failed",{message:String(i)})}}async function Po(n,e,t,r,i={}){const s=await Bn(n,e,t,r,i);return"mfaPendingCredential"in s&&kt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function Zd(n,e,t,r){const i=`${e}${t}?${r}`,s=n,a=s.config.emulator?vl(n.config,i):`${n.config.apiScheme}://${i}`;return Cv.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function Dv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Nv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),kv.get())})}}function Ns(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=zt(n,e,r);return i.customData._tokenResponse=t,i}function Rc(n){return n!==void 0&&n.enterprise!==void 0}class Lv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Dv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ov(n,e){return Bn(n,"GET","/v2/recaptchaConfig",or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e){return Bn(n,"POST","/v1/accounts:delete",e)}async function lo(n,e){return Bn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mv(n,e=!1){const t=wt(n),r=await t.getIdToken(e),i=El(r);te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:r,authTime:Ci(ca(i.auth_time)),issuedAtTime:Ci(ca(i.iat)),expirationTime:Ci(ca(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function ca(n){return Number(n)*1e3}function El(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return zs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Md(t);return i?JSON.parse(i):(zs("Failed to decode base64 JWT payload"),null)}catch(i){return zs("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ac(n){const e=El(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ln&&xv(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uo(n){const e=n.auth,t=await n.getIdToken(),r=await $i(n,lo(e,{idToken:t}));te(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?ef(i.providerUserInfo):[],a=$v(n.providerData,s),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!a?.length,h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Oa(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Uv(n){const e=wt(n);await uo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $v(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ef(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n,e){const t=await Xd(n,{},async()=>{const r=Zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=await Zd(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Qr(n.emulatorConfig.host)&&(u.credentials="include"),Jd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jv(n,e){return Bn(n,"POST","/v2/accounts:revokeToken",or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ac(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Ac(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bv(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Cr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cr,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Pt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Fv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await $i(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mv(this,e)}reload(){return Uv(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await uo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await $i(this,Vv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:v,providerData:S,stsTokenManager:V}=t;te(p&&V,e,"internal-error");const k=Cr.fromJSON(this.name,V);te(typeof p=="string",e,"internal-error"),mn(r,e.name),mn(i,e.name),te(typeof g=="boolean",e,"internal-error"),te(typeof v=="boolean",e,"internal-error"),mn(s,e.name),mn(a,e.name),mn(l,e.name),mn(u,e.name),mn(h,e.name),mn(f,e.name);const L=new Pt({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:v,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:k,createdAt:h,lastLoginAt:f});return S&&Array.isArray(S)&&(L.providerData=S.map(O=>({...O}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,t,r=!1){const i=new Cr;i.updateFromServerResponse(t);const s=new Pt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uo(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ef(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!s?.length,l=new Cr;l.updateFromIdToken(r);const u=new Pt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Oa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;function rn(n){on(n instanceof Function,"Expected a class definition");let e=bc.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,bc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tf.type="NONE";const Sc=tf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e,t){return`firebase:${n}:${e}:${t}`}class kr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=qs(this.userKey,i.apiKey,s),this.fullPersistenceKey=qs("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await lo(this.auth,{idToken:e}).catch(()=>{});return t?Pt._fromGetAccountInfoResponse(this.auth,t,e):null}return Pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kr(rn(Sc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||rn(Sc);const a=qs(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await lo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Pt._fromGetAccountInfoResponse(e,g,f)}else p=Pt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new kr(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new kr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lf(e))return"Blackberry";if(uf(e))return"Webos";if(rf(e))return"Safari";if((e.includes("chrome/")||sf(e))&&!e.includes("edge/"))return"Chrome";if(af(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function nf(n=st()){return/firefox\//i.test(n)}function rf(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sf(n=st()){return/crios\//i.test(n)}function of(n=st()){return/iemobile/i.test(n)}function af(n=st()){return/android/i.test(n)}function lf(n=st()){return/blackberry/i.test(n)}function uf(n=st()){return/webos/i.test(n)}function wl(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Hv(n=st()){return wl(n)&&!!window.navigator?.standalone}function zv(){return iy()&&document.documentMode===10}function cf(n=st()){return wl(n)||af(n)||uf(n)||lf(n)||/windows phone/i.test(n)||of(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n,e=[]){let t;switch(n){case"Browser":t=Pc(st());break;case"Worker":t=`${Pc(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wv(n,e={}){return Bn(n,"GET","/v2/passwordPolicy",or(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=6;class Gv{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Kv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cc(this),this.idTokenSubscription=new Cc(this),this.beforeStateQueue=new qv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await kr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lo(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(St(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,a=r?._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&l?.user&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await uo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(St(this.app))return Promise.reject(Pn(this));const t=e?wt(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return St(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wv(this),t=new Gv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await jv(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await kr.create(this,[rn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(St(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Rv(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Jr(n){return wt(n)}class Cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=dy(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Yv(n){Co=n}function df(n){return Co.loadJS(n)}function Jv(){return Co.recaptchaEnterpriseScript}function Xv(){return Co.gapiScript}function Zv(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class eE{constructor(){this.enterprise=new tE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class tE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const nE="recaptcha-enterprise",ff="NO_RECAPTCHA";class rE{constructor(e){this.type=nE,this.auth=Jr(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Ov(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Lv(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Rc(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(ff)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new eE().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Rc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Jv();u.length!==0&&(u+=l),df(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function kc(n,e,t,r=!1,i=!1){const s=new rE(n);let a;if(i)a=ff;else try{a=await s.verify(t)}catch{a=await s.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Dc(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await kc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await kc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n,e){const t=_l(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(tr(s,e??{}))return i;kt(i,"already-initialized")}return t.initialize({options:e})}function sE(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(rn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function oE(n,e,t){const r=Jr(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=pf(e),{host:a,port:l}=aE(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(tr(h,r.config.emulator)&&tr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Qr(a)?($d(`${s}//${a}${u}`),Bd("Auth",!0)):lE()}function pf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function aE(n){const e=pf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Nc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Nc(a)}}}function Nc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function lE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,t){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function uE(n,e){return Bn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(n,e){return Po(n,"POST","/v1/accounts:signInWithPassword",or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hE(n,e){return Po(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}async function dE(n,e){return Po(n,"POST","/v1/accounts:signInWithEmailLink",or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends Tl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Bi(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Bi(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dc(e,t,"signInWithPassword",cE);case"emailLink":return hE(e,{email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dc(e,r,"signUpPassword",uE);case"emailLink":return dE(e,{idToken:t,email:this._email,oobCode:this._password});default:kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(n,e){return Po(n,"POST","/v1/accounts:signInWithIdp",or(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE="http://localhost";class rr extends Tl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const a=new rr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Dr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Dr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dr(e,t)}buildRequest(){const e={requestUri:fE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mE(n){const e=Ti(Ii(n)).link,t=e?Ti(Ii(e)).deep_link_id:null,r=Ti(Ii(n)).deep_link_id;return(r?Ti(Ii(r)).link:null)||r||t||e||n}class Il{constructor(e){const t=Ti(Ii(e)),r=t.apiKey??null,i=t.oobCode??null,s=pE(t.mode??null);te(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=mE(e);try{return new Il(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(e,t){return Bi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Il.parseLink(t);return te(r,"argument-error"),Bi._fromEmailAndCode(e,r.code,r.tenantId)}}Xr.PROVIDER_ID="password";Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ts{constructor(){super("facebook.com")}static credential(e){return rr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return En.credential(t,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends ts{constructor(){super("github.com")}static credential(e){return rr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ts{constructor(){super("twitter.com")}static credential(e,t){return rr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tn.credential(t,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Pt._fromIdTokenResponse(e,r,i),a=Lc(r);return new $r({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Lc(r);return new $r({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Lc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends ln{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,co.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new co(e,t,r,i)}}function gf(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?co._fromErrorAndOperation(n,s,e,r):s})}async function gE(n,e,t=!1){const r=await $i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $r._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(n,e,t=!1){const{auth:r}=n;if(St(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await $i(n,gf(r,i,e,n),t);te(s.idToken,r,"internal-error");const a=El(s.idToken);te(a,r,"internal-error");const{sub:l}=a;return te(n.uid===l,r,"user-mismatch"),$r._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(n,e,t=!1){if(St(n.app))return Promise.reject(Pn(n));const r="signIn",i=await gf(n,r,e),s=await $r._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function yE(n,e){return _f(Jr(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(n){const e=Jr(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function EE(n,e,t){return St(n.app)?Promise.reject(Pn(n)):yE(wt(n),Xr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vE(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(n,e){return wt(n).setPersistence(e)}function TE(n,e,t,r){return wt(n).onIdTokenChanged(e,t,r)}function IE(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}function yf(n,e,t,r){return wt(n).onAuthStateChanged(e,t,r)}function RE(n){return wt(n).signOut()}const ho="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ho,"1"),this.storage.removeItem(ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE=1e3,bE=10;class Ef extends vf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);zv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bE):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},AE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ef.type="LOCAL";const wf=Ef;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends vf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tf.type="SESSION";const If=Tf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ko(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),u=await SE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ko.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Rl("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function CE(n){qt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function kE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DE(){return navigator?.serviceWorker?.controller||null}function NE(){return Rf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="firebaseLocalStorageDb",LE=1,fo="firebaseLocalStorage",bf="fbase_key";class ns{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Do(n,e){return n.transaction([fo],e?"readwrite":"readonly").objectStore(fo)}function OE(){const n=indexedDB.deleteDatabase(Af);return new ns(n).toPromise()}function Va(){const n=indexedDB.open(Af,LE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fo,{keyPath:bf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fo)?e(r):(r.close(),await OE(),e(await Va()))})})}async function Oc(n,e,t){const r=Do(n,!0).put({[bf]:e,value:t});return new ns(r).toPromise()}async function VE(n,e){const t=Do(n,!1).get(e),r=await new ns(t).toPromise();return r===void 0?null:r.value}function Vc(n,e){const t=Do(n,!0).delete(e);return new ns(t).toPromise()}const ME=800,xE=3;class Sf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>xE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ko._getInstance(NE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await kE(),!this.activeServiceWorker)return;this.sender=new PE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await Oc(e,ho,"1"),await Vc(e,ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>VE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Do(i,!1).getAll();return new ns(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ME)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sf.type="LOCAL";const FE=Sf;new es(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(n,e){return e?rn(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Tl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $E(n){return _f(n.auth,new Al(n),n.bypassAuthState)}function BE(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),_E(t,new Al(n),n.bypassAuthState)}async function jE(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),gE(t,new Al(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $E;case"linkViaPopup":case"linkViaRedirect":return jE;case"reauthViaPopup":case"reauthViaRedirect":return BE;default:kt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new es(2e3,1e4);class Sr extends Pf{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=Rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HE.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="pendingRedirect",Ws=new Map;class qE extends Pf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Ws.get(this.auth._key());if(!e){try{const r=await WE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ws.set(this.auth._key(),e)}return this.bypassAuthState||Ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WE(n,e){const t=QE(e),r=GE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function KE(n,e){Ws.set(n._key(),e)}function GE(n){return rn(n._redirectPersistence)}function QE(n){return qs(zE,n.config.apiKey,n.name)}async function YE(n,e,t=!1){if(St(n.app))return Promise.reject(Pn(n));const r=Jr(n),i=UE(r,e),a=await new qE(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=600*1e3;class XE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Cf(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(zt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mc(e))}saveEventToCache(e){this.cachedEventUids.add(Mc(e)),this.lastProcessedEventTime=Date.now()}}function Mc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cf({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function ZE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(n,e={}){return Bn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nw=/^https?/;async function rw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await ew(n);for(const t of e)try{if(iw(t))return}catch{}kt(n,"unauthorized-domain")}function iw(n){const e=La(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!nw.test(t))return!1;if(tw.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=new es(3e4,6e4);function xc(){const n=qt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function ow(n){return new Promise((e,t)=>{function r(){xc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xc(),t(zt(n,"network-request-failed"))},timeout:sw.get()})}if(qt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(qt().gapi?.load)r();else{const i=Zv("iframefcb");return qt()[i]=()=>{gapi.load?r():t(zt(n,"network-request-failed"))},df(`${Xv()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function aw(n){return Ks=Ks||ow(n),Ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=new es(5e3,15e3),uw="__/auth/iframe",cw="emulator/auth/iframe",hw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fw(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vl(e,cw):`https://${n.config.authDomain}/${uw}`,r={apiKey:e.apiKey,appName:n.name,v:Yr},i=dw.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Zi(r).slice(1)}`}async function pw(n){const e=await aw(n),t=qt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:fw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hw,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=zt(n,"network-request-failed"),l=qt().setTimeout(()=>{s(a)},lw.get());function u(){qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gw=500,_w=600,yw="_blank",vw="http://localhost";class Fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ew(n,e,t,r=gw,i=_w){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...mw,width:r.toString(),height:i.toString(),top:s,left:a},h=st().toLowerCase();t&&(l=sf(h)?yw:t),nf(h)&&(e=e||vw,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[v,S])=>`${g}${v}=${S},`,"");if(Hv(h)&&l!=="_self")return ww(e||"",l),new Fc(null);const p=window.open(e||"",l,f);te(p,n,"popup-blocked");try{p.focus()}catch{}return new Fc(p)}function ww(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="__/auth/handler",Iw="emulator/auth/handler",Rw=encodeURIComponent("fac");async function Uc(n,e,t,r,i,s){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Yr,eventId:i};if(e instanceof mf){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",hy(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof ts){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await n._getAppCheckToken(),h=u?`#${Rw}=${encodeURIComponent(u)}`:"";return`${Aw(n)}?${Zi(l).slice(1)}${h}`}function Aw({config:n}){return n.emulator?vl(n,Iw):`https://${n.authDomain}/${Tw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="webStorageSupport";class bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=If,this._completeRedirectFn=YE,this._overrideRedirectResult=KE}async _openPopup(e,t,r,i){on(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Uc(e,t,r,La(),i);return Ew(e,s,Rl())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Uc(e,t,r,La(),i);return CE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(on(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await pw(e),r=new XE(e);return t.register("authEvent",i=>(te(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ha,{type:ha},i=>{const s=i?.[0]?.[ha];s!==void 0&&t(!!s),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||rf()||wl()}}const Sw=bw;var $c="@firebase/auth",Bc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(n){Ur(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hf(n)},h=new Qv(r,i,s,u);return sE(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new nr("auth-internal",e=>{const t=Jr(e.getProvider("auth").getImmediate());return(r=>new Pw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn($c,Bc,Cw(n)),Sn($c,Bc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=300,Nw=Ud("authIdTokenMaxAge")||Dw;let jc=null;const Lw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Nw)return;const i=t?.token;jc!==i&&(jc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ow(n=qd()){const e=_l(n,"auth");if(e.isInitialized())return e.getImmediate();const t=iE(n,{popupRedirectResolver:Sw,persistence:[FE,wf,If]}),r=Ud("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Lw(s.toString());IE(t,a,()=>a(t.currentUser)),TE(t,l=>a(l))}}const i=xd("auth");return i&&oE(t,`http://${i}`),t}function Vw(){return document.getElementsByTagName("head")?.[0]??document}Yv({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",Vw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,kf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function y(){}y.prototype=_.prototype,I.D=_.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,R,A){for(var E=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)E[fe-2]=arguments[fe];return _.prototype[R].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,_,y){y||(y=0);var T=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)T[R]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(R=0;16>R;++R)T[R]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=I.g[0],y=I.g[1],R=I.g[2];var A=I.g[3],E=_+(A^y&(R^A))+T[0]+3614090360&4294967295;_=y+(E<<7&4294967295|E>>>25),E=A+(R^_&(y^R))+T[1]+3905402710&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(y^A&(_^y))+T[2]+606105819&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(_^R&(A^_))+T[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(A^y&(R^A))+T[4]+4118548399&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(R^_&(y^R))+T[5]+1200080426&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(y^A&(_^y))+T[6]+2821735955&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(_^R&(A^_))+T[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(A^y&(R^A))+T[8]+1770035416&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(R^_&(y^R))+T[9]+2336552879&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(y^A&(_^y))+T[10]+4294925233&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(_^R&(A^_))+T[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(A^y&(R^A))+T[12]+1804603682&4294967295,_=y+(E<<7&4294967295|E>>>25),E=A+(R^_&(y^R))+T[13]+4254626195&4294967295,A=_+(E<<12&4294967295|E>>>20),E=R+(y^A&(_^y))+T[14]+2792965006&4294967295,R=A+(E<<17&4294967295|E>>>15),E=y+(_^R&(A^_))+T[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=_+(R^A&(y^R))+T[1]+4129170786&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(_^y))+T[6]+3225465664&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(A^_))+T[11]+643717713&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(R^A))+T[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(R^A&(y^R))+T[5]+3593408605&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(_^y))+T[10]+38016083&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(A^_))+T[15]+3634488961&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(R^A))+T[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(R^A&(y^R))+T[9]+568446438&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(_^y))+T[14]+3275163606&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(A^_))+T[3]+4107603335&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(R^A))+T[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(R^A&(y^R))+T[13]+2850285829&4294967295,_=y+(E<<5&4294967295|E>>>27),E=A+(y^R&(_^y))+T[2]+4243563512&4294967295,A=_+(E<<9&4294967295|E>>>23),E=R+(_^y&(A^_))+T[7]+1735328473&4294967295,R=A+(E<<14&4294967295|E>>>18),E=y+(A^_&(R^A))+T[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=_+(y^R^A)+T[5]+4294588738&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^R)+T[8]+2272392833&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^y)+T[11]+1839030562&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^_)+T[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(y^R^A)+T[1]+2763975236&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^R)+T[4]+1272893353&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^y)+T[7]+4139469664&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^_)+T[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(y^R^A)+T[13]+681279174&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^R)+T[0]+3936430074&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^y)+T[3]+3572445317&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^_)+T[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(y^R^A)+T[9]+3654602809&4294967295,_=y+(E<<4&4294967295|E>>>28),E=A+(_^y^R)+T[12]+3873151461&4294967295,A=_+(E<<11&4294967295|E>>>21),E=R+(A^_^y)+T[15]+530742520&4294967295,R=A+(E<<16&4294967295|E>>>16),E=y+(R^A^_)+T[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=_+(R^(y|~A))+T[0]+4096336452&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~R))+T[7]+1126891415&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~y))+T[14]+2878612391&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~_))+T[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=_+(R^(y|~A))+T[12]+1700485571&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~R))+T[3]+2399980690&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~y))+T[10]+4293915773&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~_))+T[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=_+(R^(y|~A))+T[8]+1873313359&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~R))+T[15]+4264355552&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~y))+T[6]+2734768916&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~_))+T[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=_+(R^(y|~A))+T[4]+4149444226&4294967295,_=y+(E<<6&4294967295|E>>>26),E=A+(y^(_|~R))+T[11]+3174756917&4294967295,A=_+(E<<10&4294967295|E>>>22),E=R+(_^(A|~y))+T[2]+718787259&4294967295,R=A+(E<<15&4294967295|E>>>17),E=y+(A^(R|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+R&4294967295,I.g[3]=I.g[3]+A&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var y=_-this.blockSize,T=this.B,R=this.h,A=0;A<_;){if(R==0)for(;A<=y;)i(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(T[R++]=I.charCodeAt(A++),R==this.blockSize){i(this,T),R=0;break}}else for(;A<_;)if(T[R++]=I[A++],R==this.blockSize){i(this,T),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var y=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=y&255,y/=256;for(this.u(I),I=Array(16),_=y=0;4>_;++_)for(var T=0;32>T;T+=8)I[y++]=this.g[_]>>>T&255;return I};function s(I,_){var y=l;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=_(I)}function a(I,_){this.h=_;for(var y=[],T=!0,R=I.length-1;0<=R;R--){var A=I[R]|0;T&&A==_||(y[R]=A,T=!1)}this.g=y}var l={};function u(I){return-128<=I&&128>I?s(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return k(h(-I));for(var _=[],y=1,T=0;I>=y;T++)_[T]=I/y|0,y*=4294967296;return new a(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return k(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(_,8)),T=p,R=0;R<I.length;R+=8){var A=Math.min(8,I.length-R),E=parseInt(I.substring(R,R+A),_);8>A?(A=h(Math.pow(_,A)),T=T.j(A).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var p=u(0),g=u(1),v=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-k(this).m();for(var I=0,_=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(V(this))return"-"+k(this).toString(I);for(var _=h(Math.pow(I,6)),y=this,T="";;){var R=Z(y,_).g;y=L(y,R.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=R,S(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function V(I){return I.h==-1}n.l=function(I){return I=L(this,I),V(I)?-1:S(I)?0:1};function k(I){for(var _=I.g.length,y=[],T=0;T<_;T++)y[T]=~I.g[T];return new a(y,~I.h).add(g)}n.abs=function(){return V(this)?k(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0,R=0;R<=_;R++){var A=T+(this.i(R)&65535)+(I.i(R)&65535),E=(A>>>16)+(this.i(R)>>>16)+(I.i(R)>>>16);T=E>>>16,A&=65535,E&=65535,y[R]=E<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function L(I,_){return I.add(k(_))}n.j=function(I){if(S(this)||S(I))return p;if(V(this))return V(I)?k(this).j(k(I)):k(k(this).j(I));if(V(I))return k(this.j(k(I)));if(0>this.l(v)&&0>I.l(v))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,y=[],T=0;T<2*_;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var R=0;R<I.g.length;R++){var A=this.i(T)>>>16,E=this.i(T)&65535,fe=I.i(R)>>>16,Ke=I.i(R)&65535;y[2*T+2*R]+=E*Ke,O(y,2*T+2*R),y[2*T+2*R+1]+=A*Ke,O(y,2*T+2*R+1),y[2*T+2*R+1]+=E*fe,O(y,2*T+2*R+1),y[2*T+2*R+2]+=A*fe,O(y,2*T+2*R+2)}for(T=0;T<_;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=_;T<2*_;T++)y[T]=0;return new a(y,0)};function O(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function F(I,_){this.g=I,this.h=_}function Z(I,_){if(S(_))throw Error("division by zero");if(S(I))return new F(p,p);if(V(I))return _=Z(k(I),_),new F(k(_.g),k(_.h));if(V(_))return _=Z(I,k(_)),new F(k(_.g),_.h);if(30<I.g.length){if(V(I)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=g,T=_;0>=T.l(I);)y=Y(y),T=Y(T);var R=C(y,1),A=C(T,1);for(T=C(T,2),y=C(y,2);!S(T);){var E=A.add(T);0>=E.l(I)&&(R=R.add(y),A=E),T=C(T,1),y=C(y,1)}return _=L(I,R.j(_)),new F(R,_)}for(R=p;0<=I.l(_);){for(y=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(y),E=A.j(_);V(E)||0<E.l(I);)y-=T,A=h(y),E=A.j(_);S(A)&&(A=g),R=R.add(A),I=L(I,E)}return new F(R,I)}n.A=function(I){return Z(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],T=0;T<_;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function Y(I){for(var _=I.g.length+1,y=[],T=0;T<_;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function C(I,_){var y=_>>5;_%=32;for(var T=I.g.length-y,R=[],A=0;A<T;A++)R[A]=0<_?I.i(A+y)>>>_|I.i(A+y+1)<<32-_:I.i(A+y);return new a(R,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Cn=a}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});var Ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Df,Ri,Nf,Gs,Ma,Lf,Of,Vf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ls=="object"&&Ls];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],c=c(m),c!=m&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,m=!1,P={next:function(){if(!m&&d<o.length){var N=d++;return{value:c(N,o[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function p(o,c,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function g(o,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function v(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,P,N){for(var $=Array(arguments.length-2),we=2;we<arguments.length;we++)$[we-2]=arguments[we];return c.prototype[P].apply(m,$)}}function V(o){const c=o.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=o[m];return d}return[]}function k(o,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const P=o.length||0,N=m.length||0;o.length=P+N;for(let $=0;$<N;$++)o[P+$]=m[$]}else o.push(m)}}class L{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function Z(o){return Z[" "](o),o}Z[" "]=function(){};var Y=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function C(o,c,d){for(const m in o)c.call(d,o[m],m,o)}function I(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function _(o){const c={};for(const d in o)c[d]=o[d];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let N=0;N<y.length;N++)d=y[N],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function E(){var o=ot;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class fe{constructor(){this.h=this.g=null}add(c,d){const m=Ke.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ke=new L(()=>new ge,o=>o.reset());class ge{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,Fe=!1,ot=new fe,Ye=()=>{const o=l.Promise.resolve(void 0);Ge=()=>{o.then(ut)}};var ut=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){A(d)}var c=Ke;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Fe=!1};function ze(){this.s=this.s,this.C=this.C}ze.prototype.s=!1,ze.prototype.ma=function(){this.s||(this.s=!0,this.N())},ze.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Qt=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o})();function Lt(o,c){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(Y){e:{try{Z(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:jn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Lt.aa.h.call(this)}}S(Lt,Ee);var jn={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var lr="closure_listenable_"+(1e6*Math.random()|0),zo=0;function qo(o,c,d,m,P){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++zo,this.da=this.fa=!1}function Le(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Tt(o){this.src=o,this.g={},this.h=0}Tt.prototype.add=function(o,c,d,m,P){var N=o.toString();o=this.g[N],o||(o=this.g[N]=[],this.h++);var $=ni(o,c,m,P);return-1<$?(c=o[$],d||(c.fa=!1)):(c=new qo(c,this.src,N,!!m,P),c.fa=d,o.push(c)),c};function ur(o,c){var d=c.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(m,P,1),N&&(Le(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function ni(o,c,d,m){for(var P=0;P<o.length;++P){var N=o[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var It="closure_lm_"+(1e6*Math.random()|0),ri={};function ls(o,c,d,m,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)ls(o,c[N],d,m,P);return null}return d=hr(d),o&&o[lr]?o.K(c,d,h(m)?!!m.capture:!1,P):us(o,c,d,!1,m,P)}function us(o,c,d,m,P,N){if(!c)throw Error("Invalid event type");var $=h(P)?!!P.capture:!!P,we=Jt(o);if(we||(o[It]=we=new Tt(o)),d=we.add(c,d,m,$,N),d.proxy)return d;if(m=Wo(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Qt||(P=$),P===void 0&&(P=!1),o.addEventListener(c.toString(),m,P);else if(o.attachEvent)o.attachEvent(hs(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Wo(){function o(d){return c.call(o.src,o.listener,d)}const c=Yt;return o}function cs(o,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)cs(o,c[N],d,m,P);else m=h(m)?!!m.capture:!!m,d=hr(d),o&&o[lr]?(o=o.i,c=String(c).toString(),c in o.g&&(N=o.g[c],d=ni(N,d,m,P),-1<d&&(Le(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete o.g[c],o.h--)))):o&&(o=Jt(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ni(c,d,m,P)),(d=-1<o?c[o]:null)&&ii(d))}function ii(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[lr])ur(c.i,o);else{var d=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(d,m,o.capture):c.detachEvent?c.detachEvent(hs(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Jt(c))?(ur(d,o),d.h==0&&(d.src=null,c[It]=null)):Le(o)}}}function hs(o){return o in ri?ri[o]:ri[o]="on"+o}function Yt(o,c){if(o.da)o=!0;else{c=new Lt(c,this);var d=o.listener,m=o.ha||o.src;o.fa&&ii(o),o=d.call(m,c)}return o}function Jt(o){return o=o[It],o instanceof Tt?o:null}var cr="__closure_events_fn_"+(1e9*Math.random()>>>0);function hr(o){return typeof o=="function"?o:(o[cr]||(o[cr]=function(c){return o.handleEvent(c)}),o[cr])}function Ie(){ze.call(this),this.i=new Tt(this),this.M=this,this.F=null}S(Ie,ze),Ie.prototype[lr]=!0,Ie.prototype.removeEventListener=function(o,c,d,m){cs(this,o,c,d,m)};function Re(o,c){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new Ee(c,o);else if(c instanceof Ee)c.target=c.target||o;else{var P=c;c=new Ee(m,o),T(c,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var $=c.g=d[N];P=Hn($,m,!0,c)&&P}if($=c.g=o,P=Hn($,m,!0,c)&&P,P=Hn($,m,!1,c)&&P,d)for(N=0;N<d.length;N++)$=c.g=d[N],P=Hn($,m,!1,c)&&P}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],m=0;m<d.length;m++)Le(d[m]);delete o.g[c],o.h--}}this.F=null},Ie.prototype.K=function(o,c,d,m){return this.i.add(String(o),c,!1,d,m)},Ie.prototype.L=function(o,c,d,m){return this.i.add(String(o),c,!0,d,m)};function Hn(o,c,d,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var $=c[N];if($&&!$.da&&$.capture==d){var we=$.listener,Je=$.ha||$.src;$.fa&&ur(o.i,$),P=we.call(Je,m)!==!1&&P}}return P&&!m.defaultPrevented}function dr(o,c,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function ds(o){o.g=dr(()=>{o.g=null,o.i&&(o.i=!1,ds(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Ot extends ze{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ds(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function un(o){ze.call(this),this.h=o,this.g={}}S(un,ze);var si=[];function oi(o){C(o.g,function(c,d){this.g.hasOwnProperty(d)&&ii(c)},o),o.g={}}un.prototype.N=function(){un.aa.N.call(this),oi(this)},un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ai=l.JSON.stringify,fs=l.JSON.parse,fr=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function pr(){}pr.prototype.h=null;function mr(o){return o.h||(o.h=o.i())}function ps(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function li(){Ee.call(this,"d")}S(li,Ee);function gr(){Ee.call(this,"c")}S(gr,Ee);var gt={},zn=null;function _r(){return zn=zn||new Ie}gt.La="serverreachability";function ms(o){Ee.call(this,gt.La,o)}S(ms,Ee);function w(o){const c=_r();Re(c,new ms(c))}gt.STAT_EVENT="statevent";function b(o,c){Ee.call(this,gt.STAT_EVENT,o),this.stat=c}S(b,Ee);function D(o){const c=_r();Re(c,new b(c,o))}gt.Ma="timingevent";function x(o,c){Ee.call(this,gt.Ma,o),this.size=c}S(x,Ee);function U(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function H(){this.g=!0}H.prototype.xa=function(){this.g=!1};function K(o,c,d,m,P,N){o.info(function(){if(o.g)if(N)for(var $="",we=N.split("&"),Je=0;Je<we.length;Je++){var me=we[Je].split("=");if(1<me.length){var et=me[0];me=me[1];var tt=et.split("_");$=2<=tt.length&&tt[1]=="type"?$+(et+"="+me+"&"):$+(et+"=redacted&")}}else $=null;else $=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+$})}function z(o,c,d,m,P,N,$){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+$})}function q(o,c,d,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+G(o,d)+(m?" "+m:"")})}function ee(o,c){o.info(function(){return"TIMEOUT: "+c})}H.prototype.info=function(){};function G(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return ai(d)}catch{return c}}var W={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},le={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ye;function Pe(){}S(Pe,pr),Pe.prototype.g=function(){return new XMLHttpRequest},Pe.prototype.i=function(){return{}},ye=new Pe;function be(o,c,d,m){this.j=o,this.i=c,this.l=d,this.R=m||1,this.U=new un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Te}function Te(){this.i=null,this.g="",this.h=!1}var ve={},Rt={};function Xt(o,c,d){o.L=1,o.v=ys(Zt(c)),o.m=d,o.P=!0,At(o,null)}function At(o,c){o.F=Date.now(),Vt(o),o.A=Zt(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),ru(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Te,o.g=wu(o.j,d?c:null,!o.m),0<o.O&&(o.M=new Ot(g(o.Y,o,o.g),o.O)),c=o.U,d=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(si[0]=P.toString()),P=si);for(var N=0;N<P.length;N++){var $=ls(d,P[N],m||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),w(),K(o.i,o.u,o.A,o.l,o.R,o.m)}be.prototype.ca=function(o){o=o.target;const c=this.M;c&&en(o)==3?c.j():this.Y(o)},be.prototype.Y=function(o){try{if(o==this.g)e:{const tt=en(this.g);var c=this.g.Ba();const wr=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||cu(this.g)))){this.J||tt!=4||c==7||(c==8||0>=wr?w(3):w(2)),hn(this);var d=this.g.Z();this.X=d;t:if(dt(this)){var m=cu(this.g);o="";var P=m.length,N=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),xt(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(N&&c==P-1)});m.length=0,this.h.g+=o,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=d==200,z(this.i,this.u,this.A,this.l,this.R,tt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var we,Je=this.g;if((we=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(we)){var me=we;break t}}me=null}if(d=me)q(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ue(this,d);else{this.o=!1,this.s=3,D(12),oe(this),xt(this);break e}}if(this.P){d=!0;let bt;for(;!this.J&&this.C<$.length;)if(bt=ui(this,$),bt==Rt){tt==4&&(this.s=4,D(14),d=!1),q(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==ve){this.s=4,D(15),q(this.i,this.l,$,"[Invalid Chunk]"),d=!1;break}else q(this.i,this.l,bt,null),Ue(this,bt);if(dt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||$.length!=0||this.h.h||(this.s=1,D(16),d=!1),this.o=this.o&&d,!d)q(this.i,this.l,$,"[Invalid Chunked Response]"),oe(this),xt(this);else if(0<$.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Yo(et),et.M=!0,D(11))}}else q(this.i,this.l,$,null),Ue(this,$);tt==4&&oe(this),this.o&&!this.J&&(tt==4?_u(this.j,this):(this.o=!1,Vt(this)))}else Zp(this.g),d==400&&0<$.indexOf("Unknown SID")?(this.s=3,D(12)):(this.s=0,D(13)),oe(this),xt(this)}}}catch{}finally{}};function dt(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ui(o,c){var d=o.C,m=c.indexOf(`
`,d);return m==-1?Rt:(d=Number(c.substring(d,m)),isNaN(d)?ve:(m+=1,m+d>c.length?Rt:(c=c.slice(m,m+d),o.C=m+d,c)))}be.prototype.cancel=function(){this.J=!0,oe(this)};function Vt(o){o.S=Date.now()+o.I,Mt(o,o.I)}function Mt(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=U(g(o.ba,o),c)}function hn(o){o.B&&(l.clearTimeout(o.B),o.B=null)}be.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ee(this.i,this.A),this.L!=2&&(w(),D(17)),oe(this),this.s=2,xt(this)):Mt(this,this.S-o)};function xt(o){o.j.G==0||o.J||_u(o.j,o)}function oe(o){hn(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,oi(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ue(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||yr(d.h,o))){if(!o.K&&yr(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Rs(d),Ts(d);else break e;Qo(d),D(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=U(g(d.Za,d),6e3));if(1>=qn(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Kn(d,11)}else if((o.K||d.g==o)&&Rs(d),!O(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let me=P[c];if(d.T=me[0],me=me[1],d.G==2)if(me[0]=="c"){d.K=me[1],d.ia=me[2];const et=me[3];et!=null&&(d.la=et,d.j.info("VER="+d.la));const tt=me[4];tt!=null&&(d.Aa=tt,d.j.info("SVER="+d.Aa));const wr=me[5];wr!=null&&typeof wr=="number"&&0<wr&&(m=1.5*wr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const bt=o.g;if(bt){const bs=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var N=m.h;N.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ci(N,N.h),N.h=null))}if(m.D){const Jo=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jo&&(m.ya=Jo,Ae(m.I,m.D,Jo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var $=o;if(m.qa=Eu(m,m.J?m.ia:null,m.W),$.K){Ql(m.h,$);var we=$,Je=m.L;Je&&(we.I=Je),we.B&&(hn(we),Vt(we)),m.g=$}else mu(m);0<d.i.length&&Is(d)}else me[0]!="stop"&&me[0]!="close"||Kn(d,7);else d.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Kn(d,7):Go(d):me[0]!="noop"&&d.l&&d.l.ta(me),d.v=0)}}w(4)}catch{}}var dn=class{constructor(o,c){this.g=o,this.map=c}};function Ft(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function De(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function qn(o){return o.h?1:o.g?o.g.size:0}function yr(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ci(o,c){o.g?o.g.add(c):o.h=c}function Ql(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ft.prototype.cancel=function(){if(this.i=Yl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return V(o.i)}function Fp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,m=0;m<d;m++)c.push(o[m]);return c}c=[],d=0;for(m in o)c[d++]=o[m];return c}function Up(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const m in o)c[d++]=m;return c}}}function Jl(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=Up(o),m=Fp(o),P=m.length,N=0;N<P;N++)c.call(void 0,m[N],d&&d[N],o)}var Xl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $p(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),P=null;if(0<=m){var N=o[d].substring(0,m);P=o[d].substring(m+1)}else N=o[d];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Wn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Wn){this.h=o.h,gs(this,o.j),this.o=o.o,this.g=o.g,_s(this,o.s),this.l=o.l;var c=o.i,d=new fi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Zl(this,d),this.m=o.m}else o&&(c=String(o).match(Xl))?(this.h=!1,gs(this,c[1]||"",!0),this.o=hi(c[2]||""),this.g=hi(c[3]||"",!0),_s(this,c[4]),this.l=hi(c[5]||"",!0),Zl(this,c[6]||"",!0),this.m=hi(c[7]||"")):(this.h=!1,this.i=new fi(null,this.h))}Wn.prototype.toString=function(){var o=[],c=this.j;c&&o.push(di(c,eu,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(di(c,eu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(di(d,d.charAt(0)=="/"?Hp:jp,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",di(d,qp)),o.join("")};function Zt(o){return new Wn(o)}function gs(o,c,d){o.j=d?hi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function _s(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Zl(o,c,d){c instanceof fi?(o.i=c,Wp(o.i,o.h)):(d||(c=di(c,zp)),o.i=new fi(c,o.h))}function Ae(o,c,d){o.i.set(c,d)}function ys(o){return Ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function hi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function di(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,Bp),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Bp(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var eu=/[#\/\?@]/g,jp=/[#\?:]/g,Hp=/[#\?]/g,zp=/[#\?@]/g,qp=/#/g;function fi(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function fn(o){o.g||(o.g=new Map,o.h=0,o.i&&$p(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}n=fi.prototype,n.add=function(o,c){fn(this),this.i=null,o=vr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function tu(o,c){fn(o),c=vr(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function nu(o,c){return fn(o),c=vr(o,c),o.g.has(c)}n.forEach=function(o,c){fn(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(c,P,m,this)},this)},this)},n.na=function(){fn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const P=o[m];for(let N=0;N<P.length;N++)d.push(c[m])}return d},n.V=function(o){fn(this);let c=[];if(typeof o=="string")nu(this,o)&&(c=c.concat(this.g.get(vr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},n.set=function(o,c){return fn(this),this.i=null,o=vr(this,o),nu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function ru(o,c,d){tu(o,c),0<d.length&&(o.i=null,o.g.set(vr(o,c),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const N=encodeURIComponent(String(m)),$=this.V(m);for(m=0;m<$.length;m++){var P=N;$[m]!==""&&(P+="="+encodeURIComponent(String($[m]))),o.push(P)}}return this.i=o.join("&")};function vr(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Wp(o,c){c&&!o.j&&(fn(o),o.i=null,o.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(tu(this,m),ru(this,P,d))},o)),o.j=c}function Kp(o,c){const d=new H;if(l.Image){const m=new Image;m.onload=v(pn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=v(pn,d,"TestLoadImage: error",!1,c,m),m.onabort=v(pn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=v(pn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function Gp(o,c){const d=new H,m=new AbortController,P=setTimeout(()=>{m.abort(),pn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?pn(d,"TestPingServer: ok",!0,c):pn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),pn(d,"TestPingServer: error",!1,c)})}function pn(o,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function Qp(){this.g=new fr}function Yp(o,c,d){const m=d||"";try{Jl(o,function(P,N){let $=P;h(P)&&($=ai(P)),c.push(m+N+"="+encodeURIComponent($))})}catch(P){throw c.push(m+"type="+encodeURIComponent("_badmap")),P}}function vs(o){this.l=o.Ub||null,this.j=o.eb||!1}S(vs,pr),vs.prototype.g=function(){return new Es(this.l,this.j)},vs.prototype.i=(function(o){return function(){return o}})({});function Es(o,c){Ie.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Es,Ie),n=Es.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,mi(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,mi(this)),this.g&&(this.readyState=3,mi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;iu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function iu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?pi(this):mi(this),this.readyState==3&&iu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,pi(this))},n.Qa=function(o){this.g&&(this.response=o,pi(this))},n.ga=function(){this.g&&pi(this)};function pi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,mi(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function mi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function su(o){let c="";return C(o,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Ko(o,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=su(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ae(o,c,d))}function Ne(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Ne,Ie);var Jp=/^https?$/i,Xp=["POST","PUT"];n=Ne.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ye.g(),this.v=this.o?mr(this.o):mr(ye),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(N){ou(this,N);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Xp,c,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,$]of d)this.g.setRequestHeader(N,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uu(this),this.u=!0,this.g.send(o),this.u=!1}catch(N){ou(this,N)}};function ou(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,au(o),ws(o)}function au(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Re(this,"complete"),Re(this,"abort"),ws(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ws(this,!0)),Ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?lu(this):this.bb())},n.bb=function(){lu(this)};function lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||en(o)!=4||o.Z()!=2)){if(o.u&&en(o)==4)dr(o.Ea,0,o);else if(Re(o,"readystatechange"),en(o)==4){o.h=!1;try{const $=o.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=$===0){var P=String(o.D).match(Xl)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!Jp.test(P?P.toLowerCase():"")}d=m}if(d)Re(o,"complete"),Re(o,"success");else{o.m=6;try{var N=2<en(o)?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.Z()+"]",au(o)}}finally{ws(o)}}}}function ws(o,c){if(o.g){uu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Re(o,"ready");try{d.onreadystatechange=m}catch{}}}function uu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function en(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),fs(c)}};function cu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Zp(o){const c={};o=(o.g&&2<=en(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(O(o[m]))continue;var d=R(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}I(c,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function hu(o){this.Aa=0,this.i=[],this.j=new H,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=gi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=gi("baseRetryDelayMs",5e3,o),this.cb=gi("retryDelaySeedMs",1e4,o),this.Wa=gi("forwardChannelMaxRetries",2,o),this.wa=gi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ft(o&&o.concurrentRequestLimit),this.Da=new Qp,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hu.prototype,n.la=8,n.G=1,n.connect=function(o,c,d,m){D(0),this.W=o,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Eu(this,null,this.W),Is(this)};function Go(o){if(du(o),o.G==3){var c=o.U++,d=Zt(o.I);if(Ae(d,"SID",o.K),Ae(d,"RID",c),Ae(d,"TYPE","terminate"),_i(o,d),c=new be(o,o.j,c),c.L=2,c.v=ys(Zt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=wu(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vt(c)}vu(o)}function Ts(o){o.g&&(Yo(o),o.g.cancel(),o.g=null)}function du(o){Ts(o),o.u&&(l.clearTimeout(o.u),o.u=null),Rs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Is(o){if(!De(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ge||Ye(),Fe||(Ge(),Fe=!0),ot.add(c,o),o.B=0}}function em(o,c){return qn(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=U(g(o.Ga,o,c),yu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new be(this,this.j,o);let N=this.o;if(this.S&&(N?(N=_(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=pu(this,P,c),d=Zt(this.I),Ae(d,"RID",o),Ae(d,"CVER",22),this.D&&Ae(d,"X-HTTP-Session-Id",this.D),_i(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(su(N)))+"&"+c:this.m&&Ko(d,this.m,N)),ci(this.h,P),this.Ua&&Ae(d,"TYPE","init"),this.P?(Ae(d,"$req",c),Ae(d,"SID","null"),P.T=!0,Xt(P,d,null)):Xt(P,d,c),this.G=2}}else this.G==3&&(o?fu(this,o):this.i.length==0||De(this.h)||fu(this))};function fu(o,c){var d;c?d=c.l:d=o.U++;const m=Zt(o.I);Ae(m,"SID",o.K),Ae(m,"RID",d),Ae(m,"AID",o.T),_i(o,m),o.m&&o.o&&Ko(m,o.m,o.o),d=new be(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=pu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ci(o.h,d),Xt(d,m,c)}function _i(o,c){o.H&&C(o.H,function(d,m){Ae(c,m,d)}),o.l&&Jl({},function(d,m){Ae(c,m,d)})}function pu(o,c,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let N=-1;for(;;){const $=["count="+d];N==-1?0<d?(N=P[0].g,$.push("ofs="+N)):N=0:$.push("ofs="+N);let we=!0;for(let Je=0;Je<d;Je++){let me=P[Je].g;const et=P[Je].map;if(me-=N,0>me)N=Math.max(0,P[Je].g-100),we=!1;else try{Yp(et,$,"req"+me+"_")}catch{m&&m(et)}}if(we){m=$.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,m}function mu(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ge||Ye(),Fe||(Ge(),Fe=!0),ot.add(c,o),o.v=0}}function Qo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=U(g(o.Fa,o),yu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,gu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=U(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,D(10),Ts(this),gu(this))};function Yo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function gu(o){o.g=new be(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Zt(o.qa);Ae(c,"RID","rpc"),Ae(c,"SID",o.K),Ae(c,"AID",o.T),Ae(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ae(c,"TO",o.ja),Ae(c,"TYPE","xmlhttp"),_i(o,c),o.m&&o.o&&Ko(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ys(Zt(c)),d.m=null,d.P=!0,At(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Ts(this),Qo(this),D(19))};function Rs(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function _u(o,c){var d=null;if(o.g==c){Rs(o),Yo(o),o.g=null;var m=2}else if(yr(o.h,c))d=c.D,Ql(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;m=_r(),Re(m,new x(m,d)),Is(o)}else mu(o);else if(P=c.s,P==3||P==0&&0<c.X||!(m==1&&em(o,c)||m==2&&Qo(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),P){case 1:Kn(o,5);break;case 4:Kn(o,10);break;case 3:Kn(o,6);break;default:Kn(o,2)}}}function yu(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function Kn(o,c){if(o.j.info("Error code "+c),c==2){var d=g(o.fb,o),m=o.Xa;const P=!m;m=new Wn(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||gs(m,"https"),ys(m),P?Kp(m.toString(),d):Gp(m.toString(),d)}else D(2);o.G=0,o.l&&o.l.sa(c),vu(o),du(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),D(2)):(this.j.info("Failed to ping google.com"),D(1))};function vu(o){if(o.G=0,o.ka=[],o.l){const c=Yl(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Eu(o,c,d){var m=d instanceof Wn?Zt(d):new Wn(d);if(m.g!="")c&&(m.g=c+"."+m.g),_s(m,m.s);else{var P=l.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new Wn(null);m&&gs(N,m),c&&(N.g=c),P&&_s(N,P),d&&(N.l=d),m=N}return d=o.D,c=o.ya,d&&c&&Ae(m,d,c),Ae(m,"VER",o.la),_i(o,m),m}function wu(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new Ne(new vs({eb:d})):new Ne(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tu(){}n=Tu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function As(){}As.prototype.g=function(o,c){return new ft(o,c)};function ft(o,c){Ie.call(this),this.g=new hu(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!O(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!O(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Er(this)}S(ft,Ie),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Go(this.g)},ft.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ai(o),o=d);c.i.push(new dn(c.Ya++,o)),c.G==3&&Is(c)},ft.prototype.N=function(){this.g.l=null,delete this.j,Go(this.g),delete this.g,ft.aa.N.call(this)};function Iu(o){li.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S(Iu,li);function Ru(){gr.call(this),this.status=1}S(Ru,gr);function Er(o){this.g=o}S(Er,Tu),Er.prototype.ua=function(){Re(this.g,"a")},Er.prototype.ta=function(o){Re(this.g,new Iu(o))},Er.prototype.sa=function(o){Re(this.g,new Ru)},Er.prototype.ra=function(){Re(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,Vf=function(){return new As},Of=function(){return _r()},Lf=gt,Ma={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},W.NO_ERROR=0,W.TIMEOUT=8,W.HTTP_ERROR=6,Gs=W,le.COMPLETE="complete",Nf=le,ps.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,Ri=ps,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Df=Ne}).apply(typeof Ls<"u"?Ls:typeof self<"u"?self:typeof window<"u"?window:{});const zc="@firebase/firestore",qc="4.9.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr="12.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new ml("@firebase/firestore");function Ir(){return ir.logLevel}function j(n,...e){if(ir.logLevel<=ue.DEBUG){const t=e.map(bl);ir.debug(`Firestore (${Zr}): ${n}`,...t)}}function an(n,...e){if(ir.logLevel<=ue.ERROR){const t=e.map(bl);ir.error(`Firestore (${Zr}): ${n}`,...t)}}function Br(n,...e){if(ir.logLevel<=ue.WARN){const t=e.map(bl);ir.warn(`Firestore (${Zr}): ${n}`,...t)}}function bl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Mf(n,r,t)}function Mf(n,e,t){let r=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw an(r),new Error(r)}function ke(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Mf(e,i,r)}function de(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends ln{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rt.UNAUTHENTICATED)))}shutdown(){}}class xw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Fw{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ke(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nr,e.enqueueRetryable((()=>i(this.currentUser)))};const a=()=>{const u=s;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},l=u=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>l(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nr)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string",31837,{l:r}),new xf(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class Uw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $w{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Uw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,St(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ke(this.o===void 0,3512);const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ke(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=jw(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function xa(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return da(i)===da(s)?ce(i,s):da(i)?1:-1}return ce(n.length,e.length)}const Hw=55296,zw=57343;function da(n){const e=n.charCodeAt(0);return e>=Hw&&e<=zw}function jr(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="__name__";class Ut{constructor(e,t,r){t===void 0?t=0:t>e.length&&ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Ut.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return ce(e.length,t.length)}static compareSegments(e,t){const r=Ut.isNumericId(e),i=Ut.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ut.extractNumericId(e).compare(Ut.extractNumericId(t)):xa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class Ce extends Ut{construct(e,t,r){return new Ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new Ce(t)}static emptyPath(){return new Ce([])}}const qw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Ut{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return qw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kc}static keyField(){return new at([Kc])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new J(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new J(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n,e,t){if(!t)throw new J(B.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Kw(n,e,t,r){if(e===!0&&r===!0)throw new J(B.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Gc(n){if(!X.isDocumentKey(n))throw new J(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gw(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qw(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ie(12329,{type:typeof n})}function Qs(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qw(n);throw new J(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n,e){const t={typeString:n};return e&&(t.value=e),t}function rs(n,e){if(!Gw(n))throw new J(B.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new J(B.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=-62135596800,Yc=1e6;class je{static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Yc);return new je(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Qc)throw new J(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Yc}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:je._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rs(e,je._jsonSchema))return new je(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Qc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}je._jsonSchemaVersion="firestore/timestamp/1.0",je._jsonSchema={type:He("string",je._jsonSchemaVersion),seconds:He("number"),nanoseconds:He("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new je(0,0))}static max(){return new ne(new je(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=-1;function Yw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new je(t+1,0):new je(t,r));return new Ln(i,X.empty(),e)}function Jw(n){return new Ln(n.readTime,n.key,ji)}class Ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ln(ne.min(),X.empty(),ji)}static max(){return new Ln(ne.max(),X.empty(),ji)}}function Xw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(n){if(n.code!==B.FAILED_PRECONDITION||n.message!==Zw)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):M.reject(t)}static resolve(e){return new M(((t,r)=>{t(e)}))}static reject(e){return new M(((t,r)=>{r(e)}))}static waitFor(e){return new M(((t,r)=>{let i=0,s=0,a=!1;e.forEach((l=>{++i,l.next((()=>{++s,a&&s===i&&t()}),(u=>r(u)))})),a=!0,s===i&&t()}))}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next((i=>i?M.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new M(((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;t(e[h]).next((f=>{a[h]=f,++l,l===s&&r(a)}),(f=>i(f)))}}))}static doWhile(e,t){return new M(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function tT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ei(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Lo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=-1;function Oo(n){return n==null}function Fa(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="";function rT(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jc(e)),e=iT(n.get(t),e);return Jc(e)}function iT(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Ff:t+="";break;default:t+=s}}return t}function Jc(n){return n+Ff+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function is(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function sT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Os(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Os(this.root,e,this.comparator,!1)}getReverseIterator(){return new Os(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Os(this.root,e,this.comparator,!0)}}class Os{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=i??Xe.EMPTY,this.right=s??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Xe(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Xe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Zc(this.data.getIterator())}getIteratorFrom(e){return new Zc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Zc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new In([])}unionWith(e){let t=new We(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new In(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Uf("Invalid base64 string: "+s):s}})(e);return new Ze(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s})(e);return new Ze(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const oT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(n){if(ke(!!n,39018),typeof n=="string"){let e=0;const t=oT.exec(n);if(ke(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(n.seconds),nanos:Ve(n.nanos)}}function Ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vn(n){return typeof n=="string"?Ze.fromBase64String(n):Ze.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="server_timestamp",Bf="__type__",jf="__previous_value__",Hf="__local_write_time__";function Pl(n){return(n?.mapValue?.fields||{})[Bf]?.stringValue===$f}function Vo(n){const e=n.mapValue.fields[jf];return Pl(e)?Vo(e):e}function Hi(n){const e=On(n.mapValue.fields[Hf].timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e,t,r,i,s,a,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const po="(default)";class zi{constructor(e,t){this.projectId=e,this.database=t||po}static empty(){return new zi("","")}get isDefaultDatabase(){return this.database===po}isEqual(e){return e instanceof zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="__type__",uT="__max__",Vs={mapValue:{}},cT="__vector__",Ua="value";function Mn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pl(n)?4:dT(n)?9007199254740991:hT(n)?10:11:ie(28295,{value:n})}function Kt(n,e){if(n===e)return!0;const t=Mn(n);if(t!==Mn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hi(n).isEqual(Hi(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=On(i.timestampValue),l=On(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return Vn(i.bytesValue).isEqual(Vn(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Ve(i.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(i.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Ve(i.integerValue)===Ve(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=Ve(i.doubleValue),l=Ve(s.doubleValue);return a===l?Fa(a)===Fa(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return jr(n.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:case 11:return(function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Xc(a)!==Xc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Kt(a[u],l[u])))return!1;return!0})(n,e);default:return ie(52216,{left:n})}}function qi(n,e){return(n.values||[]).find((t=>Kt(t,e)))!==void 0}function Hr(n,e){if(n===e)return 0;const t=Mn(n),r=Mn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return(function(s,a){const l=Ve(s.integerValue||s.doubleValue),u=Ve(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1})(n,e);case 3:return eh(n.timestampValue,e.timestampValue);case 4:return eh(Hi(n),Hi(e));case 5:return xa(n.stringValue,e.stringValue);case 6:return(function(s,a){const l=Vn(s),u=Vn(a);return l.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,a){const l=ce(Ve(s.latitude),Ve(a.latitude));return l!==0?l:ce(Ve(s.longitude),Ve(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return th(n.arrayValue,e.arrayValue);case 10:return(function(s,a){const l=s.fields||{},u=a.fields||{},h=l[Ua]?.arrayValue,f=u[Ua]?.arrayValue,p=ce(h?.values?.length||0,f?.values?.length||0);return p!==0?p:th(h,f)})(n.mapValue,e.mapValue);case 11:return(function(s,a){if(s===Vs.mapValue&&a===Vs.mapValue)return 0;if(s===Vs.mapValue)return 1;if(a===Vs.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=xa(u[p],f[p]);if(g!==0)return g;const v=Hr(l[u[p]],h[f[p]]);if(v!==0)return v}return ce(u.length,f.length)})(n.mapValue,e.mapValue);default:throw ie(23264,{he:t})}}function eh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=On(n),r=On(e),i=ce(t.seconds,r.seconds);return i!==0?i:ce(t.nanos,r.nanos)}function th(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Hr(t[i],r[i]);if(s)return s}return ce(t.length,r.length)}function zr(n){return $a(n)}function $a(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=On(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Vn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=$a(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${$a(t.fields[a])}`;return i+"}"})(n.mapValue):ie(61005,{value:n})}function Ys(n){switch(Mn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vo(n);return e?16+Ys(e):16;case 5:return 2*n.stringValue.length;case 6:return Vn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Ys(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return is(r.fields,((s,a)=>{i+=s.length+Ys(a)})),i})(n.mapValue);default:throw ie(13486,{value:n})}}function Ba(n){return!!n&&"integerValue"in n}function Cl(n){return!!n&&"arrayValue"in n}function nh(n){return!!n&&"nullValue"in n}function rh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fa(n){return!!n&&"mapValue"in n}function hT(n){return(n?.mapValue?.fields||{})[lT]?.stringValue===cT}function ki(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return is(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=ki(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ki(n.arrayValue.values[t]);return e}return{...n}}function dT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===uT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ki(t)}setAll(e){let t=at.emptyPath(),r={},i=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=ki(a):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());fa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){is(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new $t(ki(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new it(e,0,ne.min(),ne.min(),ne.min(),$t.empty(),0)}static newFoundDocument(e,t,r,i){return new it(e,1,t,ne.min(),r,i,0)}static newNoDocument(e,t){return new it(e,2,t,ne.min(),ne.min(),$t.empty(),0)}static newUnknownDocument(e,t){return new it(e,3,t,ne.min(),ne.min(),$t.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,t){this.position=e,this.inclusive=t}}function ih(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=Hr(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Kt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t="asc"){this.field=e,this.dir=t}}function fT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{}class qe extends zf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mT(e,t,r):t==="array-contains"?new yT(e,r):t==="in"?new vT(e,r):t==="not-in"?new ET(e,r):t==="array-contains-any"?new wT(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gT(e,r):new _T(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Hr(t,this.value)):t!==null&&Mn(this.value)===Mn(t)&&this.matchesComparison(Hr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends zf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Gt(e,t)}matches(e){return qf(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qf(n){return n.op==="and"}function Wf(n){return pT(n)&&qf(n)}function pT(n){for(const e of n.filters)if(e instanceof Gt)return!1;return!0}function ja(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+zr(n.value);if(Wf(n))return n.filters.map((e=>ja(e))).join(",");{const e=n.filters.map((t=>ja(t))).join(",");return`${n.op}(${e})`}}function Kf(n,e){return n instanceof qe?(function(r,i){return i instanceof qe&&r.op===i.op&&r.field.isEqual(i.field)&&Kt(r.value,i.value)})(n,e):n instanceof Gt?(function(r,i){return i instanceof Gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,a,l)=>s&&Kf(a,i.filters[l])),!0):!1})(n,e):void ie(19439)}function Gf(n){return n instanceof qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${zr(t.value)}`})(n):n instanceof Gt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Gf).join(" ,")+"}"})(n):"Filter"}class mT extends qe{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class gT extends qe{constructor(e,t){super(e,"in",t),this.keys=Qf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class _T extends qe{constructor(e,t){super(e,"not-in",t),this.keys=Qf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qf(n,e){return(e.arrayValue?.values||[]).map((t=>X.fromName(t.referenceValue)))}class yT extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cl(t)&&qi(t.arrayValue,this.value)}}class vT extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qi(this.value.arrayValue,t)}}class ET extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(qi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qi(this.value.arrayValue,t)}}class wT extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>qi(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function oh(n,e=null,t=[],r=[],i=null,s=null,a=null){return new TT(n,e,t,r,i,s,a)}function kl(n){const e=de(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>ja(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Oo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>zr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>zr(r))).join(",")),e.Te=t}return e.Te}function Dl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!fT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Kf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sh(n.startAt,e.startAt)&&sh(n.endAt,e.endAt)}function Ha(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function IT(n,e,t,r,i,s,a,l){return new Mo(n,e,t,r,i,s,a,l)}function Nl(n){return new Mo(n)}function ah(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function RT(n){return n.collectionGroup!==null}function Di(n){const e=de(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new We(at.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new go(s,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new go(at.keyField(),r))}return e.Ie}function Wt(n){const e=de(n);return e.Ee||(e.Ee=AT(e,Di(n))),e.Ee}function AT(n,e){if(n.limitType==="F")return oh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new go(i.field,s)}));const t=n.endAt?new mo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mo(n.startAt.position,n.startAt.inclusive):null;return oh(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function za(n,e,t){return new Mo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function xo(n,e){return Dl(Wt(n),Wt(e))&&n.limitType===e.limitType}function Yf(n){return`${kl(Wt(n))}|lt:${n.limitType}`}function Rr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Gf(i))).join(", ")}]`),Oo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>zr(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>zr(i))).join(",")),`Target(${r})`})(Wt(n))}; limitType=${n.limitType})`}function Fo(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of Di(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(a,l,u){const h=ih(a,l,u);return a.inclusive?h<=0:h<0})(r.startAt,Di(r),i)||r.endAt&&!(function(a,l,u){const h=ih(a,l,u);return a.inclusive?h>=0:h>0})(r.endAt,Di(r),i))})(n,e)}function bT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jf(n){return(e,t)=>{let r=!1;for(const i of Di(n)){const s=ST(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ST(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Hr(u,h):ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){is(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return sT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=new xe(X.comparator);function xn(){return PT}const Xf=new xe(X.comparator);function Ai(...n){let e=Xf;for(const t of n)e=e.insert(t.key,t);return e}function CT(n){let e=Xf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Jn(){return Ni()}function Zf(){return Ni()}function Ni(){return new ar((n=>n.toString()),((n,e)=>n.isEqual(e)))}const kT=new We(X.comparator);function pe(...n){let e=kT;for(const t of n)e=e.add(t);return e}const DT=new We(ce);function NT(){return DT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fa(e)?"-0":e}}function OT(n){return{integerValue:""+n}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this._=void 0}}function VT(n,e,t){return n instanceof qa?(function(i,s){const a={fields:{[Bf]:{stringValue:$f},[Hf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pl(s)&&(s=Vo(s)),s&&(a.fields[jf]=s),{mapValue:a}})(t,e):n instanceof _o?ep(n,e):n instanceof yo?tp(n,e):(function(i,s){const a=xT(i,s),l=lh(a)+lh(i.Ae);return Ba(a)&&Ba(i.Ae)?OT(l):LT(i.serializer,l)})(n,e)}function MT(n,e,t){return n instanceof _o?ep(n,e):n instanceof yo?tp(n,e):t}function xT(n,e){return n instanceof Wa?(function(r){return Ba(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class qa extends Uo{}class _o extends Uo{constructor(e){super(),this.elements=e}}function ep(n,e){const t=np(e);for(const r of n.elements)t.some((i=>Kt(i,r)))||t.push(r);return{arrayValue:{values:t}}}class yo extends Uo{constructor(e){super(),this.elements=e}}function tp(n,e){let t=np(e);for(const r of n.elements)t=t.filter((i=>!Kt(i,r)));return{arrayValue:{values:t}}}class Wa extends Uo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function lh(n){return Ve(n.integerValue||n.doubleValue)}function np(n){return Cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function FT(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof _o&&i instanceof _o||r instanceof yo&&i instanceof yo?jr(r.elements,i.elements,Kt):r instanceof Wa&&i instanceof Wa?Kt(r.Ae,i.Ae):r instanceof qa&&i instanceof qa})(n.transform,e.transform)}class Xn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xn}static exists(e){return new Xn(void 0,e)}static updateTime(e){return new Xn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Js(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ll{}function rp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new $T(n.key,Xn.none()):new Ol(n.key,n.data,Xn.none());{const t=n.data,r=$t.empty();let i=new We(at.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new $o(n.key,r,new In(i.toArray()),Xn.none())}}function UT(n,e,t){n instanceof Ol?(function(i,s,a){const l=i.value.clone(),u=ch(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof $o?(function(i,s,a){if(!Js(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=ch(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(ip(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Li(n,e,t,r){return n instanceof Ol?(function(s,a,l,u){if(!Js(s.precondition,a))return l;const h=s.value.clone(),f=hh(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof $o?(function(s,a,l,u){if(!Js(s.precondition,a))return l;const h=hh(s.fieldTransforms,u,a),f=a.data;return f.setAll(ip(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(s,a,l){return Js(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function uh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&jr(r,i,((s,a)=>FT(s,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ol extends Ll{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $o extends Ll{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ip(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function ch(n,e,t){const r=new Map;ke(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,MT(a,l,t[i]))}return r}function hh(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,VT(s,a,e))}return r}class $T extends Ll{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&UT(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Li(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Li(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zf();return this.mutations.forEach((i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=rp(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(ne.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pe())}isEqual(e){return this.batchId===e.batchId&&jr(this.mutations,e.mutations,((t,r)=>uh(t,r)))&&jr(this.baseMutations,e.baseMutations,((t,r)=>uh(t,r)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,he;function sp(n){if(n===void 0)return an("GRPC error has no .code"),B.UNKNOWN;switch(n){case $e.OK:return B.OK;case $e.CANCELLED:return B.CANCELLED;case $e.UNKNOWN:return B.UNKNOWN;case $e.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case $e.INTERNAL:return B.INTERNAL;case $e.UNAVAILABLE:return B.UNAVAILABLE;case $e.UNAUTHENTICATED:return B.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case $e.NOT_FOUND:return B.NOT_FOUND;case $e.ALREADY_EXISTS:return B.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return B.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case $e.ABORTED:return B.ABORTED;case $e.OUT_OF_RANGE:return B.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return B.UNIMPLEMENTED;case $e.DATA_LOSS:return B.DATA_LOSS;default:return ie(39323,{code:n})}}(he=$e||($e={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=new Cn([4294967295,4294967295],0);function dh(n){const e=zT().encode(n),t=new kf;return t.update(e),new Uint8Array(t.digest())}function fh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([i,s],0)]}class Vl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new bi(`Invalid padding: ${t}`);if(r<0)throw new bi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new bi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new bi(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Cn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Cn.fromNumber(r)));return i.compare(qT)===1&&(i=new Cn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=dh(e),[r,i]=fh(t);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Vl(s,i,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.ge===0)return;const t=dh(e),[r,i]=fh(t);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,ss.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Bo(ne.min(),i,new xe(ce),xn(),pe())}}class ss{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ss(r,t,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class op{constructor(e,t){this.targetId=e,this.Ce=t}}class ap{constructor(e,t,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ph{constructor(){this.ve=0,this.Fe=mh(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),t=pe(),r=pe();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ie(38017,{changeType:s})}})),new ss(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=mh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ke(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class WT{constructor(e){this.Ge=e,this.ze=new Map,this.je=xn(),this.Je=Ms(),this.He=Ms(),this.Ye=new xe(ce)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Ha(s))if(r===0){const a=new X(s.path);this.et(t,a,it.newNoDocument(a,ne.min()))}else ke(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Vn(r).toUint8Array()}catch(u){if(u instanceof Uf)return Br("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vl(a,i,s)}catch(u){return Br(u instanceof bi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,a)=>{const l=this.ot(a);if(l){if(s.current&&Ha(l.target)){const u=new X(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,it.newNoDocument(u,e))}s.Be&&(t.set(a,s.ke()),s.qe())}}));let r=pe();this.He.forEach(((s,a)=>{let l=!0;a.forEachWhile((u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(s))})),this.je.forEach(((s,a)=>a.setReadTime(e)));const i=new Bo(e,t,this.Ye,this.je,r);return this.je=xn(),this.Je=Ms(),this.He=Ms(),this.Ye=new xe(ce),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new ph,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new We(ce),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new We(ce),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ph),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ms(){return new xe(X.comparator)}function mh(){return new xe(X.comparator)}const KT={asc:"ASCENDING",desc:"DESCENDING"},GT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QT={and:"AND",or:"OR"};class YT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ka(n,e){return n.useProto3Json||Oo(e)?e:{value:e}}function JT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Lr(n){return ke(!!n,49232),ne.fromTimestamp((function(t){const r=On(t);return new je(r.seconds,r.nanos)})(n))}function ZT(n,e){return Ga(n,e).canonicalString()}function Ga(n,e){const t=(function(i){return new Ce(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function lp(n){const e=Ce.fromString(n);return ke(fp(e),10190,{key:e.toString()}),e}function pa(n,e){const t=lp(e);if(t.get(1)!==n.databaseId.projectId)throw new J(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(cp(t))}function up(n,e){return ZT(n.databaseId,e)}function eI(n){const e=lp(n);return e.length===4?Ce.emptyPath():cp(e)}function gh(n){return new Ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cp(n){return ke(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function tI(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ie(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(h,f){return h.useProto3Json?(ke(f===void 0||typeof f=="string",58123),Ze.fromBase64String(f||"")):(ke(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ze.fromUint8Array(f||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const f=h.code===void 0?B.UNKNOWN:sp(h.code);return new J(f,h.message||"")})(a);t=new ap(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=pa(n,r.document.name),s=Lr(r.document.updateTime),a=r.document.createTime?Lr(r.document.createTime):ne.min(),l=new $t({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Xs(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=pa(n,r.document),s=r.readTime?Lr(r.readTime):ne.min(),a=it.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Xs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=pa(n,r.document),s=r.removedTargetIds||[];t=new Xs([],s,i,null)}else{if(!("filter"in e))return ie(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new HT(i,s),l=r.targetId;t=new op(l,a)}}return t}function nI(n,e){return{documents:[up(n,e.path)]}}function rI(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=up(n,i);const s=(function(h){if(h.length!==0)return dp(Gt.create(h,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const a=(function(h){if(h.length!==0)return h.map((f=>(function(g){return{field:Ar(g.field),direction:oI(g.dir)}})(f)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Ka(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:i}}function iI(n){let e=eI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ke(r===1,65062);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=(function(p){const g=hp(p);return g instanceof Gt&&Wf(g)?g.getFilters():[g]})(t.where));let a=[];t.orderBy&&(a=(function(p){return p.map((g=>(function(S){return new go(br(S.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(g)))})(t.orderBy));let l=null;t.limit&&(l=(function(p){let g;return g=typeof p=="object"?p.value:p,Oo(g)?null:g})(t.limit));let u=null;t.startAt&&(u=(function(p){const g=!!p.before,v=p.values||[];return new mo(v,g)})(t.startAt));let h=null;return t.endAt&&(h=(function(p){const g=!p.before,v=p.values||[];return new mo(v,g)})(t.endAt)),IT(e,i,a,s,l,"F",u,h)}function sI(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function hp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=br(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=br(t.unaryFilter.field);return qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=br(t.unaryFilter.field);return qe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=br(t.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return qe.create(br(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Gt.create(t.compositeFilter.filters.map((r=>hp(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(t.compositeFilter.op))})(n):ie(30097,{filter:n})}function oI(n){return KT[n]}function aI(n){return GT[n]}function lI(n){return QT[n]}function Ar(n){return{fieldPath:n.canonicalString()}}function br(n){return at.fromServerFormat(n.fieldPath)}function dp(n){return n instanceof qe?(function(t){if(t.op==="=="){if(rh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NAN"}};if(nh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(rh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NAN"}};if(nh(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(t.field),op:aI(t.op),value:t.value}}})(n):n instanceof Gt?(function(t){const r=t.getFilters().map((i=>dp(i)));return r.length===1?r[0]:{compositeFilter:{op:lI(t.op),filters:r}}})(n):ie(54877,{filter:n})}function fp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,r,i,s=ne.min(),a=ne.min(),l=Ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.yt=e}}function cI(n){const e=iI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?za(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(){this.Cn=new dI}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Ln.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class dI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new We(Ce.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pp=41943040;class ct{static withCacheSize(e){return new ct(e,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct.DEFAULT_COLLECTION_PERCENTILE=10,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ct.DEFAULT=new ct(pp,ct.DEFAULT_COLLECTION_PERCENTILE,ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ct.DISABLED=new ct(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new qr(0)}static cr(){return new qr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="LruGarbageCollector",fI=1048576;function vh([n,e],[t,r]){const i=ce(n,t);return i===0?ce(e,r):i}class pI{constructor(e){this.Ir=e,this.buffer=new We(vh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();vh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mI{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){j(yh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ei(t)?j(yh,"Ignoring IndexedDB error during garbage collection: ",t):await No(t)}await this.Vr(3e5)}))}}class gI{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Lo.ce);const r=new pI(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(_h)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_h):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(r=p,l=Date.now(),this.removeTargets(e,r,t)))).next((p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),Ir()<=ue.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p}))))}}function _I(n,e){return new gI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(){this.changes=new ar((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Li(r.mutation,i,In.empty(),je.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,pe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=pe()){const i=Jn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let a=Ai();return s.forEach(((l,u)=>{a=a.insert(l,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Jn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,pe())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,i){let s=xn();const a=Ni(),l=(function(){return Ni()})();return t.forEach(((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof $o)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Li(f.mutation,h,f.mutation.getFieldMask(),je.now())):a.set(h.key,In.empty())})),this.recalculateAndSaveOverlays(e,s).next((u=>(u.forEach(((h,f)=>a.set(h,f))),t.forEach(((h,f)=>l.set(h,new vI(f,a.get(h)??null)))),l)))}recalculateAndSaveOverlays(e,t){const r=Ni();let i=new xe(((a,l)=>a-l)),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let f=r.get(u)||In.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||pe()).add(u);i=i.insert(l.batchId,p)}))})).next((()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=Zf();f.forEach((g=>{if(!s.has(g)){const v=rp(t.get(g),r.get(g));v!==null&&p.set(g,v),s=s.add(g)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):RT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):M.resolve(Jn());let l=ji,u=s;return a.next((h=>M.forEach(h,((f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{u=u.insert(f,g)}))))).next((()=>this.populateOverlays(e,h,s))).next((()=>this.computeViews(e,u,h,pe()))).next((f=>({batchId:l,changes:CT(f)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let i=Ai();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Ai();return this.indexManager.getCollectionParents(e,s).next((l=>M.forEach(l,(u=>{const h=(function(p,g){return new Mo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next((f=>{f.forEach(((p,g)=>{a=a.insert(p,g)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((a=>{s.forEach(((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))}));let l=Ai();return a.forEach(((u,h)=>{const f=s.get(u);f!==void 0&&Li(f.mutation,h,In.empty(),je.now()),Fo(t,h)&&(l=l.insert(u,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return M.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Lr(i.createTime)}})(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:cI(i.bundledQuery),readTime:Lr(i.readTime)}})(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.overlays=new xe(X.comparator),this.qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jn();return M.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.St(e,t,s)})),M.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const i=Jn(),s=t.length+1,a=new X(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new xe(((h,f)=>h-f));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Jn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Jn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,f)=>l.set(h,f))),!(l.size()>=i)););return M.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new jT(t,r));let s=this.qr.get(t);s===void 0&&(s=pe(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.Qr=new We(Qe.$r),this.Ur=new We(Qe.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new Qe(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new Qe(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new X(new Ce([])),r=new Qe(t,e),i=new Qe(t,e+1),s=[];return this.Ur.forEachInRange([r,i],(a=>{this.Gr(a),s.push(a.key)})),s}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new X(new Ce([])),r=new Qe(t,e),i=new Qe(t,e+1);let s=pe();return this.Ur.forEachInRange([r,i],(a=>{s=s.add(a.key)})),s}containsKey(e){const t=new Qe(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return X.comparator(e.key,t.key)||ce(e.Yr,t.Yr)}static Kr(e,t){return ce(e.Yr,t.Yr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new We(Qe.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new BT(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Zr=this.Zr.add(new Qe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?nT:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Qe(t,0),i=new Qe(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],(a=>{const l=this.Xr(a.Yr);s.push(l)})),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(ce);return t.forEach((i=>{const s=new Qe(i,0),a=new Qe(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,a],(l=>{r=r.add(l.Yr)}))})),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const a=new Qe(new X(s),0);let l=new We(ce);return this.Zr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)}),a),M.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){ke(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(t.mutations,(i=>{const s=new Qe(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new Qe(t,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.ri=e,this.docs=(function(){return new xe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():it.newInvalidDocument(t))}getEntries(e,t){let r=xn();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))})),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=xn();const a=t.path,l=new X(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Xw(Jw(f),r)<=0||(i.has(f.key)||Fo(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,t,r,i){ie(9500)}ii(e,t){return M.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new bI(this)}getSize(e){return M.resolve(this.size)}}class bI extends yI{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),M.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.persistence=e,this.si=new ar((t=>kl(t)),Dl),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.oi=0,this._i=new Ml,this.targetCount=0,this.ai=qr.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),M.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new qr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Pr(t),M.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.si.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),M.waitFor(s).next((()=>i))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((a=>{s.push(i.markPotentiallyOrphaned(e,a))})),M.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t){this.ui={},this.overlays={},this.ci=new Lo(0),this.li=!1,this.li=!0,this.hi=new II,this.referenceDelegate=e(this),this.Pi=new SI(this),this.indexManager=new hI,this.remoteDocumentCache=(function(i){return new AI(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new uI(t),this.Ii=new wI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new TI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new RI(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const i=new PI(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ai(e,t){return M.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class PI extends eT{constructor(e){super(),this.currentSequenceNumber=e}}class xl{constructor(e){this.persistence=e,this.Ri=new Ml,this.Vi=null}static mi(e){return new xl(e)}get fi(){if(this.Vi)return this.Vi;throw ie(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.fi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,(r=>{const i=X.fromPath(r);return this.gi(e,i).next((s=>{s||t.removeEntry(i,ne.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return M.or([()=>M.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class vo{constructor(e,t){this.persistence=e,this.pi=new ar((r=>rT(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=_I(this,t)}static mi(e,t){return new vo(e,t)}Ei(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return M.forEach(this.pi,((r,i)=>this.br(e,r,i).next((s=>s?M.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,(a=>this.br(e,a,t).next((l=>{l||(r++,s.removeEntry(a,ne.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),M.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ys(e.data.value)),t}br(e,t,r){return M.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=pe(),i=pe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fl(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return sy()?8:tT(st())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ys(e,t).next((a=>{s.result=a})).next((()=>{if(!s.result)return this.ws(e,t,i,r).next((a=>{s.result=a}))})).next((()=>{if(s.result)return;const a=new CI;return this.Ss(e,t,a).next((l=>{if(s.result=l,this.Vs)return this.bs(e,t,a,l.size)}))})).next((()=>s.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Ir()<=ue.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Rr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(Ir()<=ue.DEBUG&&j("QueryEngine","Query:",Rr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Ir()<=ue.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Rr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(t))):M.resolve())}ys(e,t){if(ah(t))return M.resolve(null);let r=Wt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=za(t,null,"F"),r=Wt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const a=pe(...s);return this.ps.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.Ds(t,l);return this.Cs(t,h,a,u.readTime)?this.ys(e,za(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ws(e,t,r,i){return ah(t)||i.isEqual(ne.min())?M.resolve(null):this.ps.getDocuments(e,r).next((s=>{const a=this.Ds(t,s);return this.Cs(t,a,r,i)?M.resolve(null):(Ir()<=ue.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Rr(t)),this.vs(e,a,t,Yw(i,ji)).next((l=>l)))}))}Ds(e,t){let r=new We(Jf(e));return t.forEach(((i,s)=>{Fo(e,s)&&(r=r.add(s))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return Ir()<=ue.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Rr(t)),this.ps.getDocumentsMatchingQuery(e,t,Ln.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((a=>{s=s.insert(a.key,a)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul="LocalStore",DI=3e8;class NI{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new xe(ce),this.xs=new ar((s=>kl(s)),Dl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EI(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function LI(n,e,t,r){return new NI(n,e,t,r)}async function gp(n,e){const t=de(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const a=[],l=[];let u=pe();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function _p(n){const e=de(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function OI(n,e){const t=de(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach(((f,p)=>{const g=i.get(p);if(!g)return;l.push(t.Pi.removeMatchingKeys(s,f.removedDocuments,p).next((()=>t.Pi.addMatchingKeys(s,f.addedDocuments,p))));let v=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Ze.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),(function(V,k,L){return V.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=DI?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(g,v,f)&&l.push(t.Pi.updateTargetData(s,v))}));let u=xn(),h=pe();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))})),l.push(VI(s,a,e.documentUpdates).next((f=>{u=f.ks,h=f.qs}))),!r.isEqual(ne.min())){const f=t.Pi.getLastRemoteSnapshotVersion(s).next((p=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r)));l.push(f)}return M.waitFor(l).next((()=>a.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,u,h))).next((()=>u))})).then((s=>(t.Ms=i,s)))}function VI(n,e,t){let r=pe(),i=pe();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let a=xn();return t.forEach(((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):j(Ul,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)})),{ks:a,qs:i}}))}function MI(n,e){const t=de(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((s=>s?(i=s,M.resolve(i)):t.Pi.allocateTargetId(r).next((a=>(i=new Rn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function Qa(n,e,t){const r=de(n),i=r.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(a=>r.persistence.referenceDelegate.removeTarget(a,i)))}catch(a){if(!ei(a))throw a;j(Ul,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Eh(n,e,t){const r=de(n);let i=ne.min(),s=pe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,f){const p=de(u),g=p.xs.get(f);return g!==void 0?M.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)})(r,a,Wt(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,l.targetId).next((u=>{s=u}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,t?i:ne.min(),t?s:pe()))).next((l=>(xI(r,bT(e),l),{documents:l,Qs:s})))))}function xI(n,e,t){let r=n.Os.get(e)||ne.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.Os.set(e,r)}class wh{constructor(){this.activeTargetIds=NT()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FI{constructor(){this.Mo=new wh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new wh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="ConnectivityMonitor";class Ih{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){j(Th,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){j(Th,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs=null;function Ya(){return xs===null?xs=(function(){return 268435456+Math.round(2147483648*Math.random())})():xs++,"0x"+xs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma="RestConnection",$I={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class BI{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===po?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,s){const a=Ya(),l=this.zo(e,t.toUriEncodedString());j(ma,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=Qr(h);return this.Jo(e,l,u,r,f).then((p=>(j(ma,`Received RPC '${e}' ${a}: `,p),p)),(p=>{throw Br(ma,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p}))}Ho(e,t,r,i,s,a){return this.Go(e,t,r,i,s)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Zr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}zo(e,t){const r=$I[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class HI extends BI{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const a=Ya();return new Promise(((l,u)=>{const h=new Df;h.setWithCredentials(!0),h.listenOnce(Nf.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Gs.NO_ERROR:const p=h.getResponseJson();j(nt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Gs.TIMEOUT:j(nt,`RPC '${e}' ${a} timed out`),u(new J(B.DEADLINE_EXCEEDED,"Request time out"));break;case Gs.HTTP_ERROR:const g=h.getStatus();if(j(nt,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let v=h.getResponseJson();Array.isArray(v)&&(v=v[0]);const S=v?.error;if(S&&S.status&&S.message){const V=(function(L){const O=L.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(O)>=0?O:B.UNKNOWN})(S.status);u(new J(V,S.message))}else u(new J(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new J(B.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{j(nt,`RPC '${e}' ${a} completed.`)}}));const f=JSON.stringify(i);j(nt,`RPC '${e}' ${a} sending request:`,i),h.send(t,"POST",f,r,15)}))}T_(e,t,r){const i=Ya(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Vf(),l=Of(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");j(nt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=a.createWebChannel(f,u);this.I_(p);let g=!1,v=!1;const S=new jI({Yo:k=>{v?j(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(g||(j(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),j(nt,`RPC '${e}' stream ${i} sending:`,k),p.send(k))},Zo:()=>p.close()}),V=(k,L,O)=>{k.listen(L,(F=>{try{O(F)}catch(Z){setTimeout((()=>{throw Z}),0)}}))};return V(p,Ri.EventType.OPEN,(()=>{v||(j(nt,`RPC '${e}' stream ${i} transport opened.`),S.o_())})),V(p,Ri.EventType.CLOSE,(()=>{v||(v=!0,j(nt,`RPC '${e}' stream ${i} transport closed`),S.a_(),this.E_(p))})),V(p,Ri.EventType.ERROR,(k=>{v||(v=!0,Br(nt,`RPC '${e}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),S.a_(new J(B.UNAVAILABLE,"The operation could not be completed")))})),V(p,Ri.EventType.MESSAGE,(k=>{if(!v){const L=k.data[0];ke(!!L,16349);const O=L,F=O?.error||O[0]?.error;if(F){j(nt,`RPC '${e}' stream ${i} received error:`,F);const Z=F.status;let Y=(function(_){const y=$e[_];if(y!==void 0)return sp(y)})(Z),C=F.message;Y===void 0&&(Y=B.INTERNAL,C="Unknown error status: "+Z+" with message "+F.message),v=!0,S.a_(new J(Y,C)),p.close()}else j(nt,`RPC '${e}' stream ${i} received:`,L),S.u_(L)}})),V(l,Lf.STAT_EVENT,(k=>{k.stat===Ma.PROXY?j(nt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Ma.NOPROXY&&j(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{S.__()}),0),S}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function ga(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(n){return new YT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="PersistentStream";class zI{constructor(e,t,r,i,s,a,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===B.RESOURCE_EXHAUSTED?(an(t.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new J(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return j(Rh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(j(Rh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qI extends zI{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=tI(this.serializer,e),r=(function(s){if(!("targetChange"in s))return ne.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?Lr(a.readTime):ne.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=gh(this.serializer),t.addTarget=(function(s,a){let l;const u=a.target;if(l=Ha(u)?{documents:nI(s,u)}:{query:rI(s,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=XT(s,a.resumeToken);const h=Ka(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ne.min())>0){l.readTime=JT(s,a.snapshotVersion.toTimestamp());const h=Ka(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=sI(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=gh(this.serializer),t.removeTarget=e,this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{}class KI extends WI{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new J(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Go(e,Ga(t,r),i,s,a))).catch((s=>{throw s.name==="FirebaseError"?(s.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(B.UNKNOWN,s.toString())}))}Ho(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Ho(e,Ga(t,r),i,a,l,s))).catch((a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(B.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class GI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(an(t),this.aa=!1):j("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="RemoteStore";class QI{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{as(this)&&(j(Wr,"Restarting streams for network reachability change."),await(async function(u){const h=de(u);h.Ea.add(4),await os(h),h.Ra.set("Unknown"),h.Ea.delete(4),await jo(h)})(this))}))})),this.Ra=new GI(r,i)}}async function jo(n){if(as(n))for(const e of n.da)await e(!0)}async function os(n){for(const e of n.da)await e(!1)}function Ep(n,e){const t=de(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Hl(t)?jl(t):ti(t).O_()&&Bl(t,e))}function $l(n,e){const t=de(n),r=ti(t);t.Ia.delete(e),r.O_()&&wp(t,e),t.Ia.size===0&&(r.O_()?r.L_():as(t)&&t.Ra.set("Unknown"))}function Bl(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ti(n).Y_(e)}function wp(n,e){n.Va.Ue(e),ti(n).Z_(e)}function jl(n){n.Va=new WT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ti(n).start(),n.Ra.ua()}function Hl(n){return as(n)&&!ti(n).x_()&&n.Ia.size>0}function as(n){return de(n).Ea.size===0}function Tp(n){n.Va=void 0}async function YI(n){n.Ra.set("Online")}async function JI(n){n.Ia.forEach(((e,t)=>{Bl(n,e)}))}async function XI(n,e){Tp(n),Hl(n)?(n.Ra.ha(e),jl(n)):n.Ra.set("Unknown")}async function ZI(n,e,t){if(n.Ra.set("Online"),e instanceof ap&&e.state===2&&e.cause)try{await(async function(i,s){const a=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.Ia.delete(l),i.Va.removeTarget(l))})(n,e)}catch(r){j(Wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ah(n,r)}else if(e instanceof Xs?n.Va.Ze(e):e instanceof op?n.Va.st(e):n.Va.tt(e),!t.isEqual(ne.min()))try{const r=await _p(n.localStore);t.compareTo(r)>=0&&await(function(s,a){const l=s.Va.Tt(a);return l.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,a))}})),l.targetMismatches.forEach(((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Ze.EMPTY_BYTE_STRING,f.snapshotVersion)),wp(s,u);const p=new Rn(f.target,u,h,f.sequenceNumber);Bl(s,p)})),s.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){j(Wr,"Failed to raise snapshot:",r),await Ah(n,r)}}async function Ah(n,e,t){if(!ei(e))throw e;n.Ea.add(1),await os(n),n.Ra.set("Offline"),t||(t=()=>_p(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{j(Wr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await jo(n)}))}async function bh(n,e){const t=de(n);t.asyncQueue.verifyOperationInProgress(),j(Wr,"RemoteStore received new credentials");const r=as(t);t.Ea.add(3),await os(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await jo(t)}async function eR(n,e){const t=de(n);e?(t.Ea.delete(2),await jo(t)):e||(t.Ea.add(2),await os(t),t.Ra.set("Unknown"))}function ti(n){return n.ma||(n.ma=(function(t,r,i){const s=de(t);return s.sa(),new qI(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Xo:YI.bind(null,n),t_:JI.bind(null,n),r_:XI.bind(null,n),H_:ZI.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Hl(n)?jl(n):n.Ra.set("Unknown")):(await n.ma.stop(),Tp(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new zl(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ip(n,e){if(an("AsyncQueue",`${e}: ${n}`),ei(n))return new J(B.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{static emptySet(e){return new Or(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Ai(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Or)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Or;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.ga=new xe(X.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ie(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Kr{constructor(e,t,r,i,s,a,l,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Kr(e,t,Or.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class nR{constructor(){this.queries=Ph(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=de(t),s=i.queries;i.queries=Ph(),s.forEach(((a,l)=>{for(const u of l.Sa)u.onError(r)}))})(this,new J(B.ABORTED,"Firestore shutting down"))}}function Ph(){return new ar((n=>Yf(n)),xo)}async function rR(n,e){const t=de(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new tR,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Ip(a,`Initialization of query '${Rr(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&ql(t)}async function iR(n,e){const t=de(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.Sa.indexOf(e);a>=0&&(s.Sa.splice(a,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sR(n,e){const t=de(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.Sa)l.Fa(i)&&(r=!0);a.wa=i}}r&&ql(t)}function oR(n,e,t){const r=de(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function ql(n){n.Ca.forEach((e=>{e.next()}))}var Ja,Ch;(Ch=Ja||(Ja={})).Ma="default",Ch.Cache="cache";class aR{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Kr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Kr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ja.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.key=e}}class Ap{constructor(e){this.key=e}}class lR{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=pe(),this.mutatedKeys=pe(),this.eu=Jf(e),this.tu=new Or(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Sh,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((f,p)=>{const g=i.get(f),v=Fo(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),V=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let k=!1;g&&v?g.data.isEqual(v.data)?S!==V&&(r.track({type:3,doc:v}),k=!0):this.su(g,v)||(r.track({type:2,doc:v}),k=!0,(u&&this.eu(v,u)>0||h&&this.eu(v,h)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),k=!0):g&&!v&&(r.track({type:1,doc:g}),k=!0,(u||h)&&(l=!0)),k&&(v?(a=a.add(v),s=V?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:a,iu:r,Cs:l,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((f,p)=>(function(v,S){const V=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{Rt:k})}};return V(v)-V(S)})(f.type,p.type)||this.eu(f.doc,p.doc))),this.ou(r),i=i??!1;const l=t&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,a.length!==0||h?{snapshot:new Kr(this.query,e.tu,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=pe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Ap(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Rp(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=pe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Kr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Wl="SyncEngine";class uR{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cR{constructor(e){this.key=e,this.hu=!1}}class hR{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new ar((l=>Yf(l)),xo),this.Iu=new Map,this.Eu=new Set,this.du=new xe(X.comparator),this.Au=new Map,this.Ru=new Ml,this.Vu={},this.mu=new Map,this.fu=qr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function dR(n,e,t=!0){const r=kp(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await bp(r,e,t,!0),i}async function fR(n,e){const t=kp(n);await bp(t,e,!0,!1)}async function bp(n,e,t,r){const i=await MI(n.localStore,Wt(e)),s=i.targetId,a=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=await pR(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ep(n.remoteStore,i),l}async function pR(n,e,t,r,i){n.pu=(p,g,v)=>(async function(V,k,L,O){let F=k.view.ru(L);F.Cs&&(F=await Eh(V.localStore,k.query,!1).then((({documents:I})=>k.view.ru(I,F))));const Z=O&&O.targetChanges.get(k.targetId),Y=O&&O.targetMismatches.get(k.targetId)!=null,C=k.view.applyChanges(F,V.isPrimaryClient,Z,Y);return Dh(V,k.targetId,C.au),C.snapshot})(n,p,g,v);const s=await Eh(n.localStore,e,!0),a=new lR(e,s.Qs),l=a.ru(s.documents),u=ss.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,u);Dh(n,t,h.au);const f=new uR(e,t,a);return n.Tu.set(e,f),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function mR(n,e,t){const r=de(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter((a=>!xo(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qa(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&$l(r.remoteStore,i.targetId),Xa(r,i.targetId)})).catch(No)):(Xa(r,i.targetId),await Qa(r.localStore,i.targetId,!0))}async function gR(n,e){const t=de(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),$l(t.remoteStore,r.targetId))}async function Sp(n,e){const t=de(n);try{const r=await OI(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const a=t.Au.get(s);a&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?ke(a.hu,14607):i.removedDocuments.size>0&&(ke(a.hu,42227),a.hu=!1))})),await Cp(t,r,e)}catch(r){await No(r)}}function kh(n,e,t){const r=de(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((s,a)=>{const l=a.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(a,l){const u=de(a);u.onlineState=l;let h=!1;u.queries.forEach(((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)})),h&&ql(u)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _R(n,e,t){const r=de(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let a=new xe(X.comparator);a=a.insert(s,it.newNoDocument(s,ne.min()));const l=pe().add(s),u=new Bo(ne.min(),new Map,new xe(ce),a,l);await Sp(r,u),r.du=r.du.remove(s),r.Au.delete(e),Kl(r)}else await Qa(r.localStore,e,!1).then((()=>Xa(r,e,t))).catch(No)}function Xa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Pp(n,r)}))}function Pp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&($l(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Kl(n))}function Dh(n,e,t){for(const r of t)r instanceof Rp?(n.Ru.addReference(r.key,e),yR(n,r)):r instanceof Ap?(j(Wl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Pp(n,r.key)):ie(19791,{wu:r})}function yR(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(j(Wl,"New document in limbo: "+t),n.Eu.add(r),Kl(n))}function Kl(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new X(Ce.fromString(e)),r=n.fu.next();n.Au.set(r,new cR(t)),n.du=n.du.insert(t,r),Ep(n.remoteStore,new Rn(Wt(Nl(t.path)),r,"TargetPurposeLimboResolution",Lo.ce))}}async function Cp(n,e,t){const r=de(n),i=[],s=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,u)=>{a.push(r.pu(u,e,t).then((h=>{if((h||t)&&r.isPrimaryClient){const f=h?!h.fromCache:t?.targetChanges.get(u.targetId)?.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(h){i.push(h);const f=Fl.As(u.targetId,h);s.push(f)}})))})),await Promise.all(a),r.Pu.H_(i),await(async function(u,h){const f=de(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>M.forEach(h,(g=>M.forEach(g.Es,(v=>f.persistence.referenceDelegate.addReference(p,g.targetId,v))).next((()=>M.forEach(g.ds,(v=>f.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))))))}catch(p){if(!ei(p))throw p;j(Ul,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=f.Ms.get(g),S=v.snapshotVersion,V=v.withLastLimboFreeSnapshotVersion(S);f.Ms=f.Ms.insert(g,V)}}})(r.localStore,s))}async function vR(n,e){const t=de(n);if(!t.currentUser.isEqual(e)){j(Wl,"User change. New user:",e.toKey());const r=await gp(t.localStore,e);t.currentUser=e,(function(s,a){s.mu.forEach((l=>{l.forEach((u=>{u.reject(new J(B.CANCELLED,a))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cp(t,r.Ls)}}function ER(n,e){const t=de(n),r=t.Au.get(e);if(r&&r.hu)return pe().add(r.key);{let i=pe();const s=t.Iu.get(e);if(!s)return i;for(const a of s){const l=t.Tu.get(a);i=i.unionWith(l.view.nu)}return i}}function kp(n){const e=de(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ER.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_R.bind(null,e),e.Pu.H_=sR.bind(null,e.eventManager),e.Pu.yu=oR.bind(null,e.eventManager),e}class Eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return LI(this.persistence,new kI,e.initialUser,this.serializer)}Cu(e){return new mp(xl.mi,this.serializer)}Du(e){return new FI}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eo.provider={build:()=>new Eo};class wR extends Eo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ke(this.persistence.referenceDelegate instanceof vo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new mI(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ct.withCacheSize(this.cacheSizeBytes):ct.DEFAULT;return new mp((r=>vo.mi(r,t)),this.serializer)}}class Za{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>kh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vR.bind(null,this.syncEngine),await eR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nR})()}createDatastore(e){const t=yp(e.databaseInfo.databaseId),r=(function(s){return new HI(s)})(e.databaseInfo);return(function(s,a,l,u){return new KI(s,a,l,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,a,l){return new QI(r,i,s,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>kh(this.syncEngine,t,0)),(function(){return Ih.v()?new Ih:new UI})())}createSyncEngine(e,t){return(function(i,s,a,l,u,h,f){const p=new hR(i,s,a,l,u,h);return f&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=de(t);j(Wr,"RemoteStore shutting down."),r.Ea.add(5),await os(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Za.provider={build:()=>new Za};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="FirestoreClient";class IR{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=Sl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async a=>{j(Fn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(j(Fn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ip(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function _a(n,e){n.asyncQueue.verifyOperationInProgress(),j(Fn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await gp(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Nh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await RR(n);j(Fn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>bh(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>bh(e.remoteStore,i))),n._onlineComponents=e}async function RR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j(Fn,"Using user provided OfflineComponentProvider");try{await _a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===B.FAILED_PRECONDITION||i.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Br("Error using user provided cache. Falling back to memory cache: "+t),await _a(n,new Eo)}}else j(Fn,"Using default OfflineComponentProvider"),await _a(n,new wR(void 0));return n._offlineComponents}async function AR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j(Fn,"Using user provided OnlineComponentProvider"),await Nh(n,n._uninitializedComponentsProvider._online)):(j(Fn,"Using default OnlineComponentProvider"),await Nh(n,new Za))),n._onlineComponents}async function Lh(n){const e=await AR(n),t=e.eventManager;return t.onListen=dR.bind(null,e.syncEngine),t.onUnlisten=mR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=fR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=gR.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Np="firestore.googleapis.com",Vh=!0;class Mh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new J(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Np,this.ssl=Vh}else this.host=e.host,this.ssl=e.ssl??Vh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<fI)throw new J(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dp(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new J(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new J(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new J(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Mw;switch(r.type){case"firstParty":return new $w(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Oh.get(t);r&&(j("ComponentProvider","Removing Datastore"),Oh.delete(t),r.terminate())})(this),Promise.resolve()}}function bR(n,e,t,r={}){n=Qs(n,Gl);const i=Qr(e),s=n._getSettings(),a={...s,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;i&&($d(`https://${l}`),Bd("Firestore",!0)),s.host!==Np&&s.host!==l&&Br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!tr(u,a)&&(n._setSettings(u),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=rt.MOCK_USER;else{h=Y_(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new J(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new rt(p)}n._authCredentials=new xw(new xf(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ho(this.firestore,e,this._query)}}class lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(rs(t,lt._jsonSchema))return new lt(e,r||null,new X(Ce.fromString(t.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:He("string",lt._jsonSchemaVersion),referencePath:He("string")};class Wi extends Ho{constructor(e,t,r){super(e,t,Nl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new X(e))}withConverter(e){return new Wi(this.firestore,e,this._path)}}function SR(n,e,...t){if(n=wt(n),arguments.length===1&&(e=Sl.newId()),Ww("doc","path",e),n instanceof Gl){const r=Ce.fromString(e,...t);return Gc(r),new lt(n,null,new X(r))}{if(!(n instanceof lt||n instanceof Wi))throw new J(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ce.fromString(e,...t));return Gc(r),new lt(n.firestore,n instanceof Wi?n.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh="AsyncQueue";class Fh{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vp(this,"async_queue_retry"),this._c=()=>{const r=ga();r&&j(xh,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Nr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ei(e))throw e;j(xh,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,an("INTERNAL UNHANDLED ERROR: ",Uh(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=zl.createAndSchedule(this,e,t,r,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&ie(47125,{Pc:Uh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Uh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}class el extends Gl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Fh,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fh(e),this._firestoreClient=void 0,await e}}}function PR(n,e){const t=typeof n=="object"?n:qd(),r=typeof n=="string"?n:po,i=_l(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=G_("firestore");s&&bR(i,...s)}return i}function CR(n){if(n._terminated)throw new J(B.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||kR(n),n._firestoreClient}function kR(n){const e=n._freezeSettings(),t=(function(i,s,a,l){return new aT(i,s,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Dp(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new IR(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(Ze.fromBase64String(e))}catch(t){throw new J(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rs(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:He("string",Bt._jsonSchemaVersion),bytes:He("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(rs(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:He("string",kn._jsonSchemaVersion),latitude:He("number"),longitude:He("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rs(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Dn(e.vectorValues);throw new J(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:He("string",Dn._jsonSchemaVersion),vectorValues:He("object")};const DR=new RegExp("[~\\*/\\[\\]]");function NR(n,e,t){if(e.search(DR)>=0)throw Bh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Lp(...e.split("."))._internalPath}catch{throw Bh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Bh(n,e,t,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new J(B.INVALID_ARGUMENT,s+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class LR extends Op{data(){return super.data()}}function Vp(n,e){return typeof e=="string"?NR(n,e):e instanceof Lp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VR{convertValue(e,t="none"){switch(Mn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return is(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){const t=e.fields?.[Ua].arrayValue?.values?.map((r=>Ve(r.doubleValue)));return new Dn(t)}convertGeoPoint(e){return new kn(Ve(e.latitude),Ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const t=On(e);return new je(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ce.fromString(e);ke(fp(r),9688,{name:e});const i=new zi(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(t)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class Si{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zn extends Op{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Zn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zn._jsonSchema={type:He("string",Zn._jsonSchemaVersion),bundleSource:He("string","DocumentSnapshot"),bundleName:He("string"),bundle:He("string")};class Zs extends Zn{data(e={}){return super.data(e)}}class Vr{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Si(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Zs(this._firestore,this._userDataWriter,r.key,r,new Si(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map((l=>{const u=new Zs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Si(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const u=new Zs(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Si(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:MR(l.type),doc:u,oldIndex:h,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Sl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:n})}}Vr._jsonSchemaVersion="firestore/querySnapshot/1.0",Vr._jsonSchema={type:He("string",Vr._jsonSchemaVersion),bundleSource:He("string","QuerySnapshot"),bundleName:He("string"),bundle:He("string")};class Mp extends VR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,t)}}function xR(n,...e){n=wt(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||$h(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if($h(e[r])){const u=e[r];e[r]=u.next?.bind(u),e[r+1]=u.error?.bind(u),e[r+2]=u.complete?.bind(u)}let s,a,l;if(n instanceof lt)a=Qs(n.firestore,el),l=Nl(n._key.path),s={next:u=>{e[r]&&e[r](FR(a,n,u))},error:e[r+1],complete:e[r+2]};else{const u=Qs(n,Ho);a=Qs(u.firestore,el),l=u._query;const h=new Mp(a);s={next:f=>{e[r]&&e[r](new Vr(a,h,u,f))},error:e[r+1],complete:e[r+2]},OR(n._query)}return(function(h,f,p,g){const v=new TR(g),S=new aR(f,v,p);return h.asyncQueue.enqueueAndForget((async()=>rR(await Lh(h),S))),()=>{v.Nu(),h.asyncQueue.enqueueAndForget((async()=>iR(await Lh(h),S)))}})(CR(a),l,i,s)}function FR(n,e,t){const r=t.docs.get(e._key),i=new Mp(n);return new Zn(n,i,e._key,r,new Si(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Zr=i})(Yr),Ur(new nr("firestore",((r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new el(new Fw(r.getProvider("auth-internal")),new Bw(a,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zi(h.options.projectId,f)})(a,i),a);return s={useFetchStreams:t,...s},l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),Sn(zc,qc,e),Sn(zc,qc,"esm2020")})();var UR="firebase",$R="12.2.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(UR,$R,"app");const BR={apiKey:"AIzaSyDFOBqf8hyd3aMi6iENM6RYMpl7SA-jT_U",authDomain:"database-99996.firebaseapp.com",projectId:"database-99996",storageBucket:"database-99996.firebasestorage.app",messagingSenderId:"114068892226",appId:"1:114068892226:web:04bff3a786380f48e3dbdb",measurementId:"G-1HQS26V8V6"},xp=zd(BR),jR=PR(xp),Ki=Ow(xp),HR=()=>{const[n,e]=Be(!1),[t,r]=Be(""),[i,s]=Be(""),[a,l]=Be(""),u=Ao();return mt(()=>{if(a){const f=setTimeout(()=>l(""),3e3);return()=>clearTimeout(f)}},[a]),Q("div",{children:[Q("div",{className:`error-toast ${a?"show":""}`,children:[Q("p",{children:a}),Q("button",{onClick:()=>l(""),children:"×"})]}),Q("div",{className:"signIn",children:[Q("h1",{children:"Login"}),Q("form",{onSubmit:async f=>{f.preventDefault(),l(""),e(!0);try{await wE(Ki,wf),await EE(Ki,t,i),u("/",{replace:!0})}catch(p){switch(console.error("Firebase Login Error:",p),p.code){case"auth/user-not-found":l("No user found with this email.");break;case"auth/wrong-password":l("Incorrect password. Please try again.");break;case"auth/invalid-email":l("Please enter a valid email address.");break;case"auth/invalid-credential":l("Invalid email or password. Please try again.");break;case"auth/too-many-requests":l("Access to this account has been temporarily disabled due to many failed login attempts.");break;default:l("An unexpected error occurred. Please try again.");break}}finally{e(!1)}},children:[Q("input",{type:"email",placeholder:"Enter email",value:t,onChange:f=>r(f.target.value),required:!0}),Q("input",{type:"password",placeholder:"Enter password",value:i,onChange:f=>s(f.target.value),required:!0}),Q("button",{type:"submit",disabled:n,children:n?"Logging in...":"Login"})]})]})]})};function zR({sensor:n,measurement:e,unit:t}){let r="border-green";return e>=1&&e<=500?r="border-red":e>=501&&e<=1200?r="border-yellow":e>=1201&&e<=1600?r="border-green":r="border-red",Q("div",{className:`sensor-card ${r}`,children:[Q("span",{className:"sensor-label",children:n}),Q("div",{className:"sensor-data",children:[Q("span",{className:"sensor-value",children:e}),e<=1600&&Q("span",{className:"sensor-unit",children:t}),e>=1601&&Q("span",{className:"sensor-unit",children:"Warning pressure is too high ⚠️"}),e<=0&&Q("span",{className:"sensor-unit",children:"No pressure detected ❌"})]})]})}function jh({heading:n,sensors:e}){return Q("div",{className:"dashboard-section",children:[Q("h2",{className:"dashboard-heading",children:n}),Q("div",{className:"dashboard-grid",children:e.map((t,r)=>Q(zR,{...t},r))})]})}function qR(n){let e=[];try{typeof n=="string"?e=JSON.parse(n):Array.isArray(n)?e=n:n!=null&&(e=[n])}catch(t){return console.error("Failed to parse sensors JSON:",t,n),[]}return e.map(t=>({sensor:t.Sensor??t.sensor??"",measurement:Number(t.Measurement??t.measurement??0),unit:t.Unit??t.unit??"",category:t.Category??t.category??""}))}function WR(){const[n,e]=Be([]),[t,r]=Be([]),[i,s]=Be("");return mt(()=>{const a=SR(jR,"sensors","latestData"),l=xR(a,u=>{if(!u.exists()){s("No Firestore data found.");return}const h=u.data().data;if(!h||typeof h!="string"){s("Invalid Firestore data format.");return}const f=JSON.parse(h),p=qR(f.sensors),g=p.filter(S=>S.category==="Header"),v=p.filter(S=>S.category==="Separator");e(g),r(v),s("")},u=>{console.error("❌ Firestore snapshot error:",u),s("Failed to fetch data.")});return()=>l()},[]),Q("div",{className:"dashboard",children:[i&&Q("p",{className:"error",children:i}),Q(jh,{heading:"Header Sensors",sensors:n}),Q(jh,{heading:"Separator Sensors",sensors:t})]})}const Hh=({goTo:n})=>{const e=Ao();return Q("div",{className:"error-container",children:Q("div",{className:"error-card",children:[Q("div",{className:"error-icon-wrapper",children:Q("span",{className:"error-icon-text",children:"⚠️"})}),Q("h1",{className:"error-title",children:"Invalid URL"}),Q("p",{className:"error-message",children:"You have entered a wrong URL. Please go back to previous page."}),Q("button",{onClick:()=>{e(n)},className:"error-button",children:"Go Back"})]})})},KR=()=>{const n=a=>{const l=String(a.getDate()).padStart(2,"0"),u=String(a.getMonth()+1).padStart(2,"0"),h=a.getFullYear();return`${l}-${u}-${h}`},e=a=>a.toLocaleTimeString("en-IN",{hour12:!0}),[t,r]=Be(n(new Date)),[i,s]=Be(e(new Date));return mt(()=>{const a=setInterval(()=>{const l=new Date;r(n(l)),s(e(l))},1e3);return()=>clearInterval(a)},[]),Q("footer",{className:"footer",children:[Q("div",{className:"footer-left",children:["© DEVELOPED BY IOTELLIGENCE SOFTWARE SOLUTIONS |"," ",Q("a",{className:"footer-link",href:"tel:+919158151405",children:"+91 9158151405"})," ","| 2025"]}),Q("div",{className:"footer-right",children:[Q("span",{children:t}),Q("span",{children:i})]})]})},GR=()=>{const[n,e]=Be(null),[t,r]=Be(!0);return mt(()=>{const i=yf(Ki,s=>{e(s),r(!1)});return()=>i()},[]),{user:n,loading:t}},QR=({children:n})=>{const{user:e,loading:t}=GR();return t?Q("div",{children:"Loading..."}):e?n||Q(t_,{}):Q(e_,{to:"/login",replace:!0})},YR=3e3*1e3,JR=()=>{const n=xr(null),e=xr(null),t=()=>{n.current!==null&&clearTimeout(n.current),e.current&&(n.current=setTimeout(()=>{console.log("⏳ User inactive for 1 minute. Logging out..."),RE(Ki).catch(r=>console.error("Logout error:",r))},YR))};return mt(()=>{const r=yf(Ki,i=>{e.current=i,i?(t(),document.addEventListener("mousemove",t),document.addEventListener("keypress",t),document.addEventListener("touchstart",t),document.addEventListener("click",t)):(n.current!==null&&clearTimeout(n.current),document.removeEventListener("mousemove",t),document.removeEventListener("keypress",t),document.removeEventListener("touchstart",t),document.removeEventListener("click",t))});return()=>{r(),n.current!==null&&clearTimeout(n.current),document.removeEventListener("mousemove",t),document.removeEventListener("keypress",t),document.removeEventListener("touchstart",t),document.removeEventListener("click",t)}},[]),null},XR=()=>{JR();const n=A_([{path:"/",element:Q(QR,{children:Q(WR,{})}),errorElement:Q(Hh,{goTo:"/"})},{path:"/login",element:Q(HR,{}),errorElement:Q(Hh,{goTo:"/login"})}]);return Q("div",{className:"layout",children:[Q("header",{children:Q(U_,{})}),Q("main",{className:"content",children:Q(x_,{router:n})}),Q("footer",{children:Q(KR,{})})]})};om(Q(XR,{}),document.getElementById("app"));
