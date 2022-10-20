import { Link } from "react-router-dom";

export default function HomeSection(props) {
    
    return (
        <section className='bg-yellow-50 flex justify-center min-h-[90vh]'>
            <div className='flex flex-col max-w-screen-2xl text-center'>
                <p className='2xs:text-2xl sm:text-4xl lg:text-5xl text-[#02549F] py-6'>{props.title}</p>
                <p className='2xs:text-md sm:text-xl lg:text-2xl text-[#002649] py-6 max-w-1/2 px-4'>{props.body}</p>
                <p className='block font-bold text-md uppercase bg-blue-200 w-36 py-2 my-8 mx-auto rounded-xl cursor-pointer order-last'>
                    <Link to={props.path}>
                        Learn More
                    </Link>
                </p>
                <div className='max-w-screen-2xl min-w-screen-lg h-[700px] flex gap-10 justify-center items-center'>
                    <img
                        className='block max-w-[580px] h-5/6 2xs:w-5/6 w-1/2 mx-8 object-cover rounded-lg shadow-2xl shadow-slate-500'
                        src={props.imgs[0]}
                        alt=''/>
                    <img 
                        className='max-w-[580px] h-5/6 2xs:w-5/6 w-1/2 mx-8 object-cover rounded-lg shadow-2xl shadow-slate-500 2xs:hidden lg:block'
                        src={props.imgs[1]}
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
}