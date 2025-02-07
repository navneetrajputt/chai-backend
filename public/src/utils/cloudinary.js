import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"



    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUD_API_SECRET
    });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // cloudinary the file on cloudinary
        const response =await cloudinary.uploader.upload
        (localFilePath, {
            resource_type:"auto"
        })
        //file has been uploaded successfull
        console.log("file is upload on cloudnary",
        response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the local saved filesas the uplad operation got failed
        return null;
    }

}

export {uploadOnCloudinary}


    
// ccloudinary.v2.uploader.upload()
