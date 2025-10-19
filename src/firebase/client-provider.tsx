'use client';

import { ReactNode } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';
import type { AppCheck } from 'firebase/app-check';

let firebaseApp: any, auth: any, firestore: any, appCheck: AppCheck | undefined;
if (typeof window !== 'undefined') {
  ({ firebaseApp, auth, firestore, appCheck } = initializeFirebase());
}

export function FirebaseClientProvider({ children }: { children: ReactNode }) {
  // Prevent re-initialization on re-renders
  if (!firebaseApp) {
    ({ firebaseApp, auth, firestore, appCheck } = initializeFirebase());
  }

  return (
    <FirebaseProvider firebaseApp={firebaseApp} auth={auth} firestore={firestore} appCheck={appCheck}>
      {children}
    </FirebaseProvider>
  );
}
