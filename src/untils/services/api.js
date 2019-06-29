import { stringify } from 'qs';
import request from '../utils/request';

// ## 薪酬

// 登陆
export async function fetchLogin(params){
  return request(`/api/CustomUsers/login`,{
    method: 'POST',
    body: params,
  });
}

// 退出
export async function fetchLogout(){
  return request(`/api/CustomUsers/logout`,{
    method: 'POST',
  });
}

// 获取用户权限
export async function fetchRole(){
  return request(`/api/BizGrouppings/getUserRole`);
}

export async function queryCurrent(id) {
  return request(`/api/CustomUsers/${id}`);
}

// 获取所有角色组
export async function fetchRoleGroups(params){
  return request(`/api/BizGroups?${stringify(params)}`);
}
export async function fetchRoleGroupsById({id,...params}){
  return request(`/api/BizGroups/${id}?${stringify(params)}`);
}
// 创建用户
export async function creatUser(params) {
  return request('/api/CustomUsers', {
    method: 'POST',
    body:params,
  });
}
// 创建用户给加权限组
export async function updateUserAuthorization(params) {
  return request('/api/BizGrouppings/updateUserRole', {
    method: 'PATCH',
    body: params,
  });
}
// 获取用户列表
export async function queryUsersList() {
  return request(`/api/CustomUsers`);
}

// 获取用户信息
export async function queryUserInfo(params) {
  return request(`/api/CustomUsers/${params.id}`);
}
// 获取用户权限组信息
export async function queryUserAuth(params) {
  return request(`/api/BizGrouppings/systemGetUserRole/${params.id}`);
}
// 更新用户信息
export async function updateUserInfo({id,...params}) {
  return request(`/api/CustomUsers/${id}`, {
    method: 'PATCH',
    body: params,
  });
}

// 更新用户信息
export async function deleteUser({id,...params}) {
  return request(`/api/CustomUsers/${id}`, {
    method: 'DELETE',
    body: params,
  });
}
// 角色
// 所有权限 安全组
export async function querySysRoles() {
  return request(`/api/BizGroups/getAllRoles`);
}
// 所有权限 安全组 tab
export async function querySysRolesType() {
  return request(`/api/BizGroups/getAllRoleTypes`);
}
// 删除安全组
export async function deleteRoles(params) {
  return request(`/api/BizGroups/deleteSystemRole`,{
    method: 'DELETE',
    body: params,
  });
}
// 删除安全组里用户
export async function deleteSysRolesUsers(params) {
  return request(`/api/BizGroups/bizGroupDeleteUser`,{
    method: 'PATCH',
    body: params,
  });
}
// 给安全组李里添加用户 {"users":[7,8],"bizGroupId":8}
export async function addSysRolesUsers(params) {
  return request(`/api/BizGroups/bizGroupAddToUser`,{
    method: 'PATCH',
    body: params,
  });
}

/**
 * 创建参数
 * roleName：‘’
 * roleData: [1,1]
 *
 */
export default async function createSysRoles(params) {
  return request(`/api/BizGroups/createSystemRole`, {
    method: 'POST',
    body: params,
  });
}

export async function updateSysRoles(params) {
  return request(`/api/BizGroups/systemRoleUpdate`, {
    method: 'PATCH',
    body: params,
  });
}
// 修改用户密码
export async function updateUserPassword(params) {
  return request(`/api/CustomUsers/change-password`, {
    method: 'POST',
    body: params,
  });
}
// wijmo
export async function queryGrid(params){

  return request(`/api/Grids/${params.id}`);
}

// wijmo
// 修改用户密码
export async function updateGirdCell(params) {
  return request(`/api/Grids/${params.id}/Cells`, {
    method: 'PUT',
    body: params,
  });
}

// 方案 solution
// 所有方案列表
export async function getSolutions({filter}){
  return request(`/api/solutions?filter=${JSON.stringify(filter)}`);
}
// 当前方案列表
export async function getSolutionData({id,...params}){
  return request(`/api/solutions/${id}`);
}
// 创建方案列表
export async function createSolutions(params){
  return request(`/api/solutions`,{
    method: 'POST',
    body: params,
  });
}

// 更新方案列表
export async function updateSolutions({id,...params}){
  return request(`/api/solutions/${id}`,{
    method: 'PATCH',
    body: params,
  });
}
// 重命名方案
export async function renameSolution({id,...params}){
  return request(`/api/solutions/${id}/rename`,{
    method: 'PATCH',
    body: params,
  });
}

