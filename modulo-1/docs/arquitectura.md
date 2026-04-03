# Arquitectura del Módulo 1

## Funciones matemáticas con tipos estrictos

### Por qué `number | null` como retorno
Si el array está vacío no hay valor que calcular. Retornar `0` sería
mentir sobre el resultado. Con `number | null` obligamos a quien use
la función a comprobar si el resultado es null antes de usarlo.

### Por qué copiar el array en `calcularMediana`
Con `[...datos]` hacemos una copia antes de ordenar. Si no lo hiciéramos,
estaríamos modificando el array original, lo cual es un bug silencioso
muy común en JavaScript.

### Por qué `as number` en `filtrarAtipicos`
Es uno de los pocos casos justificados para usar una aserción de tipo.
Sabemos que el array no está vacío porque lo comprobamos justo antes,
pero TypeScript no puede deducirlo solo.