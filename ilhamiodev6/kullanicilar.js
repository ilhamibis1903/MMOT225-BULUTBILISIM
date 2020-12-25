import React from 'react';

import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';

export default class KULLANICI extends React.Component{

    componentDidMount = async ()=>{
        let user =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({users:user})
    };





    constructor(props){
        super(props);
        this.state={
            users:[],
            User:0,
        }
    }



    handlePress = id =>{
        this.setState({User:id})
    }

    userListView(){

        if(this.state.User<1){
            return(
                <Text style={{fontSize:15, margin:17}}>İşlem yapmak için numara seçin.</Text>
            ) 
        }
        let renderUserList=[];
        this.state.users.map((v,k)=>{

            if(v.id===this.state.User){
               renderUserList.push(<Text style={{minHeight:75, fontSize:16, paddingLeft:5, marginTop:21}}>
             <Text style={{color:'red', fontSize:16}}>ID:</Text> {v.id} {"\n\n"}
               <Text style={{color:'red', fontSize:16}}>TITLE:</Text> {v.title} {"\n\n"}
               <Text style={{color:'red', fontSize:16}}>BODY:</Text> {v.body} {"\n\n"}</Text>)
            }

        }
        )
        return renderUserList
    }

    render(){
        return(
        <View style={{flex:1}}>

           

           

            <FlatList style = {{marginTop:10,flex:2,minHeight:257,backgroundColor: 'white'}}

                let data = {this.state.users}
                renderItem={({item})=>{

                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{minHeight: 30, backgroundColor: 'white'}}>
                           <Text style={{fontSize:25,color:'black', backgroundColor:'orange',textAlign:'center'}}>{item.id}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                
                />
                <ScrollView style={{flex:3,minHeight:360,marginTop:180,alignContent:'center'}}>
                {this.userListView()}
                </ScrollView>
                
        </View>
            

        )
    }
}