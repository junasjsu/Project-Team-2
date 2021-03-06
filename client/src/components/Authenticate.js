import React, { Component } from 'react';
import { connect } from 'react-redux' ; 
import {register , setBackRegisteredSuccess , login , checkIfAlreadyLoggedIn} from '../actions/register_action'
import Modal from 'react-modal'

export default function(InnerComponent){
	


   class Authenticate extends Component{

   	constructor(props){
		super(props);
		this.state = {
			modalIsOpen: false,
			 username : '' , 
		      password : '' ,
		      fname : '' ,
		      lname : '',
		      dob : '' ,
		      gender : '',
		      error : '',
		      modalIsOpenLogin : false ,
		      usernameLogin : '' , 
      		  passwordLogin : '' ,
		}
	}

	onChangeUsernameLogin(e){
    
    this.setState({
      usernameLogin : e.target.value
    })
  }
 
 	 onChangePasswordLogin(e){
    this.setState({
      passwordLogin : e.target.value
    })
  }

	 onChangeUsername(e){
    
	    this.setState({
	      username : e.target.value
	    })
	  }
	 
	  onChangePassword(e){
	    this.setState({
	      password : e.target.value
	    })
	  }
	 
	  onChangeFname(e){
	    this.setState({
	      fname : e.target.value
	    })
	  }
	 
	  onChangeLname(e){
	    this.setState({
	      lname : e.target.value
	    })
	  }
	 
	  onChangeDOB(e){
	    this.setState({
	      dob : e.target.value
	    })
	  }
	 
	  onChangeGender(e){
	  
	    this.setState({
	      gender : e.target.value
	    })
	  }

	  handleSubmit(e) {
      	e.preventDefault()
   	  }

	
   render(){

   		const customStyles = {
	      content : {
	        top                   : '50%',
	        left                  : '50%',
	        right                 : '50%',
	        bottom                : 'auto',
	        marginRight           : '-50%',
	        transform             : 'translate(-50%, -50%)'
	      }
	    };
		return(
			<div>
				 <div >
		            <nav className="navbar navbar-inverse ">
		              <div className="container-fluid">
			                <div className="navbar-header">
			                  
			                	{
			                		this.props.isAuthenticated === true ? 
			                		 <a className="navbar-brand" href="#">Logout</a>
			                  	
			                		:
			                		 <div>
			                		 <a className="navbar-brand" onClick={() => {
	                      				this.setState({modalIsOpenLogin: true});
	                      				}} >Sign in</a>
			                  	   	 <a className="navbar-brand" onClick={() => {
			                  	   	 	this.setState({
			                  	   	 		modalIsOpen : true
			                  	   	 	})
			                  	   	 }}>Register</a>
			                  	   	 </div>
			                	}
			                 
			                </div>
			                <ul className="nav navbar-nav">
			                  <li className="active"><a href="/">Home</a></li>
			                  <li><a href="#">Daily Deals</a></li>
			                  <li><a href="#">Gift Cards</a></li>
			                  <li><a href="#">Help & Contact</a></li>
			                </ul>

			               <ul className="nav navbar-nav navbar-right">
			                <li><a href="#">Sell</a></li>
			                <li><a href="#">My eBay</a></li>
			              </ul>
		              </div>
		            </nav>
		        </div>
		         <div>
		        	<InnerComponent {...this.props}></InnerComponent>
		        </div>

	            <Modal
                        isOpen={this.state.modalIsOpen}
                        style= {customStyles}
                        onRequestClose={this.closeModal}
                        shouldCloseOnOverlayClick={false}
                        contentLabel="Profile">





                        <div className="panel panel-primary " id="registrationdiv">
					        
					       
					       <div className="panel-body">
					       
					        
					        
					        <div>
					        
					          <div className="row padd">
					            <div className='form-group'>
					            <div className='col-lg-2 col-md-2 col-sm-2'></div>
					              <div className='col-lg-3 col-md-3 col-sm-3' >
					                <label htmlFor='username' className="label label-primary" >Username :</label>
					              </div>
					              <div className='col-lg-6 col-md-6 col-sm-6'>
					                <input type="text" name='username'    id='username'   className="form-control" onChange={this.onChangeUsername.bind(this)} placeholder="Username..." aria-describedby="basic-addon1" required />
					              </div>
					              <div className='col-lg-1 col-md-1 col-sm-1'> </div>
					            </div>
					          </div>
					          
					          <div className="row padd">
					            <div className='form-group'>
					              <div className='col-lg-2 col-md-2 col-sm-2'></div>
					              <div className='col-lg-3 col-md-3 col-sm-3'>
					                <label htmlFor='password' className="label label-primary" >Password :</label>
					              </div>
					              <div className='col-lg-6 col-md-6 col-sm-6'>
					                <input type="password"   name='password' id='pwd' onChange={this.onChangePassword.bind(this)}  className="form-control"  placeholder="Password ..." aria-describedby="basic-addon1" required />
					              </div>
					              <div className='col-lg-1 '></div>
					            </div>
					          </div>
					          
					          
					          
					          
					          <div className="row padd">
					          <div className='form-group'>
					            <div className='col-lg-2 col-md-2 col-sm-2'></div>
					            <div className='col-lg-3 col-md-3 col-sm-3' >
					              <label htmlFor='fname' className="label label-primary" >First Name :</label>
					            </div>
					            <div className='col-lg-6 col-md-6 col-sm-6'>
					              <input type="text" name='fname'  id='fname' onChange={this.onChangeFname.bind(this)}  className="form-control"  placeholder="First Name..." aria-describedby="basic-addon1"  required />
					            </div>
					            <div className='col-lg-1'></div>
					          </div>
					          </div>
					          
					          <div className="row padd">
					          <div className='form-group'>
					          <div className='col-lg-2 col-md-2 col-sm-2'></div>
					            <div className='col-lg-3 col-md-3 col-sm-3' >
					              <label htmlFor='lname' className="label label-primary" >Last Name :</label>
					            </div>
					            <div className='col-lg-6 col-md-6 col-sm-6'>
					              <input type="text" name='lname' id='lname'  onChange={this.onChangeLname.bind(this)} className="form-control"  placeholder="Last Name..." aria-describedby="basic-addon1"  required />
					            </div>
					            <div className='col-lg-1'></div>
					          </div>
					          </div>
					          
					          <div className="row padd">
					          <div className='form-group'>
					          <div className='col-lg-2 col-md-2 col-sm-2'></div>
					            <div className='col-lg-3 col-md-3 col-sm-3'>
					              <label htmlFor='lname' className="label label-primary" >DOB :</label>
					            </div>
					            <div className='col-lg-6 col-md-6 col-sm-6'>
					              <input type="date" onChange={this.onChangeDOB.bind(this)}  name='dob' id='fname'   className="form-control"  aria-describedby="basic-addon1"  required/>
					            </div>
					            <div className='col-lg-1'></div>
					          </div>
					          </div>
					          
					          <div className="row padd">
					          <div className='form-group'>
					          <div className='col-lg-2 col-md-2 col-sm-2'></div>
					            <div className='col-lg-3 col-md-3 col-sm-3'>
					              <label htmlFor='lname' className="label label-primary" >GENDER :</label>
					            </div>
					            <div className='col-lg-7 col-md-7 col-sm-7'>
					              <div className="radio-group" >
					                      <div className="radio">

					                        <label ><input type="radio" name="optradio" required value='Male' onChange={this.onChangeGender.bind(this)}/>Male </label>
					                        <label><input type="radio" name="optradio" required value='Female'onChange={this.onChangeGender.bind(this)}/>Female </label>
					                        <label><input type="radio" name="optradio" required value='Other' onChange={this.onChangeGender.bind(this)}/>Other </label>
					                      </div >
					              </div>
					            </div>
					           
					          </div>
					          </div>
					          
					          
					          <div className="row padd">
					          <div className='form-group'>
					          <div className='col-lg-2 col-md-2 col-sm-2'></div>
					            <div className='col-lg-3 col-md-3 col-sm-3'>
					            </div>
					            <div className='col-lg-2 col-md-2 col-sm-2'>
					              <button className='btn btn-info' onClick={() => {
					                      
					                      var username_regex = /^[a-z0-9]{5,20}$/i ; 
					                      var name_regex = /^[a-z]{5,20}$/i ;
					                      var lname_regex = /^[a-z]{5,20}$/i ;
					                      var password_regex = /^[a-z0-9]{5,20}$/i ; 

					                      console.log(this.state.username,
					                                this.state.password,
					                                this.state.fname,
					                                this.state.lname,
					                                this.state.dob,
					                                this.state.gender)


					                      if(!username_regex.test(this.state.username)){
					                        this.setState({
					                          error : 'Username should be alpha-numeric and 5-20 characters'
					                        })
					                        return ;
					                      }
					                      if(!password_regex.test(this.state.password)){
					                        this.setState({
					                          error : 'Password should be alpha-numeric and 5-20 characters'
					                        })
					                        return ;
					                      }
					                      if(!name_regex.test(this.state.fname)){
					                        this.setState({
					                          error : 'First Name should contain only letters and 5-20 characters only'
					                        })
					                        return ;
					                      }
					                      if(!lname_regex.test(this.state.lname)){
					                        this.setState({
					                          error : 'Last Name should contain only letters and 5-20 characters only'
					                        })
					                        return ;
					                      }
					                      if(this.state.dob === ''){
					                        this.setState({
					                          error : 'Select Date of Birth'
					                        })
					                        return ;
					                      }
					                      if(this.state.gender === ''){
					                        this.setState({
					                          error : 'Select Gender'
					                        })
					                        return ;
					                      }

					                      
					                      this.props.register(this.state.username,
					                                this.state.password,
					                                this.state.fname,
					                                this.state.lname,
					                                this.state.dob,
					                                this.state.gender)


					                    }}>Submit</button>
					            </div>
					            <div className='col-lg-5 col-md-5 col-sm-5'>
					            	<button onClick={() => {
                      				this.setState({modalIsOpen: false});
                      				}} className="btn btn-danger">Close</button>
					            </div>
					          </div>
					          </div>
					          
					        
					        
					        </div>
					        
					        
					        
					      
					      </div>
					      


					      <div className="row padd">
					        <div className='form-group'>
					        <div className='col-lg-3 col-md-3 col-sm-3'></div>
					          
					          <div className='col-lg-7 col-md-7 col-sm-7' id="usernameExistDiv">
					            <span className="text-red"> <b>{this.state.error}</b>  </span>
					          </div>
					          <div className='col-lg-2 col-md-2 col-sm-2'></div>
					        </div>
					      </div>

					      </div>
                        
						 <div >
                      			
                      	</div>
                        
                </Modal>


                <Modal
                        isOpen={this.state.modalIsOpenLogin}
                        style= {customStyles}
                        onRequestClose={this.closeModal}
                        shouldCloseOnOverlayClick={false}
                        contentLabel="Profile">


                         <div >
		                     
		                     <div className="panel panel-primary " id='panelMargin'>
			                      
			                      <div className="panel-body">


					                      <div>

					                        <div className='col-sm-12 col-lg-12 col-md-12 form-group'>
						                          <div className='col-lg-2 col-sm-12 col-md-2  ' ></div>
						                          <div className='col-lg-2  col-md-2  col-sm-12 ' >
						                            <label htmlFor='username' className="label label-primary" >Username :</label>
						                          </div>
						                          <div className='col-sm-12 col-md-7  col-lg-7 '>
						                            <input type="text" onChange={this.onChangeUsername.bind(this)} name='username' id='username'   className="form-control"  placeholder="Username..." aria-describedby="basic-addon1" required />
						                          </div>
						                          <div className='col-lg-1  col-md-1  col-sm-12 '> </div>
					                        </div>
					                        
					                        <div className='col-sm-12 col-lg-12 col-md-12 form-group'>
						                          <div className='col-lg-2 col-sm-12 col-md-2  ' ></div>
						                          <div className='col-lg-2  col-md-2  col-sm-12' >
						                            <label htmlFor='pwd' className="label label-primary" >Password :</label>
						                          </div>
						                          <div className='col-sm-12 col-md-7  col-lg-7  '>
						                            <input type="password"  onChange={this.onChangePassword.bind(this)} name='password' id='pwd'   className="form-control"  placeholder="Password..." aria-describedby="basic-addon1"  required/>
						                          </div>
						                          <div className='col-lg-1  col-md-1  col-sm-12 '> </div>
					                        </div>
					                        
					                        <div className='col-sm-12 col-lg-12 col-md-12 form-group'>
					                          <div className='col-lg-4 col-sm-12 col-md-4 text-right'></div>
					                          <div className='col-sm-12 col-lg-2 col-md-2'>
					                            <button className='btn btn-info' onClick={() => {
					                              this.props.login(this.state.username , this.state.password)
					                            }}> Login</button>
					                          </div>
					                            <div className='col-lg-2 col-md-2 col-sm-12'>
											            	<button onClick={() => {
						                      				this.setState({modalIsOpenLogin: false});
						                      				}} className="btn btn-danger">Close</button>
											    </div>
					                        </div>

					                     </div>

			                      </div>

		                      </div>

		                      

		                     

		                  </div>





                      
                 </Modal>


	       
		</div>
			)
		}
	}

	function mapDispatchToProps(dispatch){
	  return {
	  	checkIfAlreadyLoggedIn : () => dispatch(checkIfAlreadyLoggedIn()),
	  	register : (username , password , fname , lname , dob , gender ) => dispatch(register(username , password , fname , lname , dob , gender ))
	  }
	}

	function mapStateToProps(state) {
	    return {
	    	isAuthenticated : state.AuthReducer.isAuthenticated,
	    };
	}

	return connect(mapStateToProps,mapDispatchToProps)(Authenticate) ; 


}


