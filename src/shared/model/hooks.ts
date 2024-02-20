import { useSelector, useDispatch, type TypedUseSelectorHook } from 'react-redux';
import { type AppDispatch, type RootState } from '@/app/appStore';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
