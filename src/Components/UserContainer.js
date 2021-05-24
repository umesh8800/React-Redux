import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../redux/user/UserAction';


function UserContainer({userData,fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    },[])
    return (
        userData.loading ?(
            <h1>Loading</h1>
        ) :userData.error ?(
            <h1>{userData.error}</h1>
        ) :(
            <div>
                <h2>user list</h2>
                <div>
                    {
                        userData.users.map(user=><p> {user.address.city}</p>)
                    }
                </div>
            </div>
        )
    )
    
}

const mapStateToProps=state=>{
    return{
        userData:state.user
    }
}

const mapStateToDispatch=dispatch=>{
    return{
        fetchUsers:()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapStateToDispatch) (UserContainer);
