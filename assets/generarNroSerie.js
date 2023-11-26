function generarNumeroSerie() {
  let numeroSerie = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const longitud = 10;

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    numeroSerie += caracteres[indice];
  }

  return numeroSerie;
}

// Ejemplo de uso:
const numeroFactura = generarNumeroSerie();
console.log(numeroFactura); // Ejemplo de salida: "AB12CD34EF"
