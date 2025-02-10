import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import PopularMenuCard from "../../Shared/PopularMenuCard/PopularMenuCard";

const MenuCategory = ({ img, heading, subHeading, items }) => {
  return (
    <div className="pb-4">
      {heading && <Cover heading={heading} subHeading={subHeading} img={img} />}

      <section className="grid md:grid-cols-2 px-8 gap-8 mt-4">
        {items.map((i) => (
          <PopularMenuCard key={i._id} menu={i} />
        ))}
      </section>
     {/*  <Link to='/order'>
        <button className="px-6 block mt-12 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link> */}
    </div>
  );
};

export default MenuCategory;
