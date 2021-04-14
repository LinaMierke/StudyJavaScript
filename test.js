function fixMe(my_list) {

    if (my_list.length % 2 == 0) { // imperative code
        var new_list = [];
        for (item of my_list) {
            for (element of item) {
                new_list = new_list.push(element);
            }
        }
    } else {  // functional code
        var new_list = my_list.flat(0);
    }

    /*
    sorting hierarchy:
        1. desc by x%5
        2. desc by x
    */
    new_list.sort(function (x, y) {
        if (x % 5 === y % 5) {
            return x - y
        } else {
            return x % 5 - y % 5
        }
    })
    return new_list
}

fixMe([ [ 3, 4 ], [ 2, 6 ] ])