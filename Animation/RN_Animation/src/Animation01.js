/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Easing, Animated, StyleSheet, View, Text, Button } from 'react-native';

class AnimOne extends Component {
    constructor(){
        super();
        this.state = {
            // mySquare: new Animated.ValueXY(0, 0)
            mySquare: new Animated.Value(1)
        }
    }

    // componentDidMount() {
    //     Animated.spring(this.mySquare, {
    //         toValue: {x: 50, y: 300}
    //     }).start();
    // }

    // componentDidMount() {
    //     Animated.timing(this.mySquare, {
    //         toValue: {x: 50, y: 300},
    //         duration: 2000,
    //         delay: 1500,
    //         // easing: Easing.bounce
    //         easing: Easing.elastic(3)
    //     }).start();
    // }

    runAnimation = () => {
        Animated.timing(this.state.mySquare, {
            // toValue: {x: 50, y: 300},
            toValue: 0,
            duration: 2000,
            delay: 1500,
            // easing: Easing.bounce
            // easing: Easing.elastic(3)
        }).start();
    }

  render () {
    return (
        <View>
            <Animated.View
                //style={this.state.mySquare.getLayout()}
                // style={{
                //     left: this.mySquare.x,
                //     top: this.mySquare.y
                // }}

                style={{
                    opacity: this.state.mySquare,
                    transform: [
                        {
                        // translateY: this.state.mySquare.interpolate({
                        //     inputRange: [0, 1],
                        //     outputRange: [700, 0]
                        // })
                            rotateX: this.state.mySquare.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0deg', '180deg', '360deg']
                        }),
                        },
                        {
                            translateX: this.state.mySquare.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['300', '150', '0']
                            }),  
                        }]
                    // top: this.state.mySquare.interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: [700, 0]
                    // })    
                }}
            >
                <View style={styles.square}>
                </View>
            </Animated.View>
            
            <Animated.Text
                style={{
                    fontSize: this.state.mySquare.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [40, 30, 20]
                    }),
                    color: this.state.mySquare.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: ['red', 'green', 'blue']
                    }),
                }}
            >
                <Text>Animation Effects</Text>
            </Animated.Text>

            <Button
                title="Animation Start"
                onPress={this.runAnimation}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
  }
});

export default AnimOne;
