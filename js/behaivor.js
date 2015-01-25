

var Comportamiento=function(game){
    this.game = game;
}


Comportamiento.prototype={    
    setUp : function(player){
        this.player = player;
        this.wallA=new Array();
        this.wallB=new Array();
        this.WALLZISE = 10;
        this.walls = this.game.add.group();
        this.walls.enableBody = true;
        
        for (i = 0; i < this.WALLZISE; i++){
                this.wallA.push(this.walls.create(0, 0+60*i, 'killerwall'));
        }
        for (i = 0; i < this.WALLZISE; i++){
                this.wallB.push(this.walls.create(710, 0+60*i, 'killerwall'));
        }
    
    },
    
    update: function(){
        for (i = 0; i < this.WALLZISE; i++){
            this.wallA[i].body.velocity.x = 100;
        }
        for (i = 0; i < this.WALLZISE; i++){
            this.wallB[i].body.velocity.x = -100;
        }
            
            
             //this.game.physics.arcade.overlap(this.player, this.walls, this.crash());
         this.game.physics.arcade.collide(this.player, this.walls, this.crash,null, this);
    },
    
    crash : function(){
                //console.log("xD");
                this.objects = this.game.add.group();
                this.objects.enableBody = true;
                
                //alert(this.objects);
                this.blood = this.objects.create(this.player.body.x+10,this.player.body.y+10, 'blood');
                this.game.state.start('GameOver');
    },
    
    destroy_all: function(){
        this.walls.destroy();
        this.objects.destroy();
    } 
    
};


