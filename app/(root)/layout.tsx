import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-1">
                <Sidebar />
            </div>
                {children}
        </div>
     );
}
 
export default RootLayout;