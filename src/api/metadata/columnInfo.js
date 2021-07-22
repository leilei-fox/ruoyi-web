import request from '@/utils/request'

// 查询字段信息列表
export function listColumnInfo(query) {
  return request({
    url: '/metadata/columnInfo/list',
    method: 'get',
    params: query
  })
}

// 查询字段信息详细
export function getColumnInfo(id) {
  return request({
    url: '/metadata/columnInfo/' + id,
    method: 'get'
  })
}

// 新增字段信息
export function addColumnInfo(data) {
  return request({
    url: '/metadata/columnInfo',
    method: 'post',
    data: data
  })
}

// 修改字段信息
export function updateColumnInfo(data) {
  return request({
    url: '/metadata/columnInfo',
    method: 'put',
    data: data
  })
}

// 删除字段信息
export function delColumnInfo(id) {
  return request({
    url: '/metadata/columnInfo/' + id,
    method: 'delete'
  })
}

// 导出字段信息
export function exportColumnInfo(query) {
  return request({
    url: '/metadata/columnInfo/export',
    method: 'get',
    params: query
  })
}