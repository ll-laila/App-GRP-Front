import './polyfills.server.mjs';
var l=class{constructor(){this.data=[],this.page=0,this.size=10}},i=[5,10,20,25],h=g=>{let r=g.page,e=g.totalPages,s=5,c=Math.min(s,e),t,a;if(e<=s)t=1,a=e;else{let o=Math.floor(s/2);r<=o?(t=1,a=s):r+o>=e?(t=e-s+1,a=e):(t=r-o,a=r+o)}return Array.from({length:a-t+1},(o,n)=>t+n)};export{l as a,i as b,h as c};
