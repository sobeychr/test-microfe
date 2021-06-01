import React from 'react';
import { Link } from 'react-router-dom';

import { MicroFrontEnd } from '@mainComponent';

const HomePage = () => (
    <>
        <header>
            <h1>Home page</h1>
            <nav>
                <span>Home</span>
                <Link to='/about'>About</Link>
            </nav>
            <MicroFrontEnd name='nav' />
        </header>
        <main>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin quis
                lorem a eleifend. Fusce ac pretium orci, eget vehicula dolor. Sed aliquet varius
                justo, in finibus dolor tristique sit amet. Nulla purus eros, consequat id gravida
                et, sagittis sed orci. Sed semper vitae nisi sed blandit. Nulla metus turpis,
                gravida at blandit fringilla, convallis maximus tellus. Pellentesque et eros ex.
                Duis non viverra neque. Sed varius a magna ac semper. Fusce volutpat, felis at
                luctus vehicula, sem odio sodales dolor, vel facilisis ante leo accumsan enim.
                Phasellus ac auctor tortor. Nulla commodo sapien nec velit ornare, in commodo risus
                viverra. Mauris vitae consequat erat. Sed eget metus ac turpis rutrum fermentum.
                Phasellus sed sapien at eros iaculis tempor sed vitae velit.
            </p>
        </main>
    </>
);

export default HomePage;
