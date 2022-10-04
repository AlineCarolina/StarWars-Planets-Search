import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import FetchApi from '../services/FetchApi';

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [],
    },
  });

  useEffect(() => {
    setIsLoading(true);
    const ApiStarWars = async () => {
      const resultsApi = await FetchApi();
      setData(resultsApi.results);
      setIsLoading(false);
    };
    ApiStarWars();
  }, []);

  const context = {
    data,
    setData,
    isLoading,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    filter,
    setFilter,
    options,
    setOptions,
  };

  return (
    <DataContext.Provider value={ context }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;

/* import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import DataContext from './DataContext';
import FetchApi from '../services/FetchApi';

const DataProvider = ({ children }) => {
  const INITIAL_FILTERS = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const NUMERIC_FILTER = {
    column: '',
    comparison: '',
    value: '',
  };

  const [filter, setFilter] = useState(INITIAL_FILTERS);
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(planets);
  const [numericFilter, setNumericFilter] = useState(NUMERIC_FILTER);
  const [selectedColumn, setSelectedComun] = useState();
  const { filterByName: { name } } = filter;

  useEffect(() => {
    const fetchPlanet = async () => {
      const result = await FetchApi();
      setPlanets(result);
    };
    fetchPlanet();
  }, []);

  useEffect(() => {
    const filtereds = planets
      .filter((planet) => planet.name.includes(name.toLowerCase()));
    setFilteredPlanets(filtereds);
  }, [name, planets]);

  const contextValue = {
    filter,
    setFilter,
    planets,
    setPlanets,
    filteredPlanets,
    setFilteredPlanets,
    numericFilter,
    setNumericFilter,
    selectedColumn,
    setSelectedComun,
  };

  return (
    <DataContext.Provider value={ contextValue }>
      { children }
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
 */
