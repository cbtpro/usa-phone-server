// Copyright 2023 Peter Chen
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const Mock = require('mockjs');

const Random = Mock.Random;

// 使用mockjs模拟数据
const moreList: IMockData[] = [];
for (let i = 0; i < 100; i++) {
  const newObject = {
    mtime: Random.datetime(), // 随机生成日期时间
    score: Random.natural(1, 800), // 随机生成1-800的数字
    rank: Random.natural(1, 100), // 随机生成1-100的数字
    stars: Random.natural(0, 5), // 随机生成1-5的数字
    nickname: Random.cname(), // 随机生成中文名字
  };
  moreList.push(newObject);
}
// 用于接受生成数据的数组
const tableList: IMockUser[] = [];
for (let i = 0; i < 35; i++) {
  const newObject = {
    title: Random.csentence(5, 10), //  Random.csentence( min, max )
    name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
    url: Random.url(), // 生成web地址
    date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
  };
  tableList.push(newObject);
}

export { tableList };
