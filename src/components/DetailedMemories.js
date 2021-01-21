import React from 'react';
import styled from 'styled-components';

const DetailedMemories = () => {
    return (
        <DetailedStyled>

            
            <img src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80" alt="nature"/>
            <p><b>Location:</b> California</p>
            <p><b>About:</b>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nihil?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, nihil?
            </p>
            <p>visited on: 04/22/2020</p>
        </DetailedStyled>
    )
}


const DetailedStyled = styled.div`

img{
    width:100%;
    height:70vh;
    object-fit:fill;
}

p{
    text-align:left;
  }


`

export default DetailedMemories;
