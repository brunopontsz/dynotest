function gotowhatsapp() {
    
    var name = document.getElementById("contact-name").value;
    var vehicle = document.getElementById("contact-vehicle").value;
    var motor = document.getElementById("contact-motor").value;
    var message = document.getElementById("contact-message").value;

    var url = "https://wa.me/5585997360914?text=" 
    + "Olá DynoTest, tudo bem?" + "%0A" +"Me chamo " + "*"+ name + "*" + " e gostaria de saber mais sobre os serviços que vocês oferecem para meu veículo."
    + "%0A" + "Veículo: "+ "*" + vehicle + "*" + "%0A" 
    + "Motorização: " + "*"+ motor + "*" +"%0A" 
    + "Mensagem: " + "*"+ message + "*"; 

    window.open(url, '_blank').focus();
}