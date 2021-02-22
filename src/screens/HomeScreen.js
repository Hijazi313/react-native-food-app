import React,{useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import useResults from "../hooks/useResults";
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const HomeScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price)=> results.filter(result => result.price === price);
    return(<View style={{flex:1}} >
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={searchApi} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={ filterResultsByPrice('$')}  title="Cost effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender!" />
            </ScrollView>
        </View>)
}

export default HomeScreen