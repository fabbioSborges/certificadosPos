import IonIcon from '@reacticons/ionicons';

export function NavBarDashboard() {

    return (
        <nav className="p-2 bg-[#0377AA] md:flex md:items-center md:justify-between">
            
            <div className="flex justify-between items-center">
                <button>
                    <span className="text-white cursor-pointer rounded ">
                        <IonIcon className="text-3xl mx-2" name="menu"></IonIcon>
                    </span>
                </button>
                
                <span className="md:text-[18px] text-[14px] text-white">
                    <img className="md:h-9 h-7 mx-2 inline" src="assets/images/pje2.png"/>
                    Painel do Advogado
                </span>            
            </div>

            <div className="flex justify-between items-center">
                <span className="text-white mx-3">
                    Horacio Neiva
                </span>
                <IonIcon className="text-2xl text-white p-2 rounded-full border" name="person"></IonIcon>
            </div>

            
        </nav>
    );
}