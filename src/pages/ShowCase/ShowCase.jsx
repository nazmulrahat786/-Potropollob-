import { FaQuoteLeft } from "react-icons/fa";

const ShowCase = () => {
    return (
        <div className="space-y-6 lg:space-y-0 my-16">
            <h2 className="text-4xl font-bold text-center mb-8 md:mb-12">Pottery Lovers Thought</h2>
            <div className='w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="border py-6 shadow-xl">
                    <img className="w-[150px] h-[150px] mx-auto object-cover rounded-full" src="https://i.ibb.co/z5TbD2X/08-unsplash.jpg" alt="" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-center mb-4">Mirja Galib</h3>
                        
                        <p className="text-[#757575] flex gap-4"><span className="text-black"><FaQuoteLeft /></span> Not long after the first crude clay vessels were made, people learned how to make them stronger, harder, and less permeable to fluids by burning. These advances were followed by structural clay products, including brick and tile.</p>
                    </div>
                </div>
                <div className="border py-6 shadow-xl">
                    <img className="w-[150px] h-[150px] mx-auto object-cover rounded-full" src="https://i.ibb.co/SRJqspk/01-unsplash.jpg" alt="" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-center mb-4">Shamsul Arefin</h3>
                        
                        <p className="text-[#757575] flex gap-4"><span className="text-black"><FaQuoteLeft /></span> The Greeks and Romans developed lime-mortar cements, and the Romans in particular used the material to construct remarkable civil engineering works, some of which remain standing to this day.</p>
                    </div>
                </div>
                <div className="border py-6 shadow-xl">
                    <img className="w-[150px] h-[150px] mx-auto object-cover rounded-full" src="https://i.ibb.co/F5JkK24/03-unsplash.jpg" alt="" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-center mb-4">Tareq Mahmud</h3>
                        
                        <p className="text-[#757575] flex gap-4"><span className="text-black"><FaQuoteLeft /></span>  This behaviour allows for such diverse processing methods as slip casting and plastic forming, which are described below. Clay minerals are therefore considered to be formers, allowing the mixed ingredients to be formed into the desired shape.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;