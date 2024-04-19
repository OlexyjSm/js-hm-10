
const user = {
    firstName: 'John',
    lastName: 'Doe',
    friends: [
        { firstName: 'Jane', lastName: 'Doe' },
        { firstName: 'Bob', lastName: 'Smith' },
        { firstName: 'Alice', lastName: 'Wonderland' },
    ],
    
    friendsInfo: function() {
        this.friends.forEach(friend => {
            console.log(`Friend: ${friend.firstName} ${friend.lastName}`);
        });
    }
};


const user2 = {
    name: 'Juan',
    surname: 'Hernandez',
    friends: [
        { name: 'Maria', surname: 'Garcia' },
        { name: 'Carlos', surname: 'Rodriguez' },
        { name: 'Ana', surname: 'Lopez' },
    ],
};


user.friendsInfo.call(user);
user.friendsInfo.call(user2);
