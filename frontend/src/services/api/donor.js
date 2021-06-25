import api from './base'
export default class DonorService {
    static getDonors(){
        return api.get('donors');
    }
}
