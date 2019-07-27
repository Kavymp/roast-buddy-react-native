//@flow
import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { Icon } from "../components";

class SearchBar extends React.Component {
  onFocus() {
    this.refs.searchBar.blur();
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="search" color="#bbb" />
        <TextInput
          ref="searchBar"
          placeholder={this.props.placeholder}
          underlineColorAndroid="transparent"
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          returnKeyType="search"
          style={styles.text}
          onSubmitEditing={this.props.onSearchButtonPress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    height: 55,
    margin: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  text: {
    fontSize: 17,
    flex: 1,
    paddingLeft: 16
  }
});

export default SearchBar;
