import request from '@/utils/request'

// 查询表信息管理列表
export function listTableInfo(query) {
  return request({
    url: '/metadata/tableInfo/list',
    method: 'get',
    params: query
  })
}

// 查询表信息管理详细
export function getTableInfo(id) {
  return request({
    url: '/metadata/tableInfo/' + id,
    method: 'get'
  })
}

// 新增表信息管理
export function addTableInfo(data) {
  return request({
    url: '/metadata/tableInfo',
    method: 'post',
    data: data
  })
}

// 修改表信息管理
export function updateTableInfo(data) {
  return request({
    url: '/metadata/tableInfo',
    method: 'put',
    data: data
  })
}

// 删除表信息管理
export function delTableInfo(id) {
  return request({
    url: '/metadata/tableInfo/' + id,
    method: 'delete'
  })
}

// 导出表信息管理
export function exportTableInfo(query) {
  return request({
    url: '/metadata/tableInfo/export',
    method: 'get',
    params: query
  })
}