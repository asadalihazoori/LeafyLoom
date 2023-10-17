import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const ToggleButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: colors.grey200, true: colors.primaryGreen }}
                thumbColor={isEnabled ? colors.white : colors.white}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{
                    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], // Increase track size
                    // width: 52, // Decrease thumb width
                    // height: 46, // Decrease thumb height
                }}
             
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // borderWidth: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

export default ToggleButton;