import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    throw new Error("Error al cargar los productos de la base de datos " ,error.message);
  }
};