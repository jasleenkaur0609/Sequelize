// Connection of Database
const {DataTypes,Model,Sequelize} = require('sequelize');

const seq_obj = new Sequelize("g10_sequelize","root","password",{
    hostname:"localhost",
    dialect:"mysql"
});

// Testing the connection and Model Declaration

try{
    
    seq_obj.authenticate().then(() => {
        console.log("Connection established");
        const category = seq_obj.define("category",{catname: DataTypes.STRING});
         const item = seq_obj.define("item",{
            iname: DataTypes.STRING,
            price: DataTypes.INTEGER,
            dom: DataTypes.DATE,
            DOE: DataTypes.DATE
         });
        //   Relationship creation
        item.belongsTo(category);
        category.hasMany(item);
        //  To override the existing table
        // seq_obj.sync({force:true});
        // category.create({catname: "Electronics"});
        // category.create({catname: "Electricals"});
        // item.create({iname: "LED TV", price: 10000, dom: Date(), DOE: Date("2028-12-12 00:00:00"),categoryId:1});
        // item.create({iname: "Automatic press", price: 900, dom: Date(), DOE: Date("2027-12-12 00:00:00"),categoryId:2});
        item.findAll({include:[{model:category,required:true}]}).then((result)=>console.log(result));
    }); // end of then authenticate
    
}
catch(error){
    console.log(error);
}

