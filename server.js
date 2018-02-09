const express = require('express');

const app = express();
const graphqlHTTP = require('express-graphql');

const schema = require('./schema');


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));


app.get('/test', (req, res) => 
{
    const fetch = require('node-fetch');
    const key = '8hYwQ60fIMVkGBBhKURRA';
    const util = require('util');
    const parseXML = util.promisify(require('xml2js').parseString);

    fetch(`https://www.goodreads.com/author/show.xml?id=4432&key=8hYwQ60fIMVkGBBhKURRA`)
    .then((res) => res.text())
    .then(parseXML)
    .then(xml => res.json(xml.GoodreadsResponse.author[0]))
}

)


app.listen(4000);

console.log('listening ...');

