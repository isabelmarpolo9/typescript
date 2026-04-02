import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils.js";

const datos = [10, 20, 15, 200, 18, 12, 14, 300, 16];

console.log("=== Análisis estadístico ===");
console.log("Datos originales:", datos);

const media = calcularMedia(datos);
console.log("Media:", media);

const mediana = calcularMediana(datos);
console.log("Mediana:", mediana);

const sinAtipicos = filtrarAtipicos(datos, 50);
console.log("Sin atípicos (límite 50):", sinAtipicos);

// Prueba del caso límite: array vacío
const mediaVacia = calcularMedia([]);
console.log("Media de array vacío:", mediaVacia);