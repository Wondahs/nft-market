import Image from "next/image";
import TripleCard from "./TrippleCard";
import GetStarted from '@/assets/Get Started Box.png';
import TripleMidCard from "./TripleCardMid";


const TripleSection = () => {
    return ( 
        <section className="triple-section mt-20 w-[75%] mx-auto flex flex-row flex-1 gap-3 justify-center items-start p-4">
            <div className="midcard w-[40%]">

            <TripleMidCard />
            </div>
            <div className="tripcard">

            <TripleCard />
            </div>
            {/* <Image className="w-[25%]" width={448} alt="Getstarted" src={GetStarted} /> */}
        </section>
     );
}
 
export default TripleSection;