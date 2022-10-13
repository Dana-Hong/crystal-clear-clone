const formCategories = {
    "I'd like pricing for...": [
        'Water Softener',
        'Drinking Water System',
        'Chloramine Filtration',
        'Iron & Sulphur Filtration',
        'UV System',
        'Water Testing',
    ],
    "Type of installation:": [
        'Residential',
        'Commercial'
    ],
    "Water Source:": [
        'City',
        'Well'
    ],
}

const home = {
    header: 'We make it easy to have better water',
    body: [
        `Buying or renting water treatment equipment can be confusing. With so many products on the market and each claiming to be the best, it's hard to know what you need. We can help.`,
        `Since 1980, we've helped over 20,000 customers solve their water challenges in Kitchener, Waterloo, Cambridge, Guelph and the surrounding area. We take time to learn about your needs to provide you with the most efficient solution, custom fit to your home and budget.`
    ]
}

const service = {
    header: 'Expert Service, Installation & Maintenance',
    body: [
        `In need of repairs or maintenance for your water filtration system? If you're in the Kitchener, Waterloo, Cambridge, Guelph, or the surrounding region, our highly experienced factory trained technicians will be happy to assist you.`,
        `Our pledge is to provide you with quality service, so you'll know the price ahead of time, and get a  scheduled appointment so we can come prepared to get it fixed right the first time.`,
        `We also provide a large selection of parts and filters, and send automatic maintenance reminders.`
    ]
}

const about = {
    header: 'Experience our we care philosophy',
    body: [
        `Since 1980, Crystal Clear Water Centres has built a reputation over 20,000 customers have come to trust. We've provided solutions to multiple generations of families with over 60% of our business coming from existing customers and referrals. Our retail stores offer self-serve Purified Water, coolers, salt, replacement filters and a complete display of water treatment systems.`,
        `We're experts in our business and we're here to answer your questions and help you discover better water for your home or business. We are independent so we have the flexibility to source the best possible water systems available and have systems built to our exacting standards. Being locally owned, we are involved and supportive of the communities we serve. We're proud to offer Green Solutions that will help protect our environment for future generations:`,
    ]
}

