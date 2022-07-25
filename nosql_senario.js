const users = [
    {
        userId: 1,
        name: 'iqbal',
        postId: 101
    },
    {
        userId: 2,
        name: 'sajon',
        postId: 201
    },
    {
        userId: 3,
        name: 'emran',
        postId: 301
    }
];

const Posts = [
    {
        postId: 101,
        userId: 1,
        description: 'Hi Its Post 101'
    },
    {
        postId: 201,
        userId: 2,
        description: 'Hi Its Post 201'
    },
    {
        postId: 301,
        userId: 3,
        description: 'Hi Its Post 301'
    }
];

const post = Posts.find(post => post.userId === 3)
console.log(post.description)
