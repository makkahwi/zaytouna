import React, { Suspense, Fragment } from 'react';
import { Route, Switch, BrowserRouter as Router, withRouter } from 'react-router-dom';
import { useTranslation } from "react-i18next";

// Import css
import './css/pe-icon-7-stroke.css';
import './css/materialdesignicons.min.css';
import './css/waves.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/colors/red.css';

const loading = (
  <div class="spinner-grow text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
);

const Index = React.lazy(() => import('./pages/index'));

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


