// DetailScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { API_KEY } from '../config';

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  const [stockDetails, setStockDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get('https://www.alphavantage.co/query', {
          params: {
            function: 'TIME_SERIES_DAILY',
            symbol: item.symbol,
            apikey: API_KEY,
          },
        });
        setStockDetails(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStockDetails();
  }, [item.symbol]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Details Screen</Text>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.detailsContainer}>
          <Text style={styles.symbol}>{item.symbol}</Text>
          <Text style={styles.company}>{item.company}</Text>
          <Text style={styles.price}>Price: ${item.price}</Text>
          <Text style={[styles.change, { color: item.view === 'gainers' ? 'green' : 'red' }]}>
            {item.view === 'gainers' ? `+${item.change}` : item.change}
          </Text>
          <Text style={styles.market}>Market: {item.market}</Text>
          {/* Render more detailed information from stockDetails */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  backButtonText: {
    fontSize: 18,
    color: '#007AFF',
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
  },
  change: {
    fontSize: 20,
    marginTop: 8,
  },
  market: {
    fontSize: 20,
    marginTop: 8,
    color: '#888',
  },
});

export default DetailScreen;
