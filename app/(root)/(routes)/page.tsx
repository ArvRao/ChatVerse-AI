import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
    weight: "400",
    subsets: ['latin']
});

const RootPage = () => {
    return (
        <div>
            <nav className="bg-gradient-to-r from-green-400 to-blue-300 flex items-center justify-between bg-gray-200 py-4 px-4 md:px-8">
                <div className="flex items-center justify-center md:justify-start">
                    <a href="/" className={cn("hidden md:block text-4xl md:text-3xl font-light text-gray-600",
                        font.className)}>ChatVerse-AI</a>
                </div>
                <div className="flex items-center justify-end md:hidden">
                    <button className="text-gray-600 hover:text-gray-900">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-end">
                    <a href="/faqs" target="_blank" className="text-gray-700 hover:text-gray-900 mx-4">FAQs</a>
                    <a href="#" className="text-gray-700 hover:text-gray-900 mx-4">Privacy</a>
                    <a href="/contact" target="_blank" className="text-gray-700 hover:text-gray-900 mx-4">Contact</a>
                </div>
            </nav>

            <br />
            <center>
                <div className="font-normal text-blue-300 text-3xl">Explore, learn and chat with popular AI characters</div> <br />
                <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full" href='/home'>Get started</Link></center> <br />
            <br />
            <div className="flex">
                <div className="w-3/5">
                    <div className="text-2xl">Chat with any character about anything. <br /> We have a variety of categories of characters from celebrities to entrepreneurs</div> <br /> <br />
                    <div className="text-lg">Create your own characters quickly</div>
                    <div className="text-lg">A dedicated discussion community <br />
                    Get LIVE analytics about your activity!</div>

                </div>
                <div className="w-2/5">
                    <Image
                        width={450}
                        height={450}
                        alt="Main picture"
                        src="/main-image.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default RootPage;