import React from 'react';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/error-404-landing-page-with-file-flat-design_249405-162.jpg?w=2000" class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Opps! Sorry Page Not Found!</h1>

                    <p>
                        The Page you are looking for could not be found. The link to this address maybe outdated or we may have moved the page since you last bookmarked it.<br />It may also be temporary unavailable.
                    </p>
                    <br />
                    <h3 style={{ color: "orange" }}>
                        Error code: 404
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;