import { StyleSheet } from "react-native";


export const lightStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    backButton: {
      padding: 8,
      backgroundColor: '#000000',
    },
    backButtonText: {
      fontSize: 18,
      color: '#ffffff',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
    },
    detailsContainer: {
      alignItems: 'center',
    },
    symbol: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#333',
      alignContent: 'left',
    },
    company: {
      fontSize: 24,
      color: '#666',
      marginVertical: 8,
    },
    price: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      marginTop: 10,
    },
    changesPercentage: {
      fontSize: 20,
      marginTop: 8,
    },
    companyName: {
      fontSize: 20,
      flexDirection: 'column',
      marginVertical: 8,
      marginStart: 10,
      alignContent: 'center',
      alignItems: 'center',
    },
    infoContainer: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    infoContainerDesc: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginTop: 20,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
    },
    infoValue: {
      fontSize: 16,
      color: '#333',
      marginBottom: 8,
    },
  });
  
export const darkStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#000', // Dark background color
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    backButton: {
      padding: 8,
      backgroundColor: '#ffffff', // White background for dark mode button
    },
    backButtonText: {
      fontSize: 18,
      color: '#000000', // Black text color for dark mode button
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      flex: 1,
      color: '#ffffff', // White text color for dark mode
    },
    detailsContainer: {
      alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color:'#ffffff',
    },
    symbol: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#eee', // Lighter text color for dark mode
      alignContent: 'left',
    },
    company: {
      fontSize: 24,
      color: '#ccc', // Lighter text color for dark mode
      marginVertical: 8,
    },
    price: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff', // White text color for dark mode
      marginTop: 10,
    },
    changesPercentage: {
      fontSize: 20,
      marginTop: 8,
      color: '#ddd', // Lighter text color for dark mode
    },
    companyName: {
      fontSize: 20,
      flexDirection: 'column',
      marginVertical: 8,
      marginStart: 10,
      alignContent: 'center',
      alignItems: 'center',
      color: '#ccc', // Lighter text color for dark mode
    },
    infoContainer: {
      backgroundColor: '#333', // Darker background color for dark mode
      borderRadius: 8,
      padding: 16,
      shadowColor: '#fff', // White shadow color for dark mode
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    infoContainerDesc: {
      backgroundColor: '#333', // Darker background color for dark mode
      borderRadius: 8,
      padding: 16,
      shadowColor: '#fff', // White shadow color for dark mode
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
      marginTop: 20,
    },
    infoTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 8,
      color: '#ffffff', // Lighter text color for dark mode
    },
    infoValue: {
      fontSize: 16,
      color: '#eee', // Lighter text color for dark mode
      marginBottom: 8,
    },
  });
  