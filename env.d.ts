/// <reference types="vite/client" />
/// <reference types="@histoire/plugin-vue/components" />

interface ImportMetaEnv {
  readonly VITE_I18N_LOCALE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
