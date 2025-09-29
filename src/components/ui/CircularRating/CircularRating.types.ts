export interface CircularRatingProps {
    value: number;
    maxValue?: number;
    size?: number;
    strokeWidth?: number;
    showValue?: boolean;
    className?: string;
    showText?: boolean;
}

export type RatingColor = 'excellent' | 'good' | 'average' | 'poor' | 'critical';