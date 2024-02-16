"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(url).then(function (response) {
    var post = response.data;
    var id = post.id, title = post.title, userId = post.userId;
    console.log("The post with id: ".concat(id, " has title: ").concat(title, " and author: ").concat(userId));
});
