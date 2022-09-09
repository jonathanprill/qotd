import { Link } from "react-router-dom"

export default function Header() {
    return (

        <div style={{ width: '100%', textAlign: 'center', margin: '0 0 0 0 ' }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'black', textDecoration: 'none', fontFamily: 'Libre Baskerville', fontSize: '28px' }}>
                    Question of the Day
                </h1>
            </Link>
        </div>

    )
}