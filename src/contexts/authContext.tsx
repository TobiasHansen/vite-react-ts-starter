import { User } from 'firebase/auth';
import { createContext, ReactNode, useContext, useReducer } from 'react';

type AuthActions = { type: 'SIGN_IN'; payload: { user: User } } | { type: 'SIGN_OUT' };

type AuthState =
  | {
      state: 'SIGNED_IN';
      currentUser: User;
    }
  | {
      state: 'SIGNED_OUT';
      currentUser: undefined;
    }
  | {
      state: 'UNKNOWN';
      currentUser: undefined;
    };

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        state: 'SIGNED_IN',
        currentUser: action.payload.user,
      };
    case 'SIGN_OUT':
      return {
        state: 'SIGNED_OUT',
        currentUser: undefined,
      };
  }
};

type AuthContextProps = {
  state: AuthState;
  dispatch: (value: AuthActions) => void;
};

const AuthContext = createContext<AuthContextProps>({
  state: { state: 'UNKNOWN', currentUser: undefined },
  dispatch: (val) => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    state: 'UNKNOWN',
    currentUser: undefined,
  });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
  );
};

const useUser = (): { user: User | undefined } => {
  const { state } = useContext(AuthContext);
  return {
    user: state.currentUser,
  };
};

const useAuthState = () => {
  const { state } = useContext(AuthContext);
  return {
    state,
  };
};

const useSignIn = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signIn: (user: User) => {
      dispatch({ type: 'SIGN_IN', payload: { user } });
    },
  };
};

const useSignOut = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signOut: () => {
      dispatch({ type: 'SIGN_OUT' });
    },
  };
};

export { AuthProvider, useAuthState, useSignIn, useSignOut, useUser };
