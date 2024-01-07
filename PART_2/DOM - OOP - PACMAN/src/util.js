function $( tag, className ) { // $('<div>')
    if (tag.startsWith("<") && tag.endsWith(">")) {
        let element = document.createElement(tag.substring(1, tag.length-1))
        if ( className !== undefined ) {
            element.className = className
        }
        return element
    } else {
        return document.querySelector(tag)
    }
}

function findOnMap (grid, classRef) {
    for (let ri = 0; ri < 10; ri++) {
        for (let ci = 0; ci < 10; ci++) {
            if (grid[ri][ci] instanceof classRef) {
                return grid[ri][ci]
            }
        }
    }
}

function randomCoord () {
    return parseInt(Math.random() * 9.9)
}

function randomPlace (grid) {
    let tries = 100
    while ( tries-- > 0 ) {
        let r = randomCoord()
        let c = randomCoord()
        if ( grid[r][c] instanceof Empty ) {
            return [r,c]
        }
    }
}

function movePacman (object, direction) {
    switch (direction) {
        case 'down':
            object.r < 9 ? object.grid[object.r++][object.c] = new Empty() : 0 ;
            break;
        case 'up':
            object.r > 0 ? object.grid[object.r--][object.c] = new Empty() : 0;
            break;
        case 'right':
            object.c < 9 ? object.grid[object.r][object.c++] = new Empty() : 0;
            break;
        case 'left':
            object.c > 0 ? object.grid[object.r][object.c--] = new Empty() : 0;
            break;
        default:
            break;
    }
    object.collisionUpdate()
}

function moveGhost (object, direction) {
    object.grid[object.r][object.c] = new Empty();
    switch (direction) {
        case 'down':
            object.grid[++object.r][object.c] = object
            break;
        case 'up':
            object.grid[--object.r][object.c] = object
            break;
        case 'right':
            object.grid[object.r][++object.c] = object
            break;
        case 'left':
            object.grid[object.r][--object.c] = object
            break;
        default:
            break;
    }
}
