import { useParams } from 'react-router-dom';

import Navigation from "../components/Navigation"
import Header from "../components/Header"
import { useQuery } from '@apollo/client';
import { QUERY_GROUP } from '../utils/queries';

export default function SingleGroup() {

    const { groupName: groupParam } = useParams();

    const { loading, data } = useQuery(QUERY_GROUP, { variables: { groupName: groupParam } });

    if (loading) {
        return <div>Loading...</div>;
    }

    const groups = data?.group || {};

    return (
        <>
            <Navigation />
            <Header />
            <div style={{ width: '100%', textAlign: 'center', fontSize: '25px' }}>{groups.groupName}</div>
            <br />
            <br />
            <h2 style={{ width: '100%', textAlign: 'center' }}>Members</h2>
            {groups.members.map(member => (
                <button className="btn w-100 display-block mb-2" key={member._id}>
                    <p>{member.username}</p>
                    {/* Set a Component here using memners.username to display answer */}
                </button>
            ))}
        </>
    )
}