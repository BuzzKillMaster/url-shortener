import React from "react";
import {BsSpeedometer} from "react-icons/bs";
import {AiOutlineFundProjectionScreen} from "react-icons/ai";
import {GiPencilBrush} from "react-icons/gi";
import {motion} from "framer-motion";
import StatisticsContainer from "@/components/StatisticsContainer";

export default function StatisticsSection() {
    return (
        <motion.section layout className={"px-4 py-20 bg-gray-200"}>
            <div className={"container mx-auto"}>
                <h2 className={"text-center text-4xl font-bold mb-8"}>Advanced Statistics</h2>
                <p className={"xl:w-1/2 mx-auto text-center"}>Sorry to anyone actually reading this, but it is still pretty fake and you cannot actually do any of these things using this service. You can only shorten links.</p>

                <div className={"relative mt-24"}>
                    <div className={"block h-full w-2 lg:w-full lg:h-2 bg-emerald-500 absolute top-0 left-1/2 lg:left-0 lg:top-1/2 -translate-x-1/2 -translate-x-0 lg:-translate-y-1/2 z-0"}></div>
                    <div className={"grid lg:grid-cols-3 gap-8 z-10 relative"}>
                        <div>
                            <StatisticsContainer title={"Brand Recognition"} content={"Boost your brand recognition with each click. Generics links don't mean a thing. Branded links help instil confidence in your content."} icon={<AiOutlineFundProjectionScreen/>}/>
                        </div>
                        <div className={"mt-10"}>
                            <StatisticsContainer title={"Detailed Records"} content={"Gain insights into who is clicking your links. Knowing when and where people engage with your cotnent helps inform better decisions."} icon={<BsSpeedometer/>}/>
                        </div>
                        <div className={"mt-10 lg:mt-20"}>
                            <StatisticsContainer title={"Fully Customizable"} content={"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} icon={<GiPencilBrush/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}