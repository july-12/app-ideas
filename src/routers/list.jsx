import React from 'react';
import { Link } from 'react-router-dom';

import beginnerDemos from '../demos/beginner';

import './list.less';

const List = () => {
    return (
        <div className="idea-list">
            <section>
                <h3>Tier-1: Beginner Projects</h3>
                <table>
                    <thead>
                        <tr>
                            <th style={{ color: 'red' }}>Name</th>
                            <th>Short Description</th>
                            <th>Tier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {beginnerDemos.map((demo) => (
                            <tr>
                                <td>
                                    <Link to={`/beginner/${demo.title}`}>{demo.title}</Link>
                                </td>
                                <td>{demo.desc}</td>
                                <td>1-Beginner</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default List;
