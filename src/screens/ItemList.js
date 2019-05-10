import React, { Component } from "react";
import { View, TextInput, Button, Text, FlatList } from "react-native";

class ItemList extends Component {
  state = {
    item: [],
    showName: false,
    text: ""
  };
  buttonClickListner = e => {
    const { text, item } = this.state;
    item.push(text.toString());
    this.setState({
      text: ""
    });
  };

  SearchFilter(txt) {
    const { item, text } = this.state;
    const newData = item.filter(function(itm) {
      const itemData = itm.title ? itm.title.toUpperCase() : "".toUpperCase();
      const textData = txt.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      item: newData,
      text: text
    });
  }

  render() {
    const { item, text } = this.state;
    return (
      <View style={{ padding: 10 }}>
        <View>
          <TextInput
            style={{ height: 100 }}
            placeholder="Enter Item Names"
            onChangeText={val => this.setState({ text: val })}
            value={text}
          />
          <Button
            onPress={this.buttonClickListner}
            title="Submit"
            color="#008000"
          />
        </View>

        {item.length > 0 ? (
          <View style={{ height: 80 }}>
            <Text style={{ height: 30 }}>Search Items :</Text>
            {/* <TextInput placeholder="Search Name" /> */}
            <TextInput
              onChangeText={txt => this.SearchFilter(txt)}
              value={text}
              placeholder="Search Here"
            />
            <FlatList
              data={item}
              ItemSeparatorComponent={this.listViewItemSeperator}
              renderItem={({ obj, k }) => <Text key={k}> {obj}</Text>}
              enableEmptySections={true}
              keyExtractor={(obj, index) => index}
            />
          </View>
        ) : null}

        <View style={{ height: 50 }}>
          {item.length > 0
            ? item.map((obj, k) => <Text key={k}>{obj}</Text>)
            : null}
        </View>
      </View>
    );
  }
}

export default ItemList;
