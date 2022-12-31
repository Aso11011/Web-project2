let btn_menu = document.querySelector('.navbar-btn');
let menu_respansive = document.querySelector('#menu')

btn_menu.addEventListener('click' , show_menu)

function show_menu(){
  
    if(this.innerHTML == 'Menu'){
       
    
     
        setTimeout(()=>{this.innerHTML = 'Close'},1000)
    }else{
        
        setTimeout(()=>{this.innerHTML = 'Menu'},800)
         
    }
   
      menu_respansive.classList.toggle('navbar-menu_respansive1')
     
}
////////////////////////////////API////////////////////
 let slideshow = document.querySelector('.slidshow'),
     slids = document.querySelectorAll('.slid'),
     points = document.querySelectorAll('.points span'),
     next =document.querySelector('.next'),
     back = document.querySelector('.back'),
     cont = 0,
     timer = 4000;
 
 function classSwitcher(){
    slids.forEach((slide)=>{
        slide.classList.remove('active');
        slids[cont].classList.add('active');
    })
    points.forEach((point)=>{
        point.classList.remove('active1');
        points[cont].classList.add('active1');
    })
 }

 
let goNext = ()=>{
    cont = (cont == slids.length -1)? 0 : cont+1
    classSwitcher()
    
} 
let goBack = ()=>{
    cont = (cont == 0)? slids.length -1 : cont-1
    classSwitcher()
    
}  

let run = setInterval(goNext , timer);

points.forEach((point,index) =>{
    point.addEventListener('click' , e =>{
       cont = index;
       clearInterval(run)
       classSwitcher()
       run = setInterval(goNext,timer)
    })
})

next.addEventListener('click' , e => {
    clearInterval(run)
    goNext()
    run = setInterval(goNext,timer)
});
back.addEventListener('click' , e => {
    clearInterval(run)
    goBack()
    run = setInterval(goNext,timer)
})

