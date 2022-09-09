import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Answers from "../components/Answers"

export default function Group() {
    return (
        <>
            <Navigation />
            <Header />
            <Answers />
            <div style={{ width: '100%', textAlign: 'center' }}>Group page</div>
        </>
    )
}