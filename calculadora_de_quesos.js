const categoria = "Lácteos";
let listaQuesos = []; 

function calcularKilos(gramos) {
    return gramos / 1000;
}

function calcularPrecioPorKilo(precio, kilos) {
    return precio / kilos;
}

alert("Comparador de Quesos del Supermercado");
let cantidad = parseInt(prompt("¿Cuántos quesos vas a comparar?"));

for (let i = 1; i <= cantidad; i++) {
    alert(`Datos del Queso Número ${i}:`);
    let nombre = prompt("Marca o tipo de queso (Ej: Colun Gauda):");
    let precio = parseFloat(prompt("Precio del producto (Ej: 3500):"));
    let gramos = parseFloat(prompt("Peso en Gramos (Ej: 400):"));

    // Evitamos ingresar datos vacíos o inconsistentes
    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido. Este queso no se registrará de forma correcta.");
        continue; 
    } else if (isNaN(gramos) || gramos <= 0) {
        alert("Peso inválido. Este queso no se registrará de forma correcta.");
        continue;
    } else {
        let kilosReales = calcularKilos(gramos);
        let precioFinalKilo = calcularPrecioPorKilo(precio, kilosReales);

        let quesoObjeto = {
            nombre: nombre,
            precioOriginal: precio,
            gramosOriginales: gramos,
            precioPorKilo: precioFinalKilo
        };

        listaQuesos.push(quesoObjeto);
    }
}

alert("Calculando resultados... Revisa la consola de tu navegador (F12).");

console.log(`LISTADO DE COMPARACIÓN (${categoria})`);

listaQuesos.forEach(queso => {
    console.log(`- ${queso.nombre}: $${queso.precioOriginal} por ${queso.gramosOriginales}g -> (Precio por Kg: $${queso.precioPorKilo.toFixed(0)})`);
});

if (listaQuesos.length > 0) {
    // Ordenamos de menor a mayor precio por kilo para hallar el más económico
    listaQuesos.sort((a, b) => a.precioPorKilo - b.precioPorKilo);
    let elMasBarato = listaQuesos[0]; 

    
    console.log(`🏆 EL MÁS CONVENIENTE ES: ${elMasBarato.nombre} ($${elMasBarato.precioPorKilo.toFixed(0)} por Kilo)`);
    alert(`¡Listo! El queso más conveniente es: ${elMasBarato.nombre}.`);
} else {
    console.log("No se pudieron comparar productos debido a errores en el ingreso de datos.");
}
