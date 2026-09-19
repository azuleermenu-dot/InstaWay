import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const quickPlaces = ['Home', 'School', 'Work'];

export default function HomeScreen() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>PHILIPPINE COMMUTE</Text>
            <Text style={styles.title}>InstaWay</Text>
          </View>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>I</Text>
          </View>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Where are you going?</Text>
          <Text style={styles.heroSubtitle}>
            Find practical public-transport routes from A to B.
          </Text>

          <View style={styles.searchCard}>
            <View style={styles.fieldRow}>
              <View style={[styles.dot, styles.originDot]} />
              <TextInput
                value={origin}
                onChangeText={setOrigin}
                placeholder="Your location"
                placeholderTextColor="#8A93A3"
                style={styles.input}
                returnKeyType="next"
              />
            </View>

            <View style={styles.connector} />

            <View style={styles.fieldRow}>
              <View style={[styles.dot, styles.destinationDot]} />
              <TextInput
                value={destination}
                onChangeText={setDestination}
                placeholder="Destination"
                placeholderTextColor="#8A93A3"
                style={styles.input}
                returnKeyType="search"
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.routeButton,
                pressed && styles.pressed,
              ]}
              onPress={() => {}}
            >
              <Text style={styles.routeButtonText}>Find a route</Text>
              <Text style={styles.routeArrow}>→</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Quick places</Text>
          <Text style={styles.sectionHint}>Soon</Text>
        </View>

        <View style={styles.chips}>
          {quickPlaces.map((place) => (
            <Pressable
              key={place}
              style={({ pressed }) => [styles.chip, pressed && styles.pressed]}
              onPress={() => setDestination(place)}
            >
              <Text style={styles.chipIcon}>●</Text>
              <Text style={styles.chipText}>{place}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Your commute, simplified.</Text>
          <Text style={styles.infoText}>
            InstaWay will combine routes, transfers, stops and estimated fares
            into one clear trip plan.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F7F8FA' },
  container: { padding: 22, paddingBottom: 40 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: '#697386',
  },
  title: {
    marginTop: 4,
    fontSize: 30,
    fontWeight: '800',
    color: '#101828',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#101828',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#FFFFFF', fontWeight: '800', fontSize: 16 },
  hero: { marginBottom: 30 },
  heroTitle: {
    fontSize: 27,
    lineHeight: 33,
    fontWeight: '800',
    color: '#101828',
  },
  heroSubtitle: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 22,
    color: '#697386',
  },
  searchCard: {
    marginTop: 20,
    padding: 16,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7EAF0',
  },
  fieldRow: { flexDirection: 'row', alignItems: 'center', minHeight: 48 },
  dot: { width: 12, height: 12, borderRadius: 6, marginHorizontal: 5 },
  originDot: { backgroundColor: '#22A06B' },
  destinationDot: { backgroundColor: '#E5484D' },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: '#101828',
    paddingVertical: 8,
  },
  connector: {
    width: 1,
    height: 16,
    marginLeft: 10,
    backgroundColor: '#D9DEE8',
  },
  routeButton: {
    marginTop: 14,
    minHeight: 52,
    borderRadius: 15,
    backgroundColor: '#101828',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
  routeArrow: {
    marginLeft: 10,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  pressed: { opacity: 0.75 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: { fontSize: 18, fontWeight: '750', color: '#101828' },
  sectionHint: { fontSize: 12, color: '#98A2B3' },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 13 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E7EAF0',
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 14,
  },
  chipIcon: { fontSize: 8, color: '#667085', marginRight: 8 },
  chipText: { color: '#344054', fontWeight: '650' },
  infoCard: {
    marginTop: 30,
    padding: 18,
    borderRadius: 20,
    backgroundColor: '#EEF2F7',
  },
  infoTitle: { fontSize: 16, fontWeight: '750', color: '#101828' },
  infoText: {
    marginTop: 7,
    fontSize: 14,
    lineHeight: 21,
    color: '#667085',
  },
});
