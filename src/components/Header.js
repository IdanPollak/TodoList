import React from 'react'
import styled from 'styled-components'

const Header = () => {

    return (
        <Container>
            <h1>Todo List</h1>
        </Container>
    )
}

const Container = styled.div
`
display:flex;
justify-content:center;
background-color:bisque;
`

 
    

export default Header
