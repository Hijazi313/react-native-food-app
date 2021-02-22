import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import {withNavigation} from "react-navigation"
import ResultDetail from './ResultDetail'

const ResultsList = ({title, results, navigation}) => {
    if(!results.length){
        return null
    }
    return (
        <View>
            <Text style={styles.header} >{title}</Text>
            <FlatList horizontal={true} 
            showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=> result.id }
                renderItem={({item})=> {
                    return (
                    <TouchableOpacity onPress={()=> navigation.navigate("Product", {id:item.id})} >
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                    )}
        }
            />
        </View>
    )
}

const styles = StyleSheet.create({

    header:{
        fontSize:20,
        fontWeight:"bold"
    }
})
export default withNavigation(ResultsList)
