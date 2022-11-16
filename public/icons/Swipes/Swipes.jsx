import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Swipes = ({stroke}) => {
  return (
    <Svg width={37} height={30} viewBox="0 0 37 30" fill="none">
      <Path
        d="M12.43 6.437l-.434-.246.252-.433h0v-.001l.004-.006.013-.023a20.474 20.474 0 00.745-1.43c.176-.38.325-.746.4-1.027l.02-.085c-.486-.02-1.177.07-2.008.248-1.017.219-2.166.555-3.253.908a67.714 67.714 0 00-3.585 1.284 50.748 50.748 0 001.684 3.675c.548 1.076 1.17 2.179 1.81 3.087.531.755 1.043 1.33 1.5 1.658.016-.034.033-.073.05-.116a8.64 8.64 0 00.354-1.165 23.664 23.664 0 00.328-1.612l.019-.11.004-.03.002-.007v-.001h0l.102-.646.599.262c1.11.486 2.193 1.505 3.169 2.6l.27.304.196-.108.134-.073c.485-.268 1.005-.554 1.473-.788.306-.154.573-.293.8-.419l-.098-.205c-1.09-2.264-2.646-4.41-4.55-5.495zm1.025-3.46l.001.007a.03.03 0 000-.006zm-3.99 11.265a.046.046 0 00-.01.01l.01-.01z"
        stroke={stroke}
      />
      <Path
        d="M33.436 11.455l.04.016a156.494 156.494 0 01-3.389 5.006c-2.056 2.912-4.603 6.282-6.732 8.39a2.68 2.68 0 01-.106-.233c-.185-.453-.358-1.127-.508-1.849a36.837 36.837 0 01-.444-2.675l-.024-.189-.007-.049-.001-.012v-.003h0v-.001l-.069-.566-.553.137c-3.863.96-7.519 2.838-10.512 4.375l-.367.188c-1.543.792-2.882 1.467-3.99 1.877-.553.204-1.026.334-1.423.383a1.97 1.97 0 01-.71-.02c-.03-.131-.041-.335 0-.632.06-.42.215-.956.477-1.581.522-1.248 1.44-2.794 2.728-4.403 2.575-3.217 6.583-6.63 11.732-8.395l.506-.173-.211-.492h0l-.002-.003-.004-.011-.02-.045-.07-.171c-.061-.148-.147-.36-.245-.613a25.51 25.51 0 01-.636-1.832c-.2-.669-.334-1.275-.34-1.678a1.199 1.199 0 01.01-.191h.01c.147 0 .497.067 1.06.227.54.153 1.22.373 1.992.64a157.83 157.83 0 015.276 1.963 376.71 376.71 0 016.532 2.615zm-9.963 13.592l.002.001-.002-.001z"
        stroke={stroke}
      />
    </Svg>
  );
};

export default Swipes;
