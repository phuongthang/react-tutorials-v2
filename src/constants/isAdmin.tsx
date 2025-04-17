import { jwtDecode, JwtPayload } from "jwt-decode"; // ✅ Đúng


interface UserData {
    createdAt: string;
    dob: string;
    email: string;
    fullName: string;
    gender: string;
    isDelete: number;
    phoneNumber: string;
    role: number;
    updatedAt: string;
    userName: string;
    __v: number;
    _id: string;
  }
  
  interface DecodedToken extends JwtPayload {
    data: UserData;
  }
  
const isAdmin = () => {
    const token = localStorage.getItem("accessToken");
    if (token){
        const decoded = jwtDecode<DecodedToken>(token);
        const role = decoded.data.role;
        if(role == 1 ){
            return true;
        } else{
            return false;
        }
        
    }
}

export default isAdmin ;