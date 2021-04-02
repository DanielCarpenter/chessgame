class Board {
    constructor() {
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
}