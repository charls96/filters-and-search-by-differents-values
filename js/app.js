const result = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear()-2;
const min = max - 10;

document.addEventListener('DOMContentLoaded', () => {
    showCars();
    loadYearsSelect();
})



function showCars(){
    cars.forEach( car => {
        const carHTML = document.createElement('p');
        const {marca, modelo, year, puertas, transmision, precio, color} = car;

        carHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}
        `;

        result.appendChild(carHTML);
    })
}

function loadYearsSelect(){
    for (let i = max; i >= min; i--) {
        const optionYear = document.createElement('option');
        optionYear.value = i;
        optionYear.textContent = i;
        year.appendChild(optionYear);
    }
}
