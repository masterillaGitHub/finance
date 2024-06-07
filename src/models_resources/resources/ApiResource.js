import ApiResourceBase from "@/models_resources/resources/ApiResourceBase.js";

export default class ApiResource extends ApiResourceBase
{
    getBaseUrl() {
        return '/api/v1';
    }
}
