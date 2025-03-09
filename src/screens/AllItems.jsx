import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React from 'react';
import { Alert } from 'react-native';

const AllItems = ({ data, setData }) => {
    const handleDelete = (id) => {
        console.log("delete");
        console.log(data, "item");

        const updatedData = data.filter((item) => item.id !== id); // Remove the item
        setData(updatedData); // Update the state in HomeScreen
        Alert.alert("Item Delete Successfully")
    };

    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={[styles.listContainer, item.stock < 20 ? { backgroundColor: 'rgb(255,127,127)' } : { backgroundColor: "#80EF80" }]}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.stock}</Text>
                        <Pressable onPress={() => handleDelete(item.id)}>
                            <Text>Delete</Text>
                        </Pressable>
                    </View>
                )}
            />
        </View>
    );
};

export default AllItems;

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    headingText: {
        fontWeight: "500",
        fontSize: 20,
    },
    listContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
       
        margin: 4,
        padding: 9,
        borderRadius: 5,
    },
    itemText: {
        fontSize: 14,
        fontWeight: '400',
        flex: 1,
    },
});
