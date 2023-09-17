import { Navbar } from "@/components/navbar";
import { currentUser } from "@clerk/nextjs";

const Analytics = async () => {
    const user = await currentUser();
    return ( 
        <div>
        <div className="pl-10 pt-2 text-2xl">
            Welcome to Analytics <br />
            Name: {user?.firstName} {user?.lastName}
        </div>
        </div>
     );
}
 
export default Analytics;