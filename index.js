import{S as n,N as s,K as a,P as l}from"./assets/vendor-C0KbfpM-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();new n(".swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:6,loop:!0,speed:600,modules:[s,a,l],pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0},breakpoints:{1440:{}}});new n(".brands__swiper",{direction:"horizontal",slidesPerView:1,spaceBetween:6,loop:!0,speed:600,modules:[s,a,l],pagination:{el:".swiper-pagination2",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},breakpoints:{1440:{}}});
//# sourceMappingURL=index.js.map
