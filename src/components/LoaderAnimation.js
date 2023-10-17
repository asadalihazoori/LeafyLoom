import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

// Your JSON animation data
const animationData = {"v":"5.6.6","ip":0,"op":80,"fr":60,"w":60,"h":60,"layers":[{"ind":1516,"nm":"surface4877","ao":0,"ip":0,"op":80,"st":0,"ty":4,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.83],"y":[1]},"o":{"x":[0.17],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.53],"y":[1]},"o":{"x":[0.6],"y":[0]},"t":11,"s":[-10]},{"i":{"x":[0.83],"y":[1]},"o":{"x":[0.17],"y":[0]},"t":65,"s":[365]},{"i":{"x":[0.83],"y":[1]},"o":{"x":[0.17],"y":[0]},"t":77,"s":[358]},{"t":85,"s":[360]}],"ix":10},"p":{"a":0,"k":[30,30],"ix":2},"a":{"a":0,"k":[22.5,22.5],"ix":1},"s":{"a":0,"k":[133.33,133.33],"ix":6}},"shapes":[{"ty":"gr","hd":false,"nm":"surface4877","it":[{"ty":"gr","hd":false,"it":[{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.84,-0.84],[0,-1.2],[0.84,-0.84],[1.2,0],[0.84,0.84],[0,1.2],[-0.84,0.84],[-1.2,0]],"o":[[1.2,0],[0.84,0.84],[0,1.2],[-0.84,0.84],[-1.2,0],[-0.84,-0.84],[0,-1.2],[0.84,-0.84],[0,0]],"v":[[24.75,36],[27.93,37.32],[29.25,40.5],[27.93,43.68],[24.75,45],[21.57,43.68],[20.25,40.5],[21.57,37.32],[24.75,36]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.05,-1.05],[0,-1.49],[1.05,-1.05],[1.49,0],[1.05,1.05],[0,1.49],[-1.05,1.05],[-1.49,0]],"o":[[1.49,0],[1.05,1.05],[0,1.49],[-1.05,1.05],[-1.49,0],[-1.05,-1.05],[0,-1.49],[1.05,-1.05],[0,0]],"v":[[10.67,29.25],[14.64,30.9],[16.29,34.88],[14.64,38.85],[10.67,40.5],[6.69,38.85],[5.04,34.88],[6.69,30.9],[10.67,29.25]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.84,-0.84],[0,-1.2],[0.84,-0.84],[1.19,0],[0.84,0.84],[0,1.2],[-0.84,0.84],[-1.2,0]],"o":[[1.19,0],[0.84,0.84],[0,1.2],[-0.84,0.84],[-1.2,0],[-0.84,-0.84],[0,-1.2],[0.84,-0.84],[0,0]],"v":[[36.72,30.38],[39.9,31.69],[41.22,34.88],[39.9,38.06],[36.72,39.38],[33.54,38.06],[32.22,34.88],[33.54,31.69],[36.72,30.38]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.63,-0.63],[0,-0.89],[0.63,-0.63],[0.89,0],[0.63,0.63],[0,0.89],[-0.63,0.63],[-0.89,0]],"o":[[0.89,0],[0.63,0.63],[0,0.89],[-0.63,0.63],[-0.89,0],[-0.63,-0.63],[0,-0.89],[0.63,-0.63],[0,0]],"v":[[41.62,20.97],[44.01,21.96],[45,24.34],[44.01,26.73],[41.62,27.72],[39.24,26.73],[38.25,24.34],[39.24,21.96],[41.62,20.97]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.05,-1.05],[0,-1.49],[1.05,-1.05],[1.49,0],[1.05,1.05],[0,1.49],[-1.05,1.05],[-1.49,0]],"o":[[1.49,0],[1.05,1.05],[0,1.49],[-1.05,1.05],[-1.49,0],[-1.05,-1.05],[0,-1.49],[1.05,-1.05],[0,0]],"v":[[5.62,13.5],[9.6,15.15],[11.25,19.12],[9.6,23.1],[5.62,24.75],[1.65,23.1],[0,19.12],[1.65,15.15],[5.62,13.5]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.42,-0.42],[0,-0.6],[0.42,-0.42],[0.59,0],[0.42,0.42],[0,0.6],[-0.42,0.42],[-0.6,0]],"o":[[0.59,0],[0.42,0.42],[0,0.6],[-0.42,0.42],[-0.6,0],[-0.42,-0.42],[0,-0.6],[0.42,-0.42],[0,0]],"v":[[40.02,11.71],[41.61,12.38],[42.27,13.96],[41.61,15.56],[40.02,16.21],[38.43,15.56],[37.77,13.96],[38.43,12.38],[40.02,11.71]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-1.27,-1.27],[0,-1.79],[1.27,-1.27],[1.79,0],[1.27,1.27],[0,1.79],[-1.27,1.27],[-1.79,0]],"o":[[1.79,0],[1.27,1.27],[0,1.79],[-1.27,1.27],[-1.79,0],[-1.27,-1.27],[0,-1.79],[1.27,-1.27],[0,0]],"v":[[18,0],[22.77,1.98],[24.75,6.75],[22.77,11.52],[18,13.5],[13.23,11.52],[11.25,6.75],[13.23,1.98],[18,0]],"c":true}}},{"ty":"sh","ks":{"k":{"i":[[0,0],[-0.21,-0.21],[0,-0.3],[0.21,-0.21],[0.3,0],[0.21,0.21],[0,0.3],[-0.21,0.21],[-0.3,0]],"o":[[0.3,0],[0.21,0.21],[0,0.3],[-0.21,0.21],[-0.3,0],[-0.21,-0.21],[0,-0.3],[0.21,-0.21],[0,0]],"v":[[34.88,6.75],[35.67,7.08],[36,7.88],[35.67,8.67],[34.88,9],[34.08,8.67],[33.75,7.88],[34.08,7.08],[34.88,6.75]],"c":true}}},{"ty":"gf","s":{"k":[45,45]},"e":{"k":[-8.55,29.47]},"t":1,"h":{"k":0},"a":{"k":0},"g":{"p":2,"k":{"k":[0,0,0.72,0.39,1,0.08,0.9,0.52,0,1,1,1]}},"hd":false,"o":{"k":100}},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]},{"ty":"tr","o":{"k":100},"r":{"k":0},"p":{"k":[0,0]},"a":{"k":[0,0]},"s":{"k":[100,100]},"sk":{"k":0},"sa":{"k":0},"hd":false}]}]}],"meta":{"g":"LF SVG to Lottie"}}

function LoaderAnimation() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <LottieView
                source={animationData}
                autoPlay
                loop
                // You can add more props and styles as needed
                style={{ width: 50, height: 50 }}
            />
        </View>
    );
}

export default LoaderAnimation;