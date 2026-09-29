type ParchmentCardProps = {
    className?: string;
    title: string;
    children?: React.ReactNode;
}

export default function ParchmentCard({ className, title, children }: ParchmentCardProps) {
  return (
    <div className={`p-2 bg-cover bg-no-repeat bg-center bg-[url('/papel-textura.avif')] ${className}`}>
        <div className="flex flex-col">
            <div className="flex justify-between items-center text-center">
                <img src="/hogwarts.png" className="h-20 md:h-28"/>
                
                <p className="text-text-secondary pirata-one-regular text-2xl">{title}</p>
                
                <img src="/estampa.png" className="h-16 md:h-24"/>
            </div>

            {children}
        </div>        
    </div>
  );
}