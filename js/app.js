const brand = document.querySelector('#marca');
const result = document.querySelector('#resultado');
const year = document.querySelector('#year');
const minimum = document.querySelector('#minimum');
const maximum = document.querySelector('#maximum');
const doors = document.querySelector('#puertas');
const transmision = document.querySelector('#transimision');
const color = document.querySelector('#color');

const max = new Date().getFullYear()-2;
const min = max - 10;

const searchData = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};

document.addEventListener('DOMContentLoaded', () => {
    showCars();
    loadYearsSelect();
});

brand.addEventListener('change', () => {
    searchData.marca = e.target.value;
});

year.addEventListener('change', () => {
    searchData.year = e.target.value;
});

minimum.addEventListener('change', () => {
    searchData.minimo = e.target.value;
});

maximo.addEventListener('change', () => {
    searchData.maximo = e.target.value;
});

doors.addEventListener('change', () => {
    searchData.puertas = e.target.value;
});

transmision.addEventListener('change', () => {
    searchData.transmision = e.target.value;
});

color.addEventListener('change', () => {
    searchData.color = e.target.value;
});


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
