import { NavBarDashboard, SideBarMenu } from "components";
import { useState } from "react";

interface Props {
    children: any,
}

export function LayoutSecondary(props: Props) {

    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)

    return (
        <>
            <header className="">
                <NavBarDashboard handleSideMenu={setShowSideMenu} showSideMenu={showSideMenu}/>
            </header>
        
            <main className="h-full flex flex-row w-full">
                <SideBarMenu showSideMenu={showSideMenu} />

                {props.children}

            </main>

        </>
    );
}