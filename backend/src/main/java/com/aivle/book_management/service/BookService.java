package com.aivle.book_management.service;

import com.aivle.book_management.entity.Book;
import com.aivle.book_management.repository.BookRepository;
import java.util.stream.IntStream;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Long id) {
        return bookRepository.findById(id);
    }

    public Book updateBook(Long id, Book updatedBook) {
        return bookRepository.findById(id)
                .map(book -> {
                    book.setTitle(updatedBook.getTitle());
                    book.setContent(updatedBook.getContent());
                    book.setCoverImageUrl(updatedBook.getCoverImageUrl());
                    return bookRepository.save(book);
                })
                .orElseThrow(() -> new IllegalArgumentException("도서를 찾을 수 없습니다."));
    }

    public void deleteBook(Long id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("도서를 찾을 수 없습니다."));
        bookRepository.delete(book);
    }

    public void insertSampleBooks() {
        List<Book> books = IntStream.rangeClosed(1, 10)
                .mapToObj(i -> Book.builder()
                        .title("예시 책 " + i)
                        .content("내용 " + i)
                        .coverImageUrl("")
                        .build())
                .toList();

        bookRepository.saveAll(books);
    }

    public void deleteAllBooks() {
        bookRepository.deleteAll();
    }
}