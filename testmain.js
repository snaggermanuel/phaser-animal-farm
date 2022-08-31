var game  = new Phaser.Game(640, 360, Phaser.AUTO);

var GameState = {
    preload: function(){
        this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken','assets/images/chicken.png');
        this.load.image('horse', 'assets/images/pig.png');
        this.load.image('sheep', 'assets/images/sheep3.png');
    },
    create: function(){

    },

    update: function(){

    }
};

game.state.add('GameState', GameState);
game.state.start('GameState');

//this game will have only 1 state
var GameState = {
    //load the game assets before the game starts
    preload: function() {
       this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse','assets/images/horse.png');
        this.load.image('pig','assets/images/pig.png');
        this.load.image('sheep','assets/images/sheep3.png');
    
    },
    //executed after everything is loaded
    create: function() {
      
        this.background = this.game.add.sprite(0, 0, 'background');

     this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
     this.scale.pageAlignVertically = true;

    //create a sprite for the background
    this.background = this.game.add.sprite(0,0, 'background');

    //center of the world
    this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY,'chicken');

    //place a sprite by it's center, not th top-left corner
    this.chicken.anchor.setTo(0.5,0.5); // or just this.chicken.

    this.chicken.scale.setTo(2,1);

    this.horse = this.game.add.sprite(120,10, 'horse');
    this.horse.scale.setTo(0.5);

    this.pig = this.game.add.sprite(500, 300, 'pig');
    this.pig.anchor.setTo(0.5);

    //flip on x
    this.pig.scale.setTo(-1,1);

    this.sheep = this.game.add.sprite(100,250,'sheep');
    this.sheep.scale.setTo(0.5);
    this.sheep.achlor.setTo(0.5);
    this.sheep.angle = 90;

    },
    //this is executed multiple times per second
    update: function() {
        this.sheep.angle += 0.5;
    },

    //play animal animation
    animateAnimal: function(sprite,event){
    console.log('animate..');
    },
    //switch animal
    switchAnimal: function(sprite,event){
               var newAnimal, endX;
               if(sprite.customParams.direction > 0)
               newAnimal = this.animals.next();
               endX
    }
    else {
        newAnimal = this.animals.previous();
    }

};

//initiate the Phaser framework
var game = new Phaser.Game(640,360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
    

//have the game centered horizontally
this.scale.pageAlignHorizontally = true;
this.scale.pageAlignVertically = true;

//screen size will be set automatically
this.scale.setScreenSize(true);

//create a sprite for the background
this.background = this.game.add.sprite(0,0, 'background')

this.pig = this.game.sprite(this.game.world.centerX, this.game.world.centerY)
this.pig.anchor.setTo(0.5);
this.leftArrow.scale.x = -1;
this.leftArrow.customParams = {direction: -1};

//left arrow allow user input
this.leftArrow.inputEnabled = true;
this.leftArrow.input.pixelPerfectClick = true;
this.leftArrow.events.onInputDown.add(this.switchAnimal,this);

//right arrow
this.rightArrow.inputEnabled = true;
this.rightArrow.input.pixelPerfectClick = true;
this.rightArrow.events.onInputDown.add(this.switchAnimal, this);

},
//this is exected multiple times per second
update: function() {
},


};

//initiate the Phaser framework
var game = new Phaser.Game(640,360, Phaser.AUTO);

game.state.add('gameState', GameState);
game.state.start('GameState');


//scaling options
this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

//have the game centered horizontally
this.scale.pageAlignHorizontallly = true;
this.scale.pageAlignVertically = true;

//create a sprite for the background
this.background = this.game.add.sprite(0,0, 'background')

//group for animals
var animalData = [
    {key: 'chicken', text: 'CHICKEN'},
    {key: 'horse', text: 'HORSE'},
    {key: 'pig' ,text: 'PIG'},
    {key: 'sheep', text: 'SHEEP'}
];

//group for animals
var animalData = [
{key: 'chicken', text: 'CHICKEN'},
{key: 'horse', text: 'PIG'},
{key: 'sheep', text: 'SHEEP'}
];

this.animals = this.game.add.group();

var self = this;

animalData.forEach(function(element){
    self.animals.create(200, self.game.world.centerY, element.key);
});

//left arrow
this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
this,leftArrow.anchor.setTo(0.5);
this.leftArrow.scale.x = -1;
this.leftArrow.customParams = {direction: -1};









]

//left arrow
this.leftArrow = this.game.add.sprite(60, this.game.world.centerY,'arrow');
this.leftArrow.anchor.setTo(0.5);
this.leftArrow.scale.x = -1;
this.leftArrow.customParams = {direction: -1};

//left arrow user input
this.leftArrow.inputEnabled = true;
this.leftArrow.input.pixelPerfectClick = true;
this.leftArrow.events.onInputDown.add(this.switchAnimal,this);

]

//left arrow user input
this.leftArrow.inputEnabled = true;
this.leftArrow.input.pixelPefectClick = true;
this.leftArrow.events.onInputDown.add(this.switchAnimal,this);

//right arrow
this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow')
this.rightArrow.anchor.setTo(0.5);
this.rightArrow.customParams = {direction: 1};

//right arrow user input
this.rightArrow.inputEnabled = true;
this.rightArrow.input.pixelPerfectClick = true;
this.rightArrow.events.onInputDown.add(this.switchAnimal, this);

    },
    //this is executed multiple times per second
    update: function() {
    },
    


};


    }

if(sprite.customParams.directon > 0) {
    newAnimal = this.animals.next();
    endX = 640 + this.currentAnimal.width/2;
}
else {
    newAnimal = this.animals.previous();
    endX = -this.currentAnimal.width/2;
}

this.currentAnimal.x = endX;
newAnimal.x = this.game.world.centerX;
this.currentAnimal;
   }

};


//according to the arrow they pressed,whch animal comes in
if(sprite.customParams.direction > 0){
newAnimal = this.animals.next();
newAnimal.x = -newAnimal.width/2;
endX = 640 + this.currentAnimal.width/2;
}
else {
    newAnimal = this.animals.previous();
    newAnimal.x = 640 + newAnimal.width/2;
    endX = -this.currentAnimal.width/2;
}

var newAnimalMovement = this.game.add.tween (newAnimal);
newAnimalMovement.to({x: this.game.world.centerX}, 1000);
newAnimalMovement.start();

var currentAnimalMovement = this.game.add.tween(currentAnimal);
currentAnimalMovement.to({x:this.game.world.centerX}, 1000);
    currentAnimalMovement.start();

    this.currentAnimal = newAnimal;
  }

};

//initiate the Phaser framework
var game = new Phaser.Game(640,360, Phaser.AUTO);



var newAnimal, endX;
//according to the arrow they pressed, which animal comes in 
if(sprite.customParams.direction > 0) {
    newAnimal = this.animals.previous();
    newAnimal.x = 640 + newAnimal.width/2;
    endX = -this.currentAnimal.width/2;
}

//tween animations, moving on x
var newAnimalMovement = game.add.tween(newAnimal);
newAnimalMovement.to({ x: this.game.world.centerX }, 1000);
newAnimalMovement.onComplete.add(function(){
    this.isMoving = false;
}, this);
newAnimalMovement.start();

var currentAnmalMovement = game.add.tween(this.currentAnimal);
currentAnimalMovement.to({x: endX }), 1000);
currentAnimalMovement.start();

this.currentAnimal = newAnimal;

}