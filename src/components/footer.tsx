import * as React from 'react';

export const Footer: React.StatelessComponent = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="page-footer">
                <div className="footer-content">
                    <div className="column-1">
                        <h5>Languages</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3 / SASS</li>
                            <li>Javascript / Typescript</li>
                        </ul>
                    </div>
                    <div className="column-2">
                        <h5>Human Languages</h5>
                        <ul>
                            <li>English</li>
                            <li>German</li>
                            <li>Ukrainian</li>
                            <li>Russian</li>
                        </ul>
                    </div>
                </div>
            <div className="footer-shadow">
                    <div className="copyright-box">
                        <span className="copyright-sign">© {year} Olena Lomonos</span>
                    </div>
            </div>
        </footer>
    );
};
