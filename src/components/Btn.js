import { View, Text, Button } from 'react-native'
import React from 'react'

const Btn = ({type}) => {
  return (
    <>
        { type == 'login' ? 
            <>
                <Button title='Bolas' color="#841584" accessibilityLabel="Accesibility"></Button>
            </> : 
            <><Button title='A'></Button></>
        }
    </>
  )
}

export default Btn