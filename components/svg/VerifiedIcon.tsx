import { Circle, Path, Svg, SvgProps } from 'react-native-svg';

export function VerifiedIcon(props: SvgProps) {
    return (
        <Svg width={14} height={14} fill='none' viewBox='0 0 48 48' {...props}>
            <Circle cx={24} cy={24} r={24} fill='#20D5EC' />
            <Path
                fill='#fff'
                fillRule='evenodd'
                d='M37.121 15.879a3 3 0 0 1 0 4.242l-13.5 13.5a3 3 0 0 1-4.242 0l-8.5-8.5a3 3 0 1 1 4.242-4.242l6.379 6.378L32.879 15.88a3 3 0 0 1 4.242 0Z'
                clipRule='evenodd'
            />
        </Svg>
    );
}
