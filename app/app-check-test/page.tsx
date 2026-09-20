'use client';

import { useEffect, useState } from 'react';

import { verifyPortfolioAppCheck } from '@/lib/firebase-leads';

export default function AppCheckTestPage() {
  const [status, setStatus] = useState('Validando o App Check...');

  useEffect(() => {
    verifyPortfolioAppCheck()
      .then(() => setStatus('Proteção ativa'))
      .catch((error: unknown) =>
        setStatus(error instanceof Error ? `Falha: ${error.message}` : 'Falha inesperada'),
      );
  }, []);

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <p>{status}</p>
    </main>
  );
}
