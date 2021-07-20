import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

export default class ProductDetail extends Component {

  constructor(props) {
    super(props);
  }

  clickEventListener() {
    Alert.alert("Success", "Product has beed added to cart")
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"}}/>
            <Text style={styles.name}>2019 Apple MacBook Pro</Text>
            <Text style={styles.price}>₹1,85,659
</Text>
            <Text style={styles.description}>
            6.5'' Mini Drop Full Screen .
            Snapdragon 665 AIE Octa Core processor.
            48MP+8MP+2MP+2MP Quad rear cameras, a 13MP front camera.
            4GB RAM, 64GB/128GB ROM.
            5000mAh battery, 10W quick charge supported.
            ColorOS 6 realme edition based on Android 9.0 (Pie).
            </Text>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
         
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://www.reliancedigital.in/medias/Apple-MGND3HNA-Laptops-491946465-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzY2MTF8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2hiNS85NDQzMDkxMTIwMTU4LmpwZ3w2MjI5MThmNzY4Njk0MmZhNDc3Y2UzMGM4ODM0ZmY0YzFmNjNjYzkxMDM0ZWJlZGVkMWFmNDc0YTEwODE5Njcw"}}/>
            <Text style={styles.name}>Apple MGND3HNA MacBook Air</Text>
            <Text style={styles.price}>₹92,900</Text>
            <Text style={styles.description}>
            6.5'' Mini Drop Full Screen .
            Snapdragon 665 AIE Octa Core processor.
            48MP+8MP+2MP+2MP Quad rear cameras, a 13MP front camera.
            4GB RAM, 64GB/128GB ROM.
            5000mAh battery, 10W quick charge supported.
            ColorOS 6 realme edition based on Android 9.0 (Pie).
            </Text>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
         
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> this.clickEventListener()}>
              <Text style={styles.shareButtonText}>Add To Cart</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  productImg:{
    width:200,
    height:200,
    marginTop:10,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
  },
  star:{
    width:40,
    height:40,
  },
  btnColor: {
    height:30,
    width:30,
    borderRadius:30,
    marginHorizontal:3
  },
  btnSize: {
    height:40,
    width:40,
    borderRadius:40,
    borderColor:'#778899',
    borderWidth:1,
    marginHorizontal:3,
    backgroundColor:'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentColors:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  contentSize:{ 
    justifyContent:'center', 
    marginHorizontal:30, 
    flexDirection:'row', 
    marginTop:20
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  shareButton: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  addToCarContainer:{
    marginHorizontal:30
  }
});    