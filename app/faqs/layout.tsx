const RootLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <center className="text-4xl font-bold">ChatVerse-AI FAQ</center>
            <div className="p-40 pt-12">
                {children}
            </div>
        </div>
     );
}
 
export default RootLayout;