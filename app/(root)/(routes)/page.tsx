import Link from "next/link";

const RootPage = () => {
    return ( 
        <div>
            <nav className="bg-gradient-to-r from-green-400 to-blue-300 flex items-center justify-between bg-gray-200 py-4 px-4 md:px-8">
                <div className="flex items-center justify-center md:justify-start">
                    <a href="/" className="text-4xl text-gray-600 font-light">ChatVerse AI</a>
                </div>
                <div className="flex items-center justify-end md:hidden">
                    <button className="text-gray-600 hover:text-gray-900">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-end">
                    <a href="#" className="text-gray-700 hover:text-gray-900 mx-4">FAQs</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 mx-4">Privacy</a>
                    <a href="/contact" className="text-gray-700 hover:text-gray-900 mx-4">Contact</a>
                </div>
            </nav>


            <br />
            <div className="font-normal text-blue-300 text-3xl">Explore, learn and chat with popular AI characters</div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href='/home'>Get started</Link> <br />
            <br />

            <div className="text-2xl">We have a variety of categories of characters from celebrities to entrepreneurs</div> <br />
            <div className="text-3xl">Create your own characters quickly</div>
        </div>
     );
}

export default RootPage;