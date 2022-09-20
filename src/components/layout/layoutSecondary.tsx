import { NavBar } from "components";

interface Props {
    children: any,
}

export function LayoutSecondary(props: Props) {
    return (
        <div className="flex flex-col w-full h-full">
            <header>
                <NavBar/>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
}