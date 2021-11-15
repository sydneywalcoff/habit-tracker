import React from 'react';
import { DateTime } from 'luxon'

const Footer = () => {

    return (
        <footer className="mt-auto p-2">
            <h6 className="text-center">sydney walcoff <span id="copywrite">{DateTime.local().year}©</span></h6>
        </footer>
    );
};

export default Footer;