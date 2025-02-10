import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularMenuCard from "../../Shared/PopularMenuCard/PopularMenuCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu]= useMenu();
    const popularMenu= menu.filter(item=>item.category=='popular');
   
    return (
        <div className="my-16">
            <section className="w-2/4 mx-auto my-4 text-center" >
                <SectionTitle heading={"populat menu"} subHeading={'Check it out'}/>
            </section>
            <section className="px-4 ">
                <div className="grid md:grid-cols-2 gap-4">

                {
                    popularMenu.map(item=><PopularMenuCard key={item._id} menu={item} />)
                }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;




/* 
{
        "_id": "642c155b2c4774f05c36eead",
        "name": "Roast Duck Breast",
        "recipe": "Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce",
        "image": "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-4-370x247.jpg",
        "category": "soup",
        "price": 14.5
    }
*/