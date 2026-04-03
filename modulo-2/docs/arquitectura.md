# Arquitectura del Módulo 2

## Por qué `interface` para las entidades
Las interfaces definen contratos estructurales claros para los objetos del dominio.
`Estudiante` y `Asignatura` son entidades con estructura fija, exactamente el caso
de uso para el que están diseñadas las interfaces.

## Por qué `readonly` en los IDs
El ID de una entidad nunca debería cambiar una vez creado. Con `readonly` el 
compilador impide cualquier reasignación accidental.

## Por qué `type` para `EstadoMatricula`
La unión (`|`) solo es expresable con `type`. Las interfaces no pueden 
representar uniones de tipos.

## Por qué la Unión Discriminada
Evita propiedades opcionales ambiguas. Sin ella tendríamos un objeto con campos
opcionales mezclados donde no está claro qué combinación es válida en cada estado.
Con la unión discriminada cada estado es explícito e irrefutable.

## Por qué genéricos en `obtenerRecurso<T>`
Sin genéricos necesitaríamos una función por cada tipo de entidad. Con `<T>` una
sola función sirve para cualquier entidad manteniendo la seguridad de tipos.

## Por qué `unknown` en lugar de `any`
`any` desactiva completamente el sistema de tipos. `unknown` permite guardar
cualquier valor pero obliga a verificar el tipo antes de usarlo.