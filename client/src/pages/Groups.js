import Navigation from "../components/Navigation"
import Header from "../components/Header"
import Answers from "../components/Answers"
import MyGroupList from "../components/MyGroupList"
import GroupList from "../components/GroupList"

import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_GROUPS } from '../utils/queries';

export default function Groups() {

    const { loading, data } = useQuery(QUERY_ME);
    const { data: allGroupData } = useQuery(QUERY_GROUPS);

    const user = data?.me || {};
    const groupData = allGroupData || [];

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <>
            <Navigation />
            <Header />
            <Answers />
            <div style={{ width: '100%', textAlign: 'center', fontSize: '30px' }}>Group page</div>
            <MyGroupList
                groups={user.groups}
                username={user.username}
            />
            <GroupList
                allgroups={groupData.groups}
            />
        </>
    )
}