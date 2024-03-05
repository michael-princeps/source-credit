import lightHeroImg from '../assets/heroimg-light.png';
import darkHeroImg from '../assets/heroimg-dark.png';
import arrowRight from '../assets/arrow-right.svg';

function Hero() {
    return (
       <div className='bg-[#EFEFEF] dark:bg-[#f8f5f51a]'>
         <div className='container mx-auto px-5 py-14'>
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
                <div className='space-y-8 w-full lg:w-6/12'>
                    <h1 className='colored-text text-4xl  xl:text-5xl text-source-black font-black xl:leading-tight'>
                        Get instant loans when you really need it wherever you are.
                    </h1>

                    <p className='text-xl font-light dark:text-white'>
                        Source Credit offers unique loans and credit opportunities that are crafted just for you, with zero collaterals or paperwork needed!
                    </p>

                    <a href='https://apply.sourcecredit.ng/' target='_blank'
                        className="inline-flex items-center gap-x-4 text-white bg-source-blue focus:ring-4 focus:ring-source-cyan font-medium rounded-lg text-xl px-5 py-2.5 focus:outline-none">
                        Apply Now
                        <img className='w-4 h-4' src={arrowRight} />
                    </a>
                </div>
                <img className='w-full lg:w-5/12' src={darkHeroImg} alt="Hero" />
            </div>
        </div>
       </div>
    )
}
export default Hero