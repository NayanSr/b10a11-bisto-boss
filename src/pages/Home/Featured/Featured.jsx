import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="image-background my-8 py-12 bg-fixed">
      <div className="w-2/4 mx-auto mb-4 text-center">
      <SectionTitle
        
        heading={"Feature Menu"}
        subHeading={"Check it now"}
      />
      </div>
      <div className="flex gap-4 w-3/4 mx-auto">
        <img className="w-1/4 rounded-lg" src={featuredImage} alt="" />
        <div className="text-white bg-gray-950 opacity-50 p-4 rounded-xl">
          <h6>March 20, 2023</h6>
          <h4>WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="px-6 block mt-4 text-blue-300 font-semibold text-xl mx-auto border-b-4 border-yellow-700 rounded-xl">RED MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
