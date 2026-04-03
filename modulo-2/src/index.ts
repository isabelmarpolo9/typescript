import { obtenerRecurso } from "./services/api-client.js";
import { generarReporte } from "./domain/reporte.js";
import { Estudiante, Asignatura, EstadoMatricula } from "./domain/types/index.js";

async function main() {
  // Uso del genérico: TypeScript sabe que 'respuestaEstudiante.datos' es de tipo Estudiante
  const respuestaEstudiante = await obtenerRecurso<Estudiante>("estudiantes/1");
  console.log("Estudiante:", respuestaEstudiante.datos.nombre);

  // Aquí TypeScript sabe que 'respuestaAsignatura.datos' es de tipo Asignatura
  const respuestaAsignatura = await obtenerRecurso<Asignatura>("asignaturas/1");
  console.log("Asignatura:", respuestaAsignatura.datos.nombre);

  // Probamos los tres estados de la unión discriminada
  const estados: EstadoMatricula[] = [
    {
      tipo: "ACTIVA",
      asignaturas: [{ id: "1", nombre: "Matemáticas", creditos: 6, departamento: "Ciencias" }]
    },
    {
      tipo: "SUSPENDIDA",
      motivoSuspension: "Impago de tasas"
    },
    {
      tipo: "FINALIZADA",
      notaMedia: 7.85
    },
  ];

  console.log("\n=== Reportes de matrícula ===");
  for (const estado of estados) {
    console.log(generarReporte(estado));
  }
}

main().catch(console.error);
