import PWS8M from './imgs/pws8-m-removebg.png';
import PWS53 from './imgs/pws5-3.png';
import PWS85 from './imgs/pws8-5.png';
import PWS88 from './imgs/pws8-8.png';
import PWS1212 from './imgs/pws12-12.png';
import PWS2020 from './imgs/pws20-20.png';

const distillerData = {
    product: 'Distillers',
    benefitsIntro: '',
    benefits: [
        // {
        //     title: 'Cleaner, Brighter Laundry',
        //     body: [
        //         'Clothes and towels are brighter and feel softer. Soft water dissolves easier, resulting in less loads to get clean clothes.',
        //     ]
        // },
        // {
        //     title: 'Reduces Housework',
        //     body: [
        //         'Eliminates soap scum and scale reside on shower stalls, fixtures, tubs and sinks. Glasses and dishware sparkle and are spot-free.',
        //     ]
        // },
        // {
        //     title: 'Dermatology Benefits',
        //     body: [
        //         'Silky skim after showering, shaving and washing. Hair is softer, radiant, and more manageable.',
        //     ]
        // },
        // {
        //     title: 'Protects Plumbing, Fixtures & Appliances',
        //     body: [
        //         'Water heaters, dishwashers and washing machines last longer. Saves on costly service calls and repairs. Water flow and pressure is improved with less buildup in pipes.',
        //     ]
        // },
        // {
        //     title: 'Protects the Environment',
        //     body: [
        //         'Reduces detergents and cleaning product usage by up to 50%.',
        //         'Reduce hot water energy use up to 29%.',
        //         'Reduce salt & water use up to 60% with a high-efficiency softener.',
        //     ]
        // }
    ],
    models: [
        {   
            name: 'PWS8-M Water Distiller',
            regPrice: 1095,
            financing: '$19 /mo OAC',
            img: PWS8M,
            path: '/products/distillers/PWS8-M',
            features: {
                float: 'Trouble free float system',
                coil: 'Stainless steel finned coil',
                tank: '5" boiling and storage tank opening',
                drain: '1/2” impurities drain'
            }
        },
        {
            name: 'PWS5-3 Water Distiller',
            regPrice: 2395,
            financing: '$23 /mo OAC',
            img: PWS53,
            path: '/products/distillers/PWS5-3',
            features: {
                float: 'Trouble free float system',
                coil: 'Stainless steel finned coil',
                tank: '5" boiling and storage tank opening',
                drain: '1/2” impurities drain'

            }
        },
        {
            name: 'PWS8-5 Water Distiller',
            regPrice: 2795,
            financing: '$23 /mo OAC',
            img: PWS85,
            path: '/products/distillers/PWS8-5',
            features: {
                float: 'Trouble free float system',
                coil: 'Stainless steel finned coil',
                tank: '5" boiling and storage tank opening',
                drain: '1/2” impurities drain'
            }
        },
        {
            name: 'PWS8-8 Water Distiller',
            regPrice: 3195,
            financing: '$23 /mo OAC',
            img: PWS88,
            path: '/products/distillers/PWS8-8',
            features: {
                float: 'Trouble free float system',
                coil: 'Stainless steel finned coil',
                tank: '5" boiling and storage tank opening',
                drain: '1/2” impurities drain'
            }
        },
        {
            name: 'PWS12-12 Water Distiller',
            regPrice: 3495,
            financing: '$23 /mo OAC',
            img: PWS1212,
            path: '/products/distillers/PWS12-12',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'PWS20-20 Water Distiller',
            regPrice: 4095,
            financing: '$23 /mo OAC',
            img: PWS2020,
            path: '/products/distillers/PWS20-20',
            features: {
                float: 'Trouble free float system',
                coil: 'Stainless steel finned coil',
                tank: '5" boiling and storage tank opening',
                drain: '1/2” impurities drain'
            }
        }
    ]
}

export { distillerData };