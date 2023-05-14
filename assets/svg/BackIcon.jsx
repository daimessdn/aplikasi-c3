import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function BackIcon(props) {
  return (
    <Svg
    width="36px"
    height="36px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style}
      {...props}
    >
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 12h10M7 12l4-4m-4 4l4 4"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BackIcon
