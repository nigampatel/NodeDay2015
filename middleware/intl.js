'use strict';

var getMessages = require('../lib/messages');

module.exports = function (req, res, next) {
    var app              = req.app;
    var availableLocales = app.get('available locales');
    var defaultLocale    = app.get('default locale');
    var isProduction     = app.get('env') === 'production';

    getMessages({cache: isProduction}).then(function (messages) {
        // Use content negotiation to find the best locale.
        var locale = req.acceptsLanguages(availableLocales) || defaultLocale;

        // Make the negotiated locale available on the request object.
        req.locale = locale;

        // Provide the intl data on the response object.
        res.intl = {
            availableLocales: availableLocales,

            locales : [locale],
            messages: messages
        };

        // Populate the special `data` local for handlebars-intl to use when
        // rendering the Handlebars templates.
        (res.locals.data || (res.locals.data = {})).intl = res.intl;

        res.expose(res.intl, 'intl');
        setImmediate(next);
    }, next);
};
