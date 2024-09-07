"use client";

import React, {useState, useEffect} from "react";
import Site12 from "@/app/pages/main-site";
import {BrowserWrapper, Computer, Desk, Screen} from "@/app/pages/entry-point/index.styles";
import NavBar from "@/app/components/shared/navbar";

const EntryPoint: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const [isolatedRender, setIsolatedRender] = useState(false);

    useEffect(() => {
        // Wait until the component is mounted to show anything
        setIsMounted(true);

        const timer = setTimeout(() => {
            setIsLoading(false);

            setTimeout(() => {
                setFullScreen(true);

                // let the animation finish before isolated render
                setTimeout(() => {
                    setIsolatedRender(true)
                }, 1000)
            }, 1000);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

    if (fullScreen && isolatedRender) {
        return <Site12/>;
    }

    return (
        <Desk $zoomed={!isLoading} $fullScreen={fullScreen}>
            <Computer $zoomed={!isLoading}>
                <Screen $fullScreen={fullScreen}>
                    {!fullScreen && isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <BrowserWrapper>
                            <Site12/>
                        </BrowserWrapper>
                    )}
                </Screen>
            </Computer>
        </Desk>
    );
};

export default EntryPoint;
