//modelo de datos para usuarios en general. chofer es el unico sin funcion de NOT NULL gracias a el signo de interrogacion ?
export interface User {
    nombre: string;
    apepat: string;
    apemat: string;
    rut: string;
    edad: number;
    genero: 'M'|'F';
    correo: string;
    //lo que sigue es lo opcional
    chofer?: {
        patente: string,
        fabCoche: string,
    };
}