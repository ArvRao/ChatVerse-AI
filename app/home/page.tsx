import { UserButton } from "@clerk/nextjs";

const Home = () => {
    return ( 
        <div>
            Welcome to ChatVerse-AI homepage
            <UserButton afterSignOutUrl="/" />
        </div>
     );
}
 
export default Home;