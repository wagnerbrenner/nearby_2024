import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },

  title: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    color: colors.gray[500],
  },
});
