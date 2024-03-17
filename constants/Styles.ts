import Colors from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdffff",
  },
  textTitleHeadings: {
    fontSize: 32,
    color: Colors.dark,
    fontFamily: "Cereal-medium",
    backgroundColor: "#fdffff",
    paddingTop: 34,
  },
  textHeadings: {
    fontSize: 22,
    color: Colors.dark,
    paddingTop: 8,
    paddingBottom: 56,
    fontFamily: "Cereal-medium",
  },
  textHeadings2: {
    fontSize: 18,
    color: Colors.dark,
    fontFamily: "Cereal-medium",
  },
  textSubHeadings: {
    fontSize: 16,
    color: Colors.grey_subHeadings,
    paddingVertical: 6,
    fontFamily: "Cereal",
  },
  textSubHeadings2: {
    fontSize: 18,
    color: Colors.grey_subHeadings,
    paddingTop: 8,
    paddingBottom: 36,
    fontFamily: "Cereal",
  },
  textSubHeadings3_mini: {
    fontSize: 12,
    color: Colors.grey_subHeadings,
    paddingTop: 24,
    fontFamily: "Cereal",
  },
  inputField: {
    height: 58,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: Colors.buttonColor1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Cereal-medium",
  },
  btnIcon: {
    position: "absolute",
    left: 20,
  },
/*   footer: {
    position: "absolute",
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  }, */
});