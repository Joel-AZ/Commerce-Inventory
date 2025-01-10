import { BaseModel } from './Base.model'

export enum UserRoles {
    ADMIN = 'ADMIN',
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
}

export interface Users extends BaseModel {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    password: string;
    role: UserRoles;
    status: UserStatus;
}

export interface UserDto {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: UserRoles
    status?: UserStatus
}
