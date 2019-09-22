import { createContext } from 'react';
import { AppService } from './service/app.service';

export const defaultContext = {
    uniwards: new AppService()
};

export const AppContext = createContext(defaultContext);
