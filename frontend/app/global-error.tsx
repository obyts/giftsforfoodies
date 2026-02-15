'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui', padding: '2rem', background: '#fef2f2', color: '#991b1b' }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Помилка</h1>
        <pre style={{
          background: '#fff',
          padding: '1rem',
          borderRadius: '8px',
          overflow: 'auto',
          fontSize: '0.875rem',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          border: '1px solid #fecaca',
        }}>
          {error.message}
        </pre>
        {error.stack && (
          <details style={{ marginTop: '1rem' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>Stack trace</summary>
            <pre style={{
              background: '#fff',
              padding: '1rem',
              marginTop: '0.5rem',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.75rem',
              whiteSpace: 'pre-wrap',
              maxHeight: '300px',
              border: '1px solid #fecaca',
            }}>
              {error.stack}
            </pre>
          </details>
        )}
        {error.digest && (
          <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#b91c1c' }}>
            Digest: {error.digest}
          </p>
        )}
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
            fontSize: '1rem',
          }}
        >
          Спробувати знову
        </button>
      </body>
    </html>
  );
}
