input.onButtonPressed(Button.A, function () {
    list += -1
    sprite.set(LedSpriteProperty.X, list)
})
input.onButtonPressed(Button.AB, function () {
    up_and_down += 1
    sprite.set(LedSpriteProperty.Y, up_and_down)
})
input.onButtonPressed(Button.B, function () {
    list += 1
    sprite.set(LedSpriteProperty.X, list)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    up_and_down += -1
    sprite.set(LedSpriteProperty.Y, up_and_down)
})
let up_and_down = 0
let list = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let enemy = game.createSprite(0, 0)
list = 2
up_and_down = 2
sprite.set(LedSpriteProperty.X, list)
sprite.set(LedSpriteProperty.Y, up_and_down)
game.addLife(1)
game.startCountdown(30000)
basic.forever(function () {
    if (100 < randint(0, 110)) {
        enemy.move(randint(1, -1))
        enemy.ifOnEdgeBounce()
    }
    if (100 < randint(0, 200)) {
        enemy.turn(Direction.Right, 90)
        enemy.ifOnEdgeBounce()
    }
    if (sprite.isTouching(enemy)) {
        game.addScore(1)
    }
})
