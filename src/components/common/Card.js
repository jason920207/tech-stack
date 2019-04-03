import React from 'react'
import { View, Text, Image, Linking } from 'react-native'
import CardSection from './CardSection'
import Button from './Button'
const Card = ({album}) => {

  const {
      containerStyle,
      thumbnailStyle,
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle } = styles

  return (
    <View style={containerStyle}>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: album.thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: album.image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={()=> Linking.openURL(album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </View>
  )
}

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  },
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shaderColor: '#000',
    shadowOffset: { width:0, height:2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation:1,
    marginLeft: 5,
    marginRigth: 5,
    marginTop: 10
  }
}

export { Card }
