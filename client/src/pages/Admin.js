import Navigation from "../components/Navigation"
import Header from "../components/Header"

export default function Admin() {
    return (
        <>
            <Navigation />
            <Header />
            <div style={{ width: '100vw', textAlign: 'center' }}>Admin page</div>
        </>
    )
}