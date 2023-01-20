import PageHeader from "@/components/PageHeader";
import LandingHero from "@/components/LandingHero";
import ShorteningSection from "@/components/ShorteningSection";
import CallToAction from "@/components/CallToAction";
import PageFooter from "@/components/PageFooter";
import React from "react";
import StatisticsSection from "@/components/StatisticsSection";
import MobileMenu from "@/components/MobileMenu";
import {LayoutGroup, useCycle} from "framer-motion";

export default function AppContainer() {
    const [open, cycleOpen] = useCycle(false, true)

    return (
        <div className={"bg-gray-50 min-h-screen"}>
            <PageHeader mobileMenuCallback={cycleOpen}/>
            <LandingHero/>

            <div className={"bg-gray-200"}>
                <LayoutGroup>
                    <ShorteningSection/>
                    <StatisticsSection/>
                    <CallToAction/>
                    <PageFooter/>
                </LayoutGroup>
            </div>


            <div className={"fixed top-0 right-0 z-50"}>
                <MobileMenu closeMobileMenu={cycleOpen} isOpen={open}/>
            </div>
        </div>
    )
}