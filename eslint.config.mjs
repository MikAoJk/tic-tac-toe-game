import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
    ...nextVitals,
    globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
    {
        files: ["components/TicTacToe/TicTacToe.tsx"],
        rules: {
            // Keep new diagnostics visible without requiring a legacy gameplay refactor.
            "react-hooks/immutability": "warn",
        },
    },
]);
