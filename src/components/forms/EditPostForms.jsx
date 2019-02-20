import React, { Component } from 'react';

const initialState = { 
    id: 1,
    name:'', 
    email:'', 
    password:'',  
    bio:'',
    country : '',
    gender : '',
    skills : []
}



class EditPostForms extends Component {

    componentWillReceiveProps(){
        this.setState({
        id: 1,
        name:'', 
        email:'', 
        password:'',  
        bio:'',
        country : '',
        gender : '',
        skills : []
        })
    }
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
                });
            }
        } else {
            const { name, value } = event.target;
            this.setState({
                [name] : value            
            });    
        }
    }

    onSubmitHandler = event =>{
        event.preventDefault();
        this.props.submitHandler(this.state);
        this.myForm.current.reset();
        this.setState({
            ...initialState
        });
    }

    render() {
        return (
        <div>
            <form ref={this.myForm} onSubmit={ this.onSubmitHandler }>
                <div className="form-group">
                    <label htmlFor="name">User Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='name' 
                        value={this.props.name} 
                        id="name" 
                        placeholder="Enter your name"
                        onChange={this.inputChangeHandler} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">User E-Mail</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name='email' 
                        value={this.props.email} 
                        id="email" 
                        placeholder="Enter your email"
                        onChange={this.inputChangeHandler} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">User Password</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='password' 
                        value={this.props.password} 
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
                        value={this.props.bio} 
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
                        <option value={this.props.country}>Bangladesh</option>
                        <option value={this.props.country}>India</option>
                        <option value={this.props.country}>Nepal</option>
                        <option value={this.props.country}>Japan</option>
                        <option value={this.props.country}>United State</option>
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

                <button className='btn btn-primary'> Update Data </button>
                <button className='btn btn-danger ml-1'> Cancel </button>

            </form>
        </div>
        );
    }
}

export default EditPostForms;