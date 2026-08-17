import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ContentPage from "./pages/ContentPage.jsx";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            offset: 80,
        });

        // Portfolio/experience images load asynchronously and used to lack
        // fixed dimensions, so the page height (and AOS trigger positions,
        // which are calculated from it) changed after the first calculation.
        // That made sections like Skills only reveal once the user scrolled
        // much further than expected. Now that images have fixed
        // width/height, this refresh is a safety net that recalculates
        // AOS positions once everything (including images) has finished
        // loading, and again on window resize.
        const refreshAOS = () => AOS.refresh();
        window.addEventListener("load", refreshAOS);
        window.addEventListener("resize", refreshAOS);

        return () => {
            window.removeEventListener("load", refreshAOS);
            window.removeEventListener("resize", refreshAOS);
        };
    }, []);
    return (
            <>
                <Routes>
                    <Route path="/" element={<ContentPage/>} />
                </Routes>
            </>
    )
}