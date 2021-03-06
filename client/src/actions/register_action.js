import axios from 'axios';
const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3002'

const headers = {
    'Accept': 'application/json'
};

export function register(username , password , fname , lname , dob , gender ){
	console.log(username , password , fname , lname , dob , gender )

		return function(dispatch){
			fetch('http://localhost:3002/register', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({
	   	    			password : password , 
					  	username : username,
					  	fname : fname ,
					  	lname : lname ,
					  	dob : dob ,
					  	gender : gender
	   	    })

	  		}).then(function (response) {
			        console.log("Response from server " , response);
			      response.json().then(res => {
			      	console.log("res " , res );
			      	if(res.success === false && res.error === 'User already present'){
			      		dispatch({type : 'USERNAME_ALREADY_TAKEN' , payload : res})
			      	}else if(res.success === true){
			      		dispatch({type : 'REGISTER_SUCCESS' , payload : res})
			      	}
			      	
				})
																		        
	   		})
	        .catch(error => {
	            console.log("This is error");
	            
	        })
		}


		
	

}



export function setBackRegisteredSuccess(){
	return({
		type : 'SET_BACK_REGISTER',
		payload : {user : '' , registerSuccessful : false}
	})
}



export function login(username , password ){
	
		return function(dispatch){
			fetch('http://localhost:3002/login', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include',
	   	    body: JSON.stringify({username: username, password: password})

	  		}).then(function (response) {
			        console.log("Response from server " , response);
			      response.json().then(res => {
			      	dispatch({ type : 'USER_LOGGED_IN' , payload : res})
				})
																		        
	   		})
	        .catch(error => {
	            console.log("This is error");
	            
	        })
		}
	
}


export function checkIfAlreadyLoggedIn( ){
	
		return function(dispatch){
			fetch('http://localhost:3002/checkIfAlreadyLoggedIn', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include'
	  		}).then(response => {
			        
			        response.json().then(res => {
			        	console.log(res);
			      		dispatch({ type : 'USER_ALREADY_LOGGED_IN' , payload : res})
					})
	   		})
	        .catch(error => {
	            console.log("This is error");
	            
	        })
		}
}





export function logout( ){
	
		return function(dispatch){
			fetch('http://localhost:3002/logout', {
	        method: 'POST',
	        headers: {
	            ...headers,
	            'Content-Type': 'application/json'
	        },
	        credentials:'include'
	  		}).then(response => {
			        
			        response.json().then(res => {
			        	console.log(res);
			      		dispatch({ type : 'USER_LOGGED_OUT' , payload : res})
					})
	   		})
	        .catch(error => {
	            console.log("This is error");
	            
	        })
		}
	
		
	

}