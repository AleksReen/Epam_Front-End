export class Init {
    public load (){
        if (localStorage.getItem('ClientDataBase') === null || localStorage.getItem('ClientDataBase') == undefined){
            console.log("ClientDataBase NO Creating NEW.....")
            
            let dataBase = [
                {name:"Aleksandr Reentovich", address:"Mogilev, Lenina str., 18-29", phone:"8-029-331-26-46", email:"aleks@tut.by"},
                {name:"Kovaloy Kirill", address:"Mogilev, Dimitrova str., 45-15", phone:"8-029-125-52-84", email:"kiril@tut.by"},
                {name:"Ardenov Ivan", address:"Mogilev, Solnechnaya str., 45-69", phone:"8-029-859-69-45", email:"ivan@tut.by"}]
            localStorage.setItem('ClientDataBase', JSON.stringify(dataBase));
            return;
        }
        else {
            console.log("ClientDataBase OK!");
        }
    }

}