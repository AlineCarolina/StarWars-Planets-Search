import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Filter from './Filter';
import NameFilter from './NameFilter';
import starwars from '../images/imgbin_star-wars-logo-png.png';
import '../styles/Table.css';

const Table = () => {
  const { data, filter: { filters } } = useContext(DataContext);
  const { filterByName: { name } } = filters;

  return (
    <main>
      <img src={ starwars } alt="starwars" />
      <Filter />
      <NameFilter />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { data
            .filter((value) => value.name.toLowerCase().includes(name.toLowerCase()))
            .map((planet) => (
              <tr key={ planet.name }>
                <td>{ planet.name }</td>
                <td>{ planet.rotation_period }</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>{ planet.films }</td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>{ planet.url }</td>
              </tr>
            )) }
        </tbody>
      </table>
    </main>
  );
};

export default Table;
