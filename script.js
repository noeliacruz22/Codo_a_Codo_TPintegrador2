const precioTicket = 200;

const descEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior = 0.15;

const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago () {
    let total = cantidad.value * precioTicket;

    switch (categoria.value){
        case "estudiante":
            total = total - (total*descEstudiante);
            break;
        case "trainee":
            total = total - (total*descTrainee);
            break;
        case "junior":
            total = total - (total*descJunior);
            break;
    };

    totalPagar.textContent = `Total a pagar: $ ${total}`;
    console.log("hola");

};

btnResumen.addEventListener('click', (e) =>{
    e.preventDefault();
    calcularPago();
});

