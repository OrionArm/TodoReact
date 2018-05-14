import React from 'react';
import PropTypes from 'prop-types';
import './Stats.css';


const Stats = ({projects}) => {
    console.log(projects);
    const projectsKey = Object.keys(projects);
    let total = projectsKey.length;
    let completed = projectsKey.filter(project => projects[project].completed === true).length;

    let notCompleted = total - completed;

    return (
        <table className="Stats-table">
            <tbody>
            <tr>
                <th className="Stats-table__th">Всего проектов</th>
                <td className="Stats-table__td">{total}</td>
            </tr>
            <tr>
                <th className="Stats-table__th">Выполнено</th>
                <td className="Stats-table__td">{completed}</td>
            </tr>
            <tr>
                <th className="Stats-table__th">Осталось</th>
                <td className="Stats-table__td">{notCompleted}</td>
            </tr>
            </tbody>
        </table>
    )
};

Stats.propTypes = {
    projects: PropTypes.array.isRequired
};

export default Stats;