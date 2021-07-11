const express = require('express');
const app = express();
require('./db/db_connection');


const userRoute = require('./routes/user_router');
const postRoute = require('./routes/post_router');


// body parse için gerekli
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/user', userRoute);
app.use('/post', postRoute);


//ROUTES...
app.get('/', (req, res) => {

    res.json({
        message: "welcome to blood donation rest api",
    });
});

app.listen(3000);