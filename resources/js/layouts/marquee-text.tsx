import { cn } from '@/lib/utils';

interface MarqueeProps {
    text: string;
    speed?: number;
    direction?: 'left' | 'right';
    className?: React.ComponentProps<'div'>['className'];
}

export const Marquee = (props: MarqueeProps) => {
    const { text, speed = 10, direction = 'left', className } = props;

    const animationStyle = {
        animation: `marquee-${direction} ${speed}s linear infinite`,
        whiteSpace: 'nowrap',
        display: 'inline-block',
        paddingLeft: '100%', // Start off-screen
    };

    return (
        <div style={{ overflow: 'hidden', width: '100%' }}>
            <style>
                {`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
          }
        `}
            </style>
            <div style={animationStyle} className={cn(className)}>
                {text}
            </div>
        </div>
    );
};
