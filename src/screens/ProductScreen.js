import React,{useEffect, useState} from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from "../api/yelp";

const ProductScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');
    
        const getBusiness = async (id)=>{
            const {data} = await yelp.get(`/${id}`);
            setResult(data)
        }
    useEffect(()=>{
        getBusiness(id);
    }, [])
    if(!result){
        return null
    }
        const {name, photos} = result;
        return (<View>
                    <Text style={styles.title} > {name}</Text>
                    <FlatList
                    horizontal={true}
                    data={photos}
                        keyExtractor={(photo)=> photo }
                        renderItem={({item}) =>{
                            return <Image style={styles.image} source={{uri:item}} />
                        }}
                    />
                 </View>
    )

}

const styles = StyleSheet.create({
    title:{
        fontWeight:"bold",
        fontSize:20,
        marginVertical:20
    },
    image:{
        width:250,
        height:150,
        marginRight:10
    }
})
export default ProductScreen
