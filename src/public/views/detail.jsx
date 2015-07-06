'use strict';

import React from 'react';
//var React = require('react');
import { Link } from 'react-router';
import ReactIntl from 'react-intl';
//var ReactIntl = require('react-intl');



var IntlMixin       = ReactIntl.IntlMixin;
var FormattedNumber = ReactIntl.FormattedNumber;
var FormattedMessage = ReactIntl.FormattedMessage;

export default React.createClass({
//     getDefaultProps: function(){
//         return {
//             currentLocale: "pt-BR",
//             locales: "pt-BR",
//     "messages": {
//         "photos": "{name} took {numPhotos, plural,\n  =0 {no photos}\n  =1 {one photo}\n  other {# photos}\n} on {takenDate, date, long}.\n"
//     }
// };
//     },
 	mixins: [IntlMixin],
    render: function() {
        return (
            <div>
            {this.props.locales}
                <h1>Hello From Detail</h1>
                <Link to="index">index</Link>
            <ul>
                <li><FormattedNumber value={4200000000}/></li>
                 <li><FormattedNumber value={0.9} style="percent" /></li>
                <li>
                    <FormattedNumber
                        value={99.95}
                        style="currency"
                        currency="USD" />
                </li>
                <li>
                 <FormattedMessage
                    message={this.getIntlMessage('photos')}
                    name="Annie"
                    numPhotos={1000}
                    takenDate={Date.now()} />
                </li>
            </ul>
            </div>
        );
    }
});
