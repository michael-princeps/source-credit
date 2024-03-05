import sourceLogo from '../assets/footer-logo.png'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
function Footer() {
    return (
        <footer className='bg-source-black'>
            <div className='container mx-auto px-5 py-14 space-y-10'>
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className='lg:max-w-[300px] space-10'>
                        <img className='w-52' src={sourceLogo} alt="Source Logo" />
                        <p className='text-white text-base font-light'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam…
                        </p>
                    </div>
                    <div className='w-6/12 space-y-20'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-14'>
                            <div className='space-y-10'>
                                <h6 className='text-white text-lg font-bold'>
                                    Company
                                </h6>
                                <ul className='space-y-6'>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Media
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Customers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-10'>
                                <h6 className='text-white text-lg font-bold'>
                                    Support
                                </h6>
                                <ul className='space-y-6'>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Knowledge Base
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Contact Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-10'>
                                <h6 className='text-white text-lg font-bold'>
                                    Legal
                                </h6>
                                <ul className='space-y-6'>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className='font-light text-base text-white'>
                                            Cookies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="space-x-6 text-right">
                            <a href="" className='inline-block'>
                                <img className='w-5 h-5' src={facebook} />
                            </a>
                            <a href="" className='inline-block'>
                                <img className='w-5 h-5' src={instagram} />
                            </a>
                            <a href="" className='inline-block'>
                                <img className='w-5 h-5' src={twitter} />
                            </a>
                            <a href="" className='inline-block'>
                                <img className='w-5 h-5' src={linkedin} />
                            </a>
                        </div>
                    </div>
                </div>
                <p className='text-base font-light text-white'>
                Source Credit - © 2023
                </p>
            </div>
        </footer>
    )
}

export default Footer;