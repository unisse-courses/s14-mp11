module.exports = {
    artistPage: (req, res) => {
        res.render('artist.ejs', {
            title: "K-Penguin | Artist"
        });
    },

    cartPage: (req, res) => {
        res.render('cart.ejs', {
            title: "K-Penguin | Cart"
        });
    },

    entryPage: (req, res) => {
        res.render('entry.ejs', {
            title: "K-Penguin | Welcome!"
        });
    },

    itemPage: (req, res) => {
        res.render('item.ejs', {
            title: "K-Penguin | Item"
        });
    },

    itemAddPage: (req, res) => {
        res.render('itemAdd.ejs', {
            title: "K-Penguin | Add Item"
        });
    },

    itemEditPage: (req, res) => {
        res.render('itemEdit.ejs', {
            title: "K-Penguin | Edit Item"
        });
    },

    itemTypePage: (req, res) => {
        res.render('itemType.ejs', {
            title: "K-Penguin | Item Type"
        });
    },

    listArtistsPage: (req, res) => {
        res.render('listArtists.ejs', {
            title: "K-Penguin | Artists"
        });
    },

    listItemsPage: (req, res) => {
        res.render('listItems.ejs', {
            title: "K-Penguin | Item Types"
        });
    },

    resultsPage: (req, res) => {
        res.render('results.ejs', {
            title: "K-Penguin | Search Results"
        });
    },

    transactionsPage: (req, res) => {
        res.render('transactions.ejs', {
            title: "K-Penguin | Transactions"
        });
    },

    userPage: (req, res) => {
        res.render('user.ejs', {
            title: "K-Penguin | Profile"
        });
    },

    userEditPage: (req, res) => {
        res.render('userEdit.ejs', {
            title: "K-Penguin | Edit Profile"
        });
    }
}