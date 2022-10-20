import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Question from "../components/Question"

export default function NoMatch() {
    return (
        <>
            <Navigation />
            <Header />
            <div style={{ paddingTop: '50px', width: '100%', textAlign: 'center' }}>Whoops...This Page Doesn't Exist.</div>
        </>
    )
}