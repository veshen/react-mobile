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
export async function queryCurrent(id) {
  return request(`/api/CustomUsers/${id}`);
}

// 获取所有角色组
export async function fetchRoleGroups(params){
  return request(`/api/BizGroups?${stringify(params)}`);
}
