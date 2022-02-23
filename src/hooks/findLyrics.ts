import { useQuery } from "react-query";
import { ResearchScreen } from "./src/screens/ResearchScreen";

async function fetchData() {
  const result = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const json = await result.json();
  return json;
}

export function findLyrics() {
  return useQuery(["lyrics"], fetchData);
}
