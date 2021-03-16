import { defineConfig, UserConfigExport } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
const config: UserConfigExport = defineConfig({
  plugins: [reactRefresh(), tsconfigPaths(), svgr()],
  build: {
    sourcemap: true,
  },
});

export default config;
