'use client';

import { createContext, useContext, ReactNode, useMemo } from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import type { AppCheck } from 'firebase/app-check';

interface FirebaseContextType {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
  appCheck: AppCheck | null | undefined;
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export function FirebaseProvider({
  children,
  firebaseApp,
  auth,
  firestore,
  appCheck,
}: {
  children: ReactNode;
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  appCheck: AppCheck | undefined;
}) {
  const value = useMemo(() => ({ firebaseApp, auth, firestore, appCheck }), [firebaseApp, auth, firestore, appCheck]);
  
  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};

export const useFirebaseApp = () => useFirebase().firebaseApp;
export const useAuth = () => useFirebase().auth;
export const useFirestore = () => useFirebase().firestore;
export const useAppCheck = () => useFirebase().appCheck;
