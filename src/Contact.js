import PageTitle from "./PageTitle";

export default function Contact(props) {
    return (
        <section className="bg-yellow-50 flex-grow shadow-[inset_0_2px_20px_0_rgba(0,0,0,.3)] px-6 py-12">
            <PageTitle text={'Contact'} styles={'text-center pb-20'} />
            <div className="max-w-screen-lg mx-auto">
                <div className="md:flex">
                    <div className="flex md:flex-col min-w-[33%]">
                        <div className="md:flex md:flex-col flex-grow">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="font-bold pl-2 text-lg">{`Waterloo (Head Office)`}</p>
                                    <svg className="order-first" xmlns="http://www.w3.org/2000/svg" aria-label="location-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                                </div>
                                <div>
                                    <div>
                                        <p>35 University Ave. E</p>
                                        <p>Waterloo, ON</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="phone-number-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                                    <p aria-label="waterloo office phone number">519-886-3339</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="flex items-center">
                                    <p className="font-bold pl-2 text-lg">Store hours</p>
                                    <svg className="order-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"/></svg>

                                </div>
                                <p><span className="font-bold">Monday to Friday:</span>{` 10:00 AM - 5:00 PM`}</p>
                                <p><span className="font-bold">Saturday:</span>{` 10:00 AM - 3:00 PM`}</p>
                                <p><span className="font-bold">After hours water vending:</span>{` 6:00 AM - 1:00 PM`}</p>
                            </div>
                        </div>    
                        <div className="md:flex md:flex-col flex-grow">
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="font-bold pl-2 text-lg">Kitchener</p>
                                    <svg className="order-first" xmlns="http://www.w3.org/2000/svg" aria-label="location-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                                </div>
                                <div>
                                    <p>35 University Ave. E</p>
                                    <p>Waterloo, ON</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="phone-number-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                                    <p aria-label='kitchener location phone number'>519-745-2795</p>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="flex items-center">
                                    <p className="font-bold pl-2 text-lg">Store hours</p>
                                    <svg className="order-first" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z"/></svg>
                                </div>
                                <p><span className="font-bold">Monday to Wednesday:</span>{` 10:00 AM - 5:00 PM`}</p>
                                <p><span className="font-bold">Thursday to Friday:</span>{` 10:00 AM - 6:00 PM`}</p>
                                <p><span className="font-bold">Saturday:</span>{` 10:00 AM - 3:00 PM`}</p>
                                <p><span className="font-bold">After hours water vending:</span>{` 6:00 AM - 1:00 PM`}</p>
                            </div>
                        </div>
                    </div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d23161.80237323175!2d-80.54293339308974!3d43.476768420596564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCrystal%20Clear%20Water%20Centres!5e0!3m2!1sen!2sca!4v1667254838630!5m2!1sen!2sca" 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Waterloo location google maps'
                        className="2xs:w-full 2xs:h-[300px] md:h-[600px] xl:flex-grow"
                        >
                    </iframe>
                </div>
            </div>
        </section>
    )
}