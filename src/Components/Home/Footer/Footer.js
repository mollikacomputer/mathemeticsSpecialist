import React from 'react';

const Footer = () => {
    const d = new Date();
    const copyRightYear = d.getFullYear();
    return (
        <div>
            <p> All right reasurved &copy; {copyRightYear} MollikaComputer </p>
        </div>
    );
};

export default Footer;