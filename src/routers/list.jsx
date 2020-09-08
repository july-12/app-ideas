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
    const capitalLowerCase = (string) => string[0].toLowerCase() + string.slice(1);

    const githubDirPath = 'https://github.com/july-12/app-ideas/tree/master/packages';
    return (
        <div className="idea-list">
            {data.map(({ list, tier }, index) => (
                <section key={tier}>
                    <h3>{title(tier, index)}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Short Description</th>
                                <th>Tier</th>
                                <th>Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((demo) => (
                                <tr key={demo.title}>
                                    <td>
                                        <Link to={`/${tier}/${demo.title}`}>{demo.title}</Link>
                                    </td>
                                    <td>{demo.desc}</td>
                                    <td>{tier}</td>
                                    <th>
                                        <a
                                            href={`${githubDirPath}/${capitalLowerCase(
                                                tier
                                            )}/${capitalLowerCase(demo.title)}`}
                                        >
                                            code
                                        </a>
                                    </th>
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
