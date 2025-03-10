


import Svg, { Path } from "react-native-svg";

export default function ChevronRight({ width = 12, height = 12 }): JSX.Element {
    return (
        <Svg width={width} height={height} viewBox="0 0 12 20" fill="none">
            <Path d="M0.917806 0.86965C0.413562 1.36508 0.41358 2.17772 0.917847 2.67313L8.37852 10.0027L0.919165 17.331C0.415656 17.8257 0.415655 18.6371 0.919164 19.1318C1.40989 19.6139 2.19631 19.6142 2.68747 19.1326L12 10L2.68887 0.868819C2.19694 0.386395 1.40928 0.386764 0.917806 0.86965Z" fill="#FAFAFA" />
        </Svg>
    );
}