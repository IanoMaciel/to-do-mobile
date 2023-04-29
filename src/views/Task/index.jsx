import React, { useEffect, useState } from 'react'
import { Image, KeyboardAvoidingView, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'

// components
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
// icons
import typeIcons from '../../utils/typeIcons'
// styles
import styles from './styles'

export default function Task() {
    const [done, setDone] = useState(false)

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <MainHeader showBack={true} />
            <ScrollView style={{ width: '100%' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
                    {
                        typeIcons.map((item) => (
                            item !== null &&
                            <TouchableOpacity key={item}>
                                <Image source={item} style={styles.imageIcons} />
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <View style={styles.form}>
                    <Text style={styles.label}>Título</Text>
                    <TextInput style={styles.input} maxLength={30} placeholder="Lembre-me de fazer..." />

                    <Text style={styles.label}>Detalhes</Text>
                    <TextInput
                        style={styles.inputArea}
                        maxLength={200}
                        multiline={true}
                        placeholder="Detalhes da atividade a qual tenho que lembrar..."
                    />

                    <View style={styles.inLine}>
                        <View style={styles.inputInLine}>
                            <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? "#00761b" : "#EE6B26"} />
                            <Text style={styles.switchLabel}>Finalizada</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.removeLabel}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Footer icon={"save"} />
        </KeyboardAvoidingView>
    )
}
