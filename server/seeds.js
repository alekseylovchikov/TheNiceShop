var productsSeeds = [
    {
        "sku": "art1",
        "name": "Кошелек",
        "image": "img_1.jpg",
        "summary": "Кошелек из кожи",
        "description": "Очень крутой и модный кошелек из кожи...",
        "price": 4010,
        "inventory": 55,
        "status": "published",
        "cost": 3124,
        "vendor": {
            "id": 1,
            "country": "Россия",
            "name": "ZI",
            "url": "http://vk.com/id1",
            "slug": "zi"
        },
        date: new Date().toLocaleDateString(),
        category: "кошельки"
    },
    {
        "sku": "art2",
        "name": "Кошелек",
        "image": "img_2.jpg",
        "summary": "Кошелек из кожи",
        "description": "Очень крутой и модный кошелек из кожи...",
        "price": 2010,
        "inventory": 99,
        "status": "published",
        "cost": 2325,
        "vendor": {
            "id": 1,
            "country": "Россия",
            "name": "ZI",
            "url": "http://vk.com/id1",
            "slug": "zi"
        },
        date: new Date().toLocaleDateString(),
        category: "кошельки"
    },
    {
        "sku": "art3",
        "name": "Кошелек",
        "image": "img_3.jpg",
        "summary": "Кошелек из кожи",
        "description": "Очень крутой и модный кошелек из кожи...",
        "price": 2400,
        "inventory": 22,
        "status": "published",
        "cost": 5320,
        "vendor": {
            "id": 1,
            "country": "Россия",
            "name": "ZI",
            "url": "http://vk.com/id1",
            "slug": "zi"
        },
        date: new Date().toLocaleDateString(),
        category: "кошельки"
    },
    {
        "sku": "art4",
        "name": "Сумка",
        "image": "img_4.jpg",
        "summary": "Сумка из кожи",
        "description": "Очень крутая и модная сумка из кожи. Фирмы изготовитель <strong>ZI</strong>, г. Москва",
        "price": 3150,
        "inventory": 33,
        "status": "published",
        "cost": 2324,
        "vendor": {
            "id": 1,
            "country": "Россия",
            "name": "ZI",
            "url": "http://vk.com/id1",
            "slug": "zi"
        },
        date: new Date().toLocaleDateString(),
        category: "сумки"
    }
];

if(Products.find().count() === 0) {
    _.each(productsSeeds, function(product) {
        Products.insert(product);
        console.log("Inserted ", product.sku);
    });
}

if(Meteor.users.find().count() === 0) {
    var id = Accounts.createUser({
        username: "Administrator",
        email: "svdmusic@gmail.com",
        password: "220988221090dD#$%",
        profile: { name: "Aleksey Lovchikov" },
        roles: []
    });

    Roles.addUsersToRoles(id, ["admin"]);
    console.log("Added Admin user...");
}

if(Vendors.find().count() === 0) {
    var vendors = [
        {
            id: 1,
            slug: "zi",
            name: "Zi",
            description: "Мы занимаемся изготовлением различных аксессуаров из натуральной кожи. Мужских и женских, разной ширины и длины, разнообразного дизайна и цвета.",
            image: "zi.jpg"
        },
        {
            id: 2,
            slug: "cloud",
            name: "Cloud Store",
            description: "Мы занимаемся изготовлением различных аксессуаров из натуральной кожи. Мужских и женских, разной ширины и длины, разнообразного дизайна и цвета.",
            image: "cloud.jpg"
        }
    ];

    _.each(vendors, function(vendor) {
        Vendors.insert(vendor);
        console.log("Added vendor:", vendor.name);
    });
}