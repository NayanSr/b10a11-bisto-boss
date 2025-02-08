
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
            <p className="my-2 text-orange-500">--- {subHeading} ---</p>
            <h2 className="border-y-2 border-gray-500 py-2 text-3xl uppercase text-gray-900 font-semibold">{heading}</h2>
        </div>
    );
};

export default SectionTitle;