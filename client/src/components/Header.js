import { Link } from "react-router-dom"

export default function Header() {
    return (

        <div style={{ width: '100%', textAlign: 'center', margin: '30px 0 0 0 ' }}>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <h1 style={{ color: 'black', textDecoration: 'none', fontFamily: 'Newsreader', fontSize: '28px' }}>
                    Question of the Day
                </h1>
            </Link>
        </div>

    )
}