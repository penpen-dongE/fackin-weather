import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, StatusBar, TextComponent } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0","#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? aweee no."
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny Sunny Sunny",
        subtitle: "Go get your ass burnt"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on."
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "Horribbbbbbble!!"
    }
};
export default function Weather ({temp, condition}) {
    return (
  
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfcontainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions[condition].iconName} 
                    color="white"/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.TextContainer}>
                <Text style = {styles.title}>{weatherOptions[condition].title}</Text>
                <Text style = {styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>     
    );  
} 

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    temp: {
        fontSize: 42,
        color:"white",
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    TextContainer: {
        paddingHorizontal:40,
        alignItems: "flex-start",
        justifyContent: "center",
        flex: 1
    }
});
