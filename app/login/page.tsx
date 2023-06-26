'use client';

import useFirebaseAuth from '../hook/useFirebaseAuth';

const Page = () => {
  const {
    singinWithGoogle,
    handleLogout,
    checkUser,
    singupWithEmailAndPassword,
    singinWithEmailAndPassword,
  } = useFirebaseAuth();

  const registerNewUser = (event: any) => {
    event.preventDefault();

    const newUserInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    singupWithEmailAndPassword(newUserInfo);
  };

  const loginWithEmailAndPassword = async (event: any) => {
    event.preventDefault();
    const newUserInfo = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    singinWithEmailAndPassword(newUserInfo);
  };

  return (
    <div>
      <div>
        <form onSubmit={registerNewUser}>
          <input type="text" name="email" required />
          <input type="text" name="password" required />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <form onSubmit={loginWithEmailAndPassword}>
          <input type="text" name="email" required />
          <input type="text" name="password" required />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <button onClick={singinWithGoogle}>Google Login</button>
        <button onClick={handleLogout}>Google Logout</button>
        <button onClick={checkUser}>Current User</button>
      </div>
    </div>
  );
};

export default Page;
