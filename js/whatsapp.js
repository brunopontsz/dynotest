function openModal() {

    const name = document.getElementById("name-talk").value;
    const vehicle = document.getElementById("vehicle-talk").value;
    const motor = document.getElementById("motor-talk").value;

    document.getElementById("contact-name").value = name;
    document.getElementById("contact-vehicle").value = vehicle;
    document.getElementById("contact-motor").value = motor;

    $('#exampleModalXl').modal('show');
}

function goToWhatsapp () {

    const name = document.getElementById("contact-name").value;
    const vehicle = document.getElementById("contact-vehicle").value;
    let motor = document.getElementById("contact-motor").value;
    let service = document.getElementById("contact-service").value;

    const breakLine = `%0A`;
    const text = `Olá DynoTest, tudo bem? ${breakLine} Me chamo *${name}* e gostaria de saber mais sobre os serviços que vocês oferecem para meu veículo.`;
    const vehicleText = `${breakLine}*Veículo: ${vehicle}*`;
    let engineText;
    if (motor == "") {
        engineText = ``;
    } else {
        engineText = `${breakLine}*Motorização: ${motor}*`;
    }

    let serviceText;
    if (service == "") {
        serviceText = ``;
    } else {
        serviceText = `${breakLine}*Serviço: ${service}*`;
    }


    const finalText = text + vehicleText + engineText + serviceText;
    const urlPath = `https://wa.me/5585997360914?text=${finalText}`;
    window.open(urlPath, '_blank').focus();


}    


