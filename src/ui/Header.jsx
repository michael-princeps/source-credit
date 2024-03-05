
import sourceLogo from '../assets/logo-light.png'
import sourceLogoDark from '../assets/logo-dark.png'

function Header() {
    return (
        <header className='container mx-auto px-2 xl:px-5'>
            <nav className="flex flex-col lg:flex-row lg:items-center justify-between py-5">
                <a href="">
                    <img src={sourceLogo} className="w-48 xl:w-60 dark:hidden" alt="Source Logo" />
                    <img src={sourceLogoDark} className="w-48 xl:w-60 hidden dark:block" alt="Source Logo" />
                </a>
                <div className="flex flex-col lg:flex-row xl:items-center gap-10 xl:gap-20">
                    <a className="text-black dark:text-white text-base font-medium">
                        About
                    </a>
                    <a className="text-black dark:text-white text-base font-medium">
                        Get Help
                    </a>
                    <a href='https://apply.sourcecredit.ng/' target='_blank'
                        className="text-white bg-black colored-btn focus:ring-4 focus:ring-source-cyan font-medium rounded-lg text-base px-5 py-1.5 focus:outline-none">Apply Now</a>

                </div>
            </nav>
        </header>
    )
}

export default Header