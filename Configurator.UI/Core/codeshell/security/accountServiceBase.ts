import { EntityHttpService } from "../http";
import { LoginResult, UserDTO } from "./models";
import { SubmitResult } from "codeshell/helpers";


export abstract class AccountServiceBase extends EntityHttpService {
    Login(model: any): Promise<LoginResult> {
        return this.PostAs<LoginResult>("Login", model);
    }

    GetUserData(): Promise<UserDTO> {
        return this.GetAs<UserDTO>("GetUserData");
    }

    RefreshToken(token: string): Promise<LoginResult> {
        return this.PostAs<LoginResult>("RefreshToken", { token: token });
    }
    
    ChangePassword(dto: any): Promise<SubmitResult> {
        return this.PostAs<SubmitResult>("ChangePassword", dto);
    }
}
