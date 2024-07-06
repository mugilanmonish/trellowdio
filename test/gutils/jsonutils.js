import fs from "fs";

class JsonUtility {
    readDataFromJson(key) {
        let data = fs.readFileSync("./test/resource/data.json")
        let credentials = JSON.parse(data)
        let value = credentials.key;
        return value;
    }
    
}

export default new JsonUtility();