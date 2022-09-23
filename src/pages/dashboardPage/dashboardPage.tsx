import { LayoutSecondary} from "components";
import { Tab, Disclosure } from '@headlessui/react'
import { Fragment, useState } from 'react'
import IonIcon from '@reacticons/ionicons';

export function DashboardPage() {

    const [itensBox, setItensBox] = useState([
        {title: "Pendentes de ciência ou de resposta", qtd: 0},
        {title: "Apenas pendentes de ciência", qtd: 0},
        {title: "Ciência dada pelo destinatário direto ou indireto - pendente de resposta", qtd: 0},
        {title: "Ciência dada pelo Judiciário pendente de resposta", qtd: 0},
        {title: "Cujo prazo lindou nos últimos 10 dias - sem resposta", qtd: 0},
        {title: "Sem prazo", qtd: 0},
        {title: "Respondidos nos últimos 10 dias", qtd: 0}
    ]);


    return (
        <>
            <LayoutSecondary>
                <Tab.Group>
                    <div className="flex flex-col w-full h-full">
                        <Tab.List className="pt-5 px-8">
                            <div className="flex flex-row">
                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <div>
                                            <span className={selected ? "mr-10 mb-4 text-[#0377AA] transition-all duration-150" : "mr-10 text-gray-500 transition-all duration-150"}>EXPEDIENTES</span>
                                            <hr className={selected ? "mr-10 mt-4 border-[2px] border-[#0377AA] opacity-100 transition-all duration-100" : "opacity-0 mr-10 mt-4 transition-all duration-100"}/>
                                        </div>
                                    )}
                                </Tab>

                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <div>
                                            <span className={selected ? "mr-10 mb-4 text-[#0377AA] transition-all duration-150" : "mr-10 text-gray-500 transition-all duration-150"}>ACERVO</span>
                                            <hr className={selected ? "mr-10 mt-4 border-[2px] border-[#0377AA] opacity-100 transition-all duration-100" : "opacity-0 mr-10 mt-4 transition-all duration-100"}/>
                                        </div>
                                    )}
                                </Tab>

                                <Tab as={Fragment}>
                                    {({ selected }) => (
                                        <div>
                                            <span className={selected ? "mr-10 mb-4 text-[#0377AA] transition-all duration-150" : "mr-10 text-gray-500 transition-all duration-150"}>MINHAS EXPEDIÇÕES</span>
                                            <hr className={selected ? "mr-10 mt-4 border-[2px] border-[#0377AA] opacity-100 transition-all duration-100" : "opacity-0 mr-10 mt-4 transition-all duration-100"}/>
                                        </div>
                                    )}
                                </Tab>
                            </div>
                        </Tab.List>

                        <Tab.Panels className="min-h-full">
                            <Tab.Panel className="h-full">
                                <div className="flex flex-row w-full h-full">
                                    <div className="bg-[#EAF0F3] w-[600px] h-full py-5 px-5">
                                        <input className='w-full mb-5' placeholder='Pesquise por numero de processo'/>
                                        <hr />
                                        <>{
                                            itensBox.map(itemBox => {
                                                return <Disclosure>
                                                {({open}) => (
                                                    <>
                                                        <Disclosure.Button className="py-2 w-full">
                                                            <div className="flex flex-row items-center w-full">
                                                                <IonIcon className={open ? "text-[12px] rotate-90 transform" : "text-[12px]"} name="chevron-forward-outline"></IonIcon>
                                                                <span className="text-left text-base mx-4">{itemBox.title}</span>
                                                                <span className="ml-auto text-gray-500">{itemBox.qtd}</span>
                                                            </div>
                                                        </Disclosure.Button>
                                                        <Disclosure.Panel className="text-gray-500">
                                                            Yes! You can purchase a license that you can share with your entire
                                                            team.
                                                        </Disclosure.Panel>
                                                        <hr />
                                                    </>
                                                )}
                                            </Disclosure>
                                            })
                                        }</>
                                    </div>
                                
                                    <div className="bg-pink-600 w-full h-full">
                                        1
                                    </div>
                                </div>
                            </Tab.Panel>

                            <Tab.Panel>
                                ACERVO
                            </Tab.Panel>

                            <Tab.Panel>
                                MINHAS PETIÇÕES
                            </Tab.Panel>
                        </Tab.Panels>
                    </div>
                </Tab.Group>
            </LayoutSecondary>
        </>
    );
}