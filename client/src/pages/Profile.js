import Navigation from "../components/Navigation"
import Header from "../components/Header"
import MyGroupList from "../components/MyGroupList"
import Answers from "../components/Answers";
import { Navigate, useParams } from 'react-router-dom';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

export default function Profile() {

    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });
    const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/profile" />;
    }
    // if Loading display this:
    if (loading) {
        return <div>Loading...</div>;
    }
    // What happens if you navigate to /profile and you aren't logged in?
    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this page.
            </h4>
        );
    }

    return (
        <>
            <Navigation />
            <Header />
            <div style={{ width: '100%', textAlign: 'center' }}>Profile page</div>
            <h2>Viewing {userParam ? `${user.username}'s` : 'your'} profile.</h2>
            <MyGroupList
                groups={user.groups}
                username={user.username}
            />
            <Answers 
                answers={user.answers}
            />
        </>
    )
}