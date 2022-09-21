import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

export function NavBarDashboard() {

    const [visibleHamburgermenu, setVisibleHamburgermenu] = useState(true);

    return (
        <>
            <nav className="px-3 bg-[#0377AA] flex items-center justify-between">
                <div className="flex justify-between items-center ">
                    <button onClick={(e) => {visibleHamburgermenu ? setVisibleHamburgermenu(false) : setVisibleHamburgermenu(true)}}>
                        <div className={visibleHamburgermenu ? "text-white cursor-pointer py-1.5" : "text-[#0377AA] bg-white cursor-pointer py-1.5"}>
                            <IonIcon className="text-3xl mx-2 " name={visibleHamburgermenu ? "menu" : "close"}></IonIcon>
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

            <div className = {visibleHamburgermenu ? "hidden" : "bg-white w-[300px] h-screen flex flex-col"}>
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
                        <IonIcon className="text-[16px]" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                    <button className="flex flex-row items-center text-gray-500 ">
                        <IonIcon className="text-[26px] py-4 px-6 " name="folder-open"></IonIcon>
                        <p>Processo</p>
                        <IonIcon className="text-[16px]" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                    <button className="flex flex-row items-center text-gray-500 ">
                        <IonIcon className="text-[26px] py-4 px-6 " name="create"></IonIcon>
                        <p>Atividades</p>
                        <IonIcon className="text-[16px]" name="chevron-forward-outline"></IonIcon>
                    </button>
                    
                    <hr />

                    <button className="flex flex-row items-center text-gray-500 ">
                        <IonIcon className="text-[26px] py-4 px-6 " name="calendar"></IonIcon>
                        <p>Audiências e sessões</p>
                        <IonIcon className="text-[16px]" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                    <button className="flex flex-row items-center text-gray-500 ">
                        <IonIcon className="text-[26px] py-4 px-6 " name="settings"></IonIcon>
                        <p>Configuração</p>
                        <IonIcon className="text-[16px]" name="chevron-forward-outline"></IonIcon>
                    </button>

                    <hr />

                </div>
                
            </div>
        </>
    );
}