import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView } from "react-native";

export default function Details() {
  const params = useLocalSearchParams();
  console.log("Params:", params);

  useEffect(() => {}, []);

  async function fetchPokemonNyName(name: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      console.log("Pokemon Details:", data);
    } catch (error) {
      console.log("Error fetching pokemon details:", error);
    }
  }
  return (
    <>
      <Stack.Screen
        options={{
          title: `Details of ${params.name}`,
        }}
      />
      <ScrollView contentContainerStyle={{ gap: 16, padding: 16 }}></ScrollView>
    </>
  );
}
