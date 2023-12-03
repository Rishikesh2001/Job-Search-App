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
					headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
					),
        }}
      />

			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={{padding: SIZES.medium, flex: 1}}
				>
					<Welcome />
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
    </SafeAreaView>
  );
};

export default Home;
