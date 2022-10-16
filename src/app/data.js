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

const productsData = {
    waterSofteners: {
        benefits: [
            {
                title:'Softer, Brighter Laundry',
                body: 'Clothes and towels are brighter and softer. Laundry looks and feels softer.'
            },
            {
                title:'Reduces Housework',
                body: 'Eliminates soap scum and scale reside on shower stalls, fixtures, tubs and sinks. Glasses and dishware sparkle and are spot-free.'
            },
            {
                title:'Softer Hair, Smoother Skin',
                body: 'Silky skim after showering, shaving and washing. Hair is softer, radiant, and more manageable.'
            },
            {
                title:'Protects Plumbing, Fixtures & Appliances',
                body: 'Water heaters, dishwashers and washing machines last longer. Saves on costly service calls and repairs. Water flow and pressure is improved with less buildup in pipes.'
            },
            {
                title:'Protects the Environment',
                body: 'Reduces detergents and cleaning products by up to 50%. Reduce hot water energy use up to 29%. Reduce salt & water use up to 60% with a high-efficiency softener.'
            }
        ],
        selectionAdvice: [
            {
                title: '1. Sizing',
                body: "Sizing a softener requires that your specific water hardness and water use is matched to the softener capacity while minimizing the amount of salt and water it uses to regenerate. To size a softener you need to know how hard your water is, your average water consumption and the rated capacity of the softener. Because this information isn't always easily or readily available, a 30,000 grain capacity softener is often recommended for a household of 4 people. The downside of guessing at the size of softener needed is that it may not run at peak efficiency. We recommend getting a Quick Quote and we'll help you get a price on the right size and model."
            },
            {
                title: '2. Efficiency',
                body: "Salt and water efficiencies can differ considerably. A high efficiency softener can use up to 70% less salt and water during regeneration than a standard unit. That's a savings of about $250 per year - 840lbs (19 bags) of salt and 8,400 gals. of water for a household of 4 people! Over its lifetime, a high efficiency softener will more than pay for itself."
            },
            {
                title: '3. Installation',
                body: "You don't want surprises. Attention to detail is essential. Consider all the factors that influence installation and performance; Do you want softwater everywhere or do you want hard water outside and at the kitchen sink? Will the softener fit the space? Is there an electrical outlet within 4 feet? Is there proper drainage available?"
            },
            {
                title: '4. Warranty',
                body: "Consider carefully between a manufacturer warranty and dealer warranty. A warranty is only as good as the company backing it. Warranties often differ for tanks, resin, electronics and labour. Do you have confidence in the company's after-sale care? Do they offer a performance guarantee should a unit not perform to your satisfaction?"
            },
            {
                title: '5. Price',
                body: 'Water touches most everything in the home. Having better water is a good investment. It pays to have the best softener you can afford.'
            }
        ],
        products: [ 
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
}


export { home, formCategories, service, about, productsData };