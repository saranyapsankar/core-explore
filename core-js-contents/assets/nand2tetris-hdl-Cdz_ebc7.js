import{g as l}from"./index-CuNVaqOO.js";function u(e,n){for(var a=0;a<n.length;a++){const t=n[a];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(t,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s,i;function f(){if(i)return s;i=1,s=e,e.displayName="nand2tetrisHdl",e.aliases=[];function e(n){n.languages["nand2tetris-hdl"]={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,keyword:/\b(?:BUILTIN|CHIP|CLOCKED|IN|OUT|PARTS)\b/,boolean:/\b(?:false|true)\b/,function:/\b[A-Za-z][A-Za-z0-9]*(?=\()/,number:/\b\d+\b/,operator:/=|\.\./,punctuation:/[{}[\];(),:]/}}return s}var d=f();const c=l(d),p=u({__proto__:null,default:c},[d]);export{p as n};
