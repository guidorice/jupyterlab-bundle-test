import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab-bundle-test extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab-bundle-test',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab-bundle-test is activated!');
  }
};

export default extension;
