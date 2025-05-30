import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:', // 백엔드 주소에 맞게 수정 필요
  timeout: 5000,
});

// 1. 도서 목록 조회
export const fetchBooks = async (title = "") => {
  try {
    const response = await api.get('/books', {
      params: { title },
    });
    return response.data;
  } catch (error) {
    console.error('fetchBooks error:', error);
    throw error;
  }
};

// 2. 도서 상세 조회
export const fetchBookById = async (id) => {
  try {
    const response = await api.get(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('fetchBookById error:', error);
    throw error;
  }
};

// 3. 신규 도서 등록
export const createBook = async (bookData) => {
  try {
    const response = await api.post('/books', bookData);
    return response.data;
  } catch (error) {
    console.error('createBook error:', error);
    throw error;
  }
};

// 4. 등록 도서 수정정
export const updateBook = async (id, bookData) => {
  try {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  } catch (error) {
    console.error('updateBook error:', error);
    throw error;
  }
};

// 5. 도서 삭제
export const deleteBook = async (id) => {
  try {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error('deleteBook error:', error);
    throw error;
  }
};
