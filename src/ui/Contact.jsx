import location from '../assets/location.svg';
import email from '../assets/email.svg';
import phone from '../assets/phone.svg';

function Contact() {
    return (
        <div className="flex mt-16">
            <div className="bg-[#F5F5F5] w-6/12">
                <div className='max-w-[640px] ml-auto pl-5 pr-8 pt-20 pb-40 space-y-20'>
                    <div>
                    <h2 className='colored-text text-4xl xl:text-5xl text-source-black font-black xl:leading-tight'>
                        Contact Us
                    </h2>
                    <p className="text-lg font-light">
                        Reach out to us today. We are just within your reach
                    </p>
                    </div>
                    <div>
                        <ul className='space-y-8'>
                            <li className='font-medium text-xl text-[#626262] flex items-center gap-8'>
                                <img className='w-6 h-6' src={phone} />
                                <a href="tel:09117871901">
                                    <span>
                                        +234 911 787 1901
                                    </span>
                                </a>
                            </li>
                            <li className='font-medium text-xl text-[#626262] flex gap-8'>
                                <img className='w-6 h-6' src={email} />
                                <a href="mailto:info@mysourcebank.com">
                                    <span>
                                        info@mysourcebank.com
                                    </span>
                                </a>
                            </li>
                            <li className='font-medium text-xl text-[#626262] flex gap-8'>
                                <img className='w-6 h-6' src={location} />
                                <a href="">
                                    <span>
                                        167, Ipaja Road, Agege - Lagos, Nigeria
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-[#000000] w-6/12">
            <div className='max-w-[640px] mr-auto pl-8 pr-5 pt-20 pb-40 space-y-6'>
            <h2 className='colored-text text-3xl text-white font-black xl:leading-tight'>
                        Leave us a message
                    </h2>
                    <form action="#" class="space-y-8">
          <div className="grid grid-cols-2 gap-4">
          <div>
              <input type="email" id="email" class="bg-transparent border border-white text-white text-sm rounded-lg focus:ring-source-black focus:border-source-black block w-full px-4 py-3" placeholder="First Name" />
          </div>
          <div>
              <input type="email" id="email" class="bg-transparent border border-white text-white text-sm rounded-lg focus:ring-source-black focus:border-source-black block w-full px-4 py-3" placeholder="Last Name" />
          </div>
          </div>
          <div>
              <input type="email" id="email" class="bg-transparent border border-white text-white text-sm rounded-lg focus:ring-source-black focus:border-source-black block w-full px-4 py-3" placeholder="Email Address" />
          </div>
          <div>
              <textarea id="message" rows="6" class="bg-transparent border border-white text-white text-sm rounded-lg focus:ring-source-black focus:border-source-black block w-full px-4 py-3" placeholder="Your Message"></textarea>
          </div>
          <button target='_blank'
                        className="inline-flex items-center gap-x-4 text-white bg-source-blue focus:ring-4 focus:ring-source-cyan font-medium rounded-lg text-base px-6 py-2.5 focus:outline-none">
                            Send Message
                    </button>
      </form>
                </div>
            </div>
        </div>
    )
}

export default Contact