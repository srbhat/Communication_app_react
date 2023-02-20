import ReactDOM from 'react-dom/client'; // core module
import Main from './Main'; // import Main class component
import './css/style.css'; // External CSS File
import './css/bootstrap.css'; //Bootstrap
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main />
);