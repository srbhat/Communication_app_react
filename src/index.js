import ReactDOM from 'react-dom/client'; // core module
import Main from './Main'; // import Main class component
// import './css/bootstrap.css'; //Bootstrap

import './css/style.css'; // External CSS File
import './css/manage-user.css';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);