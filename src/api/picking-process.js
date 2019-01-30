import fetch from './axios'

export const getAreaList = (param) => {
    return fetch('/warehouse-area/lists', 'get', {data: {...param, status: 1, warehouse_area_type: 11, sort_operator: 1}})
};
export const pickingProcessList = (param) => {
    return fetch('/picking-process' , 'get', {data: param})
};
export const getPickingProcessListDetail = (id, param) => {
    return fetch(`/picking-process/${id}/details`, 'get', param)
}
export const getGoodsSkuInfo = (param) => {
    return fetch('/goods-sku/info', 'get', {data: param})
}
