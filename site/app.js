/*! The Long Way Home V3. Includes three.js (MIT License). */
(()=>{var zd="169";var gg=0,jf=1,xg=2;var yp=1,Od=2,Ss=3,Fi=0,pn=1,Rt=2,kn=0,xo=1,vn=2,Qf=3,e0=4,Fd=5,Oi=100,yg=101,vg=102,_g=103,Mg=104,zo=200,Eg=201,bg=202,wg=203,mu=204,gu=205,Hc=206,Sg=207,zc=208,Tg=209,Rg=210,Ag=211,Cg=212,Pg=213,Ig=214,xu=0,yu=1,vu=2,Mo=3,_u=4,Mu=5,Eu=6,bu=7,vp=0,Dg=1,Lg=2,Qs=0,Bd=1,kd=2,Vd=3,za=4,Ug=5,Gd=6,Wd=7,t0="attached",Ng="detached",_p=300,Eo=301,bo=302,wu=303,Su=304,Oc=306,Ln=1e3,js=1001,Tu=1002,ni=1003,Hg=1004;var gl=1005;var Ji=1006,Ih=1007;var Rs=1008;var ji=1009,Mp=1010,Ep=1011,ba=1012,Xd=1013,Sr=1014,ls=1015,hi=1016,qd=1017,Yd=1018,tr=1020,bp=35902,wp=1021,Sp=1022,_i=1023,Tp=1024,Rp=1025,yo=1026,nr=1027,Ap=1028,Zd=1029,Cp=1030,Jd=1031;var Kd=1033,Kl=33776,$l=33777,jl=33778,Ql=33779,Ru=35840,Au=35841,Cu=35842,Pu=35843,Iu=36196,Du=37492,Lu=37496,Uu=37808,Nu=37809,Hu=37810,zu=37811,Ou=37812,Fu=37813,Bu=37814,ku=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,qu=37820,Yu=37821,ec=36492,Zu=36494,Ju=36495,Pp=36283,Ku=36284,$u=36285,ju=36286;var nc=2300,Qu=2301,Dh=2302,n0=2400,i0=2401,s0=2402;var zg=3200,Og=3201;var $d=0,Fg=1,Ks="",Dt="srgb",rr="srgb-linear",jd="display-p3",Fc="display-p3-linear",ic="linear",fn="srgb",sc="rec709",rc="p3";var Kr=7680;var r0=519,Bg=512,kg=513,Vg=514,Ip=515,Gg=516,Wg=517,Xg=518,qg=519,ed=35044;var o0="300 es",As=2e3,oc=2001,ir=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],a0=1234567,ya=Math.PI/180,wa=180/Math.PI;function $i(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]).toLowerCase()}function $n(i,e,t){return Math.max(e,Math.min(t,i))}function Qd(i,e){return(i%e+e)%e}function Yg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zg(i,e,t){return i!==e?(t-i)/(e-i):0}function va(i,e,t){return(1-t)*i+t*e}function Jg(i,e,t,n){return va(i,e,1-Math.exp(-t*n))}function Kg(i,e=1){return e-Math.abs(Qd(i,e*2)-e)}function $g(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ex(i,e){return i+Math.random()*(e-i)}function tx(i){return i*(.5-Math.random())}function nx(i){i!==void 0&&(a0=i);let e=a0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ix(i){return i*ya}function sx(i){return i*wa}function rx(i){return(i&i-1)===0&&i!==0}function ox(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ax(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var cn={DEG2RAD:ya,RAD2DEG:wa,generateUUID:$i,clamp:$n,euclideanModulo:Qd,mapLinear:Yg,inverseLerp:Zg,lerp:va,damp:Jg,pingpong:Kg,smoothstep:$g,smootherstep:jg,randInt:Qg,randFloat:ex,randFloatSpread:tx,seededRandom:nx,degToRad:ix,radToDeg:sx,isPowerOfTwo:rx,ceilPowerOfTwo:ox,floorPowerOfTwo:ax,setQuaternionFromProperEuler:lx,normalize:nn,denormalize:Ki},Se=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},It=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],x=s[4],_=s[7],S=s[2],P=s[5],T=s[8];return r[0]=o*v+a*M+l*S,r[3]=o*m+a*x+l*P,r[6]=o*p+a*_+l*T,r[1]=c*v+u*M+h*S,r[4]=c*m+u*x+h*P,r[7]=c*p+u*_+h*T,r[2]=d*v+f*M+g*S,r[5]=d*m+f*x+g*P,r[8]=d*p+f*_+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(a*n-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lh.makeScale(e,t)),this}rotate(e){return this.premultiply(Lh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lh=new It;function Dp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ac(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cx(){let i=ac("canvas");return i.style.display="block",i}var l0={};function tc(i){i in l0||(l0[i]=!0,console.warn(i))}function hx(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ux(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dx(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var c0=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),h0=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[rr]:{transfer:ic,primaries:sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Dt]:{transfer:fn,primaries:sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Fc]:{transfer:ic,primaries:rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(h0),fromReference:i=>i.applyMatrix3(c0)},[jd]:{transfer:fn,primaries:rc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(h0),fromReference:i=>i.applyMatrix3(c0).convertLinearToSRGB()}},fx=new Set([rr,Fc]),Zt={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fx.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=aa[e].toReference,s=aa[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return aa[i].primaries},getTransfer:function(i){return i===Ks?ic:aa[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(aa[e].luminanceCoefficients)}};function vo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Uh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $r,td=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$r===void 0&&($r=ac("canvas")),$r.width=e.width,$r.height=e.height;let n=$r.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ac("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vo(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vo(t[n]/255)*255):t[n]=vo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},px=0,lc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Nh(s[o].image)):r.push(Nh(s[o]))}else r=Nh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Nh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?td.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mx=0,Mi=class i extends ir{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=js,s=js,r=Ji,o=Rs,a=_i,l=ji,c=i.DEFAULT_ANISOTROPY,u=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=$i(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case js:e.x=e.x<0?0:1;break;case Tu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case js:e.y=e.y<0?0:1;break;case Tu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=_p;Mi.DEFAULT_ANISOTROPY=1;var $t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(f+1)/2,S=(p+1)/2,P=(u+d)/4,T=(h+v)/4,U=(g+m)/4;return x>_&&x>S?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=P/n,r=T/n):_>S?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=P/s,r=U/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=T/r,s=U/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nd=class extends ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mi(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends nd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},cc=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var id=class extends Mi{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=js,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-a,p=l*d+c*f+u*g+h*v,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let S=Math.sqrt(x),P=Math.atan2(S,p*M);m=Math.sin(m*P)/S,a=Math.sin(a*P)/S}let _=a*M;if(l=l*m+d*_,c=c*m+f*_,u=u*m+g*_,h=h*m+v*_,m===1-a){let S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($n(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(u0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(u0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hh.copy(this).projectOnVector(e),this.sub(Hh)}reflect(e){return this.sub(Hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hh=new b,u0=new En,Bi=class{constructor(e=new b(1/0,1/0,1/0),t=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),yl.subVectors(this.max,la),jr.subVectors(e.a,la),Qr.subVectors(e.b,la),eo.subVectors(e.c,la),Ws.subVectors(Qr,jr),Xs.subVectors(eo,Qr),fr.subVectors(jr,eo);let t=[0,-Ws.z,Ws.y,0,-Xs.z,Xs.y,0,-fr.z,fr.y,Ws.z,0,-Ws.x,Xs.z,0,-Xs.x,fr.z,0,-fr.x,-Ws.y,Ws.x,0,-Xs.y,Xs.x,0,-fr.y,fr.x,0];return!zh(t,jr,Qr,eo,yl)||(t=[1,0,0,0,1,0,0,0,1],!zh(t,jr,Qr,eo,yl))?!1:(vl.crossVectors(Ws,Xs),t=[vl.x,vl.y,vl.z],zh(t,jr,Qr,eo,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_s=[new b,new b,new b,new b,new b,new b,new b,new b],qi=new b,xl=new Bi,jr=new b,Qr=new b,eo=new b,Ws=new b,Xs=new b,fr=new b,la=new b,yl=new b,vl=new b,pr=new b;function zh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pr.fromArray(i,r);let a=s.x*Math.abs(pr.x)+s.y*Math.abs(pr.y)+s.z*Math.abs(pr.z),l=e.dot(pr),c=t.dot(pr),u=n.dot(pr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var gx=new Bi,ca=new b,Oh=new b,ki=class{constructor(e=new b,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ca,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Oh)),this.expandByPoint(ca.copy(e.center).sub(Oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ms=new b,Fh=new b,_l=new b,qs=new b,Bh=new b,Ml=new b,kh=new b,Tr=class{constructor(e=new b,t=new b(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ms.copy(this.origin).addScaledVector(this.direction,t),Ms.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fh.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Fh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=qs.dot(this.direction),l=-qs.dot(_l),c=qs.lengthSq(),u=Math.abs(1-o*o),h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let v=1/u;h*=v,d*=v,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fh).addScaledVector(_l,d),f}intersectSphere(e,t){Ms.subVectors(e.center,this.origin);let n=Ms.dot(this.direction),s=Ms.dot(Ms)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ms)!==null}intersectTriangle(e,t,n,s,r){Bh.subVectors(t,e),Ml.subVectors(n,e),kh.crossVectors(Bh,Ml);let o=this.direction.dot(kh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qs.subVectors(this.origin,e);let l=a*this.direction.dot(Ml.crossVectors(qs,Ml));if(l<0)return null;let c=a*this.direction.dot(Bh.cross(qs));if(c<0||l+c>o)return null;let u=-a*qs.dot(kh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/to.setFromMatrixColumn(e,0).length(),r=1/to.setFromMatrixColumn(e,1).length(),o=1/to.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){let d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xx,e,yx)}lookAt(e,t,n){let s=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Ys.crossVectors(n,Ci),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Ys.crossVectors(n,Ci)),Ys.normalize(),El.crossVectors(Ci,Ys),s[0]=Ys.x,s[4]=El.x,s[8]=Ci.x,s[1]=Ys.y,s[5]=El.y,s[9]=Ci.y,s[2]=Ys.z,s[6]=El.z,s[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],x=n[7],_=n[11],S=n[15],P=s[0],T=s[4],U=s[8],Y=s[12],y=s[1],A=s[5],Z=s[9],K=s[13],j=s[2],xe=s[6],te=s[10],he=s[14],oe=s[3],_e=s[7],Pe=s[11],Re=s[15];return r[0]=o*P+a*y+l*j+c*oe,r[4]=o*T+a*A+l*xe+c*_e,r[8]=o*U+a*Z+l*te+c*Pe,r[12]=o*Y+a*K+l*he+c*Re,r[1]=u*P+h*y+d*j+f*oe,r[5]=u*T+h*A+d*xe+f*_e,r[9]=u*U+h*Z+d*te+f*Pe,r[13]=u*Y+h*K+d*he+f*Re,r[2]=g*P+v*y+m*j+p*oe,r[6]=g*T+v*A+m*xe+p*_e,r[10]=g*U+v*Z+m*te+p*Pe,r[14]=g*Y+v*K+m*he+p*Re,r[3]=M*P+x*y+_*j+S*oe,r[7]=M*T+x*A+_*xe+S*_e,r[11]=M*U+x*Z+_*te+S*Pe,r[15]=M*Y+x*K+_*he+S*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*f-n*l*f)+v*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*u-r*l*u)+m*(+t*c*h-t*a*f-r*o*h+n*o*f+r*a*u-n*c*u)+p*(-s*a*u-t*l*h+t*a*d+s*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=h*m*c-v*d*c+v*l*f-a*m*f-h*l*p+a*d*p,x=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,_=u*v*c-g*h*c+g*a*f-o*v*f-u*a*p+o*h*p,S=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,P=t*M+n*x+s*_+r*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/P;return e[0]=M*T,e[1]=(v*d*r-h*m*r-v*s*f+n*m*f+h*s*p-n*d*p)*T,e[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*T,e[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*f-n*l*f)*T,e[4]=x*T,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*T,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*T,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*T,e[8]=_*T,e[9]=(g*h*r-u*v*r-g*n*f+t*v*f+u*n*p-t*h*p)*T,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*f-t*a*f)*T,e[12]=S*T,e[13]=(u*v*s-g*h*s+g*n*d-t*v*d-u*n*m+t*h*m)*T,e[14]=(g*a*s-o*v*s-g*n*l+t*v*l+o*n*m-t*a*m)*T,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*d+t*a*d)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,v=o*u,m=o*h,p=a*h,M=l*c,x=l*u,_=l*h,S=n.x,P=n.y,T=n.z;return s[0]=(1-(v+p))*S,s[1]=(f+_)*S,s[2]=(g-x)*S,s[3]=0,s[4]=(f-_)*P,s[5]=(1-(d+p))*P,s[6]=(m+M)*P,s[7]=0,s[8]=(g+x)*T,s[9]=(m-M)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=to.set(s[0],s[1],s[2]).length(),o=to.set(s[4],s[5],s[6]).length(),a=to.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yi.copy(this);let c=1/r,u=1/o,h=1/a;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=h,Yi.elements[9]*=h,Yi.elements[10]*=h,t.setFromRotationMatrix(Yi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=As){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===As)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oc)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=As){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*c,f=(n+s)*u,g,v;if(a===As)g=(o+r)*h,v=-2*h;else if(a===oc)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},to=new b,Yi=new ft,xx=new b(0,0,0),yx=new b(1,1,1),Ys=new b,El=new b,Ci=new b,d0=new ft,f0=new En,Ft=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return d0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f0.setFromEuler(this),this.setFromQuaternion(f0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ft.DEFAULT_ORDER="XYZ";var Sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vx=0,p0=new b,no=new En,Es=new ft,bl=new b,ha=new b,_x=new b,Mx=new En,m0=new b(1,0,0),g0=new b(0,1,0),x0=new b(0,0,1),y0={type:"added"},Ex={type:"removed"},io={type:"childadded",child:null},Vh={type:"childremoved",child:null},Lt=class i extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new b,t=new Ft,n=new En,s=new b(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new It}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.multiply(no),this}rotateOnWorldAxis(e,t){return no.setFromAxisAngle(e,t),this.quaternion.premultiply(no),this}rotateX(e){return this.rotateOnAxis(m0,e)}rotateY(e){return this.rotateOnAxis(g0,e)}rotateZ(e){return this.rotateOnAxis(x0,e)}translateOnAxis(e,t){return p0.copy(e).applyQuaternion(this.quaternion),this.position.add(p0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(m0,e)}translateY(e){return this.translateOnAxis(g0,e)}translateZ(e){return this.translateOnAxis(x0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bl.copy(e):bl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(ha,bl,this.up):Es.lookAt(bl,ha,this.up),this.quaternion.setFromRotationMatrix(Es),s&&(Es.extractRotation(s.matrixWorld),no.setFromRotationMatrix(Es),this.quaternion.premultiply(no.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(y0),io.child=e,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ex),Vh.child=e,this.dispatchEvent(Vh),Vh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Es.multiply(e.parent.matrixWorld)),e.applyMatrix4(Es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(y0),io.child=e,this.dispatchEvent(io),io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Lt.DEFAULT_UP=new b(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zi=new b,bs=new b,Gh=new b,ws=new b,so=new b,ro=new b,v0=new b,Wh=new b,Xh=new b,qh=new b,Yh=new $t,Zh=new $t,Jh=new $t,$s=class i{constructor(e=new b,t=new b,n=new b){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zi.subVectors(e,t),s.cross(Zi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zi.subVectors(s,t),bs.subVectors(n,t),Gh.subVectors(e,t);let o=Zi.dot(Zi),a=Zi.dot(bs),l=Zi.dot(Gh),c=bs.dot(bs),u=bs.dot(Gh),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ws.x),l.addScaledVector(o,ws.y),l.addScaledVector(a,ws.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Yh.setScalar(0),Zh.setScalar(0),Jh.setScalar(0),Yh.fromBufferAttribute(e,t),Zh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Yh,r.x),o.addScaledVector(Zh,r.y),o.addScaledVector(Jh,r.z),o}static isFrontFacing(e,t,n,s){return Zi.subVectors(n,t),bs.subVectors(e,t),Zi.cross(bs).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Zi.cross(bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;so.subVectors(s,n),ro.subVectors(r,n),Wh.subVectors(e,n);let l=so.dot(Wh),c=ro.dot(Wh);if(l<=0&&c<=0)return t.copy(n);Xh.subVectors(e,s);let u=so.dot(Xh),h=ro.dot(Xh);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(so,o);qh.subVectors(e,r);let f=so.dot(qh),g=ro.dot(qh);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ro,a);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return v0.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(v0,a);let p=1/(m+v+d);return o=v*p,a=d*p,t.copy(n).addScaledVector(so,o).addScaledVector(ro,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zs={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Kh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Zt.workingColorSpace){if(e=Qd(e,1),t=$n(t,0,1),n=$n(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Kh(o,r,e+1/3),this.g=Kh(o,r,e),this.b=Kh(o,r,e-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(e,t=Dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let n=Lp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}copyLinearToSRGB(e){return this.r=Uh(e.r),this.g=Uh(e.g),this.b=Uh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return Zt.fromWorkingColorSpace(ci.copy(this),e),Math.round($n(ci.r*255,0,255))*65536+Math.round($n(ci.g*255,0,255))*256+Math.round($n(ci.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ci.copy(this),t);let n=ci.r,s=ci.g,r=ci.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ci.copy(this),t),e.r=ci.r,e.g=ci.g,e.b=ci.b,e}getStyle(e=Dt){Zt.fromWorkingColorSpace(ci.copy(this),e);let t=ci.r,n=ci.g,s=ci.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zs),this.setHSL(Zs.h+e,Zs.s+t,Zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zs),e.getHSL(wl);let n=va(Zs.h,wl.h,t),s=va(Zs.s,wl.s,t),r=va(Zs.l,wl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ci=new ve;ve.NAMES=Lp;var bx=0,Qi=class extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=xo,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=r0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mu&&(n.blendSrc=this.blendSrc),this.blendDst!==gu&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==r0&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yt=class extends Qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=vp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new b,Sl=new Se,sn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ed,this.updateRanges=[],this.gpuType=ls,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ed&&(e.usage=this.usage),e}};var wo=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hc=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},wx=0,zi=new ft,$h=new Lt,oo=new b,Pi=new Bi,ua=new Bi,Kn=new b,Gt=class i extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?hc:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new It().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return $h.lookAt(e),$h.updateMatrix(),this.applyMatrix4($h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pi.setFromBufferAttribute(r),this.morphTargetsRelative?(Kn.addVectors(this.boundingBox.min,Pi.min),this.boundingBox.expandByPoint(Kn),Kn.addVectors(this.boundingBox.max,Pi.max),this.boundingBox.expandByPoint(Kn)):(this.boundingBox.expandByPoint(Pi.min),this.boundingBox.expandByPoint(Pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(e){let n=this.boundingSphere.center;if(Pi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ua.setFromBufferAttribute(a),this.morphTargetsRelative?(Kn.addVectors(Pi.min,ua.min),Pi.expandByPoint(Kn),Kn.addVectors(Pi.max,ua.max),Pi.expandByPoint(Kn)):(Pi.expandByPoint(ua.min),Pi.expandByPoint(ua.max))}Pi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kn.fromBufferAttribute(a,c),l&&(oo.fromBufferAttribute(e,c),Kn.add(oo)),s=Math.max(s,n.distanceToSquared(Kn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new b,l[U]=new b;let c=new b,u=new b,h=new b,d=new Se,f=new Se,g=new Se,v=new b,m=new b;function p(U,Y,y){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,y),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(A),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(A),a[U].add(v),a[Y].add(v),a[y].add(v),l[U].add(m),l[Y].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let U=0,Y=M.length;U<Y;++U){let y=M[U],A=y.start,Z=y.count;for(let K=A,j=A+Z;K<j;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}let x=new b,_=new b,S=new b,P=new b;function T(U){S.fromBufferAttribute(s,U),P.copy(S);let Y=a[U];x.copy(Y),x.sub(S.multiplyScalar(S.dot(Y))).normalize(),_.crossVectors(P,Y);let A=_.dot(l[U])<0?-1:1;o.setXYZW(U,x.x,x.y,x.z,A)}for(let U=0,Y=M.length;U<Y;++U){let y=M[U],A=y.start,Z=y.count;for(let K=A,j=A+Z;K<j;K+=3)T(e.getX(K+0)),T(e.getX(K+1)),T(e.getX(K+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new b,r=new b,o=new b,a=new b,l=new b,c=new b,u=new b,h=new b;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kn.fromBufferAttribute(e,t),Kn.normalize(),e.setXYZ(t,Kn.x,Kn.y,Kn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new sn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_0=new ft,mr=new Tr,Tl=new ki,M0=new b,Rl=new b,Al=new b,Cl=new b,jh=new b,Pl=new b,E0=new b,Il=new b,Ie=class extends Lt{constructor(e=new Gt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Pl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(jh.fromBufferAttribute(h,e),o?Pl.addScaledVector(jh,u):Pl.addScaledVector(jh.sub(t),u))}t.add(Pl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(r),mr.copy(e.ray).recast(e.near),!(Tl.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Tl,M0)===null||mr.origin.distanceToSquared(M0)>(e.far-e.near)**2))&&(_0.copy(r).invert(),mr.copy(e.ray).applyMatrix4(_0),!(n.boundingBox!==null&&mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=x;_<S;_+=3){let P=a.getX(_),T=a.getX(_+1),U=a.getX(_+2);s=Dl(this,p,e,n,c,u,h,P,T,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=a.getX(m),x=a.getX(m+1),_=a.getX(m+2);s=Dl(this,o,e,n,c,u,h,M,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,S=x;_<S;_+=3){let P=_,T=_+1,U=_+2;s=Dl(this,p,e,n,c,u,h,P,T,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,x=m+1,_=m+2;s=Dl(this,o,e,n,c,u,h,M,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Sx(i,e,t,n,s,r,o,a){let l;if(e.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Fi,a),l===null)return null;Il.copy(a),Il.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:i}}function Dl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Rl),i.getVertexPosition(l,Al),i.getVertexPosition(c,Cl);let u=Sx(i,e,t,n,Rl,Al,Cl,E0);if(u){let h=new b;$s.getBarycoord(E0,Rl,Al,Cl,h),s&&(u.uv=$s.getInterpolatedAttribute(s,a,l,c,h,new Se)),r&&(u.uv1=$s.getInterpolatedAttribute(r,a,l,c,h,new Se)),o&&(u.normal=$s.getInterpolatedAttribute(o,a,l,c,h,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new b,materialIndex:0};$s.getNormal(Rl,Al,Cl,d.normal),u.face=d,u.barycoord=h}return u}var At=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(h,2));function g(v,m,p,M,x,_,S,P,T,U,Y){let y=_/T,A=S/U,Z=_/2,K=S/2,j=P/2,xe=T+1,te=U+1,he=0,oe=0,_e=new b;for(let Pe=0;Pe<te;Pe++){let Re=Pe*A-K;for(let Be=0;Be<xe;Be++){let at=Be*y-Z;_e[v]=at*M,_e[m]=Re*x,_e[p]=j,c.push(_e.x,_e.y,_e.z),_e[v]=0,_e[m]=0,_e[p]=P>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(Be/T),h.push(1-Pe/U),he+=1}}for(let Pe=0;Pe<U;Pe++)for(let Re=0;Re<T;Re++){let Be=d+Re+xe*Pe,at=d+Re+xe*(Pe+1),ce=d+(Re+1)+xe*(Pe+1),Ee=d+(Re+1)+xe*Pe;l.push(Be,at,Ee),l.push(at,ce,Ee),oe+=6}a.addGroup(f,oe,Y),f+=oe,d+=he}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function So(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function di(i){let e={};for(let t=0;t<i.length;t++){let n=So(i[t]);for(let s in n)e[s]=n[s]}return e}function Tx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Up(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}var Si={clone:So,merge:di},Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends Qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=Tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},uc=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Js=new b,b0=new Se,w0=new Se,ti=class extends uc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Js.x,Js.y).multiplyScalar(-e/Js.z),Js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Js.x,Js.y).multiplyScalar(-e/Js.z)}getViewSize(e,t){return this.getViewBounds(e,b0,w0),t.subVectors(w0,b0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ya*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ao=-90,lo=1,sd=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ti(ao,lo,e,t);s.layers=this.layers,this.add(s);let r=new ti(ao,lo,e,t);r.layers=this.layers,this.add(r);let o=new ti(ao,lo,e,t);o.layers=this.layers,this.add(o);let a=new ti(ao,lo,e,t);a.layers=this.layers,this.add(a);let l=new ti(ao,lo,e,t);l.layers=this.layers,this.add(l);let c=new ti(ao,lo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===As)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},dc=class extends Mi{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Eo,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rd=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ji}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new At(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:kn});r.uniforms.tEquirect.value=t;let o=new Ie(s,r),a=t.minFilter;return t.minFilter===Rs&&(t.minFilter=Ji),new sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Qh=new b,Cx=new b,Px=new It,Ts=class{constructor(e=new b(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qh.subVectors(n,t).cross(Cx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Px.getNormalMatrix(e),s=this.coplanarPoint(Qh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gr=new ki,Ll=new b,Ta=class{constructor(e=new Ts,t=new Ts,n=new Ts,s=new Ts,r=new Ts,o=new Ts){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=As){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],M=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,d-c,m-f,_-p).normalize(),n[1].setComponents(l+r,d+c,m+f,_+p).normalize(),n[2].setComponents(l+o,d+u,m+g,_+M).normalize(),n[3].setComponents(l-o,d-u,m-g,_-M).normalize(),n[4].setComponents(l-a,d-h,m-v,_-x).normalize(),t===As)n[5].setComponents(l+a,d+h,m+v,_+x).normalize();else if(t===oc)n[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ll.x=s.normal.x>0?e.max.x:e.min.x,Ll.y=s.normal.y>0?e.max.y:e.min.y,Ll.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Np(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ix(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var mt=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let M=p*d-o;for(let x=0;x<c;x++){let _=x*h-r;g.push(_,-M,0),v.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let x=M+c*p,_=M+c*(p+1),S=M+1+c*(p+1),P=M+1+c*p;f.push(x,_,P),f.push(_,S,P)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
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
#endif`,kx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,t1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",c1=`
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
}`,h1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v1=`#ifdef USE_GRADIENTMAP
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
}`,_1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
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
#endif`,w1=`#ifdef USE_ENVMAP
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
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
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
#endif`,P1=`struct PhysicalMaterial {
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
}`,I1=`
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y1=`#ifdef USE_MORPHTARGETS
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
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ey=`#ifdef USE_NORMALMAP
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
#endif`,ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gy=`float getShadowMask() {
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
}`,xy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,vy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_y=`#ifdef USE_SKINNING
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
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,by=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
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
#endif`,Ty=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dy=`uniform sampler2D t2D;
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`#include <common>
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
}`,Oy=`#if DEPTH_PACKING == 3200
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
}`,Fy=`#define DISTANCE
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
}`,By=`#define DISTANCE
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
}`,ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Xy=`#include <common>
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
}`,qy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,Zy=`#define LAMBERT
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
}`,Jy=`#define MATCAP
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
}`,Ky=`#define MATCAP
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
}`,$y=`#define NORMAL
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
}`,jy=`#define NORMAL
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
}`,Qy=`#define PHONG
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
}`,ev=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,nv=`#define STANDARD
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
}`,iv=`#define TOON
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
}`,sv=`#define TOON
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
}`,rv=`uniform float size;
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
}`,ov=`uniform vec3 diffuse;
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
}`,av=`#include <common>
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
}`,lv=`uniform vec3 color;
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
}`,cv=`uniform float rotation;
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
}`,hv=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Dx,alphahash_pars_fragment:Lx,alphamap_fragment:Ux,alphamap_pars_fragment:Nx,alphatest_fragment:Hx,alphatest_pars_fragment:zx,aomap_fragment:Ox,aomap_pars_fragment:Fx,batching_pars_vertex:Bx,batching_vertex:kx,begin_vertex:Vx,beginnormal_vertex:Gx,bsdfs:Wx,iridescence_fragment:Xx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:Zx,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:Kx,color_fragment:$x,color_pars_fragment:jx,color_pars_vertex:Qx,color_vertex:e1,common:t1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:s1,displacementmap_vertex:r1,emissivemap_fragment:o1,emissivemap_pars_fragment:a1,colorspace_fragment:l1,colorspace_pars_fragment:c1,envmap_fragment:h1,envmap_common_pars_fragment:u1,envmap_pars_fragment:d1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:w1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:x1,fog_pars_fragment:y1,gradientmap_pars_fragment:v1,lightmap_pars_fragment:_1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:E1,lights_pars_begin:b1,lights_toon_fragment:S1,lights_toon_pars_fragment:T1,lights_phong_fragment:R1,lights_phong_pars_fragment:A1,lights_physical_fragment:C1,lights_physical_pars_fragment:P1,lights_fragment_begin:I1,lights_fragment_maps:D1,lights_fragment_end:L1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:z1,map_fragment:O1,map_pars_fragment:F1,map_particle_fragment:B1,map_particle_pars_fragment:k1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:G1,morphinstance_vertex:W1,morphcolor_vertex:X1,morphnormal_vertex:q1,morphtarget_pars_vertex:Y1,morphtarget_vertex:Z1,normal_fragment_begin:J1,normal_fragment_maps:K1,normal_pars_fragment:$1,normal_pars_vertex:j1,normal_vertex:Q1,normalmap_pars_fragment:ey,clearcoat_normal_fragment_begin:ty,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:sy,opaque_fragment:ry,packing:oy,premultiplied_alpha_fragment:ay,project_vertex:ly,dithering_fragment:cy,dithering_pars_fragment:hy,roughnessmap_fragment:uy,roughnessmap_pars_fragment:dy,shadowmap_pars_fragment:fy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:gy,skinbase_vertex:xy,skinning_pars_vertex:yy,skinning_vertex:vy,skinnormal_vertex:_y,specularmap_fragment:My,specularmap_pars_fragment:Ey,tonemapping_fragment:by,tonemapping_pars_fragment:wy,transmission_fragment:Sy,transmission_pars_fragment:Ty,uv_pars_fragment:Ry,uv_pars_vertex:Ay,uv_vertex:Cy,worldpos_vertex:Py,background_vert:Iy,background_frag:Dy,backgroundCube_vert:Ly,backgroundCube_frag:Uy,cube_vert:Ny,cube_frag:Hy,depth_vert:zy,depth_frag:Oy,distanceRGBA_vert:Fy,distanceRGBA_frag:By,equirect_vert:ky,equirect_frag:Vy,linedashed_vert:Gy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:qy,meshlambert_vert:Yy,meshlambert_frag:Zy,meshmatcap_vert:Jy,meshmatcap_frag:Ky,meshnormal_vert:$y,meshnormal_frag:jy,meshphong_vert:Qy,meshphong_frag:ev,meshphysical_vert:tv,meshphysical_frag:nv,meshtoon_vert:iv,meshtoon_frag:sv,points_vert:rv,points_frag:ov,shadow_vert:av,shadow_frag:lv,sprite_vert:cv,sprite_frag:hv},Qe={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},as={basic:{uniforms:di([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:di([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:di([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:di([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:di([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new ve(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:di([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:di([Qe.points,Qe.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:di([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:di([Qe.common,Qe.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:di([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:di([Qe.sprite,Qe.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:di([Qe.common,Qe.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:di([Qe.lights,Qe.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};as.physical={uniforms:di([as.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var Ul={r:0,b:0,g:0},xr=new Ft,uv=new ft;function dv(i,e,t,n,s,r,o){let a=new ve(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1,_=g(M);_===null?p(a,l):_&&_.isColor&&(p(_,1),x=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===Oc)?(u===void 0&&(u=new Ie(new At(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:So(as.backgroundCube.uniforms),vertexShader:as.backgroundCube.vertexShader,fragmentShader:as.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xr.copy(x.backgroundRotation),xr.x*=-1,xr.y*=-1,xr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(xr)),u.material.toneMapped=Zt.getTransfer(_.colorSpace)!==fn,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ie(new mt(2,2),new Wt({name:"BackgroundMaterial",uniforms:So(as.background.uniforms),vertexShader:as.background.vertexShader,fragmentShader:as.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(_.colorSpace)!==fn,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Ul,Up(i)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m}}function fv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(y,A,Z,K,j){let xe=!1,te=h(K,Z,A);r!==te&&(r=te,c(r.object)),xe=f(y,K,Z,j),xe&&g(y,K,Z,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(xe||o)&&(o=!1,_(y,A,Z,K),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,A,Z){let K=Z.wireframe===!0,j=n[y.id];j===void 0&&(j={},n[y.id]=j);let xe=j[A.id];xe===void 0&&(xe={},j[A.id]=xe);let te=xe[K];return te===void 0&&(te=d(l()),xe[K]=te),te}function d(y){let A=[],Z=[],K=[];for(let j=0;j<t;j++)A[j]=0,Z[j]=0,K[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:Z,attributeDivisors:K,object:y,attributes:{},index:null}}function f(y,A,Z,K){let j=r.attributes,xe=A.attributes,te=0,he=Z.getAttributes();for(let oe in he)if(he[oe].location>=0){let Pe=j[oe],Re=xe[oe];if(Re===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(Re=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(Re=y.instanceColor)),Pe===void 0||Pe.attribute!==Re||Re&&Pe.data!==Re.data)return!0;te++}return r.attributesNum!==te||r.index!==K}function g(y,A,Z,K){let j={},xe=A.attributes,te=0,he=Z.getAttributes();for(let oe in he)if(he[oe].location>=0){let Pe=xe[oe];Pe===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(Pe=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(Pe=y.instanceColor));let Re={};Re.attribute=Pe,Pe&&Pe.data&&(Re.data=Pe.data),j[oe]=Re,te++}r.attributes=j,r.attributesNum=te,r.index=K}function v(){let y=r.newAttributes;for(let A=0,Z=y.length;A<Z;A++)y[A]=0}function m(y){p(y,0)}function p(y,A){let Z=r.newAttributes,K=r.enabledAttributes,j=r.attributeDivisors;Z[y]=1,K[y]===0&&(i.enableVertexAttribArray(y),K[y]=1),j[y]!==A&&(i.vertexAttribDivisor(y,A),j[y]=A)}function M(){let y=r.newAttributes,A=r.enabledAttributes;for(let Z=0,K=A.length;Z<K;Z++)A[Z]!==y[Z]&&(i.disableVertexAttribArray(Z),A[Z]=0)}function x(y,A,Z,K,j,xe,te){te===!0?i.vertexAttribIPointer(y,A,Z,j,xe):i.vertexAttribPointer(y,A,Z,K,j,xe)}function _(y,A,Z,K){v();let j=K.attributes,xe=Z.getAttributes(),te=A.defaultAttributeValues;for(let he in xe){let oe=xe[he];if(oe.location>=0){let _e=j[he];if(_e===void 0&&(he==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),he==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),_e!==void 0){let Pe=_e.normalized,Re=_e.itemSize,Be=e.get(_e);if(Be===void 0)continue;let at=Be.buffer,ce=Be.type,Ee=Be.bytesPerElement,ye=ce===i.INT||ce===i.UNSIGNED_INT||_e.gpuType===Xd;if(_e.isInterleavedBufferAttribute){let Ce=_e.data,De=Ce.stride,we=_e.offset;if(Ce.isInstancedInterleavedBuffer){for(let ke=0;ke<oe.locationSize;ke++)p(oe.location+ke,Ce.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ke=0;ke<oe.locationSize;ke++)m(oe.location+ke);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ke=0;ke<oe.locationSize;ke++)x(oe.location+ke,Re/oe.locationSize,ce,Pe,De*Ee,(we+Re/oe.locationSize*ke)*Ee,ye)}else{if(_e.isInstancedBufferAttribute){for(let Ce=0;Ce<oe.locationSize;Ce++)p(oe.location+Ce,_e.meshPerAttribute);y.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ce=0;Ce<oe.locationSize;Ce++)m(oe.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Ce=0;Ce<oe.locationSize;Ce++)x(oe.location+Ce,Re/oe.locationSize,ce,Pe,Re*Ee,Re/oe.locationSize*Ce*Ee,ye)}}else if(te!==void 0){let Pe=te[he];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(oe.location,Pe);break;case 3:i.vertexAttrib3fv(oe.location,Pe);break;case 4:i.vertexAttrib4fv(oe.location,Pe);break;default:i.vertexAttrib1fv(oe.location,Pe)}}}}M()}function S(){U();for(let y in n){let A=n[y];for(let Z in A){let K=A[Z];for(let j in K)u(K[j].object),delete K[j];delete A[Z]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let Z in A){let K=A[Z];for(let j in K)u(K[j].object),delete K[j];delete A[Z]}delete n[y.id]}function T(y){for(let A in n){let Z=n[A];if(Z[y.id]===void 0)continue;let K=Z[y.id];for(let j in K)u(K[j].object),delete K[j];delete Z[y.id]}}function U(){Y(),o=!0,r!==s&&(r=s,c(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:Y,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function pv(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==_i&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let U=T===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ji&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ls&&!U)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:S,maxSamples:P}}function gv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ts,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let M=r?0:n,x=M*4,_=p.clippingState||null;l.value=_,_=u(g,d,x,f);for(let S=0;S!==x;++S)_[S]=t[S];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,_=f;x!==v;++x,_+=4)o.copy(h[x]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function xv(i){let e=new WeakMap;function t(o,a){return a===wu?o.mapping=Eo:a===Su&&(o.mapping=bo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wu||a===Su)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rd(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var To=class extends uc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mo=4,S0=[.125,.215,.35,.446,.526,.582],wr=20,eu=new To,T0=new ve,tu=null,nu=0,iu=0,su=!1,br=(1+Math.sqrt(5))/2,co=1/br,R0=[new b(-br,co,0),new b(br,co,0),new b(-co,0,br),new b(co,0,br),new b(0,br,-co),new b(0,br,co),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=su,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Eo||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:hi,format:_i,colorSpace:rr,depthBuffer:!1},s=A0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yv(r)),this._blurMaterial=vv(r,e,t)}return s}_compileMaterial(e){let t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,eu)}_sceneToCubeUV(e,t,n,s){let a=new ti(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(T0),u.toneMapping=Qs,u.autoClear=!1;let f=new yt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new Ie(new At,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(T0),v=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Nl(s,M*x,p>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Eo||e.mapping===bo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Nl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,eu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=R0[(s-r-1)%R0.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new Ie(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*wr-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):wr;m>wr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wr}`);let p=[],M=0;for(let T=0;T<wr;++T){let U=T/v,Y=Math.exp(-U*U/2);p.push(Y),T===0?M+=Y:T<m&&(M+=2*Y)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let _=this._sizeLods[s],S=3*_*(s>x-mo?s-x+mo:0),P=4*(this._cubeSize-_);Nl(t,S,P,3*_,2*_),l.setRenderTarget(t),l.render(h,eu)}};function yv(i){let e=[],t=[],n=[],s=i,r=i-mo+1+S0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-mo?l=S0[o-i+mo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*f),x=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let P=0;P<f;P++){let T=P%3*2/3-1,U=P>2?0:-1,Y=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];M.set(Y,v*g*P),x.set(d,m*g*P);let y=[P,P,P,P,P,P];_.set(y,p*g*P)}let S=new Gt;S.setAttribute("position",new sn(M,v)),S.setAttribute("uv",new sn(x,m)),S.setAttribute("faceIndex",new sn(_,p)),e.push(S),s>mo&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function A0(i,e,t){let n=new Un(i,e,t);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Nl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vv(i,e,t){let n=new Float32Array(wr),s=new b(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ef(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function C0(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ef(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function P0(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ef(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ef(){return`

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
	`}function _v(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===wu||l===Su,u=l===Eo||l===bo;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ro(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Ro(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&tc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ev(i,e,t,n){let s={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let d=[],f=h.index,g=h.attributes.position,v=0;if(f!==null){let M=f.array;v=f.version;for(let x=0,_=M.length;x<_;x+=3){let S=M[x+0],P=M[x+1],T=M[x+2];d.push(S,P,P,T,T,S)}}else if(g!==void 0){let M=g.array;v=g.version;for(let x=0,_=M.length/3-1;x<_;x+=3){let S=x+0,P=x+1,T=x+2;d.push(S,P,P,T,T,S)}}else return;let m=new(Dp(d)?hc:wo)(d,1);m.version=v;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function bv(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<v.length;M++)t.update(p,n,v[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sv(i,e,t){let n=new WeakMap,s=new $t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let Y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=a.attributes.position.count*x,S=1;_>e.maxTextureSize&&(S=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let P=new Float32Array(_*S*4*h),T=new cc(P,_,S,h);T.type=ls,T.needsUpdate=!0;let U=x*4;for(let y=0;y<h;y++){let A=m[y],Z=p[y],K=M[y],j=_*S*4*y;for(let xe=0;xe<A.count;xe++){let te=xe*U;f===!0&&(s.fromBufferAttribute(A,xe),P[j+te+0]=s.x,P[j+te+1]=s.y,P[j+te+2]=s.z,P[j+te+3]=0),g===!0&&(s.fromBufferAttribute(Z,xe),P[j+te+4]=s.x,P[j+te+5]=s.y,P[j+te+6]=s.z,P[j+te+7]=0),v===!0&&(s.fromBufferAttribute(K,xe),P[j+te+8]=s.x,P[j+te+9]=s.y,P[j+te+10]=s.z,P[j+te+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Se(_,S)},n.set(a,d),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Tv(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Ao=class extends Mi{constructor(e,t,n,s,r,o,a,l,c,u=yo){if(u!==yo&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===yo&&(n=Sr),n===void 0&&u===nr&&(n=tr),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Hp=new Mi,I0=new Ao(1,1),zp=new cc,Op=new id,Fp=new dc,D0=[],L0=[],U0=new Float32Array(16),N0=new Float32Array(9),H0=new Float32Array(4);function Oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=D0[s];if(r===void 0&&(r=new Float32Array(s),D0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Bc(i,e){let t=L0[e];t===void 0&&(t=new Int32Array(e),L0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Av(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;i.uniform2fv(this.addr,e),Gn(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vn(t,e))return;i.uniform3fv(this.addr,e),Gn(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;i.uniform4fv(this.addr,e),Gn(t,e)}}function Iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gn(t,e)}else{if(Vn(t,n))return;H0.set(n),i.uniformMatrix2fv(this.addr,!1,H0),Gn(t,n)}}function Dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gn(t,e)}else{if(Vn(t,n))return;N0.set(n),i.uniformMatrix3fv(this.addr,!1,N0),Gn(t,n)}}function Lv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gn(t,e)}else{if(Vn(t,n))return;U0.set(n),i.uniformMatrix4fv(this.addr,!1,U0),Gn(t,n)}}function Uv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;i.uniform2iv(this.addr,e),Gn(t,e)}}function Hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vn(t,e))return;i.uniform3iv(this.addr,e),Gn(t,e)}}function zv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;i.uniform4iv(this.addr,e),Gn(t,e)}}function Ov(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vn(t,e))return;i.uniform2uiv(this.addr,e),Gn(t,e)}}function Bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vn(t,e))return;i.uniform3uiv(this.addr,e),Gn(t,e)}}function kv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vn(t,e))return;i.uniform4uiv(this.addr,e),Gn(t,e)}}function Vv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(I0.compareFunction=Ip,r=I0):r=Hp,t.setTexture2D(e||r,s)}function Gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Op,s)}function Wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Fp,s)}function Xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zp,s)}function qv(i){switch(i){case 5126:return Rv;case 35664:return Av;case 35665:return Cv;case 35666:return Pv;case 35674:return Iv;case 35675:return Dv;case 35676:return Lv;case 5124:case 35670:return Uv;case 35667:case 35671:return Nv;case 35668:case 35672:return Hv;case 35669:case 35673:return zv;case 5125:return Ov;case 36294:return Fv;case 36295:return Bv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(i,e){i.uniform1fv(this.addr,e)}function Zv(i,e){let t=Oo(e,this.size,2);i.uniform2fv(this.addr,t)}function Jv(i,e){let t=Oo(e,this.size,3);i.uniform3fv(this.addr,t)}function Kv(i,e){let t=Oo(e,this.size,4);i.uniform4fv(this.addr,t)}function $v(i,e){let t=Oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jv(i,e){let t=Oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qv(i,e){let t=Oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function e_(i,e){i.uniform1iv(this.addr,e)}function t_(i,e){i.uniform2iv(this.addr,e)}function n_(i,e){i.uniform3iv(this.addr,e)}function i_(i,e){i.uniform4iv(this.addr,e)}function s_(i,e){i.uniform1uiv(this.addr,e)}function r_(i,e){i.uniform2uiv(this.addr,e)}function o_(i,e){i.uniform3uiv(this.addr,e)}function a_(i,e){i.uniform4uiv(this.addr,e)}function l_(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Vn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hp,r[o])}function c_(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Vn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Op,r[o])}function h_(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Vn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Fp,r[o])}function u_(i,e,t){let n=this.cache,s=e.length,r=Bc(t,s);Vn(n,r)||(i.uniform1iv(this.addr,r),Gn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zp,r[o])}function d_(i){switch(i){case 5126:return Yv;case 35664:return Zv;case 35665:return Jv;case 35666:return Kv;case 35674:return $v;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return o_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}var od=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qv(t.type)}},ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d_(t.type)}},ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},ru=/(\w+)(\])?(\[|\.)?/g;function z0(i,e){i.seq.push(e),i.map[e.id]=e}function f_(i,e,t){let n=i.name,s=n.length;for(ru.lastIndex=0;;){let r=ru.exec(n),o=ru.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){z0(t,c===void 0?new od(a,i,e):new ad(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new ld(a),z0(t,h)),t=h}}}var _o=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);f_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function O0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var p_=37297,m_=0;function g_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function x_(i){let e=Zt.getPrimaries(Zt.workingColorSpace),t=Zt.getPrimaries(i),n;switch(e===t?n="":e===rc&&t===sc?n="LinearDisplayP3ToLinearSRGB":e===sc&&t===rc&&(n="LinearSRGBToLinearDisplayP3"),i){case rr:case Fc:return[n,"LinearTransferOETF"];case Dt:case jd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function F0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+g_(i.getShaderSource(e),o)}else return s}function y_(i,e){let t=x_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function v_(i,e){let t;switch(e){case Bd:t="Linear";break;case kd:t="Reinhard";break;case Vd:t="Cineon";break;case za:t="ACESFilmic";break;case Gd:t="AgX";break;case Wd:t="Neutral";break;case Ug:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Hl=new b;function __(){Zt.getLuminanceCoefficients(Hl);let i=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function E_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function xa(i){return i!==""}function B0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(i){return i.replace(w_,T_)}var S_=new Map;function T_(i,e){let t=Pt[e];if(t===void 0){let n=S_.get(e);if(n!==void 0)t=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(i){return i.replace(R_,A_)}function A_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function G0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function C_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Od?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ss&&(e="SHADOWMAP_TYPE_VSM"),e}function P_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Eo:case bo:e="ENVMAP_TYPE_CUBE";break;case Oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function D_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case vp:e="ENVMAP_BLENDING_MULTIPLY";break;case Dg:e="ENVMAP_BLENDING_MIX";break;case Lg:e="ENVMAP_BLENDING_ADD";break}return e}function L_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function U_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=C_(t),c=P_(t),u=I_(t),h=D_(t),d=L_(t),f=M_(t),g=E_(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[G0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qs?"#define TONE_MAPPING":"",t.toneMapping!==Qs?Pt.tonemapping_pars_fragment:"",t.toneMapping!==Qs?v_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,y_("linearToOutputTexel",t.outputColorSpace),__(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=cd(o),o=B0(o,t),o=k0(o,t),a=cd(a),a=B0(a,t),a=k0(a,t),o=V0(o),a=V0(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===o0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=M+m+o,_=M+p+a,S=O0(s,s.VERTEX_SHADER,x),P=O0(s,s.FRAGMENT_SHADER,_);s.attachShader(v,S),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(A){if(i.debug.checkShaderErrors){let Z=s.getProgramInfoLog(v).trim(),K=s.getShaderInfoLog(S).trim(),j=s.getShaderInfoLog(P).trim(),xe=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(xe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,P);else{let he=F0(s,S,"vertex"),oe=F0(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+Z+`
`+he+`
`+oe)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(K===""||j==="")&&(te=!1);te&&(A.diagnostics={runnable:xe,programLog:Z,vertexShader:{log:K,prefix:m},fragmentShader:{log:j,prefix:p}})}s.deleteShader(S),s.deleteShader(P),U=new _o(s,v),Y=b_(s,v)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let Y;this.getAttributes=function(){return Y===void 0&&T(this),Y};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(v,p_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=m_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=P,this}var N_=0,hd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ud(e),t.set(e,n)),n}},ud=class{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}};function H_(i,e,t,n,s,r,o){let a=new Sa,l=new hd,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,A,Z,K,j){let xe=K.fog,te=j.geometry,he=y.isMeshStandardMaterial?K.environment:null,oe=(y.isMeshStandardMaterial?t:e).get(y.envMap||he),_e=oe&&oe.mapping===Oc?oe.image.height:null,Pe=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let Re=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Be=Re!==void 0?Re.length:0,at=0;te.morphAttributes.position!==void 0&&(at=1),te.morphAttributes.normal!==void 0&&(at=2),te.morphAttributes.color!==void 0&&(at=3);let ce,Ee,ye,Ce;if(Pe){let $e=as[Pe];ce=$e.vertexShader,Ee=$e.fragmentShader}else ce=y.vertexShader,Ee=y.fragmentShader,l.update(y),ye=l.getVertexShaderID(y),Ce=l.getFragmentShaderID(y);let De=i.getRenderTarget(),we=j.isInstancedMesh===!0,ke=j.isBatchedMesh===!0,Ye=!!y.map,k=!!y.matcap,C=!!oe,ie=!!y.aoMap,$=!!y.lightMap,J=!!y.bumpMap,ue=!!y.normalMap,pe=!!y.displacementMap,G=!!y.emissiveMap,w=!!y.metalnessMap,E=!!y.roughnessMap,F=y.anisotropy>0,re=y.clearcoat>0,B=y.dispersion>0,me=y.iridescence>0,Ne=y.sheen>0,Ue=y.transmission>0,V=F&&!!y.anisotropyMap,q=re&&!!y.clearcoatMap,D=re&&!!y.clearcoatNormalMap,fe=re&&!!y.clearcoatRoughnessMap,Ve=me&&!!y.iridescenceMap,ct=me&&!!y.iridescenceThicknessMap,Oe=Ne&&!!y.sheenColorMap,ee=Ne&&!!y.sheenRoughnessMap,st=!!y.specularMap,Et=!!y.specularColorMap,X=!!y.specularIntensityMap,We=Ue&&!!y.transmissionMap,ge=Ue&&!!y.thicknessMap,Ae=!!y.gradientMap,Xe=!!y.alphaMap,Ke=y.alphaTest>0,Mt=!!y.alphaHash,kt=!!y.extensions,dn=Qs;y.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(dn=i.toneMapping);let se={shaderID:Pe,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:Ee,defines:y.defines,customVertexShaderID:ye,customFragmentShaderID:Ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:ke,batchingColor:ke&&j._colorsTexture!==null,instancing:we,instancingColor:we&&j.instanceColor!==null,instancingMorph:we&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:rr,alphaToCoverage:!!y.alphaToCoverage,map:Ye,matcap:k,envMap:C,envMapMode:C&&oe.mapping,envMapCubeUVHeight:_e,aoMap:ie,lightMap:$,bumpMap:J,normalMap:ue,displacementMap:f&&pe,emissiveMap:G,normalMapObjectSpace:ue&&y.normalMapType===Fg,normalMapTangentSpace:ue&&y.normalMapType===$d,metalnessMap:w,roughnessMap:E,anisotropy:F,anisotropyMap:V,clearcoat:re,clearcoatMap:q,clearcoatNormalMap:D,clearcoatRoughnessMap:fe,dispersion:B,iridescence:me,iridescenceMap:Ve,iridescenceThicknessMap:ct,sheen:Ne,sheenColorMap:Oe,sheenRoughnessMap:ee,specularMap:st,specularColorMap:Et,specularIntensityMap:X,transmission:Ue,transmissionMap:We,thicknessMap:ge,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===xo&&y.alphaToCoverage===!1,alphaMap:Xe,alphaTest:Ke,alphaHash:Mt,combine:y.combine,mapUv:Ye&&m(y.map.channel),aoMapUv:ie&&m(y.aoMap.channel),lightMapUv:$&&m(y.lightMap.channel),bumpMapUv:J&&m(y.bumpMap.channel),normalMapUv:ue&&m(y.normalMap.channel),displacementMapUv:pe&&m(y.displacementMap.channel),emissiveMapUv:G&&m(y.emissiveMap.channel),metalnessMapUv:w&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:V&&m(y.anisotropyMap.channel),clearcoatMapUv:q&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:D&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(y.sheenRoughnessMap.channel),specularMapUv:st&&m(y.specularMap.channel),specularColorMapUv:Et&&m(y.specularColorMap.channel),specularIntensityMapUv:X&&m(y.specularIntensityMap.channel),transmissionMapUv:We&&m(y.transmissionMap.channel),thicknessMapUv:ge&&m(y.thicknessMap.channel),alphaMapUv:Xe&&m(y.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ue||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!te.attributes.uv&&(Ye||Xe),fog:!!xe,useFog:y.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:at,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:dn,decodeVideoTexture:Ye&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===fn,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Rt,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function M(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let Z in y.defines)A.push(Z),A.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(x(A,y),_(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function x(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function _(y,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reverseDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),y.push(a.mask)}function S(y){let A=v[y.type],Z;if(A){let K=as[A];Z=Si.clone(K.uniforms)}else Z=y.uniforms;return Z}function P(y,A){let Z;for(let K=0,j=u.length;K<j;K++){let xe=u[K];if(xe.cacheKey===A){Z=xe,++Z.usedTimes;break}}return Z===void 0&&(Z=new U_(i,A,y,r),u.push(Z)),Z}function T(y){if(--y.usedTimes===0){let A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function U(y){l.remove(y)}function Y(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:U,programs:u,dispose:Y}}function z_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function W0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function X0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){let p=o(h,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||O_),n.length>1&&n.sort(d||W0),s.length>1&&s.sort(d||W0)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function F_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new X0,i.set(n,[o])):s>=r.length?(o=new X0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function B_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new b,color:new ve};break;case"SpotLight":t={position:new b,direction:new b,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new b,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new b,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new b,halfWidth:new b,halfHeight:new b};break}return i[e.id]=t,t}}}function k_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var V_=0;function G_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W_(i){let e=new B_,t=k_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);let s=new b,r=new ft,o=new ft;function a(c){let u=0,h=0,d=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,x=0,_=0,S=0,P=0,T=0;c.sort(G_);for(let Y=0,y=c.length;Y<y;Y++){let A=c[Y],Z=A.color,K=A.intensity,j=A.distance,xe=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=Z.r*K,h+=Z.g*K,d+=Z.b*K;else if(A.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(A.sh.coefficients[te],K);T++}else if(A.isDirectionalLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let he=A.shadow,oe=t.get(A);oe.shadowIntensity=he.intensity,oe.shadowBias=he.bias,oe.shadowNormalBias=he.normalBias,oe.shadowRadius=he.radius,oe.shadowMapSize=he.mapSize,n.directionalShadow[f]=oe,n.directionalShadowMap[f]=xe,n.directionalShadowMatrix[f]=A.shadow.matrix,M++}n.directional[f]=te,f++}else if(A.isSpotLight){let te=e.get(A);te.position.setFromMatrixPosition(A.matrixWorld),te.color.copy(Z).multiplyScalar(K),te.distance=j,te.coneCos=Math.cos(A.angle),te.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),te.decay=A.decay,n.spot[v]=te;let he=A.shadow;if(A.map&&(n.spotLightMap[S]=A.map,S++,he.updateMatrices(A),A.castShadow&&P++),n.spotLightMatrix[v]=he.matrix,A.castShadow){let oe=t.get(A);oe.shadowIntensity=he.intensity,oe.shadowBias=he.bias,oe.shadowNormalBias=he.normalBias,oe.shadowRadius=he.radius,oe.shadowMapSize=he.mapSize,n.spotShadow[v]=oe,n.spotShadowMap[v]=xe,_++}v++}else if(A.isRectAreaLight){let te=e.get(A);te.color.copy(Z).multiplyScalar(K),te.halfWidth.set(A.width*.5,0,0),te.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=te,m++}else if(A.isPointLight){let te=e.get(A);if(te.color.copy(A.color).multiplyScalar(A.intensity),te.distance=A.distance,te.decay=A.decay,A.castShadow){let he=A.shadow,oe=t.get(A);oe.shadowIntensity=he.intensity,oe.shadowBias=he.bias,oe.shadowNormalBias=he.normalBias,oe.shadowRadius=he.radius,oe.shadowMapSize=he.mapSize,oe.shadowCameraNear=he.camera.near,oe.shadowCameraFar=he.camera.far,n.pointShadow[g]=oe,n.pointShadowMap[g]=xe,n.pointShadowMatrix[g]=A.shadow.matrix,x++}n.point[g]=te,g++}else if(A.isHemisphereLight){let te=e.get(A);te.skyColor.copy(A.color).multiplyScalar(K),te.groundColor.copy(A.groundColor).multiplyScalar(K),n.hemi[p]=te,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qe.LTC_FLOAT_1,n.rectAreaLTC2=Qe.LTC_FLOAT_2):(n.rectAreaLTC1=Qe.LTC_HALF_1,n.rectAreaLTC2=Qe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==M||U.numPointShadows!==x||U.numSpotShadows!==_||U.numSpotMaps!==S||U.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+S-P,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,U.directionalLength=f,U.pointLength=g,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=M,U.numPointShadows=x,U.numSpotShadows=_,U.numSpotMaps=S,U.numLightProbes=T,n.version=V_++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let x=c[p];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function q0(i){let e=new W_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function X_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new q0(i),e.set(s,[a])):r>=o.length?(a=new q0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var dd=class extends Qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fd=class extends Qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function Z_(i,e,t){let n=new Ta,s=new Se,r=new Se,o=new $t,a=new dd({depthPacking:Og}),l=new fd,c={},u=t.maxTextureSize,h={[Fi]:pn,[pn]:Fi,[Rt]:Rt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:q_,fragmentShader:Y_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Gt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ie(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yp;let p=this.type;this.render=function(P,T,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let Y=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(kn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let K=p!==Ss&&this.type===Ss,j=p===Ss&&this.type!==Ss;for(let xe=0,te=P.length;xe<te;xe++){let he=P[xe],oe=he.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;s.copy(oe.mapSize);let _e=oe.getFrameExtents();if(s.multiply(_e),r.copy(oe.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,oe.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,oe.mapSize.y=r.y)),oe.map===null||K===!0||j===!0){let Re=this.type!==Ss?{minFilter:ni,magFilter:ni}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Un(s.x,s.y,Re),oe.map.texture.name=he.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();let Pe=oe.getViewportCount();for(let Re=0;Re<Pe;Re++){let Be=oe.getViewport(Re);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),Z.viewport(o),oe.updateMatrices(he,Re),n=oe.getFrustum(),_(T,U,oe.camera,he,this.type)}oe.isPointLightShadow!==!0&&this.type===Ss&&M(oe,U),oe.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(Y,y,A)};function M(P,T){let U=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,U,d,v,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,U,f,v,null)}function x(P,T,U,Y){let y=null,A=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(A!==void 0)y=A;else if(y=U.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Z=y.uuid,K=T.uuid,j=c[Z];j===void 0&&(j={},c[Z]=j);let xe=j[K];xe===void 0&&(xe=y.clone(),j[K]=xe,T.addEventListener("dispose",S)),y=xe}if(y.visible=T.visible,y.wireframe=T.wireframe,Y===Ss?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let Z=i.properties.get(y);Z.light=U}return y}function _(P,T,U,Y,y){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Ss)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let K=e.update(P),j=P.material;if(Array.isArray(j)){let xe=K.groups;for(let te=0,he=xe.length;te<he;te++){let oe=xe[te],_e=j[oe.materialIndex];if(_e&&_e.visible){let Pe=x(P,_e,Y,y);P.onBeforeShadow(i,P,T,U,K,Pe,oe),i.renderBufferDirect(U,null,K,Pe,P,oe),P.onAfterShadow(i,P,T,U,K,Pe,oe)}}}else if(j.visible){let xe=x(P,j,Y,y);P.onBeforeShadow(i,P,T,U,K,xe,null),i.renderBufferDirect(U,null,K,xe,P,null),P.onAfterShadow(i,P,T,U,K,xe,null)}}let Z=P.children;for(let K=0,j=Z.length;K<j;K++)_(Z[K],T,U,Y,y)}function S(P){P.target.removeEventListener("dispose",S);for(let U in c){let Y=c[U],y=P.target.uuid;y in Y&&(Y[y].dispose(),delete Y[y])}}}var J_={[xu]:yu,[vu]:Eu,[_u]:bu,[Mo]:Mu,[yu]:xu,[Eu]:vu,[bu]:_u,[Mu]:Mo};function K_(i){function e(){let X=!1,We=new $t,ge=null,Ae=new $t(0,0,0,0);return{setMask:function(Xe){ge!==Xe&&!X&&(i.colorMask(Xe,Xe,Xe,Xe),ge=Xe)},setLocked:function(Xe){X=Xe},setClear:function(Xe,Ke,Mt,kt,dn){dn===!0&&(Xe*=kt,Ke*=kt,Mt*=kt),We.set(Xe,Ke,Mt,kt),Ae.equals(We)===!1&&(i.clearColor(Xe,Ke,Mt,kt),Ae.copy(We))},reset:function(){X=!1,ge=null,Ae.set(-1,0,0,0)}}}function t(){let X=!1,We=!1,ge=null,Ae=null,Xe=null;return{setReversed:function(Ke){We=Ke},setTest:function(Ke){Ke?ye(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Ke){ge!==Ke&&!X&&(i.depthMask(Ke),ge=Ke)},setFunc:function(Ke){if(We&&(Ke=J_[Ke]),Ae!==Ke){switch(Ke){case xu:i.depthFunc(i.NEVER);break;case yu:i.depthFunc(i.ALWAYS);break;case vu:i.depthFunc(i.LESS);break;case Mo:i.depthFunc(i.LEQUAL);break;case _u:i.depthFunc(i.EQUAL);break;case Mu:i.depthFunc(i.GEQUAL);break;case Eu:i.depthFunc(i.GREATER);break;case bu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Ke}},setLocked:function(Ke){X=Ke},setClear:function(Ke){Xe!==Ke&&(i.clearDepth(Ke),Xe=Ke)},reset:function(){X=!1,ge=null,Ae=null,Xe=null}}}function n(){let X=!1,We=null,ge=null,Ae=null,Xe=null,Ke=null,Mt=null,kt=null,dn=null;return{setTest:function(se){X||(se?ye(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(se){We!==se&&!X&&(i.stencilMask(se),We=se)},setFunc:function(se,$e,O){(ge!==se||Ae!==$e||Xe!==O)&&(i.stencilFunc(se,$e,O),ge=se,Ae=$e,Xe=O)},setOp:function(se,$e,O){(Ke!==se||Mt!==$e||kt!==O)&&(i.stencilOp(se,$e,O),Ke=se,Mt=$e,kt=O)},setLocked:function(se){X=se},setClear:function(se){dn!==se&&(i.clearStencil(se),dn=se)},reset:function(){X=!1,We=null,ge=null,Ae=null,Xe=null,Ke=null,Mt=null,kt=null,dn=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap,c={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,M=null,x=null,_=null,S=null,P=new ve(0,0,0),T=0,U=!1,Y=null,y=null,A=null,Z=null,K=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),xe=!1,te=0,he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(he)[1]),xe=te>=1):he.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),xe=te>=2);let oe=null,_e={},Pe=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),Be=new $t().fromArray(Pe),at=new $t().fromArray(Re);function ce(X,We,ge,Ae){let Xe=new Uint8Array(4),Ke=i.createTexture();i.bindTexture(X,Ke),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Mt=0;Mt<ge;Mt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(We,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(We+Mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return Ke}let Ee={};Ee[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),Ee[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ee[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ye(i.DEPTH_TEST),r.setFunc(Mo),$(!1),J(jf),ye(i.CULL_FACE),C(kn);function ye(X){c[X]!==!0&&(i.enable(X),c[X]=!0)}function Ce(X){c[X]!==!1&&(i.disable(X),c[X]=!1)}function De(X,We){return u[X]!==We?(i.bindFramebuffer(X,We),u[X]=We,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=We),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=We),!0):!1}function we(X,We){let ge=d,Ae=!1;if(X){ge=h.get(We),ge===void 0&&(ge=[],h.set(We,ge));let Xe=X.textures;if(ge.length!==Xe.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let Ke=0,Mt=Xe.length;Ke<Mt;Ke++)ge[Ke]=i.COLOR_ATTACHMENT0+Ke;ge.length=Xe.length,Ae=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ge)}function ke(X){return f!==X?(i.useProgram(X),f=X,!0):!1}let Ye={[Oi]:i.FUNC_ADD,[yg]:i.FUNC_SUBTRACT,[vg]:i.FUNC_REVERSE_SUBTRACT};Ye[_g]=i.MIN,Ye[Mg]=i.MAX;let k={[zo]:i.ZERO,[Eg]:i.ONE,[bg]:i.SRC_COLOR,[mu]:i.SRC_ALPHA,[Rg]:i.SRC_ALPHA_SATURATE,[zc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[wg]:i.ONE_MINUS_SRC_COLOR,[gu]:i.ONE_MINUS_SRC_ALPHA,[Tg]:i.ONE_MINUS_DST_COLOR,[Sg]:i.ONE_MINUS_DST_ALPHA,[Ag]:i.CONSTANT_COLOR,[Cg]:i.ONE_MINUS_CONSTANT_COLOR,[Pg]:i.CONSTANT_ALPHA,[Ig]:i.ONE_MINUS_CONSTANT_ALPHA};function C(X,We,ge,Ae,Xe,Ke,Mt,kt,dn,se){if(X===kn){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(ye(i.BLEND),g=!0),X!==Fd){if(X!==v||se!==U){if((m!==Oi||x!==Oi)&&(i.blendEquation(i.FUNC_ADD),m=Oi,x=Oi),se)switch(X){case xo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.ONE,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case e0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case e0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}p=null,M=null,_=null,S=null,P.set(0,0,0),T=0,v=X,U=se}return}Xe=Xe||We,Ke=Ke||ge,Mt=Mt||Ae,(We!==m||Xe!==x)&&(i.blendEquationSeparate(Ye[We],Ye[Xe]),m=We,x=Xe),(ge!==p||Ae!==M||Ke!==_||Mt!==S)&&(i.blendFuncSeparate(k[ge],k[Ae],k[Ke],k[Mt]),p=ge,M=Ae,_=Ke,S=Mt),(kt.equals(P)===!1||dn!==T)&&(i.blendColor(kt.r,kt.g,kt.b,dn),P.copy(kt),T=dn),v=X,U=!1}function ie(X,We){X.side===Rt?Ce(i.CULL_FACE):ye(i.CULL_FACE);let ge=X.side===pn;We&&(ge=!ge),$(ge),X.blending===xo&&X.transparent===!1?C(kn):C(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),s.setMask(X.colorWrite);let Ae=X.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),pe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(X){Y!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),Y=X)}function J(X){X!==gg?(ye(i.CULL_FACE),X!==y&&(X===jf?i.cullFace(i.BACK):X===xg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),y=X}function ue(X){X!==A&&(xe&&i.lineWidth(X),A=X)}function pe(X,We,ge){X?(ye(i.POLYGON_OFFSET_FILL),(Z!==We||K!==ge)&&(i.polygonOffset(We,ge),Z=We,K=ge)):Ce(i.POLYGON_OFFSET_FILL)}function G(X){X?ye(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function w(X){X===void 0&&(X=i.TEXTURE0+j-1),oe!==X&&(i.activeTexture(X),oe=X)}function E(X,We,ge){ge===void 0&&(oe===null?ge=i.TEXTURE0+j-1:ge=oe);let Ae=_e[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},_e[ge]=Ae),(Ae.type!==X||Ae.texture!==We)&&(oe!==ge&&(i.activeTexture(ge),oe=ge),i.bindTexture(X,We||Ee[X]),Ae.type=X,Ae.texture=We)}function F(){let X=_e[oe];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function B(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ne(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function V(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function q(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function D(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ve(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(X){Be.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Be.copy(X))}function Oe(X){at.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),at.copy(X))}function ee(X,We){let ge=l.get(We);ge===void 0&&(ge=new WeakMap,l.set(We,ge));let Ae=ge.get(X);Ae===void 0&&(Ae=i.getUniformBlockIndex(We,X.name),ge.set(X,Ae))}function st(X,We){let Ae=l.get(We).get(X);a.get(We)!==Ae&&(i.uniformBlockBinding(We,Ae,X.__bindingPointIndex),a.set(We,Ae))}function Et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},oe=null,_e={},u={},h=new WeakMap,d=[],f=null,g=!1,v=null,m=null,p=null,M=null,x=null,_=null,S=null,P=new ve(0,0,0),T=0,U=!1,Y=null,y=null,A=null,Z=null,K=null,Be.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:ye,disable:Ce,bindFramebuffer:De,drawBuffers:we,useProgram:ke,setBlending:C,setMaterial:ie,setFlipSided:$,setCullFace:J,setLineWidth:ue,setPolygonOffset:pe,setScissorTest:G,activeTexture:w,bindTexture:E,unbindTexture:F,compressedTexImage2D:re,compressedTexImage3D:B,texImage2D:fe,texImage3D:Ve,updateUBOMapping:ee,uniformBlockBinding:st,texStorage2D:q,texStorage3D:D,texSubImage2D:me,texSubImage3D:Ne,compressedTexSubImage2D:Ue,compressedTexSubImage3D:V,scissor:ct,viewport:Oe,reset:Et}}function Y0(i,e,t,n){let s=$_(n);switch(t){case wp:return i*e;case Tp:return i*e;case Rp:return i*e*2;case Ap:return i*e/s.components*s.byteLength;case Zd:return i*e/s.components*s.byteLength;case Cp:return i*e*2/s.components*s.byteLength;case Jd:return i*e*2/s.components*s.byteLength;case Sp:return i*e*3/s.components*s.byteLength;case _i:return i*e*4/s.components*s.byteLength;case Kd:return i*e*4/s.components*s.byteLength;case Kl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jl:case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Au:case Pu:return Math.max(i,16)*Math.max(e,8)/4;case Ru:case Cu:return Math.max(i,8)*Math.max(e,8)/2;case Iu:case Du:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ec:case Zu:case Ju:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pp:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $u:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $_(i){switch(i){case ji:case Mp:return{byteLength:1,components:1};case ba:case Ep:case hi:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case Sr:case Xd:case ls:return{byteLength:4,components:1};case bp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function j_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,E){return f?new OffscreenCanvas(w,E):ac("canvas")}function v(w,E,F){let re=1,B=G(w);if((B.width>F||B.height>F)&&(re=F/Math.max(B.width,B.height)),re<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let me=Math.floor(re*B.width),Ne=Math.floor(re*B.height);h===void 0&&(h=g(me,Ne));let Ue=E?g(me,Ne):h;return Ue.width=me,Ue.height=Ne,Ue.getContext("2d").drawImage(w,0,0,me,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+me+"x"+Ne+")."),Ue}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==ni&&w.minFilter!==Ji}function p(w){i.generateMipmap(w)}function M(w,E,F,re,B=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me=E;if(E===i.RED&&(F===i.FLOAT&&(me=i.R32F),F===i.HALF_FLOAT&&(me=i.R16F),F===i.UNSIGNED_BYTE&&(me=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(me=i.R8UI),F===i.UNSIGNED_SHORT&&(me=i.R16UI),F===i.UNSIGNED_INT&&(me=i.R32UI),F===i.BYTE&&(me=i.R8I),F===i.SHORT&&(me=i.R16I),F===i.INT&&(me=i.R32I)),E===i.RG&&(F===i.FLOAT&&(me=i.RG32F),F===i.HALF_FLOAT&&(me=i.RG16F),F===i.UNSIGNED_BYTE&&(me=i.RG8)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(me=i.RG8UI),F===i.UNSIGNED_SHORT&&(me=i.RG16UI),F===i.UNSIGNED_INT&&(me=i.RG32UI),F===i.BYTE&&(me=i.RG8I),F===i.SHORT&&(me=i.RG16I),F===i.INT&&(me=i.RG32I)),E===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(me=i.RGB8UI),F===i.UNSIGNED_SHORT&&(me=i.RGB16UI),F===i.UNSIGNED_INT&&(me=i.RGB32UI),F===i.BYTE&&(me=i.RGB8I),F===i.SHORT&&(me=i.RGB16I),F===i.INT&&(me=i.RGB32I)),E===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),F===i.UNSIGNED_INT&&(me=i.RGBA32UI),F===i.BYTE&&(me=i.RGBA8I),F===i.SHORT&&(me=i.RGBA16I),F===i.INT&&(me=i.RGBA32I)),E===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),E===i.RGBA){let Ne=B?ic:Zt.getTransfer(re);F===i.FLOAT&&(me=i.RGBA32F),F===i.HALF_FLOAT&&(me=i.RGBA16F),F===i.UNSIGNED_BYTE&&(me=Ne===fn?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function x(w,E){let F;return w?E===null||E===Sr||E===tr?F=i.DEPTH24_STENCIL8:E===ls?F=i.DEPTH32F_STENCIL8:E===ba&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Sr||E===tr?F=i.DEPTH_COMPONENT24:E===ls?F=i.DEPTH_COMPONENT32F:E===ba&&(F=i.DEPTH_COMPONENT16),F}function _(w,E){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ni&&w.minFilter!==Ji?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function S(w){let E=w.target;E.removeEventListener("dispose",S),T(E),E.isVideoTexture&&u.delete(E)}function P(w){let E=w.target;E.removeEventListener("dispose",P),Y(E)}function T(w){let E=n.get(w);if(E.__webglInit===void 0)return;let F=w.source,re=d.get(F);if(re){let B=re[E.__cacheKey];B.usedTimes--,B.usedTimes===0&&U(w),Object.keys(re).length===0&&d.delete(F)}n.remove(w)}function U(w){let E=n.get(w);i.deleteTexture(E.__webglTexture);let F=w.source,re=d.get(F);delete re[E.__cacheKey],o.memory.textures--}function Y(w){let E=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let B=0;B<E.__webglFramebuffer[re].length;B++)i.deleteFramebuffer(E.__webglFramebuffer[re][B]);else i.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)i.deleteFramebuffer(E.__webglFramebuffer[re]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let F=w.textures;for(let re=0,B=F.length;re<B;re++){let me=n.get(F[re]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(F[re])}n.remove(w)}let y=0;function A(){y=0}function Z(){let w=y;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),y+=1,w}function K(w){let E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function j(w,E){let F=n.get(w);if(w.isVideoTexture&&ue(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){let re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,w,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function xe(w,E){let F=n.get(w);if(w.version>0&&F.__version!==w.version){at(F,w,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function te(w,E){let F=n.get(w);if(w.version>0&&F.__version!==w.version){at(F,w,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function he(w,E){let F=n.get(w);if(w.version>0&&F.__version!==w.version){ce(F,w,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}let oe={[Ln]:i.REPEAT,[js]:i.CLAMP_TO_EDGE,[Tu]:i.MIRRORED_REPEAT},_e={[ni]:i.NEAREST,[Hg]:i.NEAREST_MIPMAP_NEAREST,[gl]:i.NEAREST_MIPMAP_LINEAR,[Ji]:i.LINEAR,[Ih]:i.LINEAR_MIPMAP_NEAREST,[Rs]:i.LINEAR_MIPMAP_LINEAR},Pe={[Bg]:i.NEVER,[qg]:i.ALWAYS,[kg]:i.LESS,[Ip]:i.LEQUAL,[Vg]:i.EQUAL,[Xg]:i.GEQUAL,[Gg]:i.GREATER,[Wg]:i.NOTEQUAL};function Re(w,E){if(E.type===ls&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ji||E.magFilter===Ih||E.magFilter===gl||E.magFilter===Rs||E.minFilter===Ji||E.minFilter===Ih||E.minFilter===gl||E.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,oe[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_e[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Pe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ni||E.minFilter!==gl&&E.minFilter!==Rs||E.type===ls&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Be(w,E){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",S));let re=E.source,B=d.get(re);B===void 0&&(B={},d.set(re,B));let me=K(E);if(me!==w.__cacheKey){B[me]===void 0&&(B[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),B[me].usedTimes++;let Ne=B[w.__cacheKey];Ne!==void 0&&(B[w.__cacheKey].usedTimes--,Ne.usedTimes===0&&U(E)),w.__cacheKey=me,w.__webglTexture=B[me].texture}return F}function at(w,E,F){let re=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=i.TEXTURE_3D);let B=Be(w,E),me=E.source;t.bindTexture(re,w.__webglTexture,i.TEXTURE0+F);let Ne=n.get(me);if(me.version!==Ne.__version||B===!0){t.activeTexture(i.TEXTURE0+F);let Ue=Zt.getPrimaries(Zt.workingColorSpace),V=E.colorSpace===Ks?null:Zt.getPrimaries(E.colorSpace),q=E.colorSpace===Ks||Ue===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let D=v(E.image,!1,s.maxTextureSize);D=pe(E,D);let fe=r.convert(E.format,E.colorSpace),Ve=r.convert(E.type),ct=M(E.internalFormat,fe,Ve,E.colorSpace,E.isVideoTexture);Re(re,E);let Oe,ee=E.mipmaps,st=E.isVideoTexture!==!0,Et=Ne.__version===void 0||B===!0,X=me.dataReady,We=_(E,D);if(E.isDepthTexture)ct=x(E.format===nr,E.type),Et&&(st?t.texStorage2D(i.TEXTURE_2D,1,ct,D.width,D.height):t.texImage2D(i.TEXTURE_2D,0,ct,D.width,D.height,0,fe,Ve,null));else if(E.isDataTexture)if(ee.length>0){st&&Et&&t.texStorage2D(i.TEXTURE_2D,We,ct,ee[0].width,ee[0].height);for(let ge=0,Ae=ee.length;ge<Ae;ge++)Oe=ee[ge],st?X&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,fe,Ve,Oe.data):t.texImage2D(i.TEXTURE_2D,ge,ct,Oe.width,Oe.height,0,fe,Ve,Oe.data);E.generateMipmaps=!1}else st?(Et&&t.texStorage2D(i.TEXTURE_2D,We,ct,D.width,D.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,fe,Ve,D.data)):t.texImage2D(i.TEXTURE_2D,0,ct,D.width,D.height,0,fe,Ve,D.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,ct,ee[0].width,ee[0].height,D.depth);for(let ge=0,Ae=ee.length;ge<Ae;ge++)if(Oe=ee[ge],E.format!==_i)if(fe!==null)if(st){if(X)if(E.layerUpdates.size>0){let Xe=Y0(Oe.width,Oe.height,E.format,E.type);for(let Ke of E.layerUpdates){let Mt=Oe.data.subarray(Ke*Xe/Oe.data.BYTES_PER_ELEMENT,(Ke+1)*Xe/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,Ke,Oe.width,Oe.height,1,fe,Mt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Oe.width,Oe.height,D.depth,fe,Oe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,ct,Oe.width,Oe.height,D.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Oe.width,Oe.height,D.depth,fe,Ve,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,ct,Oe.width,Oe.height,D.depth,0,fe,Ve,Oe.data)}else{st&&Et&&t.texStorage2D(i.TEXTURE_2D,We,ct,ee[0].width,ee[0].height);for(let ge=0,Ae=ee.length;ge<Ae;ge++)Oe=ee[ge],E.format!==_i?fe!==null?st?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,fe,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,ct,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Oe.width,Oe.height,fe,Ve,Oe.data):t.texImage2D(i.TEXTURE_2D,ge,ct,Oe.width,Oe.height,0,fe,Ve,Oe.data)}else if(E.isDataArrayTexture)if(st){if(Et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,We,ct,D.width,D.height,D.depth),X)if(E.layerUpdates.size>0){let ge=Y0(D.width,D.height,E.format,E.type);for(let Ae of E.layerUpdates){let Xe=D.data.subarray(Ae*ge/D.data.BYTES_PER_ELEMENT,(Ae+1)*ge/D.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,D.width,D.height,1,fe,Ve,Xe)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,fe,Ve,D.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,D.width,D.height,D.depth,0,fe,Ve,D.data);else if(E.isData3DTexture)st?(Et&&t.texStorage3D(i.TEXTURE_3D,We,ct,D.width,D.height,D.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,fe,Ve,D.data)):t.texImage3D(i.TEXTURE_3D,0,ct,D.width,D.height,D.depth,0,fe,Ve,D.data);else if(E.isFramebufferTexture){if(Et)if(st)t.texStorage2D(i.TEXTURE_2D,We,ct,D.width,D.height);else{let ge=D.width,Ae=D.height;for(let Xe=0;Xe<We;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,ct,ge,Ae,0,fe,Ve,null),ge>>=1,Ae>>=1}}else if(ee.length>0){if(st&&Et){let ge=G(ee[0]);t.texStorage2D(i.TEXTURE_2D,We,ct,ge.width,ge.height)}for(let ge=0,Ae=ee.length;ge<Ae;ge++)Oe=ee[ge],st?X&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,fe,Ve,Oe):t.texImage2D(i.TEXTURE_2D,ge,ct,fe,Ve,Oe);E.generateMipmaps=!1}else if(st){if(Et){let ge=G(D);t.texStorage2D(i.TEXTURE_2D,We,ct,ge.width,ge.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ve,D)}else t.texImage2D(i.TEXTURE_2D,0,ct,fe,Ve,D);m(E)&&p(re),Ne.__version=me.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ce(w,E,F){if(E.image.length!==6)return;let re=Be(w,E),B=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let me=n.get(B);if(B.version!==me.__version||re===!0){t.activeTexture(i.TEXTURE0+F);let Ne=Zt.getPrimaries(Zt.workingColorSpace),Ue=E.colorSpace===Ks?null:Zt.getPrimaries(E.colorSpace),V=E.colorSpace===Ks||Ne===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);let q=E.isCompressedTexture||E.image[0].isCompressedTexture,D=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let Ae=0;Ae<6;Ae++)!q&&!D?fe[Ae]=v(E.image[Ae],!0,s.maxCubemapSize):fe[Ae]=D?E.image[Ae].image:E.image[Ae],fe[Ae]=pe(E,fe[Ae]);let Ve=fe[0],ct=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type),ee=M(E.internalFormat,ct,Oe,E.colorSpace),st=E.isVideoTexture!==!0,Et=me.__version===void 0||re===!0,X=B.dataReady,We=_(E,Ve);Re(i.TEXTURE_CUBE_MAP,E);let ge;if(q){st&&Et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ee,Ve.width,Ve.height);for(let Ae=0;Ae<6;Ae++){ge=fe[Ae].mipmaps;for(let Xe=0;Xe<ge.length;Xe++){let Ke=ge[Xe];E.format!==_i?ct!==null?st?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe,0,0,Ke.width,Ke.height,ct,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe,ee,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe,0,0,Ke.width,Ke.height,ct,Oe,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe,ee,Ke.width,Ke.height,0,ct,Oe,Ke.data)}}}else{if(ge=E.mipmaps,st&&Et){ge.length>0&&We++;let Ae=G(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,ee,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(D){st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,fe[Ae].width,fe[Ae].height,ct,Oe,fe[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ee,fe[Ae].width,fe[Ae].height,0,ct,Oe,fe[Ae].data);for(let Xe=0;Xe<ge.length;Xe++){let Mt=ge[Xe].image[Ae].image;st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe+1,0,0,Mt.width,Mt.height,ct,Oe,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe+1,ee,Mt.width,Mt.height,0,ct,Oe,Mt.data)}}else{st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ct,Oe,fe[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,ee,ct,Oe,fe[Ae]);for(let Xe=0;Xe<ge.length;Xe++){let Ke=ge[Xe];st?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe+1,0,0,ct,Oe,Ke.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe+1,ee,ct,Oe,Ke.image[Ae])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),me.__version=B.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Ee(w,E,F,re,B,me){let Ne=r.convert(F.format,F.colorSpace),Ue=r.convert(F.type),V=M(F.internalFormat,Ne,Ue,F.colorSpace);if(!n.get(E).__hasExternalTextures){let D=Math.max(1,E.width>>me),fe=Math.max(1,E.height>>me);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,me,V,D,fe,E.depth,0,Ne,Ue,null):t.texImage2D(B,me,V,D,fe,0,Ne,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),J(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,B,n.get(F).__webglTexture,0,$(E)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,B,n.get(F).__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer){let re=E.depthTexture,B=re&&re.isDepthTexture?re.type:null,me=x(E.stencilBuffer,B),Ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=$(E);J(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,me,E.width,E.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,me,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ne,i.RENDERBUFFER,w)}else{let re=E.textures;for(let B=0;B<re.length;B++){let me=re[B],Ne=r.convert(me.format,me.colorSpace),Ue=r.convert(me.type),V=M(me.internalFormat,Ne,Ue,me.colorSpace),q=$(E);F&&J(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,V,E.width,E.height):J(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,V,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,V,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),j(E.depthTexture,0);let re=n.get(E.depthTexture).__webglTexture,B=$(E);if(E.depthTexture.format===yo)J(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(E.depthTexture.format===nr)J(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function De(w){let E=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){let re=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){let B=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",B)};re.addEventListener("dispose",B),E.__depthDisposeCallback=B}E.__boundDepthTexture=re}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(E.__webglFramebuffer,w)}else if(F){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=i.createRenderbuffer(),ye(E.__webglDepthbuffer[re],w,!1);else{let B=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=E.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,me)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ye(E.__webglDepthbuffer,w,!1);else{let re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,B),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,B)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(w,E,F){let re=n.get(w);E!==void 0&&Ee(re.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&De(w)}function ke(w){let E=w.texture,F=n.get(w),re=n.get(E);w.addEventListener("dispose",P);let B=w.textures,me=w.isWebGLCubeRenderTarget===!0,Ne=B.length>1;if(Ne||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=E.version,o.memory.textures++),me){F.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[Ue]=[];for(let V=0;V<E.mipmaps.length;V++)F.__webglFramebuffer[Ue][V]=i.createFramebuffer()}else F.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let Ue=0;Ue<E.mipmaps.length;Ue++)F.__webglFramebuffer[Ue]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ne)for(let Ue=0,V=B.length;Ue<V;Ue++){let q=n.get(B[Ue]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&J(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Ue=0;Ue<B.length;Ue++){let V=B[Ue];F.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Ue]);let q=r.convert(V.format,V.colorSpace),D=r.convert(V.type),fe=M(V.internalFormat,q,D,V.colorSpace,w.isXRRenderTarget===!0),Ve=$(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,fe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,F.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Re(i.TEXTURE_CUBE_MAP,E);for(let Ue=0;Ue<6;Ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let V=0;V<E.mipmaps.length;V++)Ee(F.__webglFramebuffer[Ue][V],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V);else Ee(F.__webglFramebuffer[Ue],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let Ue=0,V=B.length;Ue<V;Ue++){let q=B[Ue],D=n.get(q);t.bindTexture(i.TEXTURE_2D,D.__webglTexture),Re(i.TEXTURE_2D,q),Ee(F.__webglFramebuffer,w,q,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,0),m(q)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ue=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,re.__webglTexture),Re(Ue,E),E.mipmaps&&E.mipmaps.length>0)for(let V=0;V<E.mipmaps.length;V++)Ee(F.__webglFramebuffer[V],w,E,i.COLOR_ATTACHMENT0,Ue,V);else Ee(F.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,Ue,0);m(E)&&p(Ue),t.unbindTexture()}w.depthBuffer&&De(w)}function Ye(w){let E=w.textures;for(let F=0,re=E.length;F<re;F++){let B=E[F];if(m(B)){let me=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(B).__webglTexture;t.bindTexture(me,Ne),p(me),t.unbindTexture()}}}let k=[],C=[];function ie(w){if(w.samples>0){if(J(w)===!1){let E=w.textures,F=w.width,re=w.height,B=i.COLOR_BUFFER_BIT,me=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(w),Ue=E.length>1;if(Ue)for(let V=0;V<E.length;V++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let V=0;V<E.length;V++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),Ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[V]);let q=n.get(E[V]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,q,0)}i.blitFramebuffer(0,0,F,re,0,0,F,re,B,i.NEAREST),l===!0&&(k.length=0,C.length=0,k.push(i.COLOR_ATTACHMENT0+V),w.depthBuffer&&w.resolveDepthBuffer===!1&&(k.push(me),C.push(me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let V=0;V<E.length;V++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[V]);let q=n.get(E[V]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.TEXTURE_2D,q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let E=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function $(w){return Math.min(s.maxSamples,w.samples)}function J(w){let E=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ue(w){let E=o.render.frame;u.get(w)!==E&&(u.set(w,E),w.update())}function pe(w,E){let F=w.colorSpace,re=w.format,B=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==rr&&F!==Ks&&(Zt.getTransfer(F)===fn?(re!==_i||B!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function G(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=A,this.setTexture2D=j,this.setTexture2DArray=xe,this.setTexture3D=te,this.setTextureCube=he,this.rebindTextures=we,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=J}function Q_(i,e){function t(n,s=Ks){let r,o=Zt.getTransfer(s);if(n===ji)return i.UNSIGNED_BYTE;if(n===qd)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return i.BYTE;if(n===Ep)return i.SHORT;if(n===ba)return i.UNSIGNED_SHORT;if(n===Xd)return i.INT;if(n===Sr)return i.UNSIGNED_INT;if(n===ls)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===wp)return i.ALPHA;if(n===Sp)return i.RGB;if(n===_i)return i.RGBA;if(n===Tp)return i.LUMINANCE;if(n===Rp)return i.LUMINANCE_ALPHA;if(n===yo)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Ap)return i.RED;if(n===Zd)return i.RED_INTEGER;if(n===Cp)return i.RG;if(n===Jd)return i.RG_INTEGER;if(n===Kd)return i.RGBA_INTEGER;if(n===Kl||n===$l||n===jl||n===Ql)if(o===fn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Kl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$l)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Kl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$l)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ql)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ru||n===Au||n===Cu||n===Pu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ru)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Iu||n===Du||n===Lu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Iu||n===Du)return o===fn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Uu||n===Nu||n===Hu||n===zu||n===Ou||n===Fu||n===Bu||n===ku||n===Vu||n===Gu||n===Wu||n===Xu||n===qu||n===Yu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ou)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ku)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yu)return o===fn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ec||n===Zu||n===Ju)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ec)return o===fn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pp||n===Ku||n===$u||n===ju)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var pd=class extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},nt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},eM={type:"move"},_a=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
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

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Mi,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wt({vertexShader:tM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gd=class extends ir{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,v=new md,m=t.getContextAttributes(),p=null,M=null,x=[],_=[],S=new Se,P=null,T=new ti;T.layers.enable(1),T.viewport=new $t;let U=new ti;U.layers.enable(2),U.viewport=new $t;let Y=[T,U],y=new pd;y.layers.enable(1),y.layers.enable(2);let A=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Ee=x[ce];return Ee===void 0&&(Ee=new _a,x[ce]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ce){let Ee=x[ce];return Ee===void 0&&(Ee=new _a,x[ce]=Ee),Ee.getGripSpace()},this.getHand=function(ce){let Ee=x[ce];return Ee===void 0&&(Ee=new _a,x[ce]=Ee),Ee.getHandSpace()};function K(ce){let Ee=_.indexOf(ce.inputSource);if(Ee===-1)return;let ye=x[Ee];ye!==void 0&&(ye.update(ce.inputSource,ce.frame,c||o),ye.dispatchEvent({type:ce.type,data:ce.inputSource}))}function j(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",xe);for(let ce=0;ce<x.length;ce++){let Ee=_[ce];Ee!==null&&(_[ce]=null,x[ce].disconnect(Ee))}A=null,Z=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,M=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",j),s.addEventListener("inputsourceschange",xe),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0){let Ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Un(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Ee=null,ye=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=m.stencil?nr:yo,ye=m.stencil?tr:Sr);let De={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(De),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Un(d.textureWidth,d.textureHeight,{format:_i,type:ji,depthTexture:new Ao(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function xe(ce){for(let Ee=0;Ee<ce.removed.length;Ee++){let ye=ce.removed[Ee],Ce=_.indexOf(ye);Ce>=0&&(_[Ce]=null,x[Ce].disconnect(ye))}for(let Ee=0;Ee<ce.added.length;Ee++){let ye=ce.added[Ee],Ce=_.indexOf(ye);if(Ce===-1){for(let we=0;we<x.length;we++)if(we>=_.length){_.push(ye),Ce=we;break}else if(_[we]===null){_[we]=ye,Ce=we;break}if(Ce===-1)break}let De=x[Ce];De&&De.connect(ye)}}let te=new b,he=new b;function oe(ce,Ee,ye){te.setFromMatrixPosition(Ee.matrixWorld),he.setFromMatrixPosition(ye.matrixWorld);let Ce=te.distanceTo(he),De=Ee.projectionMatrix.elements,we=ye.projectionMatrix.elements,ke=De[14]/(De[10]-1),Ye=De[14]/(De[10]+1),k=(De[9]+1)/De[5],C=(De[9]-1)/De[5],ie=(De[8]-1)/De[0],$=(we[8]+1)/we[0],J=ke*ie,ue=ke*$,pe=Ce/(-ie+$),G=pe*-ie;if(Ee.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(G),ce.translateZ(pe),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),De[10]===-1)ce.projectionMatrix.copy(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{let w=ke+pe,E=Ye+pe,F=J-G,re=ue+(Ce-G),B=k*Ye/E*w,me=C*Ye/E*w;ce.projectionMatrix.makePerspective(F,re,B,me,w,E),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function _e(ce,Ee){Ee===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Ee.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let Ee=ce.near,ye=ce.far;v.texture!==null&&(v.depthNear>0&&(Ee=v.depthNear),v.depthFar>0&&(ye=v.depthFar)),y.near=U.near=T.near=Ee,y.far=U.far=T.far=ye,(A!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,Z=y.far);let Ce=ce.parent,De=y.cameras;_e(y,Ce);for(let we=0;we<De.length;we++)_e(De[we],Ce);De.length===2?oe(y,T,U):y.projectionMatrix.copy(T.projectionMatrix),Pe(ce,y,Ce)};function Pe(ce,Ee,ye){ye===null?ce.matrix.copy(Ee.matrixWorld):(ce.matrix.copy(ye.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Ee.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=wa*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ce)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Re=null;function Be(ce,Ee){if(u=Ee.getViewerPose(c||o),g=Ee,u!==null){let ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ce=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,Ce=!0);for(let we=0;we<ye.length;we++){let ke=ye[we],Ye=null;if(f!==null)Ye=f.getViewport(ke);else{let C=h.getViewSubImage(d,ke);Ye=C.viewport,we===0&&(e.setRenderTargetTextures(M,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(M))}let k=Y[we];k===void 0&&(k=new ti,k.layers.enable(we),k.viewport=new $t,Y[we]=k),k.matrix.fromArray(ke.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(ke.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),we===0&&(y.matrix.copy(k.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ce===!0&&y.cameras.push(k)}let De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){let we=h.getDepthInformation(ye[0]);we&&we.isValid&&we.texture&&v.init(e,we,s.renderState)}}for(let ye=0;ye<x.length;ye++){let Ce=_[ye],De=x[ye];Ce!==null&&De!==void 0&&De.update(Ce,Ee,c||o)}Re&&Re(ce,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),g=null}let at=new Np;at.setAnimationLoop(Be),this.setAnimationLoop=function(ce){Re=ce},this.dispose=function(){}}},yr=new Ft,iM=new ft;function sM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Up(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),x=M.envMap,_=M.envMapRotation;x&&(m.envMap.value=x,yr.copy(_),yr.x*=-1,yr.y*=-1,yr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),m.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(yr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rM(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){let _=x.program;n.uniformBlockBinding(M,_)}function c(M,x){let _=s[M.id];_===void 0&&(g(M),_=u(M),s[M.id]=_,M.addEventListener("dispose",m));let S=x.program;n.updateUBOMapping(M,S);let P=e.render.frame;r[M.id]!==P&&(d(M),r[M.id]=P)}function u(M){let x=h();M.__bindingPointIndex=x;let _=i.createBuffer(),S=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,S,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let x=s[M.id],_=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let P=0,T=_.length;P<T;P++){let U=Array.isArray(_[P])?_[P]:[_[P]];for(let Y=0,y=U.length;Y<y;Y++){let A=U[Y];if(f(A,P,Y,S)===!0){let Z=A.__offset,K=Array.isArray(A.value)?A.value:[A.value],j=0;for(let xe=0;xe<K.length;xe++){let te=K[xe],he=v(te);typeof te=="number"||typeof te=="boolean"?(A.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,Z+j,A.__data)):te.isMatrix3?(A.__data[0]=te.elements[0],A.__data[1]=te.elements[1],A.__data[2]=te.elements[2],A.__data[3]=0,A.__data[4]=te.elements[3],A.__data[5]=te.elements[4],A.__data[6]=te.elements[5],A.__data[7]=0,A.__data[8]=te.elements[6],A.__data[9]=te.elements[7],A.__data[10]=te.elements[8],A.__data[11]=0):(te.toArray(A.__data,j),j+=he.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,x,_,S){let P=M.value,T=x+"_"+_;if(S[T]===void 0)return typeof P=="number"||typeof P=="boolean"?S[T]=P:S[T]=P.clone(),!0;{let U=S[T];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return S[T]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(M){let x=M.uniforms,_=0,S=16;for(let T=0,U=x.length;T<U;T++){let Y=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,A=Y.length;y<A;y++){let Z=Y[y],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let j=0,xe=K.length;j<xe;j++){let te=K[j],he=v(te),oe=_%S,_e=oe%he.boundary,Pe=oe+_e;_+=_e,Pe!==0&&S-Pe<he.storage&&(_+=S-Pe),Z.__data=new Float32Array(he.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=_,_+=he.storage}}}let P=_%S;return P>0&&(_+=S-P),M.__size=_,M.__cache={},this}function v(M){let x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){let x=M.target;x.removeEventListener("dispose",m);let _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fc=class{constructor(e={}){let{canvas:t=cx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let f=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this.toneMapping=Qs,this.toneMappingExposure=1;let x=this,_=!1,S=0,P=0,T=null,U=-1,Y=null,y=new $t,A=new $t,Z=null,K=new ve(0),j=0,xe=t.width,te=t.height,he=1,oe=null,_e=null,Pe=new $t(0,0,xe,te),Re=new $t(0,0,xe,te),Be=!1,at=new Ta,ce=!1,Ee=!1,ye=new ft,Ce=new ft,De=new b,we=new $t,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ye=!1;function k(){return T===null?he:1}let C=n;function ie(L,H){return t.getContext(L,H)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zd}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),C===null){let H="webgl2";if(C=ie(H,L),C===null)throw ie(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let $,J,ue,pe,G,w,E,F,re,B,me,Ne,Ue,V,q,D,fe,Ve,ct,Oe,ee,st,Et,X;function We(){$=new Mv(C),$.init(),st=new Q_(C,$),J=new mv(C,$,e,st),ue=new K_(C),J.reverseDepthBuffer&&ue.buffers.depth.setReversed(!0),pe=new wv(C),G=new z_,w=new j_(C,$,ue,G,J,st,pe),E=new xv(x),F=new _v(x),re=new Ix(C),Et=new fv(C,re),B=new Ev(C,re,pe,Et),me=new Tv(C,B,re,pe),ct=new Sv(C,J,w),D=new gv(G),Ne=new H_(x,E,F,$,J,Et,D),Ue=new sM(x,G),V=new F_,q=new X_($),Ve=new dv(x,E,F,ue,me,d,l),fe=new Z_(x,me,J),X=new rM(C,pe,J,ue),Oe=new pv(C,$,pe),ee=new bv(C,$,pe),pe.programs=Ne.programs,x.capabilities=J,x.extensions=$,x.properties=G,x.renderLists=V,x.shadowMap=fe,x.state=ue,x.info=pe}We();let ge=new gd(x,C);this.xr=ge,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let L=$.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=$.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(xe,te,!1))},this.getSize=function(L){return L.set(xe,te)},this.setSize=function(L,H,R=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}xe=L,te=H,t.width=Math.floor(L*he),t.height=Math.floor(H*he),R===!0&&(t.style.width=L+"px",t.style.height=H+"px"),this.setViewport(0,0,L,H)},this.getDrawingBufferSize=function(L){return L.set(xe*he,te*he).floor()},this.setDrawingBufferSize=function(L,H,R){xe=L,te=H,he=R,t.width=Math.floor(L*R),t.height=Math.floor(H*R),this.setViewport(0,0,L,H)},this.getCurrentViewport=function(L){return L.copy(y)},this.getViewport=function(L){return L.copy(Pe)},this.setViewport=function(L,H,R,z){L.isVector4?Pe.set(L.x,L.y,L.z,L.w):Pe.set(L,H,R,z),ue.viewport(y.copy(Pe).multiplyScalar(he).round())},this.getScissor=function(L){return L.copy(Re)},this.setScissor=function(L,H,R,z){L.isVector4?Re.set(L.x,L.y,L.z,L.w):Re.set(L,H,R,z),ue.scissor(A.copy(Re).multiplyScalar(he).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(L){ue.setScissorTest(Be=L)},this.setOpaqueSort=function(L){oe=L},this.setTransparentSort=function(L){_e=L},this.getClearColor=function(L){return L.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(L=!0,H=!0,R=!0){let z=0;if(L){let N=!1;if(T!==null){let le=T.texture.format;N=le===Kd||le===Jd||le===Zd}if(N){let le=T.texture.type,W=le===ji||le===Sr||le===ba||le===tr||le===qd||le===Yd,ae=Ve.getClearColor(),Fe=Ve.getClearAlpha(),lt=ae.r,ut=ae.g,je=ae.b;W?(f[0]=lt,f[1]=ut,f[2]=je,f[3]=Fe,C.clearBufferuiv(C.COLOR,0,f)):(g[0]=lt,g[1]=ut,g[2]=je,g[3]=Fe,C.clearBufferiv(C.COLOR,0,g))}else z|=C.COLOR_BUFFER_BIT}H&&(z|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),R&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),V.dispose(),q.dispose(),G.dispose(),E.dispose(),F.dispose(),me.dispose(),Et.dispose(),X.dispose(),Ne.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Te),ge.removeEventListener("sessionend",ze),de.stop()};function Ae(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let L=pe.autoReset,H=fe.enabled,R=fe.autoUpdate,z=fe.needsUpdate,N=fe.type;We(),pe.autoReset=L,fe.enabled=H,fe.autoUpdate=R,fe.needsUpdate=z,fe.type=N}function Ke(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Mt(L){let H=L.target;H.removeEventListener("dispose",Mt),kt(H)}function kt(L){dn(L),G.remove(L)}function dn(L){let H=G.get(L).programs;H!==void 0&&(H.forEach(function(R){Ne.releaseProgram(R)}),L.isShaderMaterial&&Ne.releaseShaderCache(L))}this.renderBufferDirect=function(L,H,R,z,N,le){H===null&&(H=ke);let W=N.isMesh&&N.matrixWorld.determinant()<0,ae=an(L,H,R,z,N);ue.setMaterial(z,W);let Fe=R.index,lt=1;if(z.wireframe===!0){if(Fe=B.getWireframeAttribute(R),Fe===void 0)return;lt=2}let ut=R.drawRange,je=R.attributes.position,Ct=ut.start*lt,qt=(ut.start+ut.count)*lt;le!==null&&(Ct=Math.max(Ct,le.start*lt),qt=Math.min(qt,(le.start+le.count)*lt)),Fe!==null?(Ct=Math.max(Ct,0),qt=Math.min(qt,Fe.count)):je!=null&&(Ct=Math.max(Ct,0),qt=Math.min(qt,je.count));let ln=qt-Ct;if(ln<0||ln===1/0)return;Et.setup(N,z,ae,R,Fe);let Bn,Yt=Oe;if(Fe!==null&&(Bn=re.get(Fe),Yt=ee,Yt.setIndex(Bn)),N.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*k()),Yt.setMode(C.LINES)):Yt.setMode(C.TRIANGLES);else if(N.isLine){let dt=z.linewidth;dt===void 0&&(dt=1),ue.setLineWidth(dt*k()),N.isLineSegments?Yt.setMode(C.LINES):N.isLineLoop?Yt.setMode(C.LINE_LOOP):Yt.setMode(C.LINE_STRIP)}else N.isPoints?Yt.setMode(C.POINTS):N.isSprite&&Yt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Yt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Yt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let dt=N._multiDrawStarts,tn=N._multiDrawCounts,Kt=N._multiDrawCount,Ri=Fe?re.get(Fe).bytesPerElement:1,Os=G.get(z).currentProgram.getUniforms();for(let ei=0;ei<Kt;ei++)Os.setValue(C,"_gl_DrawID",ei),Yt.render(dt[ei]/Ri,tn[ei])}else if(N.isInstancedMesh)Yt.renderInstances(Ct,ln,N.count);else if(R.isInstancedBufferGeometry){let dt=R._maxInstanceCount!==void 0?R._maxInstanceCount:1/0,tn=Math.min(R.instanceCount,dt);Yt.renderInstances(Ct,ln,tn)}else Yt.render(Ct,ln)};function se(L,H,R){L.transparent===!0&&L.side===Rt&&L.forceSinglePass===!1?(L.side=pn,L.needsUpdate=!0,Vt(L,H,R),L.side=Fi,L.needsUpdate=!0,Vt(L,H,R),L.side=Rt):Vt(L,H,R)}this.compile=function(L,H,R=null){R===null&&(R=L),m=q.get(R),m.init(H),M.push(m),R.traverseVisible(function(N){N.isLight&&N.layers.test(H.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),L!==R&&L.traverseVisible(function(N){N.isLight&&N.layers.test(H.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();let z=new Set;return L.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let le=N.material;if(le)if(Array.isArray(le))for(let W=0;W<le.length;W++){let ae=le[W];se(ae,R,N),z.add(ae)}else se(le,R,N),z.add(le)}),M.pop(),m=null,z},this.compileAsync=function(L,H,R=null){let z=this.compile(L,H,R);return new Promise(N=>{function le(){if(z.forEach(function(W){G.get(W).currentProgram.isReady()&&z.delete(W)}),z.size===0){N(L);return}setTimeout(le,10)}$.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let $e=null;function O(L){$e&&$e(L)}function Te(){de.stop()}function ze(){de.start()}let de=new Np;de.setAnimationLoop(O),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(L){$e=L,ge.setAnimationLoop(L),L===null?de.stop():de.start()},ge.addEventListener("sessionstart",Te),ge.addEventListener("sessionend",ze),this.render=function(L,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(H),H=ge.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,H,T),m=q.get(L,M.length),m.init(H),M.push(m),Ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),at.setFromProjectionMatrix(Ce),Ee=this.localClippingEnabled,ce=D.init(this.clippingPlanes,Ee),v=V.get(L,p.length),v.init(),p.push(v),ge.enabled===!0&&ge.isPresenting===!0){let le=x.xr.getDepthSensingMesh();le!==null&&Je(le,H,-1/0,x.sortObjects)}Je(L,H,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(oe,_e),Ye=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Ye&&Ve.addToRenderList(v,L),this.info.render.frame++,ce===!0&&D.beginShadows();let R=m.state.shadowsArray;fe.render(R,L,H),ce===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=v.opaque,N=v.transmissive;if(m.setupLights(),H.isArrayCamera){let le=H.cameras;if(N.length>0)for(let W=0,ae=le.length;W<ae;W++){let Fe=le[W];Rn(z,N,L,Fe)}Ye&&Ve.render(L);for(let W=0,ae=le.length;W<ae;W++){let Fe=le[W];ot(v,L,Fe,Fe.viewport)}}else N.length>0&&Rn(z,N,L,H),Ye&&Ve.render(L),ot(v,L,H);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(x,L,H),Et.resetDefaultState(),U=-1,Y=null,M.pop(),M.length>0?(m=M[M.length-1],ce===!0&&D.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Je(L,H,R,z){if(L.visible===!1)return;if(L.layers.test(H.layers)){if(L.isGroup)R=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(H);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||at.intersectsSprite(L)){z&&we.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ce);let W=me.update(L),ae=L.material;ae.visible&&v.push(L,W,ae,R,we.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||at.intersectsObject(L))){let W=me.update(L),ae=L.material;if(z&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),we.copy(L.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),we.copy(W.boundingSphere.center)),we.applyMatrix4(L.matrixWorld).applyMatrix4(Ce)),Array.isArray(ae)){let Fe=W.groups;for(let lt=0,ut=Fe.length;lt<ut;lt++){let je=Fe[lt],Ct=ae[je.materialIndex];Ct&&Ct.visible&&v.push(L,W,Ct,R,we.z,je)}}else ae.visible&&v.push(L,W,ae,R,we.z,null)}}let le=L.children;for(let W=0,ae=le.length;W<ae;W++)Je(le[W],H,R,z)}function ot(L,H,R,z){let N=L.opaque,le=L.transmissive,W=L.transparent;m.setupLightsView(R),ce===!0&&D.setGlobalState(x.clippingPlanes,R),z&&ue.viewport(y.copy(z)),N.length>0&&on(N,H,R),le.length>0&&on(le,H,R),W.length>0&&on(W,H,R),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Rn(L,H,R,z){if((R.isScene===!0?R.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Un(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?hi:ji,minFilter:Rs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let le=m.state.transmissionRenderTarget[z.id],W=z.viewport||y;le.setSize(W.z,W.w);let ae=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(K),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&Ve.render(R);let Fe=x.toneMapping;x.toneMapping=Qs;let lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),ce===!0&&D.setGlobalState(x.clippingPlanes,z),on(L,R,z),w.updateMultisampleRenderTarget(le),w.updateRenderTargetMipmap(le),$.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let je=0,Ct=H.length;je<Ct;je++){let qt=H[je],ln=qt.object,Bn=qt.geometry,Yt=qt.material,dt=qt.group;if(Yt.side===Rt&&ln.layers.test(z.layers)){let tn=Yt.side;Yt.side=pn,Yt.needsUpdate=!0,Jt(ln,R,z,Bn,Yt,dt),Yt.side=tn,Yt.needsUpdate=!0,ut=!0}}ut===!0&&(w.updateMultisampleRenderTarget(le),w.updateRenderTargetMipmap(le))}x.setRenderTarget(ae),x.setClearColor(K,j),lt!==void 0&&(z.viewport=lt),x.toneMapping=Fe}function on(L,H,R){let z=H.isScene===!0?H.overrideMaterial:null;for(let N=0,le=L.length;N<le;N++){let W=L[N],ae=W.object,Fe=W.geometry,lt=z===null?W.material:z,ut=W.group;ae.layers.test(R.layers)&&Jt(ae,H,R,Fe,lt,ut)}}function Jt(L,H,R,z,N,le){L.onBeforeRender(x,H,R,z,N,le),L.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),N.onBeforeRender(x,H,R,z,L,le),N.transparent===!0&&N.side===Rt&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,x.renderBufferDirect(R,H,z,N,L,le),N.side=Fi,N.needsUpdate=!0,x.renderBufferDirect(R,H,z,N,L,le),N.side=Rt):x.renderBufferDirect(R,H,z,N,L,le),L.onAfterRender(x,H,R,z,N,le)}function Vt(L,H,R){H.isScene!==!0&&(H=ke);let z=G.get(L),N=m.state.lights,le=m.state.shadowsArray,W=N.state.version,ae=Ne.getParameters(L,N.state,le,H,R),Fe=Ne.getProgramCacheKey(ae),lt=z.programs;z.environment=L.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(L.isMeshStandardMaterial?F:E).get(L.envMap||z.environment),z.envMapRotation=z.environment!==null&&L.envMap===null?H.environmentRotation:L.envMapRotation,lt===void 0&&(L.addEventListener("dispose",Mt),lt=new Map,z.programs=lt);let ut=lt.get(Fe);if(ut!==void 0){if(z.currentProgram===ut&&z.lightsStateVersion===W)return In(L,ae),ut}else ae.uniforms=Ne.getUniforms(L),L.onBeforeCompile(ae,x),ut=Ne.acquireProgram(ae,Fe),lt.set(Fe,ut),z.uniforms=ae.uniforms;let je=z.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(je.clippingPlanes=D.uniform),In(L,ae),z.needsLights=Ge(L),z.lightsStateVersion=W,z.needsLights&&(je.ambientLightColor.value=N.state.ambient,je.lightProbe.value=N.state.probe,je.directionalLights.value=N.state.directional,je.directionalLightShadows.value=N.state.directionalShadow,je.spotLights.value=N.state.spot,je.spotLightShadows.value=N.state.spotShadow,je.rectAreaLights.value=N.state.rectArea,je.ltc_1.value=N.state.rectAreaLTC1,je.ltc_2.value=N.state.rectAreaLTC2,je.pointLights.value=N.state.point,je.pointLightShadows.value=N.state.pointShadow,je.hemisphereLights.value=N.state.hemi,je.directionalShadowMap.value=N.state.directionalShadowMap,je.directionalShadowMatrix.value=N.state.directionalShadowMatrix,je.spotShadowMap.value=N.state.spotShadowMap,je.spotLightMatrix.value=N.state.spotLightMatrix,je.spotLightMap.value=N.state.spotLightMap,je.pointShadowMap.value=N.state.pointShadowMap,je.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=ut,z.uniformsList=null,ut}function Ni(L){if(L.uniformsList===null){let H=L.currentProgram.getUniforms();L.uniformsList=_o.seqWithValue(H.seq,L.uniforms)}return L.uniformsList}function In(L,H){let R=G.get(L);R.outputColorSpace=H.outputColorSpace,R.batching=H.batching,R.batchingColor=H.batchingColor,R.instancing=H.instancing,R.instancingColor=H.instancingColor,R.instancingMorph=H.instancingMorph,R.skinning=H.skinning,R.morphTargets=H.morphTargets,R.morphNormals=H.morphNormals,R.morphColors=H.morphColors,R.morphTargetsCount=H.morphTargetsCount,R.numClippingPlanes=H.numClippingPlanes,R.numIntersection=H.numClipIntersection,R.vertexAlphas=H.vertexAlphas,R.vertexTangents=H.vertexTangents,R.toneMapping=H.toneMapping}function an(L,H,R,z,N){H.isScene!==!0&&(H=ke),w.resetTextureUnits();let le=H.fog,W=z.isMeshStandardMaterial?H.environment:null,ae=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:rr,Fe=(z.isMeshStandardMaterial?F:E).get(z.envMap||W),lt=z.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,ut=!!R.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),je=!!R.morphAttributes.position,Ct=!!R.morphAttributes.normal,qt=!!R.morphAttributes.color,ln=Qs;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ln=x.toneMapping);let Bn=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Yt=Bn!==void 0?Bn.length:0,dt=G.get(z),tn=m.state.lights;if(ce===!0&&(Ee===!0||L!==Y)){let oi=L===Y&&z.id===U;D.setState(z,L,oi)}let Kt=!1;z.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==tn.state.version||dt.outputColorSpace!==ae||N.isBatchedMesh&&dt.batching===!1||!N.isBatchedMesh&&dt.batching===!0||N.isBatchedMesh&&dt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&dt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&dt.instancing===!1||!N.isInstancedMesh&&dt.instancing===!0||N.isSkinnedMesh&&dt.skinning===!1||!N.isSkinnedMesh&&dt.skinning===!0||N.isInstancedMesh&&dt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&dt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&dt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&dt.instancingMorph===!1&&N.morphTexture!==null||dt.envMap!==Fe||z.fog===!0&&dt.fog!==le||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==D.numPlanes||dt.numIntersection!==D.numIntersection)||dt.vertexAlphas!==lt||dt.vertexTangents!==ut||dt.morphTargets!==je||dt.morphNormals!==Ct||dt.morphColors!==qt||dt.toneMapping!==ln||dt.morphTargetsCount!==Yt)&&(Kt=!0):(Kt=!0,dt.__version=z.version);let Ri=dt.currentProgram;Kt===!0&&(Ri=Vt(z,H,N));let Os=!1,ei=!1,cr=!1,xn=Ri.getUniforms(),xi=dt.uniforms;if(ue.useProgram(Ri.program)&&(Os=!0,ei=!0,cr=!0),z.id!==U&&(U=z.id,ei=!0),Os||Y!==L){J.reverseDepthBuffer?(ye.copy(L.projectionMatrix),ux(ye),dx(ye),xn.setValue(C,"projectionMatrix",ye)):xn.setValue(C,"projectionMatrix",L.projectionMatrix),xn.setValue(C,"viewMatrix",L.matrixWorldInverse);let oi=xn.map.cameraPosition;oi!==void 0&&oi.setValue(C,De.setFromMatrixPosition(L.matrixWorld)),J.logarithmicDepthBuffer&&xn.setValue(C,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&xn.setValue(C,"isOrthographic",L.isOrthographicCamera===!0),Y!==L&&(Y=L,ei=!0,cr=!0)}if(N.isSkinnedMesh){xn.setOptional(C,N,"bindMatrix"),xn.setOptional(C,N,"bindMatrixInverse");let oi=N.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),xn.setValue(C,"boneTexture",oi.boneTexture,w))}N.isBatchedMesh&&(xn.setOptional(C,N,"batchingTexture"),xn.setValue(C,"batchingTexture",N._matricesTexture,w),xn.setOptional(C,N,"batchingIdTexture"),xn.setValue(C,"batchingIdTexture",N._indirectTexture,w),xn.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&xn.setValue(C,"batchingColorTexture",N._colorsTexture,w));let Ai=R.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&ct.update(N,R,Ri),(ei||dt.receiveShadow!==N.receiveShadow)&&(dt.receiveShadow=N.receiveShadow,xn.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(xi.envMap.value=Fe,xi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&H.environment!==null&&(xi.envMapIntensity.value=H.environmentIntensity),ei&&(xn.setValue(C,"toneMappingExposure",x.toneMappingExposure),dt.needsLights&&Fn(xi,cr),le&&z.fog===!0&&Ue.refreshFogUniforms(xi,le),Ue.refreshMaterialUniforms(xi,z,he,te,m.state.transmissionRenderTarget[L.id]),_o.upload(C,Ni(dt),xi,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(_o.upload(C,Ni(dt),xi,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&xn.setValue(C,"center",N.center),xn.setValue(C,"modelViewMatrix",N.modelViewMatrix),xn.setValue(C,"normalMatrix",N.normalMatrix),xn.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let oi=z.uniformsGroups;for(let Hi=0,sa=oi.length;Hi<sa;Hi++){let Xr=oi[Hi];X.update(Xr,Ri),X.bind(Xr,Ri)}}return Ri}function Fn(L,H){L.ambientLightColor.needsUpdate=H,L.lightProbe.needsUpdate=H,L.directionalLights.needsUpdate=H,L.directionalLightShadows.needsUpdate=H,L.pointLights.needsUpdate=H,L.pointLightShadows.needsUpdate=H,L.spotLights.needsUpdate=H,L.spotLightShadows.needsUpdate=H,L.rectAreaLights.needsUpdate=H,L.hemisphereLights.needsUpdate=H}function Ge(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,H,R){G.get(L.texture).__webglTexture=H,G.get(L.depthTexture).__webglTexture=R;let z=G.get(L);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=R===void 0,z.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,H){let R=G.get(L);R.__webglFramebuffer=H,R.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(L,H=0,R=0){T=L,S=H,P=R;let z=!0,N=null,le=!1,W=!1;if(L){let Fe=G.get(L);if(Fe.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(Fe.__webglFramebuffer===void 0)w.setupRenderTarget(L);else if(Fe.__hasExternalTextures)w.rebindTextures(L,G.get(L.texture).__webglTexture,G.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let je=L.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&G.has(je)&&(L.width!==je.image.width||L.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(L)}}let lt=L.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(W=!0);let ut=G.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ut[H])?N=ut[H][R]:N=ut[H],le=!0):L.samples>0&&w.useMultisampledRTT(L)===!1?N=G.get(L).__webglMultisampledFramebuffer:Array.isArray(ut)?N=ut[R]:N=ut,y.copy(L.viewport),A.copy(L.scissor),Z=L.scissorTest}else y.copy(Pe).multiplyScalar(he).floor(),A.copy(Re).multiplyScalar(he).floor(),Z=Be;if(ue.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&ue.drawBuffers(L,N),ue.viewport(y),ue.scissor(A),ue.setScissorTest(Z),le){let Fe=G.get(L.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,R)}else if(W){let Fe=G.get(L.texture),lt=H||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fe.__webglTexture,R||0,lt)}U=-1},this.readRenderTargetPixels=function(L,H,R,z,N,le,W){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=G.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&W!==void 0&&(ae=ae[W]),ae){ue.bindFramebuffer(C.FRAMEBUFFER,ae);try{let Fe=L.texture,lt=Fe.format,ut=Fe.type;if(!J.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=L.width-z&&R>=0&&R<=L.height-N&&C.readPixels(H,R,z,N,st.convert(lt),st.convert(ut),le)}finally{let Fe=T!==null?G.get(T).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(L,H,R,z,N,le,W){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=G.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&W!==void 0&&(ae=ae[W]),ae){let Fe=L.texture,lt=Fe.format,ut=Fe.type;if(!J.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=L.width-z&&R>=0&&R<=L.height-N){ue.bindFramebuffer(C.FRAMEBUFFER,ae);let je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.bufferData(C.PIXEL_PACK_BUFFER,le.byteLength,C.STREAM_READ),C.readPixels(H,R,z,N,st.convert(lt),st.convert(ut),0);let Ct=T!==null?G.get(T).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Ct);let qt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await hx(C,qt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,le),C.deleteBuffer(je),C.deleteSync(qt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,H=null,R=0){L.isTexture!==!0&&(tc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,L=arguments[1]);let z=Math.pow(2,-R),N=Math.floor(L.image.width*z),le=Math.floor(L.image.height*z),W=H!==null?H.x:0,ae=H!==null?H.y:0;w.setTexture2D(L,0),C.copyTexSubImage2D(C.TEXTURE_2D,R,0,0,W,ae,N,le),ue.unbindTexture()},this.copyTextureToTexture=function(L,H,R=null,z=null,N=0){L.isTexture!==!0&&(tc("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,L=arguments[1],H=arguments[2],N=arguments[3]||0,R=null);let le,W,ae,Fe,lt,ut;R!==null?(le=R.max.x-R.min.x,W=R.max.y-R.min.y,ae=R.min.x,Fe=R.min.y):(le=L.image.width,W=L.image.height,ae=0,Fe=0),z!==null?(lt=z.x,ut=z.y):(lt=0,ut=0);let je=st.convert(H.format),Ct=st.convert(H.type);w.setTexture2D(H,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let qt=C.getParameter(C.UNPACK_ROW_LENGTH),ln=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Bn=C.getParameter(C.UNPACK_SKIP_PIXELS),Yt=C.getParameter(C.UNPACK_SKIP_ROWS),dt=C.getParameter(C.UNPACK_SKIP_IMAGES),tn=L.isCompressedTexture?L.mipmaps[N]:L.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,tn.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,tn.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ae),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),L.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,lt,ut,le,W,je,Ct,tn.data):L.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,lt,ut,tn.width,tn.height,je,tn.data):C.texSubImage2D(C.TEXTURE_2D,N,lt,ut,le,W,je,Ct,tn),C.pixelStorei(C.UNPACK_ROW_LENGTH,qt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ln),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Bn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Yt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,dt),N===0&&H.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(L,H,R=null,z=null,N=0){L.isTexture!==!0&&(tc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),R=arguments[0]||null,z=arguments[1]||null,L=arguments[2],H=arguments[3],N=arguments[4]||0);let le,W,ae,Fe,lt,ut,je,Ct,qt,ln=L.isCompressedTexture?L.mipmaps[N]:L.image;R!==null?(le=R.max.x-R.min.x,W=R.max.y-R.min.y,ae=R.max.z-R.min.z,Fe=R.min.x,lt=R.min.y,ut=R.min.z):(le=ln.width,W=ln.height,ae=ln.depth,Fe=0,lt=0,ut=0),z!==null?(je=z.x,Ct=z.y,qt=z.z):(je=0,Ct=0,qt=0);let Bn=st.convert(H.format),Yt=st.convert(H.type),dt;if(H.isData3DTexture)w.setTexture3D(H,0),dt=C.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)w.setTexture2DArray(H,0),dt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);let tn=C.getParameter(C.UNPACK_ROW_LENGTH),Kt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ri=C.getParameter(C.UNPACK_SKIP_PIXELS),Os=C.getParameter(C.UNPACK_SKIP_ROWS),ei=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ln.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ln.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,lt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ut),L.isDataTexture||L.isData3DTexture?C.texSubImage3D(dt,N,je,Ct,qt,le,W,ae,Bn,Yt,ln.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(dt,N,je,Ct,qt,le,W,ae,Bn,ln.data):C.texSubImage3D(dt,N,je,Ct,qt,le,W,ae,Bn,Yt,ln),C.pixelStorei(C.UNPACK_ROW_LENGTH,tn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Kt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ri),C.pixelStorei(C.UNPACK_SKIP_ROWS,Os),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ei),N===0&&H.generateMipmaps&&C.generateMipmap(dt),ue.unbindTexture()},this.initRenderTarget=function(L){G.get(L).__webglFramebuffer===void 0&&w.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?w.setTextureCube(L,0):L.isData3DTexture?w.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?w.setTexture2DArray(L,0):w.setTexture2D(L,0),ue.unbindTexture()},this.resetState=function(){S=0,P=0,T=null,ue.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===jd?"display-p3":"srgb",t.unpackColorSpace=Zt.workingColorSpace===Fc?"display-p3":"srgb"}},pc=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Co=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ed,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ui=new b,Ra=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyMatrix4(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.applyNormalMatrix(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ui.fromBufferAttribute(this,t),ui.transformDirection(e),this.setXYZ(t,ui.x,ui.y,ui.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wn=class extends Qi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ho,da=new b,uo=new b,fo=new b,po=new Se,fa=new Se,Bp=new ft,zl=new b,pa=new b,Ol=new b,Z0=new Se,ou=new Se,J0=new Se,Nn=class extends Lt{constructor(e=new Wn){if(super(),this.isSprite=!0,this.type="Sprite",ho===void 0){ho=new Gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mc(t,5);ho.setIndex([0,1,2,0,2,3]),ho.setAttribute("position",new Ra(n,3,0,!1)),ho.setAttribute("uv",new Ra(n,2,3,!1))}this.geometry=ho,this.material=e,this.center=new Se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),uo.setFromMatrixScale(this.matrixWorld),Bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&uo.multiplyScalar(-fo.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Fl(zl.set(-.5,-.5,0),fo,o,uo,s,r),Fl(pa.set(.5,-.5,0),fo,o,uo,s,r),Fl(Ol.set(.5,.5,0),fo,o,uo,s,r),Z0.set(0,0),ou.set(1,0),J0.set(1,1);let a=e.ray.intersectTriangle(zl,pa,Ol,!1,da);if(a===null&&(Fl(pa.set(-.5,.5,0),fo,o,uo,s,r),ou.set(0,1),a=e.ray.intersectTriangle(zl,Ol,pa,!1,da),a===null))return;let l=e.ray.origin.distanceTo(da);l<e.near||l>e.far||t.push({distance:l,point:da.clone(),uv:$s.getInterpolation(da,zl,pa,Ol,Z0,ou,J0,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fl(i,e,t,n,s,r){po.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(fa.x=r*po.x-s*po.y,fa.y=s*po.x+r*po.y):fa.copy(po),i.copy(e),i.x+=fa.x,i.y+=fa.y,i.applyMatrix4(Bp)}var K0=new b,$0=new $t,j0=new $t,oM=new b,Q0=new ft,Bl=new b,au=new ki,ep=new ft,lu=new Tr,gc=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=t0,this.bindMatrix=new ft,this.bindMatrixInverse=new ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bl),this.boundingBox.expandByPoint(Bl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bl),this.boundingSphere.expandByPoint(Bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),au.copy(this.boundingSphere),au.applyMatrix4(s),e.ray.intersectsSphere(au)!==!1&&(ep.copy(s).invert(),lu.copy(e.ray).applyMatrix4(ep),!(this.boundingBox!==null&&lu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,lu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===t0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ng?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;$0.fromBufferAttribute(s.attributes.skinIndex,e),j0.fromBufferAttribute(s.attributes.skinWeight,e),K0.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=j0.getComponent(r);if(o!==0){let a=$0.getComponent(r);Q0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oM.copy(K0).applyMatrix4(Q0),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Aa=class extends Lt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Rr=class extends Mi{constructor(e=null,t=1,n=1,s,r,o,a,l,c=ni,u=ni,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},tp=new ft,aM=new ft,xc=class i{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:aM;tp.multiplyMatrices(a,t[r]),tp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Rr(t,e,e,_i,ls);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Aa),this.bones.push(o),this.boneInverses.push(new ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}};var Ca=class extends Qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yc=new b,vc=new b,np=new ft,ma=new Tr,kl=new ki,cu=new b,ip=new b,_c=class extends Lt{constructor(e=new Gt,t=new Ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)yc.fromBufferAttribute(t,s-1),vc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=yc.distanceTo(vc);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kl.copy(n.boundingSphere),kl.applyMatrix4(s),kl.radius+=r,e.ray.intersectsSphere(kl)===!1)return;np.copy(s).invert(),ma.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=u.getX(v),M=u.getX(v+1),x=Vl(this,e,ma,l,p,M);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(f),p=Vl(this,e,ma,l,v,m);p&&t.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){let p=Vl(this,e,ma,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Vl(this,e,ma,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vl(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(yc.fromBufferAttribute(o,s),vc.fromBufferAttribute(o,r),t.distanceSqToSegment(yc,vc,cu,ip)>n)return;cu.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(cu);if(!(l<e.near||l>e.far))return{distance:l,point:ip.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Cs=class extends Qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sp=new ft,xd=new Tr,Gl=new ki,Wl=new b,cs=class extends Lt{constructor(e=new Gt,t=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(s),Gl.radius+=r,e.ray.intersectsSphere(Gl)===!1)return;sp.copy(s).invert(),xd.copy(e.ray).applyMatrix4(sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);Wl.fromBufferAttribute(h,m),rp(Wl,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,v=f;g<v;g++)Wl.fromBufferAttribute(h,g),rp(Wl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function rp(i,e,t,n,s,r,o){let a=xd.distanceSqToPoint(i);if(a<t){let l=new b;xd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Qt=class extends Mi{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Se:new b);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new b,s=[],r=[],o=[],a=new b,l=new ft;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new b)}r[0]=new b,o[0]=new b;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos($n(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($n(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Pa=class extends Vi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Se){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yd=class extends Pa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Xl=new b,hu=new tf,uu=new tf,du=new tf,Ar=class extends Vi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new b){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Xl.subVectors(s[0],s[1]).add(s[0]),c=Xl);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Xl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),hu.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,v,m),uu.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,v,m),du.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(hu.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),uu.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),du.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(hu.calc(l),uu.calc(l),du.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new b().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function op(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function lM(i,e){let t=1-i;return t*t*e}function cM(i,e){return 2*(1-i)*i*e}function hM(i,e){return i*i*e}function Ma(i,e,t,n){return lM(i,e)+cM(i,t)+hM(i,n)}function uM(i,e){let t=1-i;return t*t*t*e}function dM(i,e){let t=1-i;return 3*t*t*i*e}function fM(i,e){return 3*(1-i)*i*i*e}function pM(i,e){return i*i*i*e}function Ea(i,e,t,n,s){return uM(i,e)+dM(i,t)+fM(i,n)+pM(i,s)}var Mc=class extends Vi{constructor(e=new Se,t=new Se,n=new Se,s=new Se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vd=class extends Vi{constructor(e=new b,t=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new b){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ea(e,s.x,r.x,o.x,a.x),Ea(e,s.y,r.y,o.y,a.y),Ea(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends Vi{constructor(e=new Se,t=new Se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Se){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_d=class extends Vi{constructor(e=new b,t=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new b){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new b){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bc=class extends Vi{constructor(e=new Se,t=new Se,n=new Se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Se){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ma(e,s.x,r.x,o.x),Ma(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Vi{constructor(e=new b,t=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new b){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Ma(e,s.x,r.x,o.x),Ma(e,s.y,r.y,o.y),Ma(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wc=class extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Se){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(op(a,l.x,c.x,u.x,h.x),op(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Se().fromArray(s))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:yd,CatmullRomCurve3:Ar,CubicBezierCurve:Mc,CubicBezierCurve3:vd,EllipseCurve:Pa,LineCurve:Ec,LineCurve3:_d,QuadraticBezierCurve:bc,QuadraticBezierCurve3:Po,SplineCurve:wc}),Md=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Sc[s.type]().fromJSON(s))}return this}},Tc=class extends Md{constructor(e){super(),this.type="Path",this.currentPoint=new Se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ec(this.currentPoint.clone(),new Se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new bc(this.currentPoint.clone(),new Se(e,t),new Se(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Mc(this.currentPoint.clone(),new Se(e,t),new Se(n,s),new Se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Pa(e,t,n,s,r,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ei=class i extends Gt{constructor(e=[new Se(0,-.5),new Se(.5,0),new Se(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$n(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/t,h=new b,d=new Se,f=new b,g=new b,v=new b,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let x=n+M*u*s,_=Math.sin(x),S=Math.cos(x);for(let P=0;P<=e.length-1;P++){h.x=e[P].x*_,h.y=e[P].y,h.z=e[P].x*S,o.push(h.x,h.y,h.z),d.x=M/t,d.y=P/(e.length-1),a.push(d.x,d.y);let T=l[3*P+0]*_,U=l[3*P+1],Y=l[3*P+0]*S;c.push(T,U,Y)}}for(let M=0;M<t;M++)for(let x=0;x<e.length-1;x++){let _=x+M*e.length,S=_,P=_+e.length,T=_+e.length+1,U=_+1;r.push(S,P,U),r.push(T,U,P)}this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("uv",new Tt(a,2)),this.setAttribute("normal",new Tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var sr=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new b,u=new Se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,v=[],m=n/2,p=0;M(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function M(){let _=new b,S=new b,P=0,T=(t-e)/n;for(let U=0;U<=r;U++){let Y=[],y=U/r,A=y*(t-e)+e;for(let Z=0;Z<=s;Z++){let K=Z/s,j=K*l+a,xe=Math.sin(j),te=Math.cos(j);S.x=A*xe,S.y=-y*n+m,S.z=A*te,h.push(S.x,S.y,S.z),_.set(xe,T,te).normalize(),d.push(_.x,_.y,_.z),f.push(K,1-y),Y.push(g++)}v.push(Y)}for(let U=0;U<s;U++)for(let Y=0;Y<r;Y++){let y=v[Y][U],A=v[Y+1][U],Z=v[Y+1][U+1],K=v[Y][U+1];e>0&&(u.push(y,A,K),P+=3),t>0&&(u.push(A,Z,K),P+=3)}c.addGroup(p,P,0),p+=P}function x(_){let S=g,P=new Se,T=new b,U=0,Y=_===!0?e:t,y=_===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;let A=g;for(let Z=0;Z<=s;Z++){let j=Z/s*l+a,xe=Math.cos(j),te=Math.sin(j);T.x=Y*te,T.y=m*y,T.z=Y*xe,h.push(T.x,T.y,T.z),d.push(0,y,0),P.x=xe*.5+.5,P.y=te*.5*y+.5,f.push(P.x,P.y),g++}for(let Z=0;Z<s;Z++){let K=S+Z,j=A+Z;_===!0?u.push(j,j+1,K):u.push(j+1,j,K),U+=3}c.addGroup(p,U,_===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bi=class i extends Nt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rc=class i extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new Tt(r,3)),this.setAttribute("normal",new Tt(r.slice(),3)),this.setAttribute("uv",new Tt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let x=new b,_=new b,S=new b;for(let P=0;P<t.length;P+=3)f(t[P+0],x),f(t[P+1],_),f(t[P+2],S),l(x,_,S,M)}function l(M,x,_,S){let P=S+1,T=[];for(let U=0;U<=P;U++){T[U]=[];let Y=M.clone().lerp(_,U/P),y=x.clone().lerp(_,U/P),A=P-U;for(let Z=0;Z<=A;Z++)Z===0&&U===P?T[U][Z]=Y:T[U][Z]=Y.clone().lerp(y,Z/A)}for(let U=0;U<P;U++)for(let Y=0;Y<2*(P-U)-1;Y++){let y=Math.floor(Y/2);Y%2===0?(d(T[U][y+1]),d(T[U+1][y]),d(T[U][y])):(d(T[U][y+1]),d(T[U+1][y+1]),d(T[U+1][y]))}}function c(M){let x=new b;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(M),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){let M=new b;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];let _=m(M)/2/Math.PI+.5,S=p(M)/Math.PI+.5;o.push(_,1-S)}g(),h()}function h(){for(let M=0;M<o.length;M+=6){let x=o[M+0],_=o[M+2],S=o[M+4],P=Math.max(x,_,S),T=Math.min(x,_,S);P>.9&&T<.1&&(x<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),S<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,x){let _=M*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let M=new b,x=new b,_=new b,S=new b,P=new Se,T=new Se,U=new Se;for(let Y=0,y=0;Y<r.length;Y+=9,y+=6){M.set(r[Y+0],r[Y+1],r[Y+2]),x.set(r[Y+3],r[Y+4],r[Y+5]),_.set(r[Y+6],r[Y+7],r[Y+8]),P.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),U.set(o[y+4],o[y+5]),S.copy(M).add(x).add(_).divideScalar(3);let A=m(S);v(P,y+0,M,A),v(T,y+2,x,A),v(U,y+4,_,A)}}function v(M,x,_,S){S<0&&M.x===1&&(o[x]=M.x-1),_.x===0&&_.z===0&&(o[x]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var es=class extends Tc{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Tc().fromJSON(s))}return this}},mM={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=kp(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,d,f;if(n&&(r=_M(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],d=i[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-a,u-l),f=f!==0?32767/f:0}return Ia(r,o,t,a,l,f,0),o}};function kp(i,e,t,n,s){let r,o;if(s===IM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=ap(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=ap(r,i[r],i[r+1],o);return o&&kc(o,o.next)&&(La(o),o=o.next),o}function Cr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kc(t,t.next)||wn(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ia(i,e,t,n,s,r,o){if(!i)return;!o&&r&&SM(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?xM(i,n,s,r):gM(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),La(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yM(Cr(i),e,t),Ia(i,e,t,n,s,r,2)):o===2&&vM(i,e,t,n,s,r):Ia(Cr(i),e,t,n,s,r,1);break}}}function gM(i){let e=i.prev,t=i,n=i.next;if(wn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&go(s,a,r,l,o,c,g.x,g.y)&&wn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function xM(i,e,t,n){let s=i.prev,r=i,o=i.next;if(wn(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,v=a>l?a>c?a:c:l>c?l:c,m=u>h?u>d?u:d:h>d?h:d,p=Ed(f,g,e,t,n),M=Ed(v,m,e,t,n),x=i.prevZ,_=i.nextZ;for(;x&&x.z>=p&&_&&_.z<=M;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&go(a,u,l,h,c,d,x.x,x.y)&&wn(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&go(a,u,l,h,c,d,_.x,_.y)&&wn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&go(a,u,l,h,c,d,x.x,x.y)&&wn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&go(a,u,l,h,c,d,_.x,_.y)&&wn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function yM(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!kc(s,r)&&Vp(s,n,n.next,r)&&Da(s,r)&&Da(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),La(n),La(n.next),n=i=r),n=n.next}while(n!==i);return Cr(n)}function vM(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&AM(o,a)){let l=Gp(o,a);o=Cr(o,o.next),l=Cr(l,l.next),Ia(o,e,t,n,s,r,0),Ia(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _M(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kp(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(RM(c));for(s.sort(MM),r=0;r<s.length;r++)t=EM(s[r],t);return t}function MM(i,e){return i.x-e.x}function EM(i,e){let t=bM(i,e);if(!t)return e;let n=Gp(t,i);return Cr(n,n.next),Cr(t,t.next)}function bM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&go(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Da(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&wM(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function wM(i,e){return wn(i.prev,i,e.prev)<0&&wn(e.next,i,i.next)<0}function SM(i,e,t,n){let s=i;do s.z===0&&(s.z=Ed(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,TM(s)}function TM(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Ed(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function RM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function go(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function AM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!CM(i,e)&&(Da(i,e)&&Da(e,i)&&PM(i,e)&&(wn(i.prev,i,e.prev)||wn(i,e.prev,e))||kc(i,e)&&wn(i.prev,i,i.next)>0&&wn(e.prev,e,e.next)>0)}function wn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kc(i,e){return i.x===e.x&&i.y===e.y}function Vp(i,e,t,n){let s=Yl(wn(i,e,t)),r=Yl(wn(i,e,n)),o=Yl(wn(t,n,i)),a=Yl(wn(t,n,e));return!!(s!==r&&o!==a||s===0&&ql(i,t,e)||r===0&&ql(i,n,e)||o===0&&ql(t,i,n)||a===0&&ql(t,e,n))}function ql(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Yl(i){return i>0?1:i<0?-1:0}function CM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Da(i,e){return wn(i.prev,i,i.next)<0?wn(i,e,i.next)>=0&&wn(i,i.prev,e)>=0:wn(i,e,i.prev)<0||wn(i,i.next,e)<0}function PM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gp(i,e){let t=new bd(i.i,i.x,i.y),n=new bd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ap(i,e,t,n){let s=new bd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function La(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bd(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function IM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var er=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];lp(e),cp(n,e);let o=e.length;t.forEach(lp);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,cp(n,t[l]);let a=mM.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function cp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ua=class i extends Gt{constructor(e=new es([new Se(.5,.5),new Se(-.5,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Tt(s,3)),this.setAttribute("uv",new Tt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:DM,x,_=!1,S,P,T,U;p&&(x=p.getSpacedPoints(u),_=!0,d=!1,S=p.computeFrenetFrames(u,!1),P=new b,T=new b,U=new b),d||(m=0,f=0,g=0,v=0);let Y=a.extractPoints(c),y=Y.shape,A=Y.holes;if(!er.isClockWise(y)){y=y.reverse();for(let k=0,C=A.length;k<C;k++){let ie=A[k];er.isClockWise(ie)&&(A[k]=ie.reverse())}}let K=er.triangulateShape(y,A),j=y;for(let k=0,C=A.length;k<C;k++){let ie=A[k];y=y.concat(ie)}function xe(k,C,ie){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(C,ie)}let te=y.length,he=K.length;function oe(k,C,ie){let $,J,ue,pe=k.x-C.x,G=k.y-C.y,w=ie.x-k.x,E=ie.y-k.y,F=pe*pe+G*G,re=pe*E-G*w;if(Math.abs(re)>Number.EPSILON){let B=Math.sqrt(F),me=Math.sqrt(w*w+E*E),Ne=C.x-G/B,Ue=C.y+pe/B,V=ie.x-E/me,q=ie.y+w/me,D=((V-Ne)*E-(q-Ue)*w)/(pe*E-G*w);$=Ne+pe*D-k.x,J=Ue+G*D-k.y;let fe=$*$+J*J;if(fe<=2)return new Se($,J);ue=Math.sqrt(fe/2)}else{let B=!1;pe>Number.EPSILON?w>Number.EPSILON&&(B=!0):pe<-Number.EPSILON?w<-Number.EPSILON&&(B=!0):Math.sign(G)===Math.sign(E)&&(B=!0),B?($=-G,J=pe,ue=Math.sqrt(F)):($=pe,J=G,ue=Math.sqrt(F/2))}return new Se($/ue,J/ue)}let _e=[];for(let k=0,C=j.length,ie=C-1,$=k+1;k<C;k++,ie++,$++)ie===C&&(ie=0),$===C&&($=0),_e[k]=oe(j[k],j[ie],j[$]);let Pe=[],Re,Be=_e.concat();for(let k=0,C=A.length;k<C;k++){let ie=A[k];Re=[];for(let $=0,J=ie.length,ue=J-1,pe=$+1;$<J;$++,ue++,pe++)ue===J&&(ue=0),pe===J&&(pe=0),Re[$]=oe(ie[$],ie[ue],ie[pe]);Pe.push(Re),Be=Be.concat(Re)}for(let k=0;k<m;k++){let C=k/m,ie=f*Math.cos(C*Math.PI/2),$=g*Math.sin(C*Math.PI/2)+v;for(let J=0,ue=j.length;J<ue;J++){let pe=xe(j[J],_e[J],$);Ce(pe.x,pe.y,-ie)}for(let J=0,ue=A.length;J<ue;J++){let pe=A[J];Re=Pe[J];for(let G=0,w=pe.length;G<w;G++){let E=xe(pe[G],Re[G],$);Ce(E.x,E.y,-ie)}}}let at=g+v;for(let k=0;k<te;k++){let C=d?xe(y[k],Be[k],at):y[k];_?(T.copy(S.normals[0]).multiplyScalar(C.x),P.copy(S.binormals[0]).multiplyScalar(C.y),U.copy(x[0]).add(T).add(P),Ce(U.x,U.y,U.z)):Ce(C.x,C.y,0)}for(let k=1;k<=u;k++)for(let C=0;C<te;C++){let ie=d?xe(y[C],Be[C],at):y[C];_?(T.copy(S.normals[k]).multiplyScalar(ie.x),P.copy(S.binormals[k]).multiplyScalar(ie.y),U.copy(x[k]).add(T).add(P),Ce(U.x,U.y,U.z)):Ce(ie.x,ie.y,h/u*k)}for(let k=m-1;k>=0;k--){let C=k/m,ie=f*Math.cos(C*Math.PI/2),$=g*Math.sin(C*Math.PI/2)+v;for(let J=0,ue=j.length;J<ue;J++){let pe=xe(j[J],_e[J],$);Ce(pe.x,pe.y,h+ie)}for(let J=0,ue=A.length;J<ue;J++){let pe=A[J];Re=Pe[J];for(let G=0,w=pe.length;G<w;G++){let E=xe(pe[G],Re[G],$);_?Ce(E.x,E.y+x[u-1].y,x[u-1].x+ie):Ce(E.x,E.y,h+ie)}}}ce(),Ee();function ce(){let k=s.length/3;if(d){let C=0,ie=te*C;for(let $=0;$<he;$++){let J=K[$];De(J[2]+ie,J[1]+ie,J[0]+ie)}C=u+m*2,ie=te*C;for(let $=0;$<he;$++){let J=K[$];De(J[0]+ie,J[1]+ie,J[2]+ie)}}else{for(let C=0;C<he;C++){let ie=K[C];De(ie[2],ie[1],ie[0])}for(let C=0;C<he;C++){let ie=K[C];De(ie[0]+te*u,ie[1]+te*u,ie[2]+te*u)}}n.addGroup(k,s.length/3-k,0)}function Ee(){let k=s.length/3,C=0;ye(j,C),C+=j.length;for(let ie=0,$=A.length;ie<$;ie++){let J=A[ie];ye(J,C),C+=J.length}n.addGroup(k,s.length/3-k,1)}function ye(k,C){let ie=k.length;for(;--ie>=0;){let $=ie,J=ie-1;J<0&&(J=k.length-1);for(let ue=0,pe=u+m*2;ue<pe;ue++){let G=te*ue,w=te*(ue+1),E=C+$+G,F=C+J+G,re=C+J+w,B=C+$+w;we(E,F,re,B)}}}function Ce(k,C,ie){l.push(k),l.push(C),l.push(ie)}function De(k,C,ie){ke(k),ke(C),ke(ie);let $=s.length/3,J=M.generateTopUV(n,s,$-3,$-2,$-1);Ye(J[0]),Ye(J[1]),Ye(J[2])}function we(k,C,ie,$){ke(k),ke(C),ke($),ke(C),ke(ie),ke($);let J=s.length/3,ue=M.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);Ye(ue[0]),Ye(ue[1]),Ye(ue[3]),Ye(ue[1]),Ye(ue[2]),Ye(ue[3])}function ke(k){s.push(l[k*3+0]),s.push(l[k*3+1]),s.push(l[k*3+2])}function Ye(k){r.push(k.x),r.push(k.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return LM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Sc[s.type]().fromJSON(s)),new i(n,e.options)}},DM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Se(r,o),new Se(a,l),new Se(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Se(o,1-l),new Se(c,1-h),new Se(d,1-g),new Se(v,1-p)]:[new Se(a,1-l),new Se(u,1-h),new Se(f,1-g),new Se(m,1-p)]}};function LM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wi=class i extends Rc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Io=class i extends Gt{constructor(e=new es([new Se(0,.5),new Se(-.5,-.5),new Se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(o,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;er.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];er.isClockWise(M)===!0&&(g[m]=M.reverse())}let v=er.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],x=M[0]+h,_=M[1]+h,S=M[2]+h;n.push(x,_,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return UM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function UM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var en=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new b,d=new b,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],x=p/n,_=0;p===0&&o===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let P=S/t;h.x=-e*Math.cos(s+P*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+P*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(P+_,1-x),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let x=u[p][M+1],_=u[p][M],S=u[p+1][M],P=u[p+1][M+1];(p!==0||o>0)&&f.push(x,_,P),(p!==n-1||l<Math.PI)&&f.push(_,S,P)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ac=class i extends Rc{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ii=class i extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],u=new b,h=new b,d=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let v=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let v=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;o.push(v,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Tt(a,3)),this.setAttribute("normal",new Tt(l,3)),this.setAttribute("uv",new Tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Pr=class i extends Gt{constructor(e=new Po(new b(-1,-1,0),new b(-1,1,0),new b(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new b,l=new b,c=new Se,u=new b,h=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Tt(h,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),M(),p()}function m(x){u=e.getPointAt(x/t,u);let _=o.normals[x],S=o.binormals[x];for(let P=0;P<=s;P++){let T=P/s*Math.PI*2,U=Math.sin(T),Y=-Math.cos(T);l.x=Y*_.x+U*S.x,l.y=Y*_.y+U*S.y,l.z=Y*_.z+U*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=t;x++)for(let _=1;_<=s;_++){let S=(s+1)*(x-1)+(_-1),P=(s+1)*x+(_-1),T=(s+1)*x+_,U=(s+1)*(x-1)+_;g.push(S,P,U),g.push(P,T,U)}}function M(){for(let x=0;x<=t;x++)for(let _=0;_<=s;_++)c.x=x/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Cc=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends Qi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Pc=class extends Qi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$d,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function Zl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function NM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Do=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wd=class extends Do{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:n0,endingEnd:n0}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case i0:r=e,a=2*t-n;break;case s0:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case i0:o=e,l=2*n-t;break;case s0:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let S=0;S!==a;++S)r[S]=p*o[u+S]+M*o[c+S]+x*o[l+S]+_*o[h+S];return r}},Sd=class extends Do{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Td=class extends Do{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ts=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zl(t,this.TimeBufferType),this.values=Zl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zl(e.times,Array),values:Zl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Td(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nc:t=this.InterpolantFactoryMethodDiscrete;break;case Qu:t=this.InterpolantFactoryMethodLinear;break;case Dh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nc;case this.InterpolantFactoryMethodLinear:return Qu;case this.InterpolantFactoryMethodSmooth:return Dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&NM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Dh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ts.prototype.TimeBufferType=Float32Array;ts.prototype.ValueBufferType=Float32Array;ts.prototype.DefaultInterpolation=Qu;var Ir=class extends ts{constructor(e,t,n){super(e,t,n)}};Ir.prototype.ValueTypeName="bool";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=nc;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Rd=class extends ts{};Rd.prototype.ValueTypeName="color";var Ad=class extends ts{};Ad.prototype.ValueTypeName="number";var Cd=class extends Do{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)En.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ic=class extends ts{InterpolantFactoryMethodLinear(e){return new Cd(this.times,this.values,this.getValueSize(),e)}};Ic.prototype.ValueTypeName="quaternion";Ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends ts{constructor(e,t,n){super(e,t,n)}};Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=nc;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Pd=class extends ts{};Pd.prototype.ValueTypeName="vector";var Id=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}},HM=new Id,Dd=class{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dd.DEFAULT_MATERIAL_NAME="__DEFAULT";var Na=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Dc=class extends Na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fu=new ft,hp=new b,up=new b,Lc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ta,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(hp),up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(up),t.updateMatrixWorld(),fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var dp=new ft,ga=new b,pu=new b,Ld=class extends Lc{constructor(){super(new ti(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new $t(2,1,1,1),new $t(0,1,1,1),new $t(3,1,1,1),new $t(1,1,1,1),new $t(3,0,1,1),new $t(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ga.setFromMatrixPosition(e.matrixWorld),n.position.copy(ga),pu.copy(n.position),pu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pu),n.updateMatrixWorld(),s.makeTranslation(-ga.x,-ga.y,-ga.z),dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dp)}},Lo=class extends Na{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ld}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ud=class extends Lc{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ud}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Jl,No=class{static getContext(){return Jl===void 0&&(Jl=new(window.AudioContext||window.webkitAudioContext)),Jl}static setContext(e){Jl=e}};var Lr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fp(){return performance.now()}var vr=new b,pp=new En,zM=new b,_r=new b,Uc=class extends Lt{constructor(){super(),this.type="AudioListener",this.context=No.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Lr}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vr,pp,zM),_r.set(0,0,-1).applyQuaternion(pp),t.positionX){let s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vr.x,s),t.positionY.linearRampToValueAtTime(vr.y,s),t.positionZ.linearRampToValueAtTime(vr.z,s),t.forwardX.linearRampToValueAtTime(_r.x,s),t.forwardY.linearRampToValueAtTime(_r.y,s),t.forwardZ.linearRampToValueAtTime(_r.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(vr.x,vr.y,vr.z),t.setOrientation(_r.x,_r.y,_r.z,n.x,n.y,n.z)}},Ho=class extends Lt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Mr=new b,mp=new En,OM=new b,Er=new b,Ha=class extends Ho{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Mr,mp,OM),Er.set(0,0,1).applyQuaternion(mp);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Mr.x,n),t.positionY.linearRampToValueAtTime(Mr.y,n),t.positionZ.linearRampToValueAtTime(Mr.z,n),t.orientationX.linearRampToValueAtTime(Er.x,n),t.orientationY.linearRampToValueAtTime(Er.y,n),t.orientationZ.linearRampToValueAtTime(Er.z,n)}else t.setPosition(Mr.x,Mr.y,Mr.z),t.setOrientation(Er.x,Er.y,Er.z)}};var nf="\\[\\]\\.:\\/",FM=new RegExp("["+nf+"]","g"),sf="[^"+nf+"]",BM="[^"+nf.replace("\\.","")+"]",kM=/((?:WC+[\/:])*)/.source.replace("WC",sf),VM=/(WCOD+)?/.source.replace("WCOD",BM),GM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),WM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),XM=new RegExp("^"+kM+VM+GM+WM+"$"),qM=["material","materials","bones","map"],Nd=class{constructor(e,t,n){let s=n||Mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mn=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(FM,"")}static parseTrackName(e){let t=XM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mn.Composite=Nd;Mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mn.prototype.GetterByBindingType=[Mn.prototype._getValue_direct,Mn.prototype._getValue_array,Mn.prototype._getValue_arrayElement,Mn.prototype._getValue_toArray];Mn.prototype.SetterByBindingTypeAndVersioning=[[Mn.prototype._setValue_direct,Mn.prototype._setValue_direct_setNeedsUpdate,Mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_array,Mn.prototype._setValue_array_setNeedsUpdate,Mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_arrayElement,Mn.prototype._setValue_arrayElement_setNeedsUpdate,Mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mn.prototype._setValue_fromArray,Mn.prototype._setValue_fromArray_setNeedsUpdate,Mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $E=new Float32Array(1);var gp=new ft,Nc=class{constructor(e,t,n=0,s=1/0){this.ray=new Tr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gp),this}intersectObject(e,t=!0,n=[]){return Hd(e,this,n,t),n.sort(xp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Hd(e[s],this,n,t);return n.sort(xp),n}};function xp(i,e){return i.distance-e.distance}function Hd(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Hd(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zd);var Vc=class extends Co{constructor(){super();let e=new At;e.deleteAttribute("uv");let t=new et({side:pn}),n=new et,s=new Lo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Ie(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new Ie(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new Ie(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Ie(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let u=new Ie(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);let h=new Ie(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);let d=new Ie(e,Fo(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let f=new Ie(e,Fo(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);let g=new Ie(e,Fo(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new Ie(e,Fo(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new Ie(e,Fo(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Ie(e,Fo(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Fo(i){let e=new yt;return e.color.setScalar(i),e}var YM={quality:"auto",sensitivity:1,volume:.9,hints:!0},Xn={...YM};try{Object.assign(Xn,JSON.parse(localStorage.getItem("tlwh-hd")||"{}"))}catch{}var Oa=()=>{try{localStorage.setItem("tlwh-hd",JSON.stringify(Xn))}catch{}};var Gi=i=>document.querySelector(i);function Wp(i,e){let t={},n={thought:30,subtitle:38},s={};function r(c,u,h){clearInterval(s[u]);let d=u==="subtitle"&&/^([A-Z][A-Za-z ]{1,18}): (.*)$/.exec(h);if(c.innerHTML="",u==="subtitle"){let p=document.createElement("span");p.className="who",p.textContent=d?d[1]:"Around you",c.appendChild(p)}d&&(h=d[2]);let f=document.createElement("span");f.className="say",c.appendChild(f);let g=[...h],v=0,m=()=>{if(v>=g.length){clearInterval(s[u]);return}let p=document.createElement("i");p.textContent=g[v++],f.appendChild(p)};return m(),s[u]=setInterval(m,1e3/n[u]),c.dataset.full=(d?d[1]+": ":"")+h,g.length/n[u]}let o={"Look around with the mouse \xB7 click the glowing fabric on your left":"Point at the glowing fabric on your left \xB7 pull the trigger","Hold the mouse button on the machine to push the fabric through":"Point at the machine \xB7 hold the trigger to push the fabric through","W A S D to walk \xB7 hold Shift to run \xB7 find your bag (look for the glow)":"Left stick to walk (all the way to run) \xB7 right stick to turn \xB7 find your bag (look for the glow)","Hold Q to look inside your bag \xB7 then go home":"Squeeze a grip to look inside your bag \xB7 then go home","Click the fabric on your left":"Point at the fabric on your left \xB7 pull the trigger","Hold the mouse button on the machine":"Point at the machine \xB7 hold the trigger","Click the supervisor at his desk":"Point at the supervisor \xB7 pull the trigger","Click the door to go outside":"Point at the door \xB7 pull the trigger","Hold E to hold out your hands":"Hold the trigger to hold out your hands","Hold the bag to your chest to hide the light \u2014 and stay still":"Squeeze a grip to hug the bag and hide the light \u2014 and stay still"},a=c=>o[c]||String(c).replace(/Hold the mouse button/g,"Hold the trigger").replace(/\bClick\b/g,"Pull the trigger").replace(/\bclick\b/g,"pull the trigger").replace(/\b(Hold|Press) [QR]\b/g,"Squeeze a grip").replace(/\b(Hold|Press) E\b/g,"Hold the trigger").replace(/\b[Hh]old C\b/g,"squeeze both grips").replace(/W A S D/g,"Left stick").replace(/[Hh]old Shift/g,"push the stick all the way").replace(/ with the mouse/g,""),l={state:{progress:0,stamina:null},show(c,u){Gi("#"+c).classList.toggle("show",u)},text(c,u,h){let d=Gi("#"+c);if(clearTimeout(t[c]),!u){clearInterval(s[c]),d.classList.remove("on");return}let f=0;n[c]?f=r(d,c,u):d.textContent=u,d.classList.add("on"),h&&(t[c]=setTimeout(()=>d.classList.remove("on"),(h+f*.85)*1e3))},pulse(){let c=Gi("#crosshair");c&&(c.classList.remove("tap"),c.offsetWidth,c.classList.add("tap"))},hint(c,u){(i.hints||!c)&&l.text("hint",c&&e()?a(c):c,u)},thought(c,u){l.text("thought",c,u)},subtitle(c,u){l.text("subtitle",c,u)},fade(c,u=!1){let h=Gi("#fade");h.classList.toggle("white",u),h.classList.toggle("on",c)},progress(c){l.state.progress=c;let u=Gi("#ring");u.style.setProperty("--progress",c),u.classList.toggle("on",c>.001&&c<1)},label(c){let u=Gi("#label");u.textContent=c||"",u.classList.toggle("on",!!c),Gi("#crosshair").classList.toggle("hot",!!c)},stamina(c){l.state.stamina=c;let u=Gi("#stamina");u.classList.toggle("on",c!==null&&c<.98),c!==null&&u.style.setProperty("--progress",c)},finale(c){["stat-0a","stat-0b"].forEach(h=>{Gi("#"+h).hidden=!c});let u=[...c?["stat-0a","stat-0b"]:[],"stat-1","stat-2","stat-3","stat-src","stat-fin"];u.forEach(h=>Gi("#"+h).classList.remove("on")),u.forEach((h,d)=>setTimeout(()=>Gi("#"+h).classList.add("on"),900+d*2600))},error(c){Gi("#error").textContent=c}};return l}var Gc=22050;var jn=(i,e)=>i+Math.random()*(e-i);function yn(i,e,t,n=0){let s=Math.floor(e*Gc),r=Math.floor(n*Gc),o=new Float32Array(s+r);t(o,Gc);let a=i.createBuffer(1,s,Gc),l=a.getChannelData(0);for(let u=0;u<s;u++)l[u]=r&&u<r?o[u]*(u/r)+o[s+u]*(1-u/r):o[u];let c=0;for(let u=0;u<s;u++)c=Math.max(c,Math.abs(l[u]));if(c>0)for(let u=0;u<s;u++)l[u]*=.85/c;return a}function $p(i,e){let t=0;for(let n=0;n<i.length;n++)t+=e*(i[n]-t),i[n]=t}function ZM(i,e){let n=0,s=1,r=-1;for(let o=0;o<i.length;o++){let a=o/e,l=a*14%1,c=Math.floor(a*14);c!==r&&(r=c,s=jn(.75,1)),n+=.45*(Math.random()*2-1-n),i[o]=s*(n*Math.exp(-l*34)*.7+Math.sin(2*Math.PI*95*a)*Math.exp(-l*16)*.55)+.06*Math.sin(2*Math.PI*220*a)+.04*Math.sin(2*Math.PI*330*a)}}function JM(i,e){let t=[12.5,13.6,15.1,11.2],n=t.map(()=>jn(.5,1));for(let s=0;s<i.length;s++){let r=s/e,o=0;for(let a=0;a<t.length;a++){let l=(r*t[a]+a*.31)%1;o+=n[a]*Math.sin(2*Math.PI*(80+a*13)*r)*Math.exp(-l*12)}i[s]=o+(Math.random()*2-1)*.05}$p(i,.35)}function KM(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/e;t+=.02*(Math.random()*2-1-t),i[n]=.18*Math.sin(2*Math.PI*50*s)+.1*Math.sin(2*Math.PI*100*s)+.04*Math.sin(2*Math.PI*150*s)+t*.6}}function Xp(i){let e=0,t=0;for(let n=0;n<i.length;n++)e=(e+.02*(Math.random()*2-1))/1.02,t+=.05*(e-t),i[n]=t*2.2}function Fa(i,e,{count:t,f0min:n,f0max:s,sylMin:r,sylMax:o,gapMax:a,laugh:l=!1,muffle:c=.25}){for(let u=0;u<t;u++){let h=Math.floor(jn(0,e*.8)),d=0,f=jn(n,s),g=jn(.5,1);for(;h<i.length;){let v=l&&Math.random()<.18,m=Math.floor(v?jn(4,7):jn(3,9)),p=f*jn(.95,1.1);for(let M=0;M<m&&h<i.length;M++){let x=Math.floor((v?jn(.09,.13):jn(r,o))*e),_=v?750:jn(300,800),S=v?1300:jn(900,2200),P=v?p*.93:p*jn(.9,1.08);for(let T=0;T<x&&h+T<i.length;T++){let U=T/x,Y=p+(P-p)*U;d+=2*Math.PI*Y/e;let y=0;for(let A=1;A<=7;A++){let Z=A*Y,K=Math.exp(-(((Z-_)/260)**2))+.55*Math.exp(-(((Z-S)/420)**2))+.03;y+=K*Math.sin(A*d)}i[h+T]+=g*y*Math.sin(Math.PI*U)**.7*.3}h+=x+Math.floor(jn(.01,.06)*e),p=P}h+=Math.floor(jn(.3,a)*e)}}$p(i,c)}function jp(i,e,t){let n=[1,2,2.76,5.4],s=[1,.45,.35,.15],r=0;for(let o=0;o<4;o++)r+=s[o]*Math.sin(2*Math.PI*e*n[o]*i)*Math.exp(-i*t*(1+o*.6));return r}function $M(i,e){for(let t=0;t<12;t++){let n=Math.floor((t*.24+jn(0,.03))*e),s=t%2?1180:1240;for(let r=n;r<i.length;r++)i[r]+=jp((r-n)/e,s,5)*.4}}function jM(i,e){for(let t=0;t<i.length;t++){let n=t/e,s=Math.sin(2*Math.PI*24*n)>0?1:.15,r=Math.min(1,n*20)*(n<1.7?1:Math.exp(-(n-1.7)*6));i[t]=s*r*(Math.sin(2*Math.PI*690*n)+.5*Math.sin(2*Math.PI*1890*n)+.3*Math.sin(2*Math.PI*2750*n))}}function qp(i,e){let t=[2093,3140,4410,5870].map(n=>n*jn(.97,1.03));for(let n=0;n<i.length;n++){let s=n/e,r=0;t.forEach((o,a)=>{r+=Math.sin(2*Math.PI*o*s)*Math.exp(-s*(7+a*4))/(a+1)}),i[n]=r+(Math.random()*2-1)*Math.exp(-s*200)*.6}}function QM(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/i.length;t+=.3*(Math.random()*2-1-t),i[n]=t*Math.sin(Math.PI*s)**2}}function Yp(i,e){let t=0;for(;t<1.3;){let s=55+70*t+jn(-8,8),r=Math.floor(t*e);for(let o=0;o<e*.04&&r+o<i.length;o++){let a=o/e;i[r+o]+=(Math.sin(2*Math.PI*420*a)*.6+Math.sin(2*Math.PI*960*a)*.3)*Math.exp(-a*90)}t+=1/s}let n=Math.floor(1.32*e);for(let s=0;n+s<i.length;s++){let r=s/e;i[n+s]+=Math.sin(2*Math.PI*70*r)*Math.exp(-r*14)*1.2}}function eE(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/e;t+=.12*(Math.random()*2-1-t),i[n]=(t*.9+Math.sin(2*Math.PI*85*s)*.35)*Math.min(1,s/.006)*Math.exp(-s*32)}}function Zp(i,e){let t=0,n=0;for(let o=0;o<i.length;o++)t=(t+.02*(Math.random()*2-1))/1.02,n+=.05*(t-n),i[o]=n*1.2;let s=new Float32Array(i.length);Fa(s,e,{count:4,f0min:120,f0max:260,sylMin:.1,sylMax:.22,gapMax:1.6,muffle:.3});for(let o=0;o<i.length;o++)i[o]+=s[o]*.35;[[1.2,410,520],[5.1,360,450]].forEach(([o,a,l])=>{let c=Math.floor(o*e);for(let u=0;u<e*.45&&c+u<i.length;u++){let h=u/e,d=f=>Math.sign(Math.sin(2*Math.PI*f*h));i[c+u]+=(d(a)+d(l))*.08*Math.min(1,h*30)*Math.min(1,(.45-h)*30)}});let r=Math.floor(3.3*e);for(let o=0;o<2;o++)for(let a=0;a<e*.6;a++){let l=r+o*Math.floor(e*.18)+a;l<i.length&&(i[l]+=jp(a/e,2400,9)*.2)}}function tE(i,e){[[0,.55],[.75,1.5]].forEach(([t,n])=>{for(let s=Math.floor(t*e);s<Math.min(i.length,n*e);s++){let r=s/e,o=(r-t)/(n-t),a=Math.min(1,o*25)*Math.min(1,(1-o)*12),l=.55+.45*Math.sign(Math.sin(2*Math.PI*28*r));i[s]+=a*l*(Math.sin(2*Math.PI*2950*r)+.3*Math.sin(2*Math.PI*5900*r)+(Math.random()-.5)*.25)}})}function nE(i,e){let t=(n,s)=>{for(let r=0;r<e*.18;r++){let o=r/e,a=Math.floor(n*e)+r;a<i.length&&(i[a]+=s*Math.sin(2*Math.PI*52*o)*Math.exp(-o*26))}};t(0,1),t(.28,.7)}function iE(i,e){for(let t=0;t<i.length;t++){let n=t/e;i[t]=(Math.sin(2*Math.PI*520*n)*.7+Math.sin(2*Math.PI*1180*n)*.25)*Math.exp(-n*55)+(Math.random()*2-1)*Math.exp(-n*400)*.25}}function sE(i,e){let t=0;for(let n=0;n<i.length;n++){let s=n/e,r=s/(i.length/e);t+=.08*(Math.random()*2-1-t);let o=Math.min(1,s/.25)*Math.pow(1-r,1.6)*(1+.25*Math.sin(2*Math.PI*7*s)*(1-r));i[n]=t*o*1.6}}function Jp(i){let e=0;for(let t=0;t<i.length;t++)e=(e+.01*(Math.random()*2-1))/1.01,i[t]=e}function rE(i,e){let t=0;for(let n=0;n<i.length;n++)t=(t+.02*(Math.random()*2-1))/1.02,i[n]=t*.6+(Math.random()<6e-4?(Math.random()-.5)*2:0)}var oE=.07,Kp=["sewing","factory","hum","room","chatter","children","street","schoolBell","shiftBell","coin","fabric","door","step","tap","heartbeat"],rf={market:i=>yn(i,8,Zp,.5),coins:i=>yn(i,.7,qp),drone:i=>yn(i,8,Jp,.5),whispers:i=>yn(i,8,(e,t)=>Fa(e,t,{count:4,f0min:90,f0max:160,sylMin:.15,sylMax:.3,gapMax:1.2,muffle:.12}),.5),yells:i=>yn(i,6,(e,t)=>Fa(e,t,{count:4,f0min:140,f0max:240,sylMin:.2,sylMax:.4,gapMax:.8,muffle:.4})),thunder:i=>yn(i,3,(e,t)=>{Jp(e);for(let n=0;n<e.length;n++)e[n]*=Math.exp(-n/t*1.2)}),fire:i=>yn(i,6,rE,.4),doorWood:i=>yn(i,1.8,Yp),wind:i=>yn(i,6,Xp,.5),whistle:i=>yn(i,1.6,tE),heartbeat:i=>yn(i,.8,nE),tap:i=>yn(i,.12,iE),exhale:i=>yn(i,2.2,sE),sewing:i=>yn(i,2,ZM),factory:i=>yn(i,6,JM,.5),hum:i=>yn(i,4,KM,.3),room:i=>yn(i,6,Xp,.5),chatter:i=>yn(i,12,(e,t)=>Fa(e,t,{count:5,f0min:105,f0max:230,sylMin:.11,sylMax:.25,gapMax:2.4}),.6),children:i=>yn(i,12,(e,t)=>Fa(e,t,{count:6,f0min:250,f0max:420,sylMin:.08,sylMax:.18,gapMax:1.4,laugh:!0,muffle:.4}),.6),street:i=>yn(i,8,Zp,.5),schoolBell:i=>yn(i,3.6,$M),shiftBell:i=>yn(i,2.2,jM),coin:i=>yn(i,.7,qp),fabric:i=>yn(i,.4,QM),door:i=>yn(i,1.8,Yp),step:i=>yn(i,.18,eE)},Wc=class{constructor(e){this.listener=e,this.ctx=e.context,this.buffers={},this.ready=!1}async init(){if(!this.ready){try{await this.ctx.resume()}catch{}if(!this.manifest){this.manifest={};try{let e=await fetch("audio/manifest.json",{cache:"no-cache"});e.ok&&(this.manifest=await e.json())}catch{}}await this.load(Kp),this.ready=!0,this.rest=this.load([...new Set([...Object.keys(rf),...Object.keys(this.manifest)])].filter(e=>!Kp.includes(e)))}}async load(e){for(let t of e){if(this.buffers[t])continue;let n=this.manifest&&this.manifest[t];if(n)try{let s=await fetch("audio/"+n);this.buffers[t]=await this.ctx.decodeAudioData(await s.arrayBuffer());continue}catch{console.warn("[audio] could not load",n,"\u2014 using placeholder")}rf[t]&&(this.buffers[t]=rf[t](this.ctx)),await new Promise(s=>setTimeout(s,0))}}setMaster(e){this.listener.setMasterVolume(e)}loop(e,{object:t=null,volume:n=1,rate:s=1,ref:r=1.5,offset:o=Math.random()}={}){if(!this.buffers[e])return null;let a=t?new Ha(this.listener):new Ho(this.listener);return a.setBuffer(this.buffers[e]),a.setLoop(!0),a.setVolume(n),a.setPlaybackRate(s),t&&(a.setRefDistance(r),a.setRolloffFactor(1.4),t.add(a)),a.offset=o*this.buffers[e].duration,a.play(),a}oneShot(e,{object:t=null,volume:n=1,rate:s=1,ref:r=1.5}={}){if(!this.buffers[e])return;e==="step"&&(n*=oE);let o=t?new Ha(this.listener):new Ho(this.listener);return o.setBuffer(this.buffers[e]),o.setVolume(n),o.setPlaybackRate(s),t&&(o.setRefDistance(r),t.add(o)),o.onEnded=()=>{o.isPlaying=!1,o.parent&&o.parent.remove(o)},o.play(),o}fade(e,t,n=1){if(!e)return;let s=e.gain.gain,r=this.ctx.currentTime;s.cancelScheduledValues(r),s.setValueAtTime(s.value,r),s.linearRampToValueAtTime(t,r+n)}stopAll(e){e.forEach(t=>{if(t)try{t.isPlaying&&t.stop(),t.parent&&t.parent.remove(t)}catch{}})}};var Xc=class{constructor(e,t){this.camera=e,this.targets=[],this.hover=null,this.pressed=null,this.ray=new Nc,this.ray.far=3,this.center=new Se(0,0),this.enabled=!0,t.addEventListener("mousedown",n=>{n.button===0&&this.enabled&&this.anyPress&&this.anyPress(),n.button===0&&this.enabled&&this.hover&&(this.pressed=this.hover,this.onUse&&this.onUse(this.hover),this.hover.onPress&&this.hover.onPress())}),addEventListener("mouseup",n=>{n.button===0&&this.pressed&&(this.pressed.onRelease&&this.pressed.onRelease(),this.pressed=null)})}add(e){return e.maxDist=e.maxDist||2.6,this.targets.push(e),e}release(){this.pressed&&(this.pressed.onRelease&&this.pressed.onRelease(),this.pressed=null)}_hitFrom(e){let t=this.targets.filter(o=>o.enabled());if(!t.length)return null;e.updateWorldMatrix(!0,!1),this.ray.camera=this.camera;let n=new ft().extractRotation(e.matrixWorld);this.ray.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.ray.direction.set(0,0,-1).applyMatrix4(n);let s=null,r=1/0;for(let o of t){let a=this.ray.intersectObject(o.object,!0);a.length&&a[0].distance<o.maxDist+.6&&a[0].distance<r&&(s=o,r=a[0].distance)}return s?{target:s,distance:r}:null}peekXR(e){return this.enabled?this._hitFrom(e):null}pressXR(e){this.enabled&&this.anyPress&&this.anyPress();let t=this.enabled&&this._hitFrom(e);t&&(this.pressed=t.target,this.onUse&&this.onUse(t.target),t.target.onPress&&t.target.onPress())}releaseXR(){this.release()}update(){let e=this.targets.filter(s=>s.enabled());if(this.hover=null,!this.enabled||!e.length||this.xrMode)return this.xrMode?this.pressed:null;this.ray.setFromCamera(this.center,this.camera);let t=null,n=1/0;for(let s of e){let r=this.ray.intersectObject(s.object,!0);r.length&&r[0].distance<s.maxDist&&r[0].distance<n&&(t=s,n=r[0].distance)}return!t&&this.pressed&&e.includes(this.pressed)&&(t=this.pressed),this.hover=t,t}};function Ba(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Gt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Qp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][d]);let g=Qp(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function Qp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new sn(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let v=u.getComponent(d,g);a.setComponent(d+h,g,v)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}var aE=(i,e,t)=>i+(e-i)*t,qc=(i,e,t,n)=>aE(i,e,1-Math.exp(-t*n)),of={};function af(i="room"){if(of[i])return of[i];let e=new et({vertexColors:!0,flatShading:!0,roughness:.84,metalness:0,side:Rt,shadowSide:Fi});return i==="sunlit"&&(e.fog=!1,e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * 0.32;`)},e.customProgramCacheKey=()=>"person-sunlit"),i==="hand"&&(e.roughness=.7),of[i]=e}var Ti=(i,e,t,n=1)=>new wi(1,n).scale(i,e,t),Wi=(i,e,t,n=7)=>new Nt(i,e,t,n,1).translate(0,-t/2,0),Bo=(i,e,t)=>new At(i,e,t);function lE(i,e=8){return new Ei(i.map(([t,n])=>new Se(Math.max(t,5e-4),n)),e)}function cE(i){let e=(i*9301+49297)%233280||7;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function hE(i){let e=new wi(1,2),t=e.attributes.position;for(let n=0;n<t.count;n++){let s=t.getX(n),r=t.getY(n),o=t.getZ(n),a=Math.max(0,-r);s*=1-.22*a*a,o>0?o*=1-.1*a+.06*(1-Math.abs(r)):o*=1.04-.25*a,r*=r<0?1.08:1,t.setXYZ(n,s*.084*i,r*.105*i,o*.097*i)}return e}var Yc=class{constructor(e=1){this.bones=[],this.parts=[],this.J={},this.rand=cE(e)}bone(e,t,n=0,s=0,r=0){let o=new Aa;return o.name=e,o.position.set(n,s,r),t&&t.add(o),this.bones.push(o),this.J[e]=o,o}add(e,t,n,s={}){let r=new ft().compose(new b(s.x||0,s.y||0,s.z||0),new En().setFromEuler(new Ft(s.rx||0,s.ry||0,s.rz||0)),new b(s.sx??1,s.sy??1,s.sz??1));this.parts.push({bone:e,geo:t,color:new ve(n),m:r,jitter:s.jitter??.05})}build(e){let t=this.bones[0];t.updateMatrixWorld(!0);let n=new Map(this.bones.map((a,l)=>[a,l])),s=this.parts.map(a=>{let l=a.geo.index?a.geo.toNonIndexed():a.geo.clone();a.geo.dispose();for(let v of Object.keys(l.attributes))v!=="position"&&v!=="normal"&&l.deleteAttribute(v);l.applyMatrix4(a.m),l.applyMatrix4(a.bone.matrixWorld);let c=l.attributes.position.count,u=new Float32Array(c*3),h=new Uint16Array(c*4),d=new Float32Array(c*4),f=n.get(a.bone),g=new ve;for(let v=0;v<c;v+=3){let m=1+(this.rand()-.5)*2*a.jitter;g.copy(a.color).multiplyScalar(m);for(let p=v;p<v+3&&p<c;p++)u[p*3]=g.r,u[p*3+1]=g.g,u[p*3+2]=g.b,h[p*4]=f,d[p*4]=1}return l.setAttribute("color",new sn(u,3)),l.setAttribute("skinIndex",new wo(h,4)),l.setAttribute("skinWeight",new sn(d,4)),l}),r=Ba(s);s.forEach(a=>a.dispose());let o=new gc(r,e);return o.add(t),o.updateMatrixWorld(!0),o.bind(new xc(this.bones)),o.castShadow=!0,o.receiveShadow=!0,o}},ko=(i,e)=>new ve(i).multiplyScalar(e).getHex(),Zc=[9067068,8014896,10119236,7225896,11039826];function _n({skin:i=Zc[0],top:e=8010282,bottom:t=3816010,hair:n=1577486,female:s=!1,child:r=!1,scale:o=1,belly:a=0,mustache:l=!1,scarf:c=null,cap:u=!1,outfit:h=null,build:d=1,sleeves:f=null,seed:g=1,material:v=null,glasses:m=!1}={}){h=h||(s?"salwar":r?"shirt":"kurta");let p=new Yc(g*31+(s?7:3)+(r?11:0)),M=r?.74:1,x=r?.93:1,_=(r?.82:1)*(s?.93:1)*d,S=i,P=ko(i,.78),T=1445900,U=n,Y=e,y=t,A=3811870;f=f||(h==="shirt"&&!r?"elbow":h==="uniform"?"short":s?"elbow":"full");let Z=.93*M,K=p.bone("root",null),j=p.bone("hips",K,0,Z,0),xe=p.bone("spine",j,0,.04*M,0),te=p.bone("neck",xe,0,.49*M,0),he=p.bone("head",te,0,.05*M+.008,0),oe=p.bone("skirt",j,0,.02*M,0);p.add(j,new Nt(.14*_,(s?.15:.135)*_,.17*M,8),y,{y:-.02*M,sz:.72});let _e=a,Pe=[[0,-.02],[.136+_e*.4,0],[.134+_e,.13],[.146+_e*.5,.27],s&&!r?[.158,.33]:[.158,.36],[.165,.42],[.12,.475],[.055,.5],[0,.505]].map(([C,ie])=>[C*_,ie*M]);p.add(xe,lE(Pe,8),Y,{sz:s?.72:.68,jitter:.06}),p.add(xe,new Ii(.052,.012,4,8).rotateX(Math.PI/2),ko(Y,.85),{y:.495*M,sz:.85});let Re=h==="kurta"?.36:h==="salwar"?.5:h==="uniform"&&s?.36:0;if(Re){let C=[[.135*_,0],[.155*_,-.12*M],[.18*_,-Re*.8*M],[.19*_,-Re*M],[.17*_,-Re*M-.004]],ie=new Ei(C.map(([$,J])=>new Se($,J)),9);ie.scale(1,1,.74),p.add(oe,ie,h==="uniform"?y:Y,{jitter:.07})}if(c){let C=new Ar([[-.15,.22,.1],[-.05,.36,.115],[.09,.47,.06],[.16,.46,-.04],[.15,.3,-.1],[.12,.02,-.11]].map(([$,J,ue])=>new b($*_,J*M,ue))),ie=new Pr(C,16,.042,4,!1);ie.scale(1,1,1),p.add(xe,ie,c,{jitter:.08})}p.add(te,new Nt(.05*x,.062*x,.09*M,7).translate(0,.015,0),S);let Be=(C,ie,$)=>({x:C*x,y:ie*x,z:$*x});p.add(he,hE(x),S,{...Be(0,.105,0),jitter:.025}),p.add(he,new bi(.017*x,.042*x,4).rotateX(Math.PI/2+.35).rotateZ(Math.PI/4),ko(S,1.03),{...Be(0,.088,.099)}),p.add(he,Bo(.11*x,.012*x,.018*x),S,{...Be(0,.127,.086),rx:-.3}),[-1,1].forEach(C=>{p.add(he,Ti(.0095*x,.0085*x,.005*x,0),1314057,{...Be(C*.031,.112,.089),jitter:0}),p.add(he,Bo(.032*x,.007*x,.01*x),U,{...Be(C*.034,.132,.094),rz:C*-.08}),p.add(he,Ti(.011*x,.024*x,.017*x,0),ko(S,.95),{...Be(C*.084,.1,-.006)})}),p.add(he,Bo(.034*x,.006*x,.01*x),P,{...Be(0,.05,.081)}),u?(p.add(he,new Nt(.084*x,.088*x,.06*x,9),14209212,{...Be(0,.19,-.008),sz:1.08}),p.add(he,Ti(.084*x,.07*x,.09*x,1),U,{...Be(0,.105,-.045)})):(p.add(he,Ti(.088*x,s?.072*x:.062*x,.1*x,1),U,{...Be(0,.162,-.012),jitter:.06}),p.add(he,Ti(.085*x,.09*x,.07*x,1),U,{...Be(0,.112,-.042),jitter:.06}),s?(p.add(he,Ti(.04*x,.036*x,.036*x,0),U,{...Be(0,.1,-.11)}),r?p.add(he,Wi(.018,.01,.16,5),U,{...Be(0,.09,-.1),rx:.2}):p.add(he,Wi(.022,.012,.3,5),U,{...Be(0,.09,-.1),rx:.18})):p.add(he,Bo(.11*x,.02*x,.04*x),U,{...Be(0,.19,.06),rx:.4})),l&&p.add(he,Bo(.054*x,.01*x,.014*x),U,{...Be(0,.064,.084),rx:.2}),m&&[-1,1].forEach(C=>p.add(he,new Ii(.016*x,.003,4,10),2761760,{...Be(C*.032,.111,.097)}));let at=.29*M,ce=.25*M,Ee=f==="none"?S:Y,ye=f==="full"?Y:S,Ce=f==="short"?S:Ee;["L","R"].forEach((C,ie)=>{let $=ie?1:-1,J=p.bone("sh"+C,xe,$*.16*_,.43*M,0),ue=p.bone("el"+C,J,0,-at,0),pe=p.bone("hand"+C,ue,0,-ce,0);p.add(J,Ti(.05*_,.052,.05*_),Y,{x:-$*.012,y:-.008}),p.add(J,Wi(.05*_,.041*_,at),f==="short"?Y:Ce,{sy:f==="short"?.45:1}),f==="short"&&p.add(J,Wi(.036*_,.034*_,at*.55),S,{y:-at*.45}),p.add(ue,Ti(.04*_,.04,.04*_,0),f==="full"?Y:S),p.add(ue,Wi(.039*_,.031*_,ce),ye),f==="elbow"&&p.add(ue,Wi(.046*_,.044*_,.04),Y,{y:.02}),f==="full"&&p.add(ue,Wi(.036*_,.035*_,.03),ko(Y,.9),{y:-ce+.03});let G=r?.82:1;p.add(pe,Ti(.017*G,.045*G,.03*G,1),S,{y:-.045*G}),p.add(pe,Ti(.014*G,.036*G,.028*G,1),S,{x:-$*.004,y:-.1*G,rz:-$*.2}),p.add(pe,Ti(.011*G,.028*G,.011*G,0),S,{x:-$*.006,y:-.052*G,z:.028*G,rx:.4}),s&&!r&&p.add(ue,new Ii(.031,.005,4,9).rotateX(Math.PI/2),13148224,{y:-ce+.02})});let De=.45*M,we=.43*M,ke=r&&(h==="shirt"||h==="uniform")&&!s;["L","R"].forEach((C,ie)=>{let $=ie?1:-1,J=p.bone("hip"+C,j,$*.078*_,-.05*M,0),ue=p.bone("knee"+C,J,0,-De,0),pe=p.bone("foot"+C,ue,0,-we,0),G=h==="salwar"?1.18:h==="kurta"?1.06:1;p.add(J,Wi(.078*_*G,.058*_*G,De),y),p.add(ue,Ti(.057*_*G,.052,.057*_*G,0),ke?S:y),ke?(p.add(J,Wi(.075*_,.068*_,De*.6),y),p.add(ue,Wi(.046*_,.034*_,we),S)):(p.add(ue,Wi(.054*_*G,(h==="salwar"?.038:.045)*_,we-.02),y),h==="salwar"&&p.add(ue,Wi(.036*_,.04*_,.04),ko(y,.85),{y:-we+.05})),p.add(pe,Ti(.034*M+.01,.026,.09*M+.02,0),S,{y:-.02,z:.04}),p.add(pe,Bo(.075*M+.02,.016,.22*M+.05),A,{y:-.045,z:.045})});let Ye=p.build(v||af());Ye.boundingSphere=new ki(new b(0,.9*M,0),1.25*M+.2);let k=new nt;return k.add(Ye),k.scale.setScalar(o),k.userData={J:p.J,mesh:Ye,t0:g*1.37%10+Math.random()*3,work:1,mode:"stand",hipY:Z,k:M,look:0,lookPitch:0},k}function Vo(i,e){let{J:t}=i.userData;i.userData.mode="sit",t.hips.position.y=e/i.scale.y,t.hipL.rotation.set(-1.45,0,.08),t.hipR.rotation.set(-1.45,0,-.08),t.kneeL.rotation.x=1.5,t.kneeR.rotation.x=1.5,t.footL.rotation.x=0,t.footR.rotation.x=0,t.skirt.rotation.x=-1.1,t.skirt.scale.set(1,.85,1)}var ka=new b;function Jc(i,e,t=.08){let n=i.userData.J,s=null,r=1/0;i.updateMatrixWorld(!0);for(let o=-1.75;o<=-.85;o+=.05)for(let a=.1;a<=1.75;a+=.05){if(n.hipL.rotation.x=o,n.kneeL.rotation.x=a,n.hipL.updateMatrixWorld(!0),n.footL.getWorldPosition(ka),ka.y<t)continue;let l=Math.hypot(ka.x-e.x,(ka.y-e.y)*1.5,ka.z-e.z);l<r&&(r=l,s=[o,a])}return s||(s=[-1.45,.9]),i.userData.hipBase=s[0],i.userData.kneeBase=s[1],n.hipL.rotation.x=n.hipR.rotation.x=s[0],n.kneeL.rotation.x=n.kneeR.rotation.x=s[1],i.updateMatrixWorld(!0),r}function Go(i){let{J:e,hipY:t}=i.userData;i.userData.mode="stand",e.hips.position.y=t,["hipL","hipR","kneeL","kneeR","footL","footR","skirt"].forEach(n=>e[n].rotation.set(0,0,0)),e.skirt.scale.set(1,1,1)}function lf(i,e,t,n=1){let s=i.userData,r=s.J,o=e+s.t0,a=s.work,l=Math.sin(o*9)*.12*a*n;r.spine.rotation.x=.3*a+.03*Math.sin(o*.7),r.neck.rotation.x=.32*a+.05*Math.sin(o*.4);let c=Math.max(0,Math.sin(o*.23+s.t0))**12;r.head.rotation.y=qc(r.head.rotation.y,c*.9*Math.sign(Math.sin(s.t0*3))+s.look,3,t),r.head.rotation.x=qc(r.head.rotation.x,-c*.4+s.lookPitch,3,t);let u=Math.sin(o*1.6)*.08*a;r.shL.rotation.set(-.95*a-.2-u,0,.16),r.shR.rotation.set(-.95*a-.2+u,0,-.16),r.elL.rotation.set(-.9*a-.3,0,0),r.elR.rotation.set(-.9*a-.3,0,0),r.handL.rotation.x=.5*a,r.handR.rotation.x=.5*a;let h=s.kneeBase??1.5;r.kneeL.rotation.x=h+l,r.kneeR.rotation.x=h-l,r.footL.rotation.x=l*1.5,r.footR.rotation.x=-l*1.5;let d=Math.sin(o*1.5);r.spine.scale.set(1+.012*d,1,1+.01*d),r.shL.position.y=r.shR.position.y=.43*s.k+.004*d}function Ps(i,e,t=1){let n=i.userData.J,s=Math.sin(e),r=Math.cos(e);n.hipL.rotation.x=s*.5*t,n.hipR.rotation.x=-s*.5*t,n.kneeL.rotation.x=Math.max(0,-r)*.75*t,n.kneeR.rotation.x=Math.max(0,r)*.75*t,n.footL.rotation.x=-Math.max(0,s)*.2*t,n.footR.rotation.x=-Math.max(0,-s)*.2*t,n.shL.rotation.x=-s*.38*t,n.shR.rotation.x=s*.38*t,n.shL.rotation.z=-.06,n.shR.rotation.z=.06,n.elL.rotation.x=-.25-Math.max(0,s)*.2,n.elR.rotation.x=-.25-Math.max(0,-s)*.2,n.hips.position.y=i.userData.hipY+Math.abs(r)*.022*t,n.hips.rotation.y=s*.06*t,n.spine.rotation.y=-s*.1*t,n.skirt.rotation.x=Math.abs(s)*.1*t}function Di(i,e,t){let n=i.userData,s=n.J,r=e+n.t0;s.spine.rotation.x=.04+.012*Math.sin(r*1.3);let o=Math.sin(r*1.5);s.spine.scale.set(1+.014*o,1,1+.01*o),s.hips.rotation.z=.02*Math.sin(r*.21),s.head.rotation.y=qc(s.head.rotation.y,n.look,4,t),s.head.rotation.x=qc(s.head.rotation.x,n.lookPitch,4,t)}var uE=[[-.0225,-.062,.031,.027,.0094],[-.0072,-.066,.034,.029,.0098],[.0085,-.064,.032,.027,.0094],[.0235,-.058,.025,.022,.0084]],Wo=1.3;function tm(i,{skin:e=9067068,sleeve:t=8226708}={}){let n=new Yc(i>0?5:9),s=i,r=n.bone("wrist",null);n.add(r,new Nt(.0235,.0225,.04,7).rotateX(Math.PI/2).rotateZ(Math.PI/7),e,{z:.012,sx:1.18,jitter:.02});let o=new At(.066,.025,.066);{let h=o.attributes.position;for(let d=0;d<h.count;d++)h.getZ(d)>0?(h.setY(d,h.getY(d)*1.2),h.setX(d,h.getX(d)*.94)):h.setX(d,h.getX(d)*.98)}n.add(r,o,e,{z:-.03,jitter:.03}),n.add(r,Ti(.024,.013,.024,0),e,{x:s*-.016,y:-.007,z:-.014});let a=(h,d,f,g)=>new Nt(d,h,f+g,5).rotateX(Math.PI/2).rotateZ(Math.PI/5).translate(0,0,-(f-g)/2);uE.forEach(([h,d,f,g,v],m)=>{let p=n.bone("f"+m+"a",r,s*h,.001,d),M=n.bone("f"+m+"b",p,0,0,-f);n.add(p,a(v*1.05,v*.98,f,v*.9),e,{sy:.88}),n.add(M,a(v*.98,v*.8,g,v*.7),e,{sy:.88}),n.add(M,new bi(v*.8,v*.9,5).rotateX(-Math.PI/2).rotateZ(Math.PI/5),e,{z:-g-v*.42,sy:.88})});let l=n.bone("t0",r,s*-.029,-.011,-.02);l.rotation.set(-.35,s*.62,s*.5);let c=n.bone("t1",l,0,0,-.026);n.add(l,a(.0112,.0102,.026,.012),e,{sy:.9}),n.add(c,a(.0102,.0088,.02,.008),e,{sy:.9}),n.add(c,new bi(.0088,.009,5).rotateX(-Math.PI/2).rotateZ(Math.PI/5),e,{z:-.024,sy:.9});let u=n.build(af("hand"));return u.scale.setScalar(Wo),u.boundingSphere=new ki(new b(0,0,0),.3),u.userData={J:n.J,side:i,thumbBase:l.rotation.clone()},u.renderOrder=2,u}var Va={relax:[.28,.32,.36,.42,.2],flat:[.05,.05,.06,.08,.05],grip:[.9,.92,.94,.95,.65],pinch:[.55,.45,.6,.7,.55],cup:[.32,.3,.3,.32,.15],point:[.02,.9,.94,.95,.6],fist:[1,1,1,1,.9],pray:[.12,.1,.1,.13,.08]};function nm(i,e){let t=i.userData.J,n=i.userData.side,s=i.userData.thumbBase;for(let r=0;r<4;r++)t["f"+r+"a"].rotation.set(-e[r]*1.35,0,0),t["f"+r+"b"].rotation.set(-e[r]*1.5,0,0);t.t0.rotation.set(s.x-e[4]*.35,s.y-n*e[4]*.5,s.z-n*e[4]*.25),t.t1.rotation.set(-e[4]*.9,0,0)}function Xo(i,{hug:e=!1}={}){let{J:t,k:n}=i.userData;i.userData.mode="floor",t.hips.position.y=.12*n,t.hipL.rotation.set(-2.05,0,.22),t.hipR.rotation.set(-2.05,0,-.22),t.kneeL.rotation.set(2.25,0,0),t.kneeR.rotation.set(2.25,0,0),t.footL.rotation.x=-.2,t.footR.rotation.x=-.2,t.skirt.rotation.x=-1.25,t.skirt.scale.set(1,.8,1),t.spine.rotation.x=.18,e&&(t.shL.rotation.set(-1,0,.35),t.shR.rotation.set(-1,0,-.35),t.elL.rotation.x=-1.3,t.elR.rotation.x=-1.3)}function im(i){let{J:e}=i.userData;e.hipL.rotation.set(-.5,0,0),e.hipR.rotation.set(-.7,0,0),e.kneeL.rotation.x=.9,e.kneeR.rotation.x=1.1,e.shL.rotation.set(-.9,0,0),e.shR.rotation.set(-1.2,0,0),e.elL.rotation.x=-1.2,e.elR.rotation.x=-1.4,e.spine.rotation.x=.2,e.neck.rotation.x=.25}function Ga(i=0){let e=af().clone(),t=_n({top:11047774,bottom:9075278,skin:[8014896,7225896][i%2],mustache:!0,outfit:"shirt",sleeves:"short",belly:.02+i*.015,build:1.06,seed:70+i,material:e,scale:1.34}),n=t.userData.J,s=(f,g,v,m,p,M)=>{let x=new Ie(f,g);return x.position.set(m,p,M),x.castShadow=!0,v.add(x),x},r=new et({color:4865058,flatShading:!0,roughness:.8}),o=s(new Nt(.095,.1,.07,9),r,n.head,0,.19,-.005);o.scale.z=1.1;let a=s(new At(.17,.01,.08),r,n.head,0,.16,.1);s(new At(.3,.05,.22),new et({color:2760212,roughness:.6}),n.hips,0,.02,0);let l=s(new Nt(.012,.012,1,6),new et({color:6965802,flatShading:!0}),n.handR,0,-.05,.02);l.rotation.x=1.2;let c=new yt({color:new ve(3,.35,.12),fog:!1}),u=[-1,1].map(f=>{let g=s(new en(.014,6,5),c,n.head,f*.031,.112,.095);return g.scale.setScalar(.001),g}),h=new et({color:657414,flatShading:!0}),d=[-1,1].map(f=>{let g=s(new bi(.025,.2,5),h,n.head,f*.06,.2,-.02);return g.rotation.z=-f*.5,g.scale.setScalar(.001),g});return t.userData.police={mat:e,eyes:u,horns:d,cap:o,brim:a,base:t.scale.x,k:0},t.userData.stride=0,t.userData.walk=0,t}function Kc(i,e){let t=i.userData.police;if(!t)return;t.k=e,t.mat.color.setRGB(1,1,1).lerp(new ve(.1,.07,.08),e);let n=t.base;i.scale.set(n*(1-.1*e),n*(1+.5*e),n*(1-.1*e));let s=i.userData.J;s.shL.scale.set(1,1+.7*e,1),s.shR.scale.set(1,1+.7*e,1),t.eyes.forEach(r=>r.scale.setScalar(Math.max(.001,e))),t.horns.forEach(r=>r.scale.setScalar(Math.max(.001,e))),t.cap.visible=t.brim.visible=e<.5}var em=[{top:14735560,bottom:5917242,outfit:"kurta"},{female:!0,top:3107663,bottom:3107663,scarf:12868218},{top:5925502,bottom:2763312,outfit:"shirt",sleeves:"elbow"},{female:!0,top:11879470,bottom:8006174,scarf:14262826},{top:12103834,bottom:4866104,cap:!0},{female:!0,top:2046568,bottom:2046568,scarf:15327695},{top:9067066,bottom:3813926,outfit:"shirt",sleeves:"short",belly:.03},{female:!0,top:14262826,bottom:6957626,scarf:3107663},{top:6978970,bottom:15327695,outfit:"kurta",glasses:!0},{female:!0,top:12868218,bottom:5909066,scarf:15327695}];function cf(i){let e=em[i%em.length],t=_n({...e,skin:Zc[i*3%Zc.length],build:.92+i%4*.06,seed:100+i,scale:1.3+i%3*.03});return t.userData.stride=Math.random()*6,t.userData.walk=1,t}function Ur(i,e,t){let n=i.userData;n.walk>.02?Ps(i,n.stride*2.2,n.walk):Di(i,e,t)}var it=(i,e,t)=>i+(e-i)*t,Ht=(i,e,t)=>Math.max(e,Math.min(t,i)),wt=i=>i*i*(3-2*i),Xt=(i,e,t,n)=>it(i,e,1-Math.exp(-t*n)),hf=new Map;function Le(i,e={}){let t=i+JSON.stringify(e);return hf.has(t)||hf.set(t,new et({color:i,roughness:.8,metalness:0,...e})),hf.get(t)}var rn=class{constructor(){this.groups=new Map,this._m=new ft,this._q=new En,this._e=new Ft,this._s=new b,this._p=new b}add(e,t,n=0,s=0,r=0,o=0,a=0,l=0,c=1,u=1,h=1){return this._m.compose(this._p.set(n,s,r),this._q.setFromEuler(this._e.set(o,a,l)),this._s.set(c,u,h)),this.addM(e,t,this._m)}addM(e,t,n){let s=e.index?e.toNonIndexed():e.clone();for(let r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);return s.attributes.uv||s.setAttribute("uv",new sn(new Float32Array(s.attributes.position.count*2),2)),s.applyMatrix4(n),this.groups.has(t)||this.groups.set(t,[]),this.groups.get(t).push(s),s}addObject(e){e.updateMatrixWorld(!0),e.traverse(t=>{t.isMesh&&this.addM(t.geometry,t.material,t.matrixWorld)})}build(e,{cast:t=!0,receive:n=!0}={}){let s=[],r=new Map,o=new ve;for(let[a,l]of this.groups){if(!(a.isMeshStandardMaterial&&!a.map&&!a.transparent&&!a.vertexColors&&a.emissive.getHex()===0&&a.colorWrite!==!1)){s.push(this._mesh(Ba(l),a,e,t,n)),l.forEach(h=>h.dispose());continue}let u=[a.roughness.toFixed(2),a.metalness.toFixed(2),a.flatShading?1:0,a.side].join("|");r.has(u)||r.set(u,{mat:a,geos:[]}),o.copy(a.color),l.forEach(h=>{let d=h.attributes.position.count,f=new Float32Array(d*3);for(let g=0;g<d;g++)f[g*3]=o.r,f[g*3+1]=o.g,f[g*3+2]=o.b;h.setAttribute("color",new sn(f,3)),r.get(u).geos.push(h)})}for(let{mat:a,geos:l}of r.values()){let c=dE(a);s.push(this._mesh(Ba(l),c,e,t,n)),l.forEach(u=>u.dispose())}return this.groups.clear(),s}_mesh(e,t,n,s,r){let o=new Ie(e,t);return o.castShadow=s,o.receiveShadow=r,o.matrixAutoUpdate=!1,o.updateMatrix(),n.add(o),o}},uf=new Map;function dE(i){let e=[i.roughness.toFixed(2),i.metalness.toFixed(2),i.flatShading?1:0,i.side].join("|");return uf.has(e)||uf.set(e,new et({vertexColors:!0,roughness:i.roughness,metalness:i.metalness,flatShading:i.flatShading,side:i.side})),uf.get(e)}var ne={box:(i,e,t)=>new At(i,e,t),cyl:(i,e,t,n=10)=>new Nt(i,e,t,n)};function hn(i,e,t=0,n=0,s=0,r){let o=new Ie(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}function Tn(i,e,t,n=.02,s=.006){let r=new es,o=-i/2,a=-e/2;r.moveTo(o+n,a),r.lineTo(o+i-n,a),r.quadraticCurveTo(o+i,a,o+i,a+n),r.lineTo(o+i,a+e-n),r.quadraticCurveTo(o+i,a+e,o+i-n,a+e),r.lineTo(o+n,a+e),r.quadraticCurveTo(o,a+e,o,a+e-n),r.lineTo(o,a+n),r.quadraticCurveTo(o,a,o+n,a);let l=new Ua(r,{depth:t-s*2,bevelEnabled:!0,bevelSize:s,bevelThickness:s,bevelSegments:2,curveSegments:4});return l.rotateX(-Math.PI/2),l.translate(0,s,0),l}function qo(i,e,t,n=.006){let s=i.clone().lerp(e,.5);s.y-=t;let r=new Po(i,s,e);return new Pr(r,16,n,4,!1)}var hs=()=>Le(1447188,{roughness:.45,metalness:.55}),sm=()=>Le(1052688,{roughness:.28,metalness:.35}),$c=()=>Le(11569722,{roughness:.35,metalness:.9}),Is=()=>Le(12105908,{roughness:.25,metalness:.95});function fE(){let i=new es;return i.moveTo(.27,0),i.lineTo(.27,.27),i.quadraticCurveTo(.27,.36,.18,.36),i.lineTo(-.2,.35),i.quadraticCurveTo(-.27,.35,-.29,.3),i.lineTo(-.31,.16),i.lineTo(-.22,.16),i.lineTo(-.2,.27),i.quadraticCurveTo(-.15,.29,.1,.29),i.quadraticCurveTo(.17,.29,.17,.22),i.lineTo(.17,0),i.lineTo(.27,0),i}var jc=null;function Nr({wood:i,batch:e=null,at:t=null,threadColor:n=11879470,headX:s=0}={}){let r=new nt,o=new nt;r.add(o),jc||(jc=new Ua(fE(),{depth:.1,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:3,curveSegments:10}),jc.translate(0,0,-.05));let a=new rn,l=s,c=(v,m,p,...M)=>a.add(v,m,p+l,...M);a.add(Tn(1.15,.68,.05,.03),i,0,-.05,0),c(Tn(.66,.3,.05,.04,.01),sm(),-.02,0,0),c(ne.box(.12,.004,.09),Is(),-.27,.051,.02),c(jc,sm(),0,.05,-.02),c(ne.box(.38,.008,.002),$c(),-.02,.37,.045),c(ne.box(.006,.24,.002),$c(),.22,.18,.045),c(ne.box(.2,.006,.002),$c(),-.02,.33,.045),c(ne.cyl(.004,.004,.09,6),Is(),.05,.47,-.02),c(ne.cyl(.022,.022,.05,10),Le(n,{roughness:.9}),.05,.45,-.02),c(ne.cyl(.026,.026,.006,10),Le(13218954),.05,.42,-.02),c(ne.cyl(.026,.026,.006,10),Le(13218954),.05,.477,-.02),c(ne.cyl(.018,.018,.01,10),Is(),-.24,.33,.06,Math.PI/2),c(ne.cyl(.005,.005,.14,6),Is(),-.29,.15,0),c(ne.box(.03,.006,.05),Is(),-.29,.058,0);for(let v of[-.48,.48])a.add(ne.box(.05,.92,.05),hs(),v,-.52,-.22,0,0,0),a.add(ne.box(.05,.92,.05),hs(),v,-.52,.22,0,0,0),a.add(ne.box(.05,.05,.55),hs(),v,-.96,0,0,0,0),a.add(ne.box(.04,.04,.5),hs(),v,-.2,0,0,0,0),a.add(ne.box(.04,.62,.04),hs(),v,-.55,0,.62,0,0),a.add(ne.box(.04,.62,.04),hs(),v,-.55,0,-.62,0,0);if(a.add(ne.box(.96,.035,.035),hs(),0,-.86,.05),a.add(ne.box(.3,.1,.4),i,.25,-.13,0),a.add(ne.cyl(.01,.01,.02,6),$c(),.25,-.13,.205,Math.PI/2),c(ne.cyl(.004,.004,1.05,4),Le(3811870),.36,-.2,0,0,0,.04),e&&t){for(let[v,m]of a.groups)e.groups.has(v)||e.groups.set(v,[]),m.forEach(p=>{p.applyMatrix4(t),e.groups.get(v).push(p)});a.groups.clear()}else a.build(r);let u=(v,m,p=!0)=>{let M=new rn;v.forEach(_=>M.add(..._));let[x]=M.build(new nt,{cast:p,receive:!0});return x.matrixAutoUpdate=!0,x.position.set(0,0,0),x.rotation.set(0,0,0),x},h=u([[new Nt(.075,.075,.035,18),Is(),0,0,0,0,0,Math.PI/2],[new At(.012,.12,.04),Is(),.02,0,0]]);h.position.set(.32+l,.31,-.02),o.add(h);let d=u([[new Nt(.006,.006,.13,6),Is(),0,.04,0],[new Nt(.0015,.0015,.05,4),Is(),0,-.045,0]],null,!1);d.position.set(-.27+l,.16,.02),o.add(d);let f=u([[new Ii(.2,.014,6,24),hs(),0,0,0,0,Math.PI/2,0],...[0,1,2].map(v=>[new At(.012,.4,.02),hs(),0,0,0,v*Math.PI/3,0,0])]);f.position.set(.38,-.72,.05),o.add(f);let g=u([[new At(.62,.02,.26),hs(),0,0,0]]);return g.position.set(0,-.9,.12),o.add(g),r.userData={wheel:h,needle:d,tw:f,pedal:g,speed:1,ph:Math.random()*10,needleTip:new b(-.27+l,.06,.02)},r}function rm(i,e){let t=i.userData;t.ph+=e*26*t.speed,t.wheel.rotation.x=-t.ph,t.tw.rotation.x=-t.ph*.35,t.needle.position.y=.16+Math.sin(t.ph)*.022*Math.min(1,t.speed*4),t.pedal.rotation.x=Math.sin(t.ph*.35)*.12*Math.min(1,t.speed*3)}function eh(i){let e=new nt,t=_=>[[.001,0],[.1,.004],[.135,.04],[.15,.12],[.145,.2],_?[.14,.26]:[.07,.25],_?[.142,.275]:[.035,.27]].map(([S,P])=>new Se(S,P)),n=new Ei(t(!0),14),s=new Ei(t(!1),14),r=_=>{let S=_.attributes.position;for(let P=0;P<S.count;P++){let T=S.getX(P),U=S.getY(P),Y=S.getZ(P),y=Math.atan2(Y,T),A=1+.06*Math.sin(y*3+U*20)+.04*Math.sin(y*5);S.setX(P,T*A),S.setZ(P,Y*A*.72)}_.computeVertexNormals()};r(n),r(s),s.morphAttributes.position=[n.attributes.position],s.morphAttributes.normal=[n.attributes.normal];let o=new et({map:i,roughness:.95,side:Rt}),a=new Ie(s,o);a.castShadow=!0,a.receiveShadow=!0,e.add(a),a.morphTargetInfluences=[0];let l=new Ie(new sr(.12,14),Le(1709070,{side:Rt}));l.rotation.x=-Math.PI/2,l.position.y=.02,l.scale.set(1,.72,1),e.add(l);let c=new Ie(new Pr(new Ar([new b(-.13,.25,0),new b(-.15,.5,0),new b(0,.62,0),new b(.15,.5,0),new b(.13,.25,0)]),20,.014,4,!1),new et({map:i,roughness:1}));c.scale.set(1,1,.5),c.castShadow=!0,e.add(c);let u=new Ie(new wi(.018,0),Le(13214826,{flatShading:!0}));u.position.set(.04,.27,.07),e.add(u);let h=new nt;h.position.y=.03,e.add(h);let d=new Ie(new Nt(.006,.006,.07,6),Le(14262826));d.rotation.z=Math.PI/2,d.rotation.y=.5,d.position.set(-.03,.01,.02),h.add(d);let f=new Ie(new bi(.006,.014,6),Le(15257768));f.rotation.z=-Math.PI/2,f.position.set(.042,0,0),d.add(f);let g=[];for(let _=0;_<3;_++){let S=new Ie(new Nt(.018,.018,.004,14),Le(13148224,{metalness:.9,roughness:.3}));S.position.set(.03-_*.022,.004+_*.003,-.02+_%2*.02),S.rotation.set(.1*_,0,.15),S.visible=!1,h.add(S),g.push(S)}let v=new nt;v.visible=!1,h.add(v),[11879470,14262826,2046568,15327695].forEach((_,S)=>{let P=new Ie(new At(.07,.006,.05),Le(_,{flatShading:!0}));P.position.set(-.04+S*.025,.02+S*.006,-.03+S%2*.04),P.rotation.set(.3*S,S,.2),v.add(P)});let m=new et({color:14200944,roughness:.8,emissive:16751152,emissiveIntensity:0}),p=new nt;p.visible=!1,h.add(p);let M=new Ie(Tn(.11,.08,.05,.015,.006),m);M.position.set(0,0,0),M.rotation.y=.3,p.add(M);let x=new Ie(new Ii(.04,.003,4,10),Le(9067050));return x.rotation.x=Math.PI/2,x.position.y=.026,x.scale.set(1.3,1,1),p.add(x),e.userData={body:a,inner:l,contents:h,coins:g,pencil:d,strap:c,scraps:v,food:p,foodMat:m,open:0},e}function Wa(i,e){let t=i.userData;t.open=e,t.body.morphTargetInfluences[0]=e,t.inner.visible=e>.05,t.contents.visible=e>.05||t.food&&t.food.visible&&t.foodMat.emissiveIntensity>.05}var Qc=class{constructor(e){let t=(()=>{let o=document.createElement("canvas");o.width=o.height=64;let a=o.getContext("2d"),l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,255,1)"),l.addColorStop(.25,"rgba(255,236,200,.55)"),l.addColorStop(1,"rgba(255,220,170,0)"),a.fillStyle=l,a.fillRect(0,0,64,64);let c=new Qt(o);return c.colorSpace=Dt,c})(),n=o=>new Wn({map:t,transparent:!0,depthWrite:!1,blending:vn,fog:!1,opacity:0,...o});this.group=new nt,this.group.renderOrder=5,e.add(this.group),this.halo=new Nn(n({color:new ve(1,.78,.45)})),this.halo.scale.setScalar(.7),this.core=new Nn(n({color:new ve(1,.93,.8)})),this.core.scale.setScalar(.16),this.group.add(this.halo,this.core),this.N=14;let s=new Float32Array(this.N*3);this.seed=[];for(let o=0;o<this.N;o++)this.seed.push({a:Math.random()*6.28,r:.12+Math.random()*.22,ph:Math.random(),sp:.25+Math.random()*.3});let r=new Gt;r.setAttribute("position",new sn(s,3)),this.motesMat=new Cs({map:t,size:.05,transparent:!0,depthWrite:!1,blending:vn,color:new ve(1,.85,.6),opacity:0,fog:!1}),this.motes=new cs(r,this.motesMat),this.motes.frustumCulled=!1,this.group.add(this.motes),this.target=null,this.urgent=!1,this.visible=!0,this.alpha=0,this.u=0,this.at=new b,this.has=!1}set(e){this.target=e?typeof e=="function"?e:Array.isArray(e)?e.map(t=>t.clone()):e.clone():null}update(e,t,n,s){this.u=Xt(this.u,this.urgent?1:0,3,e);let r=null;if(this.target&&n){let d=typeof this.target=="function"?this.target(n):this.target;Array.isArray(d)?(r=d.find(f=>Math.hypot(f.x-n.x,f.z-n.z)>1.6)||d[d.length-1],r&&(r={x:r.x,y:Math.max(r.y,1),z:r.z})):r=d}r&&(!this.has||this.alpha<.02?this.at.set(r.x,r.y,r.z):(this.at.x=Xt(this.at.x,r.x,6,e),this.at.y=Xt(this.at.y,r.y,6,e),this.at.z=Xt(this.at.z,r.z,6,e)),this.has=!0);let o=n?Math.hypot(this.at.x-n.x,this.at.z-n.z):5,a=r&&this.visible?1:0;this.alpha=Xt(this.alpha,a,a?2.2:4,e);let l=.5+.5*Math.sin(t*(2.2+this.u*3.5)),c=Ht((o-.6)/2.5,.35,1),u=this.alpha*c;this.group.position.copy(this.at),this.group.visible=this.alpha>.01,this.halo.material.opacity=u*(.32+.22*l+.15*this.u),this.halo.scale.setScalar((.55+.2*l+.25*this.u)*(.8+.25*Ht(o/6,0,1.6))),this.core.material.opacity=u*(.55+.3*l),this.motesMat.opacity=u*.8;let h=this.motes.geometry.attributes.position;this.seed.forEach((d,f)=>{let g=(t*d.sp+d.ph)%1;h.setXYZ(f,Math.cos(d.a+t*.4)*d.r*(1-g*.5),-.15+g*.6,Math.sin(d.a+t*.4)*d.r*(1-g*.5))}),h.needsUpdate=!0}};var om=0,or=new b,df=new b,am=new Ft,th=class{constructor({camera:e,scene:t,canvas:n,audio:s,settings:r}){Object.assign(this,{camera:e,canvas:n,audio:s,settings:r}),this.dolly=new nt,this.dolly.add(e),t.add(this.dolly),this.yaw=0,this.pitch=0,this.eye=1.3,this.canMove=!1,this.walk=1.9,this.run=3.3,this.vel=new Se,this.bob=0,this.radius=.26,this.colliders=[],this.bounds=null,this.keys={},this.locked=!1,this.qHeld=!1,this.stepDist=0,this.moving=!1,this.breath=0,this.onPauseRequest=null,this.xr=!1,this.xrMove=new b,this.xrPoseOK=!1,this.xrPending=null,this.canRun=!0,this.jogAllowed=!1,this.speedScale=1,this.noclip=!1,addEventListener("keydown",o=>{this.keys[o.code]=!0,o.code==="KeyQ"&&(this.qHeld=!0)}),addEventListener("keyup",o=>{this.keys[o.code]=!1,o.code==="KeyQ"&&(this.qHeld=!1)}),addEventListener("blur",()=>{this.keys={},this.qHeld=!1}),document.addEventListener("pointerlockchange",()=>{let o=this.locked;this.locked=document.pointerLockElement===n,o&&!this.locked&&this.onPauseRequest&&!this.xr&&this.onPauseRequest()}),document.addEventListener("pointerlockerror",()=>{this.dragLook=!0}),document.addEventListener("mousemove",o=>{if(!this.locked&&!(this.dragLook&&o.buttons&1))return;let a=.0021*this.settings.sensitivity;this.yaw-=o.movementX*a,this.pitch=cn.clamp(this.pitch-o.movementY*a,-1.3,1.3)})}lock(){try{let e=this.canvas.requestPointerLock();e&&e.catch&&e.catch(()=>{this.dragLook=!0})}catch{this.dragLook=!0}}unlock(){document.pointerLockElement&&document.exitPointerLock()}place(e,t,n,s){if(this.vel.set(0,0),this.yaw=n,this.pitch=0,this.xr)if(!this.xrPoseOK)this.xrPending={x:e,z:t,yaw:n,eye:s},this.dolly.position.set(e,this.dolly.position.y,t),this.dolly.rotation.y=n;else{am.setFromQuaternion(this.camera.quaternion,"YXZ");let r=n-am.y,o=this.camera.position;this.dolly.rotation.y=r;let a=o.x*Math.cos(r)+o.z*Math.sin(r),l=-o.x*Math.sin(r)+o.z*Math.cos(r);this.dolly.position.set(e-a,this.dolly.position.y,t-l)}else this.dolly.position.set(e,0,t);s&&(this.eye=s),this.apply(0)}get running(){return!!((this.keys.ShiftLeft||this.keys.ShiftRight)&&this.canRun)||this.xr&&this.xrMove.length()>.9&&this.canRun}headWorld(e){return this.camera.getWorldPosition(e)}forward(e){return this.xr?(this.camera.getWorldDirection(e),e.y=0,e.normalize()):e.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}apply(e){if(this.breath+=e,this.xr)return;let t=Math.sin(this.bob*2)*.022*Math.min(1,this.vel.length()/2),n=Math.cos(this.bob)*.012*Math.min(1,this.vel.length()/2),s=Math.sin(this.breath*1.6)*.004;this.camera.position.set(n,this.eye+t+s,0),this.camera.rotation.set(this.pitch+Math.sin(this.breath*.7)*.003,this.yaw,Math.sin(this.bob)*.004,"YXZ")}update(e){this.xr&&(this.camera.getWorldDirection(or),or.x*or.x+or.z*or.z>1e-6&&(this.yaw=Math.atan2(-or.x,-or.z)),this.pitch=Math.asin(cn.clamp(or.y,-1,1)));let t=0,n=0;this.canMove&&((this.keys.KeyW||this.keys.ArrowUp)&&(n-=1),(this.keys.KeyS||this.keys.ArrowDown)&&(n+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(t-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(t+=1));let s=this.keys.ShiftLeft||this.keys.ShiftRight,r=Math.hypot(t,n)||1,o=(s?this.canRun?this.run:this.jogAllowed?2.5:this.walk:this.walk)*this.speedScale,a=Math.sin(this.yaw),l=Math.cos(this.yaw),c=(t*l+n*a)/r*o*(t||n?1:0),u=(-t*a+n*l)/r*o*(t||n?1:0);if(this.xr){let m=this.xrMove.length(),p=m>.9,M=this.canMove?(p?this.canRun?this.run:this.jogAllowed?2.5:this.walk:this.walk)*this.speedScale:0;c=this.xrMove.x*M/Math.max(1,m),u=this.xrMove.z*M/Math.max(1,m)}this.vel.x=Xt(this.vel.x,c,10,e),this.vel.y=Xt(this.vel.y,u,10,e);let h=this.dolly.position,d=h.x+this.vel.x*e,f=h.z+this.vel.y*e,g=this.radius;if(this.xr){this.camera.getWorldPosition(df);let m=df.x-h.x,p=df.z-h.z;Math.hypot(m,p)<3||(m=0,p=0);let M=h.x+m,x=h.z+p,_=d+m,S=f+p,P=this.canMove&&!this.noclip,T=(Y,y)=>{if(P){for(let A of this.colliders)if(Y+g>A.minX&&Y-g<A.maxX&&y+g>A.minZ&&y-g<A.maxZ)return!0}return!1},U=(Y,y)=>!!(this.bounds&&P&&(Y<this.bounds.minX||Y>this.bounds.maxX||y<this.bounds.minZ||y>this.bounds.maxZ));_!==M&&(T(_,x)&&!T(M,x)||U(_,x)&&!U(M,x))&&(_=M),S!==x&&(T(_,S)&&!T(_,x)||U(_,S)&&!U(_,x))&&(S=x),d=_-m,f=S-p}else for(let m of this.canMove&&!this.noclip?this.colliders:[])if(d+g>m.minX&&d-g<m.maxX&&f+g>m.minZ&&f-g<m.maxZ){let p=Math.min(d+g-m.minX,m.maxX-(d-g)),M=Math.min(f+g-m.minZ,m.maxZ-(f-g));p<M?d=h.x<(m.minX+m.maxX)/2?m.minX-g:m.maxX+g:f=h.z<(m.minZ+m.maxZ)/2?m.minZ-g:m.maxZ+g}this.bounds&&!this.noclip&&!this.xr&&(d=cn.clamp(d,this.bounds.minX,this.bounds.maxX),f=cn.clamp(f,this.bounds.minZ,this.bounds.maxZ));let v=Math.hypot(d-h.x,f-h.z);h.x=d,h.z=f,this.moving=v/Math.max(e,1e-4)>.3,this.bob+=v*4.2,this.stepDist+=v,this.stepDist>.62&&(this.stepDist=0,om>0&&this.audio.oneShot("step",{volume:om*(this.running?2:1),rate:.65+Math.random()*.1})),this.apply(e)}};var fi=new b,nh=class{constructor(e,t){this.player=e,this.figs=t,this.trail=[],this.speed=2.6,this.active=!1,this.clock=0,this.idx=t.map(()=>0)}start(e=7){this.player.headWorld(fi),this.trail=[new b(fi.x,0,fi.z)],this.active=!0,this.figs.forEach((t,n)=>{this.idx[n]=0,t.visible=!0})}rewind(e){this.player.headWorld(fi);let t=new b(fi.x,0,fi.z),n=this.trail.length-1,s=1/0;this.trail.forEach((a,l)=>{let c=a.distanceTo(t);c<s&&(s=c,n=l)}),this.trail.length=n+1,this.trail.push(t);let r=0,o=this.trail.length-1;for(;o>0&&r<e;)r+=this.trail[o].distanceTo(this.trail[o-1]),o--;this.figs.forEach((a,l)=>{let c=Math.max(0,o-l*2);a.position.copy(this.trail[c]),this.idx[l]=c})}stop(){this.active=!1}update(e){this.player.headWorld(fi);let t=this.trail[this.trail.length-1];(!t||t.distanceTo(new b(fi.x,0,fi.z))>.4)&&this.trail.push(new b(fi.x,0,fi.z)),this.trail.length>4e3&&(this.trail.splice(0,1e3),this.idx=this.idx.map(s=>Math.max(0,s-1e3)));let n=99;return this.clock+=e,this.figs.forEach((s,r)=>{if(!this.active){s.userData.walk=Math.max(0,(s.userData.walk||0)-e*3);return}let o=.82+.18*Math.sin(this.clock*1.7+r*2.1)*Math.sin(this.clock*.6+r),a=this.speed*(1-r*.08)*o*e;for(;a>0;){let u=this.idx[r]+1<this.trail.length?this.trail[this.idx[r]+1]:new b(fi.x,0,fi.z),h=Math.hypot(u.x-s.position.x,u.z-s.position.z);if(h<=a)if(s.position.x=u.x,s.position.z=u.z,a-=h,this.idx[r]+1<this.trail.length)this.idx[r]++;else break;else s.position.x+=(u.x-s.position.x)/h*a,s.position.z+=(u.z-s.position.z)/h*a,a=0}let l=fi.x-s.position.x,c=fi.z-s.position.z;s.rotation.y=Math.atan2(l,c),s.userData.walk=1,s.userData.stride+=this.speed*(1-r*.08)*e,n=Math.min(n,Math.hypot(l,c))}),n}};var pE=`varying vec3 vDir;
void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,mE=`uniform float uFade; uniform vec3 uFadeCol; uniform float uLid; uniform float uTunnel; varying vec3 vDir;
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
}`,gE=i=>i*i*(3-2*i),xE=1.2,Xa=class{constructor({renderer:e,camera:t,player:n,interactor:s,hands:r,bagCtl:o,ui:a}){Object.assign(this,{renderer:e,camera:t,player:n,interactor:s,hands:r,bagCtl:o,ui:a}),this.active=!1,this.session=null,this.blurred=!1,this.frames=0,this.ctrl=[0,1].map(u=>e.xr.getController(u)),this.grip=[0,1].map(u=>e.xr.getControllerGrip(u)),this.hand=[null,null],this.state=[0,1].map(()=>({trigger:0,squeeze:0,stick:[0,0],turned:!1,stickBtn:!1}));let l=new Gt().setFromPoints([new b(0,0,0),new b(0,0,-1)]);this.rays=this.ctrl.map(u=>{let h=new _c(l,new Ca({color:16179896,transparent:!0,opacity:.55}));return h.visible=!1,u.add(h),h}),this.ctrl.forEach((u,h)=>{u.addEventListener("connected",d=>{u.userData.handed=d.data.handedness,u.userData.gp=d.data.gamepad,this._map()}),u.addEventListener("disconnected",()=>{u.userData.handed=null,u.userData.gp=null,this._map()}),u.addEventListener("selectstart",()=>{if(this.endReady){this.exit();return}this.blurred||(this.pressFrom=h,this.interactor.pressXR(u),this.interactor.pressed&&this.buzz(h))}),u.addEventListener("selectend",()=>{this.interactor.releaseXR()}),n.dolly.add(u,this.grip[h])}),this.capCanvas=document.createElement("canvas"),this.capCanvas.width=1024,this.capCanvas.height=640,this.capTex=new Qt(this.capCanvas),this.capTex.colorSpace=Dt,this.board=new Ie(new mt(1.2,.75),new yt({map:this.capTex,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1})),this.board.position.set(0,-.52,-1.35),this.board.rotation.x=-.18,this.board.renderOrder=99,this.board.visible=!1,this.board.frustumCulled=!1,t.add(this.board),this.lastCap="";let c=document.querySelector("#title .thread path");this.progressPath=new Path2D(c.getAttribute("d")),this.progressLength=c.getTotalLength(),this.veilMat=new Wt({vertexShader:pE,fragmentShader:mE,transparent:!0,depthTest:!1,depthWrite:!1,side:pn,fog:!1,toneMapped:!1,uniforms:{uFade:{value:0},uFadeCol:{value:new ve(0)},uLid:{value:0},uTunnel:{value:0}}}),this.veil=new Ie(new en(.12,24,16),this.veilMat),this.veil.renderOrder=100,this.veil.frustumCulled=!1,this.veil.visible=!1,t.add(this.veil),this.fadeLin=0,this.tunnel=0,this.fadeEl=document.getElementById("fade"),this.lidEl=document.getElementById("eyelids"),this.white=new ve(15984332),this.black=new ve(0),this.endCanvas=document.createElement("canvas"),this.endCanvas.width=1024,this.endCanvas.height=1024,this.endTex=new Qt(this.endCanvas),this.endTex.colorSpace=Dt,this.endBoard=new Ie(new mt(1.5,1.5),new yt({map:this.endTex,transparent:!0,depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1})),this.endBoard.renderOrder=101,this.endBoard.visible=!1,this.endBoard.frustumCulled=!1,n.dolly.add(this.endBoard),this.endMode=!1,this.endReady=!1,this.endT=0,this.endAlpha={}}_map(){this.hand=[null,null],this.ctrl.forEach((e,t)=>{e.userData.handed==="left"&&(this.hand[0]=t),e.userData.handed==="right"&&(this.hand[1]=t)}),this.hand[1]===null&&(this.hand[1]=this.hand[0]===0?1:0),this.hand[0]===null&&(this.hand[0]=this.hand[1]===0?1:0),this.active&&this._attach()}_attach(){this.hands.xr={grips:[this.grip[this.hand[0]],this.grip[this.hand[1]]],squeeze:[0,0],trigger:[0,0]},this.bagCtl.setHolder(this.grip[this.hand[1]],!0)}static async supported(){try{return!!(navigator.xr&&await navigator.xr.isSessionSupported("immersive-vr"))}catch{return!1}}async enter(e,t){let n=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});this.renderer.xr.setFramebufferScaleFactor(1),this.refSpace="local-floor";try{await n.requestReferenceSpace("local-floor")}catch{this.refSpace="local"}this.renderer.xr.setReferenceSpaceType(this.refSpace),await this.renderer.xr.setSession(n),this.session=n,this.active=!0,this.calib=1,this.frames=0,this.blurred=!1,this._lastEye=void 0,this.player.xrPoseOK=!1,this.player.xrPending=null,this.endMode=!1,this.endReady=!1,this.endBoard.visible=!1,this.fadeLin=1,this.tunnel=0,this._map(),this._attach(),this.interactor.xrMode=!0,this.board.visible=!0,this.veil.visible=!0,this.lastCap="",n.addEventListener("visibilitychange",()=>{let s=n.visibilityState==="visible";this.blurred=!s;let r=No.getContext();if(s)try{r.resume()}catch{}else{this.interactor.releaseXR();try{r.suspend()}catch{}}}),n.addEventListener("end",()=>{this.active=!1,this.session=null,this.hands.xr=null,this.interactor.xrMode=!1,this.interactor.release(),this.board.visible=!1,this.veil.visible=!1,this.endBoard.visible=!1,this.endMode=!1,this.endReady=!1,this.rays.forEach(s=>{s.visible=!1}),this.blurred=!1;try{No.getContext().resume()}catch{}this.bagCtl.setHolder(this.camera,!1),this.player.dolly.position.y=0,this.player.dolly.rotation.y=0,this.player.xrPending=null,this.player.xrPoseOK=!1,t&&t()}),e&&e()}buzz(e,t=.35,n=35){let s=this.ctrl[e]&&this.ctrl[e].userData.gp,r=s&&s.hapticActuators&&s.hapticActuators[0];try{r&&r.pulse&&r.pulse(t,n)}catch{}}exit(){this.session&&(this.endReady=!1,this.session.end().catch(()=>{}))}recalibrate(){this.calib=1}showEnd(){if(!this.active)return;this.endMode=!0,this.endReady=!1,this.endT=0,this.finT=0,this.endAlpha={},this._endKey="";let e=new b,t=new b;this.camera.getWorldPosition(e),this.camera.getWorldDirection(t),t.y=0,t.lengthSq()<1e-4&&t.set(0,0,-1),t.normalize();let n=e.clone().addScaledVector(t,1.7);this.player.dolly.updateWorldMatrix(!0,!1),this.endBoard.position.copy(this.player.dolly.worldToLocal(n));let s=e.clone();s.y=n.y,this.endBoard.lookAt(s),this.endBoard.visible=!0,this.board.visible=!1}update(e){if(!this.active)return;let t=this.player;this.frames++,this.ctrl.forEach((M,x)=>{let _=M.userData.gp,S=this.state[x];if(!_){S.trigger=0,S.squeeze=0,S.stick=[0,0];return}let P=_.buttons||[],T=_.axes||[];S.trigger=P[0]?P[0].value:0,S.squeeze=P[1]?P[1].value:0,S.stick=T.length>=4?[T[2]||0,T[3]||0]:[T[0]||0,T[1]||0];let U=!!(P[3]&&P[3].pressed);U&&!S.stickBtn&&this.recalibrate(),S.stickBtn=U}),this.hands.xr&&(this.hands.xr.squeeze=[this.state[this.hand[0]].squeeze,this.state[this.hand[1]].squeeze],this.hands.xr.trigger=[this.state[this.hand[0]].trigger,this.state[this.hand[1]].trigger]);let n=this.camera.position.y,s=this.frames>2&&(this.refSpace==="local"||n>.3);if(Math.abs(this._lastEye-t.eye)>.02&&(this.calib=1),this.calib>0&&s&&(t.dolly.position.y=t.eye-n,this.calib=0,this._lastEye=t.eye),s&&!t.xrPoseOK&&(t.xrPoseOK=!0,t.xrPending)){let M=t.xrPending;t.xrPending=null,t.place(M.x,M.z,M.yaw,M.eye)}if(this._veil(e),this.endMode){this.rays.forEach(M=>{M.visible=!1}),this._end(e),t.xrMove.set(0,0,0);return}if(this.blurred){t.xrMove.set(0,0,0);return}let r=this.state[this.hand[0]],o=this.state[this.hand[1]],a=new b;this.camera.getWorldDirection(a),a.y=0,a.lengthSq()<1e-6&&a.set(0,0,-1),a.normalize();let l=new b(-a.z,0,a.x),c=Math.abs(r.stick[1])>.15?-r.stick[1]:0,u=Math.abs(r.stick[0])>.15?r.stick[0]:0;t.xrMove.set(0,0,0).addScaledVector(a,c).addScaledVector(l,u);let h=o.stick[0];if(Math.abs(h)>.7&&!o.turned){o.turned=!0;let M=new b;this.camera.getWorldPosition(M);let x=-Math.sign(h)*Math.PI/6;t.dolly.position.sub(M).applyAxisAngle(new b(0,1,0),x).add(M),t.dolly.rotation.y+=x}Math.abs(h)<.3&&(o.turned=!1);let d="";this.ctrl.forEach((M,x)=>{let _=this.interactor.peekXR(M);this.rays[x].visible=!!_,_&&(this.rays[x].scale.z=_.distance,!d&&_.target.label&&(d=_.target.label))});let f=["thought","subtitle","hint"].map(M=>{let x=document.getElementById(M);if(!x||!x.classList.contains("on"))return null;let _=x.querySelector(".who"),S=x.querySelector(".say");return{who:_?_.textContent:"",text:S?S.textContent:x.textContent}}),g=this.ui.state||{},v=g.progress>.001&&g.progress<1?Math.round(g.progress*50)/50:0,m=g.stamina!==null&&g.stamina!==void 0&&g.stamina<.98?Math.round(g.stamina*50)/50:-1,p=JSON.stringify([f,d,v,m]);p!==this.lastCap&&(this.lastCap=p,this._draw(f,d,v,m))}_veil(e){let t=this.fadeEl,n=this.endMode||!!(t&&t.classList.contains("on"));this.fadeLin=cn.clamp(this.fadeLin+(n?1:-1)*e/xE,0,1);let s=this.veilMat.uniforms;s.uFade.value=gE(this.fadeLin),s.uFadeCol.value.copy(!this.endMode&&t&&t.classList.contains("white")?this.white:this.black);let r=0;this.lidEl&&(r=parseFloat(this.lidEl.style.getPropertyValue("--lid"))||0),s.uLid.value=cn.clamp(r,0,1);let o=this.player,a=o.vel?o.vel.length():0,l=o.xrMove&&o.xrMove.lengthSq()>1e-4?Math.min(1,a/3.3)*.55:0;this.tunnel+=(l-this.tunnel)*Math.min(1,e*6),s.uTunnel.value=this.tunnel}_wrap(e,t,n){let s=String(t).split(/\s+/).filter(Boolean),r=[],o="";for(let a of s){let l=o?o+" "+a:a;e.measureText(l).width>n&&o?(r.push(o),o=a):o=l}return o&&r.push(o),r}_draw([e,t,n],s,r,o){let a=this.capCanvas.getContext("2d"),l=this.capCanvas.width,c=this.capCanvas.height;a.clearRect(0,0,l,c);let u=l-120,h=1,d=[],f=0;for(let p=0;p<4;p++){d=[],f=0;let M=(_,S,P,T,U,Y=!1)=>{a.font=S.replace("#",Math.round(P*h)+"px");let y=this._wrap(a,U?String(_).toUpperCase():_,u),A=Math.round(P*h*1.3);d.push({lines:y,font:a.font,color:T,lh:A,plain:Y}),f+=y.length*A+10};s&&M("\u25B8 "+s,'400 # "Gowun Batang", Georgia, serif',24,"#f3ead8"),e&&e.text&&M(e.text,'italic 400 # "Gowun Batang", Georgia, serif',44,"#f3ead8",!1,!0),t&&t.text&&(M(t.who||"Around you",'400 # "Gowun Batang", Georgia, serif',24,"#e3b77c",!0),M(t.text,'400 # "Gowun Batang", Georgia, serif',42,"#fff4df")),n&&n.text&&M(n.text,'400 # "Gowun Batang", Georgia, serif',36,"#f3ead8");let x=(r>0?1:0)+(o>=0?1:0);if(f+=x*92,f<=c-60)break;h*=.85}let g=[];if(r>0&&g.push({v:r,c:"#d23a2c"}),o>=0&&g.push({v:o,c:"#d23a2c"}),!d.length&&!g.length){this.capTex.needsUpdate=!0;return}let v=Math.max(20,(c-f)/2-10);a.textAlign="center",a.textBaseline="middle";let m=v+6;for(let p of d){p.plain||(a.fillStyle="rgba(10,8,6,0.75)",a.fillRect(30,m-5,l-60,p.lines.length*p.lh+10)),a.shadowColor="rgba(0,0,0,0.95)",a.shadowBlur=p.plain?12:0,a.shadowOffsetY=p.plain?2:0,a.font=p.font,a.fillStyle=p.color;for(let M of p.lines)a.fillText(M,l/2,m+p.lh/2),m+=p.lh;m+=10}a.shadowBlur=0,a.shadowOffsetY=0;for(let p of g){let x=(l-360)/2;a.save(),a.translate(x,m),a.scale(360/1656,360/1656),a.translate(28,-400),a.lineWidth=12,a.lineCap="round",a.strokeStyle="rgba(210,58,44,0.22)",a.stroke(this.progressPath);let _=this.progressLength*Math.max(0,Math.min(1,p.v));_>0&&(a.setLineDash([_,this.progressLength+1]),a.strokeStyle=p.c,a.stroke(this.progressPath)),a.restore(),m+=92}this.capTex.needsUpdate=!0}_end(e){this.endT+=e;let t=["stat-0a","stat-0b","stat-1","stat-2","stat-3","stat-src","stat-fin"],n=[],s=!1,r=!1;for(let g of t){let v=document.getElementById(g);if(!v||v.hidden)continue;let m=v.classList.contains("on"),p=this.endAlpha[g]=cn.clamp((this.endAlpha[g]||0)+(m?e/1.6:-e/.3),0,1);if(p<1&&m&&(s=!0),g==="stat-fin"){r=m;let M=v.querySelector("h2"),x=v.querySelectorAll("p");M&&n.push({a:p,kind:"title",el:M}),x.forEach(_=>n.push({a:p,kind:"small",el:_}))}else n.push({a:p,kind:g==="stat-src"?"small":"stat",el:v})}r?(this.finT=(this.finT||0)+e,this.finT>2.5&&!this.endReady&&(this.endReady=!0,s=!0)):this.finT=0;let o=n.map(g=>g.a.toFixed(2)).join(",")+this.endReady;if(!s&&o===this._endKey)return;this._endKey=o;let a=this.endCanvas.getContext("2d"),l=1024,c=1024;a.clearRect(0,0,l,c),a.textAlign="left",a.textBaseline="middle";let u={stat:{size:46,fam:'"Spectral", Georgia, serif',color:"#ece4d6",lh:58,gap:14},small:{size:24,fam:'"Gowun Batang", Georgia, serif',color:"rgba(236,228,214,0.62)",lh:32,gap:8},title:{size:72,fam:'"Spectral", Georgia, serif',color:"#ece4d6",lh:84,gap:14}},h=[],d=0;for(let g of n){let v=u[g.kind],m=[],p=(P,T,U)=>P.childNodes.forEach(Y=>{Y.nodeType===3?Y.textContent.split(/(\s+)/).forEach(y=>{y&&m.push({w:y,strong:T,em:U})}):Y.nodeType===1&&p(Y,T||Y.nodeName==="STRONG",U||Y.nodeName==="EM")});p(g.el,!1,!1);let M=P=>(P.em?"italic ":"")+"400 "+v.size+"px "+v.fam,x=[],_=[],S=0;for(let P of m){a.font=M(P);let T=a.measureText(P.w).width,U=/^\s+$/.test(P.w);if(!U&&S+T>l-120&&_.length){for(;_.length&&/^\s+$/.test(_[_.length-1].w);)S-=_.pop().width;x.push({row:_,rw:S}),_=[],S=0}U&&!_.length||(_.push({...P,width:T,font:M(P)}),S+=T)}for(;_.length&&/^\s+$/.test(_[_.length-1].w);)S-=_.pop().width;if(_.length&&x.push({row:_,rw:S}),x.length>1){let P=x[x.length-1],T=x[x.length-2];if(P.row.filter(Y=>!/^\s+$/.test(Y.w)).length===1&&T.row.filter(Y=>!/^\s+$/.test(Y.w)).length>1){let Y=[];for(;T.row.length&&/^\s+$/.test(T.row.at(-1).w);)T.rw-=T.row.pop().width;let y=T.row.pop();T.rw-=y.width,Y.push(y),a.font=y.font;let A={...y,w:" ",width:a.measureText(" ").width};for(P.row.unshift(...Y,A),P.rw+=y.width+A.width;T.row.length&&/^\s+$/.test(T.row.at(-1).w);)T.rw-=T.row.pop().width}}h.push({...g,st:v,rows:x}),d+=x.length*v.lh+v.gap+(g.kind==="title"?24:0)}this.endReady&&(d+=70);let f=Math.max(30,(c-d)/2);for(let g of h){g.kind==="title"&&(f+=24),a.globalAlpha=g.a;for(let v of g.rows){let m=(l-v.rw)/2;for(let p of v.row)a.font=p.font,a.fillStyle=p.strong?"#d23a2c":g.st.color,a.fillText(p.w,m,f+g.st.lh/2),m+=p.width;f+=g.st.lh}f+=g.st.gap}this.endReady&&(a.globalAlpha=1,a.textAlign="center",a.font='400 26px "Gowun Batang", Georgia, serif',a.fillStyle="#d8d0c0",a.fillText("Pull the trigger to leave VR",l/2,f+44)),a.globalAlpha=1,this.endTex.needsUpdate=!0}};function lm(){let i={airTime:{value:0},airDensity:{value:.035},airHeight:{value:2.4},airDrift:{value:.2},airColor:{value:new ve(6705467)},airWarmth:{value:.15},airSaturation:{value:.78}},e=new WeakSet,t={sweatshop:[.09,3.2,.24,9203782,.22,.68],street:[.075,5.5,.48,13274703,.48,.84],nightmare:[.19,3,.5,5793662,-.34,.55],door:[.085,2.6,.18,9990980,.27,.72],home:[.045,2,.08,9069111,.32,.82],void:[0,1,0,15656145,0,1]},n=new ve,s=new ve(t.door[3]);return{install(r){r.traverse(o=>{for(let a of Array.isArray(o.material)?o.material:[o.material]){if(!a||!a.fog||a.isShaderMaterial||e.has(a))continue;e.add(a);let l=a.onBeforeCompile,c=a.customProgramCacheKey();a.onBeforeCompile=function(u,h){l.call(this,u,h),Object.assign(u.uniforms,i),u.vertexShader=`varying vec3 vAirWorld;
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
            `)},a.customProgramCacheKey=()=>c+"|world-air-v1",a.needsUpdate=!0}})},update(r,o,a,l=0){let c=t[a]||t.sweatshop,u=t.door,h=1-Math.exp(-r*.8);i.airTime.value=o,i.airWarmth.value=cn.lerp(i.airWarmth.value,cn.lerp(c[4],u[4],l),h),i.airSaturation.value=cn.lerp(i.airSaturation.value,cn.lerp(c[5],u[5],l),h);for(let[d,f]of["airDensity","airHeight","airDrift"].entries()){let g=cn.lerp(c[d],u[d],l);i[f].value=cn.lerp(i[f].value,g,h)}n.setHex(c[3]),l&&n.lerp(s,l),i.airColor.value.lerp(n,h)}}}var ih=class{constructor(e,t=6){this.slots=[];for(let n=0;n<t;n++){let s=new Lo(16777215,0,8,1.6);s.position.set(0,-50,0),e.add(s),this.slots.push({L:s,src:null,w:0,next:null})}this.sources=[],this.acc=1}add(e){let t={pos:e.pos.clone(),color:new ve(e.color??16777215),intensity:e.intensity??1,distance:e.distance??8,decay:e.decay??1.6,space:e.space||"",priority:e.priority??1,on:!0};return this.sources.push(t),t}score(e,t){if(!e.on||e.intensity<=.001)return-1;let n=e.pos.distanceTo(t);return n>e.distance+7?-1:e.intensity*e.priority/(1+(n/Math.max(1,e.distance))**2*4)}update(e,t,n){if(this.acc+=e,this.acc>.2){this.acc=0;let s=this.sources.filter(a=>n.has(a.space)).map(a=>[a,this.score(a,t)]).filter(([,a])=>a>0).sort((a,l)=>l[1]-a[1]).slice(0,this.slots.length).map(([a])=>a),r=new Set(s);this.slots.forEach(a=>{a.src&&r.has(a.src)?(r.delete(a.src),a.next=null):a.src&&(a.next=void 0)});let o=this.slots.filter(a=>!a.src||a.next===void 0);[...r].forEach((a,l)=>{o[l]&&(o[l].next=a)})}for(let s of this.slots){s.next!==null&&s.next!==void 0&&!s.src&&(s.src=s.next,s.next=null,s.w=0);let r=s.next!==null;s.w=cn.clamp(s.w+(r?-e*5:e*3),0,1),r&&s.w<=0&&(s.src=s.next||null,s.next=null);let o=s.src;if(!o){s.L.intensity=0;continue}s.L.position.copy(o.pos),s.L.color.copy(o.color),s.L.distance=o.distance,s.L.decay=o.decay,s.L.intensity=o.intensity*s.w}}};var ar={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var pi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},yE=new To(-1,1,1,-1,0,1),ff=class extends Gt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},vE=new ff,us=class{constructor(e){this._mesh=new Ie(vE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Yo=class extends pi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Si.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qa=class extends pi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},sh=class extends pi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var rh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yo(ar),this.copyPass.material.blending=kn,this.clock=new Lr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qa!==void 0&&(o instanceof qa?n=!0:o instanceof sh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var oh=class extends pi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Ya={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ft},cameraProjectionMatrixInverse:{value:new ft},cameraWorldMatrix:{value:new ft},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new b(-1,-1,-1)},sceneBoxMax:{value:new b(1,1,1)}},vertexShader:`

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
		}`},Za={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},ah={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function cm(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=_E(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new b(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Rr(s,e,e);return r.wrapS=Ln,r.wrapT=Ln,r.needsUpdate=!0,r}function _E(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Ja={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Se},cameraProjectionMatrixInverse:{value:new ft},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function pf(i,e,t){let n=ME(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function ME(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new b(Math.cos(r),Math.sin(r),o))}return n}var lh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,g=e-d,v=t-f,m,p;g>v?(m=1,p=0):(m=0,p=1);let M=g-m+u,x=v-p+u,_=g-1+2*u,S=v-1+2*u,P=l&255,T=c&255,U=this.perm[P+this.perm[T]]%12,Y=this.perm[P+m+this.perm[T+p]]%12,y=this.perm[P+1+this.perm[T+1]]%12,A=.5-g*g-v*v;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[U],g,v));let Z=.5-M*M-x*x;Z<0?s=0:(Z*=Z,s=Z*Z*this.dot(this.grad3[Y],M,x));let K=.5-_*_-S*S;return K<0?r=0:(K*=K,r=K*K*this.dot(this.grad3[y],_,S)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,g=(u+h+d)*f,v=u-g,m=h-g,p=d-g,M=e-v,x=t-m,_=n-p,S,P,T,U,Y,y;M>=x?x>=_?(S=1,P=0,T=0,U=1,Y=1,y=0):M>=_?(S=1,P=0,T=0,U=1,Y=0,y=1):(S=0,P=0,T=1,U=1,Y=0,y=1):x<_?(S=0,P=0,T=1,U=0,Y=1,y=1):M<_?(S=0,P=1,T=0,U=0,Y=1,y=1):(S=0,P=1,T=0,U=1,Y=1,y=0);let A=M-S+f,Z=x-P+f,K=_-T+f,j=M-U+2*f,xe=x-Y+2*f,te=_-y+2*f,he=M-1+3*f,oe=x-1+3*f,_e=_-1+3*f,Pe=u&255,Re=h&255,Be=d&255,at=this.perm[Pe+this.perm[Re+this.perm[Be]]]%12,ce=this.perm[Pe+S+this.perm[Re+P+this.perm[Be+T]]]%12,Ee=this.perm[Pe+U+this.perm[Re+Y+this.perm[Be+y]]]%12,ye=this.perm[Pe+1+this.perm[Re+1+this.perm[Be+1]]]%12,Ce=.6-M*M-x*x-_*_;Ce<0?s=0:(Ce*=Ce,s=Ce*Ce*this.dot3(this.grad3[at],M,x,_));let De=.6-A*A-Z*Z-K*K;De<0?r=0:(De*=De,r=De*De*this.dot3(this.grad3[ce],A,Z,K));let we=.6-j*j-xe*xe-te*te;we<0?o=0:(we*=we,o=we*we*this.dot3(this.grad3[Ee],j,xe,te));let ke=.6-he*he-oe*oe-_e*_e;return ke<0?a=0:(ke*=ke,a=ke*ke*this.dot3(this.grad3[ye],he,oe,_e)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,g,v=(e+t+n+s)*l,m=Math.floor(e+v),p=Math.floor(t+v),M=Math.floor(n+v),x=Math.floor(s+v),_=(m+p+M+x)*c,S=m-_,P=p-_,T=M-_,U=x-_,Y=e-S,y=t-P,A=n-T,Z=s-U,K=Y>y?32:0,j=Y>A?16:0,xe=y>A?8:0,te=Y>Z?4:0,he=y>Z?2:0,oe=A>Z?1:0,_e=K+j+xe+te+he+oe,Pe=o[_e][0]>=3?1:0,Re=o[_e][1]>=3?1:0,Be=o[_e][2]>=3?1:0,at=o[_e][3]>=3?1:0,ce=o[_e][0]>=2?1:0,Ee=o[_e][1]>=2?1:0,ye=o[_e][2]>=2?1:0,Ce=o[_e][3]>=2?1:0,De=o[_e][0]>=1?1:0,we=o[_e][1]>=1?1:0,ke=o[_e][2]>=1?1:0,Ye=o[_e][3]>=1?1:0,k=Y-Pe+c,C=y-Re+c,ie=A-Be+c,$=Z-at+c,J=Y-ce+2*c,ue=y-Ee+2*c,pe=A-ye+2*c,G=Z-Ce+2*c,w=Y-De+3*c,E=y-we+3*c,F=A-ke+3*c,re=Z-Ye+3*c,B=Y-1+4*c,me=y-1+4*c,Ne=A-1+4*c,Ue=Z-1+4*c,V=m&255,q=p&255,D=M&255,fe=x&255,Ve=a[V+a[q+a[D+a[fe]]]]%32,ct=a[V+Pe+a[q+Re+a[D+Be+a[fe+at]]]]%32,Oe=a[V+ce+a[q+Ee+a[D+ye+a[fe+Ce]]]]%32,ee=a[V+De+a[q+we+a[D+ke+a[fe+Ye]]]]%32,st=a[V+1+a[q+1+a[D+1+a[fe+1]]]]%32,Et=.6-Y*Y-y*y-A*A-Z*Z;Et<0?u=0:(Et*=Et,u=Et*Et*this.dot4(r[Ve],Y,y,A,Z));let X=.6-k*k-C*C-ie*ie-$*$;X<0?h=0:(X*=X,h=X*X*this.dot4(r[ct],k,C,ie,$));let We=.6-J*J-ue*ue-pe*pe-G*G;We<0?d=0:(We*=We,d=We*We*this.dot4(r[Oe],J,ue,pe,G));let ge=.6-w*w-E*E-F*F-re*re;ge<0?f=0:(ge*=ge,f=ge*ge*this.dot4(r[ee],w,E,F,re));let Ae=.6-B*B-me*me-Ne*Ne-Ue*Ue;return Ae<0?g=0:(Ae*=Ae,g=Ae*Ae*this.dot4(r[st],B,me,Ne,Ue)),27*(u+h+d+f+g)}};var Ka=class i extends pi{constructor(e,t,n,s,r,o,a){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=cm(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Un(this.width,this.height,{type:hi}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Wt({defines:Object.assign({},Ya.defines),uniforms:Si.clone(Ya.uniforms),vertexShader:Ya.vertexShader,fragmentShader:Ya.fragmentShader,blending:kn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pc,this.normalMaterial.blending=kn,this.pdMaterial=new Wt({defines:Object.assign({},Ja.defines),uniforms:Si.clone(Ja.uniforms),vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Wt({defines:Object.assign({},Za.defines),uniforms:Si.clone(Za.uniforms),vertexShader:Za.vertexShader,fragmentShader:Za.fragmentShader,blending:kn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Wt({uniforms:Si.clone(ar.uniforms),vertexShader:ar.vertexShader,fragmentShader:ar.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:zc,blendDst:zo,blendEquation:Oi,blendSrcAlpha:Hc,blendDstAlpha:zo,blendEquationAlpha:Oi}),this.blendMaterial=new Wt({uniforms:Si.clone(ah.uniforms),vertexShader:ah.vertexShader,fragmentShader:ah.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Fd,blendSrc:zc,blendDst:zo,blendEquation:Oi,blendSrcAlpha:Hc,blendDstAlpha:zo,blendEquationAlpha:Oi}),this.fsQuad=new us(null),this.originalClearColor=new ve,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ao,this.depthTexture.format=nr,this.depthTexture.type=tr,this.normalRenderTarget=new Un(this.width,this.height,{minFilter:ni,magFilter:ni,type:hi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){let t=new lh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Rr(s,e,e,_i,ji);return r.wrapS=Ln,r.wrapT=Ln,r.needsUpdate=!0,r}};Ka.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var hm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zo=class i extends pi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new ve(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Un(r,o,{type:hi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Un(r,o,{type:hi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=hm;this.highPassUniforms=Si.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1),new b(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=ar;this.copyUniforms=Si.clone(u.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:vn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ve,this.oldClearAlpha=1,this.basic=new yt,this.fsQuad=new us(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Zo.BlurDirectionX=new Se(1,0);Zo.BlurDirectionY=new Se(0,1);var um={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ch=class extends pi{constructor(){super();let e=um;this.uniforms=Si.clone(e.uniforms),this.material=new Cc({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===fn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===za?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var EE={uniforms:{tDiffuse:{value:null},uTime:{value:0},uDream:{value:0},uGlow:{value:0},uRes:{value:new Se(1,1)},uGrain:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
    }`};function dm(i,e,t,n){let s=i.getDrawingBufferSize(new Se),r=new Un(s.x,s.y,{type:hi,samples:n==="high"?4:2}),o=new rh(i,r),a=new oh(e,t);o.addPass(a);let l=new Ka(e,t,s.x,s.y);l.updateGtaoMaterial({radius:.5,distanceExponent:1.4,thickness:1.2,scale:1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),l.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),l.blendIntensity=.9,o.addPass(l);let c={selectedObjects:[]},u=new Zo(new Se(s.x/2,s.y/2),.45,.55,.92);o.addPass(u),o.addPass(new ch);let h=new Yo(EE);o.addPass(h);let d={composer:o,outline:c,bloom:u,gtao:l,grade:h,dream:0,glow:0,setCamera(f){a.camera=f,l.camera=f},setQuality(f){l.enabled=!1,u.enabled=f==="high",h.uniforms.uGrain.value=1},setSize(f,g){o.setSize(f,g),h.uniforms.uRes.value.set(f,g)},render(f){h.uniforms.uTime.value=f,h.uniforms.uDream.value=d.dream,h.uniforms.uGlow.value=d.glow,u.strength=.45+d.dream*.6+d.glow*.5,o.render()}};return d.setQuality(n),d}function fm(i,e){let t=new Wt({side:pn,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uDay:{value:0},uBrightness:{value:.4},uSun:{value:e.clone().normalize()}},vertexShader:`varying vec3 vDirection;
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
      }`}),n=new Ie(new en(70,24,16),t);return n.renderOrder=-10,n.frustumCulled=!1,i.add(n),{update(s,r,o,a){n.position.copy(a);let l=1-Math.exp(-s*.9);t.uniforms.uTime.value=r,t.uniforms.uDay.value=cn.lerp(t.uniforms.uDay.value,Math.min(1,(o.sun||0)/2),l),t.uniforms.uBrightness.value=cn.lerp(t.uniforms.uBrightness.value,o.sky??1,l)}}}var mf=new Ft,Jo=new En,mm=new b,pm=new ft,gm=new b,bE=new b,hh=new b,Hr=new b,wE=new b(0,1,0),uh=class{constructor(e,t,{skin:n,sleeve:s}={}){this.camera=t,this.group=new nt,e.add(this.group),this.h=[-1,1].map(r=>{let o=tm(r,{skin:n,sleeve:s});o.visible=!1,this.group.add(o);let a=new Nt(.03,.023,1,7,1,!1).rotateY(Math.PI/7).translate(0,.5,0),l=new Ie(a,new et({color:n||9067068,flatShading:!0,roughness:.75,side:Rt}));return l.scale.setScalar(Wo),l.castShadow=!1,o.traverse(c=>{c.isMesh&&(c.castShadow=!1)}),l.visible=!1,l.renderOrder=2,l.frustumCulled=!1,this.group.add(l),{side:r,mesh:o,arm:l,spec:null,key:null,k:1,blend:.3,pos:new b,quat:new En,from:new b,fromQ:new En,curl:Va.relax.slice(),shown:!1}}),this.xr=null}set(e,t){let n=this.h[e];n.spec=t,t.key!==n.key&&(n.key=t.key,n.k=0,n.blend=t.blend??.3,n.from.copy(n.pos),n.fromQ.copy(n.quat),n.shown||this._hiddenPose(n,n.from,n.fromQ))}both(e,t){this.set(0,e),this.set(1,t)}hide(e){if(e===void 0){this.hide(0),this.hide(1);return}this.h[e].key!=="hidden"&&this.set(e,{key:"hidden",mode:"hidden",pose:"relax",blend:.35})}isHidden(e){return this.h[e].key==="hidden"||this.h[e].key===null}_hiddenPose(e,t,n){t.set(e.side*.2,-.62,-.25).applyMatrix4(this.camera.matrixWorld),this.camera.getWorldQuaternion(n).multiply(Jo.setFromEuler(mf.set(.6,0,0,"YXZ")))}_target(e,t,n){let s=e.spec;if(!s||s.mode==="hidden"){this._hiddenPose(e,t,n);return}if(s.mode==="world"){if(this.camera.getWorldPosition(hh),hh.distanceTo(s.pos)>1.15)return this._hiddenPose(e,t,n),"far";t.copy(s.pos),n.setFromEuler(s.rot);return}let r=s.mode==="cam"?this.camera:s.obj;r.updateWorldMatrix(!0,!1),t.copy(s.pos).applyMatrix4(r.matrixWorld),(s.rotSpace==="cam"?this.camera:r).getWorldQuaternion(n).multiply(Jo.setFromEuler(s.rot))}update(e){let t=mm,n=new En;this.camera.updateWorldMatrix(!0,!1);for(let s of this.h){let r;if(this.xr&&this.xr.grips[s.side>0?1:0]){let o=s.side>0?1:0,a=this.xr.grips[o];a.updateWorldMatrix(!0,!1),s.pos.set(0,-.01,.06).applyMatrix4(a.matrixWorld),a.getWorldQuaternion(s.quat).multiply(Jo.setFromEuler(mf.set(-.25,0,-s.side*Math.PI/2,"YXZ")));let l=this.xr.squeeze[o],c=this.xr.trigger[o];r=[Math.max(l,c)*.95,l*.95,l,l,Math.max(l,c)*.7].map((u,h)=>Math.max(u,Va.relax[h]*.6)),s.mesh.visible=!0,s.shown=!0}else{let o=this._target(s,t,n)==="far";s.k=Math.min(1,s.k+e/Math.max(.01,s.blend));let a=wt(s.k);s.pos.lerpVectors(s.from,t,a),s.quat.slerpQuaternions(s.fromQ,n,a),o&&(s.pos.copy(t),s.quat.copy(n),s.from.copy(t),s.fromQ.copy(n)),(s.key==="hidden"||s.key===null||o)&&(s.k>=1||o)?(s.mesh.visible=!1,s.shown=!1):(s.mesh.visible=!0,s.shown=!0),r=Va[s.spec&&s.spec.pose||"relax"]||Va.relax,s.spec&&s.spec.curl&&(r=s.spec.curl)}for(let o=0;o<5;o++)s.curl[o]=Xt(s.curl[o],r[o],14,e);if(nm(s.mesh,s.curl),s.mesh.position.copy(s.pos),s.mesh.quaternion.copy(s.quat),s.arm.visible=s.mesh.visible&&!this.xr,s.arm.visible){let o=gm.set(0,0,.02*Wo).applyQuaternion(s.quat).add(s.pos);this.camera.getWorldPosition(hh),this.camera.getWorldDirection(Hr),Hr.y=0,Hr.normalize();let a=hh.addScaledVector(Hr,-.03).add(bE.set(-Hr.z,0,Hr.x).multiplyScalar(s.side*.17));a.y-=.36;let l=Hr.subVectors(a,o),c=Math.max(.05,l.length()-.03);s.arm.position.copy(o),s.arm.quaternion.setFromUnitVectors(wE,l.normalize()),s.arm.scale.set(Wo,c,Wo)}}}worldPos(e,t){return t.copy(this.h[e].pos)}},mi={carry:i=>new Ft(.15,i*Math.PI/2,-i*Math.PI/2+i*.2,"YXZ"),rim:i=>new Ft(-.75,-i*.25,-i*Math.PI/2,"YXZ"),toward:(i,e,t,n=.5)=>{let s=new b().subVectors(t,e).normalize();return new Ft(Math.asin(cn.clamp(s.y,-1,1)),Math.atan2(-s.x,-s.z),-i*n,"YXZ")},table:(i,e=0)=>new Ft(-.5,e+i*.3,-i*.2,"YXZ"),rest:(i,e=0)=>new Ft(-.08,e+i*.22,-i*.08,"YXZ"),push:(i,e=0)=>new Ft(.95,e+i*.15,-i*.25,"YXZ"),reach:(i,e=0,t=-.2)=>new Ft(t,e+i*.15,-i*.35,"YXZ")},dh=class{constructor(e,t,n){this.camera=e,this.hands=n,this.bag=eh(t),this.held=!1,this.look=0,this.forceOpen=0,this.sway=0,this.takeK=1,this.holder=e,this.restPos=new b(.2,-.44,-.42),this.lookPos=new b(.02,-.25,-.38),this.takeFrom=new b,this.takeFromQ=new En,this.firstLook=null,this.inXR=!1,this.glow=0,this.heavy=0,this.stow=0,this.hugMode=!1,this.hugK=0}hang(e,t,n=0){this.held=!1,e.add(this.bag),this.bag.position.copy(t),this.bag.rotation.set(0,n,0),this.bag.scale.setScalar(1),this.bag.userData.strap.visible=!0,Wa(this.bag,0),this.hands&&this.hands.hide(1)}take(){let e=this.bag;e.updateWorldMatrix(!0,!1),this.holder.updateWorldMatrix(!0,!1),pm.copy(this.holder.matrixWorld).invert().multiply(e.matrixWorld);let t=new b;pm.decompose(this.takeFrom,this.takeFromQ,t),this.held=!0,this.takeK=0,this.holder.add(e),e.userData.strap.visible=!1}setHolder(e,t){this.inXR=t,this.holder=e,this.held&&e.add(this.bag),t?(this.restPos=new b(0,-.2,.02),this.lookPos=new b(0,-.12,-.05)):(this.restPos=new b(.2,-.44,-.42),this.lookPos=new b(.02,-.25,-.38))}setCoins(e){this.bag.userData.coins.forEach((t,n)=>{t.visible=n<e})}setContents({coins:e,scraps:t,food:n}){let s=this.bag.userData;e!==void 0&&this.setCoins(e),t!==void 0&&(s.scraps.visible=t),n!==void 0&&(s.food.visible=n)}resetContents(){this.setContents({coins:0,scraps:!1,food:!1}),this.glow=0,this.heavy=0,this.forceOpen=0,this.stow=0}get open(){return this.look}get hugging(){if(this.inXR&&this.held){let e=new b,t=new b;return this.bag.getWorldPosition(e),this.camera.getWorldPosition(t),e.distanceTo(t)<.5&&e.y<t.y}return this.hugK>.6}update(e,t,n,s){if(this.bag.userData.foodMat.emissiveIntensity=this.glow*(.8+.4*Math.sin(t*5)),!this.held)return;this._stow=Xt(this._stow||0,this.stow,6,e);let r=this.hugMode&&n&&!this.inXR;this.hugK=Xt(this.hugK,r?1:0,8,e);let o=n&&!this.hugMode||this.forceOpen?1:0;this.look=Xt(this.look,o,7,e),o&&this.firstLook&&(this.firstLook(),this.firstLook=null),this.sway+=e*(s?7:1.2);let a=this.bag,l=(this.inXR?.8:.55)*(1+this.heavy*.2),c=mm.lerpVectors(this.restPos,this.lookPos,this.look);if(this.hugK>.001&&c.lerp(gm.set(0,-.36,-.22),this.hugK),c.y+=Math.sin(this.sway)*(s?.012:.004)*(1+this.heavy*2)*(1-this.look)-this.heavy*.06-this._stow*.5,c.x+=Math.cos(this.sway*.5)*(s?.008:.002)*(1-this.look),Jo.setFromEuler(mf.set(it(.08,.95,this.look),it(-.25,0,this.look),Math.sin(this.sway*.5)*.04*(1-this.look))),this.takeK<1){this.takeK=Math.min(1,this.takeK+e/.45);let u=wt(this.takeK);a.position.lerpVectors(this.takeFrom,c,u),a.quaternion.slerpQuaternions(this.takeFromQ,Jo,u),a.scale.setScalar(it(1,l,u))}else a.position.copy(c),a.quaternion.copy(Jo),a.scale.setScalar(l);Wa(a,this.look),this.hands&&!this.inXR&&this._stow<.5&&this.stow<.5&&(this.hugK>.35?(this.hands.set(1,{key:"hugR",mode:"obj",obj:a,pos:new b(.12,.2,.12),rot:new Ft(-.9,.5,-.6,"YXZ"),rotSpace:"cam",pose:"grip",blend:.2}),this.hands.set(0,{key:"hugL",mode:"obj",obj:a,pos:new b(-.12,.22,.14),rot:new Ft(-.9,-.5,.6,"YXZ"),rotSpace:"cam",pose:"grip",blend:.2}),this._leftOnBag=!0):this.look>.35?(this.hands.set(1,{key:"bag-rimR",mode:"obj",obj:a,pos:new b(.2,.36,.05),rot:mi.rim(1),rotSpace:"cam",pose:"pinch",blend:.25}),this.hands.set(0,{key:"bag-rimL",mode:"obj",obj:a,pos:new b(-.2,.36,.05),rot:mi.rim(-1),rotSpace:"cam",pose:"pinch",blend:.25}),this._leftOnBag=!0):(this.hands.set(1,{key:"bag-neck",mode:"obj",obj:a,pos:new b(.13,.31,.03),rot:mi.carry(1),rotSpace:"cam",pose:"grip",blend:.25}),this._leftOnBag&&(this.hands.hide(0),this._leftOnBag=!1)))}worldMouth(e){return this.bag.localToWorld(e.set(0,.2,0))}};function zr(i,e,t){let n=i*374761393+e*668265263+t*982451653|0;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967296}function SE(i,e,t,n){let s=Math.floor(i),r=Math.floor(e),o=i-s,a=e-r,l=n||1e9,c=m=>(m%l+l)%l,u=zr(c(s),c(r),t),h=zr(c(s+1),c(r),t),d=zr(c(s),c(r+1),t),f=zr(c(s+1),c(r+1),t),g=o*o*(3-2*o),v=a*a*(3-2*a);return u+(h-u)*g+(d-u)*v+(u-h-d+f)*g*v}function Hn(i,e,{scale:t=4,oct:n=5,seed:s=1,gain:r=.5}={}){let o=t,a=.5,l=0,c=0;for(let u=0;u<n;u++)l+=a*SE(i*o,e*o,s+u*17,o),c+=a,o*=2,a*=r;return l/c}var $a=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),ns=(i,e,t)=>{let n=$a((t-i)/(e-i));return n*n*(3-2*n)},ds=(i,e,t)=>i+(e-i)*t,gf=1,fh=()=>(gf=gf*16807%2147483647,(gf-1)/2147483646);function is(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function ss(i,{srgb:e=!0,repeat:t=[1,1],aniso:n=8}={}){let s=new Qt(i);return s.wrapS=s.wrapT=Ln,s.repeat.set(t[0],t[1]),s.anisotropy=n,e&&(s.colorSpace=Dt),s.generateMipmaps=!0,s.minFilter=Rs,s}function Ko(i,e,t,{normalStrength:n=2.5}={}){let s=is(i,e),r=is(i,e),o=is(i,e),a=s.getContext("2d").createImageData(i,e),l=r.getContext("2d").createImageData(i,e),c=o.getContext("2d").createImageData(i,e),u=new Float32Array(i*e),h={r:0,g:0,b:0,h:0,ro:.8};for(let d=0;d<e;d++)for(let f=0;f<i;f++){h.h=.5,h.ro=.85,t(f/i,d/e,h,f,d);let g=d*i+f,v=g*4;a.data[v]=$a(h.r)*255,a.data[v+1]=$a(h.g)*255,a.data[v+2]=$a(h.b)*255,a.data[v+3]=255;let m=$a(h.ro)*255;l.data[v]=l.data[v+1]=l.data[v+2]=m,l.data[v+3]=255,u[g]=h.h}for(let d=0;d<e;d++)for(let f=0;f<i;f++){let g=u[d*i+(f-1+i)%i],v=u[d*i+(f+1)%i],m=u[(d-1+e)%e*i+f],p=u[(d+1)%e*i+f],M=(g-v)*n,x=(p-m)*n,_=1,S=Math.hypot(M,x,_);M/=S,x/=S,_/=S;let P=(d*i+f)*4;c.data[P]=(M*.5+.5)*255,c.data[P+1]=(x*.5+.5)*255,c.data[P+2]=(_*.5+.5)*255,c.data[P+3]=255}return s.getContext("2d").putImageData(a,0,0),r.getContext("2d").putImageData(l,0,0),o.getContext("2d").putImageData(c,0,0),{col:s,rgh:r,nrm:o}}function $o(i,e=[1,1],t={}){return{map:ss(i.col,{repeat:e}),roughnessMap:ss(i.rgh,{srgb:!1,repeat:e}),normalMap:ss(i.nrm,{srgb:!1,repeat:e}),...t}}function jo(i,e,t,n=0,s=0){let r={};for(let o of["map","roughnessMap","normalMap"])if(i[o]){let a=i[o].clone();a.repeat.set(e,t),a.offset.set(n,s),a.needsUpdate=!0,r[o]=a}return r}function ym(){return $o(Ko(768,768,(s,r,o)=>{let a=(1-r)*4,l=r*34,c=Math.floor(l),u=c%2*.5,h=s*11+u,d=Math.floor(h),f=h-d,g=l-c,v=Math.min(f,1-f)*3.6<.09||Math.min(g,1-g)<.09,m=zr(d%11,c,7),p=Hn(s,r,{scale:32,oct:3,seed:3}),M=ds(.3,.46,m)+(p-.5)*.14,x=M*ds(.5,.62,zr(d,c,9)),_=M*.45,S=M,P=x,T=_,U=.55+(p-.5)*.1,Y=.9;v&&(S=.34,P=.31,T=.27,U=.38);let y=Hn(s,r,{scale:3,oct:6,seed:11})+ns(1.6,0,a)*.12-ns(3,4,a)*.06;if(y<.6){let Z=ns(.6,.54,y),K=Hn(s,r,{scale:6,oct:5,seed:21}),j=ns(.62,.9,Hn(s*1,r*.12,{scale:9,oct:3,seed:31}))*ns(1.5,3.8,a),xe=.62,te=.58,he=.49;a<1.32&&(xe=.33,te=.52,he=.47,a>1.27&&(xe=.2,te=.32,he=.3));let oe=(K-.5)*.22+ns(.5,0,a)*.22+ns(.62,.85,Hn(s,r,{scale:14,oct:3,seed:23}))*.08;xe=xe*(1-oe)-j*.09,te=te*(1-oe)-j*.08,he=he*(1-oe*1.1)-j*.06,S=ds(S,xe,Z),P=ds(P,te,Z),T=ds(T,he,Z),U=ds(U,.72+(K-.5)*.06,Z),Y=a<1.32?.62:.88,Z<.9&&(S*=.85,P*=.85,T*=.85)}o.r=S,o.g=P,o.b=T,o.h=U,o.ro=Y},{normalStrength:6}))}function vm(){return $o(Ko(768,768,(i,e,t)=>{let n=Hn(i,e,{scale:4,oct:5,seed:41}),s=Hn(i,e,{scale:24,oct:3,seed:43}),r=ns(.58,.72,Hn(i,e,{scale:3,oct:4,seed:47})),o=Math.abs(Hn(i,e,{scale:5,oct:4,seed:51})-.5)<.006?1:0,a=Math.abs(Hn(i,e,{scale:9,oct:3,seed:53})-.5)<.004?1:0,l=.36+(n-.5)*.22+(s-.5)*.06;l*=1-r*.22;let c=Math.max(o,a*.7);t.r=l*1.04-c*.08,t.g=l*.98-c*.08,t.b=l*.88-c*.07,t.h=.5+(s-.5)*.15-c*.4,t.ro=.92-r*.45},{normalStrength:3}))}function _m(){return $o(Ko(512,512,(i,e,t)=>{let n=Hn(i,e,{scale:4,oct:6,seed:61}),s=ns(.55,.75,Hn(i,e,{scale:2,oct:5,seed:63})),r=.55+(n-.5)*.2-s*.25;t.r=r,t.g=r*.95,t.b=r*.85,t.h=.5+(n-.5)*.2,t.ro=.95},{normalStrength:2}))}function ja(i=[.42,.28,.17],e=71){return $o(Ko(512,512,(t,n,s)=>{let r=Math.floor(n*4),o=n*4-r,a=zr(r,0,e),l=Math.sin((t*6+Hn(t,n*.25,{scale:4,oct:4,seed:e+r})*3)*18+a*10)*.5+.5,c=Hn(t,n,{scale:8,oct:3,seed:e+5}),u=Hn(t,n,{scale:6,oct:5,seed:e+9}),h=o<.025||o>.975,d=.75+l*.2+(a-.5)*.25-ns(.7,.85,c)*.3+(u-.5)*.2;h&&(d*=.35),s.r=i[0]*d,s.g=i[1]*d,s.b=i[2]*d,s.h=h?.2:.5+l*.06,s.ro=.7+(1-u)*.2},{normalStrength:2.5}))}function Mm(i=81){return $o(Ko(512,512,(e,t,n)=>{let s=Hn(e,t,{scale:5,oct:6,seed:i}),r=ns(.45,.7,Hn(e,t,{scale:3,oct:6,seed:i+2})),o=Math.sin(e*Math.PI*2*14)*.5+.5,a=.3,l=.4,c=.42;n.r=ds(a,.45,r)*(.8+s*.3),n.g=ds(l,.24,r)*(.8+s*.3),n.b=ds(c,.12,r)*(.8+s*.3),n.h=o*.6+s*.1,n.ro=ds(.55,.95,r)},{normalStrength:4}))}var xm=[["#1f3a68","#e8dcc0","#b5442e"],["#a8322a","#f0d9a8","#2a2018"],["#d9a22a","#7a2a1e","#f4ead0"],["#2f6b4f","#f1e4c4","#c4572e"],["#c45a7a","#f6e6d2","#3a4a7a"],["#e9e1cf","#6a7d9a","#b08a4a"]];function gi(i,e=0,t=256){let[n,s,r]=xm[e%xm.length],o=is(t,t),a=o.getContext("2d");a.fillStyle=n,a.fillRect(0,0,t,t);let l=t;if(i==="buti"){a.fillStyle=s;for(let u=0;u<8;u++)for(let h=0;h<8;h++){let d=(h+u%2*.5)*l/8,f=u*l/8+l/16;a.beginPath(),a.ellipse(d,f,l/60,l/34,.6,0,7),a.fill(),a.fillStyle=r,a.beginPath(),a.arc(d+l/70,f-l/50,l/110,0,7),a.fill(),a.fillStyle=s}}else if(i==="stripe")for(let u=0;u<16;u++)a.fillStyle=u%4===0?r:s,u%2===0&&a.fillRect(u*l/16,0,l/40,l);else if(i==="check"){a.globalAlpha=.55,a.fillStyle=s;for(let u=0;u<8;u++)a.fillRect(u*l/8,0,l/20,l),a.fillRect(0,u*l/8,l,l/20);a.globalAlpha=.7,a.fillStyle=r;for(let u=0;u<4;u++)a.fillRect(u*l/4+l/40,0,l/120,l),a.fillRect(0,u*l/4+l/40,l,l/120);a.globalAlpha=1}else if(i==="paisley")for(let u=0;u<4;u++)for(let h=0;h<4;h++){let d=(h+u%2*.5)*l/4+l/8,f=u*l/4+l/8;a.save(),a.translate(d,f),a.rotate(.7),a.fillStyle=s,a.beginPath(),a.moveTo(0,-l/12),a.bezierCurveTo(l/14,-l/14,l/14,l/20,0,l/14),a.bezierCurveTo(-l/16,l/18,-l/22,-l/30,0,-l/12),a.fill(),a.fillStyle=r,a.beginPath(),a.arc(0,l/40,l/40,0,7),a.fill(),a.restore()}else if(i==="border"){a.fillStyle=s,a.fillRect(0,l*.78,l,l*.14),a.fillStyle=r;for(let u=0;u<16;u++)a.beginPath(),a.moveTo(u*l/16,l*.78),a.lineTo(u*l/16+l/32,l*.72),a.lineTo(u*l/16+l/16,l*.78),a.fill()}let c=a.getImageData(0,0,l,l);for(let u=0;u<l;u++)for(let h=0;h<l;h++){let d=(u*l+h)*4,f=((h+u)%2?.94:1.04)*(.92+.16*Hn(h/l,u/l,{scale:8,oct:3,seed:e+90}));c.data[d]*=f,c.data[d+1]*=f,c.data[d+2]*=f}return a.putImageData(c,0,0),ss(o)}function Em(){let e=is(512,512),t=e.getContext("2d");t.fillStyle="#8a7a5e",t.fillRect(0,0,512,512),[[40,60,180,150,"#5a6a7e"],[270,240,170,190,"#8a4a3a"],[90,330,140,120,"#a08a4a"]].forEach(([r,o,a,l,c])=>{t.fillStyle=c,t.save(),t.translate(r+a/2,o+l/2),t.rotate((fh()-.5)*.15),t.fillRect(-a/2,-l/2,a,l),t.strokeStyle="#e8dcc0",t.lineWidth=2,t.setLineDash([7,6]),t.strokeRect(-a/2+6,-l/2+6,a-12,l-12),t.restore()});let s=t.getImageData(0,0,512,512);for(let r=0;r<512;r++)for(let o=0;o<512;o++){let a=(r*512+o)*4,l=Hn(o/512,r/512,{scale:5,oct:5,seed:99}),c=((o+r)%2?.93:1.03)*(.75+.4*l);s.data[a]=s.data[a]*c+20*l,s.data[a+1]=s.data[a+1]*c+18*l,s.data[a+2]=s.data[a+2]*c+12*l}return t.putImageData(s,0,0),ss(e)}function bm(){let e=is(256,256),t=e.getContext("2d");t.fillStyle="#efe6d0",t.beginPath(),t.arc(256/2,256/2,256/2-4,0,7),t.fill(),t.strokeStyle="#2a2018",t.lineWidth=10,t.stroke(),t.fillStyle="#2a2018",t.font="bold 26px Georgia",t.textAlign="center",t.textBaseline="middle";for(let s=1;s<=12;s++){let r=s/12*Math.PI*2;t.fillText(String(s),256/2+Math.sin(r)*92,256/2-Math.cos(r)*92)}let n=t.createRadialGradient(256/2,256/2,30,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(60,40,20,.35)"),t.fillStyle=n,t.fillRect(0,0,256,256),ss(e)}function xf(){let t=is(256,384),n=t.getContext("2d");n.fillStyle="#f2e8d2",n.fillRect(0,0,256,384);let s=n.createLinearGradient(0,0,0,230);s.addColorStop(0,"#f0a040"),s.addColorStop(1,"#c8402a"),n.fillStyle=s,n.fillRect(14,14,228,216),n.fillStyle="rgba(255,240,200,.85)",n.beginPath(),n.arc(256/2,110,58,0,7),n.fill(),n.fillStyle="#7a2a1e";for(let r=0;r<16;r++){let o=r/16*6.283;n.fillRect(256/2+Math.cos(o)*72-3,110+Math.sin(o)*72-3,6,6)}n.fillStyle="#2a4a3a",n.fillRect(14,196,228,34),n.fillStyle="#2a2018",n.font="bold 20px Georgia",n.textAlign="center",n.fillText("OCTOBER  2026",256/2,262),n.font="13px monospace";for(let r=0;r<5;r++)for(let o=0;o<7;o++){let a=r*7+o-3;a>0&&a<32&&(n.fillStyle=o===0?"#b5442e":"#2a2018",n.fillText(String(a),30+o*33,290+r*19))}return ss(t)}function wm(){let t=is(256,180),n=t.getContext("2d");n.fillStyle="#ece0c2",n.fillRect(0,0,256,180),n.strokeStyle="rgba(80,90,140,.5)",n.lineWidth=1;for(let s=18;s<180;s+=11)n.beginPath(),n.moveTo(0,s),n.lineTo(256,s),n.stroke();n.strokeStyle="rgba(170,40,40,.6)",n.beginPath(),n.moveTo(40,0),n.lineTo(40,180),n.moveTo(256/2,0),n.lineTo(256/2,180),n.stroke(),n.fillStyle="#2a2a4a",n.font="9px monospace";for(let s=26;s<180;s+=11)fh()<.8&&n.fillText("\u2014 "+(Math.floor(fh()*9)+1)+" pcs \xB7\xB7 "+(Math.floor(fh()*4)+1),46,s);return n.fillStyle="rgba(0,0,0,.15)",n.fillRect(256/2-3,0,6,180),ss(t)}function Sm(){let t=is(1024,512),n=t.getContext("2d");n.fillStyle="#1e2e26",n.fillRect(0,0,1024,512),n.strokeStyle="#6a4a2a",n.lineWidth=26,n.strokeRect(0,0,1024,512),n.fillStyle="rgba(240,236,220,.9)",n.textAlign="center",n.font="86px Georgia",n.fillText("A   B   C   D   E",1024/2,150),n.font="92px serif",n.fillText("\u0915   \u0916   \u0917   \u0918",1024/2,290),n.font="italic 54px Georgia",n.fillText("1 + 1 = 2",1024/2,410);let s=n.getImageData(0,0,1024,512);for(let r=0;r<s.data.length;r+=4){let o=.85+Math.random()*.3;s.data[r]*=o,s.data[r+1]*=o,s.data[r+2]*=o}return n.putImageData(s,0,0),ss(t)}function yf(){let t=is(128,160),n=t.getContext("2d");n.fillStyle="#efe8d6",n.fillRect(0,0,128,160),n.strokeStyle="rgba(80,110,170,.5)";for(let s=16;s<160;s+=10)n.beginPath(),n.moveTo(0,s),n.lineTo(128,s),n.stroke();return n.fillStyle="#3a3a5a",n.font="13px Georgia",n.fillText("a  b  c  d",10,35),n.fillText("\u0915  \u0916  \u0917",10,55),n.fillText("my name",10,85),ss(t)}function vf(i=64){let e=is(i,i),t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i),ss(e,{srgb:!1})}function Tm(){return $o(Ko(512,512,(i,e,t)=>{let n=Hn(i,e,{scale:6,oct:5,seed:131}),s=e>.86?1:0;t.r=s?.62:.93-(n-.5)*.12,t.g=s?.32:.8-(n-.5)*.12,t.b=s?.22:.56-(n-.5)*.12,t.h=.5+n*.1,t.ro=.9}))}var Ze={minX:-8,maxX:8,minZ:-6,maxZ:6,h:4},Cm=[1.25,-1.5,-4.25],Pm=[-6.2,-3.6,-1,1.6],fs=Pm[0],os=Cm[0],rs=1,Mf=-.17,ii={x:fs+Mf-.2,z:os+.82},bt={z0:.7,z1:3.1,y0:1.25,y1:2.65},gt={z0:3.2,z1:4.6,h:2.6},Rm=4,Am=[1.16,1.22,1.12,1.26,1.18,1.14,1.24,1.2,1.1,1.22,1.15,1.19],_f=4.2,lr=new b(1,-.62,.24).normalize();function Im(i){let{scene:e,audio:t,interactor:n,player:s,ui:r,thread:o,hands:a,bagCtl:l,lights:c}=i,u=I=>Math.atan2(Math.sin(I),Math.cos(I)),h=new nt;h.name="sweatshop",e.add(h);let d=new b,f=new b,g=new b,v={wall:ym(),floor:vm(),ceil:_m(),wood:ja(),woodDark:ja([.3,.19,.12],77),rust:Mm(),fab:[["buti",0],["stripe",1],["check",2],["paisley",3],["border",4],["buti",5],["check",0],["paisley",1],["stripe",3],["border",2]].map(([I,Q])=>gi(I,Q))},m=new et({...v.wood,roughness:1}),p=new et({...v.woodDark,roughness:1}),M=v.fab.map(I=>new et({map:I,roughness:.95})),x=Le(1907481,{roughness:.5,metalness:.6}),_=()=>Le(12105908,{metalness:.9,roughness:.25}),S=new rn,P=Ze.maxX-Ze.minX,T=Ze.maxZ-Ze.minZ,U=Ze.h,Y=new et({...jo(v.floor,P/4,T/4)}),y=hn(new mt(P,T),Y);y.rotation.x=-Math.PI/2,y.castShadow=!1,h.add(y);let A=new et({...jo(v.ceil,P/4,T/4),side:Fi}),Z=hn(new mt(P,T),A,0,U,0,h);Z.rotation.x=Math.PI/2;function K(I,Q,be,tt,qe,jt,Ut){let Ot=new et({...jo(v.wall,I/4,(be-Q)/4,tt/4,Q/4)}),Vs=.06,He=Q<=0?-.05:Q,rt=be>=Ze.h?Ze.h+.05:be,xt=hn(new mt(I+Vs*2,rt-He),Ot,qe,(He+rt)/2,jt,h);return xt.rotation.y=Ut,xt.castShadow=!1,xt}K(P,0,U,0,0,Ze.minZ,0),K(P,0,U,1.3,0,Ze.maxZ,Math.PI);let j=(I,Q,be,tt)=>K(Q-I,be,tt,I+6,Ze.minX,(I+Q)/2,Math.PI/2);j(Ze.minZ,Ze.maxZ,0,bt.y0),j(Ze.minZ,Ze.maxZ,bt.y1,U),j(Ze.minZ,bt.z0,bt.y0,bt.y1),j(bt.z1,Ze.maxZ,bt.y0,bt.y1);let xe=(I,Q,be,tt)=>K(Q-I,be,tt,6-Q,Ze.maxX,(I+Q)/2,-Math.PI/2);xe(Ze.minZ,gt.z0,0,U),xe(gt.z1,Ze.maxZ,0,U),xe(gt.z0,gt.z1,gt.h,U);let te=new yt({colorWrite:!1,depthWrite:!1}),he=(I,Q,be,tt,qe,jt)=>{let Ut=new Ie(new At(I,Q,be),te);return Ut.position.set(tt,qe,jt),Ut.castShadow=!0,h.add(Ut),Ut},oe=bt.y0-.04,_e=bt.y1+.04,Pe=bt.z0-.04,Re=bt.z1+.04;he(.3,oe,T+1,Ze.minX-.15,oe/2,0),he(.3,U-_e+.3,T+1,Ze.minX-.15,(_e+U+.3)/2,0),he(.3,_e-oe,Pe-Ze.minZ+.5,Ze.minX-.15,(oe+_e)/2,(Ze.minZ-.5+Pe)/2),he(.3,_e-oe,Ze.maxZ+.5-Re,Ze.minX-.15,(oe+_e)/2,(Re+Ze.maxZ+.5)/2),he(P+1,.3,T+1,0,U+.15,0),he(P+1,U,.3,0,U/2,Ze.minZ-.15),he(P+1,U,.3,0,U/2,Ze.maxZ+.15),he(.3,U,gt.z0-Ze.minZ+.3,Ze.maxX+.15,U/2,(gt.z0+Ze.minZ-.3)/2),he(.3,U,Ze.maxZ-gt.z1+.3,Ze.maxX+.15,U/2,(gt.z1+Ze.maxZ+.3)/2),he(.3,U-gt.h,gt.z1-gt.z0,Ze.maxX+.15,(U+gt.h)/2,(gt.z0+gt.z1)/2);let Be=new et({...jo(v.wall,.14,1)}),at=[[-4.9,.12],[.3,.12],[-2.3,-2.9],[3.1,.12],[5.6,-2.9]];at.forEach(([I,Q])=>S.add(ne.box(.5,U,.5),Be,I,U/2,Q));let ce=Le(3814186,{roughness:.9});for(let I=-6;I<=6;I+=3)S.add(ne.box(.28,.32,T),ce,I,U-.16,0);S.add(ne.cyl(.07,.07,P,10),Le(4864556,{metalness:.5,roughness:.55}),0,3.55,5.6,0,0,Math.PI/2),S.add(ne.cyl(.045,.045,T,8),Le(3813414,{metalness:.4,roughness:.6}),-7.75,3.35,0,Math.PI/2,0,0),S.add(ne.cyl(.03,.03,U,6),Le(2761760),7.8,U/2,-5.6);let Ee=Le(789516,{roughness:.6}),ye=(()=>{let I=7;return()=>(I=I*16807%2147483647,(I-1)/2147483646)})();for(let I=0;I<16;I++){let Q=-7.5+ye()*15,be=-5.5+ye()*11;S.add(qo(new b(Q,3.82,be),new b(Q+(ye()-.5)*6,3.82,be+(ye()-.5)*5),.2+ye()*.4,.007),Ee)}let Ce=Ze.minX,De=(bt.z0+bt.z1)/2,we=(bt.y0+bt.y1)/2,ke=bt.z1-bt.z0,Ye=bt.y1-bt.y0,k=Le(2826265,{roughness:.9,flatShading:!0}),C=new rn;C.add(ne.box(.22,.09,ke+.2),k,Ce+.02,bt.y0-.045,De),C.add(ne.box(.22,.09,ke+.2),k,Ce+.02,bt.y1+.045,De),C.add(ne.box(.22,Ye+.18,.09),k,Ce+.02,we,bt.z0-.045),C.add(ne.box(.22,Ye+.18,.09),k,Ce+.02,we,bt.z1+.045),S.add(ne.box(.18,.05,ke+.36),Le(5919302,{roughness:.9}),Ce+.1,bt.y0-.11,De);for(let I=1;I<9;I++)S.add(ne.cyl(.013,.013,Ye,6),x,Ce-.06,we,bt.z0+I*ke/9);C.add(ne.box(.03,.04,ke),x,Ce-.06,we+.25,De),C.add(ne.box(.05,.04,ke),k,Ce-.02,we,De),C.add(ne.box(.05,Ye,.04),k,Ce-.02,we,De),C.build(h,{cast:!0,receive:!1});let ie=new et({color:12173480,transparent:!0,opacity:.22,roughness:.15,metalness:0,depthWrite:!1});[[0,1],[1,1]].forEach(([I,Q])=>{let be=hn(new mt(ke/2-.05,Ye/2-.05),ie,Ce-.03,bt.y0+(Q+.5)*Ye/2,bt.z0+(I+.5)*ke/2,h);be.rotation.y=Math.PI/2,be.castShadow=!1});let $=ja([.55,.45,.32],91);S.add(ne.box(.02,Ye/2-.04,ke/2+.1),new et({...$}),Ce+.06,bt.y0+Ye*.75,bt.z0+ke*.75,.03,0,0);let J=new nt;h.add(J);let ue=new ve(1,.68,.46),pe=(I,Q=.35,be={})=>new et({color:I,roughness:.9,emissive:new ve(I).multiply(ue).multiplyScalar(Q*.5),flatShading:!0,fog:!1,...be}),G=hn(new mt(40,40),pe(13150328,.25),-28,.02,2,J);G.rotation.x=-Math.PI/2;let w=Tm(),E=new et({...jo(w,6,1),emissive:6964784,emissiveIntensity:.32,fog:!1}),F=new rn;F.add(ne.box(1,8,26),E,-24,4,2);for(let I=-5;I<=5;I++)F.add(ne.box(.6,3.2,.5),pe(15721156,.45),-23.2,1.6,2+I*2.2),F.add(ne.box(.6,3,.5),pe(15721156,.45),-23.2,5.6,2+I*2.2);F.add(ne.box(1.2,.35,26),pe(11030574,.4),-23,3.35,2),F.add(ne.box(1.4,.4,27),pe(10111530,.4),-23,8.1,2);for(let I=-5;I<=4;I++)F.add(ne.box(.2,1.6,1),pe(3828362,.2),-23.4,5.4,3.1+I*2.2);F.add(ne.box(.4,.45,30),pe(14207144,.35),-10.5,.22,2);let re=pe(5914672,.2),B=pe(4880954,.35),me=pe(6982202,.35);[[-17,-3.5,1.3],[-19,6,1.6],[-12.5,10,1.2],[-12,-7,1.4]].forEach(([I,Q,be])=>{F.add(ne.cyl(.18*be,.25*be,3*be,6),re,I,1.5*be,Q),F.add(new wi(1.6*be,0),B,I,3.6*be,Q),F.add(new wi(1.1*be,0),me,I+.8*be,3.2*be,Q+.6*be)}),F.add(ne.cyl(.05,.05,7,6),pe(14540253,.4),-20,3.5,-1),[15239226,16052454,3111482].forEach((I,Q)=>F.add(ne.box(.03,.3,.9),pe(I,.6),-20,6.6-Q*.3,-.5)),F.build(J,{cast:!0,receive:!0});let Ne=(()=>{let I=document.createElement("canvas");I.width=4,I.height=256;let Q=I.getContext("2d"),be=Q.createLinearGradient(0,0,0,256);be.addColorStop(0,"#2e2a44"),be.addColorStop(.45,"#6a4a5a"),be.addColorStop(.78,"#c8784e"),be.addColorStop(1,"#f0a868"),Q.fillStyle=be,Q.fillRect(0,0,4,256);let tt=new Qt(I);return tt.colorSpace=Dt,tt})(),Ue=new yt({map:Ne,side:pn,fog:!1,toneMapped:!0});Ue.color.setScalar(1.15);let V=new Ie(new en(45,24,12,0,Math.PI*2,0,Math.PI/2),Ue);V.position.set(-20,0,2),J.add(V);let q=[];for(let I=0;I<9;I++){let Q=_n({child:!0,top:16052970,bottom:I%2?2767466:6957626,female:I%2===1,skin:[9067068,8014896,10119236][I%3],scale:1.3});Q.traverse(qe=>{qe.material&&qe.material.emissive&&(qe.material=qe.material.clone(),qe.material.fog=!1,qe.material.emissive.copy(qe.material.color).multiply(ue).multiplyScalar(.2))});let be=-17+I%3*1.4,tt=-2+Math.floor(I/3)*3.2;Q.userData.c={cx:be,cz:tt,r:.8+I%4*.5,sp:(.7+I%3*.25)*(I%2?1:-1),a:I},J.add(Q),q.push(Q)}let D=_n({female:!0,top:3107663,bottom:3107663,scarf:14262826,scale:1.3});D.traverse(I=>{I.material&&I.material.emissive&&(I.material=I.material.clone(),I.material.emissive.copy(I.material.color).multiply(ue).multiplyScalar(.2))}),D.position.set(-21.5,0,1.5),D.rotation.y=Math.PI/2,J.add(D);let fe=new Lt;fe.position.set(Ce,we,De),h.add(fe);let Ve=new Uo(16753242,_f);Ve.position.copy(new b(0,.8,0).addScaledVector(lr,-18)),Ve.target.position.set(0,.8,0),Ve.castShadow=!0,Ve.shadow.mapSize.set(2048,2048),Object.assign(Ve.shadow.camera,{left:-10.5,right:10.5,top:10.5,bottom:-10.5,near:4,far:36}),Ve.shadow.bias=-4e-4,Ve.shadow.normalBias=.02,Ve.shadow.radius=3,e.add(Ve,Ve.target);let ct=[],Oe={0:5,1:1.9,3:2.8,4:.9},ee=new Wn({map:vf(),color:new ve(1,.6,.28).multiplyScalar(.45),blending:vn,depthWrite:!1,transparent:!0,fog:!1}),st=new et({color:16769192,emissive:16756816,emissiveIntensity:5,roughness:.2}),Et=new et({color:4866614,roughness:.35,metalness:.1}),X=Le(3813414,{metalness:.6,roughness:.4});[[-6.2,.6,1],[-1,-2.1,1],[-3.6,-4.6,0],[5,4.2,1],[4.6,-2,1],[1.6,.6,0]].forEach(([I,Q,be],tt)=>{let qe=1.2000000000000002;S.add(ne.cyl(.006,.006,qe,4),Ee,I,3.95-qe/2,Q),S.add(ne.cyl(.03,.035,.07,8),X,I,2.78,Q);let jt=hn(new en(.05,12,8),be?st.clone():Et,I,2.7,Q,h);if(jt.castShadow=!1,be){let Ot=new Nn(ee);Ot.position.set(I,2.7,Q),Ot.scale.setScalar(.28+.06*(Oe[tt]??2)),Ot.renderOrder=4,h.add(Ot)}let Ut=be?c.add({pos:new b(I,2.62,Q),color:16752720,intensity:Oe[tt]??2,distance:7,decay:1.8,space:"sweatshop"}):null;tt%2===0&&S.add(new bi(.22,.12,12,1,!0),Le(4872786,{metalness:.5,roughness:.5,side:Rt}),I,2.8,Q),Ut&&ct.push({L:Ut,base:Ut.intensity,glass:jt,flick:tt*1.7})});let We=c.add({pos:new b(3.5,3,-5.6),color:13625087,intensity:.55,distance:5,decay:1.8,space:"sweatshop"}),ge=hn(new Nt(.025,.025,1.2,8),new et({color:15267071,emissive:13625087,emissiveIntensity:6}),3.5,3.2,-5.92,h);ge.rotation.z=Math.PI/2,ge.castShadow=!1,S.add(ne.box(1.3,.06,.08),Le(14211280),3.5,3.24,-5.95);let Ae=9,Xe=.03,Ke=new Wt({uniforms:{uTime:{value:0},uK:{value:1},uSun:{value:lr.clone()},uSteps:{value:28}},transparent:!0,depthWrite:!1,depthTest:!0,blending:vn,side:pn,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform float uTime; uniform float uK; uniform vec3 uSun; uniform float uSteps; varying vec3 vW;
      const float WX = ${Ce.toFixed(3)}, Z0 = ${bt.z0.toFixed(3)}, Z1 = ${bt.z1.toFixed(3)}, Y0 = ${bt.y0.toFixed(3)}, Y1 = ${bt.y1.toFixed(3)};
      float h(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float n3(vec3 p){ vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(h(i), h(i+vec3(1,0,0)), f.x), mix(h(i+vec3(0,1,0)), h(i+vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i+vec3(0,0,1)), h(i+vec3(1,0,1)), f.x), mix(h(i+vec3(0,1,1)), h(i+vec3(1,1,1)), f.x), f.y), f.z); }
      // how much sun passes the window at window-plane point (z, y): bars, rails, mullion, the board, dirty glass
      float pass(float z, float y){
        float ww = Z1 - Z0, wh = Y1 - Y0, zc = (Z0 + Z1) * 0.5, yc = (Y0 + Y1) * 0.5;
        float u = (z - Z0) / ww * ${Ae.toFixed(1)}; float d = abs(fract(u + 0.5) - 0.5) * ww / ${Ae.toFixed(1)};
        float k = smoothstep(${(Xe*.5).toFixed(3)}, ${(Xe*.5+.012).toFixed(3)}, d);           // vertical bars (soft edge = soft penumbra)
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
      }`}),Mt=new nt;h.add(Mt);{let I=[];[bt.z0,bt.z1].forEach(jt=>[bt.y0,bt.y1].forEach(Ut=>{let Ot=new b(Ce,Ut,jt);I.push(Ot.clone(),Ot.clone().addScaledVector(lr,Ut/-lr.y))}));let Q=new Bi().setFromPoints(I);Q.min.y=.01,Q.min.x=Ce+.16;let be=Q.getSize(new b),tt=Q.getCenter(new b),qe=new Ie(new At(be.x,be.y,be.z),Ke);qe.position.copy(tt),qe.renderOrder=3,qe.frustumCulled=!1,Mt.add(qe)}let kt=900,dn=new Gt,se=new Float32Array(kt*3),$e=new Float32Array(kt);for(let I=0;I<kt;I++){if(I<kt*.6){let be=Math.random()*3.2,tt=bt.z0+Math.random()*ke,qe=bt.y0+Math.random()*Ye;se.set([Ce+lr.x*be,qe+lr.y*be,tt+lr.z*be],I*3)}else se.set([-7.5+Math.random()*15,Math.random()*3.6,-5.5+Math.random()*11],I*3);$e[I]=Math.random()}dn.setAttribute("position",new sn(se,3)),dn.setAttribute("seed",new sn($e,1));let O=new Wt({uniforms:{uTime:{value:0},uMap:{value:vf()},uSun:{value:lr},uPx:{value:1}},transparent:!0,depthWrite:!1,blending:vn,vertexShader:`attribute float seed; uniform float uTime; uniform vec3 uSun; uniform float uPx; varying float vB;
      void main(){
        vec3 p = position;
        p.x += sin(uTime*0.13 + seed*40.0)*0.25; p.y += sin(uTime*0.09 + seed*25.0)*0.2; p.z += cos(uTime*0.11 + seed*31.0)*0.25;
        // trace back along the sunlight to the window wall: are we inside the beam?
        float t = (p.x - (${Ce.toFixed(2)})) / uSun.x; vec3 w = p - uSun * t;
        float inB = step(${bt.z0.toFixed(2)}, w.z) * step(w.z, ${bt.z1.toFixed(2)}) * step(${bt.y0.toFixed(2)}, w.y) * step(w.y, ${bt.y1.toFixed(2)}) * step(0.0, t);
        vB = (0.06 + inB * 1.15) * smoothstep(0.35, 0.9, -(modelViewMatrix * vec4(p,1.0)).z);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = min(5.0, (0.004 + seed*0.006) * uPx * 420.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; varying float vB; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vec3(1.0,0.86,0.66)*vB*a, 1.0); }"}),Te=new cs(dn,O);Te.frustumCulled=!1,Te.renderOrder=4,h.add(Te);let ze=[],de=[],Je=[],ot=(I,Q,be,tt)=>Je.push({minX:I,maxX:Q,minZ:be,maxZ:tt});at.forEach(([I,Q])=>ot(I-.3,I+.3,Q-.3,Q+.3));let Rn={"0,1":{female:!0,top:11022890,bottom:11022890,scarf:14262826,skin:9067068},"0,2":{child:!0,top:6978970,bottom:3816010,skin:8014896},"1,0":{top:12103834,bottom:4866104,skin:7225896,cap:!0},"1,2":{female:!0,top:3107663,bottom:3107663,scarf:12868218,skin:10119236},"2,0":{female:!0,top:12868218,bottom:6957626,scarf:15327695,skin:8014896},"2,1":{top:5925502,bottom:2763312,skin:9067068},"2,2":{child:!0,female:!0,top:14262826,bottom:14262826,skin:10119236},"3,0":{female:!0,top:2046568,bottom:2046568,scarf:11879470,skin:7225896},"3,2":{top:8010282,bottom:3816010,skin:8014896}},on=null,Jt=null,Vt=null,Ni=[];Pm.forEach((I,Q)=>Cm.forEach((be,tt)=>{let qe=Q===0&&tt===0,jt=qe?0:(ye()-.5)*.06,Ut=new ft().compose(new b(I,rs,be),new En().setFromEuler(new Ft(0,jt,0)),new b(1,1,1)),Ot=Nr({wood:m,threadColor:[11879470,2046568,14262826,15327695][(Q+tt)%4],batch:qe?null:S,at:qe?null:Ut,headX:qe?Mf:0});if(Ot.position.set(I,rs,be),Ot.rotation.y=jt,h.add(Ot),ze.push({m:Ot,isPlayer:qe}),ot(I-.6,I+.6,be-.38,be+.38),qe){on=Ot,Ot.userData.speed=0;return}let Vs=Rn[Q+","+tt],He=ze.length,rt=1+He*3%5,xt=3+He%3;for(let Cn=0;Cn<rt;Cn++)S.add(ne.box(.32,.024,.2),M[(He+Cn)%M.length],I+.4+(ye()-.5)*.02,rs+.012+Cn*.024,be+.1+(ye()-.5)*.03,0,(ye()-.5)*.2,0);let Jn=I-.9,An=be+.35;S.add(Tn(.36,.36,.04,.02),p,Jn,.6,An),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Cn,Gs])=>S.add(ne.box(.035,.6,.035),p,Jn+Cn*.14,.3,An+Gs*.14));for(let Cn=0;Cn<xt;Cn++)S.add(ne.box(.34,.024,.26),M[(He*2+Cn)%M.length],Jn+(ye()-.5)*.02,.632+Cn*.024,An+(ye()-.5)*.02,0,(ye()-.5)*.25,0);ot(Jn-.16,Jn+.16,An-.16,An+.16);let vi=I,oa=be+.85;if(S.add(Tn(.38,.38,.05,.03),p,vi,.56,oa),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([Cn,Gs])=>S.add(ne.box(.04,.56,.04),p,vi+Cn*.15,.28,oa+Gs*.15,Gs*.06,0,-Cn*.06)),Vs){let Cn=_n({...Vs,child:!0,scale:Am[He%Am.length]});Vo(Cn,.62),Cn.position.set(vi,0,oa),Cn.rotation.y=Math.PI,h.add(Cn),Jc(Cn,new b(vi-.08,.14,be+.2),.12);let Gs=new Ie(new At(.32,.006,.24),M[(He*2+xt)%M.length]);Gs.castShadow=!0,h.add(Gs),de.push({p:Cn,m:Ot,pc:Gs,x:I,z:be,lx:Jn,lz:An,top:.632+xt*.024+.006,done:rs+.012+rt*.024+.006,off:He*2.3,cyc:8.6+He%5*.37}),ot(vi-.3,vi+.3,oa-.3,oa+.3)}else Ot.userData.speed=0})),S.add(Tn(.36,.34,.05,.03),p,ii.x,.5,ii.z),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([I,Q])=>S.add(ne.box(.04,.5,.04),p,ii.x+I*.14,.25,ii.z+Q*.13,Q*.06,0,-I*.06)),S.add(ne.box(.3,.025,.025),p,ii.x,.16,ii.z+.13),S.add(ne.box(.3,.025,.025),p,ii.x,.16,ii.z-.13),ot(ii.x-.2,ii.x+.2,ii.z-.19,ii.z+.19);let In=new nt;In.position.set(fs-.95,0,os+.35),h.add(In),S.add(Tn(.5,.5,.05,.03),p,In.position.x,.72,In.position.z),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([I,Q])=>S.add(ne.box(.045,.72,.045),p,In.position.x+I*.2,.36,In.position.z+Q*.2)),ot(fs-1.25,fs-.65,os+.05,os+.65),Jt=new nt,Jt.position.set(fs-.95,.77,os+.35),h.add(Jt);for(let I=0;I<7;I++){let Q=hn(new At(.36,.024,.28),M[I%M.length],(ye()-.5)*.03,.012+I*.024,(ye()-.5)*.03,Jt);Q.rotation.y=(ye()-.5)*.25,Ni.push(Q)}Vt=new nt,Vt.position.set(fs+.4,rs,os+.1),h.add(Vt);let an=hn(new At(.32,.006,.26),new et({map:v.fab[0],roughness:.95}),0,0,0,h);an.visible=!1;let Fn=new b(fs+Mf-.27,rs+.056,os+.02),Ge={x:5.15,z:4.5,w:1.9,d:.85,h:.84},L=new et({...ja([.5,.38,.26],93),roughness:1});S.add(Tn(Ge.w+.08,Ge.d+.06,.05,.02),p,Ge.x,Ge.h-.05,Ge.z),S.add(ne.box(Ge.w,Ge.h-.05,.03),L,Ge.x,(Ge.h-.05)/2,Ge.z-Ge.d/2+.015),[-1,1].forEach(I=>S.add(ne.box(.03,Ge.h-.05,Ge.d-.04),L,Ge.x+I*(Ge.w/2-.015),(Ge.h-.05)/2,Ge.z)),S.add(ne.box(Ge.w-.06,.03,Ge.d-.06),L,Ge.x,.12,Ge.z),S.add(ne.box(Ge.w+.02,.06,.02),Le(2760728),Ge.x,.03,Ge.z-Ge.d/2+.01),S.add(ne.box(.5,.4,.006),Le(6969924,{roughness:1}),Ge.x-.5,.55,Ge.z-Ge.d/2-.003),S.add(ne.box(.36,.3,.006),Le(5917240,{roughness:1}),Ge.x+.55,.78,Ge.z-Ge.d/2-.003),[-.55,.55].forEach(I=>{S.add(ne.box(.5,.1,.02),p,Ge.x+I,Ge.h-.12,Ge.z+Ge.d/2-.01),S.add(ne.box(.08,.02,.025),Le(9075290,{metalness:.6,roughness:.4}),Ge.x+I,Ge.h-.12,Ge.z+Ge.d/2+.005)});let H=new et({map:wm(),roughness:.9}),R=Ge.h+.001;S.add(ne.box(.46,.03,.34),Le(5905944),Ge.x-.3,R+.015,Ge.z-.05,0,.08,0),S.add(ne.box(.44,.008,.32),H,Ge.x-.3,R+.034,Ge.z-.05,0,.08,0),S.add(ne.cyl(.004,.004,.14,5),Le(1714794),Ge.x-.12,R+.045,Ge.z-.12,0,.5,Math.PI/2),S.add(ne.box(.24,.12,.17),Le(4872786,{metalness:.6,roughness:.45}),Ge.x+.4,R+.06,Ge.z+.05),S.add(ne.box(.25,.012,.18),Le(5925474,{metalness:.6,roughness:.4}),Ge.x+.4,R+.126,Ge.z+.05),S.add(ne.cyl(.03,.025,.085,10),new et({color:13144160,transparent:!0,opacity:.8,roughness:.15}),Ge.x+.12,R+.043,Ge.z+.22),S.add(ne.cyl(.04,.04,.006,10),Le(6969920),Ge.x+.7,R+.003,Ge.z-.15),S.add(ne.cyl(.002,.002,.16,4),_(),Ge.x+.7,R+.08,Ge.z-.15);for(let I=0;I<6;I++)S.add(ne.box(.08,.002,.06),Le(15261896),Ge.x+.7,R+.02+I*.012,Ge.z-.15,0,I*.7,0);S.add(ne.box(.26,.012,.16),p,Ge.x-.75,R+.006,Ge.z+.15,0,-.2,0);for(let I=0;I<4;I++)for(let Q=0;Q<6;Q++)S.add(new en(.009,6,4),Le([11879470,14262826][I%2]),Ge.x-.85+Q*.03+(Q>2?.04:0),R+.02,Ge.z+.1+I*.035);for(let I=0;I<8;I++)S.add(ne.box(.32,.022,.2),M[I%M.length],Ge.x+.05,R+.011+I*.022,Ge.z-.22,0,(ye()-.5)*.2,0);S.add(ne.box(1.25,.05,.09),Le(14211280),Ge.x,2.62,Ge.z-.1),[-.55,.55].forEach(I=>S.add(ne.cyl(.004,.004,1.3,4),Ee,Ge.x+I,3.3,Ge.z-.1));let z=hn(new Nt(.022,.022,1.15,8),new et({color:15267071,emissive:13625087,emissiveIntensity:4}),Ge.x,2.585,Ge.z-.1,h);z.rotation.z=Math.PI/2,z.castShadow=!1,ot(Ge.x-Ge.w/2-.05,Ge.x+Ge.w/2+.05,Ge.z-Ge.d/2-.05,Ge.z+Ge.d/2);let N=new et({map:xf(),roughness:.9}),le=hn(new mt(.38,.56),N,Ge.x-.6,2,Ze.maxZ-.01,h);le.rotation.y=Math.PI,le.castShadow=!1;let W=_n({top:14209728,bottom:3816e3,skin:8016438,mustache:!0,belly:.035,outfit:"shirt",sleeves:"full",glasses:!0,seed:41,scale:1.34}),ae={x:Ge.x+.15,z:5.38,seat:.48};{let I=p;S.add(Tn(.46,.44,.045,.02),I,ae.x,ae.seat-.02,ae.z),[[-1,-1],[1,-1]].forEach(([Q,be])=>S.add(ne.box(.045,ae.seat-.04,.045),I,ae.x+Q*.19,(ae.seat-.04)/2,ae.z+be*.18)),[-1,1].forEach(Q=>S.add(ne.box(.05,1.02,.05),I,ae.x+Q*.19,.51,ae.z+.2,-.06,0,0)),[.72,.86,.98].forEach(Q=>S.add(ne.box(.4,Q>.95?.08:.04,.025),I,ae.x,Q,ae.z+.2+(Q-.5)*.06,-.06,0,0)),S.add(ne.box(.38,.03,.03),I,ae.x,.18,ae.z-.18),S.add(ne.box(.03,.03,.36),I,ae.x-.19,.16,ae.z),S.add(ne.box(.03,.03,.36),I,ae.x+.19,.16,ae.z),ot(ae.x-.26,ae.x+.26,ae.z-.24,ae.z+.28)}W.position.set(ae.x,0,ae.z),W.rotation.y=Math.PI,h.add(W),Vo(W,ae.seat+.1),Jc(W,new b(ae.x-.1,.08,ae.z-.45),.07);let Fe={hip:W.userData.hipBase,knee:W.userData.kneeBase,hy:(ae.seat+.1)/W.scale.y};W.userData.standK=0,W.userData.stand=!1;let lt=new b,ut=[2.75,2.25,1.75,1.25],je=1.62;S.add(ne.box(.04,.1,2),p,Ze.maxX-.02,je+.02,2),ut.forEach(I=>{S.add(ne.cyl(.011,.008,.11,6),x,Ze.maxX-.08,je,I,0,0,Math.PI/2-.5),S.add(ne.cyl(.008,.008,.04,5),x,Ze.maxX-.13,je+.025,I)});let Ct=[["check",0,9079418],["stripe",2,11049594],["buti",4,10128010]].map(([I,Q,be],tt)=>{let qe=eh(gi(I,Q,128));return qe.userData.body.material.color.setHex(be),qe.position.set(Ze.maxX-.17,je-.62,ut[tt+1]),qe.rotation.y=-Math.PI/2+(ye()-.5)*.4,qe.scale.setScalar(.92+ye()*.1),Wa(qe,0),h.add(qe),qe}),qt=new b(Ze.maxX-.17,1.25,ut[0]),ln=new nt;h.add(ln);let Bn=()=>l.hang(ln,new b(Ze.maxX-.17,je-.62,ut[0]),-Math.PI/2);Bn();for(let I=0;I<7;I++){let Q=7.55-I%2*.12,be=1.2+I*.25;S.add(Tn(.11,.26,.02,.05,.004),Le([3811870,6961706,2767434][I%3]),Q,0,be,0,.2*(ye()-.5),0)}S.add(new en(.26,12,9),Le(10111530,{roughness:.95}),7.45,.3,-1.2),S.add(ne.cyl(.07,.12,.12,12),Le(10111530,{roughness:.95}),7.45,.58,-1.2),S.add(ne.cyl(.04,.035,.08,10),Le(12105908,{metalness:.9,roughness:.25}),7.45,.68,-1.2),ot(7.1,7.8,-1.55,-.85);let Yt=new et({...v.rust,color:10137784}),dt=gt.z1-gt.z0,tn=new nt;tn.position.set(Ze.maxX-.03,0,gt.z0),h.add(tn);let Kt=hn(new At(.05,gt.h+.03,dt+.06),Yt,-.012,gt.h/2+.005,dt/2,tn);[gt.z0-.05,gt.z1+.05].forEach(I=>S.add(ne.box(.16,gt.h+.1,.1),p,Ze.maxX,(gt.h+.1)/2,I)),S.add(ne.box(.2,.03,dt+.2),Le(3813414,{roughness:.9}),Ze.maxX+.02,.012,(gt.z0+gt.z1)/2),hn(new At(.08,.04,.12),Le(2761760,{metalness:.7}),-.04,1.2,dt-.1,tn);let Ri=(()=>{let I=document.createElement("canvas");I.width=64,I.height=64;let Q=I.getContext("2d"),be=Q.createLinearGradient(0,0,0,64);be.addColorStop(0,"rgba(255,225,170,0.9)"),be.addColorStop(1,"rgba(255,225,170,0)"),Q.fillStyle=be,Q.fillRect(0,0,64,64);let tt=Q.createLinearGradient(0,0,64,0);tt.addColorStop(0,"rgba(0,0,0,1)"),tt.addColorStop(.2,"rgba(0,0,0,0)"),tt.addColorStop(.8,"rgba(0,0,0,0)"),tt.addColorStop(1,"rgba(0,0,0,1)"),Q.globalCompositeOperation="destination-out",Q.fillStyle=tt,Q.fillRect(0,0,64,64);let qe=new Qt(I);return qe.colorSpace=Dt,qe})(),Os=new yt({map:Ri,transparent:!0,depthWrite:!1,blending:vn,color:new ve(.55,.45,.32),polygonOffset:!0,polygonOffsetFactor:-2}),ei=hn(new mt(dt+.3,.7),Os,Ze.maxX-.35,.004,(gt.z0+gt.z1)/2,h);ei.rotation.set(-Math.PI/2,0,-Math.PI/2),ei.castShadow=!1,ei.receiveShadow=!1,S.add(ne.box(.12,.1,dt+.2),p,Ze.maxX-.04,gt.h+.05,(gt.z0+gt.z1)/2);let cr=c.add({pos:new b(Ze.maxX-.8,2.2,(gt.z0+gt.z1)/2),color:16773336,intensity:0,distance:10,decay:1.4,space:"sweatshop",priority:3}),xn=new Lt;xn.position.set(Ze.maxX,1.4,(gt.z0+gt.z1)/2),h.add(xn);let xi=new nt;h.add(xi),xi.visible=!1;let Ai=_n({top:6978970,bottom:15327695,skin:7225896,scale:1.3}),oi=hn(new en(.28,8,6),M[3],0,.32,0,null);oi.scale.set(1.2,.6,.9),Ai.userData.J.head.add(oi),oi.position.y=.3,Ai.userData.J.shL.rotation.set(-2.7,0,.3),h.add(Ai);let Hi={x0:-3.2,x1:4.4,z:3.55,t:0},sa=_n({female:!0,child:!0,top:14262826,bottom:8006174,scarf:2046568,skin:9067068,scale:1.2});sa.position.set(4.6,0,-5.25),h.add(sa),S.add(Tn(2.4,.9,.06,.03),m,4.6,1.02,-4.6),[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([I,Q])=>S.add(ne.box(.06,1,.06),p,4.6+I*1.1,.5,-4.6+Q*.38));for(let I=0;I<9;I++)S.add(ne.box(.4,.03,.3),M[I%M.length],3.8+I%3*.5,1.06+Math.floor(I/3)*.03,-4.55,0,(ye()-.5)*.2,0);let Xr=hn(new mt(.6,.45,6,1),new et({map:v.fab[4],side:Rt,roughness:.95}),4.6,1.1,-4.75,h);Xr.rotation.x=-Math.PI/2,ot(3.3,5.9,-5.6,-4.1);let Of=[],yi=new es;yi.moveTo(-.16,0),yi.lineTo(-.3,-.12),yi.lineTo(-.24,-.24),yi.lineTo(-.15,-.18),yi.lineTo(-.15,-.75),yi.lineTo(.15,-.75),yi.lineTo(.15,-.18),yi.lineTo(.24,-.24),yi.lineTo(.3,-.12),yi.lineTo(.16,0),yi.lineTo(.06,.02),yi.lineTo(0,-.06),yi.lineTo(-.06,.02);let Th=new Io(yi,2);{let I=Th.attributes.position,Q=Th.attributes.uv;for(let be=0;be<I.count;be++)Q.setXY(be,I.getX(be)*1.5+.5,I.getY(be)*1.5+1)}[[-3.3,2,7.2],[-3.9,2.4,6.9]].forEach(([I,Q,be],tt)=>{S.add(qo(new b(Q,3.25,I),new b(be,3.25,I),.12,.005),Ee);for(let qe=Q+.4;qe<be-.3;qe+=.62){let jt=.12*(1-((qe-(Q+be)/2)/((be-Q)/2))**2),Ut=new nt;Ut.position.set(qe,3.25-jt,I),h.add(Ut);let Ot=hn(Th,new et({map:v.fab[(Math.floor(qe*3)+tt)%v.fab.length],side:Rt,roughness:.95}),0,0,0,Ut);Ut.rotation.y=(ye()-.5)*.3,Of.push(Ut)}});let jm=new et({map:gi("check",5),color:12098154,roughness:1,flatShading:!0}),Qm=[[.001,0],[.3,.02],[.36,.25],[.34,.55],[.22,.75],[.08,.82],[.001,.84]].map(([I,Q])=>new Se(I,Q)),eg=new Ei(Qm,9);[[7.45,-5.4],[7.45,-4.65],[6.85,-5.45],[7.5,-3.9],[7.4,.2],[6.9,-4.9]].forEach(([I,Q],be)=>{S.add(eg,jm,I,be===5?.7:0,Q,.1*(ye()-.5),ye()*6,.1*(ye()-.5),1,.9+ye()*.3,1)}),ot(6.5,7.9,-5.9,-3.5),ot(7,7.9,-.2,.6);for(let I=0;I<6;I++)S.add(ne.cyl(.11,.11,2.2,10),M[I],-5.6+I*.3,1.05,-5.75,.18,0,(ye()-.5)*.1);ot(-5.9,-3.9,-6,-5.4);let Fs=-1.2;S.add(ne.box(.7,.04,.24),p,Fs,1.95,Ze.minZ+.12),S.add(ne.box(.04,.12,.2),p,Fs-.3,1.89,Ze.minZ+.12),S.add(ne.box(.04,.12,.2),p,Fs+.3,1.89,Ze.minZ+.12);for(let I=0;I<22;I++){let Q=I/21,be=Fs-.36+Q*.72,tt=2.05-Math.sin(Q*Math.PI)*.25;S.add(new wi(.03,0),Le(I%3?15763994:15777824,{flatShading:!0,emissive:4200448}),be,tt,Ze.minZ+.05)}S.add(ne.cyl(.035,.02,.025,10),Le(13148224,{metalness:.9,roughness:.3}),Fs+.15,1.985,Ze.minZ+.12);let Ff=hn(new bi(.008,.03,6),new yt({color:new ve(1,.6,.2).multiplyScalar(8)}),Fs+.15,2.015,Ze.minZ+.12,h);Ff.castShadow=!1;let ll=new Nn(ee);ll.position.set(Fs+.15,2.02,Ze.minZ+.13),ll.scale.setScalar(.18),h.add(ll);let tg=new et({map:xf(),roughness:.9}),Bf=hn(new mt(.42,.63),tg,Fs-.75,2.2,Ze.minZ+.01,h);Bf.rotation.z=.02,Bf.castShadow=!1;let qr=new nt;qr.position.set(Ze.maxX-.02,3,1.6),qr.rotation.y=-Math.PI/2,h.add(qr),hn(new Nt(.22,.22,.04,24),Le(5909018),0,0,-.02,qr).rotation.x=Math.PI/2,hn(new sr(.2,24),new et({map:bm(),roughness:.6}),0,0,.002,qr);let cl=new nt,hl=new nt;qr.add(cl,hl),cl.position.z=hl.position.z=.01,hn(new At(.012,.11,.004),Le(1709072),0,.045,0,cl),hn(new At(.008,.16,.004),Le(1709072),0,.07,.003,hl);let Rh=[];[[-3.6,2.6],[1.6,2.6],[-1,-3],[4.4,.6]].forEach(([I,Q])=>{S.add(ne.cyl(.015,.015,.6,6),Le(5921362,{metalness:.5}),I,3.7,Q);let be=new nt;be.position.set(I,3.38,Q),h.add(be),hn(new Nt(.1,.12,.12,12),Le(6974042,{metalness:.4,roughness:.5}),0,0,0,be);for(let tt=0;tt<3;tt++){let qe=new nt;qe.rotation.y=tt*2.094,be.add(qe);let jt=hn(new At(.6,.01,.13),Le(8026730,{metalness:.3,roughness:.6}),.38,-.02,0,qe);jt.rotation.x=.12}Rh.push(be)});for(let I=0;I<70;I++){let Q=-7.5+ye()*15,be=-5.5+ye()*11;S.add(ne.box(.05+ye()*.12,.003,.04+ye()*.1),M[I%M.length],Q,.003,be,0,ye()*6,0)}for(let I=0;I<25;I++){let Q=new b(-7.5+ye()*15,.004,-5.5+ye()*11),be=Q.clone().add(new b((ye()-.5)*.6,0,(ye()-.5)*.6));S.add(qo(Q,be,-.02,.0025),Le([11879470,15327695,2046568,14262826][I%4]))}S.add(ne.box(1.2,.04,.3),p,6.4,1.5,Ze.minZ+.16);for(let I=0;I<4;I++)for(let Q=0;Q<3;Q++)S.add(ne.cyl(.07,.07,.07,12),Le(12632252,{metalness:.9,roughness:.25}),5.95+I*.3,1.56+Q*.075,Ze.minZ+.16);S.build(h),h.traverse(I=>{I.isMesh&&I.material.colorWrite&&(I.receiveShadow=!0)});let hr=new nt;hr.visible=!1,h.add(hr);let ul=new yt({map:Sm(),transparent:!0,opacity:0,depthWrite:!1,fog:!1});ul.color.setScalar(1.6);let kf=new Ie(new mt(1.9,.95),ul);kf.position.set(fs+.1,2.05,os-1.7),hr.add(kf);let ng=I=>{let Q=document.createElement("canvas");Q.width=Q.height=128;let be=Q.getContext("2d");be.fillStyle="#fff6e0",be.font="96px Georgia",be.textAlign="center",be.textBaseline="middle",be.fillText(I,64,70);let tt=new Qt(Q);return tt.colorSpace=Dt,tt},Vf="AaBbC\u0915\u0916\u0917123".split("").map((I,Q)=>{let be=new Nn(new Wn({map:ng(I),transparent:!0,opacity:0,depthWrite:!1,color:new ve(2.2,1.9,1.4)}));return be.scale.setScalar(.09),be.userData={ph:Q*.7,x:(Math.random()-.5)*.6,z:(Math.random()-.5)*.3},hr.add(be),be}),Gf=c.add({pos:new b(fs,2,os-.8),color:16769712,intensity:0,distance:4,decay:1.5,space:"sweatshop",priority:4}),qE=n.add({object:Jt,label:"Take a piece of fabric",enabled:()=>Me.phase==="pick",onPress:Xf}),YE=n.add({object:on,label:"Hold to sew",enabled:()=>Me.phase==="push",onPress:()=>{Me.pushing=!0},onRelease:()=>{Me.pushing=!1}}),ZE=n.add({object:l.bag,label:"Take your bag",enabled:()=>Me.phase==="toBag",onPress:qf}),JE=n.add({object:W,label:"Collect your wages",enabled:()=>Me.phase==="toWages",onPress:Yf,maxDist:3.2}),KE=n.add({object:tn,label:"Open the door",enabled:()=>Me.phase==="toDoor",onPress:dl}),Ah=[],ai={},ur=new Lt;ur.position.copy(Fn),h.add(ur);function ig(){Wf();let I=(Q,be)=>(be&&(Ah.push(be),ai[Q]=be),be);I("room",t.loop("room",{volume:.05})),I("machine",t.loop("sewing",{object:ur,volume:0,ref:.8})),I("idle",t.loop("hum",{object:ur,volume:.02,ref:.8})),ai.factory=[[-3.6,1.25],[1.6,-1.5],[-1,-4.25],[1.6,1.25]].map(([Q,be],tt)=>{let qe=new Lt;return qe.position.set(Q,1.3,be),h.add(qe),I("f"+tt,t.loop("factory",{object:qe,volume:.25,rate:.92+tt*.05,ref:1.8}))}),ai.chatter=[[-3.6,-.5],[1.6,-3.4]].map(([Q,be],tt)=>{let qe=new Lt;return qe.position.set(Q,1.6,be),h.add(qe),I("c"+tt,t.loop("chatter",{object:qe,volume:.22,ref:1.5}))}),I("fan",t.loop("hum",{object:Rh[0],volume:.025,rate:.7,ref:1.2})),I("children",t.loop("children",{object:fe,volume:.15,ref:1.2})),I("street",t.loop("street",{object:xn,volume:.03,ref:1.5}))}function Wf(){t.stopAll(Ah),Ah=[],ai={}}let Me={phase:"idle",t:0,pieces:0,progress:0,pushing:!1,idle:0,anim:null,factoryWork:1,coinsIn:0,schoolBellT:18,gaze:0,dreamK:0,windowGlow:0,ended:!1},Bs=[],ra=!1,Yr=(I,Q=5)=>r.hint(I,Q),dr=(I,Q)=>r.thought(I,Q);function bn(I){Me.phase=I,Me.t=0,Me.idle=0}function Xf(){let I=Ni[Ni.length-1-Me.pieces];I&&(I.visible=!1),an.material.map=I?I.material.map:v.fab[0],an.material.needsUpdate=!0,an.visible=!0,an.scale.set(1,1,1),an.position.copy(Jt.localToWorld(new b(0,.2,0))),Me.anim={from:Jt.localToWorld(new b(0,.2,0)),to:Fn.clone().add(new b(.04,0,.16)),t:-.55,dur:.6},t.oneShot("fabric",{object:ur,volume:.7}),Me.progress=0,bn("placing")}function qf(){let I=l.bag.localToWorld(new b(0,.3,0));s.headWorld(g),a.set(1,{key:"reach-bag",mode:"world",pos:I.add(new b(-.06,0,0)),rot:mi.toward(1,g,I),pose:"grip",blend:.38}),bn("taking")}function Yf(){bn("paying"),W.userData.reach=!0,W.userData.stand=!0,r.subtitle('Supervisor: "Here. Same time tomorrow."',3.5)}function dl(){bn("opening"),t.oneShot("door",{object:xn,volume:1}),xi.visible=!0}let sg=new b(Ze.maxX-.12,1.15,gt.z1-.25);function Zf(){Ve.intensity=_f,Bs.forEach(I=>h.remove(I.mesh)),Bs.length=0,Object.assign(Me,{dream:null,dreamT:0,saidOthers:!1,pieces:0,progress:0,pushing:!1,factoryWork:1,coinsIn:0,anim:null,ended:!1,dreamK:0,windowGlow:0,gaze:0}),Ni.forEach(I=>{I.visible=!0}),Vt.clear(),an.visible=!1,Bn(),l.setCoins(0),l.forceOpen=0,tn.rotation.y=0,cr.intensity=0,xi.visible=!1,ra=!1,W.userData.reach=!1,W.userData.stand=!1,W.userData.standK=0,de.forEach(I=>{I.p.userData.work=1}),ze.forEach(({m:I,isPlayer:Q})=>{Q&&(I.userData.speed=0)}),hr.visible=!1,ul.opacity=0,Vf.forEach(I=>{I.material.opacity=0}),Gf.intensity=0,s.canMove=!1,s.bounds={minX:Ze.minX+.3,maxX:Ze.maxX-.3,minZ:Ze.minZ+.3,maxZ:Ze.maxZ-.3},o.set(null),a.hide(),bn("idle")}function rg(){Zf(),s.place(ii.x,ii.z,0,1.3),ig(),bn("intro")}function og(){Wf(),bn("idle"),Ve.intensity=0,cr.intensity=0}function ag(){let I=hn(new Nt(.022,.022,.006,14),Le(13148224,{metalness:.9,roughness:.3}),0,0,0,h);I.position.copy(lt),Bs.push({mesh:I,from:I.position.clone(),t:0,dur:.75})}let lg=9.2,Jf=(I,Q,be,tt=.35)=>Ht((I-Q)/tt,0,1)*Ht((be-I)/tt,0,1),fl=new b,pl=new b,Zr=new b,Ch=(I,Q,be,tt,qe)=>I.set((1-qe)*(1-qe)*Q.x+2*(1-qe)*qe*be.x+qe*qe*tt.x,(1-qe)*(1-qe)*Q.y+2*(1-qe)*qe*be.y+qe*qe*tt.y,(1-qe)*(1-qe)*Q.z+2*(1-qe)*qe*be.z+qe*qe*tt.z);function cg(I,Q,be){let{p:tt,m:qe,pc:jt}=I,Ut=tt.userData.J,Ot=((Q+I.off)%I.cyc+I.cyc)%I.cyc*(lg/I.cyc),Vs=Ot>2&&Ot<6.6?1:0;tt.userData.work=it(tt.userData.work,1,be*1.5),qe.userData.speed=it(qe.userData.speed,Vs?1:.05,be*4),lf(tt,Q,be,qe.userData.speed);let He=wt(Jf(Ot,.1,1.5)),rt=wt(Jf(Ot,6.5,7.7));Ut.spine.rotation.y=.55*He-.45*rt,Ut.spine.rotation.x+=.15*(He+rt),Ut.shL.rotation.x=it(Ut.shL.rotation.x,-1.25,He),Ut.shL.rotation.z=it(Ut.shL.rotation.z,.75,He),Ut.elL.rotation.x=it(Ut.elL.rotation.x,-.2,He),Ut.shR.rotation.x=it(Ut.shR.rotation.x,-1.2,rt),Ut.shR.rotation.z=it(Ut.shR.rotation.z,-.7,rt),Ut.elR.rotation.x=it(Ut.elR.rotation.x,-.25,rt);let xt=rs+.058,Jn=I.x-.27;if(Ot<1)jt.visible=Ot>.55,jt.position.set(I.lx,I.top,I.lz);else if(Ot<2){let An=wt((Ot-1)/1);fl.set(I.lx,I.top,I.lz),pl.set(Jn,xt,I.z+.16),Zr.set(I.x-.62,rs+.22,I.z+.3),Ch(jt.position,fl,Zr,pl,An),jt.visible=!0}else if(Ot<6.6){let An=(Ot-2)/4.6;jt.position.set(Jn+Math.sin(An*9)*.01,xt,I.z+.16-An*.3)}else if(Ot<7.6){let An=wt((Ot-6.6)/1);fl.set(Jn,xt,I.z-.14),pl.set(I.x+.4,I.done,I.z+.1),Zr.set(I.x+.02,rs+.14,I.z+.42),Ch(jt.position,fl,Zr,pl,An)}else jt.visible=!1;jt.rotation.y=Math.sin(I.off)*.15}let Kf=0;function hg(I,Q,be=!0){s.headWorld(g),J.visible=g.x<Ze.maxX+.6&&g.x>Ze.minX-30,Ke.uniforms.uTime.value=Q,O.uniforms.uTime.value=Q,de.forEach(He=>cg(He,Q,I)),ze.forEach(({m:He})=>rm(He,I)),Rh.forEach((He,rt)=>{He.rotation.y+=I*(2.2+rt*.3)}),Of.forEach((He,rt)=>{He.rotation.x=.07*Math.sin(Q*.9+rt*1.3),He.rotation.z=.03*Math.sin(Q*.7+rt)}),Ff.scale.y=1+.25*Math.sin(Q*13)*Math.sin(Q*7.3),ll.scale.setScalar(.17+.02*Math.sin(Q*11)),ct.forEach(He=>{let rt=Math.pow(Math.max(0,Math.sin(Q*.72+He.flick)),12),xt=.86+.05*Math.sin(Q*2.1+He.flick)-.22*rt;He.L.intensity=He.base*xt,He.glass.material.emissiveIntensity=4.2*xt});let tt=.88-.28*Math.pow(Math.max(0,Math.sin(Q*.67)),14);We.intensity=.55*tt,ge.material.emissiveIntensity=3.5*tt,hl.rotation.z=-(35/60)*Math.PI*2-Q*.0017,cl.rotation.z=-((6+35/60)/12)*Math.PI*2-Q*14e-5,q.forEach((He,rt)=>{let xt=He.userData.c;xt.a+=I*xt.sp/xt.r,He.position.set(xt.cx+Math.cos(xt.a)*xt.r,0,xt.cz+Math.sin(xt.a)*xt.r),He.rotation.y=Math.atan2(-Math.sin(xt.a)*Math.sign(xt.sp),Math.cos(xt.a)*Math.sign(xt.sp)),Ps(He,Q*11+rt,1.2)}),Di(D,Q,I),Hi.t+=I*.11;let qe=(Math.sin(Hi.t)+1)/2,jt=Math.cos(Hi.t)>0?1:-1;Ai.position.set(it(Hi.x0,Hi.x1,qe),0,Hi.z),Ai.rotation.y=Xt(Ai.rotation.y,jt>0?Math.PI/2:-Math.PI/2,5,I),Kf+=I*7*Math.abs(Math.cos(Hi.t))+I*.5,Ps(Ai,Kf,Math.min(1,Math.abs(Math.cos(Hi.t))*3)),Ai.userData.J.shL.rotation.set(-2.8,0,.35),Ai.userData.J.elL.rotation.x=-.5;{let He=sa.userData.J,rt=(Math.sin(Q*1.4)+1)/2;He.spine.rotation.x=.35,He.neck.rotation.x=.3,He.shL.rotation.set(-1.2-rt*.5,0,.3-rt*.2),He.shR.rotation.set(-1.2-rt*.5,0,-.3+rt*.2),He.elL.rotation.x=-.6,He.elR.rotation.x=-.6;let xt=Xr.geometry.attributes.position;for(let Jn=0;Jn<xt.count;Jn++){let An=xt.getX(Jn);xt.setZ(Jn,Math.max(0,An)*Math.sin(rt*Math.PI)*.7)}xt.needsUpdate=!0,Xr.geometry.computeVertexNormals()}{let He=W.userData.J,rt=W.userData;Di(W,Q,I),rt.standK=Ht(rt.standK+(rt.stand?I:-I)/1.25,0,1);let xt=wt(rt.standK),Jn=Math.sin(xt*Math.PI);He.hips.position.y=it(Fe.hy,rt.hipY,xt),He.hipL.rotation.x=He.hipR.rotation.x=it(Fe.hip,0,xt),He.kneeL.rotation.x=He.kneeR.rotation.x=it(Fe.knee,0,xt),He.spine.rotation.x+=.5*Jn+.12*(1-xt),W.position.z=it(ae.z,ae.z-.32,xt),rt.mode=xt>.5?"stand":"sit";let An=rt.reach&&rt.standK>.85?1:0;rt.reachK=Xt(rt.reachK||0,An,4,I);let vi=rt.reachK;He.shR.rotation.set(-.1-vi*1.25,0,-.06-vi*.15),He.elR.rotation.x=-.2-vi*.25,He.shL.rotation.set(-.35,0,.08),He.elL.rotation.x=-1.1,He.handR.getWorldPosition(lt)}if(Me.phase==="idle"||Me.phase==="done"||!be)return;Me.t+=I,Me.idle+=I,o.urgent=Me.idle>20,Me.idle>20&&Me.idle-I<=20&&dg(),s.headWorld(g),s.camera.getWorldDirection(d),f.set(Ce,we,De).sub(g).normalize();let Ut=d.dot(f)>.82&&g.distanceTo(f.set(Ce,we,De))<5;Me.gaze=it(Me.gaze,Ut?1:0,I*1.5),Me.schoolBellT-=I,Me.schoolBellT<0&&Me.phase!=="outside"&&(Me.schoolBellT=30+Math.random()*15,t.oneShot("schoolBell",{object:fe,volume:.25+Me.gaze*.4}));let Ot=on.userData;if(Ot.speed=it(Ot.speed,Me.pushing&&Me.phase==="push"?1:0,I*8),ai.machine&&ai.machine.setVolume(Ot.speed*.55*(1-.6*Me.dreamK)),ai.children&&ai.children.setVolume(.15+.55*Math.max(Me.gaze,Me.dreamK)),ai.factory&&ai.factory.forEach(He=>He&&He.setVolume(.12*(1-.6*Me.dreamK)+.01)),ai.chatter&&ai.chatter.forEach(He=>He&&He.setVolume(.2+(1-Me.factoryWork)*.25)),Ve.intensity=_f*(1+.3*Me.windowGlow+.1*Me.gaze),Ke.uniforms.uK.value=1+.55*Me.windowGlow+.2*Me.gaze,i.post.dream=Me.dreamK,i.post.glow=Me.windowGlow*.35,ug(Q),Me.dream){Me.dreamT+=I;let He=Me.dreamT,rt=He<1.2?He/1.2:He>4.2?Math.max(0,1-(He-4.2)/1.3):1;Me.dreamK=Me.dream==="school"?rt*(Me.pushing?.75:1):rt*.35,Me.dream==="school"?(hr.visible=!0,ul.opacity=rt*.8,Gf.intensity=rt*3,Vf.forEach((xt,Jn)=>{let An=xt.userData,vi=(He*.25+An.ph*.13)%1;xt.position.set(Fn.x+.2+An.x,Fn.y+.05+vi*1.1,Fn.z-.2+An.z-vi*.6),xt.material.opacity=rt*Math.sin(vi*Math.PI)*.9})):Me.windowGlow=wt(rt),He>5.5&&(hr.visible=!1,Me.dreamK=0,Me.windowGlow=0,Me.dream=null)}switch(!Me.saidOthers&&["pick","push"].includes(Me.phase)&&Me.t>2&&(s.camera.getWorldDirection(d),de.find(rt=>(f.copy(rt.p.position).setY(1).sub(g),f.length()<6&&d.dot(f.normalize())>.93))&&(Me.saidOthers=!0,dr("Everyone here is a child like me. Some are younger.",4.5))),!Me.saidOthers&&Me.phase==="pick"&&Me.pieces===1&&Me.t>6&&(Me.saidOthers=!0,dr("Everyone here is a child like me. Some are younger.",4.5)),Me.phase){case"intro":Me.t>1.2&&Me.t-I<=1.2&&dr("Four more pieces. Then I can go home.",4.5),Me.t>5&&(bn("pick"),Yr("Look around with the mouse \xB7 click the glowing fabric on your left",6));break;case"placing":{let He=Me.anim;He.t+=I/He.dur;let rt=wt(Ht(He.t,0,1));an.position.lerpVectors(He.from,He.to,rt),an.position.y+=Math.sin(rt*Math.PI)*.14,an.rotation.set(0,(1-rt)*.8,0),He.t>=1&&(bn("push"),Me.pieces===0&&Yr("Hold the mouse button on the machine to push the fabric through",6));break}case"push":Me.pushing&&(Me.progress+=I/3.2,Me.idle=0),r.progress(Me.progress),an.position.set(Fn.x+.04+Math.sin(Me.progress*30)*.004*(Me.pushing?1:0),Fn.y,Fn.z+.16-Me.progress*.34),Me.progress>=1&&(r.progress(0),t.oneShot("fabric",{object:ur,volume:.7,rate:1.2}),Me.anim={from:an.position.clone(),to:Vt.localToWorld(new b(0,.02+Me.pieces*.024,0)),t:-.3,dur:.6},Me.pushing=!1,bn("folding"));break;case"folding":{let He=Me.anim;He.t+=I/He.dur;let rt=wt(Ht(He.t,0,1));if(Zr.set(fs+.02,rs+.15,os+.42),Ch(an.position,He.from,Zr,He.to,rt),an.scale.set(1,1,1-.3*rt),He.t>=1){an.visible=!1;let xt=hn(new At(.32,.024,.2),new et({map:an.material.map,roughness:.95}),0,.012+Me.pieces*.024,0,Vt);xt.rotation.y=(Math.random()-.5)*.2,Me.pieces++,Me.pieces===2?($f("school"),bn("pick")):Me.pieces===3?($f("window"),bn("pick")):Me.pieces>=Rm?(bn("shiftEnd"),t.oneShot("shiftBell",{volume:.55})):bn("pick")}break}case"shiftEnd":Me.factoryWork=Math.max(0,1-Me.t/2.5),Me.t>.6&&Me.t-I<=.6&&dr("Finally.",2.5),Me.t>2.8&&(Me.standZ0=s.dolly.position.z,bn("standing"));break;case"standing":{let He=wt(Math.min(1,Me.t/1.6)),rt=s.xr?Me.standZ0:ii.z;s.eye=it(1.3,1.52,He),s.dolly.position.z=it(rt,rt+.6,He),Me.t>1.7&&(s.canMove=!0,bn("toBag"),Yr("W A S D to walk \xB7 hold Shift to run \xB7 find your bag (look for the glow)",7));break}case"taking":Me.t>.36&&(l.take(),t.oneShot("fabric",{volume:.6,rate:.8}),bn("toWages"),Yr("Take it to the supervisor at his counter",5));break;case"paying":Me.t>1.9&&Me.coinsIn+Bs.length<3&&Me.t>1.9+(Me.coinsIn+Bs.length)*.75&&ag(),l.forceOpen=1,Me.coinsIn>=3&&Me.t>4.9&&(W.userData.reach=!1,l.forceOpen=0,setTimeout(()=>{W.userData.stand=!1},1600),bn("toDoor"),dr("Three coins. A whole day.",4.5),Me.qHintAt=4);break;case"opening":{let He=wt(Math.min(1,Me.t/1.4));tn.rotation.y=-He*1.6,cr.intensity=He*14,ai.street&&ai.street.setVolume(.03+He*.25),Me.t>1&&!ra&&(ra=!0,i.refreshColliders(),s.bounds={minX:Ze.minX+.3,maxX:Ze.maxX+4,minZ:Ze.minZ+.3,maxZ:Ze.maxZ-.3}),Me.t>1.5&&(bn("outside"),dr("Something to eat first.",3.5));break}case"toDoor":Me.qHintAt&&Me.t>Me.qHintAt&&(Me.qHintAt=0,Yr("Hold Q to look inside your bag \xB7 then go home",6));break;case"outside":ai.room&&ai.room.setVolume(Math.max(0,.05-Me.t*.015)),g.x>Ze.maxX+.6&&!Me.ended&&(Me.ended=!0,o.set(null),bn("done"),Ph&&Ph("street"));break}for(let He=Bs.length-1;He>=0;He--){let rt=Bs[He];rt.t+=I/rt.dur;let xt=l.worldMouth(d);rt.mesh.position.lerpVectors(rt.from,xt,wt(Math.min(1,rt.t))),rt.mesh.position.y+=Math.sin(Math.min(1,rt.t)*Math.PI)*.25,rt.mesh.rotation.x+=I*14,rt.t>=1&&(h.remove(rt.mesh),Bs.splice(He,1),Me.coinsIn++,l.setCoins(Me.coinsIn),t.oneShot("coin",{volume:.9,rate:.95+Math.random()*.1}))}if(["toBag","toWages","paying","toDoor"].includes(Me.phase)){let He=g.x-W.position.x,rt=g.z-W.position.z;W.userData.look=Ht(u(Math.atan2(He,rt)-W.rotation.y),-.9,.9),W.userData.lookPitch=.25}else W.userData.look=.4*Math.sin(Q*.2),W.userData.lookPitch=.3;let Vs={pick:Jt.localToWorld(f.set(0,.25,0)).clone(),toBag:qt.clone(),toWages:new b(Ge.x,1.1,Ge.z-Ge.d/2),toDoor:new b(Ze.maxX-.1,1.1,(gt.z0+gt.z1)/2),outside:new b(Ze.maxX+2,.5,(gt.z0+gt.z1)/2)};o.set(Vs[Me.phase]||null)}let ks=[new b,new b],ml=new b(ii.x+.02,rs+.035,os+.36);function Jr(I,Q,be,tt="relax",qe=.13){let jt=be==="table";ks[I].set(Q.x+(I?qe:-qe)*(jt?1.25:1),Q.y+(jt?.025:.04),Q.z+.07),a.set(I,{key:be,mode:"world",pos:ks[I],rot:jt?mi.rest(I?1:-1):mi.table(I?1:-1),pose:tt,blend:.28})}function ug(I){let Q=Me.phase;if(["intro","pick","placing","push","folding","dream","shiftEnd"].includes(Q)){let tt=Me.pushing?Math.sin(I*22)*.003:0;Q==="push"?(Jr(0,d.copy(an.position).add(f.set(-.08,tt,.06)),"sew","flat",.13),Jr(1,d.copy(an.position).add(f.set(.05,-tt,.08)),"sew","flat",.13)):Q==="placing"?(ks[0].copy(an.position).add(f.set(-.1,.03,.06)),a.set(0,{key:"carry",mode:"world",pos:ks[0],rot:mi.reach(-1,.3,-.55),pose:"pinch",blend:.33}),Jr(1,ml,"table")):Q==="folding"?(ks[1].copy(an.position).add(f.set(.1,.03,.06)),a.set(1,{key:"fold",mode:"world",pos:ks[1],rot:mi.reach(1,-.2,-.55),pose:"pinch",blend:.18}),Jr(0,ml,"table")):Q==="shiftEnd"&&Me.t>1.8?a.hide():(s.camera.getWorldDirection(f),f.z<-.55&&f.y<.15?(Jr(0,ml,"table"),Jr(1,ml,"table")):a.hide());return}if(Q==="opening"&&Me.t<1.1){ks[0].copy(sg),tn.updateWorldMatrix(!0,!1),a.set(0,{key:"door",mode:"world",pos:ks[0].set(Ze.maxX-.08-Math.sin(tn.rotation.y*-1)*.9,1.15,gt.z0+Math.cos(-tn.rotation.y)*(gt.z1-gt.z0-.3)),rot:mi.push(-1,-Math.PI/2),pose:"flat",blend:.3});return}if(Q==="opening"||Q==="outside"){l.open||a.hide(0);return}!l.held&&Q!=="taking"&&a.hide(1),!l.held&&Q!=="taking"&&a.hide(0)}function $f(I){Me.dream=I,Me.dreamT=0,t.oneShot("schoolBell",{object:I==="school"?ur:fe,volume:I==="school"?.45:.6}),dr(I==="school"?"I used to know all my letters.":"They're learning to read right now.",4.5)}function dg(){let I={pick:"Click the fabric on your left",push:"Hold the mouse button on the machine",toBag:"Your bag hangs by the door \u2014 look for the glow",toWages:"Click the supervisor at his desk",toDoor:"Click the door to go outside",outside:"Walk out into the street"}[Me.phase];I&&Yr(I,5)}function fg(I,Q){let be=.5-.5*Math.cos(Q*Math.PI*2/70),tt=it(-6,3,be);I.position.set(tt,1.25+.03*Math.sin(Q*.5),2.9),I.lookAt(tt-1.2+2.4*be,1.15,-1.5+.8*Math.sin(Q*.09))}function pg(I){Te.visible=!0,dn.setDrawRange(0,I==="low"?320:I==="medium"?600:kt),Mt.visible=!0,Ke.uniforms.uSteps.value=I==="high"?40:I==="medium"?34:28,Ve.shadow.mapSize.setScalar(I==="high"?2048:I==="medium"?1536:1024),Ve.shadow.map&&(Ve.shadow.map.dispose(),Ve.shadow.map=null)}let Ph=null,mg={minX:Ze.maxX-.4,maxX:Ze.maxX+1,minZ:gt.z0,maxZ:gt.z1};return{root:h,update:hg,start:rg,stop:og,reset:Zf,cine:fg,setQuality:pg,name:"sweatshop",sun:Ve,zone:{minX:-100},atmosphere(){return{fog:new ve(1906450),density:.067,sun:0,hemi:.22,hemiSky:new ve(9073752),hemiGround:new ve(1709071),sky:.7,skyTint:new ve(1,.6,.4),exposure:1}},onEnd(I){Ph=I},get phase(){return Me.phase},getColliders(){return ra?Je:[...Je,mg]},skip(){let I=Me.phase;["intro","dream","shiftEnd","standing","paying","opening","placing","folding"].includes(I)?(Me.anim&&(Me.anim.t=1),Me.t=99):I==="toDoor"?(s.place(Ze.maxX-1.2,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),dl()):I==="pick"?Xf():I==="push"?Me.progress=1:I==="toBag"?(s.place(qt.x-1,qt.z,-Math.PI/2,1.52),qf()):I==="taking"?Me.t=99:I==="toWages"?(s.place(Ge.x,Ge.z-1.15,Math.PI,1.52),Yf()):I==="toDoor"?(s.place(Ze.maxX-1.2,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),dl()):I==="outside"&&s.place(Ze.maxX+1,(gt.z0+gt.z1)/2,-Math.PI/2,1.52)},setPushing(I){Me.pushing=I},debugDoor(){this.debugStand(),l.take(),Me.coinsIn=3,l.setCoins(3),s.place(Ze.maxX-1.2,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),bn("toDoor"),dl()},sceneOutside(){this.debugStand(),l.take(),l.takeK=1,Me.coinsIn=3,l.setCoins(3),tn.rotation.y=-1.6,ra=!0,xi.visible=!0,i.refreshColliders(),s.bounds=null,s.place(Ze.maxX+1,(gt.z0+gt.z1)/2,-Math.PI/2,1.52),a.hide(0),bn("outside")},debugStand(){Me.pieces=Rm,Me.factoryWork=0,an.visible=!1,Me.anim=null,s.eye=1.52,s.dolly.position.z=ii.z+.6,s.canMove=!0,bn("toBag")},get S(){return Me}}}var St=(()=>{let i=12345;return()=>(i=i*16807%2147483647,(i-1)/2147483646)})(),vt=St;function ps(i,e=i){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function xs(i,e=[1,1],t=!0){let n=new Qt(i);return t&&(n.colorSpace=Dt),n.wrapS=n.wrapT=Ln,n.repeat.set(e[0],e[1]),n.anisotropy=4,n}function Ef(i,e,t,n,s,r=2,o=.5){for(let a=0;a<n;a++)i.fillStyle=s[St()*s.length|0],i.globalAlpha=St()*o,i.beginPath(),i.arc(St()*e,St()*t,St()*r,0,7),i.fill();i.globalAlpha=1}function ms(i,e,t,n,s,r,o){for(let a=0;a<n;a++){let l=St()*e,c=St()*t,u=r+St()*(o-r),h=i.createRadialGradient(l,c,0,l,c,u);h.addColorStop(0,s),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(l-u,c-u,u*2,u*2)}}var bf=new Map,gs=(i,e)=>(bf.has(i)||bf.set(i,e()),bf.get(i)),zt={dot:()=>gs("dot",()=>{let[i,e]=ps(32),t=e.createRadialGradient(16,16,0,16,16,16);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,32,32),xs(i)}),dirt:()=>gs("dirt",()=>{let[i,e]=ps(512);e.fillStyle="#7a6a54",e.fillRect(0,0,512,512),ms(e,512,512,30,"rgba(60,46,32,.28)",30,120),ms(e,512,512,14,"rgba(160,140,110,.22)",20,80),Ef(e,512,512,5e3,["#4a3e30","#9a8a70","#5a4c3c"],1.8,.45);for(let t=0;t<14;t++){e.strokeStyle=["#b8402e","#d9a21b","#2f4a8a","#e8e0d0"][t%4],e.globalAlpha=.55,e.lineWidth=1.2,e.beginPath();let n=St()*512,s=St()*512;e.moveTo(n,s);for(let r=0;r<4;r++)n+=(St()-.5)*30,s+=(St()-.5)*30,e.lineTo(n,s);e.stroke()}return e.globalAlpha=1,xs(i)}),plywood:()=>gs("ply",()=>{let[i,e]=ps(256);e.fillStyle="#7a6040",e.fillRect(0,0,256,256);for(let t=0;t<256;t+=3)e.fillStyle=`rgba(${St()<.5?"60,40,20":"190,160,120"},${St()*.22})`,e.fillRect(0,t+Math.sin(t*.1)*3,256,2);return ms(e,256,256,8,"rgba(30,20,10,.3)",10,50),xs(i)}),tin:()=>gs("tin",()=>{let[i,e]=ps(256);for(let t=0;t<256;t+=16){let n=e.createLinearGradient(t,0,t+16,0);n.addColorStop(0,"#5a5c58"),n.addColorStop(.5,"#9a9c94"),n.addColorStop(1,"#5a5c58"),e.fillStyle=n,e.fillRect(t,0,16,256)}return ms(e,256,256,22,"rgba(130,64,26,.5)",8,46),xs(i)}),slab:()=>gs("slab",()=>{let[i,e]=ps(256);return e.fillStyle="#5a564e",e.fillRect(0,0,256,256),ms(e,256,256,16,"rgba(25,20,16,.4)",15,70),Ef(e,256,256,1200,["#2a2620","#8a8278"],1.4),xs(i)}),cardboard:()=>gs("card",()=>{let[i,e]=ps(128);return e.fillStyle="#9f8360",e.fillRect(0,0,128,128),e.fillStyle="rgba(60,40,20,.5)",e.fillRect(0,60,128,6),ms(e,128,128,6,"rgba(40,25,10,.3)",6,30),xs(i)}),stripes:(i,e,t=8)=>gs("st"+i+e+t,()=>{let[n,s]=ps(256);for(let r=0;r<t;r++)s.fillStyle=r%2?i:e,s.fillRect(r*256/t,0,256/t,256);return ms(s,256,256,8,"rgba(0,0,0,.18)",10,50),xs(n)}),sign:(i,e,t)=>gs("sg"+i,()=>{let[n,s]=ps(512,128);return s.fillStyle=e,s.fillRect(0,0,512,128),ms(s,512,128,6,"rgba(0,0,0,.2)",10,50),s.fillStyle=t,s.font="bold 54px Georgia, serif",s.textAlign="center",s.fillText(i,256,84),xs(n)}),price:()=>gs("price",()=>{let[i,e]=ps(512,256);return e.fillStyle="#ecdcac",e.fillRect(0,0,512,256),ms(e,512,256,6,"rgba(90,60,20,.22)",20,80),e.fillStyle="#8a1a14",e.font="bold 60px Georgia, serif",e.textAlign="center",e.fillText("ROTI \xB7 SABZI",256,88),e.fillStyle="#1a1612",e.font="bold 92px Georgia, serif",e.fillText("Rs 10",256,202),e.strokeStyle="#5a3a1a",e.lineWidth=10,e.strokeRect(5,5,502,246),xs(i)}),facade:(i,e=!1)=>gs("fa"+i+e,()=>{let[t,n]=ps(512);n.fillStyle=i,n.fillRect(0,0,512,512);for(let r=0;r<3;r++){let o=St()*512,a=St()*512,l=18+St()*40;n.fillStyle="#8a5a44",n.beginPath();for(let c=0;c<=14;c++){let u=c/14*Math.PI*2,h=l*(.55+St()*.5);n.lineTo(o+Math.cos(u)*h*1.4,a+Math.sin(u)*h)}n.fill(),n.strokeStyle="rgba(60,36,26,.6)",n.lineWidth=2;for(let c=a-l;c<a+l;c+=10)n.beginPath(),n.moveTo(o-l,c),n.lineTo(o+l,c),n.stroke()}ms(n,512,512,14,"rgba(40,30,20,.22)",30,120),n.globalAlpha=.18;for(let r=0;r<12;r++)n.fillStyle="#2a2018",n.fillRect(St()*512,St()*260,2+St()*3,60+St()*200);n.globalAlpha=1;let s=["#3a6a7a","#7a3a2a","#4a6a3a","#6a5a3a","#2a4a6a"];for(let r of[64,320])for(let o of[62,312]){let a=e?St()<.3:St()<.08;n.fillStyle="rgba(0,0,0,.25)",n.fillRect(o-6,r-6,132,154),n.fillStyle=a?e?"#f0a850":"#c8a070":"#17120e",n.fillRect(o,r,120,140),n.strokeStyle="#201a14",n.lineWidth=4;for(let l=1;l<5;l++)n.beginPath(),n.moveTo(o+l*24,r),n.lineTo(o+l*24,r+140),n.stroke();St()<.45&&(n.fillStyle=s[St()*s.length|0],n.fillRect(o-26,r,24,140),n.fillRect(o+122,r,24,140)),n.fillStyle="rgba(220,210,190,.55)",n.fillRect(o-8,r+140,136,8)}return Ef(n,512,512,1600,["#2a2018","#efe2c8"],1.2,.35),t})},wf=new Map;function Sf(i,e,t,n=!1,s=0){let r=[i,e,t,n,s].join("|");if(!wf.has(r)){let o=xs(zt.facade(i,n),[e,t]);wf.set(r,new et({map:o,roughness:.95,flatShading:!0,emissive:s,emissiveMap:s?o:null}))}return wf.get(r)}var zn=(i,e={})=>new et({map:i,roughness:.92,...e}),Dm=[["KIRANA STORE","#e8c84a","#6a1a10"],["MOBILE REPAIR","#2a6aaa","#ffffff"],["MEDICAL","#2a8a4a","#ffffff"],["SWEETS","#c8402e","#fff2c8"],["PAN SHOP","#f2f2ea","#2a5a3a"],["HARDWARE","#4a4a52","#f2d84a"],["TAILORING","#7a3a6a","#fff2c8"],["CHAI","#d8a030","#3a1a0a"]],ph=null;function Lm(){return ph||(ph={roof:zn(zt.slab()),shutter:zn(zt.tin(),{metalness:.35}),signs:Dm.map(([i,e,t])=>zn(zt.sign(i,e,t))),awnings:[[2906778,15259824],[9058858,15259824],[11044394,5913114],[3832410,15259824]].map(([i,e])=>zn(zt.stripes("#"+i.toString(16).padStart(6,"0"),"#"+e.toString(16).padStart(6,"0"),10),{side:Rt,roughness:1})),ledge:Le(10129020,{roughness:.95,flatShading:!0}),rail:Le(2763304,{metalness:.4,roughness:.6}),ac:Le(13157560,{roughness:.55}),tank:Le(2763306,{roughness:.6}),pipe:Le(5919304,{roughness:.8})},ph)}function Ds(i,e,t,n,s,{colours:r,hMin:o=6,hMax:a=11,night:l=!1,glow:c=0,list:u=null,face:h=null,detail:d=!0,cloths:f=null,batch:g=null,period:v=0}){let m=t-e>=s-n,p=m?t-e:s-n,M=Lm(),x=0,_=Math.floor(St()*10),S=[.15,.8,.45,1].map(T=>o+T*(a-o)),P=0;for(;x<p-.01;){let T=v?Math.min(p-x,v/4):Math.min(p-x,2.6+St()*2.6);p-x-T<(v?1.6:2.4)&&(T=p-x);let U=v?S[P%4]:o+St()*(a-o);v&&(_=P%4),P++;let Y=m?e+x:e,y=m?e+x+T:t,A=m?n:n+x,Z=m?s:n+x+T,K=y-Y,j=Z-A,xe=Math.max(1,Math.round(Math.max(K,j)/4)),te=Math.max(1,Math.round(U/4)),he=Sf(r[_++%r.length],xe,te,l,c),oe=new At(K,U,j);oe.translate(0,U/2,0);let _e=new Ie(oe,[he,he,M.roof,M.roof,he,he]);_e.position.set((Y+y)/2,0,(A+Z)/2),_e.castShadow=!0,_e.receiveShadow=!0,_e.userData.h=U,i.add(_e),u&&u.push(_e);let Pe=new rn;if(Pe.add(ne.box(K,.45,.14),M.ledge,0,U+.22,j/2-.07),Pe.add(ne.box(K,.45,.14),M.ledge,0,U+.22,-j/2+.07),Pe.add(ne.box(.14,.45,j),M.ledge,K/2-.07,U+.22,0),Pe.add(ne.box(.14,.45,j),M.ledge,-K/2+.07,U+.22,0),St()<.5&&Pe.add(ne.cyl(.5,.5,.9,10),M.tank,(St()-.5)*K*.5,U+.45,(St()-.5)*j*.5),d&&h){let Re={"+x":[1,0],"-x":[-1,0],"+z":[0,1],"-z":[0,-1]}[h],Be=Re[0]?Re[0]*K/2:0,at=Re[1]?Re[1]*j/2:0,ce=Re[0]?j:K,Ee=(De,we,ke)=>[Be+Re[0]*ke+(Re[0]?0:De),we,at+Re[1]*ke+(Re[0]?De:0)],ye=(De,we,ke,Ye,k,C,ie,$=0)=>{let[J,ue,pe]=Ee(k,C,ie);Pe.add(ne.box(Re[0]?ke:De,we,Re[0]?De:ke),Ye,J,ue,pe,Re[0]?0:$*Re[1],0,Re[0]?-$*Re[0]:0)};for(let De=3.1;De<U-1;De+=2.6)ye(ce,.12,.24,M.ledge,0,De,.12);for(let De=3.6;De<U-1.5;De+=2.6){if(St()<.5){let we=(St()-.5)*(ce-1.6);ye(1.4,.1,.7,M.ledge,we,De-.4,.35);for(let ke=0;ke<=6;ke++)ye(.025,.8,.025,M.rail,we-.7+ke*.233,De,.68);ye(1.4,.04,.04,M.rail,we,De+.4,.68),f&&St()<.6&&f.push({at:new b(...Ee(we+.3,De+.25,.55)).add(_e.position),rotY:Re[0]?Math.PI/2:0})}St()<.4&&ye(.6,.42,.45,M.ac,(St()-.5)*(ce-1),De+.6,.24)}St()<.5&&ye(.08,U-.5,.08,M.pipe,(St()-.5)*ce*.9,U/2,.06);let Ce=St()*Dm.length|0;ye(Math.min(2.2,ce-.5),2.2,.06,M.shutter,0,1.1,.04),ye(Math.min(2.4,ce-.3),.55,.08,M.signs[Ce],0,2.62,.08),St()<.55&&ye(Math.min(2.6,ce-.2),.03,1.1,M.awnings[St()*4|0],0,2.25,.55,-.25)}if(g){let Re=new ft().makeTranslation(_e.position.x,0,_e.position.z);for(let[Be,at]of Pe.groups)g.groups.has(Be)||g.groups.set(Be,[]),at.forEach(ce=>{ce.applyMatrix4(Re),g.groups.get(Be).push(ce)});Pe.groups.clear()}else Pe.build(_e,{cast:!0,receive:!0});x+=T}return{minX:e,maxX:t,minZ:n,maxZ:s}}function mh(i,e,t,n,{w:s=2.4,d:r=1.1,tarp:o=0}={}){let a=new nt;a.position.set(e,0,t),a.rotation.y=n,i.add(a);let l=Lm(),c=zn(zt.plywood()),u=new rn;u.add(ne.box(s,.9,r),c,0,.45,0),u.add(Tn(s+.1,r+.1,.05,.02),Le(9071178,{roughness:.9}),0,.9,0),[[-s/2,-r/2-.8,2.7],[s/2,-r/2-.8,2.7],[-s/2,r/2,2.4],[s/2,r/2,2.4]].forEach(([d,f,g])=>u.add(ne.box(.06,g,.06),Le(3811866),d,g/2,f)),u.build(a);let h=new Ie(new mt(s+.6,r+1.5,4,3),l.awnings[o%l.awnings.length]);{let d=h.geometry.attributes.position;for(let f=0;f<d.count;f++){let g=d.getX(f)/((s+.6)/2),v=d.getY(f)/((r+1.5)/2);d.setZ(f,-.08*(1-g*g)*(1-v*v))}h.geometry.computeVertexNormals()}return h.rotation.x=-Math.PI/2+.2,h.position.set(0,2.55,-.35),h.castShadow=!0,h.receiveShadow=!0,a.add(h),a}function Qo(i,e,t=Le(1118481,{roughness:.6})){let n=new rn;return e.forEach(([s,r,o,a])=>n.add(qo(s,r,o,a||.012),t)),n.build(i,{cast:!1,receive:!1})}function el(i,e,t,n,s=4){let r=[],o=new mt(.42,.6,2,2);o.translate(0,-.3,0);for(let a=0;a<s;a++){let l=(a+.5)/s,c=e.clone().lerp(t,l);c.y-=.25*Math.sin(l*Math.PI);let u=new nt;u.position.copy(c),u.rotation.y=Math.atan2(t.x-e.x,t.z-e.z)+Math.PI/2,i.add(u);let h=new Ie(o,n[a%n.length]);h.castShadow=!0,u.add(h),r.push(u)}return r}var Um=0,TE={x0:8,x1:22,z0:2.4,z1:5.4,bx1:19.3},tl={x0:22,x1:40,z0:-4,z1:12,exitZ0:7,exitZ1:9.6},Li={x:36.6,z:11.2};function Nm(i){let e=[new b(-.068,-.25,-.33),new b(.068,-.25,-.33)],t=[new b(-.12,-.42,-.3),new b(.12,-.42,-.3)],n=[-1,1].map(R=>new Ft(-.6,-R*.25,R*(Math.PI-.9),"YXZ")),s=[-1,1].map(R=>{let z=new b(0,Math.sin(.22),-Math.cos(.22)),N=new b(-R*.36,.93,0);N.addScaledVector(z,-N.dot(z)).normalize();let le=z.clone().negate(),W=N.clone().negate(),ae=new b().crossVectors(W,le);return new Ft().setFromRotationMatrix(new ft().makeBasis(ae,W,le),"YXZ")}),{scene:r,audio:o,interactor:a,player:l,ui:c,thread:u,hands:h,bagCtl:d,lights:f,police:g,pursuit:v,camera:m}=i,p=new nt;p.name="street",r.add(p);let M=[],x=new rn,_=[0,1,2,3,4,5].map(R=>new et({map:gi(["buti","stripe","check","paisley","border","buti"][R],R,128),side:Rt,roughness:.95})),S=(R,z)=>{let N=zt.dirt().clone();return N.needsUpdate=!0,N.repeat.set(R,z),new et({map:N,roughness:1})},P=[],T=TE,U=T.x1-T.x0,Y=(T.z0+T.z1)/2,y=new Ie(new mt(U,T.z1-T.z0+.4),S(U/3,1.2));y.rotation.x=-Math.PI/2,y.position.set(T.x0+U/2,0,Y),y.receiveShadow=!0,p.add(y),x.add(ne.box(U,.02,.28),Le(3813414,{roughness:.35}),T.x0+U/2,.006,T.z1-.22),x.add(ne.box(U,.06,.06),Le(6971992,{roughness:.9}),T.x0+U/2,.03,T.z1-.38);let A=new et({map:(()=>{let R=new Qt(zt.facade("#8a8476"));return R.colorSpace=Dt,R.wrapS=R.wrapT=Ln,R.repeat.set(1,2),R})(),roughness:.95,flatShading:!0}),Z=(R,z,N,le)=>{let W=new Ie(new mt(z-R,le-N),A);W.position.set(T.x0+.02,(N+le)/2,(R+z)/2),W.rotation.y=Math.PI/2,W.receiveShadow=!0,p.add(W)};Z(T.z0-.1,3.2,0,8),Z(4.6,T.z1+.1,0,8),Z(3.2,4.6,2.6,8);let K=["#b9a27f","#8fa3a0","#c29a8e","#a9a17a","#9aa0b4","#b48c6a","#a6b08e"];M.push(Ds(p,T.x0+.05,T.bx1,T.z0-4,T.z0,{colours:K,hMin:6,hMax:10,face:"+z",batch:x,cloths:P})),M.push(Ds(p,T.x0+.05,T.bx1,T.z1,T.z1+4,{colours:K,hMin:6,hMax:10,face:"-z",batch:x,cloths:P}));let j=[];for(let R=0;R<24;R++){let z=T.x0+1+vt()*(U-2),N=3.8+vt()*3;j.push([new b(z,N,T.z0),new b(z+(vt()-.5)*4,N+(vt()-.5),T.z1),.2+vt()*.5,.012])}for(let R=0;R<6;R++){let z=T.z0+.25+vt()*(T.z1-T.z0-.5),N=4+vt()*2;j.push([new b(T.x0+.2,N,z),new b(T.x0+6+vt()*8,N,z),.5,.01])}Qo(p,j);let xe=[[10.2,3.3],[14.6,3.6],[17.8,3.2]].flatMap(([R,z])=>el(p,new b(R,z,T.z0+.1),new b(R+.5,z,T.z1-.1),_,4));{let R=new nt;R.position.set(11.6,0,T.z1-.22),R.rotation.z=.1,p.add(R);let z=Le(2763306,{metalness:.6,roughness:.45}),N=new rn;[-.5,.5].forEach(ae=>{N.add(new Ii(.33,.02,6,22),z,ae,.35,0),N.add(new Ii(.31,.008,4,12),Le(1118481),ae,.35,0)});let le=(ae,Fe)=>{let lt=Fe.clone().sub(ae),ut=new En().setFromUnitVectors(new b(0,1,0),lt.clone().normalize()),je=new Ft().setFromQuaternion(ut),Ct=ae.clone().add(Fe).multiplyScalar(.5);N.add(ne.cyl(.015,.015,lt.length(),5),z,Ct.x,Ct.y,Ct.z,je.x,je.y,je.z)},W=(ae,Fe)=>new b(ae,Fe,0);le(W(-.5,.35),W(0,.35)),le(W(0,.35),W(.35,.8)),le(W(-.5,.35),W(-.15,.8)),le(W(-.15,.8),W(.35,.8)),le(W(0,.35),W(-.15,.8)),le(W(.5,.35),W(.38,.95)),N.add(ne.box(.04,.02,.45),z,.4,.97,0),N.add(Tn(.18,.08,.04,.02),Le(3810328),-.17,.83,0),N.build(R),M.push({minX:10.9,maxX:12.3,minZ:T.z1-.5,maxZ:T.z1})}let te=new Ei([[.001,0],[.26,.02],[.3,.2],[.28,.45],[.18,.62],[.07,.68],[.001,.7]].map(([R,z])=>new Se(R,z)),8),he=Le(11575424,{flatShading:!0,roughness:1});[[9,T.z0+.35,1],[9.5,T.z0+.3,.8],[15.2,T.z1-.35,.9]].forEach(([R,z,N])=>x.add(te,he,R,0,z,.05,vt()*6,0,N,N*(.9+vt()*.2),N)),x.add(ne.cyl(.18,.14,.32,12),Le(2779802,{roughness:.5}),13.4,.16,T.z0+.3),x.add(ne.cyl(.04,.05,.9,8),Le(3820098,{metalness:.5,roughness:.5}),13.9,.45,T.z0+.2),x.add(ne.box(.35,.06,.06),Le(3820098,{metalness:.5}),13.9,.92,T.z0+.3,0,0,-.3),x.add(ne.box(.5,.35,.4),zn(zt.cardboard()),14.6,.18,T.z0+.32),x.add(ne.box(.4,.3,.35),zn(zt.cardboard()),14.65,.5,T.z0+.3,0,.3,0),M.push({minX:8.6,maxX:10,minZ:T.z0,maxZ:T.z0+.75},{minX:13.1,maxX:15,minZ:T.z0,maxZ:T.z0+.6}),x.add(ne.cyl(.004,.004,.4,4),Le(1118481),12.4,3.1,T.z0+.3);let oe=new Ie(new en(.05,10,8),new yt({color:new ve(1,.8,.5).multiplyScalar(3)}));oe.position.set(12.4,2.88,T.z0+.3),p.add(oe),f.add({pos:new b(12.4,2.75,T.z0+.5),color:16756838,intensity:4,distance:6,space:"street"});let{x0:_e,x1:Pe,z0:Re,z1:Be}=tl,at=(_e+Pe)/2,ce=(Re+Be)/2,Ee=new Ie(new mt(Pe-_e+.2,Be-Re+.2),S(6,5));Ee.rotation.x=-Math.PI/2,Ee.position.set(at,0,ce),Ee.receiveShadow=!0,p.add(Ee),Ee.material=Ee.material.clone(),Object.assign(Ee.material,{polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:4});let ye=["#c9b48a","#b8a0a0","#a8b8a8","#c8a878","#b0a8c0","#c0906a","#d0c098","#9ab0b8"];M.push(Ds(p,T.bx1,_e,-8,T.z0,{colours:ye,face:"+x",batch:x,cloths:P}),Ds(p,T.bx1,_e,T.z1,16,{colours:ye,face:"+x",batch:x,cloths:P}),Ds(p,_e,Pe,Be,16,{colours:ye,face:"-z",batch:x,cloths:P}),Ds(p,_e,Pe,-8,Re,{colours:ye,face:"+z",batch:x,cloths:P}));let Ce=[];for(let R=0;R<16;R++){let z=_e+vt()*(Pe-_e);Ce.push([new b(z,5+vt()*2,Re),new b(z+(vt()-.5)*8,5+vt()*2,Be),.6+vt(),.014])}Qo(p,Ce);{let R=new Gt().setAttribute("position",new Tt([-.12,0,0,.12,0,0,0,-.28,0],3));R.computeVertexNormals();let z=new rn,N=[14262826,11879470,3107663,15327695,2906778,12868218];[[[23,4.2,-1],[39,4.6,6]],[[24,4.4,11.5],[38.5,4,2]]].forEach(([le,W])=>{let ae=new b(...le),Fe=new b(...W);Ce.length=0,Qo(p,[[ae,Fe,.8,.006]]);for(let lt=1;lt<26;lt++){let ut=lt/26,je=ae.clone().lerp(Fe,ut);je.y-=.8*4*ut*(1-ut),z.add(R,Le(N[lt%6],{side:Rt,roughness:1}),je.x,je.y,je.z,0,Math.atan2(Fe.x-ae.x,Fe.z-ae.z)+Math.PI/2,0)}}),z.build(p,{cast:!0,receive:!1})}let De=mh(p,31,-2.3,0,{tarp:1});M.push({minX:29.7,maxX:32.3,minZ:-3.6,maxZ:-1.75});let we=new rn;we.add(ne.cyl(.3,.24,.32,16),Le(6974056,{metalness:.6,roughness:.4}),.6,1.1,-.15),we.add(ne.cyl(.32,.32,.03,16),Le(4868680,{metalness:.6,roughness:.4}),.6,.94,-.15),we.add(ne.cyl(.35,.3,.05,14),Le(2761760,{metalness:.4}),-.5,.95,-.15);for(let R=0;R<10;R++)we.add(ne.cyl(.12,.12,.012,14),Le(14198888,{roughness:.9}),-.55+(vt()-.5)*.02,.96+R*.013,.22);for(let R=0;R<6;R++)we.add(new Ac(.06),Le(13144106,{flatShading:!0}),-.05+R%3*.12,.97,.25+Math.floor(R/3)*.1,vt(),vt(),vt());for(let R=0;R<4;R++)we.add(ne.cyl(.07,.05,.05,10),Le(12632252,{metalness:.85,roughness:.25}),.2+R*.15,.95,.35);we.build(De);let ke=new Ie(new mt(.9,.45),zn(zt.price()));ke.position.set(0,2.03,1),ke.rotation.x=-.08,De.add(ke),[-.38,.38].forEach(R=>{let z=new Ie(ne.cyl(.004,.004,.1,4),Le(2760728));z.position.set(R,2.3,.98),De.add(z)});let Ye=new nt;Ye.position.set(.05,.94,.35),De.add(Ye);let k=new et({color:14200944,roughness:.8,emissive:16751152,emissiveIntensity:0}),C=new Ie(Tn(.24,.18,.1,.03,.01),k);C.castShadow=!0,Ye.add(C);let ie=new Wn({map:zt.dot(),color:16777215,transparent:!0,opacity:.12,depthWrite:!1}),$=Array.from({length:6},(R,z)=>{let N=new Nn(ie.clone());return N.position.set(.6,1.3+z*.15,-.15),N.scale.setScalar(.3),De.add(N),N});f.add({pos:new b(31,2.2,-2),color:16756838,intensity:3,distance:6,space:"street"}),x.add(ne.cyl(.004,.004,.3,4),Le(1118481),31,2.42,-2);let J=new Ie(new en(.05,10,8),oe.material);J.position.set(31,2.27,-2),p.add(J);let ue=_n({top:14735560,bottom:5917242,skin:7030320,outfit:"kurta",cap:!0,mustache:!0,seed:201,scale:1.3});ue.position.set(31,0,-3.25),p.add(ue);let pe=new b(31,1,-1.55),G=[0,1,2].map(()=>{let R=new Ie(new Nt(.022,.022,.006,14),Le(13148224,{metalness:.9,roughness:.3}));return R.visible=!1,p.add(R),R}),w=mh(p,28,10.6,Math.PI,{tarp:2});M.push({minX:26.7,maxX:29.3,minZ:9.9,maxZ:12}),el(w,new b(-1.1,2.1,-.75),new b(1.1,2.1,-.75),_,6).forEach(R=>P.push({piv:R}));{let R=new rn,z=Le(1118481,{roughness:.3,metalness:.35});R.add(ne.box(.5,.05,.25),z,.5,.97,0),R.add(ne.box(.4,.08,.1),z,.5,1.2,0),R.add(ne.box(.08,.25,.12),z,.68,1.08,0);for(let N=0;N<5;N++)R.add(ne.box(.36,.03,.28),_[N],-.5,.94+N*.03,.05,0,vt()*.3,0);R.build(w)}let E=_n({top:9083560,bottom:3816e3,skin:8016438,outfit:"shirt",sleeves:"elbow",glasses:!0,seed:202,scale:1.3});E.position.set(28,0,11.45),E.rotation.y=Math.PI,p.add(E),mh(p,25.5,-2.6,0,{w:1.6,tarp:0}),M.push({minX:24.6,maxX:26.4,minZ:-3.7,maxZ:-2}),x.add(ne.cyl(.12,.1,.22,12),Le(9071162,{metalness:.6,roughness:.4}),25.2,1.03,-2.5);for(let R=0;R<6;R++)x.add(ne.cyl(.025,.022,.07,8),Le(14207144,{roughness:.3}),25.6+R%3*.08,.96,-2.3+Math.floor(R/3)*.08);f.add({pos:new b(25.5,2.25,-2.4),color:16756838,intensity:2.6,distance:5,space:"street"});let F=_n({top:6969930,bottom:15327695,outfit:"kurta",skin:7225896,seed:203,scale:1.3});F.position.set(25.5,0,-3.3),p.add(F);{let R=new nt;R.position.set(36.6,0,-2.6),R.rotation.y=.15,p.add(R);let z=new rn;z.add(ne.box(1.8,.1,.9),zn(zt.plywood()),0,.8,0),[-.6,.6].forEach(N=>z.add(new Ii(.35,.045,6,18),Le(2763306),N,.35,.48)),z.add(ne.box(.05,.05,1.2),Le(3811866),-1.2,.75,0,0,0,.3),z.add(ne.box(.05,.05,1.2),Le(3811866),-1.2,.75,0,0,0,.3);for(let N=0;N<30;N++)z.add(new wi(.07,0),Le([15245344,6986282,14174752][N%3],{flatShading:!0}),-.75+N%10*.16,.92+Math.floor(N/10)*.06,-.3+Math.floor(N/10)*.22);z.build(R,{cast:!0}),M.push({minX:35.5,maxX:37.7,minZ:-3.35,maxZ:-1.85})}let re=new Ie(new mt(2,1.4),_[2]);re.rotation.x=-Math.PI/2,re.position.set(29,.008,5.6),re.receiveShadow=!0,p.add(re);for(let R=0;R<16;R++)x.add(new wi(.07,0),Le([11546666,4885034,14207136,8010378][R%4],{flatShading:!0}),28.25+R%8*.2,.06,5.3+Math.floor(R/8)*.5);let B=_n({female:!0,top:8007482,bottom:10111546,scarf:14262826,skin:7030320,seed:204,scale:1.25});Xo(B),B.position.set(29,0,6.55),B.rotation.y=Math.PI,p.add(B);let me=new nt;me.position.set(23.2,0,-3.3),p.add(me);{let R=new rn;for(let z=0;z<14;z++)R.add(ne.box(.3+vt()*.3,.04,.25),_[z%6],(vt()-.5)*.9,.04+z*.03,(vt()-.5)*.5,vt()*.4,vt()*3,vt()*.4);R.add(te,he,.6,0,.2,0,1,0,.8,.8,.8),R.build(me)}M.push({minX:22.4,maxX:24,minZ:-3.9,maxZ:-2.8});let Ne=new Ie(new At(.8,.02,.6),zn(zt.cardboard()));Ne.position.set(Li.x,.012,Li.z),Ne.receiveShadow=!0,p.add(Ne);let Ue=[[Li.x-1.2,.2],[Li.x+1.15,-.3]].map(([R,z],N)=>{let le=_n({child:!0,female:N===1,top:N?6969962:5921354,bottom:3815994,skin:5913126,seed:210+N,scale:1.3});if(Xo(le,{hug:N===0}),le.position.set(R,0,Li.z+.05),le.rotation.y=Math.PI+z,p.add(le),N===1){let W=le.userData.J;W.shL.rotation.set(-1.25,0,.2),W.shR.rotation.set(-1.25,0,-.2),W.elL.rotation.x=-.3,W.elR.rotation.x=-.3}return le}),V=420,q=new Gt,D=new Float32Array(V*3);for(let R=0;R<V;R++)D[R*3]=it(T.x0+2,Pe,vt()),D[R*3+1]=vt()*4,D[R*3+2]=it(-2,10,vt());q.setAttribute("position",new sn(D,3));let fe=new cs(q,new Cs({size:.045,map:zt.dot(),transparent:!0,opacity:.6,color:16760171,blending:vn,depthWrite:!1}));fe.frustumCulled=!1,p.add(fe),P.filter(R=>R.at).forEach((R,z)=>{let N=new nt;N.position.copy(R.at),N.rotation.y=R.rotY,p.add(N);let le=new mt(.4,.6);le.translate(0,-.3,0);let W=new Ie(le,_[z%6]);W.castShadow=!0,N.add(W),R.piv=N});let Ve=[...xe,...P.map(R=>R.piv).filter(Boolean)];x.build(p,{cast:!0,receive:!0});let ct=[[[23,4],[30,4],[37,6],[38.5,9],[30,8.8],[24,7]],[[24,1],[33,.6],[38,1.5],[38,5],[33,6.4],[25,5.8]],[[38,9.6],[33,9.5],[27,8.4],[23,8.6],[27,9.4],[33,10]]],Oe=[];for(let R=0;R<15;R++){let z=cf(R),N=ct[R%3].map(([W,ae])=>new b(W+(vt()-.5)*.8,0,ae+(vt()-.5)*.8));R%2&&N.reverse();let le=R%N.length;z.position.copy(N[le]),p.add(z),Object.assign(z.userData,{path:N,seg:(le+1)%N.length,v:.95+vt()*.4,walk:1,lastStep:0}),Oe.push(z)}[[38,-.4,2.5],[38.7,.3,-.6]].forEach(([R,z,N],le)=>{let W=cf(le+11);W.position.set(R,0,z),W.rotation.y=N,W.userData.walk=0,W.userData.idle=!0,p.add(W),Oe.push(W)});let ee={phase:"idle",t:0,idle:0,beg:0,ended:!1},st=a.add({object:De,label:"Buy food",enabled:()=>ee.phase==="toStall",onPress:()=>de("counting"),maxDist:2.8}),Et=a.add({object:me,label:"Pick up the scraps",enabled:()=>ee.phase==="toScraps",onPress:()=>de("scrapping")}),X=a.add({object:E,label:"Sell the scraps",enabled:()=>ee.phase==="toTailor",onPress:()=>de("refused"),maxDist:3.2}),We=a.add({object:Ne,label:"Sit down",enabled:()=>ee.phase==="toBeg",onPress:()=>de("sitting"),maxDist:2.8}),ge=a.add({object:Ye,label:"Take it",enabled:()=>ee.phase==="toSteal",onPress:()=>de("stealing"),maxDist:2.8});[st,Et,X,We,ge].forEach(R=>{R.space="street"});let Ae=[],Xe={},Ke=new Lt;Ke.position.set(at,2,ce),p.add(Ke);let Mt=new Lt;Mt.position.set(31,1.4,-2.3),p.add(Mt);let kt=new Lt;kt.position.set(15,2,Y),p.add(kt);function dn(){o.stopAll(Ae),Ae=[],Xe={};let R=(z,N)=>(N&&(Xe[z]=N,Ae.push(N)),N);R("market",o.loop("market",{object:Ke,volume:.45,ref:6})),R("street",o.loop("street",{object:kt,volume:.15,ref:4})),R("fry",o.loop("fire",{object:Mt,volume:.04,ref:.6})),R("heart",o.loop("heartbeat",{volume:0}))}let se=new b,$e=new b,O=new b,Te=(R,z=5)=>c.hint(R,z),ze=(R,z)=>c.thought(R,z);function de(R){ee.phase=R,ee.t=0,ee.idle=0,ee.enter=!0}let Je={toStall:pe,toScraps:new b(23.3,.5,-2.6),toTailor:new b(28,1.2,9.6),toBeg:new b(Li.x,.3,Li.z),toSteal:pe,flee:new b(Pe+1.5,1,(tl.exitZ0+tl.exitZ1)/2)};function ot(){Object.assign(ee,{phase:"idle",t:0,idle:0,beg:0,ended:!1,tension:0,flee:0,glanceT:2,glance:0,saidClose:!1}),Ni(),ue.rotation.y=0,ue.userData.look=0,E.userData.look=0,Ye.visible=!0,k.emissiveIntensity=0,G.forEach(R=>{R.visible=!1}),g.forEach((R,z)=>{R.position.set(25.6+z*.95,0,9.2+z*.35),R.rotation.y=2.2+z*1.9,R.userData.walk=0}),v&&v.stop()}function Rn(){ot(),dn(),l.canMove=!0,l.canRun=!0,de("toStall"),ze("I haven't eaten since morning.",4),ee.hintAt=3.5}function on(){o.stopAll(Ae),Ae=[],Xe={},Ni()}let Jt=document.getElementById("fear"),Vt=null;function Ni(){Jt&&(Jt.classList.remove("dark"),Jt.style.opacity=0),Vt!==null&&(m.fov=Vt,m.updateProjectionMatrix(),Vt=null)}function In(R,z,N,le){ee.tension=Xt(ee.tension,N,2.5,R);let W=ee.tension;Xe.heart&&(Xe.heart.setVolume(.06+.9*W),Xe.heart.setPlaybackRate(le)),Xe.market&&Xe.market.setVolume(.45*(1-.55*W)),Xe.fry&&Xe.fry.setVolume(.04+.03*W);let ae=z*le/.8%1,Fe=Math.exp(-ae*9)+.6*Math.exp(-Math.max(0,ae-.35)*9)*(ae>.35?1:0);Jt&&(Jt.classList.add("dark"),Jt.style.opacity=String(Math.min(1,W*(.35+.4*Fe)))),l.xr||(Vt===null&&(Vt=m.fov),m.fov=Vt-W*(3+1.5*Fe),m.updateProjectionMatrix())}function an(R){let z=ee.phase;if(z==="scrapping"&&ee.t<.7)h.set(0,{key:"scraps",mode:"world",pos:new b(23.1,.45,-2.85),rot:mi.toward(-1,se,O.set(23.2,.2,-3.3)),pose:"grip",blend:.35});else if(z==="stealing"&&ee.t<.55)Ye.getWorldPosition($e),h.set(0,{key:"steal",mode:"world",pos:$e.clone().add(O.set(-.02,.06,.12)),rot:mi.toward(-1,se,$e),pose:"grip",blend:.3});else if(z==="begging"||z==="sitting"){let N=(l.keys.KeyE||ee.xrBeg)&&z==="begging";d.stow=1,[0,1].forEach(le=>{let W=le?1:-1;h.set(le,N?{key:"cup",mode:"cam",pos:e[le],rot:s[le],pose:"cup",blend:.3}:{key:"lap",mode:"cam",pos:t[le],rot:n[le],pose:"relax",blend:.3})})}else(!d.open||d.stow>.5)&&(h.h[0].key&&h.h[0].key!=="bag-rimL"&&h.hide(0),d.stow>.5&&z!=="begging"&&z!=="sitting"&&h.hide(1))}function Fn(R,z,N=!0){if(l.headWorld(se),Oe.forEach(W=>{let ae=W.userData;if(ae.idle){Di(W,z,R);return}let Fe=ae.path[ae.seg],lt=Fe.x-W.position.x,ut=Fe.z-W.position.z,je=Math.hypot(lt,ut),Ct=Math.hypot(se.x-W.position.x,se.z-W.position.z),qt=ae.v*(Ct<1.2?.55:1);if(je<.2?ae.seg=(ae.seg+1)%ae.path.length:(W.position.x+=lt/je*qt*R,W.position.z+=ut/je*qt*R,W.rotation.y=Xt(W.rotation.y,W.rotation.y+Math.atan2(Math.sin(Math.atan2(lt,ut)-W.rotation.y),Math.cos(Math.atan2(lt,ut)-W.rotation.y)),6,R)),Ct<.8&&Ct>.01){let Bn=.8/Ct;W.position.x=se.x+(W.position.x-se.x)*Bn,W.position.z=se.z+(W.position.z-se.z)*Bn}ae.stride+=qt*R,ae.walk=1,Ur(W,z,R);let ln=Math.floor(ae.stride/.7);ln!==ae.lastStep&&(ae.lastStep=ln,Um>0&&Ct<2&&o.ready&&N&&o.oneShot("step",{object:W,volume:Um,rate:.9+Math.random()*.25,ref:1.2}))}),$.forEach((W,ae)=>{let Fe=(z*.3+ae/6)%1;W.position.y=1.25+Fe*.9,W.material.opacity=.14*(1-Fe),W.scale.setScalar(.2+Fe*.4)}),[ue,E,F].forEach(W=>Di(W,z,R)),Ve.forEach((W,ae)=>{W.rotation.x=.08*Math.sin(z*1.1+ae*1.3),W.rotation.z=.04*Math.sin(z*.8+ae)}),(!v||!v.active)&&g.forEach(W=>{W.userData.walk<.05?Di(W,z,R):Ur(W,z,R)}),fe.visible){let W=q.attributes.position;for(let ae=0;ae<V;ae++){let Fe=W.getY(ae)+R*.04;Fe>4&&(Fe=0),W.setY(ae,Fe)}W.needsUpdate=!0}if(ee.phase==="idle"||ee.phase==="done"||!N)return;ee.t+=R,ee.idle+=R;let le=ee.enter;switch(ee.enter=!1,u.urgent=ee.idle>20,ee.idle>20&&ee.idle-R<=20&&Ge(),ee.hintAt&&ee.t>ee.hintAt&&(ee.hintAt=0,ee.phase==="toStall"&&Te("Find the food stall \u2014 look for the glow",5),ee.phase==="toScraps"&&Te("Pick up the cloth scraps by the wall",5)),an(z),ee.phase){case"counting":{d.forceOpen=ee.t<4.2?1:0,ue.userData.look=ee.t>1.8&&ee.t<3.2?Math.sin((ee.t-1.8)*14)*.45:Xt(ue.userData.look,0,4,R),G.forEach((W,ae)=>{let Fe=.5+ae*.4;if(ee.t>Fe&&ee.t<3.4){W.visible||(W.visible=!0,o.oneShot("coin",{object:Mt,volume:.8}),d.setCoins(2-ae));let lt=Math.min(1,(ee.t-Fe)/.45);d.worldMouth($e),W.position.lerpVectors($e,O.set(30.8+ae*.12,.965,-1.78),wt(lt)),W.position.y+=Math.sin(lt*Math.PI)*.2,W.rotation.x=(1-lt)*6}}),ee.t>1.6&&ee.t-R<=1.6&&c.subtitle('Vendor: "Ten rupees. This is six."',3),ee.t>3&&ee.t-R<=3&&ze("Six rupees. A plate is ten.",3.5),ee.t>3.4&&ee.t-R<=3.4&&(G.forEach(W=>{W.visible=!1}),d.setCoins(3),o.oneShot("coins",{volume:.5})),ee.t>6.5&&(de("toScraps"),ze("Maybe I can sell something\u2026",4),ee.hintAt=3);break}case"scrapping":ee.t>.55&&ee.t-R<=.55&&(d.setContents({scraps:!0}),d.forceOpen=1,o.oneShot("fabric",{volume:.7})),ee.t>1.6&&(d.forceOpen=0,de("toTailor"),ze("The tailor might pay something for these.",4));break;case"refused":E.userData.look=ee.t<2?Math.sin(ee.t*10)*.3:0;{let W=E.userData.J,ae=ee.t<2.2?Math.min(1,ee.t*4):Math.max(0,1-(ee.t-2.2)*3);W.shR.rotation.set(-1.4*ae,0,-.3*ae+Math.sin(ee.t*12)*.25*ae),W.elR.rotation.x=-.6*ae}ee.t>.4&&ee.t-R<=.4&&c.subtitle('Tailor: "Scraps? Everyone has scraps. Go."',3.5),ee.t>4&&ee.t-R<=4&&ze("The other kids sit by the wall. Maybe someone will help.",4.5),ee.t>5&&de("toBeg");break;case"sitting":{le&&(l.canMove=!1,ee.from=l.dolly.position.clone(),ee.fromEye=l.eye,ee.fromYaw=Math.atan2(Math.sin(l.yaw),Math.cos(l.yaw)),d.stow=1);let W=wt(Math.min(1,ee.t/1.2));l.dolly.position.lerpVectors(ee.from,$e.set(Li.x,ee.from.y,Li.z-.05),W),l.xr||(l.eye=it(ee.fromEye,.82,W),l.yaw=it(ee.fromYaw,0,W),l.pitch=it(l.pitch,-.05,W)),ee.t>1.3&&(de("begging"),Te(l.xr?"Hold the trigger to hold out your hands":"Hold E to hold out your hands",8));break}case"begging":{let W=l.keys.KeyE||ee.xrBeg;W&&(ee.beg+=R,ee.idle=0),Oe.forEach(ae=>{let Fe=Math.hypot(ae.position.x-Li.x,ae.position.z-Li.z);ae.userData.look=Fe<2.4&&W?.5:0,ae.userData.lookPitch=Fe<2.4&&W?.35:0}),ee.beg>.5&&ee.beg-R<=.5&&ze("Please\u2026",2.5),ee.beg>4.5&&ee.beg-R<=4.5&&ze("They don't even look down.",3.5),ee.beg>9.5&&ee.beg-R<=9.5&&ze("It's like I'm not here.",3.5),(ee.beg>13||ee.t>45)&&(de("standUp"),h.hide());break}case"standUp":{let W=wt(Math.min(1,ee.t/1));l.xr||(l.eye=it(.82,1.52,W)),ee.t>.5&&(d.stow=0),ee.t>1.1&&(l.canMove=!0,ue.rotation.y=Math.PI,Oe.forEach(ae=>{ae.userData.look=0,ae.userData.lookPitch=0}),de("toSteal"),ze("The vendor turned away. Nobody is watching the food.",4.5));break}case"toSteal":{k.emissiveIntensity=.35+.25*Math.sin(z*4);let W=Math.hypot(se.x-pe.x,se.z-pe.z),ae=wt(Ht(1-(W-.9)/8,0,1));In(R,z,.15+.85*ae,.85+.95*ae),ee.glanceT-=R,ee.glanceT<0&&(ee.glanceT=2.5+Math.random()*2.5,ee.glance=ae>.4?1:0),ee.glance=Math.max(0,(ee.glance||0)-R*1.4),ue.rotation.y=Math.PI-.35*Math.sin(Math.min(1,ee.glance)*Math.PI),ae>.75&&!ee.saidClose&&(ee.saidClose=!0,ze("Don't turn around. Don't turn around\u2026",3));break}case"stealing":if(In(R,z,ee.t<1?1:.85,ee.t<1?1.9:2.1),ee.t>.5&&ee.t-R<=.5&&(Ye.visible=!1,k.emissiveIntensity=0,d.setContents({food:!0}),d.glow=.3,d.forceOpen=1,o.oneShot("fabric",{volume:.8}),h.hide(0)),ee.t>1&&ee.t-R<=1&&(d.forceOpen=0,ue.rotation.y=0,o.oneShot("yells",{object:Mt,volume:.6}),o.oneShot("whistle",{object:g[0],volume:.9,ref:3}),c.subtitle('Vendor: "Chor! Thief! Stop!"',3)),ee.t>1){let W=ue.userData.J,ae=Math.min(1,(ee.t-1)*4);W.shR.rotation.set(-1.6*ae,0,-.2*ae)}ee.t>1.8&&(v.speed=1.9,v.start(),l.jogAllowed=!0,de("flee"),ze("Run.",2.5),Te(l.xr?"Push the left stick to run":"Hold Shift to run",4));break;case"flee":{v.update(R),ee.idle=0,ee.flee=Math.max(ee.flee,wt(Ht((se.x-31)/(Pe-31),0,1))),In(R,z,.7,1.9+.3*ee.flee),Jt&&Jt.classList.remove("dark"),Vt!==null&&!l.xr&&(m.fov=Xt(m.fov,Vt,2,R),m.updateProjectionMatrix()),g.forEach(W=>Ur(W,z,R)),se.x>Pe+.4&&!ee.ended&&(ee.ended=!0,u.set(null),Vt!==null&&(m.fov=Vt,m.updateProjectionMatrix(),Vt=null),i.carryFear=ee.tension,de("done"),H&&H("nightmare"));break}}u.set(Je[ee.phase]||null)}function Ge(){let R={toStall:"Find the food stall (look for the glow)",toScraps:"Pick up the cloth scraps by the wall",toTailor:"Take the scraps to the tailor",toBeg:"Sit on the carton with the other children",begging:"Hold E to hold out your hands",toSteal:"Take the food from the counter"}[ee.phase];R&&Te(R,5)}function L(R){let z=Ht((R-17)/5,0,1),N=ee.flee||0,le={fog:new ve(10121282).lerp(new ve(14000739),z),density:it(.042,.028,z),sun:it(1.7,4,z),hemi:it(.5,.82,z),hemiSky:new ve(13146212).lerp(new ve(15978131),z),hemiGround:new ve(3811868).lerp(new ve(5915696),z),sky:it(.85,1.1,z),skyTint:new ve(1,.96,.87),exposure:it(.98,1.08,z)};return N>0&&(le.fog.lerp(new ve(11569760).lerp(new ve(1836296),.24),N),le.density=it(le.density,.055,N),le.sun=it(le.sun,1.4,N),le.hemi=it(le.hemi,.67,N),le.sky=it(le.sky,.88,N),le.exposure=it(le.exposure,.97,N),le.skyTint.lerp(new ve(1,1,1).lerp(new ve(.55,.08,.12),.2),N)),le}let H=null;return{root:p,update:Fn,start:Rn,stop:on,reset:ot,atmosphere:L,name:"street",zone:{minX:8.4},onEnd(R){H=R},getColliders(){return M},setQuality(R){fe.visible=!0,q.setDrawRange(0,R==="low"?Math.floor(V*.4):V)},get phase(){return ee.phase},setXRBeg(R){ee.xrBeg=R},skip(){let R=ee.phase;R==="toStall"?(l.place(31,-.8,0,1.52),de("counting")):["counting","refused","sitting","standUp","stealing","scrapping"].includes(R)?ee.t=99:R==="toScraps"?(l.place(23.3,-1.9,0,1.52),de("scrapping")):R==="toTailor"?(l.place(28,8.6,Math.PI,1.52),de("refused")):R==="toBeg"?(l.place(Li.x,Li.z-1.4,Math.PI,1.52),de("sitting")):R==="begging"?ee.beg=99:R==="toSteal"?(l.place(31,-.8,0,1.52),de("stealing")):R==="flee"&&l.place(Pe+1,8.3,-Math.PI/2,1.52)}}}function Hm(i,e,t,n){let{audio:s,ui:r,player:o,pursuit:a,interactor:l,camera:c}=i,u=new nt;u.name="lanes",e.add(u);let h={},d=new b,f=new b,g=()=>!!o.xr;function v(G){let F=G==="child"?3:1,re=document.createElement("canvas");re.width=256*F,re.height=256;let B=re.getContext("2d"),me="#0d0907";if(B.fillStyle=me,B.strokeStyle=me,B.lineCap="round",B.lineJoin="round",G==="adult"&&(B.filter="blur(4px)"),G==="adult")B.beginPath(),B.ellipse(128,50,19,23,0,0,Math.PI*2),B.fill(),B.beginPath(),B.moveTo(94,84),B.quadraticCurveTo(128,74,162,84),B.lineTo(168,168),B.lineTo(158,256),B.lineTo(98,256),B.lineTo(88,168),B.closePath(),B.fill(),B.lineWidth=15,B.beginPath(),B.moveTo(161,92),B.lineTo(184,138),B.lineTo(202,116),B.stroke(),B.beginPath(),B.moveTo(95,92),B.lineTo(84,168),B.stroke(),B.filter="none";else for(let Ue=0;Ue<3;Ue++){let V=Ue*256,q=Ue===1,D=Ue===2;B.fillStyle=me,B.fillRect(V+140,170,112,11),B.fillRect(V+150,181,8,75),B.fillRect(V+234,181,8,75),B.beginPath(),B.moveTo(V+162,170),B.lineTo(V+162,131),B.quadraticCurveTo(V+166,118,V+198,118),B.lineTo(V+238,118),B.lineTo(V+238,170),B.lineTo(V+224,170),B.lineTo(V+224,134),B.lineTo(V+178,134),B.lineTo(V+178,170),B.closePath(),B.fill(),B.fillRect(V+171,158,4,q?17:11),B.fillRect(V+58,200,52,8),B.fillRect(V+80,208,8,48),B.beginPath(),B.moveTo(V+64,203),B.quadraticCurveTo(V+58,150,V+90,122),B.quadraticCurveTo(V+118,118,V+122,140),B.lineTo(V+112,203),B.closePath(),B.fill(),B.lineWidth=12,B.beginPath(),B.moveTo(V+110,140),B.lineTo(V+150,q?168:158),B.lineTo(V+170,q?170:162),B.stroke(),B.beginPath(),B.moveTo(V+100,200),B.lineTo(V+132,206),B.lineTo(V+132,250),B.stroke(),D?(B.beginPath(),B.ellipse(V+98,103,18,21,0,0,Math.PI*2),B.fill(),B.fillStyle="#e4dcc4",[91,105].forEach(fe=>{B.beginPath(),B.arc(V+fe,101,2.8,0,Math.PI*2),B.fill()})):(B.beginPath(),B.ellipse(V+121,112,17,19,.5,0,Math.PI*2),B.fill()),B.fillStyle="#1a120c",[52,128,204].forEach(fe=>B.fillRect(V+fe-4,0,8,256))}let Ne=new Qt(re);return Ne.colorSpace=Dt,Ne.anisotropy=4,F>1&&Ne.repeat.set(1/F,1),Ne}let m=[[43.4,9.6,-1],[45.6,7,1],[47.9,9.6,-1],[49.7,7,1]],p=['"Go away!"','"Not here. Go."','"Chor! Shut it!"',`"We don't want trouble."`],M=v("adult"),x=(()=>{let G=document.createElement("canvas");G.width=128,G.height=256;let w=G.getContext("2d"),E=w.createRadialGradient(64,230,10,64,200,230);E.addColorStop(0,"#ffd59a"),E.addColorStop(.45,"#d88a48"),E.addColorStop(1,"#3a1e10"),w.fillStyle=E,w.fillRect(0,0,128,256),w.fillStyle="rgba(40,20,10,0.55)",w.fillRect(0,170,128,3),w.fillStyle="rgba(30,15,8,0.5)",w.fillRect(84,60,30,70);let F=new Qt(G);return F.colorSpace=Dt,F})(),_=Le(2760728,{flatShading:!0,roughness:1}),S=new mt(1.02,2.08);S.translate(0,-1.04,0);let P=zn(zt.tin(),{metalness:.25,side:Rt,flatShading:!0,color:9078400}),T=m.map(([G,w,E],F)=>{let re=new nt;re.position.set(G,0,w+E*.035),re.rotation.y=E>0?0:Math.PI,u.add(re);let B=new yt({map:x,transparent:!0,opacity:.9}),me=new Ie(new mt(.96,2.02),B);me.position.y=1.01,re.add(me);let Ne=new yt({map:M,transparent:!0,depthWrite:!1}),Ue=new Ie(new mt(.86,1.8),Ne);Ue.position.set(F%2?-.08:.08,.9,.012),re.add(Ue);let V=new Ie(S,P);return V.position.set(0,2.06,.03),V.scale.y=.001,re.add(V),[[-.54,1.06,.08,2.2],[.54,1.06,.08,2.2],[0,2.13,1.16,.1]].forEach(([q,D,fe,Ve])=>{let ct=new Ie(ne.box(fe,Ve,.09),_);ct.position.set(q,D,.03),re.add(ct)}),{d:re,glowM:B,silM:Ne,sh:V,x:G,st:0,t:0}}),U=Le(3810841,{flatShading:!0,roughness:.9}),Y=Le(1446158,{flatShading:!0,roughness:1}),y=(()=>{let G=document.createElement("canvas");G.width=G.height=128;let w=G.getContext("2d");w.strokeStyle="#050303",w.lineCap="round",w.lineJoin="round";let E=64,F=4;w.lineWidth=5,w.beginPath(),w.moveTo(E,F);for(let B=0;B<9;B++)E=64+(B%2?1:-1)*(6+B*7%11),F+=14,w.lineTo(E,F);w.stroke(),w.fillStyle="#040202",w.beginPath(),w.ellipse(64,64,15,22,.15,0,Math.PI*2),w.fill();let re=new Qt(G);return re.colorSpace=Dt,re})(),A=new yt({map:y,transparent:!0,depthWrite:!1}),Z=1.8,K=[{z:5,y:1.2},{z:3.3,y:.9},{z:-.4,y:1,grab:!0},{z:-2.9,y:1.35}],j=K.map((G,w)=>{let E=new nt;E.position.set(54,G.y,G.z),u.add(E);let F=new Ie(new mt(.5,.75),A);F.position.set(53.985,G.y,G.z),F.rotation.y=-Math.PI/2,F.rotation.z=w%2?.3:-.2,u.add(F);let re=new nt;E.add(re);let B=new Ie(ne.cyl(.045,.06,Z,7),Y);B.rotation.x=Math.PI/2,B.position.z=-Z/2,re.add(B);let me=new Ie(ne.cyl(.04,.044,.08,7),U);me.rotation.x=Math.PI/2,me.position.z=.03,re.add(me);let Ne=new Ie(ne.box(.1,.034,.11),U);Ne.position.z=.11,re.add(Ne);let Ue=[-.036,-.012,.012,.036].map((D,fe)=>{let Ve=new nt;Ve.position.set(D,0,.165),re.add(Ve);let ct=new Ie(ne.box(.021,.02,.085-Math.abs(fe-1.5)*.01),U);return ct.position.z=.04,Ve.add(ct),Ve}),V=new nt;V.position.set(.055,-.005,.09),V.rotation.y=.7,re.add(V);let q=new Ie(ne.box(.022,.022,.07),U);return q.position.z=.035,V.add(q),E.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),E.visible=!1,{...G,grp:E,slide:re,fingers:Ue,thumb:V,e:0,done:!1,ph:w*1.3}});l.anyPress=()=>{h.grab&&!h.grab.free&&xe()};function xe(){let G=h.grab;G.n++,G.jerk=1,s.oneShot("fabric",{volume:.9,rate:.7+G.n*.08}),G.n>=5&&te(!1)}function te(G){h.grab.free=!0,h.grab.t=0,r.hint("");let w=j.find(E=>E.grab);w.done=!0,G?(s.oneShot("coin",{volume:.8}),t("It took a coin\u2026 but not the food.",3)):t("No! It's for home!",2.5)}let he=new et({map:Sf("#8a7c6a",3,3,!0).map,roughness:.95,flatShading:!0,side:Rt}),oe=[[-5.93,1],[-3.47,-1]].map(([G,w])=>{let E=new nt;E.position.set(58.9,3.2,G),u.add(E);let F=new Ie(new mt(8.6,10.5),he);return F.position.y=5.25,E.add(F),{hinge:E,s:w}}),_e=v("child"),Pe=new yt({color:14721120,transparent:!0,opacity:0,depthWrite:!1}),Re=new yt({map:_e,transparent:!0,opacity:0,depthWrite:!1}),Be=new rn,at=new mt(.88,.78),ce=new mt(.86,.76);for(let G=-2.2;G<10.6;G+=2.1)[[65.4,Math.PI/2,1],[68,-Math.PI/2,-1]].forEach(([w,E,F],re)=>{[2.35,4.45].forEach((B,me)=>{let Ne=G+re*.9+me*.35;Be.add(ne.box(.04,.86,.06),_,w+F*.02,B,Ne-.47),Be.add(ne.box(.04,.86,.06),_,w+F*.02,B,Ne+.47),Be.add(ne.box(.04,.06,1),_,w+F*.02,B+.43,Ne),Be.add(ne.box(.08,.05,1.04),_,w+F*.04,B-.43,Ne),Be.add(at,Pe,w+F*.06,B,Ne,0,E,0),Be.add(ce,Re,w+F*.07,B-.01,Ne,0,E,0)})});Be.build(u,{cast:!1,receive:!1});let Ee=new Lt;u.add(Ee);let ye=zt.dot(),Ce=[70.2,72.6,75,77.4,79.8].map(G=>{let w=new yt({color:16767392}),E=new Ie(new en(.06,8,6),w);E.position.set(G,2.45,12.7),u.add(E);let F=new Ie(ne.box(.01,.75,.01),Y);F.position.set(G,2.85,12.7),u.add(F);let re=new Nn(new Wn({map:ye,color:16760944,transparent:!0,opacity:.55,depthWrite:!1,blending:vn}));return re.position.copy(E.position),re.scale.setScalar(1.1),u.add(re),{x:G,m:w,s:re,st:0,t:0}}),De=new nt;De.position.set(81.9,0,12),u.add(De);let we=new Ie(ne.box(.045,2,1.4),zn(zt.plywood(),{color:10127992}));we.position.set(0,1,.7),we.castShadow=!0,De.add(we);let ke=new yt({color:16765072,transparent:!0,opacity:.9,depthWrite:!1});[[81.93,1,13.41,.02,2],[81.93,2.01,12.7,1.4,.02],[81.93,.005,12.7,1.4,.012]].forEach(([G,w,E,F,re])=>{let B=new Ie(new mt(F,re),ke);B.position.set(G-.03,w,E),B.rotation.y=-Math.PI/2,u.add(B)});let Ye={minX:81.55,maxX:82.25,minZ:11.9,maxZ:13.5};l.add({object:we,label:"Knock",maxDist:2.4,enabled:()=>h.on&&h.knocks<3&&!h.doorOpen&&h.alive,onPress:k});function k(){h.knocks++,h.knockT=0,[0,.22,.44].forEach(G=>setTimeout(()=>s.oneShot("doorWood",{object:we,volume:.9,rate:1.7+Math.random()*.2,ref:2}),G*1e3)),h.knocks===1&&t("Ma! Open the door!",2.5),h.knocks===2&&setTimeout(()=>r.subtitle('Mother (inside): "\u2026Who is it?"',2.6),900),h.knocks===3&&(h.safe=!0,r.subtitle(`"Ma, it's me!"`,2),setTimeout(()=>{h.on&&(h.doorOpen=!0,h.openT=0,s.oneShot("door",{object:we,volume:.8,rate:.9}),i.refreshColliders())},1e3),setTimeout(()=>{h.on&&h.doorOpen&&n&&n()},2200))}function C(){Object.assign(h,{on:!1,alive:!1,warp:0,grab:null,sky:0,win:0,winT:0,dark:0,knocks:0,knockT:0,doorOpen:!1,openT:0,safe:!1,said:{},hinted:!1,dim:0}),T.forEach(G=>{G.st=0,G.t=0,G.sh.scale.y=.001,G.glowM.opacity=.9,G.silM.opacity=1}),j.forEach(G=>{G.e=0,G.done=!1,G.grp.visible=!1}),oe.forEach(G=>{G.hinge.rotation.x=0}),Pe.opacity=0,Re.opacity=0,_e.offset.x=0,Ce.forEach(G=>{G.st=0,G.t=0,G.m.color.setHex(16767392),G.s.visible=!0,G.s.material.opacity=.55}),De.rotation.y=0,ke.opacity=.9,$(),u.visible=!1}let ie={};function $(){Object.values(ie).forEach(G=>G&&G.stop&&G.stop()),ie={}}function J(G){C(),h.on=G,h.alive=G,u.visible=G,G&&(ie.sew=s.loop("sewing",{object:Ee,volume:0,ref:4}),ie.fac=s.loop("factory",{object:Ee,volume:0,ref:5}))}let ue=G=>h.said[G]?!1:(h.said[G]=!0,!0);function pe(G,w,E,F,re){if(!h.on)return;h.warp=re,T.forEach((V,q)=>{V.st===0?(V.glowM.opacity=.8+.08*Math.sin(w*3+q*2)*Math.sin(w*7.3+q),re>.2&&F===0&&E.x>V.x-2.5&&(V.st=1,V.t=0,s.oneShot("doorWood",{object:V.d,volume:.85,rate:1.45,ref:2}),r.subtitle(p[q],1.8),q===0&&setTimeout(()=>h.on&&t("Please\u2026 help me!",2.6),600),q===3&&setTimeout(()=>h.on&&t("Nobody opens.",2.6),700))):V.st===1&&(V.t+=G,V.sh.scale.y=Math.max(.001,wt(Ht(V.t/.17,0,1))),V.glowM.opacity=.9*(1-Ht(V.t/.22,0,1)),V.silM.opacity=1-Ht(V.t/.18,0,1),V.t>.3&&(V.st=2))}),c.getWorldDirection(f),f.y=0,f.normalize();let B=d.set(E.x-f.z*.17,.82,E.z+f.x*.17);if(h.grab){let V=h.grab;V.t+=G,V.jerk=Math.max(0,V.jerk-G*6),V.free?V.t>.6&&(h.grab=null):(V.t>9&&te(!0),o.speedScale=0)}j.forEach(V=>{let q=E.z-V.z,D=0,fe=.7;F===1&&re>.2&&!V.done&&Math.abs(q)<2.6&&(D=1),V.grab&&!V.done&&!h.grab&&F===1&&re>.2&&Math.abs(q)<.7&&(h.grab={n:0,t:0,jerk:0,free:!1},s.oneShot("fabric",{volume:1,rate:.55}),s.oneShot("heartbeat",{volume:.8}),r.subtitle('"Give it here."',2.6),r.hint(g()?"Pull the trigger again and again to pull free":"Click again and again to pull free",9));let Ve=V.grab&&h.grab&&!h.grab.free;if(Ve&&(D=1,fe=Math.max(.3,Math.hypot(B.x-V.grp.position.x,B.y-V.grp.position.y,B.z-V.grp.position.z)-.12)-h.grab.jerk*.18),V.done&&!Ve&&(D=0),V.e=Xt(V.e,D,D>V.e?Ve?9:4:V.done?7:2.5,G),V.grp.visible=V.e>.01,!V.grp.visible)return;let ct=B.x-V.grp.position.x,Oe=B.y-V.grp.position.y,ee=B.z-V.grp.position.z,st=Ht(Math.atan2(ct,ee),-Math.PI/2-.65,-Math.PI/2+.65),Et=Ht(Math.atan2(Oe,Math.hypot(ct,ee)),-.5,.45);V.grp.rotation.set(-Et+Math.sin(w*2.1+V.ph)*.05*(Ve?0:1),st+Math.sin(w*1.7+V.ph)*.08*(Ve?0:1),0,"YXZ"),V.slide.position.z=it(-.4,fe-.2,V.e);let X=Ve?1.25:.35+.35*Math.sin(w*5+V.ph);V.fingers.forEach((We,ge)=>{We.rotation.x=X+ge*.04}),V.thumb.rotation.x=X*.6});let me=F===2?Ht((E.x-54.6)/8,0,1):F>2?1:0;me>h.sky&&(h.sky<.15&&me>=.15&&ue("sky")&&t("The walls\u2026 they're closing in.",3),h.sky=Math.min(me,h.sky+G*.5)),oe.forEach(V=>{V.hinge.rotation.x=V.s*.125*wt(h.sky)}),h.win===0&&F===3&&E.z>-3.2&&(h.win=1,h.winT=0),h.win>0&&(h.winT+=G),h.win===1?(Pe.opacity=Math.min(.7,h.winT*.7),Re.opacity=Math.min(1,h.winT*.9),_e.offset.x=Math.floor(w*5)%2/3,h.winT>1.4&&ue("kids")&&t("Every window\u2026 children. Like me.",3.2),E.z>3.6&&(h.win=2,h.winT=0,_e.offset.x=2/3,s.oneShot("heartbeat",{volume:1}),s.oneShot("whispers",{volume:.5,rate:.7}))):h.win===2?(h.winT>.9&&ue("look")&&t("They're all looking at me.",2.6),h.winT>2.6&&(h.win=3,h.winT=0,s.oneShot("thunder",{volume:.3,rate:.5}))):h.win===3&&(Pe.opacity=Math.max(0,.7-h.winT*.8),h.winT>1.2&&ue("every")&&t("Every window. Every night.",3)),Ee.position.set(66.7,3,Ht(E.z,-3,10.5));let Ne=h.win===1?Math.min(.7,h.winT*.5):h.win===3?Math.min(.25,h.winT*.1):0;ie.sew&&ie.sew.setVolume(Ne),ie.fac&&ie.fac.setVolume(Ne*.6);let Ue=0;Ce.forEach(V=>{if(V.st===0&&F===4&&E.x>V.x+.8&&(V.st=1,V.t=0,s.oneShot("step",{object:V.s,volume:.6,rate:2.4,ref:1.5})),V.st===1){V.t+=G;let q=Math.sin(V.t*70)>.2&&V.t<.35;V.m.color.setHex(q?16767392:2760728),V.s.visible=q,V.t>.4&&(V.st=2,V.m.color.setHex(1709072),V.s.visible=!1)}V.st===2&&Ue++,V.st===0&&(V.s.material.opacity=.5+.06*Math.sin(w*13+V.x))}),h.dark=Ue/Ce.length,F===4&&E.x>72&&ue("dark")&&t("The lights\u2026 they're going out behind me.",3),F===4&&E.x>78.6&&!h.hinted&&(h.hinted=!0,r.hint(g()?"Knock: point at the door and pull the trigger":"Knock on the door (click)",6)),h.knocks>0&&(h.knockT+=G),h.doorOpen&&(h.openT+=G,De.rotation.y=-1.45*wt(Math.min(1,h.openT/.9)),ke.opacity=Math.max(0,.9-h.openT*2)),F===4&&E.x>79.2&&(a.speed=Math.min(a.speed,h.safe?.6:1.25)),h.dim=Math.max(.45*wt(h.sky)*(F>=2&&F<=3?1:.4),.55*h.dark)}return{group:u,reset:C,start:J,update:pe,stop:$,get S(){return h},get arms(){return j},get safe(){return h.on&&h.safe},get opened(){return h.on&&h.doorOpen&&h.openT>1},get dim(){return h.on?h.dim:0},get doorShut(){return h.on&&!h.doorOpen},colliders(){return h.on&&!h.doorOpen?[Ye]:[]},kill(){h.alive=!1},anchors(){let G=m.map(([w,E])=>new b(w,1.2,E));K.forEach(w=>G.push(new b(54,w.y,w.z)));for(let w=-2.2;w<10.6;w+=.7)[2.35,4.45].forEach(E=>{G.push(new b(65.4,E,w)),G.push(new b(68,E,w))});return G},onCaught(){h.grab&&(h.grab=null,r.hint(""),j.forEach(G=>{G.grab&&(G.done=!0)}))},forceOpen(){h.on&&(h.knocks=3,h.safe=!0,h.doorOpen=!0,h.openT=0,i.refreshColliders())}}}var nl=[{x0:40,x1:54,z0:7,z1:9.6},{x0:51.4,x1:54,z0:-6,z1:9.6},{x0:51.4,x1:68,z0:-6,z1:-3.4},{x0:65.4,x1:68,z0:-6,z1:14},{x0:65.4,x1:82,z0:11.4,z1:14}],RE=[new b(52.7,0,8.3),new b(52.7,0,-4.7),new b(66.7,0,-4.7),new b(66.7,0,12.7)],AE=.15,ea=new b(82,1.2,12.7),CE=[{x:41.2,z:8.3,yaw:-Math.PI/2},{x:52.7,z:6.5,yaw:0},{x:54.5,z:-4.7,yaw:-Math.PI/2},{x:66.7,z:-2.5,yaw:Math.PI},{x:68.5,z:12.7,yaw:-Math.PI/2}],ys={z0:-3.4,period:8,trigger:5.5};function zm(i){let{scene:e,audio:t,player:n,ui:s,thread:r,bagCtl:o,lights:a,police:l,pursuit:c,camera:u,hands:h}=i,d=()=>i.edition==="extra",f=new nt;f.name="nightmare",e.add(f);let g=[],v=[],m=new rn,p=zt.dirt(),M=[];nl.forEach((O,Te)=>{let ze=p.clone();ze.needsUpdate=!0,ze.repeat.set((O.x1-O.x0)/3,(O.z1-O.z0)/3);let de=new Ie(new mt(O.x1-O.x0+.2,O.z1-O.z0+.2),new et({map:ze,roughness:1,color:12101776,polygonOffset:!0,polygonOffsetFactor:-1-Te,polygonOffsetUnits:-2-2*Te}));de.rotation.x=-Math.PI/2,de.position.set((O.x0+O.x1)/2,.001*Te,(O.z0+O.z1)/2),de.receiveShadow=!0,f.add(de),M.push(de)});let x=["#a89a80","#9aa0a8","#b09a90","#a0a88a","#a898a8","#b0906a"],_=(O,Te,ze,de,Je={})=>g.push(Ds(f,O,Te,ze,de,{colours:x,hMin:7,hMax:13,night:!0,glow:1708044,list:v,detail:!1,...Je}));_(40,54,9.6,20),_(40,51.4,-12,7),_(51.4,82,-12,-6),_(65.4,82,14,20),_(54,65.4,-3.4,20,{period:ys.period}),_(68,82,-6,11.4,{period:ys.period}),_(82,92,-12,9.7),_(82,92,15.7,22),_(88.3,92,9.7,15.7),v.forEach((O,Te)=>{O.userData.ph=Te*1.7,O.userData.spin=(vt()-.5)*2,O.userData.lift=.6+vt()*1.4,O.matrixAutoUpdate=!0,O.userData.home=O.position.clone()});let S=zn(zt.plywood()),P=new Ei([[.001,0],[.26,.02],[.3,.2],[.28,.45],[.18,.62],[.07,.68],[.001,.7]].map(([O,Te])=>new Se(O,Te)),8);[[42,7.33,.9,.6],[45,9.27,.8,.6],[47.9,7.33,1.2,.6],[51.73,3.2,.6,.9],[51.73,.8,.6,.8],[58,-5.67,1.2,.6],[61,-3.73,.9,.6],[65,-5.67,.9,.6],[65.73,-1,.6,.9],[65.73,7,.6,.9],[73,11.73,.9,.6],[78.5,13.67,.9,.6]].forEach(([O,Te,ze,de],Je)=>{if(Je%3===1)m.add(P,Le(6970960,{flatShading:!0,roughness:1}),O,0,Te,.05,Je*1.3,0,1.2,1.1,1.2);else{let ot=.6+Je%2*.4;m.add(ne.box(ze,ot,de),S,O,ot/2,Te,0,(Je%3-1)*.08,0),Je%4===0&&m.add(ne.box(ze*.8,.5,de*.8),S,O,ot+.25,Te,0,.2,0)}g.push({minX:O-ze/2,maxX:O+ze/2,minZ:Te-de/2,maxZ:Te+de/2})});let U=zn(zt.tin(),{metalness:.2,side:Rt,emissive:1709072,flatShading:!0});for(let O=69;O<81.5;O+=1.6+vt()*.8)[[11.4,1],[14,-1]].forEach(([Te,ze])=>{let de=1.5+vt()*.6,Je=2.1+vt()*.5;m.add(ne.box(de,Je,.03),U,O+de/2,Je/2,Te+ze*.03,0,0,(vt()-.5)*.04),m.add(ne.box(de+.2,.02,.6),U,O+de/2,Je+.18,Te+ze*.25,ze*.5,0,0),vt()<.4&&m.add(ne.box(.6,1.7,.03),Le(789e3),O+de/2,.85,Te+ze*.06)});[[70.5,13.6],[76.4,11.75],[80.6,13.6]].forEach(([O,Te])=>m.add(ne.cyl(.17,.13,.3,12),Le(2779802,{roughness:.5}),O,.15,Te)),g.push({minX:70.3,maxX:70.7,minZ:13.4,maxZ:14},{minX:76.2,maxX:76.6,minZ:11.4,maxZ:11.95},{minX:80.4,maxX:80.8,minZ:13.4,maxZ:14});let Y=[0,1,2,3].map(O=>new et({map:gi(["stripe","check","buti","paisley"][O],O+1,128),side:Rt,roughness:1})),y=[71,74.6,78.2].flatMap(O=>el(f,new b(O,2.6,11.5),new b(O+.4,2.6,13.9),Y,3)),A=[];nl.forEach((O,Te)=>{if(Te!==3)for(let ze=0;ze<5;ze++){let de=O.x1-O.x0>O.z1-O.z0,Je=it(de?O.x0:O.z0,de?O.x1:O.z1,vt()),ot=4+vt()*3;A.push(de?[new b(Je,ot,O.z0),new b(Je+(vt()-.5)*2,ot,O.z1),.4,.012]:[new b(O.x0,ot,Je),new b(O.x1,ot,Je+(vt()-.5)*2),.4,.012])}});for(let O=ys.z0+1;O<11;O+=ys.period)A.push([new b(65.4,5.2,O),new b(68,5,O+1.5),.5,.012]);Qo(f,A);let Z=m.build(f,{cast:!0,receive:!0}),K=170,j=new Gt,xe=new Float32Array(K*3);for(let O=0;O<K;O++){let Te=nl[O%nl.length],ze=Te.x1-Te.x0>Te.z1-Te.z0,de=vt()<.5;xe[O*3]=ze?it(Te.x0,Te.x1,vt()):de?Te.x0-.06:Te.x1+.06,xe[O*3+1]=2+vt()*7,xe[O*3+2]=ze?de?Te.z0-.06:Te.z1+.06:it(Te.z0,Te.z1,vt())}j.setAttribute("position",new sn(xe,3));let te=new Cs({size:.15,map:zt.dot(),color:16726554,transparent:!0,opacity:0,blending:vn,depthWrite:!1,fog:!1}),he=new cs(j,te);he.frustumCulled=!1,f.add(he);let oe=a.add({pos:new b,color:16751168,intensity:0,distance:9,decay:1.4,space:"nightmare",priority:4}),_e=a.add({pos:new b,color:16722458,intensity:0,distance:10,decay:1.5,space:"nightmare",priority:3}),Pe=a.add({pos:new b,color:7511551,intensity:0,distance:12,decay:1.5,space:"nightmare",priority:3}),Re=a.add({pos:new b(81,1.6,12.7),color:16769712,intensity:0,distance:8,space:"nightmare",priority:3}),Be=[[44,7.25,0],[46.5,9.35,Math.PI],[49,7.25,0],[51.65,5,Math.PI/2],[53.75,2,-Math.PI/2],[51.65,-1,Math.PI/2],[56,-5.75,0],[59,-3.65,Math.PI],[62.5,-5.75,0]].map(([O,Te,ze],de)=>{let Je=new et({color:657416,roughness:1,transparent:!0,opacity:0,side:Rt}),ot=_n({female:de%2===1,outfit:de%3?"kurta":"shirt",seed:400+de,scale:1.3+de%3*.05,material:Je});return ot.position.set(O,0,Te),ot.rotation.y=ze,ot.visible=!1,f.add(ot),{w:ot,mat:Je,gone:!1,o:0}}),at=new yt({color:0,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),ce=_n({child:!0,outfit:"shirt",seed:7,scale:1.3,material:at}),Ee=_n({top:0,bottom:0,mustache:!0,belly:.035,outfit:"shirt",sleeves:"full",glasses:!0,seed:41,scale:1.45,material:at.clone()});[ce,Ee].forEach(O=>{O.visible=!1,f.add(O),O.traverse(Te=>{Te.isMesh&&(Te.castShadow=!1,Te.renderOrder=2)})});let ye=Ee.userData.mesh.material,Ce=new yt({color:12376319,transparent:!0,opacity:0,blending:vn,depthWrite:!1,fog:!1}),De=[[47.5,8.3,Math.PI/2],[74.5,12.7,Math.PI/2]].map(([O,Te,ze])=>{let de=new nt;de.position.set(O,0,Te),de.rotation.y=ze,f.add(de);let Je=Ce.clone(),ot=Nr({wood:Je});ot.position.y=1,de.add(ot),ot.traverse(on=>{on.isMesh&&(on.material=Je,on.castShadow=!1,on.receiveShadow=!1)});let Rn=new Ie(new At(.38,.05,.38),Je);return Rn.position.set(0,.56,.85),de.add(Rn),de.visible=!1,{g:de,m:ot,mat:Je,state:0,done:!1,x:O,z:Te}});function we(O,Te,ze,de,Je,ot=1.4,Rn="#ff2a1a"){let on=document.createElement("canvas");on.width=512,on.height=160;let Jt=on.getContext("2d");Jt.font='bold 96px "Courier New", monospace',Jt.fillStyle=Rn,Jt.textAlign="center",Jt.textBaseline="middle",Jt.shadowColor=Rn,Jt.shadowBlur=18,Jt.fillText(O,256,84);let Vt=new Ie(new mt(ot,ot*.31),new yt({map:new Qt(on),transparent:!0,opacity:0,blending:vn,depthWrite:!1,side:Rt,fog:!1}));return Vt.position.set(Te,ze,de),Vt.rotation.y=Je,f.add(Vt),Vt}let ke=[we("400 PCS",44,2.6,9.55,Math.PI),we("Rs 6",51.45,2.2,3,Math.PI/2),we("Rs 10",53.95,3,-.5,-Math.PI/2),we("TOMORROW 7 AM",60,2.8,-3.45,Math.PI,2.2),we("CHOR",72,3.2,13.95,Math.PI,1.6),we("CHOR",79,2,11.45,0,1.6)],Ye=new nt;Ye.visible=!1,f.add(Ye);{let O=["400","400 PCS","Rs 6","399","400","Rs 10","7 AM","400"];for(let Te=ys.z0+.6,ze=0;Te<11.2;Te+=1,ze++)[[65.43,Math.PI/2],[67.97,-Math.PI/2]].forEach(([de,Je],ot)=>{let Rn=we(O[(ze+ot*3)%O.length],de,1.4+(ze*7+ot*3)%5*.55,Te+ot*.5,Je,.9+(ze+ot)%3*.3);if(Rn.material.opacity=.35,Ye.add(Rn),(ze+ot)%2===0){let on=new Ie(new mt(.42,.34),Y[(ze+ot)%4]);on.position.set(de+(ot?-.01:.01),.6+(ze*3+ot)%4*.7,Te+.25),on.rotation.set(0,Je,(ze*13%7-3)*.12),Ye.add(on)}})}let k=new nt;k.visible=!1,f.add(k);let C=new yt({color:12376319,transparent:!0,opacity:.22,blending:vn,depthWrite:!1,fog:!1}),ie=[];for(let O=ys.z0+1.2;O<11.2;O+=2)[[65.95,Math.PI/2],[67.45,-Math.PI/2]].forEach(([Te,ze])=>{let de=Nr({wood:C});de.position.set(Te,1,O),de.rotation.y=ze,de.scale.setScalar(.85),de.traverse(Je=>{Je.isMesh&&(Je.material=C,Je.castShadow=!1,Je.receiveShadow=!1)}),k.add(de),ie.push(de)});let $=new Lt;f.add($);let J=Ga(2);Kc(J,1),J.visible=!1,f.add(J);let ue=new yt({color:new ve(1,.9,.7).multiplyScalar(2),transparent:!0,opacity:0,depthWrite:!1,fog:!1}),pe=new yt({color:new ve(1.6,1.5,1.35),transparent:!0,opacity:0,depthWrite:!1,fog:!1,side:pn}),G=new Ie(new en(3,24,12),pe);G.renderOrder=50,G.visible=!1,f.add(G);let w=(()=>{let O=document.createElement("canvas");O.width=O.height=128;let Te=O.getContext("2d"),ze=Te.createRadialGradient(64,64,0,64,64,64);ze.addColorStop(0,"rgba(255,250,238,1)"),ze.addColorStop(.35,"rgba(255,240,215,0.75)"),ze.addColorStop(1,"rgba(255,230,200,0)"),Te.fillStyle=ze,Te.fillRect(0,0,128,128);let de=new Qt(O);return de.colorSpace=Dt,de})(),E=new Nn(new Wn({map:w,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,fog:!1}));E.position.set(ea.x+.4,1.3,ea.z),E.renderOrder=40,E.visible=!1,f.add(E);let F=document.getElementById("fear"),re=document.getElementById("eyelids"),B=null,me=(()=>{let O=new Qt(zt.facade("#9aa0a8",!0));return O.colorSpace=Dt,O.wrapS=O.wrapT=Ln,O.repeat.set(1,3),new et({map:O,roughness:.95,emissive:1708044,emissiveMap:O,flatShading:!0})})(),Ne=[{at:1,box:[50.4,9.6,7,2.6],axis:"x"},{at:2,box:[52.7,2.6,-2.6,9.6],axis:"z"},{at:3,box:[63.8,9.6,-4.7,2.6],axis:"x"}].map(O=>{let[Te,ze,de,Je]=O.box,ot=new Ie(new At(O.axis==="x"?.6:Je+.4,12,O.axis==="x"?Je+.4:.6),me);return ot.position.set(Te,-12.5,de),ot.castShadow=!0,f.add(ot),{...O,m:ot,k:0,col:O.axis==="x"?{minX:Te-.3,maxX:Te+.3,minZ:de-Je/2,maxZ:de+Je/2}:{minX:Te-Je/2-.2,maxX:Te+Je/2+.2,minZ:de-.3,maxZ:de+.3}}}),Ue=[],V={};function q(){t.stopAll(Ue),Ue=[],V={};let O=(Te,ze)=>(ze&&(V[Te]=ze,Ue.push(ze)),ze);O("drone",t.loop("drone",{volume:0})),O("whispers",t.loop("whispers",{volume:0})),O("heart",t.loop("heartbeat",{volume:0})),O("yells",t.loop("yells",{object:l[0],volume:.4,ref:2,rate:.95})),O("wind",t.loop("wind",{volume:.09}))}let D={phase:"idle"},fe=new b,Ve=new b,ct=(O,Te=5)=>s.hint(O,Te),Oe=(O,Te)=>s.thought(O,Te),ee=Hm(i,f,Oe,()=>{!D.ended&&!d()&&(D.ended=!0,c.stop(),r.set(null),st("done"),$e&&$e("home"))});{let O=new Bi,Te=ee.anchors();v.forEach(ze=>{O.setFromObject(ze).expandByScalar(.6),ze.userData.calm=Te.some(de=>O.containsPoint(de))})}function st(O){D.phase=O,D.t=0}function Et(O,Te){let ze=0;return nl.forEach((de,Je)=>{O>=de.x0-.3&&O<=de.x1+.3&&Te>=de.z0-.3&&Te<=de.z1+.3&&(ze=Je)}),ze}let X=O=>[...RE.slice(Et(O.x,O.z)).map(Te=>new b(Te.x,.05,Te.z)),ea];function We(){Object.assign(D,{phase:"idle",t:0,warp:0,cp:0,stamina:1,tired:!1,flash:0,nextFlash:2.5,carry:0,ended:!1,screamed:!1,stepT:0,whistleT:5,yellT:3,whisperT:4,loops:0,inLoop:!1,loopDone:!1,hide:"none",sawGhost:!1,saidBoss:!1,saidShadow:!1,hideT:0,shadowZ:0,shadowK:0,shadowDone:!1,blink:0,collapse:0,seenBy:0}),v.forEach(O=>{O.position.copy(O.userData.home),O.rotation.set(0,0,0),O.scale.set(1,1,1)}),M.forEach((O,Te)=>{O.position.y=.001*Te}),Z.forEach(O=>{O.position.set(0,0,0),O.updateMatrix()}),l.forEach(O=>Kc(O,0)),te.opacity=0,oe.intensity=0,_e.intensity=0,Pe.intensity=0,Re.intensity=0,Be.forEach(O=>{O.gone=!1,O.o=0,O.mat.opacity=0,O.w.visible=!1}),De.forEach(O=>{O.done=!1,O.state=0,O.mat.opacity=0,O.g.visible=!1}),at.opacity=0,ye.opacity=0,ce.visible=Ee.visible=!1,Ye.visible=k.visible=!1,J.visible=!1,Ne.forEach(O=>{O.k=0,O.m.position.y=-12.5}),ke.forEach(O=>{O.material.opacity=0}),ee.reset(),G.visible=!1,pe.opacity=0,E.visible=!1,E.material.opacity=0,F&&(F.style.opacity=0),re&&re.style.setProperty("--lid","0"),ge(),o.hugMode=!1}function ge(){B!==null&&(u.fov=B,u.updateProjectionMatrix(),B=null)}function Ae(){We(),q(),ee.start(!d()),n.canMove=!0,st("chase"),D.warp=AE,D.carry=i.carryFear||0,i.carryFear=0,D.nextFlash=2.5,c.speed=2.1,c.active=!0,c.rewind(7),l.forEach(O=>{O.visible=!0}),n.jogAllowed=!0,o.glow=.6,r.set(X),s.subtitle('Police: "Ruko! Stop right there!"',2.5)}function Xe(){t.stopAll(Ue),Ue=[],V={},c.stop(),oe.intensity=0,_e.intensity=0,Pe.intensity=0,Re.intensity=0,F&&(F.style.opacity=0),ge(),n.speedScale=1,n.canRun=!0,o.hugMode=!1,We()}function Ke(O=.35){D.blink=O}function Mt(){ee.onCaught(),st("caught"),s.fade(!0),c.stop(),t.oneShot("scream",{volume:.5,rate:1.2})}function kt(O,Te,ze=!0){if(D.warp>.001&&D.phase!=="collapse"&&(v.forEach(H=>{if(H.userData.calm&&!d())return;let R=D.warp,z=H.userData.ph;H.rotation.z=R*.07*Math.sin(Te*.6+z),H.rotation.x=R*.05*Math.sin(Te*.45+z*1.3),H.scale.y=1+R*.18*Math.sin(Te*.9+z)}),y.forEach((H,R)=>{H.rotation.x=.3*D.warp*Math.sin(Te*2.3+R)})),D.phase==="idle"||D.phase==="done"||!ze)return;D.t+=O,n.headWorld(fe);let de=Et(fe.x,fe.z);de>D.cp&&(D.cp=de,Ne.forEach(H=>{H.at===de&&H.k===0&&(H.k=.001,t.oneShot("thunder",{volume:.35,rate:.6}))})),D.warp=Math.min(1,D.warp+O/12);let Je=wt(Ht((D.t-3)/9,0,1));l.forEach(H=>{Kc(H,Je),Ur(H,Te,O)}),!D.screamed&&D.t>7&&D.phase==="chase"&&(D.screamed=!0,t.oneShot("scream",{object:l[0],volume:.7,ref:3}),Oe("They're not men anymore.",3.5)),te.opacity=D.warp*(.6+.4*Math.sin(Te*2.3));let ot=D.phase==="chase"&&D.hide==="coming"&&(n.keys.KeyR||n.qHeldXR||o.hugging);o.glow=ot?.02:.6+.4*D.warp,o.heavy=Math.min(1,D.t/40),oe.pos.set(fe.x,.9,fe.z),oe.intensity=ot?.15:3+D.warp*2.5+Math.sin(Te*5)*.3,_e.pos.copy((D.hide==="coming"?J:l[0]).position).setY(2.2);let Rn=D.t%3.2,on=Math.sin(Math.PI*Ht(Rn/.85,0,1))**2,Jt=D.phase==="chase"&&!D.inLoop&&!ot&&D.hide!=="coming";D.lightPulse=Jt?on:0,_e.intensity=D.warp*(D.inLoop?0:4+D.lightPulse*10),n.forward(Ve),Pe.pos.copy(fe).addScaledVector(Ve,2.5),Pe.pos.y=2.8,Pe.intensity=Jt?(.5+D.warp*.5)*on*14:0;let Vt=n.moving,Ni=n.running&&Vt;D.stamina=Ht(D.stamina+(Ni?-O/6:O/4),0,1),D.stamina<=.01&&(D.tired=!0),D.tired&&D.stamina>.35&&(D.tired=!1),n.canRun=!D.tired,n.speedScale=1-.06*o.heavy;let In=D.phase==="chase"&&!D.inLoop&&D.hide!=="coming";c.active=In,c.speed=Vt?2.1:2.7;let an=In?c.update(O):D.hide==="coming"?J.position.distanceTo(Ve.set(fe.x,0,fe.z)):99;l.forEach(H=>{H.visible=!D.inLoop&&D.hide!=="coming"&&D.phase!=="collapse"});let Fn=Math.max(0,1-an/10);if(V.drone&&V.drone.setVolume(.3*D.warp*D.warp),V.whispers&&V.whispers.setVolume(.5*D.warp*(.4+Fn)+(D.inLoop?.3:0)),V.heart&&(V.heart.setVolume(Math.max(.3+.7*Math.max(Fn,ot?.9:0),D.carry*Math.max(0,1-D.t/8))),V.heart.setPlaybackRate(Math.max(1+Fn*.9,2*D.carry*Math.max(0,1-D.t/8)))),V.yells&&V.yells.setVolume(In?.4:0),r.urgent=!Vt&&In,In&&(D.stepT-=O,D.stepT<=0&&(D.stepT=.36,l.forEach((H,R)=>t.oneShot("step",{object:H,volume:.15,rate:.7+R*.1,ref:1.2}))),D.whistleT-=O,D.whistleT<=0&&(D.whistleT=7+Math.random()*4,t.oneShot("whistle",{object:l[0],volume:.75,ref:3,rate:1-D.warp*.25})),D.yellT-=O,D.yellT<=0&&(D.yellT=6+Math.random()*5,s.subtitle(['Police: "Ruko! Stop!"','Police: "Chor! Pakdo! Grab the thief!"',`Police: "You can't run forever!"`,'"\u2026stop\u2026 stop\u2026 stop\u2026"'][Math.floor(Math.random()*4)],2.5),t.oneShot("yells",{object:l[0],volume:.55,ref:2,rate:.8+Math.random()*.3}))),D.whisperT-=O,D.whisperT<=0&&D.warp>.5&&D.phase==="chase"){D.whisperT=5+Math.random()*5;let H=['"\u2026chor\u2026"','"\u2026ten rupees\u2026 this is six\u2026"','"\u2026four more pieces\u2026"','"\u2026same time tomorrow\u2026"','"\u2026everyone has scraps\u2026"'];s.subtitle(H[Math.floor(Math.random()*H.length)],2.2)}let Ge=Math.min(1,Fn*1.3+D.flash*.3+(ot?.35:0));if(F&&(F.style.opacity=String(Ge*(.75+.25*Math.sin(Te*(4+Fn*6))))),n.xr||(B===null&&(B=u.fov),u.fov=B+Fn*5*Math.sin(Te*2.5)+D.warp*3,u.updateProjectionMatrix()),D.blink>0&&(D.blink-=O,re&&re.style.setProperty("--lid",String(Math.sin(Math.max(0,D.blink)/.35*Math.PI)*1)),D.blink<=0&&re&&re.style.setProperty("--lid","0")),Ne.forEach(H=>{H.k>0&&H.k<1&&(H.k=Math.min(1,H.k+O/1.6),H.m.position.y=-12.5+12.5*wt(H.k))}),Be.forEach(H=>{let R=Math.hypot(H.w.position.x-fe.x,H.w.position.z-fe.z);!H.gone&&R<1.4&&(H.gone=!0,t.oneShot("whispers",{object:H.w,volume:.25,rate:1.3,ref:1}));let z=!H.gone&&D.warp>.3&&R<14?.92:0;if(H.o=Xt(H.o,z,H.gone?6:1.5,O),H.mat.opacity=H.o,H.w.visible=H.o>.01,H.w.visible){let N=H.w.userData.J,le=Math.atan2(fe.x-H.w.position.x,fe.z-H.w.position.z),W=Math.atan2(Math.sin(le-H.w.rotation.y),Math.cos(le-H.w.rotation.y));N.head.rotation.y=Xt(N.head.rotation.y,Ht(W,-1.3,1.3),3,O),N.spine.rotation.y=Xt(N.spine.rotation.y,Ht(W*.4,-.5,.5),2,O),N.head.rotation.x=.15,Di(H.w,Te,O)}}),De.forEach(H=>{let R=Math.hypot(H.x-fe.x,H.z-fe.z),z=d()&&!H.done&&R<11&&D.warp>.3?.2+.1*Math.sin(Te*9)*Math.sin(Te*2.3):0;d()&&!H.done&&R<2.6&&(H.done=!0,t.oneShot("sewing",{volume:.55,rate:1.4}),D.sawGhost||(D.sawGhost=!0,Oe("The machines\u2026 they followed me.",3.5))),H.state=it(H.state,z,O*(H.done?6:3)),H.mat.opacity=H.state,H.g.visible=H.state>.01,H.m.userData.needle.position.y=.16+.03*Math.sin(Te*40)}),!D.shadowDone&&(de===1||de===2)&&D.warp>.4){let H=de===1,R=H?fe.z:fe.x;D.shadowK||(D.shadowZ=R,D.shadowSeg=de),D.shadowSeg!==de&&(D.shadowSeg=de,D.shadowZ=R),D.shadowK=Math.min(1,D.shadowK+O/14);let z=it(4,.9,D.shadowK);D.shadowZ=Xt(D.shadowZ,R,z,O);let N=wt(Ht((D.shadowK-.45)/.4,0,1));if([ce,Ee].forEach((le,W)=>{le.visible=!0,H?(le.position.set(51.43,0,D.shadowZ),le.rotation.y=Math.PI/2):(le.position.set(D.shadowZ,0,-5.97),le.rotation.y=0);let ae=W?1.45:1.3;le.scale.set(ae*(1+N*(W?.15:0)),ae*(1+.6*N),.04),Ps(le,R*2.2,.8)}),at.opacity=.75*(1-N)*Math.min(1,D.shadowK*4),ye.opacity=.8*N,N>.6){let le=Ee.userData.J;le.shR.rotation.set(-1.9*(N-.6)/.4,0,-.3),le.elR.rotation.x=-.2}N>.95&&!D.saidBoss&&(D.saidBoss=!0,s.subtitle('"Same time tomorrow."',3),t.oneShot("coins",{volume:.5,rate:.6})),D.shadowK>.3&&!D.saidShadow&&(D.saidShadow=!0,Oe("My shadow\u2026 it isn't keeping up.",3.5))}else de>=3&&!D.shadowDone&&(D.shadowDone=!0);if(D.shadowDone&&(at.opacity=Xt(at.opacity,0,4,O),ye.opacity=Xt(ye.opacity,0,4,O),ye.opacity<.01&&(ce.visible=Ee.visible=!1)),d()||ee.update(O,Te,fe,de,D.warp),d()&&de===3&&!D.loopDone&&!D.inLoop&&fe.z>ys.z0+.5&&(D.inLoop=!0,Oe("Wait. Where are they?",3)),D.inLoop&&(fe.z>ys.trigger&&D.loops<2&&(n.dolly.position.z-=ys.period,D.loops++,Ke(.35),t.oneShot("heartbeat",{volume:.9}),t.oneShot("whispers",{volume:.4,rate:.8}),D.loops===1&&(Ye.visible=!0,s.subtitle('"Four hundred pieces."',3),setTimeout(()=>Oe("I've been here.",3),900)),D.loops===2&&(k.visible=!0,Oe("The same lane. Again.",3),$.position.set(66.7,1.2,2),V.loopSew=t.loop("sewing",{object:$,volume:.6,ref:3}),V.loopFac=t.loop("factory",{object:$,volume:.5,ref:4}),V.loopSew&&Ue.push(V.loopSew),V.loopFac&&Ue.push(V.loopFac))),ie.forEach((H,R)=>{H.userData.ph+=O*26,H.userData.needle.position.y=.16+Math.sin(H.userData.ph+R)*.02,H.userData.wheel.rotation.x-=O*26}),D.loops>=2&&fe.z>8.5&&(D.inLoop=!1,D.loopDone=!0,Ye.visible=!1,k.visible=!1,V.loopSew&&V.loopSew.stop(),V.loopFac&&V.loopFac.stop(),c.active=!0,c.rewind(6),Oe("They're back.",2.5))),d()&&de===4&&D.hide==="none"&&fe.x>68.8&&(D.hide="coming",D.hideT=0,o.hugMode=!0,J.visible=!0,J.position.set(80.5,0,12.7),J.rotation.y=-Math.PI/2,J.userData.walk=1,t.oneShot("scream",{object:J,volume:.5,rate:.7,ref:4}),Oe("Something is coming. It follows the light.",3.5),ct(n.xr?"Hold the bag to your chest to hide the light \u2014 and stay still":"Hold R to hide the light \u2014 and stay still",7)),D.hide==="coming"){D.hideT+=O;let H=J.position.x>fe.x+.4,R=D.sidestep?fe.z>12.7?11.75:13.65:12.7;J.position.z=Xt(J.position.z,R,2,O),J.position.x-=O*(ot?.7:1.15),J.userData.stride+=O*.9,Ur(J,Te,O);let z=J.userData.J;z.head.rotation.y=Math.sin(Te*.9)*.7;let N=Math.hypot(J.position.x-fe.x,J.position.z-fe.z);H&&N<2.4&&ot&&!Vt&&(D.sidestep=!0),H&&N<1&&!(ot&&!Vt)&&!i.noCatch&&(Mt(),D.hide="none",J.visible=!1,D.sidestep=!1),!H&&J.position.x<fe.x-3&&(D.hide="passed",D.sidestep=!1,o.hugMode=!1,J.visible=!1,Oe("It didn't see me.",3),c.active=!0,c.rewind(9))}D.nextFlash-=O,D.nextFlash<=0&&D.phase==="chase"&&!D.inLoop&&D.hide!=="coming"&&(D.nextFlash=3.5+Math.random()*2,D.flash=.85,D.thunderAt=D.t+.5+Math.random()*.6),D.thunderAt&&D.t>D.thunderAt&&(D.thunderAt=0,t.oneShot("thunder",{volume:.5})),D.flash=Math.max(0,D.flash-O*1.8);let L=de===4?Ht((fe.x-70)/10,0,1):0;switch(Re.intensity=L*6+D.collapse*10,D.phase){case"chase":an<.9&&In&&!ee.safe&&!i.noCatch&&Mt(),!d()&&ee.opened&&!D.ended&&(D.ended=!0,c.stop(),r.set(null),st("done"),$e&&$e("home")),fe.x>ea.x-1.1&&fe.z>11.4&&!D.ended&&d()&&D.hide==="passed"&&(st("collapse"),dn());break;case"caught":if(D.t>.9&&D.t-O<=.9){let H=CE[D.cp];n.place(H.x,H.z,H.yaw,n.eye),c.rewind(8),D.stamina=1,D.tired=!1,D.cp===3&&(D.inLoop=!1,D.loops=0,Ye.visible=k.visible=!1,V.loopSew&&V.loopSew.stop(),V.loopFac&&V.loopFac.stop())}D.t>1.2&&(s.fade(!1),st("chase"),Oe("No. Again. Run.",2.5));break;case"collapse":{D.collapse=Math.min(1,D.t/6);let H=D.collapse;n.canMove=!1,v.forEach((R,z)=>{let N=R.userData,le=Math.max(0,H*1.4-z%7*.06);R.position.y=N.home.y+le*le*30*N.lift,R.rotation.z+=O*N.spin*H,R.rotation.x+=O*N.spin*.5*H}),Z.forEach(R=>{R.position.y=H*H*18,R.updateMatrix()}),M.forEach(R=>{R.position.y=-H*H*6}),E.visible=!0,E.material.opacity=Math.min(.95,.3+H*2.5),E.scale.setScalar(3+60*H*H),Re.pos.set(ea.x,1.6,ea.z),Re.intensity=6+30*H,G.visible=!0,G.position.copy(fe),pe.opacity=Ht((H-.55)/.4,0,1),D.t>.4&&D.t-O<=.4&&(t.oneShot("thunder",{volume:.6,rate:.5}),Oe("Home\u2026",2.5)),D.t>1.8&&D.t-O<=1.8&&s.subtitle('"Ten rupees. This is six."',1.8),D.t>3&&D.t-O<=3&&s.subtitle('"Same time tomorrow."',1.8),D.t>4.2&&D.t-O<=4.2&&s.subtitle('"Chor\u2026"',1.6),D.t>5.2&&D.t-O<=5.2&&s.fade(!0,!0),D.t>6.8&&!D.ended&&(D.ended=!0,r.set(null),st("done"),$e&&$e("void"));break}}}function dn(){c.stop(),r.set(null),l.forEach(O=>{O.visible=!1}),i.hideSpace&&i.hideSpace("home"),F&&(F.style.opacity=0),V.yells&&V.yells.setVolume(0),V.heart&&V.heart.setVolume(.2),t.oneShot("doorWood",{volume:.7})}function se(O=n.dolly.position.x){let Te=wt(Ht((O-73)/8,0,1))*(1-(D.collapse||0)),ze=D.warp||0,de=D.flash||0,Je=D.collapse||0,ot=D.inLoop?1:0,Rn=1-ee.dim;return{fog:new ve(11569760).lerp(new ve(1449259),Math.min(1,ze*1.6)).lerp(new ve(10129600),de*.5).lerp(new ve(16183004),Je).lerp(new ve(3419176),Te*.5),doorWarmth:Te,density:it(it(it(.055,.11,ze),.2,ot),.05,Te)*(1-Je*.7),sun:(it(2.2,0,Math.min(1,ze*2.5))+de*2.2)*Rn,hemi:(it(.75,.2,ze)+de*1.3)*Rn+Je*2.5,hemiSky:new ve(12109016).lerp(new ve(5909098),ze).lerp(new ve(16773852),Je),hemiGround:new ve(5915696).lerp(new ve(1180682),ze).lerp(new ve(15259840),Je),sky:it(1,.18,ze)*Rn+Je*2.5,exposure:it(1,.85,ze)+Je*.3,skyTint:new ve(1,1,1).lerp(new ve(.55,.08,.12),Math.min(1,ze*1.3)).lerp(new ve(.8,.78,1),de*.6).lerp(new ve(1,.96,.9),Je)}}let $e=null;return{root:f,update:kt,start:Ae,stop:Xe,reset:We,atmosphere:se,name:"nightmare",zone:{minX:tl.x1+.4},onEnd(O){$e=O},getColliders(){return[...g,...Ne.filter(O=>O.k>=1).map(O=>O.col),...ee.colliders()]},get phase(){return D.phase},get stamina(){return D.stamina},get S(){return D},lanes:ee,sceneStart(O){let Te=O?[[66.7,2],[66.7,12.7],[72,12.7],[76,12.7],[79.8,12.7]]:[[33,3],[37,6],[39.5,8.3],[41,8.3]],[ze,de]=Te[Te.length-1];n.place(ze,de,-Math.PI/2,1.52),n.canMove=!0,c.trail=Te.map(([Je,ot])=>new b(Je,0,ot)),c.rewind(O?10:7),O&&(Object.assign(D,{cp:4,loopDone:!0,inLoop:!1,hide:"passed",shadowDone:!0,warp:1,sawGhost:!0}),De.forEach(Je=>{Je.done=!0}),ee.S.sky=1,ee.S.win=3,ee.S.winT=9,ee.arms.forEach(Je=>{Je.done=!0}))},skip(){if(D.phase!=="chase"){D.t=99;return}D.cp<3?(n.place(66.7,-2.5,Math.PI,n.eye),D.cp=3):D.inLoop?D.loops<2?n.place(66.7,ys.trigger+.2,Math.PI,n.eye):n.place(66.7,9,Math.PI,n.eye):d()&&D.hide!=="passed"?D.hide==="none"?n.place(69.5,12.7,-Math.PI/2,n.eye):(J.position.x=n.dolly.position.x-3.5,D.hide="coming"):!d()&&fe.x>80?ee.forceOpen():n.place(d()?81.2:80.6,12.7,-Math.PI/2,n.eye)}}}var Tf={x0:82,x1:88,z0:10,z1:15.4,h:2.8,door:{z0:12,z1:13.4}};function Om(i){let{scene:e,audio:t,interactor:n,player:s,ui:r,thread:o,hands:a,bagCtl:l,lights:c}=i,u=()=>i.edition==="extra",h=new nt;h.name="home",e.add(h);let{x0:d,x1:f,z0:g,z1:v,h:m}=Tf,p=(d+f)/2,M=(g+v)/2,x=f-d,_=v-g,S=Tf.door.z0,P=Tf.door.z1,T=2,U=new rn,Y=(()=>{let se=zt.facade("#9a7a5a"),$e=se.getContext("2d");$e.fillStyle="rgba(70,50,30,.25)",$e.fillRect(0,0,512,512);let O=new Qt(se);return O.colorSpace=Dt,O.wrapS=O.wrapT=Ln,O})();{let se=Y.image.getContext("2d");se.fillStyle="#8a6c4e",se.fillRect(0,0,512,512);for(let $e=0;$e<40;$e++)se.fillStyle=`rgba(${40+Math.random()*40},${30+Math.random()*20},20,${.08+Math.random()*.12})`,se.beginPath(),se.arc(Math.random()*512,Math.random()*512,20+Math.random()*80,0,7),se.fill();se.fillStyle="rgba(30,20,12,.35)",se.fillRect(0,430,512,82),Y.needsUpdate=!0}let y=(se,$e)=>{let O=Y.clone();return O.needsUpdate=!0,O.repeat.set(se/3,$e/3),new et({map:O,roughness:1})},A=(se,$e,O,Te,ze,de)=>{let Je=new Ie(new mt(se+.08,$e+.04),y(se,$e));Je.position.set(O,Te,ze),Je.rotation.y=de,Je.receiveShadow=!0,h.add(Je)};A(x,m,p,m/2,g,0),A(x,m,p,m/2,v,Math.PI),A(_,m,f,m/2,M,-Math.PI/2),A(S-g,m,d,m/2,(g+S)/2,Math.PI/2),A(v-P,m,d,m/2,(P+v)/2,Math.PI/2),A(P-S,m-T,d,(m+T)/2,(S+P)/2,Math.PI/2);let Z=zt.dirt().clone();Z.needsUpdate=!0,Z.repeat.set(2,2);let K=new Ie(new mt(x,_),new et({map:Z,color:10518624,roughness:1}));K.rotation.x=-Math.PI/2,K.position.set(p,.004,M),K.receiveShadow=!0,h.add(K);let j=zt.tin().clone();j.needsUpdate=!0,j.repeat.set(3,2);let xe=new Ie(new mt(x,_),new et({map:j,side:Rt,metalness:.3,roughness:.7}));xe.rotation.x=Math.PI/2,xe.position.set(p,m,M),h.add(xe);for(let se=d+.8;se<f;se+=1.6)U.add(ne.box(.08,.1,_),Le(3811868,{roughness:1}),se,m-.06,M);let te=new et({map:(()=>{let se=new Qt(zt.facade("#8a7a64",!0));return se.colorSpace=Dt,se.wrapS=se.wrapT=Ln,se})(),roughness:.95,emissive:1708560}),he=(se,$e,O,Te,ze)=>{let de=new Ie(new mt(se,$e),te);de.position.set(O,Te,ze),de.rotation.y=-Math.PI/2,h.add(de)};he(S-g+1.4,4,d-.03,2,(g-1.4+S)/2),he(v-P+1,4,d-.03,2,(P+v+1)/2),he(P-S,4-T,d-.03,(4+T)/2,(S+P)/2);let oe=new yt({color:new ve(1,.88,.62).multiplyScalar(2.2),transparent:!0,opacity:.9,side:Rt,fog:!1}),_e=new Ie(new mt(P-S,T),oe);_e.position.set(d-.04,T/2,(S+P)/2),_e.rotation.y=-Math.PI/2,h.add(_e);let Pe=c.add({pos:new b(d-1,1.4,(S+P)/2),color:16765072,intensity:0,distance:7,space:"home",priority:2}),Re=new nt;Re.position.set(d+.03,0,S),h.add(Re);let Be=new Ie(new At(.04,T,P-S),zn(zt.plywood()));Be.position.set(0,T/2,(P-S)/2),Re.add(Be);let at=zn(zt.plywood()),ce=Le(12105908,{metalness:.85,roughness:.25}),Ee=new nt;Ee.position.set(85,0,12.7),h.add(Ee);{let se=new rn;se.add(Tn(.9,.6,.05,.02),at,0,.3,0),[[-.4,-.25],[.4,-.25],[-.4,.25],[.4,.25]].forEach(([$e,O])=>se.add(ne.box(.05,.3,.05),at,$e,.15,O)),[-.2,.2].forEach($e=>se.add(ne.cyl(.13,.11,.015,18),ce,$e,.36,0)),se.add(ne.cyl(.035,.03,.09,10),ce,.35,.395,.18),se.build(Ee)}let ye=new nt;ye.visible=!1,ye.position.set(0,.37,0),Ee.add(ye);let Ce=new et({color:14200944,roughness:.8});ye.add(new Ie(Tn(.24,.18,.1,.03,.01),Ce));let De=new Ie(new mt(1.6,.9),new et({map:gi("check",1,128),roughness:1}));De.rotation.x=-Math.PI/2,De.position.set(86.6,.01,10.9),De.receiveShadow=!0,h.add(De);let we=_n({child:!0,top:6974074,bottom:4868690,skin:5913126,outfit:"shirt",seed:301,scale:.95});we.name="little-brother",De.name="brother-mat",h.add(we);let ke=()=>{let se=we.userData.J;["shL","shR","elL","elR","spine","neck","head"].forEach($e=>se[$e].rotation.set(0,0,0))};function Ye(){Go(we),ke(),im(we),we.rotation.set(0,0,Math.PI/2),we.position.set(0,0,0),we.updateMatrixWorld(!0);let se=we.userData.mesh;se.skeleton.update(),se.computeBoundingBox();let $e=se.boundingBox.clone().applyMatrix4(se.matrixWorld),O=$e.getCenter(new b);we.position.set(De.position.x-O.x,De.position.y+.02-$e.min.y,De.position.z-O.z),we.userData.lying=!0}function k(){Go(we),ke(),Xo(we,{hug:!0}),we.rotation.set(0,-2.2,0),we.position.set(86.5,0,11.05),we.userData.lying=!1}Ye();let C=new Ie(new mt(1.3,.8),new et({map:gi("stripe",3,128),roughness:1}));C.rotation.x=-Math.PI/2,C.position.set(84.55,.011,10.95),C.receiveShadow=!0,h.add(C),U.add(Tn(.95,.62,.12,.05),new et({map:gi("paisley",4,128),roughness:1,flatShading:!0}),86.75,.04,10.9),U.add(Tn(.32,.42,.08,.04),Le(14209216,{roughness:1}),85.85,.02,10.9);let ie=new nt;ie.position.set(87.3,0,14.7),h.add(ie);{let se=new rn,$e=Le(9067066,{roughness:1,flatShading:!0});se.add(ne.box(.5,.3,.12),$e,0,.15,-.2),se.add(ne.box(.12,.3,.5),$e,-.2,.15,0),se.add(ne.box(.12,.3,.5),$e,.2,.15,0),se.add(ne.cyl(.17,.13,.18,12),Le(3815992,{metalness:.5,roughness:.5}),0,.4,0);for(let O=0;O<5;O++)se.add(ne.cyl(.02,.02,.5,5),Le(4861984),.3+O*.03,.03,.3-O*.06,0,O,Math.PI/2);se.build(ie)}let $=new Ie(new en(.1,8,6),new yt({color:new ve(1,.4,.1).multiplyScalar(2)}));$.scale.y=.4,$.position.set(0,.06,0),ie.add($);let J=_n({female:!0,top:8010314,bottom:10115642,scarf:11879470,skin:7030320,seed:302,scale:1.3});Xo(J),J.position.set(86.55,0,14.15),J.rotation.y=Math.PI/2+.5,h.add(J);{let se=J.userData.J;se.shL.rotation.set(-.9,0,.2),se.shR.rotation.set(-1,0,-.2),se.elL.rotation.x=-.9,se.elR.rotation.x=-.7}U.add(ne.box(.25,.03,.9),at,87.85,1.4,12.5);for(let se=0;se<4;se++)U.add(ne.cyl(.06,.05,.1,10),ce,87.85,1.47,12.15+se*.22);U.add(ne.box(.8,.45,.5),Le(4872810,{metalness:.4,roughness:.5}),82.7,.23,14.9),U.add(ne.box(.82,.04,.52),Le(3820122,{metalness:.4}),82.7,.47,14.9),U.add(ne.cyl(.005,.005,3,4),Le(3811866),84.6,2.25,10.35,0,0,Math.PI/2);let ue=[];for(let se=0;se<4;se++){let $e=new Ie(new mt(.4,.55),new et({map:gi(["buti","stripe","check","border"][se],se+2,128),side:Rt,color:11575440}));$e.geometry.translate(0,-.27,0),$e.position.set(83.5+se*.7,2.24,10.35),h.add($e),ue.push($e)}U.add(ne.box(.3,.38,.02),Le(12619818),85.5,1.8,v-.02);let pe=new Ie(new mt(.3,.21),new et({map:yf?yf():null,roughness:.9,color:15919832}));pe.position.set(d+.02,1.45,11.3),pe.rotation.y=Math.PI/2,pe.rotation.z=.04,h.add(pe);let G=new nt;G.position.set(87.85,1.43,13.3),h.add(G);{let se=new rn;se.add(ne.cyl(.05,.06,.06,10),Le(9071146,{metalness:.6}),0,.03,0),se.build(G)}let w=new Ie(new en(.025,6,5),new yt({color:new ve(1,.75,.35).multiplyScalar(3)}));w.scale.y=1.8,w.position.y=.1,G.add(w);let E=new Nn(new Wn({map:zt.dot(),color:new ve(1,.6,.25).multiplyScalar(.7),blending:vn,depthWrite:!1,transparent:!0,fog:!1}));E.scale.setScalar(.5),E.position.y=.1,G.add(E);let F=c.add({pos:new b(87.55,1.65,13.3),color:16749615,intensity:0,distance:7,decay:1.5,space:"home",priority:3}),re=c.add({pos:new b(84.5,1.75,g+.2),color:7704504,intensity:0,distance:3.2,decay:2,space:"home",priority:.7}),B=c.add({pos:new b(87.2,.45,14.4),color:16738848,intensity:0,distance:3.5,decay:1.5,space:"home",priority:2}),me=new Ie(new mt(.7,.5),new yt({color:1713216,fog:!1}));me.position.set(84.5,1.8,g+.02),h.add(me);for(let se=1;se<4;se++)U.add(ne.box(.015,.5,.02),Le(1710618),84.15+se*.175,1.8,g+.03);U.build(h,{cast:!0,receive:!0});let Ne=[{minX:d-.3,maxX:d,minZ:g,maxZ:S},{minX:d-.3,maxX:d,minZ:P,maxZ:v},{minX:d,maxX:f,minZ:g-.3,maxZ:g},{minX:d,maxX:f,minZ:v,maxZ:v+.3},{minX:f,maxX:f+.3,minZ:g,maxZ:v},{minX:84.5,maxX:85.5,minZ:12.35,maxZ:13.05},{minX:86.9,maxX:88,minZ:13.6,maxZ:15.4},{minX:82,maxX:83.2,minZ:14.5,maxZ:15.4},{minX:85.7,maxX:87.5,minZ:10.4,maxZ:11.4}],Ue={minX:d-.1,maxX:d+.1,minZ:S,maxZ:P},V=!1,q={phase:"idle"};n.add({object:Ee,label:"Put the food down",enabled:()=>q.phase==="toTable",onPress:()=>X("giving"),maxDist:2.6}),n.add({object:C,label:"Lie down",enabled:()=>q.phase==="toMat",onPress:()=>X("lying"),maxDist:2.6}),n.add({object:pe,label:"Your page",enabled:()=>(q.phase==="rest"||q.phase==="toMat")&&!q.readPage,onPress:()=>{q.readPage=!0,r.thought('"When I grow up I will be a teacher."',4.5)},maxDist:2.2});let D=[],fe={},Ve=new Lt;h.add(Ve);function ct(){t.stopAll(D),D=[],fe={};let se=($e,O)=>(O&&(fe[$e]=O,D.push(O)),O);se("fire",t.loop("fire",{object:ie,volume:.45,ref:1})),se("drip",t.loop("drip",{volume:.1})),se("wind",t.loop("wind",{volume:.04})),se("yells",t.loop("yells",{object:Ve,volume:.55,ref:2,rate:.9})),se("heart",t.loop("heartbeat",{volume:0}))}let Oe=new b,ee=new b,st=document.getElementById("eyelids"),Et=(se,$e=5)=>r.hint(se,$e);function X(se){q.phase=se,q.t=0,q.idle=0,q.enter=!0}function We(se){V=se,i.refreshColliders()}function ge(){Object.assign(q,{phase:"idle",t:0,idle:0,holdC:0,readPage:!1,ended:!1,relief:0,calmT:0,enterFade:void 0}),ye.visible=!1,oe.opacity=.9,_e.visible=!0,Re.visible=!1,F.intensity=0,B.intensity=0,re.intensity=0,Pe.intensity=0,J.rotation.y=Math.PI/2+.5,J.userData.look=0,st&&st.style.setProperty("--lid","0"),Ye(),Ae=0,We(!1)}let Ae=0;function Xe(){if(ge(),ct(),u()){st&&st.style.setProperty("--lid","1"),r.fade(!1),s.place(d+.75,12.1,-Math.PI/2-.25,.82),s.canMove=!1,s.pitch=-.1,i.police.forEach(se=>{se.visible=!1}),l.glow=0,l.heavy=0,l.stow=0,s.speedScale=1,s.canRun=!1,_e.visible=!1,Re.visible=!0,We(!0),k(),J.rotation.y=-.2,fe.yells&&fe.yells.setVolume(0),X("wake");return}r.fade(!0),setTimeout(()=>r.fade(!1),450),s.place(d+.9,(S+P)/2,-Math.PI/2,1.52),i.police.forEach(se=>{se.visible=!1}),l.glow=0,l.heavy=0,s.speedScale=1,s.canRun=!1,_e.visible=!1,Re.visible=!0,We(!0),t.oneShot("doorWood",{volume:.8}),X("arrive")}function Ke(){t.stopAll(D),D=[],fe={},st&&st.style.setProperty("--lid","0")}function Mt(se,$e,O=!0){if(oe.opacity=.75+.25*Math.sin($e*3),q.phase!=="idle"&&q.phase!=="done"&&O){if(q.calmT+=se,q.relief=wt(Ht(q.calmT/(u()?4:7),0,1)),fe.heart){let de=u()?0:Math.max(0,1-q.calmT/8);fe.heart.setVolume(.75*de*de),fe.heart.setPlaybackRate(Math.max(.6,1.9-q.calmT*.17))}!u()&&q.calmT>1.3&&q.calmT-se<=1.3&&t.oneShot("exhale",{volume:.55})}if(Pe.intensity=q.phase==="idle"?5:0,w.scale.set(1+Math.sin($e*17)*.1,1.8+Math.sin($e*11)*.3,1),Di(J,$e,se),q.phase==="idle"||q.phase==="done"||!O)return;q.t+=se,q.idle+=se;let Te=q.enter;q.enter=!1,s.headWorld(Oe),re.intensity=1.15-.3*q.relief;let ze=.35+.65*q.relief;if(F.intensity=5.8*ze*(1+.05*Math.sin($e*9)*Math.sin($e*3.1)),B.intensity=(1.8+.2*Math.sin($e*7))*ze,u())fe.yells&&fe.yells.setVolume(0);else if(Ve.position.set(it(66,96,Math.min(1,q.t/9)),1.5,12.7),fe.yells&&fe.yells.setVolume(Math.max(0,.55*(1-q.t/10))),q.t>.5&&q.t<7&&q.phase==="arrive"){let de=Math.floor(q.t*3);de!==q.lastStep&&(q.lastStep=de,t.oneShot("step",{object:Ve,volume:.15,ref:1.2}))}if(ue.forEach((de,Je)=>{de.rotation.x=.04*Math.sin($e*.9+Je)}),we.userData.lying)we.rotation.z=Math.PI/2+.01*Math.sin($e*1.4);else{let de=we.userData.J,Je=Math.atan2(Oe.x-we.position.x,Oe.z-we.position.z);de.head.rotation.y=Xt(de.head.rotation.y,Ht(Math.atan2(Math.sin(Je-we.rotation.y),Math.cos(Je-we.rotation.y)),-1,1),3,se)}switch(q.phase){case"wake":{st&&st.style.setProperty("--lid",String(1-wt(Ht((q.t-.6)/3.6,0,1)))),J.userData.look=-.4,q.t>2&&q.t-se<=2&&r.thought("\u2026Home?",2.5),q.t>4.8&&q.t-se<=4.8&&r.subtitle(`Mother: "You're late. We waited."`,3.5),q.t>7.2&&q.t-se<=7.2&&r.thought("The bag. It's still here.",3),q.t>8.5&&X("standing");break}case"standing":{let de=wt(Math.min(1,q.t/1.4));s.eye=it(.82,1.52,de),q.t>1.5&&(s.canMove=!0,X("toTable"),o.set(new b(85,.5,12.7)),Et("Put the food on the table",6));break}case"eating":{Te&&(s.canMove=!1,q.fromEye=s.eye),Ae=q.t<1.2?q.t/1.2:q.t<3.2?1:Math.max(0,1-(q.t-3.2)/1.2),q.enterFade!==q.t<3.2&&(q.enterFade=q.t<3.2,r.fade(q.enterFade)),s.xr||(s.eye=q.t<3.2?it(q.fromEye,.85,wt(Math.min(1,q.t/1))):it(.85,1.52,wt(Ht((q.t-5.8)/1,0,1)))),q.t>1.3&&q.t-se<=1.3&&(ye.visible=!1,Ye(),J.rotation.y=Math.PI/2+.5),q.t>1.6&&q.t-se<=1.6&&r.subtitle("(later)",1.8),q.t>4.2&&q.t-se<=4.2&&r.thought("Tonight, we ate.",3.5),q.t>5.5&&q.t-se<=5.5&&r.subtitle(`Mother: "Sleep now. Seven o'clock tomorrow."`,3.5),q.t>7&&(X("toMat"),o.set(new b(84.55,.3,10.95)),Et("Lie down on your mat",6),s.canMove=!0);break}case"lying":{Te&&(s.canMove=!1,q.from=s.dolly.position.clone(),q.fromYaw=s.yaw,q.fromEye=s.eye,o.set(null),l.stow=1);let de=wt(Math.min(1,q.t/2));s.dolly.position.lerpVectors(q.from,ee.set(84.55,q.from.y,10.95),de),s.xr||(s.eye=it(q.fromEye,.32,de),s.pitch=it(0,1.15,de),s.yaw=it(q.fromYaw,-Math.PI/2,de)),q.t>2.2&&(X("rest"),Et(s.xr?"When you are ready, squeeze both grips to close your eyes":"When you are ready, hold C to close your eyes",8));break}case"arrive":q.t>.8&&q.t-se<=.8&&r.thought("Home.",2.5),q.t>3.2&&q.t-se<=3.2&&r.subtitle("(the shouting runs past the door\u2026 and fades away)",3),q.t>5.4&&q.t-se<=5.4&&r.thought("They didn't see me. I'm safe.",3),J.userData.look=Math.sin(q.t*.6)*.2-.5,s.canMove=q.t>2.5,q.t>6.5&&(s.canMove=!0,X("toTable"),o.set(new b(85,.5,12.7)),Et("Put the food on the table",6));break;case"giving":Te&&(o.set(null),l.forceOpen=1,s.canMove=!1,q.from=s.dolly.position.clone(),q.fromYaw=s.yaw,q.to=Math.abs(q.from.x-85)>Math.abs(q.from.z-12.7)?new b(q.from.x<85?84.15:85.85,0,12.7):new b(85,0,q.from.z<12.7?11.95:13.45),q.toYaw=Math.atan2(-(85-q.to.x),-(12.7-q.to.z)));{let de=wt(Math.min(1,q.t/.6));if(ee.copy(q.from).lerp(q.to,de),s.dolly.position.x=ee.x,s.dolly.position.z=ee.z,!s.xr){let Je=Math.atan2(Math.sin(q.toYaw-q.fromYaw),Math.cos(q.toYaw-q.fromYaw));s.yaw=q.fromYaw+Je*de,s.pitch=it(s.pitch,-.45,Math.min(1,q.t*3))}}q.t>.5&&q.t<1.5&&a.set(0,{key:"serve",mode:"world",pos:new b(84.9,.5,12.75),rot:mi.toward(-1,Oe,Ee.position.clone().setY(.4)),pose:"grip",blend:.4}),q.t>.95&&q.t-se<=.95&&(l.setContents({food:!1}),ye.visible=!0,t.oneShot("fabric",{volume:.6})),q.t>1.5&&q.t-se<=1.5&&(l.forceOpen=0,a.hide(0)),q.t>1.6&&(J.rotation.y=Xt(J.rotation.y,Math.PI/2+1.2,1.5,se)),q.t>2&&q.t-se<=2&&r.thought("She doesn't ask where it came from.",4),q.t>4.5&&q.t-se<=4.5&&r.subtitle('Mother: "Sit. Eat."',3),q.t>7&&X("eating");break;case"rest":s.keys.KeyC||q.xrClose?q.holdC+=se:q.holdC=0,st&&st.style.setProperty("--lid",String(Math.min(.35,q.holdC/1.5*.35))),(q.holdC>1.2||q.idle>45)&&X("closing");break;case"closing":{let de=Math.min(1,q.t/5);st&&st.style.setProperty("--lid",String(.35+.65*wt(de))),Te&&(s.canMove=!1,fe.machines=t.loop("factory",{volume:0}),fe.machines&&D.push(fe.machines),fe.sew=t.loop("sewing",{volume:0}),fe.sew&&D.push(fe.sew)),fe.machines&&fe.machines.setVolume(.3*de),fe.sew&&fe.sew.setVolume(.5*de),fe.fire&&fe.fire.setVolume(.45*(1-de)),q.t>.3&&q.t-se<=.3&&r.thought("Tomorrow is a new day.",3.6),q.t>4.4&&q.t-se<=4.4&&r.thought("\u2026",2.5),q.t>7.5&&!q.ended&&(q.ended=!0,X("done"),dn&&dn("finale"));break}}}function kt(){let se=q.relief||0;return{fog:new ve(657424).lerp(new ve(1314056),se),density:it(.04,.03,se),sun:0,hemi:it(.3,.58,se),hemiSky:new ve(4868722).lerp(new ve(9071194),se),hemiGround:new ve(1709080).lerp(new ve(3021840),se),sky:.15,skyTint:new ve(.3,.3,.45),exposure:it(.94,1.08,se)}}let dn=null;return{root:h,update:Mt,start:Xe,stop:Ke,reset:ge,atmosphere:kt,name:"home",zone:{minX:82},onEnd(se){dn=se},get S(){return q},getColliders(){return V?[...Ne,Ue]:Ne},get phase(){return q.phase},setXRClose(se){q.xrClose=se},skip(){let se=q.phase;["arrive","giving","closing","wake","standing","eating","lying"].includes(se)?q.t=99:se==="toTable"?X("giving"):se==="toMat"?X("lying"):se==="rest"&&X("closing")}}}var qn=new b(140,0,0);function Fm(i){let{scene:e,audio:t,interactor:n,player:s,ui:r,hands:o,bagCtl:a,lights:l}=i,c=new nt;c.name="void",e.add(c),c.visible=!1;let u=(()=>{let k=99;return()=>(k=k*16807%2147483647,(k-1)/2147483646)})(),h=(()=>{let k=document.createElement("canvas");k.width=k.height=128;let C=k.getContext("2d"),ie=C.createRadialGradient(64,64,0,64,64,64);ie.addColorStop(0,"rgba(255,248,230,1)"),ie.addColorStop(.55,"rgba(255,236,200,.55)"),ie.addColorStop(1,"rgba(255,230,190,0)"),C.fillStyle=ie,C.fillRect(0,0,128,128);let $=new Qt(k);return $.colorSpace=Dt,$})(),d=new Ie(new sr(1.6,40),new yt({map:h,transparent:!0,depthWrite:!1,fog:!1,color:new ve(.75,.72,.66)}));d.rotation.x=-Math.PI/2,d.position.copy(qn).setY(.01),c.add(d);let f=new Ie(new en(40,32,16),new Wt({uniforms:{uA:{value:1}},transparent:!0,depthWrite:!1,side:pn,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uA; varying vec3 vD; void main(){ float k = smoothstep(0.12, -0.55, vD.y); gl_FragColor = vec4(0.52, 0.45, 0.4, 0.42 * k * uA); }"}));f.position.copy(qn),f.renderOrder=-5,f.frustumCulled=!1,c.add(f);let g=[];for(let k=0;k<34;k++){let C=new Wn({map:zt.dot(),color:new ve().setHSL(.08+u()*.08,.5,.82+u()*.12),transparent:!0,opacity:.1+u()*.2,depthWrite:!1,fog:!1}),ie=new Nn(C),$=12+u()*32,J=k%5*1.25+u()*.6;ie.userData={r:$,a:J,y:-14+u()*22,w:(u()-.5)*.02},ie.scale.setScalar(5+u()*12),c.add(ie),g.push(ie)}let v=()=>new yt({color:14214911,transparent:!0,opacity:0,blending:vn,depthWrite:!1,fog:!1}),m=[0,1,2,3,4].map(k=>{let C=v(),ie=Nr({wood:C});ie.traverse(J=>{J.isMesh&&(J.material=C,J.castShadow=!1,J.receiveShadow=!1)});let $=new nt;return $.add(ie),c.add($),$.userData={mat:C,m:ie,ph:k/5,a:k*1.26+.4,y:.6+k%3*.9,spin:(k%2?1:-1)*.15},$}),p=new Lt;c.add(p);let M=["buti","stripe","check","paisley","border","buti"].map((k,C)=>new yt({map:gi(k,C,128),side:Rt,transparent:!0,opacity:.9,fog:!1})),x=[];for(let k=0;k<46;k++){let C=new Ie(new mt(.34,.26),M[k%6]);C.userData={r:1.4+u()*9,a:u()*Math.PI*2,y:.3+u()*3.5,sp:(.15+u()*.35)*(u()<.5?-1:1),bob:u()*6,swoop:u()<.25},c.add(C),x.push(C)}let _=[];{let k=ie=>{let $=new es,J=ie?.95:.62;return $.moveTo(-.16,.3),$.lineTo(-.3,.22),$.lineTo(-.42,.02),$.lineTo(-.32,-.04),$.lineTo(-.22,.1),$.lineTo(-.22,.3-J),$.lineTo(.22,.3-J),$.lineTo(.22,.1),$.lineTo(.32,-.04),$.lineTo(.42,.02),$.lineTo(.3,.22),$.lineTo(.16,.3),$.quadraticCurveTo(0,.2,-.16,.3),new Io($,6)},C=[15260872,14207192,13161696,14733496,13688008,15257800];for(let ie=0;ie<12;ie++){let $=new yt({color:new ve(C[ie%C.length]).multiplyScalar(.72),transparent:!0,opacity:0,side:Rt,depthWrite:!1,fog:!1}),J=new Ie(k(ie%3===0),$);c.add(J),J.userData={mat:$,r:2.5+u()*7,a:u()*Math.PI*2,y:.8+u()*3.5,sp:(.08+u()*.12)*(u()<.5?-1:1),ph:u()*6,s:.9+u()*.6},_.push(J)}}let S=[];{let k=($,J={})=>new et({color:$,roughness:.6,emissive:$,emissiveIntensity:.12,flatShading:!0,fog:!1,transparent:!0,...J}),C=()=>k(13224388,{metalness:.8,roughness:.25,emissiveIntensity:.05}),ie=($,J,ue,pe,G,w,E=0,F=0,re=0)=>{let B=new Ie(J,ue);return B.position.set(pe,G,w),B.rotation.set(E,F,re),$.add(B),B};{let $=new nt;ie($,new Nt(.17,.15,.018,28),C(),0,0,0);let J=new en(.07,12,8,0,Math.PI*2,0,Math.PI/2);ie($,J,k(15920348),-.04,.008,.05).scale.set(1.2,.8,1),[[.08,-.06,14196784],[-.07,-.08,6982186],[.1,.06,11024410]].forEach(([ue,pe,G])=>{ie($,new Nt(.045,.038,.035,16,1,!0),C(),ue,.026,pe),ie($,new Nt(.042,.042,.004,16),k(G),ue,.034,pe)}),[0,1].forEach(ue=>ie($,new Nt(.075,.075,.006,18),k(ue?13144140:14198888),-.07+ue*.03,.03+ue*.007,-.02-ue*.02,.18,0,.1)),ie($,new en(.018,8,6),k(12075034),0,.016,.11),$.userData.colors=[15920348,14196784,6982186,13144140,11024410],S.push($)}{let $=new nt;ie($,new Nt(.15,.13,.014,24),C(),0,0,0),ie($,new Nt(.045,.038,.16,16,1,!0),k(15265520,{opacity:.35,roughness:.1,emissiveIntensity:.02}),-.04,.087,0),ie($,new Nt(.042,.036,.13,16),k(15771696),-.04,.073,0),ie($,new en(.03,10,6),k(16774364),-.04,.142,0).scale.set(1.3,.5,1.3),ie($,new Nt(.004,.004,.2,5),k(14174826),-.025,.17,.01,0,0,-.25);let J=new bi(.03,.12,10);J.rotateX(Math.PI),ie($,J,k(15916192),.07,.04,.02,Math.PI/2-.2,.6,0).scale.set(1,1,.8),ie($,new At(.012,.003,.07),k(13150328),.1,.025,.07,0,.6,0),ie($,new en(.01,6,4),k(6986282),.06,.07,0),$.userData.colors=[15771696,16774364,15916192,14174826,6986282],S.push($)}S.forEach($=>{$.visible=!1,$.traverse(J=>{J.isMesh&&(J.castShadow=!1,J.userData.op=J.material.opacity)}),c.add($)})}let P=Array.from({length:5},()=>{let k=new Nn(new Wn({map:zt.dot(),transparent:!0,opacity:0,depthWrite:!1,fog:!1}));return k.scale.setScalar(.12),c.add(k),k}),T=l.add({pos:qn.clone().add(new b(0,1.6,-.4)),color:16767136,intensity:0,distance:3,space:"void",priority:3}),U=[],Y=new mt(.022,.022),y={phase:"idle"},A=[],Z={};function K(){t.stopAll(A),A=[],Z={};let k=(C,ie)=>(ie&&(Z[C]=ie,A.push(ie)),ie);k("wind",t.loop("wind",{volume:.04,rate:.7})),k("sew",t.loop("sewing",{object:p,volume:0,ref:2})),k("fac",t.loop("factory",{volume:0})),k("kids",t.loop("children",{volume:.05,rate:.85}))}let j=new b,xe=new b,te=document.getElementById("eyelids");function he(k){y.phase=k,y.t=0}let oe=[new b,new b],_e=[-1,1].map(k=>{let C=new b(-k*.45,.12,-.88).normalize(),ie=new b(-k*.86,.5,0);ie.addScaledVector(C,-ie.dot(C)).normalize();let $=C.clone().negate(),J=ie.clone().negate(),ue=new b().crossVectors(J,$);return new Ft().setFromRotationMatrix(new ft().makeBasis(ue,J,$),"YXZ")}),Pe=[new b,new b],Re=[new b,new b];function Be(){Object.assign(y,{phase:"idle",t:0,tries:0,food:-1,ft:0,ended:!1}),S.forEach(k=>{k.visible=!1}),U.forEach(k=>c.remove(k)),U.length=0,T.intensity=0}let at=new b(0,1.2,-.6);function ce(k){y.food=k,y.ft=0,y.grabs=0,he("offer");let C=k===0?-1:1;S.forEach(($,J)=>{$.visible=J===k});let ie=S[k];ie.userData.from=qn.clone().add(xe.set(C*4.5,2.2,-4)),ie.userData.mid=qn.clone().add(xe.set(C*2,1.5,-1.6)),ie.userData.base=qn.clone().add(at),ie.position.copy(ie.userData.from),ie.scale.setScalar(1),ie.traverse($=>{$.isMesh&&($.material.opacity=$.userData.op)}),t.oneShot("fabric",{volume:.4,rate:.6})}function Ee(){y.phase==="offer"&&y.ft>2.6&&(he("grab"),y.tries++)}function ye(k){let C=k.userData.colors;for(let ie=0;ie<70;ie++){let $=new Ie(Y,new yt({color:C[ie%C.length],transparent:!0,opacity:.95,side:Rt,depthWrite:!1,fog:!1}));$.position.copy(k.position).add(xe.set((u()-.5)*.3,u()*.12,(u()-.5)*.3)),$.userData.v=new b((u()-.5)*.6,.25+u()*.6,(u()-.5)*.6-.2),c.add($),U.push($)}}function Ce(){Be(),K(),s.place(qn.x,qn.z,0,1.52),s.canMove=!1,s.bounds=null,a.stow=1,o.hide(),r.fade(!1),te&&te.style.setProperty("--lid","0"),he("wake")}function De(){t.stopAll(A),A=[],Z={}}function we(k,C,ie=!0){if(!c.visible||(g.forEach(pe=>{let G=pe.userData;G.a+=G.w*k*3,pe.position.set(qn.x+Math.cos(G.a)*G.r,G.y+Math.sin(C*.1+G.a)*.6,qn.z+Math.sin(G.a)*G.r)}),y.phase==="idle"||!ie))return;y.t+=k,s.headWorld(j);let $=Math.min(1,y.t/4+(y.phase==="wake"?0:1));m.forEach((pe,G)=>{let w=pe.userData;w.ph=(w.ph+k*.055)%1,w.a+=k*w.spin;let E=Math.sin(w.ph*Math.PI),F=it(16,2.6,E);pe.position.set(qn.x+Math.cos(w.a)*F,w.y+(1-E)*2,qn.z+Math.sin(w.a)*F),pe.lookAt(j.x,pe.position.y,j.z),pe.scale.setScalar(it(.5,1.15,E)),w.mat.opacity=.32*E*E*$*(y.phase==="closing"?1-y.t/3:1),w.m.userData.ph+=k*24,w.m.userData.needle.position.y=.16+Math.sin(w.m.userData.ph)*.02,w.m.userData.wheel.rotation.x-=k*24,G===0&&p.position.copy(pe.position)});let J=Math.max(...m.map(pe=>Math.sin(pe.userData.ph*Math.PI)));Z.sew&&Z.sew.setVolume(.7*$*(y.phase==="closing",1)),Z.fac&&Z.fac.setVolume(.12*J*$+(y.phase==="closing"?y.t/3*.35:0)),x.forEach((pe,G)=>{let w=pe.userData;w.a+=k*w.sp;let E=w.swoop?it(.9,w.r,.5+.5*Math.sin(C*.4+w.bob)):w.r;pe.position.set(qn.x+Math.cos(w.a)*E,w.y+Math.sin(C*.8+w.bob)*.3,qn.z+Math.sin(w.a)*E),pe.rotation.set(C*.7+w.bob,C*.9+G,Math.sin(C+G)*.6),pe.material.opacity=.9*$}),_.forEach((pe,G)=>{let w=pe.userData;w.a+=k*w.sp;let E=w.r+Math.sin(C*.3+w.ph)*1.2;pe.position.set(qn.x+Math.cos(w.a)*E,w.y+Math.sin(C*.5+w.ph)*.5,qn.z+Math.sin(w.a)*E),pe.rotation.set(Math.sin(C*.7+w.ph)*.35,-w.a+(w.sp>0?0:Math.PI),Math.sin(C*.9+w.ph)*.25),pe.scale.set(w.s*(1+.08*Math.sin(C*1.3+w.ph)),w.s*(1-.06*Math.sin(C*1.3+w.ph)),w.s),w.mat.opacity=.42*$*(y.phase==="closing"?Math.max(0,1-y.t/3):1)});let ue=S[y.food];if(ue&&ue.visible){y.ft+=k;let pe=ue.userData;if(y.phase==="offer"){let w=wt(Math.min(1,y.ft/2.6)),E=1-w;ue.position.set(E*E*pe.from.x+2*E*w*pe.mid.x+w*w*pe.base.x,E*E*pe.from.y+2*E*w*pe.mid.y+w*w*pe.base.y,E*E*pe.from.z+2*E*w*pe.mid.z+w*w*pe.base.z),w>=1&&(ue.position.y+=Math.sin(C*1.4)*.012),ue.rotation.y=(1-w)*2.5*(y.food?-1:1)+Math.sin(C*.5)*.15}let G=1;y.phase==="grab"&&(G=y.t<.7?1:Math.max(0,1-(y.t-.7)/.9),ue.position.y+=Math.sin(C*30)*.0015*(y.t>.7?1:0)),ue.traverse(w=>{w.isMesh&&(w.material.opacity=w.userData.op*G)}),T.pos.copy(ue.position).y+=.35,T.intensity=1.6*G,P.forEach((w,E)=>{let F=(C*.35+E/5)%1;w.position.copy(ue.position).add(xe.set(Math.sin(E*2+C)*.03,.06+F*.3,0)),w.material.opacity=(y.food===0?.22:.08)*G*(1-F),w.scale.setScalar(.05+F*.15)})}else T.intensity=0,P.forEach(pe=>{pe.material.opacity=0});switch(U.forEach(pe=>{pe.position.addScaledVector(pe.userData.v,k),pe.userData.v.y+=k*.25,pe.rotation.x+=k*3,pe.rotation.y+=k*2,pe.material.opacity=Math.max(0,pe.material.opacity-k*.45)}),y.phase){case"wake":y.t>1.5&&y.t-k<=1.5&&r.thought("It's so bright.",3),y.t>5&&y.t-k<=5&&r.thought("Is this\u2026 the sky?",3),y.t>7.5&&ce(0);break;case"offer":y.ft>2&&y.ft-k<=2&&r.thought(y.food===0?"Food. A whole plate.":"Something sweet\u2026 cold\u2026",3),y.ft>2.6&&y.ft-k<=2.6&&r.hint(s.xr?"Pull the trigger to grab it":"Press E to grab it",6),y.ft>2.6&&(s.keys.KeyE||i.xrTrigger)&&Ee(),y.ft>16&&Ee();break;case"grab":{let pe=Math.min(1,y.t/1.4),G=.5-.5*Math.cos(pe*Math.PI*4);[0,1].forEach(w=>{let E=w?1:-1,F=ue?ue.position:xe.copy(qn).add(at);Re[w].set(F.x+E*.25,F.y-.05,F.z+.1+(w?.035:-.035)),Pe[w].set(qn.x+E*.27,j.y-.5,qn.z-.12),oe[w].lerpVectors(Pe[w],Re[w],G),o.set(w,{key:"void-grab",mode:"world",pos:oe[w],rot:_e[w],pose:"flat",curl:G>.75?[.22,.2,.22,.26,.12]:[.04,.03,.04,.07,0],blend:.15})}),y.t>.7&&y.t-k<=.7&&(r.hint(""),r.thought(y.tries===1?"No\u2014 wait\u2014":"Please\u2026",2.5)),y.t>1.2&&y.t-k<=1.2&&ue&&(ye(ue),t.oneShot("fabric",{volume:.7,rate:1.4})),y.t>1.6&&ue&&(ue.visible=!1),y.t>1.6&&y.t-k<=1.6&&o.hide(),y.t>3.2&&(y.tries>=2?he("closing"):ce(1));break}case"closing":{let pe=Math.min(1,y.t/4);y.t>.4&&y.t-k<=.4&&r.thought("I'm so tired.",3),te&&te.style.setProperty("--lid",String(wt(Ht((y.t-1.2)/2.6,0,1)))),y.t>4.3&&!y.ended&&(y.ended=!0,he("done"),Ye&&Ye("home"));break}}}function ke(){let k=y.phase==="closing"?Math.min(1,y.t/4):0;return f.material.uniforms.uA.value=1-k,{fog:new ve(16050904).lerp(new ve(16775408),k),density:.004,sun:0,hemi:1.45+k,hemiSky:new ve(16773852),hemiGround:new ve(11051192),sky:2+k*1.7,skyTint:new ve(1,.95,.88),exposure:1+k*.05}}let Ye=null;return{root:c,update:we,start:Ce,stop:De,reset:Be,atmosphere:ke,name:"void",zone:{minX:120},onEnd(k){Ye=k},getColliders(){return[]},get phase(){return y.phase},skip(){y.phase==="offer"?(y.ft=99,Ee()):y.t=99}}}var gn=i=>document.querySelector(i),ia=new URLSearchParams(location.search),Vr=ia.has("debug"),PE=Vr&&ia.get("dtmax")?+ia.get("dtmax"):.05,Zn=Xn.quality==="auto"?"medium":Xn.quality;ia.get("q")&&(Zn=ia.get("q"));var pt=Wp(Xn,()=>ht.xr);addEventListener("error",i=>pt.error("Error: "+i.message));addEventListener("unhandledrejection",i=>Vr&&pt.error("Error: "+(i.reason&&i.reason.message||i.reason)));var Mh=gn("#scene"),Bt=new fc({canvas:Mh,antialias:!1,powerPreference:"high-performance",stencil:!1});Bt.outputColorSpace=Dt;Bt.toneMapping=za;Bt.toneMappingExposure=.95;Bt.shadowMap.enabled=!0;Bt.shadowMap.type=Od;Bt.xr.enabled=!0;var Df=()=>Math.min(devicePixelRatio,Zn==="high"?1.5:Zn==="medium"?1:.8);Bt.setPixelRatio(Df());Bt.setSize(innerWidth,innerHeight,!1);var mn=new Co,Lf=lm();mn.background=new ve(723207);mn.fog=new pc(1445899,.036);var IE=new Ro(Bt);mn.environment=IE.fromScene(new Vc,.04).texture;mn.environmentIntensity=.1;var Qn=new ti(72,innerWidth/innerHeight,.03,90),Us=new ti(50,innerWidth/innerHeight,.05,90),Eh=new Uc;Qn.add(Eh);Eh.setMasterVolume(Xn.volume);var Hs=new Wc(Eh);Hs.stopAll=Hs.stopAll||(i=>(i||[]).forEach(e=>{try{e&&e.isPlaying&&e.stop(),e&&e.parent&&e.parent.remove(e)}catch{}}));var ht=new th({camera:Qn,scene:mn,canvas:Mh,audio:Hs,settings:Xn}),Gr=new Xc(Qn,Mh);Gr.onUse=()=>{pt.pulse(),Hs.ready&&Hs.oneShot("tap",{volume:.35,rate:.95+Math.random()*.1})};var Br=new Qc(mn),kr=new uh(mn,Qn,{skin:8014896}),Ui=_n({child:!0,outfit:"shirt",top:8022608,bottom:3816e3,skin:8014896,seed:3,scale:1.3});{let i=new yt({colorWrite:!1,depthWrite:!1});Ui.traverse(e=>{e.isMesh&&(e.material=i,e.castShadow=!0,e.receiveShadow=!1,e.frustumCulled=!1)}),Ui.visible=!1,mn.add(Ui)}var Bm=0,gh=!1;function DE(i,e){if(Ui.visible=e&&ht.eye>.55,!Ui.visible)return;let t=ht.dolly.position;ht.headWorld(na),Ui.position.set(ht.xr?na.x:t.x,t.y,ht.xr?na.z:t.z),Ui.rotation.y=ht.yaw+Math.PI,ht.eye<1.42?(gh||(gh=!0),Vo(Ui,Math.max(.12,ht.eye-.8)),Ui.position.x+=Math.sin(ht.yaw)*.12,Ui.position.z+=Math.cos(ht.yaw)*.12):(gh&&(gh=!1,Go(Ui)),ht.moving&&(Bm+=i*(ht.running?11:7.5)),Ps(Ui,Bm,ht.moving?1:0))}var Uf=new ih(mn,6),Yn=new Uo(16763030,0);Yn.castShadow=!0;Yn.shadow.mapSize.set(2048,2048);Object.assign(Yn.shadow.camera,{left:-15,right:15,top:15,bottom:-15,near:1,far:60});Yn.shadow.bias=-5e-4;Yn.shadow.normalBias=.035;Yn.shadow.radius=2;mn.add(Yn,Yn.target);var vh=new b(14,20,-6),il=new Dc(13150338,3811870,.85);mn.add(il);var LE=fm(mn,vh),ol=[Ga(0),Ga(1)];ol.forEach(i=>{i.visible=!1,mn.add(i)});var bh=new nh(ht,ol),ri=null,Ns=null,si=null,On={scene:mn,audio:Hs,interactor:Gr,player:ht,ui:pt,thread:Br,hands:kr,lights:Uf,police:ol,pursuit:bh,camera:Qn,post:{dream:0,glow:0},edition:"normal"},Ls=["sweatshop","street","nightmare","void","home"],_t=[],Sn=0,al=0,Nf=null;On.refreshColliders=()=>{ht.colliders=_t.filter(Boolean).flatMap(i=>i.getColliders())};async function UE(){let i=gn("#load-bar"),e=gn("#load-msg"),t=performance.now(),n=async(s,r)=>{if(Vr){let o=performance.now();console.log("[load]",r,Math.round(o-t)+"ms"),t=o}i.style.setProperty("--progress",s),e.textContent=r,await new Promise(o=>setTimeout(o,30))};await n(.1,"Weaving cloth\u2026"),Ns=new dh(Qn,Em(),kr),On.bagCtl=Ns,await n(.3,"Building the workshop\u2026"),_t[0]=Im(On),al=1,Lf.install(mn),On.refreshColliders(),si=new Xa({renderer:Bt,camera:Qn,player:ht,interactor:Gr,hands:kr,bagCtl:Ns,ui:pt}),Xa.supported().then(s=>{let r=gn("#vr-btn");r&&(r.hidden=!s)}),await n(.75,"Lighting\u2026"),ri=dm(Bt,mn,Qn,Zn),On.post=new Proxy({},{set(s,r,o){return ri[r]=o,!0},get(s,r){return ri[r]}}),rl(),wh(),Wr(!0),ri.setCamera(Us),_t[0].cine(Us,0),Bt.compile(mn,Us),await Promise.all(['400 40px "Gowun Batang"','400 72px "Spectral"'].map(s=>document.fonts.load(s).catch(()=>[]))),await n(1,"Ready"),setTimeout(()=>{pt.show("loading",!1),pt.show("title",!0),Xi("title")},400),Nf=NE()}var km=(i=60)=>new Promise(e=>setTimeout(e,i));async function NE(){await km(900);let i=[Nm,zm,Fm,Om];for(let t=0;t<i.length;t++){let n=i[t](On);_t[t+1]=n,al=t+2,Lf.install(n.root),n.root.visible=!1,n.onEnd(s=>Xm(s)),n.setQuality&&n.setQuality(Zn),On.refreshColliders(),await km(120)}let e=_t.map(t=>t.root.visible);_t.forEach(t=>{t.root.visible=!0}),ol.forEach(t=>{t.visible=!0});try{await Bt.compileAsync(mn,Qn)}catch{Bt.compile(mn,Qn)}_t.forEach((t,n)=>{t.root.visible=e[n]}),Wr(un==="title"||un==="loading"||un==="intro"),Vr&&console.log("[load] all spaces built")}function Xm(i){if(i==="finale")return OE();Hf(i)}async function Hf(i){let e=Ls.indexOf(i);_t[e]||await Nf;let t=i==="street"||i==="nightmare";_t.forEach((n,s)=>{n&&s!==e&&s<=Sn&&!(t&&s===e-1)&&n.stop()}),e>=1&&(ht.bounds=null),Sn=e,_t[e].start(),On.refreshColliders(),Wr()}On.hideSpace=i=>{let e=_t[Ls.indexOf(i)];e&&(e.root.visible=!1)};function Wr(i=!1){document.body.classList.toggle("in-light",!i&&Ls[Sn]==="void");let e=Ls.indexOf("void"),t=Ls.indexOf("home"),n=Ls.indexOf("nightmare");_t.forEach((s,r)=>{if(!s)return;let o=i?r===0:Math.abs(r-Sn)<=1;!i&&Sn===e&&(o=r===e),!i&&r===e&&Sn!==e&&(o=!1),!i&&Sn===n&&r===t&&(o=!0),!i&&Sn===t&&r===n&&(o=!0),s.root.visible=o}),ol.forEach(s=>{s.visible=!i&&(Sn===1||Sn===2)})}var Vm=new ve,Gm=new ve,Or=new b,Rf=new Set;function HE(i){for(let e=_t.length-1;e>=0;e--)if(_t[e]&&i>=_t[e].zone.minX)return e;return 0}function zE(i,e){ht.headWorld(Or);let t=e?0:zs?HE(Or.x):Sn,n=_t[t]?_t[t].atmosphere(Or.x):_t[0].atmosphere(),s=Math.min(1,i*(e?2.5:.9));Lf.update(i,vs,Ls[t],n.doorWarmth||0),Vm.copy(n.fog),mn.fog.color.lerp(Vm,s),mn.background.copy(mn.fog.color),mn.fog.density=cn.lerp(mn.fog.density,n.density,s),Yn.intensity=cn.lerp(Yn.intensity,n.sun||0,s),il.intensity=cn.lerp(il.intensity,n.hemi,s),il.color.lerp(Gm.copy(n.hemiSky||new ve(13150338)),s),il.groundColor.lerp(Gm.copy(n.hemiGround||new ve(3811870)),s),Bt.toneMappingExposure=cn.lerp(Bt.toneMappingExposure,n.exposure||1,s*.7),LE.update(i,vs,n,e?Us.position:Or);let r=30/Yn.shadow.mapSize.x,o=Math.round(Or.x/r)*r,a=Math.round(Or.z/r)*r;Yn.target.position.set(o,0,a),Yn.position.set(o+vh.x,vh.y,a+vh.z),Yn.shadow.autoUpdate=Yn.intensity>.02,_t[0]&&(e||Sn===0)&&!zs||_t[0]&&(_t[0].sun.intensity=0),_t[0]&&(_t[0].sun.shadow.autoUpdate=_t[0].sun.intensity>.02),Rf.clear(),_t.forEach(l=>{l&&l.root.visible&&Rf.add(l.name)}),Uf.update(i,Or,Rf)}function zf(){_t.forEach(i=>{i&&(i.stop(),i.reset())}),Ns.resetContents(),bh.stop(),Br.set(null),pt.thought(""),pt.subtitle(""),pt.stamina(null),ht.canRun=!0,ht.speedScale=1,ht.jogAllowed=!1,Sn=0,_t[0].start(),On.refreshColliders(),Wr()}function OE(){Xi("end"),Gr.release(),pt.fade(!0),setTimeout(()=>{ht.unlock(),_t.forEach(e=>e&&e.stop()),pt.thought(""),pt.subtitle(""),pt.label(""),pt.hint(""),pt.stamina(null);let i=gn("#eyelids");i&&i.style.setProperty("--lid","0"),pt.show("endcard",!0),pt.finale(!0),setTimeout(()=>{un==="end"&&pt.fade(!1)},1100),ri.setCamera(Us),si&&si.active&&si.showEnd()},2e3)}function rl(){Bt.xr.isPresenting||Bt.setPixelRatio(Df()),ri&&(ri.setQuality(Zn),wh()),_t.forEach(i=>i&&i.setQuality&&i.setQuality(Zn)),Yn.shadow.mapSize.setScalar(Zn==="high"?2048:Zn==="medium"?1536:1024),Yn.shadow.map&&(Yn.shadow.map.dispose(),Yn.shadow.map=null),document.querySelectorAll("[data-q]").forEach(i=>i.classList.toggle("on",i.dataset.q===Xn.quality))}function wh(){if(!Bt.xr.isPresenting&&(Bt.setSize(innerWidth,innerHeight,!1),Qn.aspect=Us.aspect=innerWidth/innerHeight,Qn.updateProjectionMatrix(),Us.updateProjectionMatrix(),ri)){let i=Bt.getDrawingBufferSize(new Se);ri.setSize(i.x,i.y)}}addEventListener("resize",wh);var un="loading";function Xi(i){un=i,document.body.classList.toggle("playing",i==="play"||i==="paused")}Xi("loading");function xh(i){let e=gn("#ed");e&&(e.classList.toggle("open",i),e.querySelector(".ed-btn").setAttribute("aria-expanded",i?"true":"false"))}function FE(i){On.edition=i==="extra"?"extra":"normal",gn("#ed-cur").textContent=On.edition==="extra"?"Extra":"Normal",gn("#ed").classList.toggle("extra",On.edition==="extra"),document.querySelectorAll("#ed-list [data-ed]").forEach(e=>{e.classList.toggle("on",e.dataset.ed===On.edition),e.setAttribute("aria-selected",e.dataset.ed===On.edition?"true":"false")})}{let i=document.querySelector('#ed-list [data-ed="extra"]');i&&(i.addEventListener("pointerenter",()=>gn("#ed").classList.add("hot")),i.addEventListener("pointerleave",()=>gn("#ed").classList.remove("hot")))}document.addEventListener("click",i=>{let e=i.target.closest("[data-action]");if(!e){xh(!1);return}let t=e.dataset.action;t!=="edition-open"&&t!=="edition"&&xh(!1),t==="begin"&&(_h=0,If()),t==="scenes"&&pt.show("scenes",!0),t==="close-scenes"&&pt.show("scenes",!1),t==="scene"&&(pt.show("scenes",!1),_h=+e.dataset.n,If()),t==="vr"&&BE(),t==="edition-open"&&xh(!gn("#ed").classList.contains("open")),t==="edition"&&(FE(e.dataset.ed),xh(!1)),t==="settings"&&pt.show("settings",!0),t==="close-settings"&&pt.show("settings",!1),t==="resume"&&Km(),t==="restart"&&kE(),t==="quit"&&$m()});document.querySelectorAll("[data-q]").forEach(i=>i.addEventListener("click",()=>{Xn.quality=i.dataset.q,Zn=i.dataset.q==="auto"?"medium":i.dataset.q,sl=Xn.quality!=="auto",Oa(),rl()}));gn("#sens").value=Xn.sensitivity;gn("#sens").addEventListener("input",i=>{Xn.sensitivity=+i.target.value,Oa()});gn("#vol").value=Xn.volume;gn("#vol").addEventListener("input",i=>{Xn.volume=+i.target.value,Eh.setMasterVolume(Xn.volume),Oa()});gn("#hints").checked=Xn.hints;gn("#hints").addEventListener("change",i=>{Xn.hints=i.target.checked,Oa()});async function If(){if(un!=="title")return;pt.show("title",!1),pt.show("intro",!0),Xi("intro");let i=gn("#intro-1"),e=gn("#intro-2");e.textContent="Preparing sound\u2026",setTimeout(()=>i.classList.add("on"),300),await Hs.init(),e.textContent="Click anywhere to sit down.",e.classList.add("on"),gn("#intro").addEventListener("click",qm,{once:!0})}var yh=!1;async function BE(){if(un!=="title"||!si||yh)return;yh=!0;let i=Hs.init();try{await si.enter(()=>{ht.xr=!0,pt.show("title",!1),pt.fade(!0),Xi("intro"),Zn==="high"&&(Zn="medium",rl()),i.catch(()=>{}).then(()=>{!si.active||un!=="intro"||(zf(),ri.setCamera(Qn),Ym(),Xi("play"),ta=0,sl=!0,setTimeout(()=>pt.fade(!1),600))})},()=>{ht.xr=!1,yh=!1,Bt.setPixelRatio(Df()),wh(),un!=="end"&&(pt.fade(!1),un!=="title"&&$m())})}catch(e){yh=!1,pt.error("Could not start VR: "+e.message)}}function qm(){pt.fade(!0),pt.show("intro",!1),ht.lock(),zf(),ri.setCamera(Qn),Ym(),Xi("play"),ta=0,setTimeout(()=>pt.fade(!1),1500),gn("#intro-1").classList.remove("on"),gn("#intro-2").classList.remove("on")}var _h=0;async function Ym(){let i=_h;_h=0,!(i<2)&&(_t[0].sceneOutside(),i!==2&&(await Nf,await Hf("nightmare"),Ns.setContents({coins:3,scraps:!0,food:!0}),_t[Ls.indexOf("nightmare")].sceneStart(i===4),On.refreshColliders(),Wr()))}var Zm=0;function Jm(){un==="play"&&(Gr.release(),Xi("paused"),pt.show("pause",!0),pt.hint(""),Zm=performance.now())}function Km(){un==="paused"&&(pt.show("pause",!1),Xi("play"),ht.lock(),setTimeout(()=>{un==="play"&&!ht.locked&&!ht.xr&&pt.hint("Click to look around",3)},400))}ht.onPauseRequest=Jm;Mh.addEventListener("click",()=>{un==="play"&&!ht.locked&&!ht.xr&&ht.lock()});function kE(){pt.show("pause",!1),pt.show("endcard",!1),pt.fade(!0),ht.lock(),zs&&Sh(!1),setTimeout(()=>{zf(),ri.setCamera(Qn),Xi("play"),pt.fade(!1)},700)}function $m(){if(pt.show("pause",!1),pt.show("endcard",!1),zs&&Sh(!1),si&&si.active){let i=si;setTimeout(()=>i.exit(),0)}_t.forEach(i=>{i&&(i.stop(),i.reset())}),bh.stop(),Ns.resetContents(),Br.set(null),kr.hide(),ht.unlock(),ri.setCamera(Us),pt.thought(""),pt.subtitle(""),pt.hint(""),pt.label(""),pt.stamina(null),Sn=0,Wr(!0),Xi("title"),pt.show("title",!0)}var zs=!1,Fr=null,VE=[[-1.5,3.2,-1.9],[23,4,-2],[41.5,8.3,-Math.PI/2],[83.5,12.7,-Math.PI/2]];function Sh(i){i===zs||i&&(un!=="play"||ht.xr)||(zs=i,document.body.classList.toggle("exploring",i),i?(Fr={pos:ht.dolly.position.clone(),yaw:ht.yaw,pitch:ht.pitch,eye:ht.eye,canMove:ht.canMove,bounds:ht.bounds},ht.noclip=!0,ht.canMove=!0,ht.eye=1.52,Br.visible=!1,_t.forEach(e=>{e&&(e.root.visible=!0)}),pt.hint(""),pt.thought(""),kr.hide()):(ht.noclip=!1,ht.dolly.position.copy(Fr.pos),ht.yaw=Fr.yaw,ht.pitch=Fr.pitch,ht.eye=Fr.eye,ht.canMove=Fr.canMove,ht.bounds=Fr.bounds,Br.visible=!0,Wr()))}var Wm=!1;addEventListener("keydown",i=>{if(i.code==="Escape"&&!i.repeat&&(un==="play"&&!ht.xr?Jm():gn("#settings").classList.contains("show")?pt.show("settings",!1):gn("#scenes").classList.contains("show")?pt.show("scenes",!1):un==="paused"&&performance.now()-Zm>250&&Km()),i.code==="KeyF"&&(un==="play"||un==="paused")){let e=gn("#controls"),t=!e.classList.contains("on");t?Wm=!0:Wm&&gn("#fhint").classList.add("gone"),e.classList.toggle("on",t)}if(i.code==="KeyP"&&al>=5&&Sh(!zs),zs){let e=["Digit1","Digit2","Digit3","Digit4"].indexOf(i.code);if(e>=0){let[t,n,s]=VE[e];ht.place(t,n,s,1.52)}}Vr&&i.code==="KeyN"&&_t[Sn]&&_t[Sn].skip()});var sl=Xn.quality!=="auto"||!!ia.get("q"),ta=0,Af=0,Cf=0;function GE(i){if(!(sl||un!=="play")&&(ta+=i,!(ta<3)&&(Af+=i,Cf++,ta>7))){let e=Cf/Af;Af=0,Cf=0,ta=3,e<40&&Zn!=="low"?(Zn=Zn==="high"?"medium":"low",rl()):(e>75&&Zn==="medium"&&(Zn="high",rl()),sl=!0)}}var WE=new Lr,vs=0,Pf=new b,na=new b;Bt.setAnimationLoop(()=>{let i=Math.min(WE.getDelta(),PE);if(vs+=i,!_t[0]||!ri)return;let e=un==="play",t=Bt.xr.isPresenting;if(t&&si.blurred){try{si.update(i)}catch{}Bt.render(mn,Qn);return}if(_t.forEach((s,r)=>s&&s.update(i,vs,e&&!zs&&r===Sn)),t){try{si.update(i)}catch(a){si.faulted||(si.faulted=!0,console.error("[vr]",a))}let s=si.state,r=Math.max(s[0].trigger,s[1].trigger),o=Math.min(s[0].squeeze,s[1].squeeze);_t[1]&&_t[1].setXRBeg(r>.5),On.xrTrigger=r>.5,ht.qHeldXR=Math.max(s[0].squeeze,s[1].squeeze)>.6,_t[4]&&_t[4].setXRClose(o>.6)}else ht.qHeldXR=!1,On.xrTrigger=!1;if(e){ht.update(i);let s=Gr.update();pt.label(s&&!t?s.label:""),ht.headWorld(na),ht.forward(Pf),Br.update(i,vs,na,Pf),Ns.update(i,vs,(Ns.hugMode?!!ht.keys.KeyR:ht.qHeld)||t&&ht.qHeldXR,ht.moving),pt.stamina(Sn===2&&_t[2]?_t[2].stamina:null),GE(i)}else Br.update(i,vs,na,Pf);kr.update(i),DE(i,un==="play"||un==="paused");let n=un==="title"||un==="intro"||un==="end"||un==="loading";n&&_t[0].cine(Us,vs),zE(i,n),t?Bt.render(mn,Qn):ri.render(vs),Vr&&(gn("#debug").textContent=`${On.edition} \xB7 ${Ls[Sn]} \xB7 ${_t[Sn]?_t[Sn].phase:""} \xB7 ${Zn} \xB7 ${Math.round(1/Math.max(i,.001))} fps \xB7 built ${al}/5`)});function XE(){Bt.info.autoReset=!1,Bt.info.reset(),ri.render(vs);let i={calls:Bt.info.render.calls,triangles:Bt.info.render.triangles,geometries:Bt.info.memory.geometries,textures:Bt.info.memory.textures,programs:Bt.info.programs.length,quality:Zn};return Bt.info.autoReset=!0,i}Vr&&(window.__tlwh={stats:XE,get world(){return _t[Sn]},spaces:_t,goTo:Hf,get cur(){return Sn},get built(){return al},player:ht,camera:Qn,scene:mn,renderer:Bt,ui:pt,interactor:Gr,begin:If,sitDown:qm,get mode(){return un},setMode:Xi,ctx:On,get post(){return ri},audio:Hs,lights:Uf,pursuit:bh,setExplore:Sh,get bagCtl(){return Ns},hands:kr,shadowBody:Ui,get xrRig(){return si}});UE().then(()=>{_t[0].onEnd(i=>Xm(i))}).catch(i=>pt.error("Could not build the scene: "+i.message+`
`+i.stack));})();
