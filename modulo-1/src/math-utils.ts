//Calcular media
export function calcularMedia(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const suma = datos.reduce((acumulador, valor) => acumulador + valor, 0);
  return suma / datos.length;
}

//Calcular mediana
export function calcularMediana(datos: number[]): number | null {
  if (datos.length === 0) return null;

  const ordenados = [...datos].sort((a, b) => a - b);
  const mitad = Math.floor(ordenados.length / 2);

  if (ordenados.length % 2 !== 0) {
    return ordenados[mitad];
  } else {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }
}

//Filtrar atípicos
export function filtrarAtipicos(datos: number[], limite: number): number[] | null {
  if (datos.length === 0) return null;

  const media = calcularMedia(datos) as number;

  return datos.filter((valor) => Math.abs(valor - media) <= limite);
}

//