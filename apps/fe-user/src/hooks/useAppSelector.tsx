import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "@fe-user/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
