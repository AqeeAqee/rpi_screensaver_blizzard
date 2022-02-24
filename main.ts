let projectile: Sprite = null
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    control.runProgram(".menu")
})
game.onUpdateInterval(5000, function () {
    effects.blizzard.startScreenEffect(5000)
})
game.onUpdateInterval(100, function () {
    scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + randint(0, 1), scene.cameraProperty(CameraProperty.Y))
})
game.onUpdateInterval(200, function () {
    if (Math.percentChance(2)) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, randint(14, 6), randint(-1, -2))
        projectile.y = randint(44, 66)
        projectile.setKind(SpriteKind.Projectile)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . 3 3 
            . . . 3 3 3 . . 
            3 3 3 . . . 3 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `,img`
            . . . . . . . 3 
            . . . . . . 3 . 
            3 3 . . . 3 . . 
            . . 3 3 3 3 . . 
            . . . . . . 3 . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `],
        777,
        true
        )
    }
})
