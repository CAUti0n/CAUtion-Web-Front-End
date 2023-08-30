import React from "react";
import ManageCard from "./ManageCard";


const ManageList=({manage})=> {
    function ShowManage() {
        let manageList = manage.manageData.read();
        let manageArray = [];

        if (manageList) {
            for (let i = 0; i < manageList.length; i++) {

                manageArray.push(<ManageCard
                    //이미지 없음
                    profImg={manageList[i]["image"]}
                    positions={manageList[i]["manage"]}
                    name={manageList[i]["grade"] + "학번 " + manageList[i]["title"]}
                    gitLink={manageList[i]["githubURL"]}
                    email={manageList[i]["email"]}
                ></ManageCard>);
            }


        }
        return manageArray;

    }

    return(
        <>
            {ShowManage()}
        </>
    )
};

export default ManageList;