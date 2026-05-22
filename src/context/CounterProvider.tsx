import { useState } from 'react'
import type { ReactNode } from 'react'
import { CounterContext } from './CounterContext'

interface CounterProviderProps {
    children: ReactNode
}

export function CounterProvider({ children }: CounterProviderProps) {
    const [count, setCount] = useState<number>(0)

    function increment() {
        setCount(count + 1)
    }

    return (
        <CounterContext.Provider value={{ count, increment }}>
            {children}
        </CounterContext.Provider>
    )
}