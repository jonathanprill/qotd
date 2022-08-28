import Navigation from "../components/Navigation"
import Header from "../components/Header"

export default function Dashboard() {
    return (
        <>
            <Navigation />
            <Header />
            <div style={{ width: '100vw', textAlign: 'center' }}>Dashboard page</div>
        </>
    )
}