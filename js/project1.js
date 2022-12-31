let box = document.querySelector('.start-box')
let input = document.querySelector('#input-counter');
let button = document.querySelector('#start-counter');
let err = document.querySelector('#erro');
let pros = document.querySelector('.c100')
let secend = document.querySelector('.numb')
let messageloding = document.querySelector('.massage .loding')
let messagesuc = document.querySelector('.success')
 

button.addEventListener('click' , function(){
     let vl_in = parseInt(input.value)
      console.log(typeof(vl_in))
     if(isNaN(vl_in)){
         err.textContent = 'لطفا عدد وارد کنید'
         err.classList.add('active')
         return
     }

     err.classList.remove('active')
     box.classList.remove('active')
     pros.style.display='block'
     messageloding.style.display = 'block'
     messagesuc.style.display = 'none'
     //console.log(messagesuc)

    //  box.classList.remove('active')

     secend.textContent = vl_in

    let timeid = setInterval(()=>{
        if(vl_in < 1){
            clearInterval(timeid)
            pros.style.display = 'none';
            box.classList.add('active')
            input.value = ''
            messageloding.style.display = 'none'
            messagesuc.style.display = 'block'
        }
        vl_in -= 1;
        secend.textContent = vl_in
    },1000)


})