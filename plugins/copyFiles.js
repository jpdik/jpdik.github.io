import fs from 'fs';
import path from 'path';

const copyFile = (config, source, target) => {
  fs.copyFileSync(
    path.join(__dirname, 'assets', source),
    path.join(config.root, config.build.outDir, target),
  );
};

const copyFiles = () => {
  let config;
  return {
    name: 'copyFiles',
    configResolved(configResolved) {
      config = configResolved;
    },
    generateBundle(options, bundle) {
      const file = Object.values(bundle).find(
        file => file.type === 'chunk' && file.isEntry,
      );

      const cssFiles = [...file.viteMetadata.importedCss];

      Object.values(bundle).map(fl => {
        if (file.imports.includes(fl.fileName)) {
          cssFiles.push(...fl.viteMetadata.importedCss);
        }
      });

      copyFile(config, 'CNAME', 'CNAME');
    },
  };
};

export default copyFiles;
