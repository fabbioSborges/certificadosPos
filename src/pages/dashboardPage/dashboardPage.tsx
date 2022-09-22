import { LayoutSecondary} from "components";

export function DashboardPage() {

    return (
        <>
            <LayoutSecondary>
                <div className="bg-[#EAF0F3] w-[500px] h-full pt-12 px-5">
                    <input className='w-full' placeholder='Pesquise por numero de processo'/>
                </div>
            
                <div className="bg-white w-full h-full">
                    
                </div>
            </LayoutSecondary>
        </>
    );
}