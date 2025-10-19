'use client';

import { ReactNode } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

let firebaseApp: any, auth: any, firestore: any;
if (typeof window !== 'undefined') {
  ({ firebaseApp, auth, firestore } = initializeFirebase());
}

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  // Prevent re-initialization on re-renders
  if (!firebaseApp) {
    ({ firebaseApp, auth, firestore } = initializeFirebase());
  }

  return (
    <FirebaseProvider firebaseApp={firebaseApp} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}
