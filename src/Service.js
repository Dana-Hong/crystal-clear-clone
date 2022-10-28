import { nanoid } from "nanoid";

import PageTitle from "./PageTitle";
import Checkbox from "./Checkbox";
import TextField from "./TextField";
import RadioButton from "./RadioButton";
import ListItem from "./ListItem";

export default function Service(props) {

    const provincesList = [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
    ];

    const listOne = [
        'Water Softeners',
        'Reverse Osmosis Systems',
        'Water Distillers',
        'Water Coolers',
    ]
    
    const listTwo = [
        'Iron Filters',
        'Carbon Filters',
        'UV Systems',
        'Water Dispensers'
    ]


    const provinceOptionElements = provincesList.map(province => <option key={nanoid()} value={province}>{province}</option>);

    const listOneElements = listOne.map(listItem => <ListItem key={nanoid()} body={[listItem]} containerStyles={'list-disc py-2'} />);
    const listTwoElements = listTwo.map(listItem => <ListItem key={nanoid()} body={[listItem]} containerStyles={'list-disc py-2'} />);

    return (
        <section className="flex-grow bg-yellow-50 shadow-[inset_0_2px_20px_0_rgba(0,0,0,.3)]">
            <div className="px-4">
                <PageTitle text={'Service'} styles={'text-center my-6'}></PageTitle>
                <h1 className="max-w-screen-md mx-auto text-center 2xs:text-xl md:text-2xl pb-12 font-bold">Expert Service, Installation & Maintenace</h1>
                <p className="max-w-screen-md mx-auto text-center text-lg pb-8 leading-9">If you need servicing for your water treatment equipment, we are here to help. We have factory trained technicians that will get it fixed right the first time around. We also will provide you a quote <span className="font-semibold">before</span> before the work starts so you're not caught off guard. We offer service for the following:</p>
                <div className="max-w-screen-md mx-auto flex 2xs:flex-col xs:flex-row xs:gap-40 xs:justify-center xs:items-center py-8 border-2 rounded rounded-2xl mb-8">
                    <ul>
                        {listOneElements}
                    </ul>
                    <ul>
                        {listTwoElements}
                    </ul>
                </div>
                <p className="max-w-screen-md mx-auto text-center text-lg pb-8 leading-9">If you have any issues with your equipment, please fill out the form below so that we can help us serve you better. We'll follow up with you within 24 hours.</p>
                <form className="max-w-screen-sm mx-auto pb-16">
                    <div className="flex 2xs:flex-col xs:flex-row">
                        <div className="xs:w-1/2">
                            <p className="font-bold pb-2">How can we help?</p>
                            <Checkbox label={'Service on Existing equipment'} id={'existing-equipment'} name={'service-type'} />
                            <Checkbox label={'Other'} id={'other'} name={'service-type'} />
                        </div>
                        <div className="xs:w-1/2">
                            <p className="font-bold pb-2">Building / Plumbing type:</p>
                            <Checkbox label={'Residential'} name={'plumbing-type'} id={'residential'}/>
                            <Checkbox label={'Commercial'} name={'plumbing-type'} id={'commercial'}/>
                        </div>
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row">
                        <div className="xs:w-1/2">
                            <p className="font-bold pb-2">Water Source:</p>
                            <Checkbox label={'City Water'} name={'water-source'} id={'city-water'}/>
                            <Checkbox label={'Private Well'} name={'water-source'} id={'well-water'}/>
                        </div>
                        <div className="xs:w-1/2">
                            <p className="font-bold pb-2">Which best describes you?</p>
                            <RadioButton label={'I am a current customer'} name={'customer'} id={'existing'}/>
                            <RadioButton label={'I am new to Crystal Clear Water Centres'} name={'customer'} id={'new'}/>
                        </div>
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row gap-4 pb-2">
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'First name'}
                            id={'first-name'}
                            name={'first-name'}/>
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'Last name'}
                            id={'last-name'}
                            name={'last-name'}
                            />
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row gap-4 pb-2">
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'Email'}
                            id={'email'}
                            name={'email'}
                            />
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            type='tel'
                            label={'Phone number'}
                            id={'tel'}
                            name={'tel'}
                            />
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row gap-4 pb-2">
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'Address'}
                            id={'address'}
                            name={'address'}
                            />
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'Unit / Suite'}
                            id={'unit-suite'}
                            name={'unit-suite'}
                            />
                    </div>
                    <div className=" flex 2xs:flex-col xs:flex-row gap-4 pb-2">
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'City'}
                            id={'city'}
                            name={'city'}
                            />
                        <TextField 
                            containerStyles={'xs:w-1/2'}
                            label={'Postal Code'}
                            id={'postal-code'}
                            name={'postal-code'}
                            />
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row gap-4 pb-2">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="province" className="pb-2 font-bold">Province</label>
                            <select id="province" name="province" className="border-2">
                                <option value=""></option>
                                {provinceOptionElements}
                            </select>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="date" className="pb-2 font-bold">Service Date</label>
                            <input className="border-2" type={'date'} name='date'></input>
                        </div>
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row gap-4 pb-2">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="time" className="pb-2 font-bold">Service Time</label>
                            <select id="time" name="time" className="border-2">
                                <option value=""></option>
                                <option value="A">Option A</option>
                                <option value="B">Option B</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex 2xs:flex-col xs:flex-row gap-4">
                        <div className="flex flex-col w-full">
                            <label className="font-bold pb-2">Please describe the service you need:</label>
                            <textarea className="border-2 py-20 resize-y"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}