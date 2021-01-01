import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            duk: null
       
        }
        this.state = {
          
            dailymenu: null
        }
    }


    


    componentDidMount() {

        fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=16697205"
            , {
                method: 'GET',
                headers: {
                    "user-key": "8c82da674f880bbb1df73a5fe2740800"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ duk: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });

            fetch("https://developers.zomato.com/api/v2.1/dailymenu?res_id=16697205"
            , {
                method: 'GET',
                headers: {
                    "user-key": "8c82da674f880bbb1df73a5fe2740800"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ dailymenu: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });
    }

    render() {

        

        if (!this.state.duk) {
            return null;
        }
        if (!this.state.dailymenu) {
            return null;
        }
        return (
            <View>
            <Text>Restaurant : {this.state.duk.name}</Text>
            
            <Text>Adres : {this.state.duk.location.address}</Text>
            <Text>Öne çıkanlar : {this.state.duk.highlights}</Text>
            <Text>Çalışma saatleri : {this.state.duk.timings}</Text>
           
            <Text>Pahalılık derecesi : {this.state.duk.price_range}</Text>

            <Text>Para birimi : {this.state.duk.currency}</Text>
              
            <Text>Günlük menü : {this.state.dailymenu.message}</Text>

            </View>
        );
    }
}