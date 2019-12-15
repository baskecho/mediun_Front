//Dependencias
import React, { Component } from 'react';

//Componentes 
import Router from '../Router'

//Estilos
import './App.css'

//GraphQL
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';



/*
    Creamos la constante cliente con el algoritmo necesario para enlazar la
    api con la pagina web oprmedio de la direccion de la instancia y el 
    edpoint necesario.
*/
const client = new ApolloClient({
    uri: 'http://35.245.16.64:5000/graphql',
    //uri: 'http://35.228.197.39/graphql',
    onError: ({networkError, graphQLErrors}) =>{
        console.log('graphQLErrors', graphQLErrors);
        console.log('networkError', networkError);
    }
});


/*
    Clase propia del componente que renderiza el componente Router, al mismo tiempo
    este componente es envuelto por el componente Apollo client para crear peticiones 
    Query y mutation en cualquier parte del codigo o componente
*/
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