// 更新方案列表
export async function deleteSolutions({id}){
  return request(`/api/solutions/${id}`,{
    method: 'DELETE',
  });
}

// 全局表列表
export async function getGlobalTables(){
  return request(`/api/global_tables`);
}
// 全局表列表
export async function setGlobalTablesMove(params){
  return request(`/api/global_tables/move`,{
    method:'POST',
    body: params,
  });
}

// 创建步骤
export async function createSolutionStep({id, ...params}){
  return request(`/api/solutions/${id}/step`,{
    method: 'POST',
    body: params,
  });
}

//  删除步骤
export async function deleteSolutionListById({id, fk}){
  return request(`/api/steps/${fk}`,{
    method: 'DELETE',
  });
}

// 修改步骤名称
export async function updateSolutionListById({id, fk, ...params}) {
  return request(`/api/steps/${fk}/rename`, {
    method: 'PATCH',
    body: params,
  });
}

// 获取所有步骤
const filter = {
  include: {
      relation: 'step',
      scope: {
          include: {
              relation: 'table',
          },
      },
  },
};

const filter1 = {
  include: 'step',
};

// 获取所有的数据
// GET /solutions/{id}/step 见印象笔记
export async function fetchSolutionListById({id}){
  return request(`/api/solutions/${id}/step`);
}

// 获取全局表(创建快照表时需要用的列表)
export async function fetchSolutionGroupTable(params){
  return request(`/api/global_tables/get_all?${stringify(params)}`);
}

// 获取数据表
export async function fetchSolutionDataTable(params){
  return request(`/api/tables/snapshot_tables_getAll?${stringify(params)}`);
}

// 创建块照表
export async function createSolutionSnapshotTable(params){
  return request(`/api/tables/snapshot_tables`,{
    method: 'POST',
    body: params,
  });
}

// 创建数据表
export async function createSolutionDataTable(params){
  return request(`/api/tables/add_data_table`,{
    method: 'POST',
    body: params,
  });
}

// 创建参数表
export async function createSolutionParameterTable(params){
  return request(`/api/tables/add_param_table`,{
    method: 'POST',
    body: params,
  });
}

// 删除表
export async function delSolutionTable({id}) {
  return request(`/api/tables/${id}`, {
    method: 'DELETE',
  });
}

// 拖动步骤
export async function dragSolutionStep({id, ...params}){
  return request(`/api/steps/${id}/move_table`,{
    method: 'POST',
    body: params,
  });
}


// 获取方案期间
export async function getPeriod({id}){
  const filterp = {
    order: 'period_start_date ASC',
  };
  return request(`/api/solutions/${id}/period?filter=${JSON.stringify(filterp)}`);
}

// 创建方案期间
export async function createPeriod(params){
  return request(`/api/periods`,{
    method: 'POST',
    body: params,
  });
}
// 编辑方案期间
export async function updatePeriod({id,...params}){
  return request(`/api/periods/${id}/update`,{
    method: 'PUT',// 此方法lb没有patch方法
    body: params,
  });
}
// 开启期间
export async function startPeriod({id}){
  return request(`/api/periods/${id}/start`);
}
// 关闭期间
export async function closePeriod({id}){
  return request(`/api/periods/${id}/close`);
}
// 撤回期间
export async function revokePeriod({id}){
  return request(`/api/periods/${id}/revoke`);
}



// 获取方案期间批次
export async function getPeriodBatch({solution_id,period_id,...params}){
  return request(`/api/periods/${period_id}/batch`);
}

// 创建方案期间批次
export async function createPeriodBatch({solution_id,period_id,...params}){
  return request(`/api/batches`,{
    method: 'POST',
    body: {
      solution_id,
      period_id,
    },
  });
}
// 编辑方案期间批次
export async function updatePeriodBatch({period_id,id,...params}){
  return request(`/api/periods/${period_id}/batch/${id}`,{
    method: 'PUT',// 此方法lb没有patch方法
    body: {
      ...params,
    },
  });
}
// 获取方案下批次
export async function getSolutionsAllBatch({id}){
  const filter = {
    "include": {
      "relation": "period",
    },
  };
  return request(`/api/solutions/${id}/batch?filter=${JSON.stringify(filter)}`);
}


// 获取批次数据
export async function getSolutionsBatch({solution_id , batch_id}){
  const filter = {
    "where": {
      "id": batch_id,
    },
    "include": {
      "relation": "step",
    },
  };
  return request(`/api/solutions/${solution_id}/batch?filter=${JSON.stringify(filter)}`);
}

