import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';

// Sample data for items
const initialData = [
    { id: 1, name: "wheat", stock: 5, unit: "kg" },
    { id: 2, name: "rice", stock: 45, unit: "kg" },
    { id: 3, name: "cornflakes", stock: 55, unit: "kg" },
    { id: 4, name: "maize", stock: 35, unit: "kg" },
    { id: 5, name: "millets", stock: 25, unit: "kg" },
    { id: 6, name: "barley", stock: 15, unit: "kg" },
    { id: 7, name: "laddu", stock: 50, unit: "kg" },
];

const HomeScreen = () => {
    const [view, setView] = useState(0);
    const [data, setData] = useState(initialData); // Manage data in state

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>

            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.button, view === 0 ? { backgroundColor: "green" } : null]}
                    onPress={() => setView(0)}>
                    <Text style={[styles.buttonText, view === 0 ? { color: "white" } : null]}>
                        All Items
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.button, view === 1 ? { backgroundColor: "green" } : null]}
                    onPress={() => setView(1)}>
                    <Text style={[styles.buttonText, view === 1 ? { color: "white" } : null]}>
                        Low Stock
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.button, view === 2 ? { backgroundColor: "green" } : null]}
                    onPress={() => setView(2)}>
                    <Text style={[styles.buttonText, view === 2 ? { color: "white" } : null]}>
                        Create
                    </Text>
                </Pressable>
            </View>

            {view === 0 && <AllItems data={data} setData={setData} />}
            {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} setData={setData} />}
            {view === 2 && <CreateScreen  data={data} setData={setData} />}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 10,
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "green",
    },
    buttonText: {
        color: "green",
    },
});
