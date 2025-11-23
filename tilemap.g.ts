// 自動產生的程式碼。請勿編輯。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "層級2":
            case "層級2":return tiles.createTilemap(hex`1000100001020202020202020202020202020203070000000000000000000000000000040700000000000000000000000c09000407000000000000000000000c000b0004070000000000000000000c00000b00040700000000000000000c0000000b000407000000000000000c000000000b0004070000000000000c00000000000b00040700000000000c0000000000000b000407000000000c000000000000000b0004070000000c00000000000000000b00040700000c0000000000000000000b000407000c000000000000000000000b0004070c00000000000000000000000b0004070a0a0a0a0a0a0a0a0a0a0a0a08000407060606060606060606060606060605`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 2 . 2 
2 . . . . . . . . . . 2 . 2 . 2 
2 . . . . . . . . . 2 . . 2 . 2 
2 . . . . . . . . 2 . . . 2 . 2 
2 . . . . . . . 2 . . . . 2 . 2 
2 . . . . . . 2 . . . . . 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . . . 2 . . . . . . . 2 . 2 
2 . . . 2 . . . . . . . . 2 . 2 
2 . . 2 . . . . . . . . . 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 2 . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthWest0], TileScale.Sixteen);
            case "層級1":
            case "層級1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "我的貼圖":
            case "tile1":return tile1;
            case "我的貼圖0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// 自動產生的程式碼。請勿編輯。
