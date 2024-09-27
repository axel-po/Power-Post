import { User } from "@prisma/client";
import { AuthError } from "next-auth"; // Assure-toi que ce chemin est correct
import { baseAuth } from "./auth"; // Importation de baseAuth (à vérifier si ce chemin est correct)

export const auth = async () => {
  const session = await baseAuth(); // Récupérer la session utilisateur

  if (session?.user) {
    const user = session.user as User; // Cast session.user en User
    return user;
  }

  return null; // Retourne null si pas de session ou d'utilisateur
};

export const requiredAuth = async () => {
  const user = await auth(); // Utilise la fonction auth pour obtenir l'utilisateur

  if (!user) {
    throw new AuthError("You must be authenticated to access this resource."); // Lève une erreur si pas d'utilisateur
  }

  return user; // Retourne l'utilisateur si authentifié
};
