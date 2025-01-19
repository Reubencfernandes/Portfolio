export default function About({description}: {description: string}) {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-3xl font-bold my-8">About me</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
                <div className="w-full md:w-1/3">
                    <div className="border-4 border-gray-300 rounded-full p-2 w-fit mx-auto">
                        <img 
                            src='../reuben.png' 
                            alt="Placeholder" 
                            width={200} 
                            height={200} 
                            className="rounded-full w-full h-auto"
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3">
                    <p className="text-lg leading-relaxed">
                    {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
