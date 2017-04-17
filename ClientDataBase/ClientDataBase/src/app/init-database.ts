export class Init {
    public load (){
        if (localStorage.getItem('ClientDataBase') === null || localStorage.getItem('ClientDataBase') == undefined){
            console.log("Database NO Creating.....")
            
            let dataBase = [{
                name:"Aleks",
                address:"Mogilev",
                phone:"012",
                email:"tut@.bt"
            }]
            localStorage.setItem('ClientDataBase', JSON.stringify(dataBase));
            return;
        }
        else {
            console.log("Find DataBase");
        }
    }

}