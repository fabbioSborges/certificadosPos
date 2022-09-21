import { NavBarDashboard } from "components";

export function DashboardPage() {
    return (
        <div className="bg-[#EAF0F3] h-screen">
            <header className="h-full flex flex-col">
                <NavBarDashboard/>
            </header>
        </div>
    );
}