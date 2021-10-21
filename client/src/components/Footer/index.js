import React from 'react';
import { DateTime } from 'luxon'

const Footer = () => {
    return (
        <footer className="mt-4">
            <h6 className="text-center">sydney walcoff <span id="copywrite">{DateTime.year}</span></h6>
        </footer>
    );
};

export default Footer;