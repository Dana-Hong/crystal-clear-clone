import crystalClassic from './imgs/crystal-classic.JPG';
import crystalComfort from './imgs/crystal-comfort.JPG';
import crystalMaxx from './imgs/crystal-maxx.JPG';
import crystalPerform from './imgs/crystal-perform.JPG';
import crystalPro from './imgs/crystal-pro.JPG';
import crystalUltra from './imgs/crystal-ultra.JPG';
import crystalVision from './imgs/crystal-vision.JPG';

const waterSoftenerData = {
    product: 'Water Softeners',
    benefits: [
        {
            title: 'Softer, Brighter Laundry',
            body: [
                'Clothes and towels are brighter and softer.',
                'Laundry looks and feels softer.',
            ]
        },
        {
            title: 'Reduces Housework',
            body: [
                'Eliminates soap scum and scale reside on shower stalls, fixtures, tubs and sinks.',
                'Glasses and dishware sparkle and are spot-free.',
            ]
        },
        {
            title: 'Dermatology Benefits',
            body: [
                'Silky skim after showering, shaving and washing.',
                'Hair is softer, radiant, and more manageable.',
            ]
        },
        {
            title: 'Protects Plumbing, Fixtures & Appliances',
            body: [
                'Water heaters, dishwashers and washing machines last longer.',
                'Saves on costly service calls and repairs.',
                'Water flow and pressure is improved with less buildup in pipes.',
            ]
        },
        {
            title: 'Protects the Environment',
            body: [
                'Reduces detergents and cleaning products by up to 50%.',
                'Reduce hot water energy use up to 29%.',
                'Reduce salt & water use up to 60% with a high-efficiency softener.',
            ]
        }
    ],
    models: [
        {   
            name: 'Crystal Comfort Water Softener',
            price: [1295, '$19 /mo OAC '],
            img: crystalComfort,
            path: 'products/water-softeners/crystalComfort',
            features: {
                valve: '5600 MI Series Control Valve',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 8% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal Vision Water Softener',
            price: [1595, '$23 /mo OAC '],
            img: crystalVision,
            path: 'products/water-softeners/crystalVision',
            features: {
                valve: '765 Series Control Valve',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 8% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal Perform Water Softener',
            price: [1895, '$23 /mo OAC '],
            img: crystalPerform,
            path: 'products/water-softeners/crystalPerform',
            features: {
                valve: 'Fleck 5600 SXT Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal Ultra High-Efficiency Conditioner',
            price: [2395, '$23 /mo OAC '],
            img: crystalUltra,
            path: 'products/water-softeners/crystalUltra',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal CLASSIC Twin Softener',
            price: [2895, '$23 /mo OAC '],
            img: crystalClassic,
            path: 'products/water-softeners/crystalClassic',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal PRO Water Softener',
            price: [3295, '$23 /mo OAC '],
            img: crystalPro,
            path: 'products/water-softeners/crystalPro',
            features: {
                valve: 'Fleck 5800 XTR2 Controller',
                float: 'Salt Tank Safety Float',
                resin: 'Premium 10% Cross-linked Resin',
                tank: 'Fiberglass Reinforced Softening Tank',
            }
        },
        {
            name: 'Crystal MAXX Water Softener',
            price: [3595, '$23 /mo OAC '],
            img: crystalMaxx,
            path: 'products/water-softeners/crystalMaxx',
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