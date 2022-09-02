import { NavBar } from "components";

export function LoginPage() {
    return (
        <div>
            <header>
                <NavBar/>
            </header>

            <main className='flex flex-col justify-center items-center bg-[#EAF0F3] h-screen'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='h-[140px] w-[140px]' src="assets/brasaoRep.png" alt="Brasao Republica" />
                    <h2 className='text-2xl text-[#074863] mt-2'>Justiça Federal da 1ª Região</h2>
                    <p className='text-xl text-[#074863] mt-2'>Varas e Juizados (1º grau)</p>
                </div>

                <div className='w-5/6 md:w-[916px] h-3/5 md:h-72 mt-8 flex flex-col-reverse md:flex-row justify-around items-center bg-white drop-shadow-lg'>
                    <div className='h-20 flex flex-col justify-center items-center'>
                        <p className="text-[#337AB7] text-lg md:mt-0">Modo de assinatura PJeOffice</p>
                        <button className='w-[364px] flex flex-row justify-between items-center my-2 bg-[#3E92B6] text-white'>
                            <img src="assets/carteirDigital.png" alt="carteira digital" />
                            <p className='my-0 mx-auto'>CERTIFICADO DIGITAL</p>
                        </button>
                        <a href="#" className="text-[#337AB7] text-lg">Saiba como obter o certificado digital</a>
                    </div>

                    <div className="flex flex-row md:flex-col items-center mt-11 md:mt-0">
                        <div className="h-[2px] w-[95px] md:w-[2px] md:h-[93px] bg-[#EAE9E9]"></div>
                        <span className="mx-4">ou</span>
                        <div className="h-[2px] w-[95px] md:w-[2px] md:h-[93px] bg-[#EAE9E9]"></div>
                    </div>

                    <div className='h-20 flex flex-col justify-center items-center mt-11 md:mt-0'>
                        <form className="flex flex-col justify-center items-center" action="">
                            <input className="w-[363px] h-[53px] outline outline-offset-2 outline-1 outline-[#CCCCCC] mt-10 p-1 text-lg" type="text" placeholder="CPF / CNPJ"/>
                            <input className="w-[363px] h-[53px] outline outline-offset-2 outline-1 outline-[#CCCCCC] mt-10 p-1 text-lg" type="password" placeholder="Senha"/>
                            <div className="w-[363px] mt-5 flex flex-row justify-between items-start">
                                <a className="text-[#337AB7] text-lg" href="#">Solicitar nova senha</a>
                                <button className="bg-[#3E92B6] p-4 text-white" type="submit">ENTRAR</button>
                            </div>
                        </form>
                    </div>
                </div>

            </main>

        </div>
    );
}