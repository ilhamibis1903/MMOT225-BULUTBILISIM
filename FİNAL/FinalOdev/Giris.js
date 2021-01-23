import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import * as firebase from 'firebase';
import { Container,Header,Input,Item,Button,Label,Form } from 'native-base';






const firebaseConfig = {
    apiKey: "AIzaSyAZ8rlbtd-_qtfFN3AdM5t7iwF2AIYmS7U",
    authDomain: "finalproje-e17e7.firebaseapp.com",
    projectId: "finalproje-e17e7",
    storageBucket: "finalproje-e17e7.appspot.com",
    messagingSenderId: "574085874586",
    appId: "1:574085874586:web:ad5ec07a0be03c3f10f023"
};
firebase.initializeApp(firebaseConfig);



export default class App extends Component {
    

    constructor(props){
        super(props)
        this.state=({
            email:'',
            password:''
        })
     }


 
     signUpUser=(email,password)=>{
        try {
           
            if(this.state.password.length<8)
            {
                alert("Lütfen 8 karakterden az girmeyiniz.")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email,password)

        } 
        catch (error) {
            console.log(error.toString())
        }

     }
     loginUser=(email,password)=>{

        try {
            firebase.auth().signInWithEmailAndPassword(email,password).then(function (user) {
                console.log(user)
            })
        } catch (error) {
           console.log(error.toString()) 
        }

     }


  render() {
 

    return (

       <Container styles={styles.Container}>
           <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize="none" 
                    onChangeText={(email) => this.setState({email})}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none" 
                    onChangeText={(password)=>this.setState({password})}
                    />
                </Item>
                <Button style={{marginTop:10}}  
                full
                rounded
                success
                onPress={()=>this.loginUser(this.state.email,this.state.password)}
                
                >
                    <Text>Login</Text>
                </Button>

                <Button style={{marginTop:10}}  
                full
                rounded
                primary
                onPress={()=>this.signUpUser(this.state.email,this.state.password)}
                >
                    <Text style={{color:'red'}}>Sign Up</Text>
                </Button>
            </Form>
        </Container>

    );
  }
};


const styles = StyleSheet.create({
  Container:{
      flex:1,
      backgroundColor:'#fff',
      justifyContent:'center'
  }
});