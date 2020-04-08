const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.set('port', process.env.port || port);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/kpenguin', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open',function(callback){
   console.log('Connected to database.');
   
});

const User = require('./models/user');
const Item = require('./models/item');
const Transaction = require('./models/transaction');

var loggedUser;

app.get('/artist/:artist', function(req, res){
    queriedArtist = req.params.artist.toUpperCase();
    Item.find({artist: queriedArtist}, function(err, items){
        res.render('artist.ejs', {
            title: "K-Penguin | " + queriedArtist,
            artist: queriedArtist,
            items: items,
            currentUser: loggedUser
        });
    });
});

app.post('/artist/:artist', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/item/:id', function(req, res){
    Item.findOne({_id: req.params.id}, function(err, item){
        User.findOne({_id: item.user.id}, function(err, user){
            res.render('item.ejs', {
                title: "K-Penguin | " + item.name,
                item: item,
                user: user,
                currentUser: loggedUser
            });
        });
    });
});

app.post('/item/:id', function(req, res){
    Item.findOne({_id: req.params.id}, function(err, item){
        User.findOne({_id: loggedUser}, function(err, user){
            let newTrans = new Transaction({
                buyer: {id: user._id, username: user.username},
                seller: {id: item.user.id, username: item.user.username},
                item: {id: item._id, name: item.name, price: item.price, description: item.description},
                recipient: req.body.inputName,
                address: req.body.inputAddress,
                notes: req.body.inputNotes
            });

            newTrans.save(function(err){
                if (err) throw err;
                res.redirect('/transactions');
            });
        });
    });
});

app.get('/item_add', function(req, res){
    res.render('itemAdd.ejs', {
        title: "K-Penguin | Add Item",
        currentUser: loggedUser
    });
});

app.post('/item_add', function(req, res){
    User.findOne({_id: loggedUser}, function(err, user){
        let newItem = new Item({
            name: req.body.itemName,
            user: {id: loggedUser, username: user.username},
            price: req.body.itemPrice,
            status: "available",
            artist: req.body.itemArtist.toUpperCase(),
            itemType: req.body.itemType,
            description: req.body.itemDescription,
            image: req.body.itemImage
        });

        newItem.save(function(err){
            if (err) throw err;
            res.redirect('/user/' + loggedUser);
        });
    })
});

app.get('/item_edit/:id', function(req, res){
    Item.findOne({_id: req.params.id}, function(err, item){
        res.render('itemEdit.ejs', {
            title: "K-Penguin | Edit Item",
            item: item,
            currentUser: loggedUser
        });
    });
});

app.post('/item_edit/:id', function(req, res){
    Item.update({_id: req.params.id},
        {$set: {name: req.body.itemName,
                price: req.body.itemPrice,
                status: req.body.itemStatus,
                artist: req.body.itemArtist,
                itemType: req.body.itemType,
                description: req.body.itemDescription}},
        function(err){
            res.redirect('/item/' + req.params.id);
        });
});

app.get('/item_delete/:id', function(req, res){
    Item.findOne({_id: req.params.id}, function(err, item){
        res.render('itemDelete.ejs', {
            title: "K-Penguin | Delete Item",
            item: item,
            currentUser: loggedUser,
            error: ""
        });
    })
});

app.post('/item_delete/:id', function(req, res){
    User.findOne({_id: loggedUser}, function(err, user){
        if(req.body.password != user.password){
            Item.findOne({_id: req.params.id}, function(err, item){
                res.render('itemDelete.ejs', {
                    title: "K-Penguin | Delete Item",
                    item: item,
                    currentUser: loggedUser,
                    error: "The password you entered is wrong!"
                });
            });
        }
        else{
            Item.findOneAndDelete({_id: req.params.id}, function(err, item){
                res.redirect('/user/' + loggedUser);
            });
        }
    });
});

app.get('/item_type/:itemType', function(req, res){
    Item.find({itemType: req.params.itemType}, function(err, items){
        res.render('itemType.ejs', {
            title: "K-Penguin | " + req.params.itemType.toUpperCase(),
            itemType: req.params.itemType.toUpperCase(),
            items: items,
            currentUser: loggedUser
        });
    });
});

app.post('/item_type/:itemType', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/artists', function(req, res){
    Item.find().distinct('artist', function(error, artists){
        if(artists.length == 0){
            res.render('listArtists.ejs', {
                title: "K-Penguin | Artists",
                error: "No artists to show.",
                artists: artists,
                currentUser: loggedUser
            });
        }
        else{
            artists.sort();
            res.render('listArtists.ejs', {
                title: "K-Penguin | Artists",
                error: "",
                artists: artists,
                currentUser: loggedUser
            });
        }
    });
});

