import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import type { CounterContextType } from '../context/CounterContext'

export function useCounter(): CounterContextType {
    const context = useContext(CounterContext)

    if(context === null) {
        throw new Error('useCounter must be used within a CounterProvider')
    }

    return context
}