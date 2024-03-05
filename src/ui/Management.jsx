import ec from '../assets/ec.png';
import obi from '../assets/obi.png';
import noela from '../assets/noela.png';
import iriaobe from '../assets/iriaobe.png';
import gbemi from '../assets/gbemi.png';
import akanimoh from '../assets/akanimoh.png';
import linkedin from '../assets/linkedin.svg'
import linkedinDark from '../assets/linkedin-dark.svg'

function Management() {
    return (
        <div className='container mx-auto px-5 py-20'>
            <h2 className='colored-text text-4xl text-center xl:text-5xl text-source-black font-black xl:leading-tight'>
                Our Management
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-6 lg:grid-rows-2 gap-20 items-center justify-center flex-wrap my-24">
                <div className="">
                    <div className='flex items-center gap-6'>
                        <span className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={ec} />
                        </span>
                        <div className='space-y-2'>
                            <h6 className='text-source-black dark:text-white font-bold text-base'>
                                Peter Atuma
                            </h6>
                            <p className='text-sm font-light dark:text-white text-source-black'>
                                Chairman
                            </p>
                            <a href="" className='inline-block'>
                                <img className='w-4 h-4 hidden dark:inline-block' src={linkedin} />
                                <img className='w-4 h-4 dark:hidden' src={linkedinDark} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='flex items-center gap-6'>
                        <span className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={obi} />
                        </span>
                        <div className='space-y-2'>
                            <h6 className='text-source-black dark:text-white font-bold text-base'>
                                Obiajulu Wemambu
                            </h6>
                            <p className='text-sm font-light dark:text-white text-source-black'>
                                Director
                            </p>
                            <a href="" className='inline-block'>
                                <img className='w-4 h-4 hidden dark:inline-block' src={linkedin} />
                                <img className='w-4 h-4 dark:hidden' src={linkedinDark} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='flex items-center gap-6'>
                        <span className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={noela} />
                        </span>
                        <div className='space-y-2'>
                            <h6 className='text-source-black dark:text-white font-bold text-base'>
                                Noela Ifedirah
                            </h6>
                            <p className='text-sm font-light dark:text-white text-source-black'>
                                Director
                            </p>
                            <a href="" className='inline-block'>
                                <img className='w-4 h-4 hidden dark:inline-block' src={linkedin} />
                                <img className='w-4 h-4 dark:hidden' src={linkedinDark} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className='flex items-center gap-6'>
                        <span className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={iriaobe} />
                        </span>
                        <div className='space-y-2'>
                            <h6 className='text-source-black dark:text-white font-bold text-base'>
                                Iriaobe Anenih
                            </h6>
                            <p className='text-sm font-light dark:text-white text-source-black'>
                                Director
                            </p>
                            <a href="" className='inline-block'>
                                <img className='w-4 h-4 hidden dark:inline-block' src={linkedin} />
                                <img className='w-4 h-4 dark:hidden' src={linkedinDark} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className='flex items-center gap-6'>
                        <span className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={gbemi} />
                        </span>
                        <div className='space-y-2'>
                            <h6 className='text-source-black dark:text-white font-bold text-base'>
                                Gbemisola Adelowore
                            </h6>
                            <p className='text-sm font-light dark:text-white text-source-black'>
                                Director
                            </p>
                            <a href="" className='inline-block'>
                                <img className='w-4 h-4 hidden dark:inline-block' src={linkedin} />
                                <img className='w-4 h-4 dark:hidden' src={linkedinDark} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className='flex items-center gap-6'>
                        <span className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                            <img src={akanimoh} />
                        </span>
                        <div className='space-y-2'>
                            <h6 className='text-source-black dark:text-white font-bold text-base'>
                                Akanimoh Ojo
                            </h6>
                            <p className='text-sm font-light dark:text-white text-source-black'>
                                Director
                            </p>
                            <a href="" className='inline-block'>
                                <img className='w-4 h-4 hidden dark:inline-block' src={linkedin} />
                                <img className='w-4 h-4 dark:hidden' src={linkedinDark} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Management
