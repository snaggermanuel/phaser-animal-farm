//this game will have only 1 state
var GameState = {
    //initiate game settings
    init: function() {
      //scaling options
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  
      //have the game centered horizontally
      this.scale.pageAlignHorizontally = true;
      this.scale.pageAlignVertically = true;
      
    },
  
    //load the game assets before the game starts
    preload: function() {    
        this.load.image('background', 'assets/images/background.png');
        this.load.image('chicken', 'assets/images/chicken.png');
        this.load.image('horse','assets/images/c37.jpg');
        this.load.image('pig','assets/images/pig.png');
        this.load.image('sheep','assets/images/sheep3.png');
        this.load.image('arrow','assets/images/arrow.png');
    },
  
    //executed once after everything is loaded
    create: function() {
      //create a sprite for the background
      this.background = this.game.add.sprite(0, 0, 'background');
      
      //group for animals
      var animalData = [
        {key: 'chicken', text: 'CHICKEN'},
        {key: 'horse', text: 'HORSE'},
        {key: 'pig' ,text: 'PIG'},
        {key: 'sheep', text: 'SHEEP'}
    ];
  
      //create a group to store all animals
      this.animals = this.game.add.group();
  
      var self = this;    
      var animal;
      animalData.forEach(function(element){
        //create each animal and save it's properties
        animal = self.animals.create(-1000, self.game.world.centerY, element.key, 0);
  
        //I'm saving everything that's not Phaser-related in an object
        animal.customParams = {text: element.text, sound: self.game.add.audio(element.audio)};
  
        //anchor point set to the center of the sprite
        animal.anchor.setTo(0.5);

      });
  
      //place first animal in the middle
      this.currentAnimal = this.animals.next();
      this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);

      
      //left arrow
      this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
      this.leftArrow.anchor.setTo(0.5);
      this.leftArrow.scale.x = -1;
      this.leftArrow.customParams = {direction: -1};
  
      //left arrow user input
      this.leftArrow.inputEnabled = true;
      this.leftArrow.input.pixelPerfectClick = true;
      this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
  
      //right arrow
      this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
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
    
    //play animal animation and sound
    animateAnimal: function(sprite, event) {
      sprite.play('animate');
    },
    
    //switch animal
    switchAnimal: function(sprite, event) {
  
      //if an animation is taking place don't do anything
      if(this.isMoving) {
        return false;
      }
  
      this.isMoving = true;
  
      //hide text
      this.animalText.visible = false;
  
      var newAnimal, endX;
      //according to the arrow they pressed, which animal comes in
      if(sprite.customParams.direction > 0) {
        newAnimal = this.animals.next();
        newAnimal.x = -newAnimal.width/2;
        endX = 640 + this.currentAnimal.width/2;
      }
      else {
        newAnimal = this.animals.previous();
        newAnimal.x = 640 + newAnimal.width/2;
        endX = -this.currentAnimal.width/2;
      }
  
      //tween animations, moving on x
      var newAnimalMovement = game.add.tween(newAnimal);
      newAnimalMovement.to({ x: this.game.world.centerX }, 1000);
      newAnimalMovement.onComplete.add(function()
        {
          this.isMoving = false;
  
          //show text
          this.showText(newAnimal);
        }, this);
      newAnimalMovement.start();
  
      var currentAnimalMovement = game.add.tween(this.currentAnimal);
      currentAnimalMovement.to({ x: endX }, 1000);
      currentAnimalMovement.start();
  
      this.currentAnimal = newAnimal;
    },

  };
  
  //initiate the Phaser framework
  var game = new Phaser.Game(640, 360, Phaser.AUTO);
  
  //add the state to the game object
  game.state.add('GameState', GameState);
  
  //launch the state
  game.state.start('GameState');