for food in old_fruit:
            if food.distance(snake)<20:
                time.sleep(1)
            screen.clear()
            screen.bgcolor("turquoise")
            screen.goto(0,0)
            screen.write("Game Over \n Your score is:{}".format(score),align="center",font=("Courier",30,"bold"))
        
        time.sleep(delay)
turtle.Terminator()