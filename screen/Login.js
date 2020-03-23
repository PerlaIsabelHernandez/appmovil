import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Item, Icon, Button, Input} from 'native-base';
import { StyleSheet, Alert } from 'react-native';
import * as Font from 'expo-font';
import api from '../data/api';

class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username : '',
      pass : ''
      }
    }
    
    login = async () => {
      let validarLog = await api.validarLog(this.state.username, this.state.pass)

      if(validarLog.status == 1){
        this.props.navigation.navigate('Principal');
      }
      else{
        Alert.alert('Usuario o clave inválidos');
      }

    }
    render(){
      const navegar = this.props.navigation;

    return (

    <Container>
      <Content padder contentContainerStyle ={misEstilos.content}>
        <Card>
            <CardItem header border>
              <Text style ={misEstilos.textCenter}>Inicio de sesion</Text>
            </CardItem>
            <CardItem border>
            <Body style = {misEstilos.body}>
            
            <Item inlineLabel>
              <Icon type = 'FontAwesome' name= 'user'></Icon>
              <Input placeholder = 'Nombre de usuario' onChangeText = {(username) => this.setState({username})}/>
            </Item>

            <Item inlineLabel last>
              <Icon type = 'FontAwesome' name= 'lock'></Icon>
              <Input placeholder = 'Contraseña' onChangeText = {(pass) => this.setState({pass})}/>
            </Item>

          </Body>
        </CardItem>


        <CardItem footer bordered>
          <Button primary style = {misEstilos.boton} onPress={() => {this.login}}><Text>Iniciar</Text></Button>

          <Button primary style = {misEstilos.boton} onPress={() => {this.props.navigation.navigate('Registro', {titulo: 'Registro de usuario', nombre: 'Isabel'});}}>
              <Text>Registrar</Text></Button>
          
          
          

        </CardItem>
        
     </Card>
    </Content>
  </Container>
        
  );

    }
};


const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },

  TextCenter:{
      textAlign: 'center',
      width: '50%'
  },

  boton: {
    marginLeft: '15%',
  },

  body:{
    paddingVertical: 30,
  }

});



export default Login;
