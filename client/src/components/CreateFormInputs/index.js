import React, { Component } from "../../../node_modules/react"
import { Card, ListGroup, ListGroupItem, Button, Image, CardDeck } from '../../../node_modules/react-bootstrap';
import Form from '../../../node_modules/react-bootstrap/Form';
// import Panel from './panel';
// import axios from 'axios';

// const queryString = require('query-string');

// require("./node_modules/dotenv").config();

class CreateFormInputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoggedIn: false,
            catData: [],
            itemPosted: false,
            file: null,
            rows: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.fileChanged = this.fileChanged.bind(this);
        this.name = React.createRef();
       this.date = React.createRef();
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

    addRow = (e) => {
        e.preventDefault();
        this.setState({
            addRow: true,
            rows: this.state.rows + 1
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let img = this.img.current.value
        let title = this.title.current.value
        let date = this.date.current.value
        let body = this.body.current.value



        const postItem = () => {
            console.log("posting to DB")
            // POST TO DB
            fetch('/api/post', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
            
                    title: title,
                    date: date,
                    body: body
                })
            }).then(response => {
                console.log("hey i did it")
                console.log(response)
                if (response.status == '200') {
                    this.setState({
                        itemPosted: true
                    })
                }
            })

        }
        postItem()

    }


    render() {
        const { itemPosted } = this.state;
const children = [];

        for (var i=0; i <this.state.rows; i += 1) {
            children.push(
                <form>
                <input ref={this.name} placeholder="placeholder" id="name"></input>
                <select ref={this.type} placeholder="placeholder" id="type">
                    <option>text</option>
                    <option>select box</option>
                    <option>text box</option>
                    <option>checkbox</option>
                </select>
                {/* <input ref={this.} placeholder="" id=""></input>
                <input ref={this.} placeholder="" id=""></input>
                <input ref={this.} placeholder="" id=""></input>
                <input ref={this.} placeholder="" id=""></input> */}
                 <button onClick={this.addRow}>+</button>
                 </form>
            )
        }        
        
        if (!itemPosted) {
            return (
                <div className="m-5">
                    <h1>Edit Fields of Form</h1>
                    <form>
                               
                               <input ref={this.name} placeholder="placeholder" id="name"></input>
                               <select ref={this.type} placeholder="placeholder" id="type">
                                   <option>text</option>
                                   <option>select box</option>
                                   <option>text box</option>
                                   <option>checkbox</option>
                               </select>
                               {/* <input ref={this.} placeholder="" id=""></input>
                               <input ref={this.} placeholder="" id=""></input>
                               <input ref={this.} placeholder="" id=""></input>
                               <input ref={this.} placeholder="" id=""></input> */}
                               
                               <button onClick={this.addRow}>+</button>

                               <div>{children}</div>
                                <button className="send-email-btn" onClick={this.addForm} type="submit">Add Form</button>
                           </form>
                </div>

            );
        } if (itemPosted) {
            return (
                <div>
                    <p className="text-center">Item has been posted!</p>
                    {/* <Panel itemPosted="true"></Panel> */}
                    {/* <a href="/admin"><Button style={{ backgroundColor: '#dd6717', margin: '0px auto;' }} variant='dark'>Inventory List</Button></a> */}
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


export default CreateFormInputs;
