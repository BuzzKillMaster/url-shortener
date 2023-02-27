import React from "react";
import {HiMenu} from "react-icons/hi";
import ActionButton from "@/components/ActionButton";
import NavigationLink from "@/components/NavigationLink";

export default function PageHeader(props: {
    mobileMenuCallback: () => void
}) {
    return (
        <header className={"px-4 py-8"}>
            <div className={"container mx-auto flex justify-between items-center"}>
                <div className={"flex items-center"}>
                    <p className={"text-3xl font-bold mr-12"}>Shortly</p>

                    <ul className={"hidden md:flex items-center"}>
                        <NavigationLink text={"Features"}/>
                        <NavigationLink text={"Pricing"}/>
                        <NavigationLink text={"Resources"}/>
                    </ul>
                </div>

                <div className={"hidden md:flex items-center"}>
                    <NavigationLink text={"Login"}/>
                    <ActionButton text={"Sign up"}/>
                </div>

                <div onClick={props.mobileMenuCallback} className={"md:hidden text-3xl cursor-pointer"}>
                    <HiMenu/>
                </div>
            </div>
        </header>
    );
}