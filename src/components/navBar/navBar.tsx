import IonIcon from '@reacticons/ionicons';
import { useState } from 'react';

export function NavBar() {

    const [visibleHamburgermenu, setVisibleHamburgermenu] = useState(false);

    return (
        <nav className="p-2 bg-[#0377AA] md:flex md:items-center md:justify-between">
            
            <div className="flex justify-between items-center">
                <span className="md:text-[18px] text-[14px] text-white">
                    <img className="md:h-9 h-7 mx-2 inline" src="assets/pje2.png"/>
                    Processo Judicial Eletrônico - Simulador
                </span>
                
                <button onClick={(e) => {visibleHamburgermenu ? setVisibleHamburgermenu(false) : setVisibleHamburgermenu(true)}}>
                    <span className="text-gray-400 cursor-pointer md:hidden block border rounded shadow-lg">
                        <IonIcon className="text-3xl mx-2" name="menu"></IonIcon>
                    </span>
                </button>
            </div>

            <ul className={ visibleHamburgermenu ? "md:flex md:items-center md:static md:w-auto md:py-0 py-2.5 md:pl-0" : "md:flex md:items-center md:static md:w-auto md:py-0 py-2.5 md:pl-0 hidden" }>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className="text-white text-[14px] ">Entrar</a>
                </li>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className="text-white text-[14px]">Formas de acesso</a>
                </li>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className="text-white text-[14px]">Consulta processual</a>
                </li>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className="text-white text-[14px]">Push</a>
                </li>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className="text-white text-[14px]">Pré-requisitos</a>
                </li>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className="text-white text-[14px]">Manuais</a>
                </li>
                <li className=" mx-4 my-6 md:my-0">
                    <a href="#" className=" text-white text-[14px]">Fale conosco</a>
                </li>
            </ul>
        </nav>

    );
}



