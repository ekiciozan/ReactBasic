const user = {
    name: 'ozanekici',
    mail: 'ekiciozann@gmail.com',
    city: 'Istanbul',
    roles: ['admin','customer'],
    getRoles: function(){
        this.roles.forEach((r)=>{
                console.log(r);
                console.log(this.name);
        })
    }
}

user.getRoles();
////////////////////////////////////////
const addES5 = function(){
    console.log(arguments);
}
addES5(5,6,7);

////////////////////////////////////////