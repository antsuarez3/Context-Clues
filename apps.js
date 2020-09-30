window.addEventListener('DOMContentLoaded', function () {
    //5 items in friends array, array will get looped over 20 times (to get to 100)
    var friends = ['Bill', 'Mike', 'Wendy', 'Terry', 'Whitney'];
    var location = ['living room', 'kitchen', 'bathroom', 'pantry', 'patio', 'laundry room', 'bedroom', 'closet', 'theatre room', 'gazebo'];
    var weapons = ['knife', 'bookbag', 'pillow', 'gun', 'glass', 'charging cord', 'trash can', 'PS4 controller', 'candle', 'keychain', 'light bulb', 'water', 'paper towels', 'stove', 'pencil sharpener', 'picture frame', 'scissors', 'screwdriver', 'hot sauce', 'peanut butter'];
  
    function clickHandler(i) {
        return function() {
            alert(`I accuse ${friends[i % friends.length]} with the ${weapons[i % weapons.length]}
                in the ${location[i % location.length]}`)
        }
    }

    for (let i = 1; i < 101; i++) {
        var h3 = document.createElement('h3');
        h3.innerHTML = `Accusation ${i}`
        document.body.append(h3);
        h3.addEventListener('click', clickHandler(i));
    }
});

console.log('Hello World');