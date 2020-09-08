import React from 'react';
import { Link } from 'react-router-dom';

import beginnerDemos from '../demos/beginner';
import intermediateDemos from '../demos/intermediate';

import './list.less';

const List = () => {
    const data = [
        {
            list: beginnerDemos,
            tier: 'Beginner'
        },
        {
            list: intermediateDemos,
            tier: 'Intermediate'
        }
    ];
    const title = (tier, index) => `Tier-${index}: ${tier} Projects`;

    return (
        <div className="idea-list">
            {data.map(({ list, tier }, index) => (
                <section>
                    <h3>{title(tier, index)}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ color: 'red' }}>Name</th>
                                <th>Short Description</th>
                                <th>Tier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((demo) => (
                                <tr>
                                    <td>
                                        <Link to={`/${tier}/${demo.title}`}>{demo.title}</Link>
                                    </td>
                                    <td>{demo.desc}</td>
                                    <td>{tier}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            ))}
        </div>
    );
};

export default List;
