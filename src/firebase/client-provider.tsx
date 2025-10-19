'use client';

import { ReactNode, useEffect, useState } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import type { AppCheck } from 'firebase/app-check';

interface FirebaseInstances {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  appCheck: AppCheck | undefined;
}

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  const [instances, setInstances] = useState<FirebaseInstances | null>(null);

  useEffect(() => {
    // This check ensures firebase is only initialized on the client
    if (typeof window !== 'undefined') {
      const { firebaseApp, auth, firestore, appCheck } = initializeFirebase();
      setInstances({ firebaseApp, auth, firestore, appCheck });
    }
  }, []);

  if (!instances) {
    // You can render a loading spinner or null here
    return null;
  }
  
  const { firebaseApp, auth, firestore, appCheck } = instances;

  return (
    <FirebaseProvider firebaseApp={firebaseApp} auth={auth} firestore={firestore} appCheck={appCheck}>
      {children}
    </FirebaseProvider>
  );
}
