import fetch from './axios'

export const getAreaList = (param) => {
    return fetch('/warehouse-area/lists', 'get', {data: {...param, status: 1, warehouse_area_type: 11, sort_operator: 1}})
};
