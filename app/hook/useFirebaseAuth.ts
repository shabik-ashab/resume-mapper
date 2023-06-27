import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

const useFirebaseAuth = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  // singin with google btn
  const singinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('login user', user);
    } catch (error) {
      console.log(error);
    }
  };

  // singup or register with email and password
  const singupWithEmailAndPassword = async (newUserInfo: any) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        newUserInfo.email,
        newUserInfo.password,
      );
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  // singin with email and password
  const singinWithEmailAndPassword = async (loginUserInfo: any) => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginUserInfo.email,
        loginUserInfo.password,
      );
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  // singout ot logout all user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.log(error);
    }
  };

  // checking current user
  const checkUser = () => {
    const user = auth.currentUser;
    console.log(user);
  };

  return {
    singinWithGoogle,
    singupWithEmailAndPassword,
    singinWithEmailAndPassword,
    handleLogout,
    checkUser,
  };
};

export default useFirebaseAuth;
