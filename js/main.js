// Registro de gastos mensuales
let stockTotal = [];


let modeloTelefono;
let precioTelefono;

do {
    modeloTelefono = prompt("Ingresá el MODELO que quieres registrar. Para salir, escribí Salir");
    
    if (modeloTelefono.toLowerCase() !== "salir") {

        do {
            precioTelefono = parseInt(prompt("Ingresá el MONTO de este telefono que quieres registrar."));
        } while (isNaN(precioTelefono) || precioTelefono === "" || precioTelefono === null)

        let montoTotal = {
            modelo: modeloTelefono,
            monto: precioTelefono
        }
        stockTotal.push(montoTotal);
    }

} while (modeloTelefono.toLowerCase() !== "salir");


function calcularTotalMonto() {
    let total = stockTotal.reduce((acc, final) => acc + final.monto, 0);
    return total;
}

let contenedorStockTotal = document.querySelector("#stock-total");

stockTotal.forEach((stock) => {
    let div = document.createElement("div");
    div.classList.add("stock");
    div.innerHTML = `
        <p class='stock-modelo'>${stock.modelo}</p>
        <p class='stock-monto'>$${stock.monto}</p>
    `;
    contenedorStockTotal.append(div);
})
console.log("Stock Total", stockTotal);
console.log("Total de precios de celulares", calcularTotalMonto());