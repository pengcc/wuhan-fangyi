

import store from '../store';
import { setDemand } from '../actions/dataset'


const getDemandAPI = 'http://3.0.108.253:8080/helpwuhan/getAllDemandList';

const sampleDemandRes = {
    "status": "success",
    "message": "[{\"id\":\"3\",\"item_type\":\"医疗\",\"title\":\"武汉大学中南医院\",\"full_content\":\"所需物资：xxxxxxx\",\"publish_date\":\"2020.01.25 8:00\",\"address\":\"湖北省武汉市武昌区东湖路169号武汉大学中南医院\",\"contact_person_name\":\"钟老师\",\"contact\":\"1502132921\",\"topic_status\":\"待解决\",\"urgency_rating\":\"5\",\"verify_status\":\"已核实\",\"publish_date_epoch_time\":\"1580041021\"},{\"id\":\"4\",\"item_type\":\"医疗\",\"title\":\"武汉大学中南医院2\",\"full_content\":\"所需物资：xxxxxxx\",\"publish_date\":\"2020.01.25 8:00\",\"address\":\"湖北省武汉市武昌区东湖路169号武汉大学中南医院\",\"contact_person_name\":\"钟老师\",\"contact\":\"1502132921\",\"topic_status\":\"待解决\",\"urgency_rating\":\"5\",\"verify_status\":\"已核实\",\"publish_date_epoch_time\":\"1580041021\"}]"
}
function fetchDemand () {
    // return fetch(getDemandAPI);
    return new Promise((resolve, reject) => {
        resolve(sampleDemandRes)
    });
}

export default function() {

    return function(dispatch) {
        return fetchDemand().then(
            (response) => {
                console.log(response.message);
                const message = response.message;
                // console.log(JSON.parse(message))
                dispatch(setDemand(JSON.parse(message)));
            },
            (error) => console.log(error)
        );
    }
}