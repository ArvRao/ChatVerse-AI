import { Navbar } from "@/components/navbar";

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <Navbar />
            <main className="md:pl-20 pt-20 h-full">
                {children}
            </main>
        </div>
     );
}
 
export default HomeLayout;