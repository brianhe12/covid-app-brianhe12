import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import { ToastAndroid } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date:"15-05-2020",
      latitude: null,
      longitude: null,
      testing: 100,
      markers: [{
        title: 'United States of America',
        slug: "united-states",
        coordinates: {
          latitude: 39.381266,
          longitude: -97.922211
        },
        coronavirus: {
          Confirmed: "739,988",
          Deaths: "38,928",
          Recovered: "66,357",
        }
      },
      {
        title: 'Canada',
        slug: "canada",
        coordinates: {
          latitude: 55.585901,
          longitude: -105.750596
        },  
        coronavirus: {
          Confirmed: "120,302",
          Deaths: "203,102",
          Recovered: "480,102",
        }
      }]
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(country) { 
    //TODO: fetch coronavirus data for a specific country and update state accordingly
    ToastAndroid.show(country, ToastAndroid.SHORT);
    const newIds = this.state.markers.slice() //copy the array
    newIds[0].coronavirus.Confirmed = "0"
    this.setState({markers: newIds})
  }

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION)

    if (status !== 'granted') {
      const response = await Permissions.askAsync(Permissions.LOCATION)
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => this.setState({ latitude, longitude },),
      (error) => console.log('Error:', error)
    )

    console.log(this.state.testing)
    ToastAndroid.show('Pikachu', ToastAndroid.SHORT);
  }
  
  render() {
    const { latitude, longitude } = this.state
    if (latitude) {
      return (
        <View style={{ flex: 1}}>
          <MapView
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 1,
            longitudeDelta: 1,
          }}
          style={{ flex: 1}}
          showsUserLocation
          >
            {this.state.markers.map(marker => (
              <MapView.Marker
                onPress={() => this.handlePress(marker.slug)}
                coordinate={marker.coordinates}
                pinColor={'turquoise'}>
                  <MapView.Callout>
                  <View style={styles.marker}>
                    <Text style={{fontWeight: 'bold'}}> {marker.title}</Text>
                    <Text> Confirmed: {marker.coronavirus.Confirmed} </Text>
                    <Text> Deaths: {marker.coronavirus.Deaths}</Text>
                    <Text> Recovered: {marker.coronavirus.Recovered}</Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker> 
            ))}
          </MapView>
          <DatePicker
          style={{
            width: 250, 
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="22-01-2020"
          maxDate="18-04-2020"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={(date) => {
            this.setState({date: date})
          }}
        />
        </View>
      );
    }
    else {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>We need your location permission!</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: 90,
    width: 200,
  }
});