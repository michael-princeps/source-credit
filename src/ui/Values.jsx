import val from '../assets/val.svg';
import val2 from '../assets/val2.svg';
import val3 from '../assets/val3.svg';
import val4 from '../assets/val4.svg';
import val5 from '../assets/val5.svg';

function Values() {
    return (
        <div className='container mx-auto px-5 py-20'>
             <h2 className='colored-text text-4xl text-center xl:text-5xl text-source-black font-black xl:leading-tight'>
                        Our Values
                    </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap">
            <div className="w-4/12 p-8 my-4">
                <div className='flex items-center gap-6'>
                <span className="w-24 h-24 flex items-center justify-center values-card shrink-0">
                    <img src={val5} className="w-3/5" />
                </span>
                <div className='space-y-2'>
                    <h6 className='text-source-black dark:text-white font-bold text-lg'>
                        Excellence
                    </h6>
                    <p className='text-sm font-light dark:text-white text-source-black'>
                        A commitment to be the best and/or delivering the best to our customers and investors through simple and easy solutions.
                    </p>
                </div>
                </div>
            </div>
            <div className="w-4/12 p-8 my-4">
                <div className='flex items-center gap-6'>
                <span className="w-24 h-24 flex items-center justify-center values-card shrink-0">
                    <img src={val4} className="w-3/5" />
                </span>
                <div className='space-y-2'>
                    <h6 className='text-source-black dark:text-white font-bold text-lg'>
                        Integrity
                    </h6>
                    <p className='text-sm font-light dark:text-white text-source-black'>
                    Acting with honour and truthfulness always. We do what is right, and what we say we will do, at all times.
                    </p>
                </div>
                </div>
            </div>
            <div className="w-4/12 p-8 my-4">
                <div className='flex items-center gap-6'>
                <span className="w-24 h-24 flex items-center justify-center values-card shrink-0">
                    <img src={val} className="w-3/5" />
                </span>
                <div className='space-y-2'>
                    <h6 className='text-source-black dark:text-white font-bold text-lg'>
                        Humility
                    </h6>
                    <p className='text-sm font-light dark:text-white text-source-black'>
                    No matter the level of success we achieve we remain grounded in our thinking.
                    </p>
                </div>
                </div>
            </div>
            <div className="w-4/12 p-8 my-4">
                <div className='flex items-center gap-6'>
                <span className="w-24 h-24 flex items-center justify-center values-card shrink-0">
                    <img src={val2} className="w-3/5" />
                </span>
                <div className='space-y-2'>
                    <h6 className='text-source-black dark:text-white font-bold text-lg'>
                        Professionalism
                    </h6>
                    <p className='text-sm font-light dark:text-white text-source-black'>
                    We understand the need to be professional in our code of conduct and operation. We get it right the first time and every time.
                    </p>
                </div>
                </div>
            </div>
            <div className="w-4/12 p-8 my-4">
                <div className='flex items-center gap-6'>
                <span className="w-24 h-24 flex items-center justify-center values-card shrink-0">
                    <img src={val3} className="w-3/5" />
                </span>
                <div className='space-y-2'>
                    <h6 className='text-source-black dark:text-white font-bold text-lg'>
                        Empathy
                    </h6>
                    <p className='text-sm font-light dark:text-white text-source-black'>
                    We are self-aware of our customers, (investors and colleagues) feelings.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Values
