declare module 'react-typewriter-effect' {
    import { FC } from 'react';

    interface TypewriterEffectProps {
        text: string | string[];
        cursor: string;
        typeSpeed?: number;
        deleteSpeed?: number;
        delay?: number;
        onComplete?: () => void;
        // Add other props as needed
    }

    const TypewriterEffect: FC<TypewriterEffectProps>;
    export default TypewriterEffect;
}
