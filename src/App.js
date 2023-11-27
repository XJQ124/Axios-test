import axios from 'axios';
import './App.css';
import React, { useEffect } from 'react';


function App() {
  useEffect(()=>{
    const accessToken = 'u-e6bTKeImZex8F2Hf7A7C63446z30gkN9OMG01hME83cc'
    const keyword = '上海研发中心'; // 替换为你的搜索关键词

    const apiUrl = '/open-apis/contact/v3/departments/search?page_size=20';

    // 构建请求头
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };

    // 构建请求体
    const requestBody = {
      query: keyword,
    };

    // 发送 POST 请求
    axios.post(apiUrl, requestBody, { headers })
      .then(response => {
        // 使用条件判断确保 response 和 response.data 不为空
        if (response && response.data) {
          console.log('Search Results:', response.data.data);
        } else {
          console.error('Error: Invalid response format');
        }
      })
      .catch(error => {
        // 错误处理
        console.error('Error:', error.response ? error.response.data : error.message);
      });
  }, []);

  return (
    <>
    <div>
      这是axios的test
    </div>
    </>
  )
}

export default App;
