import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Landing from './pages/Landing';
import Groups from './pages/Groups';
import Profile from './pages/Profile';
import Loading from './components/Loading';
import Admin from './pages/Admin';
import Signup from './pages/Signup'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'
import SingleGroup from './pages/SingleGroup'

// Apollo Client Start
const httpLink = createHttpLink({
  uri: '/graphql',
});

// retrieve token from localStorage and set the HTTP request headers of every request to include the token
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// every request retrieves the token and sets the request headers before making the request to the API
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// Apollo Client End

function App() {


  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='phone-container'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/loading' element={<Loading />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/group/:groupName" element={<SingleGroup />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route
                path="*"
                element={<NoMatch />}
              />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
