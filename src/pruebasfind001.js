db.inventory.find( { status: "D" } )

db.inventory.find( { status: {$eq: "D" } } )

db.inventory.find( { status: { $in: [ "A", "D" ] } } ).count()

db.inventory.find({}).count()

db.inventory.find({$or:[ {status: {$eq: "A"} },{status: {$eq: "D"} }]}).pretty()

/*
    un and inplícito
    Documentos en los que status = "A" y qty = 25
*/
db.inventory.find({
    status: "A",
    qty: 25
}).pretty()

db.inventory.find({ $and: [  {status: "A"},   {qty: 25}    ]  })

db.inventory.find({
    qty: 25
}).pretty()

db.inventory.find({
    status: "A"
}).pretty()

/*
 No se puede usar el mismo campo en un and implícito
*/
db.inventory.find({
    qty: {$lt: 55},
    qty: {$gt: 45}
}).pretty()

db.inventory.find({
    $and: [ {qty: {$lt: 55} },  {qty: {$gt: 45} } ]
}).pretty()




