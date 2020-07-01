import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {

    // Esse método é chamado assim que o componente é iniciado

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products')
        console.log(response.data.docs);
    };
    

    render() {
        return <h1>Hello Rocketseat</h1>
    }

}