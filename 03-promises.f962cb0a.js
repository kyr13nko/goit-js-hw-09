function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n);var l=n("7Y9D8");const u=document.querySelector(".form");function r(e,t){return new Promise(((o,i)=>{const n=Math.random()>.3;setTimeout((()=>{n?o({position:e,delay:t}):i({position:e,delay:t})}),t)}))}u.addEventListener("submit",(function(t){t.preventDefault();const{delay:o,step:i,amount:n}=t.target.elements;let u=Number(o.value);for(let t=1;t<=n.value;t+=1)r(t,u).then((({position:t,delay:o})=>{console.log(`✅ Fulfilled promise ${t} in ${o}ms`),e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{console.log(`❌ Rejected promise ${t} in ${o}ms`),e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),u+=Number(i.value);t.target.reset()})),u.addEventListener("input",(function(t){const{delay:o,step:i,amount:n}=t.currentTarget.elements;o.value<0&&o.value&&(e(l).Notify.failure("❌ The field value must be a positive number or 0"),o.value=0);i.value<0&&i.value&&(e(l).Notify.failure("❌ The field value must be a positive number or 0"),i.value=0);n.value<=0&&n.value&&(e(l).Notify.failure("❌ The field value must be a positive number"),n.value=1)}));
//# sourceMappingURL=03-promises.f962cb0a.js.map
