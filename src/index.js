import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';

const save = (jsonData) => {
    return new Promise(((resolve, reject) => {
        fs.writeFile ("us.csv", jsonData, function(err) {
            if (err) reject(err);
            resolve("complete")
        });
    }));
}
const createRandomUser = async (amount,password,baseEmail) => {
    let x = 'First Name [Required],Last Name [Required],Email Address [Required],Password [Required],Password Hash Function [UPLOAD ONLY],Org Unit Path [Required],New Primary Email [UPLOAD ONLY],Recovery Email,Home Secondary Email,Work Secondary Email,Recovery Phone [MUST BE IN THE E.164 FORMAT],Work Phone,Home Phone,Mobile Phone,Work Address,Home Address,Employee ID,Employee Type,Employee Title,Manager Email,Department,Cost Center,Building ID,Floor Name,Floor Section,Change Password at Next Sign-In,New Status [UPLOAD ONLY],Advanced Protection Program enrollment';
    x += '\r\n';
    for (let i = 0; i < amount; i++) {
        const s = faker.person.sex();
        const first = faker.person.firstName(s);
        const last = faker.person.lastName(s);
        const email = `${first}_${last}@${baseEmail}`;
        x += `${first},${last},${email},${password},,,/Online IT,,,,,,,,,,,,,,,,,,,,False,,False`;
        x += '\r\n';
    }
    await save(x);
}
createRandomUser(10,`NasiKucing2022`,`circletrade.cloud`).then(() => console.log("complete")).catch(console.error);
