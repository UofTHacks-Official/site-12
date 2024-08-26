"use client";

import React, {useState, useEffect} from "react";
import Site12 from "@/app/pages/main-site";
import {BrowserWrapper, Computer, Desk, Screen} from "@/app/pages/entry-point/index.styles";

const EntryPoint: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [fullScreen, setFullScreen] = useState(false); // Track if Site12 should be fullscreen

    useEffect(() => {
        // Wait until the component is mounted to show anything
        setIsMounted(true);

        const timer = setTimeout(() => {
            setIsLoading(false);

            setTimeout(() => {
                setFullScreen(true);
            }, 1000);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null; // Prevent any content from rendering on the server or before hydration
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
