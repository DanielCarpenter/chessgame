class Board {
    constructor(config) {
        this.board = [['br','bn','bb','bq','bk','bb','bn','br'],
                      ['bp','bp','bp','bp','bp','bp','bp','bp'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['ec','ec','ec','ec','ec','ec','ec','ec'],
                      ['wp','wp','wp','wp','wp','wp','wp','wp'],
                      ['wr','wn','wb','wq','wk','wb','wn','wr']];
    }

    // Returns board array to be used by front-end
    getState() {
        return this.board;
    }
    arrayToGrid(x, y) {
        var gridX = game_dimension/8 * x + off_set;
        var gridY = game_dimension/8 * y + off_set;
        return { gridX, gridY };

    }
    gridToArray(x, y) {
        var arrayX = (x - off_set) / (2 * off_set);
        var arrayY = (y - off_set) / (2 * off_set);
        console.log(arrayX, arrayY);
        return { arrayX, arrayY};
    }
    checkSpace(x, y) {
        var grid_coord = this.gridToArray(x,y);
        console.log("checking:", grid_coord.arrayX, grid_coord.arrayY);
        return this.board[grid_coord.arrayY][grid_coord.arrayX];
    }
    updatePosition(x,y, piece) {
        var grid_coord = this.gridToArray(x,y);
        this.board[grid_coord.arrayY][grid_coord.arrayX] = piece;
    }
    
}