package com.aivle.book_management.controller;

import com.aivle.book_management.dto.BookDto;
import com.aivle.book_management.entity.Book;
import com.aivle.book_management.mapper.BookMapper;
import com.aivle.book_management.service.BookService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(BookController.class)
class BookControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookService bookService;

    @MockBean
    private BookMapper bookMapper;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void createBook_returnsCreatedBook() throws Exception {
        BookDto.Post request = new BookDto.Post("제목", "내용");
        Book book = new Book(null, "제목", "내용", null, null, null);
        Book savedBook = new Book(1L, "제목", "내용", LocalDateTime.now(), LocalDateTime.now(), null);
        BookDto.Response response = new BookDto.Response(1L, "제목", "내용", savedBook.getCreatedAt(), savedBook.getUpdatedAt(), null);

        Mockito.when(bookMapper.PostDTOtoEntity(any())).thenReturn(book);
        Mockito.when(bookService.createBook(any())).thenReturn(savedBook);
        Mockito.when(bookMapper.toResponse(any())).thenReturn(response);

        mockMvc.perform(post("/books")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.status").value("success"))
                .andExpect(jsonPath("$.data.id").value(1));
    }

    @Test
    void getBookById_returnsBook() throws Exception {
        Book book = new Book(1L, "제목", "내용", LocalDateTime.now(), LocalDateTime.now(), null);
        BookDto.Response response = new BookDto.Response(1L, "제목", "내용", book.getCreatedAt(), book.getUpdatedAt(), null);

        Mockito.when(bookService.getBookById(1L)).thenReturn(Optional.of(book));
        Mockito.when(bookMapper.toResponse(book)).thenReturn(response);

        mockMvc.perform(get("/books/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("success"))
                .andExpect(jsonPath("$.data.id").value(1));
    }

    @Test
    void getAllBooks_returnsList() throws Exception {
        Book book = new Book(1L, "제목", "내용", LocalDateTime.now(), LocalDateTime.now(), null);
        BookDto.Response response = new BookDto.Response(1L, "제목", "내용", book.getCreatedAt(), book.getUpdatedAt(), null);

        Mockito.when(bookService.getAllBooks()).thenReturn(List.of(book));
        Mockito.when(bookMapper.toResponseList(List.of(book))).thenReturn(List.of(response));

        mockMvc.perform(get("/books"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("success"))
                .andExpect(jsonPath("$.data[0].id").value(1));
    }

    @Test
    void updateBook_returnsUpdatedBook() throws Exception {
        Long bookId = 1L;
        BookDto.Patch patchRequest = new BookDto.Patch("수정된 제목", "수정된 내용");

        Book existingBook = new Book(bookId, "기존 제목", "기존 내용", LocalDateTime.now(), LocalDateTime.now(), null);
        Book updatedBook = new Book(bookId, "수정된 제목", "수정된 내용", existingBook.getCreatedAt(), LocalDateTime.now(), null);
        BookDto.Response response = new BookDto.Response(bookId, "수정된 제목", "수정된 내용", updatedBook.getCreatedAt(), updatedBook.getUpdatedAt(), null);

        Mockito.when(bookService.getBookById(bookId)).thenReturn(Optional.of(existingBook));
        Mockito.when(bookService.updateBook(bookId, existingBook)).thenReturn(updatedBook);
        Mockito.when(bookMapper.toResponse(updatedBook)).thenReturn(response);

        mockMvc.perform(patch("/books/{id}", bookId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(patchRequest)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("success"))
                .andExpect(jsonPath("$.data.id").value(1))
                .andExpect(jsonPath("$.data.title").value("수정된 제목"))
                .andExpect(jsonPath("$.data.content").value("수정된 내용"));
    }


    @Test
    void deleteBook_returnsSuccessMessage() throws Exception {
        mockMvc.perform(delete("/books/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("success"))
                .andExpect(jsonPath("$.message").value("도서가 삭제되었습니다."));
    }

}
