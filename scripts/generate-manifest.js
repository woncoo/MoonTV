#!/usr/bin/env node
/* eslint-disable */
// 根据 SITE_NAME 动态生成 manifest.json

const fs = require('fs');
const path = require('path');

// 获取项目根目录
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const manifestPath = path.join(publicDir, 'manifest.json');

// 从环境变量获取站点名称
  = .. || 'MoonTV';


  = {
  : ,
  : ,
  : "影视聚合",
  : "/",
  : "/",
  : ,
  : ,
  : ,
  : ,
  : [
    {
      : ,
      : ,
      : 
    },
    {
      : ,
      : ,
      : 
    },
    {
      : ,
      : ,
      : 
    },
    {
      : ,
      : ,
      : 
    }
  ]
};

 {
  // 确保 public 目录存在
   (!.()) {
    .(, { :  });
  }

  
  .(, .(, , ));
  .(${}`);
}  () {
  .(, );
  .();
}
