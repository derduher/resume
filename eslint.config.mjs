import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "out/**",
      ".next/**",
      "node_modules/**",
      "dist/**",
      "dist-bk/**",
      "dist-bk2/**",
      "build/**",
      "server-build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
