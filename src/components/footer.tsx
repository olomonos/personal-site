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
                  <li>Javascript</li>
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
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>    
    );
};
