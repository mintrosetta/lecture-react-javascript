export default function Fruit(props) {
    const { name, price, count } = props;
    return (
        <>
            {/* <li>{name} {price}</li> */}
            {/* we don't need to show price less than 5, return empty string */}
            <li>
                {name} {price} - { count == 0 ? "soldout" : "" }
            </li>
        </>
    );
}
