import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Landing from './pages/Landing';
import Group from './pages/Group';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';

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
        <div className='test'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/group' element={<Group />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
