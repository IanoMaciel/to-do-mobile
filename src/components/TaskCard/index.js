import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

// styles
import styles from "./styles";

// icons 
import iconsDefault from '../../assets/default.png';

const TaskCard = ({done}) => {
    return(
        <TouchableOpacity style={[styles.card, done && styles.cardDone]}>
            <View style={styles.cardLeft}>
                <Image source={iconsDefault} style={styles.cardLeftImage}/>
                <Text style={styles.cardLeftText}>Ir para a faculdade</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardRightDate}>16/02/2023</Text>
                <Text style={styles.cardRightHour}>16:00</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TaskCard;