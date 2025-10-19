import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider, AppCheck } from 'firebase/app-check';
import { getFirebaseConfig } from './config';

let firebaseApp: FirebaseApp;
let auth: Auth;
let firestore: Firestore;
let appCheck: AppCheck;

function initializeFirebase() {
  const firebaseConfig = getFirebaseConfig();
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }

  if (typeof window !== 'undefined') {
    appCheck = initializeAppCheck(firebaseApp, {
      provider: new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!),
      isTokenAutoRefreshEnabled: true
    });
  }

  auth = getAuth(firebaseApp);
  firestore = getFirestore(firebaseApp);
  return { firebaseApp, auth, firestore, appCheck };
}

export { initializeFirebase };
