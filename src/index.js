import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/animate.css';
// import './css/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import './css/magnific-popup.css';
import './fonts/ionicons/css/ionicons.min.css';
import './fonts/fontawesome/css/font-awesome.min.css';
import './css/style.css';
import './template.css';
import './index.css';
// import './js/jquery-3.2.1.min.js';
// import './js/owl.carousel.min.js';
// import 'jquery/src/jquery';
// import 'owl.carousel';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import './js/main';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
