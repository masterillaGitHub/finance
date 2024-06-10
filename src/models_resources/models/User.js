import Model from "@/models_resources/models/Model";


export default class User extends Model
{
    _resourceName = 'users'
    _storageName = 'users'


    get fullName() {
        return this.first_name + ' ' + this.last_name;
    }
}
