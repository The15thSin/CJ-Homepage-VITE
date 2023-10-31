import React from 'react'
import './DownApp.css'
import Features from './Features/Features'
import json from '../../imagepaths.json'

export default function DownApp() {

    window.scrollTo(0,0);
    const featuresArr = json.DownApp.features;
    return (
        <div className="DownApp">
            <div className="da-title">
                <h1>
                    Download App
                </h1>
            </div>

            <div className="da-banner">
                <div className="phone-da-title">
                    <h3>The</h3>
                    <h3>Coding Junction</h3>
                    <h3>App</h3>
                </div>
                <h3>
                    The Coding Junction App
                </h3>
                <img src={new URL(json.DownApp.mockup.url, import.meta.url).href} alt="" />
                <p>Welcome to The Coding Junction community.</p>
                <p>We welcome you all onboard...</p>
                <p> &nbsp; </p>
                <p>To participate in the ongoing and the upcoming events download our Coding Junction app!!!</p>
            </div>

            <div className="da-features">
                <h3>Features</h3>
                <div className='da-features-list'>
                    {
                        featuresArr.map(featuresArr => (
                            <Features key={featuresArr.key} title={featuresArr.title} url={featuresArr.url} alt={featuresArr.name}/>
                        ))
                    }
                </div>
            </div>

            <div className="da-download">
                <a href="https://dl.dropboxusercontent.com/s/0zeznf2a5rvrs7x/release_coding_junction_VC_6.apk?dl=1">
                <button>
                    Download
                </button>
                </a>
            </div>
        </div>
    )
}
