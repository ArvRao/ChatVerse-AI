import Link from "next/link";

const RootPage = () => {
    return ( 
        <div>
            <div className='text-5xl text-gray-600 font-light'>ChatVerse AI</div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href='/home'>Get started</Link>
        </div>
     );
}

export default RootPage;