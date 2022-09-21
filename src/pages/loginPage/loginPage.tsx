import { NavBar } from "components";

export function LoginPage() {
    return (
        <div className="bg-[#EAF0F3] h-full">
            <header>
                <NavBar/>
            </header>

            <main className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center mt-10 md:mt-28'>
                    <img className='h-[100px] w-[100px]' src="assets/images/brasaoRep.png" alt="Brasao Republica" />
                    <h2 className='md:text-2xl text-xl text-[#074863] mt-2'>Processo Judicial Eletrônico - 1º Grau - TJPI</h2>
                    <p className='text-lg text-[#074863] mt-2'>Tribunal de Justiça do Piauí</p>
                </div>

                <div className='py-4 px-5 mt-5 flex flex-col-reverse md:flex-row justify-center items-center bg-white drop-shadow-lg rounded-md mb-10 md:mb-0'>                  
                    <button className='flex flex-row justify-between items-center text-white bg-[#3E92B6] rounded-sm'>    
                        <img className="w-[50px]" src="assets/images/carteirDigital.png" alt="carteira digital" />
                        <p className='py-2.5 px-7'>CERTIFICADO DIGITAL</p>
                    </button>

                    <div className="flex flex-row md:flex-col items-center justify-center mt-5 md:mt-0">
                        <div className="h-[2px] w-[95px] md:w-[2px] md:h-[75px] bg-[#EAE9E9]"></div>
                        <span className="mx-4 text-gray-500">ou</span>
                        <div className="h-[2px] w-[95px] md:w-[2px] md:h-[75px] bg-[#EAE9E9]"></div>
                    </div>

                    <form className="flex flex-col md:items-end items-center" action="">
                        <input className="p-2.5 w-64 outline outline-offset-2 outline-1 outline-[#CCCCCC] text-base rounded-sm focus:ring focus:ring-[#3E92B6]-300" type="text" placeholder="CPF / CNPJ"/>
                        <input className="p-2.5 w-64 outline outline-offset-2 outline-1 outline-[#CCCCCC] mt-5 text-base rounded-sm focus:ring focus:ring-[#3E92B6]-300" type="password" placeholder="Senha"/>
                        <button className="bg-[#3E92B6] px-20 py-2 md:px-5 md:py-2 text-white mt-5 rounded-md" type="submit">ENTRAR</button>
                    </form>
                </div>
            </main>
        </div>
    );
}