const products = {
    waterSofteners: [ 
        {
            name: 'Crystal Comfort Water Softener',
            category: 'economy',
            summary: ['Everyday Low Price', 'Great value and performance'],
            promotion: false,
            price: {
                install: '$1295',
                financing: '$19 / month OAC'
            },
            features: {
                valve: {
                    name: '5600 MI Series Control Valve',
                    details: 'Down-flow brining with reliable piston, seal & spacer technology'
                },
                meter: {
                    name: 'Meter water usage',
                    details: 'Regenerates only when necessary',
                },
                float: {
                    name: 'Salt Tank Safety Float',
                    details: 'Prevents water overflow in salt tank'
                },
                resin: {
                    name: 'Premium 8% Cross-linked Resin',
                    details: 'Strong, chlorine resistant resin'
                },
                tank: {
                    name: 'Fiberglass Reinforced Softening Tank',
                    details: 'For extra strength'
                },
                byPassValve: {
                    name: 'Easy-to-use Bypass Valve',
                    details: 'Turn your softener "off" without disrupting water flow in your home'
                },
                warranty: {
                    name: 'Warranty',
                    details: ['5 years - softener valve', '10 years - softening and salt tanks']
                }
            }
        },
        {
            name: 'Crystal Vision Water Softener',
            category: 'High-Efficiency Softeners',
            summary: {
                title: 'Save Money and the Environment!',
                details: ['25% less Salt*', 'Save up to 300 lbs (6 bags) or about $57 per year', '30% less Water', 'Save up to 3,600 gals or about $78 per year']
            },
            promotion: false,
            price: {
                install: '$1,595',
                financing: '$23 / month OAC'
            },
            features: {
                valve: {
                    name: '765 Series Control Valve',
                    details: 'Down-flow brining with reliable piston, seal & spacer technology'
                },
                meter: {
                    name: 'Meter water usage',
                    details: 'Regenerates only when necessary',
                },
                float: {
                    name: 'Salt Tank Safety Float',
                    details: 'Prevents water overflow in salt tank'
                },
                resin: {
                    name: 'Premium 8% Cross-linked Resin',
                    details: 'Strong, chlorine resistant resin'
                },
                display: {
                    name: 'User Friendly LCD Display',
                    details: 'Shows time of day and gallons remaining'
                },
                powerOutageProtection: {
                    name: '48-Hr Power Outage Protection',
                    details: 'Set & Forget'
                },
                warranty: {
                    name: 'Warranty',
                    details: ['5 years - softener valve', '10 years - softening and salt tanks']
                },
                capacity: {
                    name: 'Capcity',
                    details: '75 and 1 cu. ft. models'
                }
            }
        },
        {
            name: 'Crystal Perform Water Softener',
            category: 'High-Efficiency Softeners',
            summary: {
                title: 'Save Money and the Environment!',
                details: ['40% less Salt*', 'Save up to 480 lbs (10 bags) or about $95 per year', '55% less Water', 'Save up to 6,600 gals or about $140 per year']
            },
            promotion: false,
            price: {
                install: '$1,895',
                financing: '$28 / month OAC'
            },
            features: {
                valve: {
                    name: 'Fleck 5600 SXT Controller',
                    details: 'Best rated industry leading valve'
                },
                display: {
                    name: 'User Friendly LCD Display',
                    details: 'Shows time of day and gallons remaining'
                },
                design: {
                    name: 'Reliable, Time-tested Design',
                    details: 'Single piston design minimizes moving parts, used in large rental fleets'
                },
                meter: {
                    name: 'Digital Meter Turbine',
                    details: 'Regenerates only when necessary',
                },
                byPassValve: {
                    name: 'Easy-to-use Bypass Valve',
                    details: 'Turn your softener "off" without disrupting water flow in your home'
                },
                float: {
                    name: 'Salt Tank Safety Float',
                    details: 'Prevents water overflow in salt tank'
                },
                tank: {
                    name: 'Fiberglass Reinforced Softening Tank',
                    details: 'For extra strength'
                },
                resin: {
                    name: 'Premium Grade 10% Cross-linked Resin',
                    details: 'Much stronger, chloramine resistant, longer life resin'
                },
                warranty: {
                    name: 'Warranty',
                    details: ['5 years - softener valve', '10 years - softening and salt tanks']
                },
                capacity: {
                    name: 'Capcity',
                    details: '75 and 3 cu. ft. models'
                }
            }
        },
        {
            name: 'Crystal Ultra High-Efficiency Conditioner',
            category: 'High-Efficiency Softeners',
            summary: {
                title: 'Save Money and the Environment!',
                details: ['50% less Salt*', 'Save up to 600 lbs (13 bags) or about $117 per year', '60% less Water', 'Save up to 7,200 gals or about $153 per year']
            },
            promotion: false,
            price: {
                install: '$2,395',
                financing: '$35 / month OAC'
            },
            features: {
                valve: {
                    name: 'Fleck 5800 XTR2 Controller',
                    details: 'Reliable, time-tested piston, seal & spacer technology'
                },
                display: {
                    name: 'User Friendly LCD Display',
                    details: 'Shows time of day and gallons remaining'
                },
                design: {
                    name: 'Reliable, Time-tested Design',
                    details: 'Single piston design minimizes moving parts, used in large rental fleets'
                },
                meter: {
                    name: 'Digital Meter Turbine',
                    details: 'Regenerates only when necessary',
                },
                byPassValve: {
                    name: 'Easy-to-use Bypass Valve',
                    details: 'Turn your softener "off" without disrupting water flow in your home'
                },
                float: {
                    name: 'Salt Tank Safety Float',
                    details: 'Prevents water overflow in salt tank'
                },
                tank: {
                    name: 'Fiberglass Reinforced Softening Tank',
                    details: 'For extra strength'
                },
                resin: {
                    name: 'Premium Grade 8% Cross-linked Resin',
                    details: 'Strong, chlorine resistant resin'
                },
                warranty: {
                    name: 'Warranty',
                    details: ['5 years - softener valve', '10 years - softening and salt tanks']
                },
                capacity: {
                    name: 'Capcity',
                    details: '1 cu. ft. models'
                }
            }
        }
    ]
}


export { home, formCategories, service, about };