package com.aivle.book_management.service;

import com.aivle.book_management.entity.Book;
import com.aivle.book_management.repository.BookRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Optional;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

class BookServiceTest {

    private BookRepository bookRepository;
    private BookService bookService;

    @BeforeEach
    void setUp() {
        bookRepository = mock(BookRepository.class);
        bookService = new BookService(bookRepository);
    }

    @Test
    void testCreateBook() {
        Book book = Book.builder().title("제목").content("내용").build();

        when(bookRepository.save(book)).thenReturn(book);

        Book saved = bookService.createBook(book);

        assertEquals("제목", saved.getTitle());
        verify(bookRepository).save(book);
    }

    @Test
    void testGetAllBooks() {
        List<Book> mockBooks = Arrays.asList(
                Book.builder().title("책1").build(),
                Book.builder().title("책2").build()
        );

        when(bookRepository.findAll()).thenReturn(mockBooks);

        List<Book> books = bookService.getAllBooks();

        assertEquals(2, books.size());
        verify(bookRepository).findAll();
    }

    @Test
    void testGetBookById_Found() {
        Book book = Book.builder().id(1L).title("책").build();

        when(bookRepository.findById(1L)).thenReturn(Optional.of(book));

        Optional<Book> result = bookService.getBookById(1L);

        assertTrue(result.isPresent());
        assertEquals("책", result.get().getTitle());
    }

    @Test
    void testGetBookById_NotFound() {
        when(bookRepository.findById(2L)).thenReturn(Optional.empty());

        Optional<Book> result = bookService.getBookById(2L);

        assertFalse(result.isPresent());
    }

    @Test
    void testUpdateBook_Found() {
        Book existing = Book.builder().id(1L).title("Old").content("Old Content").build();
        Book update = Book.builder().title("New").content("New Content").coverImageUrl("url").build();

        when(bookRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(bookRepository.save(any(Book.class))).thenReturn(existing);

        Book updated = bookService.updateBook(1L, update);

        assertEquals("New", updated.getTitle());
        assertEquals("New Content", updated.getContent());
        verify(bookRepository).save(existing);
    }

    @Test
    void testUpdateBook_NotFound() {
        Book update = Book.builder().title("New").content("New Content").build();

        when(bookRepository.findById(99L)).thenReturn(Optional.empty());

        Exception exception = assertThrows(IllegalArgumentException.class, () -> {
            bookService.updateBook(99L, update);
        });

        assertEquals("도서를 찾을 수 없습니다.", exception.getMessage());
    }

    @Test
    void testDeleteBook() {
        Long id = 1L;

        // deleteById는 void지만 호출되었는지 확인 가능
        bookService.deleteBook(id);

        verify(bookRepository).deleteById(id);
    }
}
