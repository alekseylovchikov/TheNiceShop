Template.homeIndex.helpers({
    featured: function() {
        return Products.featured();
    },
    newProduct: function() {
        return Products.newProduct();
    }
});