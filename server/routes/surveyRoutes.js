const mongoose = require('mongoose');
const Path =  require('path-parser');
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/emailTemplate');


const Survey = mongoose.model('survey');


module.exports = app => {
    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({ _user: req.user.id }).select({
            recipients: false
        });

        res.send(surveys);
    });

    app.get('/surveys/:surveyId/:choice', (req, res) => {
        res.send('Thanks for voting');
    });

    app.post('/api/surveys/webhooks', (req, res) => {
        const { url, email} = req.body[0];

        const pathname = new URL(url).pathname; //take the pathname from the URL Object
        const pathPattern = new Path('/api/surveys/:surveyId/:choice'); //define the path pattern

        const match = pathPattern.test(pathname); //try if it match. return null or an object

        if (match) {
            //return { email, surveyId: , choice: match.choice };
            Survey.updateOne(
                {
                    _id: match.surveyId,
                    recipients: {
                        $elemMatch: { email: email, responded: false }
                    }
                },
                {
                    $inc: { [match.choice]: 1 },
                    $set: { 'recipients.$.responded': true },
                    lastResponded: new Date()
                }
            ).exec();
        }

    });
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        // Great place to send an email!
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send();
            await survey.save();
            req.user.credits -= 1;
            const user = await req.user.save();

            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });

}