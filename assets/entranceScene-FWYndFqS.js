import{n as mf,N as qr,C as gf,W as _f}from"./index-CfjewKKp.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ac="180",xf=0,Vc=1,vf=2,lc=1,Mf=2,Ii=3,Zn=0,_n=1,gn=2,Oi=0,dr=1,cl=2,Gc=3,Wc=4,yf=5,Cs=100,Sf=101,Ef=102,Tf=103,bf=104,wf=200,Af=201,Rf=202,Cf=203,hl=204,ul=205,Pf=206,Df=207,Lf=208,If=209,Uf=210,Nf=211,Ff=212,Of=213,Bf=214,fl=0,dl=1,pl=2,_r=3,ml=4,gl=5,_l=6,xl=7,cc=0,zf=1,kf=2,es=0,Tu=1,bu=2,wu=3,Au=4,Ru=5,Cu=6,hc=7,Pu=300,xr=301,vr=302,vl=303,Ml=304,pa=306,Is=1e3,Ds=1001,yl=1002,fn=1003,Hf=1004,Mo=1005,mi=1006,Ea=1007,Ls=1008,vi=1009,Du=1010,Lu=1011,jr=1012,uc=1013,Us=1014,gi=1015,ns=1016,fc=1017,dc=1018,Qr=1020,Iu=35902,Uu=35899,Nu=1021,Fu=1022,si=1023,to=1026,eo=1027,pc=1028,mc=1029,Ou=1030,gc=1031,_c=1033,na=33776,ia=33777,sa=33778,ra=33779,Sl=35840,El=35841,Tl=35842,bl=35843,wl=36196,Al=37492,Rl=37496,Cl=37808,Pl=37809,Dl=37810,Ll=37811,Il=37812,Ul=37813,Nl=37814,Fl=37815,Ol=37816,Bl=37817,zl=37818,kl=37819,Hl=37820,Vl=37821,Gl=36492,Wl=36494,Xl=36495,ql=36283,Yl=36284,Zl=36285,Kl=36286,Vf=3200,Gf=3201,ma=0,Wf=1,Ni="",bn="srgb",Mr="srgb-linear",la="linear",Ce="srgb",Zs=7680,Xc=519,Xf=512,qf=513,Yf=514,Bu=515,Zf=516,Kf=517,Jf=518,$f=519,qc=35044,Yc="300 es",_i=2e3,ca=2001;class Er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zc=1234567;const Yr=Math.PI/180,no=180/Math.PI;function Os(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function xc(i,t){return(i%t+t)%t}function jf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qf(i,t,e){return i!==t?(e-i)/(t-i):0}function Zr(i,t,e){return(1-e)*i+e*t}function td(i,t,e,n){return Zr(i,t,1-Math.exp(-e*n))}function ed(i,t=1){return t-Math.abs(xc(i,t*2)-t)}function nd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function sd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function rd(i,t){return i+Math.random()*(t-i)}function od(i){return i*(.5-Math.random())}function ad(i){i!==void 0&&(Zc=i);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ld(i){return i*Yr}function cd(i){return i*no}function hd(i){return(i&i-1)===0&&i!==0}function ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function fd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ur(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const yo={DEG2RAD:Yr,RAD2DEG:no,generateUUID:Os,clamp:he,euclideanModulo:xc,mapLinear:jf,inverseLerp:Qf,lerp:Zr,damp:td,pingpong:ed,smoothstep:nd,smootherstep:id,randInt:sd,randFloat:rd,randFloatSpread:od,seededRandom:ad,degToRad:ld,radToDeg:cd,isPowerOfTwo:hd,ceilPowerOfTwo:ud,floorPowerOfTwo:fd,setQuaternionFromProperEuler:dd,normalize:En,denormalize:ur};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==p||l!==d||h!==g){let m=1-a;const f=c*p+l*d+h*g+u*x,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const T=Math.sqrt(S),M=Math.atan2(T,f*b);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T}const y=a*b;if(c=c*m+p*y,l=l*m+d*y,h=h*m+g*y,u=u*m+x*y,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*p,t[e+1]=c*g+h*p+l*u-a*d,t[e+2]=l*g+h*d+a*p-c*u,t[e+3]=h*g-a*u-c*p-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u+p*d*g;break;case"YZX":this._x=p*h*u+l*d*g,this._y=l*d*u+p*h*g,this._z=l*h*g-p*d*u,this._w=l*h*u-p*d*g;break;case"XZY":this._x=p*h*u-l*d*g,this._y=l*d*u-p*h*g,this._z=l*h*g+p*d*u,this._w=l*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Kc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Kc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new q,Kc=new Tr;class le{constructor(t,e,n,s,r,o,a,c,l){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],x=s[0],m=s[3],f=s[6],b=s[1],S=s[4],y=s[7],T=s[2],M=s[5],C=s[8];return r[0]=o*x+a*b+c*T,r[3]=o*m+a*S+c*M,r[6]=o*f+a*y+c*C,r[1]=l*x+h*b+u*T,r[4]=l*m+h*S+u*M,r[7]=l*f+h*y+u*C,r[2]=p*x+d*b+g*T,r[5]=p*m+d*S+g*M,r[8]=p*f+d*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,d=l*r-o*c,g=e*u+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=p*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ba.makeScale(t,e)),this}rotate(t){return this.premultiply(ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new le;function zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){const i=ha("canvas");return i.style.display="block",i}const Jc={};function io(i){i in Jc||(Jc[i]=!0,console.warn(i))}function md(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const $c=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?la:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return io("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return io("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:la,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),i}const Me=gd();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ks;class _d{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ks===void 0&&(Ks=ha("canvas")),Ks.width=t.width,Ks.height=t.height;const s=Ks.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ks}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xd=0;class vc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wa(s[o].image)):r.push(wa(s[o]))}else r=wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_d.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;const Aa=new q;class xn extends Er{constructor(t=xn.DEFAULT_IMAGE,e=xn.DEFAULT_MAPPING,n=Ds,s=Ds,r=mi,o=Ls,a=si,c=vi,l=xn.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Os(),this.name="",this.source=new vc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Aa).x}get height(){return this.source.getSize(Aa).y}get depth(){return this.source.getSize(Aa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case Ds:t.x=t.x<0?0:1;break;case yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case Ds:t.y=t.y<0?0:1;break;case yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Pu;xn.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],d=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,y=(d+1)/2,T=(f+1)/2,M=(h+p)/4,C=(u+x)/4,I=(g+m)/4;return S>y&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=M/n,r=C/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=M/s,r=I/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=I/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(p-h)/b,this.w=Math.acos((l+d+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Md extends Er{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new xn(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new vc(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Md{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ku extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yd extends xn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ti):ti.fromBufferAttribute(r,o),ti.applyMatrix4(t.matrixWorld),this.expandByPoint(ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fr),Eo.subVectors(this.max,Fr),Js.subVectors(t.a,Fr),$s.subVectors(t.b,Fr),js.subVectors(t.c,Fr),Yi.subVectors($s,Js),Zi.subVectors(js,$s),ms.subVectors(Js,js);let e=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-ms.z,ms.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,ms.z,0,-ms.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-ms.y,ms.x,0];return!Ra(e,Js,$s,js,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,Js,$s,js,Eo))?!1:(To.crossVectors(Yi,Zi),e=[To.x,To.y,To.z],Ra(e,Js,$s,js,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wi=[new q,new q,new q,new q,new q,new q,new q,new q],ti=new q,So=new zi,Js=new q,$s=new q,js=new q,Yi=new q,Zi=new q,ms=new q,Fr=new q,Eo=new q,To=new q,gs=new q;function Ra(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gs.fromArray(i,r);const a=s.x*Math.abs(gs.x)+s.y*Math.abs(gs.y)+s.z*Math.abs(gs.z),c=t.dot(gs),l=e.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sd=new zi,Or=new q,Ca=new q;class Bs{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Or.subVectors(t,this.center);const e=Or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Or.copy(t.center).add(Ca)),this.expandByPoint(Or.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ai=new q,Pa=new q,bo=new q,Ki=new q,Da=new q,wo=new q,La=new q;class ga{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pa.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Ki.copy(this.origin).sub(Pa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Ki.dot(this.direction),c=-Ki.dot(bo),l=Ki.lengthSq(),h=Math.abs(1-o*o);let u,p,d,g;if(h>0)if(u=o*c-a,p=o*a-c,g=r*h,u>=0)if(p>=-g)if(p<=g){const x=1/h;u*=x,p*=x,d=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pa).addScaledVector(bo,p),d}intersectSphere(t,e){Ai.subVectors(t.center,this.origin);const n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,n,s,r){Da.subVectors(e,t),wo.subVectors(n,t),La.crossVectors(Da,wo);let o=this.direction.dot(La),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,t);const c=a*this.direction.dot(wo.crossVectors(Ki,wo));if(c<0)return null;const l=a*this.direction.dot(Da.cross(Ki));if(l<0||c+l>o)return null;const h=-a*Ki.dot(La);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,n,s,r,o,a,c,l,h,u,p,d,g,x,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,d,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=p-x*l,e[9]=-a*c,e[2]=x-p*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,d=c*u,g=l*h,x=l*u;e[0]=p+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,d=c*u,g=l*h,x=l*u;e[0]=p-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=p*l+x,e[1]=c*u,e[5]=x*l+p,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-p*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=p-x*u}else if(t.order==="XZY"){const p=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ed,t,Td)}lookAt(t,e,n){const s=this.elements;return On.subVectors(t,e),On.lengthSq()===0&&(On.z=1),On.normalize(),Ji.crossVectors(n,On),Ji.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Ji.crossVectors(n,On)),Ji.normalize(),Ao.crossVectors(On,Ji),s[0]=Ji.x,s[4]=Ao.x,s[8]=On.x,s[1]=Ji.y,s[5]=Ao.y,s[9]=On.y,s[2]=Ji.z,s[6]=Ao.z,s[10]=On.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],f=n[14],b=n[3],S=n[7],y=n[11],T=n[15],M=s[0],C=s[4],I=s[8],E=s[12],w=s[1],G=s[5],N=s[9],L=s[13],Y=s[2],Q=s[6],F=s[10],P=s[14],z=s[3],rt=s[7],ht=s[11],H=s[15];return r[0]=o*M+a*w+c*Y+l*z,r[4]=o*C+a*G+c*Q+l*rt,r[8]=o*I+a*N+c*F+l*ht,r[12]=o*E+a*L+c*P+l*H,r[1]=h*M+u*w+p*Y+d*z,r[5]=h*C+u*G+p*Q+d*rt,r[9]=h*I+u*N+p*F+d*ht,r[13]=h*E+u*L+p*P+d*H,r[2]=g*M+x*w+m*Y+f*z,r[6]=g*C+x*G+m*Q+f*rt,r[10]=g*I+x*N+m*F+f*ht,r[14]=g*E+x*L+m*P+f*H,r[3]=b*M+S*w+y*Y+T*z,r[7]=b*C+S*G+y*Q+T*rt,r[11]=b*I+S*N+y*F+T*ht,r[15]=b*E+S*L+y*P+T*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*d-n*c*d)+x*(+e*c*d-e*l*p+r*o*p-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=u*m*l-x*p*l+x*c*d-a*m*d-u*c*f+a*p*f,S=g*p*l-h*m*l-g*c*d+o*m*d+h*c*f-o*p*f,y=h*x*l-g*u*l+g*a*d-o*x*d-h*a*f+o*u*f,T=g*u*c-h*x*c-g*a*p+o*x*p+h*a*m-o*u*m,M=e*b+n*S+s*y+r*T;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return t[0]=b*C,t[1]=(x*p*r-u*m*r-x*s*d+n*m*d+u*s*f-n*p*f)*C,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*C,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*d-n*c*d)*C,t[4]=S*C,t[5]=(h*m*r-g*p*r+g*s*d-e*m*d-h*s*f+e*p*f)*C,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*C,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*d+e*c*d)*C,t[8]=y*C,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*f-e*u*f)*C,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*C,t[12]=T*C,t[13]=(h*x*s-g*u*s+g*n*p-e*x*p-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,d=r*h,g=r*u,x=o*h,m=o*u,f=a*u,b=c*l,S=c*h,y=c*u,T=n.x,M=n.y,C=n.z;return s[0]=(1-(x+f))*T,s[1]=(d+y)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(d-y)*M,s[5]=(1-(p+f))*M,s[6]=(m+b)*M,s[7]=0,s[8]=(g+S)*C,s[9]=(m-b)*C,s[10]=(1-(p+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Qs.set(s[0],s[1],s[2]).length();const o=Qs.set(s[4],s[5],s[6]).length(),a=Qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ei.copy(this);const l=1/r,h=1/o,u=1/a;return ei.elements[0]*=l,ei.elements[1]*=l,ei.elements[2]*=l,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=u,ei.elements[9]*=u,ei.elements[10]*=u,e.setFromRotationMatrix(ei),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=_i,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),d=(n+s)/(n-s);let g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===_i)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ca)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_i,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),p=-(e+t)/(e-t),d=-(n+s)/(n-s);let g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===_i)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===ca)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new q,ei=new De,Ed=new q(0,0,0),Td=new q(1,1,1),Ji=new q,Ao=new q,On=new q,Qc=new De,th=new Tr;class Kn{constructor(t=0,e=0,n=0,s=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return th.setFromEuler(this),this.setFromQuaternion(th,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bd=0;const eh=new q,tr=new Tr,Ri=new De,Ro=new q,Br=new q,wd=new q,Ad=new Tr,nh=new q(1,0,0),ih=new q(0,1,0),sh=new q(0,0,1),rh={type:"added"},Rd={type:"removed"},er={type:"childadded",child:null},Ia={type:"childremoved",child:null};class Ye extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new q,e=new Kn,n=new Tr,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new le}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(nh,t)}rotateY(t){return this.rotateOnAxis(ih,t)}rotateZ(t){return this.rotateOnAxis(sh,t)}translateOnAxis(t,e){return eh.copy(t).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nh,t)}translateY(t){return this.translateOnAxis(ih,t)}translateZ(t){return this.translateOnAxis(sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Br,Ro,this.up):Ri.lookAt(Ro,Br,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ri),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(rh),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rd),Ia.child=t,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(rh),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,t,wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,Ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ye.DEFAULT_UP=new q(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new q,Ci=new q,Ua=new q,Pi=new q,nr=new q,ir=new q,oh=new q,Na=new q,Fa=new q,Oa=new q,Ba=new Pe,za=new Pe,ka=new Pe;class ii{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ni.subVectors(t,e),s.cross(ni);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ni.subVectors(s,e),Ci.subVectors(n,e),Ua.subVectors(t,e);const o=ni.dot(ni),a=ni.dot(Ci),c=ni.dot(Ua),l=Ci.dot(Ci),h=Ci.dot(Ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pi.x),c.addScaledVector(o,Pi.y),c.addScaledVector(a,Pi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ba.setScalar(0),za.setScalar(0),ka.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ba,r.x),o.addScaledVector(za,r.y),o.addScaledVector(ka,r.z),o}static isFrontFacing(t,e,n,s){return ni.subVectors(n,e),Ci.subVectors(t,e),ni.cross(Ci).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ii.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;nr.subVectors(s,n),ir.subVectors(r,n),Na.subVectors(t,n);const c=nr.dot(Na),l=ir.dot(Na);if(c<=0&&l<=0)return e.copy(n);Fa.subVectors(t,s);const h=nr.dot(Fa),u=ir.dot(Fa);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(nr,o);Oa.subVectors(t,r);const d=nr.dot(Oa),g=ir.dot(Oa);if(g>=0&&d<=g)return e.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ir,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return oh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(oh,a);const f=1/(m+x+p);return o=x*f,a=p*f,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Ha(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Me.workingColorSpace){return this.r=t,this.g=e,this.b=n,Me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Me.workingColorSpace){if(t=xc(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ha(o,r,t+1/3),this.g=Ha(o,r,t),this.b=Ha(o,r,t-1/3)}return Me.colorSpaceToWorking(this,s),this}setStyle(t,e=bn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const n=Hu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return Me.workingToColorSpace(mn.copy(this),t),Math.round(he(mn.r*255,0,255))*65536+Math.round(he(mn.g*255,0,255))*256+Math.round(he(mn.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Me.workingColorSpace){Me.workingToColorSpace(mn.copy(this),e);const n=mn.r,s=mn.g,r=mn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Me.workingColorSpace){return Me.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=bn){Me.workingToColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,s=mn.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($i),this.setHSL($i.h+t,$i.s+e,$i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($i),t.getHSL(Co);const n=Zr($i.h,Co.h,e),s=Zr($i.s,Co.s,e),r=Zr($i.l,Co.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ae;ae.NAMES=Hu;let Cd=0;class Hi extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=dr,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hl,this.blendDst=ul,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hl&&(n.blendSrc=this.blendSrc),this.blendDst!==ul&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Yn extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new q,Po=new Ht;let Pd=0;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=En(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=En(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=En(e,this.array),n=En(n,this.array),s=En(s,this.array),r=En(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}}class Vu extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gu extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dd=0;const Xn=new De,Va=new Ye,sr=new q,Bn=new zi,zr=new zi,rn=new q;class Ze extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?Gu:Vu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new le().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(Bn.min,zr.min),Bn.expandByPoint(rn),rn.addVectors(Bn.max,zr.max),Bn.expandByPoint(rn)):(Bn.expandByPoint(zr.min),Bn.expandByPoint(zr.max))}Bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rn.fromBufferAttribute(a,l),c&&(sr.fromBufferAttribute(t,l),rn.add(sr)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new q,c[I]=new q;const l=new q,h=new q,u=new q,p=new Ht,d=new Ht,g=new Ht,x=new q,m=new q;function f(I,E,w){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,w),p.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,w),h.sub(l),u.sub(l),d.sub(p),g.sub(p);const G=1/(d.x*g.y-g.x*d.y);isFinite(G)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(G),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(G),a[I].add(x),a[E].add(x),a[w].add(x),c[I].add(m),c[E].add(m),c[w].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,E=b.length;I<E;++I){const w=b[I],G=w.start,N=w.count;for(let L=G,Y=G+N;L<Y;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const S=new q,y=new q,T=new q,M=new q;function C(I){T.fromBufferAttribute(s,I),M.copy(T);const E=a[I];S.copy(E),S.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(M,E);const G=y.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,G)}for(let I=0,E=b.length;I<E;++I){const w=b[I],G=w.start,N=w.count;for(let L=G,Y=G+N;L<Y;L+=3)C(t.getX(L+0)),C(t.getX(L+1)),C(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);const s=new q,r=new q,o=new q,a=new q,c=new q,l=new q,h=new q,u=new q;if(t)for(let p=0,d=t.count;p<d;p+=3){const g=t.getX(p+0),x=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=e.count;p<d;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let f=0;f<h;f++)p[g++]=l[d++]}return new Pn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],d=t(p,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ah=new De,_s=new ga,Do=new Bs,lh=new q,Lo=new q,Io=new q,Uo=new q,Ga=new q,No=new q,ch=new q,Fo=new q;class Qt extends Ye{constructor(t=new Ze,e=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){No.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Ga.fromBufferAttribute(u,t),o?No.addScaledVector(Ga,h):No.addScaledVector(Ga.sub(e),h))}e.add(No)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(Do.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Do,lh)===null||_s.origin.distanceToSquared(lh)>(t.far-t.near)**2))&&(ah.copy(r).invert(),_s.copy(t.ray).applyMatrix4(ah),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],f=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,T=S;y<T;y+=3){const M=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);s=Oo(this,f,t,n,l,h,u,M,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){const b=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);s=Oo(this,o,t,n,l,h,u,b,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){const m=p[g],f=o[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,T=S;y<T;y+=3){const M=y,C=y+1,I=y+2;s=Oo(this,f,t,n,l,h,u,M,C,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,f=x;m<f;m+=3){const b=m,S=m+1,y=m+2;s=Oo(this,o,t,n,l,h,u,b,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ld(i,t,e,n,s,r,o,a){let c;if(t.side===_n?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Zn,a),c===null)return null;Fo.copy(a),Fo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Fo);return l<e.near||l>e.far?null:{distance:l,point:Fo.clone(),object:i}}function Oo(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Lo),i.getVertexPosition(c,Io),i.getVertexPosition(l,Uo);const h=Ld(i,t,e,n,Lo,Io,Uo,ch);if(h){const u=new q;ii.getBarycoord(ch,Lo,Io,Uo,u),s&&(h.uv=ii.getInterpolatedAttribute(s,a,c,l,u,new Ht)),r&&(h.uv1=ii.getInterpolatedAttribute(r,a,c,l,u,new Ht)),o&&(h.normal=ii.getInterpolatedAttribute(o,a,c,l,u,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new q,materialIndex:0};ii.getNormal(Lo,Io,Uo,p.normal),h.face=p,h.barycoord=u}return h}class zn extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function g(x,m,f,b,S,y,T,M,C,I,E){const w=y/C,G=T/I,N=y/2,L=T/2,Y=M/2,Q=C+1,F=I+1;let P=0,z=0;const rt=new q;for(let ht=0;ht<F;ht++){const H=ht*G-L;for(let B=0;B<Q;B++){const st=B*w-N;rt[x]=st*b,rt[m]=H*S,rt[f]=Y,l.push(rt.x,rt.y,rt.z),rt[x]=0,rt[m]=0,rt[f]=M>0?1:-1,h.push(rt.x,rt.y,rt.z),u.push(B/C),u.push(1-ht/I),P+=1}}for(let ht=0;ht<I;ht++)for(let H=0;H<C;H++){const B=p+H+Q*ht,st=p+H+Q*(ht+1),_t=p+(H+1)+Q*(ht+1),Ft=p+(H+1)+Q*ht;c.push(B,st,Ft),c.push(st,_t,Ft),z+=6}a.addGroup(d,z,E),d+=z,p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function yr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=yr(i[e]);for(const s in n)t[s]=n[s]}return t}function Id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Me.workingColorSpace}const yc={clone:yr,merge:Tn};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yr(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xu extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new q,hh=new Ht,uh=new Ht;class wn extends Xu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=no*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,hh,uh),e.subVectors(uh,hh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,or=1;class Fd extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(rr,or,t,e);s.layers=this.layers,this.add(s);const r=new wn(rr,or,t,e);r.layers=this.layers,this.add(r);const o=new wn(rr,or,t,e);o.layers=this.layers,this.add(o);const a=new wn(rr,or,t,e);a.layers=this.layers,this.add(a);const c=new wn(rr,or,t,e);c.layers=this.layers,this.add(c);const l=new wn(rr,or,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qu extends xn{constructor(t=[],e=xr,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Od extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new qu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zn(5,5,5),r=new Dn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Oi});r.uniforms.tEquirect.value=e;const o=new Qt(s,r),a=e.minFilter;return e.minFilter===Ls&&(e.minFilter=mi),new Fd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class de extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bd={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new de,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new de,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new de,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new de;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ae(t),this.density=e}clone(){return new Sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Yu extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class zd extends xn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=fn,h=fn,u,p){super(null,o,a,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fh extends Pn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ar=new De,dh=new De,Bo=[],ph=new zi,kd=new De,kr=new Qt,Hr=new Bs;class Hd extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,kd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),ph.copy(t.boundingBox).applyMatrix4(ar),this.boundingBox.union(ph)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ar),Hr.copy(t.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),t.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),dh.multiplyMatrices(n,ar),kr.matrixWorld=dh,kr.raycast(t,Bo);for(let o=0,a=Bo.length;o<a;o++){const c=Bo[o];c.instanceId=r,c.object=this,e.push(c)}Bo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zd(new Float32Array(s*this.count),s,this.count,pc,gi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new q,Vd=new q,Gd=new le;class bs{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xa.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xs=new Bs,Wd=new Ht(.5,.5),zo=new q;class Ec{constructor(t=new bs,e=new bs,n=new bs,s=new bs,r=new bs,o=new bs){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_i,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],p=r[6],d=r[7],g=r[8],x=r[9],m=r[10],f=r[11],b=r[12],S=r[13],y=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,f-g,T-b).normalize(),s[1].setComponents(l+o,d+h,f+g,T+b).normalize(),s[2].setComponents(l+a,d+u,f+x,T+S).normalize(),s[3].setComponents(l-a,d-u,f-x,T-S).normalize(),n)s[4].setComponents(c,p,m,y).normalize(),s[5].setComponents(l-c,d-p,f-m,T-y).normalize();else if(s[4].setComponents(l-c,d-p,f-m,T-y).normalize(),e===_i)s[5].setComponents(l+c,d+p,f+m,T+y).normalize();else if(e===ca)s[5].setComponents(c,p,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);const e=Wd.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(zo.x=s.normal.x>0?t.max.x:t.min.x,zo.y=s.normal.y>0?t.max.y:t.min.y,zo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zu extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ua=new q,fa=new q,mh=new De,Vr=new ga,ko=new Bs,qa=new q,gh=new q;class Xd extends Ye{constructor(t=new Ze,e=new Zu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ua.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ua.distanceTo(fa);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;mh.copy(s).invert(),Vr.copy(t.ray).applyMatrix4(mh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const f=h.getX(x),b=h.getX(x+1),S=Ho(this,t,Vr,c,f,b,x);S&&e.push(S)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(d),f=Ho(this,t,Vr,c,x,m,g-1);f&&e.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const f=Ho(this,t,Vr,c,x,x+1,x);f&&e.push(f)}if(this.isLineLoop){const x=Ho(this,t,Vr,c,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ho(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(ua.fromBufferAttribute(a,s),fa.fromBufferAttribute(a,r),e.distanceSqToSegment(ua,fa,qa,gh)>n)return;qa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qa);if(!(l<t.near||l>t.far))return{distance:l,point:gh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const _h=new q,xh=new q;class qd extends Xd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)_h.fromBufferAttribute(e,s),xh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_h.distanceTo(xh);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tc extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new De,Jl=new ga,Vo=new Bs,Go=new q;class $l extends Ye{constructor(t=new Ze,e=new Tc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;vh.copy(s).invert(),Jl.copy(t.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=p,x=d;g<x;g++){const m=l.getX(g);Go.fromBufferAttribute(u,m),Mh(Go,m,c,s,t,e,this)}}else{const p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,x=d;g<x;g++)Go.fromBufferAttribute(u,g),Mh(Go,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mh(i,t,e,n,s,r,o){const a=Jl.distanceSqToPoint(i);if(a<e){const c=new q;Jl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class bc extends xn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wc extends xn{constructor(t,e,n=Us,s,r,o,a=fn,c=fn,l,h=to,u=1){if(h!==to&&h!==eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ku extends xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ac extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new q,h=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const d=n+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(a,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oi extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],d=[];let g=0;const x=[],m=n/2;let f=0;b(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(d,2));function b(){const y=new q,T=new q;let M=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const E=[],w=I/r,G=w*(e-t)+t;for(let N=0;N<=s;N++){const L=N/s,Y=L*c+a,Q=Math.sin(Y),F=Math.cos(Y);T.x=G*Q,T.y=-w*n+m,T.z=G*F,u.push(T.x,T.y,T.z),y.set(Q,C,F).normalize(),p.push(y.x,y.y,y.z),d.push(L,1-w),E.push(g++)}x.push(E)}for(let I=0;I<s;I++)for(let E=0;E<r;E++){const w=x[E][I],G=x[E+1][I],N=x[E+1][I+1],L=x[E][I+1];(t>0||E!==0)&&(h.push(w,G,L),M+=3),(e>0||E!==r-1)&&(h.push(G,N,L),M+=3)}l.addGroup(f,M,0),f+=M}function S(y){const T=g,M=new Ht,C=new q;let I=0;const E=y===!0?t:e,w=y===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*w,0),p.push(0,w,0),d.push(.5,.5),g++;const G=g;for(let N=0;N<=s;N++){const Y=N/s*c+a,Q=Math.cos(Y),F=Math.sin(Y);C.x=E*F,C.y=m*w,C.z=E*Q,u.push(C.x,C.y,C.z),p.push(0,w,0),M.x=Q*.5+.5,M.y=F*.5*w+.5,d.push(M.x,M.y),g++}for(let N=0;N<s;N++){const L=T+N,Y=G+N;y===!0?h.push(Y,Y+1,L):h.push(Y+1,Y,L),I+=3}l.addGroup(f,I,y===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rc extends oi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Rc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ht:new q);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new q,s=[],r=[],o=[],a=new q,c=new De;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new q)}r[0]=new q,o[0]=new q;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(he(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(he(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cc extends yi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*u+this.aX,l=p*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Yd extends Cc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Pc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,d*=h,s(o,a,p,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Wo=new q,Ya=new Pc,Za=new Pc,Ka=new Pc;class Ju extends yi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),l=Wo);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ya.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,x,m),Za.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,x,m),Ka.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Za.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Ka.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Ya.calc(c),Za.calc(c),Ka.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Zd(i,t){const e=1-i;return e*e*t}function Kd(i,t){return 2*(1-i)*i*t}function Jd(i,t){return i*i*t}function Kr(i,t,e,n){return Zd(i,t)+Kd(i,e)+Jd(i,n)}function $d(i,t){const e=1-i;return e*e*e*t}function jd(i,t){const e=1-i;return 3*e*e*i*t}function Qd(i,t){return 3*(1-i)*i*i*t}function t0(i,t){return i*i*i*t}function Jr(i,t,e,n,s){return $d(i,t)+jd(i,e)+Qd(i,n)+t0(i,s)}class $u extends yi{constructor(t=new Ht,e=new Ht,n=new Ht,s=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class e0 extends yi{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Jr(t,s.x,r.x,o.x,a.x),Jr(t,s.y,r.y,o.y,a.y),Jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ju extends yi{constructor(t=new Ht,e=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n0 extends yi{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qu extends yi{constructor(t=new Ht,e=new Ht,n=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tf extends yi{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y),Kr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ef extends yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(yh(a,c.x,l.x,h.x,u.x),yh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Ht().fromArray(s))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:Yd,CatmullRomCurve3:Ju,CubicBezierCurve:$u,CubicBezierCurve3:e0,EllipseCurve:Cc,LineCurve:ju,LineCurve3:n0,QuadraticBezierCurve:Qu,QuadraticBezierCurve3:tf,SplineCurve:ef});class i0 extends yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jl[s.type]().fromJSON(s))}return this}}class Sh extends i0{constructor(t){super(),this.type="Path",this.currentPoint=new Ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ju(this.currentPoint.clone(),new Ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Qu(this.currentPoint.clone(),new Ht(t,e),new Ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new $u(this.currentPoint.clone(),new Ht(t,e),new Ht(n,s),new Ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ef(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Cc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class nf extends Sh{constructor(t){super(t),this.uuid=Os(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Sh().fromJSON(s))}return this}}function s0(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=sf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=c0(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let p=e;p<s;p+=e){const d=i[p],g=i[p+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>u&&(u=g)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return so(r,o,e,a,c,l,0),o}function sf(i,t,e,n,s){let r;if(s===M0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Eh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Eh(o/n|0,i[o],i[o+1],r);return r&&Sr(r,r.next)&&(oo(r),r=r.next),r}function Ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Sr(e,e.next)||He(e.prev,e,e.next)===0)){if(oo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function so(i,t,e,n,s,r,o){if(!i)return;!o&&r&&p0(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?o0(i,n,s,r):r0(i)){t.push(c.i,i.i,l.i),oo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=a0(Ns(i),t),so(i,t,e,n,s,r,2)):o===2&&l0(i,t,e,n,s,r):so(Ns(i),t,e,n,s,r,1);break}}}function r0(i){const t=i.prev,e=i,n=i.next;if(He(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),p=Math.max(s,r,o),d=Math.max(a,c,l);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&Wr(s,a,r,c,o,l,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(i,t,e,n){const s=i.prev,r=i,o=i.next;if(He(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,p=o.y,d=Math.min(a,c,l),g=Math.min(h,u,p),x=Math.max(a,c,l),m=Math.max(h,u,p),f=Ql(d,g,t,e,n),b=Ql(x,m,t,e,n);let S=i.prevZ,y=i.nextZ;for(;S&&S.z>=f&&y&&y.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wr(a,h,c,u,l,p,S.x,S.y)&&He(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Wr(a,h,c,u,l,p,y.x,y.y)&&He(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=f;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Wr(a,h,c,u,l,p,S.x,S.y)&&He(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Wr(a,h,c,u,l,p,y.x,y.y)&&He(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function a0(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Sr(n,s)&&of(n,e,e.next,s)&&ro(n,s)&&ro(s,n)&&(t.push(n.i,e.i,s.i),oo(e),oo(e.next),e=i=s),e=e.next}while(e!==i);return Ns(e)}function l0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_0(o,a)){let c=af(o,a);o=Ns(o,o.next),c=Ns(c,c.next),so(o,t,e,n,s,r,0),so(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function c0(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=sf(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(g0(l))}s.sort(h0);for(let r=0;r<s.length;r++)e=u0(s[r],e);return e}function h0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function u0(i,t){const e=f0(i,t);if(!e)return t;const n=af(e,i);return Ns(n,n.next),Ns(e,e.next)}function f0(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Sr(i,e))return e;do{if(Sr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&rf(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);ro(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&d0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function d0(i,t){return He(i.prev,i,t.prev)<0&&He(t.next,i,i.next)<0}function p0(i,t,e,n){let s=i;do s.z===0&&(s.z=Ql(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,m0(s)}function m0(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ql(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function g0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Wr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&rf(i,t,e,n,s,r,o,a)}function _0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!x0(i,t)&&(ro(i,t)&&ro(t,i)&&v0(i,t)&&(He(i.prev,i,t.prev)||He(i,t.prev,t))||Sr(i,t)&&He(i.prev,i,i.next)>0&&He(t.prev,t,t.next)>0)}function He(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Sr(i,t){return i.x===t.x&&i.y===t.y}function of(i,t,e,n){const s=qo(He(i,t,e)),r=qo(He(i,t,n)),o=qo(He(e,n,i)),a=qo(He(e,n,t));return!!(s!==r&&o!==a||s===0&&Xo(i,e,t)||r===0&&Xo(i,n,t)||o===0&&Xo(e,i,n)||a===0&&Xo(e,t,n))}function Xo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qo(i){return i>0?1:i<0?-1:0}function x0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&of(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ro(i,t){return He(i.prev,i,i.next)<0?He(i,t,i.next)>=0&&He(i,i.prev,t)>=0:He(i,t,i.prev)<0||He(i,i.next,t)<0}function v0(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function af(i,t){const e=tc(i.i,i.x,i.y),n=tc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Eh(i,t,e,n){const s=tc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function tc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function M0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class y0{static triangulate(t,e,n=2){return s0(t,e,n)}}class $r{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return $r.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Th(t),bh(n,t);let o=t.length;e.forEach(Th);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,bh(n,e[c]);const a=y0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Th(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class qn extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,d=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*p-o;for(let S=0;S<l;S++){const y=S*u-r;g.push(y,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const S=b+l*f,y=b+l*(f+1),T=b+1+l*(f+1),M=b+1+l*f;d.push(S,y,M),d.push(y,T,M)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Dc extends Ze{constructor(t=new nf([new Ht(0,.5),new Ht(-.5,-.5),new Ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(r,3)),this.setAttribute("uv",new we(o,2));function l(h){const u=s.length/3,p=h.extractPoints(e);let d=p.shape;const g=p.holes;$r.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,f=g.length;m<f;m++){const b=g[m];$r.isClockWise(b)===!0&&(g[m]=b.reverse())}const x=$r.triangulateShape(d,g);for(let m=0,f=g.length;m<f;m++){const b=g[m];d=d.concat(b)}for(let m=0,f=d.length;m<f;m++){const b=d[m];s.push(b.x,b.y,0),r.push(0,0,1),o.push(b.x,b.y)}for(let m=0,f=x.length;m<f;m++){const b=x[m],S=b[0]+u,y=b[1]+u,T=b[2]+u;n.push(S,y,T),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return S0(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Dc(n,t.curveSegments)}}function S0(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class xi extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new q,p=new q,d=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const b=[],S=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const M=T/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),m.push(M+y,1-S),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const S=h[f][b+1],y=h[f][b],T=h[f+1][b],M=h[f+1][b+1];(f!==0||o>0)&&d.push(S,y,M),(f!==n-1||c<Math.PI)&&d.push(y,T,M)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(x,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ri extends Ze{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new q,u=new q,p=new q;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,f=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(x,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Lc extends Ze{constructor(t=new tf(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new q,c=new q,l=new Ht;let h=new q;const u=[],p=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(d,2));function x(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),b(),f()}function m(S){h=t.getPointAt(S/e,h);const y=o.normals[S],T=o.binormals[S];for(let M=0;M<=s;M++){const C=M/s*Math.PI*2,I=Math.sin(C),E=-Math.cos(C);c.x=E*y.x+I*T.x,c.y=E*y.y+I*T.y,c.z=E*y.z+I*T.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let S=1;S<=e;S++)for(let y=1;y<=s;y++){const T=(s+1)*(S-1)+(y-1),M=(s+1)*S+(y-1),C=(s+1)*S+y,I=(s+1)*(S-1)+y;g.push(T,M,I),g.push(M,C,I)}}function b(){for(let S=0;S<=e;S++)for(let y=0;y<=s;y++)l.x=S/e,l.y=y/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Lc(new jl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class E0 extends Dn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xe extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class T0 extends Hi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class b0 extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class w0 extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A0 extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ic extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class R0 extends Ic{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ja=new De,wh=new q,Ah=new q;class lf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(wh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),Ja.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rh=new De,Gr=new q,$a=new q;class C0 extends lf{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gr),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Rh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh,n.coordinateSystem,n.reversedDepth)}}class un extends Ic{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new C0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Uc extends Xu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class P0 extends lf{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ec extends Ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new P0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class D0 extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class L0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Ch=new De;class nc{constructor(t,e,n=0,s=1/0){this.ray=new ga(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ch.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ch),this}intersectObject(t,e=!0,n=[]){return ic(t,this,n,e),n.sort(Ph),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ic(t[s],this,n,e);return n.sort(Ph),n}}function Ph(i,t){return i.distance-t.distance}function ic(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ic(r[o],t,e,!0)}}function Dh(i,t,e,n){const s=I0(n);switch(e){case Nu:return i*t;case pc:return i*t/s.components*s.byteLength;case mc:return i*t/s.components*s.byteLength;case Ou:return i*t*2/s.components*s.byteLength;case gc:return i*t*2/s.components*s.byteLength;case Fu:return i*t*3/s.components*s.byteLength;case si:return i*t*4/s.components*s.byteLength;case _c:return i*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case El:case bl:return Math.max(i,16)*Math.max(t,8)/4;case Sl:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case wl:case Al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gl:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I0(i){switch(i){case vi:case Du:return{byteLength:1,components:1};case jr:case Lu:case ns:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case Us:case uc:case gi:return{byteLength:4,components:1};case Iu:case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ac);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function U0(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){const g=u[p],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,u[p]=x)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
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
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G0=`#ifdef USE_BATCHING
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
#endif`,W0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
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
#endif`,K0=`#ifdef USE_BUMPMAP
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sp=`#define PI 3.141592653589793
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
} // validated`,rp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,ap=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,up="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Ip=`struct PhysicalMaterial {
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
}`,Up=`
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
#endif`,Np=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wp=`#if defined( USE_POINTS_UV )
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
#endif`,Xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
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
#endif`,$p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vm=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,Sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,Tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Am=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nm=`uniform sampler2D t2D;
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vm=`#define DISTANCE
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`uniform float scale;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,$m=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,ag=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,dg=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:N0,alphahash_pars_fragment:F0,alphamap_fragment:O0,alphamap_pars_fragment:B0,alphatest_fragment:z0,alphatest_pars_fragment:k0,aomap_fragment:H0,aomap_pars_fragment:V0,batching_pars_vertex:G0,batching_vertex:W0,begin_vertex:X0,beginnormal_vertex:q0,bsdfs:Y0,iridescence_fragment:Z0,bumpmap_pars_fragment:K0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:j0,clipping_planes_vertex:Q0,color_fragment:tp,color_pars_fragment:ep,color_pars_vertex:np,color_vertex:ip,common:sp,cube_uv_reflection_fragment:rp,defaultnormal_vertex:op,displacementmap_pars_vertex:ap,displacementmap_vertex:lp,emissivemap_fragment:cp,emissivemap_pars_fragment:hp,colorspace_fragment:up,colorspace_pars_fragment:fp,envmap_fragment:dp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Ap,envmap_vertex:_p,fog_vertex:xp,fog_pars_vertex:vp,fog_fragment:Mp,fog_pars_fragment:yp,gradientmap_pars_fragment:Sp,lightmap_pars_fragment:Ep,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:bp,lights_pars_begin:wp,lights_toon_fragment:Rp,lights_toon_pars_fragment:Cp,lights_phong_fragment:Pp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Ip,lights_fragment_begin:Up,lights_fragment_maps:Np,lights_fragment_end:Fp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Bp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:kp,map_fragment:Hp,map_pars_fragment:Vp,map_particle_fragment:Gp,map_particle_pars_fragment:Wp,metalnessmap_fragment:Xp,metalnessmap_pars_fragment:qp,morphinstance_vertex:Yp,morphcolor_vertex:Zp,morphnormal_vertex:Kp,morphtarget_pars_vertex:Jp,morphtarget_vertex:$p,normal_fragment_begin:jp,normal_fragment_maps:Qp,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:fm,dithering_pars_fragment:dm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:_m,shadowmap_vertex:xm,shadowmask_pars_fragment:vm,skinbase_vertex:Mm,skinning_pars_vertex:ym,skinning_vertex:Sm,skinnormal_vertex:Em,specularmap_fragment:Tm,specularmap_pars_fragment:bm,tonemapping_fragment:wm,tonemapping_pars_fragment:Am,transmission_fragment:Rm,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Dm,uv_vertex:Lm,worldpos_vertex:Im,background_vert:Um,background_frag:Nm,backgroundCube_vert:Fm,backgroundCube_frag:Om,cube_vert:Bm,cube_frag:zm,depth_vert:km,depth_frag:Hm,distanceRGBA_vert:Vm,distanceRGBA_frag:Gm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:qm,linedashed_frag:Ym,meshbasic_vert:Zm,meshbasic_frag:Km,meshlambert_vert:Jm,meshlambert_frag:$m,meshmatcap_vert:jm,meshmatcap_frag:Qm,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:fg,sprite_frag:dg},zt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},pi={basic:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Tn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Tn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Tn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ae(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Tn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Tn([zt.points,zt.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Tn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Tn([zt.common,zt.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Tn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Tn([zt.sprite,zt.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Tn([zt.common,zt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Tn([zt.lights,zt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};pi.physical={uniforms:Tn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const Yo={r:0,b:0,g:0},vs=new Kn,pg=new De;function mg(i,t,e,n,s,r,o){const a=new ae(0);let c=r===!0?0:1,l,h,u=null,p=0,d=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function x(S){let y=!1;const T=g(S);T===null?f(a,c):T&&T.isColor&&(f(T,1),y=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===pa)?(h===void 0&&(h=new Qt(new zn(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:yr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vs.copy(y.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(vs)),h.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ce,(u!==T||p!==T.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=T,p=T.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Qt(new qn(2,2),new Dn({name:"BackgroundMaterial",uniforms:yr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Me.getTransfer(T.colorSpace)!==Ce,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||p!==T.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=T,p=T.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,y){S.getRGB(Yo,Wu(i)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(a,c)},render:x,addToRenderList:m,dispose:b}}function gg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(w,G,N,L,Y){let Q=!1;const F=u(L,N,G);r!==F&&(r=F,l(r.object)),Q=d(w,L,N,Y),Q&&g(w,L,N,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(w,G,N,L),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function h(w){return i.deleteVertexArray(w)}function u(w,G,N){const L=N.wireframe===!0;let Y=n[w.id];Y===void 0&&(Y={},n[w.id]=Y);let Q=Y[G.id];Q===void 0&&(Q={},Y[G.id]=Q);let F=Q[L];return F===void 0&&(F=p(c()),Q[L]=F),F}function p(w){const G=[],N=[],L=[];for(let Y=0;Y<e;Y++)G[Y]=0,N[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:N,attributeDivisors:L,object:w,attributes:{},index:null}}function d(w,G,N,L){const Y=r.attributes,Q=G.attributes;let F=0;const P=N.getAttributes();for(const z in P)if(P[z].location>=0){const ht=Y[z];let H=Q[z];if(H===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(H=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(H=w.instanceColor)),ht===void 0||ht.attribute!==H||H&&ht.data!==H.data)return!0;F++}return r.attributesNum!==F||r.index!==L}function g(w,G,N,L){const Y={},Q=G.attributes;let F=0;const P=N.getAttributes();for(const z in P)if(P[z].location>=0){let ht=Q[z];ht===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(ht=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(ht=w.instanceColor));const H={};H.attribute=ht,ht&&ht.data&&(H.data=ht.data),Y[z]=H,F++}r.attributes=Y,r.attributesNum=F,r.index=L}function x(){const w=r.newAttributes;for(let G=0,N=w.length;G<N;G++)w[G]=0}function m(w){f(w,0)}function f(w,G){const N=r.newAttributes,L=r.enabledAttributes,Y=r.attributeDivisors;N[w]=1,L[w]===0&&(i.enableVertexAttribArray(w),L[w]=1),Y[w]!==G&&(i.vertexAttribDivisor(w,G),Y[w]=G)}function b(){const w=r.newAttributes,G=r.enabledAttributes;for(let N=0,L=G.length;N<L;N++)G[N]!==w[N]&&(i.disableVertexAttribArray(N),G[N]=0)}function S(w,G,N,L,Y,Q,F){F===!0?i.vertexAttribIPointer(w,G,N,Y,Q):i.vertexAttribPointer(w,G,N,L,Y,Q)}function y(w,G,N,L){x();const Y=L.attributes,Q=N.getAttributes(),F=G.defaultAttributeValues;for(const P in Q){const z=Q[P];if(z.location>=0){let rt=Y[P];if(rt===void 0&&(P==="instanceMatrix"&&w.instanceMatrix&&(rt=w.instanceMatrix),P==="instanceColor"&&w.instanceColor&&(rt=w.instanceColor)),rt!==void 0){const ht=rt.normalized,H=rt.itemSize,B=t.get(rt);if(B===void 0)continue;const st=B.buffer,_t=B.type,Ft=B.bytesPerElement,lt=_t===i.INT||_t===i.UNSIGNED_INT||rt.gpuType===uc;if(rt.isInterleavedBufferAttribute){const ut=rt.data,Et=ut.stride,Lt=rt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ct=0;Ct<z.locationSize;Ct++)f(z.location+Ct,ut.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ct=0;Ct<z.locationSize;Ct++)m(z.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ct=0;Ct<z.locationSize;Ct++)S(z.location+Ct,H/z.locationSize,_t,ht,Et*Ft,(Lt+H/z.locationSize*Ct)*Ft,lt)}else{if(rt.isInstancedBufferAttribute){for(let ut=0;ut<z.locationSize;ut++)f(z.location+ut,rt.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<z.locationSize;ut++)m(z.location+ut);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ut=0;ut<z.locationSize;ut++)S(z.location+ut,H/z.locationSize,_t,ht,H*Ft,H/z.locationSize*ut*Ft,lt)}}else if(F!==void 0){const ht=F[P];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(z.location,ht);break;case 3:i.vertexAttrib3fv(z.location,ht);break;case 4:i.vertexAttrib4fv(z.location,ht);break;default:i.vertexAttrib1fv(z.location,ht)}}}}b()}function T(){I();for(const w in n){const G=n[w];for(const N in G){const L=G[N];for(const Y in L)h(L[Y].object),delete L[Y];delete G[N]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;const G=n[w.id];for(const N in G){const L=G[N];for(const Y in L)h(L[Y].object),delete L[Y];delete G[N]}delete n[w.id]}function C(w){for(const G in n){const N=n[G];if(N[w.id]===void 0)continue;const L=N[w.id];for(const Y in L)h(L[Y].object),delete L[Y];delete N[w.id]}}function I(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function _g(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function c(l,h,u,p){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*p[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function xg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==si&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==vi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!I)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:T,maxSamples:M}}function vg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new bs,a=new le,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const d=u.length!==0||p||n!==0||s;return s=p,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const b=r?0:n,S=b*4;let y=f.clippingState||null;c.value=y,y=h(g,p,S,d);for(let T=0;T!==S;++T)y[T]=e[T];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=d+x*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=d;S!==x;++S,y+=4)o.copy(u[S]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Mg(i){let t=new WeakMap;function e(o,a){return a===vl?o.mapping=xr:a===Ml&&(o.mapping=vr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vl||a===Ml)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Od(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const fr=4,Lh=[.125,.215,.35,.446,.526,.582],Ps=20,ja=new Uc,Ih=new ae;let Qa=null,tl=0,el=0,nl=!1;const ws=(1+Math.sqrt(5))/2,lr=1/ws,Uh=[new q(-ws,lr,0),new q(ws,lr,0),new q(-lr,0,ws),new q(lr,0,ws),new q(0,ws,-lr),new q(0,ws,lr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],yg=new q;class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=yg}=r;Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qa,tl,el),this._renderer.xr.enabled=nl,t.scissorTest=!1,Zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qa=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:ns,format:si,colorSpace:Mr,depthBuffer:!1},s=Nh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sg(r)),this._blurMaterial=Eg(r,t,e)}return s}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,n,s,r){const c=new wn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(Ih),u.toneMapping=es,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new Yn({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),m=new Qt(new zn,x);let f=!1;const b=t.background;b?b.isColor&&(x.color.copy(b),t.background=null,f=!0):(x.color.copy(Ih),f=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):y===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const T=this._cubeSize;Zo(s,y*T,S>2?T:0,T,T),u.setRenderTarget(s),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=p,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===xr||t.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Zo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,ja)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uh[(s-r-1)%Uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Qt(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ps-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ps;m>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ps}`);const f=[];let b=0;for(let C=0;C<Ps;++C){const I=C/x,E=Math.exp(-I*I/2);f.push(E),C===0?b+=E:C<m&&(b+=2*E)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:S}=this;p.dTheta.value=g,p.mipInt.value=S-n;const y=this._sizeLods[s],T=3*y*(s>S-fr?s-S+fr:0),M=4*(this._cubeSize-y);Zo(e,T,M,3*y,2*y),c.setRenderTarget(e),c.render(u,ja)}}function Sg(i){const t=[],e=[],n=[];let s=i;const r=i-fr+1+Lh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-fr?c=Lh[o-i+fr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*d),S=new Float32Array(m*g*d),y=new Float32Array(f*g*d);for(let M=0;M<d;M++){const C=M%3*2/3-1,I=M>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];b.set(E,x*g*M),S.set(p,m*g*M);const w=[M,M,M,M,M,M];y.set(w,f*g*M)}const T=new Ze;T.setAttribute("position",new Pn(b,x)),T.setAttribute("uv",new Pn(S,m)),T.setAttribute("faceIndex",new Pn(y,f)),t.push(T),s>fr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nh(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=pa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Eg(i,t,e){const n=new Float32Array(Ps),s=new q(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Fh(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Oh(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function Tg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===vl||c===Ml,h=c===xr||c===vr;if(l||h){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new sc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new sc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function bg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wg(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id];const d=r.get(p);d&&(t.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const d in p)t.update(p[d],i.ARRAY_BUFFER)}function l(u){const p=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const b=d.array;x=d.version;for(let S=0,y=b.length;S<y;S+=3){const T=b[S+0],M=b[S+1],C=b[S+2];p.push(T,M,M,C,C,T)}}else if(g!==void 0){const b=g.array;x=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const T=S+0,M=S+1,C=S+2;p.push(T,M,M,C,C,T)}}else return;const m=new(zu(p)?Gu:Vu)(p,1);m.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const d=u.index;d!==null&&p.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Ag(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),e.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];e.update(m,n,1)}function u(p,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,d[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,x,0,g);let f=0;for(let b=0;b<g;b++)f+=d[b]*x[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cg(i,t,e){const n=new WeakMap,s=new Pe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const M=new Float32Array(y*T*4*u),C=new ku(M,y,T,u);C.type=gi,C.needsUpdate=!0;const I=S*4;for(let w=0;w<u;w++){const G=m[w],N=f[w],L=b[w],Y=y*T*4*w;for(let Q=0;Q<G.count;Q++){const F=Q*I;d===!0&&(s.fromBufferAttribute(G,Q),M[Y+F+0]=s.x,M[Y+F+1]=s.y,M[Y+F+2]=s.z,M[Y+F+3]=0),g===!0&&(s.fromBufferAttribute(N,Q),M[Y+F+4]=s.x,M[Y+F+5]=s.y,M[Y+F+6]=s.z,M[Y+F+7]=0),x===!0&&(s.fromBufferAttribute(L,Q),M[Y+F+8]=s.x,M[Y+F+9]=s.y,M[Y+F+10]=s.z,M[Y+F+11]=L.itemSize===4?s.w:1)}}p={count:u,texture:C,size:new Ht(y,T)},n.set(a,p),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];const g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function Pg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const hf=new xn,Bh=new wc(1,1),uf=new ku,ff=new yd,df=new qu,zh=[],kh=[],Hh=new Float32Array(16),Vh=new Float32Array(9),Gh=new Float32Array(4);function br(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function tn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function en(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _a(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2fv(this.addr,t),en(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;i.uniform3fv(this.addr,t),en(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4fv(this.addr,t),en(e,t)}}function Ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Gh.set(n),i.uniformMatrix2fv(this.addr,!1,Gh),en(e,n)}}function Fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Vh.set(n),i.uniformMatrix3fv(this.addr,!1,Vh),en(e,n)}}function Og(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(tn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(tn(e,n))return;Hh.set(n),i.uniformMatrix4fv(this.addr,!1,Hh),en(e,n)}}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2iv(this.addr,t),en(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3iv(this.addr,t),en(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4iv(this.addr,t),en(e,t)}}function Vg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;i.uniform2uiv(this.addr,t),en(e,t)}}function Wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;i.uniform3uiv(this.addr,t),en(e,t)}}function Xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;i.uniform4uiv(this.addr,t),en(e,t)}}function qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bh.compareFunction=Bu,r=Bh):r=hf,e.setTexture2D(t||r,s)}function Yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ff,s)}function Zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||df,s)}function Kg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uf,s)}function Jg(i){switch(i){case 5126:return Dg;case 35664:return Lg;case 35665:return Ig;case 35666:return Ug;case 35674:return Ng;case 35675:return Fg;case 35676:return Og;case 5124:case 35670:return Bg;case 35667:case 35671:return zg;case 35668:case 35672:return kg;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Kg}}function $g(i,t){i.uniform1fv(this.addr,t)}function jg(i,t){const e=br(t,this.size,2);i.uniform2fv(this.addr,e)}function Qg(i,t){const e=br(t,this.size,3);i.uniform3fv(this.addr,e)}function t_(i,t){const e=br(t,this.size,4);i.uniform4fv(this.addr,e)}function e_(i,t){const e=br(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function n_(i,t){const e=br(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function i_(i,t){const e=br(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function s_(i,t){i.uniform1iv(this.addr,t)}function r_(i,t){i.uniform2iv(this.addr,t)}function o_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function l_(i,t){i.uniform1uiv(this.addr,t)}function c_(i,t){i.uniform2uiv(this.addr,t)}function h_(i,t){i.uniform3uiv(this.addr,t)}function u_(i,t){i.uniform4uiv(this.addr,t)}function f_(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hf,r[o])}function d_(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ff,r[o])}function p_(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||df,r[o])}function m_(i,t,e){const n=this.cache,s=t.length,r=_a(e,s);tn(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||uf,r[o])}function g_(i){switch(i){case 5126:return $g;case 35664:return jg;case 35665:return Qg;case 35666:return t_;case 35674:return e_;case 35675:return n_;case 35676:return i_;case 5124:case 35670:return s_;case 35667:case 35671:return r_;case 35668:case 35672:return o_;case 35669:case 35673:return a_;case 5125:return l_;case 36294:return c_;case 36295:return h_;case 36296:return u_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return p_;case 36289:case 36303:case 36311:case 36292:return m_}}class __{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=g_(e.type)}}class v_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Wh(i,t){i.seq.push(t),i.map[t.id]=t}function M_(i,t,e){const n=i.name,s=n.length;for(il.lastIndex=0;;){const r=il.exec(n),o=il.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wh(e,l===void 0?new __(a,i,t):new x_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new v_(a),Wh(e,u)),e=u}}}class oa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);M_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const y_=37297;let S_=0;function E_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qh=new le;function T_(i){Me._getMatrix(qh,Me.workingColorSpace,i);const t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(Me.getTransfer(i)){case la:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+E_(i.getShaderSource(t),a)}else return r}function b_(i,t){const e=T_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function w_(i,t){let e;switch(t){case Tu:e="Linear";break;case bu:e="Reinhard";break;case wu:e="Cineon";break;case Au:e="ACESFilmic";break;case Cu:e="AgX";break;case hc:e="Neutral";break;case Ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ko=new q;function A_(){Me.getLuminanceCoefficients(Ko);const i=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function C_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function P_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xr(i){return i!==""}function Zh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Kh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(D_,I_)}const L_=new Map;function I_(i,t){let e=ce[t];if(e===void 0){const n=L_.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rc(e)}const U_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(U_,N_)}function N_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $h(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function O_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case vr:t="ENVMAP_TYPE_CUBE";break;case pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function B_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vr:t="ENVMAP_MODE_REFRACTION";break}return t}function z_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case zf:t="ENVMAP_BLENDING_MIX";break;case kf:t="ENVMAP_BLENDING_ADD";break}return t}function k_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=F_(e),l=O_(e),h=B_(e),u=z_(e),p=k_(e),d=R_(e),g=C_(r),x=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xr).join(`
`),f.length>0&&(f+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),f=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?ce.tonemapping_pars_fragment:"",e.toneMapping!==es?w_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,b_("linearToOutputTexel",e.outputColorSpace),A_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),o=rc(o),o=Zh(o,e),o=Kh(o,e),a=rc(a),a=Zh(a,e),a=Kh(a,e),o=Jh(o),a=Jh(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+m+o,y=b+f+a,T=Xh(s,s.VERTEX_SHADER,S),M=Xh(s,s.FRAGMENT_SHADER,y);s.attachShader(x,T),s.attachShader(x,M),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(G){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(T)||"",Y=s.getShaderInfoLog(M)||"",Q=N.trim(),F=L.trim(),P=Y.trim();let z=!0,rt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,M);else{const ht=Yh(s,T,"vertex"),H=Yh(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+ht+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(F===""||P==="")&&(rt=!1);rt&&(G.diagnostics={runnable:z,programLog:Q,vertexShader:{log:F,prefix:m},fragmentShader:{log:P,prefix:f}})}s.deleteShader(T),s.deleteShader(M),I=new oa(s,x),E=P_(s,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,y_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=M,this}let V_=0;class G_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new W_(t),e.set(t,n)),n}}class W_{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}}function X_(i,t,e,n,s,r,o){const a=new Mc,c=new G_,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,w,G,N,L){const Y=N.fog,Q=L.geometry,F=E.isMeshStandardMaterial?N.environment:null,P=(E.isMeshStandardMaterial?e:t).get(E.envMap||F),z=P&&P.mapping===pa?P.image.height:null,rt=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ht=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,H=ht!==void 0?ht.length:0;let B=0;Q.morphAttributes.position!==void 0&&(B=1),Q.morphAttributes.normal!==void 0&&(B=2),Q.morphAttributes.color!==void 0&&(B=3);let st,_t,Ft,lt;if(rt){const re=pi[rt];st=re.vertexShader,_t=re.fragmentShader}else st=E.vertexShader,_t=E.fragmentShader,c.update(E),Ft=c.getVertexShaderID(E),lt=c.getFragmentShaderID(E);const ut=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Lt=L.isInstancedMesh===!0,Ct=L.isBatchedMesh===!0,Vt=!!E.map,ue=!!E.matcap,k=!!P,te=!!E.aoMap,Kt=!!E.lightMap,O=!!E.bumpMap,$=!!E.normalMap,Pt=!!E.displacementMap,gt=!!E.emissiveMap,At=!!E.metalnessMap,W=!!E.roughnessMap,U=E.anisotropy>0,v=E.clearcoat>0,_=E.dispersion>0,D=E.iridescence>0,Z=E.sheen>0,j=E.transmission>0,K=U&&!!E.anisotropyMap,X=v&&!!E.clearcoatMap,et=v&&!!E.clearcoatNormalMap,vt=v&&!!E.clearcoatRoughnessMap,yt=D&&!!E.iridescenceMap,mt=D&&!!E.iridescenceThicknessMap,St=Z&&!!E.sheenColorMap,Xt=Z&&!!E.sheenRoughnessMap,Zt=!!E.specularMap,Ut=!!E.specularColorMap,ee=!!E.specularIntensityMap,J=j&&!!E.transmissionMap,bt=j&&!!E.thicknessMap,Mt=!!E.gradientMap,Nt=!!E.alphaMap,wt=E.alphaTest>0,ft=!!E.alphaHash,kt=!!E.extensions;let ne=es;E.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=i.toneMapping);const ye={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:st,fragmentShader:_t,defines:E.defines,customVertexShaderID:Ft,customFragmentShaderID:lt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ct,batchingColor:Ct&&L._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&L.instanceColor!==null,instancingMorph:Lt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Mr,alphaToCoverage:!!E.alphaToCoverage,map:Vt,matcap:ue,envMap:k,envMapMode:k&&P.mapping,envMapCubeUVHeight:z,aoMap:te,lightMap:Kt,bumpMap:O,normalMap:$,displacementMap:p&&Pt,emissiveMap:gt,normalMapObjectSpace:$&&E.normalMapType===Wf,normalMapTangentSpace:$&&E.normalMapType===ma,metalnessMap:At,roughnessMap:W,anisotropy:U,anisotropyMap:K,clearcoat:v,clearcoatMap:X,clearcoatNormalMap:et,clearcoatRoughnessMap:vt,dispersion:_,iridescence:D,iridescenceMap:yt,iridescenceThicknessMap:mt,sheen:Z,sheenColorMap:St,sheenRoughnessMap:Xt,specularMap:Zt,specularColorMap:Ut,specularIntensityMap:ee,transmission:j,transmissionMap:J,thicknessMap:bt,gradientMap:Mt,opaque:E.transparent===!1&&E.blending===dr&&E.alphaToCoverage===!1,alphaMap:Nt,alphaTest:wt,alphaHash:ft,combine:E.combine,mapUv:Vt&&x(E.map.channel),aoMapUv:te&&x(E.aoMap.channel),lightMapUv:Kt&&x(E.lightMap.channel),bumpMapUv:O&&x(E.bumpMap.channel),normalMapUv:$&&x(E.normalMap.channel),displacementMapUv:Pt&&x(E.displacementMap.channel),emissiveMapUv:gt&&x(E.emissiveMap.channel),metalnessMapUv:At&&x(E.metalnessMap.channel),roughnessMapUv:W&&x(E.roughnessMap.channel),anisotropyMapUv:K&&x(E.anisotropyMap.channel),clearcoatMapUv:X&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:et&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:St&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&x(E.sheenRoughnessMap.channel),specularMapUv:Zt&&x(E.specularMap.channel),specularColorMapUv:Ut&&x(E.specularColorMap.channel),specularIntensityMapUv:ee&&x(E.specularIntensityMap.channel),transmissionMapUv:J&&x(E.transmissionMap.channel),thicknessMapUv:bt&&x(E.thicknessMap.channel),alphaMapUv:Nt&&x(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($||U),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!Q.attributes.uv&&(Vt||Nt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:L.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:B,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Vt&&E.map.isVideoTexture===!0&&Me.getTransfer(E.map.colorSpace)===Ce,decodeVideoTextureEmissive:gt&&E.emissiveMap.isVideoTexture===!0&&Me.getTransfer(E.emissiveMap.colorSpace)===Ce,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===_n,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function f(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)w.push(G),w.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(b(w,E),S(w,E),w.push(i.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function b(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function S(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){const w=g[E.type];let G;if(w){const N=pi[w];G=yc.clone(N.uniforms)}else G=E.uniforms;return G}function T(E,w){let G;for(let N=0,L=h.length;N<L;N++){const Y=h[N];if(Y.cacheKey===w){G=Y,++G.usedTimes;break}}return G===void 0&&(G=new H_(i,w,E,r),h.push(G)),G}function M(E){if(--E.usedTimes===0){const w=h.indexOf(E);h[w]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:T,releaseProgram:M,releaseShaderCache:C,programs:h,dispose:I}}function q_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Y_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,d,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,p,d,g,x,m){const f=o(u,p,d,g,x,m);d.transmission>0?n.push(f):d.transparent===!0?s.push(f):e.push(f)}function c(u,p,d,g,x,m){const f=o(u,p,d,g,x,m);d.transmission>0?n.unshift(f):d.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||Y_),n.length>1&&n.sort(p||jh),s.length>1&&s.sort(p||jh)}function h(){for(let u=t,p=i.length;u<p;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Z_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qh,i.set(n,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function K_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new ae};break;case"SpotLight":e={position:new q,direction:new q,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function J_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $_=0;function j_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q_(i){const t=new K_,e=J_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const s=new q,r=new De,o=new De;function a(l){let h=0,u=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,f=0,b=0,S=0,y=0,T=0,M=0,C=0;l.sort(j_);for(let E=0,w=l.length;E<w;E++){const G=l[E],N=G.color,L=G.intensity,Y=G.distance,Q=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)h+=N.r*L,u+=N.g*L,p+=N.b*L;else if(G.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(G.sh.coefficients[F],L);C++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const P=G.shadow,z=e.get(G);z.shadowIntensity=P.intensity,z.shadowBias=P.bias,z.shadowNormalBias=P.normalBias,z.shadowRadius=P.radius,z.shadowMapSize=P.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=G.shadow.matrix,b++}n.directional[d]=F,d++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(N).multiplyScalar(L),F.distance=Y,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,n.spot[x]=F;const P=G.shadow;if(G.map&&(n.spotLightMap[T]=G.map,T++,P.updateMatrices(G),G.castShadow&&M++),n.spotLightMatrix[x]=P.matrix,G.castShadow){const z=e.get(G);z.shadowIntensity=P.intensity,z.shadowBias=P.bias,z.shadowNormalBias=P.normalBias,z.shadowRadius=P.radius,z.shadowMapSize=P.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=Q,y++}x++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(N).multiplyScalar(L),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),n.rectArea[m]=F,m++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const P=G.shadow,z=e.get(G);z.shadowIntensity=P.intensity,z.shadowBias=P.bias,z.shadowNormalBias=P.normalBias,z.shadowRadius=P.radius,z.shadowMapSize=P.mapSize,z.shadowCameraNear=P.camera.near,z.shadowCameraFar=P.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=G.shadow.matrix,S++}n.point[g]=F,g++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(L),F.groundColor.copy(G.groundColor).multiplyScalar(L),n.hemi[f]=F,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=zt.LTC_FLOAT_1,n.rectAreaLTC2=zt.LTC_FLOAT_2):(n.rectAreaLTC1=zt.LTC_HALF_1,n.rectAreaLTC2=zt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const I=n.hash;(I.directionalLength!==d||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==y||I.numSpotMaps!==T||I.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+T-M,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,I.directionalLength=d,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=y,I.numSpotMaps=T,I.numLightProbes=C,n.version=$_++)}function c(l,h){let u=0,p=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const S=l[f];if(S.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(S.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function tu(i){const t=new Q_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function t1(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tu(i),t.set(s,[a])):r>=o.length?(a=new tu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
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
}`;function i1(i,t,e){let n=new Ec;const s=new Ht,r=new Ht,o=new Pe,a=new w0({depthPacking:Gf}),c=new A0,l={},h=e.maxTextureSize,u={[Zn]:_n,[_n]:Zn,[gn]:gn},p=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:e1,fragmentShader:n1}),d=p.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let f=this.type;this.render=function(M,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const E=i.getRenderTarget(),w=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Oi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=f!==Ii&&this.type===Ii,Y=f===Ii&&this.type!==Ii;for(let Q=0,F=M.length;Q<F;Q++){const P=M[Q],z=P.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const rt=z.getFrameExtents();if(s.multiply(rt),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,z.mapSize.y=r.y)),z.map===null||L===!0||Y===!0){const H=this.type!==Ii?{minFilter:fn,magFilter:fn}:{};z.map!==null&&z.map.dispose(),z.map=new Mi(s.x,s.y,H),z.map.texture.name=P.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ht=z.getViewportCount();for(let H=0;H<ht;H++){const B=z.getViewport(H);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),N.viewport(o),z.updateMatrices(P,H),n=z.getFrustum(),y(C,I,z.camera,P,this.type)}z.isPointLightShadow!==!0&&this.type===Ii&&b(z,I),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(E,w,G)};function b(M,C){const I=t.update(x);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Mi(s.x,s.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,I,p,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,I,d,x,null)}function S(M,C,I,E){let w=null;const G=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(G!==void 0)w=G;else if(w=I.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=w.uuid,L=C.uuid;let Y=l[N];Y===void 0&&(Y={},l[N]=Y);let Q=Y[L];Q===void 0&&(Q=w.clone(),Y[L]=Q,C.addEventListener("dispose",T)),w=Q}if(w.visible=C.visible,w.wireframe=C.wireframe,E===Ii?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const N=i.properties.get(w);N.light=I}return w}function y(M,C,I,E,w){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===Ii)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const L=t.update(M),Y=M.material;if(Array.isArray(Y)){const Q=L.groups;for(let F=0,P=Q.length;F<P;F++){const z=Q[F],rt=Y[z.materialIndex];if(rt&&rt.visible){const ht=S(M,rt,E,w);M.onBeforeShadow(i,M,C,I,L,ht,z),i.renderBufferDirect(I,null,L,ht,M,z),M.onAfterShadow(i,M,C,I,L,ht,z)}}}else if(Y.visible){const Q=S(M,Y,E,w);M.onBeforeShadow(i,M,C,I,L,Q,null),i.renderBufferDirect(I,null,L,Q,M,null),M.onAfterShadow(i,M,C,I,L,Q,null)}}const N=M.children;for(let L=0,Y=N.length;L<Y;L++)y(N[L],C,I,E,w)}function T(M){M.target.removeEventListener("dispose",T);for(const I in l){const E=l[I],w=M.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const s1={[fl]:dl,[pl]:_l,[ml]:xl,[_r]:gl,[dl]:fl,[_l]:pl,[xl]:ml,[gl]:_r};function r1(i,t){function e(){let J=!1;const bt=new Pe;let Mt=null;const Nt=new Pe(0,0,0,0);return{setMask:function(wt){Mt!==wt&&!J&&(i.colorMask(wt,wt,wt,wt),Mt=wt)},setLocked:function(wt){J=wt},setClear:function(wt,ft,kt,ne,ye){ye===!0&&(wt*=ne,ft*=ne,kt*=ne),bt.set(wt,ft,kt,ne),Nt.equals(bt)===!1&&(i.clearColor(wt,ft,kt,ne),Nt.copy(bt))},reset:function(){J=!1,Mt=null,Nt.set(-1,0,0,0)}}}function n(){let J=!1,bt=!1,Mt=null,Nt=null,wt=null;return{setReversed:function(ft){if(bt!==ft){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),bt=ft;const ne=wt;wt=null,this.setClear(ne)}},getReversed:function(){return bt},setTest:function(ft){ft?ut(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(ft){Mt!==ft&&!J&&(i.depthMask(ft),Mt=ft)},setFunc:function(ft){if(bt&&(ft=s1[ft]),Nt!==ft){switch(ft){case fl:i.depthFunc(i.NEVER);break;case dl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case _r:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=ft}},setLocked:function(ft){J=ft},setClear:function(ft){wt!==ft&&(bt&&(ft=1-ft),i.clearDepth(ft),wt=ft)},reset:function(){J=!1,Mt=null,Nt=null,wt=null,bt=!1}}}function s(){let J=!1,bt=null,Mt=null,Nt=null,wt=null,ft=null,kt=null,ne=null,ye=null;return{setTest:function(re){J||(re?ut(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(re){bt!==re&&!J&&(i.stencilMask(re),bt=re)},setFunc:function(re,nn,An){(Mt!==re||Nt!==nn||wt!==An)&&(i.stencilFunc(re,nn,An),Mt=re,Nt=nn,wt=An)},setOp:function(re,nn,An){(ft!==re||kt!==nn||ne!==An)&&(i.stencilOp(re,nn,An),ft=re,kt=nn,ne=An)},setLocked:function(re){J=re},setClear:function(re){ye!==re&&(i.clearStencil(re),ye=re)},reset:function(){J=!1,bt=null,Mt=null,Nt=null,wt=null,ft=null,kt=null,ne=null,ye=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,b=null,S=null,y=null,T=null,M=null,C=new ae(0,0,0),I=0,E=!1,w=null,G=null,N=null,L=null,Y=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,P=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(z)[1]),F=P>=1):z.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),F=P>=2);let rt=null,ht={};const H=i.getParameter(i.SCISSOR_BOX),B=i.getParameter(i.VIEWPORT),st=new Pe().fromArray(H),_t=new Pe().fromArray(B);function Ft(J,bt,Mt,Nt){const wt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(J,ft),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Mt;kt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(bt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ft}const lt={};lt[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(_r),O(!1),$(Vc),ut(i.CULL_FACE),te(Oi);function ut(J){h[J]!==!0&&(i.enable(J),h[J]=!0)}function Et(J){h[J]!==!1&&(i.disable(J),h[J]=!1)}function Lt(J,bt){return u[J]!==bt?(i.bindFramebuffer(J,bt),u[J]=bt,J===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),J===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Ct(J,bt){let Mt=d,Nt=!1;if(J){Mt=p.get(bt),Mt===void 0&&(Mt=[],p.set(bt,Mt));const wt=J.textures;if(Mt.length!==wt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,kt=wt.length;ft<kt;ft++)Mt[ft]=i.COLOR_ATTACHMENT0+ft;Mt.length=wt.length,Nt=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(Mt)}function Vt(J){return g!==J?(i.useProgram(J),g=J,!0):!1}const ue={[Cs]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[Ef]:i.FUNC_REVERSE_SUBTRACT};ue[Tf]=i.MIN,ue[bf]=i.MAX;const k={[wf]:i.ZERO,[Af]:i.ONE,[Rf]:i.SRC_COLOR,[hl]:i.SRC_ALPHA,[Uf]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[ul]:i.ONE_MINUS_SRC_ALPHA,[If]:i.ONE_MINUS_DST_COLOR,[Df]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Ff]:i.ONE_MINUS_CONSTANT_COLOR,[Of]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function te(J,bt,Mt,Nt,wt,ft,kt,ne,ye,re){if(J===Oi){x===!0&&(Et(i.BLEND),x=!1);return}if(x===!1&&(ut(i.BLEND),x=!0),J!==yf){if(J!==m||re!==E){if((f!==Cs||y!==Cs)&&(i.blendEquation(i.FUNC_ADD),f=Cs,y=Cs),re)switch(J){case dr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}b=null,S=null,T=null,M=null,C.set(0,0,0),I=0,m=J,E=re}return}wt=wt||bt,ft=ft||Mt,kt=kt||Nt,(bt!==f||wt!==y)&&(i.blendEquationSeparate(ue[bt],ue[wt]),f=bt,y=wt),(Mt!==b||Nt!==S||ft!==T||kt!==M)&&(i.blendFuncSeparate(k[Mt],k[Nt],k[ft],k[kt]),b=Mt,S=Nt,T=ft,M=kt),(ne.equals(C)===!1||ye!==I)&&(i.blendColor(ne.r,ne.g,ne.b,ye),C.copy(ne),I=ye),m=J,E=!1}function Kt(J,bt){J.side===gn?Et(i.CULL_FACE):ut(i.CULL_FACE);let Mt=J.side===_n;bt&&(Mt=!Mt),O(Mt),J.blending===dr&&J.transparent===!1?te(Oi):te(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),r.setMask(J.colorWrite);const Nt=J.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),gt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function O(J){w!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),w=J)}function $(J){J!==xf?(ut(i.CULL_FACE),J!==G&&(J===Vc?i.cullFace(i.BACK):J===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),G=J}function Pt(J){J!==N&&(F&&i.lineWidth(J),N=J)}function gt(J,bt,Mt){J?(ut(i.POLYGON_OFFSET_FILL),(L!==bt||Y!==Mt)&&(i.polygonOffset(bt,Mt),L=bt,Y=Mt)):Et(i.POLYGON_OFFSET_FILL)}function At(J){J?ut(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function W(J){J===void 0&&(J=i.TEXTURE0+Q-1),rt!==J&&(i.activeTexture(J),rt=J)}function U(J,bt,Mt){Mt===void 0&&(rt===null?Mt=i.TEXTURE0+Q-1:Mt=rt);let Nt=ht[Mt];Nt===void 0&&(Nt={type:void 0,texture:void 0},ht[Mt]=Nt),(Nt.type!==J||Nt.texture!==bt)&&(rt!==Mt&&(i.activeTexture(Mt),rt=Mt),i.bindTexture(J,bt||lt[J]),Nt.type=J,Nt.texture=bt)}function v(){const J=ht[rt];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Z(){try{i.texSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function j(){try{i.texSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function et(){try{i.texStorage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function vt(){try{i.texStorage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function yt(){try{i.texImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function mt(){try{i.texImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function St(J){st.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),st.copy(J))}function Xt(J){_t.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),_t.copy(J))}function Zt(J,bt){let Mt=l.get(bt);Mt===void 0&&(Mt=new WeakMap,l.set(bt,Mt));let Nt=Mt.get(J);Nt===void 0&&(Nt=i.getUniformBlockIndex(bt,J.name),Mt.set(J,Nt))}function Ut(J,bt){const Nt=l.get(bt).get(J);c.get(bt)!==Nt&&(i.uniformBlockBinding(bt,Nt,J.__bindingPointIndex),c.set(bt,Nt))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ht={},u={},p=new WeakMap,d=[],g=null,x=!1,m=null,f=null,b=null,S=null,y=null,T=null,M=null,C=new ae(0,0,0),I=0,E=!1,w=null,G=null,N=null,L=null,Y=null,st.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Et,bindFramebuffer:Lt,drawBuffers:Ct,useProgram:Vt,setBlending:te,setMaterial:Kt,setFlipSided:O,setCullFace:$,setLineWidth:Pt,setPolygonOffset:gt,setScissorTest:At,activeTexture:W,bindTexture:U,unbindTexture:v,compressedTexImage2D:_,compressedTexImage3D:D,texImage2D:yt,texImage3D:mt,updateUBOMapping:Zt,uniformBlockBinding:Ut,texStorage2D:et,texStorage3D:vt,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:K,compressedTexSubImage3D:X,scissor:St,viewport:Xt,reset:ee}}function o1(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap;let u;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,_){return d?new OffscreenCanvas(v,_):ha("canvas")}function x(v,_,D){let Z=1;const j=U(v);if((j.width>D||j.height>D)&&(Z=D/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const K=Math.floor(Z*j.width),X=Math.floor(Z*j.height);u===void 0&&(u=g(K,X));const et=_?g(K,X):u;return et.width=K,et.height=X,et.getContext("2d").drawImage(v,0,0,K,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+X+")."),et}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),v;return v}function m(v){return v.generateMipmaps}function f(v){i.generateMipmap(v)}function b(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(v,_,D,Z,j=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let K=_;if(_===i.RED&&(D===i.FLOAT&&(K=i.R32F),D===i.HALF_FLOAT&&(K=i.R16F),D===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.R8UI),D===i.UNSIGNED_SHORT&&(K=i.R16UI),D===i.UNSIGNED_INT&&(K=i.R32UI),D===i.BYTE&&(K=i.R8I),D===i.SHORT&&(K=i.R16I),D===i.INT&&(K=i.R32I)),_===i.RG&&(D===i.FLOAT&&(K=i.RG32F),D===i.HALF_FLOAT&&(K=i.RG16F),D===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.RG8UI),D===i.UNSIGNED_SHORT&&(K=i.RG16UI),D===i.UNSIGNED_INT&&(K=i.RG32UI),D===i.BYTE&&(K=i.RG8I),D===i.SHORT&&(K=i.RG16I),D===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.RGB8UI),D===i.UNSIGNED_SHORT&&(K=i.RGB16UI),D===i.UNSIGNED_INT&&(K=i.RGB32UI),D===i.BYTE&&(K=i.RGB8I),D===i.SHORT&&(K=i.RGB16I),D===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(D===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),D===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),D===i.UNSIGNED_INT&&(K=i.RGBA32UI),D===i.BYTE&&(K=i.RGBA8I),D===i.SHORT&&(K=i.RGBA16I),D===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(D===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),D===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){const X=j?la:Me.getTransfer(Z);D===i.FLOAT&&(K=i.RGBA32F),D===i.HALF_FLOAT&&(K=i.RGBA16F),D===i.UNSIGNED_BYTE&&(K=X===Ce?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(v,_){let D;return v?_===null||_===Us||_===Qr?D=i.DEPTH24_STENCIL8:_===gi?D=i.DEPTH32F_STENCIL8:_===jr&&(D=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Us||_===Qr?D=i.DEPTH_COMPONENT24:_===gi?D=i.DEPTH_COMPONENT32F:_===jr&&(D=i.DEPTH_COMPONENT16),D}function T(v,_){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==fn&&v.minFilter!==mi?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function M(v){const _=v.target;_.removeEventListener("dispose",M),I(_),_.isVideoTexture&&h.delete(_)}function C(v){const _=v.target;_.removeEventListener("dispose",C),w(_)}function I(v){const _=n.get(v);if(_.__webglInit===void 0)return;const D=v.source,Z=p.get(D);if(Z){const j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(v),Object.keys(Z).length===0&&p.delete(D)}n.remove(v)}function E(v){const _=n.get(v);i.deleteTexture(_.__webglTexture);const D=v.source,Z=p.get(D);delete Z[_.__cacheKey],o.memory.textures--}function w(v){const _=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let j=0;j<_.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const D=v.textures;for(let Z=0,j=D.length;Z<j;Z++){const K=n.get(D[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(D[Z])}n.remove(v)}let G=0;function N(){G=0}function L(){const v=G;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),G+=1,v}function Y(v){const _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function Q(v,_){const D=n.get(v);if(v.isVideoTexture&&At(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&D.__version!==v.version){const Z=v.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(D,v,_);return}}else v.isExternalTexture&&(D.__webglTexture=v.sourceTexture?v.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+_)}function F(v,_){const D=n.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){lt(D,v,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+_)}function P(v,_){const D=n.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&D.__version!==v.version){lt(D,v,_);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+_)}function z(v,_){const D=n.get(v);if(v.version>0&&D.__version!==v.version){ut(D,v,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+_)}const rt={[Is]:i.REPEAT,[Ds]:i.CLAMP_TO_EDGE,[yl]:i.MIRRORED_REPEAT},ht={[fn]:i.NEAREST,[Hf]:i.NEAREST_MIPMAP_NEAREST,[Mo]:i.NEAREST_MIPMAP_LINEAR,[mi]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[Ls]:i.LINEAR_MIPMAP_LINEAR},H={[Xf]:i.NEVER,[$f]:i.ALWAYS,[qf]:i.LESS,[Bu]:i.LEQUAL,[Yf]:i.EQUAL,[Jf]:i.GEQUAL,[Zf]:i.GREATER,[Kf]:i.NOTEQUAL};function B(v,_){if(_.type===gi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mi||_.magFilter===Ea||_.magFilter===Mo||_.magFilter===Ls||_.minFilter===mi||_.minFilter===Ea||_.minFilter===Mo||_.minFilter===Ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,rt[_.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,rt[_.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,rt[_.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,H[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===fn||_.minFilter!==Mo&&_.minFilter!==Ls||_.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");i.texParameterf(v,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function st(v,_){let D=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",M));const Z=_.source;let j=p.get(Z);j===void 0&&(j={},p.set(Z,j));const K=Y(_);if(K!==v.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),j[K].usedTimes++;const X=j[v.__cacheKey];X!==void 0&&(j[v.__cacheKey].usedTimes--,X.usedTimes===0&&E(_)),v.__cacheKey=K,v.__webglTexture=j[K].texture}return D}function _t(v,_,D){return Math.floor(Math.floor(v/D)/_)}function Ft(v,_,D,Z){const K=v.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,D,Z,_.data);else{K.sort((mt,St)=>mt.start-St.start);let X=0;for(let mt=1;mt<K.length;mt++){const St=K[X],Xt=K[mt],Zt=St.start+St.count,Ut=_t(Xt.start,_.width,4),ee=_t(St.start,_.width,4);Xt.start<=Zt+1&&Ut===ee&&_t(Xt.start+Xt.count-1,_.width,4)===Ut?St.count=Math.max(St.count,Xt.start+Xt.count-St.start):(++X,K[X]=Xt)}K.length=X+1;const et=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let mt=0,St=K.length;mt<St;mt++){const Xt=K[mt],Zt=Math.floor(Xt.start/4),Ut=Math.ceil(Xt.count/4),ee=Zt%_.width,J=Math.floor(Zt/_.width),bt=Ut,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,J),e.texSubImage2D(i.TEXTURE_2D,0,ee,J,bt,Mt,D,Z,_.data)}v.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,et),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function lt(v,_,D){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);const j=st(v,_),K=_.source;e.bindTexture(Z,v.__webglTexture,i.TEXTURE0+D);const X=n.get(K);if(K.version!==X.__version||j===!0){e.activeTexture(i.TEXTURE0+D);const et=Me.getPrimaries(Me.workingColorSpace),vt=_.colorSpace===Ni?null:Me.getPrimaries(_.colorSpace),yt=_.colorSpace===Ni||et===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let mt=x(_.image,!1,s.maxTextureSize);mt=W(_,mt);const St=r.convert(_.format,_.colorSpace),Xt=r.convert(_.type);let Zt=S(_.internalFormat,St,Xt,_.colorSpace,_.isVideoTexture);B(Z,_);let Ut;const ee=_.mipmaps,J=_.isVideoTexture!==!0,bt=X.__version===void 0||j===!0,Mt=K.dataReady,Nt=T(_,mt);if(_.isDepthTexture)Zt=y(_.format===eo,_.type),bt&&(J?e.texStorage2D(i.TEXTURE_2D,1,Zt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Zt,mt.width,mt.height,0,St,Xt,null));else if(_.isDataTexture)if(ee.length>0){J&&bt&&e.texStorage2D(i.TEXTURE_2D,Nt,Zt,ee[0].width,ee[0].height);for(let wt=0,ft=ee.length;wt<ft;wt++)Ut=ee[wt],J?Mt&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ut.width,Ut.height,St,Xt,Ut.data):e.texImage2D(i.TEXTURE_2D,wt,Zt,Ut.width,Ut.height,0,St,Xt,Ut.data);_.generateMipmaps=!1}else J?(bt&&e.texStorage2D(i.TEXTURE_2D,Nt,Zt,mt.width,mt.height),Mt&&Ft(_,mt,St,Xt)):e.texImage2D(i.TEXTURE_2D,0,Zt,mt.width,mt.height,0,St,Xt,mt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){J&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Zt,ee[0].width,ee[0].height,mt.depth);for(let wt=0,ft=ee.length;wt<ft;wt++)if(Ut=ee[wt],_.format!==si)if(St!==null)if(J){if(Mt)if(_.layerUpdates.size>0){const kt=Dh(Ut.width,Ut.height,_.format,_.type);for(const ne of _.layerUpdates){const ye=Ut.data.subarray(ne*kt/Ut.data.BYTES_PER_ELEMENT,(ne+1)*kt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,ne,Ut.width,Ut.height,1,St,ye)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,Ut.width,Ut.height,mt.depth,St,Ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,wt,Zt,Ut.width,Ut.height,mt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,wt,0,0,0,Ut.width,Ut.height,mt.depth,St,Xt,Ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,wt,Zt,Ut.width,Ut.height,mt.depth,0,St,Xt,Ut.data)}else{J&&bt&&e.texStorage2D(i.TEXTURE_2D,Nt,Zt,ee[0].width,ee[0].height);for(let wt=0,ft=ee.length;wt<ft;wt++)Ut=ee[wt],_.format!==si?St!==null?J?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,wt,0,0,Ut.width,Ut.height,St,Ut.data):e.compressedTexImage2D(i.TEXTURE_2D,wt,Zt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Mt&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,Ut.width,Ut.height,St,Xt,Ut.data):e.texImage2D(i.TEXTURE_2D,wt,Zt,Ut.width,Ut.height,0,St,Xt,Ut.data)}else if(_.isDataArrayTexture)if(J){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Zt,mt.width,mt.height,mt.depth),Mt)if(_.layerUpdates.size>0){const wt=Dh(mt.width,mt.height,_.format,_.type);for(const ft of _.layerUpdates){const kt=mt.data.subarray(ft*wt/mt.data.BYTES_PER_ELEMENT,(ft+1)*wt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,mt.width,mt.height,1,St,Xt,kt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Xt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Zt,mt.width,mt.height,mt.depth,0,St,Xt,mt.data);else if(_.isData3DTexture)J?(bt&&e.texStorage3D(i.TEXTURE_3D,Nt,Zt,mt.width,mt.height,mt.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Xt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Zt,mt.width,mt.height,mt.depth,0,St,Xt,mt.data);else if(_.isFramebufferTexture){if(bt)if(J)e.texStorage2D(i.TEXTURE_2D,Nt,Zt,mt.width,mt.height);else{let wt=mt.width,ft=mt.height;for(let kt=0;kt<Nt;kt++)e.texImage2D(i.TEXTURE_2D,kt,Zt,wt,ft,0,St,Xt,null),wt>>=1,ft>>=1}}else if(ee.length>0){if(J&&bt){const wt=U(ee[0]);e.texStorage2D(i.TEXTURE_2D,Nt,Zt,wt.width,wt.height)}for(let wt=0,ft=ee.length;wt<ft;wt++)Ut=ee[wt],J?Mt&&e.texSubImage2D(i.TEXTURE_2D,wt,0,0,St,Xt,Ut):e.texImage2D(i.TEXTURE_2D,wt,Zt,St,Xt,Ut);_.generateMipmaps=!1}else if(J){if(bt){const wt=U(mt);e.texStorage2D(i.TEXTURE_2D,Nt,Zt,wt.width,wt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Xt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Zt,St,Xt,mt);m(_)&&f(Z),X.__version=K.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function ut(v,_,D){if(_.image.length!==6)return;const Z=st(v,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+D);const K=n.get(j);if(j.version!==K.__version||Z===!0){e.activeTexture(i.TEXTURE0+D);const X=Me.getPrimaries(Me.workingColorSpace),et=_.colorSpace===Ni?null:Me.getPrimaries(_.colorSpace),vt=_.colorSpace===Ni||X===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const yt=_.isCompressedTexture||_.image[0].isCompressedTexture,mt=_.image[0]&&_.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!yt&&!mt?St[ft]=x(_.image[ft],!0,s.maxCubemapSize):St[ft]=mt?_.image[ft].image:_.image[ft],St[ft]=W(_,St[ft]);const Xt=St[0],Zt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),ee=S(_.internalFormat,Zt,Ut,_.colorSpace),J=_.isVideoTexture!==!0,bt=K.__version===void 0||Z===!0,Mt=j.dataReady;let Nt=T(_,Xt);B(i.TEXTURE_CUBE_MAP,_);let wt;if(yt){J&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ee,Xt.width,Xt.height);for(let ft=0;ft<6;ft++){wt=St[ft].mipmaps;for(let kt=0;kt<wt.length;kt++){const ne=wt[kt];_.format!==si?Zt!==null?J?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,0,0,ne.width,ne.height,Zt,ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,ee,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,0,0,ne.width,ne.height,Zt,Ut,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt,ee,ne.width,ne.height,0,Zt,Ut,ne.data)}}}else{if(wt=_.mipmaps,J&&bt){wt.length>0&&Nt++;const ft=U(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ee,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(mt){J?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Zt,Ut,St[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ee,St[ft].width,St[ft].height,0,Zt,Ut,St[ft].data);for(let kt=0;kt<wt.length;kt++){const ye=wt[kt].image[ft].image;J?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,0,0,ye.width,ye.height,Zt,Ut,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,ee,ye.width,ye.height,0,Zt,Ut,ye.data)}}else{J?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Zt,Ut,St[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ee,Zt,Ut,St[ft]);for(let kt=0;kt<wt.length;kt++){const ne=wt[kt];J?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,0,0,Zt,Ut,ne.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,kt+1,ee,Zt,Ut,ne.image[ft])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),K.__version=j.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function Et(v,_,D,Z,j,K){const X=r.convert(D.format,D.colorSpace),et=r.convert(D.type),vt=S(D.internalFormat,X,et,D.colorSpace),yt=n.get(_),mt=n.get(D);if(mt.__renderTarget=_,!yt.__hasExternalTextures){const St=Math.max(1,_.width>>K),Xt=Math.max(1,_.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,vt,St,Xt,_.depth,0,X,et,null):e.texImage2D(j,K,vt,St,Xt,0,X,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,v),gt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,mt.__webglTexture,0,Pt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,mt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(v,_,D){if(i.bindRenderbuffer(i.RENDERBUFFER,v),_.depthBuffer){const Z=_.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,K=y(_.stencilBuffer,j),X=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=Pt(_);gt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,K,_.width,_.height):D?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,v)}else{const Z=_.textures;for(let j=0;j<Z.length;j++){const K=Z[j],X=r.convert(K.format,K.colorSpace),et=r.convert(K.type),vt=S(K.internalFormat,X,et,K.colorSpace),yt=Pt(_);D&&gt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,_.width,_.height):gt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,vt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,vt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const j=Z.__webglTexture,K=Pt(_);if(_.depthTexture.format===to)gt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===eo)gt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Vt(v){const _=n.get(v),D=v.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==v.depthTexture){const Z=v.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Z}if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const Z=v.texture.mipmaps;Z&&Z.length>0?Ct(_.__webglFramebuffer[0],v):Ct(_.__webglFramebuffer,v)}else if(D){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),Lt(_.__webglDepthbuffer[Z],v,!1);else{const j=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}else{const Z=v.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Lt(_.__webglDepthbuffer,v,!1);else{const j=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(v,_,D){const Z=n.get(v);_!==void 0&&Et(Z.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&Vt(v)}function k(v){const _=v.texture,D=n.get(v),Z=n.get(_);v.addEventListener("dispose",C);const j=v.textures,K=v.isWebGLCubeRenderTarget===!0,X=j.length>1;if(X||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,o.memory.textures++),K){D.__webglFramebuffer=[];for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer[et]=[];for(let vt=0;vt<_.mipmaps.length;vt++)D.__webglFramebuffer[et][vt]=i.createFramebuffer()}else D.__webglFramebuffer[et]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){D.__webglFramebuffer=[];for(let et=0;et<_.mipmaps.length;et++)D.__webglFramebuffer[et]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(X)for(let et=0,vt=j.length;et<vt;et++){const yt=n.get(j[et]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(v.samples>0&&gt(v)===!1){D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let et=0;et<j.length;et++){const vt=j[et];D.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[et]);const yt=r.convert(vt.format,vt.colorSpace),mt=r.convert(vt.type),St=S(vt.internalFormat,yt,mt,vt.colorSpace,v.isXRRenderTarget===!0),Xt=Pt(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,St,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,D.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(D.__webglDepthRenderbuffer,v,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),B(i.TEXTURE_CUBE_MAP,_);for(let et=0;et<6;et++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)Et(D.__webglFramebuffer[et][vt],v,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt);else Et(D.__webglFramebuffer[et],v,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(X){for(let et=0,vt=j.length;et<vt;et++){const yt=j[et],mt=n.get(yt);let St=i.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(St=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,mt.__webglTexture),B(St,yt),Et(D.__webglFramebuffer,v,yt,i.COLOR_ATTACHMENT0+et,St,0),m(yt)&&f(St)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(et=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,Z.__webglTexture),B(et,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)Et(D.__webglFramebuffer[vt],v,_,i.COLOR_ATTACHMENT0,et,vt);else Et(D.__webglFramebuffer,v,_,i.COLOR_ATTACHMENT0,et,0);m(_)&&f(et),e.unbindTexture()}v.depthBuffer&&Vt(v)}function te(v){const _=v.textures;for(let D=0,Z=_.length;D<Z;D++){const j=_[D];if(m(j)){const K=b(v),X=n.get(j).__webglTexture;e.bindTexture(K,X),f(K),e.unbindTexture()}}}const Kt=[],O=[];function $(v){if(v.samples>0){if(gt(v)===!1){const _=v.textures,D=v.width,Z=v.height;let j=i.COLOR_BUFFER_BIT;const K=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(v),et=_.length>1;if(et)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer);const vt=v.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[yt]);const mt=n.get(_[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,D,Z,0,0,D,Z,j,i.NEAREST),c===!0&&(Kt.length=0,O.length=0,Kt.push(i.COLOR_ATTACHMENT0+yt),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Kt.push(K),O.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,X.__webglColorRenderbuffer[yt]);const mt=n.get(_[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const _=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Pt(v){return Math.min(s.maxSamples,v.samples)}function gt(v){const _=n.get(v);return v.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function At(v){const _=o.render.frame;h.get(v)!==_&&(h.set(v,_),v.update())}function W(v,_){const D=v.colorSpace,Z=v.format,j=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||D!==Mr&&D!==Ni&&(Me.getTransfer(D)===Ce?(Z!==si||j!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),_}function U(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=P,this.setTextureCube=z,this.rebindTextures=ue,this.setupRenderTarget=k,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=gt}function a1(i,t){function e(n,s=Ni){let r;const o=Me.getTransfer(s);if(n===vi)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Du)return i.BYTE;if(n===Lu)return i.SHORT;if(n===jr)return i.UNSIGNED_SHORT;if(n===uc)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===gi)return i.FLOAT;if(n===ns)return i.HALF_FLOAT;if(n===Nu)return i.ALPHA;if(n===Fu)return i.RGB;if(n===si)return i.RGBA;if(n===to)return i.DEPTH_COMPONENT;if(n===eo)return i.DEPTH_STENCIL;if(n===pc)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Ou)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sl||n===El||n===Tl||n===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wl||n===Al||n===Rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wl||n===Al)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===zl||n===kl||n===Hl||n===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ll)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ol)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gl||n===Wl||n===Xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gl)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ql||n===Yl||n===Zl||n===Kl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ql)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
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

}`;class h1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ku(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:l1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends Er{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",m=new h1,f={},b=e.getContextAttributes();let S=null,y=null;const T=[],M=[],C=new Ht;let I=null;const E=new wn;E.viewport=new Pe;const w=new wn;w.viewport=new Pe;const G=[E,w],N=new D0;let L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ut=T[lt];return ut===void 0&&(ut=new Wa,T[lt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(lt){let ut=T[lt];return ut===void 0&&(ut=new Wa,T[lt]=ut),ut.getGripSpace()},this.getHand=function(lt){let ut=T[lt];return ut===void 0&&(ut=new Wa,T[lt]=ut),ut.getHandSpace()};function Q(lt){const ut=M.indexOf(lt.inputSource);if(ut===-1)return;const Et=T[ut];Et!==void 0&&(Et.update(lt.inputSource,lt.frame,l||o),Et.dispatchEvent({type:lt.type,data:lt.inputSource}))}function F(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",P);for(let lt=0;lt<T.length;lt++){const ut=M[lt];ut!==null&&(M[lt]=null,T[lt].disconnect(ut))}L=null,Y=null,m.reset();for(const lt in f)delete f[lt];t.setRenderTarget(S),d=null,p=null,u=null,s=null,y=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(lt){l=lt},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",F),s.addEventListener("inputsourceschange",P),b.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Lt=null,Ct=null;b.depth&&(Ct=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=b.stencil?eo:to,Lt=b.stencil?Qr:Us);const Vt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Vt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new Mi(p.textureWidth,p.textureHeight,{format:si,type:vi,depthTexture:new wc(p.textureWidth,p.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const Et={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Mi(d.framebufferWidth,d.framebufferHeight,{format:si,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function P(lt){for(let ut=0;ut<lt.removed.length;ut++){const Et=lt.removed[ut],Lt=M.indexOf(Et);Lt>=0&&(M[Lt]=null,T[Lt].disconnect(Et))}for(let ut=0;ut<lt.added.length;ut++){const Et=lt.added[ut];let Lt=M.indexOf(Et);if(Lt===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=M.length){M.push(Et),Lt=Vt;break}else if(M[Vt]===null){M[Vt]=Et,Lt=Vt;break}if(Lt===-1)break}const Ct=T[Lt];Ct&&Ct.connect(Et)}}const z=new q,rt=new q;function ht(lt,ut,Et){z.setFromMatrixPosition(ut.matrixWorld),rt.setFromMatrixPosition(Et.matrixWorld);const Lt=z.distanceTo(rt),Ct=ut.projectionMatrix.elements,Vt=Et.projectionMatrix.elements,ue=Ct[14]/(Ct[10]-1),k=Ct[14]/(Ct[10]+1),te=(Ct[9]+1)/Ct[5],Kt=(Ct[9]-1)/Ct[5],O=(Ct[8]-1)/Ct[0],$=(Vt[8]+1)/Vt[0],Pt=ue*O,gt=ue*$,At=Lt/(-O+$),W=At*-O;if(ut.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(W),lt.translateZ(At),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Ct[10]===-1)lt.projectionMatrix.copy(ut.projectionMatrix),lt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const U=ue+At,v=k+At,_=Pt-W,D=gt+(Lt-W),Z=te*k/v*U,j=Kt*k/v*U;lt.projectionMatrix.makePerspective(_,D,Z,j,U,v),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function H(lt,ut){ut===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ut.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ut=lt.near,Et=lt.far;m.texture!==null&&(m.depthNear>0&&(ut=m.depthNear),m.depthFar>0&&(Et=m.depthFar)),N.near=w.near=E.near=ut,N.far=w.far=E.far=Et,(L!==N.near||Y!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),L=N.near,Y=N.far),N.layers.mask=lt.layers.mask|6,E.layers.mask=N.layers.mask&3,w.layers.mask=N.layers.mask&5;const Lt=lt.parent,Ct=N.cameras;H(N,Lt);for(let Vt=0;Vt<Ct.length;Vt++)H(Ct[Vt],Lt);Ct.length===2?ht(N,E,w):N.projectionMatrix.copy(E.projectionMatrix),B(lt,N,Lt)};function B(lt,ut,Et){Et===null?lt.matrix.copy(ut.matrixWorld):(lt.matrix.copy(Et.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ut.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ut.projectionMatrix),lt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=no*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(lt){c=lt,p!==null&&(p.fixedFoveation=lt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=lt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(lt){return f[lt]};let st=null;function _t(lt,ut){if(h=ut.getViewerPose(l||o),g=ut,h!==null){const Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Lt=!1;Et.length!==N.cameras.length&&(N.cameras.length=0,Lt=!0);for(let k=0;k<Et.length;k++){const te=Et[k];let Kt=null;if(d!==null)Kt=d.getViewport(te);else{const $=u.getViewSubImage(p,te);Kt=$.viewport,k===0&&(t.setRenderTargetTextures(y,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(y))}let O=G[k];O===void 0&&(O=new wn,O.layers.enable(k),O.viewport=new Pe,G[k]=O),O.matrix.fromArray(te.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(te.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),k===0&&(N.matrix.copy(O.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Lt===!0&&N.cameras.push(O)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const k=u.getDepthInformation(Et[0]);k&&k.isValid&&k.texture&&m.init(k,s.renderState)}if(Ct&&Ct.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let k=0;k<Et.length;k++){const te=Et[k].camera;if(te){let Kt=f[te];Kt||(Kt=new Ku,f[te]=Kt);const O=u.getCameraImage(te);Kt.sourceTexture=O}}}}for(let Et=0;Et<T.length;Et++){const Lt=M[Et],Ct=T[Et];Lt!==null&&Ct!==void 0&&Ct.update(Lt,ut,l||o)}st&&st(lt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Ft=new cf;Ft.setAnimationLoop(_t),this.setAnimationLoop=function(lt){st=lt},this.dispose=function(){}}}const Ms=new Kn,f1=new De;function d1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Wu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&d(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,b,S):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===_n&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===_n&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),S=b.envMap,y=b.envMapRotation;S&&(m.envMap.value=S,Ms.copy(y),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),m.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(Ms)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===_n&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p1(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,S){const y=S.program;n.uniformBlockBinding(b,y)}function l(b,S){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));const T=S.program;n.updateUBOMapping(b,T);const M=t.render.frame;r[b.id]!==M&&(p(b),r[b.id]=M)}function h(b){const S=u();b.__bindingPointIndex=S;const y=i.createBuffer(),T=b.__size,M=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const S=s[b.id],y=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let M=0,C=y.length;M<C;M++){const I=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,w=I.length;E<w;E++){const G=I[E];if(d(G,M,E,T)===!0){const N=G.__offset,L=Array.isArray(G.value)?G.value:[G.value];let Y=0;for(let Q=0;Q<L.length;Q++){const F=L[Q],P=x(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,N+Y,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,Y),Y+=P.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,G.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,S,y,T){const M=b.value,C=S+"_"+y;if(T[C]===void 0)return typeof M=="number"||typeof M=="boolean"?T[C]=M:T[C]=M.clone(),!0;{const I=T[C];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return T[C]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(b){const S=b.uniforms;let y=0;const T=16;for(let C=0,I=S.length;C<I;C++){const E=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,G=E.length;w<G;w++){const N=E[w],L=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,Q=L.length;Y<Q;Y++){const F=L[Y],P=x(F),z=y%T,rt=z%P.boundary,ht=z+rt;y+=rt,ht!==0&&T-ht<P.storage&&(y+=T-ht),N.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=P.storage}}}const M=y%T;return M>0&&(y+=T-M),b.__size=y,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class m1{constructor(t={}){const{canvas:e=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let T=!1;this._outputColorSpace=bn;let M=0,C=0,I=null,E=-1,w=null;const G=new Pe,N=new Pe;let L=null;const Y=new ae(0);let Q=0,F=e.width,P=e.height,z=1,rt=null,ht=null;const H=new Pe(0,0,F,P),B=new Pe(0,0,F,P);let st=!1;const _t=new Ec;let Ft=!1,lt=!1;const ut=new De,Et=new q,Lt=new Pe,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ue(){return I===null?z:1}let k=n;function te(A,tt){return e.getContext(A,tt)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ac}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),k===null){const tt="webgl2";if(k=te(tt,A),k===null)throw te(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Kt,O,$,Pt,gt,At,W,U,v,_,D,Z,j,K,X,et,vt,yt,mt,St,Xt,Zt,Ut,ee;function J(){Kt=new bg(k),Kt.init(),Zt=new a1(k,Kt),O=new xg(k,Kt,t,Zt),$=new r1(k,Kt),O.reversedDepthBuffer&&p&&$.buffers.depth.setReversed(!0),Pt=new Rg(k),gt=new q_,At=new o1(k,Kt,$,gt,O,Zt,Pt),W=new Mg(y),U=new Tg(y),v=new U0(k),Ut=new gg(k,v),_=new wg(k,v,Pt,Ut),D=new Pg(k,_,v,Pt),mt=new Cg(k,O,At),et=new vg(gt),Z=new X_(y,W,U,Kt,O,Ut,et),j=new d1(y,gt),K=new Z_,X=new t1(Kt),yt=new mg(y,W,U,$,D,d,c),vt=new i1(y,D,O),ee=new p1(k,Pt,O,$),St=new _g(k,Kt,Pt),Xt=new Ag(k,Kt,Pt),Pt.programs=Z.programs,y.capabilities=O,y.extensions=Kt,y.properties=gt,y.renderLists=K,y.shadowMap=vt,y.state=$,y.info=Pt}J();const bt=new u1(y,k);this.xr=bt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(F,P,!1))},this.getSize=function(A){return A.set(F,P)},this.setSize=function(A,tt,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,P=tt,e.width=Math.floor(A*z),e.height=Math.floor(tt*z),ot===!0&&(e.style.width=A+"px",e.style.height=tt+"px"),this.setViewport(0,0,A,tt)},this.getDrawingBufferSize=function(A){return A.set(F*z,P*z).floor()},this.setDrawingBufferSize=function(A,tt,ot){F=A,P=tt,z=ot,e.width=Math.floor(A*ot),e.height=Math.floor(tt*ot),this.setViewport(0,0,A,tt)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,tt,ot,at){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,tt,ot,at),$.viewport(G.copy(H).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(B)},this.setScissor=function(A,tt,ot,at){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,tt,ot,at),$.scissor(N.copy(B).multiplyScalar(z).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){$.setScissorTest(st=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(A=!0,tt=!0,ot=!0){let at=0;if(A){let it=!1;if(I!==null){const Rt=I.texture.format;it=Rt===_c||Rt===gc||Rt===mc}if(it){const Rt=I.texture.type,It=Rt===vi||Rt===Us||Rt===jr||Rt===Qr||Rt===fc||Rt===dc,Ot=yt.getClearColor(),Bt=yt.getClearAlpha(),$t=Ot.r,jt=Ot.g,qt=Ot.b;It?(g[0]=$t,g[1]=jt,g[2]=qt,g[3]=Bt,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=$t,x[1]=jt,x[2]=qt,x[3]=Bt,k.clearBufferiv(k.COLOR,0,x))}else at|=k.COLOR_BUFFER_BIT}tt&&(at|=k.DEPTH_BUFFER_BIT),ot&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),yt.dispose(),K.dispose(),X.dispose(),gt.dispose(),W.dispose(),U.dispose(),D.dispose(),Ut.dispose(),ee.dispose(),Z.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",An),bt.removeEventListener("sessionend",vn),Mn.stop()};function Mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const A=Pt.autoReset,tt=vt.enabled,ot=vt.autoUpdate,at=vt.needsUpdate,it=vt.type;J(),Pt.autoReset=A,vt.enabled=tt,vt.autoUpdate=ot,vt.needsUpdate=at,vt.type=it}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ft(A){const tt=A.target;tt.removeEventListener("dispose",ft),kt(tt)}function kt(A){ne(A),gt.remove(A)}function ne(A){const tt=gt.get(A).programs;tt!==void 0&&(tt.forEach(function(ot){Z.releaseProgram(ot)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,tt,ot,at,it,Rt){tt===null&&(tt=Ct);const It=it.isMesh&&it.matrixWorld.determinant()<0,Ot=Ei(A,tt,ot,at,it);$.setMaterial(at,It);let Bt=ot.index,$t=1;if(at.wireframe===!0){if(Bt=_.getWireframeAttribute(ot),Bt===void 0)return;$t=2}const jt=ot.drawRange,qt=ot.attributes.position;let se=jt.start*$t,pe=(jt.start+jt.count)*$t;Rt!==null&&(se=Math.max(se,Rt.start*$t),pe=Math.min(pe,(Rt.start+Rt.count)*$t)),Bt!==null?(se=Math.max(se,0),pe=Math.min(pe,Bt.count)):qt!=null&&(se=Math.max(se,0),pe=Math.min(pe,qt.count));const me=pe-se;if(me<0||me===1/0)return;Ut.setup(it,at,Ot,ot,Bt);let Ae,xe=St;if(Bt!==null&&(Ae=v.get(Bt),xe=Xt,xe.setIndex(Ae)),it.isMesh)at.wireframe===!0?($.setLineWidth(at.wireframeLinewidth*ue()),xe.setMode(k.LINES)):xe.setMode(k.TRIANGLES);else if(it.isLine){let Jt=at.linewidth;Jt===void 0&&(Jt=1),$.setLineWidth(Jt*ue()),it.isLineSegments?xe.setMode(k.LINES):it.isLineLoop?xe.setMode(k.LINE_LOOP):xe.setMode(k.LINE_STRIP)}else it.isPoints?xe.setMode(k.POINTS):it.isSprite&&xe.setMode(k.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))xe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Jt=it._multiDrawStarts,Se=it._multiDrawCounts,fe=it._multiDrawCount,an=Bt?v.get(Bt).bytesPerElement:1,kn=gt.get(at).currentProgram.getUniforms();for(let Ke=0;Ke<fe;Ke++)kn.setValue(k,"_gl_DrawID",Ke),xe.render(Jt[Ke]/an,Se[Ke])}else if(it.isInstancedMesh)xe.renderInstances(se,me,it.count);else if(ot.isInstancedBufferGeometry){const Jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Se=Math.min(ot.instanceCount,Jt);xe.renderInstances(se,me,Se)}else xe.render(se,me)};function ye(A,tt,ot){A.transparent===!0&&A.side===gn&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,Jn(A,tt,ot),A.side=Zn,A.needsUpdate=!0,Jn(A,tt,ot),A.side=gn):Jn(A,tt,ot)}this.compile=function(A,tt,ot=null){ot===null&&(ot=A),f=X.get(ot),f.init(tt),S.push(f),ot.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(f.pushLight(it),it.castShadow&&f.pushShadow(it))}),A!==ot&&A.traverseVisible(function(it){it.isLight&&it.layers.test(tt.layers)&&(f.pushLight(it),it.castShadow&&f.pushShadow(it))}),f.setupLights();const at=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Rt=it.material;if(Rt)if(Array.isArray(Rt))for(let It=0;It<Rt.length;It++){const Ot=Rt[It];ye(Ot,ot,it),at.add(Ot)}else ye(Rt,ot,it),at.add(Rt)}),f=S.pop(),at},this.compileAsync=function(A,tt,ot=null){const at=this.compile(A,tt,ot);return new Promise(it=>{function Rt(){if(at.forEach(function(It){gt.get(It).currentProgram.isReady()&&at.delete(It)}),at.size===0){it(A);return}setTimeout(Rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let re=null;function nn(A){re&&re(A)}function An(){Mn.stop()}function vn(){Mn.start()}const Mn=new cf;Mn.setAnimationLoop(nn),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(A){re=A,bt.setAnimationLoop(A),A===null?Mn.stop():Mn.start()},bt.addEventListener("sessionstart",An),bt.addEventListener("sessionend",vn),this.render=function(A,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(tt),tt=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,tt,I),f=X.get(A,S.length),f.init(tt),S.push(f),ut.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),_t.setFromProjectionMatrix(ut,_i,tt.reversedDepth),lt=this.localClippingEnabled,Ft=et.init(this.clippingPlanes,lt),m=K.get(A,b.length),m.init(),b.push(m),bt.enabled===!0&&bt.isPresenting===!0){const Rt=y.xr.getDepthSensingMesh();Rt!==null&&ai(Rt,tt,-1/0,y.sortObjects)}ai(A,tt,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(rt,ht),Vt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Vt&&yt.addToRenderList(m,A),this.info.render.frame++,Ft===!0&&et.beginShadows();const ot=f.state.shadowsArray;vt.render(ot,A,tt),Ft===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=m.opaque,it=m.transmissive;if(f.setupLights(),tt.isArrayCamera){const Rt=tt.cameras;if(it.length>0)for(let It=0,Ot=Rt.length;It<Ot;It++){const Bt=Rt[It];Te(at,it,A,Bt)}Vt&&yt.render(A);for(let It=0,Ot=Rt.length;It<Ot;It++){const Bt=Rt[It];li(m,A,Bt,Bt.viewport)}}else it.length>0&&Te(at,it,A,tt),Vt&&yt.render(A),li(m,A,tt);I!==null&&C===0&&(At.updateMultisampleRenderTarget(I),At.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,tt),Ut.resetDefaultState(),E=-1,w=null,S.pop(),S.length>0?(f=S[S.length-1],Ft===!0&&et.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ai(A,tt,ot,at){if(A.visible===!1)return;if(A.layers.test(tt.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(tt);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){at&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ut);const It=D.update(A),Ot=A.material;Ot.visible&&m.push(A,It,Ot,ot,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const It=D.update(A),Ot=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Lt.copy(It.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(ut)),Array.isArray(Ot)){const Bt=It.groups;for(let $t=0,jt=Bt.length;$t<jt;$t++){const qt=Bt[$t],se=Ot[qt.materialIndex];se&&se.visible&&m.push(A,It,se,ot,Lt.z,qt)}}else Ot.visible&&m.push(A,It,Ot,ot,Lt.z,null)}}const Rt=A.children;for(let It=0,Ot=Rt.length;It<Ot;It++)ai(Rt[It],tt,ot,at)}function li(A,tt,ot,at){const it=A.opaque,Rt=A.transmissive,It=A.transparent;f.setupLightsView(ot),Ft===!0&&et.setGlobalState(y.clippingPlanes,ot),at&&$.viewport(G.copy(at)),it.length>0&&Ln(it,tt,ot),Rt.length>0&&Ln(Rt,tt,ot),It.length>0&&Ln(It,tt,ot),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Te(A,tt,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[at.id]===void 0&&(f.state.transmissionRenderTarget[at.id]=new Mi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?ns:vi,minFilter:Ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace}));const Rt=f.state.transmissionRenderTarget[at.id],It=at.viewport||G;Rt.setSize(It.z*y.transmissionResolutionScale,It.w*y.transmissionResolutionScale);const Ot=y.getRenderTarget(),Bt=y.getActiveCubeFace(),$t=y.getActiveMipmapLevel();y.setRenderTarget(Rt),y.getClearColor(Y),Q=y.getClearAlpha(),Q<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&yt.render(ot);const jt=y.toneMapping;y.toneMapping=es;const qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),f.setupLightsView(at),Ft===!0&&et.setGlobalState(y.clippingPlanes,at),Ln(A,ot,at),At.updateMultisampleRenderTarget(Rt),At.updateRenderTargetMipmap(Rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let pe=0,me=tt.length;pe<me;pe++){const Ae=tt[pe],xe=Ae.object,Jt=Ae.geometry,Se=Ae.material,fe=Ae.group;if(Se.side===gn&&xe.layers.test(at.layers)){const an=Se.side;Se.side=_n,Se.needsUpdate=!0,Rn(xe,ot,at,Jt,Se,fe),Se.side=an,Se.needsUpdate=!0,se=!0}}se===!0&&(At.updateMultisampleRenderTarget(Rt),At.updateRenderTargetMipmap(Rt))}y.setRenderTarget(Ot,Bt,$t),y.setClearColor(Y,Q),qt!==void 0&&(at.viewport=qt),y.toneMapping=jt}function Ln(A,tt,ot){const at=tt.isScene===!0?tt.overrideMaterial:null;for(let it=0,Rt=A.length;it<Rt;it++){const It=A[it],Ot=It.object,Bt=It.geometry,$t=It.group;let jt=It.material;jt.allowOverride===!0&&at!==null&&(jt=at),Ot.layers.test(ot.layers)&&Rn(Ot,tt,ot,Bt,jt,$t)}}function Rn(A,tt,ot,at,it,Rt){A.onBeforeRender(y,tt,ot,at,it,Rt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(y,tt,ot,at,A,Rt),it.transparent===!0&&it.side===gn&&it.forceSinglePass===!1?(it.side=_n,it.needsUpdate=!0,y.renderBufferDirect(ot,tt,at,it,A,Rt),it.side=Zn,it.needsUpdate=!0,y.renderBufferDirect(ot,tt,at,it,A,Rt),it.side=gn):y.renderBufferDirect(ot,tt,at,it,A,Rt),A.onAfterRender(y,tt,ot,at,it,Rt)}function Jn(A,tt,ot){tt.isScene!==!0&&(tt=Ct);const at=gt.get(A),it=f.state.lights,Rt=f.state.shadowsArray,It=it.state.version,Ot=Z.getParameters(A,it.state,Rt,tt,ot),Bt=Z.getProgramCacheKey(Ot);let $t=at.programs;at.environment=A.isMeshStandardMaterial?tt.environment:null,at.fog=tt.fog,at.envMap=(A.isMeshStandardMaterial?U:W).get(A.envMap||at.environment),at.envMapRotation=at.environment!==null&&A.envMap===null?tt.environmentRotation:A.envMapRotation,$t===void 0&&(A.addEventListener("dispose",ft),$t=new Map,at.programs=$t);let jt=$t.get(Bt);if(jt!==void 0){if(at.currentProgram===jt&&at.lightsStateVersion===It)return In(A,Ot),jt}else Ot.uniforms=Z.getUniforms(A),A.onBeforeCompile(Ot,y),jt=Z.acquireProgram(Ot,Bt),$t.set(Bt,jt),at.uniforms=Ot.uniforms;const qt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=et.uniform),In(A,Ot),at.needsLights=zs(A),at.lightsStateVersion=It,at.needsLights&&(qt.ambientLightColor.value=it.state.ambient,qt.lightProbe.value=it.state.probe,qt.directionalLights.value=it.state.directional,qt.directionalLightShadows.value=it.state.directionalShadow,qt.spotLights.value=it.state.spot,qt.spotLightShadows.value=it.state.spotShadow,qt.rectAreaLights.value=it.state.rectArea,qt.ltc_1.value=it.state.rectAreaLTC1,qt.ltc_2.value=it.state.rectAreaLTC2,qt.pointLights.value=it.state.point,qt.pointLightShadows.value=it.state.pointShadow,qt.hemisphereLights.value=it.state.hemi,qt.directionalShadowMap.value=it.state.directionalShadowMap,qt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,qt.spotShadowMap.value=it.state.spotShadowMap,qt.spotLightMatrix.value=it.state.spotLightMatrix,qt.spotLightMap.value=it.state.spotLightMap,qt.pointShadowMap.value=it.state.pointShadowMap,qt.pointShadowMatrix.value=it.state.pointShadowMatrix),at.currentProgram=jt,at.uniformsList=null,jt}function Si(A){if(A.uniformsList===null){const tt=A.currentProgram.getUniforms();A.uniformsList=oa.seqWithValue(tt.seq,A.uniforms)}return A.uniformsList}function In(A,tt){const ot=gt.get(A);ot.outputColorSpace=tt.outputColorSpace,ot.batching=tt.batching,ot.batchingColor=tt.batchingColor,ot.instancing=tt.instancing,ot.instancingColor=tt.instancingColor,ot.instancingMorph=tt.instancingMorph,ot.skinning=tt.skinning,ot.morphTargets=tt.morphTargets,ot.morphNormals=tt.morphNormals,ot.morphColors=tt.morphColors,ot.morphTargetsCount=tt.morphTargetsCount,ot.numClippingPlanes=tt.numClippingPlanes,ot.numIntersection=tt.numClipIntersection,ot.vertexAlphas=tt.vertexAlphas,ot.vertexTangents=tt.vertexTangents,ot.toneMapping=tt.toneMapping}function Ei(A,tt,ot,at,it){tt.isScene!==!0&&(tt=Ct),At.resetTextureUnits();const Rt=tt.fog,It=at.isMeshStandardMaterial?tt.environment:null,Ot=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Mr,Bt=(at.isMeshStandardMaterial?U:W).get(at.envMap||It),$t=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,jt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),qt=!!ot.morphAttributes.position,se=!!ot.morphAttributes.normal,pe=!!ot.morphAttributes.color;let me=es;at.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(me=y.toneMapping);const Ae=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,xe=Ae!==void 0?Ae.length:0,Jt=gt.get(at),Se=f.state.lights;if(Ft===!0&&(lt===!0||A!==w)){const Ie=A===w&&at.id===E;et.setState(at,A,Ie)}let fe=!1;at.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Se.state.version||Jt.outputColorSpace!==Ot||it.isBatchedMesh&&Jt.batching===!1||!it.isBatchedMesh&&Jt.batching===!0||it.isBatchedMesh&&Jt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Jt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Jt.instancing===!1||!it.isInstancedMesh&&Jt.instancing===!0||it.isSkinnedMesh&&Jt.skinning===!1||!it.isSkinnedMesh&&Jt.skinning===!0||it.isInstancedMesh&&Jt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Jt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Jt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Jt.instancingMorph===!1&&it.morphTexture!==null||Jt.envMap!==Bt||at.fog===!0&&Jt.fog!==Rt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==et.numPlanes||Jt.numIntersection!==et.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==jt||Jt.morphTargets!==qt||Jt.morphNormals!==se||Jt.morphColors!==pe||Jt.toneMapping!==me||Jt.morphTargetsCount!==xe)&&(fe=!0):(fe=!0,Jt.__version=at.version);let an=Jt.currentProgram;fe===!0&&(an=Jn(at,tt,it));let kn=!1,Ke=!1,Nn=!1;const Le=an.getUniforms(),dn=Jt.uniforms;if($.useProgram(an.program)&&(kn=!0,Ke=!0,Nn=!0),at.id!==E&&(E=at.id,Ke=!0),kn||w!==A){$.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Le.setValue(k,"projectionMatrix",A.projectionMatrix),Le.setValue(k,"viewMatrix",A.matrixWorldInverse);const qe=Le.map.cameraPosition;qe!==void 0&&qe.setValue(k,Et.setFromMatrixPosition(A.matrixWorld)),O.logarithmicDepthBuffer&&Le.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Le.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Ke=!0,Nn=!0)}if(it.isSkinnedMesh){Le.setOptional(k,it,"bindMatrix"),Le.setOptional(k,it,"bindMatrixInverse");const Ie=it.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Le.setValue(k,"boneTexture",Ie.boneTexture,At))}it.isBatchedMesh&&(Le.setOptional(k,it,"batchingTexture"),Le.setValue(k,"batchingTexture",it._matricesTexture,At),Le.setOptional(k,it,"batchingIdTexture"),Le.setValue(k,"batchingIdTexture",it._indirectTexture,At),Le.setOptional(k,it,"batchingColorTexture"),it._colorsTexture!==null&&Le.setValue(k,"batchingColorTexture",it._colorsTexture,At));const sn=ot.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&mt.update(it,ot,an),(Ke||Jt.receiveShadow!==it.receiveShadow)&&(Jt.receiveShadow=it.receiveShadow,Le.setValue(k,"receiveShadow",it.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(dn.envMap.value=Bt,dn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&tt.environment!==null&&(dn.envMapIntensity.value=tt.environmentIntensity),Ke&&(Le.setValue(k,"toneMappingExposure",y.toneMappingExposure),Jt.needsLights&&Un(dn,Nn),Rt&&at.fog===!0&&j.refreshFogUniforms(dn,Rt),j.refreshMaterialUniforms(dn,at,z,P,f.state.transmissionRenderTarget[A.id]),oa.upload(k,Si(Jt),dn,At)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(oa.upload(k,Si(Jt),dn,At),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Le.setValue(k,"center",it.center),Le.setValue(k,"modelViewMatrix",it.modelViewMatrix),Le.setValue(k,"normalMatrix",it.normalMatrix),Le.setValue(k,"modelMatrix",it.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Ie=at.uniformsGroups;for(let qe=0,Vi=Ie.length;qe<Vi;qe++){const Hn=Ie[qe];ee.update(Hn,an),ee.bind(Hn,an)}}return an}function Un(A,tt){A.ambientLightColor.needsUpdate=tt,A.lightProbe.needsUpdate=tt,A.directionalLights.needsUpdate=tt,A.directionalLightShadows.needsUpdate=tt,A.pointLights.needsUpdate=tt,A.pointLightShadows.needsUpdate=tt,A.spotLights.needsUpdate=tt,A.spotLightShadows.needsUpdate=tt,A.rectAreaLights.needsUpdate=tt,A.hemisphereLights.needsUpdate=tt}function zs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,tt,ot){const at=gt.get(A);at.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),gt.get(A.texture).__webglTexture=tt,gt.get(A.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,tt){const ot=gt.get(A);ot.__webglFramebuffer=tt,ot.__useDefaultFramebuffer=tt===void 0};const je=k.createFramebuffer();this.setRenderTarget=function(A,tt=0,ot=0){I=A,M=tt,C=ot;let at=!0,it=null,Rt=!1,It=!1;if(A){const Bt=gt.get(A);if(Bt.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(k.FRAMEBUFFER,null),at=!1;else if(Bt.__webglFramebuffer===void 0)At.setupRenderTarget(A);else if(Bt.__hasExternalTextures)At.rebindTextures(A,gt.get(A.texture).__webglTexture,gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qt=A.depthTexture;if(Bt.__boundDepthTexture!==qt){if(qt!==null&&gt.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");At.setupDepthRenderbuffer(A)}}const $t=A.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(It=!0);const jt=gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(jt[tt])?it=jt[tt][ot]:it=jt[tt],Rt=!0):A.samples>0&&At.useMultisampledRTT(A)===!1?it=gt.get(A).__webglMultisampledFramebuffer:Array.isArray(jt)?it=jt[ot]:it=jt,G.copy(A.viewport),N.copy(A.scissor),L=A.scissorTest}else G.copy(H).multiplyScalar(z).floor(),N.copy(B).multiplyScalar(z).floor(),L=st;if(ot!==0&&(it=je),$.bindFramebuffer(k.FRAMEBUFFER,it)&&at&&$.drawBuffers(A,it),$.viewport(G),$.scissor(N),$.setScissorTest(L),Rt){const Bt=gt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Bt.__webglTexture,ot)}else if(It){const Bt=tt;for(let $t=0;$t<A.textures.length;$t++){const jt=gt.get(A.textures[$t]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+$t,jt.__webglTexture,ot,Bt)}}else if(A!==null&&ot!==0){const Bt=gt.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Bt.__webglTexture,ot)}E=-1},this.readRenderTargetPixels=function(A,tt,ot,at,it,Rt,It,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){$.bindFramebuffer(k.FRAMEBUFFER,Bt);try{const $t=A.textures[Ot],jt=$t.format,qt=$t.type;if(!O.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=A.width-at&&ot>=0&&ot<=A.height-it&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),k.readPixels(tt,ot,at,it,Zt.convert(jt),Zt.convert(qt),Rt))}finally{const $t=I!==null?gt.get(I).__webglFramebuffer:null;$.bindFramebuffer(k.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(A,tt,ot,at,it,Rt,It,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt)if(tt>=0&&tt<=A.width-at&&ot>=0&&ot<=A.height-it){$.bindFramebuffer(k.FRAMEBUFFER,Bt);const $t=A.textures[Ot],jt=$t.format,qt=$t.type;if(!O.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,se),k.bufferData(k.PIXEL_PACK_BUFFER,Rt.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),k.readPixels(tt,ot,at,it,Zt.convert(jt),Zt.convert(qt),0);const pe=I!==null?gt.get(I).__webglFramebuffer:null;$.bindFramebuffer(k.FRAMEBUFFER,pe);const me=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await md(k,me,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,se),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Rt),k.deleteBuffer(se),k.deleteSync(me),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,tt=null,ot=0){const at=Math.pow(2,-ot),it=Math.floor(A.image.width*at),Rt=Math.floor(A.image.height*at),It=tt!==null?tt.x:0,Ot=tt!==null?tt.y:0;At.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ot,0,0,It,Ot,it,Rt),$.unbindTexture()};const Oe=k.createFramebuffer(),$n=k.createFramebuffer();this.copyTextureToTexture=function(A,tt,ot=null,at=null,it=0,Rt=null){Rt===null&&(it!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=it,it=0):Rt=0);let It,Ot,Bt,$t,jt,qt,se,pe,me;const Ae=A.isCompressedTexture?A.mipmaps[Rt]:A.image;if(ot!==null)It=ot.max.x-ot.min.x,Ot=ot.max.y-ot.min.y,Bt=ot.isBox3?ot.max.z-ot.min.z:1,$t=ot.min.x,jt=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const sn=Math.pow(2,-it);It=Math.floor(Ae.width*sn),Ot=Math.floor(Ae.height*sn),A.isDataArrayTexture?Bt=Ae.depth:A.isData3DTexture?Bt=Math.floor(Ae.depth*sn):Bt=1,$t=0,jt=0,qt=0}at!==null?(se=at.x,pe=at.y,me=at.z):(se=0,pe=0,me=0);const xe=Zt.convert(tt.format),Jt=Zt.convert(tt.type);let Se;tt.isData3DTexture?(At.setTexture3D(tt,0),Se=k.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(At.setTexture2DArray(tt,0),Se=k.TEXTURE_2D_ARRAY):(At.setTexture2D(tt,0),Se=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,tt.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,tt.unpackAlignment);const fe=k.getParameter(k.UNPACK_ROW_LENGTH),an=k.getParameter(k.UNPACK_IMAGE_HEIGHT),kn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ke=k.getParameter(k.UNPACK_SKIP_ROWS),Nn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ae.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ae.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$t),k.pixelStorei(k.UNPACK_SKIP_ROWS,jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qt);const Le=A.isDataArrayTexture||A.isData3DTexture,dn=tt.isDataArrayTexture||tt.isData3DTexture;if(A.isDepthTexture){const sn=gt.get(A),Ie=gt.get(tt),qe=gt.get(sn.__renderTarget),Vi=gt.get(Ie.__renderTarget);$.bindFramebuffer(k.READ_FRAMEBUFFER,qe.__webglFramebuffer),$.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let Hn=0;Hn<Bt;Hn++)Le&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gt.get(A).__webglTexture,it,qt+Hn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gt.get(tt).__webglTexture,Rt,me+Hn)),k.blitFramebuffer($t,jt,It,Ot,se,pe,It,Ot,k.DEPTH_BUFFER_BIT,k.NEAREST);$.bindFramebuffer(k.READ_FRAMEBUFFER,null),$.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||gt.has(A)){const sn=gt.get(A),Ie=gt.get(tt);$.bindFramebuffer(k.READ_FRAMEBUFFER,Oe),$.bindFramebuffer(k.DRAW_FRAMEBUFFER,$n);for(let qe=0;qe<Bt;qe++)Le?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,it,qt+qe):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,it),dn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ie.__webglTexture,Rt,me+qe):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ie.__webglTexture,Rt),it!==0?k.blitFramebuffer($t,jt,It,Ot,se,pe,It,Ot,k.COLOR_BUFFER_BIT,k.NEAREST):dn?k.copyTexSubImage3D(Se,Rt,se,pe,me+qe,$t,jt,It,Ot):k.copyTexSubImage2D(Se,Rt,se,pe,$t,jt,It,Ot);$.bindFramebuffer(k.READ_FRAMEBUFFER,null),$.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else dn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Se,Rt,se,pe,me,It,Ot,Bt,xe,Jt,Ae.data):tt.isCompressedArrayTexture?k.compressedTexSubImage3D(Se,Rt,se,pe,me,It,Ot,Bt,xe,Ae.data):k.texSubImage3D(Se,Rt,se,pe,me,It,Ot,Bt,xe,Jt,Ae):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Rt,se,pe,It,Ot,xe,Jt,Ae.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Rt,se,pe,Ae.width,Ae.height,xe,Ae.data):k.texSubImage2D(k.TEXTURE_2D,Rt,se,pe,It,Ot,xe,Jt,Ae);k.pixelStorei(k.UNPACK_ROW_LENGTH,fe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,an),k.pixelStorei(k.UNPACK_SKIP_PIXELS,kn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ke),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Nn),Rt===0&&tt.generateMipmaps&&k.generateMipmap(Se),$.unbindTexture()},this.initRenderTarget=function(A){gt.get(A).__webglFramebuffer===void 0&&At.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?At.setTextureCube(A,0):A.isData3DTexture?At.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?At.setTexture2DArray(A,0):At.setTexture2D(A,0),$.unbindTexture()},this.resetState=function(){M=0,C=0,I=null,$.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(t),e.unpackColorSpace=Me._getUnpackColorSpace()}}class g1 extends Yu{constructor(){super();const t=new zn;t.deleteAttribute("uv");const e=new Xe({side:_n}),n=new Xe,s=new un(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Qt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Hd(t,n,6),a=new Ye;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new Qt(t,cr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Qt(t,cr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const h=new Qt(t,cr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Qt(t,cr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const p=new Qt(t,cr(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const d=new Qt(t,cr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function cr(i){return new b0({color:0,emissive:16777215,emissiveIntensity:i})}const _1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x1=new Uc(-1,1,1,-1,0,1);class v1 extends Ze{constructor(){super(),this.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new we([0,2,0,0,2,0],2))}}const M1=new v1;class Fc{constructor(t){this._mesh=new Qt(M1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,x1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class y1 extends lo{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Dn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=yc.clone(t.uniforms),this.material=new Dn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Fc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class eu extends lo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class S1 extends lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class E1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ht);this._width=n.width,this._height=n.height,e=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ns}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new y1(_1),this.copyPass.material.blending=Oi,this.clock=new L0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}eu!==void 0&&(o instanceof eu?n=!0:o instanceof S1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Jo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class T1 extends lo{constructor(){super(),this.uniforms=yc.clone(Jo.uniforms),this.material=new E0({name:Jo.name,uniforms:this.uniforms,vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader}),this._fsQuad=new Fc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Me.getTransfer(this._outputColorSpace)===Ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Tu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class b1 extends lo{constructor(t,e,n,s={}){super(),this.pixelSize=t,this.scene=e,this.camera=n,this.normalEdgeStrength=s.normalEdgeStrength||.3,this.depthEdgeStrength=s.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new Ht,this._renderResolution=new Ht,this._normalMaterial=new T0,this._beautyRenderTarget=new Mi,this._beautyRenderTarget.texture.minFilter=fn,this._beautyRenderTarget.texture.magFilter=fn,this._beautyRenderTarget.texture.type=ns,this._beautyRenderTarget.depthTexture=new wc,this._normalRenderTarget=new Mi,this._normalRenderTarget.texture.minFilter=fn,this._normalRenderTarget.texture.magFilter=fn,this._normalRenderTarget.texture.type=ns,this._fsQuad=new Fc(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(t,e){this._resolution.set(t,e),this._renderResolution.set(t/this.pixelSize|0,e/this.pixelSize|0);const{x:n,y:s}=this._renderResolution;this._beautyRenderTarget.setSize(n,s),this._normalRenderTarget.setSize(n,s),this._fsQuad.material.uniforms.resolution.value.set(n,s,1/n,1/s)}setPixelSize(t){this.pixelSize=t,this.setSize(this._resolution.x,this._resolution.y)}render(t,e){const n=this._fsQuad.material.uniforms;n.normalEdgeStrength.value=this.normalEdgeStrength,n.depthEdgeStrength.value=this.depthEdgeStrength,t.setRenderTarget(this._beautyRenderTarget),t.render(this.scene,this.camera);const s=this.scene.overrideMaterial;t.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=s,n.tDiffuse.value=this._beautyRenderTarget.texture,n.tDepth.value=this._beautyRenderTarget.depthTexture,n.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?t.setRenderTarget(null):(t.setRenderTarget(e),this.clear&&t.clear()),this._fsQuad.render(t)}_createPixelatedMaterial(){return new Dn({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Pe},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}}function w1(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ze;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let p=0;p<i.length;++p){const d=i[p].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[p].attributes.position.count}c.setIndex(u)}for(const h in r){const u=nu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let p=0;p<u;++p){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][p]);const g=nu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function nu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Pn(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<e;g++){const x=h.getComponent(p,g);a.setComponent(p+u,g,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function pf(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let b=0,S=a.length;b<S;b++){const y=a[b],T=i.attributes[y];c[y]=new T.constructor(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized);const M=i.morphAttributes[y];M&&(l[y]||(l[y]=[]),M.forEach((C,I)=>{const E=new C.array.constructor(C.count*C.itemSize);l[y][I]=new C.constructor(E,C.itemSize,C.normalized)}))}const d=t*.5,g=Math.log10(1/t),x=Math.pow(10,g),m=d*x;for(let b=0;b<r;b++){const S=n?n.getX(b):b;let y="";for(let T=0,M=a.length;T<M;T++){const C=a[T],I=i.getAttribute(C),E=I.itemSize;for(let w=0;w<E;w++)y+=`${~~(I[u[w]](S)*x+m)},`}if(y in e)h.push(e[y]);else{for(let T=0,M=a.length;T<M;T++){const C=a[T],I=i.getAttribute(C),E=i.morphAttributes[C],w=I.itemSize,G=c[C],N=l[C];for(let L=0;L<w;L++){const Y=u[L],Q=p[L];if(G[Q](o,I[Y](S)),E)for(let F=0,P=E.length;F<P;F++)N[F][Q](o,E[F][Y](S))}}e[y]=o,h.push(o),o++}}const f=i.clone();for(const b in i.attributes){const S=c[b];if(f.setAttribute(b,new S.constructor(S.array.slice(0,o*S.itemSize),S.itemSize,S.normalized)),b in l)for(let y=0;y<l[b].length;y++){const T=l[b][y];f.morphAttributes[b][y]=new T.constructor(T.array.slice(0,o*T.itemSize),T.itemSize,T.normalized)}}return f.setIndex(h),f}function A1(i,t,e){const n=Math.sin(i*127.1+t*311.7+e*74.7)*43758.5453;return n-Math.floor(n)}const aa=i=>i*i*(3-2*i);function R1(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Math.floor(e),o=aa(i-n),a=aa(t-s),c=aa(e-r);let l=0;for(let h=0;h<2;h++)for(let u=0;u<2;u++)for(let p=0;p<2;p++){const d=(p?o:1-o)*(u?a:1-a)*(h?c:1-c);l+=d*A1(n+p,s+u,r+h)}return l*2-1}function Fi(i,t,e,n=3){let s=0,r=1,o=1,a=0;for(let c=0;c<n;c++)s+=r*R1(i*o,t*o,e*o),a+=r,r*=.5,o*=2.03;return s/a}function ki(i,t){const e=i.attributes.position,n=new q;for(let s=0;s<e.count;s++)n.fromBufferAttribute(e,s),t(n),e.setXYZ(s,n.x,n.y,n.z);return e.needsUpdate=!0,i.computeVertexNormals(),i}function Wt(i,t,e){const n=new xi(1,t*2,t),s=pf(n);return n.dispose(),s.scale(i[0],i[1],i[2]),e?ki(s,e):s}const Qi=new q;function Ee(i,t,e,n){const s=Math.hypot(i.x-t[0],i.y-t[1],i.z-t[2]);if(s>=e)return;const r=aa(1-s/e)*n,o=i.length()||1;i.multiplyScalar(1-r/o)}function ke(i,t,e,n){Ee(i,t,e,-n)}function mr(i,t,e,n,s){Qi.set(e[0]-t[0],e[1]-t[1],e[2]-t[2]);const r=Qi.lengthSq()||1,o=Math.max(0,Math.min(1,((i.x-t[0])*Qi.x+(i.y-t[1])*Qi.y+(i.z-t[2])*Qi.z)/r));ke(i,[t[0]+Qi.x*o,t[1]+Qi.y*o,t[2]+Qi.z*o],n,s)}function be(i,t,e,n=0){const s=i.length()||1;i.multiplyScalar(1+Fi(i.x*t+n,i.y*t+n,i.z*t+n,3)*e/s)}function ie(i,t,e,n={}){const{bend:s=0,lean:r=0,rough:o=.06,seed:a=0,rings:c=10,radial:l=11}=n,h=pf(new oi(1,1,i,l,c));return ki(h,u=>{const p=u.y/i+.5,d=e+(t-e)*p,g=1+Fi(u.x*22+a,u.y*22+a,u.z*22+a,2)*o;u.x*=d*g,u.z*=d*g,u.x+=s*Math.sin(p*Math.PI)+r*(1-p)}),h.translate(0,-i/2,0),h}function Ui(i,t,e,n=[9,12]){const s=new qn(i,t,n[0],n[1]);return e?ki(s,e):s}function _e(i,t,e=14){const n=new Ju(i.map(s=>new q(s[0],s[1],s[2])));return new Lc(n,e,t,5,!1)}function Gt(i){const t=w1(i,!1);for(const e of i)e.dispose();return t??new Ze}function xt(i,t,e=[0,0,0]){return e[0]&&i.rotateX(e[0]),e[1]&&i.rotateY(e[1]),e[2]&&i.rotateZ(e[2]),i.translate(t[0],t[1],t[2]),i}function Fs(i){let t=i;return()=>(t=(t*1103515245+12345)%2147483648,t/2147483648)}function xa(i,t,e){if(typeof document>"u")return null;const n=document.createElement("canvas");n.width=i,n.height=i;const s=n.getContext("2d");if(!s)return null;e(s,i,Fs(t));const r=new bc(n);return r.wrapS=Is,r.wrapT=Is,r.colorSpace=bn,r}function co(i){if(!i)return null;const t=i.clone();return t.colorSpace=Ni,t.needsUpdate=!0,t}function ao(i,t,e,n,s,r){const o=i.createRadialGradient(t,e,0,t,e,n);o.addColorStop(0,s),o.addColorStop(1,"transparent"),i.globalAlpha=r,i.fillStyle=o,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.fill(),i.globalAlpha=1}function iu(i,t,e,n,s,r,o,a,c){i.globalAlpha=a,i.strokeStyle=o,i.lineCap="round";let l=t,h=e,u=s;const p=6+Math.floor(c()*5);for(let d=0;d<p;d++){const g=n/p;u+=(c()-.5)*1.1;const x=l+Math.cos(u)*g,m=h+Math.sin(u)*g;i.lineWidth=r*(1-d/p)+.3,i.beginPath(),i.moveTo(l,h),i.lineTo(x,m),i.stroke(),l=x,h=m}i.globalAlpha=1}function va(i,t,e,n){if(!(n<=0)){for(let s=0;s<Math.round(7*n);s++){const r=e()*t,o=e()*t,a=t*(.03+e()*.1)*(.5+n);i.globalAlpha=.45+e()*.45,i.fillStyle=e()<.5?"#3a0604":"#570c08",i.beginPath();for(let c=0;c<=20;c++){const l=c/20*Math.PI*2,h=a*(.55+e()*.55);i.lineTo(r+Math.cos(l)*h,o+Math.sin(l)*h)}i.fill();for(let c=0;c<2+Math.floor(e()*4);c++){const l=r+(e()-.5)*a*1.5,h=a*(.7+e()*2.6),u=2+e()*5;i.globalAlpha=.4+e()*.45,i.fillRect(l,o,u,h),i.beginPath(),i.arc(l+u/2,o+h,u*.8,0,Math.PI*2),i.fill()}}for(let s=0;s<Math.round(420*n);s++)i.globalAlpha=.25+e()*.6,i.fillStyle=e()<.6?"#430705":"#25100c",i.beginPath(),i.arc(e()*t,e()*t,.8+e()*3.4,0,Math.PI*2),i.fill();i.globalAlpha=1}}function gr(i,t){const e=[];for(const[n,s,r]of i){const o=.025+t()*.075;e.push(_e([[n,s,r],[n+(t()-.5)*.012,s-o*.6,r+(t()-.5)*.008],[n,s-o,r]],.0035,5)),e.push(xt(Wt([.006,.01,.006],6),[n,s-o-.005,r]))}return Gt(e)}function oc(i,t,e,n,s,r,o,a,c,l=2){i.globalAlpha=a,i.strokeStyle=o,i.lineCap="round";let h=t,u=e,p=s;const d=5+Math.floor(c()*6);for(let g=0;g<d;g++){const x=n/d;p+=(c()-.5)*.7;const m=h+Math.cos(p)*x,f=u+Math.sin(p)*x;i.lineWidth=Math.max(.4,r*(1-g/d)),i.beginPath(),i.moveTo(h,u),i.lineTo(m,f),i.stroke(),l>0&&c()<.35&&(oc(i,m,f,n*.45,p+(c()<.5?-1:1)*(.5+c()),r*.6,o,a*.85,c,l-1),i.globalAlpha=a,i.strokeStyle=o),h=m,u=f}i.globalAlpha=1}function C1(i,t=31,e=0){return xa(512,t,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,s);for(let o=0;o<20;o++)ao(n,r()*s,r()*s,40+r()*130,["#b9a878","#9a8f74","#c7b9a0"][Math.floor(r()*3)],.12+r()*.2);for(let o=0;o<80;o++)oc(n,r()*s,r()*s,25+r()*65,r()*Math.PI*2,1,"#8d8271",.45,r,1);for(let o=0;o<8;o++)oc(n,r()*s,r()*s,120+r()*190,r()*Math.PI*2,2.6,"#3b352c",.8,r,3);for(let o=0;o<16;o++){const a=r()*s,c=r()*s,l=4+r()*16;n.globalAlpha=.5+r()*.4,n.fillStyle="#9c907c",n.beginPath();for(let h=0;h<=9;h++){const u=h/9*Math.PI*2,p=l*(.5+r()*.7);n.lineTo(a+Math.cos(u)*p,c+Math.sin(u)*p)}n.fill()}for(let o=0;o<2600;o++)n.globalAlpha=.05+r()*.2,n.fillStyle=r()<.5?"#4a4438":"#ffffff",n.fillRect(r()*s,r()*s,1,1);n.globalAlpha=1,va(n,s,r,e)})}function P1(i,t=55,e=0){return xa(512,t,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,s);for(let o=0;o<150;o++){const a=r()*s;n.globalAlpha=.15+r()*.4,n.strokeStyle=r()<.5?"#231a12":"#6b5a42",n.lineWidth=1+r()*5,n.beginPath(),n.moveTo(a,0);for(let c=0;c<=s;c+=32)n.lineTo(a+Math.sin(c/s*6+o)*7,c);n.stroke()}n.globalAlpha=1;for(let o=0;o<9;o++){const a=r()*s,c=r()*s;for(let l=26;l>2;l-=4)n.globalAlpha=.25,n.strokeStyle="#1d150e",n.lineWidth=2,n.beginPath(),n.ellipse(a,c,l,l*.6,.4,0,Math.PI*2),n.stroke()}n.globalAlpha=1;for(let o=0;o<26;o++)ao(n,r()*s,r()*s,20+r()*60,["#2f3a1e","#44502a","#1d2413"][Math.floor(r()*3)],.25+r()*.35);va(n,s,r,e)})}function Oc(i,t=7,e=0){return xa(512,t,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,s);for(let o=0;o<26;o++){const a=["#3f2a3a","#4a4327","#2f3a35","#52332c"][Math.floor(r()*4)];ao(n,r()*s,r()*s,30+r()*90,a,.18+r()*.22)}for(let o=0;o<40;o++)iu(n,r()*s,r()*s,40+r()*90,r()*Math.PI*2,2.2,"#2b3a44",.16+r()*.14,r);for(let o=0;o<5200;o++){n.fillStyle=r()<.5?"#2b2b28":"#a9a99a",n.globalAlpha=.05+r()*.22;const a=r()<.9?1:2;n.fillRect(r()*s,r()*s,a,a)}n.globalAlpha=1;for(let o=0;o<14;o++)iu(n,r()*s,r()*s,30+r()*60,r()*Math.PI*2,1.4,"#42211d",.4,r);va(n,s,r,e)})}function Ma(i,t=21,e=.4){return xa(512,t,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,s);for(let o=0;o<260;o++)n.globalAlpha=.05+r()*.08,n.fillStyle=r()<.5?"#ffffff":"#5d5849",n.fillRect(0,r()*s,s,1);n.globalAlpha=1;for(let o=0;o<22;o++)ao(n,r()*s,r()*s,40+r()*110,["#6b5a33","#4a3b22","#7a6a4a"][Math.floor(r()*3)],.2+r()*.25);for(let o=0;o<6;o++)ao(n,r()*s,r()*s,26+r()*70,"#3a0806",.3+r()*.3);n.globalAlpha=1,va(n,s,r,e)})}const da=-60;function ho(i){const t=new Map;function e(r,o=!1){const a=`${r}-${o}`;return t.has(a)||t.set(a,i(o?new Yn({color:r}):new Xe({color:r,roughness:.9}))),t.get(a)}const n={box:i(new zn(1,1,1)),cyl:i(new oi(.5,.5,1,10)),cone:i(new oi(.5*.45,.5,1,12)),ball:i(new xi(1,16,12))};function s(r,o,a,c,l,h=!1){const u=new Qt(r,e(o,h));return u.position.set(c[0],c[1],c[2]),u.scale.set(l[0],l[1],l[2]),a.add(u),u}return{box:(r,o,a,c)=>s(n.box,o,r,c,a),cyl:(r,o,a,c,l)=>s(n.cyl,o,r,l,[a*2,c,a*2]),cone:(r,o,a,c,l)=>s(n.cone,o,r,l,[a*2,c,a*2]),ball:(r,o,a,c,l=!1)=>s(n.ball,o,r,c,a,l),pivot(r,o){const a=new de;return a.position.set(o[0],o[1],o[2]),r.add(a),a}}}function uo(i,t,e,n,s,r=()=>{},o){const{root:a}=i;a.position.y=da,a.userData.passThrough=!0;const c=i.torso?.rotation.x??0,l=()=>{i.body.position.set(0,0,0),i.body.rotation.set(0,0,0),i.head.rotation.set(0,0,0);for(const h of i.arms)h.rotation.set(0,0,0);for(const h of i.legs??[])h.rotation.set(0,0,0);i.torso?.rotation.set(c,0,0)};return{group:a,head:i.head,headY:t,reach:e,place(h,u,p,d){a.position.set(h,u,p),a.rotation.set(0,d,0)},face(h,u){a.rotation.y=Math.atan2(h-a.position.x,u-a.position.z)},pose(h){l(),(n[h]??(h==="kneel"?D1:n.stand))(i)},scream(h){s(i,h)},eyes:r,tick:o,hide(){a.position.set(0,da,0),a.rotation.set(0,0,0)}}}function D1(i){i.body.position.y=-.5,i.body.rotation.x=.38,i.head.rotation.set(.55,0,0),i.arms[0].rotation.set(-.35,0,-.08),i.arms[1].rotation.set(-.35,0,.08)}const Ue={hang(i,t=.08){i.arms[0].rotation.z=-t,i.arms[1].rotation.z=t},up(i){i.arms[0].rotation.set(-2.7,0,-.35),i.arms[1].rotation.set(-2.5,0,.3)},onDoor(i){i.arms[0].rotation.set(-1.45,0,.12),i.arms[1].rotation.set(-1.7,0,-.1)},reach(i){i.arms[0].rotation.set(-1.35,0,-.35),i.arms[1].rotation.set(-1.35,0,.35)}};function L1(i,t){const e=ho(t),n=new de,s=e.pivot(n,[0,0,0]),r=Oc("#9a9d90",7,.55),o=Ma("#b3ab96",21,1),a=Fs(17);function c(O,$,Pt,gt,At,W){const U=(Pt===1?$:$?.clone())??null;U&&U!==$&&(U.repeat.set(Pt,Pt),U.needsUpdate=!0),U&&t(U);const v=co(U);return v&&t(v),t(new Xe({color:O,map:U,bumpMap:v,bumpScale:gt,roughness:At,side:W??Zn}))}const l=(O,$,Pt=0)=>t(new Xe({color:O,roughness:$,metalness:Pt})),h=c("#ffffff",r,1,.5,.84),u=c("#f0f0ea",r,2,.6,.88),p=c("#ffffff",o,1,.7,.95,gn),d=c("#4a4a54",o,2,.7,1,gn),g=l("#080505",1),x=l("#cfc4a4",.55),m=l("#98a1a6",.3,.6),f=l("#17151a",.8),b=l("#46100c",.35),S=l("#2a0b09",.25),y=l("#241a18",.45),T=l("#b3ac93",.25);function M(O,$,Pt){const gt=new Qt(t($),Pt);return O.add(gt),gt}const C=[e.pivot(s,[-.1,1.02,0]),e.pivot(s,[.1,1.02,0])];C.forEach((O,$)=>{M(O,ie(.52,.066,.052,{bend:.008,rough:.05,seed:$*3}),d);const Pt=[];for(let At=0;At<6;At++){const W=At/6*Math.PI*2+$,U=.08+At*7%5*.035;Pt.push(xt(Ui(.05,U,v=>{v.z+=Math.sin(v.x*44+At)*.005,v.y<-U/2+.012&&(v.y+=Fi(v.x*30,At,0,2)*.03)},[3,4]),[Math.sin(W)*.054,-.47-U/2,Math.cos(W)*.054],[0,W,0]))}M(O,Gt(Pt),d);const gt=e.pivot(O,[0,-.52,0]);gt.rotation.x=.16,M(gt,Wt([.058,.052,.056],10,At=>{ke(At,[0,.005,.048],.05,.014),be(At,28,.008,$)}),u),M(gt,ie(.46,.042,.028,{rough:.1,seed:5+$}),u),M(gt,xt(Wt([.052,.045,.12],10,At=>{At.y=Math.max(At.y,-.022),Ee(At,[0,.03,-.06],.07,.022),ke(At,[0,.01,.1],.05,.008),be(At,22,.006,2+$)}),[0,-.48,.045]),f)});const I=e.pivot(s,[0,1.02,0]);I.rotation.x=.34;const E=M(I,xt(Wt([.175,.42,.112],18,O=>{Ee(O,[0,.02,.11],.19,.05),Ee(O,[0,-.2,.09],.16,.06);for(let $=0;$<6;$++){const Pt=.19-$*.055;for(const gt of[-1,1])mr(O,[gt*.02,Pt,.105],[gt*.155,Pt-.07,-.02],.017,.03)}for(const $ of[-1,1])mr(O,[$*.02,.3,.09],[$*.145,.325,.005],.026,.024),ke(O,[$*.155,.35,0],.09,.022),ke(O,[$*.115,-.33,.05],.06,.028);mr(O,[0,.28,.12],[0,.02,.12],.026,-.016),be(O,11,.009,4),be(O,34,.003,12)}),[0,.48,0]),u);M(I,Gt([[[0,.52,.108],[0,.34,.118],[0,.16,.115],[0,.02,.095]],[[-.12,.72,.05],[-.06,.62,.1],[0,.52,.108]],[[.12,.72,.05],[.06,.62,.1],[0,.52,.108]]].map(O=>_e(O,.005,16))),S);const G=[];for(let O=0;O<13;O++){const $=O/12,Pt=.54-$*.53,gt=.118-Math.abs($-.35)*.05;for(const At of[-1,1])G.push(_e([[At*.036,Pt+.014,gt-.012],[0,Pt,gt+.005],[-At*.036,Pt-.014,gt-.012]],.0032,6))}M(I,Gt(G),f),M(I,xt(Wt([.018,.075,.02],10),[-.105,.6,.09],[0,0,.25]),g),M(I,Gt([0,1,2].map(O=>xt(ie(.05,.006,.005,{rings:3,radial:6}),[-.105,.665-O*.05,.098],[0,0,1.5]))),x);const N=[];for(const O of[-1,1]){N.push(xt(Ui(.26,.62,$=>{$.z-=($.x/.13)**2*.1,$.z+=Math.sin($.x*26+$.y*9)*.01,$.x*=1-Math.max(0,-$.y-.1)*.25,$.y<-.29&&($.y+=Fi($.x*40,O,0,2)*.06)}),[O*.125,.58,.055],[0,-O*.16,0]));for(let $=0;$<5;$++){const Pt=.24+$*3%4*.1;N.push(xt(Ui(.055,Pt,gt=>{gt.z+=Math.sin(gt.y*22+$)*.012,gt.y<-Pt/2+.02&&(gt.y+=Fi(gt.x*40,$*3,0,2)*.05)},[3,6]),[O*(.055+$*.048),.27-Pt/2,.095-$*.032],[0,0,O*(.04+$*.02)]))}}N.push(xt(Ui(.3,.13,O=>{O.z-=(O.x/.15)**2*.1,O.y+=Math.abs(O.x)*.25}),[0,.86,-.015],[.55,0,0])),M(I,Gt(N),p),M(I,Gt([xt(Ui(.15,.3,O=>{O.z-=(O.x/.075)**2*.05,O.y-=Math.max(0,Fi(O.x*26,3,0,2)+.2)*(O.y<-.1?.12:0),O.x*=1-Math.max(0,-O.y-.06)*1.4}),[0,.66,.125])]),S),M(I,gr([[-.04,.28,.13],[.06,.26,.13],[-.12,.2,.11],[.13,.22,.1],[-.105,.53,.1],[.02,.04,.09]],a),S);const L=[e.pivot(I,[-.27,.84,0]),e.pivot(I,[.27,.84,0])],Y=L.map((O,$)=>{const Pt=$?1:-1;M(O,xt(ie(.48,.07,.055,{rough:.12,seed:$}),[0,-.01,0]),p),M(O,ie(.66,.042,.03,{bend:Pt*.012,rough:.07,seed:2+$}),u);const gt=e.pivot(O,[0,-.66,0]);gt.rotation.x=-.15,M(gt,Wt([.042,.046,.042],10,_=>{ke(_,[0,0,-.038],.045,.012),be(_,30,.008,$)}),u),M(gt,ie(.7,.032,.023,{rough:.07,seed:6+$}),u);const At=e.pivot(gt,[0,-.7,0]);function W(_,D,Z,j,K){const X=[];let et=-.062,vt=j*.5;for(let mt=0;mt<3;mt++){const St=Z*[.44,.33,.23][mt],Xt=ie(St,.0098-mt*.0018,.0085-mt*.0018,{rough:.18,seed:K+mt,rings:3,radial:7});Xt.rotateX(vt),Xt.translate(_,et,D),X.push(Xt),X.push(xt(Wt([.0115,.0095,.0115],5),[_,et,D])),et-=Math.cos(vt)*St,D-=Math.sin(vt)*St,vt+=j}const yt=ie(.024,.0075,5e-4,{rings:2,radial:6});return yt.rotateX(vt-j),yt.translate(_,et,D),{parts:X,nail:yt}}const U=[xt(Wt([.036,.055,.022],12,_=>{Ee(_,[0,-.01,.022],.045,.014),be(_,26,.006,$)}),[0,-.03,0])],v=[];for(let _=0;_<5;_++){const D=(_-2)*.019,{parts:Z,nail:j}=W(D,.004+Math.abs(D)*.3,.26-Math.abs(_-2)*.022,-.22-_*.03,30+_*7+$);U.push(...Z),v.push(j)}return M(At,Gt(U),u),M(At,Gt(v),y),M(gt,xt(ie(.22,.029,.024,{rough:.07,seed:6+$}),[0,-.7,0]),S),M(At,gr([-.038,-.019,0,.019,.038].map(_=>[_,-.3+Math.abs(_)*.5,.05]),a),S),At});M(Y[1],Gt([xt(ki(new zn(.004,.2,.026,1,5,1),O=>{const $=O.y/.2+.5;O.z+=(1-$)*.012,O.x*=.3+$*.9}),[0,-.3,.03])]),m),M(Y[1],xt(new zn(.014,.1,.022),[0,-.14,.03]),f),M(Y[1],gr([[0,-.4,.035]],a),S),M(Y[0],xt(ie(.15,.019,.019,{rings:3}),[0,-.12,.03]),m),M(Y[0],xt(ie(.07,.016,.016,{rings:3}),[0,-.19,.03]),b),M(Y[0],xt(ie(.12,.0022,.0012,{rings:3}),[0,-.27,.03]),m);const Q=e.pivot(I,[0,.9,.02]);Q.rotation.set(.35,0,.42),M(Q,xt(ie(.36,.046,.038,{bend:.012,rough:.06,seed:9}),[0,.36,0]),u),M(Q,Gt([...[-1,1].map(O=>_e([[O*.03,.02,.028],[O*.026,.16,.034],[O*.014,.31,.022]],.007,10)),...[0,1,2,3].map(O=>xt(Wt([.017,.012,.014],7),[0,.07+O*.075,-.032]))]),u),M(Q,Gt([...[-.02,.012,.03].map((O,$)=>_e([[O,.3,.038],[O+.008,.2-$*.03,.045],[O+.004,.08-$*.04,.04]],.005,10))]),S),M(Q,xt(Wt([.022,.018,.012],8),[.01,.13,.038]),g),M(Q,xt(new ri(.019,.005,4,10),[.01,.13,.042],[0,0,0]),m),M(Q,Gt([_e([[.01,.12,.04],[.02,.06,.05],[.03,-.02,.045]],.006,8)]),S);const F=e.pivot(Q,[0,.36,0]),P=e.pivot(F,[0,0,0]);M(P,xt(Wt([.115,.175,.135],22,O=>{O.y>0&&(O.z-=.05*(O.y/.175)**2);const $=Math.max(0,(-O.y-.02)/.15);O.x*=1-.3*$,O.y<-.11&&(O.y=-.11-(-.11-O.y)*.55),O.x<0&&(O.x*=.94),O.x+=.018*(O.y/.175);for(const Pt of[-1,1])Ee(O,[Pt*.05,.03,.105],.058,.05),ke(O,[Pt*.06,.075,.1],.048,.013),Ee(O,[Pt*.105,.055,.015],.07,.022),Ee(O,[Pt*.082,-.055,.07],.062,.03),ke(O,[Pt*.085,-.012,.08],.05,.012);ke(O,[0,.075,.115],.085,.014),Ee(O,[0,-.025,.135],.038,.032),ke(O,[.04,.155,-.02],.075,.012),Ee(O,[.04,.16,-.02],.052,.05),ke(O,[-.1,.085,-.05],.068,.022),be(O,13,.007,3),be(O,40,.0025,9)}),[0,.1,0]),h),M(P,Gt([-1,1].map(O=>xt(Wt([.016,O>0?.046:.03,.03],9,$=>{Ee($,[0,0,.02],.03,.012),be($,40,.006,O)}),[O*.112,.085,-.008],[0,0,O*.2]))),h),M(P,xt(Wt([.04,.03,.04],8),[.04,.245,-.02]),g);const z=.074,rt=[],ht=[],H=[];for(const O of[-1,1]){const $=e.pivot(P,[O*.05,.13,z]);H.push($),M($,Wt([.024,.024,.024],10,At=>be(At,50,.004,O)),T),M($,xt(Wt([.0105,.0105,.008],8),[0,0,.019]),g),rt.push(e.ball($,"#ff8a2a",[.005,.005,.005],[0,0,.027],!0));const Pt=e.ball($,"#fff0cc",[.034,.024,.014],[0,0,.02],!0);Pt.visible=!1,ht.push(Pt);const gt=new Qt(Pt.geometry,t(new Yn({color:"#ff7a1a",transparent:!0,opacity:.28,depthWrite:!1,blending:cl})));gt.scale.copy(Pt.scale).multiply(new q(1.7,1.7,1)),gt.position.z=.025,gt.visible=!1,$.add(gt),ht.push(gt)}M(P,Gt([...[-1,1].map(O=>_e([[O*.05,.1,.105],[O*.057,.055,.1],[O*.052,.005,.088]],.0024,10)),_e([[.012,.045,.116],[.016,.02,.112],[.01,-.005,.1]],.002,8)]),S),M(P,Gt([-1,1].map(O=>xt(Wt([.006,.012,.008],6),[O*.013,.058,.118]))),g),M(P,xt(Wt([.062,.03,.055],10),[0,-.012,.03]),g);const B=(O,$,Pt)=>{const gt=[];for(let At=0;At<O;At++){const W=At/(O-1)-.5;if((At*5+Pt)%7===3)continue;const U=.02+(At*3+Pt)%4*.007,v=ie(U,.0075,.001,{rings:2,radial:6});$&&v.rotateZ(Math.PI),v.rotateZ(W*.5),v.rotateX(($?-1:1)*.15),v.translate(W*.14,0,-W*W*.17),gt.push(v)}return Gt(gt)};M(P,xt(B(11,!1,1),[0,-.004,.088]),x);const st=[],_t=[];for(let O=0;O<10;O++){const $=O/9-.5,Pt=$*.15,gt=.101-$*$*.17;for(const At of[-1,1])st.push(_e([[Pt+At*.012,-.022,gt-.004],[Pt,-.008,gt+.003],[Pt-At*.012,.008,gt-.004]],.0026,5));O%2===0&&_t.push(_e([[Pt,-.004,gt],[Pt+.004,-.02,gt+.004],[Pt-.003,-.036,gt]],.0022,6))}M(P,Gt([_e([[-.076,.004,.052],[-.038,.014,.088],[0,.016,.098],[.038,.014,.088],[.076,.004,.052]],.0075,16),_e([[-.076,-.024,.052],[-.038,-.03,.088],[0,-.032,.098],[.038,-.03,.088],[.076,-.024,.052]],.0075,16)]),h),M(P,Gt([...[-.05,.015,.045].map((O,$)=>_e([[O,-.026,.085-O*O*2],[O+.006,-.06-$*.015,.075],[O+.004,-.1-$*.02,.055]],.0045,8)),xt(Wt([.05,.02,.03],8),[0,-.04,.07])]),S);const Ft=M(P,Gt(st),f),lt=M(P,Gt(_t),f);lt.visible=!1;const ut=M(P,Gt([-.045,.01,.052].map((O,$)=>_e([[O,-.012,.075-O*O*2],[O+.004,-.05-$*.012,.07],[O-.002,-.085-$*.02,.062]],.0016,8))),t(new Xe({color:"#c8c4a8",roughness:.1,transparent:!0,opacity:.55})));ut.visible=!1;const Et=e.pivot(P,[0,.03,-.085]);M(Et,xt(Wt([.084,.058,.085],14,O=>{O.y>0&&(O.y*=.3),ke(O,[0,-.035,.065],.055,.018),Ee(O,[0,-.02,-.055],.06,.02),be(O,24,.007,6)}),[0,-.082,.095]),h),M(Et,Gt([-1,1].map(O=>xt(Wt([.017,.05,.02],8),[O*.07,-.05,.05]))),h),M(Et,xt(B(9,!0,4),[0,-.062,.155]),x),M(Et,xt(Wt([.03,.013,.045],8),[0,-.072,.12]),b);const Lt=new ri(.108,.0065,6,24);Lt.rotateX(Math.PI/2),Lt.scale(1,1,1.22),Lt.rotateZ(-.14),Lt.translate(0,.215,0),M(P,Lt,f),M(P,Gt([xt(new ri(.03,.006,5,14),[.052,.243,.118],[Math.PI/2-1.05,0,.3]),xt(new oi(.028,.028,.005,14),[.052,.243,.116],[Math.PI/2-1.05,0,.3]),xt(new zn(.009,.03,.006),[.052,.228,.102],[.3,0,0])]),m),M(P,xt(Wt([.006,.006,.004],7),[.052,.243,.121]),g);const Ct=M(P,Gt([xt(Ui(.105,.07,O=>{O.z-=(O.x/.052)**2*.022,O.z+=Math.sin(O.y*40)*.005,O.y<-.025&&(O.x*=1.15)},[5,4]),[.078,-.075,.055],[.1,-.85,1]),_e([[.108,.08,-.005],[.115,.02,.03],[.1,-.04,.062]],.0026,8)]),p);let Vt=0;function ue(O,$){Vt=O,Et.rotation.set(O,$*.5,$),Ft.visible=O<.06,lt.visible=O>=.06,ut.visible=O>=.35}function k(O){P.scale.set(O?.94:1,O?1.13:1,O?1.04:1),P.rotation.z=O?.12:0,H[0].scale.setScalar(O?1.45:1),H[0].position.z=z+(O?.016:0),H[1].scale.set(O?.85:1,O?.5:1,1),Ct.visible=!O,ue(O?.62:0,O?.2:0)}const te=O=>$=>{k(!1),O($)};return i.add(n),uo({root:n,body:s,head:F,arms:L,legs:C,torso:I},2.25,1.55,{emerge:te(O=>{O.body.position.y=-1.3,Ue.up(O),O.head.rotation.x=-.5}),wait:te(O=>{Ue.onDoor(O),O.head.rotation.set(.25,0,.35)}),stand:te(O=>{Ue.hang(O,.1),O.arms[1].rotation.x=-.25,O.head.rotation.set(.1,0,-.25)}),reach:te(O=>{Ue.reach(O),O.head.rotation.set(0,0,-.3)}),peek:te(O=>{Ue.hang(O,.05),O.head.rotation.set(-.7,0,.2)}),sit:te(O=>{Ue.hang(O)}),lurk(O){k(!0),O.body.rotation.x=.15,O.arms[0].rotation.set(.6,0,-.05),O.arms[1].rotation.set(.6,0,.05),O.head.rotation.set(-.15,.6,-1.05)}},(O,$)=>{k(!1),Ct.visible=!$,ue($?.95:0,$?-.12:0);for(const Pt of H)Pt.scale.setScalar($?1.25:1);$&&(Ue.reach(O),O.head.rotation.set(-.45,0,-.4))},O=>{for(const $ of ht)$.visible=O;for(const $ of rt)$.visible=!O},O=>{const $=Math.sin(O*1.15);E.scale.set(1+$*.018,1-$*.006,1+$*.03),Et.rotation.x=Vt+Math.sin(O*19)*.005*(1+Vt*5);const Pt=Math.sin(O*.7)+Math.sin(O*1.9)*.4;for(const gt of H)gt.rotation.set(Pt*.08,Pt*.15,0)})}function I1(i,t){const e=ho(t),n=new de,s=e.pivot(n,[0,0,0]),r=C1("#ded6c4",31,.35),o=Ma("#2a6d73",44,.45),a=Fs(93);function c(F,P,z,rt,ht,H){const B=(z===1?P:P?.clone())??null;B&&B!==P&&(B.repeat.set(z,z),B.needsUpdate=!0),B&&t(B);const st=co(B);return st&&t(st),t(new Xe({color:F,map:B,bumpMap:st,bumpScale:rt,roughness:ht,side:H??Zn}))}const l=(F,P,z=0)=>t(new Xe({color:F,roughness:P,metalness:z}));function h(F,P,z){const rt=new Qt(t(P),z);return F.add(rt),rt}const u=c("#ffffff",r,1,.25,.35),p=c("#f4f0e6",r,2,.3,.38),d=c("#ffffff",o,1,.6,.95,gn),g=l("#050404",1),x=l("#33090a",.25),m=l("#141414",.9),f=l("#6e3234",.8),b=l("#0d0d10",.6),S=[e.pivot(s,[-.07,.5,0]),e.pivot(s,[.07,.5,0])];S.forEach((F,P)=>{h(F,ie(.24,.042,.032,{rough:.02,seed:P}),p),h(F,xt(Wt([.045,.045,.045],10),[0,-.25,0]),p),h(F,xt(ie(.2,.034,.028,{rough:.02,seed:3+P}),[0,-.26,0]),p),h(F,xt(Wt([.046,.032,.075],10,z=>{z.y=Math.max(z.y,-.016),ke(z,[0,0,.06],.04,.006)}),[0,-.455,.02]),b),h(F,xt(ie(.12,.038,.036,{rough:.05,seed:7+P}),[0,-.3-P*.05,0]),d)});const y=e.pivot(s,[0,.5,0]);h(y,xt(ie(.08,.045,.06,{rough:.03}),[0,.6,0]),p),h(y,xt(ie(.24,.115,.105,{rough:.04}),[0,.53,0]),d),h(y,ki(new oi(.11,.27,.44,30,8,!0),F=>{const P=F.y/.44+.5,z=Math.atan2(F.z,F.x),rt=1+Math.sin(z*11)*.09*(1-P);F.x*=rt,F.z*=rt,P<.12&&(F.y+=Fi(F.x*18,F.z*18,0,2)*.07)}).translate(0,.12,0),d),h(y,xt(new ri(.095,.018,5,18),[0,.555,0],[Math.PI/2,0,0]),d),h(y,xt(new ri(.115,.016,4,20),[0,.32,0],[Math.PI/2+.12,0,0]),d);const T=[e.pivot(y,[-.13,.52,0]),e.pivot(y,[.13,.52,0])];T.forEach((F,P)=>{h(F,xt(Wt([.04,.04,.04],10),[0,0,0]),p),h(F,ie(.17,.03,.026,{rough:.02,seed:9+P}),p);const z=e.pivot(F,[0,-.17,0]);h(z,xt(Wt([.032,.032,.032],9),[0,0,0]),p),h(z,ie(.16,.026,.022,{rough:.02,seed:12+P}),p);const rt=e.pivot(z,[0,-.16,0]),ht=[xt(Wt([.026,.03,.016],9),[0,-.02,0])];if(P===1)for(let H=0;H<3;H++)ht.push(xt(ie(.035,.008,.006,{rings:2,radial:6}),[(H-1)*.015,-.04,.004]));else ht.push(xt(Wt([.022,.012,.018],8),[0,-.045,0]));h(rt,Gt(ht),p),P===0&&h(rt,xt(Wt([.019,.016,.016],8),[0,-.05,0]),g)});const M=e.pivot(y,[0,.6,0]),C=e.pivot(M,[0,0,0]);h(C,xt(Wt([.168,.182,.158],22,F=>{ke(F,[0,.085,.1],.11,.012);const P=Math.max(0,(-F.y-.04)/.14);F.x*=1-.35*P,F.z*=1-.25*P,Ee(F,[-.064,.015,.125],.055,.06),Ee(F,[.062,.012,.13],.05,.018),Ee(F,[-.1,.115,.02],.085,.05),Ee(F,[-.07,-.05,.11],.05,.012),be(F,34,.0018,5)}),[0,.16,0]),u),h(C,xt(Wt([.15,.162,.14],14),[0,.16,0]),g),h(C,xt(Wt([.045,.05,.035],10),[-.066,.175,.105]),g),h(C,xt(Wt([.06,.05,.05],10),[-.105,.275,.01]),g);const I=e.pivot(C,[.062,.172,.138]);h(I,xt(new oi(.034,.034,.008,14),[0,0,0],[Math.PI/2,0,0]),l("#08090b",.25));const E=e.ball(I,"#6ff2ff",[.007,.007,.007],[0,0,.007],!0),w=E.scale.clone();h(I,Gt([_e([[-.012,.012,.008],[.012,-.012,.008]],.0025,3),_e([[.012,.012,.008],[-.012,-.012,.008]],.0025,3)]),m),h(C,Gt([_e([[-.066,.15,.115],[-.072,.1,.13],[-.06,.05,.12]],.0022,8)]),m),h(C,Gt([...[-.075,-.055].map((F,P)=>_e([[F,.14,.125],[F-.004,.08-P*.02,.135],[F+.004,.02-P*.03,.115]],.004,8))]),x),h(C,Gt([-1,1].map(F=>xt(Wt([.023,.014,.003],8),[F*.09,.103,.14]))),f),h(C,xt(Wt([.016,.014,.012],8),[0,.13,.155]),u);const G=h(C,xt(Wt([.062,.013,.022],12,F=>{F.y+=(F.x/.062)**2*.016}),[0,.072,.136]),g),N=[];for(let F=0;F<9;F++){const P=F/8-.5,z=P*.108,rt=.078+P*P*.055,ht=.145-P*P*.14;N.push(xt(ie(.012,.006,.003,{rings:2,radial:5}),[z,rt+.007,ht])),N.push(xt(ie(.011,.0055,.003,{rings:2,radial:5}),[z+.006,rt-.018,ht],[0,0,Math.PI]))}const L=h(C,Gt(N),u);h(C,Gt([_e([[-.02,.33,.06],[.01,.26,.12],[-.01,.19,.15],[.02,.12,.15],[.05,.04,.12],[.04,-.01,.08]],.0035,20),_e([[-.105,.2,.1],[-.14,.13,.06],[-.15,.05,.02]],.003,10)]),g);const Y=[];for(let F=0;F<40;F++){const P=.95+F/39*(Math.PI*2-1.9),z=a(),rt=.16+z*.24,ht=Math.sin(P)*.155,H=Math.cos(P)*.14-.01;Y.push(_e([[ht,.31,H],[ht*1.25,.31-rt*.35,H*1.2+(z-.5)*.03],[ht*1.35+(z-.5)*.04,.31-rt*.75,H*1.15],[ht*1.15,.31-rt,H*.95+(z-.5)*.05]],.0045+z*.004,7))}return h(C,Gt(Y),l("#1a120c",.85)),h(C,Gt([xt(new ri(.036,.009,4,12),[.09,.3,.01],[1.3,.5,.5]),xt(new ri(.03,.008,4,12),[.125,.285,-.015],[1.3,.5,-.5])]),d),i.add(n),uo({root:n,body:s,head:M,arms:T,legs:S,torso:y},1.26,.55,{sit(F){F.body.position.y=-.46;for(const P of F.legs)P.rotation.x=-1.5;Ue.hang(F,.3),F.head.rotation.set(.2,0,.7)},stand(F){Ue.hang(F,.15),F.head.rotation.set(0,0,.35)},reach(F){Ue.up(F),F.head.rotation.set(-.8,0,.15)},emerge(F){Ue.hang(F)},wait(F){Ue.hang(F)},peek(F){Ue.hang(F)}},(F,P)=>{G.scale.set(1,P?3.4:1,P?1.6:1),L.visible=!P,P&&(Ue.reach(F),F.head.rotation.set(0,0,0))},F=>{E.scale.copy(w).multiplyScalar(F?3.4:1)},F=>{const P=Math.sin(F*.6)>.985?1:0;C.rotation.z=P*.06,C.position.x=P*.004,E.visible=Math.sin(F*7.3)>-.85})}function U1(i,t){const e=ho(t),n=new de,s=e.pivot(n,[0,0,0]),r=Oc("#a9b0ac",63,.4),o=Ma("#8e8c80",71,.5),a=Fs(211);function c(N,L,Y,Q,F,P){const z=(Y===1?L:L?.clone())??null;z&&z!==L&&(z.repeat.set(Y,Y),z.needsUpdate=!0),z&&t(z);const rt=co(z);return rt&&t(rt),t(new Xe({color:N,map:z,bumpMap:rt,bumpScale:Q,roughness:F,side:P??Zn}))}const l=(N,L,Y=0)=>t(new Xe({color:N,roughness:L,metalness:Y}));function h(N,L,Y){const Q=new Qt(t(L),Y);return N.add(Q),Q}const u=c("#ffffff",r,1,.45,.72),p=c("#f2f4f2",r,2,.5,.75),d=c("#ffffff",o,1,.65,.88,gn),g=l("#050505",1),x=l("#2c0b09",.22),m=l("#1d1a1c",.4),f=l("#050506",.42),b=e.pivot(s,[0,0,0]);h(b,ki(new oi(.1,.37,1.4,30,12,!0),N=>{const L=N.y/1.4+.5,Y=Math.atan2(N.z,N.x),Q=1-Math.max(0,L-.55)*.5,F=1+Math.sin(Y*13+L*4)*(.02+(1-L)*.06);N.x*=F*Q,N.z*=F*Q,L<.1&&(N.y+=Fi(N.x*14,N.z*14,0,2)*.12,N.z<0&&(N.z*=1.35))}).translate(0,.7,0),d),h(b,gr([[-.2,.06,.24],[.1,.04,.3],[.26,.05,-.1],[-.28,.03,-.14]],a),x),h(b,xt(Wt([.17,.26,.11],16,N=>{for(const L of[-1,1])mr(N,[L*.02,.16,.08],[L*.14,.18,.005],.03,.02),ke(N,[L*.15,.2,0],.08,.018);Ee(N,[0,.02,.1],.14,.03),be(N,14,.008,2)}),[0,1.32,0]),p),h(b,Gt([-1,1].map(N=>_e([[N*.055,1.38,.075],[N*(.13+(N<0?.03:0)),1.44-(N<0?.07:0),.03],[N*.1,1.38,-.06]],.012,8))),d);const S=[e.pivot(b,[-.195,1.46,0]),e.pivot(b,[.195,1.46,0])];S.forEach((N,L)=>{h(N,ie(.5,.034,.026,{bend:(L?1:-1)*.01,rough:.07,seed:L}),p);const Y=e.pivot(N,[0,-.5,0]);Y.rotation.x=-.12,h(Y,Gt([xt(Wt([.032,.036,.032],9,z=>be(z,28,.007,L)),[0,0,0]),xt(ie(.5,.026,.02,{rough:.07,seed:4+L}),[0,0,0])]),p);const Q=e.pivot(Y,[0,-.5,0]),F=[xt(Wt([.028,.042,.017],10,z=>Ee(z,[0,-.01,.017],.035,.01)),[0,-.025,0])],P=[];for(let z=0;z<5;z++){const rt=(z-2)*.014,ht=.17-Math.abs(z-2)*.018;let H=-.05,B=.004,st=-.1;for(let Ft=0;Ft<2;Ft++){const lt=ie(ht*(Ft?.45:.55),.0075-Ft*.0015,.0065-Ft*.0015,{rough:.16,seed:20+z,rings:3,radial:7});lt.rotateX(st),lt.translate(rt,H,B),F.push(lt),F.push(xt(Wt([.009,.008,.009],5),[rt,H,B])),H-=Math.cos(st)*ht*(Ft?.45:.55),B-=Math.sin(st)*ht*(Ft?.45:.55),st-=.22}const _t=ie(.026,.006,5e-4,{rings:2,radial:6});_t.rotateX(st+.22),_t.translate(rt,H,B),P.push(_t)}h(Q,Gt(F),p),h(Q,Gt(P),m)}),h(b,Gt([xt(ie(.14,.038,.034,{rough:.05,seed:9}),[0,1.62,0]),...[0,1,2].map(N=>xt(Wt([.015,.011,.012],7),[.004*N,1.52+N*.035,-.03]))]),p),h(b,xt(new ri(.037,.005,4,14),[0,1.55,0],[Math.PI/2+.2,0,0]),x);const y=e.pivot(b,[0,1.62,0]),T=e.pivot(y,[0,0,0]);h(T,xt(Wt([.105,.138,.115],20,N=>{for(const L of[-1,1])Ee(N,[L*.045,.03,.095],.05,.05),Ee(N,[L*.078,-.03,.07],.055,.022),ke(N,[L*.08,.055,.03],.05,.01);ke(N,[0,-.085,.07],.07,.018),Ee(N,[0,-.02,.115],.03,.022),be(N,16,.006,7),be(N,44,.002,3)}),[0,.05,0]),u),h(T,Gt([-1,1].map(N=>xt(Wt([.03,.028,.02],9),[N*.045,.08,.088]))),g);const M=e.ball(T,"#c8ff6a",[.008,.008,.008],[.045,.08,.105],!0),C=M.scale.clone(),I=h(T,xt(Wt([.032,.012,.022],10),[0,-.035,.1]),g);h(T,Gt([0,1,2,3,4,5].map(N=>{const L=N/5-.5;return xt(ie(.012,.005,.003,{rings:2,radial:5}),[L*.05,-.026,.104-L*L*.06])})),l("#b8b09a",.5)),h(T,Gt([...[-.045,.045].map(N=>_e([[N,.06,.1],[N+.004,.01,.1],[N,-.05,.085]],.0035,8)),_e([[.01,-.042,.098],[.014,-.08,.085],[.008,-.13,.06]],.0045,8)]),x);const E=(N,L,Y,Q,F,P)=>{const z=Fs(P),rt=[];for(let ht=0;ht<N;ht++){const H=L+ht/(N-1)*(Y-L);if(H>.2&&H<.62)continue;const B=z(),st=Q*(.6+B*.8),_t=Math.sin(H)*.108,Ft=Math.cos(H)*.115;rt.push(_e([[_t*.5,.17,Ft*.5],[_t*1.05,.12,Ft*1.05],[_t*1.1+(B-.5)*.02,.04-st*.3,Ft*1.06],[_t*1+(B-.5)*.04,.04-st*.7,Ft*.98+(B-.5)*.03],[_t*.92,.04-st,Ft*.9]],F*(.7+B*.6),9))}return Gt(rt)};h(T,E(34,.9,Math.PI*2-.9,.95,.007,5),f);const w=h(T,E(22,-.95,.95,.62,.0065,11),f);return h(T,xt(Wt([.113,.085,.118],12),[0,.115,-.008]),f),i.add(n),uo({root:n,body:s,head:y,arms:S,torso:b},1.67,1.2,{emerge(N){N.body.position.y=-1.05,Ue.up(N),N.head.rotation.x=-.3},wait(N){Ue.onDoor(N),N.head.rotation.set(.35,0,0)},stand(N){Ue.hang(N,.05),N.head.rotation.set(.1,0,.25)},reach(N){Ue.reach(N)},peek(N){Ue.hang(N)},sit(N){Ue.hang(N)}},(N,L)=>{I.scale.set(L?1.4:1,L?3.8:1,L?1.4:1),I.position.y=L?-.05:-.035,w.visible=!L,L&&(Ue.reach(N),N.head.rotation.set(-.25,0,.1))},N=>{M.scale.copy(C).multiplyScalar(N?3:1)},N=>{T.rotation.z=Math.sin(N*.45)*.05+.02,T.position.x=Math.sin(N*.45)*.008})}function N1(i,t){const e=ho(t),n=new de,s=e.pivot(n,[0,0,0]),r=P1("#4e3b29",55,.35),o=Ma("#9b8560",77,.9),a=Fs(307);function c(P,z,rt,ht,H,B){const st=(rt===1?z:z?.clone())??null;st&&st!==z&&(st.repeat.set(rt,rt),st.needsUpdate=!0),st&&t(st);const _t=co(st);return _t&&t(_t),t(new Xe({color:P,map:st,bumpMap:_t,bumpScale:ht,roughness:H,side:B??Zn}))}const l=(P,z)=>t(new Xe({color:P,roughness:z}));function h(P,z,rt){const ht=new Qt(t(z),rt);return P.add(ht),ht}const u=c("#ffffff",r,1,1.1,.95),p=c("#e8e2d8",r,3,1.1,.95),d=c("#ffffff",o,1,.9,1,gn),g=l("#2b3a1d",1),x=l("#040403",1),m=l("#c9b48a",.7),f=l("#171008",.9),b=l("#33090a",.3);function S(P,z,rt,ht,H,B,st){const _t=Math.sin(rt)*Math.cos(ht),Ft=Math.sin(ht),lt=Math.cos(rt)*Math.cos(ht),ut=[z[0]+_t*H,z[1]+Ft*H-H*.1,z[2]+lt*H];if(P.push(_e([z,[z[0]+_t*H*.5,z[1]+Ft*H*.5-H*.03,z[2]+lt*H*.5],ut],B,5)),st<=0)return ut;for(const Et of[-1,1])S(P,ut,rt+Et*(.5+a()*.5),ht+(a()-.35)*.7,H*(.52+a()*.22),B*.62,st-1);return ut}const y=[e.pivot(s,[-.13,1,0]),e.pivot(s,[.13,1,0])];y.forEach((P,z)=>{h(P,ki(ie(1,.085,.075,{bend:z?-.03:.03,rough:.14,seed:z*5,rings:14,radial:14}),ht=>{const H=Math.atan2(ht.z,ht.x),B=1+Math.sin(H*7+ht.y*5)*.16;ht.x*=B,ht.z*=B}),u);const rt=[];for(let ht=0;ht<6;ht++){const H=ht/6*Math.PI*2+z;S(rt,[0,-.92,0],H,-.55-a()*.5,.26+a()*.12,.022,1)}h(P,Gt(rt),p)});const T=e.pivot(s,[0,1,0]);T.rotation.x=.28,h(T,xt(ki(ie(.98,.2,.145,{rough:.1,seed:3,rings:16,radial:18}),P=>{const rt=Math.atan2(P.z,P.x)+P.y*1.4,ht=1+Math.sin(rt*5)*.2+Math.sin(rt*13)*.06;P.x*=ht,P.z*=ht}),[0,.98,0]),u),h(T,Gt([xt(Wt([.09,.08,.05],12,P=>{Ee(P,[0,0,.05],.05,.03),be(P,30,.01,4)}),[.07,.62,.13]),xt(Wt([.06,.07,.04],12,P=>{Ee(P,[0,0,.04],.04,.025)}),[-.1,.32,.11])]),u),h(T,xt(Wt([.05,.045,.02],10),[.07,.62,.15]),x),h(T,Gt([...[0,1,2,3,4].map(P=>xt(Wt([.07+a()*.05,.05,.03],9,z=>be(z,40,.012,P)),[-.1+a()*.16,.2+P*.16,-.12-a()*.04]))]),g);const M=[];for(let P=0;P<18;P++){const z=-1.5+P/17*3,rt=.35+a()*.45;M.push(xt(Ui(.05+a()*.03,rt,ht=>{ht.z+=Math.sin(ht.y*26)*.012,ht.y<-rt/2+.03&&(ht.y+=Fi(ht.x*40,P,0,2)*.09)},[3,7]),[Math.sin(z)*.24,.87-rt/2,Math.cos(z)*.17-.02],[0,z,0]))}h(T,Gt(M),g);const C=[e.pivot(T,[-.24,.85,0]),e.pivot(T,[.24,.85,0])];C.forEach((P,z)=>{h(P,ie(.66,.06,.045,{bend:(z?1:-1)*.03,rough:.16,seed:7+z,rings:10}),u);const ht=e.pivot(P,[0,-.66,0]);ht.rotation.x=-.15,h(ht,Gt([xt(Wt([.055,.05,.055],10,st=>be(st,24,.014,z)),[0,0,0]),xt(ie(.66,.045,.032,{rough:.18,seed:11+z,rings:10}),[0,0,0])]),u);const H=e.pivot(ht,[0,-.66,0]),B=[];for(let st=0;st<5;st++)S(B,[(st-2)*.022,-.02,.01],(st-2)*.45,-1.15-a()*.3,.17+a()*.06,.012,2);h(H,Gt(B),p),h(H,gr([[-.03,-.3,.02],[.02,-.34,.03],[.05,-.28,0]],a),b),h(ht,Gt([0,1,2].map(st=>_e([[(st-1)*.035,-.3,.04],[(st-1)*.04,-.45-st*.06,.05],[(st-1)*.03,-.6-st*.1,.03]],.008,6))),g)});const I=e.pivot(T,[0,.95,.04]);h(I,xt(ie(.1,.07,.055,{rough:.12,seed:15}),[0,.09,0]),u);const E=e.pivot(I,[0,.08,0]);h(E,xt(Wt([.175,.2,.165],18,P=>{ke(P,[.07,.06,.1],.08,.022),ke(P,[-.09,-.02,.06],.07,.018),Ee(P,[.062,.05,.135],.055,.045),Ee(P,[-.06,.05,.135],.05,.03);const z=Math.max(0,(-P.y-.06)/.14);P.x*=1-.45*z,P.z*=1-.45*z,be(P,12,.012,2),be(P,34,.004,8)}),[0,.17,0]),d),h(E,xt(new ri(.075,.012,5,16),[0,.03,0],[Math.PI/2-.1,0,.1]),f),h(E,Gt([xt(Ui(.1,.13,P=>P.z+=Math.sin(P.y*40)*.01),[.06,.4,.02],[.3,.4,.5]),xt(Ui(.08,.1,P=>P.z+=Math.sin(P.y*40)*.01),[-.05,.39,-.01],[-.2,-.5,-.6])]),d),h(E,xt(Wt([.045,.04,.03],10),[.062,.215,.118]),x);const w=e.ball(E,"#ff2a1f",[.013,.013,.013],[.062,.215,.14],!0),G=w.scale.clone();h(E,Gt([...[-1,1].map(P=>_e([[-.085,.215+P*.035,.125],[-.06,.215,.145],[-.035,.215-P*.035,.125]],.004,6))]),f);const N=h(E,xt(Wt([.085,.03,.035],12),[0,.1,.13]),x),L=[];for(let P=0;P<9;P++){const z=P/8-.5,rt=.15-z*z*.18;L.push(xt(ie(.045+a()*.02,.009,.001,{rings:2,radial:5}),[z*.15,.13,rt],[0,0,z*.4])),L.push(xt(ie(.035+a()*.02,.008,.001,{rings:2,radial:5}),[z*.15+.01,.07,rt],[0,0,Math.PI+z*.4]))}h(E,Gt(L),m),h(E,Gt([-.05,.02,.06].map((P,z)=>_e([[P,.085,.14-P*P*2],[P+.008,.03-z*.015,.125],[P,-.02-z*.02,.09]],.005,8))),b),h(E,Gt([0,1,2,3,4,5].map(P=>_e([[-.13+P*.05,.31,.11],[-.11+P*.05,.345,.1]],.0035,4))),f);const Y=new un("#ff2a1f",.5,2.8,2);Y.position.set(.062,.215,.6),E.add(Y);const Q=[];for(const P of[-1,1])S(Q,[P*.1,.34,0],P*.5,1.15,.3,.018,2);return h(E,Gt(Q),p),i.add(n),uo({root:n,body:s,head:E,arms:C,legs:y,torso:T},2.2,1.7,{emerge(P){P.body.position.y=-1.55,Ue.up(P),P.head.rotation.x=-.25},wait(P){Ue.onDoor(P),P.head.rotation.set(.1,0,.3)},stand(P){Ue.hang(P,.2)},peek(P){Ue.hang(P,.1),P.head.rotation.set(0,0,.5)},reach(P){Ue.reach(P)},sit(P){Ue.hang(P)}},(P,z)=>{N.scale.set(1,z?2.6:1,z?1.3:1),z&&Ue.reach(P)},P=>{w.scale.copy(G).multiplyScalar(P?2.6:1)},P=>{E.rotation.y=Math.sin(P*.31)*.06,Y.intensity=.5+Math.sin(P*2.1)*.12})}function F1(i,t){const e=ho(t),n=new de,s=e.pivot(n,[0,0,0]),r=Oc("#c2bbaa",131,.75),o=Fs(401);function a(H,B,st,_t){const Ft=(B===1?r:r?.clone())??null;Ft&&Ft!==r&&(Ft.repeat.set(B,B),Ft.needsUpdate=!0),Ft&&t(Ft);const lt=co(Ft);return lt&&t(lt),t(new Xe({color:H,map:Ft,bumpMap:lt,bumpScale:st,roughness:_t}))}const c=(H,B)=>t(new Xe({color:H,roughness:B}));function l(H,B,st){const _t=new Qt(t(B),st);return H.add(_t),_t}const h=a("#ffffff",1,.55,.62),u=a("#f6f2e8",2,.6,.66),p=c("#030303",1),d=c("#4e0b09",.3),g=c("#2d0908",.22),x=c("#d8ceb2",.55),m=c("#1c1812",.45),f=c("#0a0806",.5);function b(H,B,st,_t,Ft){const lt=[xt(Wt([B*1.1,st*.22,B*.6],10,Et=>be(Et,30,.008,Ft)),[0,-st*.13,0])],ut=[];for(let Et=0;Et<5;Et++){const Lt=(Et-2)*B*.45;let Ct=-st*.22,Vt=.004,ue=_t*.5;for(let te=0;te<3;te++){const Kt=st*[.42,.32,.24][te],O=ie(Kt,B*.2-te*.002,B*.17-te*.002,{rough:.18,seed:Ft+Et+te,rings:3,radial:7});O.rotateX(ue),O.translate(Lt,Ct,Vt),lt.push(O),lt.push(xt(Wt([B*.24,B*.2,B*.24],5),[Lt,Ct,Vt])),Ct-=Math.cos(ue)*Kt,Vt-=Math.sin(ue)*Kt,ue+=_t}const k=ie(st*.14,B*.17,8e-4,{rings:2,radial:6});k.rotateX(ue-_t),k.translate(Lt,Ct,Vt),ut.push(k)}l(H,Gt(lt),u),l(H,Gt(ut),m)}const S=[e.pivot(s,[-.13,1.2,0]),e.pivot(s,[.13,1.2,0])];S.forEach((H,B)=>{l(H,ie(.7,.062,.045,{bend:B?-.02:.02,rough:.1,seed:B}),u);const st=e.pivot(H,[0,-.7,0]);st.rotation.set(1.35+B*.1,0,B?-.75:.8),l(st,Gt([xt(Wt([.062,.075,.062],10,ut=>ke(ut,[0,0,.05],.05,.016)),[0,0,0]),xt(ie(.76,.04,.026,{rough:.12,seed:4+B}),[0,0,0])]),u);const _t=e.pivot(st,[0,-.76,0]);_t.rotation.x=-.75;const Ft=[],lt=[];for(let ut=0;ut<4;ut++){const Et=(ut-1.5)*.03,Lt=ie(.2,.011,.008,{rough:.2,seed:9+ut,rings:3,radial:7});Lt.rotateX(-1.2),Lt.rotateZ((ut-1.5)*.18),Lt.translate(Et,0,0),Ft.push(Lt);const Ct=ie(.055,.008,.001,{rings:2,radial:6});Ct.rotateX(-1.2),Ct.rotateZ((ut-1.5)*.18),Ct.translate(Et-(ut-1.5)*.034,-.075,.19),lt.push(Ct)}l(_t,Gt(Ft),u),l(_t,Gt(lt),m)});const y=e.pivot(s,[0,1.2,0]);y.rotation.set(-.22,.55,.14),l(y,xt(Wt([.16,.5,.12],20,H=>{const B=Math.exp(-((H.y+.18)**2)/.012);H.x*=1-.62*B,H.z*=1-.62*B;for(let st=0;st<10;st++)ke(H,[0,-.3+st*.075,-.105-Math.sin(st/3)*.015],.03,.034);for(let st=0;st<6;st++){const _t=.08+st*.062;for(const Ft of[-1,1])mr(H,[Ft*.02,_t,.105],[Ft*.145,_t-.05,-.02],.015,.034)}Ee(H,[0,.12,.11],.12,.035),ke(H,[-.14,.42,0],.09,.025),ke(H,[.12,.3,-.02],.08,.02),be(H,13,.01,6),be(H,38,.003,14)}),[0,.52,0]),u);const T=[[.06,.4,.22,.3],[-.09,.72,.16,-.5],[.1,.86,.12,.8],[-.02,.26,.14,.15]];l(y,Gt(T.map(([H,B,st,_t])=>xt(Wt([.016,st/2,.02],9),[H,B,.105],[0,0,_t]))),d),l(y,gr(T.map(([H,B,st])=>[H,B-st/2,.12]),o),g);const M=[e.pivot(y,[-.2,.92,0]),e.pivot(y,[.18,.78,.02])];l(M[0],xt(Wt([.075,.065,.075],10,H=>be(H,26,.012,1)),[0,.02,0]),u),l(M[1],xt(Wt([.06,.055,.06],10,H=>be(H,26,.012,2)),[0,.01,0]),u),l(M[0],ie(.82,.042,.03,{bend:-.02,rough:.09,seed:21}),u),l(M[1],ie(.62,.038,.028,{bend:.02,rough:.09,seed:22}),u);const C=[e.pivot(M[0],[0,-.82,0]),e.pivot(M[1],[0,-.62,0])];C.forEach((H,B)=>{l(H,Gt([xt(Wt([.04,.045,.04],9,st=>be(st,28,.01,B)),[0,0,0]),xt(ie(B?.6:.86,.03,.022,{rough:.1,seed:25+B}),[0,0,0])]),u)});const I=C[1];l(C[1],xt(ie(.06,.016,.008,{rings:3,radial:7}),[.02,.02,-.03],[0,0,.6]),x),l(C[1],xt(Wt([.03,.025,.025],9),[.015,-.01,-.02]),d),b(e.pivot(C[0],[0,-.86,0]),.045,.34,-.2,40),b(e.pivot(C[1],[0,-.6,0]),.038,.24,-.3,60);const E=e.pivot(y,[-.03,.95,.02]);E.rotation.set(.25,0,1.25),l(E,Gt([xt(ki(ie(.46,.05,.042,{rough:.07,seed:31,rings:12}),H=>{const B=1+Math.sin((H.y+.46)*62)*.09;H.x*=B,H.z*=B}),[0,.46,0])]),u);const w=e.pivot(E,[0,.46,0]);w.rotation.z=.55;const G=e.pivot(w,[0,0,0]);l(G,xt(Wt([.125,.205,.125],22,H=>{const B=Math.max(0,(-H.y-.02)/.19);H.x*=1-.18*B,H.z*=1-.14*B,H.y-=B*.03,Ee(H,[-.05,.06,.095],.075,.07),Ee(H,[.062,-.02,.105],.04,.045),ke(H,[-.05,.12,.085],.06,.016),mr(H,[-.02,.06,.115],[.01,-.16,.1],.03,.018),Ee(H,[.005,-.05,.12],.028,.03);for(const st of[-1,1])Ee(H,[st*.105,.09,.02],.065,.02),Ee(H,[st*.085,-.075,.06],.055,.025);be(H,14,.008,11),be(H,40,.0025,4)}),[0,.08,0]),h),l(G,Gt([xt(Wt([.058,.066,.03],10),[-.048,.14,.088]),xt(Wt([.028,.03,.022],9),[.06,.06,.098])]),p);const N=[e.ball(G,"#f3efe2",[.012,.012,.01],[-.042,.13,.115],!0),e.ball(G,"#f3efe2",[.008,.008,.008],[.06,.06,.12],!0)],L=N.map(H=>H.scale.clone()),Y=l(G,xt(Wt([.018,.1,.022],12),[.005,-.02,.105],[0,0,.12]),p),Q=[];for(let H=0;H<8;H++){const B=-.105+H*.028;for(const st of[-1,1]){const _t=ie(.03+o()*.012,.007,.001,{rings:2,radial:5});_t.rotateZ(st*Math.PI/2),_t.translate(.005+st*.016,B,.112-Math.abs(B)*.12),Q.push(_t)}}l(G,Gt(Q),x),l(G,xt(Wt([.03,.09,.012],10),[.012,-.02,.1],[0,0,.12]),d),l(G,Gt([_e([[.01,-.1,.105],[.016,-.16,.09],[.008,-.22,.06]],.005,8),_e([[-.048,.1,.1],[-.055,.04,.095],[-.045,-.04,.08]],.004,8)]),g);const F=e.pivot(G,[.07,-.14,.04]);F.rotation.z=-.5,l(F,xt(Wt([.055,.03,.05],10,H=>{H.y>0&&(H.y*=.4),be(H,26,.008,3)}),[0,-.03,0]),u);const P=[];for(let H=0;H<14;H++){const B=-1.8+H/13*3.6,st=.3+o()*.25,_t=Math.sin(B)*.11,Ft=Math.cos(B)*.1-.02;P.push(_e([[_t*.5,.25,Ft*.5],[_t,.2,Ft],[_t*1.05,.2-st*.5,Ft*1.02],[_t*.9+(o()-.5)*.04,.2-st,Ft*.9]],.003+o()*.0025,8))}l(G,Gt(P),f),n.scale.setScalar(.98),i.add(n);const z={root:n,body:s,head:w,arms:M,legs:S,torso:y},rt=H=>{H.legs[0].rotation.set(-.6,0,-.36),H.legs[1].rotation.set(-.72,0,.32),H.arms[0].rotation.set(.05,0,-.18),H.arms[1].rotation.set(.15,0,.55),I.rotation.set(.3,0,-2.35)};return uo(z,2.1,.9,{emerge:rt,wait:rt,stand:rt,peek:rt,sit:rt,reach:rt,run:H=>{H.legs[0].rotation.set(-1,0,-.2),H.legs[1].rotation.set(.35,0,.18),H.arms[0].rotation.set(1.1,0,-.5),H.arms[1].rotation.set(.9,0,.45),I.rotation.set(.3,0,-1.2),H.body.rotation.x=.22}},(H,B)=>{Y.scale.set(B?3:1,B?1.3:1,1),F.rotation.z=B?-1.1:-.5},H=>{N.forEach((B,st)=>B.scale.copy(L[st]).multiplyScalar(H?1.8:1))},H=>{if(n.userData.running){const st=H*13,_t=Math.sin(st);S[0].rotation.x=-.4+_t*.95,S[1].rotation.x=-.4-_t*.95,M[0].rotation.x=1-_t*.75,M[1].rotation.x=.8+_t*.75,s.position.y=Math.abs(_t)*.08,s.rotation.z=_t*.06,G.rotation.x=0,G.position.z=0;return}s.position.y=0,s.rotation.z=0;const B=Math.max(0,Math.sin(H*.37)-.95)*20;G.rotation.x=B*.04*Math.sin(H*41),G.position.z=B*.004*Math.sin(H*33)})}function O1(i,t){const e=new de;e.userData.passThrough=!0;const n=t(new Yn({color:"#000000"})),s=t(new Yn({color:"#c77dff",fog:!1})),r=t(new zn(1,1,1)),o=t(new xi(.5,12,8)),a=(p,d,g,x,m,f=[0,0,0])=>{const b=new Qt(p,d);return b.position.set(x[0],x[1],x[2]),b.scale.set(m[0],m[1],m[2]),b.rotation.set(f[0],f[1],f[2]),g.add(b),b},c=new de;e.add(c),a(o,n,c,[0,.45,-.05],[.5,.62,.42],[.5,0,0]),a(o,n,c,[0,.7,.08],[.46,.34,.36]);for(const p of[-1,1])a(r,n,c,[p*.22,.3,.12],[.12,.55,.12],[-.9,0,p*.3]),a(r,n,c,[p*.2,.12,-.05],[.12,.3,.12],[.5,0,0]);for(const p of[-1,1]){const d=new de;d.position.set(p*.22,.78,.12),d.rotation.set(-.35,0,p*-.18),c.add(d),a(r,n,d,[0,.02,.2],[.05,.05,.42]);const g=new de;g.position.set(0,.05,.42),d.add(g);for(let x=0;x<4;x++)a(r,n,g,[(x-1.5)*.028,-.09,.03],[.014,.2,.014],[.2,0,(x-1.5)*.06])}const l=new de;l.position.set(0,.92,.14),c.add(l),a(o,n,l,[0,0,0],[.26,.3,.27]);const h=new Ye;h.position.set(0,.02,.13),l.add(h);for(const p of[-1,1])a(o,s,l,[p*.06,.02,.125],[.05,.028,.02],[0,0,p*-.2]);const u=new un("#b35cff",.8,2.2,1.6);return u.position.set(0,.02,.35),l.add(u),e.scale.setScalar(.9),e.position.y=da,i.add(e),{group:e,eyes:h,place(p,d,g){e.position.set(p,d,g)},face(p,d){e.rotation.y=Math.atan2(p-e.position.x,d-e.position.z)},tick(p){l.rotation.z=Math.sin(p*.4)*.25,l.rotation.x=-.15+Math.sin(p*.23)*.06,u.intensity=.65+Math.sin(p*2.1)*.15},hide(){e.position.set(0,da,0)}}}const ys={pan:0,near:1},B1={tick(){},setTension(){},setHeartbeat(){},setMusicBox(){},setOutside(){},setPower(){},setStatic(){},thunder(){},creak(){},slam(){},appear(){},whisper(){},glassKnock(){},growl(){},screech(){},scream(){},footsteps(){},breath(){},dread(){},itsMe(){},twisted(){},charge(){},nursery(){},jolt(){},vanish(){},newspaper(){},murmur(){},finale(){},kneel(){},fadeOut(){},toll(){},crackle(){},click(){},step(){},dispose(){}},su=[76,79,81,79,76,72,74,76,74,71,72,74,72,69,71,68],ru=[69,72,76,72,69,68,69,71,72,71,69,67,69,64,65,64],ou=[72,76,79,84,0,83,81,0,77,79,0,76,74,0,71,72,0,0,72,76,79,84,0,86,85,0,81,79,0,75,74,0,71,72,0,0],au=[48,43,45,40,41,43,48,48,48,43,49,45,41,43,48,48],sl=[[45,52,57,60],[44,51,56,59],[41,48,53,57],[40,47,52,56]];function z1(){const i=mf();if(!i)return B1;i.state==="suspended"&&i.resume().catch(()=>{});const t=()=>i.currentTime,e=i.createDynamicsCompressor();e.threshold.value=-20,e.knee.value=12,e.ratio.value=5,e.attack.value=.004,e.release.value=.3;const n=i.createGain();n.gain.value=0,n.gain.setTargetAtTime(.9,t(),1.5);const s=i.createBiquadFilter();s.type="lowpass",s.frequency.value=2e4,n.connect(s),s.connect(e),e.connect(i.destination);const r=i.createConvolver(),o=Math.floor(i.sampleRate*3.5),a=i.createBuffer(2,o,i.sampleRate);for(let W=0;W<2;W++){const U=a.getChannelData(W);for(let v=0;v<o;v++)U[v]=(Math.random()*2-1)*(1-v/o)**2.6}r.buffer=a;const c=i.createGain();c.gain.value=.55,r.connect(c),c.connect(n);const l=i.createBuffer(2,i.sampleRate*3,i.sampleRate);for(let W=0;W<2;W++){const U=l.getChannelData(W);for(let v=0;v<U.length;v++)U[v]=Math.random()*2-1}const h=i.createBuffer(1,i.sampleRate*3,i.sampleRate);{const W=h.getChannelData(0);let U=0;for(let v=0;v<W.length;v++)U=(U+.02*(Math.random()*2-1))/1.02,W[v]=U*3.5}const u=[];function p(W,U=!1){const v=i.createBufferSource();return v.buffer=W,v.loop=U,v}function d(W,U){const v=i.createOscillator();return v.type=W,v.frequency.value=U,v}function g(W,U,v=.7){const _=i.createBiquadFilter();return _.type=W,_.frequency.value=U,_.Q.value=v,_}function x(W=0){const U=i.createGain();return U.gain.value=W,U}function m(W=ys,U=.3){const v=i.createStereoPanner();v.pan.value=Math.max(-1,Math.min(1,W.pan));const _=x(.25+W.near*.75),D=g("lowpass",1500+W.near*14e3);D.connect(_),_.connect(v),v.connect(n);const Z=x(U+(1-W.near)*.5);return v.connect(Z),Z.connect(r),D}function f(...W){for(let U=0;U<W.length-1;U++){const v=W[U],_=W[U+1];_ instanceof AudioParam,v.connect(_)}}function b(W,U,v,_,D,Z){W.gain.setValueAtTime(1e-4,U),W.gain.exponentialRampToValueAtTime(v,U+_),W.gain.setValueAtTime(v,U+_+D),W.gain.exponentialRampToValueAtTime(1e-4,U+_+D+Z)}function S(W,U,v){W.start(U),W.stop(U+v)}const y=x(.03),T=x(.035),M=p(l,!0),C=p(h,!0);f(M,g("highpass",1200),g("lowpass",8e3),y,n),f(C,g("lowpass",500),T,n),M.start(0,Math.random()*2),C.start(0,Math.random()*2),u.push(M,C);const I=g("bandpass",420,9),E=x(.05),w=p(h,!0);f(w,I,E,n),E.connect(r),w.start(),u.push(w);const G=d("sine",.06),N=x(220);f(G,N,I.frequency),G.start(),u.push(G);const L=g("lowpass",160,2),Y=x(.05);f(L,Y,n),Y.connect(r);for(const W of[55,58.27]){const U=d("sawtooth",W);U.connect(L),U.start(),u.push(U)}const Q=d("sine",34),F=x(.07);f(Q,F,n),Q.start(),u.push(Q);const P=d("sine",.09),z=x(60);f(P,z,L.frequency),P.start(),u.push(P);const rt=x(0);f(rt,n),rt.connect(r);for(const W of[1318,1396]){const U=d("sine",W);U.connect(rt),U.start(),u.push(U)}const ht=x(.018);f(ht,g("lowpass",400),n);for(const W of[50,100,150]){const U=d("sine",W),v=x(W===50?1:.4);f(U,v,ht),U.start(),u.push(U)}const H=x(0),B=p(l,!0);f(B,g("highpass",1500),H,n),B.start(),u.push(B);function st(W,U,v=55){const _=d("sine",v*1.6);_.frequency.setValueAtTime(v*1.6,W),_.frequency.exponentialRampToValueAtTime(v,W+.12);const D=x();f(_,D,n),b(D,W,U,.008,.02,.22),S(_,W,.35)}function _t(W,U=1.6){const v=t(),_=d("sawtooth",38);for(let j=1;j<24;j++)_.frequency.setValueAtTime(30+Math.random()*55,v+j*U/24);const D=x(),Z=m(W,.45);for(const[j,K]of[[620,14],[1180,16],[2350,18]]){const X=g("bandpass",j,K);X.frequency.setValueAtTime(j,v),X.frequency.linearRampToValueAtTime(j*(1.1+Math.random()*.25),v+U),f(D,X,Z)}_.connect(D),b(D,v,.9,.2,U-.5,.3),S(_,v,U+.1)}function Ft(W){const U=t(),v=p(h),_=x();f(v,g("lowpass",700),_,m(W,.6)),b(_,U,1.2,.003,.02,.5),S(v,U,.7);const D=d("sine",110);D.frequency.exponentialRampToValueAtTime(38,U+.35);const Z=x();f(D,Z,m(W,.4)),b(Z,U,.7,.003,.02,.4),S(D,U,.5);const j=p(l),K=x();f(j,g("bandpass",3200,3),K,m(W,.3)),b(K,U+.02,.25,.002,.01,.06),S(j,U,.2)}function lt(W,U=2.2){const v=t(),_=p(l),D=x(),Z=m(W,.5);for(const j of[700,1900]){const K=g("bandpass",j,6);for(let X=0;X<14;X++)K.frequency.setValueAtTime(j*(.7+Math.random()*.7),v+X*U/14);f(_,K,D)}D.connect(Z),D.gain.setValueAtTime(1e-4,v);for(let j=0;j<10;j++)D.gain.setTargetAtTime(Math.random()<.3?.02:.18+Math.random()*.12,v+j*U/10,.04);D.gain.setTargetAtTime(1e-4,v+U,.1),S(_,v,U+.5)}function ut(W){const U=t();for(let v=0;v<3;v++){const _=U+v*(.28+Math.random()*.08),D=p(h),Z=x();f(D,g("lowpass",500),Z,m(W,.7)),b(Z,_,.7,.003,.01,.18),S(D,_,.3)}}function Et(W){const U=t(),v=d("sawtooth",70+Math.random()*40);v.frequency.linearRampToValueAtTime(40+Math.random()*30,U+3);const _=x();f(v,g("bandpass",380,10),_,m(W,.9)),b(_,U,.4,.8,1.2,1.2),S(v,U,3.3)}let Lt=0,Ct=0,Vt=0,ue=0,k=t()+8,te=null,Kt=0,O=0,$=!1,Pt=!1;function gt(){return{pan:Math.random()*2-1,near:.15+Math.random()*.35}}function At(){if(Pt)return;const W=t();for(;ue<W+.1;){ue=Math.max(ue,W)+.03+Math.random()*($?.04:.12);const U=p(l),v=x();f(U,g("bandpass",2500+Math.random()*4e3,12),v,m({pan:Math.random()*2-1,near:.5},.2)),b(v,ue,.05+Math.random()*.08,.001,0,.03),S(U,ue,.06)}if(W>k){k=W+10+Math.random()*(30-Lt*18);const U=Math.random();U<.35?_t(gt(),1.2+Math.random()):U<.55?ut(gt()):U<.8?Et(gt()):lt(gt(),1.5)}if(Ct>0&&W>Vt){const U=60/Ct;Vt=W+U,st(W,.55,48),st(W+U*.28,.4,44)}if(te!==null&&W>Kt-.05){const U=1-te,v=Math.max(W,Kt);Kt=v+.32+U*.35;const D=440*2**((su[O++%su.length]-69)/12)*(1+(Math.random()-.5)*U*.06),Z=Math.sin(O*.7)*.3;for(const[j,K]of[[1,.1],[3.01,.025],[5.4,.012]]){const X=d("sine",D*j),et=x();f(X,et,m({pan:Z,near:.35},.6)),b(et,v,K,.003,0,.9),S(X,v,1)}}}return{tick:At,setTension(W){if(Pt)return;Lt=Math.max(0,Math.min(1,W));const U=t();Y.gain.setTargetAtTime(.05+Lt*.07,U,1.5),L.frequency.setTargetAtTime(150+Lt*250,U,1.5),rt.gain.setTargetAtTime(Lt>.4?(Lt-.4)*.012:0,U,2),E.gain.setTargetAtTime(($?.11:.05)+Lt*.03,U,1.5)},setHeartbeat(W){W>0&&Ct===0&&(Vt=t()),Ct=W},setMusicBox(W){W!==null&&te===null&&(Kt=t()),te=W},setOutside(W){$=W;const U=t();y.gain.setTargetAtTime($?.09:.03,U,.4),T.gain.setTargetAtTime($?.08:.035,U,.4),E.gain.setTargetAtTime(($?.11:.05)+Lt*.03,U,.6)},setPower(W){ht.gain.setTargetAtTime(W?.018:0,t(),W?.6:.05)},setStatic(W){H.gain.setTargetAtTime(W?.05:0,t(),.05)},thunder(W){const U=t(),v=.35+W*.65;if(W>.55){const _=p(l),D=x();f(_,g("highpass",1500),D,m({pan:-.3,near:1},.8)),b(D,U,v*.5,.002,.05,.5),S(_,U,.7)}for(let _=0;_<3;_++){const D=U+_*(.15+Math.random()*.3),Z=p(h,!0),j=g("lowpass",700);j.frequency.setValueAtTime(700-_*150,D),j.frequency.exponentialRampToValueAtTime(70,D+4);const K=x();f(Z,j,K,m({pan:(Math.random()-.5)*1.2,near:.8},.9)),K.gain.setValueAtTime(1e-4,D),K.gain.exponentialRampToValueAtTime(v*(1-_*.2),D+.1);for(let X=1;X<10;X++)K.gain.setTargetAtTime(v*(.25+Math.random()*.6)*(1-X/11),D+X*.45,.18);K.gain.setTargetAtTime(1e-4,D+4.6,.5),Z.start(D,Math.random()*2),Z.stop(D+7)}},creak:_t,slam:Ft,whisper:lt,glassKnock(W){const U=t();for(let v=0;v<3;v++){const _=U+v*(.22+Math.random()*.08),D=p(l),Z=x();f(D,g("bandpass",2600+Math.random()*600,4),Z,m(W,.5)),b(Z,_,.5,.001,.005,.07),S(D,_,.12);const j=d("sine",1900+Math.random()*300),K=x();f(j,K,m(W,.5)),b(K,_,.06,.001,0,.25),S(j,_,.3)}},growl(W){const U=t(),v=p(h),_=g("bandpass",170,3),D=x();f(v,_,D,m(W,.5));const Z=d("square",23),j=x(.5),K=x(.5);f(Z,j,K.gain),D.connect(K),D.gain.setValueAtTime(1e-4,U),D.gain.exponentialRampToValueAtTime(1.6,U+.6),D.gain.setValueAtTime(1.6,U+1.8),D.gain.exponentialRampToValueAtTime(1e-4,U+2.6),_.frequency.linearRampToValueAtTime(120,U+2.6),S(v,U,2.8),S(Z,U,2.8)},appear(W){const U=t(),v=p(l),_=x();f(v,g("bandpass",900,1.5),_,m(W,.8)),_.gain.setValueAtTime(1e-4,U),_.gain.exponentialRampToValueAtTime(.35,U+1.1),_.gain.exponentialRampToValueAtTime(1e-4,U+1.18),S(v,U,1.3);const D=d("sine",90);D.frequency.setValueAtTime(90,U+1.1),D.frequency.exponentialRampToValueAtTime(30,U+2.4);const Z=x();f(D,Z,m(W,.9)),b(Z,U+1.1,.9,.01,.1,1.8),S(D,U+1.1,2.5)},screech(){const W=t(),U=x();f(U,g("highpass",400),m(ys,.7)),b(U,W,.28,.6,.5,.6);for(let v=0;v<5;v++){const _=d("sawtooth",880*2**(v/12/2)+Math.random()*12);_.frequency.linearRampToValueAtTime(_.frequency.value*1.08,W+1.6);const D=d("sine",6+Math.random()*3),Z=x(9);f(D,Z,_.frequency),_.connect(U),S(_,W,1.8),S(D,W,1.8)}},scream(){const W=t(),U=d("sine",120);U.frequency.exponentialRampToValueAtTime(35,W+.5);const v=x();f(U,v,n),b(v,W,1.4,.003,.05,.5),S(U,W,.7);const _=i.createWaveShaper(),D=new Float32Array(2048);for(let et=0;et<D.length;et++)D[et]=Math.tanh((et/(D.length-1)*2-1)*6);_.curve=D;const Z=x(),j=m(ys,.5);for(const[et,vt]of[[900,3],[1500,4],[2800,5]]){const yt=g("bandpass",et,vt);yt.frequency.linearRampToValueAtTime(et*1.3,W+1.2),f(_,yt,Z)}Z.connect(j),b(Z,W,1.1,.02,1,.5);for(const et of[310,415,620,830]){const vt=d("sawtooth",et);vt.frequency.exponentialRampToValueAtTime(et*1.9,W+1.3);const yt=d("sine",24+Math.random()*14),mt=x(et*.18);f(yt,mt,vt.frequency),vt.connect(_),S(vt,W,1.6),S(yt,W,1.6)}const K=p(l),X=x();f(K,g("highpass",3e3),X,j),b(X,W,.3,.01,1,.4),S(K,W,1.6)},footsteps(W){const U=t(),v=3+Math.floor(Math.random()*3);for(let _=0;_<v;_++){const D=U+_*(.5+Math.random()*.08),Z=p(h),j=x();f(Z,g("lowpass",240+Math.random()*60),j,m(W,.5)),b(j,D,.35+_*.12,.004,.02,.16),S(Z,D,.25);const K=p(l),X=x();f(K,g("bandpass",1800,2),X,m(W,.5)),b(X,D+.03,.03+_*.01,.01,.03,.08),S(K,D,.2)}},breath(W){const U=t(),v=p(l),_=g("bandpass",600,1.2),D=x();f(v,_,g("lowpass",2200),D,m(W,.15)),D.gain.setValueAtTime(1e-4,U),D.gain.exponentialRampToValueAtTime(.22,U+1.1),D.gain.exponentialRampToValueAtTime(.02,U+1.35),D.gain.exponentialRampToValueAtTime(.3,U+1.6),D.gain.exponentialRampToValueAtTime(1e-4,U+3),_.frequency.setValueAtTime(900,U),_.frequency.linearRampToValueAtTime(1300,U+1.1),_.frequency.setValueAtTime(500,U+1.4),_.frequency.linearRampToValueAtTime(350,U+3);const Z=d("square",31),j=x(.35);f(Z,j,D.gain),S(v,U,3.2),S(Z,U+1.35,1.7)},dread(){const W=t();st(W,1.3,38),st(W+.02,.9,70);const U=d("sine",5400),v=x();f(U,v,n),b(v,W,.035,.01,1.5,5),S(U,W,7),s.frequency.cancelScheduledValues(W),s.frequency.setValueAtTime(2e4,W),s.frequency.exponentialRampToValueAtTime(320,W+.08),s.frequency.setValueAtTime(320,W+2.5),s.frequency.exponentialRampToValueAtTime(2e4,W+8)},itsMe(){const W=t(),U=p(l),v=x();f(U,g("highpass",900),v,n);for(let Z=0;Z<18;Z++)v.gain.setValueAtTime(Math.random()<.5?.02:.14,W+Z*.15);v.gain.setValueAtTime(1e-4,W+2.8),S(U,W,2.9);const _=i.createWaveShaper(),D=new Float32Array(1024);for(let Z=0;Z<D.length;Z++)D[Z]=Math.tanh((Z/(D.length-1)*2-1)*4);_.curve=D;for(const[Z,j,K]of[[.25,92,.9],[1.45,68,1.2]]){const X=W+Z,et=d("sawtooth",j);et.frequency.setValueAtTime(j*1.1,X),et.frequency.linearRampToValueAtTime(j*.8,X+.9);const vt=x();et.connect(_);const yt=g("bandpass",320,6),mt=g("bandpass",2300,9);_.connect(yt),_.connect(mt),yt.connect(vt),mt.connect(vt),vt.connect(m({pan:0,near:1},.6)),vt.gain.setValueAtTime(1e-4,X),vt.gain.exponentialRampToValueAtTime(K*.5,X+.04),vt.gain.setValueAtTime(1e-4,X+.14),vt.gain.setValueAtTime(1e-4,X+.3),vt.gain.exponentialRampToValueAtTime(K*.35,X+.36),vt.gain.setValueAtTime(K*.35,X+.44),vt.gain.exponentialRampToValueAtTime(K,X+.52),vt.gain.setValueAtTime(K,X+.85),vt.gain.exponentialRampToValueAtTime(1e-4,X+1.05),mt.frequency.setValueAtTime(900,X+.3),mt.frequency.linearRampToValueAtTime(2500,X+.5),S(et,X,1.1);const St=p(l),Xt=x();f(St,g("highpass",4500),Xt,m({pan:0,near:1},.3)),b(Xt,X+.15,K*.3,.01,.08,.05),S(St,X+.15,.3)}st(W,1,45)},twisted(W){const U=t(),v=4+Math.floor(Math.random()*5);let _=U;for(let et=0;et<v;et++){_+=.03+Math.random()*(et%3===2?.25:.07);const vt=p(l),yt=x();f(vt,g("bandpass",900+Math.random()*1400,5),yt,m(W,.35)),b(yt,_,.5+Math.random()*.4,.001,.004,.03),S(vt,_,.06);const mt=p(h),St=x();f(mt,g("lowpass",300),St,m(W,.35)),b(St,_,.35,.002,.01,.06),S(mt,_,.1)}const D=U+.2+Math.random()*.4,Z=d("sawtooth",62+Math.random()*10);Z.frequency.linearRampToValueAtTime(44,D+2.2);const j=d("sine",7+Math.random()*3),K=x(4);f(j,K,Z.frequency);const X=x();f(Z,g("bandpass",420,4),g("lowpass",900),X,m(W,.5)),b(X,D,.55,.5,.9,.8),S(Z,D,2.4),S(j,D,2.4)},charge(){const W=t();st(W,.5,70);const U=d("sawtooth",140);U.frequency.setValueAtTime(140,W),U.frequency.exponentialRampToValueAtTime(520,W+2.8);const v=x();f(U,g("lowpass",900,6),v,m(ys,.2)),b(v,W,.06,.2,2.2,.5),S(U,W,3.1)},nursery(){const W=t(),U=d("sine",41.2),v=x();f(U,v,n),b(v,W,.16,1.5,4.5,2),S(U,W,8.5);let _=W+.35;ru.forEach((D,Z)=>{const j=Z/(ru.length-1),K=440*2**((D-69)/12)*(1-j*.045);for(const[X,et]of[[1,.13],[2.01,.05],[4.03,.018],[6.4,.009]]){const vt=d("sine",K*X),yt=x();f(vt,yt,m({pan:Math.sin(Z*1.1)*.35,near:.6},.7)),b(yt,_,et,.004,0,1.1),S(vt,_,1.3)}_+=.4+j*.22})},jolt(W){const U=t();st(U,1.1,48);const v=i.createWaveShaper(),_=new Float32Array(1024);for(let K=0;K<_.length;K++)_[K]=Math.tanh((K/(_.length-1)*2-1)*9);v.curve=_;const D=x();f(v,g("bandpass",1700,2),D,m(W,.4)),b(D,U,.6,.005,.55,.12);for(const K of[180,187,395]){const X=d("sawtooth",K);X.frequency.exponentialRampToValueAtTime(K*2.6,U+.7);const et=d("square",31+Math.random()*9),vt=x(K*.4);f(et,vt,X.frequency),X.connect(v),S(X,U,.8),S(et,U,.8)}const Z=p(l),j=x();f(Z,g("highpass",2500),j,m(W,.4)),b(j,U,.25,.003,.5,.1),S(Z,U,.75)},vanish(W){const U=t(),v=p(l),_=g("bandpass",500,3);_.frequency.setValueAtTime(300,U),_.frequency.exponentialRampToValueAtTime(2400,U+.9);const D=x();f(v,_,D,m(W,.8)),D.gain.setValueAtTime(1e-4,U),D.gain.exponentialRampToValueAtTime(.5,U+.9),D.gain.setValueAtTime(1e-4,U+.92),S(v,U,1);const Z=d("sine",90);Z.frequency.setValueAtTime(90,U),Z.frequency.exponentialRampToValueAtTime(30,U+.9);const j=x();f(Z,j,m(W,.6)),b(j,U,.3,.8,0,.05),S(Z,U,1),st(U+.93,.9,40)},newspaper(){const W=t()+.3,U=.34,v=(D,Z,j,K,X)=>{const et=440*2**((D-69)/12)*(1-(Z-W)*4e-4);for(const[vt,yt]of[[1,j],[3.01,j*.25],[5.2,j*.08]]){const mt=d("sine",et*vt),St=x();f(mt,St,m({pan:K,near:.8},.35)),b(St,Z,yt,.003,0,X),S(mt,Z,X+.1)}},_=ou.length*U;for(let D=0;D<3;D++){const Z=W+D*_;ou.forEach((K,X)=>{K&&v(K,Z+X*U,.07,.25,.9)});const j=_/au.length;au.forEach((K,X)=>{const et=Z+X*j;v(K,et,.06,-.25,.7),v(K+16,et+j/3,.022,-.1,.35),v(K+19,et+j*2/3,.022,-.1,.35)})}},murmur(W){const U=t(),v=i.createWaveShaper(),_=new Float32Array(1024);for(let X=0;X<_.length;X++)_[X]=Math.tanh((X/(_.length-1)*2-1)*3);v.curve=_;const D=d("sawtooth",58);D.frequency.setValueAtTime(64,U),D.frequency.linearRampToValueAtTime(49,U+W);const Z=g("bandpass",380,5),j=g("bandpass",1100,7);for(let X=0;X<W;X+=.16+Math.random()*.14)Z.frequency.setTargetAtTime(280+Math.random()*300,U+X,.04),j.frequency.setTargetAtTime(800+Math.random()*1200,U+X,.04);const K=x();f(D,v),v.connect(Z),v.connect(j),Z.connect(K),j.connect(K),K.connect(m(ys,.8)),b(K,U,.4,.15,Math.max(.1,W-.6),.45),S(D,U,W+.1)},finale(){const W=t()+.2,U=3.6;sl.forEach((D,Z)=>{const j=W+Z*U;for(const K of D){const X=440*2**((K-69)/12),et=x();f(et,g("bandpass",500,1.5),g("lowpass",1800),m({pan:K%5/5-.4,near:.7},.9)),b(et,j,.05,1.2,U-1.6,1.6);for(const vt of[-7,0,6]){const yt=d("sawtooth",X);yt.detune.value=vt,yt.connect(et),S(yt,j,U+1.2)}}for(const[K,X,et]of[[1,.2,4],[2.76,.07,2.5],[5.4,.035,1.5]]){const vt=d("sine",440*2**((D[0]-12-69)/12)*K),yt=x();f(vt,yt,m({pan:0,near:.6},1)),b(yt,j,X,.005,0,et),S(vt,j,et+.2)}});const v=d("sine",36.7),_=x();f(v,_,n),b(_,W,.18,2,sl.length*U-2,3),S(v,W,sl.length*U+3.5)},kneel(){const W=t();st(W,1.2,36);const U=p(h),v=x();f(U,g("lowpass",500),v,m(ys,.8)),b(v,W,.35,.01,.1,.6),S(U,W,.9)},fadeOut(W){Pt=!0,Ct=0,te=null;const U=t();for(const v of[y,T,E,Y,F,rt,ht])v.gain.cancelScheduledValues(U),v.gain.setTargetAtTime(0,U,W/3)},toll(W){for(let U=0;U<W;U++){const v=t()+U*2.2;for(const[_,D,Z]of[[1,.22,5],[2.76,.08,3],[5.4,.05,2],[8.93,.025,1.2]]){const j=d("sine",98*_),K=x();f(j,K,m({pan:.4,near:.4},1)),b(K,v,D,.005,0,Z),S(j,v,Z+.2)}}},crackle(){const W=t(),U=p(l),v=x();f(U,g("highpass",1200),v,n),b(v,W,.14,.003,.05,.12),S(U,W,.3)},click(){const W=t(),U=d("square",1400),v=x();f(U,g("lowpass",3e3),v,n),b(v,W,.05,.002,0,.04),S(U,W,.07)},step(){const W=t(),U=p(h),v=x();f(U,g("lowpass",260+Math.random()*80),v,m(ys,.25)),b(v,W,.35,.004,.01,.12),S(U,W,.2)},dispose(){n.gain.setTargetAtTime(0,t(),.08),setTimeout(()=>{for(const W of u)try{W.stop()}catch{}n.disconnect(),s.disconnect(),e.disconnect()},400)}}}const As=60,k1=5,lu=[.04,.06,.09,.12,.15,.18],H1=1,V1=.6,G1=.9,W1=10,X1=3,cu=5,q1=5,Y1=4,$o=.5,Z1=1.5,K1=7,J1=.12,hu=80,$1=40,j1=4.6,Q1=.85,uu=8,tx=1/(2*As),ex=.1,fu=3,du=8,rl=4.6,pu=6,nx=.1,ix=1,sx=2,rx=70,ox=[1.5,4.6,7.7,10.8,25,28.4],ax=2.2,mu=14.5,lx=[17.2,18.8,20.4,22],cx=[1.6],hx=6,gu=23.6,ux=32.5,fx=.4,dx=2.8;function px(i,t=0){const{scene:e,camera:n,layout:s,doors:r,garden:o,walker:a,seat:c}=i,l=qr[Math.max(0,Math.min(qr.length-1,t))],h=l.doctor,u=l.woman,p=l.tree,d=l.doll,g=l.faults,x=l.grace,m=l.stage,f=l.cooldown,b=l.dollGain,S=l.blood,y=l.abandoned??!1,T=Math.min(.2,l.faults*1.3/((6*As-x)/cu)),M=z1(),C=[],I=R=>(C.push(R),R),E=[],w=[],G=i.glow.color.clone();e.traverse(R=>{if(R instanceof un&&E.push({light:R,base:R.intensity,flickUntil:0}),R instanceof Qt){const nt=R.material;nt instanceof Xe&&nt.emissiveIntensity>0&&!w.some(pt=>pt.material===nt)&&w.push({material:nt,base:nt.emissiveIntensity})}});for(const R of E)R.base*=$o;for(const R of w)R.base*=$o;const N=i.ambient.map(R=>({light:R,base:R.intensity*$o})),L=e.environmentIntensity*$o,Y=new Set(i.flicker);if(y)for(const R of E)R.base*=.8,Y.add(R.light);let Q=1,F=1,P=1;function z(){P=Q*(.42+.58*F);for(const{material:R,base:nt}of w)R.emissiveIntensity=R.userData.off?0:nt*P;i.glow.color.copy(G).multiplyScalar(P);for(const{light:R,base:nt}of N)R.intensity=nt*(.06+.94*P);e.environmentIntensity=L*P}function rt(R){Q=R,z()}function ht(R){F=Math.max(0,Math.min(1,R)),z()}const H=[["doctor",L1],["doll",I1],["woman",U1],["tree",N1]].map(([R,nt],pt)=>({key:R,figure:nt(e,I),stage:0,since:-f,nextTick:x+pt*1.3,deadline:0})),B=R=>H.find(nt=>nt.key===R),st=F1(e,I),_t=O1(e,I),Ft=[...H.map(R=>R.figure.group),st.group,_t.group];S&&mx(e,s,I,t,Ft);const lt=y?gx(e,i,I,Ft):null,ut=B("doctor"),Et=B("doll"),Lt=B("woman"),Ct=B("tree"),{left:Vt,hallLeft:ue,backZ:k,glassLeft:te,nicheZ:Kt,roomBackX:O}=s,$=i.doorZ.map(R=>{const nt=new wn(72,1,.05,80);return nt.position.set(O+.2,2.7,R+.75),nt.lookAt(Vt-.1,.9,R-.15),nt}),Pt=new wn(72,1,.05,80);Pt.position.set(Vt+.4,2.9,s.gardenBackZ+.4),Pt.lookAt(.4,1,k-.6),$.push(Pt);const gt=$.map((R,nt)=>{const pt=new un("#cfe0ff",0,nt===3?16:9,nt===3?1:1.4);return pt.position.copy(R.position),nt===3&&pt.position.set(-.6,2.6,k-3),e.add(pt),pt});function At(R,nt){const pt=R-a.position.x,Tt=nt-a.position.z,dt=Math.hypot(pt,Tt)||1;return{pan:(pt*Math.cos(a.yaw)-Tt*Math.sin(a.yaw))/dt*.9,near:Math.max(0,1-dt/14)}}const W=R=>At(Vt,i.doorZ[R]),U=()=>At(te+.5,k);function v(R,nt){const pt=i.doorZ[nt];R.figure.place(Vt-.95,0,pt-.45,0),R.figure.face($[nt].position.x,$[nt].position.z),R.figure.pose("emerge")}const _=new zi,D=new zi;function Z(R,nt){R.figure.place(Vt-R.figure.reach-.05,0,i.doorZ[nt],Math.PI/2),R.figure.pose("wait"),R.figure.group.updateMatrixWorld(!0),_.makeEmpty(),R.figure.group.traverse(pt=>{!(pt instanceof Qt)||!pt.visible||pt.material.transparent||(pt.geometry.boundingBox||pt.geometry.computeBoundingBox(),_.union(D.copy(pt.geometry.boundingBox).applyMatrix4(pt.matrixWorld)))}),_.isEmpty()||(R.figure.group.position.x+=Vt-.03-_.max.x)}let j=-1;function K(R){const nt=R>d*2/3?0:R>d/3?1:2;if(nt===j)return;j=nt;const pt=i.doorZ[1],Tt=$[1],{figure:dt}=Et;nt===0?(dt.place(Vt-.5,0,pt-.62,0),dt.pose("sit")):nt===1?(dt.place(Vt-1.3,0,pt+.05,0),dt.pose("stand")):(dt.place(O+.85,0,pt+.4,0),dt.pose("reach")),dt.face(Tt.position.x,Tt.position.z)}let X=0,et="brief",vt=0,yt=!1,mt=0,St=-1,Xt=-1,Zt=!1,Ut=0,ee=x,J=0,bt=0,Mt=null;const Nt=new Set;let wt=null;const ft=new un("#c8d3e6",0,1.6,1.5);e.add(ft);let kt=!1,ne=!1;const ye=5,re=new de,nn=I(new xi(1,12,8)),An=I(new Yn({color:"#fff4d6",fog:!1}));for(const R of[-1,1]){const nt=new Qt(nn,An);nt.scale.set(.011,.007,.004),nt.position.set(R*.042,0,0),nt.rotation.z=R*-.12,nt.layers.set(ye),re.add(nt)}re.visible=!1,re.quaternion.copy($[0].quaternion),re.position.copy($[0].position).add(new q(.05,-.06,-.3).applyQuaternion($[0].quaternion)),e.add(re);const vn=E.find(({light:R})=>R.position.x<s.hallLeft-1&&Math.abs(R.position.z-i.doorZ[0])<.3),Mn=vn?.base??0;function ai(){kt=!1,re.visible=!1,vn&&(vn.base=Mn)}let li=0,Te=-1,Ln=!1,Rn=-1,Jn=!1;const Si=a.position.clone(),In=new un("#ffd9b0",0,3,2);In.position.set(0,-.45,-.2),n.add(In),e.add(n);const Ei=new q;function Un(R,nt,pt=0){n.add(R.group),R.group.visible=!0,R.group.position.set(0,0,0),R.group.rotation.set(0,0,pt),R.group.updateMatrixWorld(!0);const Tt=R.head.getWorldPosition(new q);n.worldToLocal(Tt),Ei.set(-Tt.x,-Tt.y-.03,-Tt.z-nt),R.group.position.copy(Ei)}function zs(R){if(R.stage+=1,R.since=X,R.key==="doll"){Mt=d,j=-1,K(Mt),M.appear(W(1));return}const nt=R.key==="doctor"?0:R.key==="woman"?2:-1,pt=nt>=0?W(nt):U();if(R.stage===1){nt>=0?v(R,nt):(R.figure.place(0,0,s.gardenBackZ+2.3,0),R.figure.face(Pt.position.x,Pt.position.z),R.figure.pose("emerge")),M.appear(pt);return}if(R.stage===2){R.key==="doctor"&&Math.random()<.5?(kt=!0,R.figure.hide(),re.visible=!0,vn&&(vn.base=0)):nt>=0?Z(R,nt):(R.figure.place(.5,0,k-.2-R.figure.reach,0),J=X+1,R.figure.pose("wait")),M.whisper(pt);return}M.screech(),R.key==="doctor"?(ai(),R.deadline=X+h,r[0].target=2.45,r[0].closeAt=1/0,R.figure.place(Vt-.38,0,i.doorZ[0]+.05,Math.PI/2+.15),R.figure.pose("lurk"),R.figure.group.updateMatrixWorld(!0),R.figure.head.getWorldPosition(ft.position),ft.position.x+=.35,ft.position.y-=.3,ft.position.z-=.45,ft.intensity=.9,M.creak(pt,1.2)):R.key==="woman"?(R.deadline=X+u,Nt.clear(),r[2].target=1,r[2].closeAt=1/0,R.figure.place(ue-.75,0,Kt,0),R.figure.pose("stand"),M.creak(pt,1.4)):(R.deadline=X+p,o.target=.45,R.figure.place(te-.32,0,k-.4,0),R.figure.group.rotation.z=-.3,R.figure.pose("peek"),R.figure.group.userData.onTouch=()=>{o.target=0,M.slam(U()),Oe(R)},R.figure.group.userData.label="Empujar",M.creak(pt,1.2),M.growl(pt),bt=X+3)}function je(){Et.stage=4,Et.since=X,Et.deadline=X+X1,r[1].target=2.45,r[1].closeAt=1/0,Et.figure.place(Vt-.38,0,i.doorZ[1]+.05,Math.PI/2+.15),Et.figure.pose("lurk"),Et.figure.eyes(!0),Et.figure.group.updateMatrixWorld(!0),Et.figure.head.getWorldPosition(ft.position),ft.position.x+=.35,ft.position.y-=.3,ft.position.z-=.45,ft.intensity=.9,M.screech(),M.creak(W(1),1.2)}function Oe(R){R.stage=0,R.since=X,R.key==="doctor"&&(ft.intensity=0,ai()),R.key==="doll"&&(ft.intensity=0,R.figure.eyes(!1)),delete R.figure.group.userData.onTouch,R.figure.hide()}function $n(R){if(!(X<x||R.stage>=3)&&!(R.key==="tree"&&St>=0&&!Zt)&&!(R.key==="doll"&&R.stage>=1)){if(R.stage===0){if(X-R.since<f)return;const nt=Math.min(.6,lu[Math.min(vt,lu.length-1)]*l.appear);Math.random()<nt&&zs(R);return}X-R.since>=m&&Math.random()<V1&&zs(R)}}function A(){yt||St>=0||(yt=!0,M.click(),i.releasePointer())}function tt(R=!0){yt&&(yt=!1,i.setView(null),M.click(),R&&i.relock())}function ot(R){const nt=(R+$.length)%$.length;if(nt!==mt&&(mt=nt,M.crackle(),nt<3&&cn==="gone"&&Sn<0&&Math.random()<.05)){const pt=i.doorZ[nt];st.place(Vt-.3,0,pt-.35,0),st.face($[nt].position.x,$[nt].position.z),st.pose("stand"),Qe=X+.35+Math.random()*.3,Ar=nt,M.setStatic(!0)}}function at(R=!1){St=X,Xt=-1,Zt=R,rt(0),R||(Ct.figure.place(.2,0,k+1.4,0),Ct.figure.pose("stand"),Ct.figure.face(a.position.x,a.position.z),M.growl(U())),i.lever.rotation.z=-.6,tt(!1),M.setPower(!1),M.slam(U())}function it(){Te=X,Ln=!1,Rn=-1,ht(0),rt(0),tt(!1),i.releasePointer();for(const R of H)Oe(R);Mt=null,ui(),qs(),M.setPower(!1),M.setMusicBox(null),M.setHeartbeat(0),M.nursery()}function Rt(){if(Te<0)return;const R=X-Te;if(!Ln&&R>=rl){Ln=!0;const nt=2.7;ut.figure.place(a.position.x-Math.sin(a.yaw)*nt,0,a.position.z-Math.cos(a.yaw)*nt,0),ut.figure.face(a.position.x,a.position.z),ut.figure.pose("stand"),ut.figure.group.updateMatrixWorld(!0),ut.figure.head.getWorldPosition(ft.position),ft.position.x+=Math.sin(a.yaw)*.4,ft.position.z+=Math.cos(a.yaw)*.4,ft.position.y+=.1}Ln&&(ft.intensity=.35+(R-rl)/(du-rl)*1.45,ut.figure.tick?.(X)),R>=du&&(Te=-1,It(ut))}function It(R){qs(),et="scare",tt(!1),i.setView(null),i.releasePointer(),wt=R,li=X+Z1;const{figure:nt}=R;nt.pose("stand"),nt.scream(!0),Un(nt,.55),In.intensity=1.4,ft.intensity=0,M.scream(),M.setHeartbeat(0),M.setMusicBox(null)}function Ot(){et==="brief"&&(et="intro",i.relock())}function Bt(){c.active=!0,c.standAt.set(i.chair.position.x-.1,1.55,i.chair.position.z+.55),a.position.set(i.chair.position.x,1.18,i.chair.position.z),a.yaw=Math.PI/2,a.pitch=-.08}Bt();const $t=i.nichePlants.map(R=>R.userData.onTouch);i.nichePlants.forEach((R,nt)=>{R.userData.onTouch=()=>{$t[nt]?.(),Lt.stage===3&&!Nt.has(nt)&&(Nt.add(nt),M.click())}});const jt=R=>()=>{r[R].target=0,M.slam(W(R)),R===0&&ut.stage===3&&Oe(ut)},qt=()=>{o.target=0,M.slam(U())},se=()=>{c.active||Bt(),A()},pe=()=>{Xt=X+(Zt?0:q1),i.lever.rotation.z=.6,M.click(),M.creak(At(s.right,.55),.5)};let me=1/0;const Ae=()=>{const R=!i.bath.door.target;if(i.bath.door.target=R?1:0,!R)return M.slam(hi());me=X+pu,M.creak(hi(),.9),cn==="gone"&&Ti<0&&Qe<0&&Sn<0&&!Vs(a.position.x,a.position.z)&&Math.random()<nx&&Fn()},xe=()=>{Rn=X+(1-F)*fu+.1,M.charge()};function Jt(){r.forEach((dt,oe)=>{const Ge=oe===1&&Et.stage===4;dt.hinge.userData.onTouch=dt.target>0&&!Ge?jt(oe):void 0,dt.hinge.userData.label="Cerrar"});const R=o.target>0&&Ct.stage!==3;for(const dt of[i.slider,i.fixedPane])dt.userData.onTouch=R?qt:void 0,dt.userData.label="Cerrar";const nt=c.active||a.position.x>i.chair.position.x-.9;i.monitor.userData.onTouch=nt&&St<0?se:void 0,i.monitor.userData.label="Cámaras",i.breaker.userData.onTouch=St>=0&&Xt<0?pe:void 0,i.breaker.userData.label="Subir la palanca",i.bath.door.hinge.userData.onTouch=Ae,i.bath.door.hinge.userData.label=i.bath.door.target?"Cerrar":"Abrir";const pt=F>.995;i.bath.charger.userData.onTouch=pt||Rn>=0?void 0:xe,i.bath.charger.userData.label=pt?"Luz cargada":"Cargar la luz";const Tt=Lt.stage===3;for(const dt of i.nichePlants)dt.userData.label=Tt?"Tocar":""}const Se=new ec(S?"#ff4a3a":"#c9d6ff",0);Se.position.set(-4,20,-24),e.add(Se);const fe=i.sky.top.clone(),an=i.sky.horizon.clone(),kn=new ae(S?"#8a1414":"#5d6b88"),Ke=[],Nn=[];let Le=8+Math.random()*10;function dn(){const R=2+Math.floor(Math.random()*2);for(let pt=0;pt<R;pt++)Ke.push(X+pt*(.07+Math.random()*.12));const nt=.3+Math.random()*1.8;Nn.push({at:X+nt,strength:1-nt/2.2}),Le=X+12+Math.random()*26}const sn=1400,Ie=new Float32Array(sn*6),qe=Array.from({length:sn},()=>({x:0,y:0,z:0,speed:0})),Vi=12;function Hn(R,nt){return nt<k?0:R<ue?s.corridorH+.35:s.doorTop+(nt-k)/(s.openingZ-k)*(s.hallH-s.doorTop)+.08}function wr(R,nt){R.x=Vt+Math.random()*(s.right+.8-Vt),R.z=s.gardenBackZ+Math.random()*(s.openingZ-s.gardenBackZ);const pt=Hn(R.x,R.z);R.y=nt?pt+Math.random()*(Vi-pt):Vi+Math.random()*2,R.speed=10+Math.random()*4}for(const R of qe)wr(R,!0);const ks=I(new Ze);ks.setAttribute("position",new Pn(Ie,3));const Hs=new qd(ks,I(new Zu({color:S?"#8e0f0f":"#7e8ea8",transparent:!0,opacity:S?.45:.28,depthWrite:!1})));Hs.frustumCulled=!1,Hs.raycast=()=>{},e.add(Hs);function ya(R){X>=Le&&dn();let nt=0;for(let Tt=Ke.length-1;Tt>=0;Tt--){const dt=X-Ke[Tt];dt<0||(dt>.6?Ke.splice(Tt,1):nt+=Math.exp(-dt*14))}nt=Math.min(1.2,nt),Se.intensity=nt*3.2,i.sky.top.copy(fe).lerp(kn,Math.min(1,nt*.6)),i.sky.horizon.copy(an).lerp(kn,Math.min(1,nt));for(let Tt=Nn.length-1;Tt>=0;Tt--)X<Nn[Tt].at||(M.thunder(Nn[Tt].strength),Nn.splice(Tt,1));const pt=1.2*R;for(let Tt=0;Tt<sn;Tt++){const dt=qe[Tt];dt.y-=dt.speed*R,dt.x+=pt,dt.y<=Hn(dt.x,dt.z)&&wr(dt,!1);const oe=Tt*6;Ie[oe]=dt.x,Ie[oe+1]=dt.y,Ie[oe+2]=dt.z,Ie[oe+3]=dt.x-.04,Ie[oe+4]=dt.y+.38,Ie[oe+5]=dt.z}ks.attributes.position.needsUpdate=!0}function fo(R){const nt=Xt>=0;for(const pt of E){let Tt=P;nt?Tt=Math.random()<.25?.6:0:Y.has(pt.light)&&(X>pt.flickUntil&&Math.random()<R*.12&&(pt.flickUntil=X+.2+Math.random()*.6),X<pt.flickUntil&&(Tt*=Math.random()>.5?1:.1)),pt.light.intensity=pt.light.userData.off?0:pt.base*Tt}}function ln(){if(Te>=0){M.setTension(.15),M.setHeartbeat(0),M.setMusicBox(null);return}const R=H.filter(fi=>fi.stage>=1).length,nt=H.some(fi=>fi.stage>=3)||Mt!==null&&Mt<10,pt=H.some(fi=>fi.stage===2)||Mt!==null&&Mt<20,Tt=S?.45:0;M.setTension(Math.min(1,Tt+vt/10+R*.12+(nt?.3:0)+(St>=0?.2:0)+(1-F)*.25));const dt=Gn>X?(Gn-X)/uu:0,oe=F<.3?80+(.3-F)*160:0,Ge=et!=="play"||Te>=0?0:Sn>=0?170:Math.max(oe,nt?128:pt?78:0);M.setHeartbeat(dt>0?Math.max(Ge,90+dt*90):Ge);const Be=yt&&mt===1&&St<0,Wn=Mt!==null&&et==="play"&&Te<0&&(Be||Mt<W1);M.setMusicBox(Wn?Mt/d:null)}const Fe=i.bath,Vs=(R,nt)=>R>Fe.box.x0&&R<Fe.box.x1&&nt>Fe.box.z0&&nt<Fe.box.z1,Vn=new un("#b8c4d8",0,8,1.4);e.add(Vn);let cn="gone",jn=-hu,ci=x+15+Math.random()*30,Gs=0,is=0;const po={x:Fe.doorAt.x,z:Fe.doorAt.z+.14};let hn=!1,Gn=-1,Qe=-1,Ar=-1;const ss=new q,Rr=new q,Ws=new nc;function Cr(R,nt=st.group){const pt=R.clone().project(n);if(pt.z>1||Math.abs(pt.x)>.85||Math.abs(pt.y)>.9)return!1;n.getWorldPosition(ss);const Tt=ss.distanceTo(R);Ws.set(ss,Rr.copy(R).sub(ss).normalize()),Ws.far=Tt;for(const dt of Ws.intersectObjects(e.children,!0)){let oe=dt.object,Ge=!1,Be=!1;for(;oe;)oe.visible||(Ge=!0),oe===nt&&(Be=!0),oe=oe.parent;if(!Ge)return Be||dt.distance>Tt-.4}return!0}const rs=new q;function mo(){return yt||Sn>=0?!1:(st.head.getWorldPosition(rs),Cr(rs)?!0:(rs.set(st.group.position.x,st.group.position.y+1.4,st.group.position.z),Cr(rs)))}const hi=()=>At(Fe.doorAt.x,Fe.doorAt.z);function go(){cn="waiting",jn=X,hn=!1,Fe.door.target=1,st.group.userData.running=!1,st.place(po.x,0,po.z,Math.PI),st.pose("stand"),st.eyes(!0),Vn.position.set(Fe.doorAt.x,2.3,Fe.doorAt.z-.45),is=X+.5,ht(F-ex),M.creak(hi(),1.1)}function ui(){cn="gone",jn=X,hn=!1,st.group.userData.running=!1,st.hide(),Vn.intensity=0,Vs(a.position.x,a.position.z)?me=X+pu:Fe.door.target=0}let Ti=-1;function Fn(){Ti=X+ix,st.group.userData.running=!1,st.place(Fe.doorAt.x,0,Fe.doorAt.z+.75,Math.PI),st.face(a.position.x,a.position.z),st.pose("stand"),st.eyes(!0),Vn.position.set(Fe.doorAt.x,2.2,Fe.doorAt.z+.2),Vn.intensity=2.4,M.jolt(hi())}function Je(){cn="running",jn=X,hn=Vs(a.position.x,a.position.z),st.pose("run"),st.group.userData.running=!0,M.screech(),M.growl(hi())}function Sa(){ui(),Gn=X+uu,M.dread()}function os(R){if(Qe>=0&&(X>=Qe||!yt||mt!==Ar)&&(Qe=-1,st.hide(),M.setStatic(!1)),Ti>=0&&(X>=Ti||et!=="play")&&(Ti=-1,st.hide(),Vn.intensity=0),et!=="play"||Te>=0){cn!=="gone"&&ui();return}if(cn==="gone"){if(X<ci||(ci=X+K1*(.8+Math.random()*.4),X-jn<hu||Qe>=0||Sn>=0||Ti>=0))return;Math.random()<J1*Math.min(2,l.appear)&&go();return}const nt=cn==="running"?3.4:1.4;Vn.intensity=Math.random()<.08?.2:nt*(.4+.6*P);const{group:pt}=st;if(cn==="waiting"){if(X>=is&&(is=X+2.5+Math.random()*2.5,M.twisted(hi())),X-jn>$1)return ui();if(X<Gs)return;Gs=X+.1,mo()&&Je();return}if(hn&&Fe.door.open<.25&&Vs(a.position.x,a.position.z))return ui();const Tt=hn?a.position.x:Fe.outside.x,dt=hn?a.position.z:Fe.outside.z,oe=Tt-pt.position.x,Ge=dt-pt.position.z,Be=Math.hypot(oe,Ge);if(!hn&&Be<.3){hn=!0;return}if(hn&&Be<=Q1)return Sa();if(Be<.001)return;const Wn=Math.min(Be,j1*(.85+l.appear*.08)*R);pt.position.x+=oe/Be*Wn,pt.position.z+=Ge/Be*Wn,st.face(Tt,dt),Vn.position.set(pt.position.x+oe/Be*.7,2.2,pt.position.z+Ge/Be*.7),X>=is&&(is=X+.5,M.twisted(At(pt.position.x,pt.position.z)))}const{balcony:Ve}=i;let Pr=x+As*.5+Math.random()*As*3.5,Gi=-1,as=0,Wi=!1,Qn=0;const ls=new q;function cs(R){Gi<0||(Gi=-1,R&&M.vanish(At(_t.group.position.x,_t.group.position.z)),_t.hide())}function Dr(R){if(Gi<0){if(et!=="play"||Te>=0||X<Pr)return;Pr=1/0,Gi=X,as=0;const nt=Ve.x0+.5+Math.random()*(Ve.x1-Ve.x0-1);_t.place(nt,Ve.y,Ve.z+.42);return}if(et!=="play"||Te>=0||X-Gi>rx)return cs(!1);_t.face(a.position.x,a.position.z),_t.tick(X),X>=Qn&&(Qn=X+.1,_t.group.updateMatrixWorld(!0),_t.eyes.getWorldPosition(ls),Wi=!yt&&Sn<0&&Cr(ls,_t.group)),as=Wi?as+R:0,as>=sx&&cs(!0)}let Lr=-1,yn=0,Xi=0,qi=0;const hs=new un("#9b4dff",0,13,1.1);e.add(hs);const us=[ut,Et,Lt,Ct],Xs=t===_f,Ir=Xs?cx:ox;function _o(){et="ending",Lr=X,yn=1,Xi=0,qi=0,ht(1),rt(0),M.setPower(!1),M.fadeOut(3),ft.intensity=0,cs(!1),c.active=!1,a.position.set(.6,1.55,.6),a.yaw=0,a.pitch=0;const R=1.6;_t.place(a.position.x-Math.sin(a.yaw)*R,0,a.position.z-Math.cos(a.yaw)*R),_t.face(a.position.x,a.position.z),_t.group.updateMatrixWorld(!0),_t.group.position.y+=a.position.y-_t.eyes.getWorldPosition(ls).y}function fs(){if(et!=="ending")return;const R=X-Lr;for((yn===1||yn===2&&R>=gu)&&_t.tick(X);Xi<Ir.length&&R>=Ir[Xi];)M.murmur(ax),Xi+=1;if(Xs){if(R<hx)return;et="won",yn=0,_t.hide(),rt(1);return}if(yn===1&&R>=mu&&(yn=2,_t.hide(),c.active=!1,a.position.set(.6,1.55,.6),a.yaw=0,a.pitch=-.1,us.forEach((nt,pt)=>{nt.figure.place(-.75+pt*1,0,-2.4+Math.abs(pt-1.5)*.4,0),nt.figure.face(a.position.x,a.position.z),nt.figure.pose("stand"),nt.figure.eyes(!0)}),hs.position.set(.6,3.2,-1.7),rt(.3),M.finale()),yn===2){for(hs.intensity=Math.min(4.6,(R-mu)*1.6)*(Math.random()<.04?.5:1);qi<us.length&&R>=lx[qi];)us[qi].figure.pose("kneel"),M.kneel(),qi+=1;if(R>=gu&&_t.group.position.y<-1&&(_t.group.scale.setScalar(1.6),_t.place(.75,0,-3.8),_t.face(a.position.x,a.position.z),_t.group.updateMatrixWorld(!0),_t.group.position.y+=a.position.y-.05-_t.eyes.getWorldPosition(ls).y,M.vanish(At(.75,-3.8))),R>=ux){yn=3,hs.intensity=0,rt(0);for(const nt of us)nt.figure.hide();_t.hide()}}}function bi(){et!=="play"&&et!=="intro"&&et!=="brief"||Te>=0||(et="play",X=Math.max(X,6*As))}let ds=Math.random()<fx?As*(1.5+Math.random()*3.5):1/0,Sn=-1,Ur=0;function xo(){Sn=X+dx,ds=1/0,ui(),st.group.userData.running=!1,st.pose("stand"),st.scream(!0),Un(st,.62,-1.15),In.intensity=1.2,M.itsMe()}function qs(){Sn<0||(Sn=-1,e.add(st.group),st.group.visible=!0,st.scream(!1),st.hide(),In.intensity=0)}function Ys(){if(Sn<0){et==="play"&&X>=ds&&(St<0&&cn==="gone"?xo():ds=X+10);return}if(X>=Sn||et!=="play")return qs();X>=Ur&&(Ur=X+.05+Math.random()*.13,st.group.visible=Math.random()<.55),i.setView(null)}let ps=x+40+Math.random()*40,Nr=0;function vo(){if(et==="play"){if(X>=ps){ps=X+35+Math.random()*(60-vt*6);const R=a.yaw+Math.PI+(Math.random()-.5)*.8;M.footsteps(At(a.position.x+Math.sin(R)*3,a.position.z+Math.cos(R)*3))}St>=0&&X>=Nr&&(Nr=X+5+Math.random()*5,M.breath({pan:Math.random()<.5?-.8:.8,near:.95}))}}let V="";function ct(){const R={phase:et,hour:vt,cams:yt,cam:mt,blackout:St>=0,restoring:Xt>=0,seated:c.active,doll:Mt===null?null:Math.ceil(Mt),dollMax:d,night:t,dread:Gn>X,itsMe:Sn>=0,light:Math.round(F*100)/100,lightsOut:Te>=0,filling:Rn>=0,ending:yn,said:Xi},nt=JSON.stringify(R);nt!==V&&(V=nt,i.onState(R))}function Dt(R){et!=="brief"&&(X+=R),ya(R),lt?.(R),fo(R),M.tick(R);const nt=a.position.z<k;if(nt!==Jn&&(Jn=nt,M.setOutside(Jn)),!c.active&&Math.hypot(a.position.x-Si.x,a.position.z-Si.z)>.75&&(Si.copy(a.position),M.step()),et==="scare"&&wt){const{group:Tt}=wt.figure;Tt.position.x=Ei.x+(Math.random()-.5)*.05,Tt.position.y=Ei.y+(Math.random()-.5)*.05,Tt.rotation.z=(Math.random()-.5)*.12,X>=li&&(et="dead",e.add(Tt),wt.figure.hide(),In.intensity=0)}if(et==="intro"&&X>=Y1&&(et="play"),et==="play"&&Te<0){const Tt=Math.min(6,Math.floor(X/As));if(Tt!==vt&&(vt=Tt,M.toll(vt===6?3:1),vt===6)){et="won";for(const dt of H)Oe(dt);qs(),ui(),cs(!1),Gn=-1,Mt=null,tt(!1),i.releasePointer(),St=-1,Xt=-1,rt(1),M.setPower(!0),t===qr.length-1||Xs?_o():t===gf&&(M.fadeOut(2),M.newspaper())}}if(et==="play"&&Te<0){for(const Tt of H)X>=Tt.nextTick&&(Tt.nextTick=X+(Tt.stage===0?k1:H1)*(.8+Math.random()*.4),$n(Tt));ut.stage===3&&X>=ut.deadline&&It(ut)}if(et==="play"&&Te<0&&(Rn>=0?(ht(F+R/fu),(F>=1||X>=Rn)&&(Rn=-1)):(ht(F-tx*R),F<=0&&it())),Rt(),et==="play"&&Te<0&&Mt!==null&&(Mt=yt&&mt===1&&St<0?Math.min(d,Mt+b*R):Mt-R,K(Mt),Mt<=0&&(Mt=null,je())),et==="play"&&Et.stage===4&&X>=Et.deadline&&It(Et),et==="play"&&Te<0&&Lt.stage===3){const{group:Tt}=Lt.figure;Lt.figure.face(a.position.x,a.position.z);const dt=Math.hypot(a.position.x-Tt.position.x,a.position.z-Tt.position.z)<G1;Nt.size===i.nichePlants.length?(r[2].target=0,M.slam(W(2)),Oe(Lt)):(dt||X>=Lt.deadline)&&It(Lt)}et==="play"&&Te<0&&Ct.stage===3&&X>=Ct.deadline&&(o.target=1,Oe(Ct),at()),et==="play"&&Ct.stage===2&&X>=J&&(J=X+4+Math.random()*5,M.glassKnock(U())),et==="play"&&Ct.stage===3&&X>=bt&&(bt=X+3,M.growl(U())),et==="play"&&St>=0&&!Zt&&Ct.stage===0&&Ct.figure.face(a.position.x,a.position.z),et==="play"&&Te<0&&X>=ee&&(ee=X+cu,Ut<g&&St<0&&X>x&&Math.random()<T&&(Ut+=1,at(!0))),et==="play"&&Xt>=0&&X>=Xt&&(St=-1,Xt=-1,Ct.stage===0&&Ct.figure.hide(),rt(1),M.setPower(!0),M.click()),os(R),Dr(R),fs(),vo(),Fe.door.target&&cn==="gone"&&X>=me&&Math.hypot(a.position.x-Fe.doorAt.x,a.position.z-Fe.doorAt.z)>.75&&(Fe.door.target=0,me=1/0,M.slam(hi()));const pt=yt&&mt===0&&kt;pt!==ne&&(ne=pt,pt?($[0].layers.set(ye),M.breath({pan:0,near:.9})):$[0].layers.set(0));for(const Tt of H)Tt.figure.group.position.y>-1&&yn!==2&&Tt.figure.tick?.(X);if(st.tick?.(X),ln(),gt.forEach((Tt,dt)=>Tt.intensity=yt&&dt===mt&&!ne?dt===3?4:2.2:0),yt){const Tt=$[mt];if(Tt.aspect!==n.aspect)for(const dt of $)dt.aspect=n.aspect,dt.updateProjectionMatrix();i.setView(Tt)}Ys(),Jt(),ct()}return{update:Dt,key(R,nt){if(nt&&R==="KeyF")return bi(),!0;if(et==="brief")return(R==="Enter"||R==="Space"||R==="KeyE")&&Ot(),R!=="Escape";if(et==="scare"||et==="dead"||et==="won"||et==="ending"||Te>=0)return!0;if(!yt)return!1;if(R.startsWith("Digit")){const pt=Number(R.slice(5))-1;pt>=0&&pt<$.length&&ot(pt)}else R==="KeyA"||R==="ArrowLeft"?ot(mt-1):R==="KeyD"||R==="ArrowRight"?ot(mt+1):(R==="KeyE"||R==="Space"||R==="KeyS"||R==="Escape")&&tt();return!0},frozen(){return yt||et!=="play"||Te>=0},command(R,nt){R==="cam"&&typeof nt=="number"&&ot(nt),R==="close"&&tt(),R==="start"&&Ot()},dispose(){M.dispose(),n.remove(In),e.remove(Hs,Se,Vn,ft,re,hs,...gt);for(const R of H)R.figure.group.removeFromParent();st.group.removeFromParent(),_t.group.removeFromParent();for(const R of C)R.dispose()}}}function ts(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");if(!s)return null;let r=7;e(s,()=>(r=r*16807%2147483647,r/2147483647));const a=new bc(n);return a.colorSpace=bn,a}function _u(i,t,e){const n=e/2;i.fillStyle="#2a0103",i.beginPath();for(let s=0;s<=24;s++){const r=s/24*Math.PI*2,o=n*(.45+t()*.25);i.lineTo(n+Math.cos(r)*o,n+Math.sin(r)*o)}i.fill();for(let s=0;s<26;s++){const r=t()*Math.PI*2,o=n*(.6+t()*.38);i.beginPath(),i.arc(n+Math.cos(r)*o,n+Math.sin(r)*o,2+t()*n*.07,0,Math.PI*2),i.fill()}}function mx(i,t,e,n,s){const r=T=>e(new Xe({map:T,transparent:!0,depthWrite:!1,roughness:.2,metalness:.15,polygonOffset:!0,polygonOffsetFactor:-2})),o=e(new qn(1,1));function a(T,M,C,I){const E=new Qt(o,T);E.scale.set(M[0],M[1],1),E.position.set(...C),E.rotation.set(...I),E.raycast=()=>{},i.add(E)}const c=[-Math.PI/2,0,0],l=ts(256,256,(T,M)=>_u(T,M,256));l&&e(l);const h=r(l);for(const[T,M,C]of[[.6,-1.2,1.6],[-.4,-5.8,1.2],[2.2,-6.9,.9],[-2.5,.9,1.1],[-2.4,-4.8,1.3],[1.1,.8,.8]])a(h,[C,C],[T,.006,M],[c[0],0,T*3]);const u=ts(512,128,(T,M)=>{for(let C=0;C<9;C++)T.fillStyle=`rgba(42, 1, 3, ${.45+M()*.4})`,T.fillRect(0,30+M()*50,512,6+M()*18);_u(T,M,128)});u&&e(u);const p=r(u);a(p,[2.6,.55],[-2.2,.007,.35],[c[0],0,0]),a(p,[3.2,.6],[-1.1,.007,-2.2],[c[0],0,.5]);const d=ts(128,160,T=>{T.fillStyle="#6a0508",T.beginPath(),T.ellipse(64,108,34,40,0,0,Math.PI*2),T.fill();for(const[M,C,I,E]of[[26,60,-.5,30],[46,40,-.15,38],[68,34,.05,40],[90,42,.25,36],[108,86,.9,26]])T.save(),T.translate(M,C),T.rotate(I),T.beginPath(),T.ellipse(0,0,9,E/2+6,0,0,Math.PI*2),T.fill(),T.fillRect(-3,0,6,40+E),T.restore()});d&&e(d);const g=r(d);for(const[T,M,C]of[[.4,1.3,.2],[.75,1.55,-.15],[1.1,1.2,.35],[-.9,1.45,-.3]])a(g,[.2,.25],[T,M,t.backZ+.02],[0,0,C]);const x=e(new Xe({color:"#3a0204",roughness:.2,metalness:.15})),m=e(new zn(1,1,1));for(let T=0;T<16;T++){const M=.1+T*37%11*.05,C=new Qt(m,x);C.scale.set(.02,M,.02),C.position.set(t.hallLeft+(T%3-1)*.06,t.corridorH-.06-M/2,t.openingZ-.3-T*.62),C.raycast=()=>{},i.add(C)}const f=n>=4?"NO HAY SALIDA":"SEGUIMOS ACÁ",b=ts(1024,320,(T,M)=>{T.fillStyle="#6e0508",T.font="bold 150px Impact, 'Arial Black', sans-serif",T.textBaseline="middle";let C=30;for(const I of f){T.save(),T.translate(C,130+(M()-.5)*20),T.rotate((M()-.5)*.18),T.fillText(I,0,0),T.restore();const E=T.measureText(I).width;if(I!==" ")for(let w=0;w<2;w++){const G=C+M()*E,N=30+M()*120;T.fillRect(G,170,5+M()*4,N),T.beginPath(),T.arc(G+4,170+N,6,0,Math.PI*2),T.fill()}C+=E+8}});b&&e(b),a(r(b),[3.4,1.06],[t.right-.02,2.2,-1.8],[0,-Math.PI/2,0]);const S=new ae("#5a0a0a"),y=new Set;for(const T of s)T.traverse(M=>{if(!(M instanceof Qt))return;const C=M.material;if(!y.has(C)){if(y.add(C),C instanceof Xe)C.color.lerp(S,.35);else if(C instanceof Yn){const{r:I,g:E,b:w}=C.color;I+E+w>.3&&C.color.set("#ff1a12")}}})}function gx(i,t,e,n){const{layout:s}=t,r=e(new qn(1,1));function o(L,Y,Q,F,P=i){const z=new Qt(r,L);return z.scale.set(Y[0],Y[1],1),z.position.set(...Q),z.rotation.set(...F),z.raycast=()=>{},P.add(z),z}const a=(L,Y={})=>e(new Xe({map:L,transparent:!0,depthWrite:!1,roughness:.8,side:gn,forceSinglePass:!0,polygonOffset:!0,polygonOffsetFactor:-2,...Y})),c=new Set;for(const L of n)L.traverse(Y=>{Y instanceof Qt&&c.add(Y.material)});const l=new ae("#5e5949"),h=new Set;i.traverse(L=>{if(!(L instanceof Qt))return;const Y=L.material;c.has(Y)||h.has(Y)||!(Y instanceof Xe)||(h.add(Y),Y.color.lerp(l,.38),Y.roughness=Math.min(1,Y.roughness+.2))});const u=ts(512,48,L=>{L.fillStyle="#e8c21c",L.fillRect(0,0,512,48),L.fillStyle="#141414",L.fillRect(0,0,512,5),L.fillRect(0,43,512,5),L.font="bold 28px 'Arial Black', Impact, sans-serif",L.textBaseline="middle";for(let Y=6;Y<512;Y+=250)L.fillText("CLAUSURADO",Y,25)});u&&e(u);const p=a(u,{roughness:.5});for(const L of t.doors)for(const Y of[.55,-.5])o(p,[1.25,.1],[.03,1.35+Y*.1,.475],[0,Math.PI/2,Y],L.hinge);const d=s.glassLeft+1.45;for(const L of[.62,-.62])o(p,[3.4,.13],[d,1.35,s.backZ+.08],[0,0,L]);o(p,[4.2,.1],[(s.hallLeft+s.right)/2,1.05,s.backZ+2.2],[0,0,.03]);const g=ts(256,340,(L,Y)=>{L.fillStyle="#e9e3cf",L.fillRect(0,0,256,340),L.fillStyle="#9c1b16",L.fillRect(14,18,228,58),L.fillStyle="#f4efe0",L.font="bold 30px 'Arial Black', Impact, sans-serif",L.textAlign="center",L.textBaseline="middle",L.fillText("CLAUSURADO",128,48),L.fillStyle="#2b2824";for(let Q=100;Q<300;Q+=16)L.fillRect(22,Q,150+Y()*62,5);L.strokeStyle="#7a1612",L.lineWidth=4,L.beginPath(),L.arc(190,290,30,0,Math.PI*2),L.stroke();for(let Q=0;Q<7;Q++)L.fillStyle=`rgba(120, 96, 50, ${.1+Y()*.15})`,L.beginPath(),L.arc(Y()*256,Y()*340,10+Y()*40,0,Math.PI*2),L.fill()});g&&e(g),o(a(g),[.5,.66],[s.right-.02,1.6,-2.4],[0,-Math.PI/2,.04]);const x=ts(256,256,L=>{L.strokeStyle="rgba(230, 230, 225, 0.55)",L.lineWidth=1.5;const Y=9;for(let Q=0;Q<Y;Q++){const F=Q/(Y-1)*(Math.PI/2);L.beginPath(),L.moveTo(0,0),L.lineTo(Math.cos(F)*256,Math.sin(F)*256),L.stroke()}for(let Q=26;Q<256;Q+=26){L.beginPath();for(let F=0;F<Y;F++){const P=F/(Y-1)*(Math.PI/2),z=Q*(.9+F%2*.06);F===0?L.moveTo(Math.cos(P)*z,Math.sin(P)*z):L.lineTo(Math.cos(P)*z,Math.sin(P)*z)}L.stroke()}});x&&e(x);const m=a(x,{roughness:1,polygonOffset:!1}),f=[[s.right-.02,s.corridorH-.05,s.openingZ-.2,-Math.PI/2,0,.9],[s.left+.02,s.corridorH-.02,s.backZ+.25,Math.PI/2,-Math.PI/2,.8],[s.hallLeft+.12,s.corridorH-.02,s.openingZ-.2,Math.PI/2,0,.7],[s.right-.02,s.doorTop-.05,s.backZ+.25,-Math.PI/2,-Math.PI/2,1],[s.left+.02,.05,s.openingZ-.2,Math.PI/2,Math.PI,.5]];for(const[L,Y,Q,F,P,z]of f)o(m,[z,z],[L,Y,Q],[0,F,P]);const b=ts(64,64,(L,Y)=>{L.fillStyle="#ddd6c2",L.fillRect(4,4,56,56),L.fillStyle="#6f685a";for(let Q=14;Q<54;Q+=8)L.fillRect(10,Q,20+Y()*24,2)});b&&e(b);const S=a(b),y=a(null,{color:"#5a3f22"});let T=11;const M=()=>(T=T*16807%2147483647,T/2147483647);for(let L=0;L<70;L++){const Y=s.left+.3+M()*(s.right-s.left-.6),Q=s.backZ+.3+M()*(s.openingZ-s.backZ-.6),F=L%3===0,P=F?.22+M()*.08:.06+M()*.06;o(F?S:y,[P,P*(F?1.3:.6)],[Y,.007+L*5e-5,Q],[-Math.PI/2,0,M()*Math.PI*2])}const C=500,I=new Float32Array(C*3),E=new Float32Array(C);for(let L=0;L<C;L++)I[L*3]=s.hallLeft+M()*(s.right-s.hallLeft),I[L*3+1]=M()*3.2,I[L*3+2]=s.backZ+M()*(s.openingZ-s.backZ),E[L]=M()*Math.PI*2;const w=e(new Ze);w.setAttribute("position",new Pn(I,3));const G=new $l(w,e(new Tc({color:"#b9b29c",size:.006,transparent:!0,opacity:.45,depthWrite:!1})));G.raycast=()=>{},G.frustumCulled=!1,i.add(G);let N=0;return L=>{N+=L;for(let Y=0;Y<C;Y++){const Q=Y*3;I[Q]+=Math.sin(N*.3+E[Y])*.02*L,I[Q+1]-=.03*L,I[Q+2]+=Math.cos(N*.23+E[Y])*.02*L,I[Q+1]<0&&(I[Q+1]=3.2)}w.attributes.position.needsUpdate=!0}}const _x={primavera:{skyTop:"#5fa9dc",horizon:"#d6ecf5",sun:"#fff1d8",grass:"#6fae4f",canopy:"#5ea148",bush:"#4d8f3d",bloom:"#f3a6c0"},verano:{skyTop:"#3f97d6",horizon:"#cbe7f4",sun:"#ffefcc",grass:"#4f9a42",canopy:"#3b8a3e",bush:"#2f7a36",bloom:"#f5d34f"},otono:{skyTop:"#7fa9c9",horizon:"#f0dcc0",sun:"#ffd6a0",grass:"#8e9a48",canopy:"#cf7a30",bush:"#9a7a34",bloom:null},invierno:{skyTop:"#8eaac0",horizon:"#e2e9ed",sun:"#eef2ff",grass:"#6f8f73",canopy:"#2f7a68",bush:"#3f6f5c",bloom:null}},di={wall:"#efebe4",frame:"#2a2725",metal:"#1d1d20",oak:"#c19c74",desk:"#8a6a4c",chair:"#26262a",pot:"#dcd6cd",trunk:"#5f4636",stone:"#bdb8ae"},jo=[{z:.35,color:"#b0602e"},{z:-1.55,color:"#1f6a6e",glossy:!0},{z:-3.45,color:"#94a63c"}],We=-3.4,Ne=-1.5,ve=3,Cn=1.5,ol=6.8,Rs=-2.6,ge=-8,Qo=-15.5,Di=6.2,Ss=3.6,Es=3.3,Re=3,Li=-1.2,hr=1.7,ze=2.75,on={z:(Rs+ge)/2,width:1.5,sill:.95,lintel:2.05},Yt={left:1.2,back:Cn+.22,front:Cn+3.7,height:3.1,doorX:2.14,doorWidth:1.05,doorH:2.85},xu=.2,al=2;let ta=0;const vu=2,xx=1/40,vx=90,Ts=new q(.4,1.45,2.9),Mu=5.4,ea=new q(.4,2.1,ge),Mx=3.6,yu=.75,yx=1.55,ll=.28,Sx=2.2,Ex=1.8,Su=2.6,Tx=1.6,bx=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"]);function Bc(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Eu(i,t){const e=i%11,n=e<3?Math.sin(e/3*Math.PI):0;return Math.sin(i*.8+t)*.4+Math.sin(i*1.9+t*1.7)*.2+n*.8}function wx(){const i=new xi(1,20,14),t=i.attributes.position,e=new q;for(let n=0;n<t.count;n++){e.fromBufferAttribute(t,n);const s=1+.08*Math.sin(e.x*5.1+e.y*2.3)*Math.sin(e.z*4.7-e.y*3.1);e.multiplyScalar(s),e.y*=.88,t.setXYZ(n,e.x,e.y,e.z)}return i.computeVertexNormals(),i}function zc(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");if(!s)return null;e(s);const r=new bc(n);return r.colorSpace=bn,r}function Ax(){return zc(512,512,i=>{const t=Bc(7),e=8,n=512/e;for(let s=0;s<e;s++){const r=s*n;let o=-t()*256;for(;o<512;){const a=180+t()*220,c=25+t()*9;i.fillStyle=`hsl(28 7% ${c}%)`,i.fillRect(r,o,n,a),i.strokeStyle=`hsl(28 9% ${c-5}% / 0.5)`,i.lineWidth=1;for(let l=0;l<4;l++){const h=r+6+t()*(n-12);i.beginPath(),i.moveTo(h,o),i.lineTo(h+(t()-.5)*6,o+a),i.stroke()}i.fillStyle="rgb(0 0 0 / 0.55)",i.fillRect(r,o,n,2),o+=a}i.fillStyle="rgb(0 0 0 / 0.5)",i.fillRect(r,0,2,512)}})}function Rx(){return zc(256,256,i=>{const t=Bc(11);i.fillStyle="#ffffff",i.fillRect(0,0,256,256);for(let e=0;e<2600;e++){const n=234+Math.floor(t()*21);i.fillStyle=`rgb(${n} ${n} ${n})`,i.fillRect(Math.floor(t()*256),Math.floor(t()*256),1+Math.floor(t()*3),1+Math.floor(t()*3))}})}function Cx(){const i=new nf,t=64;for(let e=0;e<=t;e++){const n=e/t*Math.PI*2,s=.5*Math.cos(n)*(1-.14*Math.sin(n)),r=.5*Math.sin(n);e===0?i.moveTo(s,r):i.lineTo(s,r)}return i}function Px(){return zc(160,216,i=>{i.fillStyle="#efe6d6",i.fillRect(0,0,160,216);for(const t of[45,80,115]){i.strokeStyle="#5f7f4e",i.lineWidth=3,i.beginPath(),i.moveTo(t,88),i.lineTo(t,180),i.stroke(),i.fillStyle="#6f8f5a",i.beginPath(),i.ellipse(t+7,140,8,3.5,-.6,0,Math.PI*2),i.fill(),i.fillStyle="#c8775a";for(let n=0;n<6;n++){const s=n/6*Math.PI*2;i.beginPath(),i.ellipse(t+Math.cos(s)*9,88+Math.sin(s)*9,8.5,5,s,0,Math.PI*2),i.fill()}i.fillStyle="#e9c46a",i.beginPath(),i.arc(t,88,5,0,Math.PI*2),i.fill()}})}function Lx(i,{season:t,night:e,walkIn:n,centered:s=!1,horror:r=!1,nightLevel:o=0,onAim:a,onNight:c}){let l;try{l=new m1({canvas:i,antialias:!1,powerPreference:"high-performance"})}catch{return null}l.setPixelRatio(1),l.toneMapping=hc,l.shadowMap.enabled=!r,l.shadowMap.type=lc,l.shadowMap.autoUpdate=!1;const h=e||r,u=r&&(qr[o]?.blood??!1),p=r&&(qr[o]?.abandoned??!1),d=_x[t],g=Bc(20240),x=[],m=V=>(x.push(V),V),f=new Yu,b=new sc(l),S=new g1;f.environment=m(b.fromScene(S,.04).texture),f.environmentIntensity=r?.02:h?.12:.45,r&&(f.fog=new Sc(u?"#1c0304":p?"#0c0e09":"#05070b",u?.07:p?.065:.05)),S.dispose(),b.dispose();const y=new wn(58,1,.05,400);y.position.set(Ts.x,Ts.y,n?Mu:Ts.z),y.lookAt(ea);const T=(V,ct={})=>m(new Xe({color:V,roughness:.85,...ct})),M=Rx();M&&m(M);const C=T(di.wall,{roughness:.95,map:M}),I=T(di.frame,{roughness:.55,metalness:.25}),E=T(di.metal,{roughness:.4,metalness:.6}),w=T(di.oak,{roughness:.7}),G=T(di.desk,{roughness:.6}),N=T(di.chair,{roughness:.5}),L=T(di.pot,{roughness:.8}),Y=T("#f4f1ea",{roughness:.9}),Q=m(new Xe({color:"#dcecf1",roughness:.05,metalness:.1,transparent:!0,opacity:.12,depthWrite:!1,side:gn,forceSinglePass:!0})),F=m(new Yn({color:"#fff1d6"})),P=m(new Yn),z=m(new zn(1,1,1)),rt=m(new oi(.5,.5,1,20)),ht=m(wx());function H(V,ct=f){return ct.add(V),V}function B(V,ct,Dt,R){const nt=new Qt(z,V);return nt.scale.set(...ct),nt.position.set(...Dt),nt.castShadow=!0,nt.receiveShadow=!0,H(nt,R)}function st(V,ct,Dt,R,nt){const pt=new Qt(rt,V);return pt.scale.set(ct*2,Dt,ct*2),pt.position.set(...R),pt.castShadow=!0,pt.receiveShadow=!0,H(pt,nt)}function _t(V,ct,Dt){const R=B(P,V,ct,Dt);return R.visible=!1,R}function Ft(V,ct,Dt,R=0){const nt=new Qt(m(new qn(V,ct)),Q);return nt.position.set(...Dt),nt.rotation.x=R,H(nt)}function lt(V,ct){const Dt=B(I,V,ct);return Dt.castShadow=!1,Dt}const ut=m(new Ac(.08,16));function Et(V,ct,Dt){const R=H(new Qt(ut,F));R.position.set(V,ct,Dt),R.rotation.x=Math.PI/2}const Lt=[];function Ct(V,ct,Dt){const R={object:V,phase:ct,amount:Dt,kick:0};return Lt.push(R),R}const Vt=ve-We,ue=ol-ge,k=Ax();k&&(m(k),k.wrapS=Is,k.wrapT=Is,k.anisotropy=l.capabilities.getMaxAnisotropy(),k.repeat.set(Vt/1.6,ue/1.6));const te=H(new Qt(m(new qn(Vt,ue)),T(k?"#ffffff":"#4a4643",{map:k,roughness:.42})));te.rotation.x=-Math.PI/2,te.position.set((We+ve)/2,0,(ol+ge)/2),te.receiveShadow=!0;const Kt=r?Yt.front+.07:ol,O=Kt-Cn,$=(Kt+Cn)/2,Pt=(We+ve)/2;B(C,[.2,Ss,O],[We-.1,Ss/2,$]),B(C,[.2,Ss,O],[ve+.1,Ss/2,$]),B(C,[Vt+.4,.2,O],[Pt,Ss+.1,$]),B(C,[Vt+.4,Ss,.2],[Pt,Ss/2,Kt+.1]);const gt=.3;B(C,[Vt+.4,Di-Es,.3],[Pt,(Di+Es)/2,Cn]),B(C,[gt,Es,.3],[We+gt/2,Es/2,Cn]),B(I,[.09,Es,.36],[We+gt+.045,Es/2,Cn]),B(I,[Vt-gt,.14,.36],[(We+gt+ve)/2,Es-.07,Cn]);const At=Cn-ge,W=(Cn+ge)/2,U=(We+Ne)/2,v=Ne-We;B(C,[v,.3,At],[U,Re+.15,W]),B(I,[.22,.32,At],[Ne,Re+.1,W]),B(C,[.2,Di-Re-.26,At],[Ne-.02,(Di+Re+.26)/2,W]);const _=Rs-ge,D=on.z+on.width/2,Z=on.z-on.width/2;B(C,[.16,Re,Rs-D],[Ne,Re/2,(Rs+D)/2]),B(C,[.16,Re,Z-ge],[Ne,Re/2,(Z+ge)/2]),B(C,[.16,on.sill,on.width],[Ne,on.sill/2,on.z]),B(C,[.16,Re-on.lintel,on.width],[Ne,(Re+on.lintel)/2,on.z]),B(C,[.26,.04,on.width+.06],[Ne+.02,on.sill+.02,on.z]),B(I,[.22,Re,.12],[Ne,Re/2,Rs]),lt([.02,.08,_],[Ne+.09,.04,(Rs+ge)/2]),B(C,[v,Re,.2],[U,Re/2,ge-.1]),B(T("#6e4e38",{roughness:.6}),[.95,2.35,.05],[U,1.175,ge+.03]),B(I,[1.05,.05,.07],[U,2.38,ge+.04]);const j=.95,K=2.35;let X=0,et=Cn;for(const V of jo){const ct=V.z+j/2;B(C,[.2,Re,et-ct],[We-.1,Re/2,(et+ct)/2]),B(C,[.2,Re-K,j],[We-.1,(Re+K)/2,V.z]),et=V.z-j/2}B(C,[.2,Re,et-ge],[We-.1,Re/2,(et+ge)/2]);const vt=2.4,yt=We-.2-vt,mt=We-.2-vt/2,St=T(di.wall,{roughness:.95,map:M,emissive:"#fff4e6",emissiveIntensity:r?.03:.35}),Xt=T("#b8a189",{roughness:.7});for(const V of jo){B(St,[.1,Re,1.8],[yt-.05,Re/2,V.z]);for(const Dt of[-1,1])B(St,[vt,Re,.1],[mt,Re/2,V.z+Dt*.9]);B(St,[vt,.1,1.8],[mt,Re+.05,V.z]),B(Xt,[vt,.02,1.8],[mt,.01,V.z]),r&&H(new un(u?"#c25050":"#8fa6c8",.6,0,2)).position.set(mt,Re-.3,V.z),B(G,[.62,.04,1.1],[yt+.36,.74,V.z]);for(const Dt of[-1,1])B(G,[.58,.72,.04],[yt+.36,.36,V.z+Dt*.52]);B(Y,[.22,.02,.3],[yt+.4,.77,V.z-.2]);const ct=H(new de);ct.position.set(yt+1.05,0,V.z+.1),B(N,[.44,.06,.44],[0,.46,0],ct),B(N,[.05,.54,.42],[.2,.73,0],ct);for(const[Dt,R]of[[-.18,-.18],[-.18,.18],[.18,-.18],[.18,.18]])B(E,[.025,.45,.025],[Dt,.225,R],ct)}const Zt=[];for(const V of jo){const ct=T(V.color,V.glossy?{roughness:.2,metalness:.15}:{roughness:.6}),Dt=j/2;B(I,[.07,2.42,.05],[We+.03,1.21,V.z+Dt+.025]),B(I,[.07,2.42,.05],[We+.03,1.21,V.z-Dt-.025]),B(I,[.07,.05,j+.1],[We+.03,2.4,V.z]);const R=H(new de);R.position.set(We+.035,0,V.z-Dt),B(ct,[.05,2.35,j],[0,1.175,Dt],R),B(E,[.06,.03,.14],[.05,1.05,j-.12],R);const nt={hinge:R,open:0,target:0,closeAt:0};Zt.push(nt),R.userData.onTouch=()=>{nt.target=nt.target?0:1,nt.closeAt=X+5}}lt([.02,.08,At],[We+.01,.04,W]);for(let V=Cn-.8;V>ge;V-=1.6)Et(U,Re-.005,V);const Ut=[];for(const V of[.2,-2.6,-5.6]){const ct=H(new un(u?"#ff5a48":r?"#b9c6dd":"#ffd7a8",r?.9:h?6:2.4,0,2));ct.position.set(U,Re-.3,V),Ut.push(ct)}for(let V=0;V<3;V++){const ct=Rs+.32+V*.62,Dt=H(new de);Dt.position.set(Ne-.3,0,ct),B(N,[.44,.06,.44],[0,.46,0],Dt);const R=H(new de,Dt);R.position.set(-.195,.46,0),R.rotation.z=-.08,B(N,[.05,.54,.42],[0,.27,0],R);for(const[nt,pt]of[[-.18,-.18],[-.18,.18],[.18,-.18],[.18,.18]])B(E,[.025,.45,.025],[nt,.225,pt],Dt)}B(C,[.2,Di,At],[ve+.1,Di/2,W]),lt([.02,.08,At+O],[ve-.01,.04,(Kt+ge)/2]);const ee=ve-Ne,J=(Ne+ve)/2;B(C,[Li-Ne,ze,.2],[(Ne+Li)/2,ze/2,ge-.1]),B(C,[ve-hr,ze,.2],[(ve+hr)/2,ze/2,ge-.1]);const bt=(Li+hr)/2,Mt=bt-Li;B(I,[.07,ze,.2],[Li,ze/2,ge-.1]),B(I,[.07,ze,.2],[hr,ze/2,ge-.1]),B(I,[hr-Li,.06,.2],[bt,.03,ge-.1]),Ft(hr-bt,ze,[bt+Mt/2,ze/2,ge-.15]),B(I,[.1,ze,.06],[bt,ze/2,ge-.15]);const Nt=H(new de),wt=Li+Mt/2;Nt.position.set(wt,0,ge-.05);const ft=H(new Qt(m(new qn(Mt,ze)),Q),Nt);ft.position.y=ze/2;for(const V of[-Mt/2+.03,Mt/2-.03])B(I,[.06,ze-.06,.05],[V,ze/2,0],Nt);B(I,[Mt,.06,.05],[0,ze-.05,0],Nt),B(I,[Mt,.06,.05],[0,.08,0],Nt),B(E,[.03,.45,.05],[Mt/2-.12,1.1,.03],Nt),_t([Mt,ze,.04],[0,ze/2,0],Nt);const kt={open:0,target:0};Nt.userData.onTouch=()=>{kt.target=kt.target?0:1};const ne=_t([Mt,ze,.04],[bt+Mt/2,ze/2,ge-.15],f);ne.userData.walkOnly=!0,ne.userData.onTouch=Nt.userData.onTouch,B(I,[ee,.16,.18],[J,ze,ge-.1]);const ye=Di-ze,re=Math.hypot(ye,At),nn=H(new de);nn.position.set(J,(Di+ze)/2,W),nn.rotation.x=-Math.atan2(ye,At);const An=H(new Qt(m(new qn(ee,re)),Q),nn);An.rotation.x=Math.PI/2;for(let V=-ee/2+1.12;V<ee/2-.4;V+=1.12)B(I,[.07,.16,re],[V,0,0],nn);for(let V=0;V<=8;V++)B(I,[ee,.12,.07],[0,0,-re/2+V*re/8],nn);for(const V of[-1,1])B(I,[.16,.22,re],[V*(ee/2-.08),0,0],nn);const vn=13,Mn=.34,ai=.46,li=-6.7,Te=ve-.55;for(let V=0;V<vn;V++)B(w,[1.02,.06,.3],[Te,.2+V*Mn,li+V*ai]);const Ln=(vn-1)*Mn,Rn=(vn-1)*ai,Jn=Math.atan2(Ln,Rn),Si=Math.hypot(Ln,Rn)+.6,In=.2+Ln/2-.12,Ei=li+Rn/2;for(const V of[Te-.5,Te+.48])B(E,[.05,.24,Si],[V,In,Ei]).rotation.x=-Jn;B(E,[.03,.03,Si],[Te-.53,In+.95,Ei]).rotation.x=-Jn;for(let V=1;V<vn;V+=2)B(E,[.015,.9,.015],[Te-.53,.2+V*Mn+.47,li+V*ai]);B(C,[1.25,.25,2.4],[ve-.625,.2+vn*Mn+.1,.3]);const Un=.2+vn*Mn+.225;if(r){const V=ve-1.25,ct=xu,Dt=Cn-.15-ct,R=ct+Dt/2;B(C,[V-Ne,.25,Dt],[(Ne+V)/2,Un-.125,R]),B(I,[V-Ne+.02,.08,.04],[(Ne+V)/2,Un-.21,ct-.01]);const nt=.95,pt=V-Ne;B(E,[pt,.035,.035],[(Ne+V)/2,Un+nt,ct+.03]),B(E,[pt,.02,.02],[(Ne+V)/2,Un+nt/2,ct+.03]);for(let dt=Ne+.1;dt<=V+.01;dt+=.45)B(E,[.02,nt,.02],[dt,Un+nt/2,ct+.03]);const Tt=ct+.9;B(E,[.035,.035,Tt],[V+.02,Un+nt,(ct-.9)/2]);for(let dt=-.85;dt<ct;dt+=.45)B(E,[.02,nt,.02],[V+.02,Un+nt/2,dt])}const zs=_t([.8,1.7,2.45],[ve-.4,.85,li-.15+2.45/2],f);zs.userData.collides=!0;const je=ve-1.15,Oe=-4.3;B(G,[1.2,.76,1.9],[je,.38,Oe]),B(I,[1.26,.04,1.96],[je,.78,Oe]);const $n=H(new de),A=r?.35:h?1.4:.35,tt=T("#0d1520",{emissive:h?"#bcd4ff":"#8fb2d9",emissiveIntensity:A,roughness:.3});B(E,[.04,.34,.56],[je-.3,1.1,Oe+.1],$n),B(E,[.18,.02,.18],[je-.27,.81,Oe+.1],$n),B(E,[.03,.2,.04],[je-.29,.9,Oe+.1],$n),B(tt,[.01,.3,.52],[je-.275,1.1,Oe+.1],$n),_t([.22,.5,.7],[je-.29,1.05,Oe+.1],$n),r||($n.userData.onTouch=()=>{tt.emissiveIntensity=tt.emissiveIntensity>0?0:A}),B(E,[.16,.02,.44],[je+.05,.81,Oe+.1]),B(Y,[.24,.02,.32],[je+.1,.81,Oe-.55]).rotation.y=.2,st(T("#3f5f58",{roughness:.6}),.04,.12,[je-.2,.86,Oe-.7]);const ot=H(new de),at=r?.4:h?.8:.2,it=r?1.6:h?3:.6,Rt=T("#e9e2d4",{roughness:.7,emissive:"#ffd9a8",emissiveIntensity:at});B(E,[.12,.02,.12],[je-.35,.81,Oe+.72],ot),st(E,.012,.42,[je-.35,1.02,Oe+.72],ot),st(Rt,.09,.14,[je-.3,1.24,Oe+.72],ot).castShadow=!1,_t([.4,.65,.4],[je-.32,1.05,Oe+.72],ot);const It=H(new un(u?"#ff8a6a":"#ffd3a0",it,0,2));It.position.set(je-.3,1.1,Oe+.72),ot.userData.onTouch=()=>{const V=It.userData.off===!0;It.userData.off=!V,Rt.userData.off=!V,It.intensity=V?it:0,Rt.emissiveIntensity=V?at:0};const Ot=H(new de);r?Ot.position.set(ve-.3,0,Oe+.1):(Ot.position.set(ve-.35,0,-3.3),Ot.rotation.y=-.5);for(let V=0;V<5;V++){const ct=V*Math.PI*2/5;B(E,[.3,.03,.04],[Math.cos(ct)*.15,.06,-Math.sin(ct)*.15],Ot).rotation.y=ct}st(E,.03,.4,[0,.28,0],Ot),B(N,[.5,.08,.5],[0,.5,0],Ot),B(N,[.06,.8,.46],[.24,.98,0],Ot).rotation.z=.08,B(N,[.3,.04,.05],[.05,.72,.25],Ot),B(N,[.3,.04,.05],[.05,.72,-.25],Ot);const Bt=H(new de),$t=H(new de,Bt);if(r){Bt.position.set(ve-.04,1.45,.55);const V=T("#5b5f63",{roughness:.5,metalness:.5});B(V,[.06,.55,.4],[0,0,0],Bt),B(I,[.02,.42,.28],[-.035,0,0],Bt),$t.position.set(-.06,0,0),$t.rotation.z=.6,B(T("#b0312a",{roughness:.5}),[.04,.2,.05],[0,.1,0],$t),_t([.3,.7,.55],[-.1,0,0],Bt),B(m(new Yn({color:"#ff3322"})),[.02,.025,.025],[-.035,.22,.14],Bt)}const jt=r?null:Px();if(jt){m(jt),jt.offset.set(.5,.5);const V=m(new Dc(Cx(),48)),ct=.9,Dt=1.22,R=new q(ve-.015,1.8,.55),nt=H(new Qt(V,G));nt.scale.set(ct+.07,Dt+.07,1),nt.position.set(R.x+.005,R.y,R.z),nt.rotation.y=-Math.PI/2;const pt=H(new Qt(V,T("#ffffff",{map:jt,roughness:.8})));pt.scale.set(ct,Dt,1),pt.position.copy(R),pt.rotation.y=-Math.PI/2,pt.receiveShadow=!0}const qt={hinge:H(new de),open:0,target:0,closeAt:1/0},se=H(new de);if(r){const V=T("#b9beba",{roughness:.28,metalness:.05}),ct=T("#e6e3dc",{roughness:.22}),Dt=T("#0d1317",{roughness:.06,metalness:.9}),R=ve-Yt.left,nt=Yt.front-Yt.back,pt=(Yt.left+ve)/2,Tt=(Yt.front+Yt.back)/2,dt=Yt.doorWidth/2,oe=Yt.doorX-dt,Ge=Yt.doorX+dt;B(C,[.14,Yt.height,nt],[Yt.left,Yt.height/2,Tt]),B(C,[R,Yt.height,.14],[pt,Yt.height/2,Yt.front]),B(C,[oe-Yt.left,Yt.height,.14],[(Yt.left+oe)/2,Yt.height/2,Yt.back]),B(C,[ve-Ge,Yt.height,.14],[(ve+Ge)/2,Yt.height/2,Yt.back]),B(C,[Yt.doorWidth,Yt.height-Yt.doorH,.14],[Yt.doorX,(Yt.height+Yt.doorH)/2,Yt.back]),B(C,[R+.2,.14,nt+.28],[pt,Yt.height+.07,Tt]),B(I,[.06,Yt.doorH+.06,.09],[oe-.03,(Yt.doorH+.06)/2,Yt.back-.09]),B(I,[.06,Yt.doorH+.06,.09],[Ge+.03,(Yt.doorH+.06)/2,Yt.back-.09]),B(I,[Yt.doorWidth+.12,.06,.09],[Yt.doorX,Yt.doorH+.03,Yt.back-.09]),lt([.02,.08,nt+.14],[Yt.left-.08,.04,Tt]),lt([R,.08,.02],[pt,.04,Yt.back-.08]);const Be=1.6;B(V,[.02,Be,nt-.14],[Yt.left+.08,Be/2,Tt]),B(V,[.02,Be,nt-.14],[ve-.01,Be/2,Tt]),B(V,[R-.14,Be,.02],[pt,Be/2,Yt.front-.08]),B(V,[R-.2,.02,nt-.2],[pt,.012,Tt]).castShadow=!1;const Wn=Yt.back+2.1,fi=Yt.back+1.2;B(ct,[.16,.56,.42],[Yt.left+.18,.48,Wn]),B(ct,[.52,.4,.36],[Yt.left+.42,.2,Wn]),B(ct,[.48,.04,.38],[Yt.left+.44,.42,Wn]),B(ct,[.44,.15,.5],[ve-.24,.82,fi]),st(E,.015,.16,[ve-.38,.96,fi]),B(I,[.02,.78,.56],[ve-.055,1.56,fi]),B(Dt,[.03,.72,.5],[ve-.07,1.56,fi]),se.position.set(Yt.doorX,1.25,Yt.front-.11),se.rotation.y=Math.PI,B(T("#4a4e52",{roughness:.5,metalness:.5}),[.36,.48,.1],[0,0,0],se),B(I,[.26,.32,.02],[0,.02,.055],se),B(m(new Yn({color:"#5ef08a"})),[.03,.03,.02],[.13,.19,.055],se),_t([.62,.8,.3],[0,0,.14],se),qt.hinge.position.set(oe,0,Yt.back-.05),B(T("#6e4e38",{roughness:.6}),[Yt.doorWidth,Yt.doorH,.05],[dt,Yt.doorH/2,0],qt.hinge),B(E,[.14,.03,.07],[Yt.doorWidth-.14,1.02,-.05],qt.hinge);for(const kc of[Tt+.9,Tt-.9]){Et(pt,Yt.height-.005,kc);const Hc=H(new un(u?"#ff5a48":"#b9c6dd",1.5,0,2));Hc.position.set(pt,Yt.height-.35,kc),Ut.push(Hc)}}const pe=m(new Rc(.05,1,5));pe.translate(0,.5,0);function me(V,ct,Dt,R,nt=.2,pt=0){const Tt=H(new de);Tt.position.set(V,pt,ct),st(L,nt,nt*2.1,[0,nt*1.05,0],Tt);const dt=H(new de,Tt);dt.position.y=nt*2;const oe=T(R,{roughness:.7});for(let Be=0;Be<9;Be++){const Wn=H(new Qt(pe,oe),dt);Wn.scale.set(1,Dt*(.6+g()*.5),1),Wn.rotation.set((g()-.5)*.6,g()*Math.PI*2,(g()-.5)*.6),Wn.castShadow=!0}const Ge=Ct(dt,g()*6,.035);return Tt.userData.onTouch=()=>{Ge.kick=1},Tt}me(Li+.35,ge+.45,1.3,"#3f7d45",.24),me(ve-.4,-7.3,1.1,"#4a8a4c"),me(We+.35,ge+.4,.9,"#3f7d45"),me(We+.3,Kt-.6,1,"#467f48");const Ae=[-.5,0,.5].map(V=>me(Ne+.02,on.z+V,.42,"#4a8a4c",.09,on.sill+.04)),xe=ge-Qo,Jt=(ge+Qo)/2,Se=H(new Qt(m(new qn(16,xe)),T(d.grass,{roughness:1})));Se.rotation.x=-Math.PI/2,Se.position.set(0,0,Jt),Se.receiveShadow=!0,B(C,[14,3.2,.3],[0,1.6,Qo]),B(C,[.3,3.2,xe],[-3.4,1.6,Jt]),B(C,[.3,3.2,xe],[3.8,1.6,Jt]);const fe=T(di.stone,{roughness:.9});for(let V=0;V<5;V++)B(fe,[.55,.03,.34],[.3+(V%2?.15:-.12),.015,ge-.7-V*.8]);const an=T(d.bush,{roughness:.9}),kn=d.bloom?T(d.bloom,{roughness:.6}):null,Ke=m(new xi(.06,8,6)),Nn=[[-2.9,-14.9],[-2.1,-15],[-1.1,-14.9],[.2,-15],[1.4,-14.9],[2.9,-14.9],[-2.9,-12.5],[-2.9,-10.2],[3.3,-11.2],[3.3,-9.3]],Le=T(d.canopy,{roughness:.9}),dn=T(d.bush,{roughness:.75});for(const[V,ct]of Nn){const Dt=H(new de);Dt.position.set(V,0,ct);const R=.8+g()*.5,nt=4+Math.floor(g()*3);for(let Tt=0;Tt<nt;Tt++){const dt=H(new Qt(ht,g()<.35?Le:an),Dt),oe=g()*Math.PI*2,Ge=g()*.38*R;dt.scale.set((.26+g()*.16)*R*1.2,(.24+g()*.14)*R,(.26+g()*.14)*R),dt.position.set(Math.cos(oe)*Ge,(.2+g()*.3)*R,Math.sin(oe)*Ge*.7),dt.castShadow=!0,dt.receiveShadow=!0}for(let Tt=0;Tt<8;Tt++){const dt=H(new Qt(pe,dn),Dt);dt.scale.set(1,(.45+g()*.45)*R,1),dt.position.set((g()-.5)*.5*R,0,(g()-.5)*.3*R),dt.rotation.set((g()-.5)*.9,g()*Math.PI*2,(g()-.5)*.9)}if(kn)for(let Tt=0;Tt<6;Tt++){const dt=H(new Qt(Ke,kn),Dt),oe=g()*Math.PI*2;dt.position.set(Math.cos(oe)*.35*R,(.35+g()*.35)*R,Math.sin(oe)*.25*R)}const pt=Ct(Dt,g()*6,.05);Dt.userData.onTouch=()=>{pt.kick=1}}me(2.9,-9.2,.9,d.bush);const sn=T(di.trunk,{roughness:.9}),Ie=H(new de);Ie.position.set(.9,0,-12.2),st(sn,.17,4.8,[0,2.4,0],Ie).rotation.z=.04;const qe=H(new de,Ie);qe.position.y=4.6;const Vi=T(d.canopy,{roughness:.85});for(let V=0;V<10;V++){const ct=H(new Qt(ht,Vi),qe);if(V===0)ct.position.set(0,1.4,0),ct.scale.setScalar(1.5);else{const Dt=V/9*Math.PI*2+g()*.5;ct.position.set(Math.cos(Dt)*(1.2+g()*.6),.6+g()*1.6,Math.sin(Dt)*1.1),ct.scale.setScalar(.8+g()*.45)}ct.castShadow=!0}const Hn=Ct(qe,1.3,.03);Ie.userData.onTouch=()=>{Hn.kick=1};const wr=new ae(u?"#0e0102":r?"#030509":h?"#0a1628":d.skyTop),ks=new ae(u?"#3d0507":r?"#0c121c":h?"#1f3452":d.horizon);H(new Qt(m(new xi(250,32,16)),m(new Dn({side:_n,depthWrite:!1,toneMapped:!1,uniforms:{top:{value:wr},horizon:{value:ks}},vertexShader:`
            varying vec3 vDirection;
            void main() {
              vDirection = normalize(position);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform vec3 top;
            uniform vec3 horizon;
            varying vec3 vDirection;
            void main() {
              float t = pow(clamp(vDirection.y, 0.0, 1.0), 0.6);
              gl_FragColor = vec4(mix(horizon, top, t), 1.0);
              #include <colorspace_fragment>
            }
          `}))));const Hs=m(new xi(1,16,12)),ya=T(u?"#2a0506":r?"#0e131b":h?"#2a3a55":"#ffffff",{emissive:h?"#000000":"#ffffff",emissiveIntensity:h?0:.55,roughness:1}),fo=[];for(let V=0;V<6;V++){const ct=H(new de);for(let Dt=0;Dt<5;Dt++){const R=H(new Qt(Hs,ya),ct);R.position.set((Dt-2)*3.4+g()*1.5,g()*1.2,g()*2),R.scale.set(3.4+g()*2.4,1.5+g()*.9,2.6)}ct.position.set(-70+V*26+g()*10,30+g()*12,-35-g()*45),fo.push({group:ct,speed:.6+g()*.6})}if(h&&!r){const V=[];for(let Dt=0;Dt<500;Dt++){const R=g()*Math.PI*2,nt=.25+g()*1.25;V.push(Math.cos(R)*Math.cos(nt)*200,Math.sin(nt)*200,Math.sin(R)*Math.cos(nt)*200)}const ct=m(new Ze);ct.setAttribute("position",new we(V,3)),H(new $l(ct,m(new Tc({color:"#e6edf5",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:.85}))))}const ln=H(new ec(u?"#c04040":h?"#9fb6e0":d.sun,r?.12:h?.6:3.4));ln.position.set(-2.5,14,-11.5),ln.target.position.set(.6,0,-3),H(ln.target),ln.castShadow=!0;const Fe=window.innerWidth<700||ta>0?1024:2048;ln.shadow.mapSize.set(Fe,Fe),Object.assign(ln.shadow.camera,{left:-10,right:10,top:13,bottom:-13,near:1,far:45}),ln.shadow.camera.updateProjectionMatrix(),ln.shadow.bias=-5e-4,ln.shadow.normalBias=.03,ln.shadow.radius=3;const Vs=H(new R0(u?"#4a0a0c":h?"#1c2a44":"#dfe9f3",u?"#1a0404":h?"#1a140f":"#5b5046",r?.07:h?.35:1.05)),Vn=H(new ec("#fff7ee",r?.01:h?.08:.35));if(Vn.position.set(1,3,10),r){for(const V of[-1.5,-5.5]){const ct=H(new un(u?"#ff4a3a":"#a9b8d4",1.1,0,2));ct.position.set(.8,3.4,V),Ut.push(ct)}H(new un(u?"#d04a3a":"#9fb2d0",2.6,0,2)).position.set(.4,2.3,ge-1.4)}else if(h){for(const V of[-1.5,-5.5])H(new un("#ffcf9a",8,0,2)).position.set(.8,3.4,V);H(new un("#ffd9a0",6,0,2)).position.set(-1.6,1.2,-11)}const cn=new E1(l),jn=new b1(al,f,y);jn.depthEdgeStrength=0,jn.normalEdgeStrength=.15,cn.addPass(jn),cn.addPass(new T1);let ci=ta,Gs=y;function is(V){l.shadowMap.needsUpdate=!0,ci===0?cn.render(V):l.render(f,Gs)}function po(){ci=Math.min(vu,ci+1),ta=Math.max(ta,ci),ln.shadow.mapSize.x>1024&&(ln.shadow.mapSize.set(1024,1024),ln.shadow.map?.dispose(),ln.shadow.map=null),xo()}const hn={frames:0,time:0},Gn={x:0,y:0},Qe={x:0,y:0},Ar=window.matchMedia?.("(pointer: fine)").matches??!1,ss=V=>{Gn.x=V.clientX/window.innerWidth*2-1,Gn.y=V.clientY/window.innerHeight*2-1};Ar&&window.addEventListener("pointermove",ss,{passive:!0});const Rr=new nc,Ws=new Ht,Cr=V=>{const ct=V.material;return V instanceof $l||!ct||ct.transparent||ct instanceof Dn};function rs(V,ct,Dt=1/0){Ws.set(V,ct),Rr.setFromCamera(Ws,y),Rr.far=Dt;for(const R of Rr.intersectObjects(f.children,!0)){if(Cr(R.object)||!Fn&&R.object.userData.walkOnly)continue;let nt=!1;for(let pt=R.object;pt;pt=pt.parent){if(typeof pt.userData.onTouch=="function")return pt;pt.userData.passThrough&&(nt=!0)}if(!nt)return null}return null}function mo(V,ct,Dt=1/0){return rs(V,ct,Dt)?.userData.onTouch??null}function hi(V){const ct=i.getBoundingClientRect();return mo((V.clientX-ct.left)/ct.width*2-1,-((V.clientY-ct.top)/ct.height)*2+1)}let go=0;const ui=V=>{Fn||V.timeStamp-go<50||(go=V.timeStamp,i.style.cursor=hi(V)?"pointer":"")},Ti=V=>{if(!Fn){hi(V)?.();return}if(Ve||document.pointerLockElement===i)return;i.requestPointerLock?.()?.catch?.(()=>{})};i.addEventListener("pointermove",ui),i.addEventListener("click",Ti);let Fn=!1;const Je={position:new q,yaw:0,pitch:0},Sa=new Kn(0,0,0,"YXZ"),os=new Set;let Ve=null;const Pr=new Tr;let Gi=null,as=0;const Wi={active:!1,standAt:new q};let Qn=null;const ls=[],cs=new Set;Ot.traverse(V=>cs.add(V)),f.traverse(V=>{V instanceof Qt&&(V.visible||V.userData.collides)&&!cs.has(V)&&ls.push(V)});const Dr=new nc,Lr=new q,yn=new q;function Xi(V,ct){const Dt=Math.hypot(V,ct);if(!Dt)return!1;yn.set(V/Dt,0,ct/Dt),Dr.far=Dt+ll;for(const R of[.4,.85,1.5])for(const nt of[-.8,0,.8])if(Lr.set(Je.position.x-yn.z*nt*ll,R,Je.position.z+yn.x*nt*ll),Dr.set(Lr,yn),Dr.intersectObjects(ls,!1).length)return!0;return!1}function qi(V){V!==Gi&&(Gi=V,a?.(V))}function hs(V){if(Qn?.frozen())return;const ct=(...Ge)=>Ge.some(Be=>os.has(Be));if(Je.yaw+=((ct("ArrowLeft")?1:0)-(ct("ArrowRight")?1:0))*Ex*V,Wi.active){if(!ct("KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown"))return;Wi.active=!1,Je.position.copy(Wi.standAt)}const Dt=(ct("KeyW","ArrowUp")?1:0)-(ct("KeyS","ArrowDown")?1:0),R=(ct("KeyD")?1:0)-(ct("KeyA")?1:0);if(!Dt&&!R)return;const nt=Math.sin(Je.yaw),pt=Math.cos(Je.yaw);let Tt=-nt*Dt+pt*R,dt=-pt*Dt-nt*R;const oe=(ct("ShiftLeft","ShiftRight")?1.8:1)*Sx*V/Math.hypot(Tt,dt);Tt*=oe,dt*=oe,Xi(Tt,0)||(Je.position.x+=Tt),Xi(0,dt)||(Je.position.z+=dt)}const us=V=>{if(!(!Fn||V.target instanceof HTMLInputElement||V.target instanceof HTMLTextAreaElement)){if(Qn?.key(V.code,V.altKey)){V.code!=="Escape"&&V.preventDefault();return}bx.has(V.code)?(os.add(V.code),V.code.startsWith("Arrow")&&V.preventDefault()):V.code==="KeyE"&&!V.repeat&&!Ve&&mo(0,0,Su)?.()}},Xs=V=>os.delete(V.code),Ir=()=>os.clear(),_o=V=>{!Fn||Ve||document.pointerLockElement!==i||Qn?.frozen()||(Je.yaw-=V.movementX*.0022,Je.pitch=yo.clamp(Je.pitch-V.movementY*.0022,-1.2,1.2))};window.addEventListener("keydown",us),window.addEventListener("keyup",Xs),window.addEventListener("blur",Ir),document.addEventListener("mousemove",_o);const fs={width:0,height:0};let bi=.5;function ds(){return!Fn&&!s&&fs.width>=900?yu:.5}function Sn(){const{width:V,height:ct}=fs;if(!(!V||!ct)){if(bi>.501){const Dt=V*bi*2;y.fov=yo.lerp(60,58,(bi-.5)/(yu-.5)),y.aspect=Dt/ct,y.setViewOffset(Dt,ct,0,0,V,ct)}else y.clearViewOffset(),y.aspect=V/ct,y.fov=y.aspect<1?72:60;y.updateProjectionMatrix()}}function Ur(V){Math.abs(V-bi)<1e-4||(bi=V,Sn())}function xo(){const{width:V,height:ct}=fs;if(!(!V||!ct))if(ci===0)l.setSize(V,ct,!1),cn.setSize(V,ct);else{const Dt=ci>=2?al+1:al;l.setSize(Math.max(1,Math.floor(V/Dt)),Math.max(1,Math.floor(ct/Dt)),!1)}}function qs(V,ct){!V||!ct||(fs.width=V,fs.height=ct,xo(),Ve||(bi=ds()),Sn())}if(r){const V={scene:f,camera:y,layout:{left:We,hallLeft:Ne,right:ve,openingZ:Cn,backZ:ge,gardenBackZ:Qo,roomZ:Kt,hallH:Di,corridorH:Re,doorTop:ze,glassLeft:Li,nicheZ:on.z,roomBackX:yt},doors:Zt,doorZ:jo.map(ct=>ct.z),bath:{door:qt,charger:se,doorAt:{x:Yt.doorX,z:Yt.back},outside:{x:Yt.doorX,z:Yt.back-.7},box:{x0:Yt.left,x1:ve,z0:Yt.back,z1:Yt.front}},balcony:{y:Un,x0:Ne,x1:ve-1.25,z:xu},garden:kt,slider:Nt,fixedPane:ne,nichePlants:Ae,chair:Ot,monitor:$n,lever:$t,breaker:Bt,walker:Je,seat:Wi,glow:F,flicker:Ut,ambient:[ln,Vs,Vn],sky:{top:wr,horizon:ks},setView(ct){Gs=ct??y,jn.camera=Gs},releasePointer(){document.pointerLockElement===i&&document.exitPointerLock()},relock(){i.requestPointerLock?.()?.catch?.(()=>{})},onState(ct){c?.(ct)}};Qn=px(V,o)}let Ys=null,ps=null,Nr=!1;function vo(V,ct,Dt){Ys===null&&(Ys=V);const R=Dt||!n?1:Math.min(1,(V-Ys)/Mx),nt=1-(1-R)**3;if(Dt)Qe.x=0,Qe.y=0;else{const dt=Math.min(1,ct*2.5);Qe.x+=(Gn.x-Qe.x)*dt,Qe.y+=(Gn.y-Qe.y)*dt}if(Fn)Ve||hs(ct),y.position.copy(Je.position),y.quaternion.setFromEuler(Sa.set(Je.pitch,Je.yaw,0));else{const dt=Dt?0:1;y.position.set(Ts.x+Math.sin(V*.13)*.06*dt+Qe.x*.3,Ts.y+Math.sin(V*.19)*.02*dt-Qe.y*.12,yo.lerp(Mu,Ts.z,n?nt:1)),y.lookAt(ea.x+Qe.x*.5,ea.y-Qe.y*.2,ea.z)}if(Ve){Ve.startedAt===null&&(Ve.startedAt=V);const dt=Math.min(1,(V-Ve.startedAt)/Tx),oe=dt<.5?4*dt**3:1-(-2*dt+2)**3/2;Pr.copy(y.quaternion),y.position.lerpVectors(Ve.from,y.position,oe),y.quaternion.slerpQuaternions(Ve.fromQuat,Pr,oe),Ur(yo.lerp(Ve.fromLens,ds(),oe)),dt>=1&&(Ve=null)}else Ur(ds());if(Fn&&!Ve&&V-as>.1){as=V;const dt=Qn?.frozen()?null:rs(0,0,Su);qi(dt?dt.userData.label??"":null)}X=V;let pt=!1;for(const dt of Zt)dt.target&&V>dt.closeAt&&(dt.target=0),dt.open+=(dt.target-dt.open)*Math.min(1,ct*3),dt.hinge.rotation.y=dt.open*1.2,Math.abs(dt.target-dt.open)>.002&&(pt=!0);qt.open+=(qt.target-qt.open)*Math.min(1,ct*6),qt.hinge.rotation.y=qt.open*1.35,Math.abs(qt.target-qt.open)>.002&&(pt=!0),kt.open+=(kt.target-kt.open)*Math.min(1,ct*2.5),Nt.position.x=wt+kt.open*(Mt-.1),Math.abs(kt.target-kt.open)>.002&&(pt=!0);for(const dt of Lt){dt.kick*=Math.exp(-ct*2.2),dt.kick>.02&&(pt=!0);const oe=dt.kick*Math.sin(V*16+dt.phase)*4;dt.object.rotation.z=(Eu(V,dt.phase)+oe)*dt.amount,dt.object.rotation.x=Eu(V*.8,dt.phase+2)*dt.amount*.5}for(const dt of fo)dt.group.position.x+=dt.speed*ct,dt.group.position.x>90&&(dt.group.position.x=-90);Qn?.update(ct),is(ct);const Tt=Fn||Ve!==null||pt||R<1||Math.abs(Gn.x-Qe.x)+Math.abs(Gn.y-Qe.y)>.004;return!Dt&&Tt&&Nr&&ct>0&&V-Ys>2&&ci<vu&&(hn.frames++,hn.time+=ct,hn.frames>=vx&&(hn.time/hn.frames>xx&&po(),hn.frames=0,hn.time=0)),Nr=Tt&&!Dt,Tt}return{resize:qs,render(V){const ct=ps===null?0:Math.min(.1,Math.max(0,V-ps));return ps=V,vo(V,ct,!1)},renderStill(){ps=null,vo(4,0,!0)},nightCommand(V,ct){Qn?.command(V,ct)},setWalk(V,ct=!1){V!==Fn&&(Fn=V,os.clear(),V?(Wi.active||(Je.position.set(Ts.x,yx,2.2),Je.yaw=0,Je.pitch=.03),i.style.cursor=""):(document.pointerLockElement===i&&document.exitPointerLock(),qi(null)),Ve=ct?null:{from:y.position.clone(),fromQuat:y.quaternion.clone(),fromLens:bi,startedAt:null})},dispose(){Qn?.dispose(),window.removeEventListener("keydown",us),window.removeEventListener("keyup",Xs),window.removeEventListener("blur",Ir),document.removeEventListener("mousemove",_o),document.pointerLockElement===i&&document.exitPointerLock(),Ar&&window.removeEventListener("pointermove",ss),i.removeEventListener("pointermove",ui),i.removeEventListener("click",Ti),i.style.cursor="",cn.dispose(),jn.dispose();for(const V of x)V.dispose();l.dispose(),l.forceContextLoss()}}}export{Lx as createEntrance};
