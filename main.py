def on_button_pressed_a():
    global list2
    list2 += -1
    sprite.set(LedSpriteProperty.X, list2)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global up_and_down
    up_and_down += 1
    sprite.set(LedSpriteProperty.Y, up_and_down)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global list2
    list2 += 1
    sprite.set(LedSpriteProperty.X, list2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    global up_and_down
    up_and_down += -1
    sprite.set(LedSpriteProperty.Y, up_and_down)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

up_and_down = 0
list2 = 0
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)
enemy = game.create_sprite(0, 0)
game.add_life(1)
game.start_countdown(30000)

def on_forever():
    if 100 < randint(0, 110):
        enemy.move(randint(1, -1))
        enemy.if_on_edge_bounce()
    if 100 < randint(0, 200):
        enemy.turn(Direction.RIGHT, 90)
        enemy.if_on_edge_bounce()
    if sprite.is_touching(enemy):
        game.add_score(1)
basic.forever(on_forever)
