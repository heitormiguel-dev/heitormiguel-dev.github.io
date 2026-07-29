
// ==============================
// EFEITO DE DIGITAÇÃO
// ==============================


const typingText = document.getElementById("typing-text");


const words = [

    "Professor de Inglês pelo Método Natural",
    "Desenvolvedor Full Stack",
    "Especialista em JavaScript",
    "Desenvolvedor Node.js",
    "Especialista em SEO"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    const currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent =
            currentWord.substring(0,charIndex++);


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }


    }else{


        typingText.textContent =
            currentWord.substring(0,charIndex--);


        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }


    }


    setTimeout(typeEffect,80);


}


typeEffect();





// ==============================
// MENU MOBILE
// ==============================


const menuButton =
document.querySelector(".menu-mobile");


const nav =
document.querySelector(".nav-links");



menuButton.addEventListener("click",()=>{


    nav.classList.toggle("active");


});





// ==============================
// FECHAR MENU AO CLICAR
// ==============================


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        nav.classList.remove("active");


    });


});





// ==============================
// ANIMAÇÃO AO SCROLL
// ==============================


const elements =
document.querySelectorAll(
".service-card, .skill-card, .project-card, .step, .stat"
);



const observer =
new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{

    threshold:0.2

});



elements.forEach(element=>{


    element.classList.add("hidden");

    observer.observe(element);


});





// ==============================
// CONTADORES
// ==============================


const counters =
document.querySelectorAll(".stat h2");



let started = false;



const counterObserver =
new IntersectionObserver(entries=>{


    if(entries[0].isIntersecting && !started){


        started = true;


        counters.forEach(counter=>{


            let target =
            counter.innerText;


            if(target.includes("∞")){

                return;

            }


            let number =
            parseInt(target.replace(/\D/g,""));


            let count = 0;


            let interval =
            setInterval(()=>{


                count += Math.ceil(number/50);


                if(count >= number){


                    count = number;

                    clearInterval(interval);


                }


                counter.innerText =
                count +
                (target.includes("%") ? "%" : "+");



            },40);



        });



    }


});


counterObserver.observe(
document.querySelector(".stats")
);





// ==============================
// FORMULÁRIO
// ==============================


const form =
document.querySelector("form");



form.addEventListener("submit",(event)=>{


    event.preventDefault();


    alert(
    "Obrigado pelo contato! Responderei em breve."
    );


    form.reset();


});





// ==============================
// ANO AUTOMÁTICO NO FOOTER
// ==============================


const copyright =
document.querySelector(".copyright");



if(copyright){


    const year =
    new Date().getFullYear();


    copyright.innerHTML =
    `© ${year} Heitor Miguel. Todos os direitos reservados.`;

}