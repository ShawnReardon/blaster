namespace SpriteKind {
    export const Parry = SpriteKind.create()
    export const parriedProjectile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Parry, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.sonar.play()
    otherSprite.setVelocity(otherSprite.vx * -10, 0)
    otherSprite.setKind(SpriteKind.parriedProjectile)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setImage(assets.image`princessParry`)
    mySprite2.setKind(SpriteKind.Parry)
    timer.after(2000, function () {
        mySprite2.setKind(SpriteKind.Player)
        mySprite2.setImage(assets.image`princess`)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.zapped.play()
    scene.cameraShake(4, 500)
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . 3 3 . . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
        . . . 3 1 3 3 1 3 2 1 3 . . . . 
        3 3 3 3 2 1 3 1 1 1 3 . . . . . 
        3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
        . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
        . . . . . 2 1 1 1 3 3 2 3 3 3 . 
        . . . . 3 1 3 1 3 1 2 . . . . . 
        . . . 3 1 3 2 1 3 3 1 3 . . . . 
        . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
        . . 3 3 . . 3 1 3 . . 3 3 . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 1 3 . . . . . . . 
        . . . . . . 3 3 . . . . . . . . 
        `,img`
        . . 3 3 . . . 3 3 . . . . . . . 
        . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
        . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
        . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
        . 3 3 . . . . . 2 2 . 2 2 2 . . 
        3 1 1 2 2 . . . . . . . 3 3 . . 
        3 1 1 1 2 . . . . . . 2 1 1 3 3 
        3 1 1 2 . . . . . . 3 1 1 1 1 3 
        . 3 2 2 . . . . . . . 2 1 1 3 . 
        . . . . . . . 2 . . . . 3 3 . . 
        . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
        . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
        3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
        3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
        3 3 3 . . . . 3 3 . . . . 3 3 . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 3 . . . . . 
        . . . . . 3 . . . . 3 3 . . . . 
        . . . . 3 3 . . . . . 3 . . . . 
        . . . . 3 . . . 3 . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . 3 . . . . . . . . . . 3 . . . 
        3 3 . . . . . . . . . . 3 3 . . 
        3 . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . 3 . . . . . 3 . . 
        . . 3 3 . . . 3 . . . . . 3 3 . 
        . . 3 . . . . 3 . . . . . . 3 . 
        `],
    100,
    false
    )
    timer.after(850, function () {
        otherSprite.destroy()
    })
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.tilePath5, function (sprite, location) {
    sprite.setVelocity(50, sprite.vy * -1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.parriedProjectile, function (sprite, otherSprite) {
    music.bigCrash.play()
    sprite.destroy(effects.disintegrate, 500)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........bbbb..........
        ........bbddddbb........
        .......bddbbbbddb.......
        ......bdbbddddbbdb......
        .....bdbbdbbbbdbbdb.....
        .....bdbdbddddbdbdb.....
        .....cdbbdbbbbdbbdc.....
        .....cbdbbddddbbdbc.....
        .....efbddbbbbddbce.....
        .....eeffbddddbccee.....
        .....eeeeffcccceee......
        .....ceeeeeeeeeeee......
        .....ceeeeeeeeeeee......
        .....feeeeeeeeeeee......
        .....cceeeeeeeeeee......
        ......feeeeeeeeeee......
        .....6fceeeeeeeeee6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6666776...
        ..67768e67766777667776..
        ...668ee7768867788666...
        ......ee77eeee77ecee....
        ......ee6eeeeee6eef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeecf.....
        ......ceeeeeeeeeecf.....
        ......ceeeeeeeeeeff.....
        ......feeeeeeeeeefe.....
        .....6feeeeeeeeeef6.....
        ....6776eeeeeeeee676....
        ...6777666eeee6667776...
        ..6776ee67777777667776..
        ...668ee7768867788666...
        ......ee77eeee67ee......
        ......ee6eeeeee6ce......
        ......eefeeeeeeece......
        ......eeceeeeeeece......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeeeeeeeeefe......
        ......eeeeeeeeeece......
        .....6eeeeeeeeeece6.....
        ....6776eeeeeeeee676....
        ...6776666eeee6766776...
        ..6776ee77777777667776..
        ...668ce7768867788666...
        ......ce77eeee67ee......
        ......ce6eeeeee6ee......
        `, SpriteKind.Player)
})
let projectile: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ....22..................
    .22222222222222.........
    .2ffffffffffff2.........
    .2ffffffffffff2.........
    .2ffffffffff222.........
    .2fff22fffff2...........
    .2fff22222222...........
    .2fff22.................
    22ffff222...............
    ffffffff2...............
    ffffffff2...............
    222222222...............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
mySprite.setBounceOnWall(true)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 7))
mySprite2 = sprites.create(assets.image`princess`, SpriteKind.Player)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(15, 7))
controller.moveSprite(mySprite2)
scene.cameraFollowSprite(mySprite2)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 10)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, -10)
    projectile.setFlag(SpriteFlag.GhostThroughWalls, true)
})
