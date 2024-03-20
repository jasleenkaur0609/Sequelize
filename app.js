// Connection of Database
const {DataTypes,Model,Sequelize} = require('sequelize');
//  To create the connection with the databse
const seq_obj = new Sequelize("g10_sequelize","root","password",{
    hostname:"localhost",
    dialect:"mysql"
});

// Testing the connection and Model Declaration

try{
    
    seq_obj.authenticate().then(() => {
        console.log("Connection established");
        const user = seq_obj.define("user",{
            username: DataTypes.TEXT,
            Password: DataTypes.TEXT,
            dob: DataTypes.DATE
        })
        seq_obj.sync({});
        
        // Insertion of Data in the table
        // const result = user.create({username: "Arvind Sharma", Password: "123@#", dob: Date()}).then((result) => {
        //     console.log(result.id);
        // });
        
        // To view the data or select command of the MySQL
        // const result = user.findAll({where: {id:5}}).then((result) => {
        //     console.log(result);
        // });

        // Updation of the Data 
        // user.update({username: "Jasleen Kaur", Password: "Hello123"},{where:{id:2}}).then((result) => {
        //     console.log("Data Updated")
        // });

        // Deletion of data
        user.destroy({where: {id:3}}).then((result)=>{console.log("Record Deleted " + result)});
    });
        
    
    
    // seq_obj.closes();

}
catch(error){
    console.log(error);
}
