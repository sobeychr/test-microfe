import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
    <>
        <header>
            <h1>About page</h1>
            <nav>
                <Link to='/'>Home</Link>
                <span>About</span>
            </nav>
        </header>
        <main>
            <p>
                Nulla sodales orci eget ipsum ornare, sit amet vulputate dolor porta. Maecenas vel
                hendrerit justo. Proin maximus justo quis dictum commodo. Maecenas sagittis tellus a
                pretium aliquam.
            </p>
        </main>
    </>
);

export default AboutPage;
