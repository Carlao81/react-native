import React, { useState } from 'react'
import { View, Text , TextInput } from 'react-native';
import { styles } from "./styles";

export function SignIn() {
  const [text, setText] = useState ("tu não digitou nada");
  return( 
    <View style={styles.container}>
     <Text>I am your father</Text>
     <TextInput style={styles.input} 
     onChangeText={setText}/>   
  
     <Text>

    voce digitou: {text}
     </Text>
  </View>
  );
}





