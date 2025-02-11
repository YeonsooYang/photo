import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="/"/>
      <Stack.Screen name="SignUpScreen" /> */}
      <Stack.Screen name="ImagePickerScreen" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

export default RootLayout;
