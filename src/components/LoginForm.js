import React, {Component} from 'react'
import {Card, CardSection, Input, Button, Spinner} from './common';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {emailChanged, passwordChanged, loginUser, employeeUpdate} from '../actions';

class LoginForm extends Component {
  onEmailChange(text){
    this.props.emailChanged(text)

  }
  onButtonPress(){
    const {email, password} = this.props;

     this.props.loginUser({email, password})

  }
  renderButton(){
    if (this.props.loading){
      return <Spinner size="large" />

    }
    return (
      <Button         onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>)

  }
  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label='email'
            placeholder ='email@mail.com'
            onChangeText={this.onEmailChange.bind(this)}
            value= {this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
          placeholder= "password"
          label= "password"
          onChangeText={(text)=> this.props.passwordChanged(text)}
          value={this.props.password}
          />
        </CardSection>
        <Text style ={styles.errorTextStyle}> {this.props.error} </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )

  }
}
const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'

  }


}
const mapStateToProps = ({auth}) => {
  const {error, password, email, loading} = auth
  return {email: email, password: password, error: error, loading: loading

  }
}
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm)
