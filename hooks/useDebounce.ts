import { useEffect, useState } from 'react';

type UseDebounceProps = {
    delay: 200 | 500;
    initialValue: string;
};

export default function useDebounce({ initialValue, delay }: UseDebounceProps) {
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() => {
        const timeOutHandler = setTimeout(() => {
            setDebouncedValue(initialValue.trim().toLowerCase());
        }, delay);

        return () => clearTimeout(timeOutHandler);
    }, [initialValue, delay]);

    return debouncedValue;
}
