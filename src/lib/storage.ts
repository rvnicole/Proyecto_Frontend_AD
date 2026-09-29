const NOMBRE_KEY = 'lumos-nombre'

export const guardarNombre = (nombre: string) => localStorage.setItem(NOMBRE_KEY, nombre);

export const obtenerNombre = (): string => localStorage.getItem(NOMBRE_KEY) ?? "";

export const borrarNombre = () => localStorage.removeItem(NOMBRE_KEY);