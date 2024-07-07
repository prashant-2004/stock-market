// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchTopGainers, fetchTopLosers } from '../api/apiServices';

const StockCard = ({symbol, price, change,  currentView, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.symbol}>{symbol}</Text>
    <Text style={styles.price}>{`$${price}`}</Text>
    <Text style={[styles.change, { color: currentView === 'gainers' ? 'green' : 'red' }]}>
      {currentView === 'gainers' ? `+${change}` : change}
    </Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(''); // to track whether we are viewing gainers or losers

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const loadTopGainers = async () => {
    setLoading(true);
    try {
      const data = await fetchTopGainers();
      setStockData(data);
      setCurrentView('gainers');
    } catch (error) {
      console.error('Error fetching top gainers', error);
    } finally {
      setLoading(false);
    }
  };

  const loadTopLosers = async () => {
    setLoading(true);
    try {
      const data = await fetchTopLosers();
      setStockData(data);
      setCurrentView('losers');
    } catch (error) {
      console.error('Error fetching top losers', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch default data (e.g., top gainers)
    loadTopGainers();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#A7242C" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GROWW-CLONE</Text>
        <TouchableOpacity onPress={toggleSearchBar} style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {showSearchBar && (
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.cardsContainer}>
            {(stockData == undefined)
              ?
              <View><Text>UNDEFINED..</Text></View>
              :
            stockData.map((stock, index) => (
              <StockCard
                key={index}
                symbol={stock.ticker}
                price={stock.price}
                change={stock.change_percentage}
                currentView={currentView}
                onPress={() =>
                  navigation.navigate('Details', {
                    item: {
                      symbol: stock.ticker,
                      price: stock.price,
                      change: stock.change_percentage,
                      market: 'NSQ', // Example market placeholder
                      view:currentView
                    },
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
       )} 
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity style={styles.gainBottomButton} onPress={loadTopGainers}>
          <Text style={styles.bottomButtonText}>Top Gainers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={loadTopLosers}>
          <Text style={styles.bottomButtonText}>Top Losers</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginStart: 140,
  },
  searchBarContainer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInput: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 16,
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
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  change: {
    fontSize: 16,
    marginTop: 4,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    gap:30,
    backgroundColor: '#f0f0f0',
  },
  bottomButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 8,
    backgroundColor: '#A7242C',
  },
  gainBottomButton: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 8,
    backgroundColor: '#00ff00',
  },
  bottomButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
