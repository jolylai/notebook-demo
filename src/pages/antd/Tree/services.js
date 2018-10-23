import request from "../../../utils/request";

export async function queryTreeNode(params) {
  return request("/api/base/propArchives/tree", {
    method: "POST",
    body: params
  });
}
export async function addTreeNode(params) {
  return request("/api/base/propArchives/tree/add", {
    method: "POST",
    body: params
  });
}

export async function deleteTreeNode(params) {
  return request("/api/base/propArchives/delete", {
    method: "POST",
    body: params
  });
}
