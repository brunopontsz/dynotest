function gotowhatsapp() {
    
    var name = document.getElementById("contact-name").value;
    var vehicle = document.getElementById("contact-vehicle").value;
    var motor = document.getElementById("contact-motor").value;

    var url = "https://wa.me/5585997360914?text=" 
    + "Olá, me chamo " + name + ", gostaria de saber mais sobre os serviços de potência que a Dynotest tem a oferecer para meu veículo."
    + "%0A" + "Veículo:"+ vehicle + "%0A" 
    + "Motorização: " + motor; 

    window.open(url, '_blank').focus();
}