import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import '../styles/Filter.css';

const Filter = () => {
  const {
    data,
    setData,
    filter,
    setFilter,
    column,
    setColumn,
    comparison,
    setComparison,
    value,
    setValue,
    options,
    setOptions,
  } = useContext(DataContext);

  const optionsFIlter = () => {
    const filterOption = options.filter((option) => option !== column);
    setOptions(filterOption);
  };

  const numericalFilter = async () => {
    let dataNumericalFilter;
    if (comparison === 'maior que') {
      dataNumericalFilter = data
        .filter((planet) => Number(planet[column]) > Number((value)));
    } else if (comparison === 'menor que') {
      dataNumericalFilter = data
        .filter((planet) => Number(planet[column]) < Number((value)));
    } else if (comparison === 'igual a') {
      dataNumericalFilter = data
        .filter((planet) => Number(planet[column]) === Number((value)));
    }
    console.log(dataNumericalFilter);
    setData(dataNumericalFilter);
    await optionsFIlter();
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          column,
          value,
          comparison,
        },
      ],
    });
    await numericalFilter();
  };

  return (
    <div>
      <label htmlFor="column-filte">
        <select
          name="column-filter"
          id="column-filte"
          onChange={ (element) => setColumn(element.target.value) }
          value={ column }
        >
          { options.map((option) => (
            <option
              key={ option }
              value={ option }
            >
              { option }
            </option>
          ))}

        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select
          name="comparison-filter"
          id="comparison-filter"
          value={ comparison }
          onChange={ (element) => setComparison(element.target.value) }
        >
          <option value="maior que">bigger then</option>
          <option value="menor que">less than</option>
          <option value="igual a">equal to</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          value={ value }
          type="number"
          name="value-filter"
          id="value-filter"
          onChange={ (element) => setValue(element.target.value) }
          placeholder="1000"
        />
      </label>
      <button
        id="button-filter"
        type="button"
        name="button-filter"
        onClick={ handleClick }
      >
        filter
      </button>
    </div>
  );
};

export default Filter;
