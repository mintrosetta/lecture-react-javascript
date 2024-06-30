import style from './foodItem.module.css';

export default function FoodItem({ food })  {
    return (
        <div className={style['item-container']}>
            <img className={style['item-image']} src={food.image} alt="" />
            <div className={style['item-content']}>
                <p className={style['item-title']}>{food.title}</p>
            </div>
            <div className={style['item-btn-container']}>
                <button className={style['item-btn']}>View Receipt</button>
            </div>
        </div>
    );
}