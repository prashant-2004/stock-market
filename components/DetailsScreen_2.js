import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Appearance } from 'react-native'; // Import Appearance
import axios from 'axios';
import { API_KEY } from '../config';
import { LineChart } from 'react-native-wagmi-charts';
import { darkStyles, lightStyles } from '../styles/DetailsStyles.js';

const DetailScreen_2 = ({ navigation, route }) => {
  const { item } = route.params;
  const [stockDetails, setStockDetails] = useState(null);
  const [stockInfo, setStockInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const colorScheme = Appearance.getColorScheme(); // Get initial color scheme

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles; // Use appropriate styles based on color scheme

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark'); // Initialize based on initial color scheme

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${item.symbol}?apikey=${API_KEY}`);
        const response_2 = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${item.symbol}?apikey=${API_KEY}`);
        if (response.data.historical || response_2.data) {
          setStockDetails(response.data.historical);
          setStockInfo(response_2.data);
        } else {
          setStockDetails([]);
        }
      } catch (error) {
        console.error(error);
        setStockDetails([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStockDetails();
  }, [item.symbol]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    return () => subscription.remove();
  }, []);

  const chartData = stockDetails
    ? stockDetails.map(data => ({
        timestamp: new Date(data.date).getTime(),
        value: data.close
      })).reverse()
    : [];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
          <Text style={styles.symbol}>{item.symbol}</Text>
          
          <View style={{ flexDirection: 'column', marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.companyName}>{item.name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'left', gap: 10, alignItems: 'center' }}>
                <Text style={styles.price}>Price: ${item.price}</Text>
                <Text style={[styles.changesPercentage, { color: item.view === 'gainers' ? 'green' : 'red' }]}>
                  {item.view === 'gainers' ? `+(${item.changesPercentage})` : `(${item.changesPercentage})`}
                </Text>
            </View>
          </View>

          {chartData.length > 0 && (
            <View style={{ height: 220, width: '100%' }}>
              <LineChart.Provider data={chartData}>
                <LineChart height={200}>
                  <LineChart.Path
                    strokeWidth={2}
                    color={item.view === 'gainers' ? 'green' : 'red'}
                  />
                  <LineChart.CursorCrosshair />
                </LineChart>
              </LineChart.Provider>
            </View>
          )}

          <View style={styles.infoContainer}>
            <Text style={styles.heading}>Company Information:</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoTitle}>Market Cap:</Text>
              <Text style={styles.infoValue}>{stockInfo.map(data => data.mktCap)}</Text>

              <Text style={styles.infoTitle}>Exchange:</Text>
              <Text style={styles.infoValue}>{stockInfo.map(data => data.exchange)} ({stockInfo.map(data => data.exchangeShortName)})</Text>

              <Text style={styles.infoTitle}>Industry:</Text>
              <Text style={styles.infoValue}>{stockInfo.map(data => data.industry)}</Text>


              <Text style={styles.infoTitle}>CEO:</Text>
              <Text style={styles.infoValue}>{stockInfo.map(data => data.ceo)}</Text>

              <Text style={styles.infoTitle}>Sector:</Text>
              <Text style={styles.infoValue}>{stockInfo.map(data => data.sector)}</Text>

              </View>

              {/* // COMPANY DESCRIPTION */}

              <View style={styles.infoContainerDesc}>
                  <Text style={styles.infoTitle}>Company Description:</Text>
                  <Text style={styles.infoValue}>{stockInfo.map(data => data.description)}</Text>
              <View>

              {/* // CONTACT INFORMATION */}
              <Text style={styles.heading}>Contact Information:</Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>Country:</Text>
                <Text style={styles.infoValue}>{stockInfo.map(data => data.country)}</Text>

                <Text style={styles.infoTitle}>Phone:</Text>
                <Text style={styles.infoValue}>{stockInfo.map(data => data.phone)}</Text>

                <Text style={styles.infoTitle}>Address:</Text>
                <Text style={styles.infoValue}>
                  {stockInfo.map(data => data.address)},{stockInfo.map(data => data.city)}, {stockInfo.map(data => data.state)} {stockInfo.map(data => data.zip)}
                </Text>
              </View>
            </View>
          </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default DetailScreen_2;
