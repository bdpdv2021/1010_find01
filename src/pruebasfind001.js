db.inventory.find( { status: "D" } )

db.inventory.find( { status: {$eq: "D" } } )

db.inventory.find( { status: { $in: [ "A", "D" ] } } ).count()

db.inventory.find({}).count()

db.inventory.find({$or:[ {status: {$eq: "A"} },{status: {$eq: "D"} }]}).pretty()