app.post('/artists', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/items', function(req, res){
    Item.find().distinct('itemType', function(error, itemTypes){
        if(itemTypes.length == 0){
            res.render('listItems.ejs', {
                title: "K-Penguin | Items",
                error: "No item types to show.",
                itemTypes: itemTypes,
                currentUser: loggedUser
            });
        }
        else{
            itemTypes.sort();
            res.render('listItems.ejs', {
                title: "K-Penguin | Items",
                error: "",
                itemTypes: itemTypes,
                currentUser: loggedUser
            });
        }
    });
});

app.post('/items', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/', function(req, res){
    loggedUser = null;

    res.render('register.ejs', {
        title: "K-Penguin | Welcome!",
        error: ""
    });
});

app.post('/', function(req, res){
    var isValid = true;

    User.findOne({email: req.body.registerEmail}, function(err, userEmail){
        if(userEmail){
            isValid = false;
            res.render('register.ejs', {
                title: "K-Penguin | Welcome!",
                error: "That e-mail address is already linked to a K-Penguin account!"
            });
        }
    });

    User.findOne({username: req.body.registerUsername}, function(err, userUsername){
        if(userUsername){
            isValid = false;
            res.render('register.ejs', {
                title: "K-Penguin | Welcome!",
                error: "That username already exist!"
            });
        }
    });

    if(req.body.registerPassword1 != req.body.registerPassword2){
        isValid = false;
        res.render('register.ejs', {
            title: "K-Penguin | Welcome!",
            error: "Your password did not match the re-typed!"
        });
    }

    if(isValid == true){
        User.findOne({email: req.body.registerEmail}, function(err, userEmail){
            User.findOne({username: req.body.registerUsername}, function(err, userUsername){
                if(!userEmail && !userUsername){
                    let newUser = new User({
                        email: req.body.registerEmail,
                        name: req.body.registerName,
                        username: req.body.registerUsername,
                        password: req.body.registerPassword1,
                        description: req.body.registerDescription,
                        image: req.body.registerImage
                    });
                    
                    newUser.save(function(err){
                        if (err) throw err;
                        loggedUser = newUser._id;
                        res.redirect('/user/'+ loggedUser);
                    });
                }
            });
        });
    }
});

app.get('/login', function(req, res){
    loggedUser = null;

    res.render('login.ejs', {
        title: "K-Penguin | Welcome!",
        error: ""
    });
});

app.post('/login', function(req, res){
    User.findOne({username: req.body.loginUsername, password: req.body.loginPassword}, function(err, user){
        if(err) throw err;
        
        if(!user){
            res.render('login.ejs', {
                title: "K-Penguin | Welcome!",
                error: "Oops! That username/password combination doesn't exist."
            });
        }
        else{
            loggedUser = user._id;
            req.params.id = loggedUser;
            res.redirect('/user/'+ loggedUser);
        }
    });
});

app.get('/results/:query', function(req, res){
    Item.find({name: {$regex: req.params.query, $options: 'i'}}, function(err, items){
        console.log(items);

        res.render('results.ejs', {
            title: "K-Penguin | Search Results",
            currentUser: loggedUser,
            items: items,
            query: req.params.query
        });
    });
    
});

app.post('/results/:query', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/transactions', function(req, res){
    User.findOne({_id: loggedUser}, function(err, user){
        Transaction.find({seller: {id: user._id, username: user.username}}, function(err, sales){
            Transaction.find({buyer: {id: user._id, username: user.username}}, function(err, purchases){
                res.render('transactions.ejs', {
                    title: "K-Penguin | Transactions",
                    user: user,
                    sales: sales,
                    purchases: purchases,
                    currentUser: loggedUser
                });
            });
        });
    });
});

app.post('/transactions', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/user/:id', function(req, res){
    User.findOne({_id: req.params.id}, function(err, user){
        Item.find({user: {id: user._id, username: user.username}}, function(err, items){
            res.render('user.ejs', {
                title: "K-Penguin | " + user.name,
                user: user,
                items: items,
                currentUser: loggedUser
            });
        });
    });
});

app.post('/user/:id', function(req, res){
    res.redirect('/results/' + req.body.search);
});

app.get('/user_edit', function(req, res){
    User.findOne({_id: loggedUser}, function(err, user){
        res.render('userEdit.ejs', {
            title: "K-Penguin | Edit Profile",
            error: "You will be redirected to this page if the password does not match the re-typed.",
            user: user,
            currentUser: loggedUser
        });
    })
    
});

app.post('/user_edit', function(req, res){
    var isValid2 = true;
    if(req.body.password1 != req.body.password2){
        isValid2 = false;
        return res.redirect('/user_edit');
    }

    if(isValid2 == true){
        User.update({_id: loggedUser},
            {$set: {name: req.body.name,
                    password: req.body.password1,
                    description: req.body.userDescription,
                    image: req.body.userImage}},
            function(err){
                return res.redirect('/user/' + loggedUser);
            });
    }
});

app.listen(port, () => {
    console.log(`Proceed to http://localhost:${port} to view app.`);
});