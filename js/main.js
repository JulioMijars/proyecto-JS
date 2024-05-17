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
console.log("Stock Total", stockTotal);
console.log("Total de precios de celulares", calcularTotalMonto());