// 获取批次下面的表
export async function getBatchTables({id}){
  return request(`/api/batches/${id}/table`);
}
// 获取方案下面的表
export async function getSolutionTables({id}){
  return request(`/api/solutions/${id}/table`);
}

// 获取表结构
export async function getTableStructure({id}){
  return request(`/api/tables/${id}`);
}
// 更新表视图结构
export async function addTableView({table_id,array}){
  return request(`/api/tables/${table_id}/update_report_views`,{
    method:'POST',
    body:[...array],
  });
}
// 添加表添加数据  type=recover,update,update_and_create
export async function tableRowsAdd({id,data}){
  return request(`/api/tables/${id}/table_row/add`,{
    method:'POST',
    body:data,
  });
}
// 获取表添加数据
export async function getTableRowsUpdate({id,data}){
  return request(`/api/tables/${id}/table_row/update`,{
    method:'POST',
    body:data,//[{id,row}]
  });
}
// 更新行数据
export async function getTableRows({id,data}){
    let filter = {
      "order" : "index ASC"
    };
  return request(`/api/tables/${id}/table_row?filter=${JSON.stringify(filter)}`);
}
// 删除表行数据
export async function tableRowsDelete({id,row_id}){
  return request(`/api/tables/${id}/table_row/${row_id}`,{
    method:'DELETE',
  });
}
// 添加表字段
export async function addTableColumns({table_id,...params}){
  return request(`/api/tables/${table_id}/column`,{
    method:'POST',
    body:params,
  });
}
// 导入多表 创建多sheet
export async function importSheet(data){
  return request(`/api/tables/import_sheet`,{
    method:'POST',
    body:data,
  });
}
// 导入多表 更新多sheet
export async function updateSheet(data){
  return request(`/api/tables/update_sheet`,{
    method:'POST',
    body:data,
  });
}
// 添加表字段多个
export async function addTableColumnsMultipy({id,data}){
  return request(`/api/tables/${id}/column/multiply_add`,{
    method:'POST',
    body:data,
  });
}
// 移动表字段
export async function tableColumnsMove({id,code,...data}){
  return request(`/api/tables/${id}/column/${code}/move`,{
    method:'POST',
    body:data,
  });
}
// 删除表字段
export async function tableColumnsDelete({id,code,...data}){
  return request(`/api/tables/${id}/column/${code}`,{
    method:'DELETE',
  });
}

// 更新表视图结构
export async function updateTableColumns(params){
  return request(`/api/tables/${params.table_id}/column/${params.code}/update`,{
    method:'POST',
    body:params,
  });
}

/**
 * 触发计算
 * @param {*} param0
 * CAL_TABLE_ROW_ADD = "table_row_add"
CAL_TABLE_ROW_UPDATE = "table_row_update"
CAL_TABLE_ROW_DEL = "table_row_del"
CAL_TABLE_COLUMN_ADD = "table_column_add"
CAL_TABLE_COLUMN_UPDATE = "table_column_update"
 */
export async function recalculateData({table_id,data}){
  return request(`/api/calculations/recalculate/${table_id}`,{
    method:'POST',
    body:data,
  });
}

// 获取批次详情
export async function getBatchDetail({id}){
  return request(`/api/batches/${id}`);
}

// 获取参数
export async function getBatchParameter({id}){
  return request(`/api/batches/${id}/get_parameter`);
}

// 计算
export async function getBatchCalculate({id}){
  return request(`/api/batches/${id}/calculate`);
}

// 返回新建
export async function getBatchReturnToCreate({id}){
  return request(`/api/batches/${id}/return_to_create`);
}

// 取消批次
export async function getBatchCancel({id}){
  return request(`/api/batches/${id}/cancel`);
}

// 返回计算前
export async function getBatchReturnToBeforeCalculate({id}){
  return request(`/api/batches/${id}/return_to_before_calculate`);
}

// 提交审核
export async function getBatchSubmitForApproval({id}){
  return request(`/api/batches/${id}/submit_for_approval`);
}

// 审核通过
export async function getBatchApproved({id}){
  return request(`/api/batches/${id}/approved`);
}

// 关闭批次
export async function getBatchClose({id}){
  return request(`/api/batches/${id}/close`);
}


// 删除批次
export async function delBatch({id}){
  return request(`/api/batches/${id}`,{
    method: 'DELETE',
  });
}


