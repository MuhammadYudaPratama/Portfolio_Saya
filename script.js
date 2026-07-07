/*=============================
Typing Animation
=============================*/

const typing = document.getElementById("typing");

const jobs = [

    "Web Developer",

    "Laravel Developer",

    "Frontend Developer",

    "UI Enthusiast",

    "Microsoft Office Spesialist"

];

let job = 0;
let letter = 0;
let deleting = false;

function typingEffect(){

    const current = jobs[job];

    if(!deleting){

        typing.textContent = current.substring(0, letter++);

        if(letter > current.length){

            deleting = true;

            setTimeout(typingEffect,1500);

            return;

        }

    }else{

        typing.textContent = current.substring(0, letter--);

        if(letter < 0){

            deleting = false;

            job++;

            if(job >= jobs.length){

                job = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 60 : 120);

}

typingEffect();

/*=============================
Navbar Shadow
=============================*/

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow="none";

    }

});

const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

