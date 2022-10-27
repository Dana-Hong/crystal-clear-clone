import { Link } from 'react-router-dom';


import kitchen from './imgs/kitchen-christian-mackie-unsplash.jpg';
import kettle from './imgs/kettle-charlie-firth-unsplash.jpg';
import water from './imgs/water-kobu-agency-unsplash.jpg';
import HomeSection from './HomeSection';
import homeHero from './imgs/home-hero-giorgio-trovato-unsplash.jpg';
import since1980Icon from './imgs/1980-icon.JPG';

export default function Home(props) {
    return (
        <main className='bg-yellow-50 shadow-[inset_0_2px_20px_0_rgba(0,0,0,.3)]'>
            <section className='max-w-screen-2xl mx-auto min-h-[80vh] flex 2xs:flex-col lg:flex-row justify-around items-center lg:pl-10'>
                <div className='flex flex-col flex-1 items-center px-5 text-center tracking-widest xl:max-w-[900px] 2xs:order-first lg:order-last'>
                    <h1 className='2xs:text-4xl sm:text-6xl lg:text-7xl p-4 flex flex-col gap-4'>
                        <span className='text-[#02549F]'>We make it</span>
                        <div>
                            <span 
                                className='easy bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text uppercase font-bold'>
                                easy
                            </span>
                        </div>
                        <span className='text-[#02549F]'>to have better water.</span>
                    </h1>
                    <p className='sm:text-2xl text-center p-4 text-gray-700 tracking-wide leading-loose max-w-[600px] flex-1'>With so many products on the market and each claiming to be the best, it's hard to know what you need.
                        <span className='tracking-wide font-bold pl-2 text-[#02549F]'>
                            We can help.
                        </span>
                    </p>
                </div>
                <img
                    className='2xs:w-5/6 2xs:mb-8 md:w-3/4 lg:w-1/3 lg:mb-0 max-w-1/2 rounded-xl object-cover shadow-2xl shadow-slate-500'
                    src={homeHero}
                    alt="woman drinking water"/>
            </section>
            <HomeSection 
                imgs={[kitchen, kettle]} 
                title={'Protect your home and appliances.'}
                body={`Hard water can leave residue in appliances, leading to frequent and costly maintenance. We'll protect your home and help you save.`}
                path={'products/water-softeners'}
                />
            <HomeSection 
                imgs={[water, kettle]} 
                title={'Stay hydrated with healthier, tastier, water.'}
                body={'Tap water is filled withcontaminants that treatment plants miss, like chromium and arsenic. Bottled water produces unnecessary waste and is less pure.'}
                path={'products/reverse-osmosis'}
                />
        </main>
    )
}