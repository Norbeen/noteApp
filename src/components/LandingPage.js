import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import horseMain from '../img/horseMain.jpg';
import Home from './Home';
import Memories from './Memories';

import {Link} from 'react-router-dom';
//upload image library
import ImageUploading from "react-images-uploading";


const LandingPage = () => {


    //get the day//month//year
    var dateObj = new Date();
    var month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    var date = ('0' + dateObj.getDate()).slice(-2);
    var year = dateObj.getFullYear();
    var dateNow = year + '/' + month + '/' + date;

//fetch the api and post the inputs to the database 

const onSubmit = async e =>{


    e.preventDefault();

    try {

    //   const body = { formData };
    //   console.log(body);

      
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };


  const response = await fetch('http://localhost:5000/api', requestOptions);





      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }



};


 //create a component to get user inputs 

 const [formData, setformData] = useState({

    memory_title: '',
    memory_location: '',
    memory_description: '',
    memory_date: dateNow.toLocaleString()
})

const [images, setImages] = useState('');


const {memory_title, memory_location, memory_description} = formData;

const updateInput= e =>{


    setformData({
    ...formData, [e.target.name]: e.target.value
})



}




// const fileUploadInputChange = e =>{

//     setimageFile(e.target.files[0]);

// }

const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };




    return (
        <LandingStyled>

            <Container>

                <LeftSection>
                    <h1>Welcome to memory <span>App</span> </h1>

                    {/* <img src={horseMain} alt="horse archery"/> */}
                    
                    <div className="buttonClass">

                <div>
                    <Link to="/Home">

                        <button>        
                          About 
                        </button>

                    </Link>
                </div>
                    

                <div>

                <Link to="/Memories">

                        <button>        
                        Memories
                        </button>

                </Link>

                </div>
                    
                       
                    </div>
                </LeftSection>


                <RightSection>
                <h1>create memories</h1>
               

                       <div className="inputContainer">

                <form onSubmit={onSubmit}>


                        <input 
                        type="text" 
                        placeholder="Enter Title"  
                        name="memory_title" 
                        value= {memory_title}
                        onChange={updateInput}
                        required/>

                        <input 
                        type="text" 
                        placeholder="Enter Location" 
                        name="memory_location"  
                        value= {memory_location}
                        onChange={updateInput}
                        required/>

                        <textarea 
                        type="text" 
                        name="memory_description"
                        value={memory_description}
                        placeholder="Description" 
                        onChange={updateInput}
                        required/>


                        <ImageUploading
                                multiple
                                value={images}
                                onChange={onChange}
                                dataURLKey="data_url"
                            />
{/* 


                        <FileBase64
                        multiple={ true }
                        onDone={ e=> setimageFile(e.target.files[0]) } /> */}
                            
{/* 
                        <input 
                        type="file" 
                        name="imageFile"
                        value={imageFile}
                        onChange={fileUploadInputChange }
                        required />   */}

                        <div className="bar">

                        </div>

                        <button>Submit</button>

 
                    </form>                    

                        </div>
                        

     
                
                </RightSection>

            </Container>


        </LandingStyled>

       
    )
}


const LandingStyled = styled.div`

min-height:90vh;
display:flex;
background-color:#E2E2E2;


`
const Container = styled.div`
display:flex;
margin:30px 0;


/* margin:0px auto;
position:relative; */

`



const LeftSection = styled.div`
width:60%;
text-align:center;
min-width:100%;

.buttonClass{
  display:flex;
  justify-content:space-evenly;
  padding:20px;

  div{

      width:50%;


      button{
        margin: auto;
text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 15px;
  font-size: 16px;
 border-radius:15px;
 box-shadow:0 1px 2px #5e5d5b;
 width:50%;
 cursor: pointer;
 border:none;
 background-color:#4267B2;
 color:white;
      }
  }
}



/* img{
    margin-left: auto;
    margin-right: auto;
    display: block;
    width:60%;
    height:60vh;
    object-fit:cover;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    padding-left:10px;
    padding-top:20px;
    border-radius:15%;
    
   
} */

`


const RightSection = styled.div`

width:40%;
/* margin: 0px auto; */
min-width:100%;
padding-top:20px;
margin-right:10px;
text-align:center;
 

 .inputContainer{
padding-top:20px;
min-height:60vh;
width:70%;
margin-left:5px; 
border-radius:12px;
margin: 0 auto;
background-color: #f2f2f2;


input[type="text"] , textarea{

 margin:10px auto;
 font-size: 17px;
    padding: 14px 16px;
    width: 330px;
 width:90%;
 display:flex;
 border-radius:6px;
 box-shadow:0 1px 2px #4267B2;
 line-height: 16px;

 border: 1px solid #dddfe2;
    color: #1d2129;

 
}

input[type="file"]{
    margin:20px;
}

.bar{

    height:5px;
    background-color:#f2f2f2;
    width:80%;
    margin:20px auto;

}

button{

margin: auto;
text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 15px;
  font-size: 16px;
 border-radius:15px;
 box-shadow:0 1px 2px #5e5d5b;
 width:50%;
 cursor: pointer;
 border:none;
 background-color:#4267B2;
 color:white;
}

button:hover {
  opacity: 0.8;
}

h1{
     padding-bottom:20px;
}

 }

   

`


export default LandingPage
