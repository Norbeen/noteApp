import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Memories = () => {



    return (
    <Card>
       <CardContainer>

        <Link to="/Memories/img1"> 
            <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
         </Link>   
            <div class="container">
            <h4><b>Yosemite  valley national park</b></h4>
            </div>
       </CardContainer>


       <CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>



<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>

<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>




<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>



<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>


<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>




<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>



<CardContainer>

<Link to="/Memories/img1"> 
    <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="Avatar" />
 </Link>   
    <div class="container">
    <h4><b>Yosemite  valley national park</b></h4>
    </div>
</CardContainer>


    </Card>

    )
}

const Card = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
min-height:90vh;



`

const CardContainer = styled.div`
 
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height:380px;
  width:400px;
  margin:20px;
  padding-bottom:20px;
  background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);



.container {
  padding: 2px 20px;
  text-align:center;


}

img{
  object-fit:cover;
  height:90%;
  width:100%;
}

`

export default Memories;
