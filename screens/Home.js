import {
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import COLORS from "../src/consts/colors";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  ReadexPro_300Light,
  ReadexPro_500Medium,
  ReadexPro_600SemiBold,
  ReadexPro_700Bold,
} from "@expo-google-fonts/readex-pro";
import coffee from "../src/consts/coffee";
import category from "../src/consts/category";
const Home = ({ navigation }) => {
  //width of the screen
  const width = Dimensions.get("screen").width;
  //Tabs
  const [selectedTab, setSelectedTab] = React.useState(category[0].id);

  //Fonts
  let [fontsLoaded] = useFonts({
    ReadexPro_300Light,
    ReadexPro_500Medium,
    ReadexPro_600SemiBold,
    ReadexPro_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Good Morning</Text>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.navigationImage}
              source={require("../src/assets/Navigation.png")}
            />
            <Text style={styles.subTitle}>648 Bridge Street</Text>
          </View>
        </View>
        <Image
          style={styles.profileImage}
          source={require("../src/assets/profile.png")}
        />
      </View>
      {/* //Tabs */}
      <View>
        <FlatList
          data={category}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item.id);
                setSelectedTab(item.id);
              }}
              style={[
                styles.categoryContainer,
                selectedTab == item.id && styles.categorySelected,
              ]}
            >
              <Text
                style={[
                  styles.tabsText,
                  selectedTab == item.id && styles.categorySelectedText,
                ]}
                key={item.id}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* //Coffee */}
      <View style={{ width: width, paddingRight: 24 }}>
        <FlatList
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginRight: 24,
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={coffee}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.cardContainer]}
              onPress={() => {
                navigation.navigate("Detail", coffee);
              }}
            >
              <Image style={styles.itemImage} source={item.img} />
              <Text style={styles.itemTitle}>{item.name}</Text>
              <View
                style={{
                  marginTop: 7,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.itemPrice}>{"$ " + item.price}</Text>
                <TouchableOpacity style={{ justifyContent: "center" }}>
                  <View style={styles.add}>
                    <Text style={{ fontSize: 15 }}>+</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    paddingLeft: 24,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 49,
    marginRight: 24,
  },
  title: {
    color: COLORS.darkTitle,
    fontSize: 28,
    fontFamily: "ReadexPro_700Bold",
  },
  subTitle: {
    color: COLORS.darkSubTitle,
    fontSize: 17,
    fontFamily: "ReadexPro_300Light",
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  navigationImage: {
    width: 24,
    height: 24,
    marginRight: 4,
  },

  tabsText: {
    color: COLORS.darkBlue,
    fontFamily: "ReadexPro_500Medium",
    fontSize: 14,
  },
  categoryContainer: {
    backgroundColor: COLORS.dark2,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    borderRadius: 24,
    marginTop: 32,
    marginRight: 14,
    marginBottom: 7,
  },
  categorySelected: {
    backgroundColor: COLORS.darkBlue,
  },
  categorySelectedText: {
    color: COLORS.dark,
  },
  cardContainer: {
    backgroundColor: COLORS.dark2,
    width: 170,
    height: 240,
    marginTop: 20,
    borderRadius: 16,
    paddingTop: 4,
    paddingHorizontal: 12,
    paddingBottom: 12,
    justifyContent: "space-between",
  },
  itemImage: {
    width: 139,
    height: 156,
  },
  itemTitle: {
    fontFamily: "ReadexPro_600SemiBold",
    color: COLORS.darkTitle,
    fontSize: 17,
    marginTop: 5,
  },
  itemPrice: {
    fontFamily: "ReadexPro_300Light",
    fontSize: 17,
    color: COLORS.darkTitle,
  },
  add: {
    backgroundColor: COLORS.darkBlue,
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
