import { useState } from 'react';
import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Question from "../components/Question"
import Loading from "../components/Loading"

export default function Landing() {
    // if Loading display this:
    const [isLoading, setIsLoading] = useState(true);
    if (true) {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000);
    };
    
    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Navigation />
            <Header />
            <Question />
        </>
    )
}