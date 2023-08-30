
import axios from "axios";


const LoadData = () => {
    let status = "pending";
    let studyList = null;

    const suspender = axios({
        url: "http://localhost:8080/study",
        method: "get",
    }).then((response) => {


            //날짜 내림차순으로 정렬하고 studyList에  response 넣기

            studyList = (response.data.sort(function (a, b) {
                return new Date(b.startDate) - new Date(a.startDate);
            }))

            status = 'fulfilled';

    }).catch((e) => {
        status = 'reject';
        studyList = e;
    })
    return {
        read() {
            if (status === 'pending') {
                throw suspender;

            } else if (status === 'fulfilled') {

                return studyList;

            }


        }
    }
};


function fetchStudy() {


    return {
      studyData:LoadData()

    };

}

export default fetchStudy;