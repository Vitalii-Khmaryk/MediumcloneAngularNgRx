import { AuthStateInterface } from "src/app/auth/types/authState.interface";
import { FeedStateInterface } from "../modules/feed/types/feedState.interface";

export interface AppStateInteface{
    auth:AuthStateInterface
    feed:FeedStateInterface
}