import ActionButton from "@/components/ActionButton";

export default function LandingHero() {
    return (
        <section className={"px-4 py-12 md:py-24 bg-gray-50"}>
            <div className={"container mx-auto lg:grid grid-cols-2 gap-32 xl:gap-64 items-center"}>
                <div>
                    <h1 className={"text-5xl font-bold mb-8"}>Shorten your links with unparalleled ease</h1>
                    <p className={"mb-8"}>This website is almost completely fake and only made for demonstration purposess, but the URL shortener actually does work.</p>

                    <ActionButton text={"Get started"}/>
                </div>
                
                <div className={"mt-20 lg:mt-0"}>
                    <img src="/hero_banner.svg" alt=""/>
                </div>
            </div>
        </section>
    )
}