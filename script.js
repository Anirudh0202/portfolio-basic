let dayNight =document.querySelector(".daynight");
let banner=document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night")
})
let typingEffect = new Typed("#text",{
    strings:["Anirudh","Youtuber","Freelancer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});