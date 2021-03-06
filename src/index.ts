import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
const app = express();

dotenv.config();
const port = process.env.SERVER_PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get( '/', ( req, res ) => {
    res.render('index');
} );

app.listen( port, () => {
    console.log( `Server started at http://localhost:${ port }` );
} );