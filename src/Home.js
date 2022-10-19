import { Link } from 'react-router-dom';

import homeHero from './imgs/home-hero-giorgio-trovato-unsplash.jpg';
import since1980Icon from './imgs/1980-icon.JPG';

export default function Home(props) {
    return (
        <main className=''>
            <section className='max-w-screen-2xl mx-auto min-h-[80vh] flex 2xs:flex-col lg:flex-row items-center lg:pl-10'>
                <img
                    className='hero-image md:w-1/2 lg:w-1/3 max-w-1/2 md:rounded-xl mx-auto object-cover'
                    src={homeHero}
                    alt="woman drinking water"/>
                <div className='flex flex-col justify-center items-center px-5 text-center tracking-widest xl:max-w-[900px]'>
                    <h1 className='2xs:text-4xl sm:text-6xl p-4 flex flex-col gap-4'>
                        <span className='text-[#02549F]'>We make it</span>
                        <div>
                            <span 
                                className='easy bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text uppercase font-bold'>
                                easy
                            </span>
                        </div>
                        <span className='text-[#02549F]'>to have better water.</span>
                    </h1>
                    <p className='sm:text-2xl text-center p-4 text-gray-700 tracking-wide'>Buying or renting water treatment equipment can be confusing. With so many products on the market and each claiming to be the best, it's hard to know what you need.
                        <span className='tracking-wide font-bold pl-2 text-[#02549F]'>
                            We can help.
                        </span>
                    </p>
                </div>
            </section>
            <section className='bg-[#002649] min-h-[70vh] flex justify-center'>
                {/* <p className='text-gray-300 2xs:text-2xl sm:text-4xl text-center font-bold tracking-wide'>
                    Experience our <span className='italic'>we care</span> philosophy
                </p>
                <div className='flex items-center'>
                    <img 
                        className='h-24 w-24 rounded-full' 
                        src={since1980Icon}
                        alt=''
                    />
                    <p className='text-gray-200 p-6'>
                        Over 20,000 customers served since 1980.
                    </p>
                </div>
                <p>
                    Our priority is to ensure customers bring home the best possible equpiment for their need and budget. We've served generations of families by providing the best equpiment available.
                </p> */}
                <div className='flex flex-col items-center text-center'>
                    <p className='2xs:text-2xl sm:text-4xl text-gray-300 py-6'>Protect your home and appliances.</p>
                    <p className='2xs:text-md sm:text-xl text-gray-300 py-6 max-w-1/2'>Hard water can lead residue in appliances and laundry, leading to more frequenty and costly maintenance. We can help you save money.</p>
                    <p className='bg-orange-400 max-w-[125px] rounded-full px-4 py-2 font-bold uppercase'>
                        <Link>
                            Learn More
                        </Link>
                    </p>
                </div>
            </section>

        </main>
    )
}