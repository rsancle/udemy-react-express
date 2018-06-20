const config = require('../../config/app');

module.exports = survey => {
    return `
        <html>
            <body>
                <div>
                    <h3>I'd would like your input</h3>
                    <p>Please answer the following question</p>
                    <p>${ survey.body }</p>
                    <div>
                        <a href="${config.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
                    </div>
                    <div>
                        <a href="${config.redirectDomain}/api/surveys/${survey.id}/no">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
}