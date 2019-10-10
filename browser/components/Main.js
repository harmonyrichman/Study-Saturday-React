import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            students:[]
        }
        this.getStudents = this.getStudents.bind(this)
    }
 
    //fetch data in
    componentDidMount(){
        this.getStudents()
    }

    async getStudents(){
        try {
            const studentsResponse = await axios.get('/student')
     
            const students = studentsResponse.data
            this.setState({ students })

        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div>
                <h2>Students</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(student => {
                            <tr key={student.id}>
                                <td>{student.fullName}</td>
                                </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

