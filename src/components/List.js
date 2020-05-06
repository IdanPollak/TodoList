import React from 'react'
import styled from 'styled-components';


const List = ({arr}) => {

    const crossLine = event => {
        const element = event.target;
        element.classList.toggle("crossed-line");
    };
    
    return (
        <Container>
        <table className="ui celled table">
          <thead>
            <tr>
              <th className="center">Missions Todo</th>
           </tr>
          </thead>
          <tbody>
            <tr>
              <td>{arr.map(i=><div className="content" onClick={crossLine} key={Math.random()}>{i.text}</div>)}</td>
            </tr>
          </tbody>  
          </table>
        </Container>
    )
}

const Container = styled.div`
.center {
  display:flex;
  justify-content:center;
}
.content {
  text-align:center;
  margin: auto;
  width: 60%;
  border: 3px solid;
  padding: 10px;
}
.crossed-line {
    text-decoration: line-through;
}`
export default List

