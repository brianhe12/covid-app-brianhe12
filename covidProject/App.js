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
      worldTotal: {
        TotalConfirmed: "0",
        TotalDeaths: "0",
        TotalRecovered: "0",
      },
      date:"09-04-2020",
      latitude: null,
      longitude: null,
      markers: [{
        title: 'United States of America',
        key: 0,
        slug: "united-states",
        coordinates: {
          latitude: 39.381266,
          longitude: -97.922211
        },
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Canada',
        key: 1,
        slug: "canada",
        coordinates: {
          latitude: 55.585901,
          longitude: -105.750596
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Brazil',
        key: 2,
        slug: "brazil",
        coordinates: {
          latitude: -14.235004,
          longitude: -51.92528
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Mexico',
        key: 3,
        slug: "mexico",
        coordinates: {
          latitude: 23.634501,
          longitude: -102.552784
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Guatemala',
        key: 4,
        slug: "guatemala",
        coordinates: {
          latitude: 15.783471,
          longitude: -90.230759
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Argentina',
        key: 5,
        slug: "argentina",
        coordinates: {
          latitude: -38.416097,
          longitude: -63.616672
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Cuba',
        key: 6,
        slug: "cuba",
        coordinates: {
          latitude: 21.521757,
          longitude: -77.781167
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Chile',
        key: 7,
        slug: "chile",
        coordinates: {
          latitude: -35.675147,
          longitude: -71.542969
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Peru',
        key: 8,
        slug: "peru",
        coordinates: {
          latitude: -9.189967,
          longitude: -75.015152
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Uruguay',
        key: 9,
        slug: "uruguay",
        coordinates: {
          latitude: -32.522779,
          longitude: -55.765835
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Paraguay',
        key: 10,
        slug: "paraguay",
        coordinates: {
          latitude: -23.442503,
          longitude: -58.443832
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Bolivia',
        key: 11,
        slug: "bolivia",
        coordinates: {
          latitude: -16.290154,
          longitude: -63.588653
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Colombia',
        key: 12,
        slug: "colombia",
        coordinates: {
          latitude: 	4.570868,
          longitude: -74.297333
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Ecuador',
        key: 13,
        slug: "ecuador",
        coordinates: {
          latitude: -1.831239,
          longitude: -78.183406
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Venezuela',
        key: 14,
        slug: "venezuela",
        coordinates: {
          latitude: 6.42375,
          longitude: -66.58973
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Guyana',
        key: 15,
        slug: "guyana",
        coordinates: {
          latitude: 4.860416,
          longitude: -58.93018
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'South Africa',
        key: 16,
        slug: "south-africa",
        coordinates: {
          latitude: -30.559482,
          longitude: 22.937506
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Egypt',
        key: 17,
        slug: "egypt",
        coordinates: {
          latitude: 26.820553,
          longitude: 30.802498
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Central African Republic',
        key: 18,
        slug: "central-african-republic",
        coordinates: {
          latitude: 6.611111,
          longitude: 20.939444
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Mauritania',
        key: 19,
        slug: "mauritania",
        coordinates: {
          latitude: 21.00789,
          longitude: -10.940835
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Portugal',
        key: 20,
        slug: "portugal",
        coordinates: {
          latitude: 39.399872,
          longitude: -8.224454
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Iraq',
        key: 21,
        slug: "iraq",
        coordinates: {
          latitude: 33.223191,
          longitude: 43.679291
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'India',
        key: 22,
        slug: "india",
        coordinates: {
          latitude: 20.593684,
          longitude: 78.96288
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'China',
        key: 23,
        slug: "china",
        coordinates: {
          latitude: 35.86166,
          longitude: 104.195397
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Russia',
        key: 24,
        slug: "russia",
        coordinates: {
          latitude: 61.52401,
          longitude: 105.318756
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Japan',
        key: 25,
        slug: "japan",
        coordinates: {
          latitude: 36.204824,
          longitude: 138.252924
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Korea (South)',
        key: 26,
        slug: "korea-south",
        coordinates: {
          latitude: 35.907757,
          longitude: 127.766922
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Myanmar',
        key: 27,
        slug: "myanmar",
        coordinates: {
          latitude: 21.913965,
          longitude: 95.956223
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Thailand',
        key: 28,
        slug: "thailand",
        coordinates: {
          latitude: 15.870032,
          longitude: 100.992541
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Malaysia',
        key: 29,
        slug: "malaysia",
        coordinates: {
          latitude: 4.210484,
          longitude: 101.975766
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Indonesia',
        key: 30,
        slug: "indonesia",
        coordinates: {
          latitude: -0.789275,
          longitude: 113.921327
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Papua New Guinea',
        key: 31,
        slug: "papua-new-guinea",
        coordinates: {
          latitude: -6.314993,
          longitude: 143.95555
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
      {
        title: 'Australia',
        key: 32,
        slug: "australia",
        coordinates: {
          latitude: -25.274398,
          longitude: 133.775136
        },  
        coronavirus: {
          Confirmed: "0",
          Deaths: "0",
          Recovered: "0",
        }
      },
    
    ]
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress(country,key) { 
    var newDate = this.state.date.slice(6,10) + '-' + this.state.date.slice(3,5) + '-' + this.state.date.slice(0,2)
    
    fetch('https://api.covid19api.com/total/country/' + country, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
          // Iterate JSON to find the one corresponding to our date
          for(var i = 0; i < responseJson.length; i++) {
            var obj = responseJson[i];
            // Match found - Proceed to update entry
            if (obj.Date.slice(0,10) == newDate){
              // Update coronavirus state for specific country (identified by key)
              const newIds = this.state.markers.slice() //copy the array
              newIds[key].coronavirus.Confirmed = obj.Confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              newIds[key].coronavirus.Deaths = obj.Deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              newIds[key].coronavirus.Recovered = obj.Recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              this.setState({markers: newIds})
            }
        }
      })  
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
    
    //Initalize cases
    for(var i = 0; i < this.state.markers.length; i++) {
      var obj = this.state.markers[i];
      this.handlePress(obj.slug,obj.key)
    }

    fetch('https://api.covid19api.com/world/total', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
          responseJson.TotalConfirmed = responseJson.TotalConfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          responseJson.TotalDeaths = responseJson.TotalDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          responseJson.TotalRecovered = responseJson.TotalRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          this.setState({worldTotal: responseJson})
      })  

    ToastAndroid.show("Stay Home, Stay Safe!", ToastAndroid.SHORT);
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
            latitudeDelta: 100,
            longitudeDelta: 100,
            }}
            style={{ flex: 1}}
            showsUserLocation>
            {this.state.markers.map(marker => (
              <MapView.Marker
                // onPress={() => this.handlePress(marker.slug,marker.key)}
                coordinate={marker.coordinates}
                pinColor={'turquoise'}
                opacity={0.85}>
                  <MapView.Callout>
                  <View style={styles.marker}>
                    <Text style={{fontWeight: 'bold',fontFamily: 'sans-serif-light'}}> {marker.title}</Text>
                    <Text style={{fontFamily: 'sans-serif-light'}}> Confirmed: {marker.coronavirus.Confirmed} </Text>
                    <Text style={{fontFamily: 'sans-serif-light'}}> Deaths: {marker.coronavirus.Deaths}</Text>
                    <Text style={{fontFamily: 'sans-serif-light'}}> Recovered: {marker.coronavirus.Recovered}</Text>
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
            //Reinitalize cases for picked date
            for(var i = 0; i < this.state.markers.length; i++) {
              var obj = this.state.markers[i];
              this.handlePress(obj.slug,obj.key)
            }
          }}
        />
        <View
        style={{
          width: 300,
          position: 'absolute',
          top: 50,
          left: 20,
        }}>
          <Text style={styles.worldTotal}>World Total</Text>
          <Text style={styles.labelText}>Confirmed: </Text>
          <Text style={styles.labelText}>Deaths: </Text>
          <Text style={styles.labelText}>Recovered: </Text>
        </View>
        <View
        style={{
          width: 300,
          position: 'absolute',
          top: 96,
          left: 110,
        }}>
          <Text style={{fontFamily: 'sans-serif-light',color: 'darkslategrey ',fontWeight: 'bold'}}>{this.state.worldTotal.TotalConfirmed}</Text>
          <Text style={{fontFamily: 'sans-serif-light',color: 'crimson',fontWeight: 'bold'}}>{this.state.worldTotal.TotalDeaths}</Text>
          <Text style={{fontFamily: 'sans-serif-light',color: 'darkgreen',fontWeight: 'bold'}}>{this.state.worldTotal.TotalRecovered}</Text>
        </View>
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
    height: 100,
    width: 200,
    padding: 5,
  },
  labelText: {
    fontFamily: 'sans-serif-light',
  },
  worldTotal: {
    fontFamily: 'sans-serif-light',
    fontSize: 30,
  }
});