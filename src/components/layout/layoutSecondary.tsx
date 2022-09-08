import { NavBar } from "components";

interface Props {
    children: any,
}

export function LayoutSecondary(props: Props) {
    return (
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    );
}