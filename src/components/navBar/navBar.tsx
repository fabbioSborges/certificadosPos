export function NavBar() {
    return (
        <nav className="flex items-center bg-[#0377AA] p-2">
            <div className="inline-flex items-center">
                <img className="px-3 h-9 w-13" src={require("../../assets/pje2.png")}/>
                <span className=" font-sans text-[18px] text-white">
                Processo Judicial Eletrônico - Simulador
                </span>
            </div>
            <div className="top-nav inline-flex flex-grow w-auto ">
                <div className=" inline-flex flex-row ml-auto font-sans text-[14px] text-white">
                    <a href="#" className="px-3">Entrar</a>
                    <a href="#" className="px-3">Formas de acesso</a>
                    <a href="#" className="px-3">Consulta Processual</a>
                    <a href="#" className="px-3">Push</a>
                    <a href="#" className="px-3">Pré-requisitos</a>
                    <a href="#" className="px-3">Manuais</a>
                    <a href="#" className="px-3">Fale Conosco</a>
                </div>
            </div>
        </nav>
    );
}