/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button, Modal } from 'react-native';


class ModalComponent extends Component {
  state = {
    modal: false
  }

  handleModal = () => {
    this.setState({
        modal: this.state.modal ? false : true
    })
  }

  render() {
    return (
        <View style={{width: '100%'}}>
            <Button
                title="Open Modal"
                onPress={this.handleModal}
            />

            <Modal
                visible={this.state.modal}
                animationType={'slide'} // slide fade
                onShow={()=>alert('Warning!!!')}
            >
                <View style={{
                    marginTop: 60,
                    backgroundColor: 'red'
                }}>
                    <Text>This is modal content</Text>
                </View>

                <Button
                    title="Go Back"
                    onPress={this.handleModal}
            />
            </Modal>
        </View>
    )
  }
}

export default ModalComponent;
