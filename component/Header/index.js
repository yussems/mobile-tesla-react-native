import React from 'react'
import { Image, Text, View } from 'react-native'
import logo from '../../assets/images/logo.png'
import styles from './style'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo}/>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}/>
        </View>
    )
}

export default Header


