// diff, patching
import {render} from 'react-dom';
import React from 'react';

import {Provider} from "react-redux";
import store from "./app/store"
import Routes from './app/Routes';
// render (virtual dom, real dom)

render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));