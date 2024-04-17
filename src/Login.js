import React, { useState } from 'react';

const SignInPage = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
        // Figure out authentication logic to implement here.
        // If login succeeds, set isSignedIn to true.
        setIsSignedIn(true);
    };

    const handleSignUp = () => {
        // Figure out sign-up logic to implement here.
    };

    return (
        <div>
            {!isSignedIn ? (
                <div className="alert alert-warning" role="alert">
                    <h4 className="alert-heading">Please login</h4>
                    <p>If you don't have a login, please join to access our experiment library.</p>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-primary m-2" onClick={handleSignIn}>
                            Sign In
                        </button>
                        <button type="button" className="btn btn-outline-success m-2" onClick={handleSignUp}>
                            Join
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    {/* Figure out how to get the site to come up. */}
                </div>
            )}
        </div>
    );
};

export default SignInPage;
