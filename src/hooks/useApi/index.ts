import { RootState } from './../../store/index';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './../../store/hooks/index';
import { AsyncThunk } from "@reduxjs/toolkit";

interface IUseAPi {
    apiFn: AsyncThunk<any, any, any>,
    selector: (store: RootState) => void
}

interface UseApi {
    data: any
}

function useApi({ apiFn, selector }: IUseAPi): UseApi {

    const dispatch = useAppDispatch()
    const selectedValue = useAppSelector((store): void => selector(store))

    useEffect((): void => {
        // @ts-ignore there's somewhere a type mismatch
        dispatch(apiFn())
    }, [])

    return {
        data: selectedValue
    }
}

export default useApi;