import store from './store';

const permissions = {
    doSomething: [
        'ADMIN'
    ]
}

const canUser = (param = 'doSomething') => {
    const { global: globalStore } = store.getState();
    const { roles } = globalStore.user;
    
    if(!roles) {
        return false;
    }

    const hasPermission = roles.some(item => permissions[param].some(permItem => permItem == item))
    return hasPermission;
}

export default canUser;