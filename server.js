const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3002;

// 中间件
app.use(cors());
app.use(express.json());

// API配置
const API_KEY = '0a327386-e55a-4ddc-bdbb-0c67d3c75185';
const API_URL = 'https://api.deepseek.com/chat/completions';
const MODEL = 'deepseek-chat';

// 聊天接口
app.post('/api/chat', async (req, res) => {
    try {
        console.log('收到聊天请求:', req.body);

        const response = await axios.post(API_URL, {
            messages: [
                {
                    content: "你是一个专业的AI助手。请用最简短的话回答问题，每个回答控制在50字以内。",
                    role: "system"
                },
                {
                    content: req.body.message,
                    role: "user"
                }
            ],
            model: MODEL,
            frequency_penalty: 0,
            max_tokens: 2048,
            presence_penalty: 0,
            response_format: {
                type: "text"
            },
            stop: null,
            stream: false,
            stream_options: null,
            temperature: 1,
            top_p: 1,
            tools: null,
            tool_choice: "none",
            logprobs: false,
            top_logprobs: null
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        console.log('API响应:', response.data);

        if (response.data && response.data.choices && response.data.choices[0]) {
            res.json({ response: response.data.choices[0].message.content });
        } else {
            throw new Error('API响应格式不正确');
        }
    } catch (error) {
        console.error('处理请求时发生错误:', error.message);
        res.status(500).json({ error: `处理请求时发生错误: ${error.message}` });
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
}); 