// 获取表依赖关系
export async function getTableDependency({id, type}){
  if(type == 'batch_id') {
    return request(`/api/batches/${id}/table_dependency`);
  } else {
    return request(`/api/solutions/${id}/table_dependency`);
  }
}

// 获取项依赖关系
export async function getItemDependency({id, type}){
  if(type == 'batch_id') {
    return request(`/api/batches/${id}/item_dependency`);
  } else {
    return request(`/api/solutions/${id}/item_dependency`);
  }
}

// 工作日历列表
export async function getWorkCalendars(){
  return request(`/api/work_calendars`);
}
// 新建日历
export async function createWorkCalendar(data){
  return request(`/api/work_calendars`,{
    method:'POST',
    body:data,
  });
}
// 更新日历
export async function updateWorkCalendar({id,...data}){
  return request(`/api/work_calendars/${id}`,{
    method:'PUT',
    body:data,
  });
}
// 删除日历
export async function deleteWorkCalendar({id}){
  return request(`/api/work_calendars/${id}`,{
    method:'DELETE',
  });
}
// 查询当前日历
export async function getCurrentWorkCalendar({id}){
  let filter = {
    "include": {
      "relation": "work_calendar_date",
    },
  };
  return request(`/api/work_calendars/${id}?filter=${JSON.stringify(filter)}`);
}
// 新增日历日期
export async function addWorkCalendarDate({id,...data}){
  return request(`/api/work_calendar_dates`,{
    method:'POST',
    body:data,
  });
}
// 更新日历日期
export async function updateWorkCalendarDate(data){
  return request(`/api/work_calendar_dates/${data.id}`,{
    method:'PUT',
    body:data,
  });
}
// 删除日历日期
export async function deleteWorkCalendarDate({id}){
  return request(`/api/work_calendar_dates/${id}`,{
    method:'DELETE',
  });
}

// 获取计算公式环境变量
export async function getEnvironments(){
  return request(`/api/environments`);
}
// 获取薪资函数
export async function getPayrollFunctions(){
  return request(`/api/payroll_functions`);
}


// 方案试算
export async function calculationSolution({id}){
  return request(`/api/calculations/solution/${id}`, {
    method:'POST',
  });
}

// 获取事情历史
export async function getEventHistories(params) {
  return request(`/api/event_histories?${stringify(params)}`);
};


// 获取所有用户组
export async function getBizGroups(){
  return request(`/api/BizGroups`);
}

// 获取可操作的用户组
export async function getTablesGroupResource({id}){
  return request(`/api/tables/${id}/group_resource`);
}

// 设置表权限
export async function addTablesResource({id,...data}){
  return request(`/api/tables/${id}/resource`, {
    method:'POST',
    body: data,
  });
}

// 更新用户权限
export async function updateTablesPermissionGroups(params) {
  return request('/api/tables/update_resource', {
    method: 'PATCH',
    body: params,
  });
}

// 删除用户组
export async function deleteTablesResource({id}) {
  return request(`/api/tables/resource/${id}`,{
    method:'DELETE',
  });
};


// batch下权限操作
// 获取可操作的用户组
export async function getBatchGroupResource({id, batch_id}){
  return request(`/api/tables/${id}/group_batch_resource?batch_id=${batch_id}`);
}

// 设置表权限
export async function addBatchResource({id,...data}){
  return request(`/api/tables/${id}/batch_resource`, {
    method:'POST',
    body: data,
  });
}

// 更新用户权限
export async function updateBatchPermissionGroups(params) {
  return request('/api/tables/update_batch_resource', {
    method: 'PATCH',
    body: params,
  });
}

// 删除用户组
export async function deleteBatchResource({id}) {
  return request(`/api/tables/batch_resource/${id}`,{
    method:'DELETE',
  });
};

// 获取可操作的用户组
export async function getSolutionsGroupResource({id}){
  return request(`/api/solutions/${id}/group_resource`);
}

// 设置表权限
export async function addSolutionsResource({id,...data}){
  return request(`/api/solutions/${id}/resource`, {
    method:'POST',
    body: data,
  });
}

// 删除用户组
export async function delSolutionsResource({id}) {
  return request(`/api/solutions/resource/${id}`,{
    method:'DELETE',
  });
};

// 清除列数据接口
export async function clearColumnData({table_id,column_code}){
  return request(`/api/tables/${table_id}/columns/${column_code}/clear_data`, {
    method:'DELETE',
  });
}
// 一键清空表数据
export async function clearTableData({table_id}){
  return request(`/api/tables/${table_id}/clear_data`, {
    method:'DELETE',
  });
}
