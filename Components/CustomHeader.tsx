import React, { useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
    Image,
    TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import BottomSheet from "../Components/BottomSheet";



const SearchBar = () => (
  <View style={styles.searchContainer}>
    <View style={styles.searchSection}>
      <View style={styles.searchField}>
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color={Colors.primary}
        />

        <TextInput
          style={styles.searchInput}
          placeholder="Restaurants, groceries, dishes"
          placeholderTextColor={Colors.medium}
        />
      </View>
      <Link href={"modal/filter"} asChild>
        <TouchableOpacity style={styles.optionButton}>
          <Ionicons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  </View>
);

const CustomHeader = () => {

const bottomSheetRef = useRef<BottomSheetModal>(null);
  const openModal = () => {
    bottomSheetRef.current?.present();
}


  return (
    <SafeAreaView style={styles.safeArea}>
      <BottomSheet ref={ bottomSheetRef } />
      <View style={styles.container}>
        <TouchableOpacity onPress={openModal}>
          <Image
            source={require("../assets/images/bike.png")}
            style={styles.bike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer} onPress={openModal}>
          <Text style={styles.title}>Delivery • Now</Text>
          <View style={styles.location}>
            <Text style={styles.subTitle}>Kiyv, UA</Text>
            <Ionicons name="chevron-down" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bike: {
    width: 30,
    height: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
      alignItems: "center",
  },
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
      borderRadius: 10,
      flexDirection: 'row',
    alignItems: 'center',
  },
    searchInput: {
        padding: 10,
        fontSize: 16,
        color: Colors.mediumDark,
   
    },
    searchIcon: {
         paddingLeft: 10,
    },
  optionButton: {
    padding: 10,
    bordeerRadius: 50,
  },
});

export default CustomHeader;
