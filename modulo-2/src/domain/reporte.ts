import { EstadoMatricula } from "./types/index.js";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignatura(s): ${estado.asignaturas.map(a => a.nombre).join(", ")}`;

    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivoSuspension}`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media: ${estado.notaMedia.toFixed(2)}`;

    default:
      const _exhaustivo: never = estado;
      throw new Error(`Estado no manejado: ${JSON.stringify(_exhaustivo)}`);
  }
}