const result = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    showCars();
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

