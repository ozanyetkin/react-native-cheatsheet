import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
    <View style={styles.layout}>
        <View style={styles.card} />
        <View style={styles.card} />
    </View>
);

export default App;

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        justifyContent: 'center',
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        margin: 16,
        borderRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        shadowOffset: { height: 1, width: 0.3 }
    },
});

// Combining styles
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const App = () => (
    <View style={styles.layout}>
        <Pressable>
            {(state) => <Box pressed={state.pressed} />}
        </Pressable>
    </View>
);

export default App;

export const Box = (props) => (
    <View style={[styles.box, props.pressed && { backgroundColor: 'blue' }]} />
);

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
});

// Flex(box)
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const App = () => (
    <View style={styles.layout}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
    </View>
);

export default App;

// Get the maximum width/height (in dp) from the Dimensions API
const MAX_WIDTH = Dimensions.get('window').width;
const MAX_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#e5e5e5',
    },
    box: {
        flex: 1,
        backgroundColor: 'black',
    },
});

// Flex Direction
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
    <View style={styles.layout}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
    </View>
);

export default App;

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#e5e5e5',
    },
    box: {
        flex: 1,
        backgroundColor: 'black',
    },
});

// Flex Justify Content
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => (
    <View style={styles.layout}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
    </View>
);

export default App;

export const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: '#e5e5e5',
    },
    box: {
        backgroundColor: 'black',
        height: 100
    },
});