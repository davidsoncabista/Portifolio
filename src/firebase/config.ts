
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "studio-7242321923-1100a.firebaseapp.com",
  projectId: "studio-7242321923-1100a",
  storageBucket: "studio-7242321923-1100a.firebasestorage.app",
  messagingSenderId: "290803328759",
  appId: "1:290803328759:web:edc5579bfb58dcd58215f2",
};

export function getFirebaseConfig() {
  if (!firebaseConfig.apiKey) {
    throw new Error('Missing Firebase API key');
  }
  return firebaseConfig;
}
