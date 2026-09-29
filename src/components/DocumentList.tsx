import type { DocumentType } from "../types";

type DocumentListProps = {
    documents: DocumentType[]
}

export default function DocumentList({ documents }: DocumentListProps) {
    return (
        <div className="p-5">
            <h3 className="py-3 text-center text-2xl pirata-one-regular">Biblioteca</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
                { documents.map((document, index) => (
                    <div
                        key={index}
                        className="flex gap-3 p-5 bg-bg/20 backdrop-blur-sm rounded-xl hover:bg-bg/40 hover:scale-105 hover:cursor-pointer"
                    >
                        <div className="border-2 border-r border-input-border rounded-xl" />

                        <div>
                            <div className="flex flex-col">
                                <span className="pirata-one-regular">Titulo: </span>
                                <span className="text-sm">{document.title}</span>
                            </div>

                            <div className="flex flex-col">
                                <span className="pirata-one-regular">Documento: </span>
                                <span className="text-sm break-all">{document.document}</span>
                            </div>                            
                        </div>                        
                    </div>
                ))}
            </div>
        </div>
    )
}