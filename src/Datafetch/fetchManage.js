import axios from "axios";


const LoadData = () => {

    let status = "pending";
    let ManageList = null;

    const suspender = axios({
        url: "http://localhost:8080/management",
        method: "get",
    }).then((response) => {


        //기수별로 정렬
        ManageList = (response.data.sort(function (a, b) {
            return Number(b.manage.substring(0, 1)) - Number(a.manage.substring(0, 1));
        }))

        status = 'fulfilled';

    }).catch((e) => {
        status = 'reject';
        ManageList = e;
    })
    return {
        read() {
            if (status === 'pending') {
                throw suspender;

            } else if (status === 'fulfilled') {

                return ManageList;

            }


        }
    };
};

function fetchManage() {


    return {
        manageData:LoadData()

    };

}

export default fetchManage;