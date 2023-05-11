import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { app, db } from "../firebaseConexion/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
const auth = getAuth(app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [cart, setCart] = React.useState(null);
  const [compras, setCompras] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "carrito", user.uid), (cart) => {
        if (cart) {
          setCart(cart.data());
        } else {
          setCart(null);
        }
      });
      return () => unsubscribe();
    }
  }, [user]);

  React.useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        doc(db, "ticketsCompra", user.uid),
        (compra) => {
          if (cart) {
            setCompras(compra.data());
          } else {
            setCompras(null);
          }
        }
      );
      return () => unsubscribe();
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, cart, compras }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
