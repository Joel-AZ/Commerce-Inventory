import { BaseModel } from './Base.model'

export enum UserRoles {
	ADMIN = 'ADMIN',
	OWNER = 'OWNER',
	EMPLOYEE = 'EMPLOYEE',
	COLLABORATOR = 'COLLABORATOR',
}

export enum UserStatus {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
	PENDING = 'PENDING',
	DEACTIVATED = 'DEACTIVATED',
}

export interface Users extends BaseModel {
    firstName: string;
    lastName: string;
		fullName: string;
		birthday: string;
		dni: number;
    email: string;
    password: string;
    role: UserRoles;
    status: UserStatus;
		// company: Company
}

export interface UserDto {
    firstName: string
    lastName: string
		dni: number | null;
		birthday?: Date
    email: string
    password: string
		phoneNumber?: string
    role?: UserRoles
    status?: UserStatus
}
