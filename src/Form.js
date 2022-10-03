import formCategories from "./data";

export default function FormElement(props) {

    console.log(Object.entries(formCategories));

    const formElements = Object.entries(formCategories).map(category => {
        // const categoryName = category[0].replace('_', ' ');
        return (
            <div className="form__checkbox_section">
                <p className="form__section__name">{category[0]}</p>
                {category[1].map((option, index) => {
                    return (
                        <div key={index} className='checkbox-component'>
                            <input type='checkbox' id={option} name={option} className='checkbox'></input>
                            <label htmlFor={option} className='form__option_label'>{option}</label>
                        </div>
                    )
                })}
            </div>
        )
    });
    
    return (
        <form action='#' method='post' className="form">
            <div className="form__section">
                {formElements}
            </div>
            <div className="form__section customer-info">
                <div className="customer__info_option">
                    <label className='form__option_label' htmlFor='firstName'>First name:</label>
                    <input className='text-option' id='firstName' name='firstName' type='text'></input>
                </div>
                <div className="customer__info_option">
                    <label className='form__option_label' htmlFor='lastName'>Last name:</label>
                    <input className='text-option' id='lastName' name='lastName' type='text'></input>
                </div>
                <div className="customer__info_option">
                    <label className='form__option_label' htmlFor="postalCode">Postal Code:</label>
                    <input className='text-option' id='postalCode' name='postalCode' type='text'></input>
                </div>
                <div className="customer__info_option">
                    <label className='form__option_label' htmlFor='email'>E-mail:</label>
                    <input className='text-option' id='email' name='email' type='email'></input>
                </div>
                <div className="customer__info_option">
                    <label className='form__option_label' htmlFor='phone'>Phone:</label>
                    <input className='text-option' id='phone' name='phone' type='tel'></input>
                </div>
            </div>
            <button className='form-submit-btn' type='submit'>Get pricing now</button>
        </form>
    )
}