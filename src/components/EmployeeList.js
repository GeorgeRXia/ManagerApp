import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {employeeFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount(){
    this.props.employeeFetch();
    this.createDataSource(this.props)


  }
  componentWillReceiveProps(nextProps){
    //nextProps are the next set o props will be rendered with.
console.log(nextProps)
    //this.props is still the old set of props
    this.createDataSource(nextProps)
  }

  createDataSource({employees}) {
    console.log(employees)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(employees)

  }
  renderRow(employee){
    return <ListItem employee={employee} />

  }
  render(){

    return(
      <ListView
        enableEmptySections
        dataSource = {this.dataSource}
        renderRow= {this.renderRow}
      />
    )
  }


}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val,uid) => { return {...val, uid}
});
return{employees}
}

export default connect(mapStateToProps,{employeeFetch})(EmployeeList)
