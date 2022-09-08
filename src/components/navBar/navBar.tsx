export function NavBar() {
    return (
        <nav className="flex items-center bg-[#0377AA] p-2">
            <div className="inline-flex items-center">
                <img className="px-3 h-9 w-13" src={"assets/pje2.png"}/>
                <span className="text-[18px] text-white">
                Processo Judicial Eletrônico - Simulador
                </span>
            </div>
            <div className="top-nav inline-flex flex-grow w-auto ">
                <div className="inline-flex flex-row ml-auto text-[14px] text-white">
                    <a href="#" className="mr-8">Entrar</a>
                    <a href="#" className="mr-8">Formas de acesso</a>
                    <a href="#" className="mr-8">Consulta Processual</a>
                    <a href="#" className="mr-8">Push</a>
                    <a href="#" className="mr-8">Pré-requisitos</a>
                    <a href="#" className="mr-8">Manuais</a>
                    <a href="#" className="mr-8">Fale Conosco</a>
                </div>
            </div>
        </nav>
    );
}