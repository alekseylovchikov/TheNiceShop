Products = new Meteor.Collection('products');

Products.featured = function() {
    var featuredSkus = ["art1", "art2", "art3", "art4"];

    return Products.find({sku: {$in: featuredSkus}});
};

Products.newProduct = function() {
    return Products.find({}, {sort: {date: -1}});
};

Products.allow({
    update: function(userId, product) {
        return isAdmin();
    },
    insert: function(userId, product) {
        return isAdmin();
    },
    remove: function(userId, product) {
        return isAdmin();
    }
});