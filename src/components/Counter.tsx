import { useToast } from '@chakra-ui/react'
import { useCounter } from '../hooks/useCounter'
import styles from './Counter.module.css'

export function Counter() {
  const { count, increment } = useCounter()
  const toast = useToast()

  function handleIncrement() {
    increment()
    toast({
      position: 'top-right',
      duration: 3000,
      isClosable: true,
      render: () => (
        <div className={styles.toastContainer}>
          <div className={styles.toastBorder} />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="11"
              stroke="#74C898"
              strokeWidth="1.5"
            />
            <path
              d="M7.5 12L10.5 15L16.5 9"
              stroke="#74C898"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className={styles.toastContent}>
            <p className={styles.toastTitle}>Incremented</p>
            <p className={styles.toastDescription}>
              Counter is now {count + 1}
            </p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className={styles.counterContainer}>
      <p className={styles.counterText}>
        Current count {count}
      </p>
      <button
        className={styles.counterButton}
        onClick={handleIncrement}
      >
        <span>+</span>1
      </button>
    </div>
  )
}