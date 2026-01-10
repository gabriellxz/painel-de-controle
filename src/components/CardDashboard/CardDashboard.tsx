interface Props {
    title: string;
    main: string;
    description: string;
    className?: string;
}

export default function CardDashboard({ title, main, description }: Props) {
    return (
        <div className={`bg-[#F0FDFA] border border-[#a5f7e4] rounded-md p-5 font-light space-y-3 mb-5 w-full`}>
            <h1>{title}</h1>
            <p className="text-3xl">
                {main}
            </p>
            <p className="text-zinc-500">
                {description}
            </p>
        </div> 
    )
}