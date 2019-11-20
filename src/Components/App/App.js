import React, { Component } from 'react';
import Router from '../Router'
import './App.css'
//import Login from '../Login/Login.js'


//GraphQL

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    //uri: 'http://35.245.16.64:5000/graphql',
    uri: 'http://35.228.197.39/graphql',
    onError: ({networkError, graphQLErrors}) =>{
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});



class App extends Component 
{
    render()
    { 
        return ( 
            <ApolloProvider client={client}>
                <div className="app-con">
                    <Router/>
                </div>
            </ApolloProvider>
        );
    }
};export default App;