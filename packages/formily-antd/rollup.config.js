
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import cssnano from "cssnano";
import postcss from "rollup-plugin-postcss";
import externalGlobals from 'rollup-plugin-external-globals'
import nested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";
import dts from "rollup-plugin-dts";

// const { babel } = require("@rollup/plugin-babel");

const packageJson = require("./package.json");

// const isProd = process.env.NODE_ENV === "production";

// const babelOptions = {
//   presets: ["@babel/preset-env"],
//   extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
//   exclude: "**/node_modules/**",
// };

const externals = {
  // antd: 'antd',
  // react: 'React',
  // 'react-dom': 'ReactDOM',
  // '@ant-design/icons': 'icons',
  // '@formily/reactive': 'Formily.Reactive',
  // '@formily/path': 'Formily.Path',
  // '@formily/shared': 'Formily.Shared',
  // '@formily/validator': 'Formily.Validator',
  // '@formily/core': 'Formily.Core',
  // '@formily/json-schema': 'Formily.JSONSchema',
  // '@formily/react': 'Formily.React',
}

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    external: ["antd", "@ant-design/icons", "react"],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        plugins: [
          nested(),
          // cssnext({ warnForDuplicates: false, }),
          postcssPresetEnv(),
          cssnano(),
        ],
        use: [
          [
            "less",
            {
              modifyVars: {
                // antd
                "primary-color": "#3F86F4",
                // "border-radius-base": "4px",
                // "success-color": "#52C41A",
                // "warning-color": "#FAAD14",
                // "error-color": "#F5222D",
                // "body-background": "#FAFAFA",
                // "link-color": "#52C9A0",
                // "link-hover-color": "#5DDEB1",
                // "link-active-color": "#52C9A0",
              },
            },
          ],
        ],
        // 处理.css和.less文件
        extensions: [".css", ".less"],
      }),
      externalGlobals(externals, {
        exclude: ['**/*.{less,sass,scss}'],
      }),
    ],
  },
  {
    input: "dist/esm/build/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/, /\.less$/],
    plugins: [dts()],
  },
];
