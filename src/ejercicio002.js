/*
Cambiar la información inicial
*/

db.inventory.insertOne(
    { 
        item: "ebook", 
        qty: 25, 
        size: { 
            h: 8, 
            w: 10, 
            uom: "cm" 
        }, 
        status: "B" 
    }
 )