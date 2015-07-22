isAdmin = function() {
    var loggedInUser = Meteor.user();
    var result = false;

    if(loggedInUser) {
        if(Roles.userIsInRole(loggedInUser, ['admin'])) {
            result = true;
        }
    }

    return result;
};