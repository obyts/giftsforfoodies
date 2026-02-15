'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js Error:', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui',
      background: '#fef2f2',
      color: '#991b1b',
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Щось пішло не так</h1>
      <pre style={{
        background: '#fff',
        padding: '1rem',
        borderRadius: '8px',
        overflow: 'auto',
        fontSize: '0.875rem',
        whiteSpace: 'pre-wrap',
        maxWidth: '600px',
        border: '1px solid #fecaca',
      }}>
        {error.message}
      </pre>
      <button
        onClick={reset}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          background: '#dc2626',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Спробувати знову
      </button>
    </div>
  );
}
