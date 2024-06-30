import FoodItem from "./FoodItem";

export default function FoodList(props) {
    const { foods } = props;

    return (
        <div>
            {foods.map((food) => <FoodItem key={food.id} food={food} />)}
        </div>
    );
}