import { NavBarDashboard, SideBarMenu } from "components";
import { useState } from "react";

interface Props {
    children: any,
}

export function LayoutSecondary(props: Props) {

    const [showSideMenu, setShowSideMenu] = useState<boolean>(false)

    return (
        <>
            <header className="w-full">
                <NavBarDashboard handleSideMenu={setShowSideMenu} showSideMenu={showSideMenu}/>
            </header>
        
            <main className="flex w-full h-full"> {/*rever uso do h*/}
                <SideBarMenu showSideMenu={showSideMenu} />

                {props.children}

            </main>

        </>
    );
}