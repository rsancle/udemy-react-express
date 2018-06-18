/*
* Allow logged users with enough credits access to create surveys
 */
module.exports = (req, res, next) => {
    if(req.user.credits < 1)
    {
        res.status(403).send({ error: 'Not enough credits' });
    }
    next();
}