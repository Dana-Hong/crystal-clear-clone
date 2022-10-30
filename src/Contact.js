export default function Contact(props) {
    return (
        <section>
            <div className="max-w-screen-lg mx-auto">
                <div>
                    <div className="flex flex-col border-2">
                        <p className="font-bold">{`Waterloo (Head Office)`}</p>
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="location-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                            <div>
                                <p>35 University Ave. E</p>
                                <p>Waterloo, ON</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="phone-number-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                            <p>519-886-3339</p>
                        </div>
                    </div>
                    <div className="border-2">
                        <p className="font-bold">Store hours</p>
                        <p>mon-fri</p>
                        <p>sat:</p>
                        <p>After hours water vending:</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col border-2">
                        <p className="font-bold">Kitchener</p>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="location-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>
                            <p>35 University Ave. E</p>
                            <p>Waterloo, ON</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-label="phone-number-icon" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <p>Store hours</p>
                        <p>mon-fri</p>
                        <p>sat:</p>
                        <p>After hours water vending:</p>
                    </div>
                </div>
            </div>
        </section>
    )
}