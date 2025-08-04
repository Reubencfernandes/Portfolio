export default function About({description}: {description: string}) {
    return (
        <section className="container mx-auto px-4 sm:px-6 mb-10" aria-labelledby="about-heading">
            <h2 id="about-heading" className="text-3xl font-bold tracking-tighter md:text-4xl text-center mb-12 text-primary my-6 sm:my-8">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-8 max-w-4xl mx-auto">
                <div className="w-full sm:w-2/3 md:w-1/3 flex justify-center md:justify-start">
                    <div className="border-4 border-black rounded-full w-32 h-32 sm:w-48 sm:h-48 md:w-52 md:h-52 overflow-hidden">
                        <img 
                            src='/reuben.png'
                            alt="Reuben Fernandes - Professional headshot" 
                            className="rounded-full w-full h-full object-cover"
                            loading="lazy"
                            width={208}
                            height={208}
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-2 sm:p-4 rounded-lg">
                    <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}
