Products = new Meteor.Collection('products');

Products.featured = function() {
    var featuredSkus = ["art1", "art2", "art3", "art4"];

    return Products.find({sku: {$in: featuredSkus}});
};

Products.newProduct = function() {
    return Products.find({}, {sort: {date: -1}});
};

Products.allow({
    update: function(userid, product) {
        return isAdmin();
    },
    insert: function(userid, product) {
        return isAdmin();
    },
    remove: function(userid, product) {
        return isAdmin();
    }
});