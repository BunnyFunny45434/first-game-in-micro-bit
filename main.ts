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
game.setLife(10)
let score = 0
basic.forever(function () {
    if (game.isRunning()) {
        score += 1
        basic.pause(1000)
    }
    if (game.isGameOver()) {
        basic.showString("your score is")
        basic.showNumber(score)
    }
})
basic.forever(function () {
    if (100 < randint(0, 110)) {
        enemy.move(randint(1, -1))
        enemy.ifOnEdgeBounce()
    }
    if (100 < randint(0, 200)) {
        enemy.turn(Direction.Right, 90)
        enemy.ifOnEdgeBounce()
    }
})
basic.forever(function () {
    if (sprite.isTouching(enemy)) {
        game.removeLife(1)
        basic.pause(2000)
        score += -1
    }
})
