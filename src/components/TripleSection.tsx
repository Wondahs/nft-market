import TripleCard from "./TrippleCard";
import TripleMidCard from "./TripleCardMid";


const TripleSection = () => {
    return (
        <section className="triple-section mt-20 w-[75%] mx-auto flex flex-row gap-3 justify-center items-stretch p-4">
            <div className="midcard w-[40%]">
                <TripleMidCard />
            </div>
            <div className="tripcard">
                <TripleCard />
            </div>
        </section>
    );
}

export default TripleSection;