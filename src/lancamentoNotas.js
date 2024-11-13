function lancarNota(nota1, nota2) {
  if (typeof nota1 !== 'number' || typeof nota2 !== 'number') {
    throw new Error('Entradas devem ser numéricas');
  }
  if (nota1 < 0.0 || nota1 > 10.0 || !Number.isInteger(nota1 * 10)) {
    throw new Error('Nota de 1UP inválida');
  }
  if (nota2 < 0.0 || nota2 > 10.0 || !Number.isInteger(nota2 * 10)) {
    throw new Error('Nota de 2UP inválida');
  }
  return { nota1, nota2 };
}

module.exports = { lancarNota };