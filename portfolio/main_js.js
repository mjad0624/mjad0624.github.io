
    ///////             selects text then devide it per words or letter then add class           /////////////////

    // const matrix = document.getElementById('matrix');
    // const content = matrix.textContent.split(' ');
    // matrix.textContent = "";

    // content.forEach(obj =>{
    //     matrix.innerHTML += "<span class = 'matrix'>" + obj + " </span>";
        
    // });

    window.onload = (event) =>{


    const matrix = document.querySelectorAll('p');

    matrix.forEach(cb =>{
        var content = cb.textContent.split(' ');
        cb.textContent = "";
        
        content.forEach(obj =>{
            cb.innerHTML += "<span class = 'matrix fade_up'>" + obj + " </span>";
            
        });
        
    })

    // const matrix_links = document.querySelectorAll('a');

    // matrix_links.forEach(cb =>{
    //     var content_links = cb.textContent.split(' ');
    //     cb.textContent = "";
        
    //     content_links.forEach(obj =>{
    //         cb.innerHTML += "<span class = 'matrix fade_up'>" + obj + " </span>";
            
    //     });
        
    // })






    ////////////             INTERSECTION OBSERVER ANIMATION             /////////////
    /*********************SLIDE OBSERVER ANIMATION *********************/
    let style = "slide";       //css class styling
    let timer = 0;

    let intersectionObserver = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setTimeout(function() {entry.target.classList.add(style)},timer);
                timer += 50;
                intersectionObserver.unobserve(entry.target);
            }

            if(timer === 100){
            timer = 0;
            }
        })
        
    }) 

    document.querySelectorAll('.animate').forEach(obj => {
        intersectionObserver.observe(obj); 
    },
    );

    /***********************FADE OBSERVER ANIMATION ***********************/

    let style_fade = "fade";       //css class styling
    let timer_fade = 0;
    let intersectionObserver_fade = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setTimeout(function() {entry.target.classList.add(style_fade)},timer_fade);
                timer_fade += 150;
                intersectionObserver_fade.unobserve(entry.target);
            }

            if(timer_fade === 1500){
            timer_fade = 0;
            }
        })
        
    },options = {
        threshold: 0.8
    }); 

    document.querySelectorAll('.fade_up').forEach(obj => {
        intersectionObserver_fade.observe(obj); 
    });

/********************************FADE-UP WITH NO DELAY**************************/
// let style_simul_fade = "fade";       //css class styling
// let timer_simul_fade = 100;
// let intersectionObserver_simul_fade = new IntersectionObserver(entries =>{
//     entries.forEach(entry =>{
//         if(entry.isIntersecting){
//             setTimeout(function() {entry.target.classList.add(style_simul_fade)},timer_simul_fade);
//             intersectionObserver_simul_fade.unobserve(entry.target);
//         }

//     })
    
// },options = {
//     threshold: 0.8
// }); 

// document.querySelectorAll('.simul_fade').forEach(obj => {
//     intersectionObserver_simul_fade.observe(obj); 
// });
        
    /*********************  NAV BAR OBSERVER **********************/

    let nav_observer = document.querySelector('.intro');
    let obeserver_nav = new IntersectionObserver(entries => {
    
        document.querySelector('.nav_container').classList.toggle("fade");
    })


    obeserver_nav.observe(nav_observer); 

};

/****************************** Image Slider no 1********************************/
const btn_prev1 = document.querySelector('.btn_prev1');
const btn_next1 = document.querySelector('.btn_next1');
const carousel_images1 = document.querySelectorAll('.figure_1 img');
const image_size = document.querySelector('.figure_1').offsetWidth; 
var counter = 0;
document.querySelector('.figure_1').style = 'transform: translateX('+counter*(-700)+'px);';


btn_next1.addEventListener('click', () =>
{

    if (carousel_images1[counter].getAttribute('id') == "food_website_4" )
    {
        counter = 0;
        // container.style = "transition:transform 0s;";
        document.querySelector('.figure_1').style = 'transform: translateX(' + (-counter) * image_size + 'px);';
    } else
    {
        counter++;
        document.querySelector('.figure_1').style = 'transform: translateX(' + (-counter) * image_size + 'px);';        
    }

});
 
btn_prev1.addEventListener('click',()=>{
    
    
    if (carousel_images1[counter].getAttribute('id') == "food_website_1" )
    {
        counter = 3;
        // container.style = "transition:transform 0s;";
        document.querySelector('.figure_1').style = 'transform: translateX(' + (-counter) * image_size + 'px);';
    } else
    {
        counter--;
        document.querySelector('.figure_1').style = 'transform: translateX(' + (-counter) * image_size + 'px);';        
    }
});
   
/****************************** Image Slider no 2 ********************************/
const btn_prev2 = document.querySelector('.btn_prev2');
const btn_next2 = document.querySelector('.btn_next2');
const carousel_images2 = document.querySelectorAll('.figure_2 img');
const image_size2 = document.querySelector('.figure_2').offsetWidth; 
var counter2 = 0;
document.querySelector('.figure_1').style = 'transform: translateX('+counter2*(image_size2)+'px);';


btn_next2.addEventListener('click', () =>
{

    if (carousel_images2[counter2].getAttribute('id') == "system_4" )
    {
        counter2 = 0;
        // container.style = "transition:transform 0s;";
        document.querySelector('.figure_2').style = 'transform: translateX(' + (-counter2) * image_size2 + 'px);';
    } else
    {
        counter2++;
        document.querySelector('.figure_2').style = 'transform: translateX(' + (-counter2) * image_size2 + 'px);';        
    }

});
 
btn_prev2.addEventListener('click',()=>{
    
    
    if (carousel_images2[counter2].getAttribute('id') == "system_1" )
    {
        counter2 = 3;
        // container.style = "transition:transform 0s;";
        document.querySelector('.figure_2').style = 'transform: translateX(' + (-counter2) * image_size2 + 'px);';
    } else
    {
        counter2--;
        document.querySelector('.figure_2').style = 'transform: translateX(' + (-counter2) * image_size2 + 'px);';        
    }
   });