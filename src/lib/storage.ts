import type { DocumentType, NewDocumentType } from "../types";

const NOMBRE_KEY = 'lumos-nombre';
const DOCUMENTOS_KEY = 'lumos-documentos';

export const guardarNombre = (nombre: string) => localStorage.setItem(NOMBRE_KEY, nombre);

export const obtenerNombre = (): string => localStorage.getItem(NOMBRE_KEY) ?? "";

export const obtenerDocumentos = (): DocumentType [] => JSON.parse(localStorage.getItem(DOCUMENTOS_KEY) ?? "[]");

export const agregarDocumento = (data: NewDocumentType) => {
    const doc = {
        title: data.title,
        document: data.document?.name
    }

    const docs = obtenerDocumentos();
    const newDocs = [doc, ...docs];
    const newDocsStr = JSON.stringify(newDocs);

    localStorage.setItem(DOCUMENTOS_KEY, newDocsStr);
};

export const existeDocumento = (documento: string) => {
    const docs = obtenerDocumentos();
    const existe = docs.some(doc => doc.document === documento);
    return existe;
};