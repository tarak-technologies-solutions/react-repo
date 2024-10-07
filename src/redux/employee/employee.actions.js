// Creating action for register

import { type } from "@testing-library/user-event/dist/type";


//http://localhost:8888/employees

let employeeRegistration = ( register,history) => {
    return async (dispatch) => {
        try {
            dispatch({type : EMPLOYEE_REGISTER_REQUEST});
        } catch (error) {
            
        }
    }
};
export{employeeRegistration};
