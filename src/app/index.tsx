import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;


export default function Index() {

  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-5" style={{marginTop: statusBarHeight + 8}}>
        <Header />
      </View>
    </ScrollView>
  );
}
