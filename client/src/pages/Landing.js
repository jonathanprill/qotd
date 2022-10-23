import { useState } from 'react';
import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Question from "../components/Question"
import Logo from "../components/Logo"

export default function Landing() {
    // if Loading display this:
    const [isLoading, setIsLoading] = useState(true);
    if (true) {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
    };

    if (isLoading) {
        return <Logo />;
    }

    return (
        <>
            <Navigation />
            <Header />
            <Question />
        </>
    )
}