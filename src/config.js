// 开发环境用本地，生产环境用同域 /api（走 Nginx 反向代理，无需开 9000 端口）
export const API_BASE =
  import.meta.env.PROD ? '/api' : 'http://localhost:9000';
