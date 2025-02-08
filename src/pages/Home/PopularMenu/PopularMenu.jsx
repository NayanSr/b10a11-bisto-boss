import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularMenuCard from "../../Shared/PopularMenuCard/PopularMenuCard";

const PopularMenu = () => {
    const [menu,setMenu]= useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems= data.filter(i=>i.category == 'popular');
            setMenu(popularItems);
            console.log(popularItems);
        })
    },[])

    return (
        <div>
            <section className='w-2/4 mx-auto mb-4 text-center'>
                <SectionTitle heading={"populat menu"} subHeading={'Check it out'}/>
            </section>
            <section className="px-4">
                <div className="grid md:grid-cols-2 gap-4">

                {
                    menu.map(item=><PopularMenuCard key={item._id} menu={item} />)
                }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;