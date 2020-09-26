 namespace People {

  interface IPeople {
        name:string;
        age?:number;
    }

    const list:IPeople[] = [
        {name:'Mike', age:40},
        {name: 'Mom'},
        {name:'Dad', age:84}
    ]
    var domList =  document.getElementById("list");

    const newList  = list.forEach((x) => {
        domList.innerHTML += '<div>' + x.name + x?.age +  '</div>'  
                            
    })

    console.log(newList);
 }