import { Skeleton } from "../components/ui/skeleton"

export default function About({description, show}: {description: string, show: boolean}) {
    return (
        <div className="container mx-auto px-4 sm:px-6 mb-10">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary my-6 sm:my-8">About me</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 max-w-4xl mx-auto">
                <div className="w-full sm:w-2/3 md:w-1/3 flex justify-center md:justify-start">
                    <div className="border-4 border-black rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden">
                        <img 
                            src='../reuben.png' 
                            alt="Placeholder" 
                            className="rounded-full w-full h-full object-cover"
                        />
                    </div>
                </div>
                {show ? (
                    <div className="w-full md:w-2/3 p-2 sm:p-4 rounded-lg">
                        <p className="text-base sm:text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>        
                ) : (
                    <div className="flex flex-col space-y-2 sm:space-y-3 w-full">
                        <div className="space-y-2">
                            <Skeleton className="h-4 sm:h-6 w-full sm:w-[300px] md:w-[500px] bg-gray-300" />
                            <Skeleton className="h-4 sm:h-6 w-full sm:w-[300px] md:w-[500px] bg-gray-300" />
                            <Skeleton className="h-4 sm:h-6 w-full sm:w-[300px] md:w-[500px] bg-gray-300" />
                            <Skeleton className="h-4 sm:h-6 w-full sm:w-[300px] md:w-[500px] bg-gray-300" />
                            <Skeleton className="h-4 sm:h-6 w-full sm:w-[300px] md:w-[500px] bg-gray-300" />
                            <Skeleton className="h-4 sm:h-6 w-full sm:w-[300px] md:w-[500px] bg-gray-300" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
