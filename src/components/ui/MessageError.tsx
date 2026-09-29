import { CircleX } from "lucide-react";

type MessageErrorProps = {
    className?: string;
    message: string;
}

export default function MessageError({ className, message }: MessageErrorProps) {
    return (
        <div className={`flex items-center gap-1 font-semibold ${className}`}>
            <CircleX className="text-red-500 size-5"/>
            <p className="text-red-500">{message}</p>
        </div>
    )
}