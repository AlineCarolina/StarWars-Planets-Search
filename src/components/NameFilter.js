import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const NameFilter = () => {
  const { filter, setFilter } = useContext(DataContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <label htmlFor="filter">
        <input
          type="text"
          name="filter"
          onChange={ handleChange }
          placeholder="search by planet name"
        />
      </label>
    </div>
  );
};

export default NameFilter;
