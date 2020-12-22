class dustbin{
    constructor(x, y){
        this.x = x
        this.y = y
        this.dustbinwidth = 200
        this.dustbinheight = 215
        this.wallthickness = 20
        this.image = loadImage("dustbingreen.png")
        this.bottombody = Bodies.rectangle(this.x, this.y, this.dustbinwidth, this.wallthickness,{isStatic:true})
        this.leftwallbody = Bodies.rectangle(this.x-this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness,this.dustbinheight,{isStatic:true})
        this.rightwallbody = Bodies.rectangle(this.x+this.dustbinwidth/2, this.y-this.dustbinheight/2, this.wallthickness,this.dustbinheight,{isStatic:true})
    World.add(world, this.bottombody)
    World.add(world, this.leftwallbody)
    World.add(world, this.rightwallbody)
    }
    display(){
        var posbottom = this.bottombody.position
        var posleft = this.leftwallbody.position
        var posright = this.rightwallbody.position
        push()
        imageMode(CENTER)
        image(this.image, 0, -this.dustbinheight/2, this.dustbinwidth, this.dustbinheight)
        pop ()
    }
}