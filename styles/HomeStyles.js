import { StyleSheet } from "react-native";

export const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    headerTitle: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 25,
    },
    searchIcon: {
      padding: 10,
      marginStart: 100,
    },
    searchBarContainer: {
      backgroundColor: '#f0f0f0',
      paddingHorizontal: 16,
      marginTop: 2,
      paddingBottom: 8,
    },
    searchInput: {
      backgroundColor: 'white',
      height: 40,
      borderRadius: 8,
      marginTop: 14,
      paddingHorizontal: 16,
      marginBottom: 8,
    },
    suggestionItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    scrollViewContent: {
      padding: 16,
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      width: '45%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'grey',
    },
    symbol: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    name: {
      fontSize: 14,
      color: '#333',
      alignContent: 'center',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    changesPercentage: {
      fontSize: 16,
      marginTop: 4,
    },
    bottomButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 12,
      gap: 40,
      backgroundColor: '#f0f0f0',
    },
    bottomButton: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 8,
      backgroundColor: '#A7242C',
    },
    gainBottomButton: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 8,
      backgroundColor: '#006200',
    },
    bottomButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    logo: {
      width: 40,
      height: 40,
      marginBottom: 8,
    },
  });
  
export const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black', // Dark background color
    },
    header: {
      backgroundColor: '#333', // Dark background color
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 16,
    },
    headerTitle: {
      color: 'white', // White text color
      fontWeight: 'bold',
      fontSize: 25,
    },
    searchIcon: {
      padding: 10,
      marginStart: 100,
    },
    searchBarContainer: {
      backgroundColor: '#444', // Darker background color
      paddingHorizontal: 16,
      marginTop: 2,
      paddingBottom: 8,
    },
    searchInput: {
      backgroundColor: '#333', // Darker background color
      height: 40,
      borderRadius: 8,
      marginTop: 14,
      paddingHorizontal: 16,
      marginBottom: 8,
      color: 'white', // White text color
    },
    suggestionItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#888', // Lighter border color
    },
    scrollViewContent: {
      padding: 16,
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    card: {
      backgroundColor: '#333', // Darker background color
      borderRadius: 8,
      padding: 16,
      margin: 8,
      width: '45%',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#555', // Lighter border color
    },
    symbol: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#eee', // Lighter text color
    },
    name: {
      fontSize: 14,
      color: '#ddd', // Lighter text color
      alignContent: 'center',
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ccc', // Lighter text color
    },
    changesPercentage: {
      fontSize: 16,
      marginTop: 4,
      color: '#aaa', // Lighter text color
    },
    bottomButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 12,
      gap: 40,
      backgroundColor: '#444', // Darker background color
    },
    bottomButton: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 8,
      backgroundColor: '#A7242C',
    },
    gainBottomButton: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 8,
      backgroundColor: '#006200',
    },
    bottomButtonText: {
      color: '#333', // Darker text color
      fontWeight: 'bold',
      fontSize: 16,
    },
    logo: {
      width: 40,
      height: 40,
      marginBottom: 8,
    },
  });
  