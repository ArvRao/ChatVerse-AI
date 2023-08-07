import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return ( 
        <div>
            Root page (protected)
            <div className='text-5xl text-gray-600 font-light'>ChatVerse AI</div>
            <UserButton afterSignOutUrl="/" />
        </div>
     );
}
 
export default RootPage;