import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "dist/**",
    ".output/**",
    ".vinxi/**",
    "next-env.d.ts",
    "src/components/ui/**",
    "src/hooks/use-mobile.tsx",
  ]),
]);
