import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { COLORS, SIZES } from "../../../constants";

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();


  return (
    <View>
      <View>
        <Text style={styles.userName}>Hello, Rishikesh</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job, here!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
