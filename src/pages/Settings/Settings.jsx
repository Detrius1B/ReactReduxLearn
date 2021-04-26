import React from "react";

import './style.css'
import {PageAnimated} from "../../components";

export const Settings = () => {
    return (
        <PageAnimated>
            <div className="settings">
                <h1>Settings</h1>
                <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                </div>
                <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                </div>
                <div className="row">
                    <div className="block block-left"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                    <div className="block block-right"></div>
                </div>
            </div>
        </PageAnimated>
    )
}