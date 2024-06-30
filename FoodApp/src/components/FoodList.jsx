export default function FoodList(props) {
    const { foods } = props;

    return (
        <div>
            {foods.map((food) => <p key={food.id}>{food.title}</p>)}
        </div>
    );
}