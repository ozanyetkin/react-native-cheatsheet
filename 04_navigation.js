import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FeedScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>First screen</Text>
    </View>
);

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});

// Tab Navigation
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const FeedScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Feed</Text>
    </View>
);

const CatalogScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Catalog</Text>
    </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Catalog" component={CatalogScreen} />
    </Tab.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});

// Programmatic Navigation
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FeedScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Feed</Text>
            <Button
                title="Go to catalog"
                onPress={() => navigation.navigate('Catalog')}
            />
        </View>
    );
};

const CatalogScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Catalog</Text>
    </View>
);

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
    </Stack.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});

// Nested Navigation
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const OverviewScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Overview</Text>
    </View>
);

const ProfileNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Overview" component={OverviewScreen} />
    </Stack.Navigator>
);

// Add the new stack navigator above this line

const FeedScreen = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Feed</Text>
    </View>
);

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
);

const App = () => (
    <NavigationContainer>
        <AppNavigator />
    </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});

// Authentication Flow
import React, { createContext, useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Our global authentication state, with default values
export const AuthContext = createContext({
    hasUser: false,
    setUser: () => { },
});

const LoginScreen = () => {
    const { setUser } = useContext(AuthContext);

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Login</Text>
            <Button title="login" onPress={() => setUser(true)} />
        </View>
    );
};

const FeedScreen = () => {
    const { setUser } = useContext(AuthContext);

    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Feed</Text>
            <Button title="logout" onPress={() => setUser(false)} />
        </View>
    );
};

const Stack = createStackNavigator();

export const AppNavigator = () => {
    const { hasUser } = useContext(AuthContext);

    return (
        <Stack.Navigator>
            {hasUser
                ? <Stack.Screen name="Feed" component={FeedScreen} />
                : <Stack.Screen name="Login" component={LoginScreen} />
            }
        </Stack.Navigator>
    );
};

const App = () => {
    // This is linked to our global authentication state.
    // We connect this in React to re-render components when changing this value.
    const [hasUser, setUser] = useState(false);

    return (
        <AuthContext.Provider value={{ hasUser, setUser }}>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default App;

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});

