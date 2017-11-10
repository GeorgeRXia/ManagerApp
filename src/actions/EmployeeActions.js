import { EMPLOYEE_UPDATE} from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const employeeUpdate = ({prop,value})=>{
  return{
    type: EMPLOYEE_UPDATE,
    payload: {prop,value}
  }
}

export const employeeCreate = ({name, phone, shift}) =>{
  return (dispatch) =>{
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift}).then(()=> Actions.employeeList({type: 'reset'}))
  }

}
