const scrollicon = document.querySelector('.scrollicon');


window.addEventListener('scroll' , checkHeight)

function checkHeight() {

    if (window.scrollY > 200) {
        
        scrollicon.style.display = "flex"

    }

    else
    {
        scrollicon.style.display = "none"
    }

}
    
    scrollicon.addEventListener('click',() =>
    {

        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })

    })

    ScrollReveal({
        reset:true,
        distance : '80px',
        duration: 1500,
        delay : 200
    });

    ScrollReveal().reveal('.home-content , .heading' , {origin : 'top'});