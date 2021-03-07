
import { Dimensions, StyleSheet } from 'react-native'

const {height} = Dimensions.get('window') 

const styles = StyleSheet.create({
  carContainer: {
        width: "100%",
        height: height,
      },
      titles: {
        marginTop: "30%",
        
        width: "100%",
        alignItems: "center",
      },
      subtitle: {
        fontSize: 16,
        color: "#5c5e62",
      },
      title: {
        fontSize: 40,
        fontWeight: "500",
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode:'cover',
        position:'absolute'
      },
      buttonContainer: {
        position:'absolute',
        bottom:50,
        width:'100%'
        

      }

})
export  default styles