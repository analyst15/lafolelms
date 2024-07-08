const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div className="h-full">
            <div className="hidden md:flex h-full w-56 flex-col insert-y-0 z-50"></div>
            {children}
        </div>
     );
}
 
export default DashboardLayout;