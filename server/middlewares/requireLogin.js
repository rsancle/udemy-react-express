/*
* Allow logged users access to the content
 */
module.exports = (req, res, next) => {
    if(!req.user)
    {
        res.status(401).send({ error: 'You must be logged in' });
    }
    next();
}