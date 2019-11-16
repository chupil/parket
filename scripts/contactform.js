function timer()
{
    sec = 30;   
    setInterval(tick, 1000);
    
}

function tick()
{
    
    sec--;
    if(sec < 1){
    document.getElementById("timer").
        childNodes[0].nodeValue = 0;
        if (sec == -2){
            document.getElementById("displayNone").classList.add("display-none");
        }
              
        
    }else{
        document.getElementById("timer").
        childNodes[0].nodeValue = sec;
    }
}

$(function(){
    $(".ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){ 
                    timer();                  
                    document.getElementById("displayNone2").classList.remove("display-none");                   


                }else{
                    alert("Сталась помилка " + response.message);
                }
            }
        });
    });
});