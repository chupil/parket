// таймен
function timer()
{
    sec = 0;
   
    setInterval(tick, 1000);
    
}

function tick()
{
    
    sec++;
    if(sec > 60){
    document.getElementById("timer").
        childNodes[0].nodeValue = 60;
    }else{
        document.getElementById("timer").
        childNodes[0].nodeValue = sec;
    }
}