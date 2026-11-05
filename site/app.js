/*! The Long Way Home V3. Includes three.js (MIT License). */
(()=>{var zd="169";var xg=0,jf=1,yg=2;var yp=1,Od=2,ws=3,Fi=0,mn=1,At=2,Bn=0,go=1,_n=2,Qf=3,e0=4,Fd=5,Oi=100,vg=101,_g=102,Mg=103,Eg=104,Ho=200,bg=201,wg=202,Sg=203,mu=204,gu=205,Uc=206,Tg=207,Nc=208,Rg=209,Ag=210,Cg=211,Pg=212,Ig=213,Dg=214,xu=0,yu=1,vu=2,_o=3,_u=4,Mu=5,Eu=6,bu=7,vp=0,Lg=1,Ug=2,js=0,Bd=1,kd=2,Vd=3,Ha=4,Ng=5,Gd=6,Wd=7,t0="attached",Hg="detached",_p=300,Mo=301,Eo=302,wu=303,Su=304,Hc=306,Ln=1e3,$s=1001,Tu=1002,ti=1003,zg=1004;var pl=1005;var Zi=1006,Ih=1007;var Ts=1008;var $i=1009,Mp=1010,Ep=1011,Ea=1012,Xd=1013,wr=1014,as=1015,ci=1016,qd=1017,Yd=1018,er=1020,bp=35902,wp=1021,Sp=1022,_i=1023,Tp=1024,Rp=1025,xo=1026,tr=1027,Ap=1028,Zd=1029,Cp=1030,Jd=1031;var Kd=1033,Zl=33776,Jl=33777,Kl=33778,$l=33779,Ru=35840,Au=35841,Cu=35842,Pu=35843,Iu=36196,Du=37492,Lu=37496,Uu=37808,Nu=37809,Hu=37810,zu=37811,Ou=37812,Fu=37813,Bu=37814,ku=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,jl=36492,Zu=36494,Ju=36495,Pp=36283,Ku=36284,$u=36285,ju=36286;var ec=2300,Qu=2301,Dh=2302,n0=2400,i0=2401,s0=2402;var Og=3200,Fg=3201;var $d=0,Bg=1,Js="",Lt="srgb",sr="srgb-linear",jd="display-p3",zc="display-p3-linear",tc="linear",pn="srgb",nc="rec709",ic="p3";var Jr=7680;var r0=519,kg=512,Vg=513,Gg=514,Ip=515,Wg=516,Xg=517,qg=518,Yg=519,ed=35044;var o0="300 es",Rs=2e3,sc=2001,nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a0=1234567,xa=Math.PI/180,ba=180/Math.PI;function Ki(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ai[i&255]+ai[i>>8&255]+ai[i>>16&255]+ai[i>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[t&63|128]+ai[t>>8&255]+"-"+ai[t>>16&255]+ai[t>>24&255]+ai[n&255]+ai[n>>8&255]+ai[n>>16&255]+ai[n>>24&255]).toLowerCase()}function Jn(i,e,t){return Math.max(e,Math.min(t,i))}function Qd(i,e){return(i%e+e)%e}function Zg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jg(i,e,t){return i!==e?(t-i)/(e-i):0}function ya(i,e,t){return(1-t)*i+t*e}function Kg(i,e,t,n){return ya(i,e,1-Math.exp(-t*n))}function $g(i,e=1){return e-Math.abs(Qd(i,e*2)-e)}function jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ex(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tx(i,e){return i+Math.random()*(e-i)}function nx(i){return i*(.5-Math.random())}function ix(i){i!==void 0&&(a0=i);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sx(i){return i*xa}function rx(i){return i*ba}function ox(i){return(i&i-1)===0&&i!==0}function ax(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function rn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var hn={DEG2RAD:xa,RAD2DEG:ba,generateUUID:Ki,clamp:Jn,euclideanModulo:Qd,mapLinear:Zg,inverseLerp:Jg,lerp:ya,damp:Kg,pingpong:$g,smoothstep:jg,smootherstep:Qg,randInt:ex,randFloat:tx,randFloatSpread:nx,seededRandom:ix,degToRad:sx,radToDeg:rx,isPowerOfTwo:ox,ceilPowerOfTwo:ax,floorPowerOfTwo:lx,setQuaternionFromProperEuler:cx,normalize:rn,denormalize:Ji},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],_=s[1],x=s[4],M=s[7],T=s[2],P=s[5],R=s[8];return r[0]=o*v+a*_+l*T,r[3]=o*m+a*x+l*P,r[6]=o*p+a*M+l*R,r[1]=c*v+u*_+h*T,r[4]=c*m+u*x+h*P,r[7]=c*p+u*M+h*R,r[2]=d*v+f*_+g*T,r[5]=d*m+f*x+g*P,r[8]=d*p+f*M+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lh=new Dt;function Dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hx(){let i=rc("canvas");return i.style.display="block",i}var l0={};function Ql(i){i in l0||(l0[i]=!0,console.warn(i))}function ux(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function dx(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fx(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var c0=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),h0=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[sr]:{transfer:tc,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Lt]:{transfer:pn,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zc]:{transfer:tc,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(h0),fromReference:i=>i.applyMatrix3(c0)},[jd]:{transfer:pn,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(h0),fromReference:i=>i.applyMatrix3(c0).convertLinearToSRGB()}},px=new Set([sr,zc]),Kt={enabled:!0,_workingColorSpace:sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!px.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=oa[e].toReference,s=oa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return oa[i].primaries},getTransfer:function(i){return i===Js?tc:oa[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(oa[e].luminanceCoefficients)}};function yo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Uh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kr,td=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=rc("canvas")),Kr.width=e.width,Kr.height=e.height;let n=Kr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rc("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yo(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yo(t[n]/255)*255):t[n]=yo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mx=0,oc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gx=0,Mi=class i extends nr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$s,s=$s,r=Zi,o=Ts,a=_i,l=$i,c=i.DEFAULT_ANISOTROPY,u=Js){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ki(),this.name="",this.source=new oc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case $s:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case $s:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=_p;Mi.DEFAULT_ANISOTROPY=1;var jt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(f+1)/2,T=(p+1)/2,P=(u+d)/4,R=(h+v)/4,U=(g+m)/4;return x>M&&x>T?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=P/n,r=R/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=P/s,r=U/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=U/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-v)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nd=class extends nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ac=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var id=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=$s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),P=Math.atan2(T,p*_);m=Math.sin(m*P)/T,a=Math.sin(a*P)/T}let M=a*_;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+v*M,m===1-a){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(u0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(u0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Jn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new b,u0=new bn,Bi=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xi):Xi.fromBufferAttribute(r,o),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ml.copy(n.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),gl.subVectors(this.max,aa),$r.subVectors(e.a,aa),jr.subVectors(e.b,aa),Qr.subVectors(e.c,aa),Gs.subVectors(jr,$r),Ws.subVectors(Qr,jr),dr.subVectors($r,Qr);let t=[0,-Gs.z,Gs.y,0,-Ws.z,Ws.y,0,-dr.z,dr.y,Gs.z,0,-Gs.x,Ws.z,0,-Ws.x,dr.z,0,-dr.x,-Gs.y,Gs.x,0,-Ws.y,Ws.x,0,-dr.y,dr.x,0];return!zh(t,$r,jr,Qr,gl)||(t=[1,0,0,0,1,0,0,0,1],!zh(t,$r,jr,Qr,gl))?!1:(xl.crossVectors(Gs,Ws),t=[xl.x,xl.y,xl.z],zh(t,$r,jr,Qr,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vs=[new b,new b,new b,new b,new b,new b,new b,new b],Xi=new b,ml=new Bi,$r=new b,jr=new b,Qr=new b,Gs=new b,Ws=new b,dr=new b,aa=new b,gl=new b,xl=new b,fr=new b;function zh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fr.fromArray(i,r);let a=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=n.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var xx=new Bi,la=new b,Oh=new b,ki=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);let t=la.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Oh)),this.expandByPoint(la.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},_s=new b,Fh=new b,yl=new b,Xs=new b,Bh=new b,vl=new b,kh=new b,Sr=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_s)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_s.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_s.copy(this.origin).addScaledVector(this.direction,t),_s.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fh.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),Xs.copy(this.origin).sub(Fh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(yl),a=Xs.dot(this.direction),l=-Xs.dot(yl),c=Xs.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fh).addScaledVector(yl,d),f}intersectSphere(e,t){_s.subVectors(e.center,this.origin);let n=_s.dot(this.direction),s=_s.dot(_s)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_s)!==null}intersectTriangle(e,t,n,s,r){Bh.subVectors(t,e),vl.subVectors(n,e),kh.crossVectors(Bh,vl);let o=this.direction.dot(kh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xs.subVectors(this.origin,e);let l=a*this.direction.dot(vl.crossVectors(Xs,vl));if(l<0)return null;let c=a*this.direction.dot(Bh.cross(Xs));if(c<0||l+c>o)return null;let u=-a*Xs.dot(kh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/eo.setFromMatrixColumn(e,0).length(),r=1/eo.setFromMatrixColumn(e,1).length(),o=1/eo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yx,e,vx)}lookAt(e,t,n){let s=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),qs.crossVectors(n,Ci),qs.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),qs.crossVectors(n,Ci)),qs.normalize(),_l.crossVectors(Ci,qs),s[0]=qs.x,s[4]=_l.x,s[8]=Ci.x,s[1]=qs.y,s[5]=_l.y,s[9]=Ci.y,s[2]=qs.z,s[6]=_l.z,s[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],M=n[11],T=n[15],P=s[0],R=s[4],U=s[8],Y=s[12],y=s[1],A=s[5],q=s[9],J=s[13],K=s[2],pe=s[6],j=s[10],he=s[14],re=s[3],ye=s[7],Ie=s[11],Te=s[15];return r[0]=o*P+a*y+l*K+c*re,r[4]=o*R+a*A+l*pe+c*ye,r[8]=o*U+a*q+l*j+c*Ie,r[12]=o*Y+a*J+l*he+c*Te,r[1]=u*P+h*y+d*K+f*re,r[5]=u*R+h*A+d*pe+f*ye,r[9]=u*U+h*q+d*j+f*Ie,r[13]=u*Y+h*J+d*he+f*Te,r[2]=g*P+v*y+m*K+p*re,r[6]=g*R+v*A+m*pe+p*ye,r[10]=g*U+v*q+m*j+p*Ie,r[14]=g*Y+v*J+m*he+p*Te,r[3]=_*P+x*y+M*K+T*re,r[7]=_*R+x*A+M*pe+T*ye,r[11]=_*U+x*q+M*j+T*Ie,r[15]=_*Y+x*J+M*he+T*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,M=u*v*c-g*h*c+g*a*f-o*v*f-u*a*p+o*h*p,T=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,P=t*_+n*x+s*M+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/P;return e[0]=_*R,e[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*R,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*R,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=x*R,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=M*R,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*p-t*h*p)*R,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*R,e[12]=T*R,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,_=l*c,x=l*u,M=l*h,T=n.x,P=n.y,R=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+M)*T,s[2]=(g-x)*T,s[3]=0,s[4]=(f-M)*P,s[5]=(1-(d+p))*P,s[6]=(m+_)*P,s[7]=0,s[8]=(g+x)*R,s[9]=(m-_)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=eo.set(s[0],s[1],s[2]).length(),o=eo.set(s[4],s[5],s[6]).length(),a=eo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qi.copy(this);let c=1/r,u=1/o,h=1/a;return qi.elements[0]*=c,qi.elements[1]*=c,qi.elements[2]*=c,qi.elements[4]*=u,qi.elements[5]*=u,qi.elements[6]*=u,qi.elements[8]*=h,qi.elements[9]*=h,qi.elements[10]*=h,t.setFromRotationMatrix(qi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Rs){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===Rs)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Rs){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,v;if(a===Rs)g=(o+r)*h,v=-2*h;else if(a===sc)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},eo=new b,qi=new pt,yx=new b(0,0,0),vx=new b(1,1,1),qs=new b,_l=new b,Ci=new b,d0=new pt,f0=new bn,Vt=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Jn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return d0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vt.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_x=0,p0=new b,to=new bn,Ms=new pt,Ml=new b,ca=new b,Mx=new b,Ex=new bn,m0=new b(1,0,0),g0=new b(0,1,0),x0=new b(0,0,1),y0={type:"added"},bx={type:"removed"},no={type:"childadded",child:null},Vh={type:"childremoved",child:null},Ut=class i extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new b,t=new Vt,n=new bn,s=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new Dt}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.multiply(to),this}rotateOnWorldAxis(e,t){return to.setFromAxisAngle(e,t),this.quaternion.premultiply(to),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(x0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(x0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ml.copy(e):Ml.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(ca,Ml,this.up):Ms.lookAt(Ml,ca,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),to.setFromRotationMatrix(Ms),this.quaternion.premultiply(to.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y0),no.child=e,this.dispatchEvent(no),no.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bx),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y0),no.child=e,this.dispatchEvent(no),no.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,Mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,Ex,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new b(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Yi=new b,Es=new b,Gh=new b,bs=new b,io=new b,so=new b,v0=new b,Wh=new b,Xh=new b,qh=new b,Yh=new jt,Zh=new jt,Jh=new jt,Ks=class i{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yi.subVectors(e,t),s.cross(Yi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yi.subVectors(s,t),Es.subVectors(n,t),Gh.subVectors(e,t);let o=Yi.dot(Yi),a=Yi.dot(Es),l=Yi.dot(Gh),c=Es.dot(Es),u=Es.dot(Gh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(o,bs.y),l.addScaledVector(a,bs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Yh.setScalar(0),Zh.setScalar(0),Jh.setScalar(0),Yh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yh,r.x),o.addScaledVector(Zh,r.y),o.addScaledVector(Jh,r.z),o}static isFrontFacing(e,t,n,s){return Yi.subVectors(n,t),Es.subVectors(e,t),Yi.cross(Es).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Yi.cross(Es).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;io.subVectors(s,n),so.subVectors(r,n),Wh.subVectors(e,n);let l=io.dot(Wh),c=so.dot(Wh);if(l<=0&&c<=0)return t.copy(n);Xh.subVectors(e,s);let u=io.dot(Xh),h=so.dot(Xh);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(io,o);qh.subVectors(e,r);let f=io.dot(qh),g=so.dot(qh);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(so,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return v0.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(v0,a);let p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(io,o).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},El={h:0,s:0,l:0};function Kh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Kt.workingColorSpace){if(e=Qd(e,1),t=Jn(t,0,1),n=Jn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kh(o,r,e+1/3),this.g=Kh(o,r,e),this.b=Kh(o,r,e-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yo(e.r),this.g=yo(e.g),this.b=yo(e.b),this}copyLinearToSRGB(e){return this.r=Uh(e.r),this.g=Uh(e.g),this.b=Uh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Kt.fromWorkingColorSpace(li.copy(this),e),Math.round(Jn(li.r*255,0,255))*65536+Math.round(Jn(li.g*255,0,255))*256+Math.round(Jn(li.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.fromWorkingColorSpace(li.copy(this),t);let n=li.r,s=li.g,r=li.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(li.copy(this),t),e.r=li.r,e.g=li.g,e.b=li.b,e}getStyle(e=Lt){Kt.fromWorkingColorSpace(li.copy(this),e);let t=li.r,n=li.g,s=li.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(El);let n=ya(Ys.h,El.h,t),s=ya(Ys.s,El.s,t),r=ya(Ys.l,El.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new xe;xe.NAMES=Lp;var wx=0,ji=class extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=go,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mu&&(n.blendSrc=this.blendSrc),this.blendDst!==gu&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yt=class extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new b,bl=new we,on=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ed,this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ed&&(e.usage=this.usage),e}};var bo=class extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lc=class extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sx=0,zi=new pt,$h=new Ut,ro=new b,Pi=new Bi,ha=new Bi,Zn=new b,Xt=class i extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?lc:bo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Zn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Zn),Zn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Zn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let n=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ha.setFromBufferAttribute(a),this.morphTargetsRelative?(Zn.addVectors(Pi.min,ha.min),Pi.expandByPoint(Zn),Zn.addVectors(Pi.max,ha.max),Pi.expandByPoint(Zn)):(Pi.expandByPoint(ha.min),Pi.expandByPoint(ha.max))}Pi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Zn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Zn.fromBufferAttribute(a,c),l&&(ro.fromBufferAttribute(e,c),Zn.add(ro)),s=Math.max(s,n.distanceToSquared(Zn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new b,l[U]=new b;let c=new b,u=new b,h=new b,d=new we,f=new we,g=new we,v=new b,m=new b;function p(U,Y,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[U].add(v),a[Y].add(v),a[y].add(v),l[U].add(m),l[Y].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let U=0,Y=_.length;U<Y;++U){let y=_[U],A=y.start,q=y.count;for(let J=A,K=A+q;J<K;J+=3)p(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let x=new b,M=new b,T=new b,P=new b;function R(U){T.fromBufferAttribute(s,U),P.copy(T);let Y=a[U];x.copy(Y),x.sub(T.multiplyScalar(T.dot(Y))).normalize(),M.crossVectors(P,Y);let A=M.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,A)}for(let U=0,Y=_.length;U<Y;++U){let y=_[U],A=y.start,q=y.count;for(let J=A,K=A+q;J<K;J+=3)R(e.getX(J+0)),R(e.getX(J+1)),R(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,u=new b,h=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zn.fromBufferAttribute(e,t),Zn.normalize(),e.setXYZ(t,Zn.x,Zn.y,Zn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new on(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_0=new pt,pr=new Sr,wl=new ki,M0=new b,Sl=new b,Tl=new b,Rl=new b,jh=new b,Al=new b,E0=new b,Cl=new b,De=class extends Ut{constructor(e=new Xt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Al.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(jh.fromBufferAttribute(h,e),o?Al.addScaledVector(jh,u):Al.addScaledVector(jh.sub(t),u))}t.add(Al)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(r),pr.copy(e.ray).recast(e.near),!(wl.containsPoint(pr.origin)===!1&&(pr.intersectSphere(wl,M0)===null||pr.origin.distanceToSquared(M0)>(e.far-e.near)**2))&&(_0.copy(r).invert(),pr.copy(e.ray).applyMatrix4(_0),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,T=x;M<T;M+=3){let P=a.getX(M),R=a.getX(M+1),U=a.getX(M+2);s=Pl(this,p,e,n,c,u,h,P,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);s=Pl(this,o,e,n,c,u,h,_,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,T=x;M<T;M+=3){let P=M,R=M+1,U=M+2;s=Pl(this,p,e,n,c,u,h,P,R,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let _=m,x=m+1,M=m+2;s=Pl(this,o,e,n,c,u,h,_,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Tx(i,e,t,n,s,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:i}}function Pl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Sl),i.getVertexPosition(l,Tl),i.getVertexPosition(c,Rl);let u=Tx(i,e,t,n,Sl,Tl,Rl,E0);if(u){let h=new b;Ks.getBarycoord(E0,Sl,Tl,Rl,h),s&&(u.uv=Ks.getInterpolatedAttribute(s,a,l,c,h,new we)),r&&(u.uv1=Ks.getInterpolatedAttribute(r,a,l,c,h,new we)),o&&(u.normal=Ks.getInterpolatedAttribute(o,a,l,c,h,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new b,materialIndex:0};Ks.getNormal(Sl,Tl,Rl,d.normal),u.face=d,u.barycoord=h}return u}var Ct=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(h,2));function g(v,m,p,_,x,M,T,P,R,U,Y){let y=M/R,A=T/U,q=M/2,J=T/2,K=P/2,pe=R+1,j=U+1,he=0,re=0,ye=new b;for(let Ie=0;Ie<j;Ie++){let Te=Ie*A-J;for(let Ve=0;Ve<pe;Ve++){let lt=Ve*y-q;ye[v]=lt*_,ye[m]=Te*x,ye[p]=K,c.push(ye.x,ye.y,ye.z),ye[v]=0,ye[m]=0,ye[p]=P>0?1:-1,u.push(ye.x,ye.y,ye.z),h.push(Ve/R),h.push(1-Ie/U),he+=1}}for(let Ie=0;Ie<U;Ie++)for(let Te=0;Te<R;Te++){let Ve=d+Te+pe*Ie,lt=d+Te+pe*(Ie+1),le=d+(Te+1)+pe*(Ie+1),Me=d+(Te+1)+pe*Ie;l.push(Ve,lt,Me),l.push(lt,le,Me),re+=6}a.addGroup(f,re,Y),f+=re,d+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function wo(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function di(i){let e={};for(let t=0;t<i.length;t++){let n=wo(i[t]);for(let s in n)e[s]=n[s]}return e}function Rx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Up(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Kt.workingColorSpace}var Si={clone:wo,merge:di},Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},cc=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Rs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zs=new b,b0=new we,w0=new we,ei=class extends cc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z),Zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zs.x,Zs.y).multiplyScalar(-e/Zs.z)}getViewSize(e,t){return this.getViewBounds(e,b0,w0),t.subVectors(w0,b0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},oo=-90,ao=1,sd=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ei(oo,ao,e,t);s.layers=this.layers,this.add(s);let r=new ei(oo,ao,e,t);r.layers=this.layers,this.add(r);let o=new ei(oo,ao,e,t);o.layers=this.layers,this.add(o);let a=new ei(oo,ao,e,t);a.layers=this.layers,this.add(a);let l=new ei(oo,ao,e,t);l.layers=this.layers,this.add(l);let c=new ei(oo,ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Rs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hc=class extends Mi{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Mo,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rd=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ct(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Bn});r.uniforms.tEquirect.value=t;let o=new De(s,r),a=t.minFilter;return t.minFilter===Ts&&(t.minFilter=Zi),new sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Qh=new b,Px=new b,Ix=new Dt,Ss=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qh.subVectors(n,t).cross(Px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ix.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new ki,Il=new b,Sa=class{constructor(e=new Ss,t=new Ss,n=new Ss,s=new Ss,r=new Ss,o=new Ss){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rs){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],x=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-f,M-p).normalize(),n[1].setComponents(l+r,d+c,m+f,M+p).normalize(),n[2].setComponents(l+o,d+u,m+g,M+_).normalize(),n[3].setComponents(l-o,d-u,m-g,M-_).normalize(),n[4].setComponents(l-a,d-h,m-v,M-x).normalize(),t===Rs)n[5].setComponents(l+a,d+h,m+v,M+x).normalize();else if(t===sc)n[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Il.x=s.normal.x>0?e.max.x:e.min.x,Il.y=s.normal.y>0?e.max.y:e.min.y,Il.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Np(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dx(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mt=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let _=p*d-o;for(let x=0;x<c;x++){let M=x*h-r;g.push(M,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){let x=_+c*p,M=_+c*(p+1),T=_+1+c*(p+1),P=_+1+c*p;f.push(x,M,P),f.push(M,T,P)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,n1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,s1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,S1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,I1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_y=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,My=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ey=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ty=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ry=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,By=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ky=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$y=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ev=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,It={alphahash_fragment:Lx,alphahash_pars_fragment:Ux,alphamap_fragment:Nx,alphamap_pars_fragment:Hx,alphatest_fragment:zx,alphatest_pars_fragment:Ox,aomap_fragment:Fx,aomap_pars_fragment:Bx,batching_pars_vertex:kx,batching_vertex:Vx,begin_vertex:Gx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:qx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:Zx,clipping_planes_pars_fragment:Jx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:$x,color_fragment:jx,color_pars_fragment:Qx,color_pars_vertex:e1,color_vertex:t1,common:n1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:s1,displacementmap_pars_vertex:r1,displacementmap_vertex:o1,emissivemap_fragment:a1,emissivemap_pars_fragment:l1,colorspace_fragment:c1,colorspace_pars_fragment:h1,envmap_fragment:u1,envmap_common_pars_fragment:d1,envmap_pars_fragment:f1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:S1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:x1,fog_fragment:y1,fog_pars_fragment:v1,gradientmap_pars_fragment:_1,lightmap_pars_fragment:M1,lights_lambert_fragment:E1,lights_lambert_pars_fragment:b1,lights_pars_begin:w1,lights_toon_fragment:T1,lights_toon_pars_fragment:R1,lights_phong_fragment:A1,lights_phong_pars_fragment:C1,lights_physical_fragment:P1,lights_physical_pars_fragment:I1,lights_fragment_begin:D1,lights_fragment_maps:L1,lights_fragment_end:U1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:z1,logdepthbuf_vertex:O1,map_fragment:F1,map_pars_fragment:B1,map_particle_fragment:k1,map_particle_pars_fragment:V1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:W1,morphinstance_vertex:X1,morphcolor_vertex:q1,morphnormal_vertex:Y1,morphtarget_pars_vertex:Z1,morphtarget_vertex:J1,normal_fragment_begin:K1,normal_fragment_maps:$1,normal_pars_fragment:j1,normal_pars_vertex:Q1,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:sy,iridescence_pars_fragment:ry,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:hy,dithering_pars_fragment:uy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:xy,skinbase_vertex:yy,skinning_pars_vertex:vy,skinning_vertex:_y,skinnormal_vertex:My,specularmap_fragment:Ey,specularmap_pars_fragment:by,tonemapping_fragment:wy,tonemapping_pars_fragment:Sy,transmission_fragment:Ty,transmission_pars_fragment:Ry,uv_pars_fragment:Ay,uv_pars_vertex:Cy,uv_vertex:Py,worldpos_vertex:Iy,background_vert:Dy,background_frag:Ly,backgroundCube_vert:Uy,backgroundCube_frag:Ny,cube_vert:Hy,cube_frag:zy,depth_vert:Oy,depth_frag:Fy,distanceRGBA_vert:By,distanceRGBA_frag:ky,equirect_vert:Vy,equirect_frag:Gy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:Zy,meshlambert_frag:Jy,meshmatcap_vert:Ky,meshmatcap_frag:$y,meshnormal_vert:jy,meshnormal_frag:Qy,meshphong_vert:ev,meshphong_frag:tv,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:sv,meshtoon_frag:rv,points_vert:ov,points_frag:av,shadow_vert:lv,shadow_frag:cv,sprite_vert:hv,sprite_frag:uv},et={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},os={basic:{uniforms:di([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:di([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new xe(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:di([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:di([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:di([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new xe(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:di([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:di([et.points,et.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:di([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:di([et.common,et.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:di([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:di([et.sprite,et.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:di([et.common,et.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:di([et.lights,et.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};os.physical={uniforms:di([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};var Dl={r:0,b:0,g:0},gr=new Vt,dv=new pt;function fv(i,e,t,n,s,r,o){let a=new xe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x}function v(_){let x=!1,M=g(_);M===null?p(a,l):M&&M.isColor&&(p(M,1),x=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,x){let M=g(x);M&&(M.isCubeTexture||M.mapping===Hc)?(u===void 0&&(u=new De(new Ct(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:wo(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),gr.copy(x.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(gr)),u.material.toneMapped=Kt.getTransfer(M.colorSpace)!==pn,(h!==M||d!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new De(new mt(2,2),new qt({name:"BackgroundMaterial",uniforms:wo(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(M.colorSpace)!==pn,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,x){_.getRGB(Dl,Up(i)),n.buffers.color.setClear(Dl.r,Dl.g,Dl.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:m}}function pv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,A,q,J,K){let pe=!1,j=h(J,q,A);r!==j&&(r=j,c(r.object)),pe=f(y,J,q,K),pe&&g(y,J,q,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(pe||o)&&(o=!1,M(y,A,q,J),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,A,q){let J=q.wireframe===!0,K=n[y.id];K===void 0&&(K={},n[y.id]=K);let pe=K[A.id];pe===void 0&&(pe={},K[A.id]=pe);let j=pe[J];return j===void 0&&(j=d(l()),pe[J]=j),j}function d(y){let A=[],q=[],J=[];for(let K=0;K<t;K++)A[K]=0,q[K]=0,J[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:q,attributeDivisors:J,object:y,attributes:{},index:null}}function f(y,A,q,J){let K=r.attributes,pe=A.attributes,j=0,he=q.getAttributes();for(let re in he)if(he[re].location>=0){let Ie=K[re],Te=pe[re];if(Te===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor)),Ie===void 0||Ie.attribute!==Te||Te&&Ie.data!==Te.data)return!0;j++}return r.attributesNum!==j||r.index!==J}function g(y,A,q,J){let K={},pe=A.attributes,j=0,he=q.getAttributes();for(let re in he)if(he[re].location>=0){let Ie=pe[re];Ie===void 0&&(re==="instanceMatrix"&&y.instanceMatrix&&(Ie=y.instanceMatrix),re==="instanceColor"&&y.instanceColor&&(Ie=y.instanceColor));let Te={};Te.attribute=Ie,Ie&&Ie.data&&(Te.data=Ie.data),K[re]=Te,j++}r.attributes=K,r.attributesNum=j,r.index=J}function v(){let y=r.newAttributes;for(let A=0,q=y.length;A<q;A++)y[A]=0}function m(y){p(y,0)}function p(y,A){let q=r.newAttributes,J=r.enabledAttributes,K=r.attributeDivisors;q[y]=1,J[y]===0&&(i.enableVertexAttribArray(y),J[y]=1),K[y]!==A&&(i.vertexAttribDivisor(y,A),K[y]=A)}function _(){let y=r.newAttributes,A=r.enabledAttributes;for(let q=0,J=A.length;q<J;q++)A[q]!==y[q]&&(i.disableVertexAttribArray(q),A[q]=0)}function x(y,A,q,J,K,pe,j){j===!0?i.vertexAttribIPointer(y,A,q,K,pe):i.vertexAttribPointer(y,A,q,J,K,pe)}function M(y,A,q,J){v();let K=J.attributes,pe=q.getAttributes(),j=A.defaultAttributeValues;for(let he in pe){let re=pe[he];if(re.location>=0){let ye=K[he];if(ye===void 0&&(he==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),he==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ye!==void 0){let Ie=ye.normalized,Te=ye.itemSize,Ve=e.get(ye);if(Ve===void 0)continue;let lt=Ve.buffer,le=Ve.type,Me=Ve.bytesPerElement,_e=le===i.INT||le===i.UNSIGNED_INT||ye.gpuType===Xd;if(ye.isInterleavedBufferAttribute){let Ae=ye.data,Ue=Ae.stride,Pe=ye.offset;if(Ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<re.locationSize;Fe++)p(re.location+Fe,Ae.meshPerAttribute);y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Fe=0;Fe<re.locationSize;Fe++)m(re.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Fe=0;Fe<re.locationSize;Fe++)x(re.location+Fe,Te/re.locationSize,le,Ie,Ue*Me,(Pe+Te/re.locationSize*Fe)*Me,_e)}else{if(ye.isInstancedBufferAttribute){for(let Ae=0;Ae<re.locationSize;Ae++)p(re.location+Ae,ye.meshPerAttribute);y.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ae=0;Ae<re.locationSize;Ae++)m(re.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Ae=0;Ae<re.locationSize;Ae++)x(re.location+Ae,Te/re.locationSize,le,Ie,Te*Me,Te/re.locationSize*Ae*Me,_e)}}else if(j!==void 0){let Ie=j[he];if(Ie!==void 0)switch(Ie.length){case 2:i.vertexAttrib2fv(re.location,Ie);break;case 3:i.vertexAttrib3fv(re.location,Ie);break;case 4:i.vertexAttrib4fv(re.location,Ie);break;default:i.vertexAttrib1fv(re.location,Ie)}}}}_()}function T(){U();for(let y in n){let A=n[y];for(let q in A){let J=A[q];for(let K in J)u(J[K].object),delete J[K];delete A[q]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let q in A){let J=A[q];for(let K in J)u(J[K].object),delete J[K];delete A[q]}delete n[y.id]}function R(y){for(let A in n){let q=n[A];if(q[y.id]===void 0)continue;let J=q[y.id];for(let K in J)u(J[K].object),delete J[K];delete q[y.id]}}function U(){Y(),o=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:Y,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function mv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==_i&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let U=R===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==$i&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==as&&!U)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:T,maxSamples:P}}function xv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ss,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let _=r?0:n,x=_*4,M=p.clippingState||null;l.value=M,M=u(g,d,x,f);for(let T=0;T!==x;++T)M[T]=t[T];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==v;++x,M+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function yv(i){let e=new WeakMap;function t(o,a){return a===wu?o.mapping=Mo:a===Su&&(o.mapping=Eo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wu||a===Su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rd(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var So=class extends cc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},po=4,S0=[.125,.215,.35,.446,.526,.582],br=20,eu=new So,T0=new xe,tu=null,nu=0,iu=0,su=!1,Er=(1+Math.sqrt(5))/2,lo=1/Er,R0=[new b(-Er,lo,0),new b(Er,lo,0),new b(-lo,0,Er),new b(lo,0,Er),new b(0,Er,-lo),new b(0,Er,lo),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],To=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=su,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mo||e.mapping===Eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:ci,format:_i,colorSpace:sr,depthBuffer:!1},s=A0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(r)),this._blurMaterial=_v(r,e,t)}return s}_compileMaterial(e){let t=new De(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,n,s){let a=new ei(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(T0),u.toneMapping=js,u.autoClear=!1;let f=new yt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new De(new Ct,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(T0),v=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Ll(s,_*x,p>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Mo||e.mapping===Eo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new De(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ll(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,eu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=R0[(s-r-1)%R0.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new De(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*br-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):br;m>br&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);let p=[],_=0;for(let R=0;R<br;++R){let U=R/v,Y=Math.exp(-U*U/2);p.push(Y),R===0?_+=Y:R<m&&(_+=2*Y)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let M=this._sizeLods[s],T=3*M*(s>x-po?s-x+po:0),P=4*(this._cubeSize-M);Ll(t,T,P,3*M,2*M),l.setRenderTarget(t),l.render(h,eu)}};function vv(i){let e=[],t=[],n=[],s=i,r=i-po+1+S0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-po?l=S0[o-i+po-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let P=0;P<f;P++){let R=P%3*2/3-1,U=P>2?0:-1,Y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];_.set(Y,v*g*P),x.set(d,m*g*P);let y=[P,P,P,P,P,P];M.set(y,p*g*P)}let T=new Xt;T.setAttribute("position",new on(_,v)),T.setAttribute("uv",new on(x,m)),T.setAttribute("faceIndex",new on(M,p)),e.push(T),s>po&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function A0(i,e,t){let n=new Un(i,e,t);return n.texture.mapping=Hc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ll(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _v(i,e,t){let n=new Float32Array(br),s=new b(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function C0(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function P0(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ef(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wu||l===Su,u=l===Mo||l===Eo;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new To(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new To(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ev(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ql("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bv(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,v=0;if(f!==null){let _=f.array;v=f.version;for(let x=0,M=_.length;x<M;x+=3){let T=_[x+0],P=_[x+1],R=_[x+2];d.push(T,P,P,R,R,T)}}else if(g!==void 0){let _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){let T=x+0,P=x+1,R=x+2;d.push(T,P,P,R,R,T)}}else return;let m=new(Dp(d)?lc:bo)(d,1);m.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_];for(let _=0;_<v.length;_++)t.update(p,n,v[_])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tv(i,e,t){let n=new WeakMap,s=new jt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let Y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let M=a.attributes.position.count*x,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let P=new Float32Array(M*T*4*h),R=new ac(P,M,T,h);R.type=as,R.needsUpdate=!0;let U=x*4;for(let y=0;y<h;y++){let A=m[y],q=p[y],J=_[y],K=M*T*4*y;for(let pe=0;pe<A.count;pe++){let j=pe*U;f===!0&&(s.fromBufferAttribute(A,pe),P[K+j+0]=s.x,P[K+j+1]=s.y,P[K+j+2]=s.z,P[K+j+3]=0),g===!0&&(s.fromBufferAttribute(q,pe),P[K+j+4]=s.x,P[K+j+5]=s.y,P[K+j+6]=s.z,P[K+j+7]=0),v===!0&&(s.fromBufferAttribute(J,pe),P[K+j+8]=s.x,P[K+j+9]=s.y,P[K+j+10]=s.z,P[K+j+11]=J.itemSize===4?s.w:1)}}d={count:h,texture:R,size:new we(M,T)},n.set(a,d),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ro=class extends Mi{constructor(e,t,n,s,r,o,a,l,c,u=xo){if(u!==xo&&u!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xo&&(n=wr),n===void 0&&u===tr&&(n=er),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hp=new Mi,I0=new Ro(1,1),zp=new ac,Op=new id,Fp=new hc,D0=[],L0=[],U0=new Float32Array(16),N0=new Float32Array(9),H0=new Float32Array(4);function zo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=D0[s];if(r===void 0&&(r=new Float32Array(s),D0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function kn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oc(i,e){let t=L0[e];t===void 0&&(t=new Int32Array(e),L0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;i.uniform2fv(this.addr,e),Vn(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;i.uniform3fv(this.addr,e),Vn(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;i.uniform4fv(this.addr,e),Vn(t,e)}}function Dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;H0.set(n),i.uniformMatrix2fv(this.addr,!1,H0),Vn(t,n)}}function Lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;N0.set(n),i.uniformMatrix3fv(this.addr,!1,N0),Vn(t,n)}}function Uv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;U0.set(n),i.uniformMatrix4fv(this.addr,!1,U0),Vn(t,n)}}function Nv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;i.uniform2iv(this.addr,e),Vn(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;i.uniform3iv(this.addr,e),Vn(t,e)}}function Ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;i.uniform4iv(this.addr,e),Vn(t,e)}}function Fv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;i.uniform2uiv(this.addr,e),Vn(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;i.uniform3uiv(this.addr,e),Vn(t,e)}}function Vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;i.uniform4uiv(this.addr,e),Vn(t,e)}}function Gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(I0.compareFunction=Ip,r=I0):r=Hp,t.setTexture2D(e||r,s)}function Wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Op,s)}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fp,s)}function qv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zp,s)}function Yv(i){switch(i){case 5126:return Av;case 35664:return Cv;case 35665:return Pv;case 35666:return Iv;case 35674:return Dv;case 35675:return Lv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Hv;case 35668:case 35672:return zv;case 35669:case 35673:return Ov;case 5125:return Fv;case 36294:return Bv;case 36295:return kv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}function Zv(i,e){i.uniform1fv(this.addr,e)}function Jv(i,e){let t=zo(e,this.size,2);i.uniform2fv(this.addr,t)}function Kv(i,e){let t=zo(e,this.size,3);i.uniform3fv(this.addr,t)}function $v(i,e){let t=zo(e,this.size,4);i.uniform4fv(this.addr,t)}function jv(i,e){let t=zo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qv(i,e){let t=zo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function e_(i,e){let t=zo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function t_(i,e){i.uniform1iv(this.addr,e)}function n_(i,e){i.uniform2iv(this.addr,e)}function i_(i,e){i.uniform3iv(this.addr,e)}function s_(i,e){i.uniform4iv(this.addr,e)}function r_(i,e){i.uniform1uiv(this.addr,e)}function o_(i,e){i.uniform2uiv(this.addr,e)}function a_(i,e){i.uniform3uiv(this.addr,e)}function l_(i,e){i.uniform4uiv(this.addr,e)}function c_(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hp,r[o])}function h_(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Op,r[o])}function u_(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fp,r[o])}function d_(i,e,t){let n=this.cache,s=e.length,r=Oc(t,s);kn(n,r)||(i.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function f_(i){switch(i){case 5126:return Zv;case 35664:return Jv;case 35665:return Kv;case 35666:return $v;case 35674:return jv;case 35675:return Qv;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return o_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}var od=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}},ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f_(t.type)}},ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ru=/(\w+)(\])?(\[|\.)?/g;function z0(i,e){i.seq.push(e),i.map[e.id]=e}function p_(i,e,t){let n=i.name,s=n.length;for(ru.lastIndex=0;;){let r=ru.exec(n),o=ru.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){z0(t,c===void 0?new od(a,i,e):new ad(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ld(a),z0(t,h)),t=h}}}var vo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);p_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function O0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var m_=37297,g_=0;function x_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function y_(i){let e=Kt.getPrimaries(Kt.workingColorSpace),t=Kt.getPrimaries(i),n;switch(e===t?n="":e===ic&&t===nc?n="LinearDisplayP3ToLinearSRGB":e===nc&&t===ic&&(n="LinearSRGBToLinearDisplayP3"),i){case sr:case zc:return[n,"LinearTransferOETF"];case Lt:case jd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function F0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+x_(i.getShaderSource(e),o)}else return s}function v_(i,e){let t=y_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function __(i,e){let t;switch(e){case Bd:t="Linear";break;case kd:t="Reinhard";break;case Vd:t="Cineon";break;case Ha:t="ACESFilmic";break;case Gd:t="AgX";break;case Wd:t="Neutral";break;case Ng:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ul=new b;function M_(){Kt.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function b_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function w_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ga(i){return i!==""}function B0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(i){return i.replace(S_,R_)}var T_=new Map;function R_(i,e){let t=It[e];if(t===void 0){let n=T_.get(e);if(n!==void 0)t=It[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}var A_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(i){return i.replace(A_,C_)}function C_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function G0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ws&&(e="SHADOWMAP_TYPE_VSM"),e}function I_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Mo:case Eo:e="ENVMAP_TYPE_CUBE";break;case Hc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Eo:e="ENVMAP_MODE_REFRACTION";break}return e}function L_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vp:e="ENVMAP_BLENDING_MULTIPLY";break;case Lg:e="ENVMAP_BLENDING_MIX";break;case Ug:e="ENVMAP_BLENDING_ADD";break}return e}function U_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=P_(t),c=I_(t),u=D_(t),h=L_(t),d=U_(t),f=E_(t),g=b_(r),v=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ga).join(`
`),p.length>0&&(p+=`
`)):(m=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),p=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==js?"#define TONE_MAPPING":"",t.toneMapping!==js?It.tonemapping_pars_fragment:"",t.toneMapping!==js?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=cd(o),o=B0(o,t),o=k0(o,t),a=cd(a),a=B0(a,t),a=k0(a,t),o=V0(o),a=V0(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===o0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=_+m+o,M=_+p+a,T=O0(s,s.VERTEX_SHADER,x),P=O0(s,s.FRAGMENT_SHADER,M);s.attachShader(v,T),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(A){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(v).trim(),J=s.getShaderInfoLog(T).trim(),K=s.getShaderInfoLog(P).trim(),pe=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,P);else{let he=F0(s,T,"vertex"),re=F0(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+q+`
`+he+`
`+re)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(J===""||K==="")&&(j=!1);j&&(A.diagnostics={runnable:pe,programLog:q,vertexShader:{log:J,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(T),s.deleteShader(P),U=new vo(s,v),Y=w_(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let Y;this.getAttributes=function(){return Y===void 0&&R(this),Y};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,m_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=P,this}var H_=0,hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ud(e),t.set(e,n)),n}},ud=class{constructor(e){this.id=H_++,this.code=e,this.usedTimes=0}};function z_(i,e,t,n,s,r,o){let a=new wa,l=new hd,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,A,q,J,K){let pe=J.fog,j=K.geometry,he=y.isMeshStandardMaterial?J.environment:null,re=(y.isMeshStandardMaterial?t:e).get(y.envMap||he),ye=re&&re.mapping===Hc?re.image.height:null,Ie=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let Te=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ve=Te!==void 0?Te.length:0,lt=0;j.morphAttributes.position!==void 0&&(lt=1),j.morphAttributes.normal!==void 0&&(lt=2),j.morphAttributes.color!==void 0&&(lt=3);let le,Me,_e,Ae;if(Ie){let N=os[Ie];le=N.vertexShader,Me=N.fragmentShader}else le=y.vertexShader,Me=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),Ae=l.getFragmentShaderID(y);let Ue=i.getRenderTarget(),Pe=K.isInstancedMesh===!0,Fe=K.isBatchedMesh===!0,Ke=!!y.map,B=!!y.matcap,C=!!re,Q=!!y.aoMap,G=!!y.lightMap,se=!!y.bumpMap,ce=!!y.normalMap,ue=!!y.displacementMap,k=!!y.emissiveMap,w=!!y.metalnessMap,E=!!y.roughnessMap,O=y.anisotropy>0,ne=y.clearcoat>0,F=y.dispersion>0,fe=y.iridescence>0,Oe=y.sheen>0,be=y.transmission>0,X=O&&!!y.anisotropyMap,S=ne&&!!y.clearcoatMap,ae=ne&&!!y.clearcoatNormalMap,Ce=ne&&!!y.clearcoatRoughnessMap,Xe=fe&&!!y.iridescenceMap,je=fe&&!!y.iridescenceThicknessMap,ke=Oe&&!!y.sheenColorMap,ie=Oe&&!!y.sheenRoughnessMap,ct=!!y.specularMap,Et=!!y.specularColorMap,V=!!y.specularIntensityMap,Ye=be&&!!y.transmissionMap,me=be&&!!y.thicknessMap,Re=!!y.gradientMap,qe=!!y.alphaMap,$e=y.alphaTest>0,Mt=!!y.alphaHash,Wt=!!y.extensions,fn=js;y.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(fn=i.toneMapping);let ee={shaderID:Ie,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:Me,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&K._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&K.instanceColor!==null,instancingMorph:Pe&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:sr,alphaToCoverage:!!y.alphaToCoverage,map:Ke,matcap:B,envMap:C,envMapMode:C&&re.mapping,envMapCubeUVHeight:ye,aoMap:Q,lightMap:G,bumpMap:se,normalMap:ce,displacementMap:f&&ue,emissiveMap:k,normalMapObjectSpace:ce&&y.normalMapType===Bg,normalMapTangentSpace:ce&&y.normalMapType===$d,metalnessMap:w,roughnessMap:E,anisotropy:O,anisotropyMap:X,clearcoat:ne,clearcoatMap:S,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ce,dispersion:F,iridescence:fe,iridescenceMap:Xe,iridescenceThicknessMap:je,sheen:Oe,sheenColorMap:ke,sheenRoughnessMap:ie,specularMap:ct,specularColorMap:Et,specularIntensityMap:V,transmission:be,transmissionMap:Ye,thicknessMap:me,gradientMap:Re,opaque:y.transparent===!1&&y.blending===go&&y.alphaToCoverage===!1,alphaMap:qe,alphaTest:$e,alphaHash:Mt,combine:y.combine,mapUv:Ke&&m(y.map.channel),aoMapUv:Q&&m(y.aoMap.channel),lightMapUv:G&&m(y.lightMap.channel),bumpMapUv:se&&m(y.bumpMap.channel),normalMapUv:ce&&m(y.normalMap.channel),displacementMapUv:ue&&m(y.displacementMap.channel),emissiveMapUv:k&&m(y.emissiveMap.channel),metalnessMapUv:w&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:X&&m(y.anisotropyMap.channel),clearcoatMapUv:S&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:je&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ie&&m(y.sheenRoughnessMap.channel),specularMapUv:ct&&m(y.specularMap.channel),specularColorMapUv:Et&&m(y.specularColorMap.channel),specularIntensityMapUv:V&&m(y.specularIntensityMap.channel),transmissionMapUv:Ye&&m(y.transmissionMap.channel),thicknessMapUv:me&&m(y.thicknessMap.channel),alphaMapUv:qe&&m(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ce||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(Ke||qe),fog:!!pe,useFog:y.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:lt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:fn,decodeVideoTexture:Ke&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===pn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===At,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Wt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&y.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function _(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let q in y.defines)A.push(q),A.push(y.defines[q]);return y.isRawShaderMaterial===!1&&(x(A,y),M(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),y.push(a.mask)}function T(y){let A=v[y.type],q;if(A){let J=os[A];q=Si.clone(J.uniforms)}else q=y.uniforms;return q}function P(y,A){let q;for(let J=0,K=u.length;J<K;J++){let pe=u[J];if(pe.cacheKey===A){q=pe,++q.usedTimes;break}}return q===void 0&&(q=new N_(i,A,y,r),u.push(q)),q}function R(y){if(--y.usedTimes===0){let A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function U(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:T,acquireProgram:P,releaseProgram:R,releaseShaderCache:U,programs:u,dispose:Y}}function O_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function F_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function W0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function X0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||F_),n.length>1&&n.sort(d||W0),s.length>1&&s.sort(d||W0)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function B_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new X0,i.set(n,[o])):s>=r.length?(o=new X0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function k_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new xe};break;case"SpotLight":t={position:new b,direction:new b,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new b,halfWidth:new b,halfHeight:new b};break}return i[e.id]=t,t}}}function V_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var G_=0;function W_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function X_(i){let e=new k_,t=V_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);let s=new b,r=new pt,o=new pt;function a(c){let u=0,h=0,d=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,x=0,M=0,T=0,P=0,R=0;c.sort(W_);for(let Y=0,y=c.length;Y<y;Y++){let A=c[Y],q=A.color,J=A.intensity,K=A.distance,pe=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=q.r*J,h+=q.g*J,d+=q.b*J;else if(A.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(A.sh.coefficients[j],J);R++}else if(A.isDirectionalLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let he=A.shadow,re=t.get(A);re.shadowIntensity=he.intensity,re.shadowBias=he.bias,re.shadowNormalBias=he.normalBias,re.shadowRadius=he.radius,re.shadowMapSize=he.mapSize,n.directionalShadow[f]=re,n.directionalShadowMap[f]=pe,n.directionalShadowMatrix[f]=A.shadow.matrix,_++}n.directional[f]=j,f++}else if(A.isSpotLight){let j=e.get(A);j.position.setFromMatrixPosition(A.matrixWorld),j.color.copy(q).multiplyScalar(J),j.distance=K,j.coneCos=Math.cos(A.angle),j.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),j.decay=A.decay,n.spot[v]=j;let he=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,he.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[v]=he.matrix,A.castShadow){let re=t.get(A);re.shadowIntensity=he.intensity,re.shadowBias=he.bias,re.shadowNormalBias=he.normalBias,re.shadowRadius=he.radius,re.shadowMapSize=he.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=pe,M++}v++}else if(A.isRectAreaLight){let j=e.get(A);j.color.copy(q).multiplyScalar(J),j.halfWidth.set(A.width*.5,0,0),j.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=j,m++}else if(A.isPointLight){let j=e.get(A);if(j.color.copy(A.color).multiplyScalar(A.intensity),j.distance=A.distance,j.decay=A.decay,A.castShadow){let he=A.shadow,re=t.get(A);re.shadowIntensity=he.intensity,re.shadowBias=he.bias,re.shadowNormalBias=he.normalBias,re.shadowRadius=he.radius,re.shadowMapSize=he.mapSize,re.shadowCameraNear=he.camera.near,re.shadowCameraFar=he.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=pe,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=j,g++}else if(A.isHemisphereLight){let j=e.get(A);j.skyColor.copy(A.color).multiplyScalar(J),j.groundColor.copy(A.groundColor).multiplyScalar(J),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==_||U.numPointShadows!==x||U.numSpotShadows!==M||U.numSpotMaps!==T||U.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+T-P,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,U.directionalLength=f,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=_,U.numPointShadows=x,U.numSpotShadows=M,U.numSpotMaps=T,U.numLightProbes=R,n.version=G_++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){let x=c[p];if(x.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(x.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function q0(i){let e=new X_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function q_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new q0(i),e.set(s,[a])):r>=o.length?(a=new q0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var dd=class extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fd=class extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J_(i,e,t){let n=new Sa,s=new we,r=new we,o=new jt,a=new dd({depthPacking:Fg}),l=new fd,c={},u=t.maxTextureSize,h={[Fi]:mn,[mn]:Fi,[At]:At},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Y_,fragmentShader:Z_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Xt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let p=this.type;this.render=function(P,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let Y=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Bn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let J=p!==ws&&this.type===ws,K=p===ws&&this.type!==ws;for(let pe=0,j=P.length;pe<j;pe++){let he=P[pe],re=he.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let ye=re.getFrameExtents();if(s.multiply(ye),r.copy(re.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ye.x),s.x=r.x*ye.x,re.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ye.y),s.y=r.y*ye.y,re.mapSize.y=r.y)),re.map===null||J===!0||K===!0){let Te=this.type!==ws?{minFilter:ti,magFilter:ti}:{};re.map!==null&&re.map.dispose(),re.map=new Un(s.x,s.y,Te),re.map.texture.name=he.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();let Ie=re.getViewportCount();for(let Te=0;Te<Ie;Te++){let Ve=re.getViewport(Te);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),q.viewport(o),re.updateMatrices(he,Te),n=re.getFrustum(),M(R,U,re.camera,he,this.type)}re.isPointLightShadow!==!0&&this.type===ws&&_(re,U),re.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(Y,y,A)};function _(P,R){let U=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,U,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,U,f,v,null)}function x(P,R,U,Y){let y=null,A=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)y=A;else if(y=U.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let q=y.uuid,J=R.uuid,K=c[q];K===void 0&&(K={},c[q]=K);let pe=K[J];pe===void 0&&(pe=y.clone(),K[J]=pe,R.addEventListener("dispose",T)),y=pe}if(y.visible=R.visible,y.wireframe=R.wireframe,Y===ws?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let q=i.properties.get(y);q.light=U}return y}function M(P,R,U,Y,y){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===ws)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let J=e.update(P),K=P.material;if(Array.isArray(K)){let pe=J.groups;for(let j=0,he=pe.length;j<he;j++){let re=pe[j],ye=K[re.materialIndex];if(ye&&ye.visible){let Ie=x(P,ye,Y,y);P.onBeforeShadow(i,P,R,U,J,Ie,re),i.renderBufferDirect(U,null,J,Ie,P,re),P.onAfterShadow(i,P,R,U,J,Ie,re)}}}else if(K.visible){let pe=x(P,K,Y,y);P.onBeforeShadow(i,P,R,U,J,pe,null),i.renderBufferDirect(U,null,J,pe,P,null),P.onAfterShadow(i,P,R,U,J,pe,null)}}let q=P.children;for(let J=0,K=q.length;J<K;J++)M(q[J],R,U,Y,y)}function T(P){P.target.removeEventListener("dispose",T);for(let U in c){let Y=c[U],y=P.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}var K_={[xu]:yu,[vu]:Eu,[_u]:bu,[_o]:Mu,[yu]:xu,[Eu]:vu,[bu]:_u,[Mu]:_o};function $_(i){function e(){let V=!1,Ye=new jt,me=null,Re=new jt(0,0,0,0);return{setMask:function(qe){me!==qe&&!V&&(i.colorMask(qe,qe,qe,qe),me=qe)},setLocked:function(qe){V=qe},setClear:function(qe,$e,Mt,Wt,fn){fn===!0&&(qe*=Wt,$e*=Wt,Mt*=Wt),Ye.set(qe,$e,Mt,Wt),Re.equals(Ye)===!1&&(i.clearColor(qe,$e,Mt,Wt),Re.copy(Ye))},reset:function(){V=!1,me=null,Re.set(-1,0,0,0)}}}function t(){let V=!1,Ye=!1,me=null,Re=null,qe=null;return{setReversed:function($e){Ye=$e},setTest:function($e){$e?_e(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function($e){me!==$e&&!V&&(i.depthMask($e),me=$e)},setFunc:function($e){if(Ye&&($e=K_[$e]),Re!==$e){switch($e){case xu:i.depthFunc(i.NEVER);break;case yu:i.depthFunc(i.ALWAYS);break;case vu:i.depthFunc(i.LESS);break;case _o:i.depthFunc(i.LEQUAL);break;case _u:i.depthFunc(i.EQUAL);break;case Mu:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case bu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=$e}},setLocked:function($e){V=$e},setClear:function($e){qe!==$e&&(i.clearDepth($e),qe=$e)},reset:function(){V=!1,me=null,Re=null,qe=null}}}function n(){let V=!1,Ye=null,me=null,Re=null,qe=null,$e=null,Mt=null,Wt=null,fn=null;return{setTest:function(ee){V||(ee?_e(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(ee){Ye!==ee&&!V&&(i.stencilMask(ee),Ye=ee)},setFunc:function(ee,N,de){(me!==ee||Re!==N||qe!==de)&&(i.stencilFunc(ee,N,de),me=ee,Re=N,qe=de)},setOp:function(ee,N,de){($e!==ee||Mt!==N||Wt!==de)&&(i.stencilOp(ee,N,de),$e=ee,Mt=N,Wt=de)},setLocked:function(ee){V=ee},setClear:function(ee){fn!==ee&&(i.clearStencil(ee),fn=ee)},reset:function(){V=!1,Ye=null,me=null,Re=null,qe=null,$e=null,Mt=null,Wt=null,fn=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,x=null,M=null,T=null,P=new xe(0,0,0),R=0,U=!1,Y=null,y=null,A=null,q=null,J=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),pe=!1,j=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(he)[1]),pe=j>=1):he.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),pe=j>=2);let re=null,ye={},Ie=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Ve=new jt().fromArray(Ie),lt=new jt().fromArray(Te);function le(V,Ye,me,Re){let qe=new Uint8Array(4),$e=i.createTexture();i.bindTexture(V,$e),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<me;Mt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(Ye,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,qe):i.texImage2D(Ye+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,qe);return $e}let Me={};Me[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),r.setFunc(_o),G(!1),se(jf),_e(i.CULL_FACE),C(Bn);function _e(V){c[V]!==!0&&(i.enable(V),c[V]=!0)}function Ae(V){c[V]!==!1&&(i.disable(V),c[V]=!1)}function Ue(V,Ye){return u[V]!==Ye?(i.bindFramebuffer(V,Ye),u[V]=Ye,V===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ye),V===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ye),!0):!1}function Pe(V,Ye){let me=d,Re=!1;if(V){me=h.get(Ye),me===void 0&&(me=[],h.set(Ye,me));let qe=V.textures;if(me.length!==qe.length||me[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,Mt=qe.length;$e<Mt;$e++)me[$e]=i.COLOR_ATTACHMENT0+$e;me.length=qe.length,Re=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Re=!0);Re&&i.drawBuffers(me)}function Fe(V){return f!==V?(i.useProgram(V),f=V,!0):!1}let Ke={[Oi]:i.FUNC_ADD,[vg]:i.FUNC_SUBTRACT,[_g]:i.FUNC_REVERSE_SUBTRACT};Ke[Mg]=i.MIN,Ke[Eg]=i.MAX;let B={[Ho]:i.ZERO,[bg]:i.ONE,[wg]:i.SRC_COLOR,[mu]:i.SRC_ALPHA,[Ag]:i.SRC_ALPHA_SATURATE,[Nc]:i.DST_COLOR,[Uc]:i.DST_ALPHA,[Sg]:i.ONE_MINUS_SRC_COLOR,[gu]:i.ONE_MINUS_SRC_ALPHA,[Rg]:i.ONE_MINUS_DST_COLOR,[Tg]:i.ONE_MINUS_DST_ALPHA,[Cg]:i.CONSTANT_COLOR,[Pg]:i.ONE_MINUS_CONSTANT_COLOR,[Ig]:i.CONSTANT_ALPHA,[Dg]:i.ONE_MINUS_CONSTANT_ALPHA};function C(V,Ye,me,Re,qe,$e,Mt,Wt,fn,ee){if(V===Bn){g===!0&&(Ae(i.BLEND),g=!1);return}if(g===!1&&(_e(i.BLEND),g=!0),V!==Fd){if(V!==v||ee!==U){if((m!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),m=Oi,x=Oi),ee)switch(V){case go:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.ONE,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case e0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _n:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case e0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,_=null,M=null,T=null,P.set(0,0,0),R=0,v=V,U=ee}return}qe=qe||Ye,$e=$e||me,Mt=Mt||Re,(Ye!==m||qe!==x)&&(i.blendEquationSeparate(Ke[Ye],Ke[qe]),m=Ye,x=qe),(me!==p||Re!==_||$e!==M||Mt!==T)&&(i.blendFuncSeparate(B[me],B[Re],B[$e],B[Mt]),p=me,_=Re,M=$e,T=Mt),(Wt.equals(P)===!1||fn!==R)&&(i.blendColor(Wt.r,Wt.g,Wt.b,fn),P.copy(Wt),R=fn),v=V,U=!1}function Q(V,Ye){V.side===At?Ae(i.CULL_FACE):_e(i.CULL_FACE);let me=V.side===mn;Ye&&(me=!me),G(me),V.blending===go&&V.transparent===!1?C(Bn):C(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),r.setFunc(V.depthFunc),r.setTest(V.depthTest),r.setMask(V.depthWrite),s.setMask(V.colorWrite);let Re=V.stencilWrite;o.setTest(Re),Re&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ue(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function G(V){Y!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),Y=V)}function se(V){V!==xg?(_e(i.CULL_FACE),V!==y&&(V===jf?i.cullFace(i.BACK):V===yg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),y=V}function ce(V){V!==A&&(pe&&i.lineWidth(V),A=V)}function ue(V,Ye,me){V?(_e(i.POLYGON_OFFSET_FILL),(q!==Ye||J!==me)&&(i.polygonOffset(Ye,me),q=Ye,J=me)):Ae(i.POLYGON_OFFSET_FILL)}function k(V){V?_e(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function w(V){V===void 0&&(V=i.TEXTURE0+K-1),re!==V&&(i.activeTexture(V),re=V)}function E(V,Ye,me){me===void 0&&(re===null?me=i.TEXTURE0+K-1:me=re);let Re=ye[me];Re===void 0&&(Re={type:void 0,texture:void 0},ye[me]=Re),(Re.type!==V||Re.texture!==Ye)&&(re!==me&&(i.activeTexture(me),re=me),i.bindTexture(V,Ye||Me[V]),Re.type=V,Re.texture=Ye)}function O(){let V=ye[re];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function F(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function S(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function je(V){Ve.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Ve.copy(V))}function ke(V){lt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),lt.copy(V))}function ie(V,Ye){let me=l.get(Ye);me===void 0&&(me=new WeakMap,l.set(Ye,me));let Re=me.get(V);Re===void 0&&(Re=i.getUniformBlockIndex(Ye,V.name),me.set(V,Re))}function ct(V,Ye){let Re=l.get(Ye).get(V);a.get(Ye)!==Re&&(i.uniformBlockBinding(Ye,Re,V.__bindingPointIndex),a.set(Ye,Re))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},re=null,ye={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,_=null,x=null,M=null,T=null,P=new xe(0,0,0),R=0,U=!1,Y=null,y=null,A=null,q=null,J=null,Ve.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:_e,disable:Ae,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:Fe,setBlending:C,setMaterial:Q,setFlipSided:G,setCullFace:se,setLineWidth:ce,setPolygonOffset:ue,setScissorTest:k,activeTexture:w,bindTexture:E,unbindTexture:O,compressedTexImage2D:ne,compressedTexImage3D:F,texImage2D:Ce,texImage3D:Xe,updateUBOMapping:ie,uniformBlockBinding:ct,texStorage2D:S,texStorage3D:ae,texSubImage2D:fe,texSubImage3D:Oe,compressedTexSubImage2D:be,compressedTexSubImage3D:X,scissor:je,viewport:ke,reset:Et}}function Y0(i,e,t,n){let s=j_(n);switch(t){case wp:return i*e;case Tp:return i*e;case Rp:return i*e*2;case Ap:return i*e/s.components*s.byteLength;case Zd:return i*e/s.components*s.byteLength;case Cp:return i*e*2/s.components*s.byteLength;case Jd:return i*e*2/s.components*s.byteLength;case Sp:return i*e*3/s.components*s.byteLength;case _i:return i*e*4/s.components*s.byteLength;case Kd:return i*e*4/s.components*s.byteLength;case Zl:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Au:case Pu:return Math.max(i,16)*Math.max(e,8)/4;case Ru:case Cu:return Math.max(i,8)*Math.max(e,8)/2;case Iu:case Du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jl:case Zu:case Ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pp:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $u:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j_(i){switch(i){case $i:case Mp:return{byteLength:1,components:1};case Ea:case Ep:case ci:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case wr:case Xd:case as:return{byteLength:4,components:1};case bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Q_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return f?new OffscreenCanvas(w,E):rc("canvas")}function v(w,E,O){let ne=1,F=k(w);if((F.width>O||F.height>O)&&(ne=O/Math.max(F.width,F.height)),ne<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let fe=Math.floor(ne*F.width),Oe=Math.floor(ne*F.height);h===void 0&&(h=g(fe,Oe));let be=E?g(fe,Oe):h;return be.width=fe,be.height=Oe,be.getContext("2d").drawImage(w,0,0,fe,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+fe+"x"+Oe+")."),be}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==ti&&w.minFilter!==Zi}function p(w){i.generateMipmap(w)}function _(w,E,O,ne,F=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe=E;if(E===i.RED&&(O===i.FLOAT&&(fe=i.R32F),O===i.HALF_FLOAT&&(fe=i.R16F),O===i.UNSIGNED_BYTE&&(fe=i.R8)),E===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(fe=i.R8UI),O===i.UNSIGNED_SHORT&&(fe=i.R16UI),O===i.UNSIGNED_INT&&(fe=i.R32UI),O===i.BYTE&&(fe=i.R8I),O===i.SHORT&&(fe=i.R16I),O===i.INT&&(fe=i.R32I)),E===i.RG&&(O===i.FLOAT&&(fe=i.RG32F),O===i.HALF_FLOAT&&(fe=i.RG16F),O===i.UNSIGNED_BYTE&&(fe=i.RG8)),E===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(fe=i.RG8UI),O===i.UNSIGNED_SHORT&&(fe=i.RG16UI),O===i.UNSIGNED_INT&&(fe=i.RG32UI),O===i.BYTE&&(fe=i.RG8I),O===i.SHORT&&(fe=i.RG16I),O===i.INT&&(fe=i.RG32I)),E===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(fe=i.RGB8UI),O===i.UNSIGNED_SHORT&&(fe=i.RGB16UI),O===i.UNSIGNED_INT&&(fe=i.RGB32UI),O===i.BYTE&&(fe=i.RGB8I),O===i.SHORT&&(fe=i.RGB16I),O===i.INT&&(fe=i.RGB32I)),E===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(fe=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(fe=i.RGBA16UI),O===i.UNSIGNED_INT&&(fe=i.RGBA32UI),O===i.BYTE&&(fe=i.RGBA8I),O===i.SHORT&&(fe=i.RGBA16I),O===i.INT&&(fe=i.RGBA32I)),E===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(fe=i.RGB9_E5),E===i.RGBA){let Oe=F?tc:Kt.getTransfer(ne);O===i.FLOAT&&(fe=i.RGBA32F),O===i.HALF_FLOAT&&(fe=i.RGBA16F),O===i.UNSIGNED_BYTE&&(fe=Oe===pn?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(fe=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(fe=i.RGB5_A1)}return(fe===i.R16F||fe===i.R32F||fe===i.RG16F||fe===i.RG32F||fe===i.RGBA16F||fe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function x(w,E){let O;return w?E===null||E===wr||E===er?O=i.DEPTH24_STENCIL8:E===as?O=i.DEPTH32F_STENCIL8:E===Ea&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===wr||E===er?O=i.DEPTH_COMPONENT24:E===as?O=i.DEPTH_COMPONENT32F:E===Ea&&(O=i.DEPTH_COMPONENT16),O}function M(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ti&&w.minFilter!==Zi?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function T(w){let E=w.target;E.removeEventListener("dispose",T),R(E),E.isVideoTexture&&u.delete(E)}function P(w){let E=w.target;E.removeEventListener("dispose",P),Y(E)}function R(w){let E=n.get(w);if(E.__webglInit===void 0)return;let O=w.source,ne=d.get(O);if(ne){let F=ne[E.__cacheKey];F.usedTimes--,F.usedTimes===0&&U(w),Object.keys(ne).length===0&&d.delete(O)}n.remove(w)}function U(w){let E=n.get(w);i.deleteTexture(E.__webglTexture);let O=w.source,ne=d.get(O);delete ne[E.__cacheKey],o.memory.textures--}function Y(w){let E=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let F=0;F<E.__webglFramebuffer[ne].length;F++)i.deleteFramebuffer(E.__webglFramebuffer[ne][F]);else i.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[ne]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let O=w.textures;for(let ne=0,F=O.length;ne<F;ne++){let fe=n.get(O[ne]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(O[ne])}n.remove(w)}let y=0;function A(){y=0}function q(){let w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function J(w){let E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function K(w,E){let O=n.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let ne=w.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(O,w,E);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+E)}function pe(w,E){let O=n.get(w);if(w.version>0&&O.__version!==w.version){lt(O,w,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+E)}function j(w,E){let O=n.get(w);if(w.version>0&&O.__version!==w.version){lt(O,w,E);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+E)}function he(w,E){let O=n.get(w);if(w.version>0&&O.__version!==w.version){le(O,w,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+E)}let re={[Ln]:i.REPEAT,[$s]:i.CLAMP_TO_EDGE,[Tu]:i.MIRRORED_REPEAT},ye={[ti]:i.NEAREST,[zg]:i.NEAREST_MIPMAP_NEAREST,[pl]:i.NEAREST_MIPMAP_LINEAR,[Zi]:i.LINEAR,[Ih]:i.LINEAR_MIPMAP_NEAREST,[Ts]:i.LINEAR_MIPMAP_LINEAR},Ie={[kg]:i.NEVER,[Yg]:i.ALWAYS,[Vg]:i.LESS,[Ip]:i.LEQUAL,[Gg]:i.EQUAL,[qg]:i.GEQUAL,[Wg]:i.GREATER,[Xg]:i.NOTEQUAL};function Te(w,E){if(E.type===as&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zi||E.magFilter===Ih||E.magFilter===pl||E.magFilter===Ts||E.minFilter===Zi||E.minFilter===Ih||E.minFilter===pl||E.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,re[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,re[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,re[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ye[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==pl&&E.minFilter!==Ts||E.type===as&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ve(w,E){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",T));let ne=E.source,F=d.get(ne);F===void 0&&(F={},d.set(ne,F));let fe=J(E);if(fe!==w.__cacheKey){F[fe]===void 0&&(F[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),F[fe].usedTimes++;let Oe=F[w.__cacheKey];Oe!==void 0&&(F[w.__cacheKey].usedTimes--,Oe.usedTimes===0&&U(E)),w.__cacheKey=fe,w.__webglTexture=F[fe].texture}return O}function lt(w,E,O){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);let F=Ve(w,E),fe=E.source;t.bindTexture(ne,w.__webglTexture,i.TEXTURE0+O);let Oe=n.get(fe);if(fe.version!==Oe.__version||F===!0){t.activeTexture(i.TEXTURE0+O);let be=Kt.getPrimaries(Kt.workingColorSpace),X=E.colorSpace===Js?null:Kt.getPrimaries(E.colorSpace),S=E.colorSpace===Js||be===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let ae=v(E.image,!1,s.maxTextureSize);ae=ue(E,ae);let Ce=r.convert(E.format,E.colorSpace),Xe=r.convert(E.type),je=_(E.internalFormat,Ce,Xe,E.colorSpace,E.isVideoTexture);Te(ne,E);let ke,ie=E.mipmaps,ct=E.isVideoTexture!==!0,Et=Oe.__version===void 0||F===!0,V=fe.dataReady,Ye=M(E,ae);if(E.isDepthTexture)je=x(E.format===tr,E.type),Et&&(ct?t.texStorage2D(i.TEXTURE_2D,1,je,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,je,ae.width,ae.height,0,Ce,Xe,null));else if(E.isDataTexture)if(ie.length>0){ct&&Et&&t.texStorage2D(i.TEXTURE_2D,Ye,je,ie[0].width,ie[0].height);for(let me=0,Re=ie.length;me<Re;me++)ke=ie[me],ct?V&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ke.width,ke.height,Ce,Xe,ke.data):t.texImage2D(i.TEXTURE_2D,me,je,ke.width,ke.height,0,Ce,Xe,ke.data);E.generateMipmaps=!1}else ct?(Et&&t.texStorage2D(i.TEXTURE_2D,Ye,je,ae.width,ae.height),V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae.width,ae.height,Ce,Xe,ae.data)):t.texImage2D(i.TEXTURE_2D,0,je,ae.width,ae.height,0,Ce,Xe,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ct&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,je,ie[0].width,ie[0].height,ae.depth);for(let me=0,Re=ie.length;me<Re;me++)if(ke=ie[me],E.format!==_i)if(Ce!==null)if(ct){if(V)if(E.layerUpdates.size>0){let qe=Y0(ke.width,ke.height,E.format,E.type);for(let $e of E.layerUpdates){let Mt=ke.data.subarray($e*qe/ke.data.BYTES_PER_ELEMENT,($e+1)*qe/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,$e,ke.width,ke.height,1,Ce,Mt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ke.width,ke.height,ae.depth,Ce,ke.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,je,ke.width,ke.height,ae.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,ke.width,ke.height,ae.depth,Ce,Xe,ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,je,ke.width,ke.height,ae.depth,0,Ce,Xe,ke.data)}else{ct&&Et&&t.texStorage2D(i.TEXTURE_2D,Ye,je,ie[0].width,ie[0].height);for(let me=0,Re=ie.length;me<Re;me++)ke=ie[me],E.format!==_i?Ce!==null?ct?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,ke.width,ke.height,Ce,ke.data):t.compressedTexImage2D(i.TEXTURE_2D,me,je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?V&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,ke.width,ke.height,Ce,Xe,ke.data):t.texImage2D(i.TEXTURE_2D,me,je,ke.width,ke.height,0,Ce,Xe,ke.data)}else if(E.isDataArrayTexture)if(ct){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ye,je,ae.width,ae.height,ae.depth),V)if(E.layerUpdates.size>0){let me=Y0(ae.width,ae.height,E.format,E.type);for(let Re of E.layerUpdates){let qe=ae.data.subarray(Re*me/ae.data.BYTES_PER_ELEMENT,(Re+1)*me/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Re,ae.width,ae.height,1,Ce,Xe,qe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ce,Xe,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,je,ae.width,ae.height,ae.depth,0,Ce,Xe,ae.data);else if(E.isData3DTexture)ct?(Et&&t.texStorage3D(i.TEXTURE_3D,Ye,je,ae.width,ae.height,ae.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ce,Xe,ae.data)):t.texImage3D(i.TEXTURE_3D,0,je,ae.width,ae.height,ae.depth,0,Ce,Xe,ae.data);else if(E.isFramebufferTexture){if(Et)if(ct)t.texStorage2D(i.TEXTURE_2D,Ye,je,ae.width,ae.height);else{let me=ae.width,Re=ae.height;for(let qe=0;qe<Ye;qe++)t.texImage2D(i.TEXTURE_2D,qe,je,me,Re,0,Ce,Xe,null),me>>=1,Re>>=1}}else if(ie.length>0){if(ct&&Et){let me=k(ie[0]);t.texStorage2D(i.TEXTURE_2D,Ye,je,me.width,me.height)}for(let me=0,Re=ie.length;me<Re;me++)ke=ie[me],ct?V&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ce,Xe,ke):t.texImage2D(i.TEXTURE_2D,me,je,Ce,Xe,ke);E.generateMipmaps=!1}else if(ct){if(Et){let me=k(ae);t.texStorage2D(i.TEXTURE_2D,Ye,je,me.width,me.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Xe,ae)}else t.texImage2D(i.TEXTURE_2D,0,je,Ce,Xe,ae);m(E)&&p(ne),Oe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function le(w,E,O){if(E.image.length!==6)return;let ne=Ve(w,E),F=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let fe=n.get(F);if(F.version!==fe.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);let Oe=Kt.getPrimaries(Kt.workingColorSpace),be=E.colorSpace===Js?null:Kt.getPrimaries(E.colorSpace),X=E.colorSpace===Js||Oe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let S=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let Re=0;Re<6;Re++)!S&&!ae?Ce[Re]=v(E.image[Re],!0,s.maxCubemapSize):Ce[Re]=ae?E.image[Re].image:E.image[Re],Ce[Re]=ue(E,Ce[Re]);let Xe=Ce[0],je=r.convert(E.format,E.colorSpace),ke=r.convert(E.type),ie=_(E.internalFormat,je,ke,E.colorSpace),ct=E.isVideoTexture!==!0,Et=fe.__version===void 0||ne===!0,V=F.dataReady,Ye=M(E,Xe);Te(i.TEXTURE_CUBE_MAP,E);let me;if(S){ct&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ie,Xe.width,Xe.height);for(let Re=0;Re<6;Re++){me=Ce[Re].mipmaps;for(let qe=0;qe<me.length;qe++){let $e=me[qe];E.format!==_i?je!==null?ct?V&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe,0,0,$e.width,$e.height,je,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe,ie,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe,0,0,$e.width,$e.height,je,ke,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe,ie,$e.width,$e.height,0,je,ke,$e.data)}}}else{if(me=E.mipmaps,ct&&Et){me.length>0&&Ye++;let Re=k(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ye,ie,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(ae){ct?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ce[Re].width,Ce[Re].height,je,ke,Ce[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ie,Ce[Re].width,Ce[Re].height,0,je,ke,Ce[Re].data);for(let qe=0;qe<me.length;qe++){let Mt=me[qe].image[Re].image;ct?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe+1,0,0,Mt.width,Mt.height,je,ke,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe+1,ie,Mt.width,Mt.height,0,je,ke,Mt.data)}}else{ct?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,je,ke,Ce[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,ie,je,ke,Ce[Re]);for(let qe=0;qe<me.length;qe++){let $e=me[qe];ct?V&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe+1,0,0,je,ke,$e.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,qe+1,ie,je,ke,$e.image[Re])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),fe.__version=F.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Me(w,E,O,ne,F,fe){let Oe=r.convert(O.format,O.colorSpace),be=r.convert(O.type),X=_(O.internalFormat,Oe,be,O.colorSpace);if(!n.get(E).__hasExternalTextures){let ae=Math.max(1,E.width>>fe),Ce=Math.max(1,E.height>>fe);F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?t.texImage3D(F,fe,X,ae,Ce,E.depth,0,Oe,be,null):t.texImage2D(F,fe,X,ae,Ce,0,Oe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,F,n.get(O).__webglTexture,0,G(E)):(F===i.TEXTURE_2D||F>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,F,n.get(O).__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(w,E,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer){let ne=E.depthTexture,F=ne&&ne.isDepthTexture?ne.type:null,fe=x(E.stencilBuffer,F),Oe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=G(E);se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,fe,E.width,E.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,fe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,fe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,w)}else{let ne=E.textures;for(let F=0;F<ne.length;F++){let fe=ne[F],Oe=r.convert(fe.format,fe.colorSpace),be=r.convert(fe.type),X=_(fe.internalFormat,Oe,be,fe.colorSpace),S=G(E);O&&se(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,S,X,E.width,E.height):se(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,S,X,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,X,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);let ne=n.get(E.depthTexture).__webglTexture,F=G(E);if(E.depthTexture.format===xo)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(E.depthTexture.format===tr)se(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ue(w){let E=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){let ne=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){let F=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",F)};ne.addEventListener("dispose",F),E.__depthDisposeCallback=F}E.__boundDepthTexture=ne}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,w)}else if(O){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=i.createRenderbuffer(),_e(E.__webglDepthbuffer[ne],w,!1);else{let F=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),_e(E.__webglDepthbuffer,w,!1);else{let ne=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,F)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(w,E,O){let ne=n.get(w);E!==void 0&&Me(ne.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ue(w)}function Fe(w){let E=w.texture,O=n.get(w),ne=n.get(E);w.addEventListener("dispose",P);let F=w.textures,fe=w.isWebGLCubeRenderTarget===!0,Oe=F.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,o.memory.textures++),fe){O.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[be]=[];for(let X=0;X<E.mipmaps.length;X++)O.__webglFramebuffer[be][X]=i.createFramebuffer()}else O.__webglFramebuffer[be]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)O.__webglFramebuffer[be]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let be=0,X=F.length;be<X;be++){let S=n.get(F[be]);S.__webglTexture===void 0&&(S.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&se(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let be=0;be<F.length;be++){let X=F[be];O.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[be]);let S=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),Ce=_(X.internalFormat,S,ae,X.colorSpace,w.isXRRenderTarget===!0),Xe=G(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,O.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(i.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)Me(O.__webglFramebuffer[be][X],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,X);else Me(O.__webglFramebuffer[be],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let be=0,X=F.length;be<X;be++){let S=F[be],ae=n.get(S);t.bindTexture(i.TEXTURE_2D,ae.__webglTexture),Te(i.TEXTURE_2D,S),Me(O.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(S)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ne.__webglTexture),Te(be,E),E.mipmaps&&E.mipmaps.length>0)for(let X=0;X<E.mipmaps.length;X++)Me(O.__webglFramebuffer[X],w,E,i.COLOR_ATTACHMENT0,be,X);else Me(O.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,be,0);m(E)&&p(be),t.unbindTexture()}w.depthBuffer&&Ue(w)}function Ke(w){let E=w.textures;for(let O=0,ne=E.length;O<ne;O++){let F=E[O];if(m(F)){let fe=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Oe=n.get(F).__webglTexture;t.bindTexture(fe,Oe),p(fe),t.unbindTexture()}}}let B=[],C=[];function Q(w){if(w.samples>0){if(se(w)===!1){let E=w.textures,O=w.width,ne=w.height,F=i.COLOR_BUFFER_BIT,fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(w),be=E.length>1;if(be)for(let X=0;X<E.length;X++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let X=0;X<E.length;X++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(F|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(F|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[X]);let S=n.get(E[X]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,S,0)}i.blitFramebuffer(0,0,O,ne,0,0,O,ne,F,i.NEAREST),l===!0&&(B.length=0,C.length=0,B.push(i.COLOR_ATTACHMENT0+X),w.depthBuffer&&w.resolveDepthBuffer===!1&&(B.push(fe),C.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let X=0;X<E.length;X++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[X]);let S=n.get(E[X]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,S,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let E=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function G(w){return Math.min(s.maxSamples,w.samples)}function se(w){let E=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(w){let E=o.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function ue(w,E){let O=w.colorSpace,ne=w.format,F=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==sr&&O!==Js&&(Kt.getTransfer(O)===pn?(ne!==_i||F!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function k(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=A,this.setTexture2D=K,this.setTexture2DArray=pe,this.setTexture3D=j,this.setTextureCube=he,this.rebindTextures=Pe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=se}function eM(i,e){function t(n,s=Js){let r,o=Kt.getTransfer(s);if(n===$i)return i.UNSIGNED_BYTE;if(n===qd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return i.BYTE;if(n===Ep)return i.SHORT;if(n===Ea)return i.UNSIGNED_SHORT;if(n===Xd)return i.INT;if(n===wr)return i.UNSIGNED_INT;if(n===as)return i.FLOAT;if(n===ci)return i.HALF_FLOAT;if(n===wp)return i.ALPHA;if(n===Sp)return i.RGB;if(n===_i)return i.RGBA;if(n===Tp)return i.LUMINANCE;if(n===Rp)return i.LUMINANCE_ALPHA;if(n===xo)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Ap)return i.RED;if(n===Zd)return i.RED_INTEGER;if(n===Cp)return i.RG;if(n===Jd)return i.RG_INTEGER;if(n===Kd)return i.RGBA_INTEGER;if(n===Zl||n===Jl||n===Kl||n===$l)if(o===pn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$l)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Au||n===Cu||n===Pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Iu||n===Du||n===Lu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Iu||n===Du)return o===pn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uu||n===Nu||n===Hu||n===zu||n===Ou||n===Fu||n===Bu||n===ku||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===pn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jl||n===Zu||n===Ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jl)return o===pn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pp||n===Ku||n===$u||n===ju)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pd=class extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},tM={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Mi,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:nM,fragmentShader:iM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new De(new mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gd=class extends nr{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,v=new md,m=t.getContextAttributes(),p=null,_=null,x=[],M=[],T=new we,P=null,R=new ei;R.layers.enable(1),R.viewport=new jt;let U=new ei;U.layers.enable(2),U.viewport=new jt;let Y=[R,U],y=new pd;y.layers.enable(1),y.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let Me=x[le];return Me===void 0&&(Me=new va,x[le]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(le){let Me=x[le];return Me===void 0&&(Me=new va,x[le]=Me),Me.getGripSpace()},this.getHand=function(le){let Me=x[le];return Me===void 0&&(Me=new va,x[le]=Me),Me.getHandSpace()};function J(le){let Me=M.indexOf(le.inputSource);if(Me===-1)return;let _e=x[Me];_e!==void 0&&(_e.update(le.inputSource,le.frame,c||o),_e.dispatchEvent({type:le.type,data:le.inputSource}))}function K(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",pe);for(let le=0;le<x.length;le++){let Me=M[le];Me!==null&&(M[le]=null,x[le].disconnect(Me))}A=null,q=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,_=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",K),s.addEventListener("inputsourceschange",pe),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0){let Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Un(f.framebufferWidth,f.framebufferHeight,{format:_i,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Me=null,_e=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?tr:xo,_e=m.stencil?er:wr);let Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Un(d.textureWidth,d.textureHeight,{format:_i,type:$i,depthTexture:new Ro(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function pe(le){for(let Me=0;Me<le.removed.length;Me++){let _e=le.removed[Me],Ae=M.indexOf(_e);Ae>=0&&(M[Ae]=null,x[Ae].disconnect(_e))}for(let Me=0;Me<le.added.length;Me++){let _e=le.added[Me],Ae=M.indexOf(_e);if(Ae===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=M.length){M.push(_e),Ae=Pe;break}else if(M[Pe]===null){M[Pe]=_e,Ae=Pe;break}if(Ae===-1)break}let Ue=x[Ae];Ue&&Ue.connect(_e)}}let j=new b,he=new b;function re(le,Me,_e){j.setFromMatrixPosition(Me.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);let Ae=j.distanceTo(he),Ue=Me.projectionMatrix.elements,Pe=_e.projectionMatrix.elements,Fe=Ue[14]/(Ue[10]-1),Ke=Ue[14]/(Ue[10]+1),B=(Ue[9]+1)/Ue[5],C=(Ue[9]-1)/Ue[5],Q=(Ue[8]-1)/Ue[0],G=(Pe[8]+1)/Pe[0],se=Fe*Q,ce=Fe*G,ue=Ae/(-Q+G),k=ue*-Q;if(Me.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(k),le.translateZ(ue),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ue[10]===-1)le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{let w=Fe+ue,E=Ke+ue,O=se-k,ne=ce+(Ae-k),F=B*Ke/E*w,fe=C*Ke/E*w;le.projectionMatrix.makePerspective(O,ne,F,fe,w,E),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function ye(le,Me){Me===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(Me.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let Me=le.near,_e=le.far;v.texture!==null&&(v.depthNear>0&&(Me=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),y.near=U.near=R.near=Me,y.far=U.far=R.far=_e,(A!==y.near||q!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,q=y.far);let Ae=le.parent,Ue=y.cameras;ye(y,Ae);for(let Pe=0;Pe<Ue.length;Pe++)ye(Ue[Pe],Ae);Ue.length===2?re(y,R,U):y.projectionMatrix.copy(R.projectionMatrix),Ie(le,y,Ae)};function Ie(le,Me,_e){_e===null?le.matrix.copy(Me.matrixWorld):(le.matrix.copy(_e.matrixWorld),le.matrix.invert(),le.matrix.multiply(Me.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(Me.projectionMatrix),le.projectionMatrixInverse.copy(Me.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=ba*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=le)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Te=null;function Ve(le,Me){if(u=Me.getViewerPose(c||o),g=Me,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ae=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,Ae=!0);for(let Pe=0;Pe<_e.length;Pe++){let Fe=_e[Pe],Ke=null;if(f!==null)Ke=f.getViewport(Fe);else{let C=h.getViewSubImage(d,Fe);Ke=C.viewport,Pe===0&&(e.setRenderTargetTextures(_,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(_))}let B=Y[Pe];B===void 0&&(B=new ei,B.layers.enable(Pe),B.viewport=new jt,Y[Pe]=B),B.matrix.fromArray(Fe.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Fe.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Pe===0&&(y.matrix.copy(B.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ae===!0&&y.cameras.push(B)}let Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){let Pe=h.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,s.renderState)}}for(let _e=0;_e<x.length;_e++){let Ae=M[_e],Ue=x[_e];Ae!==null&&Ue!==void 0&&Ue.update(Ae,Me,c||o)}Te&&Te(le,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),g=null}let lt=new Np;lt.setAnimationLoop(Ve),this.setAnimationLoop=function(le){Te=le},this.dispose=function(){}}},xr=new Vt,sM=new pt;function rM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Up(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),x=_.envMap,M=_.envMapRotation;x&&(m.envMap.value=x,xr.copy(M),xr.x*=-1,xr.y*=-1,xr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),m.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(xr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){let M=x.program;n.uniformBlockBinding(_,M)}function c(_,x){let M=s[_.id];M===void 0&&(g(_),M=u(_),s[_.id]=M,_.addEventListener("dispose",m));let T=x.program;n.updateUBOMapping(_,T);let P=e.render.frame;r[_.id]!==P&&(d(_),r[_.id]=P)}function u(_){let x=h();_.__bindingPointIndex=x;let M=i.createBuffer(),T=_.__size,P=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,M),M}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let x=s[_.id],M=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let P=0,R=M.length;P<R;P++){let U=Array.isArray(M[P])?M[P]:[M[P]];for(let Y=0,y=U.length;Y<y;Y++){let A=U[Y];if(f(A,P,Y,T)===!0){let q=A.__offset,J=Array.isArray(A.value)?A.value:[A.value],K=0;for(let pe=0;pe<J.length;pe++){let j=J[pe],he=v(j);typeof j=="number"||typeof j=="boolean"?(A.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,q+K,A.__data)):j.isMatrix3?(A.__data[0]=j.elements[0],A.__data[1]=j.elements[1],A.__data[2]=j.elements[2],A.__data[3]=0,A.__data[4]=j.elements[3],A.__data[5]=j.elements[4],A.__data[6]=j.elements[5],A.__data[7]=0,A.__data[8]=j.elements[6],A.__data[9]=j.elements[7],A.__data[10]=j.elements[8],A.__data[11]=0):(j.toArray(A.__data,K),K+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,x,M,T){let P=_.value,R=x+"_"+M;if(T[R]===void 0)return typeof P=="number"||typeof P=="boolean"?T[R]=P:T[R]=P.clone(),!0;{let U=T[R];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return T[R]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(_){let x=_.uniforms,M=0,T=16;for(let R=0,U=x.length;R<U;R++){let Y=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,A=Y.length;y<A;y++){let q=Y[y],J=Array.isArray(q.value)?q.value:[q.value];for(let K=0,pe=J.length;K<pe;K++){let j=J[K],he=v(j),re=M%T,ye=re%he.boundary,Ie=re+ye;M+=ye,Ie!==0&&T-Ie<he.storage&&(M+=T-Ie),q.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=he.storage}}}let P=M%T;return P>0&&(M+=T-P),_.__size=M,_.__cache={},this}function v(_){let x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){let x=_.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var uc=class{constructor(e={}){let{canvas:t=hx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=js,this.toneMappingExposure=1;let x=this,M=!1,T=0,P=0,R=null,U=-1,Y=null,y=new jt,A=new jt,q=null,J=new xe(0),K=0,pe=t.width,j=t.height,he=1,re=null,ye=null,Ie=new jt(0,0,pe,j),Te=new jt(0,0,pe,j),Ve=!1,lt=new Sa,le=!1,Me=!1,_e=new pt,Ae=new pt,Ue=new b,Pe=new jt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function B(){return R===null?he:1}let C=n;function Q(L,Z){return t.getContext(L,Z)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",Re,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",$e,!1),C===null){let Z="webgl2";if(C=Q(Z,L),C===null)throw Q(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let G,se,ce,ue,k,w,E,O,ne,F,fe,Oe,be,X,S,ae,Ce,Xe,je,ke,ie,ct,Et,V;function Ye(){G=new Ev(C),G.init(),ct=new eM(C,G),se=new gv(C,G,e,ct),ce=new $_(C),se.reverseDepthBuffer&&ce.buffers.depth.setReversed(!0),ue=new Sv(C),k=new O_,w=new Q_(C,G,ce,k,se,ct,ue),E=new yv(x),O=new Mv(x),ne=new Dx(C),Et=new pv(C,ne),F=new bv(C,ne,ue,Et),fe=new Rv(C,F,ne,ue),je=new Tv(C,se,w),ae=new xv(k),Oe=new z_(x,E,O,G,se,Et,ae),be=new rM(x,k),X=new B_,S=new q_(G),Xe=new fv(x,E,O,ce,fe,d,l),Ce=new J_(x,fe,se),V=new oM(C,ue,se,ce),ke=new mv(C,G,ue),ie=new wv(C,G,ue),ue.programs=Oe.programs,x.capabilities=se,x.extensions=G,x.properties=k,x.renderLists=X,x.shadowMap=Ce,x.state=ce,x.info=ue}Ye();let me=new gd(x,C);this.xr=me,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let L=G.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=G.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(pe,j,!1))},this.getSize=function(L){return L.set(pe,j)},this.setSize=function(L,Z,I=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pe=L,j=Z,t.width=Math.floor(L*he),t.height=Math.floor(Z*he),I===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(pe*he,j*he).floor()},this.setDrawingBufferSize=function(L,Z,I){pe=L,j=Z,he=I,t.width=Math.floor(L*I),t.height=Math.floor(Z*I),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(y)},this.getViewport=function(L){return L.copy(Ie)},this.setViewport=function(L,Z,I,z){L.isVector4?Ie.set(L.x,L.y,L.z,L.w):Ie.set(L,Z,I,z),ce.viewport(y.copy(Ie).multiplyScalar(he).round())},this.getScissor=function(L){return L.copy(Te)},this.setScissor=function(L,Z,I,z){L.isVector4?Te.set(L.x,L.y,L.z,L.w):Te.set(L,Z,I,z),ce.scissor(A.copy(Te).multiplyScalar(he).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(L){ce.setScissorTest(Ve=L)},this.setOpaqueSort=function(L){re=L},this.setTransparentSort=function(L){ye=L},this.getClearColor=function(L){return L.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(L=!0,Z=!0,I=!0){let z=0;if(L){let H=!1;if(R!==null){let ge=R.texture.format;H=ge===Kd||ge===Jd||ge===Zd}if(H){let ge=R.texture.type,W=ge===$i||ge===wr||ge===Ea||ge===er||ge===qd||ge===Yd,oe=Xe.getClearColor(),Ge=Xe.getClearAlpha(),at=oe.r,dt=oe.g,Qe=oe.b;W?(f[0]=at,f[1]=dt,f[2]=Qe,f[3]=Ge,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=at,g[1]=dt,g[2]=Qe,g[3]=Ge,C.clearBufferiv(C.COLOR,0,g))}else z|=C.COLOR_BUFFER_BIT}Z&&(z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),I&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Re,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),X.dispose(),S.dispose(),k.dispose(),E.dispose(),O.dispose(),fe.dispose(),Et.dispose(),V.dispose(),Oe.dispose(),me.dispose(),me.removeEventListener("sessionstart",We),me.removeEventListener("sessionend",He),Se.stop()};function Re(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=ue.autoReset,Z=Ce.enabled,I=Ce.autoUpdate,z=Ce.needsUpdate,H=Ce.type;Ye(),ue.autoReset=L,Ce.enabled=Z,Ce.autoUpdate=I,Ce.needsUpdate=z,Ce.type=H}function $e(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Mt(L){let Z=L.target;Z.removeEventListener("dispose",Mt),Wt(Z)}function Wt(L){fn(L),k.remove(L)}function fn(L){let Z=k.get(L).programs;Z!==void 0&&(Z.forEach(function(I){Oe.releaseProgram(I)}),L.isShaderMaterial&&Oe.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,I,z,H,ge){Z===null&&(Z=Fe);let W=H.isMesh&&H.matrixWorld.determinant()<0,oe=Le(L,Z,I,z,H);ce.setMaterial(z,W);let Ge=I.index,at=1;if(z.wireframe===!0){if(Ge=F.getWireframeAttribute(I),Ge===void 0)return;at=2}let dt=I.drawRange,Qe=I.attributes.position,Pt=dt.start*at,Zt=(dt.start+dt.count)*at;ge!==null&&(Pt=Math.max(Pt,ge.start*at),Zt=Math.min(Zt,(ge.start+ge.count)*at)),Ge!==null?(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Ge.count)):Qe!=null&&(Pt=Math.max(Pt,0),Zt=Math.min(Zt,Qe.count));let cn=Zt-Pt;if(cn<0||cn===1/0)return;Et.setup(H,z,oe,I,Ge);let Fn,Jt=ke;if(Ge!==null&&(Fn=ne.get(Ge),Jt=ie,Jt.setIndex(Fn)),H.isMesh)z.wireframe===!0?(ce.setLineWidth(z.wireframeLinewidth*B()),Jt.setMode(C.LINES)):Jt.setMode(C.TRIANGLES);else if(H.isLine){let ft=z.linewidth;ft===void 0&&(ft=1),ce.setLineWidth(ft*B()),H.isLineSegments?Jt.setMode(C.LINES):H.isLineLoop?Jt.setMode(C.LINE_LOOP):Jt.setMode(C.LINE_STRIP)}else H.isPoints?Jt.setMode(C.POINTS):H.isSprite&&Jt.setMode(C.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Jt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))Jt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ft=H._multiDrawStarts,sn=H._multiDrawCounts,$t=H._multiDrawCount,Ri=Ge?ne.get(Ge).bytesPerElement:1,zs=k.get(z).currentProgram.getUniforms();for(let Qn=0;Qn<$t;Qn++)zs.setValue(C,"_gl_DrawID",Qn),Jt.render(ft[Qn]/Ri,sn[Qn])}else if(H.isInstancedMesh)Jt.renderInstances(Pt,cn,H.count);else if(I.isInstancedBufferGeometry){let ft=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,sn=Math.min(I.instanceCount,ft);Jt.renderInstances(Pt,cn,sn)}else Jt.render(Pt,cn)};function ee(L,Z,I){L.transparent===!0&&L.side===At&&L.forceSinglePass===!1?(L.side=mn,L.needsUpdate=!0,Qt(L,Z,I),L.side=Fi,L.needsUpdate=!0,Qt(L,Z,I),L.side=At):Qt(L,Z,I)}this.compile=function(L,Z,I=null){I===null&&(I=L),m=S.get(I),m.init(Z),_.push(m),I.traverseVisible(function(H){H.isLight&&H.layers.test(Z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),L!==I&&L.traverseVisible(function(H){H.isLight&&H.layers.test(Z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();let z=new Set;return L.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ge=H.material;if(ge)if(Array.isArray(ge))for(let W=0;W<ge.length;W++){let oe=ge[W];ee(oe,I,H),z.add(oe)}else ee(ge,I,H),z.add(ge)}),_.pop(),m=null,z},this.compileAsync=function(L,Z,I=null){let z=this.compile(L,Z,I);return new Promise(H=>{function ge(){if(z.forEach(function(W){k.get(W).currentProgram.isReady()&&z.delete(W)}),z.size===0){H(L);return}setTimeout(ge,10)}G.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let N=null;function de(L){N&&N(L)}function We(){Se.stop()}function He(){Se.start()}let Se=new Np;Se.setAnimationLoop(de),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(L){N=L,me.setAnimationLoop(L),L===null?Se.stop():Se.start()},me.addEventListener("sessionstart",We),me.addEventListener("sessionend",He),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(Z),Z=me.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,Z,R),m=S.get(L,_.length),m.init(Z),_.push(m),Ae.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),lt.setFromProjectionMatrix(Ae),Me=this.localClippingEnabled,le=ae.init(this.clippingPlanes,Me),v=X.get(L,p.length),v.init(),p.push(v),me.enabled===!0&&me.isPresenting===!0){let ge=x.xr.getDepthSensingMesh();ge!==null&&rt(ge,Z,-1/0,x.sortObjects)}rt(L,Z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(re,ye),Ke=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,Ke&&Xe.addToRenderList(v,L),this.info.render.frame++,le===!0&&ae.beginShadows();let I=m.state.shadowsArray;Ce.render(I,L,Z),le===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=v.opaque,H=v.transmissive;if(m.setupLights(),Z.isArrayCamera){let ge=Z.cameras;if(H.length>0)for(let W=0,oe=ge.length;W<oe;W++){let Ge=ge[W];wn(z,H,L,Ge)}Ke&&Xe.render(L);for(let W=0,oe=ge.length;W<oe;W++){let Ge=ge[W];Ht(v,L,Ge,Ge.viewport)}}else H.length>0&&wn(z,H,L,Z),Ke&&Xe.render(L),Ht(v,L,Z);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(x,L,Z),Et.resetDefaultState(),U=-1,Y=null,_.pop(),_.length>0?(m=_[_.length-1],le===!0&&ae.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function rt(L,Z,I,z){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)I=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||lt.intersectsSprite(L)){z&&Pe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ae);let W=fe.update(L),oe=L.material;oe.visible&&v.push(L,W,oe,I,Pe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||lt.intersectsObject(L))){let W=fe.update(L),oe=L.material;if(z&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Pe.copy(L.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),Pe.copy(W.boundingSphere.center)),Pe.applyMatrix4(L.matrixWorld).applyMatrix4(Ae)),Array.isArray(oe)){let Ge=W.groups;for(let at=0,dt=Ge.length;at<dt;at++){let Qe=Ge[at],Pt=oe[Qe.materialIndex];Pt&&Pt.visible&&v.push(L,W,Pt,I,Pe.z,Qe)}}else oe.visible&&v.push(L,W,oe,I,Pe.z,null)}}let ge=L.children;for(let W=0,oe=ge.length;W<oe;W++)rt(ge[W],Z,I,z)}function Ht(L,Z,I,z){let H=L.opaque,ge=L.transmissive,W=L.transparent;m.setupLightsView(I),le===!0&&ae.setGlobalState(x.clippingPlanes,I),z&&ce.viewport(y.copy(z)),H.length>0&&vn(H,Z,I),ge.length>0&&vn(ge,Z,I),W.length>0&&vn(W,Z,I),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function wn(L,Z,I,z){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Un(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?ci:$i,minFilter:Ts,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let ge=m.state.transmissionRenderTarget[z.id],W=z.viewport||y;ge.setSize(W.z,W.w);let oe=x.getRenderTarget();x.setRenderTarget(ge),x.getClearColor(J),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Ke&&Xe.render(I);let Ge=x.toneMapping;x.toneMapping=js;let at=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),le===!0&&ae.setGlobalState(x.clippingPlanes,z),vn(L,I,z),w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge),G.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Qe=0,Pt=Z.length;Qe<Pt;Qe++){let Zt=Z[Qe],cn=Zt.object,Fn=Zt.geometry,Jt=Zt.material,ft=Zt.group;if(Jt.side===At&&cn.layers.test(z.layers)){let sn=Jt.side;Jt.side=mn,Jt.needsUpdate=!0,ln(cn,I,z,Fn,Jt,ft),Jt.side=sn,Jt.needsUpdate=!0,dt=!0}}dt===!0&&(w.updateMultisampleRenderTarget(ge),w.updateRenderTargetMipmap(ge))}x.setRenderTarget(oe),x.setClearColor(J,K),at!==void 0&&(z.viewport=at),x.toneMapping=Ge}function vn(L,Z,I){let z=Z.isScene===!0?Z.overrideMaterial:null;for(let H=0,ge=L.length;H<ge;H++){let W=L[H],oe=W.object,Ge=W.geometry,at=z===null?W.material:z,dt=W.group;oe.layers.test(I.layers)&&ln(oe,Z,I,Ge,at,dt)}}function ln(L,Z,I,z,H,ge){L.onBeforeRender(x,Z,I,z,H,ge),L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),H.onBeforeRender(x,Z,I,z,L,ge),H.transparent===!0&&H.side===At&&H.forceSinglePass===!1?(H.side=mn,H.needsUpdate=!0,x.renderBufferDirect(I,Z,z,H,L,ge),H.side=Fi,H.needsUpdate=!0,x.renderBufferDirect(I,Z,z,H,L,ge),H.side=At):x.renderBufferDirect(I,Z,z,H,L,ge),L.onAfterRender(x,Z,I,z,H,ge)}function Qt(L,Z,I){Z.isScene!==!0&&(Z=Fe);let z=k.get(L),H=m.state.lights,ge=m.state.shadowsArray,W=H.state.version,oe=Oe.getParameters(L,H.state,ge,Z,I),Ge=Oe.getProgramCacheKey(oe),at=z.programs;z.environment=L.isMeshStandardMaterial?Z.environment:null,z.fog=Z.fog,z.envMap=(L.isMeshStandardMaterial?O:E).get(L.envMap||z.environment),z.envMapRotation=z.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,at===void 0&&(L.addEventListener("dispose",Mt),at=new Map,z.programs=at);let dt=at.get(Ge);if(dt!==void 0){if(z.currentProgram===dt&&z.lightsStateVersion===W)return hi(L,oe),dt}else oe.uniforms=Oe.getUniforms(L),L.onBeforeCompile(oe,x),dt=Oe.acquireProgram(oe,Ge),at.set(Ge,dt),z.uniforms=oe.uniforms;let Qe=z.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=ae.uniform),hi(L,oe),z.needsLights=ze(L),z.lightsStateVersion=W,z.needsLights&&(Qe.ambientLightColor.value=H.state.ambient,Qe.lightProbe.value=H.state.probe,Qe.directionalLights.value=H.state.directional,Qe.directionalLightShadows.value=H.state.directionalShadow,Qe.spotLights.value=H.state.spot,Qe.spotLightShadows.value=H.state.spotShadow,Qe.rectAreaLights.value=H.state.rectArea,Qe.ltc_1.value=H.state.rectAreaLTC1,Qe.ltc_2.value=H.state.rectAreaLTC2,Qe.pointLights.value=H.state.point,Qe.pointLightShadows.value=H.state.pointShadow,Qe.hemisphereLights.value=H.state.hemi,Qe.directionalShadowMap.value=H.state.directionalShadowMap,Qe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Qe.spotShadowMap.value=H.state.spotShadowMap,Qe.spotLightMatrix.value=H.state.spotLightMatrix,Qe.spotLightMap.value=H.state.spotLightMap,Qe.pointShadowMap.value=H.state.pointShadowMap,Qe.pointShadowMatrix.value=H.state.pointShadowMatrix),z.currentProgram=dt,z.uniformsList=null,dt}function Ni(L){if(L.uniformsList===null){let Z=L.currentProgram.getUniforms();L.uniformsList=vo.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function hi(L,Z){let I=k.get(L);I.outputColorSpace=Z.outputColorSpace,I.batching=Z.batching,I.batchingColor=Z.batchingColor,I.instancing=Z.instancing,I.instancingColor=Z.instancingColor,I.instancingMorph=Z.instancingMorph,I.skinning=Z.skinning,I.morphTargets=Z.morphTargets,I.morphNormals=Z.morphNormals,I.morphColors=Z.morphColors,I.morphTargetsCount=Z.morphTargetsCount,I.numClippingPlanes=Z.numClippingPlanes,I.numIntersection=Z.numClipIntersection,I.vertexAlphas=Z.vertexAlphas,I.vertexTangents=Z.vertexTangents,I.toneMapping=Z.toneMapping}function Le(L,Z,I,z,H){Z.isScene!==!0&&(Z=Fe),w.resetTextureUnits();let ge=Z.fog,W=z.isMeshStandardMaterial?Z.environment:null,oe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:sr,Ge=(z.isMeshStandardMaterial?O:E).get(z.envMap||W),at=z.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,dt=!!I.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Qe=!!I.morphAttributes.position,Pt=!!I.morphAttributes.normal,Zt=!!I.morphAttributes.color,cn=js;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(cn=x.toneMapping);let Fn=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Jt=Fn!==void 0?Fn.length:0,ft=k.get(z),sn=m.state.lights;if(le===!0&&(Me===!0||L!==Y)){let ri=L===Y&&z.id===U;ae.setState(z,L,ri)}let $t=!1;z.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==sn.state.version||ft.outputColorSpace!==oe||H.isBatchedMesh&&ft.batching===!1||!H.isBatchedMesh&&ft.batching===!0||H.isBatchedMesh&&ft.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ft.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ft.instancing===!1||!H.isInstancedMesh&&ft.instancing===!0||H.isSkinnedMesh&&ft.skinning===!1||!H.isSkinnedMesh&&ft.skinning===!0||H.isInstancedMesh&&ft.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ft.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ft.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ft.instancingMorph===!1&&H.morphTexture!==null||ft.envMap!==Ge||z.fog===!0&&ft.fog!==ge||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==ae.numPlanes||ft.numIntersection!==ae.numIntersection)||ft.vertexAlphas!==at||ft.vertexTangents!==dt||ft.morphTargets!==Qe||ft.morphNormals!==Pt||ft.morphColors!==Zt||ft.toneMapping!==cn||ft.morphTargetsCount!==Jt)&&($t=!0):($t=!0,ft.__version=z.version);let Ri=ft.currentProgram;$t===!0&&(Ri=Qt(z,Z,H));let zs=!1,Qn=!1,lr=!1,xn=Ri.getUniforms(),xi=ft.uniforms;if(ce.useProgram(Ri.program)&&(zs=!0,Qn=!0,lr=!0),z.id!==U&&(U=z.id,Qn=!0),zs||Y!==L){se.reverseDepthBuffer?(_e.copy(L.projectionMatrix),dx(_e),fx(_e),xn.setValue(C,"projectionMatrix",_e)):xn.setValue(C,"projectionMatrix",L.projectionMatrix),xn.setValue(C,"viewMatrix",L.matrixWorldInverse);let ri=xn.map.cameraPosition;ri!==void 0&&ri.setValue(C,Ue.setFromMatrixPosition(L.matrixWorld)),se.logarithmicDepthBuffer&&xn.setValue(C,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xn.setValue(C,"isOrthographic",L.isOrthographicCamera===!0),Y!==L&&(Y=L,Qn=!0,lr=!0)}if(H.isSkinnedMesh){xn.setOptional(C,H,"bindMatrix"),xn.setOptional(C,H,"bindMatrixInverse");let ri=H.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),xn.setValue(C,"boneTexture",ri.boneTexture,w))}H.isBatchedMesh&&(xn.setOptional(C,H,"batchingTexture"),xn.setValue(C,"batchingTexture",H._matricesTexture,w),xn.setOptional(C,H,"batchingIdTexture"),xn.setValue(C,"batchingIdTexture",H._indirectTexture,w),xn.setOptional(C,H,"batchingColorTexture"),H._colorsTexture!==null&&xn.setValue(C,"batchingColorTexture",H._colorsTexture,w));let Ai=I.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&je.update(H,I,Ri),(Qn||ft.receiveShadow!==H.receiveShadow)&&(ft.receiveShadow=H.receiveShadow,xn.setValue(C,"receiveShadow",H.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(xi.envMap.value=Ge,xi.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&Z.environment!==null&&(xi.envMapIntensity.value=Z.environmentIntensity),Qn&&(xn.setValue(C,"toneMappingExposure",x.toneMappingExposure),ft.needsLights&&bt(xi,lr),ge&&z.fog===!0&&be.refreshFogUniforms(xi,ge),be.refreshMaterialUniforms(xi,z,he,j,m.state.transmissionRenderTarget[L.id]),vo.upload(C,Ni(ft),xi,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(vo.upload(C,Ni(ft),xi,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xn.setValue(C,"center",H.center),xn.setValue(C,"modelViewMatrix",H.modelViewMatrix),xn.setValue(C,"normalMatrix",H.normalMatrix),xn.setValue(C,"modelMatrix",H.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let ri=z.uniformsGroups;for(let Hi=0,ia=ri.length;Hi<ia;Hi++){let Wr=ri[Hi];V.update(Wr,Ri),V.bind(Wr,Ri)}}return Ri}function bt(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function ze(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,Z,I){k.get(L.texture).__webglTexture=Z,k.get(L.depthTexture).__webglTexture=I;let z=k.get(L);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=I===void 0,z.__autoAllocateDepthBuffer||G.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Z){let I=k.get(L);I.__webglFramebuffer=Z,I.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,I=0){R=L,T=Z,P=I;let z=!0,H=null,ge=!1,W=!1;if(L){let Ge=k.get(L);if(Ge.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(Ge.__webglFramebuffer===void 0)w.setupRenderTarget(L);else if(Ge.__hasExternalTextures)w.rebindTextures(L,k.get(L.texture).__webglTexture,k.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Qe=L.depthTexture;if(Ge.__boundDepthTexture!==Qe){if(Qe!==null&&k.has(Qe)&&(L.width!==Qe.image.width||L.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(L)}}let at=L.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(W=!0);let dt=k.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(dt[Z])?H=dt[Z][I]:H=dt[Z],ge=!0):L.samples>0&&w.useMultisampledRTT(L)===!1?H=k.get(L).__webglMultisampledFramebuffer:Array.isArray(dt)?H=dt[I]:H=dt,y.copy(L.viewport),A.copy(L.scissor),q=L.scissorTest}else y.copy(Ie).multiplyScalar(he).floor(),A.copy(Te).multiplyScalar(he).floor(),q=Ve;if(ce.bindFramebuffer(C.FRAMEBUFFER,H)&&z&&ce.drawBuffers(L,H),ce.viewport(y),ce.scissor(A),ce.setScissorTest(q),ge){let Ge=k.get(L.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,I)}else if(W){let Ge=k.get(L.texture),at=Z||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ge.__webglTexture,I||0,at)}U=-1},this.readRenderTargetPixels=function(L,Z,I,z,H,ge,W){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let oe=k.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&W!==void 0&&(oe=oe[W]),oe){ce.bindFramebuffer(C.FRAMEBUFFER,oe);try{let Ge=L.texture,at=Ge.format,dt=Ge.type;if(!se.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-z&&I>=0&&I<=L.height-H&&C.readPixels(Z,I,z,H,ct.convert(at),ct.convert(dt),ge)}finally{let Ge=R!==null?k.get(R).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(L,Z,I,z,H,ge,W){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let oe=k.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&W!==void 0&&(oe=oe[W]),oe){let Ge=L.texture,at=Ge.format,dt=Ge.type;if(!se.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=L.width-z&&I>=0&&I<=L.height-H){ce.bindFramebuffer(C.FRAMEBUFFER,oe);let Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,ge.byteLength,C.STREAM_READ),C.readPixels(Z,I,z,H,ct.convert(at),ct.convert(dt),0);let Pt=R!==null?k.get(R).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,Pt);let Zt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ux(C,Zt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ge),C.deleteBuffer(Qe),C.deleteSync(Zt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Z=null,I=0){L.isTexture!==!0&&(Ql("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,L=arguments[1]);let z=Math.pow(2,-I),H=Math.floor(L.image.width*z),ge=Math.floor(L.image.height*z),W=Z!==null?Z.x:0,oe=Z!==null?Z.y:0;w.setTexture2D(L,0),C.copyTexSubImage2D(C.TEXTURE_2D,I,0,0,W,oe,H,ge),ce.unbindTexture()},this.copyTextureToTexture=function(L,Z,I=null,z=null,H=0){L.isTexture!==!0&&(Ql("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,L=arguments[1],Z=arguments[2],H=arguments[3]||0,I=null);let ge,W,oe,Ge,at,dt;I!==null?(ge=I.max.x-I.min.x,W=I.max.y-I.min.y,oe=I.min.x,Ge=I.min.y):(ge=L.image.width,W=L.image.height,oe=0,Ge=0),z!==null?(at=z.x,dt=z.y):(at=0,dt=0);let Qe=ct.convert(Z.format),Pt=ct.convert(Z.type);w.setTexture2D(Z,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Z.unpackAlignment);let Zt=C.getParameter(C.UNPACK_ROW_LENGTH),cn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Fn=C.getParameter(C.UNPACK_SKIP_PIXELS),Jt=C.getParameter(C.UNPACK_SKIP_ROWS),ft=C.getParameter(C.UNPACK_SKIP_IMAGES),sn=L.isCompressedTexture?L.mipmaps[H]:L.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,sn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,sn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ge),L.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,H,at,dt,ge,W,Qe,Pt,sn.data):L.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,H,at,dt,sn.width,sn.height,Qe,sn.data):C.texSubImage2D(C.TEXTURE_2D,H,at,dt,ge,W,Qe,Pt,sn),C.pixelStorei(C.UNPACK_ROW_LENGTH,Zt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,cn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ft),H===0&&Z.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ce.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,I=null,z=null,H=0){L.isTexture!==!0&&(Ql("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,z=arguments[1]||null,L=arguments[2],Z=arguments[3],H=arguments[4]||0);let ge,W,oe,Ge,at,dt,Qe,Pt,Zt,cn=L.isCompressedTexture?L.mipmaps[H]:L.image;I!==null?(ge=I.max.x-I.min.x,W=I.max.y-I.min.y,oe=I.max.z-I.min.z,Ge=I.min.x,at=I.min.y,dt=I.min.z):(ge=cn.width,W=cn.height,oe=cn.depth,Ge=0,at=0,dt=0),z!==null?(Qe=z.x,Pt=z.y,Zt=z.z):(Qe=0,Pt=0,Zt=0);let Fn=ct.convert(Z.format),Jt=ct.convert(Z.type),ft;if(Z.isData3DTexture)w.setTexture3D(Z,0),ft=C.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)w.setTexture2DArray(Z,0),ft=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Z.unpackAlignment);let sn=C.getParameter(C.UNPACK_ROW_LENGTH),$t=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ri=C.getParameter(C.UNPACK_SKIP_PIXELS),zs=C.getParameter(C.UNPACK_SKIP_ROWS),Qn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,cn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,cn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),C.pixelStorei(C.UNPACK_SKIP_ROWS,at),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dt),L.isDataTexture||L.isData3DTexture?C.texSubImage3D(ft,H,Qe,Pt,Zt,ge,W,oe,Fn,Jt,cn.data):Z.isCompressedArrayTexture?C.compressedTexSubImage3D(ft,H,Qe,Pt,Zt,ge,W,oe,Fn,cn.data):C.texSubImage3D(ft,H,Qe,Pt,Zt,ge,W,oe,Fn,Jt,cn),C.pixelStorei(C.UNPACK_ROW_LENGTH,sn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$t),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ri),C.pixelStorei(C.UNPACK_SKIP_ROWS,zs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Qn),H===0&&Z.generateMipmaps&&C.generateMipmap(ft),ce.unbindTexture()},this.initRenderTarget=function(L){k.get(L).__webglFramebuffer===void 0&&w.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?w.setTextureCube(L,0):L.isData3DTexture?w.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?w.setTexture2DArray(L,0):w.setTexture2D(L,0),ce.unbindTexture()},this.resetState=function(){T=0,P=0,R=null,ce.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===jd?"display-p3":"srgb",t.unpackColorSpace=Kt.workingColorSpace===zc?"display-p3":"srgb"}},dc=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ao=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},fc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ki()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ui=new b,Ta=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ji(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ji(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ji(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ji(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new on(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gn=class extends ji{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},co,ua=new b,ho=new b,uo=new b,fo=new we,da=new we,Bp=new pt,Nl=new b,fa=new b,Hl=new b,Z0=new we,ou=new we,J0=new we,Nn=class extends Ut{constructor(e=new Gn){if(super(),this.isSprite=!0,this.type="Sprite",co===void 0){co=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fc(t,5);co.setIndex([0,1,2,0,2,3]),co.setAttribute("position",new Ta(n,3,0,!1)),co.setAttribute("uv",new Ta(n,2,3,!1))}this.geometry=co,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ho.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),uo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ho.multiplyScalar(-uo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;zl(Nl.set(-.5,-.5,0),uo,o,ho,s,r),zl(fa.set(.5,-.5,0),uo,o,ho,s,r),zl(Hl.set(.5,.5,0),uo,o,ho,s,r),Z0.set(0,0),ou.set(1,0),J0.set(1,1);let a=e.ray.intersectTriangle(Nl,fa,Hl,!1,ua);if(a===null&&(zl(fa.set(-.5,.5,0),uo,o,ho,s,r),ou.set(0,1),a=e.ray.intersectTriangle(Nl,Hl,fa,!1,ua),a===null))return;let l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||t.push({distance:l,point:ua.clone(),uv:Ks.getInterpolation(ua,Nl,fa,Hl,Z0,ou,J0,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zl(i,e,t,n,s,r){fo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(da.x=r*fo.x-s*fo.y,da.y=s*fo.x+r*fo.y):da.copy(fo),i.copy(e),i.x+=da.x,i.y+=da.y,i.applyMatrix4(Bp)}var K0=new b,$0=new jt,j0=new jt,aM=new b,Q0=new pt,Ol=new b,au=new ki,ep=new pt,lu=new Sr,pc=class extends De{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=t0,this.bindMatrix=new pt,this.bindMatrixInverse=new pt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ol),this.boundingBox.expandByPoint(Ol)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ol),this.boundingSphere.expandByPoint(Ol)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),au.copy(this.boundingSphere),au.applyMatrix4(s),e.ray.intersectsSphere(au)!==!1&&(ep.copy(s).invert(),lu.copy(e.ray).applyMatrix4(ep),!(this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new jt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===t0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$0.fromBufferAttribute(s.attributes.skinIndex,e),j0.fromBufferAttribute(s.attributes.skinWeight,e),K0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=j0.getComponent(r);if(o!==0){let a=$0.getComponent(r);Q0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(aM.copy(K0).applyMatrix4(Q0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Ra=class extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}},Tr=class extends Mi{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ti,u=ti,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tp=new pt,lM=new pt,mc=class i{constructor(e=[],t=[]){this.uuid=Ki(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new pt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new pt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:lM;tp.multiplyMatrices(a,t[r]),tp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Tr(t,e,e,_i,as);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ra),this.bones.push(o),this.boneInverses.push(new pt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var Aa=class extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gc=new b,xc=new b,np=new pt,pa=new Sr,Fl=new ki,cu=new b,ip=new b,yc=class extends Ut{constructor(e=new Xt,t=new Aa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gc.fromBufferAttribute(t,s-1),xc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gc.distanceTo(xc);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fl.copy(n.boundingSphere),Fl.applyMatrix4(s),Fl.radius+=r,e.ray.intersectsSphere(Fl)===!1)return;np.copy(s).invert(),pa.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),_=u.getX(v+1),x=Bl(this,e,pa,l,p,_);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=Bl(this,e,pa,l,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=Bl(this,e,pa,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Bl(this,e,pa,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Bl(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(gc.fromBufferAttribute(o,s),xc.fromBufferAttribute(o,r),t.distanceSqToSegment(gc,xc,cu,ip)>n)return;cu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(cu);if(!(l<e.near||l>e.far))return{distance:l,point:ip.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var As=class extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new pt,xd=new Sr,kl=new ki,Vl=new b,ls=class extends Ut{constructor(e=new Xt,t=new As){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),kl.radius+=r,e.ray.intersectsSphere(kl)===!1)return;sp.copy(s).invert(),xd.copy(e.ray).applyMatrix4(sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);Vl.fromBufferAttribute(h,m),rp(Vl,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Vl.fromBufferAttribute(h,g),rp(Vl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rp(i,e,t,n,s,r,o){let a=xd.distanceSqToPoint(i);if(a<t){let l=new b;xd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var tn=class extends Mi{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new we:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,s=[],r=[],o=[],a=new b,l=new pt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Jn(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Jn(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ca=class extends Vi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yd=class extends Ca{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Gl=new b,hu=new tf,uu=new tf,du=new tf,Rr=class extends Vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new b){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Gl.subVectors(s[0],s[1]).add(s[0]),c=Gl);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Gl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Gl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),hu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),uu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),du.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),uu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),du.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(hu.calc(l),uu.calc(l),du.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function op(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function cM(i,e){let t=1-i;return t*t*e}function hM(i,e){return 2*(1-i)*i*e}function uM(i,e){return i*i*e}function _a(i,e,t,n){return cM(i,e)+hM(i,t)+uM(i,n)}function dM(i,e){let t=1-i;return t*t*t*e}function fM(i,e){let t=1-i;return 3*t*t*i*e}function pM(i,e){return 3*(1-i)*i*i*e}function mM(i,e){return i*i*i*e}function Ma(i,e,t,n,s){return dM(i,e)+fM(i,t)+pM(i,n)+mM(i,s)}var vc=class extends Vi{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ma(e,s.x,r.x,o.x,a.x),Ma(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vd=class extends Vi{constructor(e=new b,t=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new b){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ma(e,s.x,r.x,o.x,a.x),Ma(e,s.y,r.y,o.y,a.y),Ma(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_c=class extends Vi{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_d=class extends Vi{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mc=class extends Vi{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_a(e,s.x,r.x,o.x),_a(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Vi{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(_a(e,s.x,r.x,o.x),_a(e,s.y,r.y,o.y),_a(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(op(a,l.x,c.x,u.x,h.x),op(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},bc=Object.freeze({__proto__:null,ArcCurve:yd,CatmullRomCurve3:Rr,CubicBezierCurve:vc,CubicBezierCurve3:vd,EllipseCurve:Ca,LineCurve:_c,LineCurve3:_d,QuadraticBezierCurve:Mc,QuadraticBezierCurve3:Co,SplineCurve:Ec}),Md=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bc[s.type]().fromJSON(s))}return this}},wc=class extends Md{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _c(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Mc(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new vc(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ec(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ca(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class i extends Xt{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Jn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new b,d=new we,f=new b,g=new b,v=new b,m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let _=0;_<=t;_++){let x=n+_*u*s,M=Math.sin(x),T=Math.cos(x);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*M,h.y=e[P].y,h.z=e[P].x*T,o.push(h.x,h.y,h.z),d.x=_/t,d.y=P/(e.length-1),a.push(d.x,d.y);let R=l[3*P+0]*M,U=l[3*P+1],Y=l[3*P+0]*T;c.push(R,U,Y)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let M=x+_*e.length,T=M,P=M+e.length,R=M+e.length+1,U=M+1;r.push(T,P,U),r.push(R,U,P)}this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("uv",new Rt(a,2)),this.setAttribute("normal",new Rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var ir=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new b,u=new we;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Rt(o,3)),this.setAttribute("normal",new Rt(a,3)),this.setAttribute("uv",new Rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ot=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,v=[],m=n/2,p=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function _(){let M=new b,T=new b,P=0,R=(t-e)/n;for(let U=0;U<=r;U++){let Y=[],y=U/r,A=y*(t-e)+e;for(let q=0;q<=s;q++){let J=q/s,K=J*l+a,pe=Math.sin(K),j=Math.cos(K);T.x=A*pe,T.y=-y*n+m,T.z=A*j,h.push(T.x,T.y,T.z),M.set(pe,R,j).normalize(),d.push(M.x,M.y,M.z),f.push(J,1-y),Y.push(g++)}v.push(Y)}for(let U=0;U<s;U++)for(let Y=0;Y<r;Y++){let y=v[Y][U],A=v[Y+1][U],q=v[Y+1][U+1],J=v[Y][U+1];e>0&&(u.push(y,A,J),P+=3),t>0&&(u.push(A,q,J),P+=3)}c.addGroup(p,P,0),p+=P}function x(M){let T=g,P=new we,R=new b,U=0,Y=M===!0?e:t,y=M===!0?1:-1;for(let q=1;q<=s;q++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let A=g;for(let q=0;q<=s;q++){let K=q/s*l+a,pe=Math.cos(K),j=Math.sin(K);R.x=Y*j,R.y=m*y,R.z=Y*pe,h.push(R.x,R.y,R.z),d.push(0,y,0),P.x=pe*.5+.5,P.y=j*.5*y+.5,f.push(P.x,P.y),g++}for(let q=0;q<s;q++){let J=T+q,K=A+q;M===!0?u.push(K,K+1,J):u.push(K+1,K,J),U+=3}c.addGroup(p,U,M===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bi=class i extends Ot{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sc=class i extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Rt(r,3)),this.setAttribute("normal",new Rt(r.slice(),3)),this.setAttribute("uv",new Rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let x=new b,M=new b,T=new b;for(let P=0;P<t.length;P+=3)f(t[P+0],x),f(t[P+1],M),f(t[P+2],T),l(x,M,T,_)}function l(_,x,M,T){let P=T+1,R=[];for(let U=0;U<=P;U++){R[U]=[];let Y=_.clone().lerp(M,U/P),y=x.clone().lerp(M,U/P),A=P-U;for(let q=0;q<=A;q++)q===0&&U===P?R[U][q]=Y:R[U][q]=Y.clone().lerp(y,q/A)}for(let U=0;U<P;U++)for(let Y=0;Y<2*(P-U)-1;Y++){let y=Math.floor(Y/2);Y%2===0?(d(R[U][y+1]),d(R[U+1][y]),d(R[U][y])):(d(R[U][y+1]),d(R[U+1][y+1]),d(R[U+1][y]))}}function c(_){let x=new b;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(_),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function u(){let _=new b;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];let M=m(_)/2/Math.PI+.5,T=p(_)/Math.PI+.5;o.push(M,1-T)}g(),h()}function h(){for(let _=0;_<o.length;_+=6){let x=o[_+0],M=o[_+2],T=o[_+4],P=Math.max(x,M,T),R=Math.min(x,M,T);P>.9&&R<.1&&(x<.2&&(o[_+0]+=1),M<.2&&(o[_+2]+=1),T<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,x){let M=_*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){let _=new b,x=new b,M=new b,T=new b,P=new we,R=new we,U=new we;for(let Y=0,y=0;Y<r.length;Y+=9,y+=6){_.set(r[Y+0],r[Y+1],r[Y+2]),x.set(r[Y+3],r[Y+4],r[Y+5]),M.set(r[Y+6],r[Y+7],r[Y+8]),P.set(o[y+0],o[y+1]),R.set(o[y+2],o[y+3]),U.set(o[y+4],o[y+5]),T.copy(_).add(x).add(M).divideScalar(3);let A=m(T);v(P,y+0,_,A),v(R,y+2,x,A),v(U,y+4,M,A)}}function v(_,x,M,T){T<0&&_.x===1&&(o[x]=_.x-1),M.x===0&&M.z===0&&(o[x]=T/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Qi=class extends wc{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new wc().fromJSON(s))}return this}},gM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=kp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=MM(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Pa(r,o,t,a,l,f,0),o}};function kp(i,e,t,n,s){let r,o;if(s===DM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=ap(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=ap(r,i[r],i[r+1],o);return o&&Fc(o,o.next)&&(Da(o),o=o.next),o}function Ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fc(t,t.next)||Tn(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&TM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?yM(i,n,s,r):xM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Da(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=vM(Ar(i),e,t),Pa(i,e,t,n,s,r,2)):o===2&&_M(i,e,t,n,s,r):Pa(Ar(i),e,t,n,s,r,1);break}}}function xM(i){let e=i.prev,t=i,n=i.next;if(Tn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&mo(s,a,r,l,o,c,g.x,g.y)&&Tn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Tn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Ed(f,g,e,t,n),_=Ed(v,m,e,t,n),x=i.prevZ,M=i.nextZ;for(;x&&x.z>=p&&M&&M.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mo(a,u,l,h,c,d,x.x,x.y)&&Tn(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&mo(a,u,l,h,c,d,M.x,M.y)&&Tn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mo(a,u,l,h,c,d,x.x,x.y)&&Tn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&mo(a,u,l,h,c,d,M.x,M.y)&&Tn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function vM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Fc(s,r)&&Vp(s,n,n.next,r)&&Ia(s,r)&&Ia(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Da(n),Da(n.next),n=i=r),n=n.next}while(n!==i);return Ar(n)}function _M(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&CM(o,a)){let l=Gp(o,a);o=Ar(o,o.next),l=Ar(l,l.next),Pa(o,e,t,n,s,r,0),Pa(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function MM(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(AM(c));for(s.sort(EM),r=0;r<s.length;r++)t=bM(s[r],t);return t}function EM(i,e){return i.x-e.x}function bM(i,e){let t=wM(i,e);if(!t)return e;let n=Gp(t,i);return Ar(n,n.next),Ar(t,t.next)}function wM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&mo(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ia(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&SM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function SM(i,e){return Tn(i.prev,i,e.prev)<0&&Tn(e.next,i,i.next)<0}function TM(i,e,t,n){let s=i;do s.z===0&&(s.z=Ed(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,RM(s)}function RM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ed(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function AM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mo(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function CM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!PM(i,e)&&(Ia(i,e)&&Ia(e,i)&&IM(i,e)&&(Tn(i.prev,i,e.prev)||Tn(i,e.prev,e))||Fc(i,e)&&Tn(i.prev,i,i.next)>0&&Tn(e.prev,e,e.next)>0)}function Tn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fc(i,e){return i.x===e.x&&i.y===e.y}function Vp(i,e,t,n){let s=Xl(Tn(i,e,t)),r=Xl(Tn(i,e,n)),o=Xl(Tn(t,n,i)),a=Xl(Tn(t,n,e));return!!(s!==r&&o!==a||s===0&&Wl(i,t,e)||r===0&&Wl(i,n,e)||o===0&&Wl(t,i,n)||a===0&&Wl(t,e,n))}function Wl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Xl(i){return i>0?1:i<0?-1:0}function PM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ia(i,e){return Tn(i.prev,i,i.next)<0?Tn(i,e,i.next)>=0&&Tn(i,i.prev,e)>=0:Tn(i,e,i.prev)<0||Tn(i,i.next,e)<0}function IM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gp(i,e){let t=new bd(i.i,i.x,i.y),n=new bd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ap(i,e,t,n){let s=new bd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bd(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function DM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Qs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];lp(e),cp(n,e);let o=e.length;t.forEach(lp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,cp(n,t[l]);let a=gM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var La=class i extends Xt{constructor(e=new Qi([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Rt(s,3)),this.setAttribute("uv",new Rt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:LM,x,M=!1,T,P,R,U;p&&(x=p.getSpacedPoints(u),M=!0,d=!1,T=p.computeFrenetFrames(u,!1),P=new b,R=new b,U=new b),d||(m=0,f=0,g=0,v=0);let Y=a.extractPoints(c),y=Y.shape,A=Y.holes;if(!Qs.isClockWise(y)){y=y.reverse();for(let B=0,C=A.length;B<C;B++){let Q=A[B];Qs.isClockWise(Q)&&(A[B]=Q.reverse())}}let J=Qs.triangulateShape(y,A),K=y;for(let B=0,C=A.length;B<C;B++){let Q=A[B];y=y.concat(Q)}function pe(B,C,Q){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(C,Q)}let j=y.length,he=J.length;function re(B,C,Q){let G,se,ce,ue=B.x-C.x,k=B.y-C.y,w=Q.x-B.x,E=Q.y-B.y,O=ue*ue+k*k,ne=ue*E-k*w;if(Math.abs(ne)>Number.EPSILON){let F=Math.sqrt(O),fe=Math.sqrt(w*w+E*E),Oe=C.x-k/F,be=C.y+ue/F,X=Q.x-E/fe,S=Q.y+w/fe,ae=((X-Oe)*E-(S-be)*w)/(ue*E-k*w);G=Oe+ue*ae-B.x,se=be+k*ae-B.y;let Ce=G*G+se*se;if(Ce<=2)return new we(G,se);ce=Math.sqrt(Ce/2)}else{let F=!1;ue>Number.EPSILON?w>Number.EPSILON&&(F=!0):ue<-Number.EPSILON?w<-Number.EPSILON&&(F=!0):Math.sign(k)===Math.sign(E)&&(F=!0),F?(G=-k,se=ue,ce=Math.sqrt(O)):(G=ue,se=k,ce=Math.sqrt(O/2))}return new we(G/ce,se/ce)}let ye=[];for(let B=0,C=K.length,Q=C-1,G=B+1;B<C;B++,Q++,G++)Q===C&&(Q=0),G===C&&(G=0),ye[B]=re(K[B],K[Q],K[G]);let Ie=[],Te,Ve=ye.concat();for(let B=0,C=A.length;B<C;B++){let Q=A[B];Te=[];for(let G=0,se=Q.length,ce=se-1,ue=G+1;G<se;G++,ce++,ue++)ce===se&&(ce=0),ue===se&&(ue=0),Te[G]=re(Q[G],Q[ce],Q[ue]);Ie.push(Te),Ve=Ve.concat(Te)}for(let B=0;B<m;B++){let C=B/m,Q=f*Math.cos(C*Math.PI/2),G=g*Math.sin(C*Math.PI/2)+v;for(let se=0,ce=K.length;se<ce;se++){let ue=pe(K[se],ye[se],G);Ae(ue.x,ue.y,-Q)}for(let se=0,ce=A.length;se<ce;se++){let ue=A[se];Te=Ie[se];for(let k=0,w=ue.length;k<w;k++){let E=pe(ue[k],Te[k],G);Ae(E.x,E.y,-Q)}}}let lt=g+v;for(let B=0;B<j;B++){let C=d?pe(y[B],Ve[B],lt):y[B];M?(R.copy(T.normals[0]).multiplyScalar(C.x),P.copy(T.binormals[0]).multiplyScalar(C.y),U.copy(x[0]).add(R).add(P),Ae(U.x,U.y,U.z)):Ae(C.x,C.y,0)}for(let B=1;B<=u;B++)for(let C=0;C<j;C++){let Q=d?pe(y[C],Ve[C],lt):y[C];M?(R.copy(T.normals[B]).multiplyScalar(Q.x),P.copy(T.binormals[B]).multiplyScalar(Q.y),U.copy(x[B]).add(R).add(P),Ae(U.x,U.y,U.z)):Ae(Q.x,Q.y,h/u*B)}for(let B=m-1;B>=0;B--){let C=B/m,Q=f*Math.cos(C*Math.PI/2),G=g*Math.sin(C*Math.PI/2)+v;for(let se=0,ce=K.length;se<ce;se++){let ue=pe(K[se],ye[se],G);Ae(ue.x,ue.y,h+Q)}for(let se=0,ce=A.length;se<ce;se++){let ue=A[se];Te=Ie[se];for(let k=0,w=ue.length;k<w;k++){let E=pe(ue[k],Te[k],G);M?Ae(E.x,E.y+x[u-1].y,x[u-1].x+Q):Ae(E.x,E.y,h+Q)}}}le(),Me();function le(){let B=s.length/3;if(d){let C=0,Q=j*C;for(let G=0;G<he;G++){let se=J[G];Ue(se[2]+Q,se[1]+Q,se[0]+Q)}C=u+m*2,Q=j*C;for(let G=0;G<he;G++){let se=J[G];Ue(se[0]+Q,se[1]+Q,se[2]+Q)}}else{for(let C=0;C<he;C++){let Q=J[C];Ue(Q[2],Q[1],Q[0])}for(let C=0;C<he;C++){let Q=J[C];Ue(Q[0]+j*u,Q[1]+j*u,Q[2]+j*u)}}n.addGroup(B,s.length/3-B,0)}function Me(){let B=s.length/3,C=0;_e(K,C),C+=K.length;for(let Q=0,G=A.length;Q<G;Q++){let se=A[Q];_e(se,C),C+=se.length}n.addGroup(B,s.length/3-B,1)}function _e(B,C){let Q=B.length;for(;--Q>=0;){let G=Q,se=Q-1;se<0&&(se=B.length-1);for(let ce=0,ue=u+m*2;ce<ue;ce++){let k=j*ce,w=j*(ce+1),E=C+G+k,O=C+se+k,ne=C+se+w,F=C+G+w;Pe(E,O,ne,F)}}}function Ae(B,C,Q){l.push(B),l.push(C),l.push(Q)}function Ue(B,C,Q){Fe(B),Fe(C),Fe(Q);let G=s.length/3,se=_.generateTopUV(n,s,G-3,G-2,G-1);Ke(se[0]),Ke(se[1]),Ke(se[2])}function Pe(B,C,Q,G){Fe(B),Fe(C),Fe(G),Fe(C),Fe(Q),Fe(G);let se=s.length/3,ce=_.generateSideWallUV(n,s,se-6,se-3,se-2,se-1);Ke(ce[0]),Ke(ce[1]),Ke(ce[3]),Ke(ce[1]),Ke(ce[2]),Ke(ce[3])}function Fe(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Ke(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return UM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bc[s.type]().fromJSON(s)),new i(n,e.options)}},LM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new we(r,o),new we(a,l),new we(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-h),new we(d,1-g),new we(v,1-p)]:[new we(a,1-l),new we(u,1-h),new we(f,1-g),new we(m,1-p)]}};function UM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends Sc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Po=class i extends Xt{constructor(e=new Qi([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Rt(s,3)),this.setAttribute("normal",new Rt(r,3)),this.setAttribute("uv",new Rt(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;Qs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let _=g[m];Qs.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=Qs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){let _=v[m],x=_[0]+h,M=_[1]+h,T=_[2]+h;n.push(x,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return NM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function NM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var nn=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new b,d=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let _=[],x=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){let P=T/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(P+M,1-x),_.push(c++)}u.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let x=u[p][_+1],M=u[p][_],T=u[p+1][_],P=u[p+1][_+1];(p!==0||o>0)&&f.push(x,M,P),(p!==n-1||l<Math.PI)&&f.push(M,T,P)}this.setIndex(f),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Tc=class i extends Sc{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ii=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new b,h=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,_=(s+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(l,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Cr=class i extends Xt{constructor(e=new Co(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new b,l=new b,c=new we,u=new b,h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Rt(h,3)),this.setAttribute("normal",new Rt(d,3)),this.setAttribute("uv",new Rt(f,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),_(),p()}function m(x){u=e.getPointAt(x/t,u);let M=o.normals[x],T=o.binormals[x];for(let P=0;P<=s;P++){let R=P/s*Math.PI*2,U=Math.sin(R),Y=-Math.cos(R);l.x=Y*M.x+U*T.x,l.y=Y*M.y+U*T.y,l.z=Y*M.z+U*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let M=1;M<=s;M++){let T=(s+1)*(x-1)+(M-1),P=(s+1)*x+(M-1),R=(s+1)*x+M,U=(s+1)*(x-1)+M;g.push(T,P,U),g.push(P,R,U)}}function _(){for(let x=0;x<=t;x++)for(let M=0;M<=s;M++)c.x=x/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new bc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Rc=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ac=class extends ji{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function ql(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function HM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Io=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wd=class extends Io{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:n0,endingEnd:n0}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case i0:r=e,a=2*t-n;break;case s0:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case i0:o=e,l=2*n-t;break;case s0:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let T=0;T!==a;++T)r[T]=p*o[u+T]+_*o[c+T]+x*o[l+T]+M*o[h+T];return r}},Sd=class extends Io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Td=class extends Io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},es=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ql(t,this.TimeBufferType),this.values=ql(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ql(e.times,Array),values:ql(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ec:t=this.InterpolantFactoryMethodDiscrete;break;case Qu:t=this.InterpolantFactoryMethodLinear;break;case Dh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ec;case this.InterpolantFactoryMethodLinear:return Qu;case this.InterpolantFactoryMethodSmooth:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&HM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};es.prototype.TimeBufferType=Float32Array;es.prototype.ValueBufferType=Float32Array;es.prototype.DefaultInterpolation=Qu;var Pr=class extends es{constructor(e,t,n){super(e,t,n)}};Pr.prototype.ValueTypeName="bool";Pr.prototype.ValueBufferType=Array;Pr.prototype.DefaultInterpolation=ec;Pr.prototype.InterpolantFactoryMethodLinear=void 0;Pr.prototype.InterpolantFactoryMethodSmooth=void 0;var Rd=class extends es{};Rd.prototype.ValueTypeName="color";var Ad=class extends es{};Ad.prototype.ValueTypeName="number";var Cd=class extends Io{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Cc=class extends es{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};Cc.prototype.ValueTypeName="quaternion";Cc.prototype.InterpolantFactoryMethodSmooth=void 0;var Ir=class extends es{constructor(e,t,n){super(e,t,n)}};Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=ec;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Pd=class extends es{};Pd.prototype.ValueTypeName="vector";var Id=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},zM=new Id,Dd=class{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ua=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Pc=class extends Ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fu=new pt,hp=new b,up=new b,Ic=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(hp),up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(up),t.updateMatrixWorld(),fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var dp=new pt,ma=new b,pu=new b,Ld=class extends Ic{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(ma),pu.copy(n.position),pu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pu),n.updateMatrixWorld(),s.makeTranslation(-ma.x,-ma.y,-ma.z),dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp)}},Do=class extends Ua{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ud=class extends Ic{constructor(){super(new So(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Lo=class extends Ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Ud}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yl,Uo=class{static getContext(){return Yl===void 0&&(Yl=new(window.AudioContext||window.webkitAudioContext)),Yl}static setContext(e){Yl=e}};var Dr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fp(){return performance.now()}var yr=new b,pp=new bn,OM=new b,vr=new b,Dc=class extends Ut{constructor(){super(),this.type="AudioListener",this.context=Uo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Dr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(yr,pp,OM),vr.set(0,0,-1).applyQuaternion(pp),t.positionX){let s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(yr.x,s),t.positionY.linearRampToValueAtTime(yr.y,s),t.positionZ.linearRampToValueAtTime(yr.z,s),t.forwardX.linearRampToValueAtTime(vr.x,s),t.forwardY.linearRampToValueAtTime(vr.y,s),t.forwardZ.linearRampToValueAtTime(vr.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(yr.x,yr.y,yr.z),t.setOrientation(vr.x,vr.y,vr.z,n.x,n.y,n.z)}},No=class extends Ut{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},_r=new b,mp=new bn,FM=new b,Mr=new b,Na=class extends No{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_r,mp,FM),Mr.set(0,0,1).applyQuaternion(mp);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_r.x,n),t.positionY.linearRampToValueAtTime(_r.y,n),t.positionZ.linearRampToValueAtTime(_r.z,n),t.orientationX.linearRampToValueAtTime(Mr.x,n),t.orientationY.linearRampToValueAtTime(Mr.y,n),t.orientationZ.linearRampToValueAtTime(Mr.z,n)}else t.setPosition(_r.x,_r.y,_r.z),t.setOrientation(Mr.x,Mr.y,Mr.z)}};var nf="\\[\\]\\.:\\/",BM=new RegExp("["+nf+"]","g"),sf="[^"+nf+"]",kM="[^"+nf.replace("\\.","")+"]",VM=/((?:WC+[\/:])*)/.source.replace("WC",sf),GM=/(WCOD+)?/.source.replace("WCOD",kM),WM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),XM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),qM=new RegExp("^"+VM+GM+WM+XM+"$"),YM=["material","materials","bones","map"],Nd=class{constructor(e,t,n){let s=n||En.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},En=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(BM,"")}static parseTrackName(e){let t=qM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);YM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};En.Composite=Nd;En.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};En.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};En.prototype.GetterByBindingType=[En.prototype._getValue_direct,En.prototype._getValue_array,En.prototype._getValue_arrayElement,En.prototype._getValue_toArray];En.prototype.SetterByBindingTypeAndVersioning=[[En.prototype._setValue_direct,En.prototype._setValue_direct_setNeedsUpdate,En.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[En.prototype._setValue_array,En.prototype._setValue_array_setNeedsUpdate,En.prototype._setValue_array_setMatrixWorldNeedsUpdate],[En.prototype._setValue_arrayElement,En.prototype._setValue_arrayElement_setNeedsUpdate,En.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[En.prototype._setValue_fromArray,En.prototype._setValue_fromArray_setNeedsUpdate,En.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t2=new Float32Array(1);var gp=new pt,Lc=class{constructor(e,t,n=0,s=1/0){this.ray=new Sr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,n=[]){return Hd(e,this,n,t),n.sort(xp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Hd(e[s],this,n,t);return n.sort(xp),n}};function xp(i,e){return i.distance-e.distance}function Hd(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Hd(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);var Bc=class extends Ao{constructor(){super();let e=new Ct;e.deleteAttribute("uv");let t=new tt({side:mn}),n=new tt,s=new Do(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new De(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new De(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new De(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new De(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new De(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new De(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new De(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new De(e,Oo(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new De(e,Oo(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new De(e,Oo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new De(e,Oo(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new De(e,Oo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new De(e,Oo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Oo(i){let e=new yt;return e.color.setScalar(i),e}var kc=22050;var Kn=(i,e)=>i+Math.random()*(e-i);function yn(i,e,t,n=0){let s=Math.floor(e*kc),r=Math.floor(n*kc),o=new Float32Array(s+r);t(o,kc);let a=i.createBuffer(1,s,kc),l=a.getChannelData(0);for(let u=0;u<s;u++)l[u]=r&&u<r?o[u]*(u/r)+o[s+u]*(1-u/r):o[u];let c=0;for(let u=0;u<s;u++)c=Math.max(c,Math.abs(l[u]));if(c>0)for(let u=0;u<s;u++)l[u]*=.85/c;return a}function Kp(i,e){let t=0;for(let n=0;n<i.length;n++)t+=e*(i[n]-t),i[n]=t}function ZM(i,e){let n=0,s=1,r=-1;for(let o=0;o<i.length;o++){let a=o/e,l=a*14%1,c=Math.floor(a*14);c!==r&&(r=c,s=Kn(.75,1)),n+=.45*(Math.random()*2-1-n),i[o]=s*(n*Math.exp(-l*34)*.7+Math.sin(2*Math.PI*95*a)*Math.exp(-l*16)*.55)+.06*Math.sin(2*Math.PI*220*a)+.04*Math.sin(2*Math.PI*330*a)}}function JM(i,e){let t=[12.5,13.6,15.1,11.2],n=t.map(()=>Kn(.5,1));for(let s=0;s<i.length;s++){let r=s/e,o=0;for(let a=0;a<t.length;a++){let l=(r*t[a]+a*.31)%1;o+=n[a]*Math.sin(2*Math.PI*(80+a*13)*r)*Math.exp(-l*12)}i[s]=o+(Math.random()*2-1)*.05}Kp(i,.35)}function KM(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/e;t+=.02*(Math.random()*2-1-t),i[n]=.18*Math.sin(2*Math.PI*50*s)+.1*Math.sin(2*Math.PI*100*s)+.04*Math.sin(2*Math.PI*150*s)+t*.6}}function Wp(i){let e=0,t=0;for(let n=0;n<i.length;n++)e=(e+.02*(Math.random()*2-1))/1.02,t+=.05*(e-t),i[n]=t*2.2}function za(i,e,{count:t,f0min:n,f0max:s,sylMin:r,sylMax:o,gapMax:a,laugh:l=!1,muffle:c=.25}){for(let u=0;u<t;u++){let h=Math.floor(Kn(0,e*.8)),d=0,f=Kn(n,s),g=Kn(.5,1);for(;h<i.length;){let v=l&&Math.random()<.18,m=Math.floor(v?Kn(4,7):Kn(3,9)),p=f*Kn(.95,1.1);for(let _=0;_<m&&h<i.length;_++){let x=Math.floor((v?Kn(.09,.13):Kn(r,o))*e),M=v?750:Kn(300,800),T=v?1300:Kn(900,2200),P=v?p*.93:p*Kn(.9,1.08);for(let R=0;R<x&&h+R<i.length;R++){let U=R/x,Y=p+(P-p)*U;d+=2*Math.PI*Y/e;let y=0;for(let A=1;A<=7;A++){let q=A*Y,J=Math.exp(-(((q-M)/260)**2))+.55*Math.exp(-(((q-T)/420)**2))+.03;y+=J*Math.sin(A*d)}i[h+R]+=g*y*Math.sin(Math.PI*U)**.7*.3}h+=x+Math.floor(Kn(.01,.06)*e),p=P}h+=Math.floor(Kn(.3,a)*e)}}Kp(i,c)}function $p(i,e,t){let n=[1,2,2.76,5.4],s=[1,.45,.35,.15],r=0;for(let o=0;o<4;o++)r+=s[o]*Math.sin(2*Math.PI*e*n[o]*i)*Math.exp(-i*t*(1+o*.6));return r}function $M(i,e){for(let t=0;t<12;t++){let n=Math.floor((t*.24+Kn(0,.03))*e),s=t%2?1180:1240;for(let r=n;r<i.length;r++)i[r]+=$p((r-n)/e,s,5)*.4}}function jM(i,e){for(let t=0;t<i.length;t++){let n=t/e,s=Math.sin(2*Math.PI*24*n)>0?1:.15,r=Math.min(1,n*20)*(n<1.7?1:Math.exp(-(n-1.7)*6));i[t]=s*r*(Math.sin(2*Math.PI*690*n)+.5*Math.sin(2*Math.PI*1890*n)+.3*Math.sin(2*Math.PI*2750*n))}}function Xp(i,e){let t=[2093,3140,4410,5870].map(n=>n*Kn(.97,1.03));for(let n=0;n<i.length;n++){let s=n/e,r=0;t.forEach((o,a)=>{r+=Math.sin(2*Math.PI*o*s)*Math.exp(-s*(7+a*4))/(a+1)}),i[n]=r+(Math.random()*2-1)*Math.exp(-s*200)*.6}}function QM(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/i.length;t+=.3*(Math.random()*2-1-t),i[n]=t*Math.sin(Math.PI*s)**2}}function qp(i,e){let t=0;for(;t<1.3;){let s=55+70*t+Kn(-8,8),r=Math.floor(t*e);for(let o=0;o<e*.04&&r+o<i.length;o++){let a=o/e;i[r+o]+=(Math.sin(2*Math.PI*420*a)*.6+Math.sin(2*Math.PI*960*a)*.3)*Math.exp(-a*90)}t+=1/s}let n=Math.floor(1.32*e);for(let s=0;n+s<i.length;s++){let r=s/e;i[n+s]+=Math.sin(2*Math.PI*70*r)*Math.exp(-r*14)*1.2}}function eE(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/e;t+=.12*(Math.random()*2-1-t),i[n]=(t*.9+Math.sin(2*Math.PI*85*s)*.35)*Math.min(1,s/.006)*Math.exp(-s*32)}}function Yp(i,e){let t=0,n=0;for(let o=0;o<i.length;o++)t=(t+.02*(Math.random()*2-1))/1.02,n+=.05*(t-n),i[o]=n*1.2;let s=new Float32Array(i.length);za(s,e,{count:4,f0min:120,f0max:260,sylMin:.1,sylMax:.22,gapMax:1.6,muffle:.3});for(let o=0;o<i.length;o++)i[o]+=s[o]*.35;[[1.2,410,520],[5.1,360,450]].forEach(([o,a,l])=>{let c=Math.floor(o*e);for(let u=0;u<e*.45&&c+u<i.length;u++){let h=u/e,d=f=>Math.sign(Math.sin(2*Math.PI*f*h));i[c+u]+=(d(a)+d(l))*.08*Math.min(1,h*30)*Math.min(1,(.45-h)*30)}});let r=Math.floor(3.3*e);for(let o=0;o<2;o++)for(let a=0;a<e*.6;a++){let l=r+o*Math.floor(e*.18)+a;l<i.length&&(i[l]+=$p(a/e,2400,9)*.2)}}function tE(i,e){[[0,.55],[.75,1.5]].forEach(([t,n])=>{for(let s=Math.floor(t*e);s<Math.min(i.length,n*e);s++){let r=s/e,o=(r-t)/(n-t),a=Math.min(1,o*25)*Math.min(1,(1-o)*12),l=.55+.45*Math.sign(Math.sin(2*Math.PI*28*r));i[s]+=a*l*(Math.sin(2*Math.PI*2950*r)+.3*Math.sin(2*Math.PI*5900*r)+(Math.random()-.5)*.25)}})}function nE(i,e){let t=(n,s)=>{for(let r=0;r<e*.18;r++){let o=r/e,a=Math.floor(n*e)+r;a<i.length&&(i[a]+=s*Math.sin(2*Math.PI*52*o)*Math.exp(-o*26))}};t(0,1),t(.28,.7)}function iE(i,e){for(let t=0;t<i.length;t++){let n=t/e;i[t]=(Math.sin(2*Math.PI*520*n)*.7+Math.sin(2*Math.PI*1180*n)*.25)*Math.exp(-n*55)+(Math.random()*2-1)*Math.exp(-n*400)*.25}}function sE(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/e,r=s/(i.length/e);t+=.08*(Math.random()*2-1-t);let o=Math.min(1,s/.25)*Math.pow(1-r,1.6)*(1+.25*Math.sin(2*Math.PI*7*s)*(1-r));i[n]=t*o*1.6}}function Zp(i){let e=0;for(let t=0;t<i.length;t++)e=(e+.01*(Math.random()*2-1))/1.01,i[t]=e}function rE(i,e){let t=0;for(let n=0;n<i.length;n++)t=(t+.02*(Math.random()*2-1))/1.02,i[n]=t*.6+(Math.random()<6e-4?(Math.random()-.5)*2:0)}var oE=.07,Jp=["sewing","factory","hum","room","chatter","children","street","schoolBell","shiftBell","coin","fabric","door","step","tap","heartbeat"],rf={market:i=>yn(i,8,Yp,.5),coins:i=>yn(i,.7,Xp),drone:i=>yn(i,8,Zp,.5),whispers:i=>yn(i,8,(e,t)=>za(e,t,{count:4,f0min:90,f0max:160,sylMin:.15,sylMax:.3,gapMax:1.2,muffle:.12}),.5),yells:i=>yn(i,6,(e,t)=>za(e,t,{count:4,f0min:140,f0max:240,sylMin:.2,sylMax:.4,gapMax:.8,muffle:.4})),thunder:i=>yn(i,3,(e,t)=>{Zp(e);for(let n=0;n<e.length;n++)e[n]*=Math.exp(-n/t*1.2)}),fire:i=>yn(i,6,rE,.4),doorWood:i=>yn(i,1.8,qp),wind:i=>yn(i,6,Wp,.5),whistle:i=>yn(i,1.6,tE),heartbeat:i=>yn(i,.8,nE),tap:i=>yn(i,.12,iE),exhale:i=>yn(i,2.2,sE),sewing:i=>yn(i,2,ZM),factory:i=>yn(i,6,JM,.5),hum:i=>yn(i,4,KM,.3),room:i=>yn(i,6,Wp,.5),chatter:i=>yn(i,12,(e,t)=>za(e,t,{count:5,f0min:105,f0max:230,sylMin:.11,sylMax:.25,gapMax:2.4}),.6),children:i=>yn(i,12,(e,t)=>za(e,t,{count:6,f0min:250,f0max:420,sylMin:.08,sylMax:.18,gapMax:1.4,laugh:!0,muffle:.4}),.6),street:i=>yn(i,8,Yp,.5),schoolBell:i=>yn(i,3.6,$M),shiftBell:i=>yn(i,2.2,jM),coin:i=>yn(i,.7,Xp),fabric:i=>yn(i,.4,QM),door:i=>yn(i,1.8,qp),step:i=>yn(i,.18,eE)},Vc=class{constructor(e){this.listener=e,this.ctx=e.context,this.buffers={},this.ready=!1}async init(){if(!this.ready){try{await this.ctx.resume()}catch{}if(!this.manifest){this.manifest={};try{let e=await fetch("audio/manifest.json",{cache:"no-cache"});e.ok&&(this.manifest=await e.json())}catch{}}await this.load(Jp),this.ready=!0,this.rest=this.load([...new Set([...Object.keys(rf),...Object.keys(this.manifest)])].filter(e=>!Jp.includes(e)))}}async load(e){for(let t of e){if(this.buffers[t])continue;let n=this.manifest&&this.manifest[t];if(n)try{let s=await fetch("audio/"+n);this.buffers[t]=await this.ctx.decodeAudioData(await s.arrayBuffer());continue}catch{console.warn("[audio] could not load",n,"\u2014 using placeholder")}rf[t]&&(this.buffers[t]=rf[t](this.ctx)),await new Promise(s=>setTimeout(s,0))}}setMaster(e){this.listener.setMasterVolume(e)}loop(e,{object:t=null,volume:n=1,rate:s=1,ref:r=1.5,offset:o=Math.random()}={}){if(!this.buffers[e])return null;let a=t?new Na(this.listener):new No(this.listener);return a.setBuffer(this.buffers[e]),a.setLoop(!0),a.setVolume(n),a.setPlaybackRate(s),t&&(a.setRefDistance(r),a.setRolloffFactor(1.4),t.add(a)),a.offset=o*this.buffers[e].duration,a.play(),a}oneShot(e,{object:t=null,volume:n=1,rate:s=1,ref:r=1.5}={}){if(!this.buffers[e])return;e==="step"&&(n*=oE);let o=t?new Na(this.listener):new No(this.listener);return o.setBuffer(this.buffers[e]),o.setVolume(n),o.setPlaybackRate(s),t&&(o.setRefDistance(r),t.add(o)),o.onEnded=()=>{o.isPlaying=!1,o.parent&&o.parent.remove(o)},o.play(),o}fade(e,t,n=1){if(!e)return;let s=e.gain.gain,r=this.ctx.currentTime;s.cancelScheduledValues(r),s.setValueAtTime(s.value,r),s.linearRampToValueAtTime(t,r+n)}stopAll(e){e.forEach(t=>{if(t)try{t.isPlaying&&t.stop(),t.parent&&t.parent.remove(t)}catch{}})}};function Oa(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=jp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);let g=jp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function jp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new on(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let v=u.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var aE=(i,e,t)=>i+(e-i)*t,Gc=(i,e,t,n)=>aE(i,e,1-Math.exp(-t*n)),of={};function af(i="room"){if(of[i])return of[i];let e=new tt({vertexColors:!0,flatShading:!0,roughness:.84,metalness:0,side:At,shadowSide:Fi});return i==="sunlit"&&(e.fog=!1,e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * 0.32;`)},e.customProgramCacheKey=()=>"person-sunlit"),i==="hand"&&(e.roughness=.7),of[i]=e}var Ti=(i,e,t,n=1)=>new wi(1,n).scale(i,e,t),Gi=(i,e,t,n=7)=>new Ot(i,e,t,n,1).translate(0,-t/2,0),Fo=(i,e,t)=>new Ct(i,e,t);function lE(i,e=8){return new Ei(i.map(([t,n])=>new we(Math.max(t,5e-4),n)),e)}function cE(i){let e=(i*9301+49297)%233280||7;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function hE(i){let e=new wi(1,2),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.max(0,-r);s*=1-.22*a*a,o>0?o*=1-.1*a+.06*(1-Math.abs(r)):o*=1.04-.25*a,r*=r<0?1.08:1,t.setXYZ(n,s*.084*i,r*.105*i,o*.097*i)}return e}var Wc=class{constructor(e=1){this.bones=[],this.parts=[],this.J={},this.rand=cE(e)}bone(e,t,n=0,s=0,r=0){let o=new Ra;return o.name=e,o.position.set(n,s,r),t&&t.add(o),this.bones.push(o),this.J[e]=o,o}add(e,t,n,s={}){let r=new pt().compose(new b(s.x||0,s.y||0,s.z||0),new bn().setFromEuler(new Vt(s.rx||0,s.ry||0,s.rz||0)),new b(s.sx??1,s.sy??1,s.sz??1));this.parts.push({bone:e,geo:t,color:new xe(n),m:r,jitter:s.jitter??.05})}build(e){let t=this.bones[0];t.updateMatrixWorld(!0);let n=new Map(this.bones.map((a,l)=>[a,l])),s=this.parts.map(a=>{let l=a.geo.index?a.geo.toNonIndexed():a.geo.clone();a.geo.dispose();for(let v of Object.keys(l.attributes))v!=="position"&&v!=="normal"&&l.deleteAttribute(v);l.applyMatrix4(a.m),l.applyMatrix4(a.bone.matrixWorld);let c=l.attributes.position.count,u=new Float32Array(c*3),h=new Uint16Array(c*4),d=new Float32Array(c*4),f=n.get(a.bone),g=new xe;for(let v=0;v<c;v+=3){let m=1+(this.rand()-.5)*2*a.jitter;g.copy(a.color).multiplyScalar(m);for(let p=v;p<v+3&&p<c;p++)u[p*3]=g.r,u[p*3+1]=g.g,u[p*3+2]=g.b,h[p*4]=f,d[p*4]=1}return l.setAttribute("color",new on(u,3)),l.setAttribute("skinIndex",new bo(h,4)),l.setAttribute("skinWeight",new on(d,4)),l}),r=Oa(s);s.forEach(a=>a.dispose());let o=new pc(r,e);return o.add(t),o.updateMatrixWorld(!0),o.bind(new mc(this.bones)),o.castShadow=!0,o.receiveShadow=!0,o}},Bo=(i,e)=>new xe(i).multiplyScalar(e).getHex(),Xc=[9067068,8014896,10119236,7225896,11039826];function Mn({skin:i=Xc[0],top:e=8010282,bottom:t=3816010,hair:n=1577486,female:s=!1,child:r=!1,scale:o=1,belly:a=0,mustache:l=!1,scarf:c=null,cap:u=!1,outfit:h=null,build:d=1,sleeves:f=null,seed:g=1,material:v=null,glasses:m=!1}={}){h=h||(s?"salwar":r?"shirt":"kurta");let p=new Wc(g*31+(s?7:3)+(r?11:0)),_=r?.74:1,x=r?.93:1,M=(r?.82:1)*(s?.93:1)*d,T=i,P=Bo(i,.78),R=1445900,U=n,Y=e,y=t,A=3811870;f=f||(h==="shirt"&&!r?"elbow":h==="uniform"?"short":s?"elbow":"full");let q=.93*_,J=p.bone("root",null),K=p.bone("hips",J,0,q,0),pe=p.bone("spine",K,0,.04*_,0),j=p.bone("neck",pe,0,.49*_,0),he=p.bone("head",j,0,.05*_+.008,0),re=p.bone("skirt",K,0,.02*_,0);p.add(K,new Ot(.14*M,(s?.15:.135)*M,.17*_,8),y,{y:-.02*_,sz:.72});let ye=a,Ie=[[0,-.02],[.136+ye*.4,0],[.134+ye,.13],[.146+ye*.5,.27],s&&!r?[.158,.33]:[.158,.36],[.165,.42],[.12,.475],[.055,.5],[0,.505]].map(([C,Q])=>[C*M,Q*_]);p.add(pe,lE(Ie,8),Y,{sz:s?.72:.68,jitter:.06}),p.add(pe,new Ii(.052,.012,4,8).rotateX(Math.PI/2),Bo(Y,.85),{y:.495*_,sz:.85});let Te=h==="kurta"?.36:h==="salwar"?.5:h==="uniform"&&s?.36:0;if(Te){let C=[[.135*M,0],[.155*M,-.12*_],[.18*M,-Te*.8*_],[.19*M,-Te*_],[.17*M,-Te*_-.004]],Q=new Ei(C.map(([G,se])=>new we(G,se)),9);Q.scale(1,1,.74),p.add(re,Q,h==="uniform"?y:Y,{jitter:.07})}if(c){let C=new Rr([[-.15,.22,.1],[-.05,.36,.115],[.09,.47,.06],[.16,.46,-.04],[.15,.3,-.1],[.12,.02,-.11]].map(([G,se,ce])=>new b(G*M,se*_,ce))),Q=new Cr(C,16,.042,4,!1);Q.scale(1,1,1),p.add(pe,Q,c,{jitter:.08})}p.add(j,new Ot(.05*x,.062*x,.09*_,7).translate(0,.015,0),T);let Ve=(C,Q,G)=>({x:C*x,y:Q*x,z:G*x});p.add(he,hE(x),T,{...Ve(0,.105,0),jitter:.025}),p.add(he,new bi(.017*x,.042*x,4).rotateX(Math.PI/2+.35).rotateZ(Math.PI/4),Bo(T,1.03),{...Ve(0,.088,.099)}),p.add(he,Fo(.11*x,.012*x,.018*x),T,{...Ve(0,.127,.086),rx:-.3}),[-1,1].forEach(C=>{p.add(he,Ti(.0095*x,.0085*x,.005*x,0),1314057,{...Ve(C*.031,.112,.089),jitter:0}),p.add(he,Fo(.032*x,.007*x,.01*x),U,{...Ve(C*.034,.132,.094),rz:C*-.08}),p.add(he,Ti(.011*x,.024*x,.017*x,0),Bo(T,.95),{...Ve(C*.084,.1,-.006)})}),p.add(he,Fo(.034*x,.006*x,.01*x),P,{...Ve(0,.05,.081)}),u?(p.add(he,new Ot(.084*x,.088*x,.06*x,9),14209212,{...Ve(0,.19,-.008),sz:1.08}),p.add(he,Ti(.084*x,.07*x,.09*x,1),U,{...Ve(0,.105,-.045)})):(p.add(he,Ti(.088*x,s?.072*x:.062*x,.1*x,1),U,{...Ve(0,.162,-.012),jitter:.06}),p.add(he,Ti(.085*x,.09*x,.07*x,1),U,{...Ve(0,.112,-.042),jitter:.06}),s?(p.add(he,Ti(.04*x,.036*x,.036*x,0),U,{...Ve(0,.1,-.11)}),r?p.add(he,Gi(.018,.01,.16,5),U,{...Ve(0,.09,-.1),rx:.2}):p.add(he,Gi(.022,.012,.3,5),U,{...Ve(0,.09,-.1),rx:.18})):p.add(he,Fo(.11*x,.02*x,.04*x),U,{...Ve(0,.19,.06),rx:.4})),l&&p.add(he,Fo(.054*x,.01*x,.014*x),U,{...Ve(0,.064,.084),rx:.2}),m&&[-1,1].forEach(C=>p.add(he,new Ii(.016*x,.003,4,10),2761760,{...Ve(C*.032,.111,.097)}));let lt=.29*_,le=.25*_,Me=f==="none"?T:Y,_e=f==="full"?Y:T,Ae=f==="short"?T:Me;["L","R"].forEach((C,Q)=>{let G=Q?1:-1,se=p.bone("sh"+C,pe,G*.16*M,.43*_,0),ce=p.bone("el"+C,se,0,-lt,0),ue=p.bone("hand"+C,ce,0,-le,0);p.add(se,Ti(.05*M,.052,.05*M),Y,{x:-G*.012,y:-.008}),p.add(se,Gi(.05*M,.041*M,lt),f==="short"?Y:Ae,{sy:f==="short"?.45:1}),f==="short"&&p.add(se,Gi(.036*M,.034*M,lt*.55),T,{y:-lt*.45}),p.add(ce,Ti(.04*M,.04,.04*M,0),f==="full"?Y:T),p.add(ce,Gi(.039*M,.031*M,le),_e),f==="elbow"&&p.add(ce,Gi(.046*M,.044*M,.04),Y,{y:.02}),f==="full"&&p.add(ce,Gi(.036*M,.035*M,.03),Bo(Y,.9),{y:-le+.03});let k=r?.82:1;p.add(ue,Ti(.017*k,.045*k,.03*k,1),T,{y:-.045*k}),p.add(ue,Ti(.014*k,.036*k,.028*k,1),T,{x:-G*.004,y:-.1*k,rz:-G*.2}),p.add(ue,Ti(.011*k,.028*k,.011*k,0),T,{x:-G*.006,y:-.052*k,z:.028*k,rx:.4}),s&&!r&&p.add(ce,new Ii(.031,.005,4,9).rotateX(Math.PI/2),13148224,{y:-le+.02})});let Ue=.45*_,Pe=.43*_,Fe=r&&(h==="shirt"||h==="uniform")&&!s;["L","R"].forEach((C,Q)=>{let G=Q?1:-1,se=p.bone("hip"+C,K,G*.078*M,-.05*_,0),ce=p.bone("knee"+C,se,0,-Ue,0),ue=p.bone("foot"+C,ce,0,-Pe,0),k=h==="salwar"?1.18:h==="kurta"?1.06:1;p.add(se,Gi(.078*M*k,.058*M*k,Ue),y),p.add(ce,Ti(.057*M*k,.052,.057*M*k,0),Fe?T:y),Fe?(p.add(se,Gi(.075*M,.068*M,Ue*.6),y),p.add(ce,Gi(.046*M,.034*M,Pe),T)):(p.add(ce,Gi(.054*M*k,(h==="salwar"?.038:.045)*M,Pe-.02),y),h==="salwar"&&p.add(ce,Gi(.036*M,.04*M,.04),Bo(y,.85),{y:-Pe+.05})),p.add(ue,Ti(.034*_+.01,.026,.09*_+.02,0),T,{y:-.02,z:.04}),p.add(ue,Fo(.075*_+.02,.016,.22*_+.05),A,{y:-.045,z:.045})});let Ke=p.build(v||af());Ke.boundingSphere=new ki(new b(0,.9*_,0),1.25*_+.2);let B=new it;return B.add(Ke),B.scale.setScalar(o),B.userData={J:p.J,mesh:Ke,t0:g*1.37%10+Math.random()*3,work:1,mode:"stand",hipY:q,k:_,look:0,lookPitch:0},B}function ko(i,e){let{J:t}=i.userData;i.userData.mode="sit",t.hips.position.y=e/i.scale.y,t.hipL.rotation.set(-1.45,0,.08),t.hipR.rotation.set(-1.45,0,-.08),t.kneeL.rotation.x=1.5,t.kneeR.rotation.x=1.5,t.footL.rotation.x=0,t.footR.rotation.x=0,t.skirt.rotation.x=-1.1,t.skirt.scale.set(1,.85,1)}var Fa=new b;function qc(i,e,t=.08){let n=i.userData.J,s=null,r=1/0;i.updateMatrixWorld(!0);for(let o=-1.75;o<=-.85;o+=.05)for(let a=.1;a<=1.75;a+=.05){if(n.hipL.rotation.x=o,n.kneeL.rotation.x=a,n.hipL.updateMatrixWorld(!0),n.footL.getWorldPosition(Fa),Fa.y<t)continue;let l=Math.hypot(Fa.x-e.x,(Fa.y-e.y)*1.5,Fa.z-e.z);l<r&&(r=l,s=[o,a])}return s||(s=[-1.45,.9]),i.userData.hipBase=s[0],i.userData.kneeBase=s[1],n.hipL.rotation.x=n.hipR.rotation.x=s[0],n.kneeL.rotation.x=n.kneeR.rotation.x=s[1],i.updateMatrixWorld(!0),r}function Vo(i){let{J:e,hipY:t}=i.userData;i.userData.mode="stand",e.hips.position.y=t,["hipL","hipR","kneeL","kneeR","footL","footR","skirt"].forEach(n=>e[n].rotation.set(0,0,0)),e.skirt.scale.set(1,1,1)}function lf(i,e,t,n=1){let s=i.userData,r=s.J,o=e+s.t0,a=s.work,l=Math.sin(o*9)*.12*a*n;r.spine.rotation.x=.3*a+.03*Math.sin(o*.7),r.neck.rotation.x=.32*a+.05*Math.sin(o*.4);let c=Math.max(0,Math.sin(o*.23+s.t0))**12;r.head.rotation.y=Gc(r.head.rotation.y,c*.9*Math.sign(Math.sin(s.t0*3))+s.look,3,t),r.head.rotation.x=Gc(r.head.rotation.x,-c*.4+s.lookPitch,3,t);let u=Math.sin(o*1.6)*.08*a;r.shL.rotation.set(-.95*a-.2-u,0,.16),r.shR.rotation.set(-.95*a-.2+u,0,-.16),r.elL.rotation.set(-.9*a-.3,0,0),r.elR.rotation.set(-.9*a-.3,0,0),r.handL.rotation.x=.5*a,r.handR.rotation.x=.5*a;let h=s.kneeBase??1.5;r.kneeL.rotation.x=h+l,r.kneeR.rotation.x=h-l,r.footL.rotation.x=l*1.5,r.footR.rotation.x=-l*1.5;let d=Math.sin(o*1.5);r.spine.scale.set(1+.012*d,1,1+.01*d),r.shL.position.y=r.shR.position.y=.43*s.k+.004*d}function Cs(i,e,t=1){let n=i.userData.J,s=Math.sin(e),r=Math.cos(e);n.hipL.rotation.x=s*.5*t,n.hipR.rotation.x=-s*.5*t,n.kneeL.rotation.x=Math.max(0,-r)*.75*t,n.kneeR.rotation.x=Math.max(0,r)*.75*t,n.footL.rotation.x=-Math.max(0,s)*.2*t,n.footR.rotation.x=-Math.max(0,-s)*.2*t,n.shL.rotation.x=-s*.38*t,n.shR.rotation.x=s*.38*t,n.shL.rotation.z=-.06,n.shR.rotation.z=.06,n.elL.rotation.x=-.25-Math.max(0,s)*.2,n.elR.rotation.x=-.25-Math.max(0,-s)*.2,n.hips.position.y=i.userData.hipY+Math.abs(r)*.022*t,n.hips.rotation.y=s*.06*t,n.spine.rotation.y=-s*.1*t,n.skirt.rotation.x=Math.abs(s)*.1*t}function Di(i,e,t){let n=i.userData,s=n.J,r=e+n.t0;s.spine.rotation.x=.04+.012*Math.sin(r*1.3);let o=Math.sin(r*1.5);s.spine.scale.set(1+.014*o,1,1+.01*o),s.hips.rotation.z=.02*Math.sin(r*.21),s.head.rotation.y=Gc(s.head.rotation.y,n.look,4,t),s.head.rotation.x=Gc(s.head.rotation.x,n.lookPitch,4,t)}var uE=[[-.0225,-.062,.031,.027,.0094],[-.0072,-.066,.034,.029,.0098],[.0085,-.064,.032,.027,.0094],[.0235,-.058,.025,.022,.0084]],Go=1.3;function em(i,{skin:e=9067068,sleeve:t=8226708}={}){let n=new Wc(i>0?5:9),s=i,r=n.bone("wrist",null);n.add(r,new Ot(.0235,.0225,.04,7).rotateX(Math.PI/2).rotateZ(Math.PI/7),e,{z:.012,sx:1.18,jitter:.02});let o=new Ct(.066,.025,.066);{let h=o.attributes.position;for(let d=0;d<h.count;d++)h.getZ(d)>0?(h.setY(d,h.getY(d)*1.2),h.setX(d,h.getX(d)*.94)):h.setX(d,h.getX(d)*.98)}n.add(r,o,e,{z:-.03,jitter:.03}),n.add(r,Ti(.024,.013,.024,0),e,{x:s*-.016,y:-.007,z:-.014});let a=(h,d,f,g)=>new Ot(d,h,f+g,5).rotateX(Math.PI/2).rotateZ(Math.PI/5).translate(0,0,-(f-g)/2);uE.forEach(([h,d,f,g,v],m)=>{let p=n.bone("f"+m+"a",r,s*h,.001,d),_=n.bone("f"+m+"b",p,0,0,-f);n.add(p,a(v*1.05,v*.98,f,v*.9),e,{sy:.88}),n.add(_,a(v*.98,v*.8,g,v*.7),e,{sy:.88}),n.add(_,new bi(v*.8,v*.9,5).rotateX(-Math.PI/2).rotateZ(Math.PI/5),e,{z:-g-v*.42,sy:.88})});let l=n.bone("t0",r,s*-.029,-.011,-.02);l.rotation.set(-.35,s*.62,s*.5);let c=n.bone("t1",l,0,0,-.026);n.add(l,a(.0112,.0102,.026,.012),e,{sy:.9}),n.add(c,a(.0102,.0088,.02,.008),e,{sy:.9}),n.add(c,new bi(.0088,.009,5).rotateX(-Math.PI/2).rotateZ(Math.PI/5),e,{z:-.024,sy:.9});let u=n.build(af("hand"));return u.scale.setScalar(Go),u.boundingSphere=new ki(new b(0,0,0),.3),u.userData={J:n.J,side:i,thumbBase:l.rotation.clone()},u.renderOrder=2,u}var Ba={relax:[.28,.32,.36,.42,.2],flat:[.05,.05,.06,.08,.05],grip:[.9,.92,.94,.95,.65],pinch:[.55,.45,.6,.7,.55],cup:[.32,.3,.3,.32,.15],point:[.02,.9,.94,.95,.6],fist:[1,1,1,1,.9],pray:[.12,.1,.1,.13,.08]};function tm(i,e){let t=i.userData.J,n=i.userData.side,s=i.userData.thumbBase;for(let r=0;r<4;r++)t["f"+r+"a"].rotation.set(-e[r]*1.35,0,0),t["f"+r+"b"].rotation.set(-e[r]*1.5,0,0);t.t0.rotation.set(s.x-e[4]*.35,s.y-n*e[4]*.5,s.z-n*e[4]*.25),t.t1.rotation.set(-e[4]*.9,0,0)}function Wo(i,{hug:e=!1}={}){let{J:t,k:n}=i.userData;i.userData.mode="floor",t.hips.position.y=.12*n,t.hipL.rotation.set(-2.05,0,.22),t.hipR.rotation.set(-2.05,0,-.22),t.kneeL.rotation.set(2.25,0,0),t.kneeR.rotation.set(2.25,0,0),t.footL.rotation.x=-.2,t.footR.rotation.x=-.2,t.skirt.rotation.x=-1.25,t.skirt.scale.set(1,.8,1),t.spine.rotation.x=.18,e&&(t.shL.rotation.set(-1,0,.35),t.shR.rotation.set(-1,0,-.35),t.elL.rotation.x=-1.3,t.elR.rotation.x=-1.3)}function nm(i){let{J:e}=i.userData;e.hipL.rotation.set(-.5,0,0),e.hipR.rotation.set(-.7,0,0),e.kneeL.rotation.x=.9,e.kneeR.rotation.x=1.1,e.shL.rotation.set(-.9,0,0),e.shR.rotation.set(-1.2,0,0),e.elL.rotation.x=-1.2,e.elR.rotation.x=-1.4,e.spine.rotation.x=.2,e.neck.rotation.x=.25}function ka(i=0){let e=af().clone(),t=Mn({top:11047774,bottom:9075278,skin:[8014896,7225896][i%2],mustache:!0,outfit:"shirt",sleeves:"short",belly:.02+i*.015,build:1.06,seed:70+i,material:e,scale:1.34}),n=t.userData.J,s=(f,g,v,m,p,_)=>{let x=new De(f,g);return x.position.set(m,p,_),x.castShadow=!0,v.add(x),x},r=new tt({color:4865058,flatShading:!0,roughness:.8}),o=s(new Ot(.095,.1,.07,9),r,n.head,0,.19,-.005);o.scale.z=1.1;let a=s(new Ct(.17,.01,.08),r,n.head,0,.16,.1);s(new Ct(.3,.05,.22),new tt({color:2760212,roughness:.6}),n.hips,0,.02,0);let l=s(new Ot(.012,.012,1,6),new tt({color:6965802,flatShading:!0}),n.handR,0,-.05,.02);l.rotation.x=1.2;let c=new yt({color:new xe(3,.35,.12),fog:!1}),u=[-1,1].map(f=>{let g=s(new nn(.014,6,5),c,n.head,f*.031,.112,.095);return g.scale.setScalar(.001),g}),h=new tt({color:657414,flatShading:!0}),d=[-1,1].map(f=>{let g=s(new bi(.025,.2,5),h,n.head,f*.06,.2,-.02);return g.rotation.z=-f*.5,g.scale.setScalar(.001),g});return t.userData.police={mat:e,eyes:u,horns:d,cap:o,brim:a,base:t.scale.x,k:0},t.userData.stride=0,t.userData.walk=0,t}function Yc(i,e){let t=i.userData.police;if(!t)return;t.k=e,t.mat.color.setRGB(1,1,1).lerp(new xe(.1,.07,.08),e);let n=t.base;i.scale.set(n*(1-.1*e),n*(1+.5*e),n*(1-.1*e));let s=i.userData.J;s.shL.scale.set(1,1+.7*e,1),s.shR.scale.set(1,1+.7*e,1),t.eyes.forEach(r=>r.scale.setScalar(Math.max(.001,e))),t.horns.forEach(r=>r.scale.setScalar(Math.max(.001,e))),t.cap.visible=t.brim.visible=e<.5}var Qp=[{top:14735560,bottom:5917242,outfit:"kurta"},{female:!0,top:3107663,bottom:3107663,scarf:12868218},{top:5925502,bottom:2763312,outfit:"shirt",sleeves:"elbow"},{female:!0,top:11879470,bottom:8006174,scarf:14262826},{top:12103834,bottom:4866104,cap:!0},{female:!0,top:2046568,bottom:2046568,scarf:15327695},{top:9067066,bottom:3813926,outfit:"shirt",sleeves:"short",belly:.03},{female:!0,top:14262826,bottom:6957626,scarf:3107663},{top:6978970,bottom:15327695,outfit:"kurta",glasses:!0},{female:!0,top:12868218,bottom:5909066,scarf:15327695}];function cf(i){let e=Qp[i%Qp.length],t=Mn({...e,skin:Xc[i*3%Xc.length],build:.92+i%4*.06,seed:100+i,scale:1.3+i%3*.03});return t.userData.stride=Math.random()*6,t.userData.walk=1,t}function Lr(i,e,t){let n=i.userData;n.walk>.02?Cs(i,n.stride*2.2,n.walk):Di(i,e,t)}var st=(i,e,t)=>i+(e-i)*t,Ft=(i,e,t)=>Math.max(e,Math.min(t,i)),St=i=>i*i*(3-2*i),Yt=(i,e,t,n)=>st(i,e,1-Math.exp(-t*n)),hf=new Map;function Ne(i,e={}){let t=i+JSON.stringify(e);return hf.has(t)||hf.set(t,new tt({color:i,roughness:.8,metalness:0,...e})),hf.get(t)}var an=class{constructor(){this.groups=new Map,this._m=new pt,this._q=new bn,this._e=new Vt,this._s=new b,this._p=new b}add(e,t,n=0,s=0,r=0,o=0,a=0,l=0,c=1,u=1,h=1){return this._m.compose(this._p.set(n,s,r),this._q.setFromEuler(this._e.set(o,a,l)),this._s.set(c,u,h)),this.addM(e,t,this._m)}addM(e,t,n){let s=e.index?e.toNonIndexed():e.clone();for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);return s.attributes.uv||s.setAttribute("uv",new on(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n),this.groups.has(t)||this.groups.set(t,[]),this.groups.get(t).push(s),s}addObject(e){e.updateMatrixWorld(!0),e.traverse(t=>{t.isMesh&&this.addM(t.geometry,t.material,t.matrixWorld)})}build(e,{cast:t=!0,receive:n=!0}={}){let s=[],r=new Map,o=new xe;for(let[a,l]of this.groups){if(!(a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.vertexColors&&a.emissive.getHex()===0&&a.colorWrite!==!1)){s.push(this._mesh(Oa(l),a,e,t,n)),l.forEach(h=>h.dispose());continue}let u=[a.roughness.toFixed(2),a.metalness.toFixed(2),a.flatShading?1:0,a.side].join("|");r.has(u)||r.set(u,{mat:a,geos:[]}),o.copy(a.color),l.forEach(h=>{let d=h.attributes.position.count,f=new Float32Array(d*3);for(let g=0;g<d;g++)f[g*3]=o.r,f[g*3+1]=o.g,f[g*3+2]=o.b;h.setAttribute("color",new on(f,3)),r.get(u).geos.push(h)})}for(let{mat:a,geos:l}of r.values()){let c=dE(a);s.push(this._mesh(Oa(l),c,e,t,n)),l.forEach(u=>u.dispose())}return this.groups.clear(),s}_mesh(e,t,n,s,r){let o=new De(e,t);return o.castShadow=s,o.receiveShadow=r,o.matrixAutoUpdate=!1,o.updateMatrix(),n.add(o),o}},uf=new Map;function dE(i){let e=[i.roughness.toFixed(2),i.metalness.toFixed(2),i.flatShading?1:0,i.side].join("|");return uf.has(e)||uf.set(e,new tt({vertexColors:!0,roughness:i.roughness,metalness:i.metalness,flatShading:i.flatShading,side:i.side})),uf.get(e)}var te={box:(i,e,t)=>new Ct(i,e,t),cyl:(i,e,t,n=10)=>new Ot(i,e,t,n)};function un(i,e,t=0,n=0,s=0,r){let o=new De(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function An(i,e,t,n=.02,s=.006){let r=new Qi,o=-i/2,a=-e/2;r.moveTo(o+n,a),r.lineTo(o+i-n,a),r.quadraticCurveTo(o+i,a,o+i,a+n),r.lineTo(o+i,a+e-n),r.quadraticCurveTo(o+i,a+e,o+i-n,a+e),r.lineTo(o+n,a+e),r.quadraticCurveTo(o,a+e,o,a+e-n),r.lineTo(o,a+n),r.quadraticCurveTo(o,a,o+n,a);let l=new La(r,{depth:t-s*2,bevelEnabled:!0,bevelSize:s,bevelThickness:s,bevelSegments:2,curveSegments:4});return l.rotateX(-Math.PI/2),l.translate(0,s,0),l}function Xo(i,e,t,n=.006){let s=i.clone().lerp(e,.5);s.y-=t;let r=new Co(i,s,e);return new Cr(r,16,n,4,!1)}var cs=()=>Ne(1447188,{roughness:.45,metalness:.55}),im=()=>Ne(1052688,{roughness:.28,metalness:.35}),Zc=()=>Ne(11569722,{roughness:.35,metalness:.9}),Ps=()=>Ne(12105908,{roughness:.25,metalness:.95});function fE(){let i=new Qi;return i.moveTo(.27,0),i.lineTo(.27,.27),i.quadraticCurveTo(.27,.36,.18,.36),i.lineTo(-.2,.35),i.quadraticCurveTo(-.27,.35,-.29,.3),i.lineTo(-.31,.16),i.lineTo(-.22,.16),i.lineTo(-.2,.27),i.quadraticCurveTo(-.15,.29,.1,.29),i.quadraticCurveTo(.17,.29,.17,.22),i.lineTo(.17,0),i.lineTo(.27,0),i}var Jc=null;function Ur({wood:i,batch:e=null,at:t=null,threadColor:n=11879470,headX:s=0}={}){let r=new it,o=new it;r.add(o),Jc||(Jc=new La(fE(),{depth:.1,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:3,curveSegments:10}),Jc.translate(0,0,-.05));let a=new an,l=s,c=(v,m,p,..._)=>a.add(v,m,p+l,..._);a.add(An(1.15,.68,.05,.03),i,0,-.05,0),c(An(.66,.3,.05,.04,.01),im(),-.02,0,0),c(te.box(.12,.004,.09),Ps(),-.27,.051,.02),c(Jc,im(),0,.05,-.02),c(te.box(.38,.008,.002),Zc(),-.02,.37,.045),c(te.box(.006,.24,.002),Zc(),.22,.18,.045),c(te.box(.2,.006,.002),Zc(),-.02,.33,.045),c(te.cyl(.004,.004,.09,6),Ps(),.05,.47,-.02),c(te.cyl(.022,.022,.05,10),Ne(n,{roughness:.9}),.05,.45,-.02),c(te.cyl(.026,.026,.006,10),Ne(13218954),.05,.42,-.02),c(te.cyl(.026,.026,.006,10),Ne(13218954),.05,.477,-.02),c(te.cyl(.018,.018,.01,10),Ps(),-.24,.33,.06,Math.PI/2),c(te.cyl(.005,.005,.14,6),Ps(),-.29,.15,0),c(te.box(.03,.006,.05),Ps(),-.29,.058,0);for(let v of[-.48,.48])a.add(te.box(.05,.92,.05),cs(),v,-.52,-.22,0,0,0),a.add(te.box(.05,.92,.05),cs(),v,-.52,.22,0,0,0),a.add(te.box(.05,.05,.55),cs(),v,-.96,0,0,0,0),a.add(te.box(.04,.04,.5),cs(),v,-.2,0,0,0,0),a.add(te.box(.04,.62,.04),cs(),v,-.55,0,.62,0,0),a.add(te.box(.04,.62,.04),cs(),v,-.55,0,-.62,0,0);if(a.add(te.box(.96,.035,.035),cs(),0,-.86,.05),a.add(te.box(.3,.1,.4),i,.25,-.13,0),a.add(te.cyl(.01,.01,.02,6),Zc(),.25,-.13,.205,Math.PI/2),c(te.cyl(.004,.004,1.05,4),Ne(3811870),.36,-.2,0,0,0,.04),e&&t){for(let[v,m]of a.groups)e.groups.has(v)||e.groups.set(v,[]),m.forEach(p=>{p.applyMatrix4(t),e.groups.get(v).push(p)});a.groups.clear()}else a.build(r);let u=(v,m,p=!0)=>{let _=new an;v.forEach(M=>_.add(...M));let[x]=_.build(new it,{cast:p,receive:!0});return x.matrixAutoUpdate=!0,x.position.set(0,0,0),x.rotation.set(0,0,0),x},h=u([[new Ot(.075,.075,.035,18),Ps(),0,0,0,0,0,Math.PI/2],[new Ct(.012,.12,.04),Ps(),.02,0,0]]);h.position.set(.32+l,.31,-.02),o.add(h);let d=u([[new Ot(.006,.006,.13,6),Ps(),0,.04,0],[new Ot(.0015,.0015,.05,4),Ps(),0,-.045,0]],null,!1);d.position.set(-.27+l,.16,.02),o.add(d);let f=u([[new Ii(.2,.014,6,24),cs(),0,0,0,0,Math.PI/2,0],...[0,1,2].map(v=>[new Ct(.012,.4,.02),cs(),0,0,0,v*Math.PI/3,0,0])]);f.position.set(.38,-.72,.05),o.add(f);let g=u([[new Ct(.62,.02,.26),cs(),0,0,0]]);return g.position.set(0,-.9,.12),o.add(g),r.userData={wheel:h,needle:d,tw:f,pedal:g,speed:1,ph:Math.random()*10,needleTip:new b(-.27+l,.06,.02)},r}function sm(i,e){let t=i.userData;t.ph+=e*26*t.speed,t.wheel.rotation.x=-t.ph,t.tw.rotation.x=-t.ph*.35,t.needle.position.y=.16+Math.sin(t.ph)*.022*Math.min(1,t.speed*4),t.pedal.rotation.x=Math.sin(t.ph*.35)*.12*Math.min(1,t.speed*3)}function $c(i){let e=new it,t=M=>[[.001,0],[.1,.004],[.135,.04],[.15,.12],[.145,.2],M?[.14,.26]:[.07,.25],M?[.142,.275]:[.035,.27]].map(([T,P])=>new we(T,P)),n=new Ei(t(!0),14),s=new Ei(t(!1),14),r=M=>{let T=M.attributes.position;for(let P=0;P<T.count;P++){let R=T.getX(P),U=T.getY(P),Y=T.getZ(P),y=Math.atan2(Y,R),A=1+.06*Math.sin(y*3+U*20)+.04*Math.sin(y*5);T.setX(P,R*A),T.setZ(P,Y*A*.72)}M.computeVertexNormals()};r(n),r(s),s.morphAttributes.position=[n.attributes.position],s.morphAttributes.normal=[n.attributes.normal];let o=new tt({map:i,roughness:.95,side:At}),a=new De(s,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a),a.morphTargetInfluences=[0];let l=new De(new ir(.12,14),Ne(1709070,{side:At}));l.rotation.x=-Math.PI/2,l.position.y=.02,l.scale.set(1,.72,1),e.add(l);let c=new De(new Cr(new Rr([new b(-.13,.25,0),new b(-.15,.5,0),new b(0,.62,0),new b(.15,.5,0),new b(.13,.25,0)]),20,.014,4,!1),new tt({map:i,roughness:1}));c.scale.set(1,1,.5),c.castShadow=!0,e.add(c);let u=new De(new wi(.018,0),Ne(13214826,{flatShading:!0}));u.position.set(.04,.27,.07),e.add(u);let h=new it;h.position.y=.03,e.add(h);let d=new De(new Ot(.006,.006,.07,6),Ne(14262826));d.rotation.z=Math.PI/2,d.rotation.y=.5,d.position.set(-.03,.01,.02),h.add(d);let f=new De(new bi(.006,.014,6),Ne(15257768));f.rotation.z=-Math.PI/2,f.position.set(.042,0,0),d.add(f);let g=[];for(let M=0;M<3;M++){let T=new De(new Ot(.018,.018,.004,14),Ne(13148224,{metalness:.9,roughness:.3}));T.position.set(.03-M*.022,.004+M*.003,-.02+M%2*.02),T.rotation.set(.1*M,0,.15),T.visible=!1,h.add(T),g.push(T)}let v=new it;v.visible=!1,h.add(v),[11879470,14262826,2046568,15327695].forEach((M,T)=>{let P=new De(new Ct(.07,.006,.05),Ne(M,{flatShading:!0}));P.position.set(-.04+T*.025,.02+T*.006,-.03+T%2*.04),P.rotation.set(.3*T,T,.2),v.add(P)});let m=new tt({color:14200944,roughness:.8,emissive:16751152,emissiveIntensity:0}),p=new it;p.visible=!1,h.add(p);let _=new De(An(.11,.08,.05,.015,.006),m);_.position.set(0,0,0),_.rotation.y=.3,p.add(_);let x=new De(new Ii(.04,.003,4,10),Ne(9067050));return x.rotation.x=Math.PI/2,x.position.y=.026,x.scale.set(1.3,1,1),p.add(x),e.userData={body:a,inner:l,contents:h,coins:g,pencil:d,strap:c,scraps:v,food:p,foodMat:m,open:0},e}function Va(i,e){let t=i.userData;t.open=e,t.body.morphTargetInfluences[0]=e,t.inner.visible=e>.05,t.contents.visible=e>.05||t.food&&t.food.visible&&t.foodMat.emissiveIntensity>.05}var Kc=class{constructor(e){let t=(()=>{let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.25,"rgba(255,236,200,.55)"),l.addColorStop(1,"rgba(255,220,170,0)"),a.fillStyle=l,a.fillRect(0,0,64,64);let c=new tn(o);return c.colorSpace=Lt,c})(),n=o=>new Gn({map:t,transparent:!0,depthWrite:!1,blending:_n,fog:!1,opacity:0,...o});this.group=new it,this.group.renderOrder=5,e.add(this.group),this.halo=new Nn(n({color:new xe(1,.78,.45)})),this.halo.scale.setScalar(.7),this.core=new Nn(n({color:new xe(1,.93,.8)})),this.core.scale.setScalar(.16),this.group.add(this.halo,this.core),this.N=14;let s=new Float32Array(this.N*3);this.seed=[];for(let o=0;o<this.N;o++)this.seed.push({a:Math.random()*6.28,r:.12+Math.random()*.22,ph:Math.random(),sp:.25+Math.random()*.3});let r=new Xt;r.setAttribute("position",new on(s,3)),this.motesMat=new As({map:t,size:.05,transparent:!0,depthWrite:!1,blending:_n,color:new xe(1,.85,.6),opacity:0,fog:!1}),this.motes=new ls(r,this.motesMat),this.motes.frustumCulled=!1,this.group.add(this.motes),this.target=null,this.urgent=!1,this.visible=!0,this.alpha=0,this.u=0,this.at=new b,this.has=!1}set(e){this.target=e?typeof e=="function"?e:Array.isArray(e)?e.map(t=>t.clone()):e.clone():null}update(e,t,n,s){this.u=Yt(this.u,this.urgent?1:0,3,e);let r=null;if(this.target&&n){let d=typeof this.target=="function"?this.target(n):this.target;Array.isArray(d)?(r=d.find(f=>Math.hypot(f.x-n.x,f.z-n.z)>1.6)||d[d.length-1],r&&(r={x:r.x,y:Math.max(r.y,1),z:r.z})):r=d}r&&(!this.has||this.alpha<.02?this.at.set(r.x,r.y,r.z):(this.at.x=Yt(this.at.x,r.x,6,e),this.at.y=Yt(this.at.y,r.y,6,e),this.at.z=Yt(this.at.z,r.z,6,e)),this.has=!0);let o=n?Math.hypot(this.at.x-n.x,this.at.z-n.z):5,a=r&&this.visible?1:0;this.alpha=Yt(this.alpha,a,a?2.2:4,e);let l=.5+.5*Math.sin(t*(2.2+this.u*3.5)),c=Ft((o-.6)/2.5,.35,1),u=this.alpha*c;this.group.position.copy(this.at),this.group.visible=this.alpha>.01,this.halo.material.opacity=u*(.32+.22*l+.15*this.u),this.halo.scale.setScalar((.55+.2*l+.25*this.u)*(.8+.25*Ft(o/6,0,1.6))),this.core.material.opacity=u*(.55+.3*l),this.motesMat.opacity=u*.8;let h=this.motes.geometry.attributes.position;this.seed.forEach((d,f)=>{let g=(t*d.sp+d.ph)%1;h.setXYZ(f,Math.cos(d.a+t*.4)*d.r*(1-g*.5),-.15+g*.6,Math.sin(d.a+t*.4)*d.r*(1-g*.5))}),h.needsUpdate=!0}};var rm=0,rr=new b,df=new b,om=new Vt,jc=class{constructor({camera:e,scene:t,canvas:n,audio:s,settings:r}){Object.assign(this,{camera:e,canvas:n,audio:s,settings:r}),this.dolly=new it,this.dolly.add(e),t.add(this.dolly),this.yaw=0,this.pitch=0,this.eye=1.3,this.canMove=!1,this.walk=1.9,this.run=3.3,this.vel=new we,this.bob=0,this.radius=.26,this.colliders=[],this.bounds=null,this.keys={},this.locked=!1,this.qHeld=!1,this.stepDist=0,this.moving=!1,this.breath=0,this.onPauseRequest=null,this.xr=!1,this.xrMove=new b,this.xrPoseOK=!1,this.xrPending=null,this.canRun=!0,this.jogAllowed=!1,this.speedScale=1,this.noclip=!1,addEventListener("keydown",o=>{this.keys[o.code]=!0,o.code==="KeyQ"&&(this.qHeld=!0)}),addEventListener("keyup",o=>{this.keys[o.code]=!1,o.code==="KeyQ"&&(this.qHeld=!1)}),addEventListener("blur",()=>{this.keys={},this.qHeld=!1}),document.addEventListener("pointerlockchange",()=>{let o=this.locked;this.locked=document.pointerLockElement===n,o&&!this.locked&&this.onPauseRequest&&!this.xr&&this.onPauseRequest()}),document.addEventListener("pointerlockerror",()=>{this.dragLook=!0}),document.addEventListener("mousemove",o=>{if(!this.locked&&!(this.dragLook&&o.buttons&1))return;let a=.0021*this.settings.sensitivity;this.yaw-=o.movementX*a,this.pitch=hn.clamp(this.pitch-o.movementY*a,-1.3,1.3)})}lock(){try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{this.dragLook=!0})}catch{this.dragLook=!0}}unlock(){document.pointerLockElement&&document.exitPointerLock()}place(e,t,n,s){if(this.vel.set(0,0),this.yaw=n,this.pitch=0,this.xr)if(!this.xrPoseOK)this.xrPending={x:e,z:t,yaw:n,eye:s},this.dolly.position.set(e,this.dolly.position.y,t),this.dolly.rotation.y=n;else{om.setFromQuaternion(this.camera.quaternion,"YXZ");let r=n-om.y,o=this.camera.position;this.dolly.rotation.y=r;let a=o.x*Math.cos(r)+o.z*Math.sin(r),l=-o.x*Math.sin(r)+o.z*Math.cos(r);this.dolly.position.set(e-a,this.dolly.position.y,t-l)}else this.dolly.position.set(e,0,t);s&&(this.eye=s),this.apply(0)}get running(){return!!((this.keys.ShiftLeft||this.keys.ShiftRight)&&this.canRun)||this.xr&&this.xrMove.length()>.9&&this.canRun}headWorld(e){return this.camera.getWorldPosition(e)}forward(e){return this.xr?(this.camera.getWorldDirection(e),e.y=0,e.normalize()):e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}apply(e){if(this.breath+=e,this.xr)return;let t=Math.sin(this.bob*2)*.022*Math.min(1,this.vel.length()/2),n=Math.cos(this.bob)*.012*Math.min(1,this.vel.length()/2),s=Math.sin(this.breath*1.6)*.004;this.camera.position.set(n,this.eye+t+s,0),this.camera.rotation.set(this.pitch+Math.sin(this.breath*.7)*.003,this.yaw,Math.sin(this.bob)*.004,"YXZ")}update(e){this.xr&&(this.camera.getWorldDirection(rr),rr.x*rr.x+rr.z*rr.z>1e-6&&(this.yaw=Math.atan2(-rr.x,-rr.z)),this.pitch=Math.asin(hn.clamp(rr.y,-1,1)));let t=0,n=0;this.canMove&&((this.keys.KeyW||this.keys.ArrowUp)&&(n-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1));let s=this.keys.ShiftLeft||this.keys.ShiftRight,r=Math.hypot(t,n)||1,o=(s?this.canRun?this.run:this.jogAllowed?2.5:this.walk:this.walk)*this.speedScale,a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=(t*l+n*a)/r*o*(t||n?1:0),u=(-t*a+n*l)/r*o*(t||n?1:0);if(this.xr){let m=this.xrMove.length(),p=m>.9,_=this.canMove?(p?this.canRun?this.run:this.jogAllowed?2.5:this.walk:this.walk)*this.speedScale:0;c=this.xrMove.x*_/Math.max(1,m),u=this.xrMove.z*_/Math.max(1,m)}this.vel.x=Yt(this.vel.x,c,10,e),this.vel.y=Yt(this.vel.y,u,10,e);let h=this.dolly.position,d=h.x+this.vel.x*e,f=h.z+this.vel.y*e,g=this.radius;if(this.xr){this.camera.getWorldPosition(df);let m=df.x-h.x,p=df.z-h.z;Math.hypot(m,p)<3||(m=0,p=0);let _=h.x+m,x=h.z+p,M=d+m,T=f+p,P=this.canMove&&!this.noclip,R=(Y,y)=>{if(P){for(let A of this.colliders)if(Y+g>A.minX&&Y-g<A.maxX&&y+g>A.minZ&&y-g<A.maxZ)return!0}return!1},U=(Y,y)=>!!(this.bounds&&P&&(Y<this.bounds.minX||Y>this.bounds.maxX||y<this.bounds.minZ||y>this.bounds.maxZ));M!==_&&(R(M,x)&&!R(_,x)||U(M,x)&&!U(_,x))&&(M=_),T!==x&&(R(M,T)&&!R(M,x)||U(M,T)&&!U(M,x))&&(T=x),d=M-m,f=T-p}else for(let m of this.canMove&&!this.noclip?this.colliders:[])if(d+g>m.minX&&d-g<m.maxX&&f+g>m.minZ&&f-g<m.maxZ){let p=Math.min(d+g-m.minX,m.maxX-(d-g)),_=Math.min(f+g-m.minZ,m.maxZ-(f-g));p<_?d=h.x<(m.minX+m.maxX)/2?m.minX-g:m.maxX+g:f=h.z<(m.minZ+m.maxZ)/2?m.minZ-g:m.maxZ+g}this.bounds&&!this.noclip&&!this.xr&&(d=hn.clamp(d,this.bounds.minX,this.bounds.maxX),f=hn.clamp(f,this.bounds.minZ,this.bounds.maxZ));let v=Math.hypot(d-h.x,f-h.z);h.x=d,h.z=f,this.moving=v/Math.max(e,1e-4)>.3,this.bob+=v*4.2,this.stepDist+=v,this.stepDist>.62&&(this.stepDist=0,rm>0&&this.audio.oneShot("step",{volume:rm*(this.running?2:1),rate:.65+Math.random()*.1})),this.apply(e)}};var Qc=class{constructor(e,t){this.camera=e,this.targets=[],this.hover=null,this.pressed=null,this.ray=new Lc,this.ray.far=3,this.center=new we(0,0),this.enabled=!0,t.addEventListener("mousedown",n=>{n.button===0&&this.enabled&&this.anyPress&&this.anyPress(),n.button===0&&this.enabled&&this.hover&&(this.pressed=this.hover,this.onUse&&this.onUse(this.hover),this.hover.onPress&&this.hover.onPress())}),addEventListener("mouseup",n=>{n.button===0&&this.pressed&&(this.pressed.onRelease&&this.pressed.onRelease(),this.pressed=null)})}add(e){return e.maxDist=e.maxDist||2.6,this.targets.push(e),e}release(){this.pressed&&(this.pressed.onRelease&&this.pressed.onRelease(),this.pressed=null)}_hitFrom(e){let t=this.targets.filter(o=>o.enabled());if(!t.length)return null;e.updateWorldMatrix(!0,!1),this.ray.camera=this.camera;let n=new pt().extractRotation(e.matrixWorld);this.ray.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.ray.direction.set(0,0,-1).applyMatrix4(n);let s=null,r=1/0;for(let o of t){let a=this.ray.intersectObject(o.object,!0);a.length&&a[0].distance<o.maxDist+.6&&a[0].distance<r&&(s=o,r=a[0].distance)}return s?{target:s,distance:r}:null}peekXR(e){return this.enabled?this._hitFrom(e):null}pressXR(e){this.enabled&&this.anyPress&&this.anyPress();let t=this.enabled&&this._hitFrom(e);t&&(this.pressed=t.target,this.onUse&&this.onUse(t.target),t.target.onPress&&t.target.onPress())}releaseXR(){this.release()}update(){let e=this.targets.filter(s=>s.enabled());if(this.hover=null,!this.enabled||!e.length||this.xrMode)return this.xrMode?this.pressed:null;this.ray.setFromCamera(this.center,this.camera);let t=null,n=1/0;for(let s of e){let r=this.ray.intersectObject(s.object,!0);r.length&&r[0].distance<s.maxDist&&r[0].distance<n&&(t=s,n=r[0].distance)}return!t&&this.pressed&&e.includes(this.pressed)&&(t=this.pressed),this.hover=t,t}};var or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var fi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},pE=new So(-1,1,1,-1,0,1),ff=class extends Xt{constructor(){super(),this.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rt([0,2,0,0,2,0],2))}},mE=new ff,hs=class{constructor(e){this._mesh=new De(mE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qo=class extends fi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ga=class extends fi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},eh=class extends fi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var th=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new we);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ci}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qo(or),this.copyPass.material.blending=Bn,this.clock=new Dr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ga!==void 0&&(o instanceof Ga?n=!0:o instanceof eh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nh=class extends fi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Wa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new we},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new pt},cameraProjectionMatrixInverse:{value:new pt},cameraWorldMatrix:{value:new pt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new b(-1,-1,-1)},sceneBoxMax:{value:new b(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Xa={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},ih={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function am(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=gE(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new b(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Tr(s,e,e);return r.wrapS=Ln,r.wrapT=Ln,r.needsUpdate=!0,r}function gE(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var qa={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new we},cameraProjectionMatrixInverse:{value:new pt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function pf(i,e,t){let n=xE(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function xE(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new b(Math.cos(r),Math.sin(r),o))}return n}var sh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let _=g-m+u,x=v-p+u,M=g-1+2*u,T=v-1+2*u,P=l&255,R=c&255,U=this.perm[P+this.perm[R]]%12,Y=this.perm[P+m+this.perm[R+p]]%12,y=this.perm[P+1+this.perm[R+1]]%12,A=.5-g*g-v*v;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[U],g,v));let q=.5-_*_-x*x;q<0?s=0:(q*=q,s=q*q*this.dot(this.grad3[Y],_,x));let J=.5-M*M-T*T;return J<0?r=0:(J*=J,r=J*J*this.dot(this.grad3[y],M,T)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(u+h+d)*f,v=u-g,m=h-g,p=d-g,_=e-v,x=t-m,M=n-p,T,P,R,U,Y,y;_>=x?x>=M?(T=1,P=0,R=0,U=1,Y=1,y=0):_>=M?(T=1,P=0,R=0,U=1,Y=0,y=1):(T=0,P=0,R=1,U=1,Y=0,y=1):x<M?(T=0,P=0,R=1,U=0,Y=1,y=1):_<M?(T=0,P=1,R=0,U=0,Y=1,y=1):(T=0,P=1,R=0,U=1,Y=1,y=0);let A=_-T+f,q=x-P+f,J=M-R+f,K=_-U+2*f,pe=x-Y+2*f,j=M-y+2*f,he=_-1+3*f,re=x-1+3*f,ye=M-1+3*f,Ie=u&255,Te=h&255,Ve=d&255,lt=this.perm[Ie+this.perm[Te+this.perm[Ve]]]%12,le=this.perm[Ie+T+this.perm[Te+P+this.perm[Ve+R]]]%12,Me=this.perm[Ie+U+this.perm[Te+Y+this.perm[Ve+y]]]%12,_e=this.perm[Ie+1+this.perm[Te+1+this.perm[Ve+1]]]%12,Ae=.6-_*_-x*x-M*M;Ae<0?s=0:(Ae*=Ae,s=Ae*Ae*this.dot3(this.grad3[lt],_,x,M));let Ue=.6-A*A-q*q-J*J;Ue<0?r=0:(Ue*=Ue,r=Ue*Ue*this.dot3(this.grad3[le],A,q,J));let Pe=.6-K*K-pe*pe-j*j;Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this.dot3(this.grad3[Me],K,pe,j));let Fe=.6-he*he-re*re-ye*ye;return Fe<0?a=0:(Fe*=Fe,a=Fe*Fe*this.dot3(this.grad3[_e],he,re,ye)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),_=Math.floor(n+v),x=Math.floor(s+v),M=(m+p+_+x)*c,T=m-M,P=p-M,R=_-M,U=x-M,Y=e-T,y=t-P,A=n-R,q=s-U,J=Y>y?32:0,K=Y>A?16:0,pe=y>A?8:0,j=Y>q?4:0,he=y>q?2:0,re=A>q?1:0,ye=J+K+pe+j+he+re,Ie=o[ye][0]>=3?1:0,Te=o[ye][1]>=3?1:0,Ve=o[ye][2]>=3?1:0,lt=o[ye][3]>=3?1:0,le=o[ye][0]>=2?1:0,Me=o[ye][1]>=2?1:0,_e=o[ye][2]>=2?1:0,Ae=o[ye][3]>=2?1:0,Ue=o[ye][0]>=1?1:0,Pe=o[ye][1]>=1?1:0,Fe=o[ye][2]>=1?1:0,Ke=o[ye][3]>=1?1:0,B=Y-Ie+c,C=y-Te+c,Q=A-Ve+c,G=q-lt+c,se=Y-le+2*c,ce=y-Me+2*c,ue=A-_e+2*c,k=q-Ae+2*c,w=Y-Ue+3*c,E=y-Pe+3*c,O=A-Fe+3*c,ne=q-Ke+3*c,F=Y-1+4*c,fe=y-1+4*c,Oe=A-1+4*c,be=q-1+4*c,X=m&255,S=p&255,ae=_&255,Ce=x&255,Xe=a[X+a[S+a[ae+a[Ce]]]]%32,je=a[X+Ie+a[S+Te+a[ae+Ve+a[Ce+lt]]]]%32,ke=a[X+le+a[S+Me+a[ae+_e+a[Ce+Ae]]]]%32,ie=a[X+Ue+a[S+Pe+a[ae+Fe+a[Ce+Ke]]]]%32,ct=a[X+1+a[S+1+a[ae+1+a[Ce+1]]]]%32,Et=.6-Y*Y-y*y-A*A-q*q;Et<0?u=0:(Et*=Et,u=Et*Et*this.dot4(r[Xe],Y,y,A,q));let V=.6-B*B-C*C-Q*Q-G*G;V<0?h=0:(V*=V,h=V*V*this.dot4(r[je],B,C,Q,G));let Ye=.6-se*se-ce*ce-ue*ue-k*k;Ye<0?d=0:(Ye*=Ye,d=Ye*Ye*this.dot4(r[ke],se,ce,ue,k));let me=.6-w*w-E*E-O*O-ne*ne;me<0?f=0:(me*=me,f=me*me*this.dot4(r[ie],w,E,O,ne));let Re=.6-F*F-fe*fe-Oe*Oe-be*be;return Re<0?g=0:(Re*=Re,g=Re*Re*this.dot4(r[ct],F,fe,Oe,be)),27*(u+h+d+f+g)}};var Ya=class i extends fi{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=am(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Un(this.width,this.height,{type:ci}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new qt({defines:Object.assign({},Wa.defines),uniforms:Si.clone(Wa.uniforms),vertexShader:Wa.vertexShader,fragmentShader:Wa.fragmentShader,blending:Bn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ac,this.normalMaterial.blending=Bn,this.pdMaterial=new qt({defines:Object.assign({},qa.defines),uniforms:Si.clone(qa.uniforms),vertexShader:qa.vertexShader,fragmentShader:qa.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new qt({defines:Object.assign({},Xa.defines),uniforms:Si.clone(Xa.uniforms),vertexShader:Xa.vertexShader,fragmentShader:Xa.fragmentShader,blending:Bn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new qt({uniforms:Si.clone(or.uniforms),vertexShader:or.vertexShader,fragmentShader:or.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Nc,blendDst:Ho,blendEquation:Oi,blendSrcAlpha:Uc,blendDstAlpha:Ho,blendEquationAlpha:Oi}),this.blendMaterial=new qt({uniforms:Si.clone(ih.uniforms),vertexShader:ih.vertexShader,fragmentShader:ih.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fd,blendSrc:Nc,blendDst:Ho,blendEquation:Oi,blendSrcAlpha:Uc,blendDstAlpha:Ho,blendEquationAlpha:Oi}),this.fsQuad=new hs(null),this.originalClearColor=new xe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ro,this.depthTexture.format=tr,this.depthTexture.type=er,this.normalRenderTarget=new Un(this.width,this.height,{minFilter:ti,magFilter:ti,type:ci,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Bn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new sh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Tr(s,e,e,_i,$i);return r.wrapS=Ln,r.wrapT=Ln,r.needsUpdate=!0,r}};Ya.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var lm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Yo=class i extends fi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:ci}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Un(r,o,{type:ci});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Un(r,o,{type:ci});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=lm;this.highPassUniforms=Si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new we(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=or;this.copyUniforms=Si.clone(u.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:_n,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xe,this.oldClearAlpha=1,this.basic=new yt,this.fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new we(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Yo.BlurDirectionX=new we(1,0);Yo.BlurDirectionY=new we(0,1);var cm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var rh=class extends fi{constructor(){super();let e=cm;this.uniforms=Si.clone(e.uniforms),this.material=new Rc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Kt.getTransfer(this._outputColorSpace)===pn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var yE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDream:{value:0},uGlow:{value:0},uRes:{value:new we(1,1)},uGrain:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uDream; uniform float uGlow; uniform vec2 uRes; uniform float uGrain; varying vec2 vUv;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
    void main(){
      vec2 uv = vUv, d = uv - 0.5; float r2 = dot(d,d);
      // chromatic fringe toward the edges
      float ca = 0.0016 + uDream * 0.004;
      vec3 c = vec3(texture2D(tDiffuse, uv - d * ca * r2 * 4.0).r, texture2D(tDiffuse, uv).g, texture2D(tDiffuse, uv + d * ca * r2 * 4.0).b);
      // dream: a soft halo (cheap 8-tap blur) and a warm, washed-out memory
      if (uDream > 0.001) {
        vec3 b = vec3(0.0); float k = 0.006 + 0.01 * uDream;
        for (int i = 0; i < 8; i++) { float a = float(i) * 0.785; b += texture2D(tDiffuse, uv + vec2(cos(a), sin(a)) * k).rgb; }
        b /= 8.0;
        c = mix(c, max(c, b * 1.15), uDream * 0.8);
        float l = dot(c, vec3(0.299,0.587,0.114));
        c = mix(c, vec3(l) * vec3(1.12, 1.0, 0.82) + 0.06, uDream * 0.55);
      }
      // split tone: teal shadows, warm highlights
      float lum = dot(c, vec3(0.299,0.587,0.114));
      c += (vec3(-0.012, 0.004, 0.022)) * (1.0 - smoothstep(0.0, 0.5, lum));
      c += (vec3(0.03, 0.012, -0.02)) * smoothstep(0.45, 1.0, lum);
      // gentle S-curve
      c = mix(c, c * c * (3.0 - 2.0 * c), 0.25);
      c += uGlow * 0.06 * vec3(1.0, 0.9, 0.7);
      // vignette
      float vig = smoothstep(0.85, 0.2, length(d * vec2(1.0, 0.85)) * (1.0 + uDream * 0.2));
      c *= mix(0.55, 1.0, vig);
      // film grain (luma-weighted)
      float g = hash(uv * uRes + fract(uTime * 37.0) * 100.0) - 0.5;
      c += g * 0.035 * uGrain * (1.0 - lum * 0.6);
      gl_FragColor = vec4(c, 1.0);
    }`};function hm(i,e,t,n){let s=i.getDrawingBufferSize(new we),r=new Un(s.x,s.y,{type:ci,samples:n==="high"?4:2}),o=new th(i,r),a=new nh(e,t);o.addPass(a);let l=new Ya(e,t,s.x,s.y);l.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),l.blendIntensity=.9,o.addPass(l);let c={selectedObjects:[]},u=new Yo(new we(s.x/2,s.y/2),.45,.55,.92);o.addPass(u),o.addPass(new rh);let h=new qo(yE);o.addPass(h);let d={composer:o,outline:c,bloom:u,gtao:l,grade:h,dream:0,glow:0,setCamera(f){a.camera=f,l.camera=f},setQuality(f){l.enabled=!1,u.enabled=f==="high",h.uniforms.uGrain.value=1},setSize(f,g){o.setSize(f,g),h.uniforms.uRes.value.set(f,g)},render(f){h.uniforms.uTime.value=f,h.uniforms.uDream.value=d.dream,h.uniforms.uGlow.value=d.glow,u.strength=.45+d.dream*.6+d.glow*.5,o.render()}};return d.setQuality(n),d}var mf=new Vt,Zo=new bn,dm=new b,um=new pt,fm=new b,vE=new b,oh=new b,Nr=new b,_E=new b(0,1,0),ah=class{constructor(e,t,{skin:n,sleeve:s}={}){this.camera=t,this.group=new it,e.add(this.group),this.h=[-1,1].map(r=>{let o=em(r,{skin:n,sleeve:s});o.visible=!1,this.group.add(o);let a=new Ot(.03,.023,1,7,1,!1).rotateY(Math.PI/7).translate(0,.5,0),l=new De(a,new tt({color:n||9067068,flatShading:!0,roughness:.75,side:At}));return l.scale.setScalar(Go),l.castShadow=!1,o.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),l.visible=!1,l.renderOrder=2,l.frustumCulled=!1,this.group.add(l),{side:r,mesh:o,arm:l,spec:null,key:null,k:1,blend:.3,pos:new b,quat:new bn,from:new b,fromQ:new bn,curl:Ba.relax.slice(),shown:!1}}),this.xr=null}set(e,t){let n=this.h[e];n.spec=t,t.key!==n.key&&(n.key=t.key,n.k=0,n.blend=t.blend??.3,n.from.copy(n.pos),n.fromQ.copy(n.quat),n.shown||this._hiddenPose(n,n.from,n.fromQ))}both(e,t){this.set(0,e),this.set(1,t)}hide(e){if(e===void 0){this.hide(0),this.hide(1);return}this.h[e].key!=="hidden"&&this.set(e,{key:"hidden",mode:"hidden",pose:"relax",blend:.35})}isHidden(e){return this.h[e].key==="hidden"||this.h[e].key===null}_hiddenPose(e,t,n){t.set(e.side*.2,-.62,-.25).applyMatrix4(this.camera.matrixWorld),this.camera.getWorldQuaternion(n).multiply(Zo.setFromEuler(mf.set(.6,0,0,"YXZ")))}_target(e,t,n){let s=e.spec;if(!s||s.mode==="hidden"){this._hiddenPose(e,t,n);return}if(s.mode==="world"){if(this.camera.getWorldPosition(oh),oh.distanceTo(s.pos)>1.15)return this._hiddenPose(e,t,n),"far";t.copy(s.pos),n.setFromEuler(s.rot);return}let r=s.mode==="cam"?this.camera:s.obj;r.updateWorldMatrix(!0,!1),t.copy(s.pos).applyMatrix4(r.matrixWorld),(s.rotSpace==="cam"?this.camera:r).getWorldQuaternion(n).multiply(Zo.setFromEuler(s.rot))}update(e){let t=dm,n=new bn;this.camera.updateWorldMatrix(!0,!1);for(let s of this.h){let r;if(this.xr&&this.xr.grips[s.side>0?1:0]){let o=s.side>0?1:0,a=this.xr.grips[o];a.updateWorldMatrix(!0,!1),s.pos.set(0,-.01,.06).applyMatrix4(a.matrixWorld),a.getWorldQuaternion(s.quat).multiply(Zo.setFromEuler(mf.set(-.25,0,-s.side*Math.PI/2,"YXZ")));let l=this.xr.squeeze[o],c=this.xr.trigger[o];r=[Math.max(l,c)*.95,l*.95,l,l,Math.max(l,c)*.7].map((u,h)=>Math.max(u,Ba.relax[h]*.6)),s.mesh.visible=!0,s.shown=!0}else{let o=this._target(s,t,n)==="far";s.k=Math.min(1,s.k+e/Math.max(.01,s.blend));let a=St(s.k);s.pos.lerpVectors(s.from,t,a),s.quat.slerpQuaternions(s.fromQ,n,a),o&&(s.pos.copy(t),s.quat.copy(n),s.from.copy(t),s.fromQ.copy(n)),(s.key==="hidden"||s.key===null||o)&&(s.k>=1||o)?(s.mesh.visible=!1,s.shown=!1):(s.mesh.visible=!0,s.shown=!0),r=Ba[s.spec&&s.spec.pose||"relax"]||Ba.relax,s.spec&&s.spec.curl&&(r=s.spec.curl)}for(let o=0;o<5;o++)s.curl[o]=Yt(s.curl[o],r[o],14,e);if(tm(s.mesh,s.curl),s.mesh.position.copy(s.pos),s.mesh.quaternion.copy(s.quat),s.arm.visible=s.mesh.visible&&!this.xr,s.arm.visible){let o=fm.set(0,0,.02*Go).applyQuaternion(s.quat).add(s.pos);this.camera.getWorldPosition(oh),this.camera.getWorldDirection(Nr),Nr.y=0,Nr.normalize();let a=oh.addScaledVector(Nr,-.03).add(vE.set(-Nr.z,0,Nr.x).multiplyScalar(s.side*.17));a.y-=.36;let l=Nr.subVectors(a,o),c=Math.max(.05,l.length()-.03);s.arm.position.copy(o),s.arm.quaternion.setFromUnitVectors(_E,l.normalize()),s.arm.scale.set(Go,c,Go)}}}worldPos(e,t){return t.copy(this.h[e].pos)}},pi={carry:i=>new Vt(.15,i*Math.PI/2,-i*Math.PI/2+i*.2,"YXZ"),rim:i=>new Vt(-.75,-i*.25,-i*Math.PI/2,"YXZ"),toward:(i,e,t,n=.5)=>{let s=new b().subVectors(t,e).normalize();return new Vt(Math.asin(hn.clamp(s.y,-1,1)),Math.atan2(-s.x,-s.z),-i*n,"YXZ")},table:(i,e=0)=>new Vt(-.5,e+i*.3,-i*.2,"YXZ"),rest:(i,e=0)=>new Vt(-.08,e+i*.22,-i*.08,"YXZ"),push:(i,e=0)=>new Vt(.95,e+i*.15,-i*.25,"YXZ"),reach:(i,e=0,t=-.2)=>new Vt(t,e+i*.15,-i*.35,"YXZ")},lh=class{constructor(e,t,n){this.camera=e,this.hands=n,this.bag=$c(t),this.held=!1,this.look=0,this.forceOpen=0,this.sway=0,this.takeK=1,this.holder=e,this.restPos=new b(.2,-.44,-.42),this.lookPos=new b(.02,-.25,-.38),this.takeFrom=new b,this.takeFromQ=new bn,this.firstLook=null,this.inXR=!1,this.glow=0,this.heavy=0,this.stow=0,this.hugMode=!1,this.hugK=0}hang(e,t,n=0){this.held=!1,e.add(this.bag),this.bag.position.copy(t),this.bag.rotation.set(0,n,0),this.bag.scale.setScalar(1),this.bag.userData.strap.visible=!0,Va(this.bag,0),this.hands&&this.hands.hide(1)}take(){let e=this.bag;e.updateWorldMatrix(!0,!1),this.holder.updateWorldMatrix(!0,!1),um.copy(this.holder.matrixWorld).invert().multiply(e.matrixWorld);let t=new b;um.decompose(this.takeFrom,this.takeFromQ,t),this.held=!0,this.takeK=0,this.holder.add(e),e.userData.strap.visible=!1}setHolder(e,t){this.inXR=t,this.holder=e,this.held&&e.add(this.bag),t?(this.restPos=new b(0,-.2,.02),this.lookPos=new b(0,-.12,-.05)):(this.restPos=new b(.2,-.44,-.42),this.lookPos=new b(.02,-.25,-.38))}setCoins(e){this.bag.userData.coins.forEach((t,n)=>{t.visible=n<e})}setContents({coins:e,scraps:t,food:n}){let s=this.bag.userData;e!==void 0&&this.setCoins(e),t!==void 0&&(s.scraps.visible=t),n!==void 0&&(s.food.visible=n)}resetContents(){this.setContents({coins:0,scraps:!1,food:!1}),this.glow=0,this.heavy=0,this.forceOpen=0,this.stow=0}get open(){return this.look}get hugging(){if(this.inXR&&this.held){let e=new b,t=new b;return this.bag.getWorldPosition(e),this.camera.getWorldPosition(t),e.distanceTo(t)<.5&&e.y<t.y}return this.hugK>.6}update(e,t,n,s){if(this.bag.userData.foodMat.emissiveIntensity=this.glow*(.8+.4*Math.sin(t*5)),!this.held)return;this._stow=Yt(this._stow||0,this.stow,6,e);let r=this.hugMode&&n&&!this.inXR;this.hugK=Yt(this.hugK,r?1:0,8,e);let o=n&&!this.hugMode||this.forceOpen?1:0;this.look=Yt(this.look,o,7,e),o&&this.firstLook&&(this.firstLook(),this.firstLook=null),this.sway+=e*(s?7:1.2);let a=this.bag,l=(this.inXR?.8:.55)*(1+this.heavy*.2),c=dm.lerpVectors(this.restPos,this.lookPos,this.look);if(this.hugK>.001&&c.lerp(fm.set(0,-.36,-.22),this.hugK),c.y+=Math.sin(this.sway)*(s?.012:.004)*(1+this.heavy*2)*(1-this.look)-this.heavy*.06-this._stow*.5,c.x+=Math.cos(this.sway*.5)*(s?.008:.002)*(1-this.look),Zo.setFromEuler(mf.set(st(.08,.95,this.look),st(-.25,0,this.look),Math.sin(this.sway*.5)*.04*(1-this.look))),this.takeK<1){this.takeK=Math.min(1,this.takeK+e/.45);let u=St(this.takeK);a.position.lerpVectors(this.takeFrom,c,u),a.quaternion.slerpQuaternions(this.takeFromQ,Zo,u),a.scale.setScalar(st(1,l,u))}else a.position.copy(c),a.quaternion.copy(Zo),a.scale.setScalar(l);Va(a,this.look),this.hands&&!this.inXR&&this._stow<.5&&this.stow<.5&&(this.hugK>.35?(this.hands.set(1,{key:"hugR",mode:"obj",obj:a,pos:new b(.12,.2,.12),rot:new Vt(-.9,.5,-.6,"YXZ"),rotSpace:"cam",pose:"grip",blend:.2}),this.hands.set(0,{key:"hugL",mode:"obj",obj:a,pos:new b(-.12,.22,.14),rot:new Vt(-.9,-.5,.6,"YXZ"),rotSpace:"cam",pose:"grip",blend:.2}),this._leftOnBag=!0):this.look>.35?(this.hands.set(1,{key:"bag-rimR",mode:"obj",obj:a,pos:new b(.2,.36,.05),rot:pi.rim(1),rotSpace:"cam",pose:"pinch",blend:.25}),this.hands.set(0,{key:"bag-rimL",mode:"obj",obj:a,pos:new b(-.2,.36,.05),rot:pi.rim(-1),rotSpace:"cam",pose:"pinch",blend:.25}),this._leftOnBag=!0):(this.hands.set(1,{key:"bag-neck",mode:"obj",obj:a,pos:new b(.13,.31,.03),rot:pi.carry(1),rotSpace:"cam",pose:"grip",blend:.25}),this._leftOnBag&&(this.hands.hide(0),this._leftOnBag=!1)))}worldMouth(e){return this.bag.localToWorld(e.set(0,.2,0))}};function Hr(i,e,t){let n=i*374761393+e*668265263+t*982451653|0;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967296}function ME(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,l=n||1e9,c=m=>(m%l+l)%l,u=Hr(c(s),c(r),t),h=Hr(c(s+1),c(r),t),d=Hr(c(s),c(r+1),t),f=Hr(c(s+1),c(r+1),t),g=o*o*(3-2*o),v=a*a*(3-2*a);return u+(h-u)*g+(d-u)*v+(u-h-d+f)*g*v}function Hn(i,e,{scale:t=4,oct:n=5,seed:s=1,gain:r=.5}={}){let o=t,a=.5,l=0,c=0;for(let u=0;u<n;u++)l+=a*ME(i*o,e*o,s+u*17,o),c+=a,o*=2,a*=r;return l/c}var Za=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),ts=(i,e,t)=>{let n=Za((t-i)/(e-i));return n*n*(3-2*n)},us=(i,e,t)=>i+(e-i)*t,gf=1,ch=()=>(gf=gf*16807%2147483647,(gf-1)/2147483646);function ns(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function is(i,{srgb:e=!0,repeat:t=[1,1],aniso:n=8}={}){let s=new tn(i);return s.wrapS=s.wrapT=Ln,s.repeat.set(t[0],t[1]),s.anisotropy=n,e&&(s.colorSpace=Lt),s.generateMipmaps=!0,s.minFilter=Ts,s}function Jo(i,e,t,{normalStrength:n=2.5}={}){let s=ns(i,e),r=ns(i,e),o=ns(i,e),a=s.getContext("2d").createImageData(i,e),l=r.getContext("2d").createImageData(i,e),c=o.getContext("2d").createImageData(i,e),u=new Float32Array(i*e),h={r:0,g:0,b:0,h:0,ro:.8};for(let d=0;d<e;d++)for(let f=0;f<i;f++){h.h=.5,h.ro=.85,t(f/i,d/e,h,f,d);let g=d*i+f,v=g*4;a.data[v]=Za(h.r)*255,a.data[v+1]=Za(h.g)*255,a.data[v+2]=Za(h.b)*255,a.data[v+3]=255;let m=Za(h.ro)*255;l.data[v]=l.data[v+1]=l.data[v+2]=m,l.data[v+3]=255,u[g]=h.h}for(let d=0;d<e;d++)for(let f=0;f<i;f++){let g=u[d*i+(f-1+i)%i],v=u[d*i+(f+1)%i],m=u[(d-1+e)%e*i+f],p=u[(d+1)%e*i+f],_=(g-v)*n,x=(p-m)*n,M=1,T=Math.hypot(_,x,M);_/=T,x/=T,M/=T;let P=(d*i+f)*4;c.data[P]=(_*.5+.5)*255,c.data[P+1]=(x*.5+.5)*255,c.data[P+2]=(M*.5+.5)*255,c.data[P+3]=255}return s.getContext("2d").putImageData(a,0,0),r.getContext("2d").putImageData(l,0,0),o.getContext("2d").putImageData(c,0,0),{col:s,rgh:r,nrm:o}}function Ko(i,e=[1,1],t={}){return{map:is(i.col,{repeat:e}),roughnessMap:is(i.rgh,{srgb:!1,repeat:e}),normalMap:is(i.nrm,{srgb:!1,repeat:e}),...t}}function $o(i,e,t,n=0,s=0){let r={};for(let o of["map","roughnessMap","normalMap"])if(i[o]){let a=i[o].clone();a.repeat.set(e,t),a.offset.set(n,s),a.needsUpdate=!0,r[o]=a}return r}function mm(){return Ko(Jo(768,768,(s,r,o)=>{let a=(1-r)*4,l=r*34,c=Math.floor(l),u=c%2*.5,h=s*11+u,d=Math.floor(h),f=h-d,g=l-c,v=Math.min(f,1-f)*3.6<.09||Math.min(g,1-g)<.09,m=Hr(d%11,c,7),p=Hn(s,r,{scale:32,oct:3,seed:3}),_=us(.3,.46,m)+(p-.5)*.14,x=_*us(.5,.62,Hr(d,c,9)),M=_*.45,T=_,P=x,R=M,U=.55+(p-.5)*.1,Y=.9;v&&(T=.34,P=.31,R=.27,U=.38);let y=Hn(s,r,{scale:3,oct:6,seed:11})+ts(1.6,0,a)*.12-ts(3,4,a)*.06;if(y<.6){let q=ts(.6,.54,y),J=Hn(s,r,{scale:6,oct:5,seed:21}),K=ts(.62,.9,Hn(s*1,r*.12,{scale:9,oct:3,seed:31}))*ts(1.5,3.8,a),pe=.62,j=.58,he=.49;a<1.32&&(pe=.33,j=.52,he=.47,a>1.27&&(pe=.2,j=.32,he=.3));let re=(J-.5)*.22+ts(.5,0,a)*.22+ts(.62,.85,Hn(s,r,{scale:14,oct:3,seed:23}))*.08;pe=pe*(1-re)-K*.09,j=j*(1-re)-K*.08,he=he*(1-re*1.1)-K*.06,T=us(T,pe,q),P=us(P,j,q),R=us(R,he,q),U=us(U,.72+(J-.5)*.06,q),Y=a<1.32?.62:.88,q<.9&&(T*=.85,P*=.85,R*=.85)}o.r=T,o.g=P,o.b=R,o.h=U,o.ro=Y},{normalStrength:6}))}function gm(){return Ko(Jo(768,768,(i,e,t)=>{let n=Hn(i,e,{scale:4,oct:5,seed:41}),s=Hn(i,e,{scale:24,oct:3,seed:43}),r=ts(.58,.72,Hn(i,e,{scale:3,oct:4,seed:47})),o=Math.abs(Hn(i,e,{scale:5,oct:4,seed:51})-.5)<.006?1:0,a=Math.abs(Hn(i,e,{scale:9,oct:3,seed:53})-.5)<.004?1:0,l=.36+(n-.5)*.22+(s-.5)*.06;l*=1-r*.22;let c=Math.max(o,a*.7);t.r=l*1.04-c*.08,t.g=l*.98-c*.08,t.b=l*.88-c*.07,t.h=.5+(s-.5)*.15-c*.4,t.ro=.92-r*.45},{normalStrength:3}))}function xm(){return Ko(Jo(512,512,(i,e,t)=>{let n=Hn(i,e,{scale:4,oct:6,seed:61}),s=ts(.55,.75,Hn(i,e,{scale:2,oct:5,seed:63})),r=.55+(n-.5)*.2-s*.25;t.r=r,t.g=r*.95,t.b=r*.85,t.h=.5+(n-.5)*.2,t.ro=.95},{normalStrength:2}))}function Ja(i=[.42,.28,.17],e=71){return Ko(Jo(512,512,(t,n,s)=>{let r=Math.floor(n*4),o=n*4-r,a=Hr(r,0,e),l=Math.sin((t*6+Hn(t,n*.25,{scale:4,oct:4,seed:e+r})*3)*18+a*10)*.5+.5,c=Hn(t,n,{scale:8,oct:3,seed:e+5}),u=Hn(t,n,{scale:6,oct:5,seed:e+9}),h=o<.025||o>.975,d=.75+l*.2+(a-.5)*.25-ts(.7,.85,c)*.3+(u-.5)*.2;h&&(d*=.35),s.r=i[0]*d,s.g=i[1]*d,s.b=i[2]*d,s.h=h?.2:.5+l*.06,s.ro=.7+(1-u)*.2},{normalStrength:2.5}))}function ym(i=81){return Ko(Jo(512,512,(e,t,n)=>{let s=Hn(e,t,{scale:5,oct:6,seed:i}),r=ts(.45,.7,Hn(e,t,{scale:3,oct:6,seed:i+2})),o=Math.sin(e*Math.PI*2*14)*.5+.5,a=.3,l=.4,c=.42;n.r=us(a,.45,r)*(.8+s*.3),n.g=us(l,.24,r)*(.8+s*.3),n.b=us(c,.12,r)*(.8+s*.3),n.h=o*.6+s*.1,n.ro=us(.55,.95,r)},{normalStrength:4}))}var pm=[["#1f3a68","#e8dcc0","#b5442e"],["#a8322a","#f0d9a8","#2a2018"],["#d9a22a","#7a2a1e","#f4ead0"],["#2f6b4f","#f1e4c4","#c4572e"],["#c45a7a","#f6e6d2","#3a4a7a"],["#e9e1cf","#6a7d9a","#b08a4a"]];function mi(i,e=0,t=256){let[n,s,r]=pm[e%pm.length],o=ns(t,t),a=o.getContext("2d");a.fillStyle=n,a.fillRect(0,0,t,t);let l=t;if(i==="buti"){a.fillStyle=s;for(let u=0;u<8;u++)for(let h=0;h<8;h++){let d=(h+u%2*.5)*l/8,f=u*l/8+l/16;a.beginPath(),a.ellipse(d,f,l/60,l/34,.6,0,7),a.fill(),a.fillStyle=r,a.beginPath(),a.arc(d+l/70,f-l/50,l/110,0,7),a.fill(),a.fillStyle=s}}else if(i==="stripe")for(let u=0;u<16;u++)a.fillStyle=u%4===0?r:s,u%2===0&&a.fillRect(u*l/16,0,l/40,l);else if(i==="check"){a.globalAlpha=.55,a.fillStyle=s;for(let u=0;u<8;u++)a.fillRect(u*l/8,0,l/20,l),a.fillRect(0,u*l/8,l,l/20);a.globalAlpha=.7,a.fillStyle=r;for(let u=0;u<4;u++)a.fillRect(u*l/4+l/40,0,l/120,l),a.fillRect(0,u*l/4+l/40,l,l/120);a.globalAlpha=1}else if(i==="paisley")for(let u=0;u<4;u++)for(let h=0;h<4;h++){let d=(h+u%2*.5)*l/4+l/8,f=u*l/4+l/8;a.save(),a.translate(d,f),a.rotate(.7),a.fillStyle=s,a.beginPath(),a.moveTo(0,-l/12),a.bezierCurveTo(l/14,-l/14,l/14,l/20,0,l/14),a.bezierCurveTo(-l/16,l/18,-l/22,-l/30,0,-l/12),a.fill(),a.fillStyle=r,a.beginPath(),a.arc(0,l/40,l/40,0,7),a.fill(),a.restore()}else if(i==="border"){a.fillStyle=s,a.fillRect(0,l*.78,l,l*.14),a.fillStyle=r;for(let u=0;u<16;u++)a.beginPath(),a.moveTo(u*l/16,l*.78),a.lineTo(u*l/16+l/32,l*.72),a.lineTo(u*l/16+l/16,l*.78),a.fill()}let c=a.getImageData(0,0,l,l);for(let u=0;u<l;u++)for(let h=0;h<l;h++){let d=(u*l+h)*4,f=((h+u)%2?.94:1.04)*(.92+.16*Hn(h/l,u/l,{scale:8,oct:3,seed:e+90}));c.data[d]*=f,c.data[d+1]*=f,c.data[d+2]*=f}return a.putImageData(c,0,0),is(o)}function vm(){let e=ns(512,512),t=e.getContext("2d");t.fillStyle="#8a7a5e",t.fillRect(0,0,512,512),[[40,60,180,150,"#5a6a7e"],[270,240,170,190,"#8a4a3a"],[90,330,140,120,"#a08a4a"]].forEach(([r,o,a,l,c])=>{t.fillStyle=c,t.save(),t.translate(r+a/2,o+l/2),t.rotate((ch()-.5)*.15),t.fillRect(-a/2,-l/2,a,l),t.strokeStyle="#e8dcc0",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(-a/2+6,-l/2+6,a-12,l-12),t.restore()});let s=t.getImageData(0,0,512,512);for(let r=0;r<512;r++)for(let o=0;o<512;o++){let a=(r*512+o)*4,l=Hn(o/512,r/512,{scale:5,oct:5,seed:99}),c=((o+r)%2?.93:1.03)*(.75+.4*l);s.data[a]=s.data[a]*c+20*l,s.data[a+1]=s.data[a+1]*c+18*l,s.data[a+2]=s.data[a+2]*c+12*l}return t.putImageData(s,0,0),is(e)}function _m(){let e=ns(256,256),t=e.getContext("2d");t.fillStyle="#efe6d0",t.beginPath(),t.arc(256/2,256/2,256/2-4,0,7),t.fill(),t.strokeStyle="#2a2018",t.lineWidth=10,t.stroke(),t.fillStyle="#2a2018",t.font="bold 26px Georgia",t.textAlign="center",t.textBaseline="middle";for(let s=1;s<=12;s++){let r=s/12*Math.PI*2;t.fillText(String(s),256/2+Math.sin(r)*92,256/2-Math.cos(r)*92)}let n=t.createRadialGradient(256/2,256/2,30,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(60,40,20,.35)"),t.fillStyle=n,t.fillRect(0,0,256,256),is(e)}function xf(){let t=ns(256,384),n=t.getContext("2d");n.fillStyle="#f2e8d2",n.fillRect(0,0,256,384);let s=n.createLinearGradient(0,0,0,230);s.addColorStop(0,"#f0a040"),s.addColorStop(1,"#c8402a"),n.fillStyle=s,n.fillRect(14,14,228,216),n.fillStyle="rgba(255,240,200,.85)",n.beginPath(),n.arc(256/2,110,58,0,7),n.fill(),n.fillStyle="#7a2a1e";for(let r=0;r<16;r++){let o=r/16*6.283;n.fillRect(256/2+Math.cos(o)*72-3,110+Math.sin(o)*72-3,6,6)}n.fillStyle="#2a4a3a",n.fillRect(14,196,228,34),n.fillStyle="#2a2018",n.font="bold 20px Georgia",n.textAlign="center",n.fillText("OCTOBER  2026",256/2,262),n.font="13px monospace";for(let r=0;r<5;r++)for(let o=0;o<7;o++){let a=r*7+o-3;a>0&&a<32&&(n.fillStyle=o===0?"#b5442e":"#2a2018",n.fillText(String(a),30+o*33,290+r*19))}return is(t)}function Mm(){let t=ns(256,180),n=t.getContext("2d");n.fillStyle="#ece0c2",n.fillRect(0,0,256,180),n.strokeStyle="rgba(80,90,140,.5)",n.lineWidth=1;for(let s=18;s<180;s+=11)n.beginPath(),n.moveTo(0,s),n.lineTo(256,s),n.stroke();n.strokeStyle="rgba(170,40,40,.6)",n.beginPath(),n.moveTo(40,0),n.lineTo(40,180),n.moveTo(256/2,0),n.lineTo(256/2,180),n.stroke(),n.fillStyle="#2a2a4a",n.font="9px monospace";for(let s=26;s<180;s+=11)ch()<.8&&n.fillText("\u2014 "+(Math.floor(ch()*9)+1)+" pcs \xB7\xB7 "+(Math.floor(ch()*4)+1),46,s);return n.fillStyle="rgba(0,0,0,.15)",n.fillRect(256/2-3,0,6,180),is(t)}function Em(){let t=ns(1024,512),n=t.getContext("2d");n.fillStyle="#1e2e26",n.fillRect(0,0,1024,512),n.strokeStyle="#6a4a2a",n.lineWidth=26,n.strokeRect(0,0,1024,512),n.fillStyle="rgba(240,236,220,.9)",n.textAlign="center",n.font="86px Georgia",n.fillText("A   B   C   D   E",1024/2,150),n.font="92px serif",n.fillText("\u0915   \u0916   \u0917   \u0918",1024/2,290),n.font="italic 54px Georgia",n.fillText("1 + 1 = 2",1024/2,410);let s=n.getImageData(0,0,1024,512);for(let r=0;r<s.data.length;r+=4){let o=.85+Math.random()*.3;s.data[r]*=o,s.data[r+1]*=o,s.data[r+2]*=o}return n.putImageData(s,0,0),is(t)}function yf(){let t=ns(128,160),n=t.getContext("2d");n.fillStyle="#efe8d6",n.fillRect(0,0,128,160),n.strokeStyle="rgba(80,110,170,.5)";for(let s=16;s<160;s+=10)n.beginPath(),n.moveTo(0,s),n.lineTo(128,s),n.stroke();return n.fillStyle="#3a3a5a",n.font="13px Georgia",n.fillText("a  b  c  d",10,35),n.fillText("\u0915  \u0916  \u0917",10,55),n.fillText("my name",10,85),is(t)}function vf(i=64){let e=ns(i,i),t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i),is(e,{srgb:!1})}function bm(){return Ko(Jo(512,512,(i,e,t)=>{let n=Hn(i,e,{scale:6,oct:5,seed:131}),s=e>.86?1:0;t.r=s?.62:.93-(n-.5)*.12,t.g=s?.32:.8-(n-.5)*.12,t.b=s?.22:.56-(n-.5)*.12,t.h=.5+n*.1,t.ro=.9}))}var hh=class{constructor(e,t=6){this.slots=[];for(let n=0;n<t;n++){let s=new Do(16777215,0,8,1.6);s.position.set(0,-50,0),e.add(s),this.slots.push({L:s,src:null,w:0,next:null})}this.sources=[],this.acc=1}add(e){let t={pos:e.pos.clone(),color:new xe(e.color??16777215),intensity:e.intensity??1,distance:e.distance??8,decay:e.decay??1.6,space:e.space||"",priority:e.priority??1,on:!0};return this.sources.push(t),t}score(e,t){if(!e.on||e.intensity<=.001)return-1;let n=e.pos.distanceTo(t);return n>e.distance+7?-1:e.intensity*e.priority/(1+(n/Math.max(1,e.distance))**2*4)}update(e,t,n){if(this.acc+=e,this.acc>.2){this.acc=0;let s=this.sources.filter(a=>n.has(a.space)).map(a=>[a,this.score(a,t)]).filter(([,a])=>a>0).sort((a,l)=>l[1]-a[1]).slice(0,this.slots.length).map(([a])=>a),r=new Set(s);this.slots.forEach(a=>{a.src&&r.has(a.src)?(r.delete(a.src),a.next=null):a.src&&(a.next=void 0)});let o=this.slots.filter(a=>!a.src||a.next===void 0);[...r].forEach((a,l)=>{o[l]&&(o[l].next=a)})}for(let s of this.slots){s.next!==null&&s.next!==void 0&&!s.src&&(s.src=s.next,s.next=null,s.w=0);let r=s.next!==null;s.w=hn.clamp(s.w+(r?-e*5:e*3),0,1),r&&s.w<=0&&(s.src=s.next||null,s.next=null);let o=s.src;if(!o){s.L.intensity=0;continue}s.L.position.copy(o.pos),s.L.color.copy(o.color),s.L.distance=o.distance,s.L.decay=o.decay,s.L.intensity=o.intensity*s.w}}};var gi=new b,uh=class{constructor(e,t){this.player=e,this.figs=t,this.trail=[],this.speed=2.6,this.active=!1,this.clock=0,this.idx=t.map(()=>0)}start(e=7){this.player.headWorld(gi),this.trail=[new b(gi.x,0,gi.z)],this.active=!0,this.figs.forEach((t,n)=>{this.idx[n]=0,t.visible=!0})}rewind(e){this.player.headWorld(gi);let t=new b(gi.x,0,gi.z),n=this.trail.length-1,s=1/0;this.trail.forEach((a,l)=>{let c=a.distanceTo(t);c<s&&(s=c,n=l)}),this.trail.length=n+1,this.trail.push(t);let r=0,o=this.trail.length-1;for(;o>0&&r<e;)r+=this.trail[o].distanceTo(this.trail[o-1]),o--;this.figs.forEach((a,l)=>{let c=Math.max(0,o-l*2);a.position.copy(this.trail[c]),this.idx[l]=c})}stop(){this.active=!1}update(e){this.player.headWorld(gi);let t=this.trail[this.trail.length-1];(!t||t.distanceTo(new b(gi.x,0,gi.z))>.4)&&this.trail.push(new b(gi.x,0,gi.z)),this.trail.length>4e3&&(this.trail.splice(0,1e3),this.idx=this.idx.map(s=>Math.max(0,s-1e3)));let n=99;return this.clock+=e,this.figs.forEach((s,r)=>{if(!this.active){s.userData.walk=Math.max(0,(s.userData.walk||0)-e*3);return}let o=.82+.18*Math.sin(this.clock*1.7+r*2.1)*Math.sin(this.clock*.6+r),a=this.speed*(1-r*.08)*o*e;for(;a>0;){let u=this.idx[r]+1<this.trail.length?this.trail[this.idx[r]+1]:new b(gi.x,0,gi.z),h=Math.hypot(u.x-s.position.x,u.z-s.position.z);if(h<=a)if(s.position.x=u.x,s.position.z=u.z,a-=h,this.idx[r]+1<this.trail.length)this.idx[r]++;else break;else s.position.x+=(u.x-s.position.x)/h*a,s.position.z+=(u.z-s.position.z)/h*a,a=0}let l=gi.x-s.position.x,c=gi.z-s.position.z;s.rotation.y=Math.atan2(l,c),s.userData.walk=1,s.userData.stride+=this.speed*(1-r*.08)*e,n=Math.min(n,Math.hypot(l,c))}),n}};var Je={minX:-8,maxX:8,minZ:-6,maxZ:6,h:4},Tm=[1.25,-1.5,-4.25],Rm=[-6.2,-3.6,-1,1.6],ds=Rm[0],rs=Tm[0],ss=1,Mf=-.17,ni={x:ds+Mf-.2,z:rs+.82},wt={z0:.7,z1:3.1,y0:1.25,y1:2.65},gt={z0:3.2,z1:4.6,h:2.6},wm=4,Sm=[1.16,1.22,1.12,1.26,1.18,1.14,1.24,1.2,1.1,1.22,1.15,1.19],_f=4.2,ar=new b(1,-.62,.24).normalize();function Am(i){let{scene:e,audio:t,interactor:n,player:s,ui:r,thread:o,hands:a,bagCtl:l,lights:c}=i,u=D=>Math.atan2(Math.sin(D),Math.cos(D)),h=new it;h.name="sweatshop",e.add(h);let d=new b,f=new b,g=new b,v={wall:mm(),floor:gm(),ceil:xm(),wood:Ja(),woodDark:Ja([.3,.19,.12],77),rust:ym(),fab:[["buti",0],["stripe",1],["check",2],["paisley",3],["border",4],["buti",5],["check",0],["paisley",1],["stripe",3],["border",2]].map(([D,$])=>mi(D,$))},m=new tt({...v.wood,roughness:1}),p=new tt({...v.woodDark,roughness:1}),_=v.fab.map(D=>new tt({map:D,roughness:.95})),x=Ne(1907481,{roughness:.5,metalness:.6}),M=()=>Ne(12105908,{metalness:.9,roughness:.25}),T=new an,P=Je.maxX-Je.minX,R=Je.maxZ-Je.minZ,U=Je.h,Y=new tt({...$o(v.floor,P/4,R/4)}),y=un(new mt(P,R),Y);y.rotation.x=-Math.PI/2,y.castShadow=!1,h.add(y);let A=new tt({...$o(v.ceil,P/4,R/4),side:Fi}),q=un(new mt(P,R),A,0,U,0,h);q.rotation.x=Math.PI/2;function J(D,$,Ee,nt,Ze,en,zt){let kt=new tt({...$o(v.wall,D/4,(Ee-$)/4,nt/4,$/4)}),ks=.06,Be=$<=0?-.05:$,ot=Ee>=Je.h?Je.h+.05:Ee,xt=un(new mt(D+ks*2,ot-Be),kt,Ze,(Be+ot)/2,en,h);return xt.rotation.y=zt,xt.castShadow=!1,xt}J(P,0,U,0,0,Je.minZ,0),J(P,0,U,1.3,0,Je.maxZ,Math.PI);let K=(D,$,Ee,nt)=>J($-D,Ee,nt,D+6,Je.minX,(D+$)/2,Math.PI/2);K(Je.minZ,Je.maxZ,0,wt.y0),K(Je.minZ,Je.maxZ,wt.y1,U),K(Je.minZ,wt.z0,wt.y0,wt.y1),K(wt.z1,Je.maxZ,wt.y0,wt.y1);let pe=(D,$,Ee,nt)=>J($-D,Ee,nt,6-$,Je.maxX,(D+$)/2,-Math.PI/2);pe(Je.minZ,gt.z0,0,U),pe(gt.z1,Je.maxZ,0,U),pe(gt.z0,gt.z1,gt.h,U);let j=new yt({colorWrite:!1,depthWrite:!1}),he=(D,$,Ee,nt,Ze,en)=>{let zt=new De(new Ct(D,$,Ee),j);return zt.position.set(nt,Ze,en),zt.castShadow=!0,h.add(zt),zt},re=wt.y0-.04,ye=wt.y1+.04,Ie=wt.z0-.04,Te=wt.z1+.04;he(.3,re,R+1,Je.minX-.15,re/2,0),he(.3,U-ye+.3,R+1,Je.minX-.15,(ye+U+.3)/2,0),he(.3,ye-re,Ie-Je.minZ+.5,Je.minX-.15,(re+ye)/2,(Je.minZ-.5+Ie)/2),he(.3,ye-re,Je.maxZ+.5-Te,Je.minX-.15,(re+ye)/2,(Te+Je.maxZ+.5)/2),he(P+1,.3,R+1,0,U+.15,0),he(P+1,U,.3,0,U/2,Je.minZ-.15),he(P+1,U,.3,0,U/2,Je.maxZ+.15),he(.3,U,gt.z0-Je.minZ+.3,Je.maxX+.15,U/2,(gt.z0+Je.minZ-.3)/2),he(.3,U,Je.maxZ-gt.z1+.3,Je.maxX+.15,U/2,(gt.z1+Je.maxZ+.3)/2),he(.3,U-gt.h,gt.z1-gt.z0,Je.maxX+.15,(U+gt.h)/2,(gt.z0+gt.z1)/2);let Ve=new tt({...$o(v.wall,.14,1)}),lt=[[-4.9,.12],[.3,.12],[-2.3,-2.9],[3.1,.12],[5.6,-2.9]];lt.forEach(([D,$])=>T.add(te.box(.5,U,.5),Ve,D,U/2,$));let le=Ne(3814186,{roughness:.9});for(let D=-6;D<=6;D+=3)T.add(te.box(.28,.32,R),le,D,U-.16,0);T.add(te.cyl(.07,.07,P,10),Ne(4864556,{metalness:.5,roughness:.55}),0,3.55,5.6,0,0,Math.PI/2),T.add(te.cyl(.045,.045,R,8),Ne(3813414,{metalness:.4,roughness:.6}),-7.75,3.35,0,Math.PI/2,0,0),T.add(te.cyl(.03,.03,U,6),Ne(2761760),7.8,U/2,-5.6);let Me=Ne(789516,{roughness:.6}),_e=(()=>{let D=7;return()=>(D=D*16807%2147483647,(D-1)/2147483646)})();for(let D=0;D<16;D++){let $=-7.5+_e()*15,Ee=-5.5+_e()*11;T.add(Xo(new b($,3.82,Ee),new b($+(_e()-.5)*6,3.82,Ee+(_e()-.5)*5),.2+_e()*.4,.007),Me)}let Ae=Je.minX,Ue=(wt.z0+wt.z1)/2,Pe=(wt.y0+wt.y1)/2,Fe=wt.z1-wt.z0,Ke=wt.y1-wt.y0,B=Ne(2826265,{roughness:.9,flatShading:!0}),C=new an;C.add(te.box(.22,.09,Fe+.2),B,Ae+.02,wt.y0-.045,Ue),C.add(te.box(.22,.09,Fe+.2),B,Ae+.02,wt.y1+.045,Ue),C.add(te.box(.22,Ke+.18,.09),B,Ae+.02,Pe,wt.z0-.045),C.add(te.box(.22,Ke+.18,.09),B,Ae+.02,Pe,wt.z1+.045),T.add(te.box(.18,.05,Fe+.36),Ne(5919302,{roughness:.9}),Ae+.1,wt.y0-.11,Ue);for(let D=1;D<9;D++)T.add(te.cyl(.013,.013,Ke,6),x,Ae-.06,Pe,wt.z0+D*Fe/9);C.add(te.box(.03,.04,Fe),x,Ae-.06,Pe+.25,Ue),C.add(te.box(.05,.04,Fe),B,Ae-.02,Pe,Ue),C.add(te.box(.05,Ke,.04),B,Ae-.02,Pe,Ue),C.build(h,{cast:!0,receive:!1});let Q=new tt({color:12173480,transparent:!0,opacity:.22,roughness:.15,metalness:0,depthWrite:!1});[[0,1],[1,1]].forEach(([D,$])=>{let Ee=un(new mt(Fe/2-.05,Ke/2-.05),Q,Ae-.03,wt.y0+($+.5)*Ke/2,wt.z0+(D+.5)*Fe/2,h);Ee.rotation.y=Math.PI/2,Ee.castShadow=!1});let G=Ja([.55,.45,.32],91);T.add(te.box(.02,Ke/2-.04,Fe/2+.1),new tt({...G}),Ae+.06,wt.y0+Ke*.75,wt.z0+Fe*.75,.03,0,0);let se=new it;h.add(se);let ce=new xe(1,.68,.46),ue=(D,$=.35,Ee={})=>new tt({color:D,roughness:.9,emissive:new xe(D).multiply(ce).multiplyScalar($*.5),flatShading:!0,fog:!1,...Ee}),k=un(new mt(40,40),ue(13150328,.25),-28,.02,2,se);k.rotation.x=-Math.PI/2;let w=bm(),E=new tt({...$o(w,6,1),emissive:6964784,emissiveIntensity:.32,fog:!1}),O=new an;O.add(te.box(1,8,26),E,-24,4,2);for(let D=-5;D<=5;D++)O.add(te.box(.6,3.2,.5),ue(15721156,.45),-23.2,1.6,2+D*2.2),O.add(te.box(.6,3,.5),ue(15721156,.45),-23.2,5.6,2+D*2.2);O.add(te.box(1.2,.35,26),ue(11030574,.4),-23,3.35,2),O.add(te.box(1.4,.4,27),ue(10111530,.4),-23,8.1,2);for(let D=-5;D<=4;D++)O.add(te.box(.2,1.6,1),ue(3828362,.2),-23.4,5.4,3.1+D*2.2);O.add(te.box(.4,.45,30),ue(14207144,.35),-10.5,.22,2);let ne=ue(5914672,.2),F=ue(4880954,.35),fe=ue(6982202,.35);[[-17,-3.5,1.3],[-19,6,1.6],[-12.5,10,1.2],[-12,-7,1.4]].forEach(([D,$,Ee])=>{O.add(te.cyl(.18*Ee,.25*Ee,3*Ee,6),ne,D,1.5*Ee,$),O.add(new wi(1.6*Ee,0),F,D,3.6*Ee,$),O.add(new wi(1.1*Ee,0),fe,D+.8*Ee,3.2*Ee,$+.6*Ee)}),O.add(te.cyl(.05,.05,7,6),ue(14540253,.4),-20,3.5,-1),[15239226,16052454,3111482].forEach((D,$)=>O.add(te.box(.03,.3,.9),ue(D,.6),-20,6.6-$*.3,-.5)),O.build(se,{cast:!0,receive:!0});let Oe=(()=>{let D=document.createElement("canvas");D.width=4,D.height=256;let $=D.getContext("2d"),Ee=$.createLinearGradient(0,0,0,256);Ee.addColorStop(0,"#2e2a44"),Ee.addColorStop(.45,"#6a4a5a"),Ee.addColorStop(.78,"#c8784e"),Ee.addColorStop(1,"#f0a868"),$.fillStyle=Ee,$.fillRect(0,0,4,256);let nt=new tn(D);return nt.colorSpace=Lt,nt})(),be=new yt({map:Oe,side:mn,fog:!1,toneMapped:!0});be.color.setScalar(1.15);let X=new De(new nn(45,24,12,0,Math.PI*2,0,Math.PI/2),be);X.position.set(-20,0,2),se.add(X);let S=[];for(let D=0;D<9;D++){let $=Mn({child:!0,top:16052970,bottom:D%2?2767466:6957626,female:D%2===1,skin:[9067068,8014896,10119236][D%3],scale:1.3});$.traverse(Ze=>{Ze.material&&Ze.material.emissive&&(Ze.material=Ze.material.clone(),Ze.material.fog=!1,Ze.material.emissive.copy(Ze.material.color).multiply(ce).multiplyScalar(.2))});let Ee=-17+D%3*1.4,nt=-2+Math.floor(D/3)*3.2;$.userData.c={cx:Ee,cz:nt,r:.8+D%4*.5,sp:(.7+D%3*.25)*(D%2?1:-1),a:D},se.add($),S.push($)}let ae=Mn({female:!0,top:3107663,bottom:3107663,scarf:14262826,scale:1.3});ae.traverse(D=>{D.material&&D.material.emissive&&(D.material=D.material.clone(),D.material.emissive.copy(D.material.color).multiply(ce).multiplyScalar(.2))}),ae.position.set(-21.5,0,1.5),ae.rotation.y=Math.PI/2,se.add(ae);let Ce=new Ut;Ce.position.set(Ae,Pe,Ue),h.add(Ce);let Xe=new Lo(16753242,_f);Xe.position.copy(new b(0,.8,0).addScaledVector(ar,-18)),Xe.target.position.set(0,.8,0),Xe.castShadow=!0,Xe.shadow.mapSize.set(2048,2048),Object.assign(Xe.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:4,far:36}),Xe.shadow.bias=-4e-4,Xe.shadow.normalBias=.02,Xe.shadow.radius=3,e.add(Xe,Xe.target);let je=[],ke={0:5,1:1.9,3:2.8,4:.9},ie=new Gn({map:vf(),color:new xe(1,.6,.28).multiplyScalar(.45),blending:_n,depthWrite:!1,transparent:!0,fog:!1}),ct=new tt({color:16769192,emissive:16756816,emissiveIntensity:5,roughness:.2}),Et=new tt({color:4866614,roughness:.35,metalness:.1}),V=Ne(3813414,{metalness:.6,roughness:.4});[[-6.2,.6,1],[-1,-2.1,1],[-3.6,-4.6,0],[5,4.2,1],[4.6,-2,1],[1.6,.6,0]].forEach(([D,$,Ee],nt)=>{let Ze=1.2000000000000002;T.add(te.cyl(.006,.006,Ze,4),Me,D,3.95-Ze/2,$),T.add(te.cyl(.03,.035,.07,8),V,D,2.78,$);let en=un(new nn(.05,12,8),Ee?ct.clone():Et,D,2.7,$,h);if(en.castShadow=!1,Ee){let kt=new Nn(ie);kt.position.set(D,2.7,$),kt.scale.setScalar(.28+.06*(ke[nt]??2)),kt.renderOrder=4,h.add(kt)}let zt=Ee?c.add({pos:new b(D,2.62,$),color:16752720,intensity:ke[nt]??2,distance:7,decay:1.8,space:"sweatshop"}):null;nt%2===0&&T.add(new bi(.22,.12,12,1,!0),Ne(4872786,{metalness:.5,roughness:.5,side:At}),D,2.8,$),zt&&je.push({L:zt,base:zt.intensity,glass:en,flick:nt*1.7})});let Ye=c.add({pos:new b(3.5,3,-5.6),color:13625087,intensity:.55,distance:5,decay:1.8,space:"sweatshop"}),me=un(new Ot(.025,.025,1.2,8),new tt({color:15267071,emissive:13625087,emissiveIntensity:6}),3.5,3.2,-5.92,h);me.rotation.z=Math.PI/2,me.castShadow=!1,T.add(te.box(1.3,.06,.08),Ne(14211280),3.5,3.24,-5.95);let Re=9,qe=.03,$e=new qt({uniforms:{uTime:{value:0},uK:{value:1},uSun:{value:ar.clone()},uSteps:{value:28}},transparent:!0,depthWrite:!1,depthTest:!0,blending:_n,side:mn,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime; uniform float uK; uniform vec3 uSun; uniform float uSteps; varying vec3 vW;
      const float WX = ${Ae.toFixed(3)}, Z0 = ${wt.z0.toFixed(3)}, Z1 = ${wt.z1.toFixed(3)}, Y0 = ${wt.y0.toFixed(3)}, Y1 = ${wt.y1.toFixed(3)};
      float h(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(h(i), h(i+vec3(1,0,0)), f.x), mix(h(i+vec3(0,1,0)), h(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i+vec3(0,0,1)), h(i+vec3(1,0,1)), f.x), mix(h(i+vec3(0,1,1)), h(i+vec3(1,1,1)), f.x), f.y), f.z); }
      // how much sun passes the window at window-plane point (z, y): bars, rails, mullion, the board, dirty glass
      float pass(float z, float y){
        float ww = Z1 - Z0, wh = Y1 - Y0, zc = (Z0 + Z1) * 0.5, yc = (Y0 + Y1) * 0.5;
        float u = (z - Z0) / ww * ${Re.toFixed(1)}; float d = abs(fract(u + 0.5) - 0.5) * ww / ${Re.toFixed(1)};
        float k = smoothstep(${(qe*.5).toFixed(3)}, ${(qe*.5+.012).toFixed(3)}, d);           // vertical bars (soft edge = soft penumbra)
        k *= smoothstep(0.03, 0.045, abs(z - zc));                                                        // mullion
        k *= smoothstep(0.025, 0.04, abs(y - yc)) * smoothstep(0.02, 0.032, abs(y - (yc + 0.25)));      // rails
        if (z > zc && y > yc) k *= 0.0;                                                                    // plywood board
        if (z < zc && y > yc) k *= 0.55;                                                                   // grimy glass
        return k;
      }
      void main(){
        vec3 ro = cameraPosition, rd = normalize(vW - cameraPosition);
        // ray interval inside the light volume: t>=0 behind the window, inside the window rect, above the floor
        float s0 = 0.0, s1 = length(vW - cameraPosition);
        // window-plane coords are linear along the ray: t = (p.x-WX)/sun.x ; w = p - sun*t
        float a0 = (ro.x - WX) / uSun.x, a1 = rd.x / uSun.x;
        vec2 wz = vec2(ro.z - uSun.z * a0, rd.z - uSun.z * a1), wy = vec2(ro.y - uSun.y * a0, rd.y - uSun.y * a1);
        #define CLIP(c, d, lo, hi) if (abs(d) > 1e-5) { float q0 = ((lo) - (c)) / (d), q1 = ((hi) - (c)) / (d); s0 = max(s0, min(q0, q1)); s1 = min(s1, max(q0, q1)); } else if ((c) < (lo) || (c) > (hi)) discard;
        CLIP(a0, a1, 0.0, 40.0)
        CLIP(wz.x, wz.y, Z0, Z1)
        CLIP(wy.x, wy.y, Y0, Y1)
        CLIP(ro.y, rd.y, 0.0, 9.0)
        if (s1 <= s0) discard;
        float n = uSteps, ds = (s1 - s0) / n, acc = 0.0;
        float jit = 0.5 * ds;   // no dither at all: any screen-space dither pattern (random or fixed) shimmered as fine hatching on the window frame when the view moved
        for (int i = 0; i < 40; i++) {
          if (float(i) >= n) break;
          float s = s0 + jit + float(i) * ds; vec3 p = ro + rd * s;
          float t = a0 + a1 * s;
          float k = pass(wz.x + wz.y * s, wy.x + wy.y * s);
          float dust = 0.55 + 0.6 * n3(p * 2.2 + vec3(uTime * 0.05, -uTime * 0.02, uTime * 0.03));
          acc += k * dust * exp(-t * 0.28) * smoothstep(0.0, 0.25, p.y) * ds;
        }
        float a = acc * 0.28 * uK;
        gl_FragColor = vec4(vec3(1.0, 0.7, 0.42) * a, 1.0);
      }`}),Mt=new it;h.add(Mt);{let D=[];[wt.z0,wt.z1].forEach(en=>[wt.y0,wt.y1].forEach(zt=>{let kt=new b(Ae,zt,en);D.push(kt.clone(),kt.clone().addScaledVector(ar,zt/-ar.y))}));let $=new Bi().setFromPoints(D);$.min.y=.01,$.min.x=Ae+.16;let Ee=$.getSize(new b),nt=$.getCenter(new b),Ze=new De(new Ct(Ee.x,Ee.y,Ee.z),$e);Ze.position.copy(nt),Ze.renderOrder=3,Ze.frustumCulled=!1,Mt.add(Ze)}let Wt=900,fn=new Xt,ee=new Float32Array(Wt*3),N=new Float32Array(Wt);for(let D=0;D<Wt;D++){if(D<Wt*.6){let Ee=Math.random()*3.2,nt=wt.z0+Math.random()*Fe,Ze=wt.y0+Math.random()*Ke;ee.set([Ae+ar.x*Ee,Ze+ar.y*Ee,nt+ar.z*Ee],D*3)}else ee.set([-7.5+Math.random()*15,Math.random()*3.6,-5.5+Math.random()*11],D*3);N[D]=Math.random()}fn.setAttribute("position",new on(ee,3)),fn.setAttribute("seed",new on(N,1));let de=new qt({uniforms:{uTime:{value:0},uMap:{value:vf()},uSun:{value:ar},uPx:{value:1}},transparent:!0,depthWrite:!1,blending:_n,vertexShader:`attribute float seed; uniform float uTime; uniform vec3 uSun; uniform float uPx; varying float vB;
      void main(){
        vec3 p = position;
        p.x += sin(uTime*0.13 + seed*40.0)*0.25; p.y += sin(uTime*0.09 + seed*25.0)*0.2; p.z += cos(uTime*0.11 + seed*31.0)*0.25;
        // trace back along the sunlight to the window wall: are we inside the beam?
        float t = (p.x - (${Ae.toFixed(2)})) / uSun.x; vec3 w = p - uSun * t;
        float inB = step(${wt.z0.toFixed(2)}, w.z) * step(w.z, ${wt.z1.toFixed(2)}) * step(${wt.y0.toFixed(2)}, w.y) * step(w.y, ${wt.y1.toFixed(2)}) * step(0.0, t);
        vB = (0.06 + inB * 1.15) * smoothstep(0.35, 0.9, -(modelViewMatrix * vec4(p,1.0)).z);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = min(5.0, (0.004 + seed*0.006) * uPx * 420.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; varying float vB; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vec3(1.0,0.86,0.66)*vB*a, 1.0); }"}),We=new ls(fn,de);We.frustumCulled=!1,We.renderOrder=4,h.add(We);let He=[],Se=[],rt=[],Ht=(D,$,Ee,nt)=>rt.push({minX:D,maxX:$,minZ:Ee,maxZ:nt});lt.forEach(([D,$])=>Ht(D-.3,D+.3,$-.3,$+.3));let wn={"0,1":{female:!0,top:11022890,bottom:11022890,scarf:14262826,skin:9067068},"0,2":{child:!0,top:6978970,bottom:3816010,skin:8014896},"1,0":{top:12103834,bottom:4866104,skin:7225896,cap:!0},"1,2":{female:!0,top:3107663,bottom:3107663,scarf:12868218,skin:10119236},"2,0":{female:!0,top:12868218,bottom:6957626,scarf:15327695,skin:8014896},"2,1":{top:5925502,bottom:2763312,skin:9067068},"2,2":{child:!0,female:!0,top:14262826,bottom:14262826,skin:10119236},"3,0":{female:!0,top:2046568,bottom:2046568,scarf:11879470,skin:7225896},"3,2":{top:8010282,bottom:3816010,skin:8014896}},vn=null,ln=null,Qt=null,Ni=[];Rm.forEach((D,$)=>Tm.forEach((Ee,nt)=>{let Ze=$===0&&nt===0,en=Ze?0:(_e()-.5)*.06,zt=new pt().compose(new b(D,ss,Ee),new bn().setFromEuler(new Vt(0,en,0)),new b(1,1,1)),kt=Ur({wood:m,threadColor:[11879470,2046568,14262826,15327695][($+nt)%4],batch:Ze?null:T,at:Ze?null:zt,headX:Ze?Mf:0});if(kt.position.set(D,ss,Ee),kt.rotation.y=en,h.add(kt),He.push({m:kt,isPlayer:Ze}),Ht(D-.6,D+.6,Ee-.38,Ee+.38),Ze){vn=kt,kt.userData.speed=0;return}let ks=wn[$+","+nt],Be=He.length,ot=1+Be*3%5,xt=3+Be%3;for(let Pn=0;Pn<ot;Pn++)T.add(te.box(.32,.024,.2),_[(Be+Pn)%_.length],D+.4+(_e()-.5)*.02,ss+.012+Pn*.024,Ee+.1+(_e()-.5)*.03,0,(_e()-.5)*.2,0);let Yn=D-.9,Cn=Ee+.35;T.add(An(.36,.36,.04,.02),p,Yn,.6,Cn),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Pn,Vs])=>T.add(te.box(.035,.6,.035),p,Yn+Pn*.14,.3,Cn+Vs*.14));for(let Pn=0;Pn<xt;Pn++)T.add(te.box(.34,.024,.26),_[(Be*2+Pn)%_.length],Yn+(_e()-.5)*.02,.632+Pn*.024,Cn+(_e()-.5)*.02,0,(_e()-.5)*.25,0);Ht(Yn-.16,Yn+.16,Cn-.16,Cn+.16);let vi=D,ra=Ee+.85;if(T.add(An(.38,.38,.05,.03),p,vi,.56,ra),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Pn,Vs])=>T.add(te.box(.04,.56,.04),p,vi+Pn*.15,.28,ra+Vs*.15,Vs*.06,0,-Pn*.06)),ks){let Pn=Mn({...ks,child:!0,scale:Sm[Be%Sm.length]});ko(Pn,.62),Pn.position.set(vi,0,ra),Pn.rotation.y=Math.PI,h.add(Pn),qc(Pn,new b(vi-.08,.14,Ee+.2),.12);let Vs=new De(new Ct(.32,.006,.24),_[(Be*2+xt)%_.length]);Vs.castShadow=!0,h.add(Vs),Se.push({p:Pn,m:kt,pc:Vs,x:D,z:Ee,lx:Yn,lz:Cn,top:.632+xt*.024+.006,done:ss+.012+ot*.024+.006,off:Be*2.3,cyc:8.6+Be%5*.37}),Ht(vi-.3,vi+.3,ra-.3,ra+.3)}else kt.userData.speed=0})),T.add(An(.36,.34,.05,.03),p,ni.x,.5,ni.z),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([D,$])=>T.add(te.box(.04,.5,.04),p,ni.x+D*.14,.25,ni.z+$*.13,$*.06,0,-D*.06)),T.add(te.box(.3,.025,.025),p,ni.x,.16,ni.z+.13),T.add(te.box(.3,.025,.025),p,ni.x,.16,ni.z-.13),Ht(ni.x-.2,ni.x+.2,ni.z-.19,ni.z+.19);let hi=new it;hi.position.set(ds-.95,0,rs+.35),h.add(hi),T.add(An(.5,.5,.05,.03),p,hi.position.x,.72,hi.position.z),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([D,$])=>T.add(te.box(.045,.72,.045),p,hi.position.x+D*.2,.36,hi.position.z+$*.2)),Ht(ds-1.25,ds-.65,rs+.05,rs+.65),ln=new it,ln.position.set(ds-.95,.77,rs+.35),h.add(ln);for(let D=0;D<7;D++){let $=un(new Ct(.36,.024,.28),_[D%_.length],(_e()-.5)*.03,.012+D*.024,(_e()-.5)*.03,ln);$.rotation.y=(_e()-.5)*.25,Ni.push($)}Qt=new it,Qt.position.set(ds+.4,ss,rs+.1),h.add(Qt);let Le=un(new Ct(.32,.006,.26),new tt({map:v.fab[0],roughness:.95}),0,0,0,h);Le.visible=!1;let bt=new b(ds+Mf-.27,ss+.056,rs+.02),ze={x:5.15,z:4.5,w:1.9,d:.85,h:.84},L=new tt({...Ja([.5,.38,.26],93),roughness:1});T.add(An(ze.w+.08,ze.d+.06,.05,.02),p,ze.x,ze.h-.05,ze.z),T.add(te.box(ze.w,ze.h-.05,.03),L,ze.x,(ze.h-.05)/2,ze.z-ze.d/2+.015),[-1,1].forEach(D=>T.add(te.box(.03,ze.h-.05,ze.d-.04),L,ze.x+D*(ze.w/2-.015),(ze.h-.05)/2,ze.z)),T.add(te.box(ze.w-.06,.03,ze.d-.06),L,ze.x,.12,ze.z),T.add(te.box(ze.w+.02,.06,.02),Ne(2760728),ze.x,.03,ze.z-ze.d/2+.01),T.add(te.box(.5,.4,.006),Ne(6969924,{roughness:1}),ze.x-.5,.55,ze.z-ze.d/2-.003),T.add(te.box(.36,.3,.006),Ne(5917240,{roughness:1}),ze.x+.55,.78,ze.z-ze.d/2-.003),[-.55,.55].forEach(D=>{T.add(te.box(.5,.1,.02),p,ze.x+D,ze.h-.12,ze.z+ze.d/2-.01),T.add(te.box(.08,.02,.025),Ne(9075290,{metalness:.6,roughness:.4}),ze.x+D,ze.h-.12,ze.z+ze.d/2+.005)});let Z=new tt({map:Mm(),roughness:.9}),I=ze.h+.001;T.add(te.box(.46,.03,.34),Ne(5905944),ze.x-.3,I+.015,ze.z-.05,0,.08,0),T.add(te.box(.44,.008,.32),Z,ze.x-.3,I+.034,ze.z-.05,0,.08,0),T.add(te.cyl(.004,.004,.14,5),Ne(1714794),ze.x-.12,I+.045,ze.z-.12,0,.5,Math.PI/2),T.add(te.box(.24,.12,.17),Ne(4872786,{metalness:.6,roughness:.45}),ze.x+.4,I+.06,ze.z+.05),T.add(te.box(.25,.012,.18),Ne(5925474,{metalness:.6,roughness:.4}),ze.x+.4,I+.126,ze.z+.05),T.add(te.cyl(.03,.025,.085,10),new tt({color:13144160,transparent:!0,opacity:.8,roughness:.15}),ze.x+.12,I+.043,ze.z+.22),T.add(te.cyl(.04,.04,.006,10),Ne(6969920),ze.x+.7,I+.003,ze.z-.15),T.add(te.cyl(.002,.002,.16,4),M(),ze.x+.7,I+.08,ze.z-.15);for(let D=0;D<6;D++)T.add(te.box(.08,.002,.06),Ne(15261896),ze.x+.7,I+.02+D*.012,ze.z-.15,0,D*.7,0);T.add(te.box(.26,.012,.16),p,ze.x-.75,I+.006,ze.z+.15,0,-.2,0);for(let D=0;D<4;D++)for(let $=0;$<6;$++)T.add(new nn(.009,6,4),Ne([11879470,14262826][D%2]),ze.x-.85+$*.03+($>2?.04:0),I+.02,ze.z+.1+D*.035);for(let D=0;D<8;D++)T.add(te.box(.32,.022,.2),_[D%_.length],ze.x+.05,I+.011+D*.022,ze.z-.22,0,(_e()-.5)*.2,0);T.add(te.box(1.25,.05,.09),Ne(14211280),ze.x,2.62,ze.z-.1),[-.55,.55].forEach(D=>T.add(te.cyl(.004,.004,1.3,4),Me,ze.x+D,3.3,ze.z-.1));let z=un(new Ot(.022,.022,1.15,8),new tt({color:15267071,emissive:13625087,emissiveIntensity:4}),ze.x,2.585,ze.z-.1,h);z.rotation.z=Math.PI/2,z.castShadow=!1,Ht(ze.x-ze.w/2-.05,ze.x+ze.w/2+.05,ze.z-ze.d/2-.05,ze.z+ze.d/2);let H=new tt({map:xf(),roughness:.9}),ge=un(new mt(.38,.56),H,ze.x-.6,2,Je.maxZ-.01,h);ge.rotation.y=Math.PI,ge.castShadow=!1;let W=Mn({top:14209728,bottom:3816e3,skin:8016438,mustache:!0,belly:.035,outfit:"shirt",sleeves:"full",glasses:!0,seed:41,scale:1.34}),oe={x:ze.x+.15,z:5.38,seat:.48};{let D=p;T.add(An(.46,.44,.045,.02),D,oe.x,oe.seat-.02,oe.z),[[-1,-1],[1,-1]].forEach(([$,Ee])=>T.add(te.box(.045,oe.seat-.04,.045),D,oe.x+$*.19,(oe.seat-.04)/2,oe.z+Ee*.18)),[-1,1].forEach($=>T.add(te.box(.05,1.02,.05),D,oe.x+$*.19,.51,oe.z+.2,-.06,0,0)),[.72,.86,.98].forEach($=>T.add(te.box(.4,$>.95?.08:.04,.025),D,oe.x,$,oe.z+.2+($-.5)*.06,-.06,0,0)),T.add(te.box(.38,.03,.03),D,oe.x,.18,oe.z-.18),T.add(te.box(.03,.03,.36),D,oe.x-.19,.16,oe.z),T.add(te.box(.03,.03,.36),D,oe.x+.19,.16,oe.z),Ht(oe.x-.26,oe.x+.26,oe.z-.24,oe.z+.28)}W.position.set(oe.x,0,oe.z),W.rotation.y=Math.PI,h.add(W),ko(W,oe.seat+.1),qc(W,new b(oe.x-.1,.08,oe.z-.45),.07);let Ge={hip:W.userData.hipBase,knee:W.userData.kneeBase,hy:(oe.seat+.1)/W.scale.y};W.userData.standK=0,W.userData.stand=!1;let at=new b,dt=[2.75,2.25,1.75,1.25],Qe=1.62;T.add(te.box(.04,.1,2),p,Je.maxX-.02,Qe+.02,2),dt.forEach(D=>{T.add(te.cyl(.011,.008,.11,6),x,Je.maxX-.08,Qe,D,0,0,Math.PI/2-.5),T.add(te.cyl(.008,.008,.04,5),x,Je.maxX-.13,Qe+.025,D)});let Pt=[["check",0,9079418],["stripe",2,11049594],["buti",4,10128010]].map(([D,$,Ee],nt)=>{let Ze=$c(mi(D,$,128));return Ze.userData.body.material.color.setHex(Ee),Ze.position.set(Je.maxX-.17,Qe-.62,dt[nt+1]),Ze.rotation.y=-Math.PI/2+(_e()-.5)*.4,Ze.scale.setScalar(.92+_e()*.1),Va(Ze,0),h.add(Ze),Ze}),Zt=new b(Je.maxX-.17,1.25,dt[0]),cn=new it;h.add(cn);let Fn=()=>l.hang(cn,new b(Je.maxX-.17,Qe-.62,dt[0]),-Math.PI/2);Fn();for(let D=0;D<7;D++){let $=7.55-D%2*.12,Ee=1.2+D*.25;T.add(An(.11,.26,.02,.05,.004),Ne([3811870,6961706,2767434][D%3]),$,0,Ee,0,.2*(_e()-.5),0)}T.add(new nn(.26,12,9),Ne(10111530,{roughness:.95}),7.45,.3,-1.2),T.add(te.cyl(.07,.12,.12,12),Ne(10111530,{roughness:.95}),7.45,.58,-1.2),T.add(te.cyl(.04,.035,.08,10),Ne(12105908,{metalness:.9,roughness:.25}),7.45,.68,-1.2),Ht(7.1,7.8,-1.55,-.85);let Jt=new tt({...v.rust,color:10137784}),ft=gt.z1-gt.z0,sn=new it;sn.position.set(Je.maxX-.03,0,gt.z0),h.add(sn);let $t=un(new Ct(.05,gt.h+.03,ft+.06),Jt,-.012,gt.h/2+.005,ft/2,sn);[gt.z0-.05,gt.z1+.05].forEach(D=>T.add(te.box(.16,gt.h+.1,.1),p,Je.maxX,(gt.h+.1)/2,D)),T.add(te.box(.2,.03,ft+.2),Ne(3813414,{roughness:.9}),Je.maxX+.02,.012,(gt.z0+gt.z1)/2),un(new Ct(.08,.04,.12),Ne(2761760,{metalness:.7}),-.04,1.2,ft-.1,sn);let Ri=(()=>{let D=document.createElement("canvas");D.width=64,D.height=64;let $=D.getContext("2d"),Ee=$.createLinearGradient(0,0,0,64);Ee.addColorStop(0,"rgba(255,225,170,0.9)"),Ee.addColorStop(1,"rgba(255,225,170,0)"),$.fillStyle=Ee,$.fillRect(0,0,64,64);let nt=$.createLinearGradient(0,0,64,0);nt.addColorStop(0,"rgba(0,0,0,1)"),nt.addColorStop(.2,"rgba(0,0,0,0)"),nt.addColorStop(.8,"rgba(0,0,0,0)"),nt.addColorStop(1,"rgba(0,0,0,1)"),$.globalCompositeOperation="destination-out",$.fillStyle=nt,$.fillRect(0,0,64,64);let Ze=new tn(D);return Ze.colorSpace=Lt,Ze})(),zs=new yt({map:Ri,transparent:!0,depthWrite:!1,blending:_n,color:new xe(.55,.45,.32),polygonOffset:!0,polygonOffsetFactor:-2}),Qn=un(new mt(ft+.3,.7),zs,Je.maxX-.35,.004,(gt.z0+gt.z1)/2,h);Qn.rotation.set(-Math.PI/2,0,-Math.PI/2),Qn.castShadow=!1,Qn.receiveShadow=!1,T.add(te.box(.12,.1,ft+.2),p,Je.maxX-.04,gt.h+.05,(gt.z0+gt.z1)/2);let lr=c.add({pos:new b(Je.maxX-.8,2.2,(gt.z0+gt.z1)/2),color:16773336,intensity:0,distance:10,decay:1.4,space:"sweatshop",priority:3}),xn=new Ut;xn.position.set(Je.maxX,1.4,(gt.z0+gt.z1)/2),h.add(xn);let xi=new it;h.add(xi),xi.visible=!1;let Ai=Mn({top:6978970,bottom:15327695,skin:7225896,scale:1.3}),ri=un(new nn(.28,8,6),_[3],0,.32,0,null);ri.scale.set(1.2,.6,.9),Ai.userData.J.head.add(ri),ri.position.y=.3,Ai.userData.J.shL.rotation.set(-2.7,0,.3),h.add(Ai);let Hi={x0:-3.2,x1:4.4,z:3.55,t:0},ia=Mn({female:!0,child:!0,top:14262826,bottom:8006174,scarf:2046568,skin:9067068,scale:1.2});ia.position.set(4.6,0,-5.25),h.add(ia),T.add(An(2.4,.9,.06,.03),m,4.6,1.02,-4.6),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([D,$])=>T.add(te.box(.06,1,.06),p,4.6+D*1.1,.5,-4.6+$*.38));for(let D=0;D<9;D++)T.add(te.box(.4,.03,.3),_[D%_.length],3.8+D%3*.5,1.06+Math.floor(D/3)*.03,-4.55,0,(_e()-.5)*.2,0);let Wr=un(new mt(.6,.45,6,1),new tt({map:v.fab[4],side:At,roughness:.95}),4.6,1.1,-4.75,h);Wr.rotation.x=-Math.PI/2,Ht(3.3,5.9,-5.6,-4.1);let Of=[],yi=new Qi;yi.moveTo(-.16,0),yi.lineTo(-.3,-.12),yi.lineTo(-.24,-.24),yi.lineTo(-.15,-.18),yi.lineTo(-.15,-.75),yi.lineTo(.15,-.75),yi.lineTo(.15,-.18),yi.lineTo(.24,-.24),yi.lineTo(.3,-.12),yi.lineTo(.16,0),yi.lineTo(.06,.02),yi.lineTo(0,-.06),yi.lineTo(-.06,.02);let Th=new Po(yi,2);{let D=Th.attributes.position,$=Th.attributes.uv;for(let Ee=0;Ee<D.count;Ee++)$.setXY(Ee,D.getX(Ee)*1.5+.5,D.getY(Ee)*1.5+1)}[[-3.3,2,7.2],[-3.9,2.4,6.9]].forEach(([D,$,Ee],nt)=>{T.add(Xo(new b($,3.25,D),new b(Ee,3.25,D),.12,.005),Me);for(let Ze=$+.4;Ze<Ee-.3;Ze+=.62){let en=.12*(1-((Ze-($+Ee)/2)/((Ee-$)/2))**2),zt=new it;zt.position.set(Ze,3.25-en,D),h.add(zt);let kt=un(Th,new tt({map:v.fab[(Math.floor(Ze*3)+nt)%v.fab.length],side:At,roughness:.95}),0,0,0,zt);zt.rotation.y=(_e()-.5)*.3,Of.push(zt)}});let Qm=new tt({map:mi("check",5),color:12098154,roughness:1,flatShading:!0}),eg=[[.001,0],[.3,.02],[.36,.25],[.34,.55],[.22,.75],[.08,.82],[.001,.84]].map(([D,$])=>new we(D,$)),tg=new Ei(eg,9);[[7.45,-5.4],[7.45,-4.65],[6.85,-5.45],[7.5,-3.9],[7.4,.2],[6.9,-4.9]].forEach(([D,$],Ee)=>{T.add(tg,Qm,D,Ee===5?.7:0,$,.1*(_e()-.5),_e()*6,.1*(_e()-.5),1,.9+_e()*.3,1)}),Ht(6.5,7.9,-5.9,-3.5),Ht(7,7.9,-.2,.6);for(let D=0;D<6;D++)T.add(te.cyl(.11,.11,2.2,10),_[D],-5.6+D*.3,1.05,-5.75,.18,0,(_e()-.5)*.1);Ht(-5.9,-3.9,-6,-5.4);let Os=-1.2;T.add(te.box(.7,.04,.24),p,Os,1.95,Je.minZ+.12),T.add(te.box(.04,.12,.2),p,Os-.3,1.89,Je.minZ+.12),T.add(te.box(.04,.12,.2),p,Os+.3,1.89,Je.minZ+.12);for(let D=0;D<22;D++){let $=D/21,Ee=Os-.36+$*.72,nt=2.05-Math.sin($*Math.PI)*.25;T.add(new wi(.03,0),Ne(D%3?15763994:15777824,{flatShading:!0,emissive:4200448}),Ee,nt,Je.minZ+.05)}T.add(te.cyl(.035,.02,.025,10),Ne(13148224,{metalness:.9,roughness:.3}),Os+.15,1.985,Je.minZ+.12);let Ff=un(new bi(.008,.03,6),new yt({color:new xe(1,.6,.2).multiplyScalar(8)}),Os+.15,2.015,Je.minZ+.12,h);Ff.castShadow=!1;let ol=new Nn(ie);ol.position.set(Os+.15,2.02,Je.minZ+.13),ol.scale.setScalar(.18),h.add(ol);let ng=new tt({map:xf(),roughness:.9}),Bf=un(new mt(.42,.63),ng,Os-.75,2.2,Je.minZ+.01,h);Bf.rotation.z=.02,Bf.castShadow=!1;let Xr=new it;Xr.position.set(Je.maxX-.02,3,1.6),Xr.rotation.y=-Math.PI/2,h.add(Xr),un(new Ot(.22,.22,.04,24),Ne(5909018),0,0,-.02,Xr).rotation.x=Math.PI/2,un(new ir(.2,24),new tt({map:_m(),roughness:.6}),0,0,.002,Xr);let al=new it,ll=new it;Xr.add(al,ll),al.position.z=ll.position.z=.01,un(new Ct(.012,.11,.004),Ne(1709072),0,.045,0,al),un(new Ct(.008,.16,.004),Ne(1709072),0,.07,.003,ll);let Rh=[];[[-3.6,2.6],[1.6,2.6],[-1,-3],[4.4,.6]].forEach(([D,$])=>{T.add(te.cyl(.015,.015,.6,6),Ne(5921362,{metalness:.5}),D,3.7,$);let Ee=new it;Ee.position.set(D,3.38,$),h.add(Ee),un(new Ot(.1,.12,.12,12),Ne(6974042,{metalness:.4,roughness:.5}),0,0,0,Ee);for(let nt=0;nt<3;nt++){let Ze=new it;Ze.rotation.y=nt*2.094,Ee.add(Ze);let en=un(new Ct(.6,.01,.13),Ne(8026730,{metalness:.3,roughness:.6}),.38,-.02,0,Ze);en.rotation.x=.12}Rh.push(Ee)});for(let D=0;D<70;D++){let $=-7.5+_e()*15,Ee=-5.5+_e()*11;T.add(te.box(.05+_e()*.12,.003,.04+_e()*.1),_[D%_.length],$,.003,Ee,0,_e()*6,0)}for(let D=0;D<25;D++){let $=new b(-7.5+_e()*15,.004,-5.5+_e()*11),Ee=$.clone().add(new b((_e()-.5)*.6,0,(_e()-.5)*.6));T.add(Xo($,Ee,-.02,.0025),Ne([11879470,15327695,2046568,14262826][D%4]))}T.add(te.box(1.2,.04,.3),p,6.4,1.5,Je.minZ+.16);for(let D=0;D<4;D++)for(let $=0;$<3;$++)T.add(te.cyl(.07,.07,.07,12),Ne(12632252,{metalness:.9,roughness:.25}),5.95+D*.3,1.56+$*.075,Je.minZ+.16);T.build(h),h.traverse(D=>{D.isMesh&&D.material.colorWrite&&(D.receiveShadow=!0)});let cr=new it;cr.visible=!1,h.add(cr);let cl=new yt({map:Em(),transparent:!0,opacity:0,depthWrite:!1,fog:!1});cl.color.setScalar(1.6);let kf=new De(new mt(1.9,.95),cl);kf.position.set(ds+.1,2.05,rs-1.7),cr.add(kf);let ig=D=>{let $=document.createElement("canvas");$.width=$.height=128;let Ee=$.getContext("2d");Ee.fillStyle="#fff6e0",Ee.font="96px Georgia",Ee.textAlign="center",Ee.textBaseline="middle",Ee.fillText(D,64,70);let nt=new tn($);return nt.colorSpace=Lt,nt},Vf="AaBbC\u0915\u0916\u0917123".split("").map((D,$)=>{let Ee=new Nn(new Gn({map:ig(D),transparent:!0,opacity:0,depthWrite:!1,color:new xe(2.2,1.9,1.4)}));return Ee.scale.setScalar(.09),Ee.userData={ph:$*.7,x:(Math.random()-.5)*.6,z:(Math.random()-.5)*.3},cr.add(Ee),Ee}),Gf=c.add({pos:new b(ds,2,rs-.8),color:16769712,intensity:0,distance:4,decay:1.5,space:"sweatshop",priority:4}),KE=n.add({object:ln,label:"Take a piece of fabric",enabled:()=>ve.phase==="pick",onPress:Xf}),$E=n.add({object:vn,label:"Hold to sew",enabled:()=>ve.phase==="push",onPress:()=>{ve.pushing=!0},onRelease:()=>{ve.pushing=!1}}),jE=n.add({object:l.bag,label:"Take your bag",enabled:()=>ve.phase==="toBag",onPress:qf}),QE=n.add({object:W,label:"Collect your wages",enabled:()=>ve.phase==="toWages",onPress:Yf,maxDist:3.2}),e2=n.add({object:sn,label:"Open the door",enabled:()=>ve.phase==="toDoor",onPress:hl}),Ah=[],oi={},hr=new Ut;hr.position.copy(bt),h.add(hr);function sg(){Wf();let D=($,Ee)=>(Ee&&(Ah.push(Ee),oi[$]=Ee),Ee);D("room",t.loop("room",{volume:.05})),D("machine",t.loop("sewing",{object:hr,volume:0,ref:.8})),D("idle",t.loop("hum",{object:hr,volume:.02,ref:.8})),oi.factory=[[-3.6,1.25],[1.6,-1.5],[-1,-4.25],[1.6,1.25]].map(([$,Ee],nt)=>{let Ze=new Ut;return Ze.position.set($,1.3,Ee),h.add(Ze),D("f"+nt,t.loop("factory",{object:Ze,volume:.25,rate:.92+nt*.05,ref:1.8}))}),oi.chatter=[[-3.6,-.5],[1.6,-3.4]].map(([$,Ee],nt)=>{let Ze=new Ut;return Ze.position.set($,1.6,Ee),h.add(Ze),D("c"+nt,t.loop("chatter",{object:Ze,volume:.22,ref:1.5}))}),D("fan",t.loop("hum",{object:Rh[0],volume:.025,rate:.7,ref:1.2})),D("children",t.loop("children",{object:Ce,volume:.15,ref:1.2})),D("street",t.loop("street",{object:xn,volume:.03,ref:1.5}))}function Wf(){t.stopAll(Ah),Ah=[],oi={}}let ve={phase:"idle",t:0,pieces:0,progress:0,pushing:!1,idle:0,anim:null,factoryWork:1,coinsIn:0,schoolBellT:18,gaze:0,dreamK:0,windowGlow:0,ended:!1},Fs=[],sa=!1,qr=(D,$=5)=>r.hint(D,$),ur=(D,$)=>r.thought(D,$);function Sn(D){ve.phase=D,ve.t=0,ve.idle=0}function Xf(){let D=Ni[Ni.length-1-ve.pieces];D&&(D.visible=!1),Le.material.map=D?D.material.map:v.fab[0],Le.material.needsUpdate=!0,Le.visible=!0,Le.scale.set(1,1,1),Le.position.copy(ln.localToWorld(new b(0,.2,0))),ve.anim={from:ln.localToWorld(new b(0,.2,0)),to:bt.clone().add(new b(.04,0,.16)),t:-.55,dur:.6},t.oneShot("fabric",{object:hr,volume:.7}),ve.progress=0,Sn("placing")}function qf(){let D=l.bag.localToWorld(new b(0,.3,0));s.headWorld(g),a.set(1,{key:"reach-bag",mode:"world",pos:D.add(new b(-.06,0,0)),rot:pi.toward(1,g,D),pose:"grip",blend:.38}),Sn("taking")}function Yf(){Sn("paying"),W.userData.reach=!0,W.userData.stand=!0,r.subtitle('Supervisor: "Here. Same time tomorrow."',3.5)}function hl(){Sn("opening"),t.oneShot("door",{object:xn,volume:1}),xi.visible=!0}let rg=new b(Je.maxX-.12,1.15,gt.z1-.25);function Zf(){Xe.intensity=_f,Fs.forEach(D=>h.remove(D.mesh)),Fs.length=0,Object.assign(ve,{dream:null,dreamT:0,saidOthers:!1,pieces:0,progress:0,pushing:!1,factoryWork:1,coinsIn:0,anim:null,ended:!1,dreamK:0,windowGlow:0,gaze:0}),Ni.forEach(D=>{D.visible=!0}),Qt.clear(),Le.visible=!1,Fn(),l.setCoins(0),l.forceOpen=0,sn.rotation.y=0,lr.intensity=0,xi.visible=!1,sa=!1,W.userData.reach=!1,W.userData.stand=!1,W.userData.standK=0,Se.forEach(D=>{D.p.userData.work=1}),He.forEach(({m:D,isPlayer:$})=>{$&&(D.userData.speed=0)}),cr.visible=!1,cl.opacity=0,Vf.forEach(D=>{D.material.opacity=0}),Gf.intensity=0,s.canMove=!1,s.bounds={minX:Je.minX+.3,maxX:Je.maxX-.3,minZ:Je.minZ+.3,maxZ:Je.maxZ-.3},o.set(null),a.hide(),Sn("idle")}function og(){Zf(),s.place(ni.x,ni.z,0,1.3),sg(),Sn("intro")}function ag(){Wf(),Sn("idle"),Xe.intensity=0,lr.intensity=0}function lg(){let D=un(new Ot(.022,.022,.006,14),Ne(13148224,{metalness:.9,roughness:.3}),0,0,0,h);D.position.copy(at),Fs.push({mesh:D,from:D.position.clone(),t:0,dur:.75})}let cg=9.2,Jf=(D,$,Ee,nt=.35)=>Ft((D-$)/nt,0,1)*Ft((Ee-D)/nt,0,1),ul=new b,dl=new b,Yr=new b,Ch=(D,$,Ee,nt,Ze)=>D.set((1-Ze)*(1-Ze)*$.x+2*(1-Ze)*Ze*Ee.x+Ze*Ze*nt.x,(1-Ze)*(1-Ze)*$.y+2*(1-Ze)*Ze*Ee.y+Ze*Ze*nt.y,(1-Ze)*(1-Ze)*$.z+2*(1-Ze)*Ze*Ee.z+Ze*Ze*nt.z);function hg(D,$,Ee){let{p:nt,m:Ze,pc:en}=D,zt=nt.userData.J,kt=(($+D.off)%D.cyc+D.cyc)%D.cyc*(cg/D.cyc),ks=kt>2&&kt<6.6?1:0;nt.userData.work=st(nt.userData.work,1,Ee*1.5),Ze.userData.speed=st(Ze.userData.speed,ks?1:.05,Ee*4),lf(nt,$,Ee,Ze.userData.speed);let Be=St(Jf(kt,.1,1.5)),ot=St(Jf(kt,6.5,7.7));zt.spine.rotation.y=.55*Be-.45*ot,zt.spine.rotation.x+=.15*(Be+ot),zt.shL.rotation.x=st(zt.shL.rotation.x,-1.25,Be),zt.shL.rotation.z=st(zt.shL.rotation.z,.75,Be),zt.elL.rotation.x=st(zt.elL.rotation.x,-.2,Be),zt.shR.rotation.x=st(zt.shR.rotation.x,-1.2,ot),zt.shR.rotation.z=st(zt.shR.rotation.z,-.7,ot),zt.elR.rotation.x=st(zt.elR.rotation.x,-.25,ot);let xt=ss+.058,Yn=D.x-.27;if(kt<1)en.visible=kt>.55,en.position.set(D.lx,D.top,D.lz);else if(kt<2){let Cn=St((kt-1)/1);ul.set(D.lx,D.top,D.lz),dl.set(Yn,xt,D.z+.16),Yr.set(D.x-.62,ss+.22,D.z+.3),Ch(en.position,ul,Yr,dl,Cn),en.visible=!0}else if(kt<6.6){let Cn=(kt-2)/4.6;en.position.set(Yn+Math.sin(Cn*9)*.01,xt,D.z+.16-Cn*.3)}else if(kt<7.6){let Cn=St((kt-6.6)/1);ul.set(Yn,xt,D.z-.14),dl.set(D.x+.4,D.done,D.z+.1),Yr.set(D.x+.02,ss+.14,D.z+.42),Ch(en.position,ul,Yr,dl,Cn)}else en.visible=!1;en.rotation.y=Math.sin(D.off)*.15}let Kf=0;function ug(D,$,Ee=!0){s.headWorld(g),se.visible=g.x<Je.maxX+.6&&g.x>Je.minX-30,$e.uniforms.uTime.value=$,de.uniforms.uTime.value=$,Se.forEach(Be=>hg(Be,$,D)),He.forEach(({m:Be})=>sm(Be,D)),Rh.forEach((Be,ot)=>{Be.rotation.y+=D*(2.2+ot*.3)}),Of.forEach((Be,ot)=>{Be.rotation.x=.07*Math.sin($*.9+ot*1.3),Be.rotation.z=.03*Math.sin($*.7+ot)}),Ff.scale.y=1+.25*Math.sin($*13)*Math.sin($*7.3),ol.scale.setScalar(.17+.02*Math.sin($*11)),je.forEach(Be=>{let ot=Math.pow(Math.max(0,Math.sin($*.72+Be.flick)),12),xt=.86+.05*Math.sin($*2.1+Be.flick)-.22*ot;Be.L.intensity=Be.base*xt,Be.glass.material.emissiveIntensity=4.2*xt});let nt=.88-.28*Math.pow(Math.max(0,Math.sin($*.67)),14);Ye.intensity=.55*nt,me.material.emissiveIntensity=3.5*nt,ll.rotation.z=-(35/60)*Math.PI*2-$*.0017,al.rotation.z=-((6+35/60)/12)*Math.PI*2-$*14e-5,S.forEach((Be,ot)=>{let xt=Be.userData.c;xt.a+=D*xt.sp/xt.r,Be.position.set(xt.cx+Math.cos(xt.a)*xt.r,0,xt.cz+Math.sin(xt.a)*xt.r),Be.rotation.y=Math.atan2(-Math.sin(xt.a)*Math.sign(xt.sp),Math.cos(xt.a)*Math.sign(xt.sp)),Cs(Be,$*11+ot,1.2)}),Di(ae,$,D),Hi.t+=D*.11;let Ze=(Math.sin(Hi.t)+1)/2,en=Math.cos(Hi.t)>0?1:-1;Ai.position.set(st(Hi.x0,Hi.x1,Ze),0,Hi.z),Ai.rotation.y=Yt(Ai.rotation.y,en>0?Math.PI/2:-Math.PI/2,5,D),Kf+=D*7*Math.abs(Math.cos(Hi.t))+D*.5,Cs(Ai,Kf,Math.min(1,Math.abs(Math.cos(Hi.t))*3)),Ai.userData.J.shL.rotation.set(-2.8,0,.35),Ai.userData.J.elL.rotation.x=-.5;{let Be=ia.userData.J,ot=(Math.sin($*1.4)+1)/2;Be.spine.rotation.x=.35,Be.neck.rotation.x=.3,Be.shL.rotation.set(-1.2-ot*.5,0,.3-ot*.2),Be.shR.rotation.set(-1.2-ot*.5,0,-.3+ot*.2),Be.elL.rotation.x=-.6,Be.elR.rotation.x=-.6;let xt=Wr.geometry.attributes.position;for(let Yn=0;Yn<xt.count;Yn++){let Cn=xt.getX(Yn);xt.setZ(Yn,Math.max(0,Cn)*Math.sin(ot*Math.PI)*.7)}xt.needsUpdate=!0,Wr.geometry.computeVertexNormals()}{let Be=W.userData.J,ot=W.userData;Di(W,$,D),ot.standK=Ft(ot.standK+(ot.stand?D:-D)/1.25,0,1);let xt=St(ot.standK),Yn=Math.sin(xt*Math.PI);Be.hips.position.y=st(Ge.hy,ot.hipY,xt),Be.hipL.rotation.x=Be.hipR.rotation.x=st(Ge.hip,0,xt),Be.kneeL.rotation.x=Be.kneeR.rotation.x=st(Ge.knee,0,xt),Be.spine.rotation.x+=.5*Yn+.12*(1-xt),W.position.z=st(oe.z,oe.z-.32,xt),ot.mode=xt>.5?"stand":"sit";let Cn=ot.reach&&ot.standK>.85?1:0;ot.reachK=Yt(ot.reachK||0,Cn,4,D);let vi=ot.reachK;Be.shR.rotation.set(-.1-vi*1.25,0,-.06-vi*.15),Be.elR.rotation.x=-.2-vi*.25,Be.shL.rotation.set(-.35,0,.08),Be.elL.rotation.x=-1.1,Be.handR.getWorldPosition(at)}if(ve.phase==="idle"||ve.phase==="done"||!Ee)return;ve.t+=D,ve.idle+=D,o.urgent=ve.idle>20,ve.idle>20&&ve.idle-D<=20&&fg(),s.headWorld(g),s.camera.getWorldDirection(d),f.set(Ae,Pe,Ue).sub(g).normalize();let zt=d.dot(f)>.82&&g.distanceTo(f.set(Ae,Pe,Ue))<5;ve.gaze=st(ve.gaze,zt?1:0,D*1.5),ve.schoolBellT-=D,ve.schoolBellT<0&&ve.phase!=="outside"&&(ve.schoolBellT=30+Math.random()*15,t.oneShot("schoolBell",{object:Ce,volume:.25+ve.gaze*.4}));let kt=vn.userData;if(kt.speed=st(kt.speed,ve.pushing&&ve.phase==="push"?1:0,D*8),oi.machine&&oi.machine.setVolume(kt.speed*.55*(1-.6*ve.dreamK)),oi.children&&oi.children.setVolume(.15+.55*Math.max(ve.gaze,ve.dreamK)),oi.factory&&oi.factory.forEach(Be=>Be&&Be.setVolume(.12*(1-.6*ve.dreamK)+.01)),oi.chatter&&oi.chatter.forEach(Be=>Be&&Be.setVolume(.2+(1-ve.factoryWork)*.25)),Xe.intensity=_f*(1+.3*ve.windowGlow+.1*ve.gaze),$e.uniforms.uK.value=1+.55*ve.windowGlow+.2*ve.gaze,i.post.dream=ve.dreamK,i.post.glow=ve.windowGlow*.35,dg($),ve.dream){ve.dreamT+=D;let Be=ve.dreamT,ot=Be<1.2?Be/1.2:Be>4.2?Math.max(0,1-(Be-4.2)/1.3):1;ve.dreamK=ve.dream==="school"?ot*(ve.pushing?.75:1):ot*.35,ve.dream==="school"?(cr.visible=!0,cl.opacity=ot*.8,Gf.intensity=ot*3,Vf.forEach((xt,Yn)=>{let Cn=xt.userData,vi=(Be*.25+Cn.ph*.13)%1;xt.position.set(bt.x+.2+Cn.x,bt.y+.05+vi*1.1,bt.z-.2+Cn.z-vi*.6),xt.material.opacity=ot*Math.sin(vi*Math.PI)*.9})):ve.windowGlow=St(ot),Be>5.5&&(cr.visible=!1,ve.dreamK=0,ve.windowGlow=0,ve.dream=null)}switch(!ve.saidOthers&&["pick","push"].includes(ve.phase)&&ve.t>2&&(s.camera.getWorldDirection(d),Se.find(ot=>(f.copy(ot.p.position).setY(1).sub(g),f.length()<6&&d.dot(f.normalize())>.93))&&(ve.saidOthers=!0,ur("Everyone here is a child like me. Some are younger.",4.5))),!ve.saidOthers&&ve.phase==="pick"&&ve.pieces===1&&ve.t>6&&(ve.saidOthers=!0,ur("Everyone here is a child like me. Some are younger.",4.5)),ve.phase){case"intro":ve.t>1.2&&ve.t-D<=1.2&&ur("Four more pieces. Then I can go home.",4.5),ve.t>5&&(Sn("pick"),qr("Look around with the mouse \xB7 click the glowing fabric on your left",6));break;case"placing":{let Be=ve.anim;Be.t+=D/Be.dur;let ot=St(Ft(Be.t,0,1));Le.position.lerpVectors(Be.from,Be.to,ot),Le.position.y+=Math.sin(ot*Math.PI)*.14,Le.rotation.set(0,(1-ot)*.8,0),Be.t>=1&&(Sn("push"),ve.pieces===0&&qr("Hold the mouse button on the machine to push the fabric through",6));break}case"push":ve.pushing&&(ve.progress+=D/3.2,ve.idle=0),r.progress(ve.progress),Le.position.set(bt.x+.04+Math.sin(ve.progress*30)*.004*(ve.pushing?1:0),bt.y,bt.z+.16-ve.progress*.34),ve.progress>=1&&(r.progress(0),t.oneShot("fabric",{object:hr,volume:.7,rate:1.2}),ve.anim={from:Le.position.clone(),to:Qt.localToWorld(new b(0,.02+ve.pieces*.024,0)),t:-.3,dur:.6},ve.pushing=!1,Sn("folding"));break;case"folding":{let Be=ve.anim;Be.t+=D/Be.dur;let ot=St(Ft(Be.t,0,1));if(Yr.set(ds+.02,ss+.15,rs+.42),Ch(Le.position,Be.from,Yr,Be.to,ot),Le.scale.set(1,1,1-.3*ot),Be.t>=1){Le.visible=!1;let xt=un(new Ct(.32,.024,.2),new tt({map:Le.material.map,roughness:.95}),0,.012+ve.pieces*.024,0,Qt);xt.rotation.y=(Math.random()-.5)*.2,ve.pieces++,ve.pieces===2?($f("school"),Sn("pick")):ve.pieces===3?($f("window"),Sn("pick")):ve.pieces>=wm?(Sn("shiftEnd"),t.oneShot("shiftBell",{volume:.55})):Sn("pick")}break}case"shiftEnd":ve.factoryWork=Math.max(0,1-ve.t/2.5),ve.t>.6&&ve.t-D<=.6&&ur("Finally.",2.5),ve.t>2.8&&(ve.standZ0=s.dolly.position.z,Sn("standing"));break;case"standing":{let Be=St(Math.min(1,ve.t/1.6)),ot=s.xr?ve.standZ0:ni.z;s.eye=st(1.3,1.52,Be),s.dolly.position.z=st(ot,ot+.6,Be),ve.t>1.7&&(s.canMove=!0,Sn("toBag"),qr("W A S D to walk \xB7 hold Shift to run \xB7 find your bag (look for the glow)",7));break}case"taking":ve.t>.36&&(l.take(),t.oneShot("fabric",{volume:.6,rate:.8}),Sn("toWages"),qr("Take it to the supervisor at his counter",5));break;case"paying":ve.t>1.9&&ve.coinsIn+Fs.length<3&&ve.t>1.9+(ve.coinsIn+Fs.length)*.75&&lg(),l.forceOpen=1,ve.coinsIn>=3&&ve.t>4.9&&(W.userData.reach=!1,l.forceOpen=0,setTimeout(()=>{W.userData.stand=!1},1600),Sn("toDoor"),ur("Three coins. A whole day.",4.5),ve.qHintAt=4);break;case"opening":{let Be=St(Math.min(1,ve.t/1.4));sn.rotation.y=-Be*1.6,lr.intensity=Be*14,oi.street&&oi.street.setVolume(.03+Be*.25),ve.t>1&&!sa&&(sa=!0,i.refreshColliders(),s.bounds={minX:Je.minX+.3,maxX:Je.maxX+4,minZ:Je.minZ+.3,maxZ:Je.maxZ-.3}),ve.t>1.5&&(Sn("outside"),ur("Something to eat first.",3.5));break}case"toDoor":ve.qHintAt&&ve.t>ve.qHintAt&&(ve.qHintAt=0,qr("Hold Q to look inside your bag \xB7 then go home",6));break;case"outside":oi.room&&oi.room.setVolume(Math.max(0,.05-ve.t*.015)),g.x>Je.maxX+.6&&!ve.ended&&(ve.ended=!0,o.set(null),Sn("done"),Ph&&Ph("street"));break}for(let Be=Fs.length-1;Be>=0;Be--){let ot=Fs[Be];ot.t+=D/ot.dur;let xt=l.worldMouth(d);ot.mesh.position.lerpVectors(ot.from,xt,St(Math.min(1,ot.t))),ot.mesh.position.y+=Math.sin(Math.min(1,ot.t)*Math.PI)*.25,ot.mesh.rotation.x+=D*14,ot.t>=1&&(h.remove(ot.mesh),Fs.splice(Be,1),ve.coinsIn++,l.setCoins(ve.coinsIn),t.oneShot("coin",{volume:.9,rate:.95+Math.random()*.1}))}if(["toBag","toWages","paying","toDoor"].includes(ve.phase)){let Be=g.x-W.position.x,ot=g.z-W.position.z;W.userData.look=Ft(u(Math.atan2(Be,ot)-W.rotation.y),-.9,.9),W.userData.lookPitch=.25}else W.userData.look=.4*Math.sin($*.2),W.userData.lookPitch=.3;let ks={pick:ln.localToWorld(f.set(0,.25,0)).clone(),toBag:Zt.clone(),toWages:new b(ze.x,1.1,ze.z-ze.d/2),toDoor:new b(Je.maxX-.1,1.1,(gt.z0+gt.z1)/2),outside:new b(Je.maxX+2,.5,(gt.z0+gt.z1)/2)};o.set(ks[ve.phase]||null)}let Bs=[new b,new b],fl=new b(ni.x+.02,ss+.035,rs+.36);function Zr(D,$,Ee,nt="relax",Ze=.13){let en=Ee==="table";Bs[D].set($.x+(D?Ze:-Ze)*(en?1.25:1),$.y+(en?.025:.04),$.z+.07),a.set(D,{key:Ee,mode:"world",pos:Bs[D],rot:en?pi.rest(D?1:-1):pi.table(D?1:-1),pose:nt,blend:.28})}function dg(D){let $=ve.phase;if(["intro","pick","placing","push","folding","dream","shiftEnd"].includes($)){let nt=ve.pushing?Math.sin(D*22)*.003:0;$==="push"?(Zr(0,d.copy(Le.position).add(f.set(-.08,nt,.06)),"sew","flat",.13),Zr(1,d.copy(Le.position).add(f.set(.05,-nt,.08)),"sew","flat",.13)):$==="placing"?(Bs[0].copy(Le.position).add(f.set(-.1,.03,.06)),a.set(0,{key:"carry",mode:"world",pos:Bs[0],rot:pi.reach(-1,.3,-.55),pose:"pinch",blend:.33}),Zr(1,fl,"table")):$==="folding"?(Bs[1].copy(Le.position).add(f.set(.1,.03,.06)),a.set(1,{key:"fold",mode:"world",pos:Bs[1],rot:pi.reach(1,-.2,-.55),pose:"pinch",blend:.18}),Zr(0,fl,"table")):$==="shiftEnd"&&ve.t>1.8?a.hide():(s.camera.getWorldDirection(f),f.z<-.55&&f.y<.15?(Zr(0,fl,"table"),Zr(1,fl,"table")):a.hide());return}if($==="opening"&&ve.t<1.1){Bs[0].copy(rg),sn.updateWorldMatrix(!0,!1),a.set(0,{key:"door",mode:"world",pos:Bs[0].set(Je.maxX-.08-Math.sin(sn.rotation.y*-1)*.9,1.15,gt.z0+Math.cos(-sn.rotation.y)*(gt.z1-gt.z0-.3)),rot:pi.push(-1,-Math.PI/2),pose:"flat",blend:.3});return}if($==="opening"||$==="outside"){l.open||a.hide(0);return}!l.held&&$!=="taking"&&a.hide(1),!l.held&&$!=="taking"&&a.hide(0)}function $f(D){ve.dream=D,ve.dreamT=0,t.oneShot("schoolBell",{object:D==="school"?hr:Ce,volume:D==="school"?.45:.6}),ur(D==="school"?"I used to know all my letters.":"They're learning to read right now.",4.5)}function fg(){let D={pick:"Click the fabric on your left",push:"Hold the mouse button on the machine",toBag:"Your bag hangs by the door \u2014 look for the glow",toWages:"Click the supervisor at his desk",toDoor:"Click the door to go outside",outside:"Walk out into the street"}[ve.phase];D&&qr(D,5)}function pg(D,$){let Ee=.5-.5*Math.cos($*Math.PI*2/70),nt=st(-6,3,Ee);D.position.set(nt,1.25+.03*Math.sin($*.5),2.9),D.lookAt(nt-1.2+2.4*Ee,1.15,-1.5+.8*Math.sin($*.09))}function mg(D){We.visible=!0,fn.setDrawRange(0,D==="low"?320:D==="medium"?600:Wt),Mt.visible=!0,$e.uniforms.uSteps.value=D==="high"?40:D==="medium"?34:28,Xe.shadow.mapSize.setScalar(D==="high"?2048:D==="medium"?1536:1024),Xe.shadow.map&&(Xe.shadow.map.dispose(),Xe.shadow.map=null)}let Ph=null,gg={minX:Je.maxX-.4,maxX:Je.maxX+1,minZ:gt.z0,maxZ:gt.z1};return{root:h,update:ug,start:og,stop:ag,reset:Zf,cine:pg,setQuality:mg,name:"sweatshop",sun:Xe,zone:{minX:-100},atmosphere(){return{fog:new xe(1906450),density:.067,sun:0,hemi:.22,hemiSky:new xe(9073752),hemiGround:new xe(1709071),sky:.7,skyTint:new xe(1,.6,.4),exposure:1}},onEnd(D){Ph=D},get phase(){return ve.phase},getColliders(){return sa?rt:[...rt,gg]},skip(){let D=ve.phase;["intro","dream","shiftEnd","standing","paying","opening","placing","folding"].includes(D)?(ve.anim&&(ve.anim.t=1),ve.t=99):D==="toDoor"?(s.place(Je.maxX-1.2,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),hl()):D==="pick"?Xf():D==="push"?ve.progress=1:D==="toBag"?(s.place(Zt.x-1,Zt.z,-Math.PI/2,1.52),qf()):D==="taking"?ve.t=99:D==="toWages"?(s.place(ze.x,ze.z-1.15,Math.PI,1.52),Yf()):D==="toDoor"?(s.place(Je.maxX-1.2,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),hl()):D==="outside"&&s.place(Je.maxX+1,(gt.z0+gt.z1)/2,-Math.PI/2,1.52)},setPushing(D){ve.pushing=D},debugDoor(){this.debugStand(),l.take(),ve.coinsIn=3,l.setCoins(3),s.place(Je.maxX-1.2,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),Sn("toDoor"),hl()},sceneOutside(){this.debugStand(),l.take(),l.takeK=1,ve.coinsIn=3,l.setCoins(3),sn.rotation.y=-1.6,sa=!0,xi.visible=!0,i.refreshColliders(),s.bounds=null,s.place(Je.maxX+1,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),a.hide(0),Sn("outside")},debugStand(){ve.pieces=wm,ve.factoryWork=0,Le.visible=!1,ve.anim=null,s.eye=1.52,s.dolly.position.z=ni.z+.6,s.canMove=!0,Sn("toBag")},get S(){return ve}}}var Tt=(()=>{let i=12345;return()=>(i=i*16807%2147483647,(i-1)/2147483646)})(),vt=Tt;function fs(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function gs(i,e=[1,1],t=!0){let n=new tn(i);return t&&(n.colorSpace=Lt),n.wrapS=n.wrapT=Ln,n.repeat.set(e[0],e[1]),n.anisotropy=4,n}function Ef(i,e,t,n,s,r=2,o=.5){for(let a=0;a<n;a++)i.fillStyle=s[Tt()*s.length|0],i.globalAlpha=Tt()*o,i.beginPath(),i.arc(Tt()*e,Tt()*t,Tt()*r,0,7),i.fill();i.globalAlpha=1}function ps(i,e,t,n,s,r,o){for(let a=0;a<n;a++){let l=Tt()*e,c=Tt()*t,u=r+Tt()*(o-r),h=i.createRadialGradient(l,c,0,l,c,u);h.addColorStop(0,s),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(l-u,c-u,u*2,u*2)}}var bf=new Map,ms=(i,e)=>(bf.has(i)||bf.set(i,e()),bf.get(i)),Bt={dot:()=>ms("dot",()=>{let[i,e]=fs(32),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),gs(i)}),dirt:()=>ms("dirt",()=>{let[i,e]=fs(512);e.fillStyle="#7a6a54",e.fillRect(0,0,512,512),ps(e,512,512,30,"rgba(60,46,32,.28)",30,120),ps(e,512,512,14,"rgba(160,140,110,.22)",20,80),Ef(e,512,512,5e3,["#4a3e30","#9a8a70","#5a4c3c"],1.8,.45);for(let t=0;t<14;t++){e.strokeStyle=["#b8402e","#d9a21b","#2f4a8a","#e8e0d0"][t%4],e.globalAlpha=.55,e.lineWidth=1.2,e.beginPath();let n=Tt()*512,s=Tt()*512;e.moveTo(n,s);for(let r=0;r<4;r++)n+=(Tt()-.5)*30,s+=(Tt()-.5)*30,e.lineTo(n,s);e.stroke()}return e.globalAlpha=1,gs(i)}),plywood:()=>ms("ply",()=>{let[i,e]=fs(256);e.fillStyle="#7a6040",e.fillRect(0,0,256,256);for(let t=0;t<256;t+=3)e.fillStyle=`rgba(${Tt()<.5?"60,40,20":"190,160,120"},${Tt()*.22})`,e.fillRect(0,t+Math.sin(t*.1)*3,256,2);return ps(e,256,256,8,"rgba(30,20,10,.3)",10,50),gs(i)}),tin:()=>ms("tin",()=>{let[i,e]=fs(256);for(let t=0;t<256;t+=16){let n=e.createLinearGradient(t,0,t+16,0);n.addColorStop(0,"#5a5c58"),n.addColorStop(.5,"#9a9c94"),n.addColorStop(1,"#5a5c58"),e.fillStyle=n,e.fillRect(t,0,16,256)}return ps(e,256,256,22,"rgba(130,64,26,.5)",8,46),gs(i)}),slab:()=>ms("slab",()=>{let[i,e]=fs(256);return e.fillStyle="#5a564e",e.fillRect(0,0,256,256),ps(e,256,256,16,"rgba(25,20,16,.4)",15,70),Ef(e,256,256,1200,["#2a2620","#8a8278"],1.4),gs(i)}),cardboard:()=>ms("card",()=>{let[i,e]=fs(128);return e.fillStyle="#9f8360",e.fillRect(0,0,128,128),e.fillStyle="rgba(60,40,20,.5)",e.fillRect(0,60,128,6),ps(e,128,128,6,"rgba(40,25,10,.3)",6,30),gs(i)}),stripes:(i,e,t=8)=>ms("st"+i+e+t,()=>{let[n,s]=fs(256);for(let r=0;r<t;r++)s.fillStyle=r%2?i:e,s.fillRect(r*256/t,0,256/t,256);return ps(s,256,256,8,"rgba(0,0,0,.18)",10,50),gs(n)}),sign:(i,e,t)=>ms("sg"+i,()=>{let[n,s]=fs(512,128);return s.fillStyle=e,s.fillRect(0,0,512,128),ps(s,512,128,6,"rgba(0,0,0,.2)",10,50),s.fillStyle=t,s.font="bold 54px Georgia, serif",s.textAlign="center",s.fillText(i,256,84),gs(n)}),price:()=>ms("price",()=>{let[i,e]=fs(512,256);return e.fillStyle="#ecdcac",e.fillRect(0,0,512,256),ps(e,512,256,6,"rgba(90,60,20,.22)",20,80),e.fillStyle="#8a1a14",e.font="bold 60px Georgia, serif",e.textAlign="center",e.fillText("ROTI \xB7 SABZI",256,88),e.fillStyle="#1a1612",e.font="bold 92px Georgia, serif",e.fillText("Rs 10",256,202),e.strokeStyle="#5a3a1a",e.lineWidth=10,e.strokeRect(5,5,502,246),gs(i)}),facade:(i,e=!1)=>ms("fa"+i+e,()=>{let[t,n]=fs(512);n.fillStyle=i,n.fillRect(0,0,512,512);for(let r=0;r<3;r++){let o=Tt()*512,a=Tt()*512,l=18+Tt()*40;n.fillStyle="#8a5a44",n.beginPath();for(let c=0;c<=14;c++){let u=c/14*Math.PI*2,h=l*(.55+Tt()*.5);n.lineTo(o+Math.cos(u)*h*1.4,a+Math.sin(u)*h)}n.fill(),n.strokeStyle="rgba(60,36,26,.6)",n.lineWidth=2;for(let c=a-l;c<a+l;c+=10)n.beginPath(),n.moveTo(o-l,c),n.lineTo(o+l,c),n.stroke()}ps(n,512,512,14,"rgba(40,30,20,.22)",30,120),n.globalAlpha=.18;for(let r=0;r<12;r++)n.fillStyle="#2a2018",n.fillRect(Tt()*512,Tt()*260,2+Tt()*3,60+Tt()*200);n.globalAlpha=1;let s=["#3a6a7a","#7a3a2a","#4a6a3a","#6a5a3a","#2a4a6a"];for(let r of[64,320])for(let o of[62,312]){let a=e?Tt()<.3:Tt()<.08;n.fillStyle="rgba(0,0,0,.25)",n.fillRect(o-6,r-6,132,154),n.fillStyle=a?e?"#f0a850":"#c8a070":"#17120e",n.fillRect(o,r,120,140),n.strokeStyle="#201a14",n.lineWidth=4;for(let l=1;l<5;l++)n.beginPath(),n.moveTo(o+l*24,r),n.lineTo(o+l*24,r+140),n.stroke();Tt()<.45&&(n.fillStyle=s[Tt()*s.length|0],n.fillRect(o-26,r,24,140),n.fillRect(o+122,r,24,140)),n.fillStyle="rgba(220,210,190,.55)",n.fillRect(o-8,r+140,136,8)}return Ef(n,512,512,1600,["#2a2018","#efe2c8"],1.2,.35),t})},wf=new Map;function Sf(i,e,t,n=!1,s=0){let r=[i,e,t,n,s].join("|");if(!wf.has(r)){let o=gs(Bt.facade(i,n),[e,t]);wf.set(r,new tt({map:o,roughness:.95,flatShading:!0,emissive:s,emissiveMap:s?o:null}))}return wf.get(r)}var zn=(i,e={})=>new tt({map:i,roughness:.92,...e}),Cm=[["KIRANA STORE","#e8c84a","#6a1a10"],["MOBILE REPAIR","#2a6aaa","#ffffff"],["MEDICAL","#2a8a4a","#ffffff"],["SWEETS","#c8402e","#fff2c8"],["PAN SHOP","#f2f2ea","#2a5a3a"],["HARDWARE","#4a4a52","#f2d84a"],["TAILORING","#7a3a6a","#fff2c8"],["CHAI","#d8a030","#3a1a0a"]],dh=null;function Pm(){return dh||(dh={roof:zn(Bt.slab()),shutter:zn(Bt.tin(),{metalness:.35}),signs:Cm.map(([i,e,t])=>zn(Bt.sign(i,e,t))),awnings:[[2906778,15259824],[9058858,15259824],[11044394,5913114],[3832410,15259824]].map(([i,e])=>zn(Bt.stripes("#"+i.toString(16).padStart(6,"0"),"#"+e.toString(16).padStart(6,"0"),10),{side:At,roughness:1})),ledge:Ne(10129020,{roughness:.95,flatShading:!0}),rail:Ne(2763304,{metalness:.4,roughness:.6}),ac:Ne(13157560,{roughness:.55}),tank:Ne(2763306,{roughness:.6}),pipe:Ne(5919304,{roughness:.8})},dh)}function Is(i,e,t,n,s,{colours:r,hMin:o=6,hMax:a=11,night:l=!1,glow:c=0,list:u=null,face:h=null,detail:d=!0,cloths:f=null,batch:g=null,period:v=0}){let m=t-e>=s-n,p=m?t-e:s-n,_=Pm(),x=0,M=Math.floor(Tt()*10),T=[.15,.8,.45,1].map(R=>o+R*(a-o)),P=0;for(;x<p-.01;){let R=v?Math.min(p-x,v/4):Math.min(p-x,2.6+Tt()*2.6);p-x-R<(v?1.6:2.4)&&(R=p-x);let U=v?T[P%4]:o+Tt()*(a-o);v&&(M=P%4),P++;let Y=m?e+x:e,y=m?e+x+R:t,A=m?n:n+x,q=m?s:n+x+R,J=y-Y,K=q-A,pe=Math.max(1,Math.round(Math.max(J,K)/4)),j=Math.max(1,Math.round(U/4)),he=Sf(r[M++%r.length],pe,j,l,c),re=new Ct(J,U,K);re.translate(0,U/2,0);let ye=new De(re,[he,he,_.roof,_.roof,he,he]);ye.position.set((Y+y)/2,0,(A+q)/2),ye.castShadow=!0,ye.receiveShadow=!0,ye.userData.h=U,i.add(ye),u&&u.push(ye);let Ie=new an;if(Ie.add(te.box(J,.45,.14),_.ledge,0,U+.22,K/2-.07),Ie.add(te.box(J,.45,.14),_.ledge,0,U+.22,-K/2+.07),Ie.add(te.box(.14,.45,K),_.ledge,J/2-.07,U+.22,0),Ie.add(te.box(.14,.45,K),_.ledge,-J/2+.07,U+.22,0),Tt()<.5&&Ie.add(te.cyl(.5,.5,.9,10),_.tank,(Tt()-.5)*J*.5,U+.45,(Tt()-.5)*K*.5),d&&h){let Te={"+x":[1,0],"-x":[-1,0],"+z":[0,1],"-z":[0,-1]}[h],Ve=Te[0]?Te[0]*J/2:0,lt=Te[1]?Te[1]*K/2:0,le=Te[0]?K:J,Me=(Ue,Pe,Fe)=>[Ve+Te[0]*Fe+(Te[0]?0:Ue),Pe,lt+Te[1]*Fe+(Te[0]?Ue:0)],_e=(Ue,Pe,Fe,Ke,B,C,Q,G=0)=>{let[se,ce,ue]=Me(B,C,Q);Ie.add(te.box(Te[0]?Fe:Ue,Pe,Te[0]?Ue:Fe),Ke,se,ce,ue,Te[0]?0:G*Te[1],0,Te[0]?-G*Te[0]:0)};for(let Ue=3.1;Ue<U-1;Ue+=2.6)_e(le,.12,.24,_.ledge,0,Ue,.12);for(let Ue=3.6;Ue<U-1.5;Ue+=2.6){if(Tt()<.5){let Pe=(Tt()-.5)*(le-1.6);_e(1.4,.1,.7,_.ledge,Pe,Ue-.4,.35);for(let Fe=0;Fe<=6;Fe++)_e(.025,.8,.025,_.rail,Pe-.7+Fe*.233,Ue,.68);_e(1.4,.04,.04,_.rail,Pe,Ue+.4,.68),f&&Tt()<.6&&f.push({at:new b(...Me(Pe+.3,Ue+.25,.55)).add(ye.position),rotY:Te[0]?Math.PI/2:0})}Tt()<.4&&_e(.6,.42,.45,_.ac,(Tt()-.5)*(le-1),Ue+.6,.24)}Tt()<.5&&_e(.08,U-.5,.08,_.pipe,(Tt()-.5)*le*.9,U/2,.06);let Ae=Tt()*Cm.length|0;_e(Math.min(2.2,le-.5),2.2,.06,_.shutter,0,1.1,.04),_e(Math.min(2.4,le-.3),.55,.08,_.signs[Ae],0,2.62,.08),Tt()<.55&&_e(Math.min(2.6,le-.2),.03,1.1,_.awnings[Tt()*4|0],0,2.25,.55,-.25)}if(g){let Te=new pt().makeTranslation(ye.position.x,0,ye.position.z);for(let[Ve,lt]of Ie.groups)g.groups.has(Ve)||g.groups.set(Ve,[]),lt.forEach(le=>{le.applyMatrix4(Te),g.groups.get(Ve).push(le)});Ie.groups.clear()}else Ie.build(ye,{cast:!0,receive:!0});x+=R}return{minX:e,maxX:t,minZ:n,maxZ:s}}function fh(i,e,t,n,{w:s=2.4,d:r=1.1,tarp:o=0}={}){let a=new it;a.position.set(e,0,t),a.rotation.y=n,i.add(a);let l=Pm(),c=zn(Bt.plywood()),u=new an;u.add(te.box(s,.9,r),c,0,.45,0),u.add(An(s+.1,r+.1,.05,.02),Ne(9071178,{roughness:.9}),0,.9,0),[[-s/2,-r/2-.8,2.7],[s/2,-r/2-.8,2.7],[-s/2,r/2,2.4],[s/2,r/2,2.4]].forEach(([d,f,g])=>u.add(te.box(.06,g,.06),Ne(3811866),d,g/2,f)),u.build(a);let h=new De(new mt(s+.6,r+1.5,4,3),l.awnings[o%l.awnings.length]);{let d=h.geometry.attributes.position;for(let f=0;f<d.count;f++){let g=d.getX(f)/((s+.6)/2),v=d.getY(f)/((r+1.5)/2);d.setZ(f,-.08*(1-g*g)*(1-v*v))}h.geometry.computeVertexNormals()}return h.rotation.x=-Math.PI/2+.2,h.position.set(0,2.55,-.35),h.castShadow=!0,h.receiveShadow=!0,a.add(h),a}function jo(i,e,t=Ne(1118481,{roughness:.6})){let n=new an;return e.forEach(([s,r,o,a])=>n.add(Xo(s,r,o,a||.012),t)),n.build(i,{cast:!1,receive:!1})}function $a(i,e,t,n,s=4){let r=[],o=new mt(.42,.6,2,2);o.translate(0,-.3,0);for(let a=0;a<s;a++){let l=(a+.5)/s,c=e.clone().lerp(t,l);c.y-=.25*Math.sin(l*Math.PI);let u=new it;u.position.copy(c),u.rotation.y=Math.atan2(t.x-e.x,t.z-e.z)+Math.PI/2,i.add(u);let h=new De(o,n[a%n.length]);h.castShadow=!0,u.add(h),r.push(u)}return r}var Im=0,EE={x0:8,x1:22,z0:2.4,z1:5.4,bx1:19.3},ja={x0:22,x1:40,z0:-4,z1:12,exitZ0:7,exitZ1:9.6},Li={x:36.6,z:11.2};function Dm(i){let e=[new b(-.068,-.25,-.33),new b(.068,-.25,-.33)],t=[new b(-.12,-.42,-.3),new b(.12,-.42,-.3)],n=[-1,1].map(I=>new Vt(-.6,-I*.25,I*(Math.PI-.9),"YXZ")),s=[-1,1].map(I=>{let z=new b(0,Math.sin(.22),-Math.cos(.22)),H=new b(-I*.36,.93,0);H.addScaledVector(z,-H.dot(z)).normalize();let ge=z.clone().negate(),W=H.clone().negate(),oe=new b().crossVectors(W,ge);return new Vt().setFromRotationMatrix(new pt().makeBasis(oe,W,ge),"YXZ")}),{scene:r,audio:o,interactor:a,player:l,ui:c,thread:u,hands:h,bagCtl:d,lights:f,police:g,pursuit:v,camera:m}=i,p=new it;p.name="street",r.add(p);let _=[],x=new an,M=[0,1,2,3,4,5].map(I=>new tt({map:mi(["buti","stripe","check","paisley","border","buti"][I],I,128),side:At,roughness:.95})),T=(I,z)=>{let H=Bt.dirt().clone();return H.needsUpdate=!0,H.repeat.set(I,z),new tt({map:H,roughness:1})},P=[],R=EE,U=R.x1-R.x0,Y=(R.z0+R.z1)/2,y=new De(new mt(U,R.z1-R.z0+.4),T(U/3,1.2));y.rotation.x=-Math.PI/2,y.position.set(R.x0+U/2,0,Y),y.receiveShadow=!0,p.add(y),x.add(te.box(U,.02,.28),Ne(3813414,{roughness:.35}),R.x0+U/2,.006,R.z1-.22),x.add(te.box(U,.06,.06),Ne(6971992,{roughness:.9}),R.x0+U/2,.03,R.z1-.38);let A=new tt({map:(()=>{let I=new tn(Bt.facade("#8a8476"));return I.colorSpace=Lt,I.wrapS=I.wrapT=Ln,I.repeat.set(1,2),I})(),roughness:.95,flatShading:!0}),q=(I,z,H,ge)=>{let W=new De(new mt(z-I,ge-H),A);W.position.set(R.x0+.02,(H+ge)/2,(I+z)/2),W.rotation.y=Math.PI/2,W.receiveShadow=!0,p.add(W)};q(R.z0-.1,3.2,0,8),q(4.6,R.z1+.1,0,8),q(3.2,4.6,2.6,8);let J=["#b9a27f","#8fa3a0","#c29a8e","#a9a17a","#9aa0b4","#b48c6a","#a6b08e"];_.push(Is(p,R.x0+.05,R.bx1,R.z0-4,R.z0,{colours:J,hMin:6,hMax:10,face:"+z",batch:x,cloths:P})),_.push(Is(p,R.x0+.05,R.bx1,R.z1,R.z1+4,{colours:J,hMin:6,hMax:10,face:"-z",batch:x,cloths:P}));let K=[];for(let I=0;I<24;I++){let z=R.x0+1+vt()*(U-2),H=3.8+vt()*3;K.push([new b(z,H,R.z0),new b(z+(vt()-.5)*4,H+(vt()-.5),R.z1),.2+vt()*.5,.012])}for(let I=0;I<6;I++){let z=R.z0+.25+vt()*(R.z1-R.z0-.5),H=4+vt()*2;K.push([new b(R.x0+.2,H,z),new b(R.x0+6+vt()*8,H,z),.5,.01])}jo(p,K);let pe=[[10.2,3.3],[14.6,3.6],[17.8,3.2]].flatMap(([I,z])=>$a(p,new b(I,z,R.z0+.1),new b(I+.5,z,R.z1-.1),M,4));{let I=new it;I.position.set(11.6,0,R.z1-.22),I.rotation.z=.1,p.add(I);let z=Ne(2763306,{metalness:.6,roughness:.45}),H=new an;[-.5,.5].forEach(oe=>{H.add(new Ii(.33,.02,6,22),z,oe,.35,0),H.add(new Ii(.31,.008,4,12),Ne(1118481),oe,.35,0)});let ge=(oe,Ge)=>{let at=Ge.clone().sub(oe),dt=new bn().setFromUnitVectors(new b(0,1,0),at.clone().normalize()),Qe=new Vt().setFromQuaternion(dt),Pt=oe.clone().add(Ge).multiplyScalar(.5);H.add(te.cyl(.015,.015,at.length(),5),z,Pt.x,Pt.y,Pt.z,Qe.x,Qe.y,Qe.z)},W=(oe,Ge)=>new b(oe,Ge,0);ge(W(-.5,.35),W(0,.35)),ge(W(0,.35),W(.35,.8)),ge(W(-.5,.35),W(-.15,.8)),ge(W(-.15,.8),W(.35,.8)),ge(W(0,.35),W(-.15,.8)),ge(W(.5,.35),W(.38,.95)),H.add(te.box(.04,.02,.45),z,.4,.97,0),H.add(An(.18,.08,.04,.02),Ne(3810328),-.17,.83,0),H.build(I),_.push({minX:10.9,maxX:12.3,minZ:R.z1-.5,maxZ:R.z1})}let j=new Ei([[.001,0],[.26,.02],[.3,.2],[.28,.45],[.18,.62],[.07,.68],[.001,.7]].map(([I,z])=>new we(I,z)),8),he=Ne(11575424,{flatShading:!0,roughness:1});[[9,R.z0+.35,1],[9.5,R.z0+.3,.8],[15.2,R.z1-.35,.9]].forEach(([I,z,H])=>x.add(j,he,I,0,z,.05,vt()*6,0,H,H*(.9+vt()*.2),H)),x.add(te.cyl(.18,.14,.32,12),Ne(2779802,{roughness:.5}),13.4,.16,R.z0+.3),x.add(te.cyl(.04,.05,.9,8),Ne(3820098,{metalness:.5,roughness:.5}),13.9,.45,R.z0+.2),x.add(te.box(.35,.06,.06),Ne(3820098,{metalness:.5}),13.9,.92,R.z0+.3,0,0,-.3),x.add(te.box(.5,.35,.4),zn(Bt.cardboard()),14.6,.18,R.z0+.32),x.add(te.box(.4,.3,.35),zn(Bt.cardboard()),14.65,.5,R.z0+.3,0,.3,0),_.push({minX:8.6,maxX:10,minZ:R.z0,maxZ:R.z0+.75},{minX:13.1,maxX:15,minZ:R.z0,maxZ:R.z0+.6}),x.add(te.cyl(.004,.004,.4,4),Ne(1118481),12.4,3.1,R.z0+.3);let re=new De(new nn(.05,10,8),new yt({color:new xe(1,.8,.5).multiplyScalar(3)}));re.position.set(12.4,2.88,R.z0+.3),p.add(re),f.add({pos:new b(12.4,2.75,R.z0+.5),color:16756838,intensity:4,distance:6,space:"street"});let{x0:ye,x1:Ie,z0:Te,z1:Ve}=ja,lt=(ye+Ie)/2,le=(Te+Ve)/2,Me=new De(new mt(Ie-ye+.2,Ve-Te+.2),T(6,5));Me.rotation.x=-Math.PI/2,Me.position.set(lt,0,le),Me.receiveShadow=!0,p.add(Me),Me.material=Me.material.clone(),Object.assign(Me.material,{polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:4});let _e=["#c9b48a","#b8a0a0","#a8b8a8","#c8a878","#b0a8c0","#c0906a","#d0c098","#9ab0b8"];_.push(Is(p,R.bx1,ye,-8,R.z0,{colours:_e,face:"+x",batch:x,cloths:P}),Is(p,R.bx1,ye,R.z1,16,{colours:_e,face:"+x",batch:x,cloths:P}),Is(p,ye,Ie,Ve,16,{colours:_e,face:"-z",batch:x,cloths:P}),Is(p,ye,Ie,-8,Te,{colours:_e,face:"+z",batch:x,cloths:P}));let Ae=[];for(let I=0;I<16;I++){let z=ye+vt()*(Ie-ye);Ae.push([new b(z,5+vt()*2,Te),new b(z+(vt()-.5)*8,5+vt()*2,Ve),.6+vt(),.014])}jo(p,Ae);{let I=new Xt().setAttribute("position",new Rt([-.12,0,0,.12,0,0,0,-.28,0],3));I.computeVertexNormals();let z=new an,H=[14262826,11879470,3107663,15327695,2906778,12868218];[[[23,4.2,-1],[39,4.6,6]],[[24,4.4,11.5],[38.5,4,2]]].forEach(([ge,W])=>{let oe=new b(...ge),Ge=new b(...W);Ae.length=0,jo(p,[[oe,Ge,.8,.006]]);for(let at=1;at<26;at++){let dt=at/26,Qe=oe.clone().lerp(Ge,dt);Qe.y-=.8*4*dt*(1-dt),z.add(I,Ne(H[at%6],{side:At,roughness:1}),Qe.x,Qe.y,Qe.z,0,Math.atan2(Ge.x-oe.x,Ge.z-oe.z)+Math.PI/2,0)}}),z.build(p,{cast:!0,receive:!1})}let Ue=fh(p,31,-2.3,0,{tarp:1});_.push({minX:29.7,maxX:32.3,minZ:-3.6,maxZ:-1.75});let Pe=new an;Pe.add(te.cyl(.3,.24,.32,16),Ne(6974056,{metalness:.6,roughness:.4}),.6,1.1,-.15),Pe.add(te.cyl(.32,.32,.03,16),Ne(4868680,{metalness:.6,roughness:.4}),.6,.94,-.15),Pe.add(te.cyl(.35,.3,.05,14),Ne(2761760,{metalness:.4}),-.5,.95,-.15);for(let I=0;I<10;I++)Pe.add(te.cyl(.12,.12,.012,14),Ne(14198888,{roughness:.9}),-.55+(vt()-.5)*.02,.96+I*.013,.22);for(let I=0;I<6;I++)Pe.add(new Tc(.06),Ne(13144106,{flatShading:!0}),-.05+I%3*.12,.97,.25+Math.floor(I/3)*.1,vt(),vt(),vt());for(let I=0;I<4;I++)Pe.add(te.cyl(.07,.05,.05,10),Ne(12632252,{metalness:.85,roughness:.25}),.2+I*.15,.95,.35);Pe.build(Ue);let Fe=new De(new mt(.9,.45),zn(Bt.price()));Fe.position.set(0,2.03,1),Fe.rotation.x=-.08,Ue.add(Fe),[-.38,.38].forEach(I=>{let z=new De(te.cyl(.004,.004,.1,4),Ne(2760728));z.position.set(I,2.3,.98),Ue.add(z)});let Ke=new it;Ke.position.set(.05,.94,.35),Ue.add(Ke);let B=new tt({color:14200944,roughness:.8,emissive:16751152,emissiveIntensity:0}),C=new De(An(.24,.18,.1,.03,.01),B);C.castShadow=!0,Ke.add(C);let Q=new Gn({map:Bt.dot(),color:16777215,transparent:!0,opacity:.12,depthWrite:!1}),G=Array.from({length:6},(I,z)=>{let H=new Nn(Q.clone());return H.position.set(.6,1.3+z*.15,-.15),H.scale.setScalar(.3),Ue.add(H),H});f.add({pos:new b(31,2.2,-2),color:16756838,intensity:3,distance:6,space:"street"}),x.add(te.cyl(.004,.004,.3,4),Ne(1118481),31,2.42,-2);let se=new De(new nn(.05,10,8),re.material);se.position.set(31,2.27,-2),p.add(se);let ce=Mn({top:14735560,bottom:5917242,skin:7030320,outfit:"kurta",cap:!0,mustache:!0,seed:201,scale:1.3});ce.position.set(31,0,-3.25),p.add(ce);let ue=new b(31,1,-1.55),k=[0,1,2].map(()=>{let I=new De(new Ot(.022,.022,.006,14),Ne(13148224,{metalness:.9,roughness:.3}));return I.visible=!1,p.add(I),I}),w=fh(p,28,10.6,Math.PI,{tarp:2});_.push({minX:26.7,maxX:29.3,minZ:9.9,maxZ:12}),$a(w,new b(-1.1,2.1,-.75),new b(1.1,2.1,-.75),M,6).forEach(I=>P.push({piv:I}));{let I=new an,z=Ne(1118481,{roughness:.3,metalness:.35});I.add(te.box(.5,.05,.25),z,.5,.97,0),I.add(te.box(.4,.08,.1),z,.5,1.2,0),I.add(te.box(.08,.25,.12),z,.68,1.08,0);for(let H=0;H<5;H++)I.add(te.box(.36,.03,.28),M[H],-.5,.94+H*.03,.05,0,vt()*.3,0);I.build(w)}let E=Mn({top:9083560,bottom:3816e3,skin:8016438,outfit:"shirt",sleeves:"elbow",glasses:!0,seed:202,scale:1.3});E.position.set(28,0,11.45),E.rotation.y=Math.PI,p.add(E),fh(p,25.5,-2.6,0,{w:1.6,tarp:0}),_.push({minX:24.6,maxX:26.4,minZ:-3.7,maxZ:-2}),x.add(te.cyl(.12,.1,.22,12),Ne(9071162,{metalness:.6,roughness:.4}),25.2,1.03,-2.5);for(let I=0;I<6;I++)x.add(te.cyl(.025,.022,.07,8),Ne(14207144,{roughness:.3}),25.6+I%3*.08,.96,-2.3+Math.floor(I/3)*.08);f.add({pos:new b(25.5,2.25,-2.4),color:16756838,intensity:2.6,distance:5,space:"street"});let O=Mn({top:6969930,bottom:15327695,outfit:"kurta",skin:7225896,seed:203,scale:1.3});O.position.set(25.5,0,-3.3),p.add(O);{let I=new it;I.position.set(36.6,0,-2.6),I.rotation.y=.15,p.add(I);let z=new an;z.add(te.box(1.8,.1,.9),zn(Bt.plywood()),0,.8,0),[-.6,.6].forEach(H=>z.add(new Ii(.35,.045,6,18),Ne(2763306),H,.35,.48)),z.add(te.box(.05,.05,1.2),Ne(3811866),-1.2,.75,0,0,0,.3),z.add(te.box(.05,.05,1.2),Ne(3811866),-1.2,.75,0,0,0,.3);for(let H=0;H<30;H++)z.add(new wi(.07,0),Ne([15245344,6986282,14174752][H%3],{flatShading:!0}),-.75+H%10*.16,.92+Math.floor(H/10)*.06,-.3+Math.floor(H/10)*.22);z.build(I,{cast:!0}),_.push({minX:35.5,maxX:37.7,minZ:-3.35,maxZ:-1.85})}let ne=new De(new mt(2,1.4),M[2]);ne.rotation.x=-Math.PI/2,ne.position.set(29,.008,5.6),ne.receiveShadow=!0,p.add(ne);for(let I=0;I<16;I++)x.add(new wi(.07,0),Ne([11546666,4885034,14207136,8010378][I%4],{flatShading:!0}),28.25+I%8*.2,.06,5.3+Math.floor(I/8)*.5);let F=Mn({female:!0,top:8007482,bottom:10111546,scarf:14262826,skin:7030320,seed:204,scale:1.25});Wo(F),F.position.set(29,0,6.55),F.rotation.y=Math.PI,p.add(F);let fe=new it;fe.position.set(23.2,0,-3.3),p.add(fe);{let I=new an;for(let z=0;z<14;z++)I.add(te.box(.3+vt()*.3,.04,.25),M[z%6],(vt()-.5)*.9,.04+z*.03,(vt()-.5)*.5,vt()*.4,vt()*3,vt()*.4);I.add(j,he,.6,0,.2,0,1,0,.8,.8,.8),I.build(fe)}_.push({minX:22.4,maxX:24,minZ:-3.9,maxZ:-2.8});let Oe=new De(new Ct(.8,.02,.6),zn(Bt.cardboard()));Oe.position.set(Li.x,.012,Li.z),Oe.receiveShadow=!0,p.add(Oe);let be=[[Li.x-1.2,.2],[Li.x+1.15,-.3]].map(([I,z],H)=>{let ge=Mn({child:!0,female:H===1,top:H?6969962:5921354,bottom:3815994,skin:5913126,seed:210+H,scale:1.3});if(Wo(ge,{hug:H===0}),ge.position.set(I,0,Li.z+.05),ge.rotation.y=Math.PI+z,p.add(ge),H===1){let W=ge.userData.J;W.shL.rotation.set(-1.25,0,.2),W.shR.rotation.set(-1.25,0,-.2),W.elL.rotation.x=-.3,W.elR.rotation.x=-.3}return ge}),X=420,S=new Xt,ae=new Float32Array(X*3);for(let I=0;I<X;I++)ae[I*3]=st(R.x0+2,Ie,vt()),ae[I*3+1]=vt()*4,ae[I*3+2]=st(-2,10,vt());S.setAttribute("position",new on(ae,3));let Ce=new ls(S,new As({size:.045,map:Bt.dot(),transparent:!0,opacity:.6,color:16760171,blending:_n,depthWrite:!1}));Ce.frustumCulled=!1,p.add(Ce),P.filter(I=>I.at).forEach((I,z)=>{let H=new it;H.position.copy(I.at),H.rotation.y=I.rotY,p.add(H);let ge=new mt(.4,.6);ge.translate(0,-.3,0);let W=new De(ge,M[z%6]);W.castShadow=!0,H.add(W),I.piv=H});let Xe=[...pe,...P.map(I=>I.piv).filter(Boolean)];x.build(p,{cast:!0,receive:!0});let je=[[[23,4],[30,4],[37,6],[38.5,9],[30,8.8],[24,7]],[[24,1],[33,.6],[38,1.5],[38,5],[33,6.4],[25,5.8]],[[38,9.6],[33,9.5],[27,8.4],[23,8.6],[27,9.4],[33,10]]],ke=[];for(let I=0;I<15;I++){let z=cf(I),H=je[I%3].map(([W,oe])=>new b(W+(vt()-.5)*.8,0,oe+(vt()-.5)*.8));I%2&&H.reverse();let ge=I%H.length;z.position.copy(H[ge]),p.add(z),Object.assign(z.userData,{path:H,seg:(ge+1)%H.length,v:.95+vt()*.4,walk:1,lastStep:0}),ke.push(z)}[[38,-.4,2.5],[38.7,.3,-.6]].forEach(([I,z,H],ge)=>{let W=cf(ge+11);W.position.set(I,0,z),W.rotation.y=H,W.userData.walk=0,W.userData.idle=!0,p.add(W),ke.push(W)});let ie={phase:"idle",t:0,idle:0,beg:0,ended:!1},ct=a.add({object:Ue,label:"Buy food",enabled:()=>ie.phase==="toStall",onPress:()=>Se("counting"),maxDist:2.8}),Et=a.add({object:fe,label:"Pick up the scraps",enabled:()=>ie.phase==="toScraps",onPress:()=>Se("scrapping")}),V=a.add({object:E,label:"Sell the scraps",enabled:()=>ie.phase==="toTailor",onPress:()=>Se("refused"),maxDist:3.2}),Ye=a.add({object:Oe,label:"Sit down",enabled:()=>ie.phase==="toBeg",onPress:()=>Se("sitting"),maxDist:2.8}),me=a.add({object:Ke,label:"Take it",enabled:()=>ie.phase==="toSteal",onPress:()=>Se("stealing"),maxDist:2.8});[ct,Et,V,Ye,me].forEach(I=>{I.space="street"});let Re=[],qe={},$e=new Ut;$e.position.set(lt,2,le),p.add($e);let Mt=new Ut;Mt.position.set(31,1.4,-2.3),p.add(Mt);let Wt=new Ut;Wt.position.set(15,2,Y),p.add(Wt);function fn(){o.stopAll(Re),Re=[],qe={};let I=(z,H)=>(H&&(qe[z]=H,Re.push(H)),H);I("market",o.loop("market",{object:$e,volume:.45,ref:6})),I("street",o.loop("street",{object:Wt,volume:.15,ref:4})),I("fry",o.loop("fire",{object:Mt,volume:.04,ref:.6})),I("heart",o.loop("heartbeat",{volume:0}))}let ee=new b,N=new b,de=new b,We=(I,z=5)=>c.hint(I,z),He=(I,z)=>c.thought(I,z);function Se(I){ie.phase=I,ie.t=0,ie.idle=0,ie.enter=!0}let rt={toStall:ue,toScraps:new b(23.3,.5,-2.6),toTailor:new b(28,1.2,9.6),toBeg:new b(Li.x,.3,Li.z),toSteal:ue,flee:new b(Ie+1.5,1,(ja.exitZ0+ja.exitZ1)/2)};function Ht(){Object.assign(ie,{phase:"idle",t:0,idle:0,beg:0,ended:!1,tension:0,flee:0,glanceT:2,glance:0,saidClose:!1}),Ni(),ce.rotation.y=0,ce.userData.look=0,E.userData.look=0,Ke.visible=!0,B.emissiveIntensity=0,k.forEach(I=>{I.visible=!1}),g.forEach((I,z)=>{I.position.set(25.6+z*.95,0,9.2+z*.35),I.rotation.y=2.2+z*1.9,I.userData.walk=0}),v&&v.stop()}function wn(){Ht(),fn(),l.canMove=!0,l.canRun=!0,Se("toStall"),He("I haven't eaten since morning.",4),ie.hintAt=3.5}function vn(){o.stopAll(Re),Re=[],qe={},Ni()}let ln=document.getElementById("fear"),Qt=null;function Ni(){ln&&(ln.classList.remove("dark"),ln.style.opacity=0),Qt!==null&&(m.fov=Qt,m.updateProjectionMatrix(),Qt=null)}function hi(I,z,H,ge){ie.tension=Yt(ie.tension,H,2.5,I);let W=ie.tension;qe.heart&&(qe.heart.setVolume(.06+.9*W),qe.heart.setPlaybackRate(ge)),qe.market&&qe.market.setVolume(.45*(1-.55*W)),qe.fry&&qe.fry.setVolume(.04+.03*W);let oe=z*ge/.8%1,Ge=Math.exp(-oe*9)+.6*Math.exp(-Math.max(0,oe-.35)*9)*(oe>.35?1:0);ln&&(ln.classList.add("dark"),ln.style.opacity=String(Math.min(1,W*(.35+.4*Ge)))),l.xr||(Qt===null&&(Qt=m.fov),m.fov=Qt-W*(3+1.5*Ge),m.updateProjectionMatrix())}function Le(I){let z=ie.phase;if(z==="scrapping"&&ie.t<.7)h.set(0,{key:"scraps",mode:"world",pos:new b(23.1,.45,-2.85),rot:pi.toward(-1,ee,de.set(23.2,.2,-3.3)),pose:"grip",blend:.35});else if(z==="stealing"&&ie.t<.55)Ke.getWorldPosition(N),h.set(0,{key:"steal",mode:"world",pos:N.clone().add(de.set(-.02,.06,.12)),rot:pi.toward(-1,ee,N),pose:"grip",blend:.3});else if(z==="begging"||z==="sitting"){let H=(l.keys.KeyE||ie.xrBeg)&&z==="begging";d.stow=1,[0,1].forEach(ge=>{let W=ge?1:-1;h.set(ge,H?{key:"cup",mode:"cam",pos:e[ge],rot:s[ge],pose:"cup",blend:.3}:{key:"lap",mode:"cam",pos:t[ge],rot:n[ge],pose:"relax",blend:.3})})}else(!d.open||d.stow>.5)&&(h.h[0].key&&h.h[0].key!=="bag-rimL"&&h.hide(0),d.stow>.5&&z!=="begging"&&z!=="sitting"&&h.hide(1))}function bt(I,z,H=!0){if(l.headWorld(ee),ke.forEach(W=>{let oe=W.userData;if(oe.idle){Di(W,z,I);return}let Ge=oe.path[oe.seg],at=Ge.x-W.position.x,dt=Ge.z-W.position.z,Qe=Math.hypot(at,dt),Pt=Math.hypot(ee.x-W.position.x,ee.z-W.position.z),Zt=oe.v*(Pt<1.2?.55:1);if(Qe<.2?oe.seg=(oe.seg+1)%oe.path.length:(W.position.x+=at/Qe*Zt*I,W.position.z+=dt/Qe*Zt*I,W.rotation.y=Yt(W.rotation.y,W.rotation.y+Math.atan2(Math.sin(Math.atan2(at,dt)-W.rotation.y),Math.cos(Math.atan2(at,dt)-W.rotation.y)),6,I)),Pt<.8&&Pt>.01){let Fn=.8/Pt;W.position.x=ee.x+(W.position.x-ee.x)*Fn,W.position.z=ee.z+(W.position.z-ee.z)*Fn}oe.stride+=Zt*I,oe.walk=1,Lr(W,z,I);let cn=Math.floor(oe.stride/.7);cn!==oe.lastStep&&(oe.lastStep=cn,Im>0&&Pt<2&&o.ready&&H&&o.oneShot("step",{object:W,volume:Im,rate:.9+Math.random()*.25,ref:1.2}))}),G.forEach((W,oe)=>{let Ge=(z*.3+oe/6)%1;W.position.y=1.25+Ge*.9,W.material.opacity=.14*(1-Ge),W.scale.setScalar(.2+Ge*.4)}),[ce,E,O].forEach(W=>Di(W,z,I)),Xe.forEach((W,oe)=>{W.rotation.x=.08*Math.sin(z*1.1+oe*1.3),W.rotation.z=.04*Math.sin(z*.8+oe)}),(!v||!v.active)&&g.forEach(W=>{W.userData.walk<.05?Di(W,z,I):Lr(W,z,I)}),Ce.visible){let W=S.attributes.position;for(let oe=0;oe<X;oe++){let Ge=W.getY(oe)+I*.04;Ge>4&&(Ge=0),W.setY(oe,Ge)}W.needsUpdate=!0}if(ie.phase==="idle"||ie.phase==="done"||!H)return;ie.t+=I,ie.idle+=I;let ge=ie.enter;switch(ie.enter=!1,u.urgent=ie.idle>20,ie.idle>20&&ie.idle-I<=20&&ze(),ie.hintAt&&ie.t>ie.hintAt&&(ie.hintAt=0,ie.phase==="toStall"&&We("Find the food stall \u2014 look for the glow",5),ie.phase==="toScraps"&&We("Pick up the cloth scraps by the wall",5)),Le(z),ie.phase){case"counting":{d.forceOpen=ie.t<4.2?1:0,ce.userData.look=ie.t>1.8&&ie.t<3.2?Math.sin((ie.t-1.8)*14)*.45:Yt(ce.userData.look,0,4,I),k.forEach((W,oe)=>{let Ge=.5+oe*.4;if(ie.t>Ge&&ie.t<3.4){W.visible||(W.visible=!0,o.oneShot("coin",{object:Mt,volume:.8}),d.setCoins(2-oe));let at=Math.min(1,(ie.t-Ge)/.45);d.worldMouth(N),W.position.lerpVectors(N,de.set(30.8+oe*.12,.965,-1.78),St(at)),W.position.y+=Math.sin(at*Math.PI)*.2,W.rotation.x=(1-at)*6}}),ie.t>1.6&&ie.t-I<=1.6&&c.subtitle('Vendor: "Ten rupees. This is six."',3),ie.t>3&&ie.t-I<=3&&He("Six rupees. A plate is ten.",3.5),ie.t>3.4&&ie.t-I<=3.4&&(k.forEach(W=>{W.visible=!1}),d.setCoins(3),o.oneShot("coins",{volume:.5})),ie.t>6.5&&(Se("toScraps"),He("Maybe I can sell something\u2026",4),ie.hintAt=3);break}case"scrapping":ie.t>.55&&ie.t-I<=.55&&(d.setContents({scraps:!0}),d.forceOpen=1,o.oneShot("fabric",{volume:.7})),ie.t>1.6&&(d.forceOpen=0,Se("toTailor"),He("The tailor might pay something for these.",4));break;case"refused":E.userData.look=ie.t<2?Math.sin(ie.t*10)*.3:0;{let W=E.userData.J,oe=ie.t<2.2?Math.min(1,ie.t*4):Math.max(0,1-(ie.t-2.2)*3);W.shR.rotation.set(-1.4*oe,0,-.3*oe+Math.sin(ie.t*12)*.25*oe),W.elR.rotation.x=-.6*oe}ie.t>.4&&ie.t-I<=.4&&c.subtitle('Tailor: "Scraps? Everyone has scraps. Go."',3.5),ie.t>4&&ie.t-I<=4&&He("The other kids sit by the wall. Maybe someone will help.",4.5),ie.t>5&&Se("toBeg");break;case"sitting":{ge&&(l.canMove=!1,ie.from=l.dolly.position.clone(),ie.fromEye=l.eye,ie.fromYaw=Math.atan2(Math.sin(l.yaw),Math.cos(l.yaw)),d.stow=1);let W=St(Math.min(1,ie.t/1.2));l.dolly.position.lerpVectors(ie.from,N.set(Li.x,ie.from.y,Li.z-.05),W),l.xr||(l.eye=st(ie.fromEye,.82,W),l.yaw=st(ie.fromYaw,0,W),l.pitch=st(l.pitch,-.05,W)),ie.t>1.3&&(Se("begging"),We(l.xr?"Hold the trigger to hold out your hands":"Hold E to hold out your hands",8));break}case"begging":{let W=l.keys.KeyE||ie.xrBeg;W&&(ie.beg+=I,ie.idle=0),ke.forEach(oe=>{let Ge=Math.hypot(oe.position.x-Li.x,oe.position.z-Li.z);oe.userData.look=Ge<2.4&&W?.5:0,oe.userData.lookPitch=Ge<2.4&&W?.35:0}),ie.beg>.5&&ie.beg-I<=.5&&He("Please\u2026",2.5),ie.beg>4.5&&ie.beg-I<=4.5&&He("They don't even look down.",3.5),ie.beg>9.5&&ie.beg-I<=9.5&&He("It's like I'm not here.",3.5),(ie.beg>13||ie.t>45)&&(Se("standUp"),h.hide());break}case"standUp":{let W=St(Math.min(1,ie.t/1));l.xr||(l.eye=st(.82,1.52,W)),ie.t>.5&&(d.stow=0),ie.t>1.1&&(l.canMove=!0,ce.rotation.y=Math.PI,ke.forEach(oe=>{oe.userData.look=0,oe.userData.lookPitch=0}),Se("toSteal"),He("The vendor turned away. Nobody is watching the food.",4.5));break}case"toSteal":{B.emissiveIntensity=.35+.25*Math.sin(z*4);let W=Math.hypot(ee.x-ue.x,ee.z-ue.z),oe=St(Ft(1-(W-.9)/8,0,1));hi(I,z,.15+.85*oe,.85+.95*oe),ie.glanceT-=I,ie.glanceT<0&&(ie.glanceT=2.5+Math.random()*2.5,ie.glance=oe>.4?1:0),ie.glance=Math.max(0,(ie.glance||0)-I*1.4),ce.rotation.y=Math.PI-.35*Math.sin(Math.min(1,ie.glance)*Math.PI),oe>.75&&!ie.saidClose&&(ie.saidClose=!0,He("Don't turn around. Don't turn around\u2026",3));break}case"stealing":if(hi(I,z,ie.t<1?1:.85,ie.t<1?1.9:2.1),ie.t>.5&&ie.t-I<=.5&&(Ke.visible=!1,B.emissiveIntensity=0,d.setContents({food:!0}),d.glow=.3,d.forceOpen=1,o.oneShot("fabric",{volume:.8}),h.hide(0)),ie.t>1&&ie.t-I<=1&&(d.forceOpen=0,ce.rotation.y=0,o.oneShot("yells",{object:Mt,volume:.6}),o.oneShot("whistle",{object:g[0],volume:.9,ref:3}),c.subtitle('Vendor: "Chor! Thief! Stop!"',3)),ie.t>1){let W=ce.userData.J,oe=Math.min(1,(ie.t-1)*4);W.shR.rotation.set(-1.6*oe,0,-.2*oe)}ie.t>1.8&&(v.speed=1.9,v.start(),l.jogAllowed=!0,Se("flee"),He("Run.",2.5),We(l.xr?"Push the left stick to run":"Hold Shift to run",4));break;case"flee":{v.update(I),ie.idle=0,ie.flee=Math.max(ie.flee,St(Ft((ee.x-31)/(Ie-31),0,1))),hi(I,z,.7,1.9+.3*ie.flee),ln&&ln.classList.remove("dark"),Qt!==null&&!l.xr&&(m.fov=Yt(m.fov,Qt,2,I),m.updateProjectionMatrix()),g.forEach(W=>Lr(W,z,I)),ee.x>Ie+.4&&!ie.ended&&(ie.ended=!0,u.set(null),Qt!==null&&(m.fov=Qt,m.updateProjectionMatrix(),Qt=null),i.carryFear=ie.tension,Se("done"),Z&&Z("nightmare"));break}}u.set(rt[ie.phase]||null)}function ze(){let I={toStall:"Find the food stall (look for the glow)",toScraps:"Pick up the cloth scraps by the wall",toTailor:"Take the scraps to the tailor",toBeg:"Sit on the carton with the other children",begging:"Hold E to hold out your hands",toSteal:"Take the food from the counter"}[ie.phase];I&&We(I,5)}function L(I){let z=Ft((I-17)/5,0,1),H=ie.flee||0,ge={fog:new xe(10121282).lerp(new xe(14000739),z),density:st(.042,.028,z),sun:st(1.7,4,z),hemi:st(.5,.82,z),hemiSky:new xe(13146212).lerp(new xe(15978131),z),hemiGround:new xe(3811868).lerp(new xe(5915696),z),sky:st(.85,1.1,z),skyTint:new xe(1,.96,.87),exposure:st(.98,1.08,z)};return H>0&&(ge.fog.lerp(new xe(11569760).lerp(new xe(1836296),.24),H),ge.density=st(ge.density,.055,H),ge.sun=st(ge.sun,1.4,H),ge.hemi=st(ge.hemi,.67,H),ge.sky=st(ge.sky,.88,H),ge.exposure=st(ge.exposure,.97,H),ge.skyTint.lerp(new xe(1,1,1).lerp(new xe(.55,.08,.12),.2),H)),ge}let Z=null;return{root:p,update:bt,start:wn,stop:vn,reset:Ht,atmosphere:L,name:"street",zone:{minX:8.4},onEnd(I){Z=I},getColliders(){return _},setQuality(I){Ce.visible=!0,S.setDrawRange(0,I==="low"?Math.floor(X*.4):X)},get phase(){return ie.phase},setXRBeg(I){ie.xrBeg=I},skip(){let I=ie.phase;I==="toStall"?(l.place(31,-.8,0,1.52),Se("counting")):["counting","refused","sitting","standUp","stealing","scrapping"].includes(I)?ie.t=99:I==="toScraps"?(l.place(23.3,-1.9,0,1.52),Se("scrapping")):I==="toTailor"?(l.place(28,8.6,Math.PI,1.52),Se("refused")):I==="toBeg"?(l.place(Li.x,Li.z-1.4,Math.PI,1.52),Se("sitting")):I==="begging"?ie.beg=99:I==="toSteal"?(l.place(31,-.8,0,1.52),Se("stealing")):I==="flee"&&l.place(Ie+1,8.3,-Math.PI/2,1.52)}}}function Lm(i,e,t,n){let{audio:s,ui:r,player:o,pursuit:a,interactor:l,camera:c}=i,u=new it;u.name="lanes",e.add(u);let h={},d=new b,f=new b,g=()=>!!o.xr;function v(k){let O=k==="child"?3:1,ne=document.createElement("canvas");ne.width=256*O,ne.height=256;let F=ne.getContext("2d"),fe="#0d0907";if(F.fillStyle=fe,F.strokeStyle=fe,F.lineCap="round",F.lineJoin="round",k==="adult"&&(F.filter="blur(4px)"),k==="adult")F.beginPath(),F.ellipse(128,50,19,23,0,0,Math.PI*2),F.fill(),F.beginPath(),F.moveTo(94,84),F.quadraticCurveTo(128,74,162,84),F.lineTo(168,168),F.lineTo(158,256),F.lineTo(98,256),F.lineTo(88,168),F.closePath(),F.fill(),F.lineWidth=15,F.beginPath(),F.moveTo(161,92),F.lineTo(184,138),F.lineTo(202,116),F.stroke(),F.beginPath(),F.moveTo(95,92),F.lineTo(84,168),F.stroke(),F.filter="none";else for(let be=0;be<3;be++){let X=be*256,S=be===1,ae=be===2;F.fillStyle=fe,F.fillRect(X+140,170,112,11),F.fillRect(X+150,181,8,75),F.fillRect(X+234,181,8,75),F.beginPath(),F.moveTo(X+162,170),F.lineTo(X+162,131),F.quadraticCurveTo(X+166,118,X+198,118),F.lineTo(X+238,118),F.lineTo(X+238,170),F.lineTo(X+224,170),F.lineTo(X+224,134),F.lineTo(X+178,134),F.lineTo(X+178,170),F.closePath(),F.fill(),F.fillRect(X+171,158,4,S?17:11),F.fillRect(X+58,200,52,8),F.fillRect(X+80,208,8,48),F.beginPath(),F.moveTo(X+64,203),F.quadraticCurveTo(X+58,150,X+90,122),F.quadraticCurveTo(X+118,118,X+122,140),F.lineTo(X+112,203),F.closePath(),F.fill(),F.lineWidth=12,F.beginPath(),F.moveTo(X+110,140),F.lineTo(X+150,S?168:158),F.lineTo(X+170,S?170:162),F.stroke(),F.beginPath(),F.moveTo(X+100,200),F.lineTo(X+132,206),F.lineTo(X+132,250),F.stroke(),ae?(F.beginPath(),F.ellipse(X+98,103,18,21,0,0,Math.PI*2),F.fill(),F.fillStyle="#e4dcc4",[91,105].forEach(Ce=>{F.beginPath(),F.arc(X+Ce,101,2.8,0,Math.PI*2),F.fill()})):(F.beginPath(),F.ellipse(X+121,112,17,19,.5,0,Math.PI*2),F.fill()),F.fillStyle="#1a120c",[52,128,204].forEach(Ce=>F.fillRect(X+Ce-4,0,8,256))}let Oe=new tn(ne);return Oe.colorSpace=Lt,Oe.anisotropy=4,O>1&&Oe.repeat.set(1/O,1),Oe}let m=[[43.4,9.6,-1],[45.6,7,1],[47.9,9.6,-1],[49.7,7,1]],p=['"Go away!"','"Not here. Go."','"Chor! Shut it!"',`"We don't want trouble."`],_=v("adult"),x=(()=>{let k=document.createElement("canvas");k.width=128,k.height=256;let w=k.getContext("2d"),E=w.createRadialGradient(64,230,10,64,200,230);E.addColorStop(0,"#ffd59a"),E.addColorStop(.45,"#d88a48"),E.addColorStop(1,"#3a1e10"),w.fillStyle=E,w.fillRect(0,0,128,256),w.fillStyle="rgba(40,20,10,0.55)",w.fillRect(0,170,128,3),w.fillStyle="rgba(30,15,8,0.5)",w.fillRect(84,60,30,70);let O=new tn(k);return O.colorSpace=Lt,O})(),M=Ne(2760728,{flatShading:!0,roughness:1}),T=new mt(1.02,2.08);T.translate(0,-1.04,0);let P=zn(Bt.tin(),{metalness:.25,side:At,flatShading:!0,color:9078400}),R=m.map(([k,w,E],O)=>{let ne=new it;ne.position.set(k,0,w+E*.035),ne.rotation.y=E>0?0:Math.PI,u.add(ne);let F=new yt({map:x,transparent:!0,opacity:.9}),fe=new De(new mt(.96,2.02),F);fe.position.y=1.01,ne.add(fe);let Oe=new yt({map:_,transparent:!0,depthWrite:!1}),be=new De(new mt(.86,1.8),Oe);be.position.set(O%2?-.08:.08,.9,.012),ne.add(be);let X=new De(T,P);return X.position.set(0,2.06,.03),X.scale.y=.001,ne.add(X),[[-.54,1.06,.08,2.2],[.54,1.06,.08,2.2],[0,2.13,1.16,.1]].forEach(([S,ae,Ce,Xe])=>{let je=new De(te.box(Ce,Xe,.09),M);je.position.set(S,ae,.03),ne.add(je)}),{d:ne,glowM:F,silM:Oe,sh:X,x:k,st:0,t:0}}),U=Ne(3810841,{flatShading:!0,roughness:.9}),Y=Ne(1446158,{flatShading:!0,roughness:1}),y=(()=>{let k=document.createElement("canvas");k.width=k.height=128;let w=k.getContext("2d");w.strokeStyle="#050303",w.lineCap="round",w.lineJoin="round";let E=64,O=4;w.lineWidth=5,w.beginPath(),w.moveTo(E,O);for(let F=0;F<9;F++)E=64+(F%2?1:-1)*(6+F*7%11),O+=14,w.lineTo(E,O);w.stroke(),w.fillStyle="#040202",w.beginPath(),w.ellipse(64,64,15,22,.15,0,Math.PI*2),w.fill();let ne=new tn(k);return ne.colorSpace=Lt,ne})(),A=new yt({map:y,transparent:!0,depthWrite:!1}),q=1.8,J=[{z:5,y:1.2},{z:3.3,y:.9},{z:-.4,y:1,grab:!0},{z:-2.9,y:1.35}],K=J.map((k,w)=>{let E=new it;E.position.set(54,k.y,k.z),u.add(E);let O=new De(new mt(.5,.75),A);O.position.set(53.985,k.y,k.z),O.rotation.y=-Math.PI/2,O.rotation.z=w%2?.3:-.2,u.add(O);let ne=new it;E.add(ne);let F=new De(te.cyl(.045,.06,q,7),Y);F.rotation.x=Math.PI/2,F.position.z=-q/2,ne.add(F);let fe=new De(te.cyl(.04,.044,.08,7),U);fe.rotation.x=Math.PI/2,fe.position.z=.03,ne.add(fe);let Oe=new De(te.box(.1,.034,.11),U);Oe.position.z=.11,ne.add(Oe);let be=[-.036,-.012,.012,.036].map((ae,Ce)=>{let Xe=new it;Xe.position.set(ae,0,.165),ne.add(Xe);let je=new De(te.box(.021,.02,.085-Math.abs(Ce-1.5)*.01),U);return je.position.z=.04,Xe.add(je),Xe}),X=new it;X.position.set(.055,-.005,.09),X.rotation.y=.7,ne.add(X);let S=new De(te.box(.022,.022,.07),U);return S.position.z=.035,X.add(S),E.traverse(ae=>{ae.isMesh&&(ae.castShadow=!0)}),E.visible=!1,{...k,grp:E,slide:ne,fingers:be,thumb:X,e:0,done:!1,ph:w*1.3}});l.anyPress=()=>{h.grab&&!h.grab.free&&pe()};function pe(){let k=h.grab;k.n++,k.jerk=1,s.oneShot("fabric",{volume:.9,rate:.7+k.n*.08}),k.n>=5&&j(!1)}function j(k){h.grab.free=!0,h.grab.t=0,r.hint("");let w=K.find(E=>E.grab);w.done=!0,k?(s.oneShot("coin",{volume:.8}),t("It took a coin\u2026 but not the food.",3)):t("No! It's for home!",2.5)}let he=new tt({map:Sf("#8a7c6a",3,3,!0).map,roughness:.95,flatShading:!0,side:At}),re=[[-5.93,1],[-3.47,-1]].map(([k,w])=>{let E=new it;E.position.set(58.9,3.2,k),u.add(E);let O=new De(new mt(8.6,10.5),he);return O.position.y=5.25,E.add(O),{hinge:E,s:w}}),ye=v("child"),Ie=new yt({color:14721120,transparent:!0,opacity:0,depthWrite:!1}),Te=new yt({map:ye,transparent:!0,opacity:0,depthWrite:!1}),Ve=new an,lt=new mt(.88,.78),le=new mt(.86,.76);for(let k=-2.2;k<10.6;k+=2.1)[[65.4,Math.PI/2,1],[68,-Math.PI/2,-1]].forEach(([w,E,O],ne)=>{[2.35,4.45].forEach((F,fe)=>{let Oe=k+ne*.9+fe*.35;Ve.add(te.box(.04,.86,.06),M,w+O*.02,F,Oe-.47),Ve.add(te.box(.04,.86,.06),M,w+O*.02,F,Oe+.47),Ve.add(te.box(.04,.06,1),M,w+O*.02,F+.43,Oe),Ve.add(te.box(.08,.05,1.04),M,w+O*.04,F-.43,Oe),Ve.add(lt,Ie,w+O*.06,F,Oe,0,E,0),Ve.add(le,Te,w+O*.07,F-.01,Oe,0,E,0)})});Ve.build(u,{cast:!1,receive:!1});let Me=new Ut;u.add(Me);let _e=Bt.dot(),Ae=[70.2,72.6,75,77.4,79.8].map(k=>{let w=new yt({color:16767392}),E=new De(new nn(.06,8,6),w);E.position.set(k,2.45,12.7),u.add(E);let O=new De(te.box(.01,.75,.01),Y);O.position.set(k,2.85,12.7),u.add(O);let ne=new Nn(new Gn({map:_e,color:16760944,transparent:!0,opacity:.55,depthWrite:!1,blending:_n}));return ne.position.copy(E.position),ne.scale.setScalar(1.1),u.add(ne),{x:k,m:w,s:ne,st:0,t:0}}),Ue=new it;Ue.position.set(81.9,0,12),u.add(Ue);let Pe=new De(te.box(.045,2,1.4),zn(Bt.plywood(),{color:10127992}));Pe.position.set(0,1,.7),Pe.castShadow=!0,Ue.add(Pe);let Fe=new yt({color:16765072,transparent:!0,opacity:.9,depthWrite:!1});[[81.93,1,13.41,.02,2],[81.93,2.01,12.7,1.4,.02],[81.93,.005,12.7,1.4,.012]].forEach(([k,w,E,O,ne])=>{let F=new De(new mt(O,ne),Fe);F.position.set(k-.03,w,E),F.rotation.y=-Math.PI/2,u.add(F)});let Ke={minX:81.55,maxX:82.25,minZ:11.9,maxZ:13.5};l.add({object:Pe,label:"Knock",maxDist:2.4,enabled:()=>h.on&&h.knocks<3&&!h.doorOpen&&h.alive,onPress:B});function B(){h.knocks++,h.knockT=0,[0,.22,.44].forEach(k=>setTimeout(()=>s.oneShot("doorWood",{object:Pe,volume:.9,rate:1.7+Math.random()*.2,ref:2}),k*1e3)),h.knocks===1&&t("Ma! Open the door!",2.5),h.knocks===2&&setTimeout(()=>r.subtitle('Mother (inside): "\u2026Who is it?"',2.6),900),h.knocks===3&&(h.safe=!0,r.subtitle(`"Ma, it's me!"`,2),setTimeout(()=>{h.on&&(h.doorOpen=!0,h.openT=0,s.oneShot("door",{object:Pe,volume:.8,rate:.9}),i.refreshColliders())},1e3),setTimeout(()=>{h.on&&h.doorOpen&&n&&n()},2200))}function C(){Object.assign(h,{on:!1,alive:!1,warp:0,grab:null,sky:0,win:0,winT:0,dark:0,knocks:0,knockT:0,doorOpen:!1,openT:0,safe:!1,said:{},hinted:!1,dim:0}),R.forEach(k=>{k.st=0,k.t=0,k.sh.scale.y=.001,k.glowM.opacity=.9,k.silM.opacity=1}),K.forEach(k=>{k.e=0,k.done=!1,k.grp.visible=!1}),re.forEach(k=>{k.hinge.rotation.x=0}),Ie.opacity=0,Te.opacity=0,ye.offset.x=0,Ae.forEach(k=>{k.st=0,k.t=0,k.m.color.setHex(16767392),k.s.visible=!0,k.s.material.opacity=.55}),Ue.rotation.y=0,Fe.opacity=.9,G(),u.visible=!1}let Q={};function G(){Object.values(Q).forEach(k=>k&&k.stop&&k.stop()),Q={}}function se(k){C(),h.on=k,h.alive=k,u.visible=k,k&&(Q.sew=s.loop("sewing",{object:Me,volume:0,ref:4}),Q.fac=s.loop("factory",{object:Me,volume:0,ref:5}))}let ce=k=>h.said[k]?!1:(h.said[k]=!0,!0);function ue(k,w,E,O,ne){if(!h.on)return;h.warp=ne,R.forEach((X,S)=>{X.st===0?(X.glowM.opacity=.8+.08*Math.sin(w*3+S*2)*Math.sin(w*7.3+S),ne>.2&&O===0&&E.x>X.x-2.5&&(X.st=1,X.t=0,s.oneShot("doorWood",{object:X.d,volume:.85,rate:1.45,ref:2}),r.subtitle(p[S],1.8),S===0&&setTimeout(()=>h.on&&t("Please\u2026 help me!",2.6),600),S===3&&setTimeout(()=>h.on&&t("Nobody opens.",2.6),700))):X.st===1&&(X.t+=k,X.sh.scale.y=Math.max(.001,St(Ft(X.t/.17,0,1))),X.glowM.opacity=.9*(1-Ft(X.t/.22,0,1)),X.silM.opacity=1-Ft(X.t/.18,0,1),X.t>.3&&(X.st=2))}),c.getWorldDirection(f),f.y=0,f.normalize();let F=d.set(E.x-f.z*.17,.82,E.z+f.x*.17);if(h.grab){let X=h.grab;X.t+=k,X.jerk=Math.max(0,X.jerk-k*6),X.free?X.t>.6&&(h.grab=null):(X.t>9&&j(!0),o.speedScale=0)}K.forEach(X=>{let S=E.z-X.z,ae=0,Ce=.7;O===1&&ne>.2&&!X.done&&Math.abs(S)<2.6&&(ae=1),X.grab&&!X.done&&!h.grab&&O===1&&ne>.2&&Math.abs(S)<.7&&(h.grab={n:0,t:0,jerk:0,free:!1},s.oneShot("fabric",{volume:1,rate:.55}),s.oneShot("heartbeat",{volume:.8}),r.subtitle('"Give it here."',2.6),r.hint(g()?"Pull the trigger again and again to pull free":"Click again and again to pull free",9));let Xe=X.grab&&h.grab&&!h.grab.free;if(Xe&&(ae=1,Ce=Math.max(.3,Math.hypot(F.x-X.grp.position.x,F.y-X.grp.position.y,F.z-X.grp.position.z)-.12)-h.grab.jerk*.18),X.done&&!Xe&&(ae=0),X.e=Yt(X.e,ae,ae>X.e?Xe?9:4:X.done?7:2.5,k),X.grp.visible=X.e>.01,!X.grp.visible)return;let je=F.x-X.grp.position.x,ke=F.y-X.grp.position.y,ie=F.z-X.grp.position.z,ct=Ft(Math.atan2(je,ie),-Math.PI/2-.65,-Math.PI/2+.65),Et=Ft(Math.atan2(ke,Math.hypot(je,ie)),-.5,.45);X.grp.rotation.set(-Et+Math.sin(w*2.1+X.ph)*.05*(Xe?0:1),ct+Math.sin(w*1.7+X.ph)*.08*(Xe?0:1),0,"YXZ"),X.slide.position.z=st(-.4,Ce-.2,X.e);let V=Xe?1.25:.35+.35*Math.sin(w*5+X.ph);X.fingers.forEach((Ye,me)=>{Ye.rotation.x=V+me*.04}),X.thumb.rotation.x=V*.6});let fe=O===2?Ft((E.x-54.6)/8,0,1):O>2?1:0;fe>h.sky&&(h.sky<.15&&fe>=.15&&ce("sky")&&t("The walls\u2026 they're closing in.",3),h.sky=Math.min(fe,h.sky+k*.5)),re.forEach(X=>{X.hinge.rotation.x=X.s*.125*St(h.sky)}),h.win===0&&O===3&&E.z>-3.2&&(h.win=1,h.winT=0),h.win>0&&(h.winT+=k),h.win===1?(Ie.opacity=Math.min(.7,h.winT*.7),Te.opacity=Math.min(1,h.winT*.9),ye.offset.x=Math.floor(w*5)%2/3,h.winT>1.4&&ce("kids")&&t("Every window\u2026 children. Like me.",3.2),E.z>3.6&&(h.win=2,h.winT=0,ye.offset.x=2/3,s.oneShot("heartbeat",{volume:1}),s.oneShot("whispers",{volume:.5,rate:.7}))):h.win===2?(h.winT>.9&&ce("look")&&t("They're all looking at me.",2.6),h.winT>2.6&&(h.win=3,h.winT=0,s.oneShot("thunder",{volume:.3,rate:.5}))):h.win===3&&(Ie.opacity=Math.max(0,.7-h.winT*.8),h.winT>1.2&&ce("every")&&t("Every window. Every night.",3)),Me.position.set(66.7,3,Ft(E.z,-3,10.5));let Oe=h.win===1?Math.min(.7,h.winT*.5):h.win===3?Math.min(.25,h.winT*.1):0;Q.sew&&Q.sew.setVolume(Oe),Q.fac&&Q.fac.setVolume(Oe*.6);let be=0;Ae.forEach(X=>{if(X.st===0&&O===4&&E.x>X.x+.8&&(X.st=1,X.t=0,s.oneShot("step",{object:X.s,volume:.6,rate:2.4,ref:1.5})),X.st===1){X.t+=k;let S=Math.sin(X.t*70)>.2&&X.t<.35;X.m.color.setHex(S?16767392:2760728),X.s.visible=S,X.t>.4&&(X.st=2,X.m.color.setHex(1709072),X.s.visible=!1)}X.st===2&&be++,X.st===0&&(X.s.material.opacity=.5+.06*Math.sin(w*13+X.x))}),h.dark=be/Ae.length,O===4&&E.x>72&&ce("dark")&&t("The lights\u2026 they're going out behind me.",3),O===4&&E.x>78.6&&!h.hinted&&(h.hinted=!0,r.hint(g()?"Knock: point at the door and pull the trigger":"Knock on the door (click)",6)),h.knocks>0&&(h.knockT+=k),h.doorOpen&&(h.openT+=k,Ue.rotation.y=-1.45*St(Math.min(1,h.openT/.9)),Fe.opacity=Math.max(0,.9-h.openT*2)),O===4&&E.x>79.2&&(a.speed=Math.min(a.speed,h.safe?.6:1.25)),h.dim=Math.max(.45*St(h.sky)*(O>=2&&O<=3?1:.4),.55*h.dark)}return{group:u,reset:C,start:se,update:ue,stop:G,get S(){return h},get arms(){return K},get safe(){return h.on&&h.safe},get opened(){return h.on&&h.doorOpen&&h.openT>1},get dim(){return h.on?h.dim:0},get doorShut(){return h.on&&!h.doorOpen},colliders(){return h.on&&!h.doorOpen?[Ke]:[]},kill(){h.alive=!1},anchors(){let k=m.map(([w,E])=>new b(w,1.2,E));J.forEach(w=>k.push(new b(54,w.y,w.z)));for(let w=-2.2;w<10.6;w+=.7)[2.35,4.45].forEach(E=>{k.push(new b(65.4,E,w)),k.push(new b(68,E,w))});return k},onCaught(){h.grab&&(h.grab=null,r.hint(""),K.forEach(k=>{k.grab&&(k.done=!0)}))},forceOpen(){h.on&&(h.knocks=3,h.safe=!0,h.doorOpen=!0,h.openT=0,i.refreshColliders())}}}var Qa=[{x0:40,x1:54,z0:7,z1:9.6},{x0:51.4,x1:54,z0:-6,z1:9.6},{x0:51.4,x1:68,z0:-6,z1:-3.4},{x0:65.4,x1:68,z0:-6,z1:14},{x0:65.4,x1:82,z0:11.4,z1:14}],bE=[new b(52.7,0,8.3),new b(52.7,0,-4.7),new b(66.7,0,-4.7),new b(66.7,0,12.7)],wE=.15,Qo=new b(82,1.2,12.7),SE=[{x:41.2,z:8.3,yaw:-Math.PI/2},{x:52.7,z:6.5,yaw:0},{x:54.5,z:-4.7,yaw:-Math.PI/2},{x:66.7,z:-2.5,yaw:Math.PI},{x:68.5,z:12.7,yaw:-Math.PI/2}],xs={z0:-3.4,period:8,trigger:5.5};function Um(i){let{scene:e,audio:t,player:n,ui:s,thread:r,bagCtl:o,lights:a,police:l,pursuit:c,camera:u,hands:h}=i,d=()=>i.edition==="extra",f=new it;f.name="nightmare",e.add(f);let g=[],v=[],m=new an,p=Bt.dirt(),_=[];Qa.forEach((N,de)=>{let We=p.clone();We.needsUpdate=!0,We.repeat.set((N.x1-N.x0)/3,(N.z1-N.z0)/3);let He=new De(new mt(N.x1-N.x0+.2,N.z1-N.z0+.2),new tt({map:We,roughness:1,color:12101776,polygonOffset:!0,polygonOffsetFactor:-1-de,polygonOffsetUnits:-2-2*de}));He.rotation.x=-Math.PI/2,He.position.set((N.x0+N.x1)/2,.001*de,(N.z0+N.z1)/2),He.receiveShadow=!0,f.add(He),_.push(He)});let x=["#a89a80","#9aa0a8","#b09a90","#a0a88a","#a898a8","#b0906a"],M=(N,de,We,He,Se={})=>g.push(Is(f,N,de,We,He,{colours:x,hMin:7,hMax:13,night:!0,glow:1708044,list:v,detail:!1,...Se}));M(40,54,9.6,20),M(40,51.4,-12,7),M(51.4,82,-12,-6),M(65.4,82,14,20),M(54,65.4,-3.4,20,{period:xs.period}),M(68,82,-6,11.4,{period:xs.period}),M(82,92,-12,9.7),M(82,92,15.7,22),M(88.3,92,9.7,15.7),v.forEach((N,de)=>{N.userData.ph=de*1.7,N.userData.spin=(vt()-.5)*2,N.userData.lift=.6+vt()*1.4,N.matrixAutoUpdate=!0,N.userData.home=N.position.clone()});let T=zn(Bt.plywood()),P=new Ei([[.001,0],[.26,.02],[.3,.2],[.28,.45],[.18,.62],[.07,.68],[.001,.7]].map(([N,de])=>new we(N,de)),8);[[42,7.33,.9,.6],[45,9.27,.8,.6],[47.9,7.33,1.2,.6],[51.73,3.2,.6,.9],[51.73,.8,.6,.8],[58,-5.67,1.2,.6],[61,-3.73,.9,.6],[65,-5.67,.9,.6],[65.73,-1,.6,.9],[65.73,7,.6,.9],[73,11.73,.9,.6],[78.5,13.67,.9,.6]].forEach(([N,de,We,He],Se)=>{if(Se%3===1)m.add(P,Ne(6970960,{flatShading:!0,roughness:1}),N,0,de,.05,Se*1.3,0,1.2,1.1,1.2);else{let rt=.6+Se%2*.4;m.add(te.box(We,rt,He),T,N,rt/2,de,0,(Se%3-1)*.08,0),Se%4===0&&m.add(te.box(We*.8,.5,He*.8),T,N,rt+.25,de,0,.2,0)}g.push({minX:N-We/2,maxX:N+We/2,minZ:de-He/2,maxZ:de+He/2})});let U=zn(Bt.tin(),{metalness:.2,side:At,emissive:1709072,flatShading:!0});for(let N=69;N<81.5;N+=1.6+vt()*.8)[[11.4,1],[14,-1]].forEach(([de,We])=>{let He=1.5+vt()*.6,Se=2.1+vt()*.5;m.add(te.box(He,Se,.03),U,N+He/2,Se/2,de+We*.03,0,0,(vt()-.5)*.04),m.add(te.box(He+.2,.02,.6),U,N+He/2,Se+.18,de+We*.25,We*.5,0,0),vt()<.4&&m.add(te.box(.6,1.7,.03),Ne(789e3),N+He/2,.85,de+We*.06)});[[70.5,13.6],[76.4,11.75],[80.6,13.6]].forEach(([N,de])=>m.add(te.cyl(.17,.13,.3,12),Ne(2779802,{roughness:.5}),N,.15,de)),g.push({minX:70.3,maxX:70.7,minZ:13.4,maxZ:14},{minX:76.2,maxX:76.6,minZ:11.4,maxZ:11.95},{minX:80.4,maxX:80.8,minZ:13.4,maxZ:14});let Y=[0,1,2,3].map(N=>new tt({map:mi(["stripe","check","buti","paisley"][N],N+1,128),side:At,roughness:1})),y=[71,74.6,78.2].flatMap(N=>$a(f,new b(N,2.6,11.5),new b(N+.4,2.6,13.9),Y,3)),A=[];Qa.forEach((N,de)=>{if(de!==3)for(let We=0;We<5;We++){let He=N.x1-N.x0>N.z1-N.z0,Se=st(He?N.x0:N.z0,He?N.x1:N.z1,vt()),rt=4+vt()*3;A.push(He?[new b(Se,rt,N.z0),new b(Se+(vt()-.5)*2,rt,N.z1),.4,.012]:[new b(N.x0,rt,Se),new b(N.x1,rt,Se+(vt()-.5)*2),.4,.012])}});for(let N=xs.z0+1;N<11;N+=xs.period)A.push([new b(65.4,5.2,N),new b(68,5,N+1.5),.5,.012]);jo(f,A);let q=m.build(f,{cast:!0,receive:!0}),J=170,K=new Xt,pe=new Float32Array(J*3);for(let N=0;N<J;N++){let de=Qa[N%Qa.length],We=de.x1-de.x0>de.z1-de.z0,He=vt()<.5;pe[N*3]=We?st(de.x0,de.x1,vt()):He?de.x0-.06:de.x1+.06,pe[N*3+1]=2+vt()*7,pe[N*3+2]=We?He?de.z0-.06:de.z1+.06:st(de.z0,de.z1,vt())}K.setAttribute("position",new on(pe,3));let j=new As({size:.15,map:Bt.dot(),color:16726554,transparent:!0,opacity:0,blending:_n,depthWrite:!1,fog:!1}),he=new ls(K,j);he.frustumCulled=!1,f.add(he);let re=a.add({pos:new b,color:16751168,intensity:0,distance:9,decay:1.4,space:"nightmare",priority:4}),ye=a.add({pos:new b,color:16722458,intensity:0,distance:10,decay:1.5,space:"nightmare",priority:3}),Ie=a.add({pos:new b(81,1.6,12.7),color:16769712,intensity:0,distance:8,space:"nightmare",priority:3}),Te=[[44,7.25,0],[46.5,9.35,Math.PI],[49,7.25,0],[51.65,5,Math.PI/2],[53.75,2,-Math.PI/2],[51.65,-1,Math.PI/2],[56,-5.75,0],[59,-3.65,Math.PI],[62.5,-5.75,0]].map(([N,de,We],He)=>{let Se=new tt({color:657416,roughness:1,transparent:!0,opacity:0,side:At}),rt=Mn({female:He%2===1,outfit:He%3?"kurta":"shirt",seed:400+He,scale:1.3+He%3*.05,material:Se});return rt.position.set(N,0,de),rt.rotation.y=We,rt.visible=!1,f.add(rt),{w:rt,mat:Se,gone:!1,o:0}}),Ve=new yt({color:0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),lt=Mn({child:!0,outfit:"shirt",seed:7,scale:1.3,material:Ve}),le=Mn({top:0,bottom:0,mustache:!0,belly:.035,outfit:"shirt",sleeves:"full",glasses:!0,seed:41,scale:1.45,material:Ve.clone()});[lt,le].forEach(N=>{N.visible=!1,f.add(N),N.traverse(de=>{de.isMesh&&(de.castShadow=!1,de.renderOrder=2)})});let Me=le.userData.mesh.material,_e=new yt({color:12376319,transparent:!0,opacity:0,blending:_n,depthWrite:!1,fog:!1}),Ae=[[47.5,8.3,Math.PI/2],[74.5,12.7,Math.PI/2]].map(([N,de,We])=>{let He=new it;He.position.set(N,0,de),He.rotation.y=We,f.add(He);let Se=_e.clone(),rt=Ur({wood:Se});rt.position.y=1,He.add(rt),rt.traverse(wn=>{wn.isMesh&&(wn.material=Se,wn.castShadow=!1,wn.receiveShadow=!1)});let Ht=new De(new Ct(.38,.05,.38),Se);return Ht.position.set(0,.56,.85),He.add(Ht),He.visible=!1,{g:He,m:rt,mat:Se,state:0,done:!1,x:N,z:de}});function Ue(N,de,We,He,Se,rt=1.4,Ht="#ff2a1a"){let wn=document.createElement("canvas");wn.width=512,wn.height=160;let vn=wn.getContext("2d");vn.font='bold 96px "Courier New", monospace',vn.fillStyle=Ht,vn.textAlign="center",vn.textBaseline="middle",vn.shadowColor=Ht,vn.shadowBlur=18,vn.fillText(N,256,84);let ln=new De(new mt(rt,rt*.31),new yt({map:new tn(wn),transparent:!0,opacity:0,blending:_n,depthWrite:!1,side:At,fog:!1}));return ln.position.set(de,We,He),ln.rotation.y=Se,f.add(ln),ln}let Pe=[Ue("400 PCS",44,2.6,9.55,Math.PI),Ue("Rs 6",51.45,2.2,3,Math.PI/2),Ue("Rs 10",53.95,3,-.5,-Math.PI/2),Ue("TOMORROW 7 AM",60,2.8,-3.45,Math.PI,2.2),Ue("CHOR",72,3.2,13.95,Math.PI,1.6),Ue("CHOR",79,2,11.45,0,1.6)],Fe=new it;Fe.visible=!1,f.add(Fe);{let N=["400","400 PCS","Rs 6","399","400","Rs 10","7 AM","400"];for(let de=xs.z0+.6,We=0;de<11.2;de+=1,We++)[[65.43,Math.PI/2],[67.97,-Math.PI/2]].forEach(([He,Se],rt)=>{let Ht=Ue(N[(We+rt*3)%N.length],He,1.4+(We*7+rt*3)%5*.55,de+rt*.5,Se,.9+(We+rt)%3*.3);if(Ht.material.opacity=.35,Fe.add(Ht),(We+rt)%2===0){let wn=new De(new mt(.42,.34),Y[(We+rt)%4]);wn.position.set(He+(rt?-.01:.01),.6+(We*3+rt)%4*.7,de+.25),wn.rotation.set(0,Se,(We*13%7-3)*.12),Fe.add(wn)}})}let Ke=new it;Ke.visible=!1,f.add(Ke);let B=new yt({color:12376319,transparent:!0,opacity:.22,blending:_n,depthWrite:!1,fog:!1}),C=[];for(let N=xs.z0+1.2;N<11.2;N+=2)[[65.95,Math.PI/2],[67.45,-Math.PI/2]].forEach(([de,We])=>{let He=Ur({wood:B});He.position.set(de,1,N),He.rotation.y=We,He.scale.setScalar(.85),He.traverse(Se=>{Se.isMesh&&(Se.material=B,Se.castShadow=!1,Se.receiveShadow=!1)}),Ke.add(He),C.push(He)});let Q=new Ut;f.add(Q);let G=ka(2);Yc(G,1),G.visible=!1,f.add(G);let se=new yt({color:new xe(1,.9,.7).multiplyScalar(2),transparent:!0,opacity:0,depthWrite:!1,fog:!1}),ce=new yt({color:new xe(1.6,1.5,1.35),transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:mn}),ue=new De(new nn(3,24,12),ce);ue.renderOrder=50,ue.visible=!1,f.add(ue);let k=(()=>{let N=document.createElement("canvas");N.width=N.height=128;let de=N.getContext("2d"),We=de.createRadialGradient(64,64,0,64,64,64);We.addColorStop(0,"rgba(255,250,238,1)"),We.addColorStop(.35,"rgba(255,240,215,0.75)"),We.addColorStop(1,"rgba(255,230,200,0)"),de.fillStyle=We,de.fillRect(0,0,128,128);let He=new tn(N);return He.colorSpace=Lt,He})(),w=new Nn(new Gn({map:k,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,fog:!1}));w.position.set(Qo.x+.4,1.3,Qo.z),w.renderOrder=40,w.visible=!1,f.add(w);let E=document.getElementById("fear"),O=document.getElementById("eyelids"),ne=null,F=(()=>{let N=new tn(Bt.facade("#9aa0a8",!0));return N.colorSpace=Lt,N.wrapS=N.wrapT=Ln,N.repeat.set(1,3),new tt({map:N,roughness:.95,emissive:1708044,emissiveMap:N,flatShading:!0})})(),fe=[{at:1,box:[50.4,9.6,7,2.6],axis:"x"},{at:2,box:[52.7,2.6,-2.6,9.6],axis:"z"},{at:3,box:[63.8,9.6,-4.7,2.6],axis:"x"}].map(N=>{let[de,We,He,Se]=N.box,rt=new De(new Ct(N.axis==="x"?.6:Se+.4,12,N.axis==="x"?Se+.4:.6),F);return rt.position.set(de,-12.5,He),rt.castShadow=!0,f.add(rt),{...N,m:rt,k:0,col:N.axis==="x"?{minX:de-.3,maxX:de+.3,minZ:He-Se/2,maxZ:He+Se/2}:{minX:de-Se/2-.2,maxX:de+Se/2+.2,minZ:He-.3,maxZ:He+.3}}}),Oe=[],be={};function X(){t.stopAll(Oe),Oe=[],be={};let N=(de,We)=>(We&&(be[de]=We,Oe.push(We)),We);N("drone",t.loop("drone",{volume:0})),N("whispers",t.loop("whispers",{volume:0})),N("heart",t.loop("heartbeat",{volume:0})),N("yells",t.loop("yells",{object:l[0],volume:.4,ref:2,rate:.95})),N("wind",t.loop("wind",{volume:.09}))}let S={phase:"idle"},ae=new b,Ce=new b,Xe=(N,de=5)=>s.hint(N,de),je=(N,de)=>s.thought(N,de),ke=Lm(i,f,je,()=>{!S.ended&&!d()&&(S.ended=!0,c.stop(),r.set(null),ie("done"),ee&&ee("home"))});{let N=new Bi,de=ke.anchors();v.forEach(We=>{N.setFromObject(We).expandByScalar(.6),We.userData.calm=de.some(He=>N.containsPoint(He))})}function ie(N){S.phase=N,S.t=0}function ct(N,de){let We=0;return Qa.forEach((He,Se)=>{N>=He.x0-.3&&N<=He.x1+.3&&de>=He.z0-.3&&de<=He.z1+.3&&(We=Se)}),We}let Et=N=>[...bE.slice(ct(N.x,N.z)).map(de=>new b(de.x,.05,de.z)),Qo];function V(){Object.assign(S,{phase:"idle",t:0,warp:0,cp:0,stamina:1,tired:!1,flash:0,nextFlash:10,carry:0,ended:!1,screamed:!1,stepT:0,whistleT:5,yellT:3,whisperT:4,loops:0,inLoop:!1,loopDone:!1,hide:"none",sawGhost:!1,saidBoss:!1,saidShadow:!1,hideT:0,shadowZ:0,shadowK:0,shadowDone:!1,blink:0,collapse:0,seenBy:0}),v.forEach(N=>{N.position.copy(N.userData.home),N.rotation.set(0,0,0),N.scale.set(1,1,1)}),_.forEach((N,de)=>{N.position.y=.001*de}),q.forEach(N=>{N.position.set(0,0,0),N.updateMatrix()}),l.forEach(N=>Yc(N,0)),j.opacity=0,re.intensity=0,ye.intensity=0,Ie.intensity=0,Te.forEach(N=>{N.gone=!1,N.o=0,N.mat.opacity=0,N.w.visible=!1}),Ae.forEach(N=>{N.done=!1,N.state=0,N.mat.opacity=0,N.g.visible=!1}),Ve.opacity=0,Me.opacity=0,lt.visible=le.visible=!1,Fe.visible=Ke.visible=!1,G.visible=!1,fe.forEach(N=>{N.k=0,N.m.position.y=-12.5}),Pe.forEach(N=>{N.material.opacity=0}),ke.reset(),ue.visible=!1,ce.opacity=0,w.visible=!1,w.material.opacity=0,E&&(E.style.opacity=0),O&&O.style.setProperty("--lid","0"),Ye(),o.hugMode=!1}function Ye(){ne!==null&&(u.fov=ne,u.updateProjectionMatrix(),ne=null)}function me(){V(),X(),ke.start(!d()),n.canMove=!0,ie("chase"),S.warp=wE,S.carry=i.carryFear||0,i.carryFear=0,S.nextFlash=10,c.speed=2.1,c.active=!0,c.rewind(7),l.forEach(N=>{N.visible=!0}),n.jogAllowed=!0,o.glow=.6,r.set(Et),s.subtitle('Police: "Ruko! Stop right there!"',2.5)}function Re(){t.stopAll(Oe),Oe=[],be={},c.stop(),re.intensity=0,ye.intensity=0,Ie.intensity=0,E&&(E.style.opacity=0),Ye(),n.speedScale=1,n.canRun=!0,o.hugMode=!1,V()}function qe(N=.35){S.blink=N}function $e(){ke.onCaught(),ie("caught"),s.fade(!0),c.stop(),t.oneShot("scream",{volume:.5,rate:1.2})}function Mt(N,de,We=!0){if(S.warp>.001&&S.phase!=="collapse"&&(v.forEach(Le=>{if(Le.userData.calm&&!d())return;let bt=S.warp,ze=Le.userData.ph;Le.rotation.z=bt*.07*Math.sin(de*.6+ze),Le.rotation.x=bt*.05*Math.sin(de*.45+ze*1.3),Le.scale.y=1+bt*.18*Math.sin(de*.9+ze)}),y.forEach((Le,bt)=>{Le.rotation.x=.3*S.warp*Math.sin(de*2.3+bt)})),S.phase==="idle"||S.phase==="done"||!We)return;S.t+=N,n.headWorld(ae);let He=ct(ae.x,ae.z);He>S.cp&&(S.cp=He,fe.forEach(Le=>{Le.at===He&&Le.k===0&&(Le.k=.001,t.oneShot("thunder",{volume:.35,rate:.6}))})),S.warp=Math.min(1,S.warp+N/12);let Se=St(Ft((S.t-3)/9,0,1));l.forEach(Le=>{Yc(Le,Se),Lr(Le,de,N)}),!S.screamed&&S.t>7&&S.phase==="chase"&&(S.screamed=!0,t.oneShot("scream",{object:l[0],volume:.7,ref:3}),je("They're not men anymore.",3.5)),j.opacity=S.warp*(.6+.4*Math.sin(de*2.3));let rt=S.phase==="chase"&&S.hide==="coming"&&(n.keys.KeyR||n.qHeldXR||o.hugging);o.glow=rt?.02:.6+.4*S.warp,o.heavy=Math.min(1,S.t/40),re.pos.set(ae.x,.9,ae.z),re.intensity=rt?.15:3+S.warp*2.5+Math.sin(de*5)*.3,ye.pos.copy((S.hide==="coming"?G:l[0]).position).setY(2.2),ye.intensity=S.warp*(S.inLoop?0:5);let Ht=n.moving,wn=n.running&&Ht;S.stamina=Ft(S.stamina+(wn?-N/6:N/4),0,1),S.stamina<=.01&&(S.tired=!0),S.tired&&S.stamina>.35&&(S.tired=!1),n.canRun=!S.tired,n.speedScale=1-.06*o.heavy;let vn=S.phase==="chase"&&!S.inLoop&&S.hide!=="coming";c.active=vn,c.speed=Ht?2.1:2.7;let ln=vn?c.update(N):S.hide==="coming"?G.position.distanceTo(Ce.set(ae.x,0,ae.z)):99;l.forEach(Le=>{Le.visible=!S.inLoop&&S.hide!=="coming"&&S.phase!=="collapse"});let Qt=Math.max(0,1-ln/10);if(be.drone&&be.drone.setVolume(.3*S.warp*S.warp),be.whispers&&be.whispers.setVolume(.5*S.warp*(.4+Qt)+(S.inLoop?.3:0)),be.heart&&(be.heart.setVolume(Math.max(.3+.7*Math.max(Qt,rt?.9:0),S.carry*Math.max(0,1-S.t/8))),be.heart.setPlaybackRate(Math.max(1+Qt*.9,2*S.carry*Math.max(0,1-S.t/8)))),be.yells&&be.yells.setVolume(vn?.4:0),r.urgent=!Ht&&vn,vn&&(S.stepT-=N,S.stepT<=0&&(S.stepT=.36,l.forEach((Le,bt)=>t.oneShot("step",{object:Le,volume:.15,rate:.7+bt*.1,ref:1.2}))),S.whistleT-=N,S.whistleT<=0&&(S.whistleT=7+Math.random()*4,t.oneShot("whistle",{object:l[0],volume:.75,ref:3,rate:1-S.warp*.25})),S.yellT-=N,S.yellT<=0&&(S.yellT=6+Math.random()*5,s.subtitle(['Police: "Ruko! Stop!"','Police: "Chor! Pakdo! Grab the thief!"',`Police: "You can't run forever!"`,'"\u2026stop\u2026 stop\u2026 stop\u2026"'][Math.floor(Math.random()*4)],2.5),t.oneShot("yells",{object:l[0],volume:.55,ref:2,rate:.8+Math.random()*.3}))),S.whisperT-=N,S.whisperT<=0&&S.warp>.5&&S.phase==="chase"){S.whisperT=5+Math.random()*5;let Le=['"\u2026chor\u2026"','"\u2026ten rupees\u2026 this is six\u2026"','"\u2026four more pieces\u2026"','"\u2026same time tomorrow\u2026"','"\u2026everyone has scraps\u2026"'];s.subtitle(Le[Math.floor(Math.random()*Le.length)],2.2)}let Ni=Math.min(1,Qt*1.3+S.flash*.3+(rt?.35:0));if(E&&(E.style.opacity=String(Ni*(.75+.25*Math.sin(de*(4+Qt*6))))),n.xr||(ne===null&&(ne=u.fov),u.fov=ne+Qt*5*Math.sin(de*2.5)+S.warp*3,u.updateProjectionMatrix()),S.blink>0&&(S.blink-=N,O&&O.style.setProperty("--lid",String(Math.sin(Math.max(0,S.blink)/.35*Math.PI)*1)),S.blink<=0&&O&&O.style.setProperty("--lid","0")),fe.forEach(Le=>{Le.k>0&&Le.k<1&&(Le.k=Math.min(1,Le.k+N/1.6),Le.m.position.y=-12.5+12.5*St(Le.k))}),Te.forEach(Le=>{let bt=Math.hypot(Le.w.position.x-ae.x,Le.w.position.z-ae.z);!Le.gone&&bt<1.4&&(Le.gone=!0,t.oneShot("whispers",{object:Le.w,volume:.25,rate:1.3,ref:1}));let ze=!Le.gone&&S.warp>.3&&bt<14?.92:0;if(Le.o=Yt(Le.o,ze,Le.gone?6:1.5,N),Le.mat.opacity=Le.o,Le.w.visible=Le.o>.01,Le.w.visible){let L=Le.w.userData.J,Z=Math.atan2(ae.x-Le.w.position.x,ae.z-Le.w.position.z),I=Math.atan2(Math.sin(Z-Le.w.rotation.y),Math.cos(Z-Le.w.rotation.y));L.head.rotation.y=Yt(L.head.rotation.y,Ft(I,-1.3,1.3),3,N),L.spine.rotation.y=Yt(L.spine.rotation.y,Ft(I*.4,-.5,.5),2,N),L.head.rotation.x=.15,Di(Le.w,de,N)}}),Ae.forEach(Le=>{let bt=Math.hypot(Le.x-ae.x,Le.z-ae.z),ze=d()&&!Le.done&&bt<11&&S.warp>.3?.2+.1*Math.sin(de*9)*Math.sin(de*2.3):0;d()&&!Le.done&&bt<2.6&&(Le.done=!0,t.oneShot("sewing",{volume:.55,rate:1.4}),S.sawGhost||(S.sawGhost=!0,je("The machines\u2026 they followed me.",3.5))),Le.state=st(Le.state,ze,N*(Le.done?6:3)),Le.mat.opacity=Le.state,Le.g.visible=Le.state>.01,Le.m.userData.needle.position.y=.16+.03*Math.sin(de*40)}),!S.shadowDone&&(He===1||He===2)&&S.warp>.4){let Le=He===1,bt=Le?ae.z:ae.x;S.shadowK||(S.shadowZ=bt,S.shadowSeg=He),S.shadowSeg!==He&&(S.shadowSeg=He,S.shadowZ=bt),S.shadowK=Math.min(1,S.shadowK+N/14);let ze=st(4,.9,S.shadowK);S.shadowZ=Yt(S.shadowZ,bt,ze,N);let L=St(Ft((S.shadowK-.45)/.4,0,1));if([lt,le].forEach((Z,I)=>{Z.visible=!0,Le?(Z.position.set(51.43,0,S.shadowZ),Z.rotation.y=Math.PI/2):(Z.position.set(S.shadowZ,0,-5.97),Z.rotation.y=0);let z=I?1.45:1.3;Z.scale.set(z*(1+L*(I?.15:0)),z*(1+.6*L),.04),Cs(Z,bt*2.2,.8)}),Ve.opacity=.75*(1-L)*Math.min(1,S.shadowK*4),Me.opacity=.8*L,L>.6){let Z=le.userData.J;Z.shR.rotation.set(-1.9*(L-.6)/.4,0,-.3),Z.elR.rotation.x=-.2}L>.95&&!S.saidBoss&&(S.saidBoss=!0,s.subtitle('"Same time tomorrow."',3),t.oneShot("coins",{volume:.5,rate:.6})),S.shadowK>.3&&!S.saidShadow&&(S.saidShadow=!0,je("My shadow\u2026 it isn't keeping up.",3.5))}else He>=3&&!S.shadowDone&&(S.shadowDone=!0);if(S.shadowDone&&(Ve.opacity=Yt(Ve.opacity,0,4,N),Me.opacity=Yt(Me.opacity,0,4,N),Me.opacity<.01&&(lt.visible=le.visible=!1)),d()||ke.update(N,de,ae,He,S.warp),d()&&He===3&&!S.loopDone&&!S.inLoop&&ae.z>xs.z0+.5&&(S.inLoop=!0,je("Wait. Where are they?",3)),S.inLoop&&(ae.z>xs.trigger&&S.loops<2&&(n.dolly.position.z-=xs.period,S.loops++,qe(.35),t.oneShot("heartbeat",{volume:.9}),t.oneShot("whispers",{volume:.4,rate:.8}),S.loops===1&&(Fe.visible=!0,s.subtitle('"Four hundred pieces."',3),setTimeout(()=>je("I've been here.",3),900)),S.loops===2&&(Ke.visible=!0,je("The same lane. Again.",3),Q.position.set(66.7,1.2,2),be.loopSew=t.loop("sewing",{object:Q,volume:.6,ref:3}),be.loopFac=t.loop("factory",{object:Q,volume:.5,ref:4}),be.loopSew&&Oe.push(be.loopSew),be.loopFac&&Oe.push(be.loopFac))),C.forEach((Le,bt)=>{Le.userData.ph+=N*26,Le.userData.needle.position.y=.16+Math.sin(Le.userData.ph+bt)*.02,Le.userData.wheel.rotation.x-=N*26}),S.loops>=2&&ae.z>8.5&&(S.inLoop=!1,S.loopDone=!0,Fe.visible=!1,Ke.visible=!1,be.loopSew&&be.loopSew.stop(),be.loopFac&&be.loopFac.stop(),c.active=!0,c.rewind(6),je("They're back.",2.5))),d()&&He===4&&S.hide==="none"&&ae.x>68.8&&(S.hide="coming",S.hideT=0,o.hugMode=!0,G.visible=!0,G.position.set(80.5,0,12.7),G.rotation.y=-Math.PI/2,G.userData.walk=1,t.oneShot("scream",{object:G,volume:.5,rate:.7,ref:4}),je("Something is coming. It follows the light.",3.5),Xe(n.xr?"Hold the bag to your chest to hide the light \u2014 and stay still":"Hold R to hide the light \u2014 and stay still",7)),S.hide==="coming"){S.hideT+=N;let Le=G.position.x>ae.x+.4,bt=S.sidestep?ae.z>12.7?11.75:13.65:12.7;G.position.z=Yt(G.position.z,bt,2,N),G.position.x-=N*(rt?.7:1.15),G.userData.stride+=N*.9,Lr(G,de,N);let ze=G.userData.J;ze.head.rotation.y=Math.sin(de*.9)*.7;let L=Math.hypot(G.position.x-ae.x,G.position.z-ae.z);Le&&L<2.4&&rt&&!Ht&&(S.sidestep=!0),Le&&L<1&&!(rt&&!Ht)&&!i.noCatch&&($e(),S.hide="none",G.visible=!1,S.sidestep=!1),!Le&&G.position.x<ae.x-3&&(S.hide="passed",S.sidestep=!1,o.hugMode=!1,G.visible=!1,je("It didn't see me.",3),c.active=!0,c.rewind(9))}S.nextFlash-=N,S.nextFlash<=0&&S.phase==="chase"&&!S.inLoop&&S.hide!=="coming"&&(S.nextFlash=7+Math.random()*6,S.flash=.7,S.thunderAt=S.t+.5+Math.random()*.6),S.thunderAt&&S.t>S.thunderAt&&(S.thunderAt=0,t.oneShot("thunder",{volume:.5})),S.flash=Math.max(0,S.flash-N*2.5);let hi=He===4?Ft((ae.x-70)/10,0,1):0;switch(Ie.intensity=hi*6+S.collapse*10,S.phase){case"chase":ln<.9&&vn&&!ke.safe&&!i.noCatch&&$e(),!d()&&ke.opened&&!S.ended&&(S.ended=!0,c.stop(),r.set(null),ie("done"),ee&&ee("home")),ae.x>Qo.x-1.1&&ae.z>11.4&&!S.ended&&d()&&S.hide==="passed"&&(ie("collapse"),Wt());break;case"caught":if(S.t>.9&&S.t-N<=.9){let Le=SE[S.cp];n.place(Le.x,Le.z,Le.yaw,n.eye),c.rewind(8),S.stamina=1,S.tired=!1,S.cp===3&&(S.inLoop=!1,S.loops=0,Fe.visible=Ke.visible=!1,be.loopSew&&be.loopSew.stop(),be.loopFac&&be.loopFac.stop())}S.t>1.2&&(s.fade(!1),ie("chase"),je("No. Again. Run.",2.5));break;case"collapse":{S.collapse=Math.min(1,S.t/6);let Le=S.collapse;n.canMove=!1,v.forEach((bt,ze)=>{let L=bt.userData,Z=Math.max(0,Le*1.4-ze%7*.06);bt.position.y=L.home.y+Z*Z*30*L.lift,bt.rotation.z+=N*L.spin*Le,bt.rotation.x+=N*L.spin*.5*Le}),q.forEach(bt=>{bt.position.y=Le*Le*18,bt.updateMatrix()}),_.forEach(bt=>{bt.position.y=-Le*Le*6}),w.visible=!0,w.material.opacity=Math.min(.95,.3+Le*2.5),w.scale.setScalar(3+60*Le*Le),Ie.pos.set(Qo.x,1.6,Qo.z),Ie.intensity=6+30*Le,ue.visible=!0,ue.position.copy(ae),ce.opacity=Ft((Le-.55)/.4,0,1),S.t>.4&&S.t-N<=.4&&(t.oneShot("thunder",{volume:.6,rate:.5}),je("Home\u2026",2.5)),S.t>1.8&&S.t-N<=1.8&&s.subtitle('"Ten rupees. This is six."',1.8),S.t>3&&S.t-N<=3&&s.subtitle('"Same time tomorrow."',1.8),S.t>4.2&&S.t-N<=4.2&&s.subtitle('"Chor\u2026"',1.6),S.t>5.2&&S.t-N<=5.2&&s.fade(!0,!0),S.t>6.8&&!S.ended&&(S.ended=!0,r.set(null),ie("done"),ee&&ee("void"));break}}}function Wt(){c.stop(),r.set(null),l.forEach(N=>{N.visible=!1}),i.hideSpace&&i.hideSpace("home"),E&&(E.style.opacity=0),be.yells&&be.yells.setVolume(0),be.heart&&be.heart.setVolume(.2),t.oneShot("doorWood",{volume:.7})}function fn(N=n.dolly.position.x){let de=St(Ft((N-73)/8,0,1))*(1-(S.collapse||0)),We=S.warp||0,He=S.flash||0,Se=S.collapse||0,rt=S.inLoop?1:0,Ht=1-ke.dim;return{fog:new xe(11569760).lerp(new xe(1449259),Math.min(1,We*1.6)).lerp(new xe(10129600),He*.5).lerp(new xe(16183004),Se).lerp(new xe(3419176),de*.5),doorWarmth:de,density:st(st(st(.055,.11,We),.2,rt),.05,de)*(1-Se*.7),sun:(st(2.2,0,Math.min(1,We*2.5))+He*2.2)*Ht,hemi:(st(.75,.2,We)+He*1.3)*Ht+Se*2.5,hemiSky:new xe(12109016).lerp(new xe(5909098),We).lerp(new xe(16773852),Se),hemiGround:new xe(5915696).lerp(new xe(1180682),We).lerp(new xe(15259840),Se),sky:st(1,.18,We)*Ht+Se*2.5,exposure:st(1,.85,We)+Se*.3,skyTint:new xe(1,1,1).lerp(new xe(.55,.08,.12),Math.min(1,We*1.3)).lerp(new xe(.8,.78,1),He*.6).lerp(new xe(1,.96,.9),Se)}}let ee=null;return{root:f,update:Mt,start:me,stop:Re,reset:V,atmosphere:fn,name:"nightmare",zone:{minX:ja.x1+.4},onEnd(N){ee=N},getColliders(){return[...g,...fe.filter(N=>N.k>=1).map(N=>N.col),...ke.colliders()]},get phase(){return S.phase},get stamina(){return S.stamina},get S(){return S},lanes:ke,sceneStart(N){let de=N?[[66.7,2],[66.7,12.7],[72,12.7],[76,12.7],[79.8,12.7]]:[[33,3],[37,6],[39.5,8.3],[41,8.3]],[We,He]=de[de.length-1];n.place(We,He,-Math.PI/2,1.52),n.canMove=!0,c.trail=de.map(([Se,rt])=>new b(Se,0,rt)),c.rewind(N?10:7),N&&(Object.assign(S,{cp:4,loopDone:!0,inLoop:!1,hide:"passed",shadowDone:!0,warp:1,sawGhost:!0}),Ae.forEach(Se=>{Se.done=!0}),ke.S.sky=1,ke.S.win=3,ke.S.winT=9,ke.arms.forEach(Se=>{Se.done=!0}))},skip(){if(S.phase!=="chase"){S.t=99;return}S.cp<3?(n.place(66.7,-2.5,Math.PI,n.eye),S.cp=3):S.inLoop?S.loops<2?n.place(66.7,xs.trigger+.2,Math.PI,n.eye):n.place(66.7,9,Math.PI,n.eye):d()&&S.hide!=="passed"?S.hide==="none"?n.place(69.5,12.7,-Math.PI/2,n.eye):(G.position.x=n.dolly.position.x-3.5,S.hide="coming"):!d()&&ae.x>80?ke.forceOpen():n.place(d()?81.2:80.6,12.7,-Math.PI/2,n.eye)}}}var Tf={x0:82,x1:88,z0:10,z1:15.4,h:2.8,door:{z0:12,z1:13.4}};function Nm(i){let{scene:e,audio:t,interactor:n,player:s,ui:r,thread:o,hands:a,bagCtl:l,lights:c}=i,u=()=>i.edition==="extra",h=new it;h.name="home",e.add(h);let{x0:d,x1:f,z0:g,z1:v,h:m}=Tf,p=(d+f)/2,_=(g+v)/2,x=f-d,M=v-g,T=Tf.door.z0,P=Tf.door.z1,R=2,U=new an,Y=(()=>{let ee=Bt.facade("#9a7a5a"),N=ee.getContext("2d");N.fillStyle="rgba(70,50,30,.25)",N.fillRect(0,0,512,512);let de=new tn(ee);return de.colorSpace=Lt,de.wrapS=de.wrapT=Ln,de})();{let ee=Y.image.getContext("2d");ee.fillStyle="#8a6c4e",ee.fillRect(0,0,512,512);for(let N=0;N<40;N++)ee.fillStyle=`rgba(${40+Math.random()*40},${30+Math.random()*20},20,${.08+Math.random()*.12})`,ee.beginPath(),ee.arc(Math.random()*512,Math.random()*512,20+Math.random()*80,0,7),ee.fill();ee.fillStyle="rgba(30,20,12,.35)",ee.fillRect(0,430,512,82),Y.needsUpdate=!0}let y=(ee,N)=>{let de=Y.clone();return de.needsUpdate=!0,de.repeat.set(ee/3,N/3),new tt({map:de,roughness:1})},A=(ee,N,de,We,He,Se)=>{let rt=new De(new mt(ee+.08,N+.04),y(ee,N));rt.position.set(de,We,He),rt.rotation.y=Se,rt.receiveShadow=!0,h.add(rt)};A(x,m,p,m/2,g,0),A(x,m,p,m/2,v,Math.PI),A(M,m,f,m/2,_,-Math.PI/2),A(T-g,m,d,m/2,(g+T)/2,Math.PI/2),A(v-P,m,d,m/2,(P+v)/2,Math.PI/2),A(P-T,m-R,d,(m+R)/2,(T+P)/2,Math.PI/2);let q=Bt.dirt().clone();q.needsUpdate=!0,q.repeat.set(2,2);let J=new De(new mt(x,M),new tt({map:q,color:10518624,roughness:1}));J.rotation.x=-Math.PI/2,J.position.set(p,.004,_),J.receiveShadow=!0,h.add(J);let K=Bt.tin().clone();K.needsUpdate=!0,K.repeat.set(3,2);let pe=new De(new mt(x,M),new tt({map:K,side:At,metalness:.3,roughness:.7}));pe.rotation.x=Math.PI/2,pe.position.set(p,m,_),h.add(pe);for(let ee=d+.8;ee<f;ee+=1.6)U.add(te.box(.08,.1,M),Ne(3811868,{roughness:1}),ee,m-.06,_);let j=new tt({map:(()=>{let ee=new tn(Bt.facade("#8a7a64",!0));return ee.colorSpace=Lt,ee.wrapS=ee.wrapT=Ln,ee})(),roughness:.95,emissive:1708560}),he=(ee,N,de,We,He)=>{let Se=new De(new mt(ee,N),j);Se.position.set(de,We,He),Se.rotation.y=-Math.PI/2,h.add(Se)};he(T-g+1.4,4,d-.03,2,(g-1.4+T)/2),he(v-P+1,4,d-.03,2,(P+v+1)/2),he(P-T,4-R,d-.03,(4+R)/2,(T+P)/2);let re=new yt({color:new xe(1,.88,.62).multiplyScalar(2.2),transparent:!0,opacity:.9,side:At,fog:!1}),ye=new De(new mt(P-T,R),re);ye.position.set(d-.04,R/2,(T+P)/2),ye.rotation.y=-Math.PI/2,h.add(ye);let Ie=c.add({pos:new b(d-1,1.4,(T+P)/2),color:16765072,intensity:0,distance:7,space:"home",priority:2}),Te=new it;Te.position.set(d+.03,0,T),h.add(Te);let Ve=new De(new Ct(.04,R,P-T),zn(Bt.plywood()));Ve.position.set(0,R/2,(P-T)/2),Te.add(Ve);let lt=zn(Bt.plywood()),le=Ne(12105908,{metalness:.85,roughness:.25}),Me=new it;Me.position.set(85,0,12.7),h.add(Me);{let ee=new an;ee.add(An(.9,.6,.05,.02),lt,0,.3,0),[[-.4,-.25],[.4,-.25],[-.4,.25],[.4,.25]].forEach(([N,de])=>ee.add(te.box(.05,.3,.05),lt,N,.15,de)),[-.2,.2].forEach(N=>ee.add(te.cyl(.13,.11,.015,18),le,N,.36,0)),ee.add(te.cyl(.035,.03,.09,10),le,.35,.395,.18),ee.build(Me)}let _e=new it;_e.visible=!1,_e.position.set(0,.37,0),Me.add(_e);let Ae=new tt({color:14200944,roughness:.8});_e.add(new De(An(.24,.18,.1,.03,.01),Ae));let Ue=new De(new mt(1.6,.9),new tt({map:mi("check",1,128),roughness:1}));Ue.rotation.x=-Math.PI/2,Ue.position.set(86.6,.01,10.9),Ue.receiveShadow=!0,h.add(Ue);let Pe=Mn({child:!0,top:6974074,bottom:4868690,skin:5913126,outfit:"shirt",seed:301,scale:.95});h.add(Pe);let Fe=()=>{let ee=Pe.userData.J;["shL","shR","elL","elR","spine","neck","head"].forEach(N=>ee[N].rotation.set(0,0,0))};function Ke(){Vo(Pe),Fe(),nm(Pe),Pe.rotation.set(0,Math.PI/2,Math.PI/2),Pe.position.set(86.1,.16,10.95),Pe.userData.lying=!0}function B(){Vo(Pe),Fe(),Wo(Pe,{hug:!0}),Pe.rotation.set(0,-2.2,0),Pe.position.set(86.5,0,11.05),Pe.userData.lying=!1}Ke();let C=new De(new mt(1.3,.8),new tt({map:mi("stripe",3,128),roughness:1}));C.rotation.x=-Math.PI/2,C.position.set(84.55,.011,10.95),C.receiveShadow=!0,h.add(C),U.add(An(.95,.62,.12,.05),new tt({map:mi("paisley",4,128),roughness:1,flatShading:!0}),86.75,.04,10.9),U.add(An(.32,.42,.08,.04),Ne(14209216,{roughness:1}),85.85,.02,10.9);let Q=new it;Q.position.set(87.3,0,14.7),h.add(Q);{let ee=new an,N=Ne(9067066,{roughness:1,flatShading:!0});ee.add(te.box(.5,.3,.12),N,0,.15,-.2),ee.add(te.box(.12,.3,.5),N,-.2,.15,0),ee.add(te.box(.12,.3,.5),N,.2,.15,0),ee.add(te.cyl(.17,.13,.18,12),Ne(3815992,{metalness:.5,roughness:.5}),0,.4,0);for(let de=0;de<5;de++)ee.add(te.cyl(.02,.02,.5,5),Ne(4861984),.3+de*.03,.03,.3-de*.06,0,de,Math.PI/2);ee.build(Q)}let G=new De(new nn(.1,8,6),new yt({color:new xe(1,.4,.1).multiplyScalar(2)}));G.scale.y=.4,G.position.set(0,.06,0),Q.add(G);let se=Mn({female:!0,top:8010314,bottom:10115642,scarf:11879470,skin:7030320,seed:302,scale:1.3});Wo(se),se.position.set(86.55,0,14.15),se.rotation.y=Math.PI/2+.5,h.add(se);{let ee=se.userData.J;ee.shL.rotation.set(-.9,0,.2),ee.shR.rotation.set(-1,0,-.2),ee.elL.rotation.x=-.9,ee.elR.rotation.x=-.7}U.add(te.box(.25,.03,.9),lt,87.85,1.4,12.5);for(let ee=0;ee<4;ee++)U.add(te.cyl(.06,.05,.1,10),le,87.85,1.47,12.15+ee*.22);U.add(te.box(.8,.45,.5),Ne(4872810,{metalness:.4,roughness:.5}),82.7,.23,14.9),U.add(te.box(.82,.04,.52),Ne(3820122,{metalness:.4}),82.7,.47,14.9),U.add(te.cyl(.005,.005,3,4),Ne(3811866),84.6,2.25,10.35,0,0,Math.PI/2);let ce=[];for(let ee=0;ee<4;ee++){let N=new De(new mt(.4,.55),new tt({map:mi(["buti","stripe","check","border"][ee],ee+2,128),side:At,color:11575440}));N.geometry.translate(0,-.27,0),N.position.set(83.5+ee*.7,2.24,10.35),h.add(N),ce.push(N)}U.add(te.box(.3,.38,.02),Ne(12619818),85.5,1.8,v-.02);let ue=new De(new mt(.3,.21),new tt({map:yf?yf():null,roughness:.9,color:15919832}));ue.position.set(d+.02,1.45,11.3),ue.rotation.y=Math.PI/2,ue.rotation.z=.04,h.add(ue);let k=new it;k.position.set(87.85,1.43,13.3),h.add(k);{let ee=new an;ee.add(te.cyl(.05,.06,.06,10),Ne(9071146,{metalness:.6}),0,.03,0),ee.build(k)}let w=new De(new nn(.025,6,5),new yt({color:new xe(1,.75,.35).multiplyScalar(3)}));w.scale.y=1.8,w.position.y=.1,k.add(w);let E=new Nn(new Gn({map:Bt.dot(),color:new xe(1,.6,.25).multiplyScalar(.7),blending:_n,depthWrite:!1,transparent:!0,fog:!1}));E.scale.setScalar(.5),E.position.y=.1,k.add(E);let O=c.add({pos:new b(87.55,1.65,13.3),color:16749615,intensity:0,distance:7,decay:1.5,space:"home",priority:3}),ne=c.add({pos:new b(84.5,1.75,g+.2),color:7704504,intensity:0,distance:3.2,decay:2,space:"home",priority:.7}),F=c.add({pos:new b(87.2,.45,14.4),color:16738848,intensity:0,distance:3.5,decay:1.5,space:"home",priority:2}),fe=new De(new mt(.7,.5),new yt({color:1713216,fog:!1}));fe.position.set(84.5,1.8,g+.02),h.add(fe);for(let ee=1;ee<4;ee++)U.add(te.box(.015,.5,.02),Ne(1710618),84.15+ee*.175,1.8,g+.03);U.build(h,{cast:!0,receive:!0});let Oe=[{minX:d-.3,maxX:d,minZ:g,maxZ:T},{minX:d-.3,maxX:d,minZ:P,maxZ:v},{minX:d,maxX:f,minZ:g-.3,maxZ:g},{minX:d,maxX:f,minZ:v,maxZ:v+.3},{minX:f,maxX:f+.3,minZ:g,maxZ:v},{minX:84.5,maxX:85.5,minZ:12.35,maxZ:13.05},{minX:86.9,maxX:88,minZ:13.6,maxZ:15.4},{minX:82,maxX:83.2,minZ:14.5,maxZ:15.4},{minX:85.7,maxX:87.5,minZ:10.4,maxZ:11.4}],be={minX:d-.1,maxX:d+.1,minZ:T,maxZ:P},X=!1,S={phase:"idle"};n.add({object:Me,label:"Put the food down",enabled:()=>S.phase==="toTable",onPress:()=>V("giving"),maxDist:2.6}),n.add({object:C,label:"Lie down",enabled:()=>S.phase==="toMat",onPress:()=>V("lying"),maxDist:2.6}),n.add({object:ue,label:"Your page",enabled:()=>(S.phase==="rest"||S.phase==="toMat")&&!S.readPage,onPress:()=>{S.readPage=!0,r.thought('"When I grow up I will be a teacher."',4.5)},maxDist:2.2});let ae=[],Ce={},Xe=new Ut;h.add(Xe);function je(){t.stopAll(ae),ae=[],Ce={};let ee=(N,de)=>(de&&(Ce[N]=de,ae.push(de)),de);ee("fire",t.loop("fire",{object:Q,volume:.45,ref:1})),ee("drip",t.loop("drip",{volume:.1})),ee("wind",t.loop("wind",{volume:.04})),ee("yells",t.loop("yells",{object:Xe,volume:.55,ref:2,rate:.9})),ee("heart",t.loop("heartbeat",{volume:0}))}let ke=new b,ie=new b,ct=document.getElementById("eyelids"),Et=(ee,N=5)=>r.hint(ee,N);function V(ee){S.phase=ee,S.t=0,S.idle=0,S.enter=!0}function Ye(ee){X=ee,i.refreshColliders()}function me(){Object.assign(S,{phase:"idle",t:0,idle:0,holdC:0,readPage:!1,ended:!1,relief:0,calmT:0,enterFade:void 0}),_e.visible=!1,re.opacity=.9,ye.visible=!0,Te.visible=!1,O.intensity=0,F.intensity=0,ne.intensity=0,Ie.intensity=0,se.rotation.y=Math.PI/2+.5,se.userData.look=0,ct&&ct.style.setProperty("--lid","0"),Ke(),Re=0,Ye(!1)}let Re=0;function qe(){if(me(),je(),u()){ct&&ct.style.setProperty("--lid","1"),r.fade(!1),s.place(d+.75,12.1,-Math.PI/2-.25,.82),s.canMove=!1,s.pitch=-.1,i.police.forEach(ee=>{ee.visible=!1}),l.glow=0,l.heavy=0,l.stow=0,s.speedScale=1,s.canRun=!1,ye.visible=!1,Te.visible=!0,Ye(!0),B(),se.rotation.y=-.2,Ce.yells&&Ce.yells.setVolume(0),V("wake");return}r.fade(!0),setTimeout(()=>r.fade(!1),450),s.place(d+.9,(T+P)/2,-Math.PI/2,1.52),i.police.forEach(ee=>{ee.visible=!1}),l.glow=0,l.heavy=0,s.speedScale=1,s.canRun=!1,ye.visible=!1,Te.visible=!0,Ye(!0),t.oneShot("doorWood",{volume:.8}),V("arrive")}function $e(){t.stopAll(ae),ae=[],Ce={},ct&&ct.style.setProperty("--lid","0")}function Mt(ee,N,de=!0){if(re.opacity=.75+.25*Math.sin(N*3),S.phase!=="idle"&&S.phase!=="done"&&de){if(S.calmT+=ee,S.relief=St(Ft(S.calmT/(u()?4:7),0,1)),Ce.heart){let Se=u()?0:Math.max(0,1-S.calmT/8);Ce.heart.setVolume(.75*Se*Se),Ce.heart.setPlaybackRate(Math.max(.6,1.9-S.calmT*.17))}!u()&&S.calmT>1.3&&S.calmT-ee<=1.3&&t.oneShot("exhale",{volume:.55})}if(Ie.intensity=S.phase==="idle"?5:0,w.scale.set(1+Math.sin(N*17)*.1,1.8+Math.sin(N*11)*.3,1),Di(se,N,ee),S.phase==="idle"||S.phase==="done"||!de)return;S.t+=ee,S.idle+=ee;let We=S.enter;S.enter=!1,s.headWorld(ke),ne.intensity=1.15-.3*S.relief;let He=.35+.65*S.relief;if(O.intensity=5.8*He*(1+.05*Math.sin(N*9)*Math.sin(N*3.1)),F.intensity=(1.8+.2*Math.sin(N*7))*He,u())Ce.yells&&Ce.yells.setVolume(0);else if(Xe.position.set(st(66,96,Math.min(1,S.t/9)),1.5,12.7),Ce.yells&&Ce.yells.setVolume(Math.max(0,.55*(1-S.t/10))),S.t>.5&&S.t<7&&S.phase==="arrive"){let Se=Math.floor(S.t*3);Se!==S.lastStep&&(S.lastStep=Se,t.oneShot("step",{object:Xe,volume:.15,ref:1.2}))}if(ce.forEach((Se,rt)=>{Se.rotation.x=.04*Math.sin(N*.9+rt)}),Pe.userData.lying)Pe.rotation.z=Math.PI/2+.01*Math.sin(N*1.4);else{let Se=Pe.userData.J,rt=Math.atan2(ke.x-Pe.position.x,ke.z-Pe.position.z);Se.head.rotation.y=Yt(Se.head.rotation.y,Ft(Math.atan2(Math.sin(rt-Pe.rotation.y),Math.cos(rt-Pe.rotation.y)),-1,1),3,ee)}switch(S.phase){case"wake":{ct&&ct.style.setProperty("--lid",String(1-St(Ft((S.t-.6)/3.6,0,1)))),se.userData.look=-.4,S.t>2&&S.t-ee<=2&&r.thought("\u2026Home?",2.5),S.t>4.8&&S.t-ee<=4.8&&r.subtitle(`Mother: "You're late. We waited."`,3.5),S.t>7.2&&S.t-ee<=7.2&&r.thought("The bag. It's still here.",3),S.t>8.5&&V("standing");break}case"standing":{let Se=St(Math.min(1,S.t/1.4));s.eye=st(.82,1.52,Se),S.t>1.5&&(s.canMove=!0,V("toTable"),o.set(new b(85,.5,12.7)),Et("Put the food on the table",6));break}case"eating":{We&&(s.canMove=!1,S.fromEye=s.eye),Re=S.t<1.2?S.t/1.2:S.t<3.2?1:Math.max(0,1-(S.t-3.2)/1.2),S.enterFade!==S.t<3.2&&(S.enterFade=S.t<3.2,r.fade(S.enterFade)),s.xr||(s.eye=S.t<3.2?st(S.fromEye,.85,St(Math.min(1,S.t/1))):st(.85,1.52,St(Ft((S.t-5.8)/1,0,1)))),S.t>1.3&&S.t-ee<=1.3&&(_e.visible=!1,Ke(),se.rotation.y=Math.PI/2+.5),S.t>1.6&&S.t-ee<=1.6&&r.subtitle("(later)",1.8),S.t>4.2&&S.t-ee<=4.2&&r.thought("Tonight, we ate.",3.5),S.t>5.5&&S.t-ee<=5.5&&r.subtitle(`Mother: "Sleep now. Seven o'clock tomorrow."`,3.5),S.t>7&&(V("toMat"),o.set(new b(84.55,.3,10.95)),Et("Lie down on your mat",6),s.canMove=!0);break}case"lying":{We&&(s.canMove=!1,S.from=s.dolly.position.clone(),S.fromYaw=s.yaw,S.fromEye=s.eye,o.set(null),l.stow=1);let Se=St(Math.min(1,S.t/2));s.dolly.position.lerpVectors(S.from,ie.set(84.55,S.from.y,10.95),Se),s.xr||(s.eye=st(S.fromEye,.32,Se),s.pitch=st(0,1.15,Se),s.yaw=st(S.fromYaw,-Math.PI/2,Se)),S.t>2.2&&(V("rest"),Et(s.xr?"When you are ready, squeeze both grips to close your eyes":"When you are ready, hold C to close your eyes",8));break}case"arrive":S.t>.8&&S.t-ee<=.8&&r.thought("Home.",2.5),S.t>3.2&&S.t-ee<=3.2&&r.subtitle("(the shouting runs past the door\u2026 and fades away)",3),S.t>5.4&&S.t-ee<=5.4&&r.thought("They didn't see me. I'm safe.",3),se.userData.look=Math.sin(S.t*.6)*.2-.5,s.canMove=S.t>2.5,S.t>6.5&&(s.canMove=!0,V("toTable"),o.set(new b(85,.5,12.7)),Et("Put the food on the table",6));break;case"giving":We&&(o.set(null),l.forceOpen=1,s.canMove=!1,S.from=s.dolly.position.clone(),S.fromYaw=s.yaw,S.to=Math.abs(S.from.x-85)>Math.abs(S.from.z-12.7)?new b(S.from.x<85?84.15:85.85,0,12.7):new b(85,0,S.from.z<12.7?11.95:13.45),S.toYaw=Math.atan2(-(85-S.to.x),-(12.7-S.to.z)));{let Se=St(Math.min(1,S.t/.6));if(ie.copy(S.from).lerp(S.to,Se),s.dolly.position.x=ie.x,s.dolly.position.z=ie.z,!s.xr){let rt=Math.atan2(Math.sin(S.toYaw-S.fromYaw),Math.cos(S.toYaw-S.fromYaw));s.yaw=S.fromYaw+rt*Se,s.pitch=st(s.pitch,-.45,Math.min(1,S.t*3))}}S.t>.5&&S.t<1.5&&a.set(0,{key:"serve",mode:"world",pos:new b(84.9,.5,12.75),rot:pi.toward(-1,ke,Me.position.clone().setY(.4)),pose:"grip",blend:.4}),S.t>.95&&S.t-ee<=.95&&(l.setContents({food:!1}),_e.visible=!0,t.oneShot("fabric",{volume:.6})),S.t>1.5&&S.t-ee<=1.5&&(l.forceOpen=0,a.hide(0)),S.t>1.6&&(se.rotation.y=Yt(se.rotation.y,Math.PI/2+1.2,1.5,ee)),S.t>2&&S.t-ee<=2&&r.thought("She doesn't ask where it came from.",4),S.t>4.5&&S.t-ee<=4.5&&r.subtitle('Mother: "Sit. Eat."',3),S.t>7&&V("eating");break;case"rest":s.keys.KeyC||S.xrClose?S.holdC+=ee:S.holdC=0,ct&&ct.style.setProperty("--lid",String(Math.min(.35,S.holdC/1.5*.35))),(S.holdC>1.2||S.idle>45)&&V("closing");break;case"closing":{let Se=Math.min(1,S.t/5);ct&&ct.style.setProperty("--lid",String(.35+.65*St(Se))),We&&(s.canMove=!1,Ce.machines=t.loop("factory",{volume:0}),Ce.machines&&ae.push(Ce.machines),Ce.sew=t.loop("sewing",{volume:0}),Ce.sew&&ae.push(Ce.sew)),Ce.machines&&Ce.machines.setVolume(.3*Se),Ce.sew&&Ce.sew.setVolume(.5*Se),Ce.fire&&Ce.fire.setVolume(.45*(1-Se)),S.t>.3&&S.t-ee<=.3&&r.thought("Tomorrow is a new day.",3.6),S.t>4.4&&S.t-ee<=4.4&&r.thought("\u2026",2.5),S.t>7.5&&!S.ended&&(S.ended=!0,V("done"),fn&&fn("finale"));break}}}function Wt(){let ee=S.relief||0;return{fog:new xe(657424).lerp(new xe(1314056),ee),density:st(.04,.03,ee),sun:0,hemi:st(.3,.58,ee),hemiSky:new xe(4868722).lerp(new xe(9071194),ee),hemiGround:new xe(1709080).lerp(new xe(3021840),ee),sky:.15,skyTint:new xe(.3,.3,.45),exposure:st(.94,1.08,ee)}}let fn=null;return{root:h,update:Mt,start:qe,stop:$e,reset:me,atmosphere:Wt,name:"home",zone:{minX:82},onEnd(ee){fn=ee},get S(){return S},getColliders(){return X?[...Oe,be]:Oe},get phase(){return S.phase},setXRClose(ee){S.xrClose=ee},skip(){let ee=S.phase;["arrive","giving","closing","wake","standing","eating","lying"].includes(ee)?S.t=99:ee==="toTable"?V("giving"):ee==="toMat"?V("lying"):ee==="rest"&&V("closing")}}}var Wn=new b(140,0,0);function Hm(i){let{scene:e,audio:t,interactor:n,player:s,ui:r,hands:o,bagCtl:a,lights:l}=i,c=new it;c.name="void",e.add(c),c.visible=!1;let u=(()=>{let B=99;return()=>(B=B*16807%2147483647,(B-1)/2147483646)})(),h=(()=>{let B=document.createElement("canvas");B.width=B.height=128;let C=B.getContext("2d"),Q=C.createRadialGradient(64,64,0,64,64,64);Q.addColorStop(0,"rgba(255,248,230,1)"),Q.addColorStop(.55,"rgba(255,236,200,.55)"),Q.addColorStop(1,"rgba(255,230,190,0)"),C.fillStyle=Q,C.fillRect(0,0,128,128);let G=new tn(B);return G.colorSpace=Lt,G})(),d=new De(new ir(1.6,40),new yt({map:h,transparent:!0,depthWrite:!1,fog:!1,color:new xe(.75,.72,.66)}));d.rotation.x=-Math.PI/2,d.position.copy(Wn).setY(.01),c.add(d);let f=new De(new nn(40,32,16),new qt({uniforms:{uA:{value:1}},transparent:!0,depthWrite:!1,side:mn,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec3 vD; void main(){ float k = smoothstep(0.12, -0.55, vD.y); gl_FragColor = vec4(0.52, 0.45, 0.4, 0.42 * k * uA); }"}));f.position.copy(Wn),f.renderOrder=-5,f.frustumCulled=!1,c.add(f);let g=[];for(let B=0;B<34;B++){let C=new Gn({map:Bt.dot(),color:new xe().setHSL(.08+u()*.08,.5,.82+u()*.12),transparent:!0,opacity:.1+u()*.2,depthWrite:!1,fog:!1}),Q=new Nn(C),G=12+u()*32,se=B%5*1.25+u()*.6;Q.userData={r:G,a:se,y:-14+u()*22,w:(u()-.5)*.02},Q.scale.setScalar(5+u()*12),c.add(Q),g.push(Q)}let v=()=>new yt({color:14214911,transparent:!0,opacity:0,blending:_n,depthWrite:!1,fog:!1}),m=[0,1,2,3,4].map(B=>{let C=v(),Q=Ur({wood:C});Q.traverse(se=>{se.isMesh&&(se.material=C,se.castShadow=!1,se.receiveShadow=!1)});let G=new it;return G.add(Q),c.add(G),G.userData={mat:C,m:Q,ph:B/5,a:B*1.26+.4,y:.6+B%3*.9,spin:(B%2?1:-1)*.15},G}),p=new Ut;c.add(p);let _=["buti","stripe","check","paisley","border","buti"].map((B,C)=>new yt({map:mi(B,C,128),side:At,transparent:!0,opacity:.9,fog:!1})),x=[];for(let B=0;B<46;B++){let C=new De(new mt(.34,.26),_[B%6]);C.userData={r:1.4+u()*9,a:u()*Math.PI*2,y:.3+u()*3.5,sp:(.15+u()*.35)*(u()<.5?-1:1),bob:u()*6,swoop:u()<.25},c.add(C),x.push(C)}let M=[];{let B=Q=>{let G=new Qi,se=Q?.95:.62;return G.moveTo(-.16,.3),G.lineTo(-.3,.22),G.lineTo(-.42,.02),G.lineTo(-.32,-.04),G.lineTo(-.22,.1),G.lineTo(-.22,.3-se),G.lineTo(.22,.3-se),G.lineTo(.22,.1),G.lineTo(.32,-.04),G.lineTo(.42,.02),G.lineTo(.3,.22),G.lineTo(.16,.3),G.quadraticCurveTo(0,.2,-.16,.3),new Po(G,6)},C=[15260872,14207192,13161696,14733496,13688008,15257800];for(let Q=0;Q<12;Q++){let G=new yt({color:new xe(C[Q%C.length]).multiplyScalar(.72),transparent:!0,opacity:0,side:At,depthWrite:!1,fog:!1}),se=new De(B(Q%3===0),G);c.add(se),se.userData={mat:G,r:2.5+u()*7,a:u()*Math.PI*2,y:.8+u()*3.5,sp:(.08+u()*.12)*(u()<.5?-1:1),ph:u()*6,s:.9+u()*.6},M.push(se)}}let T=[];{let B=(G,se={})=>new tt({color:G,roughness:.6,emissive:G,emissiveIntensity:.12,flatShading:!0,fog:!1,transparent:!0,...se}),C=()=>B(13224388,{metalness:.8,roughness:.25,emissiveIntensity:.05}),Q=(G,se,ce,ue,k,w,E=0,O=0,ne=0)=>{let F=new De(se,ce);return F.position.set(ue,k,w),F.rotation.set(E,O,ne),G.add(F),F};{let G=new it;Q(G,new Ot(.17,.15,.018,28),C(),0,0,0);let se=new nn(.07,12,8,0,Math.PI*2,0,Math.PI/2);Q(G,se,B(15920348),-.04,.008,.05).scale.set(1.2,.8,1),[[.08,-.06,14196784],[-.07,-.08,6982186],[.1,.06,11024410]].forEach(([ce,ue,k])=>{Q(G,new Ot(.045,.038,.035,16,1,!0),C(),ce,.026,ue),Q(G,new Ot(.042,.042,.004,16),B(k),ce,.034,ue)}),[0,1].forEach(ce=>Q(G,new Ot(.075,.075,.006,18),B(ce?13144140:14198888),-.07+ce*.03,.03+ce*.007,-.02-ce*.02,.18,0,.1)),Q(G,new nn(.018,8,6),B(12075034),0,.016,.11),G.userData.colors=[15920348,14196784,6982186,13144140,11024410],T.push(G)}{let G=new it;Q(G,new Ot(.15,.13,.014,24),C(),0,0,0),Q(G,new Ot(.045,.038,.16,16,1,!0),B(15265520,{opacity:.35,roughness:.1,emissiveIntensity:.02}),-.04,.087,0),Q(G,new Ot(.042,.036,.13,16),B(15771696),-.04,.073,0),Q(G,new nn(.03,10,6),B(16774364),-.04,.142,0).scale.set(1.3,.5,1.3),Q(G,new Ot(.004,.004,.2,5),B(14174826),-.025,.17,.01,0,0,-.25);let se=new bi(.03,.12,10);se.rotateX(Math.PI),Q(G,se,B(15916192),.07,.04,.02,Math.PI/2-.2,.6,0).scale.set(1,1,.8),Q(G,new Ct(.012,.003,.07),B(13150328),.1,.025,.07,0,.6,0),Q(G,new nn(.01,6,4),B(6986282),.06,.07,0),G.userData.colors=[15771696,16774364,15916192,14174826,6986282],T.push(G)}T.forEach(G=>{G.visible=!1,G.traverse(se=>{se.isMesh&&(se.castShadow=!1,se.userData.op=se.material.opacity)}),c.add(G)})}let P=Array.from({length:5},()=>{let B=new Nn(new Gn({map:Bt.dot(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return B.scale.setScalar(.12),c.add(B),B}),R=l.add({pos:Wn.clone().add(new b(0,1.6,-.4)),color:16767136,intensity:0,distance:3,space:"void",priority:3}),U=[],Y=new mt(.022,.022),y={phase:"idle"},A=[],q={};function J(){t.stopAll(A),A=[],q={};let B=(C,Q)=>(Q&&(q[C]=Q,A.push(Q)),Q);B("wind",t.loop("wind",{volume:.04,rate:.7})),B("sew",t.loop("sewing",{object:p,volume:0,ref:2})),B("fac",t.loop("factory",{volume:0})),B("kids",t.loop("children",{volume:.05,rate:.85}))}let K=new b,pe=new b,j=document.getElementById("eyelids");function he(B){y.phase=B,y.t=0}let re=[new b,new b],ye=[-1,1].map(B=>{let C=new b(-B*.45,.12,-.88).normalize(),Q=new b(-B*.86,.5,0);Q.addScaledVector(C,-Q.dot(C)).normalize();let G=C.clone().negate(),se=Q.clone().negate(),ce=new b().crossVectors(se,G);return new Vt().setFromRotationMatrix(new pt().makeBasis(ce,se,G),"YXZ")}),Ie=[new b,new b],Te=[new b,new b];function Ve(){Object.assign(y,{phase:"idle",t:0,tries:0,food:-1,ft:0,ended:!1}),T.forEach(B=>{B.visible=!1}),U.forEach(B=>c.remove(B)),U.length=0,R.intensity=0}let lt=new b(0,1.2,-.6);function le(B){y.food=B,y.ft=0,y.grabs=0,he("offer");let C=B===0?-1:1;T.forEach((G,se)=>{G.visible=se===B});let Q=T[B];Q.userData.from=Wn.clone().add(pe.set(C*4.5,2.2,-4)),Q.userData.mid=Wn.clone().add(pe.set(C*2,1.5,-1.6)),Q.userData.base=Wn.clone().add(lt),Q.position.copy(Q.userData.from),Q.scale.setScalar(1),Q.traverse(G=>{G.isMesh&&(G.material.opacity=G.userData.op)}),t.oneShot("fabric",{volume:.4,rate:.6})}function Me(){y.phase==="offer"&&y.ft>2.6&&(he("grab"),y.tries++)}function _e(B){let C=B.userData.colors;for(let Q=0;Q<70;Q++){let G=new De(Y,new yt({color:C[Q%C.length],transparent:!0,opacity:.95,side:At,depthWrite:!1,fog:!1}));G.position.copy(B.position).add(pe.set((u()-.5)*.3,u()*.12,(u()-.5)*.3)),G.userData.v=new b((u()-.5)*.6,.25+u()*.6,(u()-.5)*.6-.2),c.add(G),U.push(G)}}function Ae(){Ve(),J(),s.place(Wn.x,Wn.z,0,1.52),s.canMove=!1,s.bounds=null,a.stow=1,o.hide(),r.fade(!1),j&&j.style.setProperty("--lid","0"),he("wake")}function Ue(){t.stopAll(A),A=[],q={}}function Pe(B,C,Q=!0){if(!c.visible||(g.forEach(ue=>{let k=ue.userData;k.a+=k.w*B*3,ue.position.set(Wn.x+Math.cos(k.a)*k.r,k.y+Math.sin(C*.1+k.a)*.6,Wn.z+Math.sin(k.a)*k.r)}),y.phase==="idle"||!Q))return;y.t+=B,s.headWorld(K);let G=Math.min(1,y.t/4+(y.phase==="wake"?0:1));m.forEach((ue,k)=>{let w=ue.userData;w.ph=(w.ph+B*.055)%1,w.a+=B*w.spin;let E=Math.sin(w.ph*Math.PI),O=st(16,2.6,E);ue.position.set(Wn.x+Math.cos(w.a)*O,w.y+(1-E)*2,Wn.z+Math.sin(w.a)*O),ue.lookAt(K.x,ue.position.y,K.z),ue.scale.setScalar(st(.5,1.15,E)),w.mat.opacity=.32*E*E*G*(y.phase==="closing"?1-y.t/3:1),w.m.userData.ph+=B*24,w.m.userData.needle.position.y=.16+Math.sin(w.m.userData.ph)*.02,w.m.userData.wheel.rotation.x-=B*24,k===0&&p.position.copy(ue.position)});let se=Math.max(...m.map(ue=>Math.sin(ue.userData.ph*Math.PI)));q.sew&&q.sew.setVolume(.7*G*(y.phase==="closing",1)),q.fac&&q.fac.setVolume(.12*se*G+(y.phase==="closing"?y.t/3*.35:0)),x.forEach((ue,k)=>{let w=ue.userData;w.a+=B*w.sp;let E=w.swoop?st(.9,w.r,.5+.5*Math.sin(C*.4+w.bob)):w.r;ue.position.set(Wn.x+Math.cos(w.a)*E,w.y+Math.sin(C*.8+w.bob)*.3,Wn.z+Math.sin(w.a)*E),ue.rotation.set(C*.7+w.bob,C*.9+k,Math.sin(C+k)*.6),ue.material.opacity=.9*G}),M.forEach((ue,k)=>{let w=ue.userData;w.a+=B*w.sp;let E=w.r+Math.sin(C*.3+w.ph)*1.2;ue.position.set(Wn.x+Math.cos(w.a)*E,w.y+Math.sin(C*.5+w.ph)*.5,Wn.z+Math.sin(w.a)*E),ue.rotation.set(Math.sin(C*.7+w.ph)*.35,-w.a+(w.sp>0?0:Math.PI),Math.sin(C*.9+w.ph)*.25),ue.scale.set(w.s*(1+.08*Math.sin(C*1.3+w.ph)),w.s*(1-.06*Math.sin(C*1.3+w.ph)),w.s),w.mat.opacity=.42*G*(y.phase==="closing"?Math.max(0,1-y.t/3):1)});let ce=T[y.food];if(ce&&ce.visible){y.ft+=B;let ue=ce.userData;if(y.phase==="offer"){let w=St(Math.min(1,y.ft/2.6)),E=1-w;ce.position.set(E*E*ue.from.x+2*E*w*ue.mid.x+w*w*ue.base.x,E*E*ue.from.y+2*E*w*ue.mid.y+w*w*ue.base.y,E*E*ue.from.z+2*E*w*ue.mid.z+w*w*ue.base.z),w>=1&&(ce.position.y+=Math.sin(C*1.4)*.012),ce.rotation.y=(1-w)*2.5*(y.food?-1:1)+Math.sin(C*.5)*.15}let k=1;y.phase==="grab"&&(k=y.t<.7?1:Math.max(0,1-(y.t-.7)/.9),ce.position.y+=Math.sin(C*30)*.0015*(y.t>.7?1:0)),ce.traverse(w=>{w.isMesh&&(w.material.opacity=w.userData.op*k)}),R.pos.copy(ce.position).y+=.35,R.intensity=1.6*k,P.forEach((w,E)=>{let O=(C*.35+E/5)%1;w.position.copy(ce.position).add(pe.set(Math.sin(E*2+C)*.03,.06+O*.3,0)),w.material.opacity=(y.food===0?.22:.08)*k*(1-O),w.scale.setScalar(.05+O*.15)})}else R.intensity=0,P.forEach(ue=>{ue.material.opacity=0});switch(U.forEach(ue=>{ue.position.addScaledVector(ue.userData.v,B),ue.userData.v.y+=B*.25,ue.rotation.x+=B*3,ue.rotation.y+=B*2,ue.material.opacity=Math.max(0,ue.material.opacity-B*.45)}),y.phase){case"wake":y.t>1.5&&y.t-B<=1.5&&r.thought("It's so bright.",3),y.t>5&&y.t-B<=5&&r.thought("Is this\u2026 the sky?",3),y.t>7.5&&le(0);break;case"offer":y.ft>2&&y.ft-B<=2&&r.thought(y.food===0?"Food. A whole plate.":"Something sweet\u2026 cold\u2026",3),y.ft>2.6&&y.ft-B<=2.6&&r.hint(s.xr?"Pull the trigger to grab it":"Press E to grab it",6),y.ft>2.6&&(s.keys.KeyE||i.xrTrigger)&&Me(),y.ft>16&&Me();break;case"grab":{let ue=Math.min(1,y.t/1.4),k=.5-.5*Math.cos(ue*Math.PI*4);[0,1].forEach(w=>{let E=w?1:-1,O=ce?ce.position:pe.copy(Wn).add(lt);Te[w].set(O.x+E*.25,O.y-.05,O.z+.1+(w?.035:-.035)),Ie[w].set(Wn.x+E*.27,K.y-.5,Wn.z-.12),re[w].lerpVectors(Ie[w],Te[w],k),o.set(w,{key:"void-grab",mode:"world",pos:re[w],rot:ye[w],pose:"flat",curl:k>.75?[.22,.2,.22,.26,.12]:[.04,.03,.04,.07,0],blend:.15})}),y.t>.7&&y.t-B<=.7&&(r.hint(""),r.thought(y.tries===1?"No\u2014 wait\u2014":"Please\u2026",2.5)),y.t>1.2&&y.t-B<=1.2&&ce&&(_e(ce),t.oneShot("fabric",{volume:.7,rate:1.4})),y.t>1.6&&ce&&(ce.visible=!1),y.t>1.6&&y.t-B<=1.6&&o.hide(),y.t>3.2&&(y.tries>=2?he("closing"):le(1));break}case"closing":{let ue=Math.min(1,y.t/4);y.t>.4&&y.t-B<=.4&&r.thought("I'm so tired.",3),j&&j.style.setProperty("--lid",String(St(Ft((y.t-1.2)/2.6,0,1)))),y.t>4.3&&!y.ended&&(y.ended=!0,he("done"),Ke&&Ke("home"));break}}}function Fe(){let B=y.phase==="closing"?Math.min(1,y.t/4):0;return f.material.uniforms.uA.value=1-B,{fog:new xe(16050904).lerp(new xe(16775408),B),density:.004,sun:0,hemi:1.45+B,hemiSky:new xe(16773852),hemiGround:new xe(11051192),sky:2+B*1.7,skyTint:new xe(1,.95,.88),exposure:1+B*.05}}let Ke=null;return{root:c,update:Pe,start:Ae,stop:Ue,reset:Ve,atmosphere:Fe,name:"void",zone:{minX:120},onEnd(B){Ke=B},getColliders(){return[]},get phase(){return y.phase},skip(){y.phase==="offer"?(y.ft=99,Me()):y.t=99}}}var TE=`varying vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,RE=`uniform float uFade; uniform vec3 uFadeCol; uniform float uLid; uniform float uTunnel; varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  // eyelids (1 = shut): the gap narrows toward the middle of the view, a little curved like the page's lids
  float open = 1.0 - uLid;
  float edge = open * 0.92 - 0.08 + 0.22 * d.x * d.x * open;
  float lid = uLid > 0.001 ? smoothstep(edge - 0.12, edge + 0.02, abs(d.y)) : 0.0;
  // comfort vignette while the stick carries you: only the outer part of sight
  float ang = acos(clamp(-d.z, -1.0, 1.0));
  float tun = uTunnel * smoothstep(0.42, 0.95, ang);
  float a = max(lid, tun);
  float outA = uFade + (1.0 - uFade) * a;
  vec3 col = outA > 0.0001 ? uFadeCol * uFade / outA : vec3(0.0);
  gl_FragColor = vec4(col, outA);
  #include <colorspace_fragment>
}`,AE=i=>i*i*(3-2*i),CE=1.2,el=class{constructor({renderer:e,camera:t,player:n,interactor:s,hands:r,bagCtl:o,ui:a}){Object.assign(this,{renderer:e,camera:t,player:n,interactor:s,hands:r,bagCtl:o,ui:a}),this.active=!1,this.session=null,this.blurred=!1,this.frames=0,this.ctrl=[0,1].map(c=>e.xr.getController(c)),this.grip=[0,1].map(c=>e.xr.getControllerGrip(c)),this.hand=[null,null],this.state=[0,1].map(()=>({trigger:0,squeeze:0,stick:[0,0],turned:!1,stickBtn:!1}));let l=new Xt().setFromPoints([new b(0,0,0),new b(0,0,-1)]);this.rays=this.ctrl.map(c=>{let u=new yc(l,new Aa({color:16179896,transparent:!0,opacity:.55}));return u.visible=!1,c.add(u),u}),this.ctrl.forEach((c,u)=>{c.addEventListener("connected",h=>{c.userData.handed=h.data.handedness,c.userData.gp=h.data.gamepad,this._map()}),c.addEventListener("disconnected",()=>{c.userData.handed=null,c.userData.gp=null,this._map()}),c.addEventListener("selectstart",()=>{if(this.endReady){this.exit();return}this.blurred||(this.pressFrom=u,this.interactor.pressXR(c),this.interactor.pressed&&this.buzz(u))}),c.addEventListener("selectend",()=>{this.interactor.releaseXR()}),n.dolly.add(c,this.grip[u])}),this.capCanvas=document.createElement("canvas"),this.capCanvas.width=1024,this.capCanvas.height=384,this.capTex=new tn(this.capCanvas),this.capTex.colorSpace=Lt,this.board=new De(new mt(1,.375),new yt({map:this.capTex,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1})),this.board.position.set(0,-.32,-1.1),this.board.rotation.x=-.18,this.board.renderOrder=99,this.board.visible=!1,this.board.frustumCulled=!1,t.add(this.board),this.lastCap="",this.veilMat=new qt({vertexShader:TE,fragmentShader:RE,transparent:!0,depthTest:!1,depthWrite:!1,side:mn,fog:!1,toneMapped:!1,uniforms:{uFade:{value:0},uFadeCol:{value:new xe(0)},uLid:{value:0},uTunnel:{value:0}}}),this.veil=new De(new nn(.12,24,16),this.veilMat),this.veil.renderOrder=100,this.veil.frustumCulled=!1,this.veil.visible=!1,t.add(this.veil),this.fadeLin=0,this.tunnel=0,this.fadeEl=document.getElementById("fade"),this.lidEl=document.getElementById("eyelids"),this.white=new xe(15984332),this.black=new xe(0),this.endCanvas=document.createElement("canvas"),this.endCanvas.width=1024,this.endCanvas.height=1024,this.endTex=new tn(this.endCanvas),this.endTex.colorSpace=Lt,this.endBoard=new De(new mt(1.5,1.5),new yt({map:this.endTex,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1})),this.endBoard.renderOrder=101,this.endBoard.visible=!1,this.endBoard.frustumCulled=!1,n.dolly.add(this.endBoard),this.endMode=!1,this.endReady=!1,this.endT=0,this.endAlpha={}}_map(){this.hand=[null,null],this.ctrl.forEach((e,t)=>{e.userData.handed==="left"&&(this.hand[0]=t),e.userData.handed==="right"&&(this.hand[1]=t)}),this.hand[1]===null&&(this.hand[1]=this.hand[0]===0?1:0),this.hand[0]===null&&(this.hand[0]=this.hand[1]===0?1:0),this.active&&this._attach()}_attach(){this.hands.xr={grips:[this.grip[this.hand[0]],this.grip[this.hand[1]]],squeeze:[0,0],trigger:[0,0]},this.bagCtl.setHolder(this.grip[this.hand[1]],!0)}static async supported(){try{return!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr"))}catch{return!1}}async enter(e,t){let n=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.renderer.xr.setFramebufferScaleFactor(1),this.refSpace="local-floor";try{await n.requestReferenceSpace("local-floor")}catch{this.refSpace="local"}this.renderer.xr.setReferenceSpaceType(this.refSpace),await this.renderer.xr.setSession(n),this.session=n,this.active=!0,this.calib=1,this.frames=0,this.blurred=!1,this._lastEye=void 0,this.player.xrPoseOK=!1,this.player.xrPending=null,this.endMode=!1,this.endReady=!1,this.endBoard.visible=!1,this.fadeLin=1,this.tunnel=0,this._map(),this._attach(),this.interactor.xrMode=!0,this.board.visible=!0,this.veil.visible=!0,this.lastCap="",n.addEventListener("visibilitychange",()=>{let s=n.visibilityState==="visible";this.blurred=!s;let r=Uo.getContext();if(s)try{r.resume()}catch{}else{this.interactor.releaseXR();try{r.suspend()}catch{}}}),n.addEventListener("end",()=>{this.active=!1,this.session=null,this.hands.xr=null,this.interactor.xrMode=!1,this.interactor.release(),this.board.visible=!1,this.veil.visible=!1,this.endBoard.visible=!1,this.endMode=!1,this.endReady=!1,this.rays.forEach(s=>{s.visible=!1}),this.blurred=!1;try{Uo.getContext().resume()}catch{}this.bagCtl.setHolder(this.camera,!1),this.player.dolly.position.y=0,this.player.dolly.rotation.y=0,this.player.xrPending=null,this.player.xrPoseOK=!1,t&&t()}),e&&e()}buzz(e,t=.35,n=35){let s=this.ctrl[e]&&this.ctrl[e].userData.gp,r=s&&s.hapticActuators&&s.hapticActuators[0];try{r&&r.pulse&&r.pulse(t,n)}catch{}}exit(){this.session&&(this.endReady=!1,this.session.end().catch(()=>{}))}recalibrate(){this.calib=1}showEnd(){if(!this.active)return;this.endMode=!0,this.endReady=!1,this.endT=0,this.finT=0,this.endAlpha={},this._endKey="";let e=new b,t=new b;this.camera.getWorldPosition(e),this.camera.getWorldDirection(t),t.y=0,t.lengthSq()<1e-4&&t.set(0,0,-1),t.normalize();let n=e.clone().addScaledVector(t,1.7);this.player.dolly.updateWorldMatrix(!0,!1),this.endBoard.position.copy(this.player.dolly.worldToLocal(n));let s=e.clone();s.y=n.y,this.endBoard.lookAt(s),this.endBoard.visible=!0,this.board.visible=!1}update(e){if(!this.active)return;let t=this.player;this.frames++,this.ctrl.forEach((_,x)=>{let M=_.userData.gp,T=this.state[x];if(!M){T.trigger=0,T.squeeze=0,T.stick=[0,0];return}let P=M.buttons||[],R=M.axes||[];T.trigger=P[0]?P[0].value:0,T.squeeze=P[1]?P[1].value:0,T.stick=R.length>=4?[R[2]||0,R[3]||0]:[R[0]||0,R[1]||0];let U=!!(P[3]&&P[3].pressed);U&&!T.stickBtn&&this.recalibrate(),T.stickBtn=U}),this.hands.xr&&(this.hands.xr.squeeze=[this.state[this.hand[0]].squeeze,this.state[this.hand[1]].squeeze],this.hands.xr.trigger=[this.state[this.hand[0]].trigger,this.state[this.hand[1]].trigger]);let n=this.camera.position.y,s=this.frames>2&&(this.refSpace==="local"||n>.3);if(Math.abs(this._lastEye-t.eye)>.02&&(this.calib=1),this.calib>0&&s&&(t.dolly.position.y=t.eye-n,this.calib=0,this._lastEye=t.eye),s&&!t.xrPoseOK&&(t.xrPoseOK=!0,t.xrPending)){let _=t.xrPending;t.xrPending=null,t.place(_.x,_.z,_.yaw,_.eye)}if(this._veil(e),this.endMode){this.rays.forEach(_=>{_.visible=!1}),this._end(e),t.xrMove.set(0,0,0);return}if(this.blurred){t.xrMove.set(0,0,0);return}let r=this.state[this.hand[0]],o=this.state[this.hand[1]],a=new b;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-6&&a.set(0,0,-1),a.normalize();let l=new b(-a.z,0,a.x),c=Math.abs(r.stick[1])>.15?-r.stick[1]:0,u=Math.abs(r.stick[0])>.15?r.stick[0]:0;t.xrMove.set(0,0,0).addScaledVector(a,c).addScaledVector(l,u);let h=o.stick[0];if(Math.abs(h)>.7&&!o.turned){o.turned=!0;let _=new b;this.camera.getWorldPosition(_);let x=-Math.sign(h)*Math.PI/6;t.dolly.position.sub(_).applyAxisAngle(new b(0,1,0),x).add(_),t.dolly.rotation.y+=x}Math.abs(h)<.3&&(o.turned=!1);let d="";this.ctrl.forEach((_,x)=>{let M=this.interactor.peekXR(_);this.rays[x].visible=!!M,M&&(this.rays[x].scale.z=M.distance,!d&&M.target.label&&(d=M.target.label))});let f=["thought","subtitle","hint"].map(_=>{let x=document.getElementById(_);if(!x||!x.classList.contains("on"))return null;let M=x.querySelector(".who"),T=x.querySelector(".say");return{who:M?M.textContent:"",text:T?T.textContent:x.textContent}}),g=this.ui.state||{},v=g.progress>.001&&g.progress<1?Math.round(g.progress*50)/50:0,m=g.stamina!==null&&g.stamina!==void 0&&g.stamina<.98?Math.round(g.stamina*50)/50:-1,p=JSON.stringify([f,d,v,m]);p!==this.lastCap&&(this.lastCap=p,this._draw(f,d,v,m))}_veil(e){let t=this.fadeEl,n=this.endMode||!!(t&&t.classList.contains("on"));this.fadeLin=hn.clamp(this.fadeLin+(n?1:-1)*e/CE,0,1);let s=this.veilMat.uniforms;s.uFade.value=AE(this.fadeLin),s.uFadeCol.value.copy(!this.endMode&&t&&t.classList.contains("white")?this.white:this.black);let r=0;this.lidEl&&(r=parseFloat(this.lidEl.style.getPropertyValue("--lid"))||0),s.uLid.value=hn.clamp(r,0,1);let o=this.player,a=o.vel?o.vel.length():0,l=o.xrMove&&o.xrMove.lengthSq()>1e-4?Math.min(1,a/3.3)*.55:0;this.tunnel+=(l-this.tunnel)*Math.min(1,e*6),s.uTunnel.value=this.tunnel}_wrap(e,t,n){let s=String(t).split(/\s+/).filter(Boolean),r=[],o="";for(let a of s){let l=o?o+" "+a:a;e.measureText(l).width>n&&o?(r.push(o),o=a):o=l}return o&&r.push(o),r}_draw([e,t,n],s,r,o){let a=this.capCanvas.getContext("2d"),l=this.capCanvas.width,c=this.capCanvas.height;a.clearRect(0,0,l,c);let u=l-120,h=1,d=[],f=0;for(let _=0;_<4;_++){d=[],f=0;let x=(T,P,R,U,Y)=>{a.font=P.replace("#",Math.round(R*h)+"px");let y=this._wrap(a,Y?String(T).toUpperCase():T,u),A=Math.round(R*h*1.3);d.push({lines:y,font:a.font,color:U,lh:A}),f+=y.length*A+10};s&&x("\u25B8 "+s,'400 # "Gowun Batang", Georgia, serif',24,"#f3ead8"),e&&e.text&&x(e.text,'400 # "Gowun Batang", Georgia, serif',40,"#f3ead8"),t&&t.text&&(t.who&&x(t.who,'500 # "Gowun Batang", Georgia, serif',20,"#c9a46a",!0),x(t.text,'400 # "Gowun Batang", Georgia, serif',34,"#e8dcc0")),n&&n.text&&x(n.text,'400 # "Gowun Batang", Georgia, serif',27,"#d8d0c0");let M=(r>0?1:0)+(o>=0?1:0);if(f+=M*22,f<=c-60)break;h*=.85}let g=[];if(r>0&&g.push({v:r,c:"#f3ead8"}),o>=0&&g.push({v:o,c:"#d23a2c"}),!d.length&&!g.length){this.capTex.needsUpdate=!0;return}let v=Math.max(20,(c-f)/2-10);a.fillStyle="rgba(10,8,6,0.55)",a.beginPath();let m=Math.min(c-v+14-6,f+28);a.roundRect?a.roundRect(30,v-14,l-60,m,24):a.rect(30,v-14,l-60,m),a.fill(),a.textAlign="center",a.textBaseline="middle";let p=v+6;for(let _ of d){a.font=_.font,a.fillStyle=_.color;for(let x of _.lines)a.fillText(x,l/2,p+_.lh/2),p+=_.lh;p+=10}for(let _ of g){let M=(l-300)/2;a.fillStyle="rgba(236,228,214,0.15)",a.fillRect(M,p+6,300,6),a.fillStyle=_.c,a.fillRect(M,p+6,300*Math.max(0,Math.min(1,_.v)),6),p+=22}this.capTex.needsUpdate=!0}_end(e){this.endT+=e;let t=["stat-0a","stat-0b","stat-1","stat-2","stat-3","stat-src","stat-fin"],n=[],s=!1,r=!1;for(let g of t){let v=document.getElementById(g);if(!v||v.hidden)continue;let m=v.classList.contains("on"),p=this.endAlpha[g]=hn.clamp((this.endAlpha[g]||0)+(m?e/1.6:-e/.3),0,1);if(p<1&&m&&(s=!0),g==="stat-fin"){r=m;let _=v.querySelector("h2"),x=v.querySelectorAll("p");_&&n.push({a:p,kind:"title",el:_}),x.forEach(M=>n.push({a:p,kind:"small",el:M}))}else n.push({a:p,kind:g==="stat-src"?"small":"stat",el:v})}r?(this.finT=(this.finT||0)+e,this.finT>2.5&&!this.endReady&&(this.endReady=!0,s=!0)):this.finT=0;let o=n.map(g=>g.a.toFixed(2)).join(",")+this.endReady;if(!s&&o===this._endKey)return;this._endKey=o;let a=this.endCanvas.getContext("2d"),l=1024,c=1024;a.clearRect(0,0,l,c),a.textAlign="left",a.textBaseline="middle";let u={stat:{size:46,fam:'"Spectral", Georgia, serif',color:"#ece4d6",lh:58,gap:14},small:{size:24,fam:'"Gowun Batang", Georgia, serif',color:"rgba(236,228,214,0.62)",lh:32,gap:8},title:{size:72,fam:'"Spectral", Georgia, serif',color:"#ece4d6",lh:84,gap:14}},h=[],d=0;for(let g of n){let v=u[g.kind],m=[],p=(P,R,U)=>P.childNodes.forEach(Y=>{Y.nodeType===3?Y.textContent.split(/(\s+)/).forEach(y=>{y&&m.push({w:y,strong:R,em:U})}):Y.nodeType===1&&p(Y,R||Y.nodeName==="STRONG",U||Y.nodeName==="EM")});p(g.el,!1,!1);let _=P=>(P.em?"italic ":"")+"400 "+v.size+"px "+v.fam,x=[],M=[],T=0;for(let P of m){a.font=_(P);let R=a.measureText(P.w).width,U=/^\s+$/.test(P.w);if(!U&&T+R>l-120&&M.length){for(;M.length&&/^\s+$/.test(M[M.length-1].w);)T-=M.pop().width;x.push({row:M,rw:T}),M=[],T=0}U&&!M.length||(M.push({...P,width:R,font:_(P)}),T+=R)}for(;M.length&&/^\s+$/.test(M[M.length-1].w);)T-=M.pop().width;M.length&&x.push({row:M,rw:T}),h.push({...g,st:v,rows:x}),d+=x.length*v.lh+v.gap+(g.kind==="title"?24:0)}this.endReady&&(d+=70);let f=Math.max(30,(c-d)/2);for(let g of h){g.kind==="title"&&(f+=24),a.globalAlpha=g.a;for(let v of g.rows){let m=(l-v.rw)/2;for(let p of v.row)a.font=p.font,a.fillStyle=p.strong?"#d23a2c":g.st.color,a.fillText(p.w,m,f+g.st.lh/2),m+=p.width;f+=g.st.lh}f+=g.st.gap}this.endReady&&(a.globalAlpha=1,a.textAlign="center",a.font='400 26px "Gowun Batang", Georgia, serif',a.fillStyle="#d8d0c0",a.fillText("Pull the trigger to leave VR",l/2,f+44)),a.globalAlpha=1,this.endTex.needsUpdate=!0}};function zm(){let i={airTime:{value:0},airDensity:{value:.035},airHeight:{value:2.4},airDrift:{value:.2},airColor:{value:new xe(6705467)},airWarmth:{value:.15},airSaturation:{value:.78}},e=new WeakSet,t={sweatshop:[.09,3.2,.24,9203782,.22,.68],street:[.075,5.5,.48,13274703,.48,.84],nightmare:[.19,3,.5,5793662,-.34,.55],door:[.085,2.6,.18,9990980,.27,.72],home:[.045,2,.08,9069111,.32,.82],void:[0,1,0,15656145,0,1]},n=new xe,s=new xe(t.door[3]);return{install(r){r.traverse(o=>{for(let a of Array.isArray(o.material)?o.material:[o.material]){if(!a||!a.fog||a.isShaderMaterial||e.has(a))continue;e.add(a);let l=a.onBeforeCompile,c=a.customProgramCacheKey();a.onBeforeCompile=function(u,h){l.call(this,u,h),Object.assign(u.uniforms,i),u.vertexShader=`varying vec3 vAirWorld;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <project_vertex>",`
              #include <project_vertex>
              vec4 airWorld = vec4(transformed, 1.0);
              #ifdef USE_BATCHING
                airWorld = batchingMatrix * airWorld;
              #endif
              #ifdef USE_INSTANCING
                airWorld = instanceMatrix * airWorld;
              #endif
              vAirWorld = (modelMatrix * airWorld).xyz;
            `),u.fragmentShader=`varying vec3 vAirWorld;
              uniform float airTime, airDensity, airHeight, airDrift, airWarmth, airSaturation;
              uniform vec3 airColor;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <fog_fragment>",`
              #include <fog_fragment>
              #ifdef USE_FOG
                // Slow, continuous bands in world space; no screen noise or view distortion.
                float airWave = 0.72 + 0.24 * sin(vAirWorld.x * 0.63 + vAirWorld.z * 0.42 + airTime * airDrift)
                  + 0.16 * sin(vAirWorld.z * 1.17 - airTime * airDrift * 0.7);
                float airLow = exp(-max(0.0, vAirWorld.y) / airHeight);
                float airDist = max(0.0, length(vAirWorld - cameraPosition) - 1.8);
                float airAmount = min(0.78, 1.0 - exp(-airDist * airDensity * airLow * airWave));
                // Scene grading lives on world surfaces, so it survives direct stereo rendering.
                float airLuma = dot(gl_FragColor.rgb, vec3(0.2126,0.7152,0.0722));
                gl_FragColor.rgb = mix(vec3(airLuma), gl_FragColor.rgb, airSaturation);
                gl_FragColor.rgb *= vec3(1.0 + airWarmth*0.28, 1.0 + airWarmth*0.025, 1.0 - airWarmth*0.38);
                gl_FragColor.rgb = mix(gl_FragColor.rgb, airColor, airAmount);
              #endif
            `)},a.customProgramCacheKey=()=>c+"|world-air-v1",a.needsUpdate=!0}})},update(r,o,a,l=0){let c=t[a]||t.sweatshop,u=t.door,h=1-Math.exp(-r*.8);i.airTime.value=o,i.airWarmth.value=hn.lerp(i.airWarmth.value,hn.lerp(c[4],u[4],l),h),i.airSaturation.value=hn.lerp(i.airSaturation.value,hn.lerp(c[5],u[5],l),h);for(let[d,f]of["airDensity","airHeight","airDrift"].entries()){let g=hn.lerp(c[d],u[d],l);i[f].value=hn.lerp(i[f].value,g,h)}n.setHex(c[3]),l&&n.lerp(s,l),i.airColor.value.lerp(n,h)}}}function Om(i,e){let t=new qt({side:mn,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uDay:{value:0},uBrightness:{value:.4},uSun:{value:e.clone().normalize()}},vertexShader:`varying vec3 vDirection;
      void main(){ vDirection = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec3 vDirection;
      uniform float uTime, uDay, uBrightness;
      uniform vec3 uSun;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
      }
      float clouds(vec2 p){
        float f = 0.0, a = 0.55;
        for(int i=0;i<4;i++){ f += noise(p)*a; p = mat2(1.6,1.2,-1.2,1.6)*p; a *= 0.5; }
        return f;
      }
      void main(){
        vec3 d = normalize(vDirection);
        float height = smoothstep(-0.08, 0.85, d.y);
        vec3 day = mix(vec3(0.95,0.46,0.13), vec3(0.25,0.40,0.48), height);
        vec3 night = mix(vec3(0.12,0.095,0.09), vec3(0.018,0.031,0.055), height);
        vec3 sky = mix(night, day, uDay);
        // A dome projection avoids a seam and stays fixed in the world when looking around.
        vec2 p = d.xz / max(0.16, d.y + 0.28) * 2.5;
        float n = clouds(p + vec2(uTime * 0.008, uTime * 0.003));
        float cover = smoothstep(0.43, 0.72, n) * smoothstep(0.0, 0.18, d.y);
        vec3 cloudColor = mix(vec3(0.075,0.085,0.11), mix(vec3(0.69,0.43,0.23),vec3(1.0,0.81,0.54),n), uDay);
        sky = mix(sky, cloudColor, cover * 0.86);
        float alignment = dot(d, uSun);
        float halo = pow(max(0.0, alignment), 22.0);
        float disk = smoothstep(cos(0.022), cos(0.014), alignment);
        // Clouds veil the disk without erasing its recognizable shape.
        sky += vec3(1.0,0.48,0.12) * halo * 0.65 * uDay;
        sky += vec3(2.8,1.95,0.85) * disk * (1.0-cover*0.6) * uDay;
        gl_FragColor = vec4(sky * uBrightness, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),n=new De(new nn(70,24,16),t);return n.renderOrder=-10,n.frustumCulled=!1,i.add(n),{update(s,r,o,a){n.position.copy(a);let l=1-Math.exp(-s*.9);t.uniforms.uTime.value=r,t.uniforms.uDay.value=hn.lerp(t.uniforms.uDay.value,Math.min(1,(o.sun||0)/2),l),t.uniforms.uBrightness.value=hn.lerp(t.uniforms.uBrightness.value,o.sky??1,l)}}}var Nt=i=>document.querySelector(i),na=new URLSearchParams(location.search),kr=na.has("debug"),PE=kr&&na.get("dtmax")?+na.get("dtmax"):.05,IE={quality:"auto",sensitivity:1,volume:.9,hints:!0},jn={...IE};try{Object.assign(jn,JSON.parse(localStorage.getItem("tlwh-hd")||"{}"))}catch{}var _h=()=>{try{localStorage.setItem("tlwh-hd",JSON.stringify(jn))}catch{}},qn=jn.quality==="auto"?"medium":jn.quality;na.get("q")&&(qn=na.get("q"));var Fm={},Xm={thought:30,subtitle:38},xh={};function DE(i,e,t,n){clearInterval(xh[e]);let s=e==="subtitle"&&/^([A-Z][A-Za-z ]{1,18}): (.*)$/.exec(t);if(i.innerHTML="",s){let u=document.createElement("span");u.className="who",u.textContent=s[1],i.appendChild(u),t=s[2]}let r=document.createElement("span");r.className="say",i.appendChild(r);let o=[...t],a=0,l=Xm[e],c=()=>{if(a>=o.length){clearInterval(xh[e]);return}let u=o[a++],h=document.createElement("i");h.textContent=u,r.appendChild(h)};return c(),xh[e]=setInterval(c,1e3/l),i.dataset.full=(s?s[1]+": ":"")+t,o.length/l}var LE={"Look around with the mouse \xB7 click the glowing fabric on your left":"Point at the glowing fabric on your left \xB7 pull the trigger","Hold the mouse button on the machine to push the fabric through":"Point at the machine \xB7 hold the trigger to push the fabric through","W A S D to walk \xB7 hold Shift to run \xB7 find your bag (look for the glow)":"Left stick to walk (all the way to run) \xB7 right stick to turn \xB7 find your bag (look for the glow)","Hold Q to look inside your bag \xB7 then go home":"Squeeze a grip to look inside your bag \xB7 then go home","Click the fabric on your left":"Point at the fabric on your left \xB7 pull the trigger","Hold the mouse button on the machine":"Point at the machine \xB7 hold the trigger","Click the supervisor at his desk":"Point at the supervisor \xB7 pull the trigger","Click the door to go outside":"Point at the door \xB7 pull the trigger","Hold E to hold out your hands":"Hold the trigger to hold out your hands","Hold the bag to your chest to hide the light \u2014 and stay still":"Squeeze a grip to hug the bag and hide the light \u2014 and stay still"},UE=i=>LE[i]||String(i).replace(/Hold the mouse button/g,"Hold the trigger").replace(/\bClick\b/g,"Pull the trigger").replace(/\bclick\b/g,"pull the trigger").replace(/\b(Hold|Press) [QR]\b/g,"Squeeze a grip").replace(/\b(Hold|Press) E\b/g,"Hold the trigger").replace(/\b[Hh]old C\b/g,"squeeze both grips").replace(/W A S D/g,"Left stick").replace(/[Hh]old Shift/g,"push the stick all the way").replace(/ with the mouse/g,""),ut={state:{progress:0,stamina:null},show(i,e){Nt("#"+i).classList.toggle("show",e)},text(i,e,t){let n=Nt("#"+i);if(clearTimeout(Fm[i]),!e){clearInterval(xh[i]),n.classList.remove("on");return}let s=0;Xm[i]?s=DE(n,i,e,t):n.textContent=e,n.classList.add("on"),t&&(Fm[i]=setTimeout(()=>n.classList.remove("on"),(t+s*.85)*1e3))},pulse(){let i=Nt("#crosshair");i&&(i.classList.remove("tap"),i.offsetWidth,i.classList.add("tap"))},hint(i,e){(jn.hints||!i)&&ut.text("hint",i&&ht.xr?UE(i):i,e)},thought(i,e){ut.text("thought",i,e)},subtitle(i,e){ut.text("subtitle",i,e)},fade(i,e=!1){let t=Nt("#fade");t.classList.toggle("white",e),t.classList.toggle("on",i)},progress(i){ut.state.progress=i;let e=Nt("#ring");e.style.setProperty("--k",i),e.classList.toggle("on",i>.001&&i<1)},label(i){let e=Nt("#label");e.textContent=i||"",e.classList.toggle("on",!!i),Nt("#crosshair").classList.toggle("hot",!!i)},stamina(i){ut.state.stamina=i;let e=Nt("#stamina");e.classList.toggle("on",i!==null&&i<.98),i!==null&&(e.firstElementChild.style.transform=`scaleX(${i})`)},finale(i){["stat-0a","stat-0b"].forEach(t=>{Nt("#"+t).hidden=!i});let e=[...i?["stat-0a","stat-0b"]:[],"stat-1","stat-2","stat-3","stat-src","stat-fin"];e.forEach(t=>Nt("#"+t).classList.remove("on")),e.forEach((t,n)=>setTimeout(()=>Nt("#"+t).classList.add("on"),900+n*2600))},error(i){Nt("#error").textContent=i}};addEventListener("error",i=>ut.error("Error: "+i.message));addEventListener("unhandledrejection",i=>kr&&ut.error("Error: "+(i.reason&&i.reason.message||i.reason)));var Mh=Nt("#scene"),Gt=new uc({canvas:Mh,antialias:!1,powerPreference:"high-performance",stencil:!1});Gt.outputColorSpace=Lt;Gt.toneMapping=Ha;Gt.toneMappingExposure=.95;Gt.shadowMap.enabled=!0;Gt.shadowMap.type=Od;Gt.xr.enabled=!0;var Df=()=>Math.min(devicePixelRatio,qn==="high"?1.5:qn==="medium"?1:.8);Gt.setPixelRatio(Df());Gt.setSize(innerWidth,innerHeight,!1);var gn=new Ao,Lf=zm();gn.background=new xe(723207);gn.fog=new dc(1445899,.036);var NE=new To(Gt);gn.environment=NE.fromScene(new Bc,.04).texture;gn.environmentIntensity=.1;var $n=new ei(72,innerWidth/innerHeight,.03,90),Ls=new ei(50,innerWidth/innerHeight,.05,90),Eh=new Dc;$n.add(Eh);Eh.setMasterVolume(jn.volume);var Ns=new Vc(Eh);Ns.stopAll=Ns.stopAll||(i=>(i||[]).forEach(e=>{try{e&&e.isPlaying&&e.stop(),e&&e.parent&&e.parent.remove(e)}catch{}}));var ht=new jc({camera:$n,scene:gn,canvas:Mh,audio:Ns,settings:jn}),Vr=new Qc($n,Mh);Vr.onUse=()=>{ut.pulse(),Ns.ready&&Ns.oneShot("tap",{volume:.35,rate:.95+Math.random()*.1})};var Fr=new Kc(gn),Br=new ah(gn,$n,{skin:8014896}),Ui=Mn({child:!0,outfit:"shirt",top:8022608,bottom:3816e3,skin:8014896,seed:3,scale:1.3});{let i=new yt({colorWrite:!1,depthWrite:!1});Ui.traverse(e=>{e.isMesh&&(e.material=i,e.castShadow=!0,e.receiveShadow=!1,e.frustumCulled=!1)}),Ui.visible=!1,gn.add(Ui)}var Bm=0,ph=!1;function HE(i,e){if(Ui.visible=e&&ht.eye>.55,!Ui.visible)return;let t=ht.dolly.position;ht.headWorld(ta),Ui.position.set(ht.xr?ta.x:t.x,t.y,ht.xr?ta.z:t.z),Ui.rotation.y=ht.yaw+Math.PI,ht.eye<1.42?(ph||(ph=!0),ko(Ui,Math.max(.12,ht.eye-.8)),Ui.position.x+=Math.sin(ht.yaw)*.12,Ui.position.z+=Math.cos(ht.yaw)*.12):(ph&&(ph=!1,Vo(Ui)),ht.moving&&(Bm+=i*(ht.running?11:7.5)),Cs(Ui,Bm,ht.moving?1:0))}var Uf=new hh(gn,6),Xn=new Lo(16763030,0);Xn.castShadow=!0;Xn.shadow.mapSize.set(2048,2048);Object.assign(Xn.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:60});Xn.shadow.bias=-5e-4;Xn.shadow.normalBias=.035;Xn.shadow.radius=2;gn.add(Xn,Xn.target);var yh=new b(14,20,-6),tl=new Pc(13150338,3811870,.85);gn.add(tl);var zE=Om(gn,yh),sl=[ka(0),ka(1)];sl.forEach(i=>{i.visible=!1,gn.add(i)});var bh=new uh(ht,sl),si=null,Us=null,ii=null,On={scene:gn,audio:Ns,interactor:Vr,player:ht,ui:ut,thread:Fr,hands:Br,lights:Uf,police:sl,pursuit:bh,camera:$n,post:{dream:0,glow:0},edition:"normal"},Ds=["sweatshop","street","nightmare","void","home"],_t=[],Rn=0,rl=0,Nf=null;On.refreshColliders=()=>{ht.colliders=_t.filter(Boolean).flatMap(i=>i.getColliders())};async function OE(){let i=Nt("#load-bar"),e=Nt("#load-msg"),t=performance.now(),n=async(s,r)=>{if(kr){let o=performance.now();console.log("[load]",r,Math.round(o-t)+"ms"),t=o}i.style.width=s*100+"%",e.textContent=r,await new Promise(o=>setTimeout(o,30))};await n(.1,"Weaving cloth\u2026"),Us=new lh($n,vm(),Br),On.bagCtl=Us,await n(.3,"Building the workshop\u2026"),_t[0]=Am(On),rl=1,Lf.install(gn),On.refreshColliders(),ii=new el({renderer:Gt,camera:$n,player:ht,interactor:Vr,hands:Br,bagCtl:Us,ui:ut}),el.supported().then(s=>{let r=Nt("#vr-btn");r&&(r.hidden=!s)}),await n(.75,"Lighting\u2026"),si=hm(Gt,gn,$n,qn),On.post=new Proxy({},{set(s,r,o){return si[r]=o,!0},get(s,r){return si[r]}}),il(),wh(),Gr(!0),si.setCamera(Ls),_t[0].cine(Ls,0),Gt.compile(gn,Ls),await Promise.all(['400 40px "Gowun Batang"','400 72px "Spectral"'].map(s=>document.fonts.load(s).catch(()=>[]))),await n(1,"Ready"),setTimeout(()=>{ut.show("loading",!1),ut.show("title",!0),Wi("title")},400),Nf=FE()}var km=(i=60)=>new Promise(e=>setTimeout(e,i));async function FE(){await km(900);let i=[Dm,Um,Hm,Nm];for(let t=0;t<i.length;t++){let n=i[t](On);_t[t+1]=n,rl=t+2,Lf.install(n.root),n.root.visible=!1,n.onEnd(s=>qm(s)),n.setQuality&&n.setQuality(qn),On.refreshColliders(),await km(120)}let e=_t.map(t=>t.root.visible);_t.forEach(t=>{t.root.visible=!0}),sl.forEach(t=>{t.visible=!0});try{await Gt.compileAsync(gn,$n)}catch{Gt.compile(gn,$n)}_t.forEach((t,n)=>{t.root.visible=e[n]}),Gr(dn==="title"||dn==="loading"||dn==="intro"),kr&&console.log("[load] all spaces built")}function qm(i){if(i==="finale")return VE();Hf(i)}async function Hf(i){let e=Ds.indexOf(i);_t[e]||await Nf;let t=i==="street"||i==="nightmare";_t.forEach((n,s)=>{n&&s!==e&&s<=Rn&&!(t&&s===e-1)&&n.stop()}),e>=1&&(ht.bounds=null),Rn=e,_t[e].start(),On.refreshColliders(),Gr()}On.hideSpace=i=>{let e=_t[Ds.indexOf(i)];e&&(e.root.visible=!1)};function Gr(i=!1){document.body.classList.toggle("in-light",!i&&Ds[Rn]==="void");let e=Ds.indexOf("void"),t=Ds.indexOf("home"),n=Ds.indexOf("nightmare");_t.forEach((s,r)=>{if(!s)return;let o=i?r===0:Math.abs(r-Rn)<=1;!i&&Rn===e&&(o=r===e),!i&&r===e&&Rn!==e&&(o=!1),!i&&Rn===n&&r===t&&(o=!0),!i&&Rn===t&&r===n&&(o=!0),s.root.visible=o}),sl.forEach(s=>{s.visible=!i&&(Rn===1||Rn===2)})}var Vm=new xe,Gm=new xe,zr=new b,Rf=new Set;function BE(i){for(let e=_t.length-1;e>=0;e--)if(_t[e]&&i>=_t[e].zone.minX)return e;return 0}function kE(i,e){ht.headWorld(zr);let t=e?0:Hs?BE(zr.x):Rn,n=_t[t]?_t[t].atmosphere(zr.x):_t[0].atmosphere(),s=Math.min(1,i*(e?2.5:.9));Lf.update(i,ys,Ds[t],n.doorWarmth||0),Vm.copy(n.fog),gn.fog.color.lerp(Vm,s),gn.background.copy(gn.fog.color),gn.fog.density=hn.lerp(gn.fog.density,n.density,s),Xn.intensity=hn.lerp(Xn.intensity,n.sun||0,s),tl.intensity=hn.lerp(tl.intensity,n.hemi,s),tl.color.lerp(Gm.copy(n.hemiSky||new xe(13150338)),s),tl.groundColor.lerp(Gm.copy(n.hemiGround||new xe(3811870)),s),Gt.toneMappingExposure=hn.lerp(Gt.toneMappingExposure,n.exposure||1,s*.7),zE.update(i,ys,n,e?Ls.position:zr);let r=30/Xn.shadow.mapSize.x,o=Math.round(zr.x/r)*r,a=Math.round(zr.z/r)*r;Xn.target.position.set(o,0,a),Xn.position.set(o+yh.x,yh.y,a+yh.z),Xn.shadow.autoUpdate=Xn.intensity>.02,_t[0]&&(e||Rn===0)&&!Hs||_t[0]&&(_t[0].sun.intensity=0),_t[0]&&(_t[0].sun.shadow.autoUpdate=_t[0].sun.intensity>.02),Rf.clear(),_t.forEach(l=>{l&&l.root.visible&&Rf.add(l.name)}),Uf.update(i,zr,Rf)}function zf(){_t.forEach(i=>{i&&(i.stop(),i.reset())}),Us.resetContents(),bh.stop(),Fr.set(null),ut.thought(""),ut.subtitle(""),ut.stamina(null),ht.canRun=!0,ht.speedScale=1,ht.jogAllowed=!1,Rn=0,_t[0].start(),On.refreshColliders(),Gr()}function VE(){Wi("end"),Vr.release(),ut.fade(!0),setTimeout(()=>{ht.unlock(),_t.forEach(e=>e&&e.stop()),ut.thought(""),ut.subtitle(""),ut.label(""),ut.hint(""),ut.stamina(null);let i=Nt("#eyelids");i&&i.style.setProperty("--lid","0"),ut.show("endcard",!0),ut.finale(!0),setTimeout(()=>{dn==="end"&&ut.fade(!1)},1100),si.setCamera(Ls),ii&&ii.active&&ii.showEnd()},2e3)}function il(){Gt.xr.isPresenting||Gt.setPixelRatio(Df()),si&&(si.setQuality(qn),wh()),_t.forEach(i=>i&&i.setQuality&&i.setQuality(qn)),Xn.shadow.mapSize.setScalar(qn==="high"?2048:qn==="medium"?1536:1024),Xn.shadow.map&&(Xn.shadow.map.dispose(),Xn.shadow.map=null),document.querySelectorAll("[data-q]").forEach(i=>i.classList.toggle("on",i.dataset.q===jn.quality))}function wh(){if(!Gt.xr.isPresenting&&(Gt.setSize(innerWidth,innerHeight,!1),$n.aspect=Ls.aspect=innerWidth/innerHeight,$n.updateProjectionMatrix(),Ls.updateProjectionMatrix(),si)){let i=Gt.getDrawingBufferSize(new we);si.setSize(i.x,i.y)}}addEventListener("resize",wh);var dn="loading";function Wi(i){dn=i,document.body.classList.toggle("playing",i==="play"||i==="paused")}Wi("loading");function mh(i){let e=Nt("#ed");e&&(e.classList.toggle("open",i),e.querySelector(".ed-btn").setAttribute("aria-expanded",i?"true":"false"))}function GE(i){On.edition=i==="extra"?"extra":"normal",Nt("#ed-cur").textContent=On.edition==="extra"?"Extra":"Normal",Nt("#ed").classList.toggle("extra",On.edition==="extra"),document.querySelectorAll("#ed-list [data-ed]").forEach(e=>{e.classList.toggle("on",e.dataset.ed===On.edition),e.setAttribute("aria-selected",e.dataset.ed===On.edition?"true":"false")})}{let i=document.querySelector('#ed-list [data-ed="extra"]');i&&(i.addEventListener("pointerenter",()=>Nt("#ed").classList.add("hot")),i.addEventListener("pointerleave",()=>Nt("#ed").classList.remove("hot")))}document.addEventListener("click",i=>{let e=i.target.closest("[data-action]");if(!e){mh(!1);return}let t=e.dataset.action;t!=="edition-open"&&t!=="edition"&&mh(!1),t==="begin"&&(vh=0,If()),t==="scenes"&&ut.show("scenes",!0),t==="close-scenes"&&ut.show("scenes",!1),t==="scene"&&(ut.show("scenes",!1),vh=+e.dataset.n,If()),t==="vr"&&WE(),t==="edition-open"&&mh(!Nt("#ed").classList.contains("open")),t==="edition"&&(GE(e.dataset.ed),mh(!1)),t==="settings"&&ut.show("settings",!0),t==="close-settings"&&ut.show("settings",!1),t==="resume"&&$m(),t==="restart"&&XE(),t==="quit"&&jm()});document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>{jn.quality=i.dataset.q,qn=i.dataset.q==="auto"?"medium":i.dataset.q,nl=jn.quality!=="auto",_h(),il()}));Nt("#sens").value=jn.sensitivity;Nt("#sens").addEventListener("input",i=>{jn.sensitivity=+i.target.value,_h()});Nt("#vol").value=jn.volume;Nt("#vol").addEventListener("input",i=>{jn.volume=+i.target.value,Eh.setMasterVolume(jn.volume),_h()});Nt("#hints").checked=jn.hints;Nt("#hints").addEventListener("change",i=>{jn.hints=i.target.checked,_h()});async function If(){if(dn!=="title")return;ut.show("title",!1),ut.show("intro",!0),Wi("intro");let i=Nt("#intro-1"),e=Nt("#intro-2");e.textContent="Preparing sound\u2026",setTimeout(()=>i.classList.add("on"),300),await Ns.init(),e.textContent="Click anywhere to sit down.",e.classList.add("on"),Nt("#intro").addEventListener("click",Ym,{once:!0})}var gh=!1;async function WE(){if(dn!=="title"||!ii||gh)return;gh=!0;let i=Ns.init();try{await ii.enter(()=>{ht.xr=!0,ut.show("title",!1),ut.fade(!0),Wi("intro"),qn==="high"&&(qn="medium",il()),i.catch(()=>{}).then(()=>{!ii.active||dn!=="intro"||(zf(),si.setCamera($n),Zm(),Wi("play"),ea=0,nl=!0,setTimeout(()=>ut.fade(!1),600))})},()=>{ht.xr=!1,gh=!1,Gt.setPixelRatio(Df()),wh(),dn!=="end"&&(ut.fade(!1),dn!=="title"&&jm())})}catch(e){gh=!1,ut.error("Could not start VR: "+e.message)}}function Ym(){ut.fade(!0),ut.show("intro",!1),ht.lock(),zf(),si.setCamera($n),Zm(),Wi("play"),ea=0,setTimeout(()=>ut.fade(!1),1500),Nt("#intro-1").classList.remove("on"),Nt("#intro-2").classList.remove("on")}var vh=0;async function Zm(){let i=vh;vh=0,!(i<2)&&(_t[0].sceneOutside(),i!==2&&(await Nf,await Hf("nightmare"),Us.setContents({coins:3,scraps:!0,food:!0}),_t[Ds.indexOf("nightmare")].sceneStart(i===4),On.refreshColliders(),Gr()))}var Jm=0;function Km(){dn==="play"&&(Vr.release(),Wi("paused"),ut.show("pause",!0),ut.hint(""),Jm=performance.now())}function $m(){dn==="paused"&&(ut.show("pause",!1),Wi("play"),ht.lock(),setTimeout(()=>{dn==="play"&&!ht.locked&&!ht.xr&&ut.hint("Click to look around",3)},400))}ht.onPauseRequest=Km;Mh.addEventListener("click",()=>{dn==="play"&&!ht.locked&&!ht.xr&&ht.lock()});function XE(){ut.show("pause",!1),ut.show("endcard",!1),ut.fade(!0),ht.lock(),Hs&&Sh(!1),setTimeout(()=>{zf(),si.setCamera($n),Wi("play"),ut.fade(!1)},700)}function jm(){if(ut.show("pause",!1),ut.show("endcard",!1),Hs&&Sh(!1),ii&&ii.active){let i=ii;setTimeout(()=>i.exit(),0)}_t.forEach(i=>{i&&(i.stop(),i.reset())}),bh.stop(),Us.resetContents(),Fr.set(null),Br.hide(),ht.unlock(),si.setCamera(Ls),ut.thought(""),ut.subtitle(""),ut.hint(""),ut.label(""),ut.stamina(null),Rn=0,Gr(!0),Wi("title"),ut.show("title",!0)}var Hs=!1,Or=null,qE=[[-1.5,3.2,-1.9],[23,4,-2],[41.5,8.3,-Math.PI/2],[83.5,12.7,-Math.PI/2]];function Sh(i){i===Hs||i&&(dn!=="play"||ht.xr)||(Hs=i,document.body.classList.toggle("exploring",i),i?(Or={pos:ht.dolly.position.clone(),yaw:ht.yaw,pitch:ht.pitch,eye:ht.eye,canMove:ht.canMove,bounds:ht.bounds},ht.noclip=!0,ht.canMove=!0,ht.eye=1.52,Fr.visible=!1,_t.forEach(e=>{e&&(e.root.visible=!0)}),ut.hint(""),ut.thought(""),Br.hide()):(ht.noclip=!1,ht.dolly.position.copy(Or.pos),ht.yaw=Or.yaw,ht.pitch=Or.pitch,ht.eye=Or.eye,ht.canMove=Or.canMove,ht.bounds=Or.bounds,Fr.visible=!0,Gr()))}var Wm=!1;addEventListener("keydown",i=>{if(i.code==="Escape"&&!i.repeat&&(dn==="play"&&!ht.xr?Km():Nt("#settings").classList.contains("show")?ut.show("settings",!1):Nt("#scenes").classList.contains("show")?ut.show("scenes",!1):dn==="paused"&&performance.now()-Jm>250&&$m()),i.code==="KeyF"&&(dn==="play"||dn==="paused")){let e=Nt("#controls"),t=!e.classList.contains("on");t?Wm=!0:Wm&&Nt("#fhint").classList.add("gone"),e.classList.toggle("on",t)}if(i.code==="KeyP"&&rl>=5&&Sh(!Hs),Hs){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(i.code);if(e>=0){let[t,n,s]=qE[e];ht.place(t,n,s,1.52)}}kr&&i.code==="KeyN"&&_t[Rn]&&_t[Rn].skip()});var nl=jn.quality!=="auto"||!!na.get("q"),ea=0,Af=0,Cf=0;function YE(i){if(!(nl||dn!=="play")&&(ea+=i,!(ea<3)&&(Af+=i,Cf++,ea>7))){let e=Cf/Af;Af=0,Cf=0,ea=3,e<40&&qn!=="low"?(qn=qn==="high"?"medium":"low",il()):(e>75&&qn==="medium"&&(qn="high",il()),nl=!0)}}var ZE=new Dr,ys=0,Pf=new b,ta=new b;Gt.setAnimationLoop(()=>{let i=Math.min(ZE.getDelta(),PE);if(ys+=i,!_t[0]||!si)return;let e=dn==="play",t=Gt.xr.isPresenting;if(t&&ii.blurred){try{ii.update(i)}catch{}Gt.render(gn,$n);return}if(_t.forEach((s,r)=>s&&s.update(i,ys,e&&!Hs&&r===Rn)),t){try{ii.update(i)}catch(a){ii.faulted||(ii.faulted=!0,console.error("[vr]",a))}let s=ii.state,r=Math.max(s[0].trigger,s[1].trigger),o=Math.min(s[0].squeeze,s[1].squeeze);_t[1]&&_t[1].setXRBeg(r>.5),On.xrTrigger=r>.5,ht.qHeldXR=Math.max(s[0].squeeze,s[1].squeeze)>.6,_t[4]&&_t[4].setXRClose(o>.6)}else ht.qHeldXR=!1,On.xrTrigger=!1;if(e){ht.update(i);let s=Vr.update();ut.label(s&&!t?s.label:""),ht.headWorld(ta),ht.forward(Pf),Fr.update(i,ys,ta,Pf),Us.update(i,ys,(Us.hugMode?!!ht.keys.KeyR:ht.qHeld)||t&&ht.qHeldXR,ht.moving),ut.stamina(Rn===2&&_t[2]?_t[2].stamina:null),YE(i)}else Fr.update(i,ys,ta,Pf);Br.update(i),HE(i,dn==="play"||dn==="paused");let n=dn==="title"||dn==="intro"||dn==="end"||dn==="loading";n&&_t[0].cine(Ls,ys),kE(i,n),t?Gt.render(gn,$n):si.render(ys),kr&&(Nt("#debug").textContent=`${On.edition} \xB7 ${Ds[Rn]} \xB7 ${_t[Rn]?_t[Rn].phase:""} \xB7 ${qn} \xB7 ${Math.round(1/Math.max(i,.001))} fps \xB7 built ${rl}/5`)});function JE(){Gt.info.autoReset=!1,Gt.info.reset(),si.render(ys);let i={calls:Gt.info.render.calls,triangles:Gt.info.render.triangles,geometries:Gt.info.memory.geometries,textures:Gt.info.memory.textures,programs:Gt.info.programs.length,quality:qn};return Gt.info.autoReset=!0,i}kr&&(window.__tlwh={stats:JE,get world(){return _t[Rn]},spaces:_t,goTo:Hf,get cur(){return Rn},get built(){return rl},player:ht,camera:$n,scene:gn,renderer:Gt,ui:ut,interactor:Vr,begin:If,sitDown:Ym,get mode(){return dn},setMode:Wi,ctx:On,get post(){return si},audio:Ns,lights:Uf,pursuit:bh,setExplore:Sh,get bagCtl(){return Us},hands:Br,shadowBody:Ui,get xrRig(){return ii}});OE().then(()=>{_t[0].onEnd(i=>qm(i))}).catch(i=>ut.error("Could not build the scene: "+i.message+`
`+i.stack));})();
