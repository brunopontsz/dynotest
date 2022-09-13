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
    const breakLine = `%0A`;


    const selectedOptions = [...document.getElementById('contact-service').options].filter(t => t.selected);
    const name = document.getElementById("contact-name").value;
    const vehicle = document.getElementById("contact-vehicle").value;
    const engine = document.getElementById("contact-motor").value;
    
    //Input Validation
    if (!name || !vehicle) {
        return false;
    }


    const text = `Olá DynoTest, tudo bem? ${breakLine}Me chamo *${name}* e gostaria de saber mais sobre os serviços que vocês oferecem para meu veículo. ${breakLine}`;
    const vehicleText = `${breakLine}Veículo:${breakLine}*${vehicle}*${breakLine}`;

    let engineText;
    if (motor == "") {
        engineText = ``;
    } else {
        engineText = `${breakLine}Motorização:${breakLine}*${motor}*${breakLine}`;
    }

    let serviceText;
    if (selected == "") {
        serviceText = ``;
    } else {
        serviceText = `${breakLine}Serviço(s) escolhido(s):${breakLine}*${selected}*`;
    }
  


    //requiredFields
    const text = `Olá DynoTest, tudo bem? ${breakLine}Me chamo *${name}* e gostaria de saber mais sobre os serviços que vocês oferecem para meu veículo. ${breakLine}`;
    const vehicleText = `${breakLine}Veículo:${breakLine}*${vehicle}*:${breakLine}`;

    //optional fields
    const engineText = !!engine ? `${breakLine}Motorização:${breakLine}*${engine}*:${breakLine}` : '';
    const serviceText = !!selectedOptions ? 
        `${breakLine}Serviço(s) escolhido(s): ${selectedOptions.map(t => `${breakLine}- *${t.value}*`)}` : '';
  
    const finalText = text + vehicleText + engineText + serviceText;
    const urlPath = `https://wa.me/5585982190975?text=${finalText}`;
    window.open(urlPath, '_blank').focus();
}


