const FoodCard = ({item}) => {
    const {price,image,recipe,name}= item;

  return (
    <div className="card bg-base-100 w-96 shadow-xl p-4 bg-orange-900">
      <figure>
        <img
          className="rounded-lg"
          src={image}
          alt={name}
        />
        
      </figure>
      <p className="absolute right-8 top-8 px-4 py-2 rounded-xl bg-opacity-70 text-yellow-300 text-lg bg-slate-700">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
