export default function About({description}: {description: string}) {
    return (
        <div className="container mx-auto px-4 mb-10">
            <h1 className="text-center text-3xl font-bold my-8">About me</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                    <div className="border-4 border-black rounded-full w-48 h-48 md:w-52 md:h-52 overflow-hidden">
                        <img 
                            src='../reuben.png' 
                            alt="Placeholder" 
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4 rounded-lg">
                    <p className="text-lg leading-relaxed">
                    {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
