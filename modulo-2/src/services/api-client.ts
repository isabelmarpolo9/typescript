export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

import { Estudiante, Asignatura } from "../domain/types/index.js";

export interface RespuestaAPI<T> {
  codigoEstado: number;
  exito: boolean;
  datos: T;
  errores?: string[];
}

const baseDeDatos: Record<string, unknown> = {
  "estudiantes/1": {
    id: "1",
    nombre: "Ana",
    apellidos: "García",
    email: "ana@uni.es",
    fechaNacimiento: new Date("2000-05-12")
  },
  "asignaturas/1": {
    id: "1",
    nombre: "Matemáticas",
    creditos: 6,
    departamento: "Ciencias"
  },
};

export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = baseDeDatos[endpoint];

      if (resultado) {
        resolve({
          codigoEstado: 200,
          exito: true,
          datos: resultado as T,
        });
      } else {
        reject({
          codigoEstado: 404,
          exito: false,
          datos: null as unknown as T,
          errores: [`Recurso no encontrado: ${endpoint}`],
        });
      }
    }, 300);
  });
}

