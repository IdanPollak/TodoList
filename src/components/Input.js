import React,{useState} from 'react'
import styled from 'styled-components'

const Input = ({AddToList}) => {

    const [text, setText] = useState ('');

    const onInputChange = (e) => {
    setText({text: e.target.value});
}

const onInputClick = (e) => {
      AddToList(curr=>[...curr,text])
     setText({text: ''});
     console.log(text);
}

    return (
        <Container>
            <br />
            <label>Add TODO</label>
            <input 
            id="search"
             type="text" value={text.value} onChange={onInputChange}>
            </input>
            
            <button onClick={onInputClick}>Add</button> 
        </Container>
    )
}

const Container = styled.div `
display:flex;
justify-content:center;
margin-top:50px;

`
export default Input
