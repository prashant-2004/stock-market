import React, { useState, useEffect } from 'react';
import { 
  View, 
  Image, 
  FlatList, 
  Text, 
  ScrollView, 
  StatusBar, 
  TouchableOpacity, 
  TextInput, 
  ActivityIndicator, 
  Appearance 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchTopGainers, fetchTopLosers } from '../api/apiServices';
import { API_KEY } from '../config';
import { lightStyles, darkStyles } from '../styles/HomeStyles.js'; // Import your light and dark styles

const StockCard = ({ symbol, name, price, changesPercentage, currentView, onPress, themeStyle }) => (
  <TouchableOpacity style={[ themeStyle.card]} onPress={onPress}>
    {<Image source={{ uri: `https://financialmodelingprep.com/image-stock/${symbol}.png?apikey=${API_KEY}` }} style={themeStyle.logo} />}
    <Text style={ themeStyle.symbol}>{symbol}</Text>
    <Text style={ themeStyle.name}>{name}</Text>
    <Text style={themeStyle.price}>{`$${price}`}</Text>
    <Text style={[themeStyle.changesPercentage, { color: currentView === 'gainers' ? 'green' : 'red' }]}>
      {currentView === 'gainers' ? `+${changesPercentage}` : changesPercentage}
    </Text>
  </TouchableOpacity>
);

const HomeScreen_2 = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState(''); // to track whether we are viewing gainers or losers
  const [suggestions, setSuggestions] = useState([]);
  const colorScheme = Appearance.getColorScheme(); // Detect current color scheme
  console.log(colorScheme);
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles; // Use appropriate styles based on color scheme

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

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

  const fetchSuggestions = (query) => {
    if (!query) return;

    const filteredStocks = stockData.filter((stock) => {
      const regex = new RegExp(query, 'i');
      return regex.test(stock.symbol) || regex.test(stock.name);
    });

    setSuggestions(filteredStocks);
  };

  const handleSearchInputChange = (text) => {
    setSearchQuery(text);
    if (text.length > 0) {
      fetchSuggestions(text);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionPress = (symbol, price, name, changesPercentage, currentView) => {
    setSearchQuery(symbol); // Set the search bar text to the selected suggestion
    navigation.navigate('Details', {
      item: {
        symbol: symbol,
        price: price,
        name: name,
        changesPercentage: changesPercentage,
        view: currentView
      },
    });
  };

  useEffect(() => {
    // Fetch default data (e.g., top gainers)
    loadTopGainers();
  }, []);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor="#A7242C" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>GROWW-CLONE</Text>
        <TouchableOpacity onPress={toggleSearchBar} style={styles.searchIcon}>
          <Ionicons name="search" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>
      {showSearchBar && (
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            placeholderTextColor={colorScheme === 'dark' ? '#ccc' : '#999'} // Adjust placeholder text color
            value={searchQuery}
            onChangeText={handleSearchInputChange}
          />
          {suggestions.length > 0 && (
            <FlatList
              data={suggestions}
              keyExtractor={(item) => item.symbol}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.suggestionItem}
                  onPress={() => handleSuggestionPress(item.symbol, item.price, item.name, item.changesPercentage, currentView)}
                >
                  <Text style={{ color: colorScheme === 'dark' ? 'white' : 'black' }}>{`${item.symbol} - ${item.name}`}</Text>
                </TouchableOpacity>
              )}
            />
          )}
        </View>
      )}
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.cardsContainer}>
            {(stockData == undefined)
              ?
              <View><Text> Calling API..</Text></View>
              :
              stockData.map((stock, index) => (
                <StockCard
                  key={index}
                  symbol={stock.symbol}
                  name={stock.name}
                  price={stock.price}
                  changesPercentage={stock.changesPercentage + " %"}
                  currentView={currentView}
                  themeStyle={styles}
                  onPress={() =>
                    navigation.navigate('Details', {
                      item: {
                        symbol: stock.symbol,
                        price: stock.price,
                        name: stock.name,
                        changesPercentage: stock.changesPercentage,
                        view: currentView
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

export default HomeScreen_2;
