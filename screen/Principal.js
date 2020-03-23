import React, { Component } from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


class Principal extends Component{
    constructor(props){
        super(props);
        this.state = {isLoading: true}
    }

    async ComponentDidMount(){                        //es una clase de constructor que permite cargar antes de que la aplicacion cargue
        try{ 
            const response =
                await fetch('https://reactnative.dev/movies.json')
            const responseJson = await response.json();

            this.setState({
                isLoading: false,
                dataSource: responseJson.movies,
               }, function(){

               });
            }

            catch(error){
                console.log(error);
            }

    }  // fin del componentDidMount 
    

    render(){
        if(this.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return(
            <View>
                <FlatList data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={({id}, index ) => id}
                />
            </View>
        );
    }

    

}//fin de la clase

//cuando genera una promesa se tiene que mandar un exito y en caso de encontrarse un error se mandara por medio del cath

// TAREA!!!!!!!!!


//swapi.co