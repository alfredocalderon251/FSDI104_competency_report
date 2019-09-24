class Character{
    constructor(name,energy,id){
        this.name=name;
        this.energy=energy;        
        this.id=id;

    }

    display=function(){
        document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`;
    }

    attack=function(opponent,item){

        if(this.energy>0)
        {
            let newEnergy=opponent.energy-item.ihitpoints;
            opponent.energy=newEnergy;
            if(opponent.energy<=0)
            {
                opponent.energy=0;
                document.getElementById(this.id).innerHTML="<strong>You WIN, CONGRATULATIONS!!</strong>"

                document.getElementById(opponent.id).innerHTML="<strong>YOU LOST , SORRY :(</strong>";

                document.getElementById('console').innerHTML="GAME OVER, THANKS FOR PLAYING!!";
                
            }
            else
            {
                opponent.display();
                document.getElementById('console').innerHTML=`${this.name} is attacking ${opponent.name} with a ${item.img}`;
            }
            
        }
        

    }
}

//objects Characters
const c1=new Character("Mario",100,"c1");
const c2=new Character("Bowser",100,"c2");
c1.display();
c2.display();

//Items Code
class Item{
    constructor(iName,ihitpoints,img){
        this.ihitpoints=ihitpoints;
        this.iName=iName;
        this.img=`<img class="item" src="${img}">`;

    }
}


const item1=new Item('Goomba',20,'img/goomba.png');
const item2=new Item('Fire Flower',30,"img/fireflower.png")
const item3=new Item('Shell',35,'img/shell.png')

const item4=new Item('Blue Shell',40,'img/blueshell.png')
const item5=new Item('Frozen Flower',30,'img/frozenflower.png')
const item6=new Item('Star',60,'img/star.png')
const item7=new Item('boomerang',25,'img/boomerang.png')



const items=[item1,item2,item3,item4,item5,item6,item7];

//General Functions
function NewGame()
{
    c1.energy=100;
    c2.energy=100;
c1.display();
c2.display();
document.getElementById('console').innerHTML="";
};

//console.log(Math.floor(Math.random()*3));

function selectItem(){
    let selection=Math.floor(Math.random()*7);
    return items[selection];
}
console.log(selectItem());

//const c3=new ("Luigi",100,10);