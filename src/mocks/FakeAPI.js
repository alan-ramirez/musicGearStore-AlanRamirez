const productos = [
    {id:'01', name:'articulo1', description:"Descripción 1", img: 'https://picsum.photos/200', stock:"2", price:"400"},
    {id:'02', name:'articulo2', description:"Descripción 2", img: 'https://picsum.photos/201', stock:"4", price:"600"},
    {id:'03', name:'articulo3', description:"Descripción 3", img: 'https://picsum.photos/202', stock:"3", price:"300"},
    {id:'04', name:'articulo4', description:"Descripción 4", img: 'https://picsum.photos/203', stock:"1", price:"100"},
    {id:'05', name:'articulo5', description:"Descripción 5", img: 'https://picsum.photos/204', stock:"6", price:"500"},
    {id:'06', name:'articulo6', description:"Descripción 6", img: 'https://picsum.photos/205', stock:"5", price:"700"},
]

export const getProducts = new Promise ((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout (() => {
            resolve (productos)
        },2000)
    } else {
        reject ('se pudrio todo')
    }
})