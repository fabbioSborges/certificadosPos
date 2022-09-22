import IonIcon from '@reacticons/ionicons';

interface PropsSideMenu {
    showSideMenu: boolean
}

export function SideBarMenu(props: PropsSideMenu) {

    return (
        <div className = {props.showSideMenu ? "bg-white w-[300px] flex flex-col flex-grow" : "hidden"}>
                <div className="flex m-4 border-b border-[#3E92B6]">
                    <span className="inline-flex items-center mx-2">
                        <IonIcon className="text-[20px] text-[#3E92B6] p-1" name="search"></IonIcon>
                    </span>
                    <input type="text" className="px-1 outline-none" placeholder="Acesso Rápido"></input>
                </div>

                <div className="">
                    <button className="flex flex-row items-center text-gray-500 w-full">
                        <IonIcon className="text-[26px] py-5 px-6 " name="desktop"></IonIcon>
                        <p>Painel</p>
                        <IonIcon className="text-[16px] ml-auto mr-6" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                    <button className="flex flex-row items-center text-gray-500 w-full">
                        <IonIcon className="text-[26px] py-4 px-6 " name="folder-open"></IonIcon>
                        <p>Processo</p>
                        <IonIcon className="text-[16px] ml-auto mr-6" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                    <button className="flex flex-row items-center text-gray-500 w-full">
                        <IonIcon className="text-[26px] py-4 px-6 " name="create"></IonIcon>
                        <p>Atividades</p>
                        <IonIcon className="text-[16px] ml-auto mr-6" name="chevron-forward-outline"></IonIcon>
                    </button>
                    
                    <hr />

                    <button className="flex flex-row items-center text-gray-500 w-full">
                        <IonIcon className="text-[26px] py-4 px-6 " name="calendar"></IonIcon>
                        <p>Audiências e sessões</p>
                        <IonIcon className="text-[16px] ml-auto mr-6" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                    <button className="flex flex-row items-center text-gray-500 w-full">
                        <IonIcon className="text-[26px] py-4 px-6 " name="settings"></IonIcon>
                        <p>Configuração</p>
                        <IonIcon className="text-[16px] ml-auto mr-6" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                </div>
                
            </div>
    );
}