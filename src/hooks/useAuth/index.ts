import { AuthState } from './../../store/reducers/auth/index';
import { useAppSelector } from "../../store/hooks";

interface UseAuth {
    isLoggedIn: boolean;
}

function useAuth(): UseAuth {
    const { isLoggedIn } = useAppSelector((store): AuthState => store.auth)
    return {
        isLoggedIn
    };
}

export default useAuth;