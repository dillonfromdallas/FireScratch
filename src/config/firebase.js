const firebaseConfig = {
  apiKey: String(process.env.apiKey),
  authDomain: String(process.env.authDomain),
  databaseURL: String(process.env.databaseURL),
  projectId: String(process.env.projectId),
  storageBucket: String(process.env.storageBucket),
  messagingSenderId: String(process.env.messagingSenderId)
};

export default firebaseConfig;
