'use strict';

import React from 'react';
import Router from 'react-router';

export default React.createClass({
    render: function() {
        var intlData = {
                "locales": "fr-FR",
                 "messages": {
                    "photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
                }
        };
        return (
            <html>
                <head>
                    <script
                        type='text/javascript'
                        src='/js/bundle.js'
                        defer
                    />
                    <link
                        rel="stylesheet"
                        type="text/css"
                        href="/css/app.css"
                    />
                </head>
                <body>
                    <Router.RouteHandler {...intlData} />
                </body>
            </html>
        );
    }
});
