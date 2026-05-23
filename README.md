# Yendou Counter

A React TypeScript counter application built as a take-home assignment for Yendou.

## What it does

- Displays a counter starting at zero
- Increments the counter on each button click
- Shows a toast notification with the updated count on each click
- Global state managed through React Context and a custom hook

## Tech stack

- React 18
- TypeScript
- Vite
- Chakra UI v2

## Project structure

```
src/
├── components/
│   ├── Counter.tsx           # Counter UI component
│   └── Counter.module.css    # Scoped styles for Counter
├── context/
│   ├── CounterContext.ts     # React context object
│   └── CounterProvider.tsx   # Provider component with state
├── hooks/
│   └── useCounter.ts         # Custom hook for consuming counter context
├── App.tsx
└── main.tsx
```
## Getting started

Clone the repository:

```bash
git clone https://github.com/nicholas-ugbala-dev/yendou-counter.git
cd yendou-counter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

## Notes

- The toast gradient border uses a pseudo-element workaround because `border-image` does not work with `border-radius` in CSS
- Toast text uses `count + 1` to display the correct value because React state updates are asynchronous