import { StyleSheet } from "react-native";

export const TEXT_STYLES = StyleSheet.create({
    INTER_LIGHT: {
        fontFamily: "Inter-Light",
    },INTER_REGULAR: {
        fontFamily: "Inter-Regular",
    },
    INTER_BOLD: {
        fontFamily: "Inter-Bold",
    },
});

export const TEXT_FORMAT_STYLE = StyleSheet.create({
    HEADING_1: {
        ...TEXT_STYLES.INTER_BOLD,
        fontSize: 28,
        marginBottom: 12,
    },
    HEADING_2: {
        ...TEXT_STYLES.INTER_BOLD,
        fontSize: 24,
        marginBottom: 12,
    },
    HEADING_3: {
        ...TEXT_STYLES.INTER_BOLD,
        fontSize: 22,
        marginBottom: 12,
    },
    HEADING_4: {
        ...TEXT_STYLES.INTER_BOLD,
        fontSize: 20,
        marginBottom: 12,
    },
    HEADING_5: {
        ...TEXT_STYLES.INTER_BOLD,
        fontSize: 18,
        marginBottom: 12,
    },
    HEADING_6: {
        ...TEXT_STYLES.INTER_BOLD,
        fontSize: 16,
        marginBottom: 12,
    },
    PARAGRAPH: {
        ...TEXT_STYLES.INTER_REGULAR,
        fontSize: 14,
        lineHeight: 18
    },
});