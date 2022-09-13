import IonIcon from '@reacticons/ionicons';

export function NavBar() {

    return (
        <nav className="p-2 bg-[#0377AA] md:flex md:items-center md:justify-between">
            
            <div className="flex justify-between items-center">
                <span className="text-[18px] text-white">
                    <img className=" h-9 mx-2 inline" src={"assets/pje2.png"}/>
                    Processo Judicial Eletrônico - Simulador
                </span>
                <span className="text-gray-400 cursor-pointer md:hidden block border rounded shadow-lg">
                    <IonIcon className="text-3xl mx-2" name="menu"></IonIcon>
                </span>
            </div>

            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
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



