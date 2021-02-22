import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import {Feather} from "@expo/vector-icons"
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background} >
            <Feather name="search" size={30} style={styles.iconStyle}  />
            <TextInput 
                placeholder="Search" 
                style={styles.inputStyle}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={newTerm => onTermChange(newTerm)}
                value={term}
                onEndEditing={() => onTermSubmit(term)}
              />

        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        marginTop:15,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row",
        marginBottom:10
    },
    inputStyle:{
        borderRadius:5,
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:"center"
    }
})
export default SearchBar
