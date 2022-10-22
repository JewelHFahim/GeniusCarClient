import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h1>Terms and Conditions </h1>
            <p>Back to <Link to='/register' >Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;