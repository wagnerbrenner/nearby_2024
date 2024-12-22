import { ActivityIndicator } from "react-native";

import { colors } from "@/styles/theme";
import { s } from "./styles";

export default function Loading() {
  return <ActivityIndicator color={colors.green.base} style={s.container} />;
}
