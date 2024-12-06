import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

/// Define db name
const DB_NAME='cricket-score-app'


const connection: ConnectionObject = {}

const dbConnect = async():Promise<void> => {

        // Check if db connection is alredy connected
        if(connection.isConnected){
            console.log("Already Connected to database");
            return
        }
        
        // if db connection is first time connect 
        try {
            const db = await mongoose.connect(`${process.env.MONGODB_URI || ''}/`, {dbName: DB_NAME})
            

            connection.isConnected = db.connections[0].readyState;
            console.log('DB Connected Successfully');
            
        } catch (error) {
            console.log('Database connection failed', error);
            
            process.exit(1)
        }
}

export default dbConnect;