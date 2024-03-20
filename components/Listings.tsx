import { View, Text, FlatList, ListRenderItem, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';

interface Props {
  listings: any[];
  category: string;
}

const Listings = ( {listings: items, category}: Props ) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log('RELOAD LISTINGS', items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200)

  }, [category])

  const renderRow: ListRenderItem<any> = ({item}) => (
    <Link href={`/listing/${item.id}`}>
      <TouchableOpacity>
        <View style={styles.listing}>
        <Image source={{uri: item.medium_url}}/>
        </View>
      </TouchableOpacity>
    </Link>
  
  )
  
  return (
    <View style={defaultStyles.container}>
      
      <FlatList 
      renderItem={renderRow}
      ref={listRef}
      data={loading ? [] : items}

        />
    </View>
  )
}

const styles = StyleSheet.create({
  listing: {
    padding: 16
  }
})

export default Listings