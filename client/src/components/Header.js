import { Link } from "react-router-dom"

export default function Header() {
    return (

        <div style={{ width: '100%', textAlign: 'center', margin: '0 0 0 0 ' }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1>
                    Question of the Day
                </h1>
            </Link>
        </div>

    )
}