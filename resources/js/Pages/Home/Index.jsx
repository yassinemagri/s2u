import React from "react";
import Layout from "@/Components/layout/Layout";
import Instructions from "./Instructions";
import VideoTuto from "./VideoTuto";
import FAQSection from "./FAQSection";
import SubscribersList from "./SubscribersList";

const Index = () => {
    return (
        <>
            <div className="font-Pixel text-white  container mx-auto px-20 py-12 capitalize">
                <div className="grid lg:grid-cols-2 gap-12 items-start space-x-20">
                    {/* Left Column */}
                    <Instructions />
                    {/* Right Column */}
                    <VideoTuto />
                </div>
            </div>
            <FAQSection />
            <SubscribersList />
        </>
    );
};
Index.layout = (page) => <Layout children={page} />;

export default Index;
