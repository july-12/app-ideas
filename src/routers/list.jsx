import React from 'react';
import { Link } from 'react-router-dom';

import './list.less';

const Home = () => {
    return (
        <div className="home">
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
                        <tr>
                            <td>
                                <Link to="/beginner/Bin2Dec">Bin2Dec</Link>
                            </td>
                            <td>Binary-to-Decimal number converter</td>
                            <td>1-Beginner</td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/beginner/demo2">Border Radius Previewer</Link>
                            </td>
                            <td>Preview how CSS3 border-radius values affect an element</td>
                            <td>1-Beginner</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default Home;
