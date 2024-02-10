'use clinet'
import styles from "./CardProducts.module.css";
import Link from 'next/link';
import { NEXT_PUBLIC_BASE_API_URL} from '../config';


const CardProducts = (props) => {
    const { img, route } = props;

    return (
        <div>
            <Link href={`${NEXT_PUBLIC_BASE_WEB_PATH}/markets/dessertRecipe/${route}`} >
                    <img src={img} alt="" className={styles.card} />
            </Link>
        </div>
    );
};

export default CardProducts;
