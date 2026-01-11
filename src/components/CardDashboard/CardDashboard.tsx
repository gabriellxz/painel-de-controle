interface Props {
    title: string;
    main: string;
    description: string;
    className?: string;
}

export default function CardDashboard({ title, main, description }: Props) {
    return (
        <div className={`dark:bg-gray-800 dark:border-gray-700 rounded-md p-5 font-light space-y-3 mb-5 w-full border`}>
            <h1 className="dark:text-white">{title}</h1>
            <p className="text-3xl dark:text-white">
                {main}
            </p>
            <p className="dark:text-gray-400">
                {description}
            </p>
        </div> 
    )
}