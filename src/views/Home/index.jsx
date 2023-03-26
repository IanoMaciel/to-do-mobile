import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';

// components
import Footer from '../../components/Footer';
import MainHeader from '../../components/MainHeader';
import TaskCard from '../../components/TaskCard';
// API
import api from '../../services/useApi';
// styles
import styles from './styles';

const Home = () => {
    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]); // [] -> collection
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState()

    //async function loadTask() 
    const loadTask = async () => {
        setLoad(true)
        await api.get(`/task/filter/${filter}/11:11:11:11:11:11`)
            .then(response => {
                setTasks(response.data)
                setLoad(false)
        });
    }

    const lateVerify = async () => {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
            .then(response => {
                setLateCount(response.data.length)
        })
    }

    const notification = () => {
        setFilter('late')
    }

    useEffect(() => {
        loadTask()
        lateVerify()
    },[filter])

    return(
        <View style={styles.container}>
            <MainHeader 
                showNotification={true}
                showBack={false}
                pressNotification={notification}
                late={lateCount}
            />
           
            <View style={styles.filter}>
                <TouchableOpacity onPress={() => setFilter('all')}>
                    <Text style={filter === 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('today')}>
                    <Text style={filter === 'today' ? styles.filterTextActived : styles.filterTextInative}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('week')}>
                    <Text style={filter === 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('month')}>
                    <Text style={filter === 'month' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setFilter('year')}>
                    <Text style={filter === 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS {filter === 'late' && 'ATRASADAS'}</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                
                {
                    load 
                    ?
                    <ActivityIndicator color={'#EE6B26'} size={50}/>
                    :
                    tasks.map(item => (
                        <TaskCard
                            key={item.id}
                            done={false}
                            title={item.title}
                            when={item.when}
                            type={item.type}
                        />
                    ))
                }
            </ScrollView>

            <Footer icon={'add'}/>
        </View>
    );
}

export default Home;