export type TimerFormat = 'mm:ss' | 'hh:mm:ss';
export type TimerSize = 'sm' | 'md' | 'lg';

export interface TimerDisplayProps {
    seconds: number;
    format?: TimerFormat;
    size?: TimerSize;
    showLabels?: boolean;
    label?: string;
    className?: string;
}