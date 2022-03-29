import React, { Suspense, Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Import css
import './assets/css/pe-icon-7-stroke.css';
import './assets/css/materialdesignicons.min.css';
import './assets/css/waves.css';
import './assets/css/bootstrap.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/style.css';
import './assets/css/colors/red.css';

const loading = (
  <div class="spinner-grow text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
);

const Index = React.lazy(() => import('./views/index'));

function App() {
  const { i18n } = useTranslation();
  document.dir = i18n.dir();
  document.lang = i18n.language;

  return (
    <Fragment>
      <Router>
        <Suspense fallback={loading}>
          <Switch>
            <Route path="/" component={Index} />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  );

}



export default withRouter(App);


