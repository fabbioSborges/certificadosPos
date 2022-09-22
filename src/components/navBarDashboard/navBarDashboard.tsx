import IonIcon from '@reacticons/ionicons';

interface PropsNavBarDashboard {
    handleSideMenu: Function,
    showSideMenu: boolean
}

export function NavBarDashboard(props: PropsNavBarDashboard) {

    return (
        <>
            <nav className="px-3 bg-[#0377AA] flex items-center justify-between">
                <div className="flex justify-between items-center ">
                    
                <button onClick={(e) => props.showSideMenu ? props.handleSideMenu(false) : props.handleSideMenu(true)}>
                    <div className={props.showSideMenu ? "text-[#0377AA] bg-white cursor-pointer py-1.5" : "text-white cursor-pointer py-1.5" }>
                        <IonIcon className="text-3xl mx-2 " name={props.showSideMenu ? "close" : "menu"}></IonIcon>
                    </div>
                </button>
                    
                    <span className="text-[18px]  text-white">
                        <img className="h-9 mx-2 inline" src="assets/images/pje2.png"/>
                        Painel do Advogado
                    </span>            
                </div>

                <div className="flex justify-between items-center my-2">
                    <span className="text-white mx-3">
                        Nome do Usuario
                    </span>
                    <IonIcon className="text-2xl text-white rounded-full bg-[#004F6E]  p-1" name="person"></IonIcon>
                </div>
            </nav>
        </>
    );
}