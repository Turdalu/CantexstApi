import React, { useContext, useState } from 'react'
import { ContexstTest,  } from '../store/ContextApi'
import { styled } from 'styled-components'

function Input() {

    const context = useContext(ContexstTest)

    const [name, setName] = useState('') 
    const [email,setEmail] = useState('')


    const nameValue = (el) =>{
        console.log(el.target.value);
        setName(el.target.value)
    }
    const emailValuee = (el) =>{
        console.log(el.target.value);
        setEmail(el.target.value)
    }

    const clickHandler=()=>{
        const obj ={
            name: name,
            email: email,
            id: Math.random(),
        }
        
        setName("")
        setEmail("")
        context.test(obj)
        
    }
    
    const {arr} = useContext(ContexstTest)

  return (
      <div>
        <h1>tydulis</h1>
        {arr.map((el) => {
            return (
                <div key={el.id} >
                <h1>{el.name}</h1>
                <h1>{el.email}</h1>
                </div>
            )
        })}
        <DivStyle>
          <ButStyle onClick={clickHandler}>ADD</ButStyle>
          <InputStyle value={name} onChange={nameValue} type='texst' placeholder='name'/>
          <InputStyle value={email} onChange={emailValuee} type='texst' placeholder='pasvord'/>
        </DivStyle>
        
    </div>
  )
}

export default Input

const InputStyle = styled.input`
    width: 500px;
    height: 30px;
    border-radius: 8px;
    font-size: 25px;
    color:red;
`
const ButStyle = styled.button`
    width: 300px;
    height: 40px;
    font-size: 30px;
    background-color:gold;
    border-radius:8px;
    &:hover{
        background-color: red;    
        cursor:pointer;
    
    &:active{
        background-color: green;    
        cursor:pointer;
    }
`

const DivStyle = styled.div`
border: 2px solid red;
display: flex;
align-items: center;
flex-direction:column;
background-color: blue;
color: red;

`