import { Role } from "../../models/role";

export interface UserResponse{
    id: number,
    fullname: string,
    address: string,
    is_active: boolean,
    data_of_birth: Date,
    facebook_account_id: number,
    google_account_id: number,
    role: Role;
}