import React, { Component } from "../../../node_modules/react"
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from '../../../node_modules/react-bootstrap';
import Form from '../../../node_modules/react-bootstrap/Form';
// import Panel from './panel';
// import axios from 'axios';
import CreateFormInputs from "../CreateFormInputs"

// const queryString = require('query-string');

// require("./node_modules/dotenv").config();

class CreateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoggedIn: false,
            catData: [],
           formCreated: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.fileChanged = this.fileChanged.bind(this);
        this.name = React.createRef();
    }



    fileChanged(event) {
        console.log(event)
        var f = event.target.files;
        console.log(f)
        this.setState({
            file: f
        }, function () { console.log(this.state) });
        // console.log("state",this.state.file)

        // this.handleImage()
    }

    handleSubmit(event) {
        event.preventDefault()
        let name = this.name.current.value
      



        const postItem = () => {
            console.log("posting to DB")
            // POST TO DB
            fetch('/createform', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
            
                    name: name,
                    date: new Date()
                })
            }).then(response => {
                console.log("hey i did it")
                console.log(response)
                if (response.status == '200') {
                    this.setState({
                        formCreated:true
                    })
                }
            })

        }
        postItem()

    }


    render() {
        const { formCreated } = this.state;
        if (!formCreated) {
            return (
                <div className="m-5">
                    <h1>New Form</h1>
                    <form>
                               
                               <input ref={this.name} placeholder="name" id="name"></input>
                         

                             <button className="send-email-btn" onClick={this.handleSubmit} type="submit">Add</button>
                             
                           </form>
                </div>

            );
        } if (formCreated) {
            return (
                <div>
                    <p className="text-center">Form has been added!</p>
                    <CreateFormInputs></CreateFormInputs>
                    {/* <Panel itemPosted="true"></Panel> */}
                    {/* <Link to="/admin"><Button style={{ backgroundColor: '#dd6717', margin: '0px auto;' }} variant='dark'>Inventory List</Button></Link> */}
                </div>
            )
        }
    }
    // if (isLoggedIn) {
    //     return (
    //         <AdminPanel></AdminPanel>

    //     );
    // }
}


export default CreateForm;
