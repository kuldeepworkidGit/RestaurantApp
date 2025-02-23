import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import IconSquareDot from '../../Assets/icons/IconSquareDot';
import RAText from '../RAText';
import IconStar from '../../Assets/icons/IconStar';
import {Font} from '../../Utils/Typography';
import {RAButton} from '../RAButton/RAButton';

const Img = require('../../Assets/images/pizza.jpg');
const str =
  'a dish made typically of flattened bread dough spread with a savory mixture usually including tomatoes and cheese and often other toppings and baked. called also pizza pie';
function DishItem(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View
        style={{width: '60%', backgroundColor: 'lightgrey', height: '100%'}}>
        <TitleComp />
        <RAText
          value="Farm house extra cheese Pizza"
          style={{fontFamily: Font.PoppinsBold, fontSize: 18}}
        />
        <PriceTagComp />
        <RatingComp />
        <RAText value={str.repeat(2)} style={{fontSize: 12}} />
      </View>
      <View
        style={{width: '40%', backgroundColor: 'grey', alignItems: 'center'}}>
        <Image source={Img} style={styles.image} />

        <RAButton
          title="Add"
          type='hollow'
          style={{
            paddingHorizontal: 30,
            paddingVertical: 8,
            marginTop: 10,
            marginBottom: 5,
          }}
        />
        <RAText
          value="Customisation"
          style={{fontSize: 12, textAlign: 'center'}}
        />
      </View>
    </View>
  );
}

const TitleComp = (): React.JSX.Element => {
  return (
    <View style={styles.titleContainer}>
      <IconSquareDot />
      <RAText value="Bestseller" />
    </View>
  );
};
const PriceTagComp = (): React.JSX.Element => {
  return (
    <View style={styles.titleContainer}>
      <RAText value="₹500 " style={{textDecorationLine: 'line-through'}} />
      <RAText value=" ₹200" />
    </View>
  );
};

const RatingComp = (): React.JSX.Element => {
  return (
    <View style={styles.titleContainer}>
      <IconStar />
      <RAText
        value="4.3"
        style={{fontFamily: Font.PoppinsBold, color: '#008000'}}
      />
      <RAText value="(845)" style={{fontSize: 12, color: 'grey'}} />
    </View>
  );
};

export default DishItem;
