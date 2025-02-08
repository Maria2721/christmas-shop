(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const g=document.getElementById("burgerMenu"),y=document.getElementById("navMenu"),F=document.body,w=()=>{g.classList.toggle("open"),y.classList.toggle("show"),F.classList.toggle("hidden")},b=(e,t)=>{e.preventDefault(),w(),t.classList.contains("current_link")||setTimeout(()=>{window.location.href=t.href},450)};g.addEventListener("click",w);y.querySelectorAll("a").forEach(e=>{e.addEventListener("click",t=>b(t,e))});const H=[{name:"Bug Magnet",description:"Able to find bugs in code like they were placed there on purpose.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Console.log Guru",description:"Uses console.log like a crystal ball to find any issue.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+400"}},{name:"Shortcut Cheater",description:"Knows every keyboard shortcut like they were born with them.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+200"}},{name:"Merge Master",description:"Merges branches in Git without conflicts, like a wizard during an exam.",category:"For Work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Async Tamer",description:"Handles asynchronous code and promises like well-trained pets.",category:"For Work",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+300"}},{name:"CSS Tamer",description:"Can make Flexbox and Grid work together like they were always best friends.",category:"For Work",superpowers:{live:"+200",create:"+500",love:"+200",dream:"+300"}},{name:"Time Hacker",description:"Writes code at the last moment but always meets the deadline.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Layout Master",description:"Creates perfect layouts on the first try, like they can read the designer's mind.",category:"For Work",superpowers:{live:"+500",create:"+300",love:"+200",dream:"+200"}},{name:"Documentation Whisperer",description:"Understands cryptic documentation as if they wrote it themselves.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+200",dream:"+100"}},{name:"Feedback Master",description:"Accepts client revisions with the Zen calm of Buddha.",category:"For Work",superpowers:{live:"+300",create:"+500",love:"+300",dream:"+400"}},{name:"Code Minimalist",description:"Writes code so concise that one line does more than a whole file.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+200"}},{name:"Pixel-Perfect Magician",description:"Aligns elements to the last pixel, even when the design looks abstract.",category:"For Work",superpowers:{live:"+500",create:"+500",love:"+400",dream:"+400"}},{name:"Posture Levitation",description:"Can sit for hours, but maintains perfect posture like a ballerina.",category:"For Health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+400"}},{name:"Step Master",description:"Gets 10,000 steps a day even while sitting at the computer.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+400"}},{name:"Snack Resister",description:"Ignoring desktop snacks like a strict dietician.",category:"For Health",superpowers:{live:"+400",create:"+100",love:"+200",dream:"+400"}},{name:"Hydration Bot",description:"Drinks the recommended 2 liters of water a day like a health-programmed robot.",category:"For Health",superpowers:{live:"+500",create:"+300",love:"+500",dream:"+500"}},{name:"Sleep Overlord",description:"Sleeps 6 hours but feels like they had 10.",category:"For Health",superpowers:{live:"+400",create:"+500",love:"+500",dream:"+500"}},{name:"Break Guru",description:"Takes a stretch break every hour without forgetting, no matter how focused.",category:"For Health",superpowers:{live:"+300",create:"+300",love:"+300",dream:"+400"}},{name:"Eye Protector",description:"Can work all day at the monitor without feeling like their eyes are on fire.",category:"For Health",superpowers:{live:"+100",create:"+300",love:"+500",dream:"+400"}},{name:"Stress Dodger",description:"Masters meditation right at the keyboard.",category:"For Health",superpowers:{live:"+100",create:"+400",love:"+200",dream:"+400"}},{name:"Yoga Coder",description:"Easily switches from coding to yoga and back.",category:"For Health",superpowers:{live:"+400",create:"+400",love:"+400",dream:"+400"}},{name:"Healthy Snacker",description:"Always picks fruit, even when chocolate is within arm’s reach.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+200",dream:"+400"}},{name:"Chair Exerciser",description:"Manages to work out without leaving the chair.",category:"For Health",superpowers:{live:"+500",create:"+500",love:"+500",dream:"+400"}},{name:"Caffeine Filter",description:"Drinks coffee at night and still falls asleep with no problem.",category:"For Health",superpowers:{live:"+400",create:"+300",love:"+500",dream:"+200"}},{name:"Joy Charger",description:"Finds joy in the little things—even in a build that finishes unexpectedly fast.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Error Laugher",description:"Laughs at code errors like they’re jokes instead of getting angry.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Bug Acceptance Guru",description:"Accepts bugs as part of the journey to perfection — it’s just another task.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Spontaneous Coding Philosopher",description:"Philosophically accepts any client suggestion after a long refactor.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+400"}},{name:"Deadline Sage",description:"Remains zen even when the deadline is close and the project manager is stressed.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+300",dream:"+500"}},{name:"Inspiration Maestro",description:"Finds inspiration on an empty screen as if masterpieces are already there.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+400",dream:"+100"}},{name:"Peace Keeper",description:"Maintains inner calm even in moments of intense crisis.",category:"For Harmony",superpowers:{live:"+200",create:"+200",love:"+500",dream:"+500"}},{name:"Empathy Guru",description:"Feels the team’s mood and can lift everyone’s spirits.",category:"For Harmony",superpowers:{live:"+500",create:"+200",love:"+500",dream:"+500"}},{name:"Laughter Generator",description:"Can lighten any tense situation with a joke that even bugs laugh at.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+200",dream:"+500"}},{name:"Pause Master",description:"Knows when to just step back from the keyboard and breathe.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+100",dream:"+100"}},{name:"Coder Healer",description:"Can support a colleague in their darkest hour, even if it’s a 500 error.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+500",dream:"+500"}},{name:"Music Code Curator",description:"Creates work playlists so good, even deadlines follow the rhythm.",category:"For Harmony",superpowers:{live:"+300",create:"+200",love:"+300",dream:"+200"}}],E=e=>{const t=document.createElement("div");t.className="bestGifts_card";const s=document.createElement("div");s.className="bestGifts_card__imgContainer";const a=document.createElement("img");a.className="bestGifts_card__img",a.src=e.category==="For Work"?"/assets/images/gift-for-work.png":e.category==="For Health"?"/assets/images/gift-for-health.png":e.category==="For Harmony"?"/assets/images/gift-for-harmony.png":"",a.alt=e.name,a.width=310,a.height=230,s.appendChild(a);const r=document.createElement("div");r.className="bestGifts_card__text";const o=document.createElement("h4"),n=e.category==="For Work"?"tag_work":e.category==="For Health"?"tag_health":e.category==="For Harmony"?"tag_harmony":"";o.className=`bestGifts_card__tag ${n}`,o.textContent=e.category;const i=document.createElement("h3");return i.className="bestGifts_card__header",i.textContent=e.name,r.appendChild(o),r.appendChild(i),t.appendChild(s),t.appendChild(r),t},p=(e,t)=>{const s=document.createElement("div");s.className="superpower__row";const a=document.createElement("p");a.className="superpower__title",a.textContent=e;const r=document.createElement("p");r.className="superpower__value",r.textContent=t;const o=+t.slice(1,2),n=document.createElement("div");n.className="superpower__snowflakes";for(let i=0;i<5;i++){const c=document.createElement("img");c.className="snowflake__img",c.src="/assets/images/snowflake.svg",c.alt="Snowflake",c.width=16,c.height=16,i>=o&&(c.style.opacity=.1),n.appendChild(c)}return s.appendChild(a),s.appendChild(r),s.appendChild(n),s},M=e=>{const t=document.createElement("div");t.className="modal_gift";const s=document.createElement("button");s.className="modal_close",s.type="button",s.id="buttonClose";const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width","40"),a.setAttribute("height","40"),a.setAttribute("viewBox","0 0 40 40"),a.setAttribute("fill","none"),a.setAttribute("xmlns","http://www.w3.org/2000/svg"),a.innerHTML=`
	<path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    <path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />`,s.appendChild(a),t.appendChild(s);const r=document.createElement("div");r.className="modal_gift__imgContainer";const o=document.createElement("img");o.className="modal_gift__img",o.src=e.category==="For Work"?"/assets/images/gift-for-work.png":e.category==="For Health"?"/assets/images/gift-for-health.png":e.category==="For Harmony"?"/assets/images/gift-for-harmony.png":"",o.alt=e.name,o.width=310,o.height=230,r.appendChild(o);const n=document.createElement("div");n.className="modal_gift__contentContainer";const i=document.createElement("div");i.className="modal_gift__text";const c=document.createElement("h4"),v=e.category==="For Work"?"tag_work":e.category==="For Health"?"tag_health":e.category==="For Harmony"?"tag_harmony":"";c.className=`modal_gift__tag ${v}`,c.textContent=e.category;const m=document.createElement("h3");m.className="modal_gift__header",m.textContent=e.name;const u=document.createElement("span");u.className="modal_gift__desc",u.textContent=e.description,i.appendChild(c),i.appendChild(m),i.appendChild(u);const d=document.createElement("div");d.className="modal_gift__superpowers";const h=document.createElement("h4");h.className="modal_gift__title",h.textContent="Adds superpowers to:";const l=document.createElement("div");l.className="superpowers";const f=p("Live",e.superpowers.live),C=p("Create",e.superpowers.create),k=p("Love",e.superpowers.love),_=p("Dream",e.superpowers.dream);return l.appendChild(f),l.appendChild(C),l.appendChild(k),l.appendChild(_),d.appendChild(h),d.appendChild(l),n.appendChild(i),n.appendChild(d),t.appendChild(r),t.appendChild(n),t},N=e=>e.querySelector(".bestGifts_card__header").textContent,L=e=>{for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e};export{N as a,M as b,E as c,L as f,H as g};
//# sourceMappingURL=utils-BUAGGJBH.js.map
