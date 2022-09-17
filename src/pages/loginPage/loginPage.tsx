import { NavBar } from "components";

export function LoginPage() {
    return (
        <div className="bg-[#EAF0F3] md:h-screen h-full">
            <header>
                <NavBar/>
            </header>

            <main className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center mt-28'>
                    <img className='h-[100px] w-[100px]' src="assets/brasaoRep.png" alt="Brasao Republica" />
                    <h2 className='md:text-2xl text-xl text-[#074863] mt-2'>Processo Judicial Eletrônico - 1º Grau - TJPI</h2>
                    <p className='text-xl text-[#074863] mt-2'>Tribunal de Justiça do Piauí</p>
                </div>

                <div className='p-5 mt-5 mb-10 flex flex-col-reverse md:flex-row justify-center items-center bg-white drop-shadow-lg rounded-md'>                  
                    <button className='flex flex-row justify-between items-center text-white bg-[#3E92B6] rounded-sm'>    
                        <img className="w-[50px]" src="assets/carteirDigital.png" alt="carteira digital" />
                        <p className='py-2.5 px-7'>CERTIFICADO DIGITAL</p>
                    </button>

                    <div className="flex flex-row md:flex-col items-center justify-center mt-5 mb-5 md:mt-0">
                        <div className="h-[2px] w-[95px] md:w-[2px] md:h-[80px] bg-[#EAE9E9]"></div>
                        <span className="mx-4 text-gray-500">ou</span>
                        <div className="h-[2px] w-[95px] md:w-[2px] md:h-[80px] bg-[#EAE9E9]"></div>
                    </div>

                    <form className="flex flex-col items-end" action="">
                        <input className="p-2.5 w-64 outline outline-offset-2 outline-1 outline-[#CCCCCC] text-base rounded-sm" type="text" placeholder="CPF / CNPJ"/>
                        <input className="p-2.5 w-64 outline outline-offset-2 outline-1 outline-[#CCCCCC] mt-5 text-base rounded-sm" type="password" placeholder="Senha"/>
                        <button className="bg-[#3E92B6] px-5 py-2 text-white mt-5 rounded-md" type="submit">ENTRAR</button>
                    </form>
                </div>

            </main>

        </div>
    );
}