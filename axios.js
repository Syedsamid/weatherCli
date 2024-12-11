import axios from "axios";

async function makeApiCaall() {
    try{
        let responseData = await axios.get("https://api.github.com/users/Syedsamid");
        
        console.log(responseData.data);
    } catch (error){
        console.log(error);
    }
}
makeApiCaall()