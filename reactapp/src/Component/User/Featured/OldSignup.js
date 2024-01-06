import React, { useState } from 'react';



const OldSignup =()=>{

    
let [User ,SetUser] = useState({Name :"", Age :"", Fee :"",})
  return (
    <div className="container my-5 mt-40"style={{minHeight:"700px"}}>

       <h5>Form</h5>
       <p>The bear is a wild animal. It can be
found in olack. brown and unite colour
It has sharp teeth and a lot of fur on its
body. It can climb trees and eat fruits
like berries. It loves to eat fish and
honey. Bears can stand on their two
front legs like human beings.</p>
<h3>{User.Name}{User.Age}{User.Fee}</h3>

Name<input type="text"onChange={(e)=>SetUser({...User, Name: e.target.value})}/>
<br/>
<br/>
Age<input type="text"onChange={(e)=>SetUser({...User, Age: e.target.value})}/>
<br/>
<br/>
Fee<input type="text"onChange={(e)=>SetUser({...User, Fee: e.target.value})}/>
</div>        
  )
}

export default OldSignup