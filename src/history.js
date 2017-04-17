import {useRouterHistory} from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = useRouterHistory(createHistory)();

export default history;
