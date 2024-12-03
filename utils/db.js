import mongoose  from "mongoose";

const DBcon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('mongoDB connected');
        
        
    } catch (error) {
        console.log('mongoDB error',error);
        
    }
}

export default  DBcon;