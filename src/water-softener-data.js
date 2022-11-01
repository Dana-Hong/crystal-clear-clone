import crystalClassic from './imgs/crystal-classic-removebg.png';
import crystalComfort from './imgs/crystal-comfort-removebg.png';
import crystalMaxx from './imgs/crystal-maxx-removebg.png';
import crystalPerform from './imgs/crystal-perform-removebg.png';
import crystalPro from './imgs/crystal-pro-removebg.png';
import crystalUltra from './imgs/crystal-ultra-removebg.png';
import crystalVision from './imgs/crystal-vision-removebg.png';

const waterSoftenerData = {
    product: 'Water Softeners',
    benefitsIntro: 'In cities near hard water, having a water softener in your home is a must. The benefits include:',
    benefits: [
        {
            title: 'Cleaner, Brighter Laundry',
            body: [
                'Clothes and towels are brighter and feel softer. Soft water dissolves easier, resulting in less loads to get clean clothes.',
            ]
        },
        {
            title: 'Reduces Housework',
            body: [
                'Eliminates soap scum and scale reside on shower stalls, fixtures, tubs and sinks. Glasses and dishware sparkle and are spot-free.',
            ]
        },
        {
            title: 'Dermatology Benefits',
            body: [
                'Silky skim after showering, shaving and washing. Hair is softer, radiant, and more manageable.',
            ]
        },
        {
            title: 'Protects Plumbing, Fixtures & Appliances',
            body: [
                'Water heaters, dishwashers and washing machines last longer. Saves on costly service calls and repairs. Water flow and pressure is improved with less buildup in pipes.',
            ]
        },
        {
            title: 'Protects the Environment',
            body: [
                'Reduces detergents and cleaning product usage by up to 50%.',
                'Reduce hot water energy use up to 29%.',
                'Reduce salt & water use up to 60% with a high-efficiency softener.',
            ]
        }
    ],
    models: [
        {   
            name: 'Crystal Comfort Water Softener',
            regPrice: 1295,
            financing: '$19 /mo OAC',
            img: crystalComfort,
            path: '/products/water-softeners/crystal-comfort',
            features: {
                valve: '5600 MI Series Control Valve',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 8% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal Vision Water Softener',
            regPrice: 1595,
            financing: '$23 /mo OAC',
            img: crystalVision,
            path: '/products/water-softeners/crystal-vision',
            features: {
                valve: '765 Series Control Valve',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 8% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal Perform Water Softener',
            regPrice: 1895,
            financing: '$23 /mo OAC',
            img: crystalPerform,
            path: '/products/water-softeners/crystal-perform',
            features: {
                valve: 'Fleck 5600 SXT Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal Ultra High-Efficiency Conditioner',
            regPrice: 2395,
            financing: '$23 /mo OAC',
            img: crystalUltra,
            path: '/products/water-softeners/crystal-ultra',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal CLASSIC Twin Softener',
            regPrice: 2895,
            financing: '$23 /mo OAC',
            img: crystalClassic,
            path: '/products/water-softeners/crystal-classic',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal PRO Water Softener',
            regPrice: 3295,
            financing: '$23 /mo OAC',
            img: crystalPro,
            path: '/products/water-softeners/crystal-pro',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal MAXX Water Softener',
            regPrice: 3595,
            financing: '$23 /mo OAC',
            img: crystalMaxx,
            path: '/products/water-softeners/crystal-maxx',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        
    ]
         /*    'Down-flow brining with reliable piston, seal & spacer technology',
            'Meters water use',
            'Regenerates only when necessary',
            'Prevents water overflow in salt tank',
            'Strong, chlorine resistant resin',
            'For extra strength',
            'Easy-to-use Bypass Valve',
            'Turn your softener "off" without disrupting water flow in your home',
            'Warranty:',
            '5 years - softener valve',
            '10 years - softening and salt tanks', */
}

export { waterSoftenerData };