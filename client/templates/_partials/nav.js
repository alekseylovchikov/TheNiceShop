Template.nav.helpers({
    vendors: function() {
        return Vendors.find({}, {sort: {name: 1}});
    },
    category: function() {
        return Category.find({}, {sort: {name: 1}});
    }
});