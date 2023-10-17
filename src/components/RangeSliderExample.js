// import React, { useState } from 'react';
// import { View, Text } from 'react-native';
// import Slider from '@react-native-community/slider';
// // const RangeSliderExample = () => {
// //     const [range, setRange] = useState([0, 50]);

// //     console.log(range);
// //     const onRangeChange = (values) => {
// //         setRange(values);
// //     };

// //     return (
// //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //             <Text>Range: {range[0]} - {range[1]}</Text>
// //             <Slider
// //                 style={{ width: 300, height: 40 }}
// //                 minimumValue={0}
// //                 maximumValue={100}
// //                 step={1}
// //                 values={range}
// //                 onValuesChange={onRangeChange}
// //                 minLabel={`Min: ${range[0]}`}
// //                 maxLabel={`Max: ${range[1]}`}
// //             />
// //         </View>
// //     );
// // };

// // export default RangeSliderExample;


// const RangeSlider = () => {
//     const [minValue, setMinValue] = useState(0);
//     const [maxValue, setMaxValue] = useState(100);

//     const onMinValueChange = (value) => {
//       setMinValue(value);
//     };

//     const onMaxValueChange = (value) => {
//       setMaxValue(value);
//     };

//     return (
//       <View>
//         <Text>Min Value: {minValue}</Text>
//         <Slider
//           style={{ width: 300, height: 40 }}
//           minimumValue={0}
//           maximumValue={100}
//           value={minValue}
//           onValueChange={onMinValueChange}
//         />

//         <Text>Max Value: {maxValue}</Text>
//         <Slider
//           style={{ width: 300, height: 40 }}
//           minimumValue={0}
//           maximumValue={100}
//           value={maxValue}
//           onValueChange={onMaxValueChange}
//         />
//       </View>
//     );
//   };

//   export default RangeSlider;


import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
const RangeSliderExample = () => {
    const [values, setValues] = useState([0, 1000]);

    const onValuesChange = (newValues) => {
        setValues(newValues);
    };

    return (
        <View>
            <Text>Range: {values[0]} - {values[1]}</Text>
            <MultiSlider
                values={values}
                sliderLength={300}
                min={0}
                max={1000}
                step={100}
                onValuesChange={onValuesChange}
                allowOverlap={false}
                snapped
            />
        </View>
    );
};

export default RangeSliderExample;
