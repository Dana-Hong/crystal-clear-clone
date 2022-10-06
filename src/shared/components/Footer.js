import { Link } from 'react-router-dom';
import award1 from '../imgs/award-01.png';
import award2 from '../imgs/award-02.png';
import award3 from '../imgs/award-03.png';

import '../styles/Footer.css';

export default function Footer(props) {
    const awardPaths = [award1, award2, award3];
    const awardElements = awardPaths.map((awardpath, index) => <img key={index} className='footer__img' src={awardpath} alt='award'></img>)

    return (
        <footer>
            <div className='footer__imgs'>
                {awardElements}
            </div>
            <Link>
                Privacy Policy
            </Link>
        </footer>
    )
}