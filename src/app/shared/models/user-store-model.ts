import { UserGitHub } from "..";

export interface UserStoreModel {
    userNames: string[],
    users: UserGitHub[],
    chart: Array<Array<string | number>>,
    user: UserGitHub | undefined,
}