import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-1">
                <Sidebar />
            </div>
            <main className="md:pl-24 pt-20 h-full">
                {children}
            </main>
        </div>
     );
}
 
export default HomeLayout;