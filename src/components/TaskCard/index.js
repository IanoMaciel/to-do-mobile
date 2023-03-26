import { format } from 'date-fns'
import React from "react";
import { Image, Text, TouchableOpacity, View } from 'react-native';

// icons 
import iconsDefault from '../../assets/default.png';
// styles
import styles from "./styles";

const TaskCard = ({ done, title, when }) => {
    const formattedDate = (when) => {
        var date = format(new Date(when), 'dd/MM/yyyy')
        var hours = format(new Date(when), 'h:mm')

        return {
            date,
            hours
        }
    }
    return(
        <TouchableOpacity style={[styles.card, done && styles.cardDone]}>
            <View style={styles.cardLeft}>
                <Image source={iconsDefault} style={styles.cardLeftImage}/>
                <Text style={styles.cardLeftText}>{ title }</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.cardRightDate}>{formattedDate(when).date}</Text>
                <Text style={styles.cardRightHour}>{formattedDate(when).hours}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TaskCard;