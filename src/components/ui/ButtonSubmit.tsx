import { Bird } from "lucide-react";

type ButtonSubmitProps = {
    className?: string;
    text: string;
}

export default function ButtonSubmit({className, text, ...rest}: ButtonSubmitProps) {
    return (
        <button
            className={`flex items-center justify-center bg-magic px-2 py-1 rounded-lg hover:bg-magic/85 hover:cursor-pointer ${className}`}
            {...rest}
        >
            <span className="pirata-one-regular">{text}</span>
            <Bird className="size-6"/>
        </button>
    )
}