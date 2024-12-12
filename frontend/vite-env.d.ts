/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Ajoutez vos variables ici
    readonly VITE_DB_PASSWORD?: string; // Exemple de variable optionnelle
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
