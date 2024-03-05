import Hero from "./Hero";
import appPreview from '../assets/app-preview.png';
import woman from '../assets/woman.png';
import man from '../assets/man.png';
import ratings from '../assets/ratings.svg';
import checkmark from '../assets/checkmark.svg';
import playStore from '../assets/google-play.svg';
import LoanSteps from "./LoanSteps";

function Landing() {
    return (
        <>
            <Hero />
            <div className="container mx-auto px-5 py-12">
                <div className="flex items-center flex-col lg:flex-row justify-between">
                    <img className='lg:w-5/12' src={appPreview} alt="App Preview" />
                    <div className='space-y-8 lg:w-5/12'>
                        <h2 className='text-3xl lg:text-4xl colored-text text-source-black font-black leading-normal	'>
                            Apply online 24/7, access funds in minutes.
                        </h2>

                        <ul className="space-y-6">
                            <li className="flex gap-x-10">
                                <span className="w-10 h-10 bg-source-green flex items-center justify-center rounded-full">
                                    <img className="w-5" src={checkmark} />
                                </span>
                                <span className="text-source-gray font-medium text-2xl">
                                    Access up to ₦5,000,000
                                </span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="w-10 h-10 bg-source-green flex items-center justify-center rounded-full">
                                    <img className="w-5" src={checkmark} />
                                </span>
                                <span className="text-source-gray font-medium text-2xl">
                                    No collaterals. No guarantors
                                </span>
                            </li>
                            <li className="flex gap-x-10">
                                <span className="w-10 h-10 bg-source-green flex items-center justify-center rounded-full">
                                    <img className="w-5" src={checkmark} />
                                </span>
                                <span className="text-source-gray font-medium text-2xl">
                                    No paperwork. No hidden fees
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <LoanSteps />
            <div className="container mx-auto px-5 py-5 lg:py-12 lg:my-8">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:w-11/12 ml-auto gap-6">
                    <div className="lg:w-5/12 bg-white shadow-[6px_6px_9px_#00000029] rounded-[50px] relative">
                        <img src={ratings} className="absolute right-14 top-8 xl:-right-20 w-60 xl:w-72" />
                        <img src={woman} className="scale-75 xl:scale-90 origin-bottom" />
                    </div>
                    <div className='space-y-8 lg:w-6/12'>
                        <h2 className='colored-text text-3xl lg:text-4xl text-source-black font-black lg:leading-normal'>
                            We are a digital bank with a focus on how to serve you better always!
                        </h2>
                        <p className='text-xl font-light dark:text-white'>
                            At Source Credit, we have our plans to serve you better right at the center of all we do, and our service offerings. We also ensure we give the best customer service experience that is tailored just for you.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-5 py-8 lg:py-20 lg:mt-8">
                <div className="store-advert xl:w-11/12 mx-auto px-4 py-8 lg:px-8 lg:py-12">
                    <div className="lg:w-6/12 xl:w-[61%] space-y-4">
                        <p className="text-2xl text-source-black font-black leading-normal">
                            Manage your loans & funds seamlessly.
                        </p>
                        <h2 className='text-3xl xl:text-5xl text-source-black font-black xl:leading-normal'>
                            Download the Source Credit app & get started today!
                        </h2>
                        <p className='text-xl font-light text-source-black'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam…
                        </p>
                        <div className="flex space-6 gap-4 flex-col lg:flex-row">
                            <button className="inline-flex items-center text-white bg-black focus:ring-4 focus:ring-source-cyan font-bold rounded-2xl text-base px-5 py-3 focus:outline-none">
                                <img className="w-6 h-6 mr-4" src={playStore} /> Get on PlayStore
                            </button>
                            <button className="inline-flex items-center text-white bg-black focus:ring-4 focus:ring-source-cyan font-bold rounded-2xl text-base px-5 py-3 focus:outline-none">
                                <img className="w-6 h-6 mr-4" src={playStore} /> Get on PlayStore
                            </button>
                        </div>
                    </div>
                    <img src={man} className="man hidden lg:block" />
                </div>
            </div>
        </>
    )
}

export default Landing