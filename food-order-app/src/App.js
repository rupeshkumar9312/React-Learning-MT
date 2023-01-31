import { Fragment } from 'react';

import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailableMeals';
import Meals from './components/Meals/Meals';
import MealsSummary from './components/Meals/MealsSummary';

function App() {
  return (
    <Fragment>
      <Header />
        <Meals/>
    </Fragment>
  );
}

export default App;