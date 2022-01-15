import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Dimensions } from 'react-native';
import { CATEGORIES } from '../../data/categories';

const Categories = () => {
    
    const [articles, setArticles] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)

    const onSlide = (nativeEvent) => {
        if(nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != currentSlide) {
                setCurrentSlide(slide)
            }
        }
    }

    useEffect(() => {
        axios({
            method : 'GET' , 
            url : 'https://api.vuukle.com/api/v1/Comments/getTotForHost?host=krishijagran.com&globalRecommendation=true'
        }).then(res => {
            setArticles(res.data["data"])
        })
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <View style={styles.container}>
            {/* <Text style={styles.titleC}>Categories</Text> */}
            {!!articles.length ? (
                <>
                    <ScrollView
                    style = {{width : Dimensions.get('window').width, backgroundColor : 'black'}}
                    onScroll={({nativeEvent}) => onSlide(nativeEvent)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    >
                        {articles.slice(5).map((article, index) => (
                            <View key={index} style = {{position : 'relative'}}>
                                <Image source={{uri: article.articleAvatar}} style={styles.categories}/>
                                <Text style = {{position : 'absolute', width : '100%', textAlign : 'center',fontSize : 15, bottom : 0 , backgroundColor : 'black' , fontWeight : '700' ,color : 'white'}}>{article.title}</Text>
                            </View>    
                        ))}

                    </ScrollView>
                    <View style = {{flex : 1, justifyContent : 'center', marginTop : 8, display : 'flex', flexDirection : 'row'}}>
                        {
                            CATEGORIES.map((category, index) => (
                                <Text key = {index} style = {index === currentSlide ? {fontSize : 10, color : 'black'} : {fontSize : 10, color : 'gray'}}>   &#9679; </Text>
                            ))
                        }
                    </View>
                </>
            ) : (
                <View style = {{width : Dimensions.get('window').width, height : 220 , backgroundColor : 'lightgrey'}}>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    },
    categories: {
        width: Dimensions.get('window').width, 
        height: 220 , 
        resizeMode : 'contain'
    },
})
export default Categories;