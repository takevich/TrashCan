class Paper
{
	constructor(x, y, width, height)
	{
		var options={
			restitution: 0.3,
            friction: 0,
            isStatic: false,
            density: 1.2,			
			}
		this.width = width;
		this.height = height;
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}