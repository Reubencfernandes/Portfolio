export default function About() {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}
