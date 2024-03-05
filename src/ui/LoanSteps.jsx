import stepOne from '../assets/step1.png';
import stepTwo from '../assets/step2.png';
import stepThree from '../assets/step3.png';
import stepFour from '../assets/step4.png';
import arrowRight from '../assets/arrow-right.svg';


function LoanSteps() {
    return (
        <div className='py-14 bg-[#EFEFEF] dark:bg-source-black'>
            <div className='container mx-auto px-5 text-center space-y-20'>
                <h2 className='text-3xl lg:text-4xl text-source-black dark:text-white font-black xl:leading-normal'>
                    Getting a loan from us is super easy. <br /> It takes just a few simple steps.
                </h2>
                <div className='loansteps relative'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 w-11/12 mx-auto relative z-10">
                        <div className="text-center space-y-6 flex flex-col">
                            <span className="bg-source-blue text-white w-14 h-14 rounded-full font-black flex items-center justify-center text-3xl mx-auto italic">
                                01.
                            </span>
                            <h3 className="text-source-black dark:text-white font-medium text-xl">
                                Apply online & tell us how much you need.
                            </h3>
                            <img src={stepOne} alt="Step One" className='flex-1' />
                        </div>
                        <div className="text-center space-y-6 flex flex-col">
                            <span className="bg-source-black text-white w-14 h-14 rounded-full font-black flex items-center justify-center text-3xl mx-auto italic">
                                02.
                            </span>
                            <h3 className="text-source-black dark:text-white font-medium text-xl">
                                Give us brief details about yourself.
                            </h3>
                            <img src={stepTwo} alt="Step Two"  className='flex-1'/>
                        </div>
                        <div className="text-center space-y-6 flex flex-col">
                            <span className="bg-source-blue text-white w-14 h-14 rounded-full font-black flex items-center justify-center text-3xl mx-auto italic">
                                03.
                            </span>
                            <h3 className="text-source-black dark:text-white font-medium text-xl">
                                We digitally process your loan request.
                            </h3>
                            <img src={stepThree} alt="Step Three" className='flex-1' />
                        </div>
                        <div className="text-center space-y-6 flex flex-col">
                            <span className="bg-source-black text-white w-14 h-14 rounded-full font-black flex items-center justify-center text-3xl mx-auto italic">
                                04.
                            </span>
                            <h3 className="text-source-black dark:text-white font-medium text-xl">
                                Funds are sent to your account upon approval!
                            </h3>
                            <img src={stepFour} alt="Step Three" className='flex-1' />
                        </div>
                    </div>
                    <div className="hidden lg:block absolute bottom-0 left-0 h-20 w-full bg-white shadow-[6px_6px_9px_#00000029] rounded-3xl">

                    </div>
                </div>
                <a href='https://apply.sourcecredit.ng/' target='_blank'
                    className="inline-flex items-center gap-x-4 text-white bg-source-blue focus:ring-4 focus:ring-source-cyan font-medium rounded-xl text-2xl px-10 py-3.5 focus:outline-none">
                    Apply Now
                    <img className='w-4 h-4' src={arrowRight} />
                </a>
            </div>
        </div>
    )
}

export default LoanSteps;