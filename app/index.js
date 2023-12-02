import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { images, icons, COLORS, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn } from "../components"

const Home = () => {
	const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />;
          },
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={icons.profile} />;
          },
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
