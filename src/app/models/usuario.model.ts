import { Role } from "./role.enum";

export class Usuario {
    id?: number;
    nome?: string;
    senha?: string;
    role?: Role;
    email?: string;
    telefone?: string;
    ativo?: boolean;
}