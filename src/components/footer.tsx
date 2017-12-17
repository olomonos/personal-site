import * as React from 'react';

export const Footer: React.StatelessComponent = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Languages</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3 / SASS</li>
                            <li>Javascript / Typescript</li>
                        </ul>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Human Languages</h5>
                        <ul>
                            <li>English</li>
                            <li>German</li>
                            <li>Ukrainian</li>
                            <li>Russian</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © {year} Olena Lomonos
                    {/* © 2017 - {year} Olena Lomonos */}
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
                </div>
            </div>
        </footer>
    );
};
