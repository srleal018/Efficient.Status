/**
 * Configuração do Firebase para o dashboard (GitHub Pages).
 *
 * Firebase Console > Configurações do projeto > Seus apps > App da Web.
 * Essas chaves são públicas por natureza: quem protege os dados são as
 * regras do Firestore (firestore.rules), não o segredo da chave.
 *
 * NUNCA coloque aqui a serviceAccountKey.json (ela é só do bot).
 */

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyD2dzFVt3pZx-1PBxBN-LKEH7uQ7ABea9U",
  authDomain: "leal-57132.firebaseapp.com",
  projectId: "leal-57132",
  storageBucket: "leal-57132.firebasestorage.app",
  messagingSenderId: "888515034484",
  appId: "1:888515034484:web:c1a1b5e1cd3fe93d7c4021",
  measurementId: "G-D42FYN4WH3"
};

// Único e-mail Google autorizado a ver os logs.
// Use o MESMO e-mail dentro do arquivo firestore.rules.
export const ADMIN_EMAIL = "pelegrinelileal@gmail.com";
