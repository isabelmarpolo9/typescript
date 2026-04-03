export interface Estudiante {
  readonly id: string;
  nombre: string;
  apellidos: string;
  email: string;
  fechaNacimiento: Date;
}

export interface Asignatura {
  readonly id: string;
  nombre: string;
  creditos: number;
  departamento: string;
}

export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivoSuspension: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;
  