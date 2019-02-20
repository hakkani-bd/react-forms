import React, { Component } from 'react';
import Tables from './tables/Tables';
import PostForms from './forms/PostForms';
import EditPostForms from './forms/EditPostForms';

class App extends Component {

  state ={
    datas :[
      {id : 1, name: 'Refat Hasan', email:'refathasan5124@gmail.com', password:'12345', bio:'Dummy bio', country: 'Bangladesh', gender : 'Male', skills : [ 'React Js', ]},
      {id : 2, name: 'React Native', email:'reactnative@gmail.com', password:'react1234', bio:'React Native is Awesome', country: 'Bangladesh', gender : 'Male', skills : ['React Js', ]},
      {id : 3, name: 'React Javascript', email:'reactjs@gmail.com', password:'js12345', bio:'Rect JavaScript is a library', country: 'Bangladesh', gender : 'Male', skills : ['React Js', ]},
    ],
    isEditable : false
  }

  deleteHandler = dataIndex =>{
    const datas = [...this.state.datas];
    datas.splice(dataIndex, 1);
    this.setState({
      datas : datas
    })
  }

  submitHandler = data =>{
    this.setState({
      datas : [...this.state.datas, data]
    })
  }

  editDataHandler = data =>{
    //const datas = [...this.state.datas]
    this.setState({
      isEditable : true,
      id : data.id,
      name : data.name,
      email : data.email,
      password : data.password,
      bio : data.bio,
      country : data.country,
      gender : data.gender,
      skills : data.skills
    });
  }

  updateDataHandler = () =>{
    
  }


  render() {
    return (
      <div className="App">
        <h2 className='title text-center my-3'>React Forms Validations</h2>
        <div className="container-fluid">
          <div className="row">

            <div className="col-sm-4">
            {
              this.state.isEditable ?
              <EditPostForms submitHandler={ this.submitHandler.bind(this) } data={this.editDataHandler}/>
              :
              <PostForms submitHandler={ this.submitHandler.bind(this) }/>
            }
            </div>
            
            <div className="col-sm">
              <Tables  
                datas={this.state.datas} 
                deleteHandler={this.deleteHandler.bind(this)}
                editDataHandler = {this.editDataHandler} 
              />
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
