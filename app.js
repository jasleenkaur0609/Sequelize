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
        const user = seq_obj.define("user",{
            username: DataTypes.TEXT,
            Password: DataTypes.TEXT,
            dob: DataTypes.DATE
        })
        seq_obj.sync({});
        
        // Inserting data in the database
        // const result = user.create({username: "Arvind Sharma", Password: "123@#", dob: Date()}).then((result) => {
        //     console.log(result.id);
        // });
        // 07-03-23
        // Selecting data from the database
        // const result = user.findAll({where: {id:5}}).then((result) => {
        //     console.log(result);
        // });

        // Updating the data
        // user.update({username: "Jasleen Kaur", Password: "Hello123"},{where:{id:2}}).then((result) => {
        //     console.log("Data Updated")
        // });

        // Deleting the data
        user.destroy({where: {id:3}}).then((result)=>{console.log("Record Deleted " + result)});
    });
        
    
    
    // seq_obj.closes();

}
catch(error){
    console.log(error);
}