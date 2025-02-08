
const PopularMenuCard = ({menu}) => {
    const {price,image,recipe,name}= menu;
    return (
        <div className="flex gap-3">
           <img className="w-[120px] h-[105px] rounded-r-full rounded-bl-full" src={image} alt="" />
           <section className="flex gap-2">
            <section>
            <h3 className="text-2xl">{name}</h3>
            <p className="text-gray-400">{recipe}</p>
            </section>

            <p className="text-orange-300">${price}</p>

           </section>
        </div>
    );
};

export default PopularMenuCard;