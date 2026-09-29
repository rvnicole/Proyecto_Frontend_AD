export type NewDocumentType = {
    title: string,
    document?: File
};

export type DocumentType = {
    title: string,
    document: string
};

export type RetrievalType = {
    user: string,
    title: string,
    prompt: string
};