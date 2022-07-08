import admin from 'firebase-admin';

export type Session = {
  uid: string;
  email?: string;
};

export const verifyIdToken = async (
  idToken?: string
): Promise<Session | null> => {
  if (!idToken) {
    return null;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    return {
      uid: decodedToken.uid,
      email: decodedToken.email,
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};
