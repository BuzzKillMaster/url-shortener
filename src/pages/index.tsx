import React from "react";
import {LayoutGroup, useCycle} from "framer-motion";
import PageHeader from "@/components/PageHeader";
import LandingHero from "@/components/LandingHero";
import ShorteningSection from "@/components/ShorteningSection";
import StatisticsSection from "@/components/StatisticsSection";
import CallToAction from "@/components/CallToAction";
import PageFooter from "@/components/PageFooter";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
    const [open, cycleOpen] = useCycle(false, true)

    return (
        <div className={"bg-gray-50 min-h-screen"}>
            <PageHeader mobileMenuCallback={cycleOpen}/>

            <main className={"bg-gray-200"}>
                <LandingHero/>

                <LayoutGroup>
                    <ShorteningSection/>
                    <StatisticsSection/>
                    <CallToAction/>
                    <PageFooter/>
                </LayoutGroup>
            </main>


            <aside className={"fixed top-0 right-0 z-50"}>
                <MobileMenu closeMobileMenu={cycleOpen} isOpen={open}/>
            </aside>
        </div>
    )
}
