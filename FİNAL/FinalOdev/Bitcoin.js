import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ImageBackground } from 'react-native';

export default class Coin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.coinpaprika.com/v1/coins/btc-bitcoin')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.tags });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (

        
       
      <View style={{ flex: 1, padding: 24 , backgroundColor:"orange"}}>
          
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
         
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{backgroundColor: "orange"}}>{"\n"}Name:{item.name} {"\n"}Coin Counter:{item.coin_counter}{"\n"}Ico Counter:{item.ico_counter}
              </Text>
             
            )}
          />
        )}
      </View>
  
    );
  }
};