import crystalEconomy from './imgs/crystal-economy-ro.png';
import crystalGro from './imgs/crystal-gro.png';
import crystalPlatinum from './imgs/crystal-platinum.png';
import crystalOptimum from './imgs/crystal-optimum.png';

const reverseOsmosisData = {
    product: 'Reverse Osmosis',
    benefitsIntro: 'Reverse osmosis systems force water through a membrane, and extract pollutants found in regular drinking water, leaving you with pure, tasier water. Other benefits include:',
    benefits: [
        {
            title: 'Pure Water',
            body: [
                'Using water from a reverse osmosis system will result in crystal clear ice cubes, richer tea and coffee.',
                'Healthier baby formula.'
            ]
        },
        {
            title: 'Removal of toxins',
            body: [
                'Water treated from city plants will not remove toxins such as chromium, arsenic, and etc.'
            ]
        },
        {
            title: 'Better Cooking',
            body: [
                'Enhances the natural flavour',
                'of vegetables, soups and pastas.'
            ]
        },
        {
            title: 'Protects Appliances',
            body: [
                'Prevents scale buildup in your household appliances. Teakettles, coffee makers and steam irons no longer have to be replaced.'
            ]
        },
        {
            title: 'Better Health',
            body: [
                'Boosts energy levels, helps weight loss and muscle tone maintenace.'
            ]
        }
    ],
    models: [
        {   
            name: 'Crystal Economy Reverse Osmosis System',
            regPrice: 795,
            img: crystalEconomy,
            path: '/products/reverse-osmosis/crystal-economy',
            features: {
                tubing: '3/8″ tubing from RO to faucet',
                stage: '5 Stage RO System',
                tank: '3.2 gal storage tank',
            }
        },
        {
            name: 'GRO Reverse Osmosis System',
            regPrice: 1095,
            img: crystalGro,
            path: '/products/reverse-osmosis/gro',
            features: {
                membrane: 'High efficiency membrane with 1:1 ratio',
                tubing: '3/8″ tubing from RO to faucet',
                stage: '4 Stage RO System',
                tank: '4.4 gal storage tank',
            }
        },
        {
            name: 'Crystal Platinum Reverse Osmosis System',
            regPrice: 1295,
            img: crystalPlatinum,
            path: '/products/reverse-osmosis/crystal-platinum',
            features: {
                filters: 'Sanitary, quick change filters',
                tubing: '3/8″ tubing from RO to faucet',
                custom: 'Customizable Filters; PH Booster / Remineralizing Cartridge available',
                stage: '4 Stage RO System',
                tank: '4.4 gal storage tank'
            }
        },
        {
            name: 'Crystal Optimum Reverse Osmosis System',
            regPrice: 1695,
            img: crystalOptimum,
            path: '/products/reverse-osmosis/crystal-optimum',
            features: {
                cert: 'Certified Contaminant Reduction',
                save: 'Uses 75% less Water',
                leak: 'Double Seal Protection',
                tank: '4.4 gal storage tank',
            }
        },
    ]
}

export { reverseOsmosisData };
