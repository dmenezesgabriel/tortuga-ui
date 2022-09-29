/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_I18N_LOCALE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
