var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},d={},n=e.parcelRequire1ccf;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in d){var n=d[e];delete d[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){d[e]=t},e.parcelRequire1ccf=n);var s=n("fXOuZ"),o=n("1tHc5");const a=document.querySelector(".login-inputbox"),i=document.querySelector(".signup-inputbox"),r=document.querySelector(".login-box"),c=document.querySelector(".login-btn"),l=document.querySelector(".hide-login"),u=document.querySelector(".signup-back"),m=document.querySelector(".username-input"),p=document.querySelector(".password-input"),g=document.querySelector(".wrong-credentials"),h=document.querySelector(".login-button"),v=document.querySelector(".prompt-string"),y=document.querySelector(".login-btn"),L=document.querySelector(".logout-btn"),S=document.querySelector(".display-user"),f=document.querySelector(".username-register"),q=document.querySelector(".password-register"),w=document.querySelector(".signup-button"),b=(0,s.initializeApp)({apiKey:"AIzaSyA5SwOpU8KCIMaOEAcpgKSGCeJ5zGa4mYM",authDomain:"prompt-maker.firebaseapp.com",projectId:"prompt-maker",storageBucket:"prompt-maker.appspot.com",messagingSenderId:"449676529770",appId:"1:449676529770:web:470531242f944aa58dfa13",measurementId:"G-DWN7577Z1B"}),E=(0,o.getAuth)(b);w.addEventListener("click",(async()=>{const e=f.value,t=q.value,d=await(0,o.createUserWithEmailAndPassword)(E,e,t);i.classList.add("hidden"),a.classList.add("hidden"),f.value="",q.value="",console.log(d.user)}));h.addEventListener("click",(async()=>{g.classList.add("hidden");const e=m.value,t=p.value;try{const d=await(0,o.signInWithEmailAndPassword)(E,e,t);console.log(d.user)}catch(e){g.classList.remove("hidden"),console.log(e)}}));L.addEventListener("click",(async()=>{await(0,o.signOut)(E),S.textContent="",m.value="",p.value="",g.classList.add("hidden"),r.classList.add("hidden"),i.classList.add("hidden"),a.classList.remove("hidden")}));(async()=>{(0,o.onAuthStateChanged)(E,(e=>{e?(r.classList.add("hidden"),y.classList.add("hidden"),L.classList.remove("hidden"),S.textContent="Welcome"):(y.classList.remove("hidden"),L.classList.add("hidden"))}))})();const k=localStorage.getItem("promptSave");window.addEventListener("load",(()=>{null!==k&&(v.value=k)})),c.addEventListener("click",(()=>{r.classList.remove("hidden"),a.classList.remove("hidden")})),l.addEventListener("click",(()=>{r.classList.add("hidden"),g.classList.add("hidden"),i.classList.add("hidden"),m.value="",p.value=""})),u.addEventListener("click",(()=>{i.classList.add("hidden"),a.classList.remove("hidden")}));
//# sourceMappingURL=help.a708d3e2.js.map