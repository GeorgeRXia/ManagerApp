import { EMPLOYEE_UPDATE} from '../actions/types';

const INTIAL_STATE = {name:'', phone:'', shift:''};
export default (state=INTIAL_STATE, action) => {
  switch(action.type){
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
}
