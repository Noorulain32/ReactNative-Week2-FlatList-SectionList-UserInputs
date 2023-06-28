import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
    {
      title: 'Sectionlist',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const Separator = () => <View style={menuStyles.separator} />;

const Footer = () => (
  <Text style={menuStyles.footerText}>
    All Rights Reserved by Little Lemon 2022
  </Text>
);

const SectionCom = () => {
    //renderItem takes an item from the data array and renders an Item component with the item's name.
 // Inside the SectionCom component

const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

//renderSectionHeader takes a section's title and renders a Text component with the title.
  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.sectionHeader}>{title} </Text>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        keyExtractor={(item, index) => item + index} //keyExtractor is used to generate unique keys for each item in the list.
        sections={menuItemsToDisplay} //sections is set to the menuItemsToDisplay array.
        //renderItem and renderSectionHeader are used to specify the rendering of items and section headers, respectively.
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer} //ListFooterComponent is set to the Footer component to render the footer text.
        //temSeparatorComponent is set to the Separator component to render the separator between items.
        ItemSeparatorComponent={Separator}></SectionList>
    </View>
  );
};

// Add styles to the component
const menuStyles = StyleSheet.create({
  container: {
    flex: 0.95,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: 'green',
  },
  sectionHeader: {
    backgroundColor: 'white',
    color: 'red',
    fontSize: 34,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: 32,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  footerText: {
    color: '#EDEFEE',
    backgroundColor: 'black',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default SectionCom;
