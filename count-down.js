const day=document.querySelector('.days');
const hour=document.querySelector('.hours');
const minute=document.querySelector('.minutes');
const second=document.querySelector('.seconds');




    

     
     var date=new Date('December 31 2021 22:59:59').getTime();
     console.log(date)

    function time(date){

        var Now=new Date().getTime();

        if(Now>date){ day.innerHTML='00';
                      hour.innerHTML='00';
                     minute.innerHTML='00';
                      second.innerHTML='00';

            document.querySelector('.happy').innerHTML='Happy New years'



           }

        else{

        var distance=date-Now;
        
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        day.innerHTML=days;
        hour.innerHTML=hours;
        minute.innerHTML=minutes;
        second.innerHTML=seconds;}



    }
     startTimer=setInterval(function(){ time(date);}, 1000)

