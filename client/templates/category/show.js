Template.categoryShow.helpers({
    products: function() {
        return Products.find({"category": this.slug});
    }
});