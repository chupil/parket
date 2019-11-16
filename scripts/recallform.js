$(function(){
   $('#recallform button[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formcarry.com/s/vOGyoqsZchC", 
            method: "POST",
            data: {                
                tel: $('#telephone').val()
            },
            dataType: "json"
        })
        //  .done( () => $('#sendmessage').addClass("show") )
        //  .fail( () => $('#errormessage').addClass("show") ); 
    }
}
