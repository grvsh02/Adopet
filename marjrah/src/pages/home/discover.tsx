import blogs from "../../assets/blogs.jpg"
import pet from "../../assets/catndog.jpg"


const cards = [
    {
        id: 1,
        image: blogs,
        title: "Blogs",
    },
    {
        id: 2,
        image: pet,
        title: "Find a Pet",
    },
    {
        id: 3,
        // image: hamster,
        title: "About us",
    },
];

const DiscoverCard = ({ card }: any) => {
    return (
        <div className="relative rounded-xl overflow-hidden cursor-pointer h-2/3 -mt-14 scale-auto hover:scale-105 transition-transform">
            <img src={card.image} alt="discover_image" />
            <div className="absolute bottom-10 capitalize left-10 text-white font-bold md:text-[50px] text-[40px]">
                {card.title}
            </div>
        </div>
    );
};

const Discover = () => {
    return (
        <section className="mt-14">
            <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">
                <div>
                    <h1 className={`md:text-[40px] text-[30px] font-bold uppercase`}>Discover</h1>
                    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
                        {cards.map((card:any) => (
                            <DiscoverCard card={card} key={card.id} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discover;