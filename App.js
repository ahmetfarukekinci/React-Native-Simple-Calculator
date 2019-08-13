import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions , TextInput, TouchableOpacity } from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstNumber:'',
      secondNumber:'',
      result: 'RESULT',
    }
  };
  plus = () =>{ 
    let number1 = parseFloat(this.state.firstNumber);
    let number2 = parseFloat(this.state.secondNumber);
    let result = number1 + number2; 
    this.setState({result})
  };
  minus = () =>{ 
    let number1 = parseFloat(this.state.firstNumber);
    let number2 = parseFloat(this.state.secondNumber);
    let result = number1 - number2; 
    this.setState({result})
  };
  divide = () =>{ 
    let number1 = parseFloat(this.state.firstNumber);
    let number2 = parseFloat(this.state.secondNumber);
    let result = number1 / number2; 
    this.setState({result})
  };
  multiply = () =>{ 
    let number1 = parseFloat(this.state.firstNumber);
    let number2 = parseFloat(this.state.secondNumber);
    let result = number1 * number2; 
    this.setState({result})
  };
  
  render() {
    const {firstNumber,secondNumber,result}=this.state;
    return (
      <View style={styles.container}> 
      <View style={styles.resultContainer}> 
      <Text style={{color:'green', fontSize:21, paddingLeft:10}}>{result}</Text>
      </View>
      <View style={styles.firstInput}> 
      <TextInput 
      onChangeText={(firstNumber)=> this.setState({firstNumber})}
      value={firstNumber}
      style={{color:'green', fontSize:21, paddingLeft:10}}
      placeholder='First Number'
      placeholderTextColor='green'
      keyboardAppearance='dark'
      keyboardType='numeric'
      /> 
      </View>
      <View style={styles.secondInput}> 
      <TextInput 
      onChangeText={(secondNumber)=>this.setState({secondNumber})}
      value={secondNumber}
      style={{color:'green', fontSize:21, paddingLeft:10,}}
      placeholder='Second Number'
      placeholderTextColor='green'
      keyboardAppearance='dark'
      keyboardType='numeric'
      /> 
      </View>

      <View> 

        <View style={styles.buttonWrapper}>
       <TouchableOpacity onPress={()=> this.plus()}>
       <View style={styles.plusButton}>  
       <Text style={styles.buttonText}> + </Text>
       </View>
       </TouchableOpacity> 
       <TouchableOpacity onPress={()=> this.minus()}>
       <View style={styles.minusButton}>  
       <Text style={styles.buttonText}> - </Text>
       </View>
       </TouchableOpacity>
      </View>
        <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={()=> this.divide()}>
       <View style={styles.divideButton}>  
       <Text style={styles.buttonText}> / </Text>
       </View>
       </TouchableOpacity>
       <TouchableOpacity onPress={()=> this.multiply()}>
       <View style={styles.multiplyButton}>  
       <Text style={styles.buttonText}> * </Text>
       </View>
       </TouchableOpacity>
      </View>

      </View>
      </View>
    )
  }
}
const {height, width}=Dimensions.get('window'); 
const styles = StyleSheet.create({
  container:{
    flex:1, 
    height:height,
    width:width,
  },
  resultContainer:{
    height:height*0.1,
    width:width,
    backgroundColor:'black',
    justifyContent:'center',

  },
  firstInput:{
    height:height*0.1,
    width:width,
    backgroundColor:'black',
    justifyContent:'center',
    marginTop:10
  },
  secondInput:{
    height:height*0.1,
    width:width,
    backgroundColor:'black',
    justifyContent:'center',
    marginTop:10,
    marginBottom:height*0.02
  },
  buttonWrapper:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:width,
    height:height*0.25,
    
  },
  plusButton:{
    width:width/2,
    height:height*0.25,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center'
  },
  minusButton:{
    width:width/2,
    height:height*0.25,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
  divideButton:{
    width:width/2,
    height:height*0.25,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'center'
  },
  multiplyButton:{
    width:width/2,
    height:height*0.25,
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:50,
    color:'white'
    
  }
}); 