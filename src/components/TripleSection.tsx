import Image from "next/image";
import TripleCard from "./TrippleCard";
import GetStarted from '@/assets/Get Started Box.png'

const TripleSection = () => {
    return ( 
        <section className="triple-section mt-20 w-[75%] mx-auto flex flex-row gap-3 justify-center items-center p-4">
            <TripleCard />
            {/* <Image className="w-[25%]" width={448} alt="Getstarted" src={GetStarted} /> */}
            <TripleCard />
        </section>
     );
}
 
export default TripleSection;