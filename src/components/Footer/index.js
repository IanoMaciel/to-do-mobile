import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text 
} from 'react-native';

// styles
import styles from "./styles";

// icons
import add from '../../assets/add.png';
import save from '../../assets/save.png';


const Footer = ({icon}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image source={icon == 'add' ? add : save} style={styles.buttonImage}/>
            </TouchableOpacity>
            <Text style={styles.title}>Organizando sua vida</Text>
        </View>
    );
}

export default Footer;