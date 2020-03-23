import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon} from 'native-base';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import api from '../data/api';

export default class CardHeaderFooterExample extends Component {

  constructor(props){
    super(props);
    this.state = {
      user: '',
      email: '',
      pass: ''
      }
    }

    register =() => api.registerData(this.state.user, this.state.email, this.state.pass)

  render() {
    const navegar = this.props.navigation;

    return (
      <Container>
        <Header />
        <Content contentContainerStyle = {styles.Content}>
          <Card>
            
            <CardItem header>
              <Text style={styles.TextCwnter}>REGISTRATE CON UNA RED SOCIAL</Text>
              
            </CardItem>
               <CardItem footer>
                <Button secundary style={styles.Boton3}><Icon type='Entypo' name='facebook'/></Button>
                <Button info style={styles.Boton2}><Icon type='AntDesign' name='twitter'/></Button>
             </CardItem>
             <Text style={styles.TextCwnter}>O CREA UNA CUENTA NUEVA</Text>
            <CardItem>
              <Body bordered style={styles.Botono}>         
              
              <Item inlineLabel last>
              <Icon type = 'FontAwesome' name= 'user'></Icon>
              <Input placeholder = 'Nombre de usuario' onChangeText = {(user) => this.setState({user})}/>
              </Item>
                
              <Item last>
                <Icon type = 'MaterialIcons' name= 'email'></Icon>
                <Input placeholder='Correo' onChangeText = {(email) => this.setState({email})} />
              </Item>

              <Item last>
                <Icon type = 'FontAwesome' name= 'lock'></Icon>
                <Input placeholder='Contraseña' onChangeText = {(pass) => this.setState({pass})}/>
              </Item>
              
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button dark style={styles.Boton} onPress={() => navegar.navigate('Login')}><Text> Login </Text></Button>
              <Button dark style={styles.Boton} onPress={this.register}><Text>Guardar</Text></Button>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
  
}

const styles=StyleSheet.create({
  Content:{
    flex: 1,
    justifyContent: 'center',

  },
  TextCwnter:{
    textAlign:'center',
    width:'100%',
  },
  Boton:{
    marginLeft:'20%',
    
  },
  Botono:{
    paddingVertical:'20%',
    
    
  },
  Boton2:{
    marginRight:'30%',
  },
  Boton3:{
    marginLeft:'30%',
  },
});

