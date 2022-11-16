import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

function SwipesColor(props) {
  return (
    <Svg
      width={38}
      height={30}
      viewBox="0 0 38 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M13.423 6.005c4.881 2.782 7.335 11.868 6.21 12.797-1.126.929-4.695-6.252-8.061-7.724 0 0-.57 3.6-1.178 3.6C7.804 13.387 4.67 5.35 4.67 5.35s7.587-3.077 9.93-2.618c.519.36-1.178 3.273-1.178 3.273z"
        fill="url(#paint0_linear_151_165)"
      />
      <Path
        d="M20.154 10.748C9.638 14.353 3.827 24.66 5.005 26.623c2.524 1.145 9.593-4.747 17.504-6.712 0 0 .729 6.067 1.682 5.564 4.433-4.244 10.772-14.236 10.772-14.236s-13.82-5.73-15.65-5.73c-1.536-.295.84 5.238.84 5.238z"
        fill="url(#paint1_linear_151_165)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_151_165"
          x1={6.03094}
          y1={4.85896}
          x2={21.3195}
          y2={15.9951}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#E63737" />
          <Stop offset={1} stopColor="#FF9191" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_151_165"
          x1={34.1352}
          y1={10.0909}
          x2={4.19391}
          y2={28.1449}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#3CC563" />
          <Stop offset={1} stopColor="#84E4A0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SwipesColor;
