import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({result}) => {
    return (
        <View>
            <Image style={styles.image} source={{uri: result?.image_url}} />
            <Text style={styles.name} > {result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:250,
        height:250,
        borderRadius:4,
        marginHorizontal:30
    },
    name:{
        fontWeight:"bold",
    }

})
export default ResultDetail
