//main component fetches a list of all students from the server. should render a table of students with one column - student name

import React from 'react';
//only going to use ReactDom.render() ONCE
//it is your main wrapper that wraps everything together
import axios from 'axios';
//talks to routes which talks to database and sends response from database via routes 


//if it doesn't have  a state it's a 'dumb' function and doesn't require this model, still need to import react regardless
//if you get something from database (state) it updates the view
export default class Main extends React.Component {
    constructor(){
      super()
      this.state={
       students: []
       //set an empty array (king's law for default type)
       //state holds everything I get from the database
       //get data using axios calls
      }
    }
    



    //axios call is componentDidMount()
    async componentDidMount(){
        console.log("INSIDE COMP MOUNT")
        //put the full route, include api because it's a route
        const res = await axios.get('/student')
        console.log('res', res)
        //response object - only want the data
        const students = res.data
        this.setState({students: students})
        console.log('this.setState', this.state)
        //setting property of students (this.state) to the res.data (students)
        
    }

    render () {
      return (
        //div wraps everything
        <div>
          <ul>
              {this.state.students.map(student =>{
                  return (<li>{student.fullName}</li>)
              })}
          </ul>
        </div>
      )
    }
  }


  