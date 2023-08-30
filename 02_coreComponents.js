import React from "react";
import { View, Text, Image, ScrollView, Button, TextInput } from "react-native";

// View Component
const App = () =>
    // Replace `null` with the `View` component
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'red' }}>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
        </View>
    </View>

// Text Component
const App = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>The <Text style={{ fontWeight: 'bold' }}>quick brown fox</Text> jumps over the lazy dog</Text>
    </View>
);

// Image Component
const image = require('./react-native.jpg');

const App = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image
            source={image}
            style={{ width: 100, height: 100 }}
        />
    </View>
);

// ScrollView Component
const App = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
            Scroll me!
        </Text>
        <View style={{ height: 400, backgroundColor: '#e5e5e5' }}>
            {/* This is our scrollable area */}
            <ScrollView horizontal>
                <View style={{ width: 300, height: 300, backgroundColor: 'red' }} />
                <View style={{ width: 300, height: 300, backgroundColor: 'green' }} />
                <View style={{ width: 300, height: 300, backgroundColor: 'blue' }} />
            </ScrollView>
        </View>
    </View>
);

// Button Component
const App = () => {
    const [pressedCount, setPressedCount] = useState(0);

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{ margin: 16 }}>
                {pressedCount > 0
                    ? `The button was pressed ${pressedCount} times!`
                    : 'The button isn\'t pressed yet'
                }
            </Text>
            <Button
                title='Press me'
                onPress={() => setPressedCount(pressedCount + 1)}
                disabled={pressedCount >= 3}
            />
        </View>
    );
};

// TextInput Component
const App = () => {
    const [name, setName] = useState('');

    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
        }}>
            <Text style={{ marginVertical: 16 }}>
                {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={text => setName(text)}
                secureTextEntry
            />
        </View>
    );
};

// Combining Components
const App = () => (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <Box color="red" />
        <Box color="green" />
        <Box color="blue" />
    </View>
);

export const Box = (props) => (
    // Move a box `View` component here
    <View style={{ width: 100, height: 100, backgroundColor: props.color }} />
);

export default App;
