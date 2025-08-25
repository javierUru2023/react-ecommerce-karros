import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const createOrder = async (orderData) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), orderData);
    return docRef.id;
  } catch (error) {
    throw new Error("Error al crear la orden: " + error.message);
  }
};