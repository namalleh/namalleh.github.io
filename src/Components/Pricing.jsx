import {Link} from "react-router-dom";
import {render} from 'react-dom';
import React from "react";

function CallToAction({action}) {
    switch (action) {
        case "coming_soon":
            return (<>
                <div style={{textShadow: "0.5px 0.5px #5f6197"}}>Coming soon.</div>
            </>);
        default:
            return (<>
                <form action="mailto:nathan@namalleh.com">
                    <button>
                        <div>Contact Us</div>
                    </button>
                </form>
            </>);
    }
}

const pricingConfig/*: Array<{
    level: string,
    pricePerMonth: string,
    features: Array<string>
}>*/ = [{
    "imgSrc": "./ataken_shield.png",
    "product": "Ataken Shield",
    "level": "Starter",
    "pricePerMonth": "1000",
    "features": [
        "Open Source Bot Classification",
        "No-Config Blocking",
        "Dynamic Ad Protect"
    ],
    "highlight": "linear-gradient(to right, #4f46e5, #6d28d9)",
    "action": "",
},
    {
        "imgSrc": "./ataken_shield_advanced.png",
        "product": "Ataken Shield",
        "level": "Advanced",
        "pricePerMonth": "6000",
        "features": [
            "Open Source Bot Classification",
            "Scraping as a Service Classification",
            "Residential IP Classification",
            "Advanced Config",
            "Dynamic Ad Protect"
        ],
        "highlight": "linear-gradient(to right, #0f0f3b, #0f3252)",
        "action": "coming_soon",
    }]

function MakeCard(config) {
    return (<>
        <div className="custom-card highlighted" style={{background: config.highlight}}>
            <div className="custom-icon">
                <img src={config.imgSrc} style={{width: '90px', height: '100px'}}/>
            </div>
            <h2>{config.product} :: {config.level}</h2>

            <p className="price">${config.pricePerMonth} <span> / month</span></p>
            <ul className="features">
                {config.features.map((item => {
                    return (<>
                        <li>{item}</li>
                    </>);
                }))}
            </ul>
            <CallToAction action={config.action}/>
        </div>
    </>)
}

// https://github.com/joshua-mo-143/shuttle-stripe-ex/blob/main/frontend/src/pricing.jsx
export default function Pricing() {
    return (
        <>
            <div style={{padding:"10px"}}>This is a limited time offer. First 10 customers only, and then the price will likely rise significantly.</div>
            <div className="custom-grid">
                {
                    pricingConfig.map(config => MakeCard(config))
                }
            </div>
        </>);
}
