import { useState, useEffect } from 'react';

// IMAGES
import iconHam from '/assets/images/icon-hamburger.svg';
import iconClose from '/assets/images/icon-close.svg';
import logo from '/assets/images/logo.svg';
import arrLeft from '/assets/images/icon-angle-left.svg';
import arrRight from '/assets/images/icon-angle-right.svg';
import arrBtn from '/assets/images/icon-arrow.svg';
import aboutDark from '/assets/images/image-about-dark.jpg';
import aboutLight from '/assets/images/image-about-light.jpg';

const info = [
  {
    id: 1,
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    id: 2,
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    id: 3,
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
]

function App() {

  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(1);

  // añadiendo overflow-hidden a html
  active ?
    document.querySelector('html').classList.add('overflow-hidden') :
    document.querySelector('html').classList.remove('overflow-hidden');

  useEffect(() => {
    const handleIndex = () => {
      if (index < 1) {
        setIndex(3)
      } else if (index > 3) {
        setIndex(1)
      }
    }
    handleIndex();
  }, [index])


  return (
    <>
      <div className='lg:grid lg:grid-cols-3'>
        <div className={`bg-[url(/assets/images/desktop-image-hero-1.jpg)] max-lg:bg-[url(/assets/images/mobile-image-hero-1.jpg)] h-[360px] lg:h-[534px] bg-no-repeat bg-[length:100%] lg:bg-cover bg-center relative col-span-2`}>
          <div className="container px-5 mx-auto">
            <div className='grid grid-cols-3 lg:flex lg:items-center lg:gap-10 pt-10'>
              <img
                src={iconHam}
                alt="icon ham navbar"
                className='cursor-pointer lg:hidden'
                onClick={() => setActive(true)}
              />
              <a
                href="/"
                className='mx-auto lg:ml-10'
              >
                <img
                  src={logo}
                  alt="logo ROOM"
                  className='lg:w-20'
                />
              </a>
              <div className={`max-lg:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6))] max-lg:absolute top-0 left-0 max-lg:w-screen max-lg:h-screen ${active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-500 z-50 lg:opacity-100 lg:flex-1 lg:pointer-events-auto`}>
                <div className='max-lg:bg-white flex items-center gap-10 p-8'>
                  <img
                    src={iconClose}
                    alt="icon ham navbar"
                    className='cursor-pointer lg:hidden'
                    onClick={() => setActive(false)}
                  />
                  <ul className='flex items-center gap-7'>
                    <li>
                      <a
                        href="/"
                        className='font-bold lg:text-white lg:hover:border-b-2 lg:border-white lg:hover:pb-1'
                      >home</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className='font-bold lg:text-white lg:hover:border-b-2 lg:border-white lg:hover:pb-1'
                      >shop</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className='font-bold lg:text-white lg:hover:border-b-2 lg:border-white lg:hover:pb-1'
                      >about</a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className='font-bold lg:text-white lg:hover:border-b-2 lg:border-white lg:hover:pb-1'
                      >contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-black w-max absolute right-0 lg:-right-[115.5px] bottom-0 flex gap-2'>
            <div className='cursor-pointer hover:bg-[#454545] p-5'>
              <img
                src={arrLeft}
                alt="arrow left hero"
                onClick={() => setIndex(index - 1)}
              />
            </div>
            <div className='cursor-pointer hover:bg-[#454545] p-5'>
              <img
                src={arrRight}
                alt="arrow right hero"
                onClick={() => setIndex(index + 1)}
              />
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div className="container px-5 mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center h-full">
            <div className='p-10'>
              {info.map(i => (
                <div
                  key={i.id}
                  className={`${index === i.id ? 'block' : 'hidden'}`}
                >
                  <h1 className='text-3xl lg:text-4xl font-bold pb-3'>{i.title}</h1>
                  <p className='text-[#a1a1a1] font-medium pb-10 lg:pb-5'>{i.text}</p>
                </div>
              ))}

              <button
                type='button'
                className='flex items-center gap-5 hover:text-[#a1a1a1] transition-colors duration-300'
              >
                <span className='text-sm lg:text-lg uppercase font-bold tracking-[15px]'>shop now</span>
                <img
                  src={arrBtn}
                  alt="arrow btn shop now"
                  className='w-12'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:grid lg:grid-cols-3 lg:items-center h-full'>
        <div className='h-full'>
          <img
            src={aboutDark}
            alt="image about dark"
            className='w-full block object-cover h-full'
          />
        </div>
        <div className='container px-5 mx-auto'>
          <div className='py-10 md:px-10'>
            <h2 className='text-base tracking-[5px] font-bold uppercase pb-4'>About our furniture</h2>
            <p className='text-[#a1a1a1] font-medium'>Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what
              inspires you. Find the furniture pieces you need, from traditional to contemporary styles
              or anything in between. Product specialists are available to help you create your dream space.</p>
          </div>
        </div>
        <div className='pb-5 h-full'>
          <img
            src={aboutLight}
            alt="image about light"
            className='w-full block object-cover h-full'
          />
        </div>
      </div>
    </>
  )
}

export default App
