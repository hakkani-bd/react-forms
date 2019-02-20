import React, { Component } from 'react';

const initialState = { 
    id:'', 
    name:'', 
    email:'', 
    password:'',  
    bio:'',
    country : '',
    gender : '',
    skills : []
}

class PostForms extends Component {

    constructor(props){
        super(props);
        this.myForm = React.createRef();
    }

    state = initialState;

    inputChangeHandler = event =>{
        if(event.target.type === 'checkbox'){
            if(event.target.checked){
                this.setState({
                    ...this.state,
                    skills : this.state.skills.concat(event.target.value)
                })
            }
        } else {
            const { name, value } = event.target;
            this.setState({
                [name] : value            
            })    
        }
    }

    onSubmitHandler = event =>{
        event.preventDefault();
        this.props.submitHandler(this.state)
        this.myForm.current.reset();
        this.setState({
            ...initialState
        })
    }

    render() {
        return (
        <div>
            <form ref={this.myForm} onSubmit={ this.onSubmitHandler }>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='name' 
                        value={this.state.name} 
                        id="name" 
                        placeholder="Enter your name"
                        onChange={this.inputChangeHandler} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User E-Mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name='email' 
                        value={this.state.email} 
                        id="email" 
                        placeholder="Enter your email"
                        onChange={this.inputChangeHandler} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">User Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='password' 
                        value={this.state.password} 
                        id="password" 
                        placeholder="Enter your password"
                        onChange={this.inputChangeHandler} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="textarea">Enter your Short Bio</label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        name='bio' 
                        value={this.state.bio} 
                        id="bio" 
                        placeholder="Enter your bio"
                        onChange={this.inputChangeHandler} 
                        rows='3'
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Select Country</label>
                    <select className="form-control" name='country' id='country' onChange={this.inputChangeHandler}>
                        <option>Select your Country</option>
                        <option value='Bangladesh'>Bangladesh</option>
                        <option value='India'>India</option>
                        <option value='Nepal'>Nepal</option>
                        <option value='Japan'>Japan</option>
                        <option value='America'>United State</option>
                    </select>
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="gender1" 
                            value="Male"
                            onChange={this.inputChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="gender1">Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="gender2" 
                            value="Female"
                            onChange={this.inputChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="gender2">Female</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            id="gender3" 
                            value="Other" 
                            onChange={this.inputChangeHandler} 
                        />
                        <label className="form-check-label" htmlFor="gender3">Others</label>
                    </div>

                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="skills" 
                            id="skills1" 
                            value="Java Script"
                            onChange={this.inputChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="skills1">JavaScript</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="skills" 
                            id="skills2" 
                            value="Node JS"
                            onChange={this.inputChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="skills2">Node JS</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="skills" 
                            id="skills3" 
                            value="React JS"
                            onChange={this.inputChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="skills3">React JS</label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="skills" 
                            id="skills4" 
                            value="React Native"
                            onChange={this.inputChangeHandler}
                        />
                        <label className="form-check-label" htmlFor="skills4">React Native</label>
                    </div>
                </div>

                <button className='btn btn-info'> Submit </button>

            </form>
        </div>
        );
    }
}

export default PostForms;