import axios from "axios";

const LoadData = () => {
        let status = "pending";
        let activityList = null;

        const suspender = axios({
            url: "http://localhost:8080/activity",
            method: "get",
        }).then((response) => {

            activityList = (response.data.sort(function (a, b) {
                return new Date(b.startDate) - new Date(a.startDate);
            }))


            status = "fulfilled";
        }).catch((error) => {
            status = "rejected";
            activityList = error;
        });
        return {
            read() {
                if (status === "pending") {
                    throw suspender;
                } else if (status === "fulfilled") {
                    return activityList;
                }
            },
        };
    }
;

function fetchActivity() {
    return {
        activityData: LoadData()
    };
}

export default fetchActivity;