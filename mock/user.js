const Mock = require('mockjs');
const config = require('../src/utils/config');

const { api } = config;

const data = Mock.mock({
  name: '@cname()',
});

module.exports = {
  [`GET ${api.user.query}`](req, res) {
    res.status(200).json({
      status: true,
      message: '操作成功',
      body: data,
    });
  },
};
