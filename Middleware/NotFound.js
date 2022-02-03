const notFound = (req, res)=>{
    res.status(404).send(console.log('Route Not Found'))
}
module.exports = notFound;