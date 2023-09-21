import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';
import { Button, Toolbar } from 'react-native-ios-kit';



export default function About({navigation}) {
    const [data, setData] = useState();

    const addingData = () => {
        console.log("Started");
        setData(bookStore);
    }
    return (
        <View style={styles.container}>
            <Text>Welcome to the dashbaord</Text>
            <Button onPress={() => addingData()} style={styles.button}>Click Me!</Button>
       <Button onClick={() => addingData()}>show data</Button>

        {
            data && data.books.map((b, index) => {
                if(b.catory.toLowerCase() == 'java') {
                    return(
                    <View key={index}>
                    <Text>{b.title}</Text>
                    {
                        b.authors && b.authors.map((a, ind) => {
                            return (
                                <View key={ind}>
                                    <Text>{a}</Text>
                                    </View>
                            )
                        })
                    }
                    
                </View>
                    
                    )
                }
            })
        }
        </View>
    );
}
<Toolbar
  items={[
    {
      icon: 'ios-arrow-back',
      onPress: this.runAction,
    },
    {
      icon: 'ios-arrow-forward',
      onPress: this.runAction,
    },
    {
      icon: 'ios-refresh',
      onPress: this.runAction,
    },
    {
      icon: 'ios-share-outline',
      onPress: this.runAction,
      disabled: true,
    },
  ]}
